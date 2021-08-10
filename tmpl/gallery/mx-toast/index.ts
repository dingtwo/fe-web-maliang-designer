import Magix from 'magix';
let { applyStyle, guid, node } = Magix;
applyStyle('@:./index.css');
let toastId = guid('_mx_toast_');
let timer;
export default {
    show(msg, duration?) {
        let n = node(toastId);
        if (!n) {
            n = document.createElement('div');
            n.id = toastId;
            n.className = '@:index.css:toast @:scoped.style:designer-root';
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
}