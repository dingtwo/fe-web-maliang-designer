/*
    author:https://github.com/xinglie
*/
'ref@:./toolbar.less';
import Magix from 'magix';
import StageElements from './stage-elements';
import StageGeneric from './stage-generic';
let { State, View } = Magix;
export default View.extend({
    tmpl: '@:toolbar-layer.html',
    init() {
        let update = this['@:{debounce}'](this.render, 30);
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
        let selectedElements = State.get('@:{global#stage.select.elements}');
        let toTop = false,
            toBottom = false,
            first = selectedElements[0];
        if (selectedElements.length == 1) {
            if (!first.props.locked) {
                let collection = StageGeneric["@:{generic#find.element.owner.collection}"](first);
                if (collection) {
                    let top = collection[collection.length - 1];
                    let bottom = collection[0];
                    toTop = first.id != top.id;
                    toBottom = first.id != bottom.id;
                }
            }
        }
        this.digest({
            current: first,
            toTop,
            toBottom
        });
    },
    '@:{move.element}<click>'(e) {
        let { to } = e.params;
        let element = this.get('current');
        StageElements["@:{elements#modify.element.z.index}"](to, element);
    }
});