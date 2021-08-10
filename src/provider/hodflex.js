/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/hodflex",["4e","../4d/4g","../4d/4q","../4d/4h","../4l/4n/cursor","../4l/4n/tip","./cell"],(require,exports,module)=>{


let magix_1 = require("4e");
let const_1 = require("../4d/4g");
let history_1 = require("../4d/4q");
let transform_1 = require("../4d/4h");
let cursor_1 = require("../4l/4n/cursor");
let tip_1 = require("../4l/4n/tip");
let cell_1 = require("./cell");
let { State } = magix_1;
module.exports= {
    '_hQ<pointerdown>'(e) {
        if (e['_ey'] || e.button)
            return;
        e['_ey'] = 1;
        let me = this;
        let element = this.get('element');
        let { props, ctrl, id } = element;
        let { focusRow, focusCol, rows, ename, x: elementX, y: elementY } = props;
        if (focusRow == -1 || focusCol == -1)
            return;
        State.fire('d3', {
            show: 1,
            size: 1
        });
        let scale = State.get('dF');
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
        let minWidth = const_1['dF'](cell_1["_iF"] * scale);
        let minHeight = const_1['dF'](cell_1["_iH"] * scale);
        let moveEvent, nearsideScrollOffset;
        let moveCallback = async () => {
            if (!moved) {
                cursor_1["_ec"](current);
                moved = 1;
            }
            let diffWidth = moveEvent.pageX - beginX;
            let diffHeight = moveEvent.pageY - beginY;
            if (nearsideScrollOffset) {
                diffHeight += nearsideScrollOffset['dE'];
                diffWidth += nearsideScrollOffset['dF'];
            }
            let offsetHeight = const_1['dF']((modifyHeight ? diffHeight : 0) * oppsiteHeight);
            let offsetWidth = const_1['dF']((modifyWidth ? diffWidth : 0) * oppsiteWidth);
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
                ctrl['_eF'](props);
                await parent.invoke('_fY', [element]);
                State.fire('dG', {
                    '_fm': {
                        [id]: 1
                    },
                    '_fn': {
                        [element.type]: 1
                    },
                    '_dF': {
                        '_dH': 1
                    }
                });
            }
            if (nearsideScrollOffset &&
                !nearsideScrollOffset['dG']) {
                nearsideScrollOffset['dG'] = 1;
                nearsideScrollOffset['dH']();
            }
            let tipWidth = transform_1['dH'](newWidth), tipHeight = transform_1['dH'](newHeight), tipMsg = `${tipWidth} x ${tipHeight}`;
            tip_1['_gl'](tipMsg);
            tip_1['_go'](moveEvent.pageX, moveEvent.pageY);
        };
        let watchIntervalMove = (e) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        State.on('dT', watchIntervalMove);
        me['_eb'](e, evt => {
            State.fire('dS', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('dT', watchIntervalMove);
            State.fire('dV');
            if (moved) {
                history_1["dE"](history_1['e_'], ename);
                cursor_1["_ed"]();
            }
            State.fire('d3', {
                hide: 1
            });
            tip_1['_ed']();
        });
    }
};

});