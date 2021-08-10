/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/progressbar/designer",["../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../5r"],(require,exports,module)=>{


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
            view: "53/progressbar/dshow"
        });
    }
}).static({
    type: 'progressbar',
    title: 'iD',
    icon: '&#xe689;',
    '_gi': enum_1['dO'] |
        enum_1['dP'] |
        enum_1['dR'] |
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
            height: const_1['dF'](10),
            alpha: 1,
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            rotate: 0,
            width: const_1['dF'](240),
            locked: false,
            background: '#e2e2e2',
            barcolor: '#fa742b',
            value: 50,
            radius: const_1['dF'](5),
            showText: true,
            textColor: '#000000',
            textFontsize: const_1['dF'](12),
            textFormat: '',
            bind: {
                url: '',
                id: '',
                fields: []
            },
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
            tip: 'iE',
            key: 'value',
            type: props_1['dE'],
            min: 0,
            max: 100,
            json: 1,
            fixed: 1,
            '_ha'(props) {
                return !props.bind.url;
            }
        }, {
            type: props_1["d5"],
            '_ha'(props) {
                return !props.bind.url;
            }
        }, {
            tip: 'fy',
            key: 'bind',
            type: props_1["dO"],
            json: 1,
            max: 1
        }, {
            tip: 'iF',
            type: props_1["ea"],
            key: 'textFormat',
            json: 1,
            '_ha'(props) {
                return props.bind.url;
            }
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fU',
            key: 'background',
            type: props_1['dF'],
            json: 1
        }, {
            tip: 'iG',
            key: 'barcolor',
            type: props_1['dF'],
            json: 1
        }, {
            tip: 'iH',
            key: 'radius',
            type: props_1['dE'],
            json: 1,
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            min: 0,
        }, {
            tip: 'fA',
            key: 'showText',
            json: 1,
            type: props_1['dG']
        }, {
            tip: 'fV',
            key: 'textColor',
            json: 1,
            type: props_1['dF'],
            '_ha'(props) {
                return props.showText;
            }
        }, {
            tip: 'fR',
            key: 'textFontsize',
            type: props_1["dE"],
            min: 0,
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1,
            '_ha'(props) {
                return props.showText;
            }
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