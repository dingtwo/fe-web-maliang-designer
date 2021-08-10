/*
    author:https://github.com/xinglie
*/
import Magix, { lowTaskFinale } from 'magix';
import Enum from '../../designer/enum';
import DHistory from '../../designer/history';
import StageGeneric from '../../designer/stage-generic';
import StageSelection from '../../designer/stage-selection';
import Rect from './rect';
let { State, View, applyStyle, mark } = Magix;
applyStyle('@:index.less');

export default View.extend({
    tmpl: '@:index.html',
    init() {
        this.set({
            hodEnum: Enum['@:{enum#as.hod}']
        });
        let update = this['@:{debounce}'](this.render, 30);
        let checkLocked = e => {
            let props = e['@:{props}'];
            if (props.locked ||
                props.ename ||
                props.rows) {
                update();
            }
        };
        Rect['@:{setup}']();
        State.on('@:{event#history.shift.change}', update);
        State.on('@:{event#stage.elements.change}', update);
        State.on('@:{event#stage.select.elements.change}', update);
        State.on('@:{event#stage.page.and.elements.change}', update);
        State.on('@:{event#stage.select.element.props.change}', checkLocked);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change}', update);
            State.off('@:{event#stage.elements.change}', update);
            State.off('@:{event#stage.select.elements.change}', update);
            State.off('@:{event#stage.page.and.elements.change}', update);
            State.off('@:{event#stage.select.element.props.change}', checkLocked);
        });
    },
    async render(e) {
        let elements = State.get<Report.StageElement[]>('@:{global#stage.elements}');
        let map = StageSelection['@:{selection#get.selected.map}']();
        let selectElements = State.get<Report.StageElement[]>('@:{global#stage.select.elements}');
        let renderMark = mark(this, '@:{render.mark}');
        await this.digest({
            map,
            elements
        });
        await lowTaskFinale();
        let highlight = renderMark() && selectElements.length == 1;
        if (e &&
            e.type == '@:{event#stage.elements.change}' &&
            (e['@:{extra}'] == '@:{delete.from.tree.panel}' ||
                e['@:{extra}'] == '@:{dragsort.from.tree.panel}')) {
            highlight = false;
        }
        //console.log(e);
        //setTimeout(() => {
        if (highlight) {
            let first = selectElements[0];
            StageGeneric['@:{generic#scroll.into.view}'](`te_` + first.id, this.root);
        }
        //}, 50);
    },
    '@:{drag.start}<dragstart>'(e: Magix5.MagixMouseEvent & DragEvent) {
        let dest = State.get('@:{global#panels.elements.drag.view}');
        if (dest && dest != this.id) return;
        let me = this;
        let { params, dataTransfer } = e;
        this.set({
            current: me['@:{drag.index}'] = params.index
        });
        //dataTransfer.effectAllowed = 'move';
        //firefox required setData
        dataTransfer.setData('text/plain', '@:{fix.firefox.cursor}');
    },
    '@:{drag.over}<dragover>'(e: Magix5.MagixMouseEvent & DragEvent) {
        let dest = State.get('@:{global#panels.elements.drag.view}');
        if (dest && dest != this.id) return;
        let me = this;
        let { eventTarget, params, pageY } = e;
        let { index } = params;
        let currentIndex = me['@:{drag.index}'];
        if (currentIndex != index) {
            let rect = eventTarget.getBoundingClientRect();
            let onTop = (rect.y + rect.height / 2) > pageY;
            let canDrop = 1;
            if (onTop) {
                //界面是倒序显示的
                if (currentIndex == index + 1) {
                    canDrop = 0;
                }
            } else {
                if (currentIndex == index - 1) {
                    canDrop = 0;
                }
            }
            if (canDrop) {
                //dataTransfer.dropEffect = 'move';
                me.digest({
                    onTop,
                    drag: true,
                    index
                });
            } else {
                //dataTransfer.dropEffect = 'none';
                me.digest({
                    drag: 0
                });
            }
        } else {
            //dataTransfer.dropEffect = 'none';
            me.digest({
                drag: 0
            });
        }
    },
    '@:{drag.end}<dragend>'(e: Magix5.MagixMouseEvent) {
        let dest = State.get('@:{global#panels.elements.drag.view}');
        if (dest && dest != this.id) return;
        let me = this;
        let { drag, elements, onTop, index } = me.get();
        if (drag) {
            let startIndex = me['@:{drag.index}'];
            let drag = elements[startIndex];
            elements.splice(index + (onTop ? 1 : 0), 0, drag);
            if (index < startIndex) {
                elements.splice(startIndex + 1, 1);
            } else {
                elements.splice(startIndex, 1);
            }
            me.set({
                elements
            });
            State.fire('@:{event#stage.elements.change}', {
                '@:{extra}': '@:{dragsort.from.tree.panel}'
            });
            DHistory['@:{history#save}'](DHistory['@:{history#element.z.index}'], drag.props.ename);
        }
        me.digest({
            current: -1,
            drag: 0
        });
        this['@:{hide.pole}']();
    }
}).merge(Rect);