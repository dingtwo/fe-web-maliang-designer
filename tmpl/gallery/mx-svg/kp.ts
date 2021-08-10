/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import EBaseProvider from '../../provider/ebase';
import Tranform from '../../designer/transform';
import Const from '../../designer/const';
let { has, View, dispatch, inside } = Magix;
let { random } = Math;
export default View.extend({
    tmpl: '@:./kp.html',
    init() {
        this.set({
            fixed: Const["@:{const#unit.fixed}"],
            step: Const["@:{const#unit.step}"],
            read: Tranform["@:{transform#to.show.value}"]
        })
    },
    assign(extra) {
        let { props, disabled, mod } = extra;
        this.set({
            disabled,
            points: EBaseProvider["@:{get.key.point}"](props),
            props,
            mod
        });
    },
    render() {
        this.digest();
    },
    '@:{update.key.point}<input>'(e) {
        let { i, type } = e.params;
        let props = this.get('props');
        props['ctrl' + i + type] = Tranform["@:{transform#to.real.value}"](e.value);
        dispatch(this.root, 'change');
    },
    '@:{add.key.point}<click>'() {
        let props = this.get('props');
        let keyPoints = EBaseProvider["@:{get.key.point}"](props);
        let { x, y, width, height } = props;
        let nextIndex = keyPoints.length + 1;
        let nextX = x + (width * random());
        let nextY = y + (height * random());
        props[`ctrl${nextIndex}X`] = nextX;
        props[`ctrl${nextIndex}Y`] = nextY;
        delete props['@:{cached.key.points}'];
        delete props['@:{cached.move.props}'];
        dispatch(this.root, 'change');
    },
    '@:{remove.key.point}<click>'(e) {
        let props = this.get('props');
        let { i } = e.params;
        let next = i + 1;

        while (1) {
            if (has(props, `ctrl${next}X`)) {
                props[`ctrl${i}X`] = props[`ctrl${next}X`];
                props[`ctrl${i}Y`] = props[`ctrl${next}Y`];
                next++;
                i++;
            } else {
                break;
            }
        }
        delete props[`ctrl${i}X`];
        delete props[`ctrl${i}Y`];

        delete props['@:{cached.key.points}'];
        delete props['@:{cached.move.props}'];
        dispatch(this.root, 'change');
    },
    '@:{focus.key.point}<pointerover>'(e: Magix5.MagixMouseEvent) {
        if (!inside(e.relatedTarget as HTMLDivElement, e.eventTarget)) {
            let { key } = e.params;
            let props = this.get('props');
            props['@:{focus.ctrl}'] = key;
            dispatch(this.root, 'change', {
                '@:{svg.control.point}': 1
            });
        }
    },
});