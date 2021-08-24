/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/data-richtext/designer",["51","../../50/53","../../50/61","../../50/54","../6e","../../50/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let normal_1 = require("../6e");
let enum_1 = require("../../50/enum");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/data-richtext/dshow"
        });
    }
}).static({
    type: 'data-richtext',
    title: 'jA',
    icon: '&#xe642;',
    '_ix': {
        root: 1
    },
    '_iV': enum_1['gn'] |
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
            background: '',
            height: const_1['ge'](30),
            alpha: 1,
            text: '',
            tfs: const_1['ge'](14),
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            width: const_1['ge'](300),
            bind: {
                url: '',
                id: '',
                fields: []
            }
        };
    },
    props: [{
            key: 'tfs',
            '_hM': 1,
        }, {
            key: 'height',
            '_hM': 1,
        }, {
            tip: 'h1',
            type: props_1["gd"],
            key: 'x',
            '_hM': 1,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1,
        }, {
            tip: 'h2',
            type: props_1["gd"],
            key: 'y',
            '_hM': 1,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1,
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
            tip: 'h6',
            key: 'alpha',
            type: props_1["gd"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            type: props_1["gE"],
        }, {
            tip: 'h8',
            key: 'bind',
            type: props_1["gn"],
            json: 1,
            max: 1,
            '_jN'(props) {
                return config('getFieldUrl');
            }
        }, {
            type: props_1["gE"],
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