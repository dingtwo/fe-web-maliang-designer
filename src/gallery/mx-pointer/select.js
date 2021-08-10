/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-pointer/select",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { node, applyStyle, guid, config } = magix_1;
applyStyle("rd-_gallery_mx-pointer_select_less_",".rd-_gallery_mx-pointer_select_less_-icon {\nleft:2px;\ntop:-20px;\ncolor:#666;\n}\n.rd-_gallery_mx-pointer_select_less_-text {\ntop:-21px;\nleft:22px;\ncolor:#999;\nwhite-space:nowrap;\n}\n");
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
    '@:{init~rs}'() {
        let n = node(SId);
        if (!n) {
            let dest = getRoot();
            dest.insertAdjacentHTML('beforeend', `<div id="${SId}" class="rd-_assets_index_less_-select-rect rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-pa rd-_assets_index_less_-designer-root"><div class="rd-_assets_index_less_-pa rd-_assets_index_less_-iconfont rd-_gallery_mx-pointer_select_less_-icon" id="${SId}_i"></div><div class="rd-_assets_index_less_-pa rd-_assets_index_less_-fontsize-12 rd-_gallery_mx-pointer_select_less_-text" id="${SId}_t"></div></div>`);
        }
    },
    '@:{update.icon~rs}'(icon) {
        let n = node(SId + '_i');
        n.innerHTML = icon;
        n.style.display = 'block';
    },
    '@:{update.text~rs}'(text) {
        let n = node(SId + '_t');
        n.innerHTML = text;
        n.style.display = 'block';
    },
    '@:{update~rs}'(left, top, width, height) {
        prepareRootRect();
        selectStyle.left = left - rootRect.x - borderLeft + 'px';
        selectStyle.top = top - rootRect.y - borderTop + 'px';
        selectStyle.width = width + 'px';
        selectStyle.height = height + 'px';
        selectStyle.display = 'block';
    },
    '@:{hide~rs}'() {
        for (let i of [SId, SId + '_i', SId + '_t']) {
            node(i).style.display = 'none';
        }
        rootRect = null;
        selectStyle = null;
    }
};

});