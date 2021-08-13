/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/hodext",["5c","../5b/5o","../5b/69","../5j/5k/index","./table"],(require,exports,module)=>{


let magix_1 = require("5c");
let history_1 = require("../5b/5o");
let stage_selection_1 = require("../5b/69");
let index_1 = require("../5j/5k/index");
let table_1 = require("./table");
let { State } = magix_1;
let dragLocker = {};
module.exports= {
    '_pH<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let { row, col } = e.params;
        e['_mW'] = 1;
        if (index_1['_pX'](dragLocker, `${row}_${col}`)) {
            table_1["l2"](props, true);
            let { rows } = props;
            let ri = 0, dataRowIndex = -1;
            for (let row of rows) {
                if (row.data) {
                    dataRowIndex = ri;
                }
                ri++;
            }
            if (row == dataRowIndex) {
                let src = State.get('ml');
                if (src) {
                    this.digest({
                        fieldRow: row,
                        fieldCol: col
                    });
                }
            }
        }
    },
    '_pI<dragleave>'(e) {
        let { row, col } = e.params;
        if (index_1['_pY'](dragLocker, `${row}_${col}`) &&
            this.get('fieldRow') == row &&
            this.get('fieldCol') == col) {
            this.digest({
                fieldRow: -1,
                fieldCol: -1
            });
        }
    },
    '_pJ<drop>'(e) {
        this['_nS'](e);
        dragLocker = {};
        let row = this.get('fieldRow'), col = this.get('fieldCol');
        let src = State.get('ml');
        //let inNode = inside(e.target as HTMLElement, this.root);
        if (src &&
            //inNode &&
            row != -1 &&
            col != -1) {
            e['_mW'] = 1;
            let props = this.get('props');
            table_1["l2"](props, true);
            let element = this.get('element');
            let { rows, ename } = props;
            if (props.bind.id != src.id) {
                let bindRow = rows[row];
                let headRow = rows[row - 1];
                for (let br of bindRow.cols) {
                    let startColIndex = br['_qj'];
                    let endColIndex = br['_qk'];
                    for (let col of headRow.cols) {
                        if (col['_qj'] == startColIndex &&
                            col['_qk'] == endColIndex &&
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
            let startColIndex = cell['_qj'];
            let endColIndex = cell['_qk'];
            let headRow = rows[row - 1];
            for (let col of headRow.cols) {
                if (col['_qj'] == startColIndex &&
                    col['_qk'] == endColIndex) {
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
            this.owner.parent().invoke('_ol', [element]);
            if (!stage_selection_1["l3"](element)) {
                State.fire('l4', {
                    '_nK': {
                        [element.id]: 1
                    },
                    '_nL': {
                        [element.type]: 1
                    },
                    '_l3': {
                        '_pZ': 1
                    }
                });
            }
            history_1["l2"](history_1['my'], ename);
        }
    },
    '_p0<click>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let element = this.get('element');
        let { row, col } = e.params;
        table_1["l2"](props, true);
        let { rows, ename } = props;
        let bindRow = rows[row];
        let cell = bindRow.cols[col];
        let startColIndex = cell['_qj'];
        let endColIndex = cell['_qk'];
        let headRow = rows[row - 1];
        for (let col of headRow.cols) {
            if (col['_qj'] == startColIndex &&
                col['_qk'] == endColIndex &&
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
        this.owner.parent().invoke('_ol', [element]);
        State.fire('l4', {
            '_nK': {
                [element.id]: 1
            },
            '_nL': {
                [element.type]: 1
            },
            '_l3': {
                '_pZ': 1
            }
        });
        history_1["l2"](history_1['my'], ename);
    },
};

});