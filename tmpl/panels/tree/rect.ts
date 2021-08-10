import Magix from 'magix';
import Const from '../../designer/const';
import StageElements from '../../designer/stage-elements';
import StageGeneric from '../../designer/stage-generic';
import Transform from '../../designer/transform';
let { node, config, guid, inside } = Magix;
let RId = guid('rp_');
let { max } = Math;
let root;
let RectPole = {
    '@:{init}'() {
        let n = node(RId);
        if (!n) {
            root = node(config('rootId'));
            root.insertAdjacentHTML("beforeend", `<div class="@:scoped.style:{pa,z-index-1} @:./index.less:rect" id="${RId}"></div>`)
        }
    },
    '@:{show}'(element, dest) {
        let ns = node(RId).style;
        let rb = root.getBoundingClientRect();
        let styles = getComputedStyle(root);
        let borderLeft = parseInt(styles.borderLeftWidth, 10) || 0;
        let borderTop = parseInt(styles.borderTopWidth, 10) || 0;
        let { props } = element,
            pos;
        let x = Const['@:{const#to.px}'](props.x),
            y = Const['@:{const#to.px}'](props.y),
            width = Const['@:{const#to.px}'](props.width),
            height = Const['@:{const#to.px}'](props.height);
        if (dest) {
            let n = node(dest);
            if (n) {
                pos = n.getBoundingClientRect();
            } else {
                console.log('not find', dest);
                //元素可能处于隐藏状态
                pos = {
                    x: -1e5,
                    y: -1e5
                };
            }
        } else {
            pos = Transform["@:{transform#stage.to.real.coord}"]({
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
    '@:{hide}'() {
        let styles = node(RId).style;
        styles.left = '-10000px';
        styles.top = '-10000px';
    }
};
export default {
    '@:{setup}'() {
        RectPole['@:{init}']();
    },
    '@:{hide.pole}'() {
        RectPole['@:{hide}']();
    },
    '@:{show.rect}<pointerover>'(e) {
        let flag = inside(e.relatedTarget, e.eventTarget);
        if (!flag) {
            let { element, dest } = e.params;
            RectPole["@:{show}"](element, dest);
        }
    },
    '@:{hide.rect}<pointerout>'(e) {
        let flag = inside(e.relatedTarget, e.eventTarget);
        if (!flag) {
            RectPole["@:{hide}"]();
        }
    },
    '@:{select.element}<click>'(e: Magix5.MagixMouseEvent) {
        if (e['@:{halt}']) return;
        let { params, shiftKey, ctrlKey, metaKey } = e;
        let { element, dest } = params;
        StageElements['@:{elements#single.or.multi.select}'](element, shiftKey || ctrlKey || metaKey);
        //修正元素聚焦滚动到视区内时，hover高亮元素的指示元素也需要更新位置
        RectPole["@:{show}"](element, dest);
    },
    '@:{remove.element}<click>'(e: Magix5.MagixMouseEvent) {
        e['@:{halt}'] = 1;
        let { element } = e.params;
        StageGeneric['@:{generic#delete.select.elements}'](element, '@:{delete.from.tree.panel}');
        RectPole['@:{hide}']();
    }
}