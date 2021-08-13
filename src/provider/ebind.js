/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/ebind",["5c","../5b/5o","../5b/65","../5b/69","../5j/5k/index"],(require,exports,module)=>{


/**
 * 普通元素通用数据绑定
 */
let magix_1 = require("5c");
let history_1 = require("../5b/5o");
let stage_generic_1 = require("../5b/65");
let stage_selection_1 = require("../5b/69");
let index_1 = require("../5j/5k/index");
let { State } = magix_1;
module.exports= {
    '_pH<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let contents = this['_pz'];
        if (contents) {
            for (let c of contents) {
                if (props[c]) {
                    return;
                }
            }
        }
        e['_mW'] = 1;
        if (index_1['_pX'](this)) {
            let src = State.get('ml');
            if (src) {
                this.digest({
                    enter: 1
                });
            }
        }
    },
    '_pI<dragleave>'(e) {
        let enter = this.get('enter');
        if (index_1['_pY'](this)) {
            if (enter) {
                this.digest({
                    enter: 0
                });
            }
        }
    },
    '_pJ<drop>'(e) {
        this['_nS'](e);
        index_1['_r0'](this);
        let enter = this.get('enter');
        let src = State.get('ml');
        if (src &&
            enter) {
            e['_mW'] = 1;
            let props = this.get('props');
            let { bind } = props;
            let element = this.get('element');
            let oldStringify = [bind.id, bind.url].concat(bind.fields).join('\x00');
            let newStringify = [src.id, src.url].concat(src.fields).join('\x00');
            if (oldStringify != newStringify) {
                bind.id = src.id;
                bind.url = src.url;
                bind.fields = [src.field];
                stage_selection_1["l3"](element);
                State.fire('l4', {
                    '_nK': {
                        [element.id]: 1
                    },
                    '_nL': {
                        [element.type]: 1
                    },
                    '_l3': {
                        '_pZ': 1
                    }
                });
                this.assign({
                    props
                });
                history_1["l2"](history_1['my'], stage_generic_1['md']([element]));
            }
            this.set({
                enter: 0
            });
            this.render();
        }
    }
};

});