/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/59/index",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
 */
let magix_1 = require("51");
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
let dragKey = '_mc';
module.exports= {
    ctor() {
        let me = this;
        me.on('destroy', () => {
            me['_md']();
        });
    },
    '_kb'(owner, key) {
        key || (key = dragKey);
        let ref = owner[key];
        if (!ref) {
            owner[key] = 0;
        }
        owner[key]++;
        return !ref;
    },
    '_kc'(owner, key) {
        key || (key = dragKey);
        let ref = owner[key];
        if (ref) {
            owner[key]--;
        }
        return ref === 1;
    },
    '_me'(owner, key) {
        delete owner[key || dragKey];
    },
    '_md'(e) {
        let me = this;
        let info = me['_mf'];
        if (info) {
            let fn;
            for (fn of DragMoveEvent) {
                detach(Doc, fn, me['_mf']);
            }
            for (fn of DragEndEvent) {
                detach(Doc, fn, me['_mg']);
            }
            for (fn of DragPreventEvent) {
                detach(Doc, fn, DragPrevent);
            }
            detach(Win, 'blur', me['_mg']);
            delete me['_mf'];
            let stop = me['_mh'];
            if (stop) {
                stop(e);
            }
        }
    },
    '_gL'(e, moveCallback, endCallback) {
        let me = this;
        me['_md']();
        if (e) {
            ClearSelection();
            me['_mh'] = endCallback;
            me['_mg'] = me['_md'].bind(me);
            me['_mf'] = e => {
                if (moveCallback) {
                    moveCallback(e);
                }
            };
            let fn;
            for (fn of DragMoveEvent) {
                attach(Doc, fn, me['_mf']);
            }
            for (fn of DragEndEvent) {
                attach(Doc, fn, me['_mg']);
            }
            for (fn of DragPreventEvent) {
                attach(Doc, fn, DragPrevent, passiveObject);
            }
            attach(Win, 'blur', me['_mg']);
        }
    },
    /**
     * 获取某坐标点的dom元素
     * @param x x坐标
     * @param y y坐标
     */
    '_hm'(x, y) {
        let node;
        if (Doc.elementFromPoint) {
            if (!DragPrevent['_mi'] && IsW3C) {
                DragPrevent['_mi'] = 1;
                DragPrevent['_mj'] = Doc.elementFromPoint(-1, -1) !== null;
            }
            if (DragPrevent['_mj']) {
                x += window.pageXOffset;
                y += window.pageYOffset;
            }
            node = Doc.elementFromPoint(x, y);
            while (node && node.nodeType == 3)
                node = node.parentNode;
        }
        return node;
    },
    '_mk': ClearSelection
};

});