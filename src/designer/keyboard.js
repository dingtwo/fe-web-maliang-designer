/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/4r",["4e"],(require,exports,module)=>{


let magix_1 = require("4e");
let { State, attach, detach } = magix_1;
let Doc = document;
/**
 * 检测当前页面中的活动节点是否是可输入节点，通常像光标处于input这样标签里面时，需要把快捷键优先给系统使用
 * @param element 待检测节点
 */
let htmlNodeIsInputElement = (element) => {
    //console.log('active', element);
    let parent = element.parentNode;
    return element.tabIndex > -1 || //有tabIndex
        element.isContentEditable || //内容区可编辑
        (parent && parent.tabIndex > -1); //父节点有tabIndex
};
//let InputRegexp = /^(?:input|textarea)$/i
//InputRegexp.test(active.tagName) ||;
let WatchKeypress = (e) => {
    let { shiftKey, metaKey, ctrlKey, code, altKey, type } = e;
    //console.log(e);
    State.fire('dN', {
        'dF': type == 'keydown',
        'dH': code,
        'dI': shiftKey,
        'dJ': metaKey || ctrlKey,
        'dK': altKey,
        'dG': htmlNodeIsInputElement(Doc.activeElement),
        'dE': State.get('dK'),
        'dL'() {
            e.preventDefault();
        }
    });
};
module.exports= {
    /**
     * 以下导出code供外部统一使用
     */
    'dU': 'Escape',
    'dH': 'Backspace',
    'dF': 'Tab',
    'dI': 'ArrowLeft',
    'dK': 'ArrowUp',
    'dJ': 'ArrowRight',
    'dL': 'ArrowDown',
    'dG': 'Delete',
    'dV': 'KeyA',
    'dW': 'KeyB',
    'dQ': 'KeyC',
    'dX': 'KeyD',
    'dY': 'KeyF',
    'dZ': 'KeyG',
    'dE': 'KeyH',
    'd0': 'KeyL',
    'd1': 'KeyI',
    'dR': 'KeyN',
    'dM': 'KeyP',
    'dP': 'KeyS',
    'd2': 'KeyT',
    'd3': 'KeyU',
    'd4': 'KeyV',
    'd5': 'KeyX',
    'd6': 'KeyY',
    'dO': 'KeyZ',
    'd7': 'Space',
    'd8': 'Equal',
    'd9': 'Minus',
    'e_': 'Digit0',
    'dN': 'Slash',
    'dS'() {
        attach(Doc, 'keydown', WatchKeypress);
        attach(Doc, 'keyup', WatchKeypress);
    },
    'dT'() {
        detach(Doc, 'keydown', WatchKeypress);
        detach(Doc, 'keyup', WatchKeypress);
    },
    'ea': htmlNodeIsInputElement
};

});