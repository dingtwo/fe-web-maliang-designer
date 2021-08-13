/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/5l/tip",["5c"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let { applyStyle } = magix_1;
applyStyle("rd-mv",".rd-rK{background:#47b34e;border-radius:2px;color:#fff;padding:2px 4px}");
let tipNode;
let tipNodeClassList;
let none = 'rd-mO';
let xOffset = 10, yOffset = 15;
let init = () => {
    if (!tipNode) {
        tipNode = document.createElement('div');
        tipNode.className = `rd-mJ rd-l2 rd-nU rd-n9 rd-rK ${none}`;
        document.body.appendChild(tipNode);
        tipNodeClassList = tipNode.classList;
    }
};
module.exports= {
    '_oJ'(text) {
        init();
        tipNode.innerHTML = text;
        if (tipNodeClassList.contains(none)) {
            tipNodeClassList.remove(none);
        }
    },
    '_oM'(x, y) {
        tipNode.style.left = (x + xOffset) + 'px';
        tipNode.style.top = (y + yOffset) + 'px';
    },
    '_mB'() {
        if (tipNodeClassList) {
            tipNodeClassList.add(none);
        }
    }
};

});