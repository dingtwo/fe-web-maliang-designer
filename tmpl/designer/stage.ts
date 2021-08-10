/*
    author:https://github.com/xinglie
*/
import Magix, { delay, mark } from 'magix';
import Dragdrop from '../gallery/mx-dragdrop/index';
import Cursor from '../gallery/mx-pointer/cursor';
import Select from '../gallery/mx-pointer/select';
import PoleProvider from '../provider/pole';
import ScrollProvider from '../provider/scroll';
import SDragProvider from '../provider/sdrag';
import StageDropProvider from '../provider/sdrop';
import WatchSizeProvider from '../provider/wsize';
import Const from './const';
import Contextmenu from './contextmenu';
import Enum from './enum';
import DHistory from './history';
import Keyboard from './keyboard';
import StageClipboard from './stage-clipboard';
import StageElements from './stage-elements';
import StageGeneric from './stage-generic';
import StageSelection from './stage-selection';
import Transform from './transform';
let emptyObject = {};
let { State, Vframe,
    node, applyStyle, View, inside, isFunction, lowTaskFinale } = Magix;
let { min, abs } = Math;
//缩放元素
let ScaleElement = (m, step) => {
    let { props, ctrl } = <Report.StageElement>m;
    for (let s of ctrl.props) {
        if (isFunction(s['@:{stage.scale}'])) {
            s['@:{stage.scale}'](props, step);
        } else if (s['@:{is.scale.and.unit.field}']) {
            props[s.key] *= step;
        }
    }
    if (ctrl['@:{update.props}']) {
        ctrl['@:{update.props}'](props);
    }
};
let FindHeaderAndFooterElements = elements => {
    let ff = [];
    if (elements) {
        for (let e of elements) {
            if (e.type == 'hod-header' ||
                e.type == 'hod-footer') {
                ff.push(e);
            }
        }
    }
    return ff;
};
//调整z轴快捷键映射
let KeysToMenuId = {
    [Keyboard["@:{key#u}"]]: 5,
    [Keyboard["@:{key#d}"]]: 6,
    [Keyboard["@:{key#t}"]]: 3,
    [Keyboard["@:{key#b}"]]: 4
};
applyStyle('@:stage.less');
export default View.extend({
    tmpl: '@:stage.html',
    init() {
        /**
         * 编辑区滚动节点
         */
        let bakScale = 0;
        this.set({
            fs: 0,
            unit: State.get('@:{global#stage.unit}'),
            spad: Const['@:{const#stage.padding}'],
            fhf: FindHeaderAndFooterElements
        });
        let update = this['@:{debounce}'](this.render, 10);
        //添加元素
        let addElements = e => {
            //fromToolbxSize = null;
            //拖动添加后，解锁快捷键操作
            State.set({
                '@:{global#stage.prevent.actions}': 0
            });
            if (e.node) {
                let lastHod = SDragProvider['@:{sdrag#get.last.hod}']();
                if (lastHod) {
                    let { classList } = lastHod;
                    //, '@:scoped.style:full-fill'
                    classList.remove('@:scoped.style:hod-drop-tip');
                }
                //鼠标下的节点不在设计区
                if (!inside(e.node, this.root)) {
                    return;
                }
            }
            SDragProvider['@:{sdrag#clear}']();
            //添加元素
            let {
                '@:{add.elements}': addElements,
                '@:{select.elements}': selectElements
            } = StageElements["@:{elements#add.element}"](e);
            if (addElements.length) {//成功添加后更新界面并记录历史记录
                State.fire('@:{event#stage.elements.change}');
                if (selectElements.length) {
                    StageSelection['@:{selection#set.all}'](selectElements);
                    StageGeneric['@:{generic#scroll.into.view}'](selectElements[selectElements.length - 1].id);
                }
                DHistory["@:{history#save}"](DHistory['@:{history#element.added}'], StageGeneric['@:{generic#query.element.name}'](addElements));
            }
        };
        let updateStage = async e => {//更新设计区
            console.log(e);
            let elements = State.get('@:{global#stage.elements}');
            let { step, '@:{fullscreen}': fs } = e;
            console.log(e);
            if (step ||
                fs) {
                if (e['@:{fullscreen}']) {
                    let page = State.get('@:{global#stage.page}');
                    if (e['@:{is.full.screen}']) {
                        let pxWidth = Const['@:{const#to.px}'](page.width);
                        let pxHeight = Const['@:{const#to.px}'](page.height);
                        let rh = pxHeight * page.pages;
                        let rwidth = e['@:{width}'] / pxWidth;
                        let rheight = e['@:{height}'] / rh;
                        let rbest = min(rwidth, rheight);
                        let rx = 0, ry = 0;
                        if (page.scaleType == 'auto') {
                            rx = rbest;
                            ry = rbest;
                        } else {
                            rx = rwidth;
                            ry = rheight;
                        }
                        //console.log(e.width,e.height);
                        let marginTop = (e['@:{height}'] - ry * rh) / 2,
                            marginLeft = (e['@:{width}'] - rx * pxWidth) / 2;
                        let current = State.get('@:{global#stage.scale}');
                        if (current != 1) {
                            e.step = 1 / current;
                            bakScale = current;
                        } else {
                            bakScale = 0;
                        }
                        console.log(rx, ry, marginTop, marginLeft);
                        State.set({
                            '@:{global#stage.scale}': 1
                        });
                        this.set({
                            rx,
                            ry,
                            marginTop,
                            marginLeft
                        });
                    } else {
                        if (bakScale != 0) {
                            e.step = bakScale;
                            State.set({
                                '@:{global#stage.scale}': bakScale
                            });
                        }
                    }
                    this.set({
                        fs: e['@:{is.full.screen}']
                    });
                }
                if (step) {
                    let flowConnector = [];
                    let flowProvider = State.get('@:{global#provider.of.flow}');
                    let walk = es => {
                        for (let m of es) {
                            if (flowProvider &&
                                flowProvider['@:{flow.provider#is.connector}'](m)) {
                                flowConnector.push(m)
                            } else {
                                ScaleElement(m, step);
                                let { props, ctrl } = m;
                                if (ctrl.as & Enum['@:{enum#as.hod}']) {
                                    for (let row of props.rows) {
                                        for (let col of row.cols) {
                                            if (col.elements) {
                                                walk(col.elements);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                    walk(elements);
                    for (let m of flowConnector) {
                        ScaleElement(m, step);
                    }
                }
            }
            update();
            WatchSizeProvider['@:{wsize#update}']();
            let updateMark = mark(this, '@:{scroll.to.selected}');
            if (e.type == '@:{event#history.shift.change}') {
                await delay(20);
                await lowTaskFinale();
                if (updateMark()) {
                    let selectedElements = State.get<Report.StageElement[]>('@:{global#stage.select.elements}');
                    if (selectedElements.length == 1) {
                        StageGeneric['@:{generic#scroll.into.view}'](selectedElements[0].id);
                    }
                }
            }
        };
        /**
         * 监听键盘事件
         * @param e 事件
         * @returns 
         */
        let watchKeypress = (e: Report.EventOfStageKeyboardPress) => {
            let fs = this.get('fs');
            let active = document.activeElement as Report.ActiveType;
            let {
                '@:{keypress#code}': code,
                '@:{keypress#is.key.down}': isKeydown,
                '@:{keypress#shift.key}': shiftKey,
                '@:{keypress#ctrl.key}': ctrlKey,
                '@:{keypress#alt.key}': altKey,
                '@:{keypress#active.is.input}': activeIsInput,
                '@:{keypress#is.prevent.actions}': prevent
            } = e;
            //全屏、事件被阻止、激活的是输入元素且不是指定的动作均不处理
            if (fs ||
                prevent ||
                !isKeydown ||
                (activeIsInput &&
                    (active.dataset.as != 'da' ||
                        code != Keyboard["@:{key#tab}"]))) return;
            //console.log(ctrlKey, altKey, shiftKey);
            //键盘按键需要考虑精确匹配，比如ctrl+c需要排除ctrl+shift+c或ctrl+alt+c等情况
            if (!altKey) {
                if (ctrlKey) {//按下ctrl未按alt键
                    if (code == Keyboard["@:{key#z}"]) {//ctrl+z或ctrl+shift+z
                        e['@:{keypress#prevent.default}']();
                        if (shiftKey) {
                            DHistory["@:{history#redo}"]();
                        } else {
                            DHistory["@:{history#undo}"]();
                        }
                    } else if (code == Keyboard["@:{key#y}"] &&
                        !shiftKey) {//仅ctrl+y
                        e['@:{keypress#prevent.default}']();
                        DHistory["@:{history#redo}"]();
                    } else if (code == Keyboard["@:{key#a}"] &&
                        !shiftKey) {//仅ctrl+a
                        e['@:{keypress#prevent.default}']();
                        let stage = StageGeneric['@:{generic#query.nearest.stage}'](1);
                        let coll = stage["@:{collection}"];
                        StageGeneric['@:{generic#select.all.collection.elements}'](coll);
                    } else if (code == Keyboard['@:{key#i}'] &&
                        shiftKey) {//ctrl+shift+i
                        e['@:{keypress#prevent.default}']();
                        let stage = StageGeneric['@:{generic#query.nearest.stage}'](1, null, -1, -1);
                        let coll = stage["@:{collection}"];
                        StageGeneric['@:{generic#select.all.collection.elements}'](coll, shiftKey);
                    } else if (code == Keyboard["@:{key#x}"] &&
                        !shiftKey) {//仅ctrl+x
                        e['@:{keypress#prevent.default}']();
                        StageClipboard["@:{cut.elements}"]();
                    } else if (code == Keyboard["@:{key#c}"] &&
                        !shiftKey) {//仅ctrl+c
                        e['@:{keypress#prevent.default}']();
                        StageClipboard["@:{copy.elements}"]();
                    } else if (code == Keyboard["@:{key#v}"] &&
                        !shiftKey) {//ctrl+v
                        e['@:{keypress#prevent.default}']();
                        let stage = StageGeneric['@:{generic#query.nearest.stage}']();
                        StageClipboard["@:{paste.elements}"](stage);
                    } else if (code == Keyboard['@:{key#d}'] &&
                        !shiftKey) {//ctrl+d
                        e['@:{keypress#prevent.default}']();
                        let selectElementsMap = StageSelection['@:{selection#get.selected.map}']();
                        if (StageGeneric['@:{generic#query.in.enable.hod}'](selectElementsMap)) {
                            let stages = StageGeneric['@:{generic#query.select.elements.stage}']();
                            StageClipboard['@:{duplicate.elements}'](stages);
                        }
                    } else if (code == Keyboard["@:{key#g}"]) {//ctrl+g或ctrl+shift+g
                        e['@:{keypress#prevent.default}']();
                        let { '@:{can.group}': canGroup,
                            '@:{can.ungroup}': canUngroup
                        } = StageGeneric["@:{generic#query.group.state}"]();
                        if (canGroup || canUngroup) {
                            StageGeneric["@:{generic#group.select.elements}"](!canGroup);
                        }
                    } else if (code == Keyboard["@:{key#l}"]) {//ctrl+l或ctrl+shift+l
                        e['@:{keypress#prevent.default}']();
                        StageGeneric["@:{generic#lock.select.elements}"](0, 1);
                    } else if (code == Keyboard["@:{key#up}"] ||
                        code == Keyboard["@:{key#left}"] ||
                        code == Keyboard["@:{key#right}"] ||
                        code == Keyboard["@:{key#down}"]) {
                        e['@:{keypress#prevent.default}']();
                        let selectElements = State.get<Report.StageElement[]>('@:{global#stage.select.elements}');
                        if (selectElements.length == 1) {
                            let element = selectElements[0];
                            let { props, id, type, ctrl } = element;
                            if (!props.locked &&
                                (ctrl['@:{modifier}'] & Enum['@:{enum#modifier.rotate}'])) {
                                let step = code == Keyboard["@:{key#up}"] ||
                                    code == Keyboard["@:{key#left}"] ? -1 : 1;
                                if (shiftKey) {
                                    step *= Const['@:{const#keyboard.with.shift.rotate.step}']
                                } else {
                                    step *= Const['@:{const#keyboard.rotate.step}'];
                                }
                                let r = props.rotate;
                                r += step;
                                r = (r + 360) % 360;
                                if (r != props.rotate) {
                                    props.rotate = r;
                                    let elementNode = node(id);
                                    let vf;
                                    if (elementNode) {
                                        vf = Vframe.byNode(elementNode);
                                    }
                                    if (vf) {
                                        if (ctrl['@:{update.props}']) {
                                            ctrl['@:{update.props}'](props);
                                        }
                                        vf.invoke('assign', [{ element }]).then(r => {
                                            if (r !== false) {
                                                vf.invoke('render');
                                            }
                                        });
                                    }
                                    State.fire('@:{event#stage.select.element.props.change}', {
                                        '@:{ids}': {
                                            [id]: 1
                                        },
                                        '@:{types}': {
                                            [type]: 1
                                        },
                                        '@:{props}': {
                                            rotate: 1
                                        }
                                    });
                                    let ename = StageGeneric['@:{generic#query.element.name}'](selectElements);
                                    DHistory["@:{history#save}"](DHistory['@:{history#element.rotated}'], ename, '@:{history#rotate.element.by.keyboard}', 500);
                                }
                            }
                        }
                    }
                } else {
                    if (!shiftKey &&
                        code == Keyboard['@:{key#escape}']) {
                        let oldSelected = StageSelection["@:{selection#set}"]();
                        if (oldSelected) {
                            DHistory["@:{history#save}"](DHistory['@:{history#element.lost.focus}'], StageGeneric['@:{generic#query.element.name}'](oldSelected));
                        }
                    } else if (!shiftKey &&
                        code == Keyboard["@:{key#space}"]) {//space
                        let currentSelected = State.get('@:{global#stage.select.elements}');
                        if (currentSelected.length == 1) {
                            let m = currentSelected[0];
                            StageElements['@:{elements#space.or.double.click.action}'](m, e);
                        }
                    } else if (code == Keyboard["@:{key#g}"] &&
                        shiftKey) {//shift+g
                        e['@:{keypress#prevent.default}']();
                        let { '@:{can.group}': canGroup,
                            '@:{can.ungroup}': canUngroup
                        } = StageGeneric["@:{generic#query.group.state}"]();
                        if (canGroup || canUngroup) {
                            StageGeneric["@:{generic#group.select.elements}"](canUngroup);
                        }
                    } else if (code == Keyboard["@:{key#l}"] &&
                        shiftKey) {//shift+l
                        e['@:{keypress#prevent.default}']();
                        StageGeneric["@:{generic#lock.select.elements}"](1, 1);
                    } else if (code == Keyboard["@:{key#tab}"]) {//tab或shift+tab
                        e['@:{keypress#prevent.default}']();
                        StageElements["@:{elements#handle.key.tab}"](shiftKey);
                    } else if (!shiftKey && (code == Keyboard["@:{key#delete}"] ||
                        code == Keyboard["@:{key#backspace}"])) {//delete 或 backspace
                        e['@:{keypress#prevent.default}']();
                        let selectElementsMap = StageSelection['@:{selection#get.selected.map}']();
                        let selectElements = State.get('@:{global#stage.select.elements}');
                        let enable = StageGeneric['@:{generic#query.in.enable.hod}'](selectElementsMap);
                        let disabled = StageGeneric['@:{generic#query.has.disabled}'](selectElements);
                        if (enable && !disabled) {
                            StageGeneric["@:{generic#delete.select.elements}"]();
                        }
                    } else if (!shiftKey && (code == Keyboard["@:{key#d}"] ||
                        code == Keyboard["@:{key#u}"] ||
                        code == Keyboard["@:{key#t}"] ||
                        code == Keyboard["@:{key#b}"])) {
                        e['@:{keypress#prevent.default}']();
                        let selectElements = State.get('@:{global#stage.select.elements}');
                        if (selectElements.length == 1) {
                            StageElements["@:{elements#modify.element.z.index}"](KeysToMenuId[code], selectElements[0]);
                        }
                    } else if (!shiftKey && code == Keyboard["@:{key#f}"]) {
                        StageElements["@:{elements#focus.select.element.hod}"]();
                    } else if (code == Keyboard["@:{key#up}"] ||
                        code == Keyboard["@:{key#left}"] ||
                        code == Keyboard["@:{key#right}"] ||
                        code == Keyboard["@:{key#down}"]) {
                        e['@:{keypress#prevent.default}']();
                        /**
                         * 吸附网格我们只在拖动时做，因为拖动相对来讲不精确
                         * 通过属性面板或键盘时，我们支持微调
                         */
                        let scale = State.get('@:{global#stage.scale}');
                        let stepX = Const["@:{const#keyboard.move.step}"],
                            stepY = Const["@:{const#keyboard.move.step}"];
                        if (shiftKey) {
                            stepX = Const["@:{const#keyboard.with.shift.move.step}"];
                            stepY = Const["@:{const#keyboard.with.shift.move.step}"];
                        }
                        stepX *= scale;
                        stepY *= scale;

                        let selectElements = State.get('@:{global#stage.select.elements}');
                        if (selectElements.length) {
                            let offset,
                                use;
                            let newMap = {};
                            let groups = State.get('@:{global#stage.elements.groups}');
                            let { '@:{generic.all#map}': elementsMap,
                            } = StageGeneric["@:{generic#get.all.elements.and.map}"]();
                            let newElements = [];
                            let ids = {}, types = {};
                            let flowProvider = State.get<Report.ProviderOfFlow>('@:{global#provider.of.flow}');
                            let addElementToNewList = e => {
                                let { props, id, type } = e;
                                if (!newMap[id] &&
                                    (!flowProvider ||
                                        !flowProvider['@:{flow.provider#is.connector}'](e))) {
                                    types[type] = 1;
                                    newMap[id] = 1;
                                    let { locked, pinX, pinY } = props;
                                    if (locked) {
                                        pinX = pinY = 1;
                                    }
                                    if (pinX) {
                                        stepX = 0;
                                    }
                                    if (pinY) {
                                        stepY = 0;
                                    }
                                    newElements.push(e);
                                }
                            };
                            for (let e of selectElements) {
                                addElementToNewList(e);
                                let list = groups[e.id];
                                if (list) {
                                    for (let n of list) {
                                        e = elementsMap[n];
                                        addElementToNewList(e);
                                    }
                                }
                            }
                            if (code == Keyboard["@:{key#up}"]) {
                                offset = -stepY;
                                use = 'y';
                            } else if (code == Keyboard["@:{key#down}"]) {
                                offset = stepY;
                                use = 'y';
                            } else if (code == Keyboard["@:{key#left}"]) {
                                offset = -stepX;
                                use = 'x';
                            } else if (code == Keyboard["@:{key#right}"]) {
                                offset = stepX;
                                use = 'x';
                            }
                            if (offset) {
                                StageElements['@:{elements#move.elements.by.ids}'](newElements, use, Const['@:{const#to.unit}'](offset), ids, 1);
                                State.fire('@:{event#stage.select.element.props.change}', {
                                    '@:{ids}': ids,
                                    '@:{types}': types,
                                    '@:{props}': {
                                        '@:{position}': 1
                                    }
                                });
                                let ename = StageGeneric['@:{generic#query.element.name}'](newElements);
                                DHistory["@:{history#save}"](DHistory['@:{history#element.moved}'], ename, '@:{history#move.element.by.keyboard}', 500);
                            }
                        }
                    }
                }
            }
        };
        State.on('@:{event#preview}', updateStage);
        State.on('@:{event#history.shift.change}', updateStage);
        State.on('@:{event#stage.scale.change}', updateStage);
        State.on('@:{event#stage.page.change}', updateStage);
        State.on('@:{event#toolbox.add.element}', addElements);
        State.on('@:{event#stage.elements.change}', update);
        State.on('@:{event#stage.select.elements.change}', update);
        State.on('@:{event#stage.key.press}', watchKeypress);
        State.on('@:{event#stage.page.and.elements.change}', update);
        WatchSizeProvider['@:{wsize#setup}']();
        StageDropProvider['@:{sdrop#setup}']();
        PoleProvider['@:{pole#setup}'](this);
        ScrollProvider['@:{scroll#setup}']();
        SDragProvider['@:{sdrag#setup}']();
        this.on('destroy', () => {
            State.off('@:{event#preview}', updateStage);
            State.off('@:{event#history.shift.change}', updateStage);
            State.off('@:{event#stage.scale.change}', updateStage);
            State.off('@:{event#stage.page.change}', updateStage);
            State.off('@:{event#toolbox.add.element}', addElements);
            State.off('@:{event#stage.elements.change}', update);
            State.off('@:{event#stage.select.elements.change}', update);
            State.off('@:{event#stage.key.press}', watchKeypress);
            State.off('@:{event#stage.page.and.elements.change}', update);
            StageDropProvider['@:{sdrop#teardown}']();
            WatchSizeProvider['@:{wsize#teardown}']();
            PoleProvider['@:{pole#teardown}']();
            ScrollProvider['@:{scroll#teardown}']();
            SDragProvider['@:{sdrag#clear}']();
            SDragProvider['@:{sdrag#teardown}']();
        });
    },
    render() {
        this.digest({
            unit: State.get('@:{global#stage.unit}'),
            scale: State.get('@:{global#stage.scale}'),
            page: State.get('@:{global#stage.page}'),
            elements: State.get('@:{global#stage.elements}')
        });
    },
    '@:{element.start.drag}<pointerdown>'(e) {
        let fs = this.get('fs');
        if (fs || e['@:{halt}']) return;
        StageElements["@:{elements#select.or.move.elements}"](e, this);
    },
    '@:{stage}<pointerdown>'(e: MouseEvent) {
        let fs = this.get('fs');
        if (fs || e['@:{halt}']) return;
        let { target, shiftKey, ctrlKey, metaKey, pageX, pageY } = e;
        if (inside(node('_rd_sc'), target)) {
            let last = StageSelection['@:{selection#get.selected.map}']();
            let hodElements,
                currentSelected;
            let initSelectedElements = [...State.get('@:{global#stage.select.elements}')];
            let initIds = [],
                initIdsMap = {};
            for (let ise of initSelectedElements) {
                initIds.push(ise.id);
                initIdsMap[ise.id] = 1;
            }
            currentSelected = initIds.join(',');
            let stageElements = State.get('@:{global#stage.elements}');
            let isShiftKeyStillPressed;
            if (shiftKey || ctrlKey || metaKey) {
                isShiftKeyStillPressed = 1;
                hodElements = StageGeneric["@:{generic#find.hod.sub.elements.map}"](stageElements);
            } else {
                StageSelection["@:{selection#set}"]();
                initIdsMap = emptyObject;
            }
            Select["@:{init}"]();
            State.set({
                '@:{global#stage.prevent.actions}': 1
            });
            let showedCursor;
            let elementLocations = StageGeneric["@:{generic#get.elements.location}"](stageElements);
            let moveEvent;
            let dragSelect = () => {
                if (!moveEvent) return;
                if (!showedCursor) {
                    showedCursor = 1;
                    Cursor["@:{show.by.type}"]('default');
                }
                let { pageX: moveX, pageY: moveY } = moveEvent;
                let width = abs(pageX - moveX);
                let height = abs(pageY - moveY);
                let left = min(pageX, moveX);
                let top = min(pageY, moveY);
                Select["@:{update}"](left, top, width, height);
                let rect = Transform["@:{transform#real.to.stage.coord}"]({
                    x: left,
                    y: top
                }) as Report.Rect;
                rect.width = width;
                rect.height = height;
                if (elementLocations.length) {
                    let intersect = StageGeneric["@:{generic#get.intersect.elements}"](elementLocations, rect, initSelectedElements, isShiftKeyStillPressed && hodElements, isShiftKeyStillPressed ? initIdsMap : emptyObject);
                    if (intersect["@:{ids}"] != currentSelected) {
                        currentSelected = intersect["@:{ids}"];
                        StageSelection["@:{selection#set.all}"](intersect["@:{selected}"]);
                    }
                }
            };
            //需要监听在拉框选择过程中，用户松开或再次按下shift键
            /**
             * 如果在按下鼠标拖动时，未按shift键，则后续再按shift键无效果
             * 如果在按下鼠标拖动时，按了shift键，而鼠标未松开的情况下，松开shift键，则需要立即同步未按shift键的效果，如果又再次按下shift键，则需要再次处理
             */
            let watchKeypress = e => {
                isShiftKeyStillPressed = e['@:{keypress#shift.key}'] || e['@:{keypress#ctrl.key}'];
                dragSelect();
            };
            State.on('@:{event#stage.key.press}', watchKeypress);
            this['@:{drag.drop}'](e, ex => {
                moveEvent = ex;
                dragSelect();
            }, () => {
                State.set({
                    '@:{global#stage.prevent.actions}': 0
                });
                State.off('@:{event#stage.key.press}', watchKeypress);
                if (showedCursor) {
                    Select["@:{hide}"]();
                    Cursor["@:{hide}"]();
                }
                let diff = StageSelection["@:{selection#has.changed}"](last);
                if (diff['@:{selection.changed#has.diffed}']) {
                    let {
                        '@:{generic.diff.info#type}': type,
                        '@:{generic.diff.info#ename}': ename
                    } = StageGeneric['@:{generic#query.history.info.by.diff}'](diff);
                    DHistory["@:{history#save}"](type, ename);
                }
            });
        }
    },
    '@:{stage}<contextmenu>'(e: Magix5.MagixMixedEvent) {
        /**
         * 如果事件被处理过或者当前活动节点是可输入节点，则退出
         */
        if (e['@:{halt}'] ||
            Keyboard['@:{key#is.input.element}'](e.target as Report.ActiveType)) return;
        //阻止系统的右键
        this['@:{prevent.default}'](e);
        let collection = State.get('@:{global#stage.elements}');
        let selectElements = State.get('@:{global#stage.select.elements}');
        let element = selectElements[0];
        //展示菜单
        StageElements["@:{elements#show.contextmenu}"](this, e, collection, 0, async (menu) => {
            //全选按钮
            if (menu.id == Contextmenu["@:{cm#all.id}"] ||
                menu.id == Contextmenu['@:{cm#reverse.id}']) {
                StageGeneric['@:{generic#select.all.collection.elements}'](collection, menu.id == Contextmenu['@:{cm#reverse.id}']);
                //复制
            } else if (menu.id == Contextmenu["@:{cm#copy.id}"]) {
                StageClipboard["@:{copy.elements}"](e);
                //粘贴
            } else if (menu.id == Contextmenu["@:{cm#paste.id}"]) {
                let p = Transform["@:{transform#real.to.stage.coord}"]({
                    x: e.pageX,
                    y: e.pageY
                });
                let stage = StageGeneric['@:{generic#query.nearest.stage}']();
                StageClipboard["@:{paste.elements}"](stage, p);
                //剪切
            } else if (menu.id == Contextmenu['@:{cm#duplicate.id}']) {
                let stages = StageGeneric['@:{generic#query.select.elements.stage}']();
                StageClipboard['@:{duplicate.elements}'](stages);
            } else if (menu.id == Contextmenu["@:{cm#cut.id}"]) {
                StageClipboard["@:{cut.elements}"](e);
                //删除
            } else if (menu.id == Contextmenu["@:{cm#delete.id}"]) {
                StageGeneric["@:{generic#delete.select.elements}"]();
                //清空设计区
            } else if (menu.id == Contextmenu['@:{cm#clear.id}']) {
                State.fire('@:{event#stage.clear.elements}');
                //3~6进行z轴的调整
            } else if (menu.id == Contextmenu['@:{cm#new.id}']) {
                State.fire('@:{event#stage.clear.elements}', {
                    '@:{clear.events#action}': '@:{clear.events#new}'
                });
            } else if (menu.id >= 3 && menu.id <= 6) {
                StageElements["@:{elements#modify.element.z.index}"](menu.id, element);
                //20~29 表示对齐
            } else if (menu.id > 19 && menu.id < 30) {
                StageElements["@:{elements#align.elements}"](menu.to);
                //31~39表示组合
            } else if (menu.id > 30 && menu.id < 40) {
                let ungroup = menu.id == 32;
                StageGeneric["@:{generic#group.select.elements}"](ungroup);
                //41~49表示同步尺寸
            } else if (menu.id > 40 && menu.id < 50) {
                let from = (menu.id == Contextmenu["@:{cm#sync.width.as.height.id}"] || menu.id == Contextmenu["@:{cm#sync.width.id}"]) ? 1 : 0;
                let to = (menu.id == Contextmenu["@:{cm#sync.height.id}"] ||
                    menu.id == Contextmenu["@:{cm#sync.width.as.height.id}"]) ? 0 : 1;
                let [result, id, element] = await StageElements["@:{elements#sync.or.reverse.size.elements}"](from, to);
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
            }
        });
    },
    '$root<drop>'(e: DragEvent) {
        StageDropProvider['@:{sdrop#drop}'](e);
    },
    '$root<dragenter>'(e: DragEvent) {
        StageDropProvider['@:{sdrop#drag.enter}'](e);
    }
}).merge(Dragdrop);