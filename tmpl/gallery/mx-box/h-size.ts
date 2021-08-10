/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Tranform from '../../designer/transform';
import Box from '../../provider/cell';
import Const from '../../designer/const';
let { View, dispatch } = Magix;
export default View.extend({
    tmpl: '@:./h-size.html',
    init() {
        this.set({
            fixed: Const["@:{const#unit.fixed}"],
            step: Const["@:{const#unit.fixed}"],
            minWidth: () => Const["@:{const#to.unit}"](Box["@:{min.width}"]),
            minHeight: () => Const["@:{const#to.unit}"](Box["@:{min.height}"]),
            read: Tranform["@:{transform#to.show.value}"]
        });
    },
    assign(data) {
        let { props, disabled } = data;
        let { rows, focusRow, focusCol } = props;
        if (focusRow == -1) {
            focusRow = 0;
        }
        if (focusCol == -1) {
            focusCol = 0;
        }
        let cell = rows[focusRow].cols[focusCol];
        this.set({
            row: rows[focusRow],
            disabled,
            cell,
            rows,
            focusRow,
            focusCol
        });
    },
    render() {
        this.digest();
    },
    '@:{update.cell.width}<input>'(e) {
        this['@:{stop.propagation}'](e);
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.width = Tranform["@:{transform#to.real.value}"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{update.row.height}<input>'(e) {
        this['@:{stop.propagation}'](e);
        let rows = this.get('rows');
        let row = this.get('row');
        row.height = Tranform["@:{transform#to.real.value}"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    }
});