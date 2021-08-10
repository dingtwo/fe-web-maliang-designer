/*
    author:https://github.com/xinglie
*/
'ref@:./toolbar.less';
import Magix from 'magix';
import StageGeneric from './stage-generic';
import DHistory from './history';
let { State, View } = Magix;
export default View.extend({
    tmpl: '@:toolbar-locker.html',
    init() {
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['@:{props}'].locked) {
                update();
            }
        };
        State.on('@:{event#history.shift.change}', update);
        State.on('@:{event#stage.select.elements.change}', update);
        State.on('@:{event#stage.select.element.props.change}', checkLocked);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change}', update);
            State.off('@:{event#stage.select.elements.change}', update);
            State.off('@:{event#stage.select.element.props.change}', checkLocked);
        });
    },
    render() {
        let state = StageGeneric["@:{generic#query.lock.state}"]();
        this.digest({
            canLock: state["@:{can.lock}"],
            canUnlock: state["@:{can.unlock}"]
        });
    },
    '@:{lock.elements}<click>'(e) {
        let { un } = e.params;
        StageGeneric["@:{generic#lock.select.elements}"](un);
    }
});