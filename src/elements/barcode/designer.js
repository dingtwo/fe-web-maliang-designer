/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/barcode/designer",["4e","../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../../4t/barcode","../5r"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let barcode_1 = require("../../4t/barcode");
let normal_1 = require("../5r");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/barcode/dshow"
        });
    }
}).static({
    type: 'barcode',
    title: 'fq',
    icon: '&#xe6c8;',
    //元素在设计器里，支持哪些修改操作。特指在设计区中能快捷修改的，非属性面板中的修改。
    '_gi': enum_1['dO'] | //允许修改宽
        enum_1['dP'] | //允许修改高
        enum_1['dR'] | //允许旋转
        enum_1['dS'],
    //哪些属性参与移动，大部分元素只有x y参与移动，但对于svg元素，会有多个点参与移动
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    //'@:{allowed.total.count}':3,
    //获取元素默认的属性
    '_eE'(x, y) {
        return {
            height: const_1['dF'](80),
            alpha: 1,
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            rotate: 0,
            width: const_1['dF'](200),
            text: '',
            linewidth: 2,
            tfs: const_1['dF'](14),
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
            '_fc': 1,
        }, {
            tip: 'fr',
            type: props_1["dE"],
            key: 'x',
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1, //最终从设计器获取数据时，是否序列化当前属性
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1,
        }, {
            tip: 'ft',
            type: props_1["dE"],
            key: 'width',
            min: () => const_1["dF"](20),
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fu',
            key: 'height',
            type: props_1["dE"],
            min: () => const_1["dF"](20),
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fv',
            type: props_1["dE"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            tip: 'fw',
            key: 'alpha',
            type: props_1["dE"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            type: props_1["d5"],
            '_ha'(props) {
                return !props.bind.url;
            }
        }, {
            tip: 'fx',
            key: 'text',
            type: props_1["dJ"],
            json: 1,
            '_ha'(props) {
                return !props.bind.url;
            }
        }, {
            type: props_1["d5"],
            '_ha'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            tip: 'fy',
            key: 'bind',
            type: props_1["dO"],
            json: 1,
            max: 1,
            '_ha'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fz',
            key: 'format',
            type: props_1["dL"],
            items: barcode_1["_fn"],
            json: 1
        }, {
            tip: 'fA',
            key: 'showText',
            type: props_1["dG"],
            json: 1
        }, {
            tip: 'fB',
            key: 'color',
            type: props_1["dF"],
            json: 1
        }, {
            tip: 'fC',
            key: 'linewidth',
            type: props_1["dE"],
            min: 1,
            max: 8,
            json: 1
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fD',
            key: 'ow',
            type: props_1["dZ"]
        }, {
            tip: 'fE',
            type: props_1["dZ"],
            key: 'help'
        }, {
            tip: 'fF',
            key: 'ename',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'fG',
            key: 'locked',
            type: props_1["dG"],
            free: true,
            json: 1
        }]
});

});