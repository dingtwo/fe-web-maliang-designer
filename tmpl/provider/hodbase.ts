import Magix from 'magix';
import Const from '../designer/const';
import Contextmenu from '../designer/contextmenu';
import DHistory from '../designer/history';
import Keyboard from '../designer/keyboard';
import StageClipboard from '../designer/stage-clipboard';
import StageElements from '../designer/stage-elements';
import StageGeneric from '../designer/stage-generic';
import StageSelection from '../designer/stage-selection';
import Transform from '../designer/transform';
import Cursor from '../gallery/mx-pointer/cursor';
import PointerTip from '../gallery/mx-pointer/tip';
import CellTable from './cell';
import TableProvider from './table';
let { State, mark } = Magix;

let { min, abs, PI, sin, cos } = Math;
let emptyObject = {};
/**
 * 根据位置激活格子
 * @param props 容器属性对象
 * @param element 容器元素对象
 * @param view 容器所在的Magix.View对象
 * @param row 行
 * @param col 列
 */
let activeCellByPos = (props, element, view, row, col) => {
    if (!props.locked && (props.focusRow != row ||
        props.focusCol != col)) {//未锁定且当前激活的格子与目标格子不一样才处理
        props.focusRow = row;
        props.focusCol = col;
        State.fire('@:{event#stage.select.element.props.change}', {
            '@:{ids}': {
                [element.id]: 1
            },
            '@:{types}': {
                [element.type]: 1
            },
            '@:{props}': {
                '@:{focus.cell}': 1
            }
        });
        view.digest({
            props
        });
    }
};
/**
 * 激活格子
 * @param element 容器元素对象
 * @param props 容器属性对象
 * @param row 行
 * @param col 列
 * @param isShiftKeyPressed shift键是否按下
 * @param view 容器属性所在的Magix.View对象
 */
let activeCell = (element, props, row, col, isShiftKeyPressed, view) => {
    if (props.readonly) {//元素只读
        if (!isShiftKeyPressed) {//未按shift的情况下，取消其它元素的选中，且当前元素不能被选中
            let old = StageSelection["@:{selection#set}"]();
            if (old) {
                DHistory["@:{history#save}"](DHistory['@:{history#element.lost.focus}'], StageGeneric['@:{generic#query.element.name}'](old));
            }
        }
    } else {
        activeCellByPos(props, element, view, row, col);
        StageElements['@:{elements#single.or.multi.select}'](element, isShiftKeyPressed, false);
    }
};
/**
 * 激活当前格子内的input元素
 * @param view 容器属性所在的Magix.View对象 
 * @param sourceTarget 事件的原始节点
 * @param eventTarget 监听事件的节点
 */
