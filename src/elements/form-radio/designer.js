/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/form-radio/designer",["magix5","../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../normal"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let normal_1 = require("../normal");
let { guid } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/form-radio/index"
        });
    }
}).static({
    type: 'form-radio',
    title: '@:{lang#elements.form.radio~rs}',
    icon: '&#xe6ab;',
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
            height: const_1['@:{const#to.unit~rs}'](50),
            alpha: 1,
            text: '',
            letterspacing: 0,
            inputName: guid('rd-radios-'),
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            rotate: 0,
            width: const_1['@:{const#to.unit~rs}'](200),
            rank: 'row',
            items: [{
                    text: '单选框',
                    disabled: false,
                    checked: true,
                    value: 'radio'
                }],
            itemSpace: const_1['@:{const#to.unit~rs}'](10),
            textSpace: const_1['@:{const#to.unit~rs}'](4),
            forecolor: '#000000',
            fontsize: const_1['@:{const#to.unit~rs}'](14),
            fontfamily: 'Microsoft YaHei',
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
            min: () => 0,
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
            min: () => 0,
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
            tip: '@:{lang#props.element.name~rs}',
            key: 'inputName',
            type: props_1["@:{eprops#text.input~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.element.rank~rs}',
            key: 'rank',
            type: props_1['@:{eprops#dropdown~rs}'],
            items: [{
                    text: '@:{lang#props.element.rank.row~rs}',
                    value: 'row'
                }, {
                    text: '@:{lang#props.element.rank.column~rs}',
                    value: 'column'
                }],
            json: 1
        }, {
            tip: '@:{lang#props.item.space~rs}',
            key: 'itemSpace',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1['@:{eprops#number~rs}'],
            min: 0,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.text.space~rs}',
            key: 'textSpace',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1['@:{eprops#number~rs}'],
            min: 0,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            key: 'items',
            type: props_1['@:{eprops#form.items~rs}'],
            json: 1
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.font.size~rs}',
            key: 'fontsize',
            type: props_1["@:{eprops#number~rs}"],
            min: 0,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.font.family~rs}',
            key: 'fontfamily',
            type: props_1["@:{eprops#dropdown~rs}"],
            items: const_1["@:{const#font.family~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.letter.spacing~rs}',
            key: 'letterspacing',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1["@:{eprops#number~rs}"],
            min: 0,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.forecolor~rs}',
            key: 'forecolor',
            type: props_1["@:{eprops#color~rs}"],
            json: 1
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