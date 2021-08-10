/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import DHistory from '../../designer/history';
import Dragdrop from '../../gallery/mx-dragdrop/index';
import Cursor from '../../gallery/mx-pointer/cursor';
import Box from '../../provider/cell';
import HodBaseProvider from '../../provider/hodbase';
import HodFlex from '../../provider/hodflex';
let { View, State } = Magix;
export default View.extend({
    tmpl: '@:dshow.html',
    init() {
        this.set({
            toPx: Const['@:{const#to.px}'],
            toUnit: Const['@:{const#to.unit}'],
        })
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },

}).merge(Dragdrop, HodBaseProvider, HodFlex);