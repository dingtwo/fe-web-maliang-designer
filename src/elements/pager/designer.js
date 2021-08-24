/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/pager/designer",["../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let normal_1 = require("../6e");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/pager/index"
        });
    }
}).static({
    type: 'pager',
    title: 'la',
    icon: '&#xe646;',
    '_iV': enum_1['gn'] |
        enum_1['go'] |
        enum_1['gq'] |
        enum_1['gs'],
    '_iy': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_hd'(x, y) {
        return {
            background: '',
            height: const_1['ge'](50),
            alpha: 1,
            text: '当前第${currentPage}页，共${totalPage}页',
            //'@:{show.text}': 1,
            letterspacing: const_1['ge'](0),
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            width: const_1['ge'](200),
            forecolor: '#000000',
            fontsize: const_1['ge'](14),
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
            tip: 'h1',
            type: props_1["gd"],
            key: 'x',
            '_hM': 1,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'h2',
            type: props_1["gd"],
            key: 'y',
            '_hM': 1,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'h3',
            type: props_1["gd"],
            key: 'width',
            '_hM': 1,
            min: () => 0,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'h4',
            key: 'height',
            '_hM': 1,
            type: props_1["gd"],
            min: () => 0,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'h5',
            type: props_1["gd"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            type: props_1["gE"],
        }, {
            tip: 'h7',
            key: 'text',
            type: props_1["gi"],
            //'@:{dock.top}': 1,
            json: 1,
        }, {
            tip: 'ip',
            key: 'fontsize',
            '_hM': 1,
            type: props_1["gd"],
            min: 0,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'iq',
            key: 'fontfamily',
            type: props_1["gk"],
            items: const_1["gP"],
            json: 1
        }, {
            tip: 'h6',
            key: 'alpha',
            type: props_1["gd"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: 'ir',
            key: 'letterspacing',
            '_hM': 1,
            type: props_1["gd"],
            min: 0,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'is',
            key: 'background',
            clear: true,
            alpha: true,
            type: props_1["ge"],
            json: 1
        }, {
            tip: 'it',
            key: 'forecolor',
            type: props_1["ge"],
            json: 1
        }, {
            tip: 'iu',
            type: props_1["gg"],
            '_jx'(dest, props) {
                dest.styleBold = props.styleBold;
                dest.styleUnderline = props.styleUnderline;
                dest.styleItalic = props.styleItalic;
                dest.styleStrike = props.styleStrike;
                dest.styleOverline = props.styleOverline;
            }
        }, {
            tip: 'iv',
            type: props_1["gh"],
            '_jx'(dest, props) {
                dest.hpos = props.hpos;
                dest.vpos = props.vpos;
            }
        }, {
            type: props_1["gE"]
        }, {
            tip: 'id',
            key: 'ename',
            type: props_1["gm"],
            json: 1
        }, {
            tip: 'ie',
            key: 'locked',
            type: props_1["gf"],
            free: true,
            json: 1
        }]
});

});