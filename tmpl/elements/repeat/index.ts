/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { View, isArray } = Magix;
export default Magix.View.extend({
    tmpl: '@:index.html',
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            if (bind._tip) {
                text = bind._tip;
            } else if (bind._data) {
                let src = bind._data;
                if (isArray(src)) {
                    src = src[0];
                }
                props.image = src[bindField.id];
            } else {
                text = `[绑定:${bindField.name}]`;
            }
        }
        this.set({
            text
        });
    },
    render() {
        this.digest();
    }
});