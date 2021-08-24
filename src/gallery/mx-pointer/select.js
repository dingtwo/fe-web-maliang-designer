/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/5a/select",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let { node, applyStyle, guid, config } = magix_1;
applyStyle("rd-gG",".rd-lU{color:#666;left:2px;top:-20px}.rd-lV{color:#999;left:22px;top:-21px;white-space:nowrap}");
let SId = guid('_mx_select_');
let rootRect, selectStyle, borderLeft, borderTop;
let getRoot = () => {
    let root = config('rootId');
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
module.exports= {
    '_hf'() {
        let n = node(SId);
        if (!n) {
            let dest = getRoot();
            dest.insertAdjacentHTML('beforeend', `<div id="${SId}" class="rd-ie rd-gX rd-gV rd-gd"><div class="rd-gV rd-ge rd-lU" id="${SId}_i"></div><div class="rd-gV rd-h6 rd-lV" id="${SId}_t"></div></div>`);
        }
    },
    '_nx'(icon) {
        let n = node(SId + '_i');
        n.innerHTML = icon;
        n.style.display = 'block';
    },
    '_k3'(text) {
        let n = node(SId + '_t');
        n.innerHTML = text;
        n.style.display = 'block';
    },
    '_iA'(left, top, width, height) {
        prepareRootRect();
        selectStyle.left = left - rootRect.x - borderLeft + 'px';
        selectStyle.top = top - rootRect.y - borderTop + 'px';
        selectStyle.width = width + 'px';
        selectStyle.height = height + 'px';
        selectStyle.display = 'block';
    },
    '_gN'() {
        for (let i of [SId, SId + '_i', SId + '_t']) {
            node(i).style.display = 'none';
        }
        rootRect = null;
        selectStyle = null;
    }
};

});