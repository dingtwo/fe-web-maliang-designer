/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Tranform from '../../designer/transform';
import TableProvider from '../../provider/table';
import Const from '../../designer/const';
import CellTable from '../../provider/cell';
let { View, dispatch } = Magix;
export default View.extend({
    tmpl: '@:./size.html',
    init() {
        this.set({
            minWidth: () => Const["@:{const#to.unit}"](CellTable['@:{min.width}']),
            minHeight: () => Const["@:{const#to.unit}"](CellTable['@:{min.height}']),
            step: Const["@:{const#unit.step}"],
            fixed: Const["@:{const#unit.fixed}"],
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
            useAH: data.ah,
            props,
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
        let props = this.get('props');
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.width = Tranform["@:{transform#to.real.value}"](e.value);
        TableProvider["@:{table.provider#update.cell.size}"](props, cell);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{update.cell.height}<input>'(e) {
        this['@:{stop.propagation}'](e);
        let props = this.get('props');
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.height = Tranform["@:{transform#to.real.value}"](e.value);
        TableProvider["@:{table.provider#update.cell.size}"](props, cell);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '@:{update.auto.height}<change>'(e) {
        let rows = this.get('rows');
        let cell = this.get('cell');
        let checked = e.eventTarget.checked;
        cell.fixedHeight = !checked;
        dispatch(this.root, 'change', {
            rows
        });
    }
});