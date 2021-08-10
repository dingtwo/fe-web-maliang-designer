/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import DHistory from '../../designer/history';
import StageSelection from '../../designer/stage-selection';
import Dragdrop from '../../gallery/mx-dragdrop/index';
import HodBaseProvider from '../../provider/hodbase';
let { State, View } = Magix;
let hasContent = (props, row, col) => {
    let cell = props.rows[row].cols[col];
    if (cell.type == 'text') {
        return cell.textContent;
    }
};
let dragLocker = {};
export default View.extend({
    tmpl: '@:dshow.html',
    init() {
        this.set({
            toPx: Const['@:{const#to.px}'],
            toUnit: Const['@:{const#to.unit}'],
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{when.data.field.enter}<dragenter>'(e: Magix5.MagixMouseEvent) {
        let props = this.get('props');
        if (props.locked) return;
        e['@:{halt}'] = 1;
        let { row, col } = e.params;
        if (Dragdrop['@:{is.dragenter}'](dragLocker, `${row}_${col}`)) {
            if (hasContent(props, row, col)) {
                this.digest({
                    fieldRow: -1,
                    colRow: -1
                });
            } else {
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
    '@:{when.data.field.leave}<dragleave>'(e: Magix5.MagixMouseEvent) {
        let { row, col } = e.params;
        if (Dragdrop['@:{is.dragleave}'](dragLocker, `${row}_${col}`)) {
            if (this.get('fieldRow') == row &&
                this.get('fieldCol') == col) {
                this.digest({
                    fieldRow: -1,
                    fieldCol: -1
                });
            }
        }
    },
    '@:{delete.bind.field}<click>'(e) {
        let props = this.get('props');
        if (props.locked) return;
        let element = this.get('element');
        let { row, col } = e.params;
        let { rows } = props;
        let cell = rows[row].cols[col];
        delete cell.bindKey;
        delete cell.bindName;
        let hasBindKey = 0;
        for (let row of rows) {
            for (let col of row.cols) {
                if (col.bindKey) {
                    hasBindKey = 1;
                    break;
                }
            }
            if (hasBindKey) {
                break;
            }
        }
        if (!hasBindKey) {
            props.bind.id = '';
            props.bind.url = '';
        }
        this.digest({
            props
        });
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
        DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], props.ename);
    },
    '@:{when.data.field.drop}<drop>'(e) {
        this['@:{prevent.default}'](e);
        dragLocker = {};
        e['@:{halt}'] = 1;
        let row = this.get('fieldRow'),
            col = this.get('fieldCol');
        let src = State.get('@:{global#bind.field.drag.data}');
        if (src &&
            row != -1 &&
            col != -1) {
            let props = this.get('props');
            let element = this.get('element');
            let { rows } = props;
            if (props.bind.id != src.id) {
                for (let row of rows) {
                    for (let col of row.cols) {
                        if (col.bindKey) {
                            delete col.bindKey;
                            delete col.bindName;
                        }
                    }
                }
            }
            props.bind.id = src.id;
            props.bind.url = src.url;
            props.focusRow = row;
            props.focusCol = col;
            let cell = rows[row].cols[col];
            cell.bindKey = src.field.id;
            cell.bindName = src.field.name;
            this.digest({
                fieldRow: -1,
                fieldCol: -1
            });
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
            DHistory["@:{history#save}"](DHistory['@:{history#element.modified.props}'], props.ename);
        }
    }
}).merge(Dragdrop, HodBaseProvider);