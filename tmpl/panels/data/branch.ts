/*
    author:https://github.com/xinglie
*/
'ref@:./index.less';
import Magix from 'magix';
let { View, State, dispatch } = Magix;

export default View.extend({
    tmpl: '@:./branch.html',
    init() {
        let view = this;
        this.set({
            highlight(title) {
                let kw = view.get('kw');
                if (kw) {
                    title = title.replaceAll(kw, `<span class="@:./index.less:{search-highlight}">${kw}</span>`);
                }
                return title;
            }
        })
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{toggle.children}<click>'(e: Magix5.MagixMouseEvent) {
        let { item } = e.params;
        let list = this.get('list');
        item.expand = !item.expand;
        this.digest({
            list
        });
    },

    '@:{drag.field.start}<dragstart>'(e: DragEvent & Magix5.MagixMixedEvent) {
        let { params: dragData,
            eventTarget,
            pageX, pageY,
            dataTransfer } = e;
        let b = eventTarget.getBoundingClientRect();
        State.set({
            '@:{global#bind.field.drag.data}': dragData,
            '@:{global#bind.field.drag.event.offset}': {
                '@:{offset.x}': pageX - b.x,
                '@:{offset.y}': pageY - b.y
            }
        });
        dataTransfer.setData('text/plain', '@:{fix.firefox.cursor}');
        //dataTransfer.effectAllowed = 'move';
        State.fire('@:{event#bind.field.drag.start}');
    },
    '@:{drag.field.end}<dragend>'() {
        State.set({
            '@:{global#bind.field.drag.data}': null,
            '@:{global#bind.field.drag.event}': null
        });
        State.fire('@:{event#bind.field.drag.end}');
    },
    //https://github.com/xinglie/report-designer/issues/45
    '@:{fix.drag.clip.bug}<pointerdown>'(e: Magix5.MagixMouseEvent) {
        dispatch(this.root, 'treeitempointerdown', {
            treeDOMNode: e.eventTarget
        });
    }
})