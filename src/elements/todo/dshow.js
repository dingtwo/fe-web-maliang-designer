/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/todo/dshow",["5c","../../5b/69","../../5b/5o","./index"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let stage_selection_1 = require("../../5b/69");
let history_1 = require("../../5b/5o");
let index_1 = require("./index");
let Base = index_1.prototype;
let { State } = magix_1;
module.exports= index_1.extend({
    '_qT'() {
        Base['_qT'].call(this);
        let element = this.get('element');
        let parent = this.owner.parent();
        parent.invoke('_ol', [element]);
        State.fire('l4', {
            '_nK': {
                [element.id]: 1
            },
            '_nL': {
                [element.type]: 1
            },
            '_l3': {
                '_l5': 1
            }
        });
        history_1['l2'](history_1['my'], element.props.ename);
    },
    '_qU<change>'(e) {
        Base['_qU<change>'].call(this, e);
        let element = this.get('element');
        history_1['l2'](history_1['my'], element.props.ename);
    },
    '_p2<pointerdown,contextmenu>'(e) {
        Base['_p2<pointerdown,contextmenu>'].call(this, e);
        let element = this.get('element');
        if (element && stage_selection_1["l3"](element)) {
            history_1["l2"](history_1['mi'], element.props.ename);
        }
    }
});

});