/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/tree/rect",["5c","../../5b/5e","../../5b/64","../../5b/65","../../5b/5f"],(require,exports,module)=>{


let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let stage_elements_1 = require("../../5b/64");
let stage_generic_1 = require("../../5b/65");
let transform_1 = require("../../5b/5f");
let { node, config, guid, inside } = magix_1;
let RId = guid('rp_');
let { max } = Math;
let root;
let RectPole = {
    '_m4'() {
        let n = node(RId);
        if (!n) {
            root = node(config('rootId'));
            root.insertAdjacentHTML("beforeend", `<div class="rd-mJ rd-n5 rd-sB" id="${RId}"></div>`);
        }
    },
    '_mA'(element, dest) {
        let ns = node(RId).style;
        let rb = root.getBoundingClientRect();
        let styles = getComputedStyle(root);
        let borderLeft = parseInt(styles.borderLeftWidth, 10) || 0;
        let borderTop = parseInt(styles.borderTopWidth, 10) || 0;
        let { props } = element, pos;
        let x = const_1['mM'](props.x), y = const_1['mM'](props.y), width = const_1['mM'](props.width), height = const_1['mM'](props.height);
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
            pos = transform_1["l7"]({
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
    '_mB'() {
        let styles = node(RId).style;
        styles.left = '-10000px';
        styles.top = '-10000px';
    }
};
module.exports= {
    '_ro'() {
        RectPole['_m4']();
    },
    '_uQ'() {
        RectPole['_mB']();
    },
    '_uR<pointerover>'(e) {
        let flag = inside(e.relatedTarget, e.eventTarget);
        if (!flag) {
            let { element, dest } = e.params;
            RectPole["_mA"](element, dest);
        }
    },
    '_uS<pointerout>'(e) {
        let flag = inside(e.relatedTarget, e.eventTarget);
        if (!flag) {
            RectPole["_mB"]();
        }
    },
    '_uT<click>'(e) {
        if (e['_mW'])
            return;
        let { params, shiftKey, ctrlKey, metaKey } = e;
        let { element, dest } = params;
        stage_elements_1['l5'](element, shiftKey || ctrlKey || metaKey);
        //修正元素聚焦滚动到视区内时，hover高亮元素的指示元素也需要更新位置
        RectPole["_mA"](element, dest);
    },
    '_uU<click>'(e) {
        e['_mW'] = 1;
        let { element } = e.params;
        stage_generic_1['mu'](element, '_uV');
        RectPole['_mB']();
    }
};

});