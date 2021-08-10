/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Dragdrop from '../../gallery/mx-dragdrop/index';
import HodBaseProvider from '../../provider/hodbase';
import HodExtProvider from '../../provider/hodext';
import Const from '../../designer/const';
let { View } = Magix;
export default View.extend({
    tmpl: '@:dshow.html',
    init() {
        this.set({
            toPx: Const['@:{const#to.px}'],
            toUnit: Const['@:{const#to.unit}'],
            fieldRow: -1,
            fieldCol: -1
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
}).merge(Dragdrop, HodBaseProvider, HodExtProvider);