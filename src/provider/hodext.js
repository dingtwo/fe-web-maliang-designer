/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5g/hodext",["51","../50/5d","../50/5u","../58/59/index","./table"],(require,exports,module)=>{


let magix_1 = require("51");
let history_1 = require("../50/5d");
let stage_selection_1 = require("../50/5u");
let index_1 = require("../58/59/index");
let table_1 = require("./table");
let { State } = magix_1;
let dragLocker = {};
module.exports= {
    '_jW<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let { row, col } = e.params;
        e['_g8'] = 1;
        if (index_1['_kb'](dragLocker, `${row}_${col}`)) {
            table_1["gd"](props, true);
            let { rows } = props;
            let ri = 0, dataRowIndex = -1;
            for (let row of rows) {
                if (row.data) {
                    dataRowIndex = ri;
                }
                ri++;
            }
            if (row == dataRowIndex) {
                let src = State.get('gx');
                if (src) {
                    this.digest({
                        fieldRow: row,
                        fieldCol: col
                    });
                }
            }
        }
    },
    '_jX<dragleave>'(e) {
        let { row, col } = e.params;
        if (index_1['_kc'](dragLocker, `${row}_${col}`) &&
            this.get('fieldRow') == row &&
            this.get('fieldCol') == col) {
            this.digest({
                fieldRow: -1,
                fieldCol: -1
            });
        }
    },
    '_jY<drop>'(e) {
        this['_h5'](e);
        dragLocker = {};
        let row = this.get('fieldRow'), col = this.get('fieldCol');
        let src = State.get('gx');
        //let inNode = inside(e.target as HTMLElement, this.root);
        if (src &&
            //inNode &&
            row != -1 &&
            col != -1) {
            e['_g8'] = 1;
            let props = this.get('props');
            table_1["gd"](props, true);
            let element = this.get('element');
            let { rows, ename } = props;
            if (props.bind.id != src.id) {
                let bindRow = rows[row];
                let headRow = rows[row - 1];
                for (let br of bindRow.cols) {
                    let startColIndex = br['_ky'];
                    let endColIndex = br['_kz'];
                    for (let col of headRow.cols) {
                        if (col['_ky'] == startColIndex &&
                            col['_kz'] == endColIndex &&
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
            let startColIndex = cell['_ky'];
            let endColIndex = cell['_kz'];
            let headRow = rows[row - 1];
            for (let col of headRow.cols) {
                if (col['_ky'] == startColIndex &&
                    col['_kz'] == endColIndex) {
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
            this.owner.parent().invoke('_iA', [element]);
            if (!stage_selection_1["ge"](element)) {
                State.fire('gf', {
                    '_hW': {
                        [element.id]: 1
                    },
                    '_hX': {
                        [element.type]: 1
                    },
                    '_ge': {
                        '_kd': 1
                    }
                });
            }
            history_1["gd"](history_1['gK'], ename);
        }
    },
    '_ke<click>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let element = this.get('element');
        let { row, col } = e.params;
        table_1["gd"](props, true);
        let { rows, ename } = props;
        let bindRow = rows[row];
        let cell = bindRow.cols[col];
        let startColIndex = cell['_ky'];
        let endColIndex = cell['_kz'];
        let headRow = rows[row - 1];
        for (let col of headRow.cols) {
            if (col['_ky'] == startColIndex &&
                col['_kz'] == endColIndex &&
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
        this.owner.parent().invoke('_iA', [element]);
        State.fire('gf', {
            '_hW': {
                [element.id]: 1
            },
            '_hX': {
                [element.type]: 1
            },
            '_ge': {
                '_kd': 1
            }
        });
        history_1["gd"](history_1['gK'], ename);
    },
};

});