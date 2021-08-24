/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/data-celltable/designer",["51","../../50/53","../../50/enum","../../50/61","../../50/54","../../5g/cell","../../5g/table","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let cell_1 = require("../../5g/cell");
let table_1 = require("../../5g/table");
let normal_1 = require("../6e");
let { mix } = magix_1;
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
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/data-celltable/dshow",
        });
    },
}).static({
    type: 'data-celltable',
    title: 'iT',
    as: enum_1['gi'],
    icon: '&#xe63c;',
    '_iV': enum_1['gl'] |
        enum_1['gq'] |
        enum_1['gr'],
    '_ix': {
        //当前元素允许添加到的其它容器，这里只允许单元格表格添加到设计区或者数据表格里
        root: 1,
        'data-dtable': 1,
        'hod-col-table': 1,
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
        table_1['gd'](props, true);
        let { borderwidth, borderdeed } = props;
        if (!props['_j7'] || !props['_j8']) {
            props = table_1['gd'](props);
        }
        let sizes = table_1['ge'](props);
        let height = 0, width = 0;
        for (let w of sizes['_j9']) {
            width += w;
        }
        for (let h of sizes['_k_']) {
            height += h;
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        let bw = borderwidth;
        if (borderdeed == 'separate') {
            let sizes = table_1['ge'](props);
            height += 2 * const_1['ge'](sizes['_k_'].length + 1);
            width += 2 * const_1['ge'](sizes['_j9'].length + 1);
        }
        else {
            height += bw;
            width += bw;
        }
        props.width = width;
        props.height = height;
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
        let cellProps = mix({
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
            type: 'text',
        }, cell_1.text);
        cellProps.textFontsize = const_1['ge'](cellProps.textFontsize);
        return {
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            alpha: 1,
            borderwidth: const_1['ge'](1),
            bordercolor: '#000000',
            bordertype: 'solid',
            borderdeed: 'collapse',
            focusRow: -1,
            focusCol: -1,
            bind: {
                url: '',
                id: '',
            },
            help: 'github.com/xinglie/report-designer/issues/25',
            rows: [
                {
                    cols: [{ ...cellProps }, { ...cellProps }],
                },
                {
                    cols: [{ ...cellProps }, { ...cellProps }],
                },
            ],
            locked: false,
        };
    },
    props: [
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
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            json: 1,
        },
        {
            tip: 'h2',
            type: props_1['gd'],
            key: 'y',
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
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
        },
        {
            tip: 'h5',
            type: props_1['gd'],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1,
        },
        {
            tip: 'iU',
            type: props_1['gR'],
            '_ka': 1,
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
            read: transform_1['gg'],
            write: transform_1['gl'],
            step: const_1['gT'],
            fixed: const_1['gU'],
            min: 0,
            max: () => const_1['ge'](10),
            '_hM': 1,
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
            type: props_1['gE'],
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            tip: 'iY',
            type: props_1['gv'],
            '_ka': 1,
            //'@:{auto.height}': 1,
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            tip: 'iZ',
            type: props_1['gI'],
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            tip: 'i0',
            type: props_1['gr'],
            '_ka': 1,
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            type: props_1['gE'],
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            type: props_1['gF'],
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
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