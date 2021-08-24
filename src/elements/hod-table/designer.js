/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/hod-table/designer",["../../50/53","../../50/enum","../../50/61","../../50/54","../../5g/table","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let table_1 = require("../../5g/table");
let normal_1 = require("../6e");
let transformFields = ['width', 'height'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/hod-table/dshow",
        });
    },
}).static({
    type: 'hod-table',
    as: enum_1['gg'],
    title: 'kc',
    icon: '&#xe815;',
    '_iV': enum_1['gl'] | enum_1['gr'],
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
        let { borderwidth, borderdeed, rows } = props;
        if (!props['_j7'] || !props['_j8']) {
            props = table_1['gd'](props);
        }
        let oneBorder = const_1['ge'](1);
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
        if (borderdeed == 'separate') {
            height += 2 * (rows.length + 1) * oneBorder;
        }
        else {
            height += borderwidth;
        }
        props.width = width + borderwidth;
        props.height = height;
    },
    '_hd'(x, y) {
        let cellProps = {
            height: const_1['ge'](30),
            width: const_1['ge'](150),
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true,
            rowspan: 1,
            colspan: 1,
        };
        return {
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            //rotate: 0,
            alpha: 1,
            borderwidth: const_1['ge'](1),
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
            tip: 'h1',
            type: props_1['gd'],
            key: 'x',
            '_hM': 1,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'h2',
            type: props_1['gd'],
            key: 'y',
            '_hM': 1,
            fixed: const_1['gU'],
            step: const_1['gT'],
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
        },
        {
            tip: 'iU',
            type: props_1['gR'],
            '_ka': 1,
        },
        {
            type: props_1['gE'],
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
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
            '_hM': 1,
            type: props_1['gd'],
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
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
            type: props_1['gE'],
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            tip: 'iY',
            type: props_1['gv'],
            '_ka': 1,
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
            '_je': 1,
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