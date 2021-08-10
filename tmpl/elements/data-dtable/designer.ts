/*
    author:https://github.com/xinglie
*/
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import TableContentConsts from '../../provider/cell';
import TableProvider from '../../provider/table';
import Normal from '../normal';
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
export default Normal.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
    }
}).static({
    type: 'data-dtable',
    as: Enum['@:{enum#as.hod}'],//容器元素特有的标识
    title: '@:{lang#elements.data.dtable}',
    icon: '&#xe674;',
    '@:{modifier}': Enum['@:{enum#modifier.icon}'] |
        Enum['@:{enum#modifier.nomask}'],
    '@:{allowed.to.hod}': {//当前元素允许添加到的其它容器，这里只允许数据表格添加到设计区，不能添加到其它容器里
        root: 1
    },
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{update.props}'(props) {
        let { borderwidth: bw,
            tfootSpacing,
            rows,
            borderdeed,
            hideFoot,
            hideTotal,
            hideHead,
            hideLabel } = props;
        TableProvider["@:{table.provider#add.ext.meta}"](props, true);
        let sizes = TableProvider["@:{table.provider#get.sizes}"](props);
        let height = 0,
            width = 0;
        for (let w of sizes["@:{col.widths}"]) {
            width += w;
            //width += (w - trunc(w)) > 0 ? 1 : 0;
        }
        let heights = sizes["@:{row.heights}"];
        let total = heights.length;
        let headStart,
            headEnd,
            headHeight,
            labelStart,
            labelHeight,
            bodyStart,
            bodyHeight,
            totalStart,
            footStart,
            spacingStart,
            totalHeight = 0,
            footHeight = 0,
            spacingHeight = tfootSpacing,
            headRows = 0,
            footRows = 0;
        for (let i = 0; i < total; i++) {
            let row = rows[i];
            let h = heights[i];
            if (row.label &&
                !headHeight) {
                headEnd = height;
                headHeight = height;
            } else if (row.data) {
                labelHeight = (height - headHeight);
            } else if (!headEnd) {
                headRows++;
            } else if (totalHeight) {
                footRows++;
            }
            height += h;
            if (row.data) {
                props.tipTop = height + h;
                height += 2 * h;
                bodyHeight = (height - labelHeight - headHeight);
            } else if (row.total) {
                totalHeight = h;
            } else if (totalHeight) {
                footHeight += h;
            }
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        height += tfootSpacing;
        let tableHeight,
            tableWidth;
        let oneBorder = Const['@:{const#to.unit}'](1);
        if (borderdeed == 'separate') {
            tableHeight = height + 2 * (sizes["@:{row.heights}"].length + 3) * oneBorder;
            tableWidth = width + 2 * (sizes["@:{col.widths}"].length + 2) * oneBorder;
            headStart = 4 * oneBorder;
            headHeight += 2 * (headRows - 1) * oneBorder;
            if (hideHead) {
                tableHeight -= headHeight + 2 * oneBorder;
                labelStart = headStart;
                props.tipTop -= headHeight + oneBorder;
            } else {
                labelStart = headStart + headHeight + 2 * oneBorder;
            }
            if (hideLabel) {
                bodyStart = labelStart;
                tableHeight -= labelHeight + 2 * oneBorder;
                props.tipTop -= labelHeight + oneBorder;
            } else {
                bodyStart = labelStart + labelHeight;
            }

            bodyHeight += 2 * 2 * oneBorder;

            if (hideTotal) {
                tableHeight -= totalHeight + 2 * oneBorder;
                totalHeight = bodyHeight
                totalStart = bodyStart;
            } else {
                totalStart = bodyStart + bodyHeight + 2 * oneBorder;
            }

            footHeight += 2 * (footRows - 1) * oneBorder;
            if (hideFoot) {
                tableHeight -= footHeight + 2 * oneBorder;
                footStart = totalStart;
                footHeight = totalHeight;
            } else {
                footStart = totalStart + totalHeight + 2 * oneBorder;
            }
            spacingStart = footStart + footHeight;


            headHeight -= 4 * oneBorder;
            labelHeight -= 4 * oneBorder;
            bodyHeight -= 4 * oneBorder;
            totalHeight -= 4 * oneBorder;
            footHeight -= 4 * oneBorder;
        } else {
            tableHeight = height + bw;
            tableWidth = width + bw;
            headStart = bw + oneBorder;
            if (hideHead) {
                tableHeight -= headHeight;
                labelStart = headStart;
                props.tipTop -= headHeight
            } else {
                labelStart = headStart + headHeight;
                headHeight -= bw + 2 * oneBorder;
            }
            if (hideLabel) {
                bodyStart = labelStart;
                tableHeight -= labelHeight;
                props.tipTop -= labelHeight
            } else {
                bodyStart = labelStart + labelHeight - 2 * oneBorder;
                labelHeight -= bw + 2 * oneBorder;
            }

            if (hideTotal) {
                tableHeight -= totalHeight;
                totalStart = bodyStart;
                totalHeight = bodyHeight;
            } else {
                totalStart = bodyStart + bodyHeight;
            }

            if (hideFoot) {
                tableHeight -= footHeight;
                footStart = totalStart;
                footHeight = totalHeight;
            } else {
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
    '@:{get.bind.info}'(props) {
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
    '@:{get.props}'(x, y) {
        let defaultProps = {
            height: Const['@:{const#to.unit}'](30),
            width: Const['@:{const#to.unit}'](150),
            rowspan: 1,
            colspan: 1,
            paddingLeft: Const['@:{const#to.unit}'](5),
            paddingTop: Const['@:{const#to.unit}'](5),
            paddingRight: Const['@:{const#to.unit}'](5),
            paddingBottom: Const['@:{const#to.unit}'](5),
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
            ...TableContentConsts.text
        };
        cellProps.textFontsize = Const['@:{const#to.unit}'](cellProps.textFontsize);
        return {
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            //rotate: 0,
            alpha: 1,
            borderwidth: Const['@:{const#to.unit}'](1),
            bordercolor: '#000000',
            bordertype: 'solid',
            borderdeed: 'collapse',
            focusRow: -1,
            focusCol: -1,
            tfs: Const['@:{const#to.unit}'](16),
            tfootSpacing: Const['@:{const#to.unit}'](30),
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
        '@:{is.scale.and.unit.field}': 1,
    }, {
        key: 'rows',
        '@:{json.encode}'(dest, { rows }) {
            Transform['@:{transform#json.encode.cells}'](dest, rows, transformFields);
        },
        '@:{unit.convert}'({ rows }, toUnit) {
            Transform['@:{transform#unit.convert.cells}'](rows, toUnit, transformFields);
        },
        '@:{stage.scale}'(props, step, dest) {
            Transform['@:{transform#stage.scale.cells}'](props, step, transformFields, dest);
        }
    }, {
        key: 'bind',
        json: 1
    }, {
        tip: '@:{lang#props.x}',
        type: Props["@:{eprops#number}"],
        key: 'x',
        '@:{is.scale.and.unit.field}': 1,
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.y}',
        type: Props["@:{eprops#number}"],
        key: 'y',
        '@:{is.scale.and.unit.field}': 1,
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.width}',
        key: 'width',
        read: Transform["@:{transform#to.show.value}"],
        type: Props["@:{eprops#label}"],
        json: 1
    }, {
        tip: '@:{lang#props.height}',
        key: 'height',
        read: Transform["@:{transform#to.show.value}"],
        type: Props["@:{eprops#label}"],
        json: 1
    }/*, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }*/, {
        tip: '@:{lang#props.cell.share}',
        type: Props['@:{eprops#table.cell.share}'],
        '@:{dock.top}': 1,
        dataPad: 2
    }, {
        type: Props['@:{eprops#spliter}']
    }, {
        tip: '@:{lang#props.alpha}',
        key: 'alpha',
        type: Props["@:{eprops#number}"],
        step: 0.1,
        fixed: 1,
        min: 0,
        max: 1,
        json: 1
    }, {
        tip: '@:{lang#props.border.width}',
        key: 'borderwidth',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        min: 0,
        max: () => Const["@:{const#to.unit}"](10),
        json: 1
    }, {
        tip: '@:{lang#props.border.type}',
        key: 'bordertype',
        type: Props["@:{eprops#dropdown}"],
        items: Const['@:{const#border.types}'],
        json: 1
    }, {
        tip: '@:{lang#props.border.color}',
        key: 'bordercolor',
        type: Props["@:{eprops#color}"],
        json: 1
    }, {
        tip: '@:{lang#props.table.cell.border.deed}',
        key: 'borderdeed',
        type: Props["@:{eprops#dropdown}"],
        items: [{
            text: '@:{lang#props.table.cell.border.collapse}',
            value: 'collapse'
        }, {
            text: '@:{lang#props.table.cell.border.separate}',
            value: 'separate'
        }],
        json: 1
    }, {
        tip: '@:{lang#props.table.foot.spacing}',
        min: 0,
        key: 'tfootSpacing',
        type: Props["@:{eprops#number}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        type: Props['@:{eprops#spliter}']
    }, {
        tip: '@:{lang#props.head.first.page}',
        key: 'headFirst',
        type: Props["@:{eprops#boolean}"],
        json: 1
    }, {
        tip: '@:{lang#props.foot.last.page}',
        key: 'footLast',
        json: 1,
        type: Props["@:{eprops#boolean}"]
    }, {
        tip: '@:{lang#props.hide.head}',
        key: 'hideHead',
        type: Props["@:{eprops#boolean}"],
        json: 1,
        write(v, props) {
            let { focusRow, rows } = props;
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let ri = 0,
                labelRowIndex = -1;
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
        tip: '@:{lang#props.hide.label}',
        key: 'hideLabel',
        type: Props['@:{eprops#boolean}'],
        json: 1,
        write(v, props) {
            let { focusRow, rows } = props;
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let ri = 0,
                labelRowIndex = -1;
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
        tip: '@:{lang#props.show.label.every.page}',
        key: 'eachPageLabel',
        type: Props['@:{eprops#boolean}'],
        json: 1
    }, {
        tip: '@:{lang#props.hide.total}',
        key: 'hideTotal',
        type: Props["@:{eprops#boolean}"],
        json: 1,
        write(v, props) {
            let { focusRow, rows } = props;
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let ri = 0,
                totalRowIndex = -1;
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
        tip: '@:{lang#props.hide.foot}',
        key: 'hideFoot',
        type: Props["@:{eprops#boolean}"],
        json: 1,
        write(v, props) {
            let { focusRow, rows } = props;
            TableProvider["@:{table.provider#add.ext.meta}"](props, true);
            let ri = 0,
                totalRowIndex = -1;
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
        type: Props['@:{eprops#spliter}']
    }, {
        tip: '@:{lang#props.cell.dynamic.cols}',
        key: 'dynamicCols',
        type: Props['@:{eprops#boolean}'],
        json: 1
    }, {
        tip: '@:{lang#props.cell.avg.dynamic.cols.width}',
        key: 'avgDynamicColsWidth',
        type: Props['@:{eprops#dropdown}'],
        items: [{
            'text': '@:{lang#props.cell.avg.dynamic.cols.width.percent}',
            'value': 'percent'
        }, {
            'text': '@:{lang#props.cell.avg.dynamic.cols.width.direct}',
            'value': 'direct'
        }, {
            'text': '@:{lang#props.cell.avg.dynamic.cols.width.none}',
            'value': 'none'
        }],
        json: 1,
        '@:{if.show}'({ dynamicCols }) {
            return dynamicCols;
        }
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}': isCellFocused
    }, {
        tip: '@:{lang#props.cell.size}',
        type: Props["@:{eprops#table.cell.size}"],
        '@:{dock.top}': 1,
        //'@:{auto.height}': 1,
        '@:{if.show}': isCellFocused
    }, {
        tip: '@:{lang#props.table.cell.border}',
        type: Props["@:{eprops#table.cell.border}"],
        '@:{if.show}': isCellFocused
    }, {
        tip: '@:{lang#props.cell.operate}',
        type: Props["@:{eprops#dtable.cell.operate}"],
        '@:{dock.top}': 1,
        '@:{if.show}': isCellFocused
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}': isShowContentCell
    }, {
        type: Props["@:{eprops#dtable.cell.content}"],
        '@:{if.show}': isShowContentCell
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.help}',
        type: Props["@:{eprops#link}"],
        key: 'help'
    }, {
        tip: '@:{lang#props.title}',
        key: 'ename',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.locked}',
        key: 'locked',
        type: Props["@:{eprops#boolean}"],
        free: true,
        json: 1
    }]
});