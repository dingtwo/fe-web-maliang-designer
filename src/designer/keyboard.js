/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/5p",["5c"],(require,exports,module)=>{


let magix_1 = require("5c");
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
    State.fire('ma', {
        'l3': type == 'keydown',
        'l5': code,
        'l6': shiftKey,
        'l7': metaKey || ctrlKey,
        'l8': altKey,
        'l4': htmlNodeIsInputElement(Doc.activeElement),
        'l2': State.get('l8'),
        'l9'() {
            e.preventDefault();
        }
    });
};
module.exports= {
    /**
     * 以下导出code供外部统一使用
     */
    'mh': 'Escape',
    'l5': 'Backspace',
    'l3': 'Tab',
    'l6': 'ArrowLeft',
    'l8': 'ArrowUp',
    'l7': 'ArrowRight',
    'l9': 'ArrowDown',
    'l4': 'Delete',
    'mi': 'KeyA',
    'mj': 'KeyB',
    'md': 'KeyC',
    'mk': 'KeyD',
    'ml': 'KeyF',
    'mm': 'KeyG',
    'l2': 'KeyH',
    'mn': 'KeyL',
    'mo': 'KeyI',
    'me': 'KeyN',
    'm_': 'KeyP',
    'mc': 'KeyS',
    'mp': 'KeyT',
    'mq': 'KeyU',
    'mr': 'KeyV',
    'ms': 'KeyX',
    'mt': 'KeyY',
    'mb': 'KeyZ',
    'mu': 'Space',
    'mv': 'Equal',
    'mw': 'Minus',
    'mx': 'Digit0',
    'ma': 'Slash',
    'mf'() {
        attach(Doc, 'keydown', WatchKeypress);
        attach(Doc, 'keyup', WatchKeypress);
    },
    'mg'() {
        detach(Doc, 'keydown', WatchKeypress);
        detach(Doc, 'keyup', WatchKeypress);
    },
    'my': htmlNodeIsInputElement
};

});