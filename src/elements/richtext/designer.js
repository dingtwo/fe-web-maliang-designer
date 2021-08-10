/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/richtext/designer",["../../4d/5e","../../4d/4h","../5r","../../4d/4g","../../4d/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/richtext/dshow"
        });
    }
}).static({
    type: 'richtext',
    title: 'g2',
    icon: '&#xe663;',
    '_fV': {
        root: 1
    },
    '_gi': enum_1['dO'] |
        enum_1['dP'] |
        enum_1['dS'] |
        enum_1['dM'],
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eE'(x, y) {
        return {
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            text: '欢迎使用通用设计器',
            alpha: 1,
            splitToPages: true,
            width: const_1['dF'](680),
            height: const_1['dF'](300),
            ow: 'ckeditor.com',
            locked: false
        };
    },
    props: [{
            key: 'text',
            json: 1
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
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            min: () => const_1["dF"](200),
            type: props_1["dE"],
            json: 1
        }, {
            tip: 'fu',
            key: 'height',
            '_fc': 1,
            min: () => const_1["dF"](100),
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            type: props_1["dE"],
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
            tip: 'iM',
            key: 'splitToPages',
            type: props_1['dG'],
            json: 1
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fD',
            key: 'ow',
            type: props_1["dZ"]
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