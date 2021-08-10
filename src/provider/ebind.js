/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/ebind",["4e","../4d/4q","../4d/57","../4d/5b","../4l/4m/index"],(require,exports,module)=>{


/**
 * 普通元素通用数据绑定
 */
let magix_1 = require("4e");
let history_1 = require("../4d/4q");
let stage_generic_1 = require("../4d/57");
let stage_selection_1 = require("../4d/5b");
let index_1 = require("../4l/4m/index");
let { State } = magix_1;
module.exports= {
    '_hj<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let contents = this['_hb'];
        if (contents) {
            for (let c of contents) {
                if (props[c]) {
                    return;
                }
            }
        }
        e['_ey'] = 1;
        if (index_1['_hz'](this)) {
            let src = State.get('dY');
            if (src) {
                this.digest({
                    enter: 1
                });
            }
        }
    },
    '_hk<dragleave>'(e) {
        let enter = this.get('enter');
        if (index_1['_hA'](this)) {
            if (enter) {
                this.digest({
                    enter: 0
                });
            }
        }
    },
    '_hl<drop>'(e) {
        this['_fu'](e);
        index_1['_jC'](this);
        let enter = this.get('enter');
        let src = State.get('dY');
        if (src &&
            enter) {
            e['_ey'] = 1;
            let props = this.get('props');
            let { bind } = props;
            let element = this.get('element');
            let oldStringify = [bind.id, bind.url].concat(bind.fields).join('\x00');
            let newStringify = [src.id, src.url].concat(src.fields).join('\x00');
            if (oldStringify != newStringify) {
                bind.id = src.id;
                bind.url = src.url;
                bind.fields = [src.field];
                stage_selection_1["dF"](element);
                State.fire('dG', {
                    '_fm': {
                        [element.id]: 1
                    },
                    '_fn': {
                        [element.type]: 1
                    },
                    '_dF': {
                        '_hB': 1
                    }
                });
                this.assign({
                    props
                });
                history_1["dE"](history_1['ea'], stage_generic_1['dQ']([element]));
            }
            this.set({
                enter: 0
            });
            this.render();
        }
    }
};

});