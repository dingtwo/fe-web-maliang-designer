/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { min } = Math;
export default Magix.View.extend({
    tmpl: '@:index.html',
    assign(data) {
        let { props } = data;
        let { borderwidth: bw, width, height } = props;
        let minSize = min(width, height);
        let half = minSize / 2;
        if (bw > half) {
            bw = half;
        }
        this.set(data);
        this.set({
            bw
        });
    },
    render() {
        this.digest();
    }
});