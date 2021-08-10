/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import FormatProvider from '../../provider/format';
let { View, isArray } = Magix;
export default Magix.View.extend({
    tmpl: '@:index.html',
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, value, textFormat } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            if (bind._tip) {
                text = bind._tip;
                value = 60;
            } else if (bind._data) {
                let src = bind._data;
                if (isArray(src)) {
                    src = src[0];
                }
                value = src[bindField.id];
                value = FormatProvider['@:{format}'](textFormat, value, props);
                if (isNaN(value) ||
                    !isFinite(value)) {
                    value = 0;
                }
                if (value < 0) {
                    value = 0;
                } else if (value > 100) {
                    value = 100;
                }
            } else {
                text = `[绑定:${bindField.name}]`;
                value = 60;
            }
        }
        this.set({
            value,
            text
        });
    },
    render() {
        this.digest();
    }
});