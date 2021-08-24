/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/5e",["51"],(require,exports,module)=>{


let magix_1 = require("51");
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
    State.fire('gm', {
        'ge': type == 'keydown',
        'gg': code,
        'gh': shiftKey,
        'gi': metaKey || ctrlKey,
        'gj': altKey,
        'gf': htmlNodeIsInputElement(Doc.activeElement),
        'gd': State.get('gj'),
        'gk'() {
            e.preventDefault();
        }
    });
};
module.exports= {
    /**
     * 以下导出code供外部统一使用
     */
    'gt': 'Escape',
    'gg': 'Backspace',
    'ge': 'Tab',
    'gh': 'ArrowLeft',
    'gj': 'ArrowUp',
    'gi': 'ArrowRight',
    'gk': 'ArrowDown',
    'gf': 'Delete',
    'gu': 'KeyA',
    'gv': 'KeyB',
    'gp': 'KeyC',
    'gw': 'KeyD',
    'gx': 'KeyF',
    'gy': 'KeyG',
    'gd': 'KeyH',
    'gz': 'KeyL',
    'gA': 'KeyI',
    'gq': 'KeyN',
    'gl': 'KeyP',
    'go': 'KeyS',
    'gB': 'KeyT',
    'gC': 'KeyU',
    'gD': 'KeyV',
    'gE': 'KeyX',
    'gF': 'KeyY',
    'gn': 'KeyZ',
    'gG': 'Space',
    'gH': 'Equal',
    'gI': 'Minus',
    'gJ': 'Digit0',
    'gm': 'Slash',
    'gr'() {
        attach(Doc, 'keydown', WatchKeypress);
        attach(Doc, 'keyup', WatchKeypress);
    },
    'gs'() {
        detach(Doc, 'keydown', WatchKeypress);
        detach(Doc, 'keyup', WatchKeypress);
    },
    'gK': htmlNodeIsInputElement
};

});