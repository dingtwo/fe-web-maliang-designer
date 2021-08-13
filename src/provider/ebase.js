/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("provider/ebase",["magix5","../designer/const","../designer/enum","../designer/history","../designer/stage-align","../designer/stage-generic","../designer/transform","../gallery/mx-pointer/cursor","../gallery/mx-pointer/tip"],(require,exports,module)=>{

"use strict";
/**
 * svg操作对象
 */
Object.defineProperty(exports, "__esModule", { value: true });
let magix_1 = require("magix5");
let const_1 = require("../designer/const");
let enum_1 = require("../designer/enum");
let history_1 = require("../designer/history");
let stage_align_1 = require("../designer/stage-align");
let stage_generic_1 = require("../designer/stage-generic");
let transform_1 = require("../designer/transform");
let cursor_1 = require("../gallery/mx-pointer/cursor");
let tip_1 = require("../gallery/mx-pointer/tip");
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
        this['@:{check.status~rs}']();
    },
    async '@:{update~rs}'(element) {
        await this.digest({
            element
        });
    },
    /**
     * 获取以ctrl开头的所有控制点
     * @param props svg元素属性
     * @returns 控制点列表
     */
    '@:{get.key.point~rs}'(props) {
        if (!props['@:{cached.key.points~rs}']) {
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
            props['@:{cached.key.points~rs}'] = points;
        }
        return props['@:{cached.key.points~rs}'];
    },
    /**
     * 获取以mod开头的所有修改点
     * @param props svg元素属性
     * @returns 修改点列表
     */
    '@:{get.mod.point~rs}'(props) {
        if (!props['@:{cached.mod.points~rs}']) {
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
            props['@:{cached.mod.points~rs}'] = points;
        }
        return props['@:{cached.mod.points~rs}'];
    },
    '@:{start.rotate~rs}<pointerdown>'(e) {
        e['@:{halt~rs}'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        let { rotate, x, y, width, height } = props;
        width = const_1['@:{const#to.px~rs}'](width);
        height = const_1['@:{const#to.px~rs}'](height);
        x = const_1['@:{const#to.px~rs}'](x);
        y = const_1['@:{const#to.px~rs}'](y);
        State.fire('@:{event#stage.toggle.scroll~rs}', {
            show: 1,
            size: 1
        });
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let pos = transform_1["@:{transform#real.to.nearest.coord~rs}"](me.root, {
            x: e.pageX,
            y: e.pageY,
            f: 1
        });
        let sdeg = atan2(pos.y - c.y, pos.x - c.x) - rotate * PI / 180, moved;
        let eventTarget = e.eventTarget;
        me['@:{drag.drop~rs}'](e, (evt) => {
            if (!moved) {
                cursor_1["@:{show~rs}"](eventTarget);
            }
            moved = 1;
            pos = transform_1["@:{transform#real.to.nearest.coord~rs}"](me.root, {
                x: evt.pageX,
                y: evt.pageY,
                f: 1
            });
            let deg = atan2(pos.y - c.y, pos.x - c.x);
            deg = (deg - sdeg) * 180 / PI;
            props.rotate = (360 + (deg | 0)) % 360;
            if (ctrl['@:{update.props~rs}']) {
                ctrl['@:{update.props~rs}'](props);
            }
            this.digest({
                element
            });
            State.fire('@:{event#stage.select.element.props.change~rs}', {
                '@:{ids~rs}': {
                    [element.id]: 1
                },
                '@:{types~rs}': {
                    [element.type]: 1
                },
                '@:{props~rs}': {
                    '@:{rotate~rs}': 1
                }
            });
            tip_1['@:{show.text~rs}'](`${props.rotate}°`);
            tip_1['@:{update.position~rs}'](evt.pageX, evt.pageY);
        }, () => {
            if (moved) {
                cursor_1["@:{hide~rs}"]();
                if (rotate != props.rotate) {
                    history_1["@:{history#save~rs}"](history_1['@:{history#element.rotated~rs}'], props.ename);
                }
            }
            State.fire('@:{event#stage.toggle.scroll~rs}', {
                hide: 1
            });
            tip_1['@:{hide~rs}']();
        });
    },
    '@:{start.resize~rs}<pointerdown>'(e) {
        if (e.button || e['@:{halt~rs}'])
            return;
        e['@:{halt~rs}'] = 1;
        //https://github.com/a7650/h5-editor/blob/master/src/views/posterEditor/components/dragable/components/vue-draggable-resizable.vue
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('@:{event#stage.toggle.scroll~rs}', {
            show: 1,
            size: 1
        });
        let { rotate, width: beginWidth, height: beginHeight } = props;
        if (rotate == null) {
            props.rotate = rotate = 0;
        }
        let { params, pageX, pageY, shiftKey: isShiftKeyStillPressed, altKey, eventTarget } = e;
        let { key } = params;
        let rotatedRect = transform_1['@:{transform#rotate.rect~rs}'](props);
        let [handY, handX] = key;
        let useFixIndex = transform_1['@:{transform#handle.to.fixed.point~rs}'](key);
        let beginFixed = rotatedRect['@:{point~rs}'][useFixIndex];
        let scale = State.get('@:{global#stage.scale~rs}');
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
        let syncSize = ctrl['@:{modifier~rs}'] & enum_1['@:{enum#modifier.sync.size~rs}'];
        let supportSnapElement = const_1['@:{const#page.enable.snap.align.elements~rs}'], alignElements, page = State.get('@:{global#stage.page~rs}'), snapElement = page.snapElement, altPressed = snapElement ? altKey : !altKey, snapThreshold, maskLeft, maskTop;
        if (supportSnapElement) {
            let maskId = this.get('maskId');
            let { '@:{generic.all#elements~rs}': allElements } = stage_generic_1['@:{generic#get.all.elements.and.map~rs}']();
            let find = stage_align_1['@:{align#query.align.elements~rs}'](allElements, maskId, element);
            alignElements = find['@:{align.queried#align.elements.sizes~rs}'];
            snapThreshold = const_1['@:{const#drag.snap.to.other.element.offset~rs}'] * scale;
            if (maskId) {
                let maskBound = find['@:{align.queried#mask.bound~rs}'];
                let rootBound = find['@:{align.queried#root.bound~rs}'];
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
                cursor_1["@:{show~rs}"](eventTarget);
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
                let snapInfo = stage_align_1['@:{align#query.snap.info~rs}'](alignElements, beginFixed, key, rotate, newWidth, newHeight, snapThreshold, minWidth, maxWidth, minHeight, maxHeight, syncFlag, beginWidth, beginHeight, minRatio, maxRatio, altPressed, maskLeft, maskTop);
                if (snapInfo['@:{snapped~rs}']) {
                    newWidth = snapInfo['@:{snap.width~rs}'];
                    newHeight = snapInfo['@:{snap.height~rs}'];
                }
            }
            if (props.width != newWidth ||
                props.height != newHeight) {
                moved = (newWidth != beginWidth || newHeight != beginHeight) ? 2 : 1;
                props.width = newWidth;
                props.height = newHeight;
                let newRotatedRect = transform_1['@:{transform#rotate.rect~rs}'](props);
                let newFixed = newRotatedRect['@:{point~rs}'][useFixIndex];
                let x = beginFixed.x - newFixed.x;
                let y = beginFixed.y - newFixed.y;
                props.x += x;
                props.y += y;
                if (ctrl['@:{update.props~rs}']) {
                    ctrl['@:{update.props~rs}'](props);
                }
                await me.digest({
                    element
                });
                State.fire('@:{event#stage.select.element.props.change~rs}', {
                    '@:{ids~rs}': {
                        [element.id]: 1
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
            let tipWidth = transform_1['@:{transform#to.show.value~rs}'](newWidth), tipHeight = transform_1['@:{transform#to.show.value~rs}'](newHeight), tipMsg = `${tipWidth} x ${tipHeight}`;
            tip_1['@:{show.text~rs}'](tipMsg);
            tip_1['@:{update.position~rs}'](moveEvent.pageX, moveEvent.pageY);
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
            isShiftKeyStillPressed = e['@:{keypress#shift.key~rs}'];
            altPressed = snapElement ? e['@:{keypress#alt.key~rs}'] : !e['@:{keypress#alt.key~rs}'];
            moveCallback();
        };
        State.on('@:{event#stage.key.press~rs}', watchKeypress);
        //处理贴边滚动
        State.on('@:{event#stage.interval.move~rs}', watchIntervalMove);
        me['@:{drag.drop~rs}'](e, evt => {
            State.fire('@:{event#drag.element.move~rs}', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('@:{event#stage.key.press~rs}', watchKeypress);
            State.off('@:{event#stage.interval.move~rs}', watchIntervalMove);
            State.fire('@:{event#drag.element.stop~rs}');
            if (moved) {
                cursor_1["@:{hide~rs}"]();
            }
            if (moved == 2) {
                history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.size~rs}'], props.ename);
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
            State.fire('@:{event#stage.toggle.scroll~rs}', {
                hide: 1
            });
            if (supportSnapElement) {
                State.fire('@:{event#stage.find.snap.element~rs}');
            }
            tip_1['@:{hide~rs}']();
        });
    },
    '@:{drag.svg.key.point~rs}<pointerdown>'(e) {
        e['@:{halt~rs}'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('@:{event#stage.toggle.scroll~rs}', {
            show: 1,
            size: 1
        });
        let moved;
        let { altKey, params, eventTarget } = e;
        let { key } = params;
        let { x, y, width, height, rotate } = props;
        let startX = props[`${key}X`], startY = props[`${key}Y`];
        width = const_1['@:{const#to.px~rs}'](width);
        height = const_1['@:{const#to.px~rs}'](height);
        x = const_1['@:{const#to.px~rs}'](x);
        y = const_1['@:{const#to.px~rs}'](y);
        rotate = rotate || 0;
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let scale = State.get('@:{global#stage.scale~rs}');
        props['@:{focus.ctrl~rs}'] = key;
        this.digest({
            element
        });
        State.fire('@:{event#stage.select.element.props.change~rs}', {
            '@:{ids~rs}': {
                [element.id]: 1
            },
            '@:{types~rs}': {
                [element.type]: 1
            },
            '@:{props~rs}': {
                '@:{focus.kp~rs}': 1
            }
        });
        let supportSnapElement = const_1['@:{const#page.enable.snap.align.elements~rs}'], alignElements, page = State.get('@:{global#stage.page~rs}'), snapElement = page.snapElement, altPressed = snapElement ? altKey : !altKey, snapThreshold;
        if (supportSnapElement) {
            let { '@:{generic.all#elements~rs}': allElements } = stage_generic_1['@:{generic#get.all.elements.and.map~rs}']();
            let find = stage_align_1['@:{align#query.align.elements~rs}'](allElements, null, element);
            alignElements = find['@:{align.queried#align.elements.sizes~rs}'];
            snapThreshold = const_1['@:{const#drag.snap.to.other.element.offset~rs}'] * scale;
        }
        let moveEvent;
        let nearsideScrollOffset, stageBound = transform_1['@:{transform#get.stage.dom.rect~rs}']();
        let moveCallback = async () => {
            if (!moveEvent)
                return;
            if (!moved) {
                cursor_1["@:{show~rs}"](eventTarget);
            }
            let mpos = {
                x: moveEvent.pageX - stageBound.x,
                y: moveEvent.pageY - stageBound.y
            };
            if (nearsideScrollOffset) {
                mpos.y += nearsideScrollOffset['@:{interval.move.event#y~rs}'];
                mpos.x += nearsideScrollOffset['@:{interval.move.event#x~rs}'];
            }
            moved = 1;
            let current = transform_1["@:{transform#get.point.deg~rs}"](mpos, c);
            let { y: newY, x: newX } = transform_1["@:{transform#get.rotated.point~rs}"](mpos, c, current - rotate);
            if (supportSnapElement) {
                let snapInfo = stage_align_1['@:{align#query.svg.point.snap.info~rs}'](alignElements, newX, newY, snapThreshold, altPressed);
                if (snapInfo['@:{snapped~rs}']) {
                    newX = snapInfo['@:{snap.x~rs}'];
                    newY = snapInfo['@:{snap.y~rs}'];
                }
            }
            props[`${key}X`] = const_1['@:{const#to.unit~rs}'](newX);
            props[`${key}Y`] = const_1['@:{const#to.unit~rs}'](newY);
            await this.digest({
                element
            });
            State.fire('@:{event#stage.select.element.props.change~rs}', {
                '@:{ids~rs}': {
                    [element.id]: 1
                },
                '@:{types~rs}': {
                    [element.type]: 1
                },
                '@:{props~rs}': {
                    '@:{kp~rs}': 1
                }
            });
            if (nearsideScrollOffset &&
                !nearsideScrollOffset['@:{interval.move.event#called~rs}']) {
                nearsideScrollOffset['@:{interval.move.event#called~rs}'] = 1;
                nearsideScrollOffset['@:{interval.move.event#ready~rs}']();
            }
            let tipMsg = `${transform_1['@:{transform#to.show.value~rs}'](props[`${key}X`])} , ${transform_1['@:{transform#to.show.value~rs}'](props[`${key}Y`])}`;
            tip_1['@:{show.text~rs}'](tipMsg);
            tip_1['@:{update.position~rs}'](moveEvent.pageX, moveEvent.pageY);
        };
        let watchIntervalMove = (e) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        let watchKeypress = e => {
            altPressed = snapElement ? e['@:{keypress#alt.key~rs}'] : !e['@:{keypress#alt.key~rs}'];
            moveCallback();
        };
        State.on('@:{event#stage.key.press~rs}', watchKeypress);
        State.on('@:{event#stage.interval.move~rs}', watchIntervalMove);
        me['@:{drag.drop~rs}'](e, (evt) => {
            State.fire('@:{event#drag.element.move~rs}', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('@:{event#stage.key.press~rs}', watchKeypress);
            State.off('@:{event#stage.interval.move~rs}', watchIntervalMove);
            State.fire('@:{event#drag.element.stop~rs}');
            cursor_1["@:{hide~rs}"]();
            if (moved) {
                ctrl['@:{update.props~rs}'](props);
                this.digest({
                    element
                });
                State.fire('@:{event#stage.select.element.props.change~rs}', {
                    '@:{ids~rs}': {
                        [element.id]: 1
                    },
                    '@:{types~rs}': {
                        [element.type]: 1
                    },
                    '@:{props~rs}': {
                        '@:{kped~rs}': 1
                    }
                });
                if (props[`${key}X`] != startX ||
                    props[`${key}Y`] != startY) {
                    history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.ctrl.point~rs}'], props.ename);
                }
            }
            State.fire('@:{event#stage.toggle.scroll~rs}', {
                hide: 1
            });
            if (supportSnapElement) {
                State.fire('@:{event#stage.find.snap.element~rs}');
            }
            tip_1['@:{hide~rs}']();
        });
    },
    '@:{show.title~rs}<pointerover>'(e) {
        let titleNode = node(`_rd_t_${this.id}`);
        if (titleNode) {
            titleNode.innerHTML = e.eventTarget.getAttribute('title');
        }
    },
    '@:{hide.title~rs}<pointerout>'() {
        let titleNode = node(`_rd_t_${this.id}`);
        if (titleNode) {
            titleNode.innerHTML = '';
        }
    },
    '@:{update.text~rs}<input>'(e) {
        let element = this.get('element');
        let { props } = element;
        props.text = e.eventTarget.value; //.trim();
        this['@:{update~rs}'](element);
        State.fire('@:{event#stage.select.element.props.change~rs}', {
            '@:{ids~rs}': {
                [element.id]: 1
            },
            '@:{types~rs}': {
                [element.type]: 1
            },
            '@:{props~rs}': {
                '@:{content~rs}': 1
            }
        });
        history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.props~rs}'], props.ename, element.id, 500);
    },
    '@:{focus.mod.point~rs}<pointerover>'(e) {
        this['@:{show.title~rs}<pointerover>'](e);
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let element = this.get('element');
            let { props } = element;
            props['@:{focus.mod~rs}'] = e.params.key;
            this['@:{update~rs}'](element);
            State.fire('@:{event#stage.select.element.props.change~rs}', {
                '@:{ids~rs}': {
                    [element.id]: 1
                },
                '@:{types~rs}': {
                    [element.type]: 1
                },
                '@:{props~rs}': {
                    '@:{focus.mod~rs}': 1
                }
            });
        }
    },
    '@:{drag.mod.point~rs}<pointerdown>'(e) {
        e['@:{halt~rs}'] = 1;
        let element = this.get('element');
        let { ctrl } = element;
        let { key } = e.params;
        ctrl['@:{drag.mod.point~rs}'](element, e, key, this);
    },
    '@:{stop~rs}<pointerdown,contextmenu>'(e) {
        e['@:{halt~rs}'] = 1;
    }
};

});