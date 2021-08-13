/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/form-collect/designer",["../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../../5r/cell","../../5r/table","../6p"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let cell_1 = require("../../5r/cell");
let table_1 = require("../../5r/table");
let normal_1 = require("../6p");
let transformFields = ['width', 'height', 'paddingLeft', 'paddingTop', 'paddingBottom', 'paddingRight', 'textFontsize', 'textLetterspacing', 'inputFontsize', 'inputLetterspacing', 'dropdownFontsize', 'dropdownLetterspacing'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/form-collect/dshow"
        });
    }
}).static({
    type: 'form-collect',
    as: enum_1['l5'],
    title: 'px',
    icon: '&#xe6ec;',
    '_oG': enum_1['m_'] |
        enum_1['mf'],
    '_oi': {
        root: 1
    },
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_m3'(props) {
        let { borderwidth: bw, rows, borderdeed, hideFoot, hideTotal, hideHead, hideLabel, excel, excelLeft, excelTop } = props;
        table_1["l2"](props, true);
        let sizes = table_1["l3"](props);
        let height = 0, width = 0;
        for (let w of sizes["_pU"]) {
            width += w;
        }
        let heights = sizes["_pV"];
        let total = heights.length;
        let headStart, headEnd, headHeight, labelStart, labelHeight, bodyStart, bodyHeight, totalStart, footStart, totalHeight = 0, footHeight = 0, headRows = 0, footRows = 0;
        for (let i = 0; i < total; i++) {
            let row = rows[i];
            let h = heights[i];
            if (row.label &&
                !headHeight) {
                headEnd = height;
                headHeight = height;
            }
            else if (row.data &&
                !labelHeight) {
                labelHeight = (height - headHeight);
            }
            else if (!headEnd) {
                headRows++;
            }
            else if (totalHeight) {
                footRows++;
            }
            height += h;
            if (row.total) {
                bodyHeight = (height - labelHeight - headHeight - h);
                totalHeight = h;
            }
            else if (totalHeight) {
                footHeight += h;
            }
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        let tableHeight, tableWidth;
        let oneBorder = const_1['l3'](1);
        if (borderdeed == 'separate') {
            tableHeight = height + 2 * (sizes["_pV"].length + 1) * oneBorder;
            tableWidth = width + 2 * (sizes["_pU"].length + 1) * oneBorder;
            if (excel) {
                tableWidth += excelLeft + 2 * oneBorder;
                tableHeight += excelTop + 2 * oneBorder;
                headStart = excelTop + 6 * oneBorder;
            }
            else {
                headStart = 4 * oneBorder;
            }
            headHeight += 2 * (headRows - 1) * oneBorder;
            if (hideHead) {
                tableHeight -= headHeight + 2 * oneBorder;
                labelStart = headStart;
            }
            else {
                labelStart = headStart + headHeight + 2 * oneBorder;
            }
            if (hideLabel) {
                tableHeight -= labelHeight + 2 * oneBorder;
                bodyStart = labelStart;
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
            headHeight -= 4 * oneBorder;
            labelHeight -= 4 * oneBorder;
            bodyHeight -= 4 * oneBorder;
            totalHeight -= 4 * oneBorder;
            footHeight -= 4 * oneBorder;
        }
        else {
            tableHeight = height + bw;
            tableWidth = width + bw;
            if (excel) {
                tableWidth += excelLeft;
                tableHeight += excelTop;
                headStart = excelTop + bw + oneBorder;
            }
            else {
                headStart = bw + oneBorder;
            }
            if (hideHead) {
                tableHeight -= headHeight;
                labelStart = headStart;
            }
            else {
                labelStart = headStart + headHeight;
                headHeight -= bw + 2 * oneBorder;
            }
            if (hideLabel) {
                tableHeight -= labelHeight;
                bodyStart = labelStart;
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
    },
    '_m2'(x, y) {
        let padding = const_1['l3'](5);
        let defaultProps = {
            height: const_1['l3'](35),
            width: const_1['l3'](150),
            rowspan: 1,
            colspan: 1,
            paddingLeft: padding,
            paddingTop: padding,
            paddingRight: padding,
            paddingBottom: padding,
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
        cellProps.textFontsize = const_1['l3'](cellProps.textFontsize);
        return {
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            alpha: 1,
            borderwidth: const_1['l3'](1),
            excel: true,
            excelLeft: const_1['l3'](40),
            excelTop: const_1['l3'](30),
            excelBackground: '#f6f6f6',
            excelForecolor: '#000000',
            bordercolor: '#000000',
            bordertype: 'solid',
            borderdeed: 'collapse',
            focusRow: -1,
            focusCol: -1,
            hideTotal: false,
            hideFoot: false,
            hideHead: false,
            hideLabel: false,
            help: 'github.com/xinglie/report-designer/issues/40',
            rows: [{
                    head: true,
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
                    foot: true,
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
            key: 'rows',
            '_pi'(dest, { rows }) {
                transform_1['mh'](dest, rows, transformFields);
            },
            '_nz'({ rows }, toUnit) {
                transform_1['mi'](rows, toUnit, transformFields);
            },
            '_oy'(props, step, dest) {
                transform_1['mg'](props, step, transformFields, dest);
            }
        }, {
            key: 'bind',
            json: 1
        }, {
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            '_nA': 1,
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            '_nA': 1,
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nR',
            key: 'width',
            '_nA': 1,
            read: transform_1["l5"],
            type: props_1["md"],
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            '_nA': 1,
            read: transform_1["l5"],
            type: props_1["md"],
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
            tip: 'oJ',
            type: props_1['mF'],
            '_pW': 1,
        }, {
            type: props_1['ms']
        }, {
            tip: 'nU',
            key: 'alpha',
            type: props_1["l2"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: 'ol',
            key: 'borderwidth',
            '_nA': 1,
            type: props_1["l2"],
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            min: 0,
            max: () => const_1["l3"](10),
            json: 1
        }, {
            tip: 'om',
            key: 'bordertype',
            type: props_1["l9"],
            items: const_1['mE'],
            json: 1
        }, {
            tip: 'on',
            key: 'bordercolor',
            type: props_1["l3"],
            json: 1
        }, {
            tip: 'oK',
            key: 'borderdeed',
            type: props_1["l9"],
            items: [{
                    text: 'oL',
                    value: 'collapse'
                }, {
                    text: 'oM',
                    value: 'separate'
                }],
            json: 1
        }, {
            type: props_1['ms']
        }, {
            tip: 'o8',
            key: 'hideHead',
            type: props_1["l4"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["l2"](props, true);
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
            tip: 'o9',
            key: 'hideLabel',
            type: props_1['l4'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["l2"](props, true);
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
            tip: 'pa',
            key: 'hideTotal',
            type: props_1["l4"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["l2"](props, true);
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
            tip: 'pb',
            key: 'hideFoot',
            type: props_1["l4"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["l2"](props, true);
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
            type: props_1["ms"]
        }, {
            tip: 'py',
            type: props_1['l4'],
            key: 'excel',
            json: 1
        }, {
            tip: 'pz',
            type: props_1['l3'],
            key: 'excelBackground',
            json: 1,
            '_py'(props) {
                return props.excel;
            }
        }, {
            tip: 'oi',
            type: props_1['l3'],
            key: 'excelForecolor',
            json: 1,
            '_py'(props) {
                return props.excel;
            }
        }, {
            tip: 'pA',
            type: props_1['l2'],
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            min: () => const_1['l3'](20),
            '_nA': 1,
            key: 'excelTop',
            json: 1,
            '_py'(props) {
                return props.excel;
            }
        }, {
            tip: 'pB',
            type: props_1['l2'],
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            min: () => const_1['l3'](20),
            '_nA': 1,
            key: 'excelLeft',
            json: 1,
            '_py'(props) {
                return props.excel;
            }
        }, {
            type: props_1["ms"],
            '_py'(props) {
                return props.focusRow > -1 && props.focusCol > -1;
            }
        }, {
            tip: 'oN',
            type: props_1["mj"],
            '_pW': 1,
            //'@:{auto.height}': 1,
            '_py'(props) {
                return props.focusRow > -1 && props.focusCol > -1;
            }
        }, {
            tip: 'oO',
            type: props_1["mw"],
            '_py'(props) {
                return props.focusRow > -1 && props.focusCol > -1;
            }
        }, {
            tip: 'oP',
            type: props_1["mz"],
            '_pW': 1,
            '_py'(props) {
                return props.focusRow > -1 && props.focusCol > -1;
            }
        }, {
            type: props_1["ms"],
            '_py'(props) {
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
            }
        }, {
            type: props_1["mA"],
            '_py'(props) {
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
            }
        }, {
            type: props_1["ms"]
        }, {
            tip: 'n2',
            type: props_1["mm"],
            key: 'help'
        }, {
            tip: 'n3',
            key: 'ename',
            type: props_1["ma"],
            json: 1
        }, {
            tip: 'n4',
            key: 'locked',
            type: props_1["l4"],
            free: true,
            json: 1
        }]
});

});