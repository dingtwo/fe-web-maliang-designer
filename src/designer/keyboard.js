/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/keyboard",["magix5"],(require,exports,module)=>{


let magix_1 = require("magix5");
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
    State.fire('@:{event#stage.key.press~rs}', {
        '@:{keypress#is.key.down~rs}': type == 'keydown',
        '@:{keypress#code~rs}': code,
        '@:{keypress#shift.key~rs}': shiftKey,
        '@:{keypress#ctrl.key~rs}': metaKey || ctrlKey,
        '@:{keypress#alt.key~rs}': altKey,
        '@:{keypress#active.is.input~rs}': htmlNodeIsInputElement(Doc.activeElement),
        '@:{keypress#is.prevent.actions~rs}': State.get('@:{global#stage.prevent.actions~rs}'),
        '@:{keypress#prevent.default~rs}'() {
            e.preventDefault();
        }
    });
};
module.exports= {
    /**
     * 以下导出code供外部统一使用
     */
    '@:{key#escape~rs}': 'Escape',
    '@:{key#backspace~rs}': 'Backspace',
    '@:{key#tab~rs}': 'Tab',
    '@:{key#left~rs}': 'ArrowLeft',
    '@:{key#up~rs}': 'ArrowUp',
    '@:{key#right~rs}': 'ArrowRight',
    '@:{key#down~rs}': 'ArrowDown',
    '@:{key#delete~rs}': 'Delete',
    '@:{key#a~rs}': 'KeyA',
    '@:{key#b~rs}': 'KeyB',
    '@:{key#c~rs}': 'KeyC',
    '@:{key#d~rs}': 'KeyD',
    '@:{key#f~rs}': 'KeyF',
    '@:{key#g~rs}': 'KeyG',
    '@:{key#h~rs}': 'KeyH',
    '@:{key#l~rs}': 'KeyL',
    '@:{key#i~rs}': 'KeyI',
    '@:{key#n~rs}': 'KeyN',
    '@:{key#p~rs}': 'KeyP',
    '@:{key#s~rs}': 'KeyS',
    '@:{key#t~rs}': 'KeyT',
    '@:{key#u~rs}': 'KeyU',
    '@:{key#v~rs}': 'KeyV',
    '@:{key#x~rs}': 'KeyX',
    '@:{key#y~rs}': 'KeyY',
    '@:{key#z~rs}': 'KeyZ',
    '@:{key#space~rs}': 'Space',
    '@:{key#ctrl.plus~rs}': 'Equal',
    '@:{key#ctrl.minus~rs}': 'Minus',
    '@:{key#num.zero~rs}': 'Digit0',
    '@:{key#slash~rs}': 'Slash',
    '@:{key#setup.monitor~rs}'() {
        attach(Doc, 'keydown', WatchKeypress);
        attach(Doc, 'keyup', WatchKeypress);
    },
    '@:{key#teardown.monitor~rs}'() {
        detach(Doc, 'keydown', WatchKeypress);
        detach(Doc, 'keyup', WatchKeypress);
    },
    '@:{key#is.input.element~rs}': htmlNodeIsInputElement
};

});