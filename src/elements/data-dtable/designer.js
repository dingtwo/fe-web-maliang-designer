/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-dtable/designer",["../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../../provider/cell","../../provider/table","../normal"],(require,exports,module)=>{


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
            view: "elements/data-dtable/dshow"
        });
    }
}).static({
    type: 'data-dtable',
    as: enum_1['@:{enum#as.hod~rs}'],
    title: '@:{lang#elements.data.dtable~rs}',
    icon: '&#xe674;',
    '@:{modifier~rs}': enum_1['@:{enum#modifier.icon~rs}'] |
        enum_1['@:{enum#modifier.nomask~rs}'],
    '@:{allowed.to.hod~rs}': {
        root: 1
    },
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '@:{update.props~rs}'(props) {
        let { borderwidth: bw, tfootSpacing, rows, borderdeed, hideFoot, hideTotal, hideHead, hideLabel } = props;
        table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
        let sizes = table_1["@:{table.provider#get.sizes~rs}"](props);
        let height = 0, width = 0;
        for (let w of sizes["@:{col.widths~rs}"]) {
            width += w;
            //width += (w - trunc(w)) > 0 ? 1 : 0;
        }
        let heights = sizes["@:{row.heights~rs}"];
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
        let oneBorder = const_1['@:{const#to.unit~rs}'](1);
        if (borderdeed == 'separate') {
            tableHeight = height + 2 * (sizes["@:{row.heights~rs}"].length + 3) * oneBorder;
            tableWidth = width + 2 * (sizes["@:{col.widths~rs}"].length + 2) * oneBorder;
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
    '@:{get.bind.info~rs}'(props) {
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
    '@:{get.props~rs}'(x, y) {
        let defaultProps = {
            height: const_1['@:{const#to.unit~rs}'](30),
            width: const_1['@:{const#to.unit~rs}'](150),
            rowspan: 1,
            colspan: 1,
            paddingLeft: const_1['@:{const#to.unit~rs}'](5),
            paddingTop: const_1['@:{const#to.unit~rs}'](5),
            paddingRight: const_1['@:{const#to.unit~rs}'](5),
            paddingBottom: const_1['@:{const#to.unit~rs}'](5),
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
        cellProps.textFontsize = const_1['@:{const#to.unit~rs}'](cellProps.textFontsize);
        return {
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            //rotate: 0,
            alpha: 1,
            borderwidth: const_1['@:{const#to.unit~rs}'](1),
            bordercolor: '#000000',
            bordertype: 'solid',
            borderdeed: 'collapse',
            focusRow: -1,
            focusCol: -1,
            tfs: const_1['@:{const#to.unit~rs}'](16),
            tfootSpacing: const_1['@:{const#to.unit~rs}'](30),
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
            '@:{is.scale.and.unit.field~rs}': 1,
        }, {
            key: 'rows',
            '@:{json.encode~rs}'(dest, { rows }) {
                transform_1['@:{transform#json.encode.cells~rs}'](dest, rows, transformFields);
            },
            '@:{unit.convert~rs}'({ rows }, toUnit) {
                transform_1['@:{transform#unit.convert.cells~rs}'](rows, toUnit, transformFields);
            },
            '@:{stage.scale~rs}'(props, step, dest) {
                transform_1['@:{transform#stage.scale.cells~rs}'](props, step, transformFields, dest);
            }
        }, {
            key: 'bind',
            json: 1
        }, {
            tip: '@:{lang#props.x~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'x',
            '@:{is.scale.and.unit.field~rs}': 1,
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.y~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'y',
            '@:{is.scale.and.unit.field~rs}': 1,
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.width~rs}',
            key: 'width',
            read: transform_1["@:{transform#to.show.value~rs}"],
            type: props_1["@:{eprops#label~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.height~rs}',
            key: 'height',
            read: transform_1["@:{transform#to.show.value~rs}"],
            type: props_1["@:{eprops#label~rs}"],
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
            tip: '@:{lang#props.cell.share~rs}',
            type: props_1['@:{eprops#table.cell.share~rs}'],
            '@:{dock.top~rs}': 1,
            dataPad: 2
        }, {
            type: props_1['@:{eprops#spliter~rs}']
        }, {
            tip: '@:{lang#props.alpha~rs}',
            key: 'alpha',
            type: props_1["@:{eprops#number~rs}"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: '@:{lang#props.border.width~rs}',
            key: 'borderwidth',
            type: props_1["@:{eprops#number~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            min: 0,
            max: () => const_1["@:{const#to.unit~rs}"](10),
            json: 1
        }, {
            tip: '@:{lang#props.border.type~rs}',
            key: 'bordertype',
            type: props_1["@:{eprops#dropdown~rs}"],
            items: const_1['@:{const#border.types~rs}'],
            json: 1
        }, {
            tip: '@:{lang#props.border.color~rs}',
            key: 'bordercolor',
            type: props_1["@:{eprops#color~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.table.cell.border.deed~rs}',
            key: 'borderdeed',
            type: props_1["@:{eprops#dropdown~rs}"],
            items: [{
                    text: '@:{lang#props.table.cell.border.collapse~rs}',
                    value: 'collapse'
                }, {
                    text: '@:{lang#props.table.cell.border.separate~rs}',
                    value: 'separate'
                }],
            json: 1
        }, {
            tip: '@:{lang#props.table.foot.spacing~rs}',
            min: 0,
            key: 'tfootSpacing',
            type: props_1["@:{eprops#number~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            type: props_1['@:{eprops#spliter~rs}']
        }, {
            tip: '@:{lang#props.head.first.page~rs}',
            key: 'headFirst',
            type: props_1["@:{eprops#boolean~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.foot.last.page~rs}',
            key: 'footLast',
            json: 1,
            type: props_1["@:{eprops#boolean~rs}"]
        }, {
            tip: '@:{lang#props.hide.head~rs}',
            key: 'hideHead',
            type: props_1["@:{eprops#boolean~rs}"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
            tip: '@:{lang#props.hide.label~rs}',
            key: 'hideLabel',
            type: props_1['@:{eprops#boolean~rs}'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
            tip: '@:{lang#props.show.label.every.page~rs}',
            key: 'eachPageLabel',
            type: props_1['@:{eprops#boolean~rs}'],
            json: 1
        }, {
            tip: '@:{lang#props.hide.total~rs}',
            key: 'hideTotal',
            type: props_1["@:{eprops#boolean~rs}"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
            tip: '@:{lang#props.hide.foot~rs}',
            key: 'hideFoot',
            type: props_1["@:{eprops#boolean~rs}"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
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
            type: props_1['@:{eprops#spliter~rs}']
        }, {
            tip: '@:{lang#props.cell.dynamic.cols~rs}',
            key: 'dynamicCols',
            type: props_1['@:{eprops#boolean~rs}'],
            json: 1
        }, {
            tip: '@:{lang#props.cell.avg.dynamic.cols.width~rs}',
            key: 'avgDynamicColsWidth',
            type: props_1['@:{eprops#dropdown~rs}'],
            items: [{
                    'text': '@:{lang#props.cell.avg.dynamic.cols.width.percent~rs}',
                    'value': 'percent'
                }, {
                    'text': '@:{lang#props.cell.avg.dynamic.cols.width.direct~rs}',
                    'value': 'direct'
                }, {
                    'text': '@:{lang#props.cell.avg.dynamic.cols.width.none~rs}',
                    'value': 'none'
                }],
            json: 1,
            '@:{if.show~rs}'({ dynamicCols }) {
                return dynamicCols;
            }
        }, {
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}': isCellFocused
        }, {
            tip: '@:{lang#props.cell.size~rs}',
            type: props_1["@:{eprops#table.cell.size~rs}"],
            '@:{dock.top~rs}': 1,
            //'@:{auto.height}': 1,
            '@:{if.show~rs}': isCellFocused
        }, {
            tip: '@:{lang#props.table.cell.border~rs}',
            type: props_1["@:{eprops#table.cell.border~rs}"],
            '@:{if.show~rs}': isCellFocused
        }, {
            tip: '@:{lang#props.cell.operate~rs}',
            type: props_1["@:{eprops#dtable.cell.operate~rs}"],
            '@:{dock.top~rs}': 1,
            '@:{if.show~rs}': isCellFocused
        }, {
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}': isShowContentCell
        }, {
            type: props_1["@:{eprops#dtable.cell.content~rs}"],
            '@:{if.show~rs}': isShowContentCell
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.help~rs}',
            type: props_1["@:{eprops#link~rs}"],
            key: 'help'
        }, {
            tip: '@:{lang#props.title~rs}',
            key: 'ename',
            type: props_1["@:{eprops#text.input~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.locked~rs}',
            key: 'locked',
            type: props_1["@:{eprops#boolean~rs}"],
            free: true,
            json: 1
        }]
});

});