/*
    author:https://github.com/xinglie
*/
'ref@:./index.less';
import Magix from 'magix';
import Dragdrop from '../gallery/mx-dragdrop/index';
import Cursor from '../gallery/mx-pointer/cursor';
import DHistory from '../designer/history';
import Transform from '../designer/transform';
import Const from '../designer/const';
let { State, has: Has, Vframe, node, View } = Magix;
let { PI, atan2, sin, cos } = Math;
let { MAX_VALUE } = Number;
export default View.extend({
    tmpl: '@:hollow.html',
    '@:{check.status}'() {
        let map = State.get('@:{global#stage.select.elements.map}');
        let elements = State.get('@:{global#stage.select.elements}');
        let count = elements.length;
        let element = this.get('element');
        if (element) {
            let id = element.id;
            let groups = State.get('@:{global#stage.elements.groups}');
            let list = groups[id],
                grouped = 0;
            if (!map[id] &&
                list) {
                for (let n of list) {
                    if (map[n]) {
                        grouped = 1;
                        break;
                    }
                }
            }
            let selected = this.get('selected');
            if (selected) {
                if (!Has(map, id)) {
                    let eNode = node('entity_' + this.id);
                    let vf = Vframe.byNode(eNode);
                    vf.invoke('@:{lost.select}');
                }
            }
            //console.log(Has(map, id));

            this.set({
                selfGrouped: list,
                grouped,
                selected: Has(map, id),
                count
            });
            return 1;
        }
        return false;
    },
    assign(data) {
        this.set(data);
        return this['@:{check.status}']();
    },
    render() {
        //console.log('rerender');
        this.digest();
    },
    '@:{update}'(element) {
        this.digest({
            element
        });
    },
    '@:{start.rotate}<mousedown>'(e: Magix5.MagixMouseEvent) {
        e['@:{halt}'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        let { rotate, x, y, width, height } = props;
        State.fire('@:{event#stage.toggle.scroll}', {
            show: 1,
            size: 1
        });
        let c = {
            x: x + width / 2,
            y: y + height / 2
        };
        let pos = Transform["@:{transform#real.to.stage.coord}"]({
            x: e.pageX,
            y: e.pageY
        });
        let sdeg = atan2(pos.y - c.y, pos.x - c.x) - rotate * PI / 180,
            moved;
        let eventTarget = e.eventTarget;
        me['@:{drag.drop}'](e, (evt) => {
            if (!moved) {
                Cursor["@:{show}"](eventTarget);
                moved = 1;
            }
            pos = Transform["@:{transform#real.to.stage.coord}"]({
                x: evt.pageX,
                y: evt.pageY
            });
            let deg = atan2(pos.y - c.y, pos.x - c.x);
            deg = (deg - sdeg) * 180 / PI;
            props.rotate = deg % 360;
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
        }, () => {
            Cursor["@:{hide}"]();
            if (moved) {
                DHistory["@:{save}"](DHistory['@:{history#element.rotated}'], props.ename);
            }
            State.fire('@:{event#stage.toggle.scroll}', {
                hide: 1
            });
        });
    },
    '@:{start.resize}<mousedown>'(e: Magix5.MagixMouseEvent) {
        if (e.button || e['@:{halt}']) return;
        e['@:{halt}'] = 1;
        let me = this;
        let element = me.get('element');
        let { props, ctrl } = element;
        State.fire('@:{event#stage.toggle.scroll}', {
            show: 1,
            size: 1
        });
        if (props.rotate == null) {
            props.rotate = 0;
        }
        props.rotate %= 360;
        let { rotate,
            width: beginWidth,
            height: beginHeight
        } = props;
        let { key } = e.params;
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
                if (Has(p, 'max')) {
                    maxWidth = Const["@:{const#to.px}"](p.max) * scale;
                }
                if (Has(p, 'min')) {
                    minWidth = Const["@:{const#to.px}"](p.min) * scale;
                }
            } else if (p.key == 'height') {
                findHeight = 1;
                if (Has(p, 'max')) {
                    maxHeight = Const["@:{const#to.px}"](p.max) * scale;
                }
                if (Has(p, 'min')) {
                    minHeight = Const["@:{const#to.px}"](p.min) * scale;
                }
            }
            if (findWidth &&
                findHeight) {
                break;
            }
        }
        let moved;
        let eventTarget = e.eventTarget;
        let beginPoint = {
            x: e.pageX,
            y: e.pageY
        };
        let modifyWidth = handX != 'm';
        let modifyHeight = handY != 'm';
        let oppsiteWidth = handX == 'l' ? -1 : 1;
        let oppsiteHeight = handY == 't' ? -1 : 1;
        me['@:{drag.drop}'](e, evt => {
            if (!moved) {
                Cursor["@:{show}"](eventTarget);
                moved = 1;
            }
            let nowPoint = {
                x: evt.pageX,
                y: evt.pageY
            };
            let angle = Transform['@:{transform#get.point.deg}'](nowPoint, beginPoint);
            let dis = Transform['@:{transform#get.point.distance}'](nowPoint, beginPoint);
            let rad = (PI / 180) * (angle - rotate);
            let diffY = sin(rad) * dis;
            let diffX = cos(rad) * dis;
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
            if (props.width != newWidth ||
                props.height != newHeight) {
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
                me.digest({
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
        }, () => {
            if (moved) {
                DHistory["@:{save}"](DHistory['@:{history#element.modified.size}'], props.ename);
                Cursor["@:{hide}"]();
            }
            State.fire('@:{event#stage.toggle.scroll}', {
                hide: 1
            });
        });
    }
}).merge(Dragdrop);