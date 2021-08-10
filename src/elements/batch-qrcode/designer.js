/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/batch-qrcode/designer",["4e","../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../5r"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/batch-qrcode/dshow"
        });
    }
}).static({
    type: 'batch-qrcode',
    title: 'fM',
    icon: '&#xe61c;',
    '_gi': enum_1['dN'] |
        enum_1['dR'] |
        enum_1['dS'] |
        enum_1['dW'],
    '_fV': {
        root: 1
    },
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eE'(x, y) {
        return {
            height: const_1['dF'](150),
            alpha: 1,
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            rotate: 0,
            width: const_1['dF'](150),
            hspace: const_1['dF'](30),
            vspace: const_1['dF'](30),
            tfs: const_1['dF'](14),
            text: '',
            locked: false,
            help: 'github.com/xinglie/report-designer/issues/31',
            bind: {
                url: '',
                id: '',
                fields: []
            },
        };
    },
    props: [{
            key: 'tfs',
            '_fc': 1,
        }, {
            tip: 'fr',
            type: props_1["dE"],
            key: 'x',
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'ft',
            type: props_1["dE"],
            key: 'width',
            min: () => const_1["dF"](20),
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fu',
            key: 'height',
            type: props_1["dE"],
            min: () => const_1["dF"](20),
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fv',
            type: props_1["dE"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
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
            type: props_1["d5"],
            '_ha'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            tip: 'fy',
            key: 'bind',
            type: props_1["dO"],
            json: 1,
            max: 1,
            '_ha'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fJ',
            type: props_1['dE'],
            json: 1,
            key: 'hspace',
            min: 0,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            max: () => const_1['dF'](100)
        }, {
            tip: 'fK',
            type: props_1['dE'],
            json: 1,
            key: 'vspace',
            min: 0,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            max: () => const_1['dF'](100)
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