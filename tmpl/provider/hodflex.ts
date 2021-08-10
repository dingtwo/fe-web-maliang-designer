import Magix from 'magix';
import Const from '../designer/const';
import DHistory from '../designer/history';
import Transform from '../designer/transform';
import Cursor from '../gallery/mx-pointer/cursor';
import PointerTip from '../gallery/mx-pointer/tip';
import Box from './cell';

let { State } = Magix;
export default {
    '@:{start.resize}<pointerdown>'(e) {
        if (e['@:{halt}'] || e.button) return;
        e['@:{halt}'] = 1;
        let me = this;
        let element = this.get('element');
        let { props, ctrl, id } = element;
        let { focusRow, focusCol, rows, ename,
            x: elementX,
            y: elementY } = props;
        if (focusRow == -1 || focusCol == -1) return;
        State.fire('@:{event#stage.toggle.scroll}', {
            show: 1,
            size: 1
        });
        let scale = State.get('@:{global#stage.scale}');
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
        let minWidth = Const['@:{const#to.unit}'](Box["@:{min.width}"] * scale);
        let minHeight = Const['@:{const#to.unit}'](Box["@:{min.height}"] * scale);
        let moveEvent,
            nearsideScrollOffset;
        let moveCallback = async () => {
            if (!moved) {
                Cursor["@:{show}"](current);
                moved = 1;
            }
            let diffWidth = moveEvent.pageX - beginX;
            let diffHeight = moveEvent.pageY - beginY;
            if (nearsideScrollOffset) {
                diffHeight += nearsideScrollOffset['@:{interval.move.event#y}'];
                diffWidth += nearsideScrollOffset['@:{interval.move.event#x}'];
            }
            let offsetHeight = Const['@:{const#to.unit}']((modifyHeight ? diffHeight : 0) * oppsiteHeight);
            let offsetWidth = Const['@:{const#to.unit}']((modifyWidth ? diffWidth : 0) * oppsiteWidth);
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
            let hflex = cell.width != null,
                vflex = row.width != null;
            if ((hflex && (
                newWidth != cell.width ||
                newHeight != row.height)) ||
                (vflex && (
                    newWidth != row.width ||
                    newHeight != cell.height))) {
                if (hflex) {
                    row.height = newHeight;
                    cell.width = newWidth;
                } else if (vflex) {
                    cell.height = newHeight;
                    row.width = newWidth;
                }
                props.x = elementX + movedX;
                props.y = elementY + movedY;
                ctrl['@:{update.props}'](props);
                await parent.invoke('@:{update}', [element]);
                State.fire('@:{event#stage.select.element.props.change}', {
                    '@:{ids}': {
                        [id]: 1
                    },
                    '@:{types}': {
                        [element.type]: 1
                    },
                    '@:{props}': {
                        '@:{size}': 1
                    }
                });
            }
            if (nearsideScrollOffset &&
                !nearsideScrollOffset['@:{interval.move.event#called}']) {
                nearsideScrollOffset['@:{interval.move.event#called}'] = 1;
                nearsideScrollOffset['@:{interval.move.event#ready}']();
            }
            let tipWidth = Transform['@:{transform#to.show.value}'](newWidth),
                tipHeight = Transform['@:{transform#to.show.value}'](newHeight),
                tipMsg = `${tipWidth} x ${tipHeight}`;
            PointerTip['@:{show.text}'](tipMsg);
            PointerTip['@:{update.position}'](moveEvent.pageX, moveEvent.pageY);
        };
        let watchIntervalMove = (e: Report.EventOfIntervallMove) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        State.on('@:{event#stage.interval.move}', watchIntervalMove);
        me['@:{drag.drop}'](e, evt => {
            State.fire('@:{event#drag.element.move}', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('@:{event#stage.interval.move}', watchIntervalMove);
            State.fire('@:{event#drag.element.stop}');
            if (moved) {
                DHistory["@:{history#save}"](DHistory['@:{history#element.modified.size}'], ename);
                Cursor["@:{hide}"]();
            }
            State.fire('@:{event#stage.toggle.scroll}', {
                hide: 1
            });
            PointerTip['@:{hide}']();
        });
    }
}