/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/image/designer",["magix5","../../designer/props","../../designer/transform","../normal","../../designer/const","../../designer/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let normal_1 = require("../normal");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "elements/image/dshow"
        });
    }
}).static({
    type: 'image',
    title: '@:{lang#elements.image~rs}',
    icon: '&#xe650;',
    '@:{modifier~rs}': enum_1['@:{enum#modifier.width~rs}'] |
        enum_1['@:{enum#modifier.height~rs}'] |
        enum_1['@:{enum#modifier.rotate~rs}'] |
        enum_1['@:{enum#modifier.nomask~rs}'],
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '@:{get.props~rs}'(x, y) {
        return {
            height: const_1['@:{const#to.unit~rs}'](100),
            alpha: 1,
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            tfs: const_1['@:{const#to.unit~rs}'](14),
            rotate: 0,
            rotateX: false,
            rotateY: false,
            width: const_1['@:{const#to.unit~rs}'](200),
            image: '',
            webUrl: '',
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
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'(props) {
                return !props.bind.url && !props.image;
            }
        }, {
            tip: '@:{lang#props.web.image~rs}',
            key: 'webUrl',
            type: props_1['@:{eprops#text.input~rs}'],
            json: 1,
            '@:{if.show~rs}'(props) {
                return !props.bind.url && !props.image;
            },
        }, {
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'(props) {
                return !props.bind.url && !props.webUrl;
            }
        }, {
            tip: '@:{lang#props.image~rs}',
            key: 'image',
            type: props_1["@:{eprops#image~rs}"],
            write(v, props, e) {
                if (!v) {
                    e.width = 200;
                    e.height = 100;
                }
                e.width = const_1["@:{const#to.unit~rs}"](e.width);
                e.height = const_1["@:{const#to.unit~rs}"](e.height);
                props.width = transform_1["@:{transform#to.real.value~rs}"](e.width);
                props.height = transform_1["@:{transform#to.real.value~rs}"](e.height);
                return v;
            },
            json: 1,
            '@:{if.show~rs}'(props) {
                return !props.bind.url && config('getImageUrl') && !props.webUrl;
            }
        }, {
            tip: '@:{lang#props.image.reset~rs}',
            type: props_1["@:{eprops#image.reset~rs}"],
            key: 'image',
            '@:{if.show~rs}'(props) {
                return props.image;
            }
        }, {
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'(props) {
                return !props.image && config('getFieldUrl') && !props.webUrl;
            }
        }, {
            tip: '@:{lang#props.bind.fields~rs}',
            key: 'bind',
            type: props_1["@:{eprops#bind.field~rs}"],
            json: 1,
            max: 1,
            '@:{if.show~rs}'(props) {
                return !props.image && config('getFieldUrl') && !props.webUrl;
            }
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.rotate.x~rs}',
            type: props_1["@:{eprops#boolean~rs}"],
            key: 'rotateX',
            json: 1
        }, {
            tip: '@:{lang#props.rotate.y~rs}',
            type: props_1["@:{eprops#boolean~rs}"],
            key: 'rotateY',
            json: 1
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