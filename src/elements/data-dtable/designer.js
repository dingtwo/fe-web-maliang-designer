/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/data-dtable/designer",["../../50/53","../../50/enum","../../50/61","../../50/54","../../5g/cell","../../5g/table","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let cell_1 = require("../../5g/cell");
let table_1 = require("../../5g/table");
let normal_1 = require("../6e");
let { max } = Math;
let transformFields = [
    'width',
    'height',
    'paddingLeft',
    'paddingTop',
    'paddingBottom',
    'paddingRight',
    'textFontsize',
    'textLetterspacing',
];
let isShowContentCell = props => {
    let { focusRow, focusCol, rows } = props;
    let show = false;
    if (focusCol > -1 && focusCol > -1) {
        show = true;
        let cell = rows[focusRow].cols[focusCol];
        if (cell && cell.elements && cell.elements.length) {
            show = false;
        }
    }
    return show;
};
let isCellFocused = ({ focusRow, focusCol }) => focusRow > -1 && focusCol > -1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/data-dtable/dshow",
        });
    },
}).static({
    type: 'data-dtable',
    as: enum_1['gg'],
    title: 'jf',
    icon: '&#xe674;',
    '_iV': enum_1['gl'] | enum_1['gr'],
    '_ix': {
        //当前元素允许添加到的其它容器，这里只允许数据表格添加到设计区，不能添加到其它容器里
        root: 1,
    },
    '_iy': [
        {
            key: 'x',
            use: 'x',
        },
        {
            key: 'y',
            use: 'y',
        },
    ],
    '_he'(props) {
        let { borderwidth: bw, tfootSpacing, rows, borderdeed, hideFoot, hideTotal, hideHead, hideLabel, } = props;
        table_1['gd'](props, true);
        let sizes = table_1['ge'](props);
        let height = 0, width = 0;
        for (let w of sizes['_j9']) {
            width += w;
            //width += (w - trunc(w)) > 0 ? 1 : 0;
        }
        let heights = sizes['_k_'];
        let total = heights.length;
        let headStart, headEnd, headHeight, labelStart, labelHeight, bodyStart, bodyHeight, totalStart, footStart, spacingStart, totalHeight = 0, footHeight = 0, spacingHeight = tfootSpacing, headRows = 0, footRows = 0;
        for (let i = 0; i < total; i++) {
            let row = rows[i];
            let h = heights[i];
            if (row.label && !headHeight) {
                headEnd = height;
                headHeight = height;
            }
            else if (row.data) {
                labelHeight = height - headHeight;
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
                bodyHeight = height - labelHeight - headHeight;
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
        let oneBorder = const_1['ge'](1);
        if (borderdeed == 'separate') {
            tableHeight = height + 2 * (sizes['_k_'].length + 3) * oneBorder;
            tableWidth = width + 2 * (sizes['_j9'].length + 2) * oneBorder;
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
    '_j6'(props) {
        let { rows, bind } = props;
        let fields = [];
        for (let row of rows) {
            for (let col of row.cols) {
                if (col.bindKey) {
                    fields.push({
                        id: col.bindKey,
                        name: col.bindName,
                    });
                }
            }
        }
        return {
            id: bind.id,
            fields,
        };
    },
    '_hd'(x, y) {
        let defaultProps = {
            height: const_1['ge'](30),
            width: const_1['ge'](150),
            rowspan: 1,
            colspan: 1,
            paddingLeft: const_1['ge'](5),
            paddingTop: const_1['ge'](5),
            paddingRight: const_1['ge'](5),
            paddingBottom: const_1['ge'](5),
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true,
            hpos: 'flex-start',
            vpos: 'flex-start',
            alpha: 1,
        };
        let cellProps = {
            ...defaultProps,
            type: 'text',
            ...cell_1.text,
        };
        cellProps.textFontsize = const_1['ge'](cellProps.textFontsize);
        return {
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            //rotate: 0,
            alpha: 1,
            borderwidth: const_1['ge'](1),
            bordercolor: '#000000',
            bordertype: 'solid',
            borderdeed: 'collapse',
            focusRow: -1,
            focusCol: -1,
            tfs: const_1['ge'](16),
            tfootSpacing: const_1['ge'](30),
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
                id: '',
            },
            help: 'github.com/xinglie/report-designer/issues/26',
            rows: [
                {
                    cols: [
                        {
                            ...cellProps,
                            textAutoReturn: false,
                            elements: [],
                        },
                        {
                            ...cellProps,
                            textAutoReturn: false,
                            elements: [],
                        },
                        {
                            ...cellProps,
                            textAutoReturn: false,
                            elements: [],
                        },
                    ],
                },
                {
                    label: true,
                    cols: [
                        {
                            ...cellProps,
                            elements: [],
                        },
                        {
                            ...cellProps,
                            elements: [],
                        },
                        {
                            ...cellProps,
                            elements: [],
                        },
                    ],
                },
                {
                    data: true,
                    cols: [
                        {
                            ...cellProps,
                        },
                        {
                            ...cellProps,
                        },
                        {
                            ...cellProps,
                        },
                    ],
                },
                {
                    total: true,
                    cols: [
                        {
                            ...cellProps,
                        },
                        {
                            ...cellProps,
                        },
                        {
                            ...cellProps,
                        },
                    ],
                },
                {
                    cols: [
                        {
                            ...cellProps,
                            elements: [],
                        },
                        {
                            ...cellProps,
                            elements: [],
                        },
                        {
                            ...cellProps,
                            elements: [],
                        },
                    ],
                },
            ],
            locked: false,
        };
    },
    props: [
        {
            key: 'tfs',
            '_hM': 1,
        },
        {
            key: 'rows',
            '_jx'(dest, { rows }) {
                transform_1['gt'](dest, rows, transformFields);
            },
            '_hL'({ rows }, toUnit) {
                transform_1['gu'](rows, toUnit, transformFields);
            },
            '_iN'(props, step, dest) {
                transform_1['gs'](props, step, transformFields, dest);
            },
        },
        {
            key: 'bind',
            json: 1,
        },
        {
            tip: 'h1',
            type: props_1['gd'],
            key: 'x',
            '_hM': 1,
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'h2',
            type: props_1['gd'],
            key: 'y',
            '_hM': 1,
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'h3',
            key: 'width',
            read: transform_1['gg'],
            type: props_1['gp'],
            json: 1,
        },
        {
            tip: 'h4',
            key: 'height',
            read: transform_1['gg'],
            type: props_1['gp'],
            json: 1,
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
        {
            tip: 'iU',
            type: props_1['gR'],
            '_ka': 1,
            dataPad: 2,
        },
        {
            type: props_1['gE'],
        },
        {
            tip: 'h6',
            key: 'alpha',
            type: props_1['gd'],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1,
        },
        {
            tip: 'iw',
            key: 'borderwidth',
            type: props_1['gd'],
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            min: 0,
            max: () => const_1['ge'](10),
            json: 1,
        },
        {
            tip: 'ix',
            key: 'bordertype',
            type: props_1['gk'],
            items: const_1['gQ'],
            json: 1,
        },
        {
            tip: 'iy',
            key: 'bordercolor',
            type: props_1['ge'],
            json: 1,
        },
        {
            tip: 'iV',
            key: 'borderdeed',
            type: props_1['gk'],
            items: [
                {
                    text: 'iW',
                    value: 'collapse',
                },
                {
                    text: 'iX',
                    value: 'separate',
                },
            ],
            json: 1,
        },
        {
            tip: 'i6',
            min: 0,
            key: 'tfootSpacing',
            type: props_1['gd'],
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            json: 1,
        },
        {
            type: props_1['gE'],
        },
        {
            tip: 'jg',
            key: 'headFirst',
            type: props_1['gf'],
            json: 1,
        },
        {
            tip: 'jh',
            key: 'footLast',
            json: 1,
            type: props_1['gf'],
        },
        {
            tip: 'ji',
            key: 'hideHead',
            type: props_1['gf'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1['gd'](props, true);
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
            },
        },
        {
            tip: 'jj',
            key: 'hideLabel',
            type: props_1['gf'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1['gd'](props, true);
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
            },
        },
        {
            tip: 'jk',
            key: 'eachPageLabel',
            type: props_1['gf'],
            json: 1,
        },
        {
            tip: 'jl',
            key: 'hideTotal',
            type: props_1['gf'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1['gd'](props, true);
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
            },
        },
        {
            tip: 'jm',
            key: 'hideFoot',
            type: props_1['gf'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1['gd'](props, true);
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
            },
        },
        {
            type: props_1['gE'],
        },
        {
            tip: 'jn',
            key: 'dynamicCols',
            type: props_1['gf'],
            json: 1,
        },
        {
            tip: 'jo',
            key: 'avgDynamicColsWidth',
            type: props_1['gk'],
            items: [
                {
                    text: 'jp',
                    value: 'percent',
                },
                {
                    text: 'jq',
                    value: 'direct',
                },
                {
                    text: 'jr',
                    value: 'none',
                },
            ],
            json: 1,
            '_jN'({ dynamicCols }) {
                return dynamicCols;
            },
        },
        {
            type: props_1['gE'],
            '_jN': isCellFocused,
        },
        {
            tip: 'iY',
            type: props_1['gv'],
            '_ka': 1,
            //'@:{auto.height}': 1,
            '_jN': isCellFocused,
        },
        {
            tip: 'iZ',
            type: props_1['gI'],
            '_jN': isCellFocused,
        },
        {
            tip: 'i0',
            type: props_1['gG'],
            '_ka': 1,
            '_jN': isCellFocused,
        },
        {
            type: props_1['gE'],
            '_jN': isShowContentCell,
        },
        {
            type: props_1['gH'],
            '_jN': isShowContentCell,
        },
        {
            type: props_1['gE'],
        },
        // {
        //   tip: '@:{lang#props.help}',
        //   type: Props['@:{eprops#link}'],
        //   key: 'help',
        // },
        {
            tip: 'id',
            key: 'ename',
            type: props_1['gm'],
            json: 1,
        },
        {
            tip: 'ie',
            key: 'locked',
            type: props_1['gf'],
            free: true,
            json: 1,
        },
    ],
});

});