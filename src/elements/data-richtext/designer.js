/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/data-richtext/designer",["4e","../../4d/4g","../../4d/5e","../../4d/4h","../5r","../../4d/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
let enum_1 = require("../../4d/enum");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/data-richtext/dshow"
        });
    }
}).static({
    type: 'data-richtext',
    title: 'g2',
    icon: '&#xe642;',
    '_fV': {
        root: 1
    },
    '_gi': enum_1['dO'] |
        enum_1['dS'],
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eE'(x, y) {
        return {
            background: '',
            height: const_1['dF'](30),
            alpha: 1,
            text: '',
            tfs: const_1['dF'](14),
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            width: const_1['dF'](300),
            bind: {
                url: '',
                id: '',
                fields: []
            }
        };
    },
    props: [{
            key: 'tfs',
            '_fc': 1,
        }, {
            key: 'height',
            '_fc': 1,
        }, {
            tip: 'fr',
            type: props_1["dE"],
            key: 'x',
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1,
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1,
        }, {
            tip: 'ft',
            type: props_1["dE"],
            key: 'width',
            '_fc': 1,
            min: () => 0,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
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
        }, {
            tip: 'fy',
            key: 'bind',
            type: props_1["dO"],
            json: 1,
            max: 1,
            '_ha'(props) {
                return config('getFieldUrl');
            }
        }, {
            type: props_1["d5"],
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