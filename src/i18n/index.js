/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("i18n/index",["magix5","./zh-cn"],(require,exports,module)=>{


let magix_1 = require("magix5");
let zh_cn_1 = require("./zh-cn");
let I18n = {
    'zh-cn': zh_cn_1,
    zh: zh_cn_1
};
let DefaultLang = 'zh-cn';
let { has, config, Cache } = magix_1;
//占位符识别正则
let Reg = /\{(\d+)\}/g;
//对翻译的结果进行缓存，避免每次都翻译
let tranlateCache = new Cache(200, 60);
/**
 * key: 待翻译的多语言属性key
 * args: 多语言中如果有占位符，则需要额外传入的占位符对应的内容
 */
module.exports= (key, ...args) => {
    let lang = (config('lang') || navigator.language).toLowerCase();
    if (!has(I18n, lang)) {
        lang = DefaultLang;
    }
    let l = I18n[lang];
    let cacheKey = [lang, key, ...args].join('\x00');
    if (tranlateCache.has(cacheKey)) {
        return tranlateCache.get(cacheKey);
    }
    let res = has(l, key) ? l[key] : key; //根据key拿到对应的多语言
    if (args.length) { //如果有占位符，则对占位符进行填充
        res = res.replace(Reg, (m, i, k) => {
            i |= 0;
            if (args.length > i) {
                k = args[i];
                return has(l, k) ? l[k] : k;
            }
            return m;
        });
    }
    tranlateCache.set(cacheKey, res);
    return res;
};

});