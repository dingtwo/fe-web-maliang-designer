/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/4n/select",["4e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let { node, applyStyle, guid, config } = magix_1;
applyStyle("rd-d7",".rd-jk{color:#666;left:2px;top:-20px}.rd-jl{color:#999;left:22px;top:-21px;white-space:nowrap}");
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
    '_eG'() {
        let n = node(SId);
        if (!n) {
            let dest = getRoot();
            dest.insertAdjacentHTML('beforeend', `<div id="${SId}" class="rd-fF rd-en rd-el rd-dE"><div class="rd-el rd-dF rd-jk" id="${SId}_i"></div><div class="rd-el rd-fw rd-jl" id="${SId}_t"></div></div>`);
        }
    },
    '_kV'(icon) {
        let n = node(SId + '_i');
        n.innerHTML = icon;
        n.style.display = 'block';
    },
    '_iq'(text) {
        let n = node(SId + '_t');
        n.innerHTML = text;
        n.style.display = 'block';
    },
    '_fY'(left, top, width, height) {
        prepareRootRect();
        selectStyle.left = left - rootRect.x - borderLeft + 'px';
        selectStyle.top = top - rootRect.y - borderTop + 'px';
        selectStyle.width = width + 'px';
        selectStyle.height = height + 'px';
        selectStyle.display = 'block';
    },
    '_ed'() {
        for (let i of [SId, SId + '_i', SId + '_t']) {
            node(i).style.display = 'none';
        }
        rootRect = null;
        selectStyle = null;
    }
};

});