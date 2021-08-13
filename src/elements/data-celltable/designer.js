/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-celltable/designer",["magix5","../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../../provider/cell","../../provider/table","../normal"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let cell_1 = require("../../provider/cell");
let table_1 = require("../../provider/table");
let normal_1 = require("../normal");
let { mix } = magix_1;
let transformFields = ['width', 'height', 'paddingLeft', 'paddingTop', 'paddingBottom', 'paddingRight', 'textFontsize', 'textLetterspacing'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/data-celltable/dshow"
        });
    }
}).static({
    type: 'data-celltable',
    title: '@:{lang#elements.data.celltable~rs}',
    as: enum_1['@:{enum#as.cells~rs}'],
    icon: '&#xe63c;',
    '@:{modifier~rs}': enum_1['@:{enum#modifier.icon~rs}'] |
        enum_1['@:{enum#modifier.rotate~rs}'] |
        enum_1['@:{enum#modifier.nomask~rs}'],
    '@:{allowed.to.hod~rs}': {
        root: 1,
        'data-dtable': 1,
        'hod-col-table': 1
    },
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '@:{update.props~rs}'(props) {
        table_1["@:{table.provider#add.ext.meta~rs}"](props, true);
        let { borderwidth, borderdeed } = props;
        if (!props['@:{row.max~rs}'] ||
            !props['@:{col.max~rs}']) {
            props = table_1["@:{table.provider#add.ext.meta~rs}"](props);
        }
        let sizes = table_1["@:{table.provider#get.sizes~rs}"](props);
        let height = 0, width = 0;
        for (let w of sizes["@:{col.widths~rs}"]) {
            width += w;
        }
        for (let h of sizes["@:{row.heights~rs}"]) {
            height += h;
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        let bw = borderwidth;
        if (borderdeed == 'separate') {
            let sizes = table_1["@:{table.provider#get.sizes~rs}"](props);
            height += 2 * const_1['@:{const#to.unit~rs}'](sizes["@:{row.heights~rs}"].length + 1);
            width += 2 * const_1['@:{const#to.unit~rs}'](sizes["@:{col.widths~rs}"].length + 1);
        }
        else {
            height += bw;
            width += bw;
        }
        props.width = width;
        props.height = height;
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
        let cellProps = mix({
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
            alpha: 1,
            type: 'text'
        }, cell_1.text);
        cellProps.textFontsize = const_1['@:{const#to.unit~rs}'](cellProps.textFontsize);
        return {
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            rotate: 0,
            alpha: 1,
            borderwidth: const_1['@:{const#to.unit~rs}'](1),
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
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.y~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'y',
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
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
        }, {
            tip: '@:{lang#props.rotate~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            tip: '@:{lang#props.cell.share~rs}',
            type: props_1['@:{eprops#table.cell.share~rs}'],
            '@:{dock.top~rs}': 1,
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
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            min: 0,
            max: () => const_1["@:{const#to.unit~rs}"](10),
            '@:{is.scale.and.unit.field~rs}': 1,
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
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: '@:{lang#props.cell.size~rs}',
            type: props_1["@:{eprops#table.cell.size~rs}"],
            '@:{dock.top~rs}': 1,
            //'@:{auto.height}': 1,
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: '@:{lang#props.table.cell.border~rs}',
            type: props_1["@:{eprops#table.cell.border~rs}"],
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: '@:{lang#props.cell.operate~rs}',
            type: props_1["@:{eprops#table.cell.operate~rs}"],
            '@:{dock.top~rs}': 1,
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["@:{eprops#table.cell.content~rs}"],
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
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