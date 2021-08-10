/*
    author:https://github.com/xinglie
*/
'ref@:./index.less';
import Magix from 'magix';
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import DHistory from '../../designer/history';
import Props from '../../designer/props';
import StageGeneric from '../../designer/stage-generic';
import Transform from '../../designer/transform';
let { State, View, node, Vframe, config, mark } = Magix;
//import StageGeneric from '../../designer/stage-generic';
//let { max, min } = Math;
export default View.extend({
    tmpl: '@:element.html',
    init() {
        let update = this['@:{debounce}'](this.render, 30);
        State.on('@:{event#stage.select.element.props.change}', update);
        State.on('@:{event#history.shift.change}', update);
        State.on('@:{event#stage.select.elements.change}', update);
        this.on('destroy', () => {
            State.off('@:{event#stage.select.element.props.change}', update);
            State.off('@:{event#history.shift.change}', update);
            State.off('@:{event#stage.select.elements.change}', update);
        });
        this.set({
            he: config('helpElement'),
            propTypes: Props
        });
    },
    async render() {
        let selectElements = State.get('@:{global#stage.select.elements}');
        let single = selectElements.length == 1;
        if (single) {
            this.digest({
                e: selectElements[0]
            });
        }
    },
    async '@:{update.prop}<input,change>'(e) {
        //console.log(e);
        let { key, use, element, native, write, size, kp, operate, mod } = e.params;
        let changed = 0,
            changedProps,
            changedIds,
            changedTypes;
        let { ctrl, props, id, type } = element;
        let moveElements = [element];
        if (use || native) {
            let resetXY = size ||
                key == 'width' ||
                key == 'height' ||
                key == 'rx' ||
                key == 'ry',
                old, cachedOld;
            if (props.rotate) {
                let oldRotatedRect = Transform['@:{transform#rotate.rect}'](props);
                cachedOld = oldRotatedRect['@:{point}'][0];
            }
            if (resetXY) {
                old = cachedOld;
            }
            let updatePosition = key == 'x' || key == 'y';
            let oldWidth = props.width,
                oldHeight = props.height;
            let v = native ? e.eventTarget[native] : e[use];
            let updateMarker = mark(this, '@:{update.props}');
            changedProps = {};
            changedIds = { [id]: 1 };
            changedTypes = { [type]: 1 };
            if (use) {
                changedProps[use] = 1;
            }
            if (key) {
                changedProps[key] = 1;
            }
            if (write) {
                v = await write(v, props, e, changedProps);
            }
            if (updateMarker()) {
                if (oldWidth != props.width ||
                    oldHeight != props.height) {
                    old = cachedOld;
                }
                if (updatePosition) {
                    let positionOffset = v - props[key];
                    let linkage = State.get('@:{global#stage.elements.groups.linked}');
                    if (linkage) {
                        let groups = State.get('@:{global#stage.elements.groups}');
                        let sameGroups = groups[id];
                        if (sameGroups) {
                            let {
                                '@:{generic.all#map}': allMap
                            } = StageGeneric['@:{generic#get.all.elements.and.map}']();
                            for (let g of sameGroups) {
                                if (g != id) {
                                    let e = allMap[g];
                                    moveElements.push(e);
                                    if (e.props.pinX &&
                                        key == 'x') {
                                        positionOffset = 0;
                                    } else if (e.props.pinY &&
                                        key == 'y') {
                                        positionOffset = 0;
                                    }
                                }
                            }
                        }
                    }
                    if (positionOffset) {
                        for (let me of moveElements) {
                            let { ctrl, props, id, type } = me;
                            changedIds[id] = 1;
                            changedTypes[type] = 1;
                            let moveProps = ctrl['@:{move.props}'];
                            if (ctrl['@:{move.props.is.function}']) {
                                moveProps = ctrl['@:{move.props}'](props);
                            }
                            for (let m of moveProps) {
                                if (m.use == key) {
                                    props[m.key] += positionOffset;
                                }
                            }
                            if (ctrl['@:{update.props}']) {
                                ctrl['@:{update.props}'](props, old, 1);
                            }
                            changed = 1;
                        }
                    } else {
                        this.render();
                    }
                } else if (key) {
                    let r;
                    if ((key == 'width' ||
                        key == 'height') &&
                        (ctrl['@:{modifier}'] & Enum['@:{enum#modifier.sync.size}'])) {
                        r = props.height ? props.width / props.height : 0;
                    }
                    props[key] = v;

                    if (r) {
                        if (key == 'width') {
                            props.height = props.width / r;
                        } else {
                            props.width = props.height * r;
                        }
                    }

                    if (ctrl['@:{update.props}']) {
                        ctrl['@:{update.props}'](props, old, 1);
                    }
                    if (old) {
                        let newRotatedRect = Transform['@:{transform#rotate.rect}'](props);
                        let n = newRotatedRect['@:{point}'][0];
                        props.x += old.x - n.x;
                        props.y += old.y - n.y;
                    }
                    changed = 1;
                } else {
                    if (ctrl['@:{update.props}']) {
                        ctrl['@:{update.props}'](props, old, 1);
                    }
                    changed = 1;
                }
                // if (key == 'width' ||
                //     key == 'height') {
                //     let { '@:{stage.elements.map}': stageElementsMap } = StageGeneric["@:{generic#get.all.elements.and.map}"]();
                //     if (stageElementsMap[element.id]) {
                //         let area = StageGeneric["@:{query.area.by.xy.or.return.first}"](props);
                //         if (area) {
                //             if (key == 'width') {
                //                 props.width = min(props.width, (area.width + area.x) * scale - props.x);
                //             } else {
                //                 props.height = min(props.height, (area.height + area.y) * scale - props.y);
                //             }
                //         }
                //     }
                // }

                // if (key == 'x' ||
                //     key == 'y') {
                //     let { '@:{stage.elements.map}': stageElementsMap } = StageGeneric["@:{generic#get.all.elements.and.map}"]();
                //     let xOffset = 0,
                //         yOffset = 0;
                //     if (stageElementsMap[element.id]) {
                //         let area = StageGeneric["@:{query.area.by.xy.or.return.first}"](props);
                //         if (area) {
                //             let rect = Transform["@:{transform#rotate.rect}"](props, props.rotate || 0);
                //             //console.log(rect);
                //             let rightDistance = (area.x + area.width) * scale - rect.right;
                //             let leftDistance = rect.left - area.x * scale;
                //             let topDistance = rect.top - area.y * scale;
                //             let bottomDistance = (area.y + area.height) * scale - rect.bottom

                //             if (rightDistance < 0) {
                //                 xOffset = max(rightDistance, -leftDistance);
                //             } else if (leftDistance < 0) {
                //                 xOffset = -leftDistance;
                //             }
                //             if (bottomDistance < 0) {
                //                 yOffset = max(bottomDistance, -topDistance);
                //             } else if (topDistance < 0) {
                //                 yOffset = -topDistance;
                //             }
                //             let moveProps = ctrl['@:{move.props}'];
                //             if (ctrl['@:{move.props.is.function}']) {
                //                 moveProps = ctrl['@:{move.props}'](props);
                //             }
                //             for (let m of moveProps) {
                //                 if (m.use == 'x') {
                //                     props[m.key] += xOffset;
                //                 } else if (m.use == 'y') {
                //                     props[m.key] += yOffset;
                //                 }
                //             }
                //         }
                //     }
                // }

            }
        }
        if (changed) {
            State.fire('@:{event#stage.select.element.props.change}', {
                '@:{ids}': changedIds,
                '@:{types}': changedTypes,
                '@:{props}': changedProps
            });
            for (let me of moveElements) {
                let n = node(me.id);
                if (n) {
                    let vf = Vframe.byNode(n);
                    if (vf) {
                        vf.invoke('@:{update}', [me]);
                    }
                }
            }
            //非svg控制点的处理,才记录历史记录
            if (!e['@:{svg.control.point}']) {
                let type;
                if (key == 'x' ||
                    key == 'y') {
                    type = DHistory['@:{history#element.moved}'];
                } else if ((size && !operate) ||
                    key == 'width' ||
                    key == 'height' ||
                    key == 'rx' ||
                    key == 'ry' ||
                    key == 'r' ||
                    key == 'tfootSpacing') {
                    type = DHistory['@:{history#element.modified.size}'];
                } else if (key == 'rotate') {
                    type = DHistory['@:{history#element.rotated}'];
                } else if (kp) {
                    type = DHistory['@:{history#element.modified.ctrl.point}'];
                } else if (mod) {
                    type = DHistory['@:{history#element.modified.mod.point}'];
                } else if (key == 'locked') {
                    type = props.locked ? DHistory['@:{history#element.locked}'] : DHistory['@:{history#element.unlocked}'];
                } else {
                    type = DHistory['@:{history#element.modified.props}'];
                }
                let ename = StageGeneric['@:{generic#query.element.name}']([element]);
                DHistory["@:{history#save}"](type, ename, element.id + '@:{history#element.props.change}' + key, 500);
            }
        }
    },
    '@:{update.image.size}<click>'(e: Magix5.MagixMouseEvent) {
        let m = mark(this, '@:{update.img.size}');
        let { key, element } = e.params;
        let { props, ctrl } = element;
        let oldRotatedRect = Transform['@:{transform#rotate.rect}'](props);
        let old = oldRotatedRect['@:{point}'][0];
        let img = new Image();
        let setSize = () => {
            let newWidth = Const['@:{const#to.unit}'](img.width),
                newHeight = Const['@:{const#to.unit}'](img.height);
            if (m() &&
                (newWidth != props.width ||
                    newHeight != props.height)) {
                props.width = newWidth;
                props.height = newHeight;
                let newRotatedRect = Transform['@:{transform#rotate.rect}'](props);
                let n = newRotatedRect['@:{point}'][0];
                props.x += old.x - n.x;
                props.y += old.y - n.y;
                if (ctrl['@:{update.props}']) {
                    ctrl['@:{update.props}'](props);
                }
                this.render();
                State.fire('@:{event#stage.select.element.props.change}', {
                    '@:{ids}': {
                        [element.id]: 1
                    },
                    '@:{types}': {
                        [element.type]: 1
                    },
                    '@:{props}': {
                        '@:{position}': 1
                    }
                });
                let n1 = node(element.id);
                let vf = Vframe.byNode(n1);
                if (vf) {
                    vf.invoke('@:{update}', [element]);
                }
                DHistory["@:{history#save}"](DHistory['@:{history#element.modified.size}'], props.ename, element.id + '@:{history#element.props.change}' + key, 500);
            }
        };
        img.onload = setSize;
        img.src = props[key];
        if (img.complete) {
            setSize();
        }
    }
});