/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-toast/index",["magix5"],(require,exports,module)=>{


let magix_1 = require("magix5");
let { applyStyle, guid, node } = magix_1;
applyStyle("rd-_gallery_mx-toast_index_css_",".rd-_gallery_mx-toast_index_css_-toast{\nposition:fixed;\nborder-radius:5px;\nbackground:#0008;\nleft:50%;\ntop:50%;\npadding:6px;\ncolor:#fff;\nmin-width:15%;\ntext-align:center;\ntransform:translate(-50%,-50%);\nz-index:2000;\n}");
let toastId = guid('_mx_toast_');
let timer;
module.exports= {
    show(msg, duration) {
        let n = node(toastId);
        if (!n) {
            n = document.createElement('div');
            n.id = toastId;
            n.className = 'rd-_gallery_mx-toast_index_css_-toast rd-_assets_index_less_-designer-root';
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