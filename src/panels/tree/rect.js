/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/tree/rect",["51","../../50/53","../../50/5p","../../50/5q","../../50/54"],(require,exports,module)=>{


let magix_1 = require("51");
let const_1 = require("../../50/53");
let stage_elements_1 = require("../../50/5p");
let stage_generic_1 = require("../../50/5q");
let transform_1 = require("../../50/54");
let { node, config, guid, inside } = magix_1;
let RId = guid('rp_');
let { max } = Math;
let root;
let RectPole = {
    '_hf'() {
        let n = node(RId);
        if (!n) {
            root = node(config('rootId'));
            root.insertAdjacentHTML("beforeend", `<div class="rd-gV rd-ig rd-mN" id="${RId}"></div>`);
        }
    },
    '_gM'(element, dest) {
        let ns = node(RId).style;
        let rb = root.getBoundingClientRect();
        let styles = getComputedStyle(root);
        let borderLeft = parseInt(styles.borderLeftWidth, 10) || 0;
        let borderTop = parseInt(styles.borderTopWidth, 10) || 0;
        let { props } = element, pos;
        let x = const_1['gY'](props.x), y = const_1['gY'](props.y), width = const_1['gY'](props.width), height = const_1['gY'](props.height);
        if (dest) {
            let n = node(dest);
            if (n) {
                pos = n.getBoundingClientRect();
            }
            else {
                console.log('not find', dest);
                //元素可能处于隐藏状态
                pos = {
                    x: -1e5,
                    y: -1e5
                };
            }
        }
        else {
            pos = transform_1["gi"]({
                x,
                y
            });
        }
        ns.left = pos.x - rb.x - borderLeft + 'px';
        ns.top = pos.y - rb.y - borderTop + 'px';
        ns.width = max(width, 1) + 'px';
        ns.height = max(height, 1) + 'px';
        let r = props.rotate || 0;
        ns.transform = `rotate(${r}deg)`;
    },
    '_gN'() {
        let styles = node(RId).style;
        styles.left = '-10000px';
        styles.top = '-10000px';
    }
};
module.exports= {
    '_lD'() {
        RectPole['_hf']();
    },
    '_o5'() {
        RectPole['_gN']();
    },
    '_o6<pointerover>'(e) {
        let flag = inside(e.relatedTarget, e.eventTarget);
        if (!flag) {
            let { element, dest } = e.params;
            RectPole["_gM"](element, dest);
        }
    },
    '_o7<pointerout>'(e) {
        let flag = inside(e.relatedTarget, e.eventTarget);
        if (!flag) {
            RectPole["_gN"]();
        }
    },
    '_o8<click>'(e) {
        if (e['_g8'])
            return;
        let { params, shiftKey, ctrlKey, metaKey } = e;
        let { element, dest } = params;
        stage_elements_1['gg'](element, shiftKey || ctrlKey || metaKey);
        //修正元素聚焦滚动到视区内时，hover高亮元素的指示元素也需要更新位置
        RectPole["_gM"](element, dest);
    },
    '_o9<click>'(e) {
        e['_g8'] = 1;
        let { element } = e.params;
        stage_generic_1['gG'](element, '_p_');
        RectPole['_gN']();
    }
};

});