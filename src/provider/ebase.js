/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/ebase",["5c","../5b/5e","../5b/enum","../5b/5o","../5b/63","../5b/65","../5b/5f","../5j/5l/cursor","../5j/5l/tip"],(require,exports,module)=>{

"use strict";
/**
 * svg操作对象
 */
Object.defineProperty(exports, "__esModule", { value: true });
let magix_1 = require("5c");
let const_1 = require("../5b/5e");
let enum_1 = require("../5b/enum");
let history_1 = require("../5b/5o");
let stage_align_1 = require("../5b/63");
let stage_generic_1 = require("../5b/65");
let transform_1 = require("../5b/5f");
let cursor_1 = require("../5j/5l/cursor");
let tip_1 = require("../5j/5l/tip");
let { atan2, PI, sin, cos, max, min } = Math;
let { node, State, has, inside, } = magix_1;
let { MAX_VALUE } = Number;
module.exports= {
    assign(data) {
        // let { element } = data;
        // if (!element.ctrl) {
        //     let map = State.get('@:{global#stage.elements.map}');
        //     element.ctrl = map[element.type];
        // }
        // if (!element.id) {
        //     element.id = guid('fix_');
        // }
        this.set(data);
        this['_qK']();
    },
    async '_ol'(element) {
        await this.digest({
            element
        });
    },
    /**
     * 获取以ctrl开头的所有控制点
     * @param props svg元素属性
     * @returns 控制点列表
     */
    '_tk'(props) {
        if (!props['_tm']) {
            let points = [], index = 1;
            while (true) {
                let key = 'ctrl' + index++;
                if (has(props, key + 'X')) {
                    points.push(key);
                }
                else {
                    break;
                }
            }
            props['_tm'] = points;
        }
        return props['_tm'];
    },
    /**
     * 获取以mod开头的所有修改点
     * @param props svg元素属性
     * @returns 修改点列表
     */
    '_tt'(props) {
        if (!props['_vI']) {
            let points = [], index = 1;
            while (true) {
                let key = 'mod' + index++;
                if (has(props, key + 'X') ||
                    has(props, key + 'Y')) {
                    points.push(key);
                }
                else {
                    break;
                }
            }
            props['_vI'] = points;
        }
        return props['_vI'];
    },
    '_qN<pointerdown>'(e) {
        e['_mW'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        let { rotate, x, y, width, height } = props;
        width = const_1['mM'](width);
        height = const_1['mM'](height);
        x = const_1['mM'](x);
        y = const_1['mM'](y);
        State.fire('mq', {
            show: 1,
            size: 1
        });
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let pos = transform_1["l9"](me.root, {
            x: e.pageX,
            y: e.pageY,
            f: 1
        });
        let sdeg = atan2(pos.y - c.y, pos.x - c.x) - rotate * PI / 180, moved;
        let eventTarget = e.eventTarget;
        me['_mz'](e, (evt) => {
            if (!moved) {
                cursor_1["_mA"](eventTarget);
            }
            moved = 1;
            pos = transform_1["l9"](me.root, {
                x: evt.pageX,
                y: evt.pageY,
                f: 1
            });
            let deg = atan2(pos.y - c.y, pos.x - c.x);
            deg = (deg - sdeg) * 180 / PI;
            props.rotate = (360 + (deg | 0)) % 360;
            if (ctrl['_m3']) {
                ctrl['_m3'](props);
            }
            this.digest({
                element
            });
            State.fire('l4', {
                '_nK': {
                    [element.id]: 1
                },
                '_nL': {
                    [element.type]: 1
                },
                '_l3': {
                    '_l6': 1
                }
            });
            tip_1['_oJ'](`${props.rotate}°`);
            tip_1['_oM'](evt.pageX, evt.pageY);
        }, () => {
            if (moved) {
                cursor_1["_mB"]();
                if (rotate != props.rotate) {
                    history_1["l2"](history_1['mu'], props.ename);
                }
            }
            State.fire('mq', {
                hide: 1
            });
            tip_1['_mB']();
        });
    },
    '_qd<pointerdown>'(e) {
        if (e.button || e['_mW'])
            return;
        e['_mW'] = 1;
        //https://github.com/a7650/h5-editor/blob/master/src/views/posterEditor/components/dragable/components/vue-draggable-resizable.vue
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('mq', {
            show: 1,
            size: 1
        });
        let { rotate, width: beginWidth, height: beginHeight } = props;
        if (rotate == null) {
            props.rotate = rotate = 0;
        }
        let { params, pageX, pageY, shiftKey: isShiftKeyStillPressed, altKey, eventTarget } = e;
        let { key } = params;
        let rotatedRect = transform_1['l3'](props);
        let [handY, handX] = key;
        let useFixIndex = transform_1['mb'](key);
        let beginFixed = rotatedRect['_n2'][useFixIndex];
        let scale = State.get('l3');
        let minWidth = 0, minHeight = 0, maxWidth = MAX_VALUE, maxHeight = MAX_VALUE, findWidth, findHeight;
        for (let p of ctrl.props) {
            if (p.key == 'width') {
                findWidth = 1;
                if (has(p, 'min')) {
                    minWidth = p.min(props) * scale;
                }
                if (has(p, 'max')) {
                    maxWidth = p.max(props) * scale;
                }
            }
            else if (p.key == 'height') {
                findHeight = 1;
                if (has(p, 'min')) {
                    minHeight = p.min(props) * scale;
                }
                if (has(p, 'max')) {
                    maxHeight = p.max(props) * scale;
                }
            }
            if (findWidth &&
                findHeight) {
                break;
            }
        }
        let moved;
        let beginPoint = {
            x: pageX,
            y: pageY
        };
        let moveEvent;
        let modifyWidth = handX != 'm';
        let modifyHeight = handY != 'm';
        let oppsiteWidth = handX == 'l' ? -1 : 1;
        let oppsiteHeight = handY == 't' ? -1 : 1;
        let minRatio = max(minWidth / beginWidth, minHeight / beginHeight);
        let maxRatio = min(maxWidth / beginWidth, maxHeight / beginHeight);
        let syncSize = ctrl['_oG'] & enum_1['mj'];
        let supportSnapElement = const_1['mn'], alignElements, page = State.get('ma'), snapElement = page.snapElement, altPressed = snapElement ? altKey : !altKey, snapThreshold, maskLeft, maskTop;
        if (supportSnapElement) {
            let maskId = this.get('maskId');
            let { 'l2': allElements } = stage_generic_1['l2']();
            let find = stage_align_1['l2'](allElements, maskId, element);
            alignElements = find['l2'];
            snapThreshold = const_1['mx'] * scale;
            if (maskId) {
                let maskBound = find['mf'];
                let rootBound = find['l3'];
                maskLeft = maskBound.x - rootBound.x;
                maskTop = maskBound.y - rootBound.y;
            }
        }
        let nearsideScrollOffset;
        let moveCallback = async () => {
            //console.log(supportSnapElement, altPressed);
            if (!moveEvent)
                return;
            if (!moved) {
                cursor_1["_mA"](eventTarget);
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
            if (newWidth < minWidth) {
                newWidth = minWidth;
            }
            else if (newWidth > maxWidth) {
                newWidth = maxWidth;
            }
            if (newHeight < minHeight) {
                newHeight = minHeight;
            }
            else if (newHeight > maxHeight) {
                newHeight = maxHeight;
            }
            let syncFlag = 0;
            //按下shift键或元素本身就需要使用相同的宽高
            if (isShiftKeyStillPressed ||
                syncSize) {
                let r;
                if (handX == 'm') {
                    syncFlag = 1;
                }
                else if (handY == 'm') {
                    syncFlag = 2;
                }
                else if (beginWidth >= beginHeight) {
                    syncFlag = 2;
                }
                else {
                    syncFlag = 1;
                }
                if (syncFlag == 1) {
                    if (beginHeight) {
                        r = newHeight / beginHeight;
                    }
                    else {
                        r = 1;
                        syncFlag = 0;
                    }
                }
                else {
                    if (beginWidth) {
                        r = newWidth / beginWidth;
                    }
                    else {
                        r = 1;
                        syncFlag = 0;
                    }
                }
                if (r < minRatio) {
                    r = minRatio;
                }
                else if (r > maxRatio) {
                    r = maxRatio;
                }
                newWidth = beginWidth * r;
                newHeight = beginHeight * r;
            }
            if (supportSnapElement) {
                let snapInfo = stage_align_1['l9'](alignElements, beginFixed, key, rotate, newWidth, newHeight, snapThreshold, minWidth, maxWidth, minHeight, maxHeight, syncFlag, beginWidth, beginHeight, minRatio, maxRatio, altPressed, maskLeft, maskTop);
                if (snapInfo['_o_']) {
                    newWidth = snapInfo['_oa'];
                    newHeight = snapInfo['_ob'];
                }
            }
            if (props.width != newWidth ||
                props.height != newHeight) {
                moved = (newWidth != beginWidth || newHeight != beginHeight) ? 2 : 1;
                props.width = newWidth;
                props.height = newHeight;
                let newRotatedRect = transform_1['l3'](props);
                let newFixed = newRotatedRect['_n2'][useFixIndex];
                let x = beginFixed.x - newFixed.x;
                let y = beginFixed.y - newFixed.y;
                props.x += x;
                props.y += y;
                if (ctrl['_m3']) {
                    ctrl['_m3'](props);
                }
                await me.digest({
                    element
                });
                State.fire('l4', {
                    '_nK': {
                        [element.id]: 1
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
            let tipWidth = transform_1['l5'](newWidth), tipHeight = transform_1['l5'](newHeight), tipMsg = `${tipWidth} x ${tipHeight}`;
            tip_1['_oJ'](tipMsg);
            tip_1['_oM'](moveEvent.pageX, moveEvent.pageY);
        };
        /**
         * 监听设计器贴边滚动事件
         * @param e 内部滚动事件对象
         */
        let watchIntervalMove = (e) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        let watchKeypress = e => {
            isShiftKeyStillPressed = e['l6'];
            altPressed = snapElement ? e['l8'] : !e['l8'];
            moveCallback();
        };
        State.on('ma', watchKeypress);
        //处理贴边滚动
        State.on('mg', watchIntervalMove);
        me['_mz'](e, evt => {
            State.fire('mf', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('ma', watchKeypress);
            State.off('mg', watchIntervalMove);
            State.fire('mi');
            if (moved) {
                cursor_1["_mB"]();
            }
            if (moved == 2) {
                history_1["l2"](history_1['mx'], props.ename);
            }
            // let rect = Transform["@:{transform#rotate.rect}"](props, props.rotate);
            // console.log(rect);
            // if (rect.left < 0) {
            //     props.x -= rect.left;
            //     State.fire('@:{event#stage.select.element.props.change}', {
            //         '@:{ids}': {
            //             [element.id]: 1
            //         },
            //         '@:{types}': {
            //             [element.type]: 1
            //         },
            //         '@:{props}': {
            //             '@:{rotate}': 1
            //         }
            //     });
            //     this.digest({
            //         element
            //     });
            // }
            State.fire('mq', {
                hide: 1
            });
            if (supportSnapElement) {
                State.fire('l2');
            }
            tip_1['_mB']();
        });
    },
    '_vL<pointerdown>'(e) {
        e['_mW'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('mq', {
            show: 1,
            size: 1
        });
        let moved;
        let { altKey, params, eventTarget } = e;
        let { key } = params;
        let { x, y, width, height, rotate } = props;
        let startX = props[`${key}X`], startY = props[`${key}Y`];
        width = const_1['mM'](width);
        height = const_1['mM'](height);
        x = const_1['mM'](x);
        y = const_1['mM'](y);
        rotate = rotate || 0;
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let scale = State.get('l3');
        props['_tq'] = key;
        this.digest({
            element
        });
        State.fire('l4', {
            '_nK': {
                [element.id]: 1
            },
            '_nL': {
                [element.type]: 1
            },
            '_l3': {
                '_vJ': 1
            }
        });
        let supportSnapElement = const_1['mn'], alignElements, page = State.get('ma'), snapElement = page.snapElement, altPressed = snapElement ? altKey : !altKey, snapThreshold;
        if (supportSnapElement) {
            let { 'l2': allElements } = stage_generic_1['l2']();
            let find = stage_align_1['l2'](allElements, null, element);
            alignElements = find['l2'];
            snapThreshold = const_1['mx'] * scale;
        }
        let moveEvent;
        let nearsideScrollOffset, stageBound = transform_1['l2']();
        let moveCallback = async () => {
            if (!moveEvent)
                return;
            if (!moved) {
                cursor_1["_mA"](eventTarget);
            }
            let mpos = {
                x: moveEvent.pageX - stageBound.x,
                y: moveEvent.pageY - stageBound.y
            };
            if (nearsideScrollOffset) {
                mpos.y += nearsideScrollOffset['l2'];
                mpos.x += nearsideScrollOffset['l3'];
            }
            moved = 1;
            let current = transform_1["ma"](mpos, c);
            let { y: newY, x: newX } = transform_1["mc"](mpos, c, current - rotate);
            if (supportSnapElement) {
                let snapInfo = stage_align_1['ma'](alignElements, newX, newY, snapThreshold, altPressed);
                if (snapInfo['_o_']) {
                    newX = snapInfo['_oc'];
                    newY = snapInfo['_od'];
                }
            }
            props[`${key}X`] = const_1['l3'](newX);
            props[`${key}Y`] = const_1['l3'](newY);
            await this.digest({
                element
            });
            State.fire('l4', {
                '_nK': {
                    [element.id]: 1
                },
                '_nL': {
                    [element.type]: 1
                },
                '_l3': {
                    '_vK': 1
                }
            });
            if (nearsideScrollOffset &&
                !nearsideScrollOffset['l4']) {
                nearsideScrollOffset['l4'] = 1;
                nearsideScrollOffset['l5']();
            }
            let tipMsg = `${transform_1['l5'](props[`${key}X`])} , ${transform_1['l5'](props[`${key}Y`])}`;
            tip_1['_oJ'](tipMsg);
            tip_1['_oM'](moveEvent.pageX, moveEvent.pageY);
        };
        let watchIntervalMove = (e) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        let watchKeypress = e => {
            altPressed = snapElement ? e['l8'] : !e['l8'];
            moveCallback();
        };
        State.on('ma', watchKeypress);
        State.on('mg', watchIntervalMove);
        me['_mz'](e, (evt) => {
            State.fire('mf', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('ma', watchKeypress);
            State.off('mg', watchIntervalMove);
            State.fire('mi');
            cursor_1["_mB"]();
            if (moved) {
                ctrl['_m3'](props);
                this.digest({
                    element
                });
                State.fire('l4', {
                    '_nK': {
                        [element.id]: 1
                    },
                    '_nL': {
                        [element.type]: 1
                    },
                    '_l3': {
                        '_l8': 1
                    }
                });
                if (props[`${key}X`] != startX ||
                    props[`${key}Y`] != startY) {
                    history_1["l2"](history_1['mv'], props.ename);
                }
            }
            State.fire('mq', {
                hide: 1
            });
            if (supportSnapElement) {
                State.fire('l2');
            }
            tip_1['_mB']();
        });
    },
    '_vM<pointerover>'(e) {
        let titleNode = node(`_rd_t_${this.id}`);
        if (titleNode) {
            titleNode.innerHTML = e.eventTarget.getAttribute('title');
        }
    },
    '_vN<pointerout>'() {
        let titleNode = node(`_rd_t_${this.id}`);
        if (titleNode) {
            titleNode.innerHTML = '';
        }
    },
    '_qO<input>'(e) {
        let element = this.get('element');
        let { props } = element;
        props.text = e.eventTarget.value; //.trim();
        this['_ol'](element);
        State.fire('l4', {
            '_nK': {
                [element.id]: 1
            },
            '_nL': {
                [element.type]: 1
            },
            '_l3': {
                '_vO': 1
            }
        });
        history_1["l2"](history_1['my'], props.ename, element.id, 500);
    },
    '_qP<pointerover>'(e) {
        this['_vM<pointerover>'](e);
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let element = this.get('element');
            let { props } = element;
            props['_qJ'] = e.params.key;
            this['_ol'](element);
            State.fire('l4', {
                '_nK': {
                    [element.id]: 1
                },
                '_nL': {
                    [element.type]: 1
                },
                '_l3': {
                    '_qJ': 1
                }
            });
        }
    },
    '_qQ<pointerdown>'(e) {
        e['_mW'] = 1;
        let element = this.get('element');
        let { ctrl } = element;
        let { key } = e.params;
        ctrl['_qQ'](element, e, key, this);
    },
    '_p2<pointerdown,contextmenu>'(e) {
        e['_mW'] = 1;
    }
};

});