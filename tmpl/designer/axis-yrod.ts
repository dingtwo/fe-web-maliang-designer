/*
    author:https://github.com/xinglie
*/
/**
 * 显示y标尺的view
 */
'ref@:./axis.less';
import Magix from 'magix';
import Const from './const';
let { View, State } = Magix;
export default View.extend({
    tmpl: '@:axis-yrod.html',
    init() {
        this.set({
            enlarge: 10000,
            round: Math.round,
            toUnit: v => {
                return Const['@:{const#to.unit}'](v).toFixed(this['@:{decimals}']);
            },
        });
        let updateShadow = e => {
            this.digest({ y: e.y });
        };
        State.on('@:{event#stage.axis.shadow.change}', updateShadow);
        this.on('destroy', () => {
            State.off('@:{event#stage.axis.shadow.change}', updateShadow);
        });
    },
    assign(data) {
        this['@:{decimals}'] = data.decimals;
        this.set(data);
    },
    render() {
        this.digest();
    }
});