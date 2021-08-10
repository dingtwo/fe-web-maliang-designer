/*
    author:https://github.com/xinglie
*/
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import TableProvider from '../../provider/table';
import Normal from '../normal';
let transformFields = ['width', 'height'];
export default Normal.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
    }
}).static({
    type: 'hod-table',
    as: Enum['@:{enum#as.hod}'],
    title: '@:{lang#elements.table}',
    icon: '&#xe815;',
    '@:{modifier}': Enum['@:{enum#modifier.icon}'] |
        Enum['@:{enum#modifier.nomask}'],
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{update.props}'(props) {
        let { borderwidth, borderdeed, rows } = props;
        if (!props['@:{row.max}'] ||
            !props['@:{col.max}']) {
            props = TableProvider["@:{table.provider#add.ext.meta}"](props);
        }
        let oneBorder = Const['@:{const#to.unit}'](1);
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
        if (borderdeed == 'separate') {
            height += 2 * (rows.length + 1) * oneBorder;
        } else {
            height += borderwidth;
        }
        props.width = width + borderwidth;
        props.height = height;
    },
    '@:{get.props}'(x, y) {
        let cellProps = {
            height: Const['@:{const#to.unit}'](30),
            width: Const['@:{const#to.unit}'](150),
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true,
            rowspan: 1,
            colspan: 1,
        };
        return {
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            //rotate: 0,
            alpha: 1,
            borderwidth: Const['@:{const#to.unit}'](1),
            bordercolor: '#000000',
            borderdeed: 'collapse',
            bordertype: 'solid',
            focusRow: -1,
            focusCol: -1,
            help: '//github.com/xinglie/report-designer/issues/12',
            rows: [{
                cols: [{
                    ...cellProps,
                    elements: []
                }, {
                    ...cellProps,
                    elements: []
                }]
            }, {
                cols: [{
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
        tip: '@:{lang#props.x}',
        type: Props["@:{eprops#number}"],
        key: 'x',
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.y}',
        type: Props["@:{eprops#number}"],
        key: 'y',
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
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
    }, {
        tip: '@:{lang#props.cell.share}',
        type: Props['@:{eprops#table.cell.share}'],
        '@:{dock.top}': 1,
    }, {
        type: Props['@:{eprops#spliter}']
    }/*, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }*/, {
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
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
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
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        tip: '@:{lang#props.cell.size}',
        type: Props["@:{eprops#table.cell.size}"],
        '@:{dock.top}': 1,
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
        '@:{elements}': 1,
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