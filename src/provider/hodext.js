/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/hodext",["4e","../4d/4q","../4d/5b","../4l/4m/index","./table"],(require,exports,module)=>{


let magix_1 = require("4e");
let history_1 = require("../4d/4q");
let stage_selection_1 = require("../4d/5b");
let index_1 = require("../4l/4m/index");
let table_1 = require("./table");
let { State } = magix_1;
let dragLocker = {};
module.exports= {
    '_hj<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let { row, col } = e.params;
        e['_ey'] = 1;
        if (index_1['_hz'](dragLocker, `${row}_${col}`)) {
            table_1["dE"](props, true);
            let { rows } = props;
            let ri = 0, dataRowIndex = -1;
            for (let row of rows) {
                if (row.data) {
                    dataRowIndex = ri;
                }
                ri++;
            }
            if (row == dataRowIndex) {
                let src = State.get('dY');
                if (src) {
                    this.digest({
                        fieldRow: row,
                        fieldCol: col
                    });
                }
            }
        }
    },
    '_hk<dragleave>'(e) {
        let { row, col } = e.params;
        if (index_1['_hA'](dragLocker, `${row}_${col}`) &&
            this.get('fieldRow') == row &&
            this.get('fieldCol') == col) {
            this.digest({
                fieldRow: -1,
                fieldCol: -1
            });
        }
    },
    '_hl<drop>'(e) {
        this['_fu'](e);
        dragLocker = {};
        let row = this.get('fieldRow'), col = this.get('fieldCol');
        let src = State.get('dY');
        //let inNode = inside(e.target as HTMLElement, this.root);
        if (src &&
            //inNode &&
            row != -1 &&
            col != -1) {
            e['_ey'] = 1;
            let props = this.get('props');
            table_1["dE"](props, true);
            let element = this.get('element');
            let { rows, ename } = props;
            if (props.bind.id != src.id) {
                let bindRow = rows[row];
                let headRow = rows[row - 1];
                for (let br of bindRow.cols) {
                    let startColIndex = br['_hW'];
                    let endColIndex = br['_hX'];
                    for (let col of headRow.cols) {
                        if (col['_hW'] == startColIndex &&
                            col['_hX'] == endColIndex &&
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
            let startColIndex = cell['_hW'];
            let endColIndex = cell['_hX'];
            let headRow = rows[row - 1];
            for (let col of headRow.cols) {
                if (col['_hW'] == startColIndex &&
                    col['_hX'] == endColIndex) {
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
            this.owner.parent().invoke('_fY', [element]);
            if (!stage_selection_1["dF"](element)) {
                State.fire('dG', {
                    '_fm': {
                        [element.id]: 1
                    },
                    '_fn': {
                        [element.type]: 1
                    },
                    '_dF': {
                        '_hB': 1
                    }
                });
            }
            history_1["dE"](history_1['ea'], ename);
        }
    },
    '_hC<click>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let element = this.get('element');
        let { row, col } = e.params;
        table_1["dE"](props, true);
        let { rows, ename } = props;
        let bindRow = rows[row];
        let cell = bindRow.cols[col];
        let startColIndex = cell['_hW'];
        let endColIndex = cell['_hX'];
        let headRow = rows[row - 1];
        for (let col of headRow.cols) {
            if (col['_hW'] == startColIndex &&
                col['_hX'] == endColIndex &&
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
        this.owner.parent().invoke('_fY', [element]);
        State.fire('dG', {
            '_fm': {
                [element.id]: 1
            },
            '_fn': {
                [element.type]: 1
            },
            '_dF': {
                '_hB': 1
            }
        });
        history_1["dE"](history_1['ea'], ename);
    },
};

});