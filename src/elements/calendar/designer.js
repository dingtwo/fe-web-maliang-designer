/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/calendar/designer",["../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../5r"],(require,exports,module)=>{


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
            view: "53/calendar/index"
        });
    }
}).static({
    type: 'calendar',
    title: 'f2',
    icon: '&#xe65c;',
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
            alpha: 1,
            width: const_1['dF'](300),
            height: const_1['dF'](180),
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            rotate: 0,
            theadFontsize: const_1['dF'](16),
            tbodyFontsize: const_1['dF'](14),
            theadRowBackground: '#ffda95',
            weekStart: 0,
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
            min: () => const_1['dF'](300),
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
            min: () => const_1['dF'](180),
            step: const_1["ej"],
            fixed: const_1["ek"],
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
            tip: 'f3',
            min: () => const_1["dF"](12),
            max: () => const_1["dF"](100),
            '_fc': 1,
            key: 'theadFontsize',
            type: props_1["dE"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'f4',
            key: 'theadRowBackground',
            type: props_1["dF"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: 'f5',
            min: () => const_1["dF"](12),
            max: () => const_1["dF"](100),
            '_fc': 1,
            step: const_1["ej"],
            fixed: const_1["ek"],
            key: 'tbodyFontsize',
            type: props_1["dE"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'f6',
            key: 'weekStart',
            json: 1,
            type: props_1['dL'],
            items: [{
                    text: '星期日',
                    value: 0
                }, {
                    text: '星期一',
                    value: 1
                }, {
                    text: '星期二',
                    value: 2
                }, {
                    text: '星期三',
                    value: 3
                }, {
                    text: '星期四',
                    value: 4
                }, {
                    text: '星期五',
                    value: 5
                }, {
                    text: '星期六',
                    value: 6
                }]
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