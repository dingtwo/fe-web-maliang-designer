/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/form-input/designer",["../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


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
            view: "5m/form-input/index",
        });
    },
}).static({
    type: 'form-input',
    title: 'jT',
    icon: '&#xe6dc;',
    '_iV': enum_1['gn'] |
        enum_1['go'] |
        enum_1['gq'],
    '_iy': [
        {
            key: 'x',
            use: 'x',
        },
        {
            key: 'y',
            use: 'y',
        },
    ],
    '_hd'(x, y) {
        return {
            background: '',
            height: const_1['ge'](25),
            alpha: 1,
            text: '',
            placeholder: '',
            letterspacing: 0,
            markAs: '',
            className: '',
            multiline: false,
            inputName: '',
            textAlign: 'left',
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            width: const_1['ge'](200),
            forecolor: '#000000',
            fontsize: const_1['ge'](14),
            fontfamily: 'Microsoft YaHei',
            locked: false,
            help: 'github.com/xinglie/report-designer/issues/39',
        };
    },
    props: [
        {
            tip: 'h1',
            type: props_1['gd'],
            key: 'x',
            '_hM': 1,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'h2',
            type: props_1['gd'],
            key: 'y',
            '_hM': 1,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'h3',
            type: props_1['gd'],
            key: 'width',
            '_hM': 1,
            min: () => 0,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'h4',
            key: 'height',
            '_hM': 1,
            type: props_1['gd'],
            min: () => 0,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'h5',
            type: props_1['gd'],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1,
        },
        {
            tip: 'h6',
            key: 'alpha',
            type: props_1['gd'],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1,
        },
        {
            type: props_1['gE'],
        },
        {
            tip: 'jU',
            key: 'placeholder',
            type: props_1['gm'],
            json: 1,
        },
        {
            tip: 'jV',
            key: 'text',
            type({ multiline }) {
                return multiline ? props_1['gi'] : props_1['gm'];
            },
            '_kH': 1,
            json: 1,
        },
        {
            tip: 'jC',
            key: 'inputName',
            type: props_1['gm'],
            json: 1,
        },
        {
            tip: 'jQ',
            key: 'markAs',
            type: props_1['gm'],
            json: 1,
        },
        {
            tip: 'jR',
            key: 'className',
            type: props_1['gm'],
            json: 1,
        },
        {
            tip: 'jW',
            key: 'multiline',
            type: props_1['gf'],
            json: 1,
        },
        {
            type: props_1['gE'],
        },
        {
            tip: 'jX',
            key: 'textAlign',
            type: props_1['gN'],
            json: 1,
        },
        {
            tip: 'ip',
            key: 'fontsize',
            '_hM': 1,
            type: props_1['gd'],
            min: 0,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'iq',
            key: 'fontfamily',
            type: props_1['gk'],
            items: const_1['gP'],
            json: 1,
        },
        {
            tip: 'ir',
            key: 'letterspacing',
            '_hM': 1,
            type: props_1['gd'],
            min: 0,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            json: 1,
        },
        {
            tip: 'it',
            key: 'forecolor',
            type: props_1['ge'],
            json: 1,
        },
        {
            type: props_1['gE'],
        },
        // {
        //   tip: '@:{lang#props.help}',
        //   type: Props['@:{eprops#link}'],
        //   key: 'help',
        // },
        {
            tip: 'id',
            key: 'ename',
            type: props_1['gm'],
            json: 1,
        },
        {
            tip: 'ie',
            key: 'locked',
            type: props_1['gf'],
            free: true,
            json: 1,
        },
    ],
});

});