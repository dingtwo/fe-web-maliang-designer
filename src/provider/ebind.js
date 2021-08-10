/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("provider/ebind",["magix5","../designer/history","../designer/stage-generic","../designer/stage-selection","../gallery/mx-dragdrop/index"],(require,exports,module)=>{


/**
 * 普通元素通用数据绑定
 */
let magix_1 = require("magix5");
let history_1 = require("../designer/history");
let stage_generic_1 = require("../designer/stage-generic");
let stage_selection_1 = require("../designer/stage-selection");
let index_1 = require("../gallery/mx-dragdrop/index");
let { State } = magix_1;
module.exports= {
    '@:{when.data.field.enter~rs}<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let contents = this['@:{has.contents~rs}'];
        if (contents) {
            for (let c of contents) {
                if (props[c]) {
                    return;
                }
            }
        }
        e['@:{halt~rs}'] = 1;
        if (index_1['@:{is.dragenter~rs}'](this)) {
            let src = State.get('@:{global#bind.field.drag.data~rs}');
            if (src) {
                this.digest({
                    enter: 1
                });
            }
        }
    },
    '@:{when.data.field.leave~rs}<dragleave>'(e) {
        let enter = this.get('enter');
        if (index_1['@:{is.dragleave~rs}'](this)) {
            if (enter) {
                this.digest({
                    enter: 0
                });
            }
        }
    },
    '@:{when.data.field.drop~rs}<drop>'(e) {
        this['@:{prevent.default~rs}'](e);
        index_1['@:{clear.drag~rs}'](this);
        let enter = this.get('enter');
        let src = State.get('@:{global#bind.field.drag.data~rs}');
        if (src &&
            enter) {
            e['@:{halt~rs}'] = 1;
            let props = this.get('props');
            let { bind } = props;
            let element = this.get('element');
            let oldStringify = [bind.id, bind.url].concat(bind.fields).join('\x00');
            let newStringify = [src.id, src.url].concat(src.fields).join('\x00');
            if (oldStringify != newStringify) {
                bind.id = src.id;
                bind.url = src.url;
                bind.fields = [src.field];
                stage_selection_1["@:{selection#set~rs}"](element);
                State.fire('@:{event#stage.select.element.props.change~rs}', {
                    '@:{ids~rs}': {
                        [element.id]: 1
                    },
                    '@:{types~rs}': {
                        [element.type]: 1
                    },
                    '@:{props~rs}': {
                        '@:{bind~rs}': 1
                    }
                });
                this.assign({
                    props
                });
                history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.props~rs}'], stage_generic_1['@:{generic#query.element.name~rs}']([element]));
            }
            this.set({
                enter: 0
            });
            this.render();
        }
    }
};

});