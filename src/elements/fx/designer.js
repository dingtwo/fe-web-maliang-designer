/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/fx/designer",["../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../normal"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let normal_1 = require("../normal");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/fx/dshow"
        });
    }
}).static({
    type: 'fx',
    title: '@:{lang#elements.fx~rs}',
    icon: '&#xe628;',
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
            height: const_1['@:{const#to.unit~rs}'](300),
            alpha: 1,
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            rotate: 0,
            width: const_1['@:{const#to.unit~rs}'](400),
            title: '',
            grid: false,
            zoom: true,
            xLine: true,
            yLine: true,
            xAxisRange: [-10, 10],
            xAxisTitle: '',
            yAxisRange: [-1, 10],
            yAxisTitle: '',
            data: [{
                    color: '#e16632',
                    fn: 'x^2',
                    graphType: 'interval',
                    closed: false
                }],
            annotations: [],
            ow: 'github.com/mauriciopoppe/function-plot',
            locked: false
        };
    },
    props: [{
            tip: '@:{lang#props.x~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'x',
            '@:{is.scale.and.unit.field~rs}': 1,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.y~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'y',
            '@:{is.scale.and.unit.field~rs}': 1,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.width~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'width',
            '@:{is.scale.and.unit.field~rs}': 1,
            min: () => const_1["@:{const#to.unit~rs}"](20),
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.height~rs}',
            key: 'height',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1["@:{eprops#number~rs}"],
            min: () => const_1["@:{const#to.unit~rs}"](20),
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
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
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.chart.title~rs}',
            key: 'title',
            type: props_1["@:{eprops#text.input~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.page.grid~rs}',
            key: 'grid',
            type: props_1["@:{eprops#boolean~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.disable.zoom~rs}',
            key: 'zoom',
            type: props_1["@:{eprops#boolean~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.x.axis.title~rs}',
            key: 'xAxisTitle',
            type: props_1["@:{eprops#text.input~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.x.axis.range~rs}',
            type: props_1["@:{eprops#number.range~rs}"],
            key: 'xAxisRange',
            json: 1
        }, {
            tip: '@:{lang#props.y.axis.title~rs}',
            key: 'yAxisTitle',
            type: props_1["@:{eprops#text.input~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.y.axis.range~rs}',
            type: props_1["@:{eprops#number.range~rs}"],
            key: 'yAxisRange',
            json: 1
        }, {
            tip: '@:{lang#props.x.line~rs}',
            type: props_1["@:{eprops#boolean~rs}"],
            key: 'xLine',
            json: 1
        }, {
            tip: '@:{lang#props.y.line~rs}',
            type: props_1["@:{eprops#boolean~rs}"],
            key: 'yLine',
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            key: 'data',
            type: props_1["@:{eprops#fx.expression~rs}"],
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            key: 'annotations',
            type: props_1["@:{eprops#fx.help~rs}"],
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