/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5g/ebase",["51","../50/53","../50/enum","../50/5d","../50/5o","../50/5q","../50/54","../58/5a/cursor","../58/5a/tip"],(require,exports,module)=>{

"use strict";
/**
 * svg操作对象
 */
Object.defineProperty(exports, "__esModule", { value: true });
let magix_1 = require("51");
let const_1 = require("../50/53");
let enum_1 = require("../50/enum");
let history_1 = require("../50/5d");
let stage_align_1 = require("../50/5o");
let stage_generic_1 = require("../50/5q");
let transform_1 = require("../50/54");
let cursor_1 = require("../58/5a/cursor");
let tip_1 = require("../58/5a/tip");
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
        this['_kZ']();
    },
    async '_iA'(element) {
        await this.digest({
            element
        });
    },
    /**
     * 获取以ctrl开头的所有控制点
     * @param props svg元素属性
     * @returns 控制点列表
     */
    '_nz'(props) {
        if (!props['_nB']) {
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
            props['_nB'] = points;
        }
        return props['_nB'];
    },
    /**
     * 获取以mod开头的所有修改点
     * @param props svg元素属性
     * @returns 修改点列表
     */
    '_nI'(props) {
        if (!props['_pY']) {
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
            props['_pY'] = points;
        }
        return props['_pY'];
    },
    '_k2<pointerdown>'(e) {
        e['_g8'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        let { rotate, x, y, width, height } = props;
        width = const_1['gY'](width);
        height = const_1['gY'](height);
        x = const_1['gY'](x);
        y = const_1['gY'](y);
        State.fire('gC', {
            show: 1,
            size: 1
        });
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let pos = transform_1["gk"](me.root, {
            x: e.pageX,
            y: e.pageY,
            f: 1
        });
        let sdeg = atan2(pos.y - c.y, pos.x - c.x) - rotate * PI / 180, moved;
        let eventTarget = e.eventTarget;
        me['_gL'](e, (evt) => {
            if (!moved) {
                cursor_1["_gM"](eventTarget);
            }
            moved = 1;
            pos = transform_1["gk"](me.root, {
                x: evt.pageX,
                y: evt.pageY,
                f: 1
            });
            let deg = atan2(pos.y - c.y, pos.x - c.x);
            deg = (deg - sdeg) * 180 / PI;
            props.rotate = (360 + (deg | 0)) % 360;
            if (ctrl['_he']) {
                ctrl['_he'](props);
            }
            this.digest({
                element
            });
            State.fire('gf', {
                '_hW': {
                    [element.id]: 1
                },
                '_hX': {
                    [element.type]: 1
                },
                '_ge': {
                    '_gh': 1
                }
            });
            tip_1['_iY'](`${props.rotate}°`);
            tip_1['_i1'](evt.pageX, evt.pageY);
        }, () => {
            if (moved) {
                cursor_1["_gN"]();
                if (rotate != props.rotate) {
                    history_1["gd"](history_1['gG'], props.ename);
                }
            }
            State.fire('gC', {
                hide: 1
            });
            tip_1['_gN']();
        });
    },
    '_ks<pointerdown>'(e) {
        if (e.button || e['_g8'])
            return;
        e['_g8'] = 1;
        //https://github.com/a7650/h5-editor/blob/master/src/views/posterEditor/components/dragable/components/vue-draggable-resizable.vue
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('gC', {
            show: 1,
            size: 1
        });
        let { rotate, width: beginWidth, height: beginHeight } = props;
        if (rotate == null) {
            props.rotate = rotate = 0;
        }
        let { params, pageX, pageY, shiftKey: isShiftKeyStillPressed, altKey, eventTarget } = e;
        let { key } = params;
        let rotatedRect = transform_1['ge'](props);
        let [handY, handX] = key;
        let useFixIndex = transform_1['gn'](key);
        let beginFixed = rotatedRect['_ig'][useFixIndex];
        let scale = State.get('ge');
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
        let syncSize = ctrl['_iV'] & enum_1['gv'];
        let supportSnapElement = const_1['gz'], alignElements, page = State.get('gm'), snapElement = page.snapElement, altPressed = snapElement ? altKey : !altKey, snapThreshold, maskLeft, maskTop;
        if (supportSnapElement) {
            let maskId = this.get('maskId');
            let { 'gd': allElements } = stage_generic_1['gd']();
            let find = stage_align_1['gd'](allElements, maskId, element);
            alignElements = find['gd'];
            snapThreshold = const_1['gJ'] * scale;
            if (maskId) {
                let maskBound = find['gr'];
                let rootBound = find['ge'];
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
                cursor_1["_gM"](eventTarget);
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
                let snapInfo = stage_align_1['gk'](alignElements, beginFixed, key, rotate, newWidth, newHeight, snapThreshold, minWidth, maxWidth, minHeight, maxHeight, syncFlag, beginWidth, beginHeight, minRatio, maxRatio, altPressed, maskLeft, maskTop);
                if (snapInfo['_io']) {
                    newWidth = snapInfo['_ip'];
                    newHeight = snapInfo['_iq'];
                }
            }
            if (props.width != newWidth ||
                props.height != newHeight) {
                moved = (newWidth != beginWidth || newHeight != beginHeight) ? 2 : 1;
                props.width = newWidth;
                props.height = newHeight;
                let newRotatedRect = transform_1['ge'](props);
                let newFixed = newRotatedRect['_ig'][useFixIndex];
                let x = beginFixed.x - newFixed.x;
                let y = beginFixed.y - newFixed.y;
                props.x += x;
                props.y += y;
                if (ctrl['_he']) {
                    ctrl['_he'](props);
                }
                await me.digest({
                    element
                });
                State.fire('gf', {
                    '_hW': {
                        [element.id]: 1
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
            let tipWidth = transform_1['gg'](newWidth), tipHeight = transform_1['gg'](newHeight), tipMsg = `${tipWidth} x ${tipHeight}`;
            tip_1['_iY'](tipMsg);
            tip_1['_i1'](moveEvent.pageX, moveEvent.pageY);
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
            isShiftKeyStillPressed = e['gh'];
            altPressed = snapElement ? e['gj'] : !e['gj'];
            moveCallback();
        };
        State.on('gm', watchKeypress);
        //处理贴边滚动
        State.on('gs', watchIntervalMove);
        me['_gL'](e, evt => {
            State.fire('gr', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('gm', watchKeypress);
            State.off('gs', watchIntervalMove);
            State.fire('gu');
            if (moved) {
                cursor_1["_gN"]();
            }
            if (moved == 2) {
                history_1["gd"](history_1['gJ'], props.ename);
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
            State.fire('gC', {
                hide: 1
            });
            if (supportSnapElement) {
                State.fire('gd');
            }
            tip_1['_gN']();
        });
    },
    '_p1<pointerdown>'(e) {
        e['_g8'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('gC', {
            show: 1,
            size: 1
        });
        let moved;
        let { altKey, params, eventTarget } = e;
        let { key } = params;
        let { x, y, width, height, rotate } = props;
        let startX = props[`${key}X`], startY = props[`${key}Y`];
        width = const_1['gY'](width);
        height = const_1['gY'](height);
        x = const_1['gY'](x);
        y = const_1['gY'](y);
        rotate = rotate || 0;
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let scale = State.get('ge');
        props['_nF'] = key;
        this.digest({
            element
        });
        State.fire('gf', {
            '_hW': {
                [element.id]: 1
            },
            '_hX': {
                [element.type]: 1
            },
            '_ge': {
                '_pZ': 1
            }
        });
        let supportSnapElement = const_1['gz'], alignElements, page = State.get('gm'), snapElement = page.snapElement, altPressed = snapElement ? altKey : !altKey, snapThreshold;
        if (supportSnapElement) {
            let { 'gd': allElements } = stage_generic_1['gd']();
            let find = stage_align_1['gd'](allElements, null, element);
            alignElements = find['gd'];
            snapThreshold = const_1['gJ'] * scale;
        }
        let moveEvent;
        let nearsideScrollOffset, stageBound = transform_1['gd']();
        let moveCallback = async () => {
            if (!moveEvent)
                return;
            if (!moved) {
                cursor_1["_gM"](eventTarget);
            }
            let mpos = {
                x: moveEvent.pageX - stageBound.x,
                y: moveEvent.pageY - stageBound.y
            };
            if (nearsideScrollOffset) {
                mpos.y += nearsideScrollOffset['gd'];
                mpos.x += nearsideScrollOffset['ge'];
            }
            moved = 1;
            let current = transform_1["gm"](mpos, c);
            let { y: newY, x: newX } = transform_1["go"](mpos, c, current - rotate);
            if (supportSnapElement) {
                let snapInfo = stage_align_1['gm'](alignElements, newX, newY, snapThreshold, altPressed);
                if (snapInfo['_io']) {
                    newX = snapInfo['_ir'];
                    newY = snapInfo['_is'];
                }
            }
            props[`${key}X`] = const_1['ge'](newX);
            props[`${key}Y`] = const_1['ge'](newY);
            await this.digest({
                element
            });
            State.fire('gf', {
                '_hW': {
                    [element.id]: 1
                },
                '_hX': {
                    [element.type]: 1
                },
                '_ge': {
                    '_p0': 1
                }
            });
            if (nearsideScrollOffset &&
                !nearsideScrollOffset['gf']) {
                nearsideScrollOffset['gf'] = 1;
                nearsideScrollOffset['gg']();
            }
            let tipMsg = `${transform_1['gg'](props[`${key}X`])} , ${transform_1['gg'](props[`${key}Y`])}`;
            tip_1['_iY'](tipMsg);
            tip_1['_i1'](moveEvent.pageX, moveEvent.pageY);
        };
        let watchIntervalMove = (e) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        let watchKeypress = e => {
            altPressed = snapElement ? e['gj'] : !e['gj'];
            moveCallback();
        };
        State.on('gm', watchKeypress);
        State.on('gs', watchIntervalMove);
        me['_gL'](e, (evt) => {
            State.fire('gr', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('gm', watchKeypress);
            State.off('gs', watchIntervalMove);
            State.fire('gu');
            cursor_1["_gN"]();
            if (moved) {
                ctrl['_he'](props);
                this.digest({
                    element
                });
                State.fire('gf', {
                    '_hW': {
                        [element.id]: 1
                    },
                    '_hX': {
                        [element.type]: 1
                    },
                    '_ge': {
                        '_gj': 1
                    }
                });
                if (props[`${key}X`] != startX ||
                    props[`${key}Y`] != startY) {
                    history_1["gd"](history_1['gH'], props.ename);
                }
            }
            State.fire('gC', {
                hide: 1
            });
            if (supportSnapElement) {
                State.fire('gd');
            }
            tip_1['_gN']();
        });
    },
    '_p2<pointerover>'(e) {
        let titleNode = node(`_rd_t_${this.id}`);
        if (titleNode) {
            titleNode.innerHTML = e.eventTarget.getAttribute('title');
        }
    },
    '_p3<pointerout>'() {
        let titleNode = node(`_rd_t_${this.id}`);
        if (titleNode) {
            titleNode.innerHTML = '';
        }
    },
    '_k3<input>'(e) {
        let element = this.get('element');
        let { props } = element;
        props.text = e.eventTarget.value; //.trim();
        this['_iA'](element);
        State.fire('gf', {
            '_hW': {
                [element.id]: 1
            },
            '_hX': {
                [element.type]: 1
            },
            '_ge': {
                '_p4': 1
            }
        });
        history_1["gd"](history_1['gK'], props.ename, element.id, 500);
    },
    '_k4<pointerover>'(e) {
        this['_p2<pointerover>'](e);
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let element = this.get('element');
            let { props } = element;
            props['_kY'] = e.params.key;
            this['_iA'](element);
            State.fire('gf', {
                '_hW': {
                    [element.id]: 1
                },
                '_hX': {
                    [element.type]: 1
                },
                '_ge': {
                    '_kY': 1
                }
            });
        }
    },
    '_k5<pointerdown>'(e) {
        e['_g8'] = 1;
        let element = this.get('element');
        let { ctrl } = element;
        let { key } = e.params;
        ctrl['_k5'](element, e, key, this);
    },
    '_kg<pointerdown,contextmenu>'(e) {
        e['_g8'] = 1;
    }
};

});