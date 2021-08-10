/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/ebase",["4e","../4d/4g","../4d/enum","../4d/4q","../4d/55","../4d/57","../4d/4h","../4l/4n/cursor","../4l/4n/tip"],(require,exports,module)=>{

"use strict";
/**
 * svg操作对象
 */
Object.defineProperty(exports, "__esModule", { value: true });
let magix_1 = require("4e");
let const_1 = require("../4d/4g");
let enum_1 = require("../4d/enum");
let history_1 = require("../4d/4q");
let stage_align_1 = require("../4d/55");
let stage_generic_1 = require("../4d/57");
let transform_1 = require("../4d/4h");
let cursor_1 = require("../4l/4n/cursor");
let tip_1 = require("../4l/4n/tip");
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
        this['_im']();
    },
    async '_fY'(element) {
        await this.digest({
            element
        });
    },
    /**
     * 获取以ctrl开头的所有控制点
     * @param props svg元素属性
     * @returns 控制点列表
     */
    '_kX'(props) {
        if (!props['_kZ']) {
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
            props['_kZ'] = points;
        }
        return props['_kZ'];
    },
    /**
     * 获取以mod开头的所有修改点
     * @param props svg元素属性
     * @returns 修改点列表
     */
    '_k6'(props) {
        if (!props['_nk']) {
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
            props['_nk'] = points;
        }
        return props['_nk'];
    },
    '_ip<pointerdown>'(e) {
        e['_ey'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        let { rotate, x, y, width, height } = props;
        width = const_1['eo'](width);
        height = const_1['eo'](height);
        x = const_1['eo'](x);
        y = const_1['eo'](y);
        State.fire('d3', {
            show: 1,
            size: 1
        });
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let pos = transform_1["dL"](me.root, {
            x: e.pageX,
            y: e.pageY,
            f: 1
        });
        let sdeg = atan2(pos.y - c.y, pos.x - c.x) - rotate * PI / 180, moved;
        let eventTarget = e.eventTarget;
        me['_eb'](e, (evt) => {
            if (!moved) {
                cursor_1["_ec"](eventTarget);
            }
            moved = 1;
            pos = transform_1["dL"](me.root, {
                x: evt.pageX,
                y: evt.pageY,
                f: 1
            });
            let deg = atan2(pos.y - c.y, pos.x - c.x);
            deg = (deg - sdeg) * 180 / PI;
            props.rotate = (360 + (deg | 0)) % 360;
            if (ctrl['_eF']) {
                ctrl['_eF'](props);
            }
            this.digest({
                element
            });
            State.fire('dG', {
                '_fm': {
                    [element.id]: 1
                },
                '_fn': {
                    [element.type]: 1
                },
                '_dF': {
                    '_dI': 1
                }
            });
            tip_1['_gl'](`${props.rotate}°`);
            tip_1['_go'](evt.pageX, evt.pageY);
        }, () => {
            if (moved) {
                cursor_1["_ed"]();
                if (rotate != props.rotate) {
                    history_1["dE"](history_1['d7'], props.ename);
                }
            }
            State.fire('d3', {
                hide: 1
            });
            tip_1['_ed']();
        });
    },
    '_hQ<pointerdown>'(e) {
        if (e.button || e['_ey'])
            return;
        e['_ey'] = 1;
        //https://github.com/a7650/h5-editor/blob/master/src/views/posterEditor/components/dragable/components/vue-draggable-resizable.vue
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('d3', {
            show: 1,
            size: 1
        });
        let { rotate, width: beginWidth, height: beginHeight } = props;
        if (rotate == null) {
            props.rotate = rotate = 0;
        }
        let { params, pageX, pageY, shiftKey: isShiftKeyStillPressed, altKey, eventTarget } = e;
        let { key } = params;
        let rotatedRect = transform_1['dF'](props);
        let [handY, handX] = key;
        let useFixIndex = transform_1['dO'](key);
        let beginFixed = rotatedRect['_fE'][useFixIndex];
        let scale = State.get('dF');
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
        let syncSize = ctrl['_gi'] & enum_1['dW'];
        let supportSnapElement = const_1['d0'], alignElements, page = State.get('dN'), snapElement = page.snapElement, altPressed = snapElement ? altKey : !altKey, snapThreshold, maskLeft, maskTop;
        if (supportSnapElement) {
            let maskId = this.get('maskId');
            let { 'dE': allElements } = stage_generic_1['dE']();
            let find = stage_align_1['dE'](allElements, maskId, element);
            alignElements = find['dE'];
            snapThreshold = const_1['e_'] * scale;
            if (maskId) {
                let maskBound = find['dS'];
                let rootBound = find['dF'];
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
                cursor_1["_ec"](eventTarget);
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
                let snapInfo = stage_align_1['dL'](alignElements, beginFixed, key, rotate, newWidth, newHeight, snapThreshold, minWidth, maxWidth, minHeight, maxHeight, syncFlag, beginWidth, beginHeight, minRatio, maxRatio, altPressed, maskLeft, maskTop);
                if (snapInfo['_fM']) {
                    newWidth = snapInfo['_fN'];
                    newHeight = snapInfo['_fO'];
                }
            }
            if (props.width != newWidth ||
                props.height != newHeight) {
                moved = (newWidth != beginWidth || newHeight != beginHeight) ? 2 : 1;
                props.width = newWidth;
                props.height = newHeight;
                let newRotatedRect = transform_1['dF'](props);
                let newFixed = newRotatedRect['_fE'][useFixIndex];
                let x = beginFixed.x - newFixed.x;
                let y = beginFixed.y - newFixed.y;
                props.x += x;
                props.y += y;
                if (ctrl['_eF']) {
                    ctrl['_eF'](props);
                }
                await me.digest({
                    element
                });
                State.fire('dG', {
                    '_fm': {
                        [element.id]: 1
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
            let tipWidth = transform_1['dH'](newWidth), tipHeight = transform_1['dH'](newHeight), tipMsg = `${tipWidth} x ${tipHeight}`;
            tip_1['_gl'](tipMsg);
            tip_1['_go'](moveEvent.pageX, moveEvent.pageY);
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
            isShiftKeyStillPressed = e['dI'];
            altPressed = snapElement ? e['dK'] : !e['dK'];
            moveCallback();
        };
        State.on('dN', watchKeypress);
        //处理贴边滚动
        State.on('dT', watchIntervalMove);
        me['_eb'](e, evt => {
            State.fire('dS', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('dN', watchKeypress);
            State.off('dT', watchIntervalMove);
            State.fire('dV');
            if (moved) {
                cursor_1["_ed"]();
            }
            if (moved == 2) {
                history_1["dE"](history_1['e_'], props.ename);
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
            State.fire('d3', {
                hide: 1
            });
            if (supportSnapElement) {
                State.fire('dE');
            }
            tip_1['_ed']();
        });
    },
    '_nn<pointerdown>'(e) {
        e['_ey'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('d3', {
            show: 1,
            size: 1
        });
        let moved;
        let { altKey, params, eventTarget } = e;
        let { key } = params;
        let { x, y, width, height, rotate } = props;
        let startX = props[`${key}X`], startY = props[`${key}Y`];
        width = const_1['eo'](width);
        height = const_1['eo'](height);
        x = const_1['eo'](x);
        y = const_1['eo'](y);
        rotate = rotate || 0;
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let scale = State.get('dF');
        props['_k3'] = key;
        this.digest({
            element
        });
        State.fire('dG', {
            '_fm': {
                [element.id]: 1
            },
            '_fn': {
                [element.type]: 1
            },
            '_dF': {
                '_nl': 1
            }
        });
        let supportSnapElement = const_1['d0'], alignElements, page = State.get('dN'), snapElement = page.snapElement, altPressed = snapElement ? altKey : !altKey, snapThreshold;
        if (supportSnapElement) {
            let { 'dE': allElements } = stage_generic_1['dE']();
            let find = stage_align_1['dE'](allElements, null, element);
            alignElements = find['dE'];
            snapThreshold = const_1['e_'] * scale;
        }
        let moveEvent;
        let nearsideScrollOffset, stageBound = transform_1['dE']();
        let moveCallback = async () => {
            if (!moveEvent)
                return;
            if (!moved) {
                cursor_1["_ec"](eventTarget);
            }
            let mpos = {
                x: moveEvent.pageX - stageBound.x,
                y: moveEvent.pageY - stageBound.y
            };
            if (nearsideScrollOffset) {
                mpos.y += nearsideScrollOffset['dE'];
                mpos.x += nearsideScrollOffset['dF'];
            }
            moved = 1;
            let current = transform_1["dN"](mpos, c);
            let { y: newY, x: newX } = transform_1["dP"](mpos, c, current - rotate);
            if (supportSnapElement) {
                let snapInfo = stage_align_1['dN'](alignElements, newX, newY, snapThreshold, altPressed);
                if (snapInfo['_fM']) {
                    newX = snapInfo['_fP'];
                    newY = snapInfo['_fQ'];
                }
            }
            props[`${key}X`] = const_1['dF'](newX);
            props[`${key}Y`] = const_1['dF'](newY);
            await this.digest({
                element
            });
            State.fire('dG', {
                '_fm': {
                    [element.id]: 1
                },
                '_fn': {
                    [element.type]: 1
                },
                '_dF': {
                    '_nm': 1
                }
            });
            if (nearsideScrollOffset &&
                !nearsideScrollOffset['dG']) {
                nearsideScrollOffset['dG'] = 1;
                nearsideScrollOffset['dH']();
            }
            let tipMsg = `${transform_1['dH'](props[`${key}X`])} , ${transform_1['dH'](props[`${key}Y`])}`;
            tip_1['_gl'](tipMsg);
            tip_1['_go'](moveEvent.pageX, moveEvent.pageY);
        };
        let watchIntervalMove = (e) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        let watchKeypress = e => {
            altPressed = snapElement ? e['dK'] : !e['dK'];
            moveCallback();
        };
        State.on('dN', watchKeypress);
        State.on('dT', watchIntervalMove);
        me['_eb'](e, (evt) => {
            State.fire('dS', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('dN', watchKeypress);
            State.off('dT', watchIntervalMove);
            State.fire('dV');
            cursor_1["_ed"]();
            if (moved) {
                ctrl['_eF'](props);
                this.digest({
                    element
                });
                State.fire('dG', {
                    '_fm': {
                        [element.id]: 1
                    },
                    '_fn': {
                        [element.type]: 1
                    },
                    '_dF': {
                        '_dK': 1
                    }
                });
                if (props[`${key}X`] != startX ||
                    props[`${key}Y`] != startY) {
                    history_1["dE"](history_1['d8'], props.ename);
                }
            }
            State.fire('d3', {
                hide: 1
            });
            if (supportSnapElement) {
                State.fire('dE');
            }
            tip_1['_ed']();
        });
    },
    '_no<pointerover>'(e) {
        let titleNode = node(`_rd_t_${this.id}`);
        if (titleNode) {
            titleNode.innerHTML = e.eventTarget.getAttribute('title');
        }
    },
    '_np<pointerout>'() {
        let titleNode = node(`_rd_t_${this.id}`);
        if (titleNode) {
            titleNode.innerHTML = '';
        }
    },
    '_iq<input>'(e) {
        let element = this.get('element');
        let { props } = element;
        props.text = e.eventTarget.value; //.trim();
        this['_fY'](element);
        State.fire('dG', {
            '_fm': {
                [element.id]: 1
            },
            '_fn': {
                [element.type]: 1
            },
            '_dF': {
                '_nq': 1
            }
        });
        history_1["dE"](history_1['ea'], props.ename, element.id, 500);
    },
    '_ir<pointerover>'(e) {
        this['_no<pointerover>'](e);
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let element = this.get('element');
            let { props } = element;
            props['_il'] = e.params.key;
            this['_fY'](element);
            State.fire('dG', {
                '_fm': {
                    [element.id]: 1
                },
                '_fn': {
                    [element.type]: 1
                },
                '_dF': {
                    '_il': 1
                }
            });
        }
    },
    '_is<pointerdown>'(e) {
        e['_ey'] = 1;
        let element = this.get('element');
        let { ctrl } = element;
        let { key } = e.params;
        ctrl['_is'](element, e, key, this);
    },
    '_hE<pointerdown,contextmenu>'(e) {
        e['_ey'] = 1;
    }
};

});