/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/xsheet",["../4l/4o/index"],(require,exports,module)=>{


let index_1 = require("../4l/4o/index");
let loadingList = [];
let state = 1;
let rejectMsg = 'can not load luckysheet library';
let base = 'https://cdn.jsdelivr.net/npm/luckysheet/dist/';
let preloads = [
    base + 'plugins/css/pluginsCss.css',
    base + 'plugins/plugins.css',
    base + 'css/luckysheet.css',
    base + 'assets/iconfont/iconfont.css',
    base + 'plugins/js/plugin.js'
];
let main = base + 'luckysheet.umd.js';
let loadResource = src => {
    return new Promise(resolve => {
        let css = src.endsWith('css'), proxy;
        if (css) {
            proxy = document.createElement('link');
            proxy.href = src;
            proxy.rel = 'stylesheet';
            document.head.appendChild(proxy);
            let time = Date.now();
            let check = () => {
                let sheet = proxy.sheet;
                let isLoaded = 0;
                try {
                    if (sheet) {
                        isLoaded = 1;
                    }
                }
                catch (_a) {
                }
                if (Date.now() - time > 2e3) {
                    isLoaded = 1;
                }
                if (isLoaded) {
                    index_1["_d3"](check);
                    resolve();
                }
            };
            index_1["_d4"](30, check);
        }
        else {
            let proxy = document.createElement('script');
            proxy.onload = proxy.onerror = () => {
                document.head.removeChild(proxy);
                resolve();
            };
            proxy.src = src;
            document.head.appendChild(proxy);
        }
    });
};
module.exports= () => {
    return new Promise((resolve, reject) => {
        if (state & 2) {
            if (window.luckysheet) {
                resolve();
            }
            else {
                reject(rejectMsg);
            }
        }
        else if (state & 4) {
            loadingList.push([resolve, reject]);
        }
        else {
            state |= 4;
            loadingList.push([resolve, reject]);
            let promises = [];
            for (let src of preloads) {
                promises.push(loadResource(src));
            }
            Promise.all(promises).then(() => loadResource(main)).then(() => {
                state |= 2;
                for (let [res, rej] of loadingList) {
                    if (window.luckysheet) {
                        res();
                    }
                    else {
                        rej(rejectMsg);
                    }
                }
                loadingList.length = 0;
            }).catch(reject);
        }
    });
};

});