/*
    author:https://github.com/xinglie
*/
'ref@:./toolbar.less';
import Magix from 'magix';
import StageGeneric from './stage-generic';
import StageSelection from './stage-selection';
let { State, View } = Magix;
export default View.extend({
    tmpl: '@:toolbar-del.html',
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
        let selectElements = State.get('@:{global#stage.select.elements}');
        let selectElementsMap = StageSelection['@:{selection#get.selected.map}']();
        let enable = 0,
            disabeld;
        if (selectElements.length > 0) {
            disabeld = StageGeneric['@:{generic#query.has.disabled}'](selectElements);
            if (!disabeld) {
                enable = StageGeneric['@:{generic#query.in.enable.hod}'](selectElementsMap);
            }
        }
        this.digest({
            canDel: enable == 1,
        });
    },
    '@:{remove.elements}<click>'() {
        StageGeneric["@:{generic#delete.select.elements}"]();
    }
});