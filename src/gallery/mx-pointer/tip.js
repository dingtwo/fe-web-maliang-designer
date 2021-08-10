/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/4n/tip",["4e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let { applyStyle } = magix_1;
applyStyle("rd-d8",".rd-jm{background:#fa742b;border-radius:2px;color:#fff;padding:2px 4px}");
let tipNode;
let tipNodeClassList;
let none = 'rd-eq';
let xOffset = 10, yOffset = 15;
let init = () => {
    if (!tipNode) {
        tipNode = document.createElement('div');
        tipNode.className = `rd-el rd-dE rd-fw rd-fL rd-jm ${none}`;
        document.body.appendChild(tipNode);
        tipNodeClassList = tipNode.classList;
    }
};
module.exports= {
    '_gl'(text) {
        init();
        tipNode.innerHTML = text;
        if (tipNodeClassList.contains(none)) {
            tipNodeClassList.remove(none);
        }
    },
    '_go'(x, y) {
        tipNode.style.left = (x + xOffset) + 'px';
        tipNode.style.top = (y + yOffset) + 'px';
    },
    '_ed'() {
        if (tipNodeClassList) {
            tipNodeClassList.add(none);
        }
    }
};

});