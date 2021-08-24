/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/calendar/designer",["../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


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
            view: "5m/calendar/index"
        });
    }
}).static({
    type: 'calendar',
    title: 'iA',
    icon: '&#xe65c;',
    '_iV': enum_1['gn'] |
        enum_1['go'] |
        enum_1['gq'],
    '_iy': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_hd'(x, y) {
        return {
            alpha: 1,
            width: const_1['ge'](300),
            height: const_1['ge'](180),
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            theadFontsize: const_1['ge'](16),
            tbodyFontsize: const_1['ge'](14),
            theadRowBackground: '#ffda95',
            weekStart: 0,
            locked: false
        };
    },
    props: [{
            tip: 'h1',
            type: props_1["gd"],
            key: 'x',
            step: const_1["gT"],
            fixed: const_1["gU"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            '_hM': 1,
            json: 1
        }, {
            tip: 'h2',
            type: props_1["gd"],
            key: 'y',
            step: const_1["gT"],
            fixed: const_1["gU"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            '_hM': 1,
            json: 1
        }, {
            tip: 'h3',
            type: props_1["gd"],
            key: 'width',
            min: () => const_1['ge'](300),
            step: const_1["gT"],
            fixed: const_1["gU"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            '_hM': 1,
            json: 1
        }, {
            tip: 'h4',
            key: 'height',
            type: props_1["gd"],
            min: () => const_1['ge'](180),
            step: const_1["gT"],
            fixed: const_1["gU"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            '_hM': 1,
            json: 1
        }, {
            tip: 'h5',
            type: props_1["gd"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            type: props_1["gE"]
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
            tip: 'iB',
            min: () => const_1["ge"](12),
            max: () => const_1["ge"](100),
            '_hM': 1,
            key: 'theadFontsize',
            type: props_1["gd"],
            step: const_1["gT"],
            fixed: const_1["gU"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'iC',
            key: 'theadRowBackground',
            type: props_1["ge"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: 'iD',
            min: () => const_1["ge"](12),
            max: () => const_1["ge"](100),
            '_hM': 1,
            step: const_1["gT"],
            fixed: const_1["gU"],
            key: 'tbodyFontsize',
            type: props_1["gd"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'iE',
            key: 'weekStart',
            json: 1,
            type: props_1['gk'],
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