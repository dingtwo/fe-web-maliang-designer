import Magix from 'magix';
import DHistory from '../designer/history';
import StageSelection from '../designer/stage-selection';
import Dragdrop from '../gallery/mx-dragdrop/index';
import TableProvider from './table';
let { State } = Magix;
let dragLocker = {};
export default {
    '@:{when.data.field.enter}<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked) return;
        let { row, col } = e.params;
        e['@:{halt}'] = 1;
        if (Dragdrop['@:{is.dragenter}'](dragLocker, `${row}_${col}`)) {
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let { rows } = props;
            let ri = 0,
                dataRowIndex = -1;
            for (let row of rows) {
                if (row.data) {
                    dataRowIndex = ri;
                }
                ri++;
            }
            if (row == dataRowIndex) {
                let src = State.get('@:{global#bind.field.drag.data}');
                if (src) {
                    this.digest({
                        fieldRow: row,
                        fieldCol: col
                    });
                }
            }
        }
    },
    '@:{when.data.field.leave}<dragleave>'(e: DragEvent & Magix5.MagixMouseEvent) {
        let { row, col } = e.params;
        if (Dragdrop['@:{is.dragleave}'](dragLocker, `${row}_${col}`) &&
            this.get('fieldRow') == row &&
            this.get('fieldCol') == col) {
            this.digest({
                fieldRow: -1,
                fieldCol: -1
            });
        }
    },
    '@:{when.data.field.drop}<drop>'(e) {
        this['@:{prevent.default}'](e);
        dragLocker = {};
        let row = this.get('fieldRow'),
            col = this.get('fieldCol');
        let src = State.get('@:{global#bind.field.drag.data}');
        //let inNode = inside(e.target as HTMLElement, this.root);
        if (src &&
            //inNode &&
            row != -1 &&
            col != -1) {
            e['@:{halt}'] = 1;
            let props = this.get('props');
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let element = this.get('element');
            let { rows, ename } = props;
            if (props.bind.id != src.id) {
                let bindRow = rows[row];
                let headRow = rows[row - 1];
                for (let br of bindRow.cols) {
                    let startColIndex = br['@:{start.col.index}'];
                    let endColIndex = br['@:{end.col.index}'];
                    for (let col of headRow.cols) {
                        if (col['@:{start.col.index}'] == startColIndex &&
                            col['@:{end.col.index}'] == endColIndex &&
                            col.textContent == br.bindName) {
                            col.textContent = '';
                        }
                    }
                    if (br.bindKey) {
                        delete br.bindKey;
                        delete br.bindName;
                    }
                }
            }
            props.bind.id = src.id;
            props.bind.url = src.url;
            props.focusRow = row;
            props.focusCol = col;
            let cell = rows[row].cols[col];
            let startColIndex = cell['@:{start.col.index}'];
            let endColIndex = cell['@:{end.col.index}'];
            let headRow = rows[row - 1];
            for (let col of headRow.cols) {
                if (col['@:{start.col.index}'] == startColIndex &&
                    col['@:{end.col.index}'] == endColIndex) {
                    if (!col.textContent ||
                        cell.bindName == col.textContent) {
                        col.textContent = src.field.name;
                    }
                }
            }
            cell.bindKey = src.field.id;
            cell.bindName = src.field.name;
            this.set({
                fieldRow: -1,
                fieldCol: -1
            });
            this.owner.parent().invoke('@:{update}', [element]);
            if (!StageSelection["@:{selection#set}"](element)) {
                State.fire('@:{event#stage.select.element.props.change}', {
                    '@:{ids}': {
                        [element.id]: 1
                    },
                    '@:{types}': {
                        [element.type]: 1
                    },
                    '@:{props}': {
                        '@:{bind}': 1
                    }
                });
            }
            DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], ename);
        }
    },
    '@:{delete.bind.field}<click>'(e) {
        let props = this.get('props');
        if (props.locked) return;
        let element = this.get('element');
        let { row, col } = e.params;
        TableProvider["@:{table.provider#add.ext.meta}"](props, true);
        let { rows, ename } = props;
        let bindRow = rows[row];
        let cell = bindRow.cols[col];
        let startColIndex = cell['@:{start.col.index}'];
        let endColIndex = cell['@:{end.col.index}'];

        let headRow = rows[row - 1];
        for (let col of headRow.cols) {
            if (col['@:{start.col.index}'] == startColIndex &&
                col['@:{end.col.index}'] == endColIndex &&
                col.textContent == cell.bindName) {
                col.textContent = '';
            }
        }
        delete cell.bindKey;
        delete cell.bindName;
        let hasBindKey = 0;
        for (let col of bindRow.cols) {
            if (col.bindKey) {
                hasBindKey = 1;
                break;
            }
        }
        if (!hasBindKey) {
            props.bind.id = '';
            props.bind.url = '';
        }
        this.owner.parent().invoke('@:{update}', [element]);
        State.fire('@:{event#stage.select.element.props.change}', {
            '@:{ids}': {
                [element.id]: 1
            },
            '@:{types}': {
                [element.type]: 1
            },
            '@:{props}': {
                '@:{bind}': 1
            }
        });
        DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], ename);
    },
}