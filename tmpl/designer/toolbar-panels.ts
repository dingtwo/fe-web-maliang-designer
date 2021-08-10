/*
    author:https://github.com/xinglie
*/
'ref@:./toolbar.less';
import Magix from 'magix';
import Panels from '../panels/index';
let { State, View } = Magix;
export default View.extend({
    tmpl: '@:toolbar-panels.html',
    init() {
        let update = this.render.bind(this);
        State.on('@:{event#panel.change}', update);
        this.on('destroy', () => {
            State.off('@:{event#panel.change}', update);
        });
    },
    render() {
        this.digest({
            panels: Panels["@:{support.panels}"]()
        });
    },
    '@:{toggle.panel}<click>'(e) {
        let { id } = e.params;
        Panels["@:{toggle.panel}"](id);
    }
});