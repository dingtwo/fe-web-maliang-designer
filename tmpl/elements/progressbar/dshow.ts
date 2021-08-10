/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import EBind from '../../provider/ebind';
let { View } = Magix;
export default View.extend({
    tmpl: '@:dshow.html',
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, value } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[绑定:${bindField.name}]`;
            value = 60;
        }
        this.set({
            value,
            text
        });
    },
    render() {
        this.digest();
    }
}).merge(EBind);