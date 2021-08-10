/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/todo/dshow",["4e","../../4d/5b","../../4d/4q","./index"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let stage_selection_1 = require("../../4d/5b");
let history_1 = require("../../4d/4q");
let index_1 = require("./index");
let Base = index_1.prototype;
let { State } = magix_1;
module.exports= index_1.extend({
    '_iv'() {
        Base['_iv'].call(this);
        let element = this.get('element');
        let parent = this.owner.parent();
        parent.invoke('_fY', [element]);
        State.fire('dG', {
            '_fm': {
                [element.id]: 1
            },
            '_fn': {
                [element.type]: 1
            },
            '_dF': {
                '_dH': 1
            }
        });
        history_1['dE'](history_1['ea'], element.props.ename);
    },
    '_iw<change>'(e) {
        Base['_iw<change>'].call(this, e);
        let element = this.get('element');
        history_1['dE'](history_1['ea'], element.props.ename);
    },
    '_hE<pointerdown,contextmenu>'(e) {
        Base['_hE<pointerdown,contextmenu>'].call(this, e);
        let element = this.get('element');
        if (element && stage_selection_1["dF"](element)) {
            history_1["dE"](history_1['dV'], element.props.ename);
        }
    }
});

});