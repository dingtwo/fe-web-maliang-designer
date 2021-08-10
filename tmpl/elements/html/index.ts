/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import UnderscoreProvider from '../../provider/underscore';
let { View, } = Magix;
export default View.extend({
    tmpl: '@:index.html',
    assign(data) {
        let { props } = data;
        props.value = this['@:{safe.html}'](props.value);
        this.set(data);
    },
    async render() {
        await UnderscoreProvider();
        let props = this.get('props');
        let { bind } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            if (bind._data) {
                props.value = _.template(props.value)({
                    data: bind._data,
                    field: bindField
                });
            }
        }
        this.digest();
    }
});