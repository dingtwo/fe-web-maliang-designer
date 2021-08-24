/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/rect/designer",["../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


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
            view: "5m/rect/index"
        });
    }
}).static({
    type: 'rect',
    title: 'lh',
    icon: '&#xe6c7;',
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
            fillcolor: '',
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            width: const_1['ge'](200),
            height: const_1['ge'](100),
            alpha: 1,
            borderwidth: const_1['ge'](1),
            bordertype: 'solid',
            bordercolor: '#000000',
            radius: 0,
            locked: false
        };
    },
    props: [{
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
            tip: 'iw',
            key: 'borderwidth',
            '_hM': 1,
            type: props_1["gd"],
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            min: 0,
            json: 1
        }, {
            tip: 'ix',
            key: 'bordertype',
            type: props_1["gk"],
            items: const_1['gQ'],
            json: 1
        }, {
            tip: 'iy',
            key: 'bordercolor',
            type: props_1["ge"],
            json: 1
        }, {
            tip: 'iO',
            key: 'fillcolor',
            clear: true,
            alpha: true,
            type: props_1["ge"],
            json: 1
        }, {
            tip: 'lf',
            key: 'radius',
            '_hM': 1,
            type: props_1["gd"],
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            min: 0,
            json: 1
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