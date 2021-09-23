let gulp = require('gulp');
let watch = require('gulp-watch');
let del = require('del');
let fs = require('fs');
let ts = require('typescript');
let concat = require('gulp-concat');
let through = require('through2');
let terser = require('terser');

let tmplFolder = 'tmpl'; //template folder
let srcFolder = 'src'; //source folder
let buildFolder = 'build';

let minify = options => {
  return through.obj(async function (chunk, enc, callback) {
    if (chunk.isBuffer()) {
      let code = chunk.contents.toString('utf8');
      let output = await terser.minify(code, options);
      if (output.error) {
        throw output.error;
      }
      chunk.contents = Buffer.from(output.code);
      this.push(chunk);
      return callback();
    }
  });
};

let combineTool = require('@csx/magix-composer');
let removeESModuleReg =
  /"use strict";\s*Object\.defineProperty\(exports,\s*"__esModule",\s*\{\s*value:\s*true\s*\}\);?/g;

let exportsReg = /\bexports\.default\s*=/g;
let removeMiddleDefault = /(_\d+)\.default/g;
let constReg = /\bconst\s+/g;
//清理编译后的代码，减少文件体积
let cleanCode = code => {
  return code
    .replace(removeESModuleReg, '')
    .replace(exportsReg, 'module.exports=')
    .replace(removeMiddleDefault, '$1')
    .replace(constReg, 'let ');
};
combineTool.config({
  //打包工具配置
  debug: true, //开发时设置debug为true,方便输出更多的log日志。发布时设置为false
  tmplRadioOrCheckboxRename: false, //禁止工具重写radio的name
  commonFolder: tmplFolder, //开发目录，即原始代码，需要编译转换的文件目录
  compiledFolder: srcFolder, //编译后的目录，即代码编译后，存放在哪个目录里
  projectName: 'rd', //项目名称，用于样式前缀、内部id规则生成等
  loaderType: 'cmd_es', //加载器类型，或转换成amd iife等
  tmplSupportSlotFn: false, //关闭部分功能以生成更少的编译代码
  tmplSupportSlot: false, //
  uniqueStart: Math.floor(Math.random() * 1200), //随机起始数字，每次编译的代码不同，防止反编译
  galleries: {
    //组件的配置
    mxRoot: 'gallery/',
    mxMap: {
      'mx-number': {
        _class: ' input pr',
      },
    },
  },
  checker: {
    //代码检测
    /**
     * 模板中class的代码检测
     * @param {string} selector 模板中使用到的样式选择器
     */
    tmplClassCheck(selector) {
      return selector && !selector.startsWith('el-') && !selector.startsWith('ant-');
    },
  },
  scopedCss: [
    //全局样式，因为要嵌入到其它页面里以及开发的方便，所有的样式均要编译，通过该方案即能在项目中方便的使用全局样式，也能保证所有的样式被编译，不与其它页面中的样式冲突
    './tmpl/assets/_vars.less',
    './tmpl/assets/index.less',
  ],
  compileJSStart(content) {
    //对代码转换的钩子，这里使用typescript进行代码转换，也可以换成babel等转换器
    let str = ts.transpileModule(content, {
      compilerOptions: {
        lib: ['es7'],
        target: 'es2018',
        module: ts.ModuleKind.None,
      },
    });
    str = str.outputText;
    str = cleanCode(str);
    return str;
  },
  progress({ completed, file, total }) {
    //编译进度条，这里在命令行输出当前编译到的文件和相关进度
    console.log(file, completed + '/' + total);
  },
  resolveRequire(reqInfo) {
    if (reqInfo.mId == 'magix') {
      reqInfo.mId = 'magix5';
    }
  },
});
//清除src目录
gulp.task('cleanSrc', () => del(srcFolder));

