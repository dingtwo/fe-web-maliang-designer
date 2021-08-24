/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/map/designer",["../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


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
            view: "5m/map/dshow"
        });
    }
}).static({
    type: 'map',
    title: 'ks',
    icon: '&#xe735;',
    '_iV': enum_1['gn'] |
        enum_1['go'] |
        enum_1['gl'] |
        enum_1['gr'],
    '_iy': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_hd'(x, y) {
        return {
            height: const_1['ge'](300),
            alpha: 1,
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            //rotate: 0,
            width: const_1['ge'](450),
            zoom: 8,
            lat: 30.36081488360812,
            lng: 120.02268238691616,
            locked: false,
            zoomCtrl: true,
            dragging: true,
            doubleClickZoom: true
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
            min: () => const_1["ge"](100),
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
            min: () => const_1["ge"](100),
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
            tip: 'kt',
            key: 'zoom',
            type: props_1["gd"],
            min: 1,
            max: 18,
            json: 1
        }, {
            tip: 'ku',
            key: 'lng',
            type: props_1["gd"],
            min: -180,
            max: 180,
            fixed: 4,
            step: 1,
            json: 1
        }, {
            tip: 'kv',
            key: 'lat',
            type: props_1["gd"],
            min: -90,
            max: 90,
            fixed: 4,
            step: 1,
            json: 1
        }, {
            tip: 'kw',
            key: 'zoomCtrl',
            type: props_1["gf"],
            json: 1
        }, {
            tip: 'kx',
            key: 'dragging',
            type: props_1["gf"],
            json: 1
        }, {
            tip: 'ky',
            key: 'doubleClickZoom',
            type: props_1["gf"],
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