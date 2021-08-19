/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/form-collect/designer",["../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../../provider/cell","../../provider/table","../normal"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let cell_1 = require("../../provider/cell");
let table_1 = require("../../provider/table");
let normal_1 = require("../normal");
let transformFields = [
    'width',
    'height',
    'paddingLeft',
    'paddingTop',
    'paddingBottom',
    'paddingRight',
    'textFontsize',
    'textLetterspacing',
    'inputFontsize',
    'inputLetterspacing',
    'dropdownFontsize',
    'dropdownLetterspacing',
];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/form-collect/dshow",
        });
    },
}).static({
    type: 'form-collect',
    as: enum_1['@:{enum#as.hod~rs}'],
    title: '@:{lang#elements.form.collect~rs}',
    icon: '&#xe6ec;',
    '@:{modifier~rs}': enum_1['@:{enum#modifier.icon~rs}'] | enum_1['@:{enum#modifier.nomask~rs}'],
    '@:{allowed.to.hod~rs}': {
        //当前元素允许添加到的其它容器，这里只允许添加到设计区，不能添加到其它容器里
        root: 1,
    },
    '@:{move.props~rs}': [
        {
            key: 'x',
            use: 'x',
        },
        {
            key: 'y',
            use: 'y',
        },
    ],
    '@:{update.props~rs}'(props) {
        let { borderwidth: bw, rows, borderdeed, hideFoot, hideTotal, hideHead, hideLabel, excel, excelLeft, excelTop, } = props;
        table_1['@:{table.provider#add.ext.meta~rs}'](props, true);
        let sizes = table_1['@:{table.provider#get.sizes~rs}'](props);
        let height = 0, width = 0;
        for (let w of sizes['@:{col.widths~rs}']) {
            width += w;
        }
        let heights = sizes['@:{row.heights~rs}'];
        let total = heights.length;
        let headStart, headEnd, headHeight, labelStart, labelHeight, bodyStart, bodyHeight, totalStart, footStart, totalHeight = 0, footHeight = 0, headRows = 0, footRows = 0;
        for (let i = 0; i < total; i++) {
            let row = rows[i];
            let h = heights[i];
            if (row.label && !headHeight) {
                headEnd = height;
                headHeight = height;
            }
            else if (row.data && !labelHeight) {
                labelHeight = height - headHeight;
            }
            else if (!headEnd) {
                headRows++;
            }
            else if (totalHeight) {
                footRows++;
            }
            height += h;
            if (row.total) {
                bodyHeight = height - labelHeight - headHeight - h;
                totalHeight = h;
            }
            else if (totalHeight) {
                footHeight += h;
            }
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        let tableHeight, tableWidth;
        let oneBorder = const_1['@:{const#to.unit~rs}'](1);
        if (borderdeed == 'separate') {
            tableHeight = height + 2 * (sizes['@:{row.heights~rs}'].length + 1) * oneBorder;
            tableWidth = width + 2 * (sizes['@:{col.widths~rs}'].length + 1) * oneBorder;
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
    '@:{get.props~rs}'(x, y) {
        let padding = const_1['@:{const#to.unit~rs}'](5);
        let defaultProps = {
            height: const_1['@:{const#to.unit~rs}'](35),
            width: const_1['@:{const#to.unit~rs}'](150),
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
            alpha: 1,
        };
        let cellProps = {
            ...defaultProps,
            type: 'text',
            ...cell_1.text,
        };
        cellProps.textFontsize = const_1['@:{const#to.unit~rs}'](cellProps.textFontsize);
        return {
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            alpha: 1,
            borderwidth: const_1['@:{const#to.unit~rs}'](1),
            excel: true,
            excelLeft: const_1['@:{const#to.unit~rs}'](40),
            excelTop: const_1['@:{const#to.unit~rs}'](30),
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
            rows: [
                {
                    head: true,
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
                    foot: true,
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
            key: 'rows',
            '@:{json.encode~rs}'(dest, { rows }) {
                transform_1['@:{transform#json.encode.cells~rs}'](dest, rows, transformFields);
            },
            '@:{unit.convert~rs}'({ rows }, toUnit) {
                transform_1['@:{transform#unit.convert.cells~rs}'](rows, toUnit, transformFields);
            },
            '@:{stage.scale~rs}'(props, step, dest) {
                transform_1['@:{transform#stage.scale.cells~rs}'](props, step, transformFields, dest);
            },
        },
        {
            key: 'bind',
            json: 1,
        },
        {
            tip: '@:{lang#props.x~rs}',
            type: props_1['@:{eprops#number~rs}'],
            key: 'x',
            '@:{is.scale.and.unit.field~rs}': 1,
            step: const_1['@:{const#unit.step~rs}'],
            fixed: const_1['@:{const#unit.fixed~rs}'],
            read: transform_1['@:{transform#to.show.value~rs}'],
            write: transform_1['@:{transform#to.real.value~rs}'],
            json: 1,
        },
        {
            tip: '@:{lang#props.y~rs}',
            type: props_1['@:{eprops#number~rs}'],
            key: 'y',
            '@:{is.scale.and.unit.field~rs}': 1,
            step: const_1['@:{const#unit.step~rs}'],
            fixed: const_1['@:{const#unit.fixed~rs}'],
            read: transform_1['@:{transform#to.show.value~rs}'],
            write: transform_1['@:{transform#to.real.value~rs}'],
            json: 1,
        },
        {
            tip: '@:{lang#props.width~rs}',
            key: 'width',
            '@:{is.scale.and.unit.field~rs}': 1,
            read: transform_1['@:{transform#to.show.value~rs}'],
            type: props_1['@:{eprops#label~rs}'],
            json: 1,
        },
        {
            tip: '@:{lang#props.height~rs}',
            key: 'height',
            '@:{is.scale.and.unit.field~rs}': 1,
            read: transform_1['@:{transform#to.show.value~rs}'],
            type: props_1['@:{eprops#label~rs}'],
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
            tip: '@:{lang#props.cell.share~rs}',
            type: props_1['@:{eprops#table.cell.share~rs}'],
            '@:{dock.top~rs}': 1,
        },
        {
            type: props_1['@:{eprops#spliter~rs}'],
        },
        {
            tip: '@:{lang#props.alpha~rs}',
            key: 'alpha',
            type: props_1['@:{eprops#number~rs}'],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1,
        },
        {
            tip: '@:{lang#props.border.width~rs}',
            key: 'borderwidth',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1['@:{eprops#number~rs}'],
            step: const_1['@:{const#unit.step~rs}'],
            fixed: const_1['@:{const#unit.fixed~rs}'],
            read: transform_1['@:{transform#to.show.value~rs}'],
            write: transform_1['@:{transform#to.real.value~rs}'],
            min: 0,
            max: () => const_1['@:{const#to.unit~rs}'](10),
            json: 1,
        },
        {
            tip: '@:{lang#props.border.type~rs}',
            key: 'bordertype',
            type: props_1['@:{eprops#dropdown~rs}'],
            items: const_1['@:{const#border.types~rs}'],
            json: 1,
        },
        {
            tip: '@:{lang#props.border.color~rs}',
            key: 'bordercolor',
            type: props_1['@:{eprops#color~rs}'],
            json: 1,
        },
        {
            tip: '@:{lang#props.table.cell.border.deed~rs}',
            key: 'borderdeed',
            type: props_1['@:{eprops#dropdown~rs}'],
            items: [
                {
                    text: '@:{lang#props.table.cell.border.collapse~rs}',
                    value: 'collapse',
                },
                {
                    text: '@:{lang#props.table.cell.border.separate~rs}',
                    value: 'separate',
                },
            ],
            json: 1,
        },
        {
            type: props_1['@:{eprops#spliter~rs}'],
        },
        {
            tip: '@:{lang#props.hide.head~rs}',
            key: 'hideHead',
            type: props_1['@:{eprops#boolean~rs}'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1['@:{table.provider#add.ext.meta~rs}'](props, true);
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
            tip: '@:{lang#props.hide.label~rs}',
            key: 'hideLabel',
            type: props_1['@:{eprops#boolean~rs}'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1['@:{table.provider#add.ext.meta~rs}'](props, true);
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
            tip: '@:{lang#props.hide.total~rs}',
            key: 'hideTotal',
            type: props_1['@:{eprops#boolean~rs}'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1['@:{table.provider#add.ext.meta~rs}'](props, true);
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
            tip: '@:{lang#props.hide.foot~rs}',
            key: 'hideFoot',
            type: props_1['@:{eprops#boolean~rs}'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1['@:{table.provider#add.ext.meta~rs}'](props, true);
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
            type: props_1['@:{eprops#spliter~rs}'],
        },
        {
            tip: '@:{lang#props.excel.title~rs}',
            type: props_1['@:{eprops#boolean~rs}'],
            key: 'excel',
            json: 1,
        },
        {
            tip: '@:{lang#props.excel.title.background~rs}',
            type: props_1['@:{eprops#color~rs}'],
            key: 'excelBackground',
            json: 1,
            '@:{if.show~rs}'(props) {
                return props.excel;
            },
        },
        {
            tip: '@:{lang#props.forecolor~rs}',
            type: props_1['@:{eprops#color~rs}'],
            key: 'excelForecolor',
            json: 1,
            '@:{if.show~rs}'(props) {
                return props.excel;
            },
        },
        {
            tip: '@:{lang#props.excel.title.top.height~rs}',
            type: props_1['@:{eprops#number~rs}'],
            step: const_1['@:{const#unit.step~rs}'],
            fixed: const_1['@:{const#unit.fixed~rs}'],
            read: transform_1['@:{transform#to.show.value~rs}'],
            write: transform_1['@:{transform#to.real.value~rs}'],
            min: () => const_1['@:{const#to.unit~rs}'](20),
            '@:{is.scale.and.unit.field~rs}': 1,
            key: 'excelTop',
            json: 1,
            '@:{if.show~rs}'(props) {
                return props.excel;
            },
        },
        {
            tip: '@:{lang#props.excel.title.left.width~rs}',
            type: props_1['@:{eprops#number~rs}'],
            step: const_1['@:{const#unit.step~rs}'],
            fixed: const_1['@:{const#unit.fixed~rs}'],
            read: transform_1['@:{transform#to.show.value~rs}'],
            write: transform_1['@:{transform#to.real.value~rs}'],
            min: () => const_1['@:{const#to.unit~rs}'](20),
            '@:{is.scale.and.unit.field~rs}': 1,
            key: 'excelLeft',
            json: 1,
            '@:{if.show~rs}'(props) {
                return props.excel;
            },
        },
        {
            type: props_1['@:{eprops#spliter~rs}'],
            '@:{if.show~rs}'(props) {
                return props.focusRow > -1 && props.focusCol > -1;
            },
        },
        {
            tip: '@:{lang#props.cell.size~rs}',
            type: props_1['@:{eprops#table.cell.size~rs}'],
            '@:{dock.top~rs}': 1,
            //'@:{auto.height}': 1,
            '@:{if.show~rs}'(props) {
                return props.focusRow > -1 && props.focusCol > -1;
            },
        },
        {
            tip: '@:{lang#props.table.cell.border~rs}',
            type: props_1['@:{eprops#table.cell.border~rs}'],
            '@:{if.show~rs}'(props) {
                return props.focusRow > -1 && props.focusCol > -1;
            },
        },
        {
            tip: '@:{lang#props.cell.operate~rs}',
            type: props_1['@:{eprops#form.collect.cell.operate~rs}'],
            '@:{dock.top~rs}': 1,
            '@:{if.show~rs}'(props) {
                return props.focusRow > -1 && props.focusCol > -1;
            },
        },
        {
            type: props_1['@:{eprops#spliter~rs}'],
            '@:{if.show~rs}'(props) {
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
            },
        },
        {
            type: props_1['@:{eprops#form.collect.cell.content~rs}'],
            '@:{if.show~rs}'(props) {
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
            },
        },
        {
            type: props_1['@:{eprops#spliter~rs}'],
        },
        // {
        //   tip: '@:{lang#props.help}',
        //   type: Props['@:{eprops#link}'],
        //   key: 'help',
        // },
        {
            tip: '@:{lang#props.title~rs}',
            key: 'ename',
            type: props_1['@:{eprops#text.input~rs}'],
            json: 1,
        },
        {
            tip: '@:{lang#props.locked~rs}',
            key: 'locked',
            type: props_1['@:{eprops#boolean~rs}'],
            free: true,
            json: 1,
        },
    ],
});

});