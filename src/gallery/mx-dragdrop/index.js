/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/5k/index",["5c"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("5c");
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
let dragKey = '_rY';
module.exports= {
    ctor() {
        let me = this;
        me.on('destroy', () => {
            me['_rZ']();
        });
    },
    '_pX'(owner, key) {
        key || (key = dragKey);
        let ref = owner[key];
        if (!ref) {
            owner[key] = 0;
        }
        owner[key]++;
        return !ref;
    },
    '_pY'(owner, key) {
        key || (key = dragKey);
        let ref = owner[key];
        if (ref) {
            owner[key]--;
        }
        return ref === 1;
    },
    '_r0'(owner, key) {
        delete owner[key || dragKey];
    },
    '_rZ'(e) {
        let me = this;
        let info = me['_r1'];
        if (info) {
            let fn;
            for (fn of DragMoveEvent) {
                detach(Doc, fn, me['_r1']);
            }
            for (fn of DragEndEvent) {
                detach(Doc, fn, me['_r2']);
            }
            for (fn of DragPreventEvent) {
                detach(Doc, fn, DragPrevent);
            }
            detach(Win, 'blur', me['_r2']);
            delete me['_r1'];
            let stop = me['_r3'];
            if (stop) {
                stop(e);
            }
        }
    },
    '_mz'(e, moveCallback, endCallback) {
        let me = this;
        me['_rZ']();
        if (e) {
            ClearSelection();
            me['_r3'] = endCallback;
            me['_r2'] = me['_rZ'].bind(me);
            me['_r1'] = e => {
                if (moveCallback) {
                    moveCallback(e);
                }
            };
            let fn;
            for (fn of DragMoveEvent) {
                attach(Doc, fn, me['_r1']);
            }
            for (fn of DragEndEvent) {
                attach(Doc, fn, me['_r2']);
            }
            for (fn of DragPreventEvent) {
                attach(Doc, fn, DragPrevent, passiveObject);
            }
            attach(Win, 'blur', me['_r2']);
        }
    },
    /**
     * 获取某坐标点的dom元素
     * @param x x坐标
     * @param y y坐标
     */
    '_na'(x, y) {
        let node;
        if (Doc.elementFromPoint) {
            if (!DragPrevent['_r4'] && IsW3C) {
                DragPrevent['_r4'] = 1;
                DragPrevent['_r5'] = Doc.elementFromPoint(-1, -1) !== null;
            }
            if (DragPrevent['_r5']) {
                x += window.pageXOffset;
                y += window.pageYOffset;
            }
            node = Doc.elementFromPoint(x, y);
            while (node && node.nodeType == 3)
                node = node.parentNode;
        }
        return node;
    },
    '_r6': ClearSelection
};

});