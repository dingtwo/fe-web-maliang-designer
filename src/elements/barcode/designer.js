/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/barcode/designer",["51","../../50/53","../../50/enum","../../50/61","../../50/54","../../5g/barcode","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let barcode_1 = require("../../5g/barcode");
let normal_1 = require("../6e");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/barcode/dshow",
        });
    },
}).static({
    type: 'barcode',
    title: 'h0',
    icon: '&#xe6c8;',
    //元素在设计器里，支持哪些修改操作。特指在设计区中能快捷修改的，非属性面板中的修改。
    '_iV': enum_1['gn'] | //允许修改宽
        enum_1['go'] | //允许修改高
        enum_1['gq'] | //允许旋转
        enum_1['gr'],
    //哪些属性参与移动，大部分元素只有x y参与移动，但对于svg元素，会有多个点参与移动
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
    //'@:{allowed.total.count}':3,
    //获取元素默认的属性
    '_hd'(x, y) {
        return {
            height: const_1['ge'](80),
            alpha: 1,
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            width: const_1['ge'](200),
            text: '',
            linewidth: 2,
            tfs: const_1['ge'](14),
            color: '#000000',
            format: 'code128',
            showText: true,
            ow: 'github.com/lindell/JsBarcode',
            help: 'github.com/xinglie/report-designer/issues/31',
            locked: false,
            bind: {
                url: '',
                id: '',
                fields: [],
            },
        };
    },
    //属性面板中的控制列表
    props: [
        {
            key: 'tfs',
            '_hM': 1,
        },
        {
            tip: 'h1',
            type: props_1['gd'],
            key: 'x',
            step: const_1['gT'],
            fixed: const_1['gU'],
            read: transform_1['gg'],
            write: transform_1['gl'],
            '_hM': 1,
            json: 1, //最终从设计器获取数据时，是否序列化当前属性
        },
        {
            tip: 'h2',
            type: props_1['gd'],
            key: 'y',
            step: const_1['gT'],
            fixed: const_1['gU'],
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
            step: const_1['gT'],
            fixed: const_1['gU'],
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
            step: const_1['gT'],
            fixed: const_1['gU'],
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
                return !props.bind.url;
            },
        },
        {
            tip: 'h7',
            key: 'text',
            type: props_1['gi'],
            json: 1,
            '_jN'(props) {
                return !props.bind.url;
            },
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
            tip: 'h9',
            key: 'format',
            type: props_1['gk'],
            items: barcode_1['_hX'],
            json: 1,
        },
        {
            tip: 'i_',
            key: 'showText',
            type: props_1['gf'],
            json: 1,
        },
        {
            tip: 'ia',
            key: 'color',
            type: props_1['ge'],
            json: 1,
        },
        {
            tip: 'ib',
            key: 'linewidth',
            type: props_1['gd'],
            min: 1,
            max: 8,
            json: 1,
        },
        {
            type: props_1['gE'],
        },
        {
            tip: 'ic',
            key: 'ow',
            type: props_1['gy'],
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