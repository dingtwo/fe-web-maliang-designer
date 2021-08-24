/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5g/hodbase",["51","../50/53","../50/5i","../50/5d","../50/5e","../50/5t","../50/5p","../50/5q","../50/5u","../50/54","../58/5a/cursor","../58/5a/tip","./cell","./table"],(require,exports,module)=>{


let magix_1 = require("51");
let const_1 = require("../50/53");
let contextmenu_1 = require("../50/5i");
let history_1 = require("../50/5d");
let keyboard_1 = require("../50/5e");
let stage_clipboard_1 = require("../50/5t");
let stage_elements_1 = require("../50/5p");
let stage_generic_1 = require("../50/5q");
let stage_selection_1 = require("../50/5u");
let transform_1 = require("../50/54");
let cursor_1 = require("../58/5a/cursor");
let tip_1 = require("../58/5a/tip");
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
        State.fire('gf', {
            '_hW': {
                [element.id]: 1
            },
            '_hX': {
                [element.type]: 1
            },
            '_ge': {
                '_jz': 1
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
            let old = stage_selection_1["ge"]();
            if (old) {
                history_1["gd"](history_1['gt'], stage_generic_1['gp'](old));
            }
        }
    }
    else {
        activeCellByPos(props, element, view, row, col);
        stage_elements_1['gg'](element, isShiftKeyPressed, false);
    }
};
/**
 * 激活当前格子内的input元素
 * @param view 容器属性所在的Magix.View对象
 * @param sourceTarget 事件的原始节点
 * @param eventTarget 监听事件的节点
 */
