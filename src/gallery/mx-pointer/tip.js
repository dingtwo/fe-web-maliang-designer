/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/5a/tip",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let { applyStyle } = magix_1;
applyStyle("rd-gH",".rd-lW{background:#47b34e;border-radius:2px;color:#fff;padding:2px 4px}");
let tipNode;
let tipNodeClassList;
let none = 'rd-g0';
let xOffset = 10, yOffset = 15;
let init = () => {
    if (!tipNode) {
        tipNode = document.createElement('div');
        tipNode.className = `rd-gV rd-gd rd-h6 rd-ik rd-lW ${none}`;
        document.body.appendChild(tipNode);
        tipNodeClassList = tipNode.classList;
    }
};
module.exports= {
    '_iY'(text) {
        init();
        tipNode.innerHTML = text;
        if (tipNodeClassList.contains(none)) {
            tipNodeClassList.remove(none);
        }
    },
    '_i1'(x, y) {
        tipNode.style.left = (x + xOffset) + 'px';
        tipNode.style.top = (y + yOffset) + 'px';
    },
    '_gN'() {
        if (tipNodeClassList) {
            tipNodeClassList.add(none);
        }
    }
};

});