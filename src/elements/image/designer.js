/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/image/designer",["5c","../../5b/6c","../../5b/5f","../6p","../../5b/5e","../../5b/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let normal_1 = require("../6p");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/image/dshow"
        });
    }
}).static({
    type: 'image',
    title: 'p5',
    icon: '&#xe650;',
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
            tfs: const_1['l3'](14),
            rotate: 0,
            rotateX: false,
            rotateY: false,
            width: const_1['l3'](200),
            image: '',
            webUrl: '',
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
                if (!v) {
                    e.width = 200;
                    e.height = 100;
                }
                e.width = const_1["l3"](e.width);
                e.height = const_1["l3"](e.height);
                props.width = transform_1["m_"](e.width);
                props.height = transform_1["m_"](e.height);
                return v;
            },
            json: 1,
            '_py'(props) {
                return !props.bind.url && config('getImageUrl') && !props.webUrl;
            }
        }, {
            tip: 'p8',
            type: props_1["m_"],
            key: 'image',
            '_py'(props) {
                return props.image;
            }
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
            type: props_1["ms"]
        }, {
            tip: 'p9',
            type: props_1["l4"],
            key: 'rotateX',
            json: 1
        }, {
            tip: 'q_',
            type: props_1["l4"],
            key: 'rotateY',
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