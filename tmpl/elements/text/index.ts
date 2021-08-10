/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import FormatProvider from '../../provider/format';
let { min } = Math;
let { isArray, View } = Magix;
export default View.extend({
    tmpl: '@:index.html',
    assign(data) {
        this.set(data);
        let { props } = data;
        let { text, bind, format, borderwidth: bw, width, height } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            if (bind._tip) {
                text = bind._tip;
            } else if (bind._data) {
                let src = bind._data;
                if (isArray(src)) {
                    src = src[0];
                }
                text = src[bindField.id];
                text = FormatProvider["@:{format}"](format, text, src);
            } else {
                text = `[绑定:${bindField.name}]`;
            }
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
    }
});