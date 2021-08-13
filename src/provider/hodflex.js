/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/hodflex",["5c","../5b/5e","../5b/5o","../5b/5f","../5j/5l/cursor","../5j/5l/tip","./cell"],(require,exports,module)=>{


let magix_1 = require("5c");
let const_1 = require("../5b/5e");
let history_1 = require("../5b/5o");
let transform_1 = require("../5b/5f");
let cursor_1 = require("../5j/5l/cursor");
let tip_1 = require("../5j/5l/tip");
let cell_1 = require("./cell");
let { State } = magix_1;
module.exports= {
    '_qd<pointerdown>'(e) {
        if (e['_mW'] || e.button)
            return;
        e['_mW'] = 1;
        let me = this;
        let element = this.get('element');
        let { props, ctrl, id } = element;
        let { focusRow, focusCol, rows, ename, x: elementX, y: elementY } = props;
        if (focusRow == -1 || focusCol == -1)
            return;
        State.fire('mq', {
            show: 1,
            size: 1
        });
        let scale = State.get('l3');
        let row = rows[focusRow];
        let cell = row.cols[focusCol];
        let { key } = e.params;
        let [handY, handX] = key;
        let moved = 0;
        let beginWidth = cell.width != null ? cell.width : row.width;
        let beginHeight = row.height != null ? row.height : cell.height;
        let beginX = e.pageX;
        let beginY = e.pageY;
        let parent = me.owner.parent();
        let current = e.eventTarget;
        let modifyWidth = handX != 'm';
        let modifyHeight = handY != 'm';
        let oppsiteWidth = handX == 'l' ? -1 : 1;
        let oppsiteHeight = handY == 't' ? -1 : 1;
        let movedX = 0, movedY = 0;
        let minWidth = const_1['l3'](cell_1["_q3"] * scale);
        let minHeight = const_1['l3'](cell_1["_q5"] * scale);
        let moveEvent, nearsideScrollOffset;
        let moveCallback = async () => {
            if (!moved) {
                cursor_1["_mA"](current);
                moved = 1;
            }
            let diffWidth = moveEvent.pageX - beginX;
            let diffHeight = moveEvent.pageY - beginY;
            if (nearsideScrollOffset) {
                diffHeight += nearsideScrollOffset['l2'];
                diffWidth += nearsideScrollOffset['l3'];
            }
            let offsetHeight = const_1['l3']((modifyHeight ? diffHeight : 0) * oppsiteHeight);
            let offsetWidth = const_1['l3']((modifyWidth ? diffWidth : 0) * oppsiteWidth);
            let newWidth = beginWidth + offsetWidth;
            let newHeight = beginHeight + offsetHeight;
            if (newWidth <= minWidth) {
                newWidth = minWidth;
            }
            if (newHeight <= minHeight) {
                newHeight = minHeight;
            }
            if (oppsiteHeight == -1) {
                movedY = beginHeight - newHeight;
            }
            if (oppsiteWidth == -1) {
                movedX = beginWidth - newWidth;
            }
            let hflex = cell.width != null, vflex = row.width != null;
            if ((hflex && (newWidth != cell.width ||
                newHeight != row.height)) ||
                (vflex && (newWidth != row.width ||
                    newHeight != cell.height))) {
                if (hflex) {
                    row.height = newHeight;
                    cell.width = newWidth;
                }
                else if (vflex) {
                    cell.height = newHeight;
                    row.width = newWidth;
                }
                props.x = elementX + movedX;
                props.y = elementY + movedY;
                ctrl['_m3'](props);
                await parent.invoke('_ol', [element]);
                State.fire('l4', {
                    '_nK': {
                        [id]: 1
                    },
                    '_nL': {
                        [element.type]: 1
                    },
                    '_l3': {
                        '_l5': 1
                    }
                });
            }
            if (nearsideScrollOffset &&
                !nearsideScrollOffset['l4']) {
                nearsideScrollOffset['l4'] = 1;
                nearsideScrollOffset['l5']();
            }
            let tipWidth = transform_1['l5'](newWidth), tipHeight = transform_1['l5'](newHeight), tipMsg = `${tipWidth} x ${tipHeight}`;
            tip_1['_oJ'](tipMsg);
            tip_1['_oM'](moveEvent.pageX, moveEvent.pageY);
        };
        let watchIntervalMove = (e) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        State.on('mg', watchIntervalMove);
        me['_mz'](e, evt => {
            State.fire('mf', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('mg', watchIntervalMove);
            State.fire('mi');
            if (moved) {
                history_1["l2"](history_1['mx'], ename);
                cursor_1["_mB"]();
            }
            State.fire('mq', {
                hide: 1
            });
            tip_1['_mB']();
        });
    }
};

});