/*
    对tmpl目录编译一次到src目录，主要是方便排查生成的可运行代码是否有问题
*/
gulp.task(
  'combine',
  gulp.series('cleanSrc', () => {
    return combineTool
      .combine()
      .then(() => {
        console.log('complete');
      })
      .catch(function (ex) {
        console.log('gulpfile:', ex);
        process.exit();
      });
  }),
);
/**
 * 启动监听任务，实时编译tmpl目录到src目录，开发时使用
 */
gulp.task(
  'watch',
  gulp.series('combine', () => {
    watch(tmplFolder + '/**/*', e => {
      if (fs.existsSync(e.path)) {
        let c = combineTool.processFile(e.path);
        c.catch(function (ex) {
          console.log('ex', ex);
        });
      } else {
        combineTool.removeFile(e.path);
      }
    });
  }),
);

let langReg = /@:\{lang#[\S\s]+?\}/g;
let chineseRegexp = /[\u4e00-\u9fa5]+/g;
/**
 * 对项目中的多语言进行检测，检测哪些中文未收集到多语言文件中，检测多语言文件中，是否有未使用到的多语言，方便代码清理删除
 * 后续开发中，并未对所有的中文都收集到多语言文件中。
 */
gulp.task('lang-check', async () => {
  let c = combineTool.readFile('./tmpl/i18n/zh-cn.ts');
  let lMap = {},
    missed = {};
  let needi18n = {};
  c.replace(langReg, m => {
    lMap[m] = 0;
  });
  combineTool.walk('./tmpl', f => {
    if (!f.includes('/lib/') && !f.includes('/i18n/')) {
      let c = combineTool.readFile(f);
      c.replace(langReg, m => {
        if (lMap.hasOwnProperty(m)) {
          lMap[m]++;
        } else {
          missed[m] = 'missed';
        }
      });
      if (f.endsWith('.html')) {
        c.replace(chineseRegexp, m => {
          needi18n[m] = f;
        });
      }
    }
  });
  combineTool.config({
    stringProcessor(content, from) {
      if (!from.includes('lib/') && !from.includes('i18n/')) {
        content.replace(chineseRegexp, m => {
          needi18n[m] = from;
        });
      }
    },
  });
  await combineTool.processString();
  for (let p in lMap) {
    if (lMap[p] > 0) {
      delete lMap[p];
    }
  }
  console.table(lMap);
  console.table(missed);
  console.table(needi18n);
});

let htmlIconReg = /(&#x)([0-9a-f]{4})/g;
let cssIconReg = /(['"])\\([0-9a-f]{4})\1/g;
let path = require('path');
let https = require('https');
/**
 * 图标检测，同多语言处理，检测当前项目中哪些图标未使用，方便清理减少图标文件体积
 */
gulp.task('icons-check', () => {
  let exts = {
    css: 1,
    less: 1,
    html: 1,
    js: 1,
    ts: 1,
    mx: 1,
  };
  let icons = {};
  combineTool.walk('./tmpl', function (file) {
    let ext = path.extname(file);
    if (exts[ext.substring(1)]) {
      let reg;
      if (ext == '.css' || ext == '.less') {
        reg = cssIconReg;
      } else {
        reg = htmlIconReg;
      }
      let c = combineTool.readFile(file);
      c.replace(reg, function (match, ignore, hex) {
        icons[hex] = 1;
      });
    }
  });
  https.get('https://www.iconfont.cn/open/project/detail.json?pid=890516', res => {
    let raw = '',
      unused = {};
    res.on('data', d => {
      raw += d;
    });
    res.on('end', () => {
      let json = JSON.parse(raw);
      for (let i of json.data.icons) {
        let n = parseInt(i.unicode).toString(16);
        if (!icons.hasOwnProperty(n)) {
          unused[n] = 'unused';
        }
      }
      console.table(unused);
    });
  });
});

//压缩选项
let terserOptions = {
  compress: {
    drop_console: true,
    drop_debugger: true,
    keep_fargs: false,
    ecma: 2020,
    global_defs: {
      DEBUG: false,
    },
  },
  output: {
    ascii_only: true,
    comments: /^!/,
  },
};
/**
 * 删除build目录
 */
gulp.task('cleanBuild', () => {
  return del(buildFolder);
});
/**
 * 把src目录中的文件，移除相应的调试信息并压缩后放到build目录下
 * build目录下的文件与src目录下的一一对应，并未合并，供有动态加载的需求使用。
 */
gulp.task(
  'build',
  gulp.series('cleanBuild', 'cleanSrc', () => {
    combineTool.config({
      debug: false,
    });
    return combineTool
      .combine()
      .then(() => {
        gulp
          .src(srcFolder + '/**/*.js')
          .pipe(minify(terserOptions))
          .pipe(gulp.dest(buildFolder));
      })
      .catch(ex => {
        console.error(ex);
      });
  }),
);

let refactorWhites = {
  mini: 1,
  designer: 1,
  magix: 1,
  magix5: 1,
  magix: 1,
  i18n: 1,
  panels: 1,
  elements: 1,
  printer: 1,
  gallery: 1,
  standalone: 1,
};
let guidCache = {};
let guidIndex = Math.floor(Math.random() * 200);
let guid = key => {
  if (key == 'magix5') {
    key = 'magix';
  }
  if (guidCache[key] != null) {
    return guidCache[key];
  }
  guidCache[key] = (guidIndex++).toString(32);
  return guidCache[key];
};
let strReg = /(["'`])([a-z0-9\.\/\-]+)(\1|\?|\/)/g;
let reafctorId = id => {
  if (id.startsWith('magix')) return id;
  let parts = id.split('/');
  let i = 0;
  while (i < parts.length) {
    if (parts[i] != '.' && parts[i] != '..') {
      parts[i] = guid(parts[i]);
    }
    i++;
  }
  return parts.join('/');
};
let canMinify = str => {
  return (
    str.startsWith('mx-') ||
    str == 'header' ||
    str == 'axis' ||
    str.startsWith('axis-') ||
    str.startsWith('toolbar-') ||
    str == 'toolbar' ||
    str == 'keyboard' ||
    str == 'const' ||
    str == 'history' ||
    str == 'example' ||
    str == 'service' ||
    str == 'shortcuts' ||
    str == 'contextmenu' ||
    str == 'props' ||
    str == 'stage' ||
    str == 'transform' ||
    str == 'unit' ||
    str == 'lodop' ||
    str == 'rds' ||
    str == 'form' ||
    str == 'provider' ||
    str == 'tojson' ||
    str == 'normal' ||
    str == 'hollow' ||
    str == 'panel' ||
    str.startsWith('stage-') ||
    str == 'overview' ||
    str == 'outline' ||
    str == 'zh-cn' ||
    str == 'generic'
  );
};
let refactorCode = str => {
  return str.replace(strReg, (_, q, path, q1) => {
    if (!path.includes('/') && q1 != '/' && path != 'magix5' && path != 'magix') return _;
    let parts = path.split('/');
    let first = 0;
    while (first < parts.length) {
      if (parts[first] == '.' || parts[first] == '..') {
        first++;
      } else {
        break;
      }
    }
    let part = parts[first];
    if (part && (refactorWhites[part] || canMinify(part))) {
      parts[first] = guid(parts[first]);
      let next = first + 1;
      if (next < parts.length && canMinify(parts[next])) {
        parts[next] = guid(parts[next]);
      }
    }
    return q + parts.join('/') + q1;
  });
};
/**
 * 对src下的目录压缩合并到dist目录，对于不需要动态加载的需求，这样的方式便于交付代码。
 * github及gitee上就使用了该方式
 */
gulp.task(
  'dist',
  gulp.series('cleanSrc', () => {
    combineTool.config({
      debug: false,
      compileJSEnd(content) {
        //return content;
        //重构代码，转换模块路径，防止反向推测文件结构
        return refactorCode(content);
      },
    });
    return del('./dist')
      .then(() => {
        return combineTool.combine();
      })
      .then(() => {
        return gulp
          .src([
            './src/index.js',
            './src/gallery/**',
            './src/i18n/**',
            './src/util/**',
            './src/panels/**',
            './src/provider/**',
            './src/elements/**',
            '!./src/elements/**/printer.js',
            './src/designer/**',
            '!./src/elements/mini.js',
          ])
          .pipe(concat('index.js'))
          .pipe(minify(terserOptions))
          .pipe(gulp.dest('./dist'));
      })
      .then(() => {
        return Promise.resolve();
        // return gulp.src([
        //     './src/display.js',
        //     './src/i18n/**',
        //     './src/designer/service.js',
        //     './src/designer/transform.js',
        //     './src/elements/**',
        //     '!./src/elements/designer.js',
        //     '!./src/elements/**/designer.js',
        //     '!./src/elements/**/dshow.js',
        //     '!./src/elements/svg.js',
        //     '!./src/elements/flow.js',
        //     '!./src/elements/hod.js',
        //     '!./src/elements/hollow.js',
        //     '!./src/elements/normal.js',
        //     '!./src/elements/index.js',
        //     './src/display/**'])
        //     .pipe(concat('display.js'))
        //     .pipe(terser({
        //         compress: {
        //             drop_console: true,
        //             drop_debugger: true,
        //             global_defs: {
        //                 DEBUG: false
        //             }
        //         },
        //         output: {
        //             ascii_only: true
        //         }
        //     }))
        //     .pipe(gulp.dest('./dist'));
      })
      .then(() => {
        return gulp
          .src([
            './src/printer.js',
            './src/i18n/**',
            './src/designer/service.js',
            './src/designer/transform.js',
            './src/designer/const.js',
            './src/designer/enum.js',
            './src/elements/**',
            './src/provider/**',
            './src/gallery/mx-dialog/**',
            './src/gallery/mx-toast/**',
            './src/gallery/mx-dropdown/**',
            './src/gallery/mx-number/**',
            './src/gallery/mx-monitor/**',
            './src/gallery/mx-runner/**',
            '!./src/elements/designer.js',
            '!./src/elements/**/designer.js',
            '!./src/elements/**/dshow.js',
            '!./src/elements/**/stage.js',
            '!./src/elements/svg.js',
            '!./src/elements/flow.js',
            '!./src/elements/hod.js',
            '!./src/elements/hollow.js',
            '!./src/elements/normal.js',
            '!./src/elements/index.js',
            '!./src/elements/mini.js',
            './src/printer/**',
          ])
          .pipe(concat('printer.js'))
          .pipe(minify(terserOptions))
          .pipe(gulp.dest('./dist'));
      })
      .then(() => {
        return gulp
          .src([
            './src/mini.js',
            './src/gallery/**',
            './src/i18n/**',
            './src/util/**',
            './src/mini/**',
            './src/panels/**',
            './src/elements/**',
            './src/provider/**',
            '!./src/elements/**/printer.js',
            './src/designer/**',
            '!./src/panels/overview/**',
            '!.src/designer/header.js',
          ])
          .pipe(concat('mini.js'))
          .pipe(minify(terserOptions))
          .pipe(gulp.dest('./dist'));
      })
      .then(() => {
        return gulp
          .src([
            './src/standalone.js',
            './src/i18n/**',
            './src/standalone/**',
            './src/elements/**',
            './src/provider/**',
            './src/designer/const.js',
            './src/designer/enum.js',
            '!./src/elements/**/designer.js',
            '!./src/elements/**/dshow.js',
            '!./src/elements/**/stage.js',
            '!./src/elements/provider/codemirror.js',
            '!./src/elements/svg.js',
            '!./src/elements/flow.js',
            '!./src/elements/hod.js',
            '!./src/elements/hollow.js',
            '!./src/elements/normal.js',
            '!./src/elements/index.js',
            '!./src/elements/mini.js',
          ])
          .pipe(concat('standalone.js'))
          .pipe(minify(terserOptions))
          .pipe(gulp.dest('./dist'));
      })
      .then(() => {
        let time = new Date();
        let stamp = [
          time.getFullYear(),
          (time.getMonth() + 1 + '').padStart(2, '0'),
          (time.getDate() + '').padStart(2, '0'),
          (time.getHours() + '').padStart(2, '0'),
          (time.getMinutes() + '').padStart(2, '0'),
        ].join('');
        let ver = [time.getFullYear(), time.getMonth() + 1, time.getDate()].join('.');
        let package = JSON.parse(fs.readFileSync('./package.json'));
        package.version = ver;
        fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));
        let files = [
          {
            html: './index.html',
            js: 'index',
          },
          {
            html: './print.html',
            js: 'printer',
          },
          {
            html: './mini.html',
            js: 'mini',
          },
          {
            html: './standalone.html',
            js: 'standalone',
            ignoreVersion: true,
          },
        ];
        // let c = crypto.createHash('sha512');
        // console.log(c.update('abc').digest('base64'));
        for (let f of files) {
          let content = fs.readFileSync(f.html).toString();
          let reg = new RegExp(`src="dist\\/${f.js}\\.js(\\?v=\\d+)?"`);
          content = content.replace(reg, `src="dist/${f.js}.js?v=${stamp}"`);
          if (!f.ignoreVersion) {
            content = content.replace(
              /designer\.setup\(\{(?:\s*version:'\d+'(,)?(\s*))?/g,
              `designer.setup({\n            version:'${stamp}'$1$2`,
            );
          }
          fs.writeFileSync(f.html, content);
        }
      });
  }),
);

gulp.task('deliver', () => {
  let time = new Date();
  let ver = [time.getFullYear(), time.getMonth() + 1, time.getDate()].join('.');
  fs.writeFileSync(`./${ver}.xl`, `version important file! do not delete!!!`);
});

gulp.task('providers', () => {
  let oldVersions = {};
  let verFile = './pver.json';
  if (fs.existsSync(verFile)) {
    let pds = fs.readFileSync(verFile).toString();
    oldVersions = JSON.parse(pds);
  }
  let list = [
    'ckeditor',
    'jsbarcode',
    'codemirror',
    'file-saver',
    'html2canvas',
    'jspdf',
    'leaflet',
    'mathjax',
    '@keeex/qrcodejs-kx',
    'underscore',
  ];
  let upgradeVersions = {};
  let hasUpgrade;
  let request = p => {
    console.log('检测' + p);
    let url;
    if (p == 'ckeditor') {
      url = 'https://ckeditor.com/ckeditor-5/demo/';
    } else {
      url = 'https://registry.npmjs.org/' + p;
    }
    https.get(url, response => {
      let rawData = '';
      response.on('data', chunk => {
        rawData += chunk;
      });
      response.on('end', () => {
        try {
          let v;
          if (p == 'ckeditor') {
            //console.log(rawData);
            rawData.replace(/ckeditor5\/"[^"]+"([\d\.]+)"[^"]+"\/ckeditor.js/, (_, $1) => {
              v = $1;
            });
            //console.log(v);
          } else {
            const parsedData = JSON.parse(rawData);
            v = parsedData['dist-tags'].latest;
          }
          if (v != oldVersions[p]) {
            hasUpgrade = true;
            upgradeVersions[p] = `${oldVersions[p]}->${v}`;
            oldVersions[p] = v;
          }
          if (list.length) {
            setTimeout(request, 100, list.pop());
          } else if (hasUpgrade) {
            console.table(upgradeVersions);
            fs.writeFileSync(verFile, JSON.stringify(oldVersions, null, 4));
          }
        } catch (e) {
          console.error(e.message);
        }
      });
    });
  };
  //request(list[0]);
  request(list.pop());
});
