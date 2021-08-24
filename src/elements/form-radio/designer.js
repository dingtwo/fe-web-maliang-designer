/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/form-radio/designer",["51","../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let normal_1 = require("../6e");
let { guid } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/form-radio/index"
        });
    }
}).static({
    type: 'form-radio',
    title: 'jY',
    icon: '&#xe6ab;',
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
            background: '',
            height: const_1['ge'](50),
            alpha: 1,
            text: '',
            letterspacing: 0,
            inputName: guid('rd-radios-'),
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            width: const_1['ge'](200),
            rank: 'row',
            items: [{
                    text: '单选框',
                    disabled: false,
                    checked: true,
                    value: 'radio'
                }],
            itemSpace: const_1['ge'](10),
            textSpace: const_1['ge'](4),
            forecolor: '#000000',
            fontsize: const_1['ge'](14),
            fontfamily: 'Microsoft YaHei',
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
            tip: 'jC',
            key: 'inputName',
            type: props_1["gm"],
            json: 1
        }, {
            tip: 'jD',
            key: 'rank',
            type: props_1['gk'],
            items: [{
                    text: 'jE',
                    value: 'row'
                }, {
                    text: 'jF',
                    value: 'column'
                }],
            json: 1
        }, {
            tip: 'jG',
            key: 'itemSpace',
            '_hM': 1,
            type: props_1['gd'],
            min: 0,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'jH',
            key: 'textSpace',
            '_hM': 1,
            type: props_1['gd'],
            min: 0,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            type: props_1["gE"]
        }, {
            key: 'items',
            type: props_1['gP'],
            json: 1
        }, {
            type: props_1["gE"]
        }, {
            tip: 'ip',
            key: 'fontsize',
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
            tip: 'it',
            key: 'forecolor',
            type: props_1["ge"],
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