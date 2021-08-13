/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/barcode/designer",["5c","../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../../5r/barcode","../6p"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let barcode_1 = require("../../5r/barcode");
let normal_1 = require("../6p");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/barcode/dshow"
        });
    }
}).static({
    type: 'barcode',
    title: 'nO',
    icon: '&#xe6c8;',
    //元素在设计器里，支持哪些修改操作。特指在设计区中能快捷修改的，非属性面板中的修改。
    '_oG': enum_1['mb'] | //允许修改宽
        enum_1['mc'] | //允许修改高
        enum_1['me'] | //允许旋转
        enum_1['mf'],
    //哪些属性参与移动，大部分元素只有x y参与移动，但对于svg元素，会有多个点参与移动
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    //'@:{allowed.total.count}':3,
    //获取元素默认的属性
    '_m2'(x, y) {
        return {
            height: const_1['l3'](80),
            alpha: 1,
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            rotate: 0,
            width: const_1['l3'](200),
            text: '',
            linewidth: 2,
            tfs: const_1['l3'](14),
            color: '#000000',
            format: 'code128',
            showText: true,
            ow: 'github.com/lindell/JsBarcode',
            help: 'github.com/xinglie/report-designer/issues/31',
            locked: false,
            bind: {
                url: '',
                id: '',
                fields: []
            },
        };
    },
    //属性面板中的控制列表
    props: [{
            key: 'tfs',
            '_nA': 1,
        }, {
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1, //最终从设计器获取数据时，是否序列化当前属性
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1,
        }, {
            tip: 'nR',
            type: props_1["l2"],
            key: 'width',
            min: () => const_1["l3"](20),
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            type: props_1["l2"],
            min: () => const_1["l3"](20),
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
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
                return !props.bind.url;
            }
        }, {
            tip: 'nV',
            key: 'text',
            type: props_1["l7"],
            json: 1,
            '_py'(props) {
                return !props.bind.url;
            }
        }, {
            type: props_1["ms"],
            '_py'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            tip: 'nW',
            key: 'bind',
            type: props_1["mb"],
            json: 1,
            max: 1,
            '_py'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            type: props_1["ms"]
        }, {
            tip: 'nX',
            key: 'format',
            type: props_1["l9"],
            items: barcode_1["_nL"],
            json: 1
        }, {
            tip: 'nY',
            key: 'showText',
            type: props_1["l4"],
            json: 1
        }, {
            tip: 'nZ',
            key: 'color',
            type: props_1["l3"],
            json: 1
        }, {
            tip: 'n0',
            key: 'linewidth',
            type: props_1["l2"],
            min: 1,
            max: 8,
            json: 1
        }, {
            type: props_1["ms"]
        }, {
            tip: 'n1',
            key: 'ow',
            type: props_1["mm"]
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