/**
 * svg操作对象
 */

import Magix from 'magix';
import Const from '../designer/const';
import Enum from '../designer/enum';
import DHistory from '../designer/history';
import StageAlign from '../designer/stage-align';
import StageGeneric from '../designer/stage-generic';
import Transform from '../designer/transform';
import Cursor from '../gallery/mx-pointer/cursor';
import PointerTip from '../gallery/mx-pointer/tip';
let { atan2, PI, sin, cos, max, min } = Math;
let { node, State, has, inside, } = Magix;
let { MAX_VALUE } = Number;
export default {
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
        this['@:{check.status}']();
    },
    async '@:{update}'(element) {
        await this.digest({
            element
        });
    },
    /**
     * 获取以ctrl开头的所有控制点
     * @param props svg元素属性
     * @returns 控制点列表
     */
    '@:{get.key.point}'(props: Report.StageElementProps) {
        if (!props['@:{cached.key.points}']) {
            let points = [],
                index = 1;
            while (true) {
                let key = 'ctrl' + index++;
                if (has(props, key + 'X')) {
                    points.push(key);
                } else {
                    break;
                }
            }
            props['@:{cached.key.points}'] = points;
        }
        return props['@:{cached.key.points}'];
    },
    /**
     * 获取以mod开头的所有修改点
     * @param props svg元素属性
     * @returns 修改点列表
     */
    '@:{get.mod.point}'(props: Report.StageElementProps) {
        if (!props['@:{cached.mod.points}']) {
            let points = [],
                index = 1;
            while (true) {
                let key = 'mod' + index++;
                if (has(props, key + 'X') ||
                    has(props, key + 'Y')) {
                    points.push(key);
                } else {
                    break;
                }
            }
            props['@:{cached.mod.points}'] = points;
        }
        return props['@:{cached.mod.points}'];
    },

    '@:{start.rotate}<pointerdown>'(e: Magix5.MagixMouseEvent) {
        e['@:{halt}'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        let { rotate, x, y, width, height } = props;
        width = Const['@:{const#to.px}'](width);
        height = Const['@:{const#to.px}'](height);
        x = Const['@:{const#to.px}'](x);
        y = Const['@:{const#to.px}'](y);
        State.fire('@:{event#stage.toggle.scroll}', {
            show: 1,
            size: 1
        });
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let pos = Transform["@:{transform#real.to.nearest.coord}"](me.root, {
            x: e.pageX,
            y: e.pageY,
            f: 1
        });
        let sdeg = atan2(pos.y - c.y, pos.x - c.x) - rotate * PI / 180,
            moved;
        let eventTarget = e.eventTarget;
        me['@:{drag.drop}'](e, (evt) => {
            if (!moved) {
                Cursor["@:{show}"](eventTarget);
            }
            moved = 1;
            pos = Transform["@:{transform#real.to.nearest.coord}"](me.root, {
                x: evt.pageX,
                y: evt.pageY,
                f: 1
            });
            let deg = atan2(pos.y - c.y, pos.x - c.x);
            deg = (deg - sdeg) * 180 / PI;
            props.rotate = (360 + (deg | 0)) % 360;
            if (ctrl['@:{update.props}']) {
                ctrl['@:{update.props}'](props);
            }
            this.digest({
                element
            });
            State.fire('@:{event#stage.select.element.props.change}', {
                '@:{ids}': {
                    [element.id]: 1
                },
                '@:{types}': {
                    [element.type]: 1
                },
                '@:{props}': {
                    '@:{rotate}': 1
                }
            });
            PointerTip['@:{show.text}'](`${props.rotate}°`);
            PointerTip['@:{update.position}'](evt.pageX, evt.pageY);
        }, () => {
            if (moved) {
                Cursor["@:{hide}"]();
                if (rotate != props.rotate) {
                    DHistory["@:{history#save}"](DHistory['@:{history#element.rotated}'], props.ename);
                }
            }
            State.fire('@:{event#stage.toggle.scroll}', {
                hide: 1
            });
            PointerTip['@:{hide}']();
        });
    },


    '@:{start.resize}<pointerdown>'(e: Magix5.MagixMouseEvent) {
        if (e.button || e['@:{halt}']) return;
        e['@:{halt}'] = 1;
        //https://github.com/a7650/h5-editor/blob/master/src/views/posterEditor/components/dragable/components/vue-draggable-resizable.vue
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('@:{event#stage.toggle.scroll}', {
            show: 1,
            size: 1
        });
        let { rotate,
            width: beginWidth,
            height: beginHeight
        } = props;
        if (rotate == null) {
            props.rotate = rotate = 0;
        }
        let { params, pageX, pageY,
            shiftKey: isShiftKeyStillPressed,
            altKey,
            eventTarget } = e;
        let { key } = params;
        let rotatedRect = Transform['@:{transform#rotate.rect}'](props);
        let [handY, handX] = key;
        let useFixIndex = Transform['@:{transform#handle.to.fixed.point}'](key);
        let beginFixed = rotatedRect['@:{point}'][useFixIndex];
        let scale = State.get('@:{global#stage.scale}');
        let minWidth = 0, minHeight = 0,
            maxWidth = MAX_VALUE, maxHeight = MAX_VALUE,
            findWidth, findHeight;
        for (let p of ctrl.props) {
            if (p.key == 'width') {
                findWidth = 1;
                if (has(p, 'min')) {
                    minWidth = p.min(props) * scale;
                }
                if (has(p, 'max')) {
                    maxWidth = p.max(props) * scale;
                }
            } else if (p.key == 'height') {
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
        let syncSize = ctrl['@:{modifier}'] & Enum['@:{enum#modifier.sync.size}'];
        let supportSnapElement = Const['@:{const#page.enable.snap.align.elements}'],
            alignElements,
            page = State.get('@:{global#stage.page}'),
            snapElement = page.snapElement,
            altPressed = snapElement ? altKey : !altKey,
            snapThreshold,
            maskLeft,
            maskTop;
        if (supportSnapElement) {
            let maskId = this.get('maskId');
            let {
                '@:{generic.all#elements}': allElements
            } = StageGeneric['@:{generic#get.all.elements.and.map}']();
            let find = StageAlign['@:{align#query.align.elements}'](allElements, maskId, element);
            alignElements = find['@:{align.queried#align.elements.sizes}'];
            snapThreshold = Const['@:{const#drag.snap.to.other.element.offset}'] * scale;
            if (maskId) {
                let maskBound = find['@:{align.queried#mask.bound}'];
                let rootBound = find['@:{align.queried#root.bound}'];
                maskLeft = maskBound.x - rootBound.x;
                maskTop = maskBound.y - rootBound.y;
            }
        }
        let nearsideScrollOffset;
        let moveCallback = async () => {
            //console.log(supportSnapElement, altPressed);
            if (!moveEvent) return;
            if (!moved) {
                Cursor["@:{show}"](eventTarget);
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

            if (newWidth < minWidth) {
                newWidth = minWidth;
            } else if (newWidth > maxWidth) {
                newWidth = maxWidth;
            }
            if (newHeight < minHeight) {
                newHeight = minHeight;
            } else if (newHeight > maxHeight) {
                newHeight = maxHeight;
            }
            let syncFlag = 0;
            //按下shift键或元素本身就需要使用相同的宽高
            if (isShiftKeyStillPressed ||
                syncSize) {
                let r;
                if (handX == 'm') {
                    syncFlag = 1;
                } else if (handY == 'm') {
                    syncFlag = 2;
                } else if (beginWidth >= beginHeight) {
                    syncFlag = 2;
                } else {
                    syncFlag = 1;
                }
                if (syncFlag == 1) {
                    if (beginHeight) {
                        r = newHeight / beginHeight;
                    } else {
                        r = 1;
                        syncFlag = 0;
                    }
                } else {
                    if (beginWidth) {
                        r = newWidth / beginWidth;
                    } else {
                        r = 1;
                        syncFlag = 0;
                    }
                }
                if (r < minRatio) {
                    r = minRatio;
                } else if (r > maxRatio) {
                    r = maxRatio;
                }
                newWidth = beginWidth * r;
                newHeight = beginHeight * r;
            }

            if (supportSnapElement) {
                let snapInfo = StageAlign['@:{align#query.snap.info}'](alignElements, beginFixed, key, rotate, newWidth, newHeight, snapThreshold, minWidth, maxWidth, minHeight, maxHeight, syncFlag, beginWidth, beginHeight, minRatio, maxRatio, altPressed, maskLeft, maskTop);

                if (snapInfo['@:{snapped}']) {
                    newWidth = snapInfo['@:{snap.width}'];
                    newHeight = snapInfo['@:{snap.height}'];
                }
            }
            if (props.width != newWidth ||
                props.height != newHeight) {
                moved = (newWidth != beginWidth || newHeight != beginHeight) ? 2 : 1;
                props.width = newWidth;
                props.height = newHeight;
                let newRotatedRect = Transform['@:{transform#rotate.rect}'](props);
                let newFixed = newRotatedRect['@:{point}'][useFixIndex];

                let x = beginFixed.x - newFixed.x;
                let y = beginFixed.y - newFixed.y;
                props.x += x;
                props.y += y;

                if (ctrl['@:{update.props}']) {
                    ctrl['@:{update.props}'](props);
                }
                await me.digest({
                    element
                });
                State.fire('@:{event#stage.select.element.props.change}', {
                    '@:{ids}': {
                        [element.id]: 1
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
                tipMsg = `${tipWidth} x ${tipHeight}`;
            PointerTip['@:{show.text}'](tipMsg);
            PointerTip['@:{update.position}'](moveEvent.pageX, moveEvent.pageY);
        };
        /**
         * 监听设计器贴边滚动事件
         * @param e 内部滚动事件对象
         */
        let watchIntervalMove = (e: Report.EventOfIntervallMove) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        let watchKeypress = e => {
            isShiftKeyStillPressed = e['@:{keypress#shift.key}'];
            altPressed = snapElement ? e['@:{keypress#alt.key}'] : !e['@:{keypress#alt.key}'];
            moveCallback();
        };
        State.on('@:{event#stage.key.press}', watchKeypress);
        //处理贴边滚动
        State.on('@:{event#stage.interval.move}', watchIntervalMove);
        me['@:{drag.drop}'](e, evt => {
            State.fire('@:{event#drag.element.move}', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('@:{event#stage.key.press}', watchKeypress);
            State.off('@:{event#stage.interval.move}', watchIntervalMove);
            State.fire('@:{event#drag.element.stop}');
            if (moved) {
                Cursor["@:{hide}"]();
            }
            if (moved == 2) {
                DHistory["@:{history#save}"](DHistory['@:{history#element.modified.size}'], props.ename);
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
            State.fire('@:{event#stage.toggle.scroll}', {
                hide: 1
            });
            if (supportSnapElement) {
                State.fire('@:{event#stage.find.snap.element}');
            }

            PointerTip['@:{hide}']();
        });
    },
    '@:{drag.svg.key.point}<pointerdown>'(e: Magix5.MagixMouseEvent) {
        e['@:{halt}'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('@:{event#stage.toggle.scroll}', {
            show: 1,
            size: 1
        });
        let moved;
        let { altKey, params, eventTarget } = e;
        let { key } = params;
        let { x, y, width, height, rotate } = props;
        let startX = props[`${key}X`],
            startY = props[`${key}Y`];
        width = Const['@:{const#to.px}'](width);
        height = Const['@:{const#to.px}'](height);
        x = Const['@:{const#to.px}'](x);
        y = Const['@:{const#to.px}'](y);

        rotate = rotate || 0;
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let scale = State.get('@:{global#stage.scale}');
        props['@:{focus.ctrl}'] = key;
        this.digest({
            element
        });
        State.fire('@:{event#stage.select.element.props.change}', {
            '@:{ids}': {
                [element.id]: 1
            },
            '@:{types}': {
                [element.type]: 1
            },
            '@:{props}': {
                '@:{focus.kp}': 1
            }
        });
        let supportSnapElement = Const['@:{const#page.enable.snap.align.elements}'],
            alignElements,
            page = State.get('@:{global#stage.page}'),
            snapElement = page.snapElement,
            altPressed = snapElement ? altKey : !altKey,
            snapThreshold;
        if (supportSnapElement) {
            let {
                '@:{generic.all#elements}': allElements
            } = StageGeneric['@:{generic#get.all.elements.and.map}']();
            let find = StageAlign['@:{align#query.align.elements}'](allElements, null, element);
            alignElements = find['@:{align.queried#align.elements.sizes}'];
            snapThreshold = Const['@:{const#drag.snap.to.other.element.offset}'] * scale;
        }
        let moveEvent;
        let nearsideScrollOffset,
            stageBound = Transform['@:{transform#get.stage.dom.rect}']();
        let moveCallback = async () => {
            if (!moveEvent) return;
            if (!moved) {
                Cursor["@:{show}"](eventTarget);
            }
            let mpos = {
                x: moveEvent.pageX - stageBound.x,
                y: moveEvent.pageY - stageBound.y
            };
            if (nearsideScrollOffset) {
                mpos.y += nearsideScrollOffset['@:{interval.move.event#y}'];
                mpos.x += nearsideScrollOffset['@:{interval.move.event#x}'];
            }
            moved = 1;
            let current = Transform["@:{transform#get.point.deg}"](mpos, c);
            let {
                y: newY,
                x: newX
            } = Transform["@:{transform#get.rotated.point}"](mpos, c, current - rotate);
            if (supportSnapElement) {
                let snapInfo = StageAlign['@:{align#query.svg.point.snap.info}'](alignElements, newX, newY, snapThreshold, altPressed);
                if (snapInfo['@:{snapped}']) {
                    newX = snapInfo['@:{snap.x}'];
                    newY = snapInfo['@:{snap.y}'];
                }
            }
            props[`${key}X`] = Const['@:{const#to.unit}'](newX);
            props[`${key}Y`] = Const['@:{const#to.unit}'](newY);

            await this.digest({
                element
            });
            State.fire('@:{event#stage.select.element.props.change}', {
                '@:{ids}': {
                    [element.id]: 1
                },
                '@:{types}': {
                    [element.type]: 1
                },
                '@:{props}': {
                    '@:{kp}': 1
                }
            });
            if (nearsideScrollOffset &&
                !nearsideScrollOffset['@:{interval.move.event#called}']) {
                nearsideScrollOffset['@:{interval.move.event#called}'] = 1;
                nearsideScrollOffset['@:{interval.move.event#ready}']();
            }
            let tipMsg = `${Transform['@:{transform#to.show.value}']( props[`${key}X`])} , ${Transform['@:{transform#to.show.value}'](props[`${key}Y`])}`;
            PointerTip['@:{show.text}'](tipMsg);
            PointerTip['@:{update.position}'](moveEvent.pageX, moveEvent.pageY);
        };
        let watchIntervalMove = (e: Report.EventOfIntervallMove) => {
            nearsideScrollOffset = e;
            moveCallback();
        };
        let watchKeypress = e => {
            altPressed = snapElement ? e['@:{keypress#alt.key}'] : !e['@:{keypress#alt.key}'];
            moveCallback();
        };
        State.on('@:{event#stage.key.press}', watchKeypress);
        State.on('@:{event#stage.interval.move}', watchIntervalMove);
        me['@:{drag.drop}'](e, (evt) => {
            State.fire('@:{event#drag.element.move}', evt);
            moveEvent = evt;
            moveCallback();
        }, () => {
            State.off('@:{event#stage.key.press}', watchKeypress);
            State.off('@:{event#stage.interval.move}', watchIntervalMove);
            State.fire('@:{event#drag.element.stop}');
            Cursor["@:{hide}"]();
            if (moved) {
                ctrl['@:{update.props}'](props);
                this.digest({
                    element
                });
                State.fire('@:{event#stage.select.element.props.change}', {
                    '@:{ids}': {
                        [element.id]: 1
                    },
                    '@:{types}': {
                        [element.type]: 1
                    },
                    '@:{props}': {
                        '@:{kped}': 1
                    }
                });
                if (props[`${key}X`] != startX ||
                    props[`${key}Y`] != startY) {
                    DHistory["@:{history#save}"](DHistory['@:{history#element.modified.ctrl.point}'], props.ename);
                }
            }
            State.fire('@:{event#stage.toggle.scroll}', {
                hide: 1
            });
            if (supportSnapElement) {
                State.fire('@:{event#stage.find.snap.element}');
            }
            PointerTip['@:{hide}']();
        });
    },
    '@:{show.title}<pointerover>'(e: Magix5.MagixMouseEvent) {
        let titleNode = node(`_rd_t_${this.id}`);
        if (titleNode) {
            titleNode.innerHTML = e.eventTarget.getAttribute('title');
        }
    },
    '@:{hide.title}<pointerout>'() {
        let titleNode = node(`_rd_t_${this.id}`);
        if (titleNode) {
            titleNode.innerHTML = '';
        }
    },
    '@:{update.text}<input>'(e) {
        let element = this.get('element');
        let { props } = element;
        props.text = e.eventTarget.value;//.trim();
        this['@:{update}'](element);
        State.fire('@:{event#stage.select.element.props.change}', {
            '@:{ids}': {
                [element.id]: 1
            },
            '@:{types}': {
                [element.type]: 1
            },
            '@:{props}': {
                '@:{content}': 1
            }
        });
        DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], props.ename, element.id, 500);
    },
    '@:{focus.mod.point}<pointerover>'(e: Magix5.MagixMouseEvent) {
        this['@:{show.title}<pointerover>'](e);
        if (!inside(e.relatedTarget as HTMLElement, e.eventTarget)) {
            let element = this.get('element');
            let { props } = element;
            props['@:{focus.mod}'] = e.params.key;
            this['@:{update}'](element);
            State.fire('@:{event#stage.select.element.props.change}', {
                '@:{ids}': {
                    [element.id]: 1
                },
                '@:{types}': {
                    [element.type]: 1
                },
                '@:{props}': {
                    '@:{focus.mod}': 1
                }
            });
        }
    },
    '@:{drag.mod.point}<pointerdown>'(e) {
        e['@:{halt}'] = 1;
        let element = this.get('element');
        let { ctrl } = element;
        let { key } = e.params;
        ctrl['@:{drag.mod.point}'](element, e, key, this);
    },
    '@:{stop}<pointerdown,contextmenu>'(e) {
        e['@:{halt}'] = 1;
    }
};