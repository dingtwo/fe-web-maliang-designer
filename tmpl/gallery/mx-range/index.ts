/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
export default Magix.View.extend({
    tmpl: '@:./index.html',
    assign(data) {
        if (!data.value) {
            data.value = [];
        }
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{num.input}<input>'(e) {
        this['@:{stop.propagation}'](e);
        let { i } = e.params;
        let value = this.get('value');
        value[i] = e.value;
        Magix.dispatch(this.root, 'input', {
            range: value
        });
    },
});