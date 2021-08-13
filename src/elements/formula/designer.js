/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/formula/designer",["../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../6p"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let normal_1 = require("../6p");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/formula/index"
        });
    }
}).static({
    type: 'formula',
    title: 'pO',
    icon: '&#xe64f;',
    '_oG': enum_1['mb'] |
        enum_1['mc'] |
        enum_1['me'] |
        enum_1['mg'],
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_m2'(x, y) {
        return {
            height: const_1['l3'](50),
            alpha: 1,
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            rotate: 0,
            width: const_1['l3'](200),
            fontsize: const_1['l3'](14),
            color: '#000000',
            text: '\\sqrt{x^2+1}',
            ow: 'www.mathjax.org',
            locked: false
        };
    },
    props: [{
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nR',
            type: props_1["l2"],
            key: 'width',
            '_nA': 1,
            min: () => const_1["l3"](20),
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            '_nA': 1,
            type: props_1["l2"],
            min: () => const_1["l3"](20),
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nT',
            type: props_1["l2"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            tip: 'oe',
            type: props_1["l2"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            fixed: const_1["mI"],
            step: const_1["mH"],
            key: 'fontsize',
            '_nA': 1,
            min: () => const_1["l3"](10),
            max: () => const_1["l3"](100),
            json: 1
        }, {
            tip: 'oi',
            key: 'color',
            type: props_1["l3"],
            json: 1
        }, {
            type: props_1["ms"]
        }, {
            tip: 'nU',
            key: 'alpha',
            type: props_1["l2"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: 'nV',
            key: 'text',
            type: props_1["l7"],
            json: 1
        }, {
            type: props_1["ms"]
        }, {
            tip: 'n1',
            key: 'ow',
            type: props_1["mm"]
        }, {
            tip: 'n3',
            key: 'ename',
            type: props_1["ma"],
            json: 1
        }, {
            tip: 'n4',
            key: 'locked',
            type: props_1["l4"],
            free: true,
            json: 1
        }]
});

});