/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/pager/designer",["../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../normal"],(require,exports,module)=>{


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
            view: "elements/pager/index"
        });
    }
}).static({
    type: 'pager',
    title: '@:{lang#elements.pager~rs}',
    icon: '&#xe646;',
    '@:{modifier~rs}': enum_1['@:{enum#modifier.width~rs}'] |
        enum_1['@:{enum#modifier.height~rs}'] |
        enum_1['@:{enum#modifier.rotate~rs}'] |
        enum_1['@:{enum#modifier.text~rs}'],
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
            text: '当前第${currentPage}页，共${totalPage}页',
            //'@:{show.text}': 1,
            letterspacing: const_1['@:{const#to.unit~rs}'](0),
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            rotate: 0,
            width: const_1['@:{const#to.unit~rs}'](200),
            forecolor: '#000000',
            fontsize: const_1['@:{const#to.unit~rs}'](14),
            fontfamily: 'Microsoft YaHei',
            locked: false,
            styleBold: false,
            styleUnderline: false,
            styleItalic: false,
            styleStrike: false,
            ext: {},
            hpos: 'flex-start',
            vpos: 'flex-start'
        };
    },
    props: [{
            key: 'ext',
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
            type: props_1["@:{eprops#spliter~rs}"],
        }, {
            tip: '@:{lang#props.text.content~rs}',
            key: 'text',
            type: props_1["@:{eprops#text.area~rs}"],
            //'@:{dock.top}': 1,
            json: 1,
        }, {
            tip: '@:{lang#props.font.size~rs}',
            key: 'fontsize',
            '@:{is.scale.and.unit.field~rs}': 1,
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
            tip: '@:{lang#props.alpha~rs}',
            key: 'alpha',
            type: props_1["@:{eprops#number~rs}"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
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
            tip: '@:{lang#props.background~rs}',
            key: 'background',
            clear: true,
            alpha: true,
            type: props_1["@:{eprops#color~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.forecolor~rs}',
            key: 'forecolor',
            type: props_1["@:{eprops#color~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.font.style~rs}',
            type: props_1["@:{eprops#font.style~rs}"],
            '@:{json.encode~rs}'(dest, props) {
                dest.styleBold = props.styleBold;
                dest.styleUnderline = props.styleUnderline;
                dest.styleItalic = props.styleItalic;
                dest.styleStrike = props.styleStrike;
                dest.styleOverline = props.styleOverline;
            }
        }, {
            tip: '@:{lang#props.font.align~rs}',
            type: props_1["@:{eprops#align~rs}"],
            '@:{json.encode~rs}'(dest, props) {
                dest.hpos = props.hpos;
                dest.vpos = props.vpos;
            }
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