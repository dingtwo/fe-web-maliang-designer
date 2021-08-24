/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/form-dropdown/designer",["51","../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


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
            view: "5m/form-dropdown/index"
        });
    }
}).static({
    type: 'form-dropdown',
    title: 'jP',
    icon: '&#xe6e4;',
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
            height: const_1['ge'](25),
            alpha: 1,
            text: '',
            letterspacing: 0,
            inputName: guid('rd-dropdown-'),
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            width: const_1['ge'](200),
            markAs: '',
            className: '',
            multipleSelect: false,
            items: [{
                    text: '选项',
                    disabled: false,
                    checked: true,
                    value: 'dropdown'
                }],
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
            tip: 'jQ',
            key: 'markAs',
            type: props_1["gm"],
            json: 1
        }, {
            tip: 'jR',
            key: 'className',
            type: props_1["gm"],
            json: 1
        }, {
            tip: 'jS',
            key: 'multipleSelect',
            type: props_1['gf'],
            write(v, props) {
                if (!v) {
                    let { items } = props;
                    let findSelect;
                    for (let e of items) {
                        if (e.checked) {
                            if (findSelect) {
                                e.checked = false;
                            }
                            else {
                                findSelect = 1;
                            }
                        }
                    }
                    if (!findSelect) {
                        items[0].checked = true;
                    }
                }
                return v;
            },
            json: 1
        }, {
            type: props_1["gE"]
        }, {
            key: 'items',
            type: props_1['gP'],
            json: 1,
            mutual(props) {
                return props.multipleSelect;
            }
        }, {
            type: props_1["gE"]
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
            tip: 'ir',
            key: 'letterspacing',
            type: props_1["gd"],
            min: 0,
            '_hM': 1,
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