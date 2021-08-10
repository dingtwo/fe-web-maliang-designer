/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/form-input/designer",["../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../5r"],(require,exports,module)=>{


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
            view: "53/form-input/index"
        });
    }
}).static({
    type: 'form-input',
    title: 'hk',
    icon: '&#xe6dc;',
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
            background: '',
            height: const_1['dF'](25),
            alpha: 1,
            text: '',
            placeholder: '',
            letterspacing: 0,
            markAs: '',
            className: '',
            multiline: false,
            inputName: '',
            textAlign: 'left',
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            rotate: 0,
            width: const_1['dF'](200),
            forecolor: '#000000',
            fontsize: const_1['dF'](14),
            fontfamily: 'Microsoft YaHei',
            locked: false,
            help: 'github.com/xinglie/report-designer/issues/39'
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
            tip: 'hl',
            key: 'placeholder',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'hm',
            key: 'text',
            type({ multiline }) {
                return multiline ? props_1['dJ'] : props_1['dN'];
            },
            '_h5': 1,
            json: 1
        }, {
            tip: 'g4',
            key: 'inputName',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'hh',
            key: 'markAs',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'hi',
            key: 'className',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'hn',
            key: 'multiline',
            type: props_1["dG"],
            json: 1
        }, {
            type: props_1["d5"]
        }, {
            tip: 'ho',
            key: 'textAlign',
            type: props_1["ed"],
            json: 1
        }, {
            tip: 'fR',
            key: 'fontsize',
            '_fc': 1,
            type: props_1["dE"],
            min: 0,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fS',
            key: 'fontfamily',
            type: props_1["dL"],
            items: const_1["ef"],
            json: 1
        }, {
            tip: 'fT',
            key: 'letterspacing',
            '_fc': 1,
            type: props_1["dE"],
            min: 0,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fV',
            key: 'forecolor',
            type: props_1["dF"],
            json: 1
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