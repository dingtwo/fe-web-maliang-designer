/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/hod-table/designer",["../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../../provider/table","../normal"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let table_1 = require("../../provider/table");
let normal_1 = require("../normal");
let transformFields = ['width', 'height'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/hod-table/dshow",
        });
    },
}).static({
    type: 'hod-table',
    as: enum_1['@:{enum#as.hod~rs}'],
    title: '@:{lang#elements.table~rs}',
    icon: '&#xe815;',
    '@:{modifier~rs}': enum_1['@:{enum#modifier.icon~rs}'] | enum_1['@:{enum#modifier.nomask~rs}'],
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
        let { borderwidth, borderdeed, rows } = props;
        if (!props['@:{row.max~rs}'] || !props['@:{col.max~rs}']) {
            props = table_1['@:{table.provider#add.ext.meta~rs}'](props);
        }
        let oneBorder = const_1['@:{const#to.unit~rs}'](1);
        let sizes = table_1['@:{table.provider#get.sizes~rs}'](props);
        let height = 0, width = 0;
        for (let w of sizes['@:{col.widths~rs}']) {
            width += w;
        }
        for (let h of sizes['@:{row.heights~rs}']) {
            height += h;
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        if (borderdeed == 'separate') {
            height += 2 * (rows.length + 1) * oneBorder;
        }
        else {
            height += borderwidth;
        }
        props.width = width + borderwidth;
        props.height = height;
    },
    '@:{get.props~rs}'(x, y) {
        let cellProps = {
            height: const_1['@:{const#to.unit~rs}'](30),
            width: const_1['@:{const#to.unit~rs}'](150),
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true,
            rowspan: 1,
            colspan: 1,
        };
        return {
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            //rotate: 0,
            alpha: 1,
            borderwidth: const_1['@:{const#to.unit~rs}'](1),
            bordercolor: '#000000',
            borderdeed: 'collapse',
            bordertype: 'solid',
            focusRow: -1,
            focusCol: -1,
            help: '//github.com/xinglie/report-designer/issues/12',
            rows: [
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
            tip: '@:{lang#props.x~rs}',
            type: props_1['@:{eprops#number~rs}'],
            key: 'x',
            '@:{is.scale.and.unit.field~rs}': 1,
            fixed: const_1['@:{const#unit.fixed~rs}'],
            step: const_1['@:{const#unit.step~rs}'],
            read: transform_1['@:{transform#to.show.value~rs}'],
            write: transform_1['@:{transform#to.real.value~rs}'],
            json: 1,
        },
        {
            tip: '@:{lang#props.y~rs}',
            type: props_1['@:{eprops#number~rs}'],
            key: 'y',
            '@:{is.scale.and.unit.field~rs}': 1,
            fixed: const_1['@:{const#unit.fixed~rs}'],
            step: const_1['@:{const#unit.step~rs}'],
            read: transform_1['@:{transform#to.show.value~rs}'],
            write: transform_1['@:{transform#to.real.value~rs}'],
            json: 1,
        },
        {
            tip: '@:{lang#props.width~rs}',
            key: 'width',
            read: transform_1['@:{transform#to.show.value~rs}'],
            type: props_1['@:{eprops#label~rs}'],
            json: 1,
        },
        {
            tip: '@:{lang#props.height~rs}',
            key: 'height',
            read: transform_1['@:{transform#to.show.value~rs}'],
            type: props_1['@:{eprops#label~rs}'],
            json: 1,
        },
        {
            tip: '@:{lang#props.cell.share~rs}',
            type: props_1['@:{eprops#table.cell.share~rs}'],
            '@:{dock.top~rs}': 1,
        },
        {
            type: props_1['@:{eprops#spliter~rs}'],
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
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
            fixed: const_1['@:{const#unit.fixed~rs}'],
            step: const_1['@:{const#unit.step~rs}'],
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
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            tip: '@:{lang#props.cell.size~rs}',
            type: props_1['@:{eprops#table.cell.size~rs}'],
            '@:{dock.top~rs}': 1,
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            tip: '@:{lang#props.table.cell.border~rs}',
            type: props_1['@:{eprops#table.cell.border~rs}'],
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            tip: '@:{lang#props.cell.operate~rs}',
            type: props_1['@:{eprops#table.cell.operate~rs}'],
            '@:{dock.top~rs}': 1,
            '@:{elements~rs}': 1,
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
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