/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/video/designer",["../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../6p"],(require,exports,module)=>{


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
            view: "61/video/index"
        });
    }
}).static({
    type: 'video',
    title: 'rf',
    icon: '&#xe640;',
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
            height: const_1['l3'](300),
            alpha: 1,
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            rotate: 0,
            width: const_1['l3'](400),
            locked: false,
            src: '',
            poster: '',
            autoplay: false,
            controls: true,
            loop: false,
            muted: false
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
            tip: 'rg',
            type: props_1["l7"],
            key: 'src',
            json: 1
        }, {
            tip: 'rh',
            type: props_1["ma"],
            key: 'poster',
            json: 1,
            '_py'(props) {
                return props.src != '';
            }
        }, {
            tip: 'ri',
            type: props_1["l4"],
            key: 'autoplay',
            json: 1,
            '_py'(props) {
                return props.src != '';
            }
        }, {
            tip: 'rj',
            type: props_1["l4"],
            key: 'loop',
            json: 1,
            '_py'(props) {
                return props.src != '';
            }
        }, {
            tip: 'rk',
            type: props_1["l4"],
            key: 'muted',
            json: 1,
            '_py'(props) {
                return props.src != '';
            }
        }, {
            tip: 'rl',
            type: props_1["l4"],
            key: 'controls',
            json: 1,
            '_py'(props) {
                return props.src != '';
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