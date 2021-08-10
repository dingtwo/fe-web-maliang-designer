/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import EBind from '../../provider/ebind';
let { View } = Magix;
export default View.extend({
    tmpl: '@:dshow.html',
    init() {
        this['@:{has.contents}'] = ['image'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[绑定:${bindField.name}]`;
        }
        this.set({
            text
        });
    },
    render() {
        this.digest();
    },
}).merge(EBind);