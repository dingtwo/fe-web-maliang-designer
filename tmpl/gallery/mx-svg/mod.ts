/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import EBaseProvider from '../../provider/ebase';
import Transform from '../../designer/transform';
import Const from '../../designer/const';
let { View, dispatch, inside } = Magix;
export default View.extend({
    tmpl: '@:./mod.html',
    assign(extra) {
        let { props, disabled } = extra;
        this.set({
            disabled,
            fixed: Const["@:{const#unit.fixed}"],
            step: Const["@:{const#unit.step}"],
            read: Transform["@:{transform#to.show.value}"],
            points: EBaseProvider["@:{get.mod.point}"](props),
            props
        });
    },
    render() {
        this.digest();
    },
    '@:{update.mod.point}<input>'(e) {
        let { i, type } = e.params;
        let props = this.get('props');
        let v = e.value;
        if (props['mod' + i + 'Type'] == 'int') {
            v = Transform["@:{transform#to.real.value}"](v);
        }
        console.log(v);
        props['mod' + i + type] = v;
        dispatch(this.root, 'change');
    },
    '@:{focus.mod.point}<pointerover>'(e: Magix5.MagixMouseEvent) {
        if (!inside(e.relatedTarget as HTMLDivElement, e.eventTarget)) {
            let { key } = e.params;
            let props = this.get('props');
            props['@:{focus.mod}'] = key;
            dispatch(this.root, 'change', {
                '@:{svg.control.point}': 1
            });
        }
    },
});