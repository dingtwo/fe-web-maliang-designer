/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("provider/map",["../gallery/mx-runner/index"],(require,exports,module)=>{


let index_1 = require("../gallery/mx-runner/index");
let loadingList = [];
let state = 1;
let rejectMsg = 'can not load map library';
let base = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.';
let preloads = [base + 'css', base + 'js'];
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
                    index_1["@:{task.remove~rs}"](check);
                    resolve();
                }
            };
            index_1["@:{task.add~rs}"](30, check);
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
            if (window.L) {
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
            Promise.all(promises).then(() => {
                state |= 2;
                for (let [res, rej] of loadingList) {
                    if (window.L) {
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