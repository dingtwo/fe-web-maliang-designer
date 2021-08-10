/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/ckeditor5",[],(require,exports,module)=>{


let dest = '//ckeditor.com/assets/libs/ckeditor5/29.0.0/ckeditor.js';
let loadingList = [];
let state = 1;
let rejectMsg = 'can not load ckeditor library';
module.exports= () => {
    return new Promise((resolve, reject) => {
        if (state & 2) {
            if (window.CKEditor) {
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
                    if (window.CKEditor) {
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