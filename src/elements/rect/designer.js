/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/rect/designer",["../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../5r"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/rect/index"
        });
    }
}).static({
    type: 'rect',
    title: 'iJ',
    icon: '&#xe6c7;',
    '_gi': enum_1['dO'] |
        enum_1['dP'] |
        enum_1['dR'],
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eE'(x, y) {
        return {
            fillcolor: '',
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            rotate: 0,
            width: const_1['dF'](200),
            height: const_1['dF'](100),
            alpha: 1,
            borderwidth: const_1['dF'](1),
            bordertype: 'solid',
            bordercolor: '#000000',
            radius: 0,
            locked: false
        };
    },
    props: [{
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
            tip: 'fu',
            key: 'height',
            '_fc': 1,
            type: props_1["dE"],
            min: () => 0,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fv',
            type: props_1["dE"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            type: props_1["d5"]
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
            '_fc': 1,
            type: props_1["dE"],
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            min: 0,
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
            tip: 'gf',
            key: 'fillcolor',
            clear: true,
            alpha: true,
            type: props_1["dF"],
            json: 1
        }, {
            tip: 'iH',
            key: 'radius',
            '_fc': 1,
            type: props_1["dE"],
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            min: 0,
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