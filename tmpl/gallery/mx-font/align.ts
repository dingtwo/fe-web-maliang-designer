/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
export default Magix.View.extend({
    tmpl: '@:align.html',
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{set}<click>'(e) {
        let me = this;
        if (me.get('disabled')) {
            return;
        }
        let props = me.get('value');
        let { v } = e.params;
        let alignKey = me.get('alignKey');
        props[alignKey] = v;
        Magix.dispatch(me.root, 'input');
    }
});