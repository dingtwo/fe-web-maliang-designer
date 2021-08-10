/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import DHistory from '../../designer/history';
import StageSelection from '../../designer/stage-selection';
export default Magix.View.extend({
    tmpl: '@:./dshow.html',
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{update.value}<cmchange>'(e) {
        let props = this.get('props');
        props.value = e.value;
    },
    '@:{stop}<pointerdown,contextmenu>'(e: MouseEvent) {
        if (e['@:{halt}']) return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['@:{halt}'] = 1;
        let element = this.get('element');
        if (StageSelection["@:{selection#set}"](element)) {
            DHistory["@:{history#save}"](DHistory['@:{history#element.get.focus}'], element.props.ename);
        }
        //}
    }
});