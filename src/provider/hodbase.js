/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/hodbase",["5c","../5b/5e","../5b/5t","../5b/5o","../5b/5p","../5b/68","../5b/64","../5b/65","../5b/69","../5b/5f","../5j/5l/cursor","../5j/5l/tip","./cell","./table"],(require,exports,module)=>{


let magix_1 = require("5c");
let const_1 = require("../5b/5e");
let contextmenu_1 = require("../5b/5t");
let history_1 = require("../5b/5o");
let keyboard_1 = require("../5b/5p");
let stage_clipboard_1 = require("../5b/68");
let stage_elements_1 = require("../5b/64");
let stage_generic_1 = require("../5b/65");
let stage_selection_1 = require("../5b/69");
let transform_1 = require("../5b/5f");
let cursor_1 = require("../5j/5l/cursor");
let tip_1 = require("../5j/5l/tip");
let cell_1 = require("./cell");
let table_1 = require("./table");
let { State, mark } = magix_1;
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
        props.focusCol != col)) { //未锁定且当前激活的格子与目标格子不一样才处理
        props.focusRow = row;
        props.focusCol = col;
        State.fire('l4', {
            '_nK': {
                [element.id]: 1
            },
            '_nL': {
                [element.type]: 1
            },
            '_l3': {
                '_pk': 1
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
    if (props.readonly) { //元素只读
        if (!isShiftKeyPressed) { //未按shift的情况下，取消其它元素的选中，且当前元素不能被选中
            let old = stage_selection_1["l3"]();
            if (old) {
                history_1["l2"](history_1['mh'], stage_generic_1['md'](old));
            }
        }
    }
    else {
        activeCellByPos(props, element, view, row, col);
        stage_elements_1['l5'](element, isShiftKeyPressed, false);
    }
};
/**
 * 激活当前格子内的input元素
 * @param view 容器属性所在的Magix.View对象
 * @param sourceTarget 事件的原始节点
 * @param eventTarget 监听事件的节点
 */
let activeDirectInput = async (view, sourceTarget, eventTarget) => {
    let waitMark = mark(view, '_vP');
    await view.finale(); //等待view完成渲染
    setTimeout(() => {
        if (waitMark()) {
            let input = eventTarget.querySelector('[as=d-input]');
            if (input &&
                input != sourceTarget) {
                input.focus();
                input.selectionStart = input.value.length;
            }
        }
    });
};
module.exports= {
    /**
     * 失去焦点
     */
    '_vQ'() {
        let props = this.get('props');
        let element = this.get('element');
        activeCellByPos(props, element, this, -1, -1);
    },
    /**
     * 格子内的input监听
     * @param e
     */
    '_q_<focusin>'(e) {
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
    '_p3<pointerdown>'(e) {
        if (e['_mW'] || e.button)
            return; //事件被阻止或右键不处理
        e['_mW'] = 1;
        let me = this;
        let element = this.get('element');
        let { props, ctrl, id } = element;
        let { focusRow, focusCol, rows, ename, rotate, excelLeft, excelTop, tfootSpacing } = props;
        if ((focusRow == -1 || focusCol == -1))
            return; //未有格子激活，不处理
        if (rotate == null) {
            rotate = 0;
        }
        rotate %= 360;
        props.rotate = rotate;
        let beginPoint = {
            x: e.pageX,
            y: e.pageY
        };
        State.fire('mq', {
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
        let rotatedRect = transform_1['l3'](props);
        let useFixIndex = transform_1['mb'](key);
        let beginFixed = rotatedRect['_n2'][useFixIndex];
        let parent = me.owner.parent();
        let current = eventTarget;
        let modifyWidth = handX != 'm';
        let modifyHeight = handY != 'm';
        let oppsiteWidth = handX == 'l' ? -1 : 1;
        let oppsiteHeight = handY == 't' ? -1 : 1;
        let scale = State.get('l3');
        let minCellWidth = isSpace ? 0 : const_1['l3'](cell_1['_q3'] * scale);
        let minCellHeight = isSpace ? 0 : const_1['l3'](cell_1['_q5'] * scale);
        let moveEvent, nearsideScrollOffset;
        let moveCallback = async () => {
            if (!moveEvent)
                return;
            if (!moved) {
                cursor_1["_mA"](current);
                moved = 1;
            }
            let nowPoint = {
                x: moveEvent.pageX,
                y: moveEvent.pageY
            };
            if (nearsideScrollOffset) {
                nowPoint.y += nearsideScrollOffset['l2'];
                nowPoint.x += nearsideScrollOffset['l3'];
            }
            let angle = transform_1['ma'](nowPoint, beginPoint);
            let dis = transform_1['mf'](nowPoint, beginPoint);
            let rad = (PI / 180) * (angle - rotate);
            let diffY = const_1['l3'](sin(rad) * dis);
            let diffX = const_1['l3'](cos(rad) * dis);
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
            }
            else if (isSpace) {
                changed = newHeight != props.tfootSpacing;
            }
            else {
                changed = newWidth != cell.width || newHeight != cell.height;
            }
            if (changed) {
                moved = (newWidth != beginWidth || newHeight != beginHeight) ? 2 : 1;
                if (isExcelCell) {
                    props.excelLeft = newWidth;
                    props.excelTop = newHeight;
                }
                else if (isSpace) {
                    props.tfootSpacing = newHeight;
                }
                else {
                    cell.width = newWidth;
                    cell.height = newHeight;
                    table_1["m_"](props, cell);
                }
                //更新部分尺寸属性后，调用元素控制器的update.props方法进行其它属性的更新
                ctrl['_m3'](props);
                let newRotatedRect = transform_1['l3'](props);
                let newFixed = newRotatedRect['_n2'][useFixIndex];
                let x = beginFixed.x - newFixed.x;
                let y = beginFixed.y - newFixed.y;
                props.x += x;
                props.y += y;
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
            let tipWidth = transform_1['l5'](newWidth), tipHeight = transform_1['l5'](newHeight), tipMsg;
            if (isSpace) {
                tipMsg = tipHeight;
            }
            else {
                tipMsg = `${tipWidth} x ${tipHeight}`;
            }
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
                cursor_1["_mB"]();
            }
            if (moved == 2) {
                history_1["l2"](history_1['mx'], ename);
            }
            State.fire('mq', {
                hide: 1
            });
            tip_1['_mB']();
        });
    },
    '_p1<pointerdown>'(e) {
        let fs = this.get('fs');
        if (e['_mW'] ||
            fs)
            return;
        let element = this.get('element');
        let props = this.get('props');
        let { eventTarget: target, shiftKey, ctrlKey, metaKey, params, button, target: sourceTarget, pageX, pageY } = e;
        let selectElements = State.get('l2');
        let { row, col, elm, input } = params;
        let isShiftKeyStillPressed = shiftKey || ctrlKey || metaKey;
        if (!button) {
            if (isShiftKeyStillPressed ||
                elm) {
                e['_mW'] = 1;
            }
            if (elm && !input) {
                let cell = props.rows[row].cols[col];
                //Select["@:{init}"]();
                let showedCursor;
                let hodElements, currentSelected;
                let last = stage_selection_1['l7']();
                let initSelectedElements = [...selectElements];
                let initIds = [], initIdsMap = {};
                for (let ise of initSelectedElements) {
                    initIds.push(ise.id);
                    initIdsMap[ise.id] = 1;
                }
                currentSelected = initIds.join(',');
                if (isShiftKeyStillPressed) {
                    hodElements = stage_generic_1["mt"]([...cell.elements, ...initSelectedElements]);
                }
                else {
                    initIdsMap = emptyObject;
                }
                let elementLocations = stage_generic_1["mo"](cell.elements);
                let moveEvent;
                State.set({
                    'l8': 1
                });
                let dragSelect = () => {
                    if (!moveEvent)
                        return;
                    if (!showedCursor) {
                        showedCursor = 1;
                        cursor_1["_oL"]('default');
                        if (!isShiftKeyStillPressed) {
                            stage_selection_1["l3"]();
                        }
                    }
                    let { pageX: moveX, pageY: moveY } = moveEvent;
                    let width = abs(pageX - moveX);
                    let height = abs(pageY - moveY);
                    let left = min(pageX, moveX);
                    let top = min(pageY, moveY);
                    //Select["@:{update}"](left, top, width, height);
                    let rect = transform_1["l9"](target, {
                        x: left,
                        y: top,
                        f: 0
                    });
                    rect.width = width;
                    rect.height = height;
                    this.digest({
                        srRow: row,
                        srCol: col,
                        selectRect: rect
                    });
                    //console.log(rect,width,height);
                    if (elementLocations.length) {
                        let intersect = stage_generic_1["mp"](elementLocations, rect, initSelectedElements, isShiftKeyStillPressed && hodElements, isShiftKeyStillPressed ? initIdsMap : emptyObject);
                        if (intersect["_nK"] != currentSelected) {
                            currentSelected = intersect["_nK"];
                            stage_selection_1["l4"](intersect["_ou"]);
                        }
                    }
                };
                let watchKeypress = e => {
                    isShiftKeyStillPressed = e['l6'] || e['l7'];
                    dragSelect();
                };
                State.on('ma', watchKeypress);
                this['_mz'](e, ex => {
                    moveEvent = ex;
                    dragSelect();
                }, () => {
                    State.off('ma', watchKeypress);
                    State.set({
                        'l8': 0
                    });
                    if (showedCursor) {
                        this.digest({
                            selectRect: null
                        });
                        //Select["@:{hide}"]();
                        cursor_1["_mB"]();
                        let diff = stage_selection_1["l8"](last);
                        if (diff['l5']) {
                            let { 'l2': type, 'l3': ename } = stage_generic_1['mv'](diff);
                            history_1["l2"](type, ename);
                        }
                    }
                    else {
                        activeCell(element, props, row, col, isShiftKeyStillPressed, this);
                        activeDirectInput(this, sourceTarget, target);
                    }
                });
            }
            else {
                activeCell(element, props, row, col, isShiftKeyStillPressed, this);
                if (!props.readonly) {
                    activeDirectInput(this, sourceTarget, target);
                    //如果点击对象是可输入，则优先使用系统的功能，比如输入框可以拖动选择文本，此时不宜移动元素
                    if (keyboard_1['my'](sourceTarget)) {
                        e['_mW'] = 1;
                    }
                }
            }
        }
        else {
            activeCell(element, props, row, col, 0, this);
        }
    },
    '_p9<input>'(e) {
        let { params, eventTarget } = e;
        let { cell, key } = params;
        let value = eventTarget.value;
        cell[key] = value;
        let element = this.get('element');
        let props = this.get('props');
        this.digest({
            props
        });
        State.fire('l4', {
            '_nK': {
                [element.id]: 1
            },
            '_nL': {
                [element.type]: 1
            },
            '_l3': {
                rows: 1
            }
        });
        history_1["l2"](history_1['my'], props.ename, element.id + 'mP' + 'rows', 500);
    },
    '_p2<pointerdown>'(e) {
        e['_mW'] = 1;
    },
    '_ph<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['_mW'])
            return;
        e['_mW'] = 1;
        stage_elements_1["l9"](e, this);
    },
    '_p8<contextmenu>'(e) {
        let currentElement = this.get('element');
        let { props, id } = currentElement;
        let fs = this.get('fs');
        if (e['_mW'] ||
            fs) {
            return;
        }
        this['_nS'](e);
        e['_mW'] = 1;
        let { row, col } = e.params;
        let cell = props.rows[row].cols[col];
        let collection = cell.elements;
        let selectElements = State.get('l2');
        let element = selectElements[0];
        let bound = e.eventTarget.getBoundingClientRect();
        let nowPosition = {
            x: e.pageX - bound.x,
            y: e.pageY - bound.y
        };
        stage_elements_1["mh"](this, e, collection, id, async (menu) => {
            if (menu.id == contextmenu_1["l2"]) {
                stage_generic_1['my'](collection);
            }
            else if (menu.id == contextmenu_1['mq']) {
                let underElement = State.get('mk');
                let stage = stage_generic_1['mx'](0, underElement);
                let coll = stage["_oe"];
                stage_generic_1['my'](coll, 1);
            }
            else if (menu.id == contextmenu_1["l9"]) {
                stage_clipboard_1["_os"](e);
            }
            else if (menu.id == contextmenu_1["l3"]) {
                let stage = stage_generic_1['mx'](0, currentElement, row, col);
                stage_clipboard_1["_ow"](stage, nowPosition);
            }
            else if (menu.id == contextmenu_1['m_']) {
                let stages = stage_generic_1['mg']();
                stage_clipboard_1['_ov'](stages);
            }
            else if (menu.id == contextmenu_1["l8"]) {
                stage_clipboard_1["_ot"](e);
            }
            else if (menu.id == contextmenu_1["ma"]) {
                stage_generic_1["mu"]();
            }
            else if (menu.id >= 3 && menu.id <= 6) {
                stage_elements_1["ma"](menu.id, element);
            }
            else if (menu.id > 19 && menu.id < 30) {
                stage_elements_1["md"](menu.to);
            }
            else if (menu.id > 30 && menu.id < 40) {
                let ungroup = menu.id == 32;
                stage_generic_1["ms"](ungroup);
            }
            else if (menu.id > 40 && menu.id < 50) {
                let from = (menu.id == contextmenu_1["mf"] || menu.id == contextmenu_1["mh"]) ? 1 : 0;
                let to = (menu.id == contextmenu_1["mi"] ||
                    menu.id == contextmenu_1["mf"]) ? 0 : 1;
                let [result, id] = await stage_elements_1["me"](from, to);
                if (result) {
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
                    history_1["l2"](history_1['ml']);
                }
            }
            else if (menu.id == contextmenu_1['mp']) {
                let removed = stage_generic_1['l5'](collection);
                if (removed.length) {
                    State.fire('mp');
                    history_1["l2"](history_1['mn'], stage_generic_1['md'](removed));
                }
            }
        });
    }
};

});