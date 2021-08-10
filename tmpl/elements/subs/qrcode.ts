/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import QRCodeProvide from '../../provider/qrcode';
let { View, mark, node, task } = Magix;
export default View.extend({
    tmpl: '@:qrcode.html',
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '@:{render}');
        await this.digest({
            msg: 'loading...'
        });
        try {
            await QRCodeProvide();
            if (m()) {
                let { value } = this.get();
                await this.digest({
                    msg: null
                });
                m = mark(this, '@:{render.qrcode}');
                task(() => {
                    if (m()) {
                        let n = node(`${this.id}_qr`)
                        let entity = new QRCode(n);
                        entity.makeCode(value + '');
                        let img = this.root.querySelector('img');
                        img.classList.add('@:scoped.style:mwp100')
                        img.classList.add('@:scoped.style:mhp100');
                    }
                });
            }
        } catch (ex) {
            if (m()) {
                this.digest({
                    msg: ex
                });
            }
        }
    }
});