/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/batch-qrcode/designer",["51","../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let normal_1 = require("../6e");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/batch-qrcode/dshow",
        });
    },
}).static({
    type: 'batch-qrcode',
    title: 'ik',
    icon: '&#xe61c;',
    '_iV': enum_1['gm'] |
        enum_1['gq'] |
        enum_1['gr'] |
        enum_1['gv'],
    '_ix': {
        //只允许放设计区
        root: 1,
    },
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
            height: const_1['ge'](150),
            alpha: 1,
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            width: const_1['ge'](150),
            hspace: const_1['ge'](30),
            vspace: const_1['ge'](30),
            tfs: const_1['ge'](14),
            text: '',
            locked: false,
            help: 'github.com/xinglie/report-designer/issues/31',
            bind: {
                url: '',
                id: '',
                fields: [],
            },
        };
    },
    props: [
        {
            key: 'tfs',
            '_hM': 1,
        },
        {
            tip: 'h1',
            type: props_1['gd'],
            key: 'x',
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            json: 1,
        },
        {
            tip: 'h2',
            type: props_1['gd'],
            key: 'y',
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            json: 1,
        },
        {
            tip: 'h3',
            type: props_1['gd'],
            key: 'width',
            min: () => const_1['ge'](20),
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            json: 1,
        },
        {
            tip: 'h4',
            key: 'height',
            type: props_1['gd'],
            min: () => const_1['ge'](20),
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
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
            '_jN'(props) {
                return !props.text && config('getFieldUrl');
            },
        },
        {
            tip: 'h8',
            key: 'bind',
            type: props_1['gn'],
            json: 1,
            max: 1,
            '_jN'(props) {
                return !props.text && config('getFieldUrl');
            },
        },
        {
            type: props_1['gE'],
        },
        {
            tip: 'ih',
            type: props_1['gd'],
            json: 1,
            key: 'hspace',
            min: 0,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            max: () => const_1['ge'](100),
        },
        {
            tip: 'ii',
            type: props_1['gd'],
            json: 1,
            key: 'vspace',
            min: 0,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            max: () => const_1['ge'](100),
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