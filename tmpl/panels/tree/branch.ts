
import Magix from 'magix';
import Enum from '../../designer/enum';
import DHistory from '../../designer/history';
import Rect from './rect';
let { State, View } = Magix;
'ref@:./index.less';
export default View.extend({
    tmpl: '@:./branch.html',
    init() {
        this.set({
            hodEnum: Enum['@:{enum#as.hod}']
        })
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{drag.start}<dragstart>'(e: Magix5.MagixMouseEvent & DragEvent) {
        let dest = State.get('@:{global#panels.elements.drag.view}');
        if (dest && dest != this.id) return;
        State.set({
            '@:{global#panels.elements.drag.view}': this.id
        });
        let me = this;
        let { params, dataTransfer } = e;
        let { index, row, col } = params;
        me['@:{drag.index}'] = index;
        me['@:{drag.row.index}'] = row;
        me['@:{drag.col.index}'] = col;
        this.digest({
            current: index,
            rowIndex: row,
            colIndex: col
        });
        //dataTransfer.effectAllowed = 'move';
        //firefox required setData
        dataTransfer.setData('text/plain', '@:{fix.firefox.cursor}');
    },
    '@:{drag.over}<dragover>'(e: Magix5.MagixMouseEvent & DragEvent) {
        let dest = State.get('@:{global#panels.elements.drag.view}');
        if (dest && dest != this.id) return;
        let me = this;
        let { params, eventTarget, pageY } = e;
        let { index, row, col } = params;
        let currentIndex = me['@:{drag.index}'];
        if (me['@:{drag.row.index}'] === row &&
            me['@:{drag.col.index}'] === col &&
            currentIndex != index) {
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
        } else if (me.get('drag')) {
            //dataTransfer.dropEffect = 'none';
            me.digest({
                drag: 0
            });
        }
    },
    '@:{drag.end}<dragend>'() {
        let dest = State.get('@:{global#panels.elements.drag.view}');
        if (dest && dest != this.id) return;
        let me = this;
        me['@:{drag.row.index}'] = -1;
        me['@:{drag.col.index}'] = -1;
        let data = me.get();
        if (data.drag) {
            let startIndex = me['@:{drag.index}'];
            let { rowIndex, colIndex, rows, index, onTop } = data;
            let elements = rows[rowIndex].cols[colIndex].elements;
            let drag = elements[startIndex];
            elements.splice(index + (onTop ? 1 : 0), 0, drag);
            if (index < startIndex) {
                elements.splice(startIndex + 1, 1);
            } else {
                elements.splice(startIndex, 1);
            }
            me.set({
                rows
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
        State.set({
            '@:{global#panels.elements.drag.view}': null
        });
        this['@:{hide.pole}']();
    }
}).merge(Rect);