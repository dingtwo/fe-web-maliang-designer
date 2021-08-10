/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/tree/rect",["magix5","../../designer/const","../../designer/stage-elements","../../designer/stage-generic","../../designer/transform"],(require,exports,module)=>{


let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let stage_elements_1 = require("../../designer/stage-elements");
let stage_generic_1 = require("../../designer/stage-generic");
let transform_1 = require("../../designer/transform");
let { node, config, guid, inside } = magix_1;
let RId = guid('rp_');
let { max } = Math;
let root;
let RectPole = {
    '@:{init~rs}'() {
        let n = node(RId);
        if (!n) {
            root = node(config('rootId'));
            root.insertAdjacentHTML("beforeend", `<div class="rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1 rd-_panels_tree_index_less_-rect" id="${RId}"></div>`);
        }
    },
    '@:{show~rs}'(element, dest) {
        let ns = node(RId).style;
        let rb = root.getBoundingClientRect();
        let styles = getComputedStyle(root);
        let borderLeft = parseInt(styles.borderLeftWidth, 10) || 0;
        let borderTop = parseInt(styles.borderTopWidth, 10) || 0;
        let { props } = element, pos;
        let x = const_1['@:{const#to.px~rs}'](props.x), y = const_1['@:{const#to.px~rs}'](props.y), width = const_1['@:{const#to.px~rs}'](props.width), height = const_1['@:{const#to.px~rs}'](props.height);
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
            pos = transform_1["@:{transform#stage.to.real.coord~rs}"]({
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
    '@:{hide~rs}'() {
        let styles = node(RId).style;
        styles.left = '-10000px';
        styles.top = '-10000px';
    }
};
module.exports= {
    '@:{setup~rs}'() {
        RectPole['@:{init~rs}']();
    },
    '@:{hide.pole~rs}'() {
        RectPole['@:{hide~rs}']();
    },
    '@:{show.rect~rs}<pointerover>'(e) {
        let flag = inside(e.relatedTarget, e.eventTarget);
        if (!flag) {
            let { element, dest } = e.params;
            RectPole["@:{show~rs}"](element, dest);
        }
    },
    '@:{hide.rect~rs}<pointerout>'(e) {
        let flag = inside(e.relatedTarget, e.eventTarget);
        if (!flag) {
            RectPole["@:{hide~rs}"]();
        }
    },
    '@:{select.element~rs}<click>'(e) {
        if (e['@:{halt~rs}'])
            return;
        let { params, shiftKey, ctrlKey, metaKey } = e;
        let { element, dest } = params;
        stage_elements_1['@:{elements#single.or.multi.select~rs}'](element, shiftKey || ctrlKey || metaKey);
        //修正元素聚焦滚动到视区内时，hover高亮元素的指示元素也需要更新位置
        RectPole["@:{show~rs}"](element, dest);
    },
    '@:{remove.element~rs}<click>'(e) {
        e['@:{halt~rs}'] = 1;
        let { element } = e.params;
        stage_generic_1['@:{generic#delete.select.elements~rs}'](element, '@:{delete.from.tree.panel~rs}');
        RectPole['@:{hide~rs}']();
    }
};

});