/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/clock/designer",["../../4d/4g","../../4d/5e","../../4d/4h","../5r","../../4d/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../4d/4g");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
let enum_1 = require("../../4d/enum");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/clock/index"
        });
    }
}).static({
    type: 'clock',
    title: 'gg',
    icon: '&#xe7f1;',
    '_gi': enum_1['dN'] |
        enum_1['dW'],
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eE'(x, y) {
        return {
            alpha: 1,
            width: const_1['dF'](150),
            height: const_1['dF'](150),
            dialColor: '#00000040',
            handleColor: '#ffffff',
            markColor: '#ffffff80',
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            locked: false
        };
    },
    props: [{
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
            type: props_1["dE"],
            key: 'width',
            min: () => const_1['dF'](100),
            max: () => const_1['dF'](400),
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fu',
            key: 'height',
            type: props_1["dE"],
            min: () => const_1['dF'](100),
            max: () => const_1['dF'](400),
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
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
            type: props_1["d5"]
        }, {
            tip: 'gh',
            key: 'dialColor',
            type: props_1["dF"],
            alpha: true,
            json: 1
        }, {
            tip: 'gi',
            key: 'handleColor',
            type: props_1["dF"],
            alpha: true,
            json: 1
        }, {
            tip: 'gj',
            key: 'markColor',
            type: props_1["dF"],
            alpha: true,
            json: 1
        }, {
            type: props_1["d5"]
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