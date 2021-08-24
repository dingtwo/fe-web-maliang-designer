/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5g/underscore",[],(require,exports,module)=>{


let dest = '//cdn.jsdelivr.net/npm/underscore@1.13.1/underscore-umd-min.js';
let loadingList = [];
let state = 1;
let rejectMsg = 'can not load underscore library';
module.exports= () => {
    return new Promise((resolve, reject) => {
        if (state & 2) {
            if (window._) {
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
            let script = document.createElement('script');
            script.src = dest;
            script.onload = script.onerror = () => {
                document.head.removeChild(script);
                state |= 2;
                for (let [res, rej] of loadingList) {
                    if (window._) {
                        res();
                    }
                    else {
                        rej(rejectMsg);
                    }
                }
                loadingList.length = 0;
            };
            document.head.appendChild(script);
        }
    });
};

});