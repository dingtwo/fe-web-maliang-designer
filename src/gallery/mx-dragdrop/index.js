/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-dragdrop/index",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("magix5");
let { attach, detach } = magix_1;
let Win = window;
let Doc = document;
let IsW3C = Win.getComputedStyle;
let ClearSelection = (t) => {
    if ((t = Win.getSelection)) {
        t().removeAllRanges();
    }
};
let DragPrevent = e => e.preventDefault();
let DragMoveEvent = ['pointermove'];
let DragEndEvent = ['pointerup', 'pointercancel'];
let DragPreventEvent = ['keydown', 'wheel', 'DOMMouseScroll', 'fullscreenchange', 'selectstart'];
let passiveObject = {
    passive: false
};
let dragKey = '@:{drag.count~rs}';
module.exports= {
    ctor() {
        let me = this;
        me.on('destroy', () => {
            me['@:{drag.end~rs}']();
        });
    },
    '@:{is.dragenter~rs}'(owner, key) {
        key || (key = dragKey);
        let ref = owner[key];
        if (!ref) {
            owner[key] = 0;
        }
        owner[key]++;
        return !ref;
    },
    '@:{is.dragleave~rs}'(owner, key) {
        key || (key = dragKey);
        let ref = owner[key];
        if (ref) {
            owner[key]--;
        }
        return ref === 1;
    },
    '@:{clear.drag~rs}'(owner, key) {
        delete owner[key || dragKey];
    },
    '@:{drag.end~rs}'(e) {
        let me = this;
        let info = me['@:{move.proxy~rs}'];
        if (info) {
            let fn;
            for (fn of DragMoveEvent) {
                detach(Doc, fn, me['@:{move.proxy~rs}']);
            }
            for (fn of DragEndEvent) {
                detach(Doc, fn, me['@:{stop.proxy~rs}']);
            }
            for (fn of DragPreventEvent) {
                detach(Doc, fn, DragPrevent);
            }
            detach(Win, 'blur', me['@:{stop.proxy~rs}']);
            delete me['@:{move.proxy~rs}'];
            let stop = me['@:{stop.callback~rs}'];
            if (stop) {
                stop(e);
            }
        }
    },
    '@:{drag.drop~rs}'(e, moveCallback, endCallback) {
        let me = this;
        me['@:{drag.end~rs}']();
        if (e) {
            ClearSelection();
            me['@:{stop.callback~rs}'] = endCallback;
            me['@:{stop.proxy~rs}'] = me['@:{drag.end~rs}'].bind(me);
            me['@:{move.proxy~rs}'] = e => {
                if (moveCallback) {
                    moveCallback(e);
                }
            };
            let fn;
            for (fn of DragMoveEvent) {
                attach(Doc, fn, me['@:{move.proxy~rs}']);
            }
            for (fn of DragEndEvent) {
                attach(Doc, fn, me['@:{stop.proxy~rs}']);
            }
            for (fn of DragPreventEvent) {
                attach(Doc, fn, DragPrevent, passiveObject);
            }
            attach(Win, 'blur', me['@:{stop.proxy~rs}']);
        }
    },
    /**
     * 获取某坐标点的dom元素
     * @param x x坐标
     * @param y y坐标
     */
    '@:{from.point~rs}'(x, y) {
        let node;
        if (Doc.elementFromPoint) {
            if (!DragPrevent['@:{fixed~rs}'] && IsW3C) {
                DragPrevent['@:{fixed~rs}'] = 1;
                DragPrevent['@:{add.scroll~rs}'] = Doc.elementFromPoint(-1, -1) !== null;
            }
            if (DragPrevent['@:{add.scroll~rs}']) {
                x += window.pageXOffset;
                y += window.pageYOffset;
            }
            node = Doc.elementFromPoint(x, y);
            while (node && node.nodeType == 3)
                node = node.parentNode;
        }
        return node;
    },
    '@:{clear.selection~rs}': ClearSelection
};

});