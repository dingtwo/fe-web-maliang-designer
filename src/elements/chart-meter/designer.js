/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/chart-meter/designer",["magix5","../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../normal"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let normal_1 = require("../normal");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/chart-meter/index"
        });
    }
}).static({
    type: 'chart-meter',
    title: '@:{lang#elements.chart-meter~rs}',
    icon: '&#xeb94;',
    '@:{modifier~rs}': enum_1['@:{enum#modifier.width~rs}'] |
        enum_1['@:{enum#modifier.height~rs}'] |
        enum_1['@:{enum#modifier.rotate~rs}'],
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '@:{get.props~rs}'(x, y) {
        return {
            background: '',
            alpha: 1,
            width: const_1['@:{const#to.unit~rs}'](500),
            height: const_1['@:{const#to.unit~rs}'](300),
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            rotate: 0,
            title: '',
            titleAlign: 'left',
            ow: 'echarts.apache.org',
            locked: false,
            bind: {
                url: '',
                id: '',
                fields: []
            },
        };
    },
    props: [{
            tip: '@:{lang#props.x~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'x',
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.y~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'y',
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.width~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'width',
            min: () => 0,
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
            min: () => 0,
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
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'() {
                return config('getFieldUrl');
            }
        }, {
            tip: '@:{lang#props.bind.fields~rs}',
            key: 'bind',
            type: props_1["@:{eprops#bind.field~rs}"],
            json: 1,
            max: 1,
            '@:{if.show~rs}'() {
                return config('getFieldUrl');
            }
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.chart.title~rs}',
            key: 'title',
            type: props_1["@:{eprops#text.input~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.title.align~rs}',
            key: 'titleAlign',
            type: props_1['@:{eprops#text.align~rs}'],
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
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
            tip: '@:{lang#props.background~rs}',
            type: props_1["@:{eprops#color~rs}"],
            key: 'background',
            alpha: true,
            clear: true,
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.official.website~rs}',
            key: 'ow',
            type: props_1["@:{eprops#link~rs}"]
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