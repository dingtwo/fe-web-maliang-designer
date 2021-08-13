/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/data-celltable/designer",["5c","../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../../5r/cell","../../5r/table","../6p"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let cell_1 = require("../../5r/cell");
let table_1 = require("../../5r/table");
let normal_1 = require("../6p");
let { mix } = magix_1;
let transformFields = ['width', 'height', 'paddingLeft', 'paddingTop', 'paddingBottom', 'paddingRight', 'textFontsize', 'textLetterspacing'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/data-celltable/dshow"
        });
    }
}).static({
    type: 'data-celltable',
    title: 'oI',
    as: enum_1['l7'],
    icon: '&#xe63c;',
    '_oG': enum_1['m_'] |
        enum_1['me'] |
        enum_1['mf'],
    '_oi': {
        root: 1,
        'data-dtable': 1,
        'hod-col-table': 1
    },
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_m3'(props) {
        table_1["l2"](props, true);
        let { borderwidth, borderdeed } = props;
        if (!props['_pS'] ||
            !props['_pT']) {
            props = table_1["l2"](props);
        }
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
        let bw = borderwidth;
        if (borderdeed == 'separate') {
            let sizes = table_1["l3"](props);
            height += 2 * const_1['l3'](sizes["_pV"].length + 1);
            width += 2 * const_1['l3'](sizes["_pU"].length + 1);
        }
        else {
            height += bw;
            width += bw;
        }
        props.width = width;
        props.height = height;
    },
    '_pR'(props) {
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
    '_m2'(x, y) {
        let cellProps = mix({
            height: const_1['l3'](30),
            width: const_1['l3'](150),
            rowspan: 1,
            colspan: 1,
            paddingLeft: const_1['l3'](5),
            paddingTop: const_1['l3'](5),
            paddingRight: const_1['l3'](5),
            paddingBottom: const_1['l3'](5),
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true,
            hpos: 'flex-start',
            vpos: 'flex-start',
            alpha: 1,
            type: 'text'
        }, cell_1.text);
        cellProps.textFontsize = const_1['l3'](cellProps.textFontsize);
        return {
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            rotate: 0,
            alpha: 1,
            borderwidth: const_1['l3'](1),
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
            key: 'bind',
            json: 1
        }, {
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
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
            tip: 'nT',
            type: props_1["l2"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            tip: 'oJ',
            type: props_1['mF'],
            '_pW': 1,
        }, {
            type: props_1['ms']
        }, {
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
            type: props_1["l2"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            step: const_1["mH"],
            fixed: const_1["mI"],
            min: 0,
            max: () => const_1["l3"](10),
            '_nA': 1,
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
            //'@:{auto.height}': 1,
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
            '_py'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["ms"],
            '_py'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["mt"],
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