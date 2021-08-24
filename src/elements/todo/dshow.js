/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/todo/dshow",["51","../../50/5u","../../50/5d","./index"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let stage_selection_1 = require("../../50/5u");
let history_1 = require("../../50/5d");
let index_1 = require("./index");
let Base = index_1.prototype;
let { State } = magix_1;
module.exports= index_1.extend({
    '_k8'() {
        Base['_k8'].call(this);
        let element = this.get('element');
        let parent = this.owner.parent();
        parent.invoke('_iA', [element]);
        State.fire('gf', {
            '_hW': {
                [element.id]: 1
            },
            '_hX': {
                [element.type]: 1
            },
            '_ge': {
                '_gg': 1
            }
        });
        history_1['gd'](history_1['gK'], element.props.ename);
    },
    '_k9<change>'(e) {
        Base['_k9<change>'].call(this, e);
        let element = this.get('element');
        history_1['gd'](history_1['gK'], element.props.ename);
    },
    '_kg<pointerdown,contextmenu>'(e) {
        Base['_kg<pointerdown,contextmenu>'].call(this, e);
        let element = this.get('element');
        if (element && stage_selection_1["ge"](element)) {
            history_1["gd"](history_1['gu'], element.props.ename);
        }
    }
});

});