/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Panels from '../panels/index';
let { State, View, applyStyle } = Magix;
applyStyle('@:toolbar.less');
export default View.extend({
    tmpl: '@:toolbar.html',
    init() {
        let update = this.render.bind(this);
        State.on('@:{event#panel.change}', update);
        this.on('destroy', () => {
            State.off('@:{event#panel.change}', update);
        });
        this.set({
            mini: State.get<number>('@:{global#provider.of.use.mini}'),
        });
    },
    render() {
        this.digest({
            allOpen: Panels["@:{is.all.opened}"]()
        });
    },
    '@:{close.all.panel}<click>'() {
        let allOpen = this.get('allOpen');
        if (allOpen) {
            Panels["@:{close.all.panels}"]();
        } else {
            Panels["@:{open.all.panels}"]();
        }
    }
});