import Magix from 'magix';
import DHistory from '../../designer/history';
import StageGeneric from '../../designer/stage-generic';
let { State, View, applyStyle, mark, node } = Magix;
applyStyle('@:index.less');

export default View.extend({
    tmpl: '@:index.html',
    init() {
        let update = this['@:{debounce}'](this.render, 30);
        State.on('@:{event#history.shift.change}', update);
        State.on('@:{event#history.status.change}', update);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change}', update);
            State.off('@:{event#history.status.change}', update);
        });
    },
    async render() {
        let renderMark = mark(this, '@:{render.mark}');
        let {
            '@:{list}': list,
            '@:{index}': index,
            '@:{bottom}': bottom
        } = DHistory['@:{history#get.history.info}']();
        if (bottom) {
            await this.digest({
                list,
                index,
                bottom
            });
            if (renderMark()) {
                StageGeneric['@:{generic#scroll.into.view}'](`h_${this.id}_${index}`, this.root);
            }
        }
    },
    '@:{set.history}<click>'(e: Magix5.MagixMouseEvent) {
        if (!e['@:{halt}']) {
            let { at } = e.params;
            DHistory['@:{history#set.history}'](at);
        }
    },
    '@:{remove.history}<click>'(e: Magix5.MagixMouseEvent) {
        e['@:{halt}'] = 1;
        let { at } = e.params;
        DHistory['@:{history#remove.at}'](at);
    }
});