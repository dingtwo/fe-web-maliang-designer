/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import FormatProvider from '../../provider/format';
let format = FormatProvider["@:{format}"].bind(FormatProvider);
export default Magix.View.extend({
    tmpl: '@:index.html',
    init() {
        this.set({
            toUnit: Const['@:{const#to.unit}'],
            format
        });
    },
    assign(data) {
        for (let row of data.props.rows) {
            for (let col of row.cols) {
                if (col.type == 'text' &&
                    col.textAutoReturn) {
                    row.hasAutoReturn = true;
                    break;
                }
            }
        }
        this.set(data);
    },
    render() {
        this.digest();
    }
});