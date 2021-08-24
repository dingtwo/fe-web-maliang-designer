/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5g/hodflex",["51","../50/53","../50/5d","../50/54","../58/5a/cursor","../58/5a/tip","./cell"],(require,exports,module)=>{


let magix_1 = require("51");
let const_1 = require("../50/53");
let history_1 = require("../50/5d");
let transform_1 = require("../50/54");
let cursor_1 = require("../58/5a/cursor");
let tip_1 = require("../58/5a/tip");
let cell_1 = require("./cell");
let { State } = magix_1;
module.exports= {
    '_ks<pointerdown>'(e) {
        if (e['_g8'] || e.button)
            return;
        e['_g8'] = 1;
        let me = this;
        let element = this.get('element');
        let { props, ctrl, id } = element;
        let { focusRow, focusCol, rows, ename, x: elementX, y: elementY } = props;
        if (focusRow == -1 || focusCol == -1)
            return;
        State.fire('gC', {
            show: 1,
            size: 1
        });
        let scale = State.get('ge');
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
        let minWidth = const_1['ge'](cell_1["_lh"] * scale);
        let minHeight = const_1['ge'](cell_1["_lj"] * scale);
        let moveEvent, nearsideScrollOffset;
        let moveCallback = async () => {
            if (!moved) {
                cursor_1["_gM"](current);
                moved = 1;
            }
            let diffWidth = moveEvent.pageX - beginX;
            let diffHeight = moveEvent.pageY - beginY;
            if (nearsideScrollOffset) {
                diffHeight += nearsideScrollOffset['gd'];
                diffWidth += nearsideScrollOffset['ge'];
            }
            let offsetHeight = const_1['ge']((modifyHeight ? diffHeight : 0) * oppsiteHeight);
            let offsetWidth = const_1['ge']((modifyWidth ? diffWidth : 0) * oppsiteWidth);
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
                ctrl['_he'](props);
                await parent.invoke('_iA', [element]);
                State.fire('gf', {
                    '_hW': {
                        [id]: 1
                    },
                    '_hX': {
                        [element.type]: 1
                    },
                    '_ge': {
                        '_gg': 1
                    }
                });
            }
            if (nearsideScrollOffset &&
                !nearsideScrollOffset['gf']) {
                nearsideScrollOffset['gf'] = 1;
                nearsideScrollOffset['gg']();
            }
            let tipWidth = transform_1['gg'](newWidth), tipHeight = transform_1['gg'](newHeight), tipMsg = `${tipWidth} x ${tipHeight}`;
            tip_1['_iY'](tipMsg);
            tip_1['_i1'](moveEvent.pageX, moveEvent.pageY);
        };
        let watchIntervalMove = (e) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        State.on('gs', watchIntervalMove);
        me['_gL'](e, evt => {
            State.fire('gr', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('gs', watchIntervalMove);
            State.fire('gu');
            if (moved) {
                history_1["gd"](history_1['gJ'], ename);
                cursor_1["_gN"]();
            }
            State.fire('gC', {
                hide: 1
            });
            tip_1['_gN']();
        });
    }
};

});