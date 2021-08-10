/*
    author:https://github.com/xinglie
*/
/**
 * 显示对齐辅助线的view
 */
import Magix from 'magix';
let { State, View } = Magix;
export default View.extend({
    tmpl: '@:align.html',
    init() {
        let update = e => {
            this.digest({
                x: e.x,
                y: e.y
            });
        };
        State.on('@:{event#stage.find.snap.element}', update);
        this.on('destroy', () => {
            State.off('@:{event#stage.find.snap.element}', update);
        });
    },
    render() {
        this.digest();
    }
});