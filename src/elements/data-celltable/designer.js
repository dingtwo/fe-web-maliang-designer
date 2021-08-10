/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/data-celltable/designer",["4e","../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../../4t/cell","../../4t/table","../5r"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let cell_1 = require("../../4t/cell");
let table_1 = require("../../4t/table");
let normal_1 = require("../5r");
let { mix } = magix_1;
let transformFields = ['width', 'height', 'paddingLeft', 'paddingTop', 'paddingBottom', 'paddingRight', 'textFontsize', 'textLetterspacing'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/data-celltable/dshow"
        });
    }
}).static({
    type: 'data-celltable',
    title: 'gk',
    as: enum_1['dJ'],
    icon: '&#xe63c;',
    '_gi': enum_1['dM'] |
        enum_1['dR'] |
        enum_1['dS'],
    '_fV': {
        root: 1,
        'data-dtable': 1,
        'hod-col-table': 1
    },
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eF'(props) {
        table_1["dE"](props, true);
        let { borderwidth, borderdeed } = props;
        if (!props['_hu'] ||
            !props['_hv']) {
            props = table_1["dE"](props);
        }
        let sizes = table_1["dF"](props);
        let height = 0, width = 0;
        for (let w of sizes["_hw"]) {
            width += w;
        }
        for (let h of sizes["_hx"]) {
            height += h;
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        let bw = borderwidth;
        if (borderdeed == 'separate') {
            let sizes = table_1["dF"](props);
            height += 2 * const_1['dF'](sizes["_hx"].length + 1);
            width += 2 * const_1['dF'](sizes["_hw"].length + 1);
        }
        else {
            height += bw;
            width += bw;
        }
        props.width = width;
        props.height = height;
    },
    '_ht'(props) {
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
    '_eE'(x, y) {
        let cellProps = mix({
            height: const_1['dF'](30),
            width: const_1['dF'](150),
            rowspan: 1,
            colspan: 1,
            paddingLeft: const_1['dF'](5),
            paddingTop: const_1['dF'](5),
            paddingRight: const_1['dF'](5),
            paddingBottom: const_1['dF'](5),
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true,
            hpos: 'flex-start',
            vpos: 'flex-start',
            alpha: 1,
            type: 'text'
        }, cell_1.text);
        cellProps.textFontsize = const_1['dF'](cellProps.textFontsize);
        return {
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            rotate: 0,
            alpha: 1,
            borderwidth: const_1['dF'](1),
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
            '_gV'(dest, { rows }) {
                transform_1['dU'](dest, rows, transformFields);
            },
            '_fb'({ rows }, toUnit) {
                transform_1['dV'](rows, toUnit, transformFields);
            },
            '_ga'(props, step, dest) {
                transform_1['dT'](props, step, transformFields, dest);
            }
        }, {
            key: 'bind',
            json: 1
        }, {
            tip: 'fr',
            type: props_1["dE"],
            key: 'x',
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'ft',
            key: 'width',
            read: transform_1["dH"],
            type: props_1["dQ"],
            json: 1
        }, {
            tip: 'fu',
            key: 'height',
            read: transform_1["dH"],
            type: props_1["dQ"],
            json: 1
        }, {
            tip: 'fv',
            type: props_1["dE"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            tip: 'gl',
            type: props_1['eh'],
            '_hy': 1,
        }, {
            type: props_1['d5']
        }, {
            tip: 'fw',
            key: 'alpha',
            type: props_1["dE"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: 'fY',
            key: 'borderwidth',
            type: props_1["dE"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            min: 0,
            max: () => const_1["dF"](10),
            '_fc': 1,
            json: 1
        }, {
            tip: 'fZ',
            key: 'bordertype',
            type: props_1["dL"],
            items: const_1['eg'],
            json: 1
        }, {
            tip: 'f0',
            key: 'bordercolor',
            type: props_1["dF"],
            json: 1
        }, {
            tip: 'gm',
            key: 'borderdeed',
            type: props_1["dL"],
            items: [{
                    text: 'gn',
                    value: 'collapse'
                }, {
                    text: 'go',
                    value: 'separate'
                }],
            json: 1
        }, {
            type: props_1["d5"],
            '_ha'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: 'gp',
            type: props_1["dW"],
            '_hy': 1,
            //'@:{auto.height}': 1,
            '_ha'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: 'gq',
            type: props_1["d9"],
            '_ha'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: 'gr',
            type: props_1["dS"],
            '_hy': 1,
            '_ha'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["d5"],
            '_ha'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["d6"],
            '_ha'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fE',
            type: props_1["dZ"],
            key: 'help'
        }, {
            tip: 'fF',
            key: 'ename',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'fG',
            key: 'locked',
            type: props_1["dG"],
            free: true,
            json: 1
        }]
});

});