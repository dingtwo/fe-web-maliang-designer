/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/xsheet/designer",["../../50/61","../../50/54","../6e","../../50/53","../../50/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let normal_1 = require("../6e");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/xsheet/dshow"
        });
    }
}).static({
    type: 'xsheet',
    title: 'ly',
    icon: '&#xe600;',
    '_hh': 1,
    '_ix': {
        root: 1, //编辑区
    },
    '_iV': enum_1['gn'] |
        enum_1['go'] |
        enum_1['gq'] |
        enum_1['gr'] |
        enum_1['gl'],
    '_iy': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_hd'(x, y) {
        return {
            height: const_1['ge'](400),
            alpha: 1,
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            sheetData: null,
            //rotate: 0,
            width: const_1['ge'](500),
            locked: false,
            ow: 'github.com/mengshukeji/Luckysheet'
        };
    },
    props: [{
            key: 'sheetData',
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
            min: () => const_1["ge"](500),
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
            min: () => const_1["ge"](400),
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
        {
            tip: 'h6',
            key: 'alpha',
            type: props_1["gd"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            type: props_1["gE"]
        }, {
            tip: 'ic',
            key: 'ow',
            type: props_1["gy"]
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