let activeDirectInput = async (view, sourceTarget, eventTarget) => {
    let waitMark = mark(view, '_p5');
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
    '_p6'() {
        let props = this.get('props');
        let element = this.get('element');
        activeCellByPos(props, element, this, -1, -1);
    },
    /**
     * 格子内的input监听
     * @param e
     */
    '_ko<focusin>'(e) {
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
    '_kh<pointerdown>'(e) {
        if (e['_g8'] || e.button)
            return; //事件被阻止或右键不处理
        e['_g8'] = 1;
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
        State.fire('gC', {
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
        let rotatedRect = transform_1['ge'](props);
        let useFixIndex = transform_1['gn'](key);
        let beginFixed = rotatedRect['_ig'][useFixIndex];
        let parent = me.owner.parent();
        let current = eventTarget;
        let modifyWidth = handX != 'm';
        let modifyHeight = handY != 'm';
        let oppsiteWidth = handX == 'l' ? -1 : 1;
        let oppsiteHeight = handY == 't' ? -1 : 1;
        let scale = State.get('ge');
        let minCellWidth = isSpace ? 0 : const_1['ge'](cell_1['_lh'] * scale);
        let minCellHeight = isSpace ? 0 : const_1['ge'](cell_1['_lj'] * scale);
        let moveEvent, nearsideScrollOffset;
        let moveCallback = async () => {
            if (!moveEvent)
                return;
            if (!moved) {
                cursor_1["_gM"](current);
                moved = 1;
            }
            let nowPoint = {
                x: moveEvent.pageX,
                y: moveEvent.pageY
            };
            if (nearsideScrollOffset) {
                nowPoint.y += nearsideScrollOffset['gd'];
                nowPoint.x += nearsideScrollOffset['ge'];
            }
            let angle = transform_1['gm'](nowPoint, beginPoint);
            let dis = transform_1['gr'](nowPoint, beginPoint);
            let rad = (PI / 180) * (angle - rotate);
            let diffY = const_1['ge'](sin(rad) * dis);
            let diffX = const_1['ge'](cos(rad) * dis);
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
                    table_1["gl"](props, cell);
                }
                //更新部分尺寸属性后，调用元素控制器的update.props方法进行其它属性的更新
                ctrl['_he'](props);
                let newRotatedRect = transform_1['ge'](props);
                let newFixed = newRotatedRect['_ig'][useFixIndex];
                let x = beginFixed.x - newFixed.x;
                let y = beginFixed.y - newFixed.y;
                props.x += x;
                props.y += y;
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
            let tipWidth = transform_1['gg'](newWidth), tipHeight = transform_1['gg'](newHeight), tipMsg;
            if (isSpace) {
                tipMsg = tipHeight;
            }
            else {
                tipMsg = `${tipWidth} x ${tipHeight}`;
            }
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
                cursor_1["_gN"]();
            }
            if (moved == 2) {
                history_1["gd"](history_1['gJ'], ename);
            }
            State.fire('gC', {
                hide: 1
            });
            tip_1['_gN']();
        });
    },
    '_kf<pointerdown>'(e) {
        let fs = this.get('fs');
        if (e['_g8'] ||
            fs)
            return;
        let element = this.get('element');
        let props = this.get('props');
        let { eventTarget: target, shiftKey, ctrlKey, metaKey, params, button, target: sourceTarget, pageX, pageY } = e;
        let selectElements = State.get('gd');
        let { row, col, elm, input } = params;
        let isShiftKeyStillPressed = shiftKey || ctrlKey || metaKey;
        if (!button) {
            if (isShiftKeyStillPressed ||
                elm) {
                e['_g8'] = 1;
            }
            if (elm && !input) {
                let cell = props.rows[row].cols[col];
                //Select["@:{init}"]();
                let showedCursor;
                let hodElements, currentSelected;
                let last = stage_selection_1['gi']();
                let initSelectedElements = [...selectElements];
                let initIds = [], initIdsMap = {};
                for (let ise of initSelectedElements) {
                    initIds.push(ise.id);
                    initIdsMap[ise.id] = 1;
                }
                currentSelected = initIds.join(',');
                if (isShiftKeyStillPressed) {
                    hodElements = stage_generic_1["gF"]([...cell.elements, ...initSelectedElements]);
                }
                else {
                    initIdsMap = emptyObject;
                }
                let elementLocations = stage_generic_1["gA"](cell.elements);
                let moveEvent;
                State.set({
                    'gj': 1
                });
                let dragSelect = () => {
                    if (!moveEvent)
                        return;
                    if (!showedCursor) {
                        showedCursor = 1;
                        cursor_1["_i0"]('default');
                        if (!isShiftKeyStillPressed) {
                            stage_selection_1["ge"]();
                        }
                    }
                    let { pageX: moveX, pageY: moveY } = moveEvent;
                    let width = abs(pageX - moveX);
                    let height = abs(pageY - moveY);
                    let left = min(pageX, moveX);
                    let top = min(pageY, moveY);
                    //Select["@:{update}"](left, top, width, height);
                    let rect = transform_1["gk"](target, {
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
                        let intersect = stage_generic_1["gB"](elementLocations, rect, initSelectedElements, isShiftKeyStillPressed && hodElements, isShiftKeyStillPressed ? initIdsMap : emptyObject);
                        if (intersect["_hW"] != currentSelected) {
                            currentSelected = intersect["_hW"];
                            stage_selection_1["gf"](intersect["_iJ"]);
                        }
                    }
                };
                let watchKeypress = e => {
                    isShiftKeyStillPressed = e['gh'] || e['gi'];
                    dragSelect();
                };
                State.on('gm', watchKeypress);
                this['_gL'](e, ex => {
                    moveEvent = ex;
                    dragSelect();
                }, () => {
                    State.off('gm', watchKeypress);
                    State.set({
                        'gj': 0
                    });
                    if (showedCursor) {
                        this.digest({
                            selectRect: null
                        });
                        //Select["@:{hide}"]();
                        cursor_1["_gN"]();
                        let diff = stage_selection_1["gj"](last);
                        if (diff['gg']) {
                            let { 'gd': type, 'ge': ename } = stage_generic_1['gH'](diff);
                            history_1["gd"](type, ename);
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
                    if (keyboard_1['gK'](sourceTarget)) {
                        e['_g8'] = 1;
                    }
                }
            }
        }
        else {
            activeCell(element, props, row, col, 0, this);
        }
    },
    '_kn<input>'(e) {
        let { params, eventTarget } = e;
        let { cell, key } = params;
        let value = eventTarget.value;
        cell[key] = value;
        let element = this.get('element');
        let props = this.get('props');
        this.digest({
            props
        });
        State.fire('gf', {
            '_hW': {
                [element.id]: 1
            },
            '_hX': {
                [element.type]: 1
            },
            '_ge': {
                rows: 1
            }
        });
        history_1["gd"](history_1['gK'], props.ename, element.id + 'g1' + 'rows', 500);
    },
    '_kg<pointerdown>'(e) {
        e['_g8'] = 1;
    },
    '_jw<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['_g8'])
            return;
        e['_g8'] = 1;
        stage_elements_1["gk"](e, this);
    },
    '_km<contextmenu>'(e) {
        let currentElement = this.get('element');
        let { props, id } = currentElement;
        let fs = this.get('fs');
        if (e['_g8'] ||
            fs) {
            return;
        }
        this['_h5'](e);
        e['_g8'] = 1;
        let { row, col } = e.params;
        let cell = props.rows[row].cols[col];
        let collection = cell.elements;
        let selectElements = State.get('gd');
        let element = selectElements[0];
        let bound = e.eventTarget.getBoundingClientRect();
        let nowPosition = {
            x: e.pageX - bound.x,
            y: e.pageY - bound.y
        };
        stage_elements_1["gt"](this, e, collection, id, async (menu) => {
            if (menu.id == contextmenu_1["gd"]) {
                stage_generic_1['gK'](collection);
            }
            else if (menu.id == contextmenu_1['gC']) {
                let underElement = State.get('gw');
                let stage = stage_generic_1['gJ'](0, underElement);
                let coll = stage["_it"];
                stage_generic_1['gK'](coll, 1);
            }
            else if (menu.id == contextmenu_1["gk"]) {
                stage_clipboard_1["_iH"](e);
            }
            else if (menu.id == contextmenu_1["ge"]) {
                let stage = stage_generic_1['gJ'](0, currentElement, row, col);
                stage_clipboard_1["_iL"](stage, nowPosition);
            }
            else if (menu.id == contextmenu_1['gl']) {
                let stages = stage_generic_1['gs']();
                stage_clipboard_1['_iK'](stages);
            }
            else if (menu.id == contextmenu_1["gj"]) {
                stage_clipboard_1["_iI"](e);
            }
            else if (menu.id == contextmenu_1["gm"]) {
                stage_generic_1["gG"]();
            }
            else if (menu.id >= 3 && menu.id <= 6) {
                stage_elements_1["gm"](menu.id, element);
            }
            else if (menu.id > 19 && menu.id < 30) {
                stage_elements_1["gp"](menu.to);
            }
            else if (menu.id > 30 && menu.id < 40) {
                let ungroup = menu.id == 32;
                stage_generic_1["gE"](ungroup);
            }
            else if (menu.id > 40 && menu.id < 50) {
                let from = (menu.id == contextmenu_1["gr"] || menu.id == contextmenu_1["gt"]) ? 1 : 0;
                let to = (menu.id == contextmenu_1["gu"] ||
                    menu.id == contextmenu_1["gr"]) ? 0 : 1;
                let [result, id] = await stage_elements_1["gq"](from, to);
                if (result) {
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
                    history_1["gd"](history_1['gx']);
                }
            }
            else if (menu.id == contextmenu_1['gB']) {
                let removed = stage_generic_1['gg'](collection);
                if (removed.length) {
                    State.fire('gB');
                    history_1["gd"](history_1['gz'], stage_generic_1['gp'](removed));
                }
            }
        });
    }
};

});