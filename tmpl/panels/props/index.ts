/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { State, View,applyStyle } = Magix;
applyStyle('@:index.less');
export default View.extend({
    tmpl: '@:index.html',
    init() {
        let update = this['@:{debounce}'](this.render, 30);
        State.on('@:{event#stage.select.elements.change}', update);
        State.on('@:{event#history.shift.change}', update);
        this.on('destroy', () => {
            State.off('@:{event#stage.select.elements.change}', update);
            State.off('@:{event#history.shift.change}', update);
        });
    },
    render() {
        let selectElements = State.get('@:{global#stage.select.elements}');
        let single = selectElements.length == 1;
        this.digest({
            single
        });
    }
});