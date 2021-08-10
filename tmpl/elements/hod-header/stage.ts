/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { State, View, LOW } = Magix;
export default View.extend({
    tmpl: '@:index.html',
    init() {
        let update = this['@:{debounce}'](e => {
            let props = this.get('props');
            this.digest({
                props
            });
        });
        State.on('@:{event#stage.select.element.props.change}', update, LOW);
        this.on('destroy', () => {
            State.off('@:{event#stage.select.element.props.change}', update);
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});