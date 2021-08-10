/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import TableContentConsts from '../../provider/cell';
import TableProvider from '../../provider/table';
import Normal from '../normal';
let { mix } = Magix;
let transformFields = ['width', 'height', 'paddingLeft', 'paddingTop', 'paddingBottom', 'paddingRight', 'textFontsize', 'textLetterspacing'];
export default Normal.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
    }
}).static({
    type: 'data-celltable',
    title: '@:{lang#elements.data.celltable}',
    as: Enum['@:{enum#as.cells}'],
    icon: '&#xe63c;',
    '@:{modifier}': Enum['@:{enum#modifier.icon}'] |
        Enum['@:{enum#modifier.rotate}'] |
        Enum['@:{enum#modifier.nomask}'],
    '@:{allowed.to.hod}': {//当前元素允许添加到的其它容器，这里只允许单元格表格添加到设计区或者数据表格里
        root: 1,
        'data-dtable': 1,
        'hod-col-table': 1
    },
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{update.props}'(props) {
        TableProvider["@:{table.provider#add.ext.meta}"](props, true);
        let { borderwidth, borderdeed } = props;
        if (!props['@:{row.max}'] ||
            !props['@:{col.max}']) {
            props = TableProvider["@:{table.provider#add.ext.meta}"](props);
        }
        let sizes = TableProvider["@:{table.provider#get.sizes}"](props);
        let height = 0,
            width = 0;
        for (let w of sizes["@:{col.widths}"]) {
            width += w;
        }
        for (let h of sizes["@:{row.heights}"]) {
            height += h;
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        let bw = borderwidth;
        if (borderdeed == 'separate') {
            let sizes = TableProvider["@:{table.provider#get.sizes}"](props);
            height += 2 * Const['@:{const#to.unit}'](sizes["@:{row.heights}"].length + 1);
            width += 2 * Const['@:{const#to.unit}'](sizes["@:{col.widths}"].length + 1);
        } else {
            height += bw;
            width += bw;
        }
        props.width = width;
        props.height = height;
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
        let cellProps = mix({
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
            alpha: 1,
            type: 'text'
        }, TableContentConsts.text);
        cellProps.textFontsize = Const['@:{const#to.unit}'](cellProps.textFontsize);
        return {
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            rotate: 0,
            alpha: 1,
            borderwidth: Const['@:{const#to.unit}'](1),
            bordercolor: '#000000',
            bordertype: 'solid',
            borderdeed: 'collapse',
            focusRow: -1,
            focusCol: -1,
            bind: {
                url: '',
                id: ''
            },
            help: 'github.com/xinglie/report-designer/issues/25',
            rows: [{
                cols: [{ ...cellProps }, { ...cellProps }]
            }, {
                cols: [{ ...cellProps }, { ...cellProps }]
            }],
            locked: false
        };
    },
    props: [{
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
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.y}',
        type: Props["@:{eprops#number}"],
        key: 'y',
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
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
    }, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }, {
        tip: '@:{lang#props.cell.share}',
        type: Props['@:{eprops#table.cell.share}'],
        '@:{dock.top}': 1,
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
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        min: 0,
        max: () => Const["@:{const#to.unit}"](10),
        '@:{is.scale.and.unit.field}': 1,
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
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        tip: '@:{lang#props.cell.size}',
        type: Props["@:{eprops#table.cell.size}"],
        '@:{dock.top}': 1,
        //'@:{auto.height}': 1,
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        tip: '@:{lang#props.table.cell.border}',
        type: Props["@:{eprops#table.cell.border}"],
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        tip: '@:{lang#props.cell.operate}',
        type: Props["@:{eprops#table.cell.operate}"],
        '@:{dock.top}': 1,
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        type: Props["@:{eprops#table.cell.content}"],
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
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