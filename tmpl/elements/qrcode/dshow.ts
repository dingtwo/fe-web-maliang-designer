/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import EBind from '../../provider/ebind';
import QRCodeProvide from '../../provider/qrcode';
let { View, mark, node, task } = Magix;
export default View.extend({
    tmpl: '@:dshow.html',
    init() {
        this['@:{has.contents}'] = ['text'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, text } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[绑定:${bindField.name}]`;
        }
        this.set({
            text
        });
    },
    async render() {
        let m = mark(this, '@:{render}');
        await this.digest({
            error: null
        });
        try {
            await QRCodeProvide();
            if (m()) {
                let text = this.get('text') + '';
                if (text &&
                    text != this['@:{cached.text}']) {
                    let entity = this['@:{qrcode.entity}'];
                    if (!entity) {
                        let n = node(`_rd_${this.id}_qr`)
                        entity = new QRCode(n);
                        this['@:{qrcode.entity}'] = entity;
                    }
                    m = mark(this, '@:{render.qrcode}');
                    task(() => {
                        if (m()) {
                            entity.makeCode(this['@:{cached.text}'] = text);
                            let img = this.root.querySelector('img');
                            img.classList.add('@:scoped.style:tag-img', '@:scoped.style:wp100', '@:scoped.style:mwp100');
                        }
                    });
                }
            }
        } catch (ex) {
            if (m()) {
                this.digest({
                    error: ex
                });
            }
        }
    },
}).merge(EBind);