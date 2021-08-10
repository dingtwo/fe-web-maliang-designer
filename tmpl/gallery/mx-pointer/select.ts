/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { node, applyStyle, guid, config } = Magix;
applyStyle('@:select.less');
let SId = guid('_mx_select_');
let rootRect,
    selectStyle,
    borderLeft,
    borderTop;
let getRoot = () => {
    let root = config<string>('rootId');
    return node(root) || document.body;
};
let prepareRootRect = () => {
    if (!rootRect) {
        let dest = getRoot();
        rootRect = dest.getBoundingClientRect();
        selectStyle = node(SId).style;
        let rootStyle = dest.style;
        borderLeft = parseInt(rootStyle.borderLeftWidth, 10) || 0;
        borderTop = parseInt(rootStyle.borderTopWidth, 10) || 0;
    }
};
export default {
    '@:{init}'() {
        let n = node(SId);
        if (!n) {
            let dest = getRoot();
            dest.insertAdjacentHTML('beforeend', `<div id="${SId}" class="@:scoped.style:{select-rect,pointer-events-none,pa,designer-root}"><div class="@:scoped.style:{pa,iconfont} @:./select.less:icon" id="${SId}_i"></div><div class="@:scoped.style:{pa,fontsize-12} @:./select.less:text" id="${SId}_t"></div></div>`)
        }
    },
    '@:{update.icon}'(icon) {
        let n = node(SId + '_i');
        n.innerHTML = icon;
        n.style.display = 'block';
    },
    '@:{update.text}'(text) {
        let n = node(SId + '_t');
        n.innerHTML = text;
        n.style.display = 'block';
    },
    '@:{update}'(left, top, width, height) {
        prepareRootRect();
        selectStyle.left = left - rootRect.x - borderLeft + 'px';
        selectStyle.top = top - rootRect.y - borderTop + 'px';
        selectStyle.width = width + 'px';
        selectStyle.height = height + 'px';
        selectStyle.display = 'block';
    },
    '@:{hide}'() {
        for (let i of [SId, SId + '_i', SId + '_t']) {
            node(i).style.display = 'none';
        }
        rootRect = null;
        selectStyle = null;
    }
};