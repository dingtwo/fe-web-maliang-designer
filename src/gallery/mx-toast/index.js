/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/5q/index",["5c"],(require,exports,module)=>{


let magix_1 = require("5c");
let { applyStyle, guid, node } = magix_1;
applyStyle("rd-mx",".rd-rO{background:#0008;border-radius:5px;color:#fff;left:50%;min-width:15%;padding:6px;position:fixed;text-align:center;top:50%;transform:translate(-50%,-50%);z-index:2000}");
let toastId = guid('_mx_toast_');
let timer;
module.exports= {
    show(msg, duration) {
        let n = node(toastId);
        if (!n) {
            n = document.createElement('div');
            n.id = toastId;
            n.className = 'rd-rO rd-l2';
            document.body.appendChild(n);
        }
        n.style.display = 'block';
        n.innerHTML = msg;
        clearTimeout(timer);
        if (duration) {
            timer = setTimeout(() => {
                this.hide();
            }, duration);
        }
    },
    hide() {
        clearTimeout(timer);
        let n = node(toastId);
        if (n) {
            n.style.display = 'none';
        }
    }
};

});