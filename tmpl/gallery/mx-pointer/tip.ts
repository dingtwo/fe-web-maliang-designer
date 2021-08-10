/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { applyStyle } = Magix;
applyStyle('@:tip.less');
let tipNode: HTMLDivElement;
let tipNodeClassList: DOMTokenList;
let none = '@:scoped.style:none';
let xOffset = 10,
    yOffset = 15;
let init = () => {
    if (!tipNode) {
        tipNode = document.createElement('div');
        tipNode.className = `@:scoped.style:{pa,designer-root,fontsize-12,z-index-8} @:./tip.less:root ${none}`;
        document.body.appendChild(tipNode);
        tipNodeClassList = tipNode.classList;
    }
}
export default {
    '@:{show.text}'(text) {
        init();
        tipNode.innerHTML = text;
        if (tipNodeClassList.contains(none)) {
            tipNodeClassList.remove(none);
        }
    },
    '@:{update.position}'(x, y) {
        tipNode.style.left = (x + xOffset) + 'px';
        tipNode.style.top = (y + yOffset) + 'px';
    },
    '@:{hide}'() {
        if (tipNodeClassList) {
            tipNodeClassList.add(none);
        }
    }
};