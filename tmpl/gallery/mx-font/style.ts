/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
export default Magix.View.extend({
    tmpl: '@:style.html',
    assign(data) {
        let prefix = data.prefix;
        if (!prefix) {
            prefix = 'style';
        }
        this.set(data);
        this.set({
            prefix
        });
    },
    render() {
        this.digest();
    },
    '@:{set}<click>'(e) {
        let me = this;
        if (me.get('disabled')) {
            return;
        }
        let v = me.get('value');
        let { key } = e.params;
        let prefix = this.get('prefix');
        v[key] = !v[key];
        if (key == `${prefix}Underline` &&
            v[key]) {
            v[`${prefix}Strike`] = false;
            v[`${prefix}Overline`] = false;
        }
        if (key == `${prefix}Strike` &&
            v[key]) {
            v[`${prefix}Underline`] = false;
            v[`${prefix}Overline`] = false;
        }
        if (key == `${prefix}Overline` &&
            v[key]) {
            v[`${prefix}Strike`] = false;
            v[`${prefix}Underline`] = false;
        }
        me.digest({
            value: v
        });
        Magix.dispatch(me.root, 'input');
    }
});