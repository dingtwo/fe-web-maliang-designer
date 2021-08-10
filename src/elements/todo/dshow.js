/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/todo/dshow",["magix5","../../designer/stage-selection","../../designer/history","./index"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let stage_selection_1 = require("../../designer/stage-selection");
let history_1 = require("../../designer/history");
let index_1 = require("./index");
let Base = index_1.prototype;
let { State } = magix_1;
module.exports= index_1.extend({
    '@:{update.size~rs}'() {
        Base['@:{update.size~rs}'].call(this);
        let element = this.get('element');
        let parent = this.owner.parent();
        parent.invoke('@:{update~rs}', [element]);
        State.fire('@:{event#stage.select.element.props.change~rs}', {
            '@:{ids~rs}': {
                [element.id]: 1
            },
            '@:{types~rs}': {
                [element.type]: 1
            },
            '@:{props~rs}': {
                '@:{size~rs}': 1
            }
        });
        history_1['@:{history#save~rs}'](history_1['@:{history#element.modified.props~rs}'], element.props.ename);
    },
    '@:{change.task.status~rs}<change>'(e) {
        Base['@:{change.task.status~rs}<change>'].call(this, e);
        let element = this.get('element');
        history_1['@:{history#save~rs}'](history_1['@:{history#element.modified.props~rs}'], element.props.ename);
    },
    '@:{stop~rs}<pointerdown,contextmenu>'(e) {
        Base['@:{stop~rs}<pointerdown,contextmenu>'].call(this, e);
        let element = this.get('element');
        if (element && stage_selection_1["@:{selection#set~rs}"](element)) {
            history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], element.props.ename);
        }
    }
});

});