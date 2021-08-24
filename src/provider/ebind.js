/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5g/ebind",["51","../50/5d","../50/5q","../50/5u","../58/59/index"],(require,exports,module)=>{


/**
 * 普通元素通用数据绑定
 */
let magix_1 = require("51");
let history_1 = require("../50/5d");
let stage_generic_1 = require("../50/5q");
let stage_selection_1 = require("../50/5u");
let index_1 = require("../58/59/index");
let { State } = magix_1;
module.exports= {
    '_jW<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let contents = this['_jO'];
        if (contents) {
            for (let c of contents) {
                if (props[c]) {
                    return;
                }
            }
        }
        e['_g8'] = 1;
        if (index_1['_kb'](this)) {
            let src = State.get('gx');
            if (src) {
                this.digest({
                    enter: 1
                });
            }
        }
    },
    '_jX<dragleave>'(e) {
        let enter = this.get('enter');
        if (index_1['_kc'](this)) {
            if (enter) {
                this.digest({
                    enter: 0
                });
            }
        }
    },
    '_jY<drop>'(e) {
        this['_h5'](e);
        index_1['_me'](this);
        let enter = this.get('enter');
        let src = State.get('gx');
        if (src &&
            enter) {
            e['_g8'] = 1;
            let props = this.get('props');
            let { bind } = props;
            let element = this.get('element');
            let oldStringify = [bind.id, bind.url].concat(bind.fields).join('\x00');
            let newStringify = [src.id, src.url].concat(src.fields).join('\x00');
            if (oldStringify != newStringify) {
                bind.id = src.id;
                bind.url = src.url;
                bind.fields = [src.field];
                stage_selection_1["ge"](element);
                State.fire('gf', {
                    '_hW': {
                        [element.id]: 1
                    },
                    '_hX': {
                        [element.type]: 1
                    },
                    '_ge': {
                        '_kd': 1
                    }
                });
                this.assign({
                    props
                });
                history_1["gd"](history_1['gK'], stage_generic_1['gp']([element]));
            }
            this.set({
                enter: 0
            });
            this.render();
        }
    }
};

});