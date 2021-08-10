/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/hodbase",["4e","../4d/4g","../4d/4v","../4d/4q","../4d/4r","../4d/5a","../4d/56","../4d/57","../4d/5b","../4d/4h","../4l/4n/cursor","../4l/4n/tip","./cell","./table"],(require,exports,module)=>{


let magix_1 = require("4e");
let const_1 = require("../4d/4g");
let contextmenu_1 = require("../4d/4v");
let history_1 = require("../4d/4q");
let keyboard_1 = require("../4d/4r");
let stage_clipboard_1 = require("../4d/5a");
let stage_elements_1 = require("../4d/56");
let stage_generic_1 = require("../4d/57");
let stage_selection_1 = require("../4d/5b");
let transform_1 = require("../4d/4h");
let cursor_1 = require("../4l/4n/cursor");
let tip_1 = require("../4l/4n/tip");
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
        State.fire('dG', {
            '_fm': {
                [element.id]: 1
            },
            '_fn': {
                [element.type]: 1
            },
            '_dF': {
                '_gX': 1
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
            let old = stage_selection_1["dF"]();
            if (old) {
                history_1["dE"](history_1['dU'], stage_generic_1['dQ'](old));
            }
        }
    }
    else {
        activeCellByPos(props, element, view, row, col);
        stage_elements_1['dH'](element, isShiftKeyPressed, false);
    }
};
/**
 * 激活当前格子内的input元素
 * @param view 容器属性所在的Magix.View对象
 * @param sourceTarget 事件的原始节点
 * @param eventTarget 监听事件的节点
 */
