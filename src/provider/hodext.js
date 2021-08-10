/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("provider/hodext",["magix5","../designer/history","../designer/stage-selection","../gallery/mx-dragdrop/index","./table"],(require,exports,module)=>{


let magix_1 = require("magix5");
let history_1 = require("../designer/history");
let stage_selection_1 = require("../designer/stage-selection");
let index_1 = require("../gallery/mx-dragdrop/index");
let table_1 = require("./table");
let { State } = magix_1;
let dragLocker = {};
module.exports= {
    '@:{when.data.field.enter~rs}<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let { row, col } = e.params;
        e['@:{halt~rs}'] = 1;
        if (index_1['@:{is.dragenter~rs}'](dragLocker, `${row}_${col}`)) {
            table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
            let { rows } = props;
            let ri = 0, dataRowIndex = -1;
            for (let row of rows) {
                if (row.data) {
                    dataRowIndex = ri;
                }
                ri++;
            }
            if (row == dataRowIndex) {
                let src = State.get('@:{global#bind.field.drag.data~rs}');
                if (src) {
                    this.digest({
                        fieldRow: row,
                        fieldCol: col
                    });
                }
            }
        }
    },
    '@:{when.data.field.leave~rs}<dragleave>'(e) {
        let { row, col } = e.params;
        if (index_1['@:{is.dragleave~rs}'](dragLocker, `${row}_${col}`) &&
            this.get('fieldRow') == row &&
            this.get('fieldCol') == col) {
            this.digest({
                fieldRow: -1,
                fieldCol: -1
            });
        }
    },
    '@:{when.data.field.drop~rs}<drop>'(e) {
        this['@:{prevent.default~rs}'](e);
        dragLocker = {};
        let row = this.get('fieldRow'), col = this.get('fieldCol');
        let src = State.get('@:{global#bind.field.drag.data~rs}');
        //let inNode = inside(e.target as HTMLElement, this.root);
        if (src &&
            //inNode &&
            row != -1 &&
            col != -1) {
            e['@:{halt~rs}'] = 1;
            let props = this.get('props');
            table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
            let element = this.get('element');
            let { rows, ename } = props;
            if (props.bind.id != src.id) {
                let bindRow = rows[row];
                let headRow = rows[row - 1];
                for (let br of bindRow.cols) {
                    let startColIndex = br['@:{start.col.index~rs}'];
                    let endColIndex = br['@:{end.col.index~rs}'];
                    for (let col of headRow.cols) {
                        if (col['@:{start.col.index~rs}'] == startColIndex &&
                            col['@:{end.col.index~rs}'] == endColIndex &&
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
            let startColIndex = cell['@:{start.col.index~rs}'];
            let endColIndex = cell['@:{end.col.index~rs}'];
            let headRow = rows[row - 1];
            for (let col of headRow.cols) {
                if (col['@:{start.col.index~rs}'] == startColIndex &&
                    col['@:{end.col.index~rs}'] == endColIndex) {
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
            this.owner.parent().invoke('@:{update~rs}', [element]);
            if (!stage_selection_1["@:{selection#set~rs}"](element)) {
                State.fire('@:{event#stage.select.element.props.change~rs}', {
                    '@:{ids~rs}': {
                        [element.id]: 1
                    },
                    '@:{types~rs}': {
                        [element.type]: 1
                    },
                    '@:{props~rs}': {
                        '@:{bind~rs}': 1
                    }
                });
            }
            history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.props~rs}'], ename);
        }
    },
    '@:{delete.bind.field~rs}<click>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let element = this.get('element');
        let { row, col } = e.params;
        table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
        let { rows, ename } = props;
        let bindRow = rows[row];
        let cell = bindRow.cols[col];
        let startColIndex = cell['@:{start.col.index~rs}'];
        let endColIndex = cell['@:{end.col.index~rs}'];
        let headRow = rows[row - 1];
        for (let col of headRow.cols) {
            if (col['@:{start.col.index~rs}'] == startColIndex &&
                col['@:{end.col.index~rs}'] == endColIndex &&
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
        this.owner.parent().invoke('@:{update~rs}', [element]);
        State.fire('@:{event#stage.select.element.props.change~rs}', {
            '@:{ids~rs}': {
                [element.id]: 1
            },
            '@:{types~rs}': {
                [element.type]: 1
            },
            '@:{props~rs}': {
                '@:{bind~rs}': 1
            }
        });
        history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.props~rs}'], ename);
    },
};

});