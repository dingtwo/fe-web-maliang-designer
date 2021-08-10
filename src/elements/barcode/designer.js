/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/barcode/designer",["magix5","../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../../provider/barcode","../normal"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let barcode_1 = require("../../provider/barcode");
let normal_1 = require("../normal");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/barcode/dshow"
        });
    }
}).static({
    type: 'barcode',
    title: '@:{lang#elements.barcode~rs}',
    icon: '&#xe6c8;',
    //元素在设计器里，支持哪些修改操作。特指在设计区中能快捷修改的，非属性面板中的修改。
    '@:{modifier~rs}': enum_1['@:{enum#modifier.width~rs}'] | //允许修改宽
        enum_1['@:{enum#modifier.height~rs}'] | //允许修改高
        enum_1['@:{enum#modifier.rotate~rs}'] | //允许旋转
        enum_1['@:{enum#modifier.nomask~rs}'],
    //哪些属性参与移动，大部分元素只有x y参与移动，但对于svg元素，会有多个点参与移动
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    //'@:{allowed.total.count}':3,
    //获取元素默认的属性
    '@:{get.props~rs}'(x, y) {
        return {
            height: const_1['@:{const#to.unit~rs}'](80),
            alpha: 1,
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            rotate: 0,
            width: const_1['@:{const#to.unit~rs}'](200),
            text: '',
            linewidth: 2,
            tfs: const_1['@:{const#to.unit~rs}'](14),
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
            '@:{is.scale.and.unit.field~rs}': 1,
        }, {
            tip: '@:{lang#props.x~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'x',
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1, //最终从设计器获取数据时，是否序列化当前属性
        }, {
            tip: '@:{lang#props.y~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'y',
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1,
        }, {
            tip: '@:{lang#props.width~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'width',
            min: () => const_1["@:{const#to.unit~rs}"](20),
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.height~rs}',
            key: 'height',
            type: props_1["@:{eprops#number~rs}"],
            min: () => const_1["@:{const#to.unit~rs}"](20),
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.rotate~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            tip: '@:{lang#props.alpha~rs}',
            key: 'alpha',
            type: props_1["@:{eprops#number~rs}"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'(props) {
                return !props.bind.url;
            }
        }, {
            tip: '@:{lang#props.text.content~rs}',
            key: 'text',
            type: props_1["@:{eprops#text.area~rs}"],
            json: 1,
            '@:{if.show~rs}'(props) {
                return !props.bind.url;
            }
        }, {
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            tip: '@:{lang#props.bind.fields~rs}',
            key: 'bind',
            type: props_1["@:{eprops#bind.field~rs}"],
            json: 1,
            max: 1,
            '@:{if.show~rs}'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.barcode.format~rs}',
            key: 'format',
            type: props_1["@:{eprops#dropdown~rs}"],
            items: barcode_1["@:{types~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.show.text~rs}',
            key: 'showText',
            type: props_1["@:{eprops#boolean~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.line.color~rs}',
            key: 'color',
            type: props_1["@:{eprops#color~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.line.width~rs}',
            key: 'linewidth',
            type: props_1["@:{eprops#number~rs}"],
            min: 1,
            max: 8,
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.official.website~rs}',
            key: 'ow',
            type: props_1["@:{eprops#link~rs}"]
        }, {
            tip: '@:{lang#props.help~rs}',
            type: props_1["@:{eprops#link~rs}"],
            key: 'help'
        }, {
            tip: '@:{lang#props.title~rs}',
            key: 'ename',
            type: props_1["@:{eprops#text.input~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.locked~rs}',
            key: 'locked',
            type: props_1["@:{eprops#boolean~rs}"],
            free: true,
            json: 1
        }]
});

});