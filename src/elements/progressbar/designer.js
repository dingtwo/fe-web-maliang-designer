/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/progressbar/designer",["../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


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
            view: "5m/progressbar/dshow"
        });
    }
}).static({
    type: 'progressbar',
    title: 'lb',
    icon: '&#xe689;',
    '_iV': enum_1['gn'] |
        enum_1['go'] |
        enum_1['gq'] |
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
            height: const_1['ge'](10),
            alpha: 1,
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            width: const_1['ge'](240),
            locked: false,
            background: '#e2e2e2',
            barcolor: '#fa742b',
            value: 50,
            radius: const_1['ge'](5),
            showText: true,
            textColor: '#000000',
            textFontsize: const_1['ge'](12),
            textFormat: '',
            bind: {
                url: '',
                id: '',
                fields: []
            },
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
            tip: 'lc',
            key: 'value',
            type: props_1['gd'],
            min: 0,
            max: 100,
            json: 1,
            fixed: 1,
            '_jN'(props) {
                return !props.bind.url;
            }
        }, {
            type: props_1["gE"],
            '_jN'(props) {
                return !props.bind.url;
            }
        }, {
            tip: 'h8',
            key: 'bind',
            type: props_1["gn"],
            json: 1,
            max: 1
        }, {
            tip: 'ld',
            type: props_1["gK"],
            key: 'textFormat',
            json: 1,
            '_jN'(props) {
                return props.bind.url;
            }
        }, {
            type: props_1["gE"]
        }, {
            tip: 'is',
            key: 'background',
            type: props_1['ge'],
            json: 1
        }, {
            tip: 'le',
            key: 'barcolor',
            type: props_1['ge'],
            json: 1
        }, {
            tip: 'lf',
            key: 'radius',
            type: props_1['gd'],
            json: 1,
            '_hM': 1,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            min: 0,
        }, {
            tip: 'i_',
            key: 'showText',
            json: 1,
            type: props_1['gf']
        }, {
            tip: 'it',
            key: 'textColor',
            json: 1,
            type: props_1['ge'],
            '_jN'(props) {
                return props.showText;
            }
        }, {
            tip: 'ip',
            key: 'textFontsize',
            type: props_1["gd"],
            min: 0,
            '_hM': 1,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1,
            '_jN'(props) {
                return props.showText;
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