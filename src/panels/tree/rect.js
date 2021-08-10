/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/tree/rect",["4e","../../4d/4g","../../4d/56","../../4d/57","../../4d/4h"],(require,exports,module)=>{


let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let stage_elements_1 = require("../../4d/56");
let stage_generic_1 = require("../../4d/57");
let transform_1 = require("../../4d/4h");
let { node, config, guid, inside } = magix_1;
let RId = guid('rp_');
let { max } = Math;
let root;
let RectPole = {
    '_eG'() {
        let n = node(RId);
        if (!n) {
            root = node(config('rootId'));
            root.insertAdjacentHTML("beforeend", `<div class="rd-el rd-fH rd-kd" id="${RId}"></div>`);
        }
    },
    '_ec'(element, dest) {
        let ns = node(RId).style;
        let rb = root.getBoundingClientRect();
        let styles = getComputedStyle(root);
        let borderLeft = parseInt(styles.borderLeftWidth, 10) || 0;
        let borderTop = parseInt(styles.borderTopWidth, 10) || 0;
        let { props } = element, pos;
        let x = const_1['eo'](props.x), y = const_1['eo'](props.y), width = const_1['eo'](props.width), height = const_1['eo'](props.height);
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
            pos = transform_1["dJ"]({
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
    '_ed'() {
        let styles = node(RId).style;
        styles.left = '-10000px';
        styles.top = '-10000px';
    }
};
module.exports= {
    '_i1'() {
        RectPole['_eG']();
    },
    '_ms'() {
        RectPole['_ed']();
    },
    '_mt<pointerover>'(e) {
        let flag = inside(e.relatedTarget, e.eventTarget);
        if (!flag) {
            let { element, dest } = e.params;
            RectPole["_ec"](element, dest);
        }
    },
    '_mu<pointerout>'(e) {
        let flag = inside(e.relatedTarget, e.eventTarget);
        if (!flag) {
            RectPole["_ed"]();
        }
    },
    '_mv<click>'(e) {
        if (e['_ey'])
            return;
        let { params, shiftKey, ctrlKey, metaKey } = e;
        let { element, dest } = params;
        stage_elements_1['dH'](element, shiftKey || ctrlKey || metaKey);
        //修正元素聚焦滚动到视区内时，hover高亮元素的指示元素也需要更新位置
        RectPole["_ec"](element, dest);
    },
    '_mw<click>'(e) {
        e['_ey'] = 1;
        let { element } = e.params;
        stage_generic_1['d7'](element, '_mx');
        RectPole['_ed']();
    }
};

});