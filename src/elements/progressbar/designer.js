/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/progressbar/designer",["../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../6p"],(require,exports,module)=>{


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
            view: "61/progressbar/dshow"
        });
    }
}).static({
    type: 'progressbar',
    title: 'q1',
    icon: '&#xe689;',
    '_oG': enum_1['mb'] |
        enum_1['mc'] |
        enum_1['me'] |
        enum_1['mf'],
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_m2'(x, y) {
        return {
            height: const_1['l3'](10),
            alpha: 1,
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            rotate: 0,
            width: const_1['l3'](240),
            locked: false,
            background: '#e2e2e2',
            barcolor: '#fa742b',
            value: 50,
            radius: const_1['l3'](5),
            showText: true,
            textColor: '#000000',
            textFontsize: const_1['l3'](12),
            textFormat: '',
            bind: {
                url: '',
                id: '',
                fields: []
            },
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
            min: () => 0,
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
            min: () => 0,
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
            tip: 'q2',
            key: 'value',
            type: props_1['l2'],
            min: 0,
            max: 100,
            json: 1,
            fixed: 1,
            '_py'(props) {
                return !props.bind.url;
            }
        }, {
            type: props_1["ms"],
            '_py'(props) {
                return !props.bind.url;
            }
        }, {
            tip: 'nW',
            key: 'bind',
            type: props_1["mb"],
            json: 1,
            max: 1
        }, {
            tip: 'q3',
            type: props_1["my"],
            key: 'textFormat',
            json: 1,
            '_py'(props) {
                return props.bind.url;
            }
        }, {
            type: props_1["ms"]
        }, {
            tip: 'oh',
            key: 'background',
            type: props_1['l3'],
            json: 1
        }, {
            tip: 'q4',
            key: 'barcolor',
            type: props_1['l3'],
            json: 1
        }, {
            tip: 'q5',
            key: 'radius',
            type: props_1['l2'],
            json: 1,
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            min: 0,
        }, {
            tip: 'nY',
            key: 'showText',
            json: 1,
            type: props_1['l4']
        }, {
            tip: 'oi',
            key: 'textColor',
            json: 1,
            type: props_1['l3'],
            '_py'(props) {
                return props.showText;
            }
        }, {
            tip: 'oe',
            key: 'textFontsize',
            type: props_1["l2"],
            min: 0,
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1,
            '_py'(props) {
                return props.showText;
            }
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