/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/repeat/designer",["5c","../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../6p"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let normal_1 = require("../6p");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/repeat/dshow"
        });
    }
}).static({
    type: 'repeat',
    title: 'q8',
    icon: '&#xe78f;',
    '_oG': enum_1['mb'] |
        enum_1['mc'] |
        enum_1['me'] |
        enum_1['mf'],
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_m2'(x, y) {
        return {
            height: const_1['l3'](100),
            alpha: 1,
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            rotate: 0,
            width: const_1['l3'](200),
            tfs: const_1['l3'](14),
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
                fields: []
            },
        };
    },
    props: [{
            key: 'tfs',
            '_nA': 1,
        }, {
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nR',
            type: props_1["l2"],
            key: 'width',
            '_nA': 1,
            min: () => 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            '_nA': 1,
            type: props_1["l2"],
            min: () => 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nT',
            type: props_1["l2"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            tip: 'nU',
            key: 'alpha',
            type: props_1["l2"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            type: props_1["ms"],
            '_py'(props) {
                return !props.bind.url && !props.image;
            }
        }, {
            tip: 'p6',
            key: 'webUrl',
            type: props_1['ma'],
            json: 1,
            '_py'(props) {
                return !props.bind.url && !props.image;
            },
        }, {
            type: props_1["ms"],
            '_py'(props) {
                return !props.bind.url && !props.webUrl;
            }
        }, {
            tip: 'p7',
            key: 'image',
            type: props_1["l8"],
            write(v, props, e) {
                e.width = const_1["l3"](e.width);
                e.height = const_1["l3"](e.height);
                props.imageWidth = transform_1["m_"](e.width);
                props.imageHeight = transform_1["m_"](e.height);
                return v;
            },
            '_py'(props) {
                return !props.bind.url && config('getImageUrl') && !props.webUrl;
            },
            json: 1
        }, {
            type: props_1["ms"],
            '_py'(props) {
                return !props.image && config('getFieldUrl') && !props.webUrl;
            }
        }, {
            tip: 'nW',
            key: 'bind',
            type: props_1["mb"],
            json: 1,
            max: 1,
            '_py'(props) {
                return !props.image && config('getFieldUrl') && !props.webUrl;
            }
        }, {
            type: props_1["ms"],
            '_py'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
        }, {
            tip: 'qQ',
            key: 'repeat',
            type: props_1["l9"],
            '_py'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
            items: [{
                    text: 'qV',
                    value: 'repeat'
                }, {
                    text: 'qT',
                    value: 'repeat-x'
                }, {
                    text: 'qU',
                    value: 'repeat-y'
                }, {
                    text: 'qR',
                    value: 'full'
                }, {
                    text: 'qS',
                    value: 'no-repeat'
                }],
            json: 1
        }, {
            tip: 'q5',
            key: 'radius',
            '_nA': 1,
            type: props_1["l2"],
            min: 0,
            json: 1,
            read: transform_1["l5"],
            write: transform_1["m_"],
            fixed: const_1["mI"],
            step: const_1["mH"],
            '_py'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
        }, {
            tip: 'qW',
            key: 'imageWidth',
            '_nA': 1,
            type: props_1["l2"],
            min: 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_py'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1
        }, {
            tip: 'qX',
            key: 'imageHeight',
            '_nA': 1,
            type: props_1["l2"],
            min: 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_py'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1
        }, {
            tip: 'qY',
            key: 'backgroundXOffset',
            '_nA': 1,
            type: props_1["l2"],
            min: () => -const_1['l3'](const_1['mj']),
            max: () => const_1['l3'](const_1['mj']),
            step: const_1["mH"],
            fixed: const_1["mI"],
            '_py'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1
        }, {
            tip: 'qZ',
            key: 'backgroundYOffset',
            '_nA': 1,
            type: props_1["l2"],
            min: () => -const_1['l3'](const_1['mk']),
            max: () => const_1['l3'](const_1['mk']),
            step: const_1["mH"],
            fixed: const_1["mI"],
            '_py'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1
        }, {
            type: props_1["ms"]
        }, {
            tip: 'n2',
            type: props_1["mm"],
            key: 'help'
        }, {
            tip: 'n3',
            key: 'ename',
            type: props_1["ma"],
            json: 1
        }, {
            tip: 'n4',
            key: 'locked',
            type: props_1["l4"],
            free: true,
            json: 1
        }]
});

});