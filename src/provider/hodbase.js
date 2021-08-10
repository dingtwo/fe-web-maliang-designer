/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("provider/hodbase",["magix5","../designer/const","../designer/contextmenu","../designer/history","../designer/keyboard","../designer/stage-clipboard","../designer/stage-elements","../designer/stage-generic","../designer/stage-selection","../designer/transform","../gallery/mx-pointer/cursor","../gallery/mx-pointer/tip","./cell","./table"],(require,exports,module)=>{


let magix_1 = require("magix5");
let const_1 = require("../designer/const");
let contextmenu_1 = require("../designer/contextmenu");
let history_1 = require("../designer/history");
let keyboard_1 = require("../designer/keyboard");
let stage_clipboard_1 = require("../designer/stage-clipboard");
let stage_elements_1 = require("../designer/stage-elements");
let stage_generic_1 = require("../designer/stage-generic");
let stage_selection_1 = require("../designer/stage-selection");
let transform_1 = require("../designer/transform");
let cursor_1 = require("../gallery/mx-pointer/cursor");
let tip_1 = require("../gallery/mx-pointer/tip");
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
        State.fire('@:{event#stage.select.element.props.change~rs}', {
            '@:{ids~rs}': {
                [element.id]: 1
            },
            '@:{types~rs}': {
                [element.type]: 1
            },
            '@:{props~rs}': {
                '@:{focus.cell~rs}': 1
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
            let old = stage_selection_1["@:{selection#set~rs}"]();
            if (old) {
                history_1["@:{history#save~rs}"](history_1['@:{history#element.lost.focus~rs}'], stage_generic_1['@:{generic#query.element.name~rs}'](old));
            }
        }
    }
    else {
        activeCellByPos(props, element, view, row, col);
        stage_elements_1['@:{elements#single.or.multi.select~rs}'](element, isShiftKeyPressed, false);
    }
};
/**
 * 激活当前格子内的input元素
 * @param view 容器属性所在的Magix.View对象
 * @param sourceTarget 事件的原始节点
 * @param eventTarget 监听事件的节点
 */
let activeDirectInput = async (view, sourceTarget, eventTarget) => {
    let waitMark = mark(view, '@:{wait.ready~rs}');
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
    '@:{lost.select~rs}'() {
        let props = this.get('props');
        let element = this.get('element');
        activeCellByPos(props, element, this, -1, -1);
    },
    /**
     * 格子内的input监听
     * @param e
     */
    '@:{active.cell.by.pos~rs}<focusin>'(e) {
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
    '@:{start.resize.table.cell~rs}<pointerdown>'(e) {
        if (e['@:{halt~rs}'] || e.button)
            return; //事件被阻止或右键不处理
        e['@:{halt~rs}'] = 1;
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
        State.fire('@:{event#stage.toggle.scroll~rs}', {
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
        let rotatedRect = transform_1['@:{transform#rotate.rect~rs}'](props);
        let useFixIndex = transform_1['@:{transform#handle.to.fixed.point~rs}'](key);
        let beginFixed = rotatedRect['@:{point~rs}'][useFixIndex];
        let parent = me.owner.parent();
        let current = eventTarget;
        let modifyWidth = handX != 'm';
        let modifyHeight = handY != 'm';
        let oppsiteWidth = handX == 'l' ? -1 : 1;
        let oppsiteHeight = handY == 't' ? -1 : 1;
        let scale = State.get('@:{global#stage.scale~rs}');
        let minCellWidth = isSpace ? 0 : const_1['@:{const#to.unit~rs}'](cell_1['@:{min.width~rs}'] * scale);
        let minCellHeight = isSpace ? 0 : const_1['@:{const#to.unit~rs}'](cell_1['@:{min.height~rs}'] * scale);
        let moveEvent, nearsideScrollOffset;
        let moveCallback = async () => {
            if (!moveEvent)
                return;
            if (!moved) {
                cursor_1["@:{show~rs}"](current);
                moved = 1;
            }
            let nowPoint = {
                x: moveEvent.pageX,
                y: moveEvent.pageY
            };
            if (nearsideScrollOffset) {
                nowPoint.y += nearsideScrollOffset['@:{interval.move.event#y~rs}'];
                nowPoint.x += nearsideScrollOffset['@:{interval.move.event#x~rs}'];
            }
            let angle = transform_1['@:{transform#get.point.deg~rs}'](nowPoint, beginPoint);
            let dis = transform_1['@:{transform#get.point.distance~rs}'](nowPoint, beginPoint);
            let rad = (PI / 180) * (angle - rotate);
            let diffY = const_1['@:{const#to.unit~rs}'](sin(rad) * dis);
            let diffX = const_1['@:{const#to.unit~rs}'](cos(rad) * dis);
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
                    table_1["@:{table.provider#update.cell.size~rs}"](props, cell);
                }
                //更新部分尺寸属性后，调用元素控制器的update.props方法进行其它属性的更新
                ctrl['@:{update.props~rs}'](props);
                let newRotatedRect = transform_1['@:{transform#rotate.rect~rs}'](props);
                let newFixed = newRotatedRect['@:{point~rs}'][useFixIndex];
                let x = beginFixed.x - newFixed.x;
                let y = beginFixed.y - newFixed.y;
                props.x += x;
                props.y += y;
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
            let tipWidth = transform_1['@:{transform#to.show.value~rs}'](newWidth), tipHeight = transform_1['@:{transform#to.show.value~rs}'](newHeight), tipMsg;
            if (isSpace) {
                tipMsg = tipHeight;
            }
            else {
                tipMsg = `${tipWidth} x ${tipHeight}`;
            }
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
                cursor_1["@:{hide~rs}"]();
            }
            if (moved == 2) {
                history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.size~rs}'], ename);
            }
            State.fire('@:{event#stage.toggle.scroll~rs}', {
                hide: 1
            });
            tip_1['@:{hide~rs}']();
        });
    },
    '@:{active.cell~rs}<pointerdown>'(e) {
        let fs = this.get('fs');
        if (e['@:{halt~rs}'] ||
            fs)
            return;
        let element = this.get('element');
        let props = this.get('props');
        let { eventTarget: target, shiftKey, ctrlKey, metaKey, params, button, target: sourceTarget, pageX, pageY } = e;
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let { row, col, elm, input } = params;
        let isShiftKeyStillPressed = shiftKey || ctrlKey || metaKey;
        if (!button) {
            if (isShiftKeyStillPressed ||
                elm) {
                e['@:{halt~rs}'] = 1;
            }
            if (elm && !input) {
                let cell = props.rows[row].cols[col];
                //Select["@:{init}"]();
                let showedCursor;
                let hodElements, currentSelected;
                let last = stage_selection_1['@:{selection#get.selected.map~rs}']();
                let initSelectedElements = [...selectElements];
                let initIds = [], initIdsMap = {};
                for (let ise of initSelectedElements) {
                    initIds.push(ise.id);
                    initIdsMap[ise.id] = 1;
                }
                currentSelected = initIds.join(',');
                if (isShiftKeyStillPressed) {
                    hodElements = stage_generic_1["@:{generic#find.hod.sub.elements.map~rs}"]([...cell.elements, ...initSelectedElements]);
                }
                else {
                    initIdsMap = emptyObject;
                }
                let elementLocations = stage_generic_1["@:{generic#get.elements.location~rs}"](cell.elements);
                let moveEvent;
                State.set({
                    '@:{global#stage.prevent.actions~rs}': 1
                });
                let dragSelect = () => {
                    if (!moveEvent)
                        return;
                    if (!showedCursor) {
                        showedCursor = 1;
                        cursor_1["@:{show.by.type~rs}"]('default');
                        if (!isShiftKeyStillPressed) {
                            stage_selection_1["@:{selection#set~rs}"]();
                        }
                    }
                    let { pageX: moveX, pageY: moveY } = moveEvent;
                    let width = abs(pageX - moveX);
                    let height = abs(pageY - moveY);
                    let left = min(pageX, moveX);
                    let top = min(pageY, moveY);
                    //Select["@:{update}"](left, top, width, height);
                    let rect = transform_1["@:{transform#real.to.nearest.coord~rs}"](target, {
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
                        let intersect = stage_generic_1["@:{generic#get.intersect.elements~rs}"](elementLocations, rect, initSelectedElements, isShiftKeyStillPressed && hodElements, isShiftKeyStillPressed ? initIdsMap : emptyObject);
                        if (intersect["@:{ids~rs}"] != currentSelected) {
                            currentSelected = intersect["@:{ids~rs}"];
                            stage_selection_1["@:{selection#set.all~rs}"](intersect["@:{selected~rs}"]);
                        }
                    }
                };
                let watchKeypress = e => {
                    isShiftKeyStillPressed = e['@:{keypress#shift.key~rs}'] || e['@:{keypress#ctrl.key~rs}'];
                    dragSelect();
                };
                State.on('@:{event#stage.key.press~rs}', watchKeypress);
                this['@:{drag.drop~rs}'](e, ex => {
                    moveEvent = ex;
                    dragSelect();
                }, () => {
                    State.off('@:{event#stage.key.press~rs}', watchKeypress);
                    State.set({
                        '@:{global#stage.prevent.actions~rs}': 0
                    });
                    if (showedCursor) {
                        this.digest({
                            selectRect: null
                        });
                        //Select["@:{hide}"]();
                        cursor_1["@:{hide~rs}"]();
                        let diff = stage_selection_1["@:{selection#has.changed~rs}"](last);
                        if (diff['@:{selection.changed#has.diffed~rs}']) {
                            let { '@:{generic.diff.info#type~rs}': type, '@:{generic.diff.info#ename~rs}': ename } = stage_generic_1['@:{generic#query.history.info.by.diff~rs}'](diff);
                            history_1["@:{history#save~rs}"](type, ename);
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
                    if (keyboard_1['@:{key#is.input.element~rs}'](sourceTarget)) {
                        e['@:{halt~rs}'] = 1;
                    }
                }
            }
        }
        else {
            activeCell(element, props, row, col, 0, this);
        }
    },
    '@:{update.cell.text~rs}<input>'(e) {
        let { params, eventTarget } = e;
        let { cell, key } = params;
        let value = eventTarget.value;
        cell[key] = value;
        let element = this.get('element');
        let props = this.get('props');
        this.digest({
            props
        });
        State.fire('@:{event#stage.select.element.props.change~rs}', {
            '@:{ids~rs}': {
                [element.id]: 1
            },
            '@:{types~rs}': {
                [element.type]: 1
            },
            '@:{props~rs}': {
                rows: 1
            }
        });
        history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.props~rs}'], props.ename, element.id + '@:{history#element.props.change~rs}' + 'rows', 500);
    },
    '@:{stop~rs}<pointerdown>'(e) {
        e['@:{halt~rs}'] = 1;
    },
    '@:{element.start.drag~rs}<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['@:{halt~rs}'])
            return;
        e['@:{halt~rs}'] = 1;
        stage_elements_1["@:{elements#select.or.move.elements~rs}"](e, this);
    },
    '@:{show.contxtmenu~rs}<contextmenu>'(e) {
        let currentElement = this.get('element');
        let { props, id } = currentElement;
        let fs = this.get('fs');
        if (e['@:{halt~rs}'] ||
            fs) {
            return;
        }
        this['@:{prevent.default~rs}'](e);
        e['@:{halt~rs}'] = 1;
        let { row, col } = e.params;
        let cell = props.rows[row].cols[col];
        let collection = cell.elements;
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let element = selectElements[0];
        let bound = e.eventTarget.getBoundingClientRect();
        let nowPosition = {
            x: e.pageX - bound.x,
            y: e.pageY - bound.y
        };
        stage_elements_1["@:{elements#show.contextmenu~rs}"](this, e, collection, id, async (menu) => {
            if (menu.id == contextmenu_1["@:{cm#all.id~rs}"]) {
                stage_generic_1['@:{generic#select.all.collection.elements~rs}'](collection);
            }
            else if (menu.id == contextmenu_1['@:{cm#reverse.id~rs}']) {
                let underElement = State.get('@:{global#stage.contextmenu.under.item~rs}');
                let stage = stage_generic_1['@:{generic#query.nearest.stage~rs}'](0, underElement);
                let coll = stage["@:{collection~rs}"];
                stage_generic_1['@:{generic#select.all.collection.elements~rs}'](coll, 1);
            }
            else if (menu.id == contextmenu_1["@:{cm#copy.id~rs}"]) {
                stage_clipboard_1["@:{copy.elements~rs}"](e);
            }
            else if (menu.id == contextmenu_1["@:{cm#paste.id~rs}"]) {
                let stage = stage_generic_1['@:{generic#query.nearest.stage~rs}'](0, currentElement, row, col);
                stage_clipboard_1["@:{paste.elements~rs}"](stage, nowPosition);
            }
            else if (menu.id == contextmenu_1['@:{cm#duplicate.id~rs}']) {
                let stages = stage_generic_1['@:{generic#query.select.elements.stage~rs}']();
                stage_clipboard_1['@:{duplicate.elements~rs}'](stages);
            }
            else if (menu.id == contextmenu_1["@:{cm#cut.id~rs}"]) {
                stage_clipboard_1["@:{cut.elements~rs}"](e);
            }
            else if (menu.id == contextmenu_1["@:{cm#delete.id~rs}"]) {
                stage_generic_1["@:{generic#delete.select.elements~rs}"]();
            }
            else if (menu.id >= 3 && menu.id <= 6) {
                stage_elements_1["@:{elements#modify.element.z.index~rs}"](menu.id, element);
            }
            else if (menu.id > 19 && menu.id < 30) {
                stage_elements_1["@:{elements#align.elements~rs}"](menu.to);
            }
            else if (menu.id > 30 && menu.id < 40) {
                let ungroup = menu.id == 32;
                stage_generic_1["@:{generic#group.select.elements~rs}"](ungroup);
            }
            else if (menu.id > 40 && menu.id < 50) {
                let from = (menu.id == contextmenu_1["@:{cm#sync.width.as.height.id~rs}"] || menu.id == contextmenu_1["@:{cm#sync.width.id~rs}"]) ? 1 : 0;
                let to = (menu.id == contextmenu_1["@:{cm#sync.height.id~rs}"] ||
                    menu.id == contextmenu_1["@:{cm#sync.width.as.height.id~rs}"]) ? 0 : 1;
                let [result, id] = await stage_elements_1["@:{elements#sync.or.reverse.size.elements~rs}"](from, to);
                if (result) {
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
                    history_1["@:{history#save~rs}"](history_1['@:{history#element.sync.size~rs}']);
                }
            }
            else if (menu.id == contextmenu_1['@:{cm#clear.hod.stage.id~rs}']) {
                let removed = stage_generic_1['@:{generic#remove.nonreadonly.elements~rs}'](collection);
                if (removed.length) {
                    State.fire('@:{event#stage.elements.change~rs}');
                    history_1["@:{history#save~rs}"](history_1['@:{history#element.removed~rs}'], stage_generic_1['@:{generic#query.element.name~rs}'](removed));
                }
            }
        });
    }
};

});