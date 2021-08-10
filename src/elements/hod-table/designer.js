/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/hod-table/designer",["../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../../4t/table","../5r"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let table_1 = require("../../4t/table");
let normal_1 = require("../5r");
let transformFields = ['width', 'height'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/hod-table/dshow"
        });
    }
}).static({
    type: 'hod-table',
    as: enum_1['dH'],
    title: 'hE',
    icon: '&#xe815;',
    '_gi': enum_1['dM'] |
        enum_1['dS'],
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eF'(props) {
        let { borderwidth, borderdeed, rows } = props;
        if (!props['_hu'] ||
            !props['_hv']) {
            props = table_1["dE"](props);
        }
        let oneBorder = const_1['dF'](1);
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
        if (borderdeed == 'separate') {
            height += 2 * (rows.length + 1) * oneBorder;
        }
        else {
            height += borderwidth;
        }
        props.width = width + borderwidth;
        props.height = height;
    },
    '_eE'(x, y) {
        let cellProps = {
            height: const_1['dF'](30),
            width: const_1['dF'](150),
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true,
            rowspan: 1,
            colspan: 1,
        };
        return {
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            //rotate: 0,
            alpha: 1,
            borderwidth: const_1['dF'](1),
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
            tip: 'fr',
            type: props_1["dE"],
            key: 'x',
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
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
            tip: 'gl',
            type: props_1['eh'],
            '_hy': 1,
        }, {
            type: props_1['d5']
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
        {
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
            '_fc': 1,
            type: props_1["dE"],
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            min: 0,
            max: () => const_1["dF"](10),
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
            '_gC': 1,
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