/*
    author:https://github.com/xinglie
*/
'ref@:./toolbar.less';
import Magix from 'magix';
import DHistory from './history';
let { State, View } = Magix;
export default View.extend({
    tmpl: '@:toolbar-do.html',
    init() {
        let update = this.render.bind(this);
        State.on('@:{event#history.shift.change}', update);
        State.on('@:{event#history.status.change}', update);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change}', update);
            State.off('@:{event#history.status.change}', update);
        });
    },
    render() {
        this.digest({
            status: DHistory["@:{history#query.status}"]()
        });
    },
    '@:{do.exec}<click>'(e) {
        //if (e.eventTarget.classList.contains('@:toolbar.less:toolbar-item-disabled')) {
        //return;
        //}
        let { s, b } = e.params;
        if (b) {
            if (s == '-') {
                DHistory["@:{history#undo}"]();
            } else {
                DHistory["@:{history#redo}"]();
            }
        }
    }
});