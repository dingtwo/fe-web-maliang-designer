/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-pointer/tip",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { applyStyle } = magix_1;
applyStyle("rd-_gallery_mx-pointer_tip_less_","\n.rd-_gallery_mx-pointer_tip_less_-root {\nbackground:#47B34E;\nborder-radius:2px;\npadding:2px 4px;\ncolor:#ffffff;\n}\n");
let tipNode;
let tipNodeClassList;
let none = 'rd-_assets_index_less_-none';
let xOffset = 10, yOffset = 15;
let init = () => {
    if (!tipNode) {
        tipNode = document.createElement('div');
        tipNode.className = `rd-_assets_index_less_-pa rd-_assets_index_less_-designer-root rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-z-index-8 rd-_gallery_mx-pointer_tip_less_-root ${none}`;
        document.body.appendChild(tipNode);
        tipNodeClassList = tipNode.classList;
    }
};
module.exports= {
    '@:{show.text~rs}'(text) {
        init();
        tipNode.innerHTML = text;
        if (tipNodeClassList.contains(none)) {
            tipNodeClassList.remove(none);
        }
    },
    '@:{update.position~rs}'(x, y) {
        tipNode.style.left = (x + xOffset) + 'px';
        tipNode.style.top = (y + yOffset) + 'px';
    },
    '@:{hide~rs}'() {
        if (tipNodeClassList) {
            tipNodeClassList.add(none);
        }
    }
};

});