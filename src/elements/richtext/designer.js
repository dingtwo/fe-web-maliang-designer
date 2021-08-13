/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/richtext/designer",["../../5b/6c","../../5b/5f","../6p","../../5b/5e","../../5b/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let normal_1 = require("../6p");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/richtext/dshow"
        });
    }
}).static({
    type: 'richtext',
    title: 'pp',
    icon: '&#xe663;',
    '_oi': {
        root: 1
    },
    '_oG': enum_1['mb'] |
        enum_1['mc'] |
        enum_1['mf'] |
        enum_1['m_'],
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_m2'(x, y) {
        return {
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            text: '欢迎使用通用设计器',
            alpha: 1,
            splitToPages: true,
            width: const_1['l3'](680),
            height: const_1['l3'](300),
            ow: 'ckeditor.com',
            locked: false
        };
    },
    props: [{
            key: 'text',
            json: 1
        }, {
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
            key: 'width',
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            min: () => const_1["l3"](200),
            type: props_1["l2"],
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            '_nA': 1,
            min: () => const_1["l3"](100),
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            type: props_1["l2"],
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
            tip: 'r_',
            key: 'splitToPages',
            type: props_1['l4'],
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