let activeDirectInput = async (view, sourceTarget, eventTarget: HTMLElement) => {
    let waitMark = mark(view, '@:{wait.ready}');
    await view.finale();//等待view完成渲染
    setTimeout(() => {//在pointerdown事件里，需要等到外部处理完成
        if (waitMark()) {
            let input = eventTarget.querySelector<HTMLInputElement>('[as=d-input]');
            if (input &&
                input != sourceTarget) {
                input.focus();
                input.selectionStart = input.value.length;
            }
        }
    });
};
export default {
    /**
     * 失去焦点
     */
    '@:{lost.select}'() {
        let props = this.get('props');
        let element = this.get('element');
        activeCellByPos(props, element, this, -1, -1);
    },
    /**
     * 格子内的input监听
     * @param e 
     */
    '@:{active.cell.by.pos}<focusin>'(e: Magix5.MagixMouseEvent) {
        let { params } = e;
        let { row, col } = params;
        let props = this.get('props');
        let element = this.get('element');
        activeCellByPos(props, element, this, row, col);
    },
    /**
     * 改变格子尺寸
     * @param e 
     * @returns 
     */
    '@:{start.resize.table.cell}<pointerdown>'(e) {
        if (e['@:{halt}'] || e.button) return;//事件被阻止或右键不处理
        e['@:{halt}'] = 1;
        let me = this;
        let element = this.get('element');
        let { props, ctrl, id } = element;
        let { focusRow, focusCol, rows, ename,
            rotate, excelLeft, excelTop,
            tfootSpacing } = props;
        if ((focusRow == -1 || focusCol == -1)) return;//未有格子激活，不处理
        if (rotate == null) {
            rotate = 0;
        }
        rotate %= 360;
        props.rotate = rotate;
        let beginPoint = {
            x: e.pageX,
            y: e.pageY
        };
        State.fire('@:{event#stage.toggle.scroll}', {
            show: 1,
            size: 1
        });
        //是否是留白
        let isSpace = focusRow == -2 && focusCol == -2;
        //是否是excel的格子
        let isExcelCell = focusRow == -3 && focusCol == -3;
        //是否为普通的格子
        let isNormalCell = focusRow > -1 && focusCol > -1;
        let row = rows[focusRow];
        let cell = isNormalCell && row.cols[focusCol];
        let moved;
        let beginWidth = isExcelCell ? excelLeft : (isSpace ? 0 : cell.width);
        let beginHeight = isExcelCell ? excelTop : (isSpace ? tfootSpacing : cell.height);
        let { eventTarget, params } = e;
        let { key } = params;
        let [handY, handX] = key;
        let rotatedRect = Transform['@:{transform#rotate.rect}'](props);
        let useFixIndex = Transform['@:{transform#handle.to.fixed.point}'](key);
        let beginFixed = rotatedRect['@:{point}'][useFixIndex];

        let parent = me.owner.parent();
        let current = eventTarget;
        let modifyWidth = handX != 'm';
        let modifyHeight = handY != 'm';
        let oppsiteWidth = handX == 'l' ? -1 : 1;
        let oppsiteHeight = handY == 't' ? -1 : 1;
        let scale = State.get('@:{global#stage.scale}');
        let minCellWidth = isSpace ? 0 : Const['@:{const#to.unit}'](CellTable['@:{min.width}'] * scale);
        let minCellHeight = isSpace ? 0 : Const['@:{const#to.unit}'](CellTable['@:{min.height}'] * scale);
        let moveEvent,
            nearsideScrollOffset;
        let moveCallback = async () => {
            if (!moveEvent) return;
            if (!moved) {
                Cursor["@:{show}"](current);
                moved = 1;
            }
            let nowPoint = {
                x: moveEvent.pageX,
                y: moveEvent.pageY
            };
            if (nearsideScrollOffset) {
                nowPoint.y += nearsideScrollOffset['@:{interval.move.event#y}'];
                nowPoint.x += nearsideScrollOffset['@:{interval.move.event#x}'];
            }
            let angle = Transform['@:{transform#get.point.deg}'](nowPoint, beginPoint);
            let dis = Transform['@:{transform#get.point.distance}'](nowPoint, beginPoint);
            let rad = (PI / 180) * (angle - rotate);
            let diffY = Const['@:{const#to.unit}'](sin(rad) * dis);
            let diffX = Const['@:{const#to.unit}'](cos(rad) * dis);

            let newWidth = beginWidth + (modifyWidth ? diffX : 0) * oppsiteWidth;
            let newHeight = beginHeight + (modifyHeight ? diffY : 0) * oppsiteHeight;
            let minWidth = (isNormalCell ? cell.colspan : 1) * minCellWidth;
            let minHeight = (isNormalCell ? cell.rowspan : 1) * minCellHeight;

            if (newWidth <= minWidth) {
                newWidth = minWidth;
            }
            if (newHeight <= minHeight) {
                newHeight = minHeight;
            }
            let changed;
            if (isExcelCell) {
                changed = newWidth != props.excelLeft || newHeight != props.excelTop;
            } else if (isSpace) {
                changed = newHeight != props.tfootSpacing;
            } else {
                changed = newWidth != cell.width || newHeight != cell.height;
            }
            if (changed) {
                moved = (newWidth != beginWidth || newHeight != beginHeight) ? 2 : 1;
                if (isExcelCell) {
                    props.excelLeft = newWidth;
                    props.excelTop = newHeight;
                } else if (isSpace) {
                    props.tfootSpacing = newHeight;
                } else {
                    cell.width = newWidth;
                    cell.height = newHeight;
                    TableProvider["@:{table.provider#update.cell.size}"](props, cell);
                }
                //更新部分尺寸属性后，调用元素控制器的update.props方法进行其它属性的更新
                ctrl['@:{update.props}'](props);
                let newRotatedRect = Transform['@:{transform#rotate.rect}'](props);
                let newFixed = newRotatedRect['@:{point}'][useFixIndex];
                let x = beginFixed.x - newFixed.x;
                let y = beginFixed.y - newFixed.y;
                props.x += x;
                props.y += y;
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
                tipMsg;
            if (isSpace) {
                tipMsg = tipHeight;
            } else {
                tipMsg = `${tipWidth} x ${tipHeight}`;
            }
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
                Cursor["@:{hide}"]();
            }
            if (moved == 2) {
                DHistory["@:{history#save}"](DHistory['@:{history#element.modified.size}'], ename);
            }
            State.fire('@:{event#stage.toggle.scroll}', {
                hide: 1
            });
            PointerTip['@:{hide}']();
        });
    },
    '@:{active.cell}<pointerdown>'(e) {
        let fs = this.get('fs');
        if (e['@:{halt}'] ||
            fs) return;
        let element = this.get('element');
        let props = this.get('props');
        let { eventTarget: target,
            shiftKey,
            ctrlKey,
            metaKey,
            params,
            button,
            target: sourceTarget,
            pageX,
            pageY } = e;
        let selectElements = State.get('@:{global#stage.select.elements}');
        let { row, col, elm, input } = params;
        let isShiftKeyStillPressed = shiftKey || ctrlKey || metaKey;
        if (!button) {
            if (isShiftKeyStillPressed ||
                elm) {
                e['@:{halt}'] = 1;
            }
            if (elm && !input) {
                let cell = props.rows[row].cols[col];
                //Select["@:{init}"]();
                let showedCursor;
                let hodElements,
                    currentSelected;
                let last = StageSelection['@:{selection#get.selected.map}']();
                let initSelectedElements = [...selectElements];
                let initIds = [],
                    initIdsMap = {};
                for (let ise of initSelectedElements) {
                    initIds.push(ise.id);
                    initIdsMap[ise.id] = 1;
                }
                currentSelected = initIds.join(',');
                if (isShiftKeyStillPressed) {
                    hodElements = StageGeneric["@:{generic#find.hod.sub.elements.map}"]([...cell.elements, ...initSelectedElements]);
                } else {
                    initIdsMap = emptyObject;
                }
                let elementLocations = StageGeneric["@:{generic#get.elements.location}"](cell.elements);
                let moveEvent;
                State.set({
                    '@:{global#stage.prevent.actions}': 1
                });
                let dragSelect = () => {
                    if (!moveEvent) return;
                    if (!showedCursor) {
                        showedCursor = 1;
                        Cursor["@:{show.by.type}"]('default');
                        if (!isShiftKeyStillPressed) {
                            StageSelection["@:{selection#set}"]();
                        }
                    }
                    let { pageX: moveX, pageY: moveY } = moveEvent;
                    let width = abs(pageX - moveX);
                    let height = abs(pageY - moveY);
                    let left = min(pageX, moveX);
                    let top = min(pageY, moveY);
                    //Select["@:{update}"](left, top, width, height);
                    let rect = Transform["@:{transform#real.to.nearest.coord}"](target, {
                        x: left,
                        y: top,
                        f: 0
                    }) as {
                        x: number
                        y: number
                        width: number
                        height: number
                    };
                    rect.width = width;
                    rect.height = height;
                    this.digest({
                        srRow: row,
                        srCol: col,
                        selectRect: rect
                    });
                    //console.log(rect,width,height);
                    if (elementLocations.length) {
                        let intersect = StageGeneric["@:{generic#get.intersect.elements}"](elementLocations, rect, initSelectedElements, isShiftKeyStillPressed && hodElements, isShiftKeyStillPressed ? initIdsMap : emptyObject);
                        if (intersect["@:{ids}"] != currentSelected) {
                            currentSelected = intersect["@:{ids}"];
                            StageSelection["@:{selection#set.all}"](intersect["@:{selected}"]);
                        }
                    }
                }
                let watchKeypress = e => {
                    isShiftKeyStillPressed = e['@:{keypress#shift.key}'] || e['@:{keypress#ctrl.key}'];
                    dragSelect();
                };
                State.on('@:{event#stage.key.press}', watchKeypress);
                this['@:{drag.drop}'](e, ex => {
                    moveEvent = ex;
                    dragSelect();
                }, () => {
                    State.off('@:{event#stage.key.press}', watchKeypress);
                    State.set({
                        '@:{global#stage.prevent.actions}': 0
                    });
                    if (showedCursor) {
                        this.digest({
                            selectRect: null
                        });
                        //Select["@:{hide}"]();
                        Cursor["@:{hide}"]();
                        let diff = StageSelection["@:{selection#has.changed}"](last);
                        if (diff['@:{selection.changed#has.diffed}']) {
                            let {
                                '@:{generic.diff.info#type}': type,
                                '@:{generic.diff.info#ename}': ename
                            } = StageGeneric['@:{generic#query.history.info.by.diff}'](diff);
                            DHistory["@:{history#save}"](type, ename);
                        }
                    } else {
                        activeCell(element, props, row, col, isShiftKeyStillPressed, this);
                        activeDirectInput(this, sourceTarget, target);
                    }
                });
            } else {
                activeCell(element, props, row, col, isShiftKeyStillPressed, this);
                if (!props.readonly) {
                    activeDirectInput(this, sourceTarget, target);
                    //如果点击对象是可输入，则优先使用系统的功能，比如输入框可以拖动选择文本，此时不宜移动元素
                    if (Keyboard['@:{key#is.input.element}'](sourceTarget)) {
                        e['@:{halt}'] = 1;
                    }
                }
            }
        } else {
            activeCell(element, props, row, col, 0, this);
        }
    },

    '@:{update.cell.text}<input>'(e: Magix5.MagixKeyboardEvent) {
        let { params, eventTarget } = e;
        let { cell, key } = params;
        let value = (eventTarget as HTMLInputElement).value;
        cell[key] = value;
        let element = this.get('element');
        let props = this.get('props');
        this.digest({
            props
        });
        State.fire('@:{event#stage.select.element.props.change}', {
            '@:{ids}': {
                [element.id]: 1
            },
            '@:{types}': {
                [element.type]: 1
            },
            '@:{props}': {
                rows: 1
            }
        });
        DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], props.ename, element.id + '@:{history#element.props.change}' + 'rows', 500);
    },
    '@:{stop}<pointerdown>'(e) {
        e['@:{halt}'] = 1;
    },
    '@:{element.start.drag}<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['@:{halt}']) return;
        e['@:{halt}'] = 1;
        StageElements["@:{elements#select.or.move.elements}"](e, this);
    },
    '@:{show.contxtmenu}<contextmenu>'(e: Magix5.MagixMixedEvent) {
        let currentElement = this.get('element');
        let { props, id } = currentElement;
        let fs = this.get('fs');
        if (e['@:{halt}'] ||
            fs) {
            return;
        }
        this['@:{prevent.default}'](e);
        e['@:{halt}'] = 1;
        let { row, col } = e.params;
        let cell = props.rows[row].cols[col];
        let collection = cell.elements;
        let selectElements = State.get('@:{global#stage.select.elements}');
        let element = selectElements[0];
        let bound = e.eventTarget.getBoundingClientRect();
        let nowPosition = {
            x: e.pageX - bound.x,
            y: e.pageY - bound.y
        };
        StageElements["@:{elements#show.contextmenu}"](this, e, collection, id, async (menu) => {
            if (menu.id == Contextmenu["@:{cm#all.id}"]) {
                StageGeneric['@:{generic#select.all.collection.elements}'](collection);
            } else if (menu.id == Contextmenu['@:{cm#reverse.id}']) {
                let underElement = State.get<Report.StageElement>('@:{global#stage.contextmenu.under.item}');
                let stage = StageGeneric['@:{generic#query.nearest.stage}'](0, underElement);
                let coll = stage["@:{collection}"];
                StageGeneric['@:{generic#select.all.collection.elements}'](coll, 1);
            } else if (menu.id == Contextmenu["@:{cm#copy.id}"]) {
                StageClipboard["@:{copy.elements}"](e);
            } else if (menu.id == Contextmenu["@:{cm#paste.id}"]) {
                let stage = StageGeneric['@:{generic#query.nearest.stage}'](0, currentElement, row, col);
                StageClipboard["@:{paste.elements}"](stage, nowPosition);
            } else if (menu.id == Contextmenu['@:{cm#duplicate.id}']) {
                let stages = StageGeneric['@:{generic#query.select.elements.stage}']();
                StageClipboard['@:{duplicate.elements}'](stages);
            } else if (menu.id == Contextmenu["@:{cm#cut.id}"]) {
                StageClipboard["@:{cut.elements}"](e);
            } else if (menu.id == Contextmenu["@:{cm#delete.id}"]) {
                StageGeneric["@:{generic#delete.select.elements}"]();
            } else if (menu.id >= 3 && menu.id <= 6) {
                StageElements["@:{elements#modify.element.z.index}"](menu.id, element);
            } else if (menu.id > 19 && menu.id < 30) {
                StageElements["@:{elements#align.elements}"](menu.to);
            } else if (menu.id > 30 && menu.id < 40) {
                let ungroup = menu.id == 32;
                StageGeneric["@:{generic#group.select.elements}"](ungroup);
            } else if (menu.id > 40 && menu.id < 50) {
                let from = (menu.id == Contextmenu["@:{cm#sync.width.as.height.id}"] || menu.id == Contextmenu["@:{cm#sync.width.id}"]) ? 1 : 0;
                let to = (menu.id == Contextmenu["@:{cm#sync.height.id}"] ||
                    menu.id == Contextmenu["@:{cm#sync.width.as.height.id}"]) ? 0 : 1;
                let [result, id] = await StageElements["@:{elements#sync.or.reverse.size.elements}"](from, to);
                if (result) {
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
                    DHistory["@:{history#save}"](DHistory['@:{history#element.sync.size}']);
                }
            } else if (menu.id == Contextmenu['@:{cm#clear.hod.stage.id}']) {
                let removed = StageGeneric['@:{generic#remove.nonreadonly.elements}'](collection);
                if (removed.length) {
                    State.fire('@:{event#stage.elements.change}');
                    DHistory["@:{history#save}"](DHistory['@:{history#element.removed}'], StageGeneric['@:{generic#query.element.name}'](removed));
                }
            }
        });
    }
}