let activeDirectInput = async (view, sourceTarget, eventTarget) => {
    let waitMark = mark(view, '_nr');
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
    '_ns'() {
        let props = this.get('props');
        let element = this.get('element');
        activeCellByPos(props, element, this, -1, -1);
    },
    /**
     * 格子内的input监听
     * @param e
     */
    '_hM<focusin>'(e) {
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
    '_hF<pointerdown>'(e) {
        if (e['_ey'] || e.button)
            return; //事件被阻止或右键不处理
        e['_ey'] = 1;
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
        State.fire('d3', {
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
        let rotatedRect = transform_1['dF'](props);
        let useFixIndex = transform_1['dO'](key);
        let beginFixed = rotatedRect['_fE'][useFixIndex];
        let parent = me.owner.parent();
        let current = eventTarget;
        let modifyWidth = handX != 'm';
        let modifyHeight = handY != 'm';
        let oppsiteWidth = handX == 'l' ? -1 : 1;
        let oppsiteHeight = handY == 't' ? -1 : 1;
        let scale = State.get('dF');
        let minCellWidth = isSpace ? 0 : const_1['dF'](cell_1['_iF'] * scale);
        let minCellHeight = isSpace ? 0 : const_1['dF'](cell_1['_iH'] * scale);
        let moveEvent, nearsideScrollOffset;
        let moveCallback = async () => {
            if (!moveEvent)
                return;
            if (!moved) {
                cursor_1["_ec"](current);
                moved = 1;
            }
            let nowPoint = {
                x: moveEvent.pageX,
                y: moveEvent.pageY
            };
            if (nearsideScrollOffset) {
                nowPoint.y += nearsideScrollOffset['dE'];
                nowPoint.x += nearsideScrollOffset['dF'];
            }
            let angle = transform_1['dN'](nowPoint, beginPoint);
            let dis = transform_1['dS'](nowPoint, beginPoint);
            let rad = (PI / 180) * (angle - rotate);
            let diffY = const_1['dF'](sin(rad) * dis);
            let diffX = const_1['dF'](cos(rad) * dis);
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
                    table_1["dM"](props, cell);
                }
                //更新部分尺寸属性后，调用元素控制器的update.props方法进行其它属性的更新
                ctrl['_eF'](props);
                let newRotatedRect = transform_1['dF'](props);
                let newFixed = newRotatedRect['_fE'][useFixIndex];
                let x = beginFixed.x - newFixed.x;
                let y = beginFixed.y - newFixed.y;
                props.x += x;
                props.y += y;
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
            let tipWidth = transform_1['dH'](newWidth), tipHeight = transform_1['dH'](newHeight), tipMsg;
            if (isSpace) {
                tipMsg = tipHeight;
            }
            else {
                tipMsg = `${tipWidth} x ${tipHeight}`;
            }
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
                cursor_1["_ed"]();
            }
            if (moved == 2) {
                history_1["dE"](history_1['e_'], ename);
            }
            State.fire('d3', {
                hide: 1
            });
            tip_1['_ed']();
        });
    },
    '_hD<pointerdown>'(e) {
        let fs = this.get('fs');
        if (e['_ey'] ||
            fs)
            return;
        let element = this.get('element');
        let props = this.get('props');
        let { eventTarget: target, shiftKey, ctrlKey, metaKey, params, button, target: sourceTarget, pageX, pageY } = e;
        let selectElements = State.get('dE');
        let { row, col, elm, input } = params;
        let isShiftKeyStillPressed = shiftKey || ctrlKey || metaKey;
        if (!button) {
            if (isShiftKeyStillPressed ||
                elm) {
                e['_ey'] = 1;
            }
            if (elm && !input) {
                let cell = props.rows[row].cols[col];
                //Select["@:{init}"]();
                let showedCursor;
                let hodElements, currentSelected;
                let last = stage_selection_1['dJ']();
                let initSelectedElements = [...selectElements];
                let initIds = [], initIdsMap = {};
                for (let ise of initSelectedElements) {
                    initIds.push(ise.id);
                    initIdsMap[ise.id] = 1;
                }
                currentSelected = initIds.join(',');
                if (isShiftKeyStillPressed) {
                    hodElements = stage_generic_1["d6"]([...cell.elements, ...initSelectedElements]);
                }
                else {
                    initIdsMap = emptyObject;
                }
                let elementLocations = stage_generic_1["d1"](cell.elements);
                let moveEvent;
                State.set({
                    'dK': 1
                });
                let dragSelect = () => {
                    if (!moveEvent)
                        return;
                    if (!showedCursor) {
                        showedCursor = 1;
                        cursor_1["_gn"]('default');
                        if (!isShiftKeyStillPressed) {
                            stage_selection_1["dF"]();
                        }
                    }
                    let { pageX: moveX, pageY: moveY } = moveEvent;
                    let width = abs(pageX - moveX);
                    let height = abs(pageY - moveY);
                    let left = min(pageX, moveX);
                    let top = min(pageY, moveY);
                    //Select["@:{update}"](left, top, width, height);
                    let rect = transform_1["dL"](target, {
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
                        let intersect = stage_generic_1["d2"](elementLocations, rect, initSelectedElements, isShiftKeyStillPressed && hodElements, isShiftKeyStillPressed ? initIdsMap : emptyObject);
                        if (intersect["_fm"] != currentSelected) {
                            currentSelected = intersect["_fm"];
                            stage_selection_1["dG"](intersect["_f7"]);
                        }
                    }
                };
                let watchKeypress = e => {
                    isShiftKeyStillPressed = e['dI'] || e['dJ'];
                    dragSelect();
                };
                State.on('dN', watchKeypress);
                this['_eb'](e, ex => {
                    moveEvent = ex;
                    dragSelect();
                }, () => {
                    State.off('dN', watchKeypress);
                    State.set({
                        'dK': 0
                    });
                    if (showedCursor) {
                        this.digest({
                            selectRect: null
                        });
                        //Select["@:{hide}"]();
                        cursor_1["_ed"]();
                        let diff = stage_selection_1["dK"](last);
                        if (diff['dH']) {
                            let { 'dE': type, 'dF': ename } = stage_generic_1['d8'](diff);
                            history_1["dE"](type, ename);
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
                    if (keyboard_1['ea'](sourceTarget)) {
                        e['_ey'] = 1;
                    }
                }
            }
        }
        else {
            activeCell(element, props, row, col, 0, this);
        }
    },
    '_hL<input>'(e) {
        let { params, eventTarget } = e;
        let { cell, key } = params;
        let value = eventTarget.value;
        cell[key] = value;
        let element = this.get('element');
        let props = this.get('props');
        this.digest({
            props
        });
        State.fire('dG', {
            '_fm': {
                [element.id]: 1
            },
            '_fn': {
                [element.type]: 1
            },
            '_dF': {
                rows: 1
            }
        });
        history_1["dE"](history_1['ea'], props.ename, element.id + 'er' + 'rows', 500);
    },
    '_hE<pointerdown>'(e) {
        e['_ey'] = 1;
    },
    '_gU<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['_ey'])
            return;
        e['_ey'] = 1;
        stage_elements_1["dL"](e, this);
    },
    '_hK<contextmenu>'(e) {
        let currentElement = this.get('element');
        let { props, id } = currentElement;
        let fs = this.get('fs');
        if (e['_ey'] ||
            fs) {
            return;
        }
        this['_fu'](e);
        e['_ey'] = 1;
        let { row, col } = e.params;
        let cell = props.rows[row].cols[col];
        let collection = cell.elements;
        let selectElements = State.get('dE');
        let element = selectElements[0];
        let bound = e.eventTarget.getBoundingClientRect();
        let nowPosition = {
            x: e.pageX - bound.x,
            y: e.pageY - bound.y
        };
        stage_elements_1["dU"](this, e, collection, id, async (menu) => {
            if (menu.id == contextmenu_1["dE"]) {
                stage_generic_1['ea'](collection);
            }
            else if (menu.id == contextmenu_1['d3']) {
                let underElement = State.get('dX');
                let stage = stage_generic_1['e_'](0, underElement);
                let coll = stage["_fR"];
                stage_generic_1['ea'](coll, 1);
            }
            else if (menu.id == contextmenu_1["dL"]) {
                stage_clipboard_1["_f5"](e);
            }
            else if (menu.id == contextmenu_1["dF"]) {
                let stage = stage_generic_1['e_'](0, currentElement, row, col);
                stage_clipboard_1["_f9"](stage, nowPosition);
            }
            else if (menu.id == contextmenu_1['dM']) {
                let stages = stage_generic_1['dT']();
                stage_clipboard_1['_f8'](stages);
            }
            else if (menu.id == contextmenu_1["dK"]) {
                stage_clipboard_1["_f6"](e);
            }
            else if (menu.id == contextmenu_1["dN"]) {
                stage_generic_1["d7"]();
            }
            else if (menu.id >= 3 && menu.id <= 6) {
                stage_elements_1["dN"](menu.id, element);
            }
            else if (menu.id > 19 && menu.id < 30) {
                stage_elements_1["dQ"](menu.to);
            }
            else if (menu.id > 30 && menu.id < 40) {
                let ungroup = menu.id == 32;
                stage_generic_1["d5"](ungroup);
            }
            else if (menu.id > 40 && menu.id < 50) {
                let from = (menu.id == contextmenu_1["dS"] || menu.id == contextmenu_1["dU"]) ? 1 : 0;
                let to = (menu.id == contextmenu_1["dV"] ||
                    menu.id == contextmenu_1["dS"]) ? 0 : 1;
                let [result, id] = await stage_elements_1["dR"](from, to);
                if (result) {
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
                    history_1["dE"](history_1['dY']);
                }
            }
            else if (menu.id == contextmenu_1['d2']) {
                let removed = stage_generic_1['dH'](collection);
                if (removed.length) {
                    State.fire('d2');
                    history_1["dE"](history_1['d0'], stage_generic_1['dQ'](removed));
                }
            }
        });
    }
};

});