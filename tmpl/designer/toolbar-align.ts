/*
    author:https://github.com/xinglie
*/
'ref@:toolbar.less';
import Magix from 'magix';
import StageElements from './stage-elements';
import StageGeneric from './stage-generic';
let { State, View } = Magix;
let actions = [{
    icon: '&#xe70b;',
    to: 'left',
    title: '@:{lang#align.left}',
    use: 'canX'
}, {
    icon: '&#xe711;',
    to: 'center',
    title: '@:{lang#align.center}',
    use: 'canX'
}, {
    icon: '&#xe70b;',
    to: 'right',
    r180: 1,
    title: '@:{lang#align.right}',
    use: 'canX'
}, {
    icon: '&#xe70d;',
    to: 'top',
    title: '@:{lang#align.top}',
    use: 'canY'
}, {
    icon: '&#xe711;',
    to: 'middle',
    r90: 1,
    title: '@:{lang#align.middle}',
    use: 'canY'
}, {
    icon: '&#xe70d;',
    to: 'bottom',
    r180: 1,
    title: '@:{lang#align.bottom}',
    use: 'canY'
}];
export default View.extend({
    tmpl: '@:toolbar-align.html',
    init() {
        this.set({
            actions
        });
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['@:{props}'].locked) {
                update();
            }
        };
        State.on('@:{event#history.shift.change}', update);
        State.on('@:{event#stage.elements.change}', update);
        State.on('@:{event#stage.select.elements.change}', update);
        State.on('@:{event#stage.select.element.props.change}', checkLocked);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change}', update);
            State.off('@:{event#stage.elements.change}', update);
            State.off('@:{event#stage.select.elements.change}', update);
            State.off('@:{event#stage.select.element.props.change}', checkLocked);
        });
    },
    render() {
        let alignInfo = StageGeneric['@:{generic#query.can.align}']();
        this.digest({
            canX: alignInfo['@:{generic.align#x.can.align}'],
            canY: alignInfo['@:{generic.align#y.can.align}']
        });
    },
    '@:{align.elements}<click>'(e: Magix5.MagixMouseEvent) {
        if (e.eventTarget.classList.contains('@:toolbar.less:toolbar-item-disabled')) {
            return;
        }
        let { to } = e.params;
        StageElements["@:{elements#align.elements}"](to);
    }
});