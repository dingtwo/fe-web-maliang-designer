/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/repeat/designer",["51","../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


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
            view: "5m/repeat/dshow",
        });
    },
}).static({
    type: 'repeat',
    title: 'li',
    icon: '&#xe78f;',
    '_iV': enum_1['gn'] |
        enum_1['go'] |
        enum_1['gq'] |
        enum_1['gr'],
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
            height: const_1['ge'](100),
            alpha: 1,
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            width: const_1['ge'](200),
            tfs: const_1['ge'](14),
            radius: 0,
            image: '',
            webUrl: '',
            repeat: 'repeat',
            imageWidth: 0,
            imageHeight: 0,
            backgroundXOffset: 0,
            backgroundYOffset: 0,
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
            '_jN'(props) {
                return !props.bind.url && !props.image;
            },
        },
        {
            tip: 'kg',
            key: 'webUrl',
            type: props_1['gm'],
            json: 1,
            '_jN'(props) {
                return !props.bind.url && !props.image;
            },
        },
        {
            type: props_1['gE'],
            '_jN'(props) {
                return !props.bind.url && !props.webUrl;
            },
        },
        {
            tip: 'kh',
            key: 'image',
            type: props_1['gj'],
            write(v, props, e) {
                e.width = const_1['ge'](e.width);
                e.height = const_1['ge'](e.height);
                props.imageWidth = transform_1['gl'](e.width);
                props.imageHeight = transform_1['gl'](e.height);
                return v;
            },
            '_jN'(props) {
                return !props.bind.url && config('getImageUrl') && !props.webUrl;
            },
            json: 1,
        },
        {
            type: props_1['gE'],
            '_jN'(props) {
                return !props.image && config('getFieldUrl') && !props.webUrl;
            },
        },
        {
            tip: 'h8',
            key: 'bind',
            type: props_1['gn'],
            json: 1,
            max: 1,
            '_jN'(props) {
                return !props.image && config('getFieldUrl') && !props.webUrl;
            },
        },
        {
            type: props_1['gE'],
            '_jN'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
        },
        {
            tip: 'k1',
            key: 'repeat',
            type: props_1['gk'],
            '_jN'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
            items: [
                {
                    text: 'k6',
                    value: 'repeat',
                },
                {
                    text: 'k4',
                    value: 'repeat-x',
                },
                {
                    text: 'k5',
                    value: 'repeat-y',
                },
                {
                    text: 'k2',
                    value: 'full',
                },
                {
                    text: 'k3',
                    value: 'no-repeat',
                },
            ],
            json: 1,
        },
        {
            tip: 'lf',
            key: 'radius',
            '_hM': 1,
            type: props_1['gd'],
            min: 0,
            json: 1,
            read: transform_1['gg'],
            write: transform_1['gl'],
            fixed: const_1['gU'],
            step: const_1['gT'],
            '_jN'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
        },
        {
            tip: 'k7',
            key: 'imageWidth',
            '_hM': 1,
            type: props_1['gd'],
            min: 0,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_jN'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1,
        },
        {
            tip: 'k8',
            key: 'imageHeight',
            '_hM': 1,
            type: props_1['gd'],
            min: 0,
            fixed: const_1['gU'],
            step: const_1['gT'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_jN'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1,
        },
        {
            tip: 'k9',
            key: 'backgroundXOffset',
            '_hM': 1,
            type: props_1['gd'],
            min: () => -const_1['ge'](const_1['gv']),
            max: () => const_1['ge'](const_1['gv']),
            step: const_1['gT'],
            fixed: const_1['gU'],
            '_jN'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1,
        },
        {
            tip: 'l_',
            key: 'backgroundYOffset',
            '_hM': 1,
            type: props_1['gd'],
            min: () => -const_1['ge'](const_1['gw']),
            max: () => const_1['ge'](const_1['gw']),
            step: const_1['gT'],
            fixed: const_1['gU'],
            '_jN'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
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