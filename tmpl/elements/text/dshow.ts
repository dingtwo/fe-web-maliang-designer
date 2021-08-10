/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import EBind from '../../provider/ebind';
let { View } = Magix;
let { min } = Math;
export default View.extend({
    tmpl: '@:dshow.html',
    init() {
        this['@:{has.contents}'] = ['text', '@:{show.text}'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { text, bind, borderwidth: bw, width, height } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[绑定:${bindField.name}]`;
        }
        let minSize = min(width, height);
        let half = minSize / 2;
        if (bw > half) {
            bw = half;
        }
        this.set({
            bw,
            text
        });
    },
    render() {
        this.digest();
    },
}).merge(EBind);