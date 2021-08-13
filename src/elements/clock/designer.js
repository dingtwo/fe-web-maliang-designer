/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/clock/designer",["../../5b/5e","../../5b/6c","../../5b/5f","../6p","../../5b/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../5b/5e");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let normal_1 = require("../6p");
let enum_1 = require("../../5b/enum");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/clock/index"
        });
    }
}).static({
    type: 'clock',
    title: 'oE',
    icon: '&#xe7f1;',
    '_oG': enum_1['ma'] |
        enum_1['mj'],
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
            width: const_1['l3'](150),
            height: const_1['l3'](150),
            dialColor: '#00000040',
            handleColor: '#ffffff',
            markColor: '#ffffff80',
            x: const_1['l3'](x),
            y: const_1['l3'](y),
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
            min: () => const_1['l3'](100),
            max: () => const_1['l3'](400),
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
            min: () => const_1['l3'](100),
            max: () => const_1['l3'](400),
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
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
            type: props_1["ms"]
        }, {
            tip: 'oF',
            key: 'dialColor',
            type: props_1["l3"],
            alpha: true,
            json: 1
        }, {
            tip: 'oG',
            key: 'handleColor',
            type: props_1["l3"],
            alpha: true,
            json: 1
        }, {
            tip: 'oH',
            key: 'markColor',
            type: props_1["l3"],
            alpha: true,
            json: 1
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