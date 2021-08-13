/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/rod/designer",["../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../6p"],(require,exports,module)=>{


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
            view: "61/rod/index"
        });
    }
}).static({
    type: 'rod',
    title: 'ra',
    icon: '&#xe6a2;',
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
    '_m3'(props) {
        props.text = transform_1["l5"](props.width);
    },
    '_m2'(x, y) {
        return {
            height: const_1['l3'](14),
            alpha: 1,
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            rotate: 0,
            textRotate: 0,
            startBorder: true,
            endBorder: true,
            width: const_1['l3'](400),
            linetype: 'solid',
            color: '#000000',
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
            tip: 'qc',
            type: props_1["l2"],
            key: 'width',
            '_nA': 1,
            min: () => 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            key: 'text',
            '_pi'(dest, props) {
                dest.text = transform_1["l5"](props.width);
            }
        }, {
            tip: 'nT',
            type: props_1["l2"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            tip: 'rb',
            type: props_1["l2"],
            key: 'textRotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            tip: 'rc',
            type: props_1["l4"],
            key: 'startBorder',
            json: 1
        }, {
            tip: 'rd',
            type: props_1["l4"],
            key: 'endBorder',
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
            tip: 'nS',
            key: 'height',
            '_nA': 1,
            type: props_1["l2"],
            min: () => const_1["l3"](4),
            max: () => const_1["l3"](100),
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'qd',
            key: 'linetype',
            type: props_1["l9"],
            items: const_1['mE'],
            json: 1
        }, {
            tip: 'qe',
            key: 'color',
            type: props_1["l3"],
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