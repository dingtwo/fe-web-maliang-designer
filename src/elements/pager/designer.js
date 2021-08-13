/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/pager/designer",["../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../6p"],(require,exports,module)=>{


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
            view: "61/pager/index"
        });
    }
}).static({
    type: 'pager',
    title: 'q0',
    icon: '&#xe646;',
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
            background: '',
            height: const_1['l3'](50),
            alpha: 1,
            text: '当前第${currentPage}页，共${totalPage}页',
            //'@:{show.text}': 1,
            letterspacing: const_1['l3'](0),
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            rotate: 0,
            width: const_1['l3'](200),
            forecolor: '#000000',
            fontsize: const_1['l3'](14),
            fontfamily: 'Microsoft YaHei',
            locked: false,
            styleBold: false,
            styleUnderline: false,
            styleItalic: false,
            styleStrike: false,
            ext: {},
            hpos: 'flex-start',
            vpos: 'flex-start'
        };
    },
    props: [{
            key: 'ext',
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
            type: props_1["ms"],
        }, {
            tip: 'nV',
            key: 'text',
            type: props_1["l7"],
            //'@:{dock.top}': 1,
            json: 1,
        }, {
            tip: 'oe',
            key: 'fontsize',
            '_nA': 1,
            type: props_1["l2"],
            min: 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'of',
            key: 'fontfamily',
            type: props_1["l9"],
            items: const_1["mD"],
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
            tip: 'og',
            key: 'letterspacing',
            '_nA': 1,
            type: props_1["l2"],
            min: 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'oh',
            key: 'background',
            clear: true,
            alpha: true,
            type: props_1["l3"],
            json: 1
        }, {
            tip: 'oi',
            key: 'forecolor',
            type: props_1["l3"],
            json: 1
        }, {
            tip: 'oj',
            type: props_1["l5"],
            '_pi'(dest, props) {
                dest.styleBold = props.styleBold;
                dest.styleUnderline = props.styleUnderline;
                dest.styleItalic = props.styleItalic;
                dest.styleStrike = props.styleStrike;
                dest.styleOverline = props.styleOverline;
            }
        }, {
            tip: 'ok',
            type: props_1["l6"],
            '_pi'(dest, props) {
                dest.hpos = props.hpos;
                dest.vpos = props.vpos;
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