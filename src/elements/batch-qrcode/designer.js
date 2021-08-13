/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/batch-qrcode/designer",["magix5","../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../normal"],(require,exports,module)=>{


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
            view: "elements/batch-qrcode/dshow"
        });
    }
}).static({
    type: 'batch-qrcode',
    title: '@:{lang#elements.qrcode~rs}',
    icon: '&#xe61c;',
    '@:{modifier~rs}': enum_1['@:{enum#modifier.size~rs}'] |
        enum_1['@:{enum#modifier.rotate~rs}'] |
        enum_1['@:{enum#modifier.nomask~rs}'] |
        enum_1['@:{enum#modifier.sync.size~rs}'],
    '@:{allowed.to.hod~rs}': {
        root: 1
    },
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '@:{get.props~rs}'(x, y) {
        return {
            height: const_1['@:{const#to.unit~rs}'](150),
            alpha: 1,
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            rotate: 0,
            width: const_1['@:{const#to.unit~rs}'](150),
            hspace: const_1['@:{const#to.unit~rs}'](30),
            vspace: const_1['@:{const#to.unit~rs}'](30),
            tfs: const_1['@:{const#to.unit~rs}'](14),
            text: '',
            locked: false,
            help: 'github.com/xinglie/report-designer/issues/31',
            bind: {
                url: '',
                id: '',
                fields: []
            },
        };
    },
    props: [{
            key: 'tfs',
            '@:{is.scale.and.unit.field~rs}': 1,
        }, {
            tip: '@:{lang#props.x~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'x',
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.y~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'y',
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.width~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'width',
            min: () => const_1["@:{const#to.unit~rs}"](20),
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            json: 1
        }, {
            tip: '@:{lang#props.height~rs}',
            key: 'height',
            type: props_1["@:{eprops#number~rs}"],
            min: () => const_1["@:{const#to.unit~rs}"](20),
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
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
            tip: '@:{lang#props.h.space~rs}',
            type: props_1['@:{eprops#number~rs}'],
            json: 1,
            key: 'hspace',
            min: 0,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            max: () => const_1['@:{const#to.unit~rs}'](100)
        }, {
            tip: '@:{lang#props.v.space~rs}',
            type: props_1['@:{eprops#number~rs}'],
            json: 1,
            key: 'vspace',
            min: 0,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{is.scale.and.unit.field~rs}': 1,
            max: () => const_1['@:{const#to.unit~rs}'](100)
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
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