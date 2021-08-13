/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/hod-table/designer",["../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../../5r/table","../6p"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let table_1 = require("../../5r/table");
let normal_1 = require("../6p");
let transformFields = ['width', 'height'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/hod-table/dshow"
        });
    }
}).static({
    type: 'hod-table',
    as: enum_1['l5'],
    title: 'p2',
    icon: '&#xe815;',
    '_oG': enum_1['m_'] |
        enum_1['mf'],
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_m3'(props) {
        let { borderwidth, borderdeed, rows } = props;
        if (!props['_pS'] ||
            !props['_pT']) {
            props = table_1["l2"](props);
        }
        let oneBorder = const_1['l3'](1);
        let sizes = table_1["l3"](props);
        let height = 0, width = 0;
        for (let w of sizes["_pU"]) {
            width += w;
        }
        for (let h of sizes["_pV"]) {
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
    '_m2'(x, y) {
        let cellProps = {
            height: const_1['l3'](30),
            width: const_1['l3'](150),
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true,
            rowspan: 1,
            colspan: 1,
        };
        return {
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            //rotate: 0,
            alpha: 1,
            borderwidth: const_1['l3'](1),
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
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nR',
            key: 'width',
            read: transform_1["l5"],
            type: props_1["md"],
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            read: transform_1["l5"],
            type: props_1["md"],
            json: 1
        }, {
            tip: 'oJ',
            type: props_1['mF'],
            '_pW': 1,
        }, {
            type: props_1['ms']
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
        {
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
            fixed: const_1["mI"],
            step: const_1["mH"],
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
            type: props_1["ms"],
            '_py'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: 'oN',
            type: props_1["mj"],
            '_pW': 1,
            '_py'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: 'oO',
            type: props_1["mw"],
            '_py'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: 'oP',
            type: props_1["mf"],
            '_pW': 1,
            '_o0': 1,
            '_py'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
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