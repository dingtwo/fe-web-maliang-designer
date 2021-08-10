/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import StageSelection from '../../designer/stage-selection';
import DHistory from '../../designer/history';
import Index from './index';
let Base = Index.prototype;
let { State } = Magix;
export default Index.extend({
    '@:{update.size}'() {
        Base['@:{update.size}'].call(this);
        let element = this.get('element');
        let parent = this.owner.parent();
        parent.invoke('@:{update}', [element]);
        State.fire('@:{event#stage.select.element.props.change}', {
            '@:{ids}': {
                [element.id]: 1
            },
            '@:{types}': {
                [element.type]: 1
            },
            '@:{props}': {
                '@:{size}': 1
            }
        });
        DHistory['@:{history#save}'](DHistory['@:{history#element.modified.props}'], element.props.ename);
    },
    '@:{change.task.status}<change>'(e) {
        Base['@:{change.task.status}<change>'].call(this, e);
        let element = this.get('element');
        DHistory['@:{history#save}'](DHistory['@:{history#element.modified.props}'], element.props.ename);
    },
    '@:{stop}<pointerdown,contextmenu>'(e: MouseEvent) {
        Base['@:{stop}<pointerdown,contextmenu>'].call(this, e);
        let element = this.get('element');
        if (element && StageSelection["@:{selection#set}"](element)) {
            DHistory["@:{history#save}"](DHistory['@:{history#element.get.focus}'], element.props.ename);
        }
    }
});