/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("provider/hodflex",["magix5","../designer/const","../designer/history","../designer/transform","../gallery/mx-pointer/cursor","../gallery/mx-pointer/tip","./cell"],(require,exports,module)=>{


let magix_1 = require("magix5");
let const_1 = require("../designer/const");
let history_1 = require("../designer/history");
let transform_1 = require("../designer/transform");
let cursor_1 = require("../gallery/mx-pointer/cursor");
let tip_1 = require("../gallery/mx-pointer/tip");
let cell_1 = require("./cell");
let { State } = magix_1;
module.exports= {
    '@:{start.resize~rs}<pointerdown>'(e) {
        if (e['@:{halt~rs}'] || e.button)
            return;
        e['@:{halt~rs}'] = 1;
        let me = this;
        let element = this.get('element');
        let { props, ctrl, id } = element;
        let { focusRow, focusCol, rows, ename, x: elementX, y: elementY } = props;
        if (focusRow == -1 || focusCol == -1)
            return;
        State.fire('@:{event#stage.toggle.scroll~rs}', {
            show: 1,
            size: 1
        });
        let scale = State.get('@:{global#stage.scale~rs}');
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
        let minWidth = const_1['@:{const#to.unit~rs}'](cell_1["@:{min.width~rs}"] * scale);
        let minHeight = const_1['@:{const#to.unit~rs}'](cell_1["@:{min.height~rs}"] * scale);
        let moveEvent, nearsideScrollOffset;
        let moveCallback = async () => {
            if (!moved) {
                cursor_1["@:{show~rs}"](current);
                moved = 1;
            }
            let diffWidth = moveEvent.pageX - beginX;
            let diffHeight = moveEvent.pageY - beginY;
            if (nearsideScrollOffset) {
                diffHeight += nearsideScrollOffset['@:{interval.move.event#y~rs}'];
                diffWidth += nearsideScrollOffset['@:{interval.move.event#x~rs}'];
            }
            let offsetHeight = const_1['@:{const#to.unit~rs}']((modifyHeight ? diffHeight : 0) * oppsiteHeight);
            let offsetWidth = const_1['@:{const#to.unit~rs}']((modifyWidth ? diffWidth : 0) * oppsiteWidth);
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
                ctrl['@:{update.props~rs}'](props);
                await parent.invoke('@:{update~rs}', [element]);
                State.fire('@:{event#stage.select.element.props.change~rs}', {
                    '@:{ids~rs}': {
                        [id]: 1
                    },
                    '@:{types~rs}': {
                        [element.type]: 1
                    },
                    '@:{props~rs}': {
                        '@:{size~rs}': 1
                    }
                });
            }
            if (nearsideScrollOffset &&
                !nearsideScrollOffset['@:{interval.move.event#called~rs}']) {
                nearsideScrollOffset['@:{interval.move.event#called~rs}'] = 1;
                nearsideScrollOffset['@:{interval.move.event#ready~rs}']();
            }
            let tipWidth = transform_1['@:{transform#to.show.value~rs}'](newWidth), tipHeight = transform_1['@:{transform#to.show.value~rs}'](newHeight), tipMsg = `${tipWidth} x ${tipHeight}`;
            tip_1['@:{show.text~rs}'](tipMsg);
            tip_1['@:{update.position~rs}'](moveEvent.pageX, moveEvent.pageY);
        };
        let watchIntervalMove = (e) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        State.on('@:{event#stage.interval.move~rs}', watchIntervalMove);
        me['@:{drag.drop~rs}'](e, evt => {
            State.fire('@:{event#drag.element.move~rs}', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('@:{event#stage.interval.move~rs}', watchIntervalMove);
            State.fire('@:{event#drag.element.stop~rs}');
            if (moved) {
                history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.size~rs}'], ename);
                cursor_1["@:{hide~rs}"]();
            }
            State.fire('@:{event#stage.toggle.scroll~rs}', {
                hide: 1
            });
            tip_1['@:{hide~rs}']();
        });
    }
};

});