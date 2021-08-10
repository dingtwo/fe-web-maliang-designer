/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/data-dtable/designer",["../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../../4t/cell","../../4t/table","../5r"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let cell_1 = require("../../4t/cell");
let table_1 = require("../../4t/table");
let normal_1 = require("../5r");
let { max } = Math;
let transformFields = ['width', 'height', 'paddingLeft', 'paddingTop', 'paddingBottom', 'paddingRight', 'textFontsize', 'textLetterspacing'];
let isShowContentCell = (props) => {
    let { focusRow, focusCol, rows } = props;
    let show = false;
    if (focusCol > -1 &&
        focusCol > -1) {
        show = true;
        let cell = rows[focusRow].cols[focusCol];
        if (cell &&
            cell.elements &&
            cell.elements.length) {
            show = false;
        }
    }
    return show;
};
let isCellFocused = ({ focusRow, focusCol }) => focusRow > -1 && focusCol > -1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/data-dtable/dshow"
        });
    }
}).static({
    type: 'data-dtable',
    as: enum_1['dH'],
    title: 'gH',
    icon: '&#xe674;',
    '_gi': enum_1['dM'] |
        enum_1['dS'],
    '_fV': {
        root: 1
    },
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eF'(props) {
        let { borderwidth: bw, tfootSpacing, rows, borderdeed, hideFoot, hideTotal, hideHead, hideLabel } = props;
        table_1["dE"](props, true);
        let sizes = table_1["dF"](props);
        let height = 0, width = 0;
        for (let w of sizes["_hw"]) {
            width += w;
            //width += (w - trunc(w)) > 0 ? 1 : 0;
        }
        let heights = sizes["_hx"];
        let total = heights.length;
        let headStart, headEnd, headHeight, labelStart, labelHeight, bodyStart, bodyHeight, totalStart, footStart, spacingStart, totalHeight = 0, footHeight = 0, spacingHeight = tfootSpacing, headRows = 0, footRows = 0;
        for (let i = 0; i < total; i++) {
            let row = rows[i];
            let h = heights[i];
            if (row.label &&
                !headHeight) {
                headEnd = height;
                headHeight = height;
            }
            else if (row.data) {
                labelHeight = (height - headHeight);
            }
            else if (!headEnd) {
                headRows++;
            }
            else if (totalHeight) {
                footRows++;
            }
            height += h;
            if (row.data) {
                props.tipTop = height + h;
                height += 2 * h;
                bodyHeight = (height - labelHeight - headHeight);
            }
            else if (row.total) {
                totalHeight = h;
            }
            else if (totalHeight) {
                footHeight += h;
            }
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        height += tfootSpacing;
        let tableHeight, tableWidth;
        let oneBorder = const_1['dF'](1);
        if (borderdeed == 'separate') {
            tableHeight = height + 2 * (sizes["_hx"].length + 3) * oneBorder;
            tableWidth = width + 2 * (sizes["_hw"].length + 2) * oneBorder;
            headStart = 4 * oneBorder;
            headHeight += 2 * (headRows - 1) * oneBorder;
            if (hideHead) {
                tableHeight -= headHeight + 2 * oneBorder;
                labelStart = headStart;
                props.tipTop -= headHeight + oneBorder;
            }
            else {
                labelStart = headStart + headHeight + 2 * oneBorder;
            }
            if (hideLabel) {
                bodyStart = labelStart;
                tableHeight -= labelHeight + 2 * oneBorder;
                props.tipTop -= labelHeight + oneBorder;
            }
            else {
                bodyStart = labelStart + labelHeight;
            }
            bodyHeight += 2 * 2 * oneBorder;
            if (hideTotal) {
                tableHeight -= totalHeight + 2 * oneBorder;
                totalHeight = bodyHeight;
                totalStart = bodyStart;
            }
            else {
                totalStart = bodyStart + bodyHeight + 2 * oneBorder;
            }
            footHeight += 2 * (footRows - 1) * oneBorder;
            if (hideFoot) {
                tableHeight -= footHeight + 2 * oneBorder;
                footStart = totalStart;
                footHeight = totalHeight;
            }
            else {
                footStart = totalStart + totalHeight + 2 * oneBorder;
            }
            spacingStart = footStart + footHeight;
            headHeight -= 4 * oneBorder;
            labelHeight -= 4 * oneBorder;
            bodyHeight -= 4 * oneBorder;
            totalHeight -= 4 * oneBorder;
            footHeight -= 4 * oneBorder;
        }
        else {
            tableHeight = height + bw;
            tableWidth = width + bw;
            headStart = bw + oneBorder;
            if (hideHead) {
                tableHeight -= headHeight;
                labelStart = headStart;
                props.tipTop -= headHeight;
            }
            else {
                labelStart = headStart + headHeight;
                headHeight -= bw + 2 * oneBorder;
            }
            if (hideLabel) {
                bodyStart = labelStart;
                tableHeight -= labelHeight;
                props.tipTop -= labelHeight;
            }
            else {
                bodyStart = labelStart + labelHeight - 2 * oneBorder;
                labelHeight -= bw + 2 * oneBorder;
            }
            if (hideTotal) {
                tableHeight -= totalHeight;
                totalStart = bodyStart;
                totalHeight = bodyHeight;
            }
            else {
                totalStart = bodyStart + bodyHeight;
            }
            if (hideFoot) {
                tableHeight -= footHeight;
                footStart = totalStart;
                footHeight = totalHeight;
            }
            else {
                footStart = totalStart + totalHeight;
            }
            spacingStart = footStart + footHeight;
            bodyHeight -= bw + 2 * oneBorder;
            totalHeight -= bw + 2 * oneBorder;
            footHeight -= bw + 2 * oneBorder;
        }
        props.width = tableWidth;
        props.height = tableHeight;
        props.headStart = headStart;
        props.headHeight = headHeight;
        props.labelStart = labelStart;
        props.labelHeight = labelHeight;
        props.bodyStart = bodyStart;
        props.bodyHeight = bodyHeight;
        props.totalStart = totalStart;
        props.totalHeight = totalHeight;
        props.footStart = footStart;
        props.footHeight = footHeight;
        props.spacingStart = spacingStart;
        props.spacingHeight = max(spacingHeight, 0);
    },
    '_ht'(props) {
        let { rows, bind } = props;
        let fields = [];
        for (let row of rows) {
            for (let col of row.cols) {
                if (col.bindKey) {
                    fields.push({
                        id: col.bindKey,
                        name: col.bindName
                    });
                }
            }
        }
        return {
            id: bind.id,
            fields
        };
    },
    '_eE'(x, y) {
        let defaultProps = {
            height: const_1['dF'](30),
            width: const_1['dF'](150),
            rowspan: 1,
            colspan: 1,
            paddingLeft: const_1['dF'](5),
            paddingTop: const_1['dF'](5),
            paddingRight: const_1['dF'](5),
            paddingBottom: const_1['dF'](5),
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true,
            hpos: 'flex-start',
            vpos: 'flex-start',
            alpha: 1
        };
        let cellProps = {
            ...defaultProps,
            type: 'text',
            ...cell_1.text
        };
        cellProps.textFontsize = const_1['dF'](cellProps.textFontsize);
        return {
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            //rotate: 0,
            alpha: 1,
            borderwidth: const_1['dF'](1),
            bordercolor: '#000000',
            bordertype: 'solid',
            borderdeed: 'collapse',
            focusRow: -1,
            focusCol: -1,
            tfs: const_1['dF'](16),
            tfootSpacing: const_1['dF'](30),
            hideTotal: false,
            hideFoot: false,
            hideHead: false,
            hideLabel: false,
            eachPageLabel: true,
            headFirst: true,
            footLast: true,
            dynamicCols: true,
            avgDynamicColsWidth: 'percent',
            bind: {
                url: '',
                id: ''
            },
            help: 'github.com/xinglie/report-designer/issues/26',
            rows: [{
                    cols: [{
                            ...cellProps,
                            textAutoReturn: false,
                            elements: []
                        }, {
                            ...cellProps,
                            textAutoReturn: false,
                            elements: []
                        }, {
                            ...cellProps,
                            textAutoReturn: false,
                            elements: []
                        }]
                }, {
                    label: true,
                    cols: [{
                            ...cellProps,
                            elements: []
                        }, {
                            ...cellProps,
                            elements: []
                        }, {
                            ...cellProps,
                            elements: []
                        }]
                }, {
                    data: true,
                    cols: [{
                            ...cellProps
                        }, {
                            ...cellProps
                        }, {
                            ...cellProps
                        }]
                }, {
                    total: true,
                    cols: [{
                            ...cellProps
                        }, {
                            ...cellProps
                        }, {
                            ...cellProps
                        }]
                }, {
                    cols: [{
                            ...cellProps,
                            elements: []
                        }, {
                            ...cellProps,
                            elements: []
                        }, {
                            ...cellProps,
                            elements: []
                        }]
                }],
            locked: false
        };
    },
    props: [{
            key: 'tfs',
            '_fc': 1,
        }, {
            key: 'rows',
            '_gV'(dest, { rows }) {
                transform_1['dU'](dest, rows, transformFields);
            },
            '_fb'({ rows }, toUnit) {
                transform_1['dV'](rows, toUnit, transformFields);
            },
            '_ga'(props, step, dest) {
                transform_1['dT'](props, step, transformFields, dest);
            }
        }, {
            key: 'bind',
            json: 1
        }, {
            tip: 'fr',
            type: props_1["dE"],
            key: 'x',
            '_fc': 1,
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            '_fc': 1,
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'ft',
            key: 'width',
            read: transform_1["dH"],
            type: props_1["dQ"],
            json: 1
        }, {
            tip: 'fu',
            key: 'height',
            read: transform_1["dH"],
            type: props_1["dQ"],
            json: 1
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
        {
            tip: 'gl',
            type: props_1['eh'],
            '_hy': 1,
            dataPad: 2
        }, {
            type: props_1['d5']
        }, {
            tip: 'fw',
            key: 'alpha',
            type: props_1["dE"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: 'fY',
            key: 'borderwidth',
            type: props_1["dE"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            min: 0,
            max: () => const_1["dF"](10),
            json: 1
        }, {
            tip: 'fZ',
            key: 'bordertype',
            type: props_1["dL"],
            items: const_1['eg'],
            json: 1
        }, {
            tip: 'f0',
            key: 'bordercolor',
            type: props_1["dF"],
            json: 1
        }, {
            tip: 'gm',
            key: 'borderdeed',
            type: props_1["dL"],
            items: [{
                    text: 'gn',
                    value: 'collapse'
                }, {
                    text: 'go',
                    value: 'separate'
                }],
            json: 1
        }, {
            tip: 'gx',
            min: 0,
            key: 'tfootSpacing',
            type: props_1["dE"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            type: props_1['d5']
        }, {
            tip: 'gI',
            key: 'headFirst',
            type: props_1["dG"],
            json: 1
        }, {
            tip: 'gJ',
            key: 'footLast',
            json: 1,
            type: props_1["dG"]
        }, {
            tip: 'gK',
            key: 'hideHead',
            type: props_1["dG"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["dE"](props, true);
                let ri = 0, labelRowIndex = -1;
                for (let row of rows) {
                    if (row.label) {
                        labelRowIndex = ri;
                        break;
                    }
                    ri++;
                }
                if (focusRow < labelRowIndex) {
                    props.focusRow = -1;
                    props.focusCol = -1;
                }
                return v;
            }
        }, {
            tip: 'gL',
            key: 'hideLabel',
            type: props_1['dG'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["dE"](props, true);
                let ri = 0, labelRowIndex = -1;
                for (let row of rows) {
                    if (row.label) {
                        labelRowIndex = ri;
                        break;
                    }
                    ri++;
                }
                if (focusRow == labelRowIndex) {
                    props.focusRow = -1;
                    props.focusCol = -1;
                }
                return v;
            }
        }, {
            tip: 'gM',
            key: 'eachPageLabel',
            type: props_1['dG'],
            json: 1
        }, {
            tip: 'gN',
            key: 'hideTotal',
            type: props_1["dG"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["dE"](props, true);
                let ri = 0, totalRowIndex = -1;
                for (let row of rows) {
                    if (row.total) {
                        totalRowIndex = ri;
                        break;
                    }
                    ri++;
                }
                if (focusRow == totalRowIndex) {
                    props.focusRow = -1;
                    props.focusCol = -1;
                }
                return v;
            }
        }, {
            tip: 'gO',
            key: 'hideFoot',
            type: props_1["dG"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["dE"](props, true);
                let ri = 0, totalRowIndex = -1;
                for (let row of rows) {
                    if (row.total) {
                        totalRowIndex = ri;
                        break;
                    }
                    ri++;
                }
                if (focusRow > totalRowIndex) {
                    props.focusRow = -1;
                    props.focusCol = -1;
                }
                return v;
            }
        }, {
            type: props_1['d5']
        }, {
            tip: 'gP',
            key: 'dynamicCols',
            type: props_1['dG'],
            json: 1
        }, {
            tip: 'gQ',
            key: 'avgDynamicColsWidth',
            type: props_1['dL'],
            items: [{
                    'text': 'gR',
                    'value': 'percent'
                }, {
                    'text': 'gS',
                    'value': 'direct'
                }, {
                    'text': 'gT',
                    'value': 'none'
                }],
            json: 1,
            '_ha'({ dynamicCols }) {
                return dynamicCols;
            }
        }, {
            type: props_1["d5"],
            '_ha': isCellFocused
        }, {
            tip: 'gp',
            type: props_1["dW"],
            '_hy': 1,
            //'@:{auto.height}': 1,
            '_ha': isCellFocused
        }, {
            tip: 'gq',
            type: props_1["d9"],
            '_ha': isCellFocused
        }, {
            tip: 'gr',
            type: props_1["d7"],
            '_hy': 1,
            '_ha': isCellFocused
        }, {
            type: props_1["d5"],
            '_ha': isShowContentCell
        }, {
            type: props_1["d8"],
            '_ha': isShowContentCell
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fE',
            type: props_1["dZ"],
            key: 'help'
        }, {
            tip: 'fF',
            key: 'ename',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'fG',
            key: 'locked',
            type: props_1["dG"],
            free: true,
            json: 1
        }]
});

});