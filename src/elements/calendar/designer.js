/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/calendar/designer",["../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../normal"],(require,exports,module)=>{


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
            view: "elements/calendar/index"
        });
    }
}).static({
    type: 'calendar',
    title: '@:{lang#elements.calendar~rs}',
    icon: '&#xe65c;',
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
            alpha: 1,
            width: const_1['@:{const#to.unit~rs}'](300),
            height: const_1['@:{const#to.unit~rs}'](180),
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            rotate: 0,
            theadFontsize: const_1['@:{const#to.unit~rs}'](16),
            tbodyFontsize: const_1['@:{const#to.unit~rs}'](14),
            theadRowBackground: '#ffda95',
            weekStart: 0,
            locked: false
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
            min: () => const_1['@:{const#to.unit~rs}'](300),
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
            min: () => const_1['@:{const#to.unit~rs}'](180),
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
            tip: '@:{lang#props.table.head.font.size~rs}',
            min: () => const_1["@:{const#to.unit~rs}"](12),
            max: () => const_1["@:{const#to.unit~rs}"](100),
            '@:{is.scale.and.unit.field~rs}': 1,
            key: 'theadFontsize',
            type: props_1["@:{eprops#number~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.table.head.row.background~rs}',
            key: 'theadRowBackground',
            type: props_1["@:{eprops#color~rs}"],
            clear: true,
            alpha: true,
            json: 1
        }, {
            tip: '@:{lang#props.table.body.font.size~rs}',
            min: () => const_1["@:{const#to.unit~rs}"](12),
            max: () => const_1["@:{const#to.unit~rs}"](100),
            '@:{is.scale.and.unit.field~rs}': 1,
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            key: 'tbodyFontsize',
            type: props_1["@:{eprops#number~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.week.start~rs}',
            key: 'weekStart',
            json: 1,
            type: props_1['@:{eprops#dropdown~rs}'],
            items: [{
                    text: '星期日',
                    value: 0
                }, {
                    text: '星期一',
                    value: 1
                }, {
                    text: '星期二',
                    value: 2
                }, {
                    text: '星期三',
                    value: 3
                }, {
                    text: '星期四',
                    value: 4
                }, {
                    text: '星期五',
                    value: 5
                }, {
                    text: '星期六',
                    value: 6
                }]
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
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