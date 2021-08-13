/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/calendar/designer",["../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../6p"],(require,exports,module)=>{


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
            view: "61/calendar/index"
        });
    }
}).static({
    type: 'calendar',
    title: 'op',
    icon: '&#xe65c;',
    '_oG': enum_1['mb'] |
        enum_1['mc'] |
        enum_1['me'],
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_m2'(x, y) {
        return {
            alpha: 1,
            width: const_1['l3'](300),
            height: const_1['l3'](180),
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            rotate: 0,
            theadFontsize: const_1['l3'](16),
            tbodyFontsize: const_1['l3'](14),
            theadRowBackground: '#ffda95',
            weekStart: 0,
            locked: false
        };
    },
    props: [{
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nR',
            type: props_1["l2"],
            key: 'width',
            min: () => const_1['l3'](300),
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            type: props_1["l2"],
            min: () => const_1['l3'](180),
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nT',
            type: props_1["l2"],
            key: 'rotate',
            min: -360,
            max: 360,
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
            tip: 'oq',
            min: () => const_1["l3"](12),
            max: () => const_1["l3"](100),
            '_nA': 1,
            key: 'theadFontsize',
            type: props_1["l2"],
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'or',
            key: 'theadRowBackground',
            type: props_1["l3"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: 'os',
            min: () => const_1["l3"](12),
            max: () => const_1["l3"](100),
            '_nA': 1,
            step: const_1["mH"],
            fixed: const_1["mI"],
            key: 'tbodyFontsize',
            type: props_1["l2"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'ot',
            key: 'weekStart',
            json: 1,
            type: props_1['l9'],
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
            type: props_1["ms"]
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