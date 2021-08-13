/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/xsheet/designer",["../../designer/props","../../designer/transform","../normal","../../designer/const","../../designer/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let normal_1 = require("../normal");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/xsheet/dshow"
        });
    }
}).static({
    type: 'xsheet',
    title: '@:{lang#elements.xsheet~rs}',
    icon: '&#xe600;',
    '@:{allowed.total.count~rs}': 1,
    '@:{allowed.to.hod~rs}': {
        root: 1, //编辑区
    },
    '@:{modifier~rs}': enum_1['@:{enum#modifier.width~rs}'] |
        enum_1['@:{enum#modifier.height~rs}'] |
        enum_1['@:{enum#modifier.rotate~rs}'] |
        enum_1['@:{enum#modifier.nomask~rs}'] |
        enum_1['@:{enum#modifier.icon~rs}'],
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '@:{get.props~rs}'(x, y) {
        return {
            height: const_1['@:{const#to.unit~rs}'](400),
            alpha: 1,
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            sheetData: null,
            //rotate: 0,
            width: const_1['@:{const#to.unit~rs}'](500),
            locked: false,
            ow: 'github.com/mengshukeji/Luckysheet'
        };
    },
    props: [{
            key: 'sheetData',
            json: 1
        }, {
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
            min: () => const_1["@:{const#to.unit~rs}"](500),
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
            min: () => const_1["@:{const#to.unit~rs}"](400),
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
        {
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