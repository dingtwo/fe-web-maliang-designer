/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let actions = [{
    '@:{g.align#icon}': '&#xe687;',
    '@:{g.align#title}': '@:{lang#mx-gallery.font.align.left}',
    '@:{g.align#type}': 'hpos',
    '@:{g.align#value}': 'flex-start'
}, {
    '@:{g.align#icon}': '&#xe68a;',
    '@:{g.align#title}': '@:{lang#mx-gallery.font.align.center}',
    '@:{g.align#type}': 'hpos',
    '@:{g.align#value}': 'center'
}, {
    '@:{g.align#icon}': '&#xe686;',
    '@:{g.align#title}': '@:{lang#mx-gallery.font.align.right}',
    '@:{g.align#type}': 'hpos',
    '@:{g.align#value}': 'flex-end'
}, {
    '@:{g.align#icon}': '&#xe687;',
    '@:{g.align#title}': '@:{lang#mx-gallery.font.align.top}',
    '@:{g.align#type}': 'vpos',
    '@:{g.align#value}': 'flex-start',
    '@:{g.align#r90}': 1
}, {
    '@:{g.align#icon}': '&#xe68a;',
    '@:{g.align#title}': '@:{lang#mx-gallery.font.align.middle}',
    '@:{g.align#type}': 'vpos',
    '@:{g.align#value}': 'center',
    '@:{g.align#r90}': 1
}, {
    '@:{g.align#icon}': '&#xe686;',
    '@:{g.align#title}': '@:{lang#mx-gallery.font.align.bottom}',
    '@:{g.align#type}': 'vpos',
    '@:{g.align#value}': 'flex-end',
    '@:{g.align#r90}': 1
}];
export default Magix.View.extend({
    tmpl: '@:index.html',
    init() {
        this.set({
            actions
        });
    },
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
        let { type, v } = e.params;
        props[type] = v;
        Magix.dispatch(me.root, 'input');
    }
});