/*
    author:https://github.com/xinglie
*/
'ref@:./toolbar.less';
import Magix from 'magix';
import StageElements from './stage-elements';
let { State } = Magix;
export default Magix.View.extend({
    tmpl: '@:toolbar-space.html',
    init() {
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['@:{props}'].locked) {
                update();
            }
        };
        State.on('@:{event#history.shift}', update);
        State.on('@:{event#stage.select.elements.change}', update);
        State.on('@:{event#stage.elements.change}', update);
        State.on('@:{event#stage.select.element.props.change}', checkLocked);
        this.on('destroy', () => {
            State.off('@:{event#history.shift}', update);
            State.off('@:{event#stage.select.elements.change}', update);
            State.off('@:{event#stage.elements.change}', update);
            State.off('@:{event#stage.select.element.props.change}', checkLocked);
        });
    },
    render() {
        let elements = State.get('@:{stage.select.elements}');
        let flowProvider = State.get('@:{provider.of.flow}');
        if (flowProvider) {
            elements = flowProvider["@:{remove.connector.from.elements}"](elements, 1);
        }
        //let groups = State.get('@:{stage.elements.groups}');
        //let selectedElementsMap = State.get('@:{stage.select.elements.map}');
        let { length } = elements,
            canSyncSize = true;//,
        //space = false;
        if (length < 2) {
            canSyncSize = false;
        } else {
            for (let { ctrl, props } of elements) {
                let { '@:{modifier}': modifier } = ctrl;
                if (props.locked ||
                    !modifier ||
                    !(modifier.width || modifier.size) ||
                    !(modifier.height || modifier.size)) {
                    canSyncSize = false;
                    break;
                }
            }
        }
        // if (length < 3) {
        //     space = true;
        // } else {
        //     let processed = {};
        //     let diffGroups = 0;
        //     let findGroups = 0;
        //     for (let e of elements) {
        //         if (!processed[e.id]) {
        //             processed[e.id] = 1;
        //             let groupList = groups[e.id];
        //             if (groupList) {
        //                 let inGroupCount = 0;
        //                 for (let g of groupList) {
        //                     if (selectedElementsMap[g]) {
        //                         processed[g] = 1;
        //                         inGroupCount++;
        //                     }
        //                 }
        //                 if (inGroupCount > 0) {
        //                     diffGroups++;
        //                     findGroups++;
        //                 }
        //             } else {
        //                 diffGroups++;
        //             }
        //             if (findGroups > 0 &&
        //                 diffGroups > 1) {
        //                 space = true;
        //                 break;
        //             }
        //         }
        //     }
        // }
        this.digest({
            canSyncSize
            //space
        });
    },
    '@:{same.elements}<click>'(e: Magix5.MagixMouseEvent) {
        let { to } = e.params;
        StageElements["@:{same.size.elements}"](to, e.shiftKey);
    }/*,
    '@:{avg.elements}<click>'(e: Magix5.MagixMouseEvent) {
        if (e.eventTarget.classList.contains('@:toolbar.less:toolbar-item-disabled')) {
            return;
        }
        let { to } = e.params;
        StageElements["@:{avg.elements}"](to, e.shiftKey);
    }*/
});