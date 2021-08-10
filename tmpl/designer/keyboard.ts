import Magix from 'magix';
let { State, attach, detach } = Magix;
let Doc = document;
/**
 * 检测当前页面中的活动节点是否是可输入节点，通常像光标处于input这样标签里面时，需要把快捷键优先给系统使用
 * @param element 待检测节点
 */
let htmlNodeIsInputElement = (element: Report.ActiveType) => {
    //console.log('active', element);
    let parent = element.parentNode as Report.ActiveType;
    return element.tabIndex > -1 ||//有tabIndex
        element.isContentEditable ||//内容区可编辑
        (parent && parent.tabIndex > -1);//父节点有tabIndex
};
//let InputRegexp = /^(?:input|textarea)$/i
//InputRegexp.test(active.tagName) ||;
let WatchKeypress = (e: KeyboardEvent) => {
    let { shiftKey,
        metaKey,
        ctrlKey,
        code,
        altKey,
        type } = e;
    //console.log(e);
    State.fire('@:{event#stage.key.press}', {
        '@:{keypress#is.key.down}': type == 'keydown',
        '@:{keypress#code}': code,
        '@:{keypress#shift.key}': shiftKey,
        '@:{keypress#ctrl.key}': metaKey || ctrlKey,
        '@:{keypress#alt.key}': altKey,
        '@:{keypress#active.is.input}': htmlNodeIsInputElement(Doc.activeElement as Report.ActiveType),
        '@:{keypress#is.prevent.actions}': State.get('@:{global#stage.prevent.actions}'),
        '@:{keypress#prevent.default}'() {
            e.preventDefault();
        }
    });
};
export default {
    /**
     * 以下导出code供外部统一使用
     */
    '@:{key#escape}': 'Escape',
    '@:{key#backspace}': 'Backspace',
    '@:{key#tab}': 'Tab',
    '@:{key#left}': 'ArrowLeft',
    '@:{key#up}': 'ArrowUp',
    '@:{key#right}': 'ArrowRight',
    '@:{key#down}': 'ArrowDown',
    '@:{key#delete}': 'Delete',
    '@:{key#a}': 'KeyA',
    '@:{key#b}': 'KeyB',
    '@:{key#c}': 'KeyC',
    '@:{key#d}': 'KeyD',
    '@:{key#f}': 'KeyF',
    '@:{key#g}': 'KeyG',
    '@:{key#h}': 'KeyH',
    '@:{key#l}': 'KeyL',
    '@:{key#i}': 'KeyI',
    '@:{key#n}': 'KeyN',
    '@:{key#p}': 'KeyP',
    '@:{key#s}': 'KeyS',
    '@:{key#t}': 'KeyT',
    '@:{key#u}': 'KeyU',
    '@:{key#v}': 'KeyV',
    '@:{key#x}': 'KeyX',
    '@:{key#y}': 'KeyY',
    '@:{key#z}': 'KeyZ',
    '@:{key#space}': 'Space',
    '@:{key#ctrl.plus}': 'Equal',
    '@:{key#ctrl.minus}': 'Minus',
    '@:{key#num.zero}': 'Digit0',
    '@:{key#slash}': 'Slash',
    '@:{key#setup.monitor}'() {
        attach(Doc, 'keydown', WatchKeypress);
        attach(Doc, 'keyup', WatchKeypress);
    },
    '@:{key#teardown.monitor}'() {
        detach(Doc, 'keydown', WatchKeypress);
        detach(Doc, 'keyup', WatchKeypress);
    },
    '@:{key#is.input.element}': htmlNodeIsInputElement
};