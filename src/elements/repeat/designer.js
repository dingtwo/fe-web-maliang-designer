/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/repeat/designer",["magix5","../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../normal"],(require,exports,module)=>{


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
            view: "elements/repeat/dshow"
        });
    }
}).static({
    type: 'repeat',
    title: '@:{lang#elements.repeat~rs}',
    icon: '&#xe78f;',
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
            rotate: 0,
            width: const_1['@:{const#to.unit~rs}'](200),
            tfs: const_1['@:{const#to.unit~rs}'](14),
            radius: 0,
            image: '',
            webUrl: '',
            repeat: 'repeat',
            imageWidth: 0,
            imageHeight: 0,
            backgroundXOffset: 0,
            backgroundYOffset: 0,
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
                e.width = const_1["@:{const#to.unit~rs}"](e.width);
                e.height = const_1["@:{const#to.unit~rs}"](e.height);
                props.imageWidth = transform_1["@:{transform#to.real.value~rs}"](e.width);
                props.imageHeight = transform_1["@:{transform#to.real.value~rs}"](e.height);
                return v;
            },
            '@:{if.show~rs}'(props) {
                return !props.bind.url && config('getImageUrl') && !props.webUrl;
            },
            json: 1
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
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
        }, {
            tip: '@:{lang#props.background.repeat~rs}',
            key: 'repeat',
            type: props_1["@:{eprops#dropdown~rs}"],
            '@:{if.show~rs}'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
            items: [{
                    text: '@:{lang#props.repeat~rs}',
                    value: 'repeat'
                }, {
                    text: '@:{lang#props.repeat.x~rs}',
                    value: 'repeat-x'
                }, {
                    text: '@:{lang#props.repeat.y~rs}',
                    value: 'repeat-y'
                }, {
                    text: '@:{lang#props.full~rs}',
                    value: 'full'
                }, {
                    text: '@:{lang#props.no.repeat~rs}',
                    value: 'no-repeat'
                }],
            json: 1
        }, {
            tip: '@:{lang#props.border.radius~rs}',
            key: 'radius',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1["@:{eprops#number~rs}"],
            min: 0,
            json: 1,
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            '@:{if.show~rs}'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
        }, {
            tip: '@:{lang#props.image.width~rs}',
            key: 'imageWidth',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1["@:{eprops#number~rs}"],
            min: 0,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{if.show~rs}'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1
        }, {
            tip: '@:{lang#props.image.height~rs}',
            key: 'imageHeight',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1["@:{eprops#number~rs}"],
            min: 0,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            '@:{if.show~rs}'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1
        }, {
            tip: '@:{lang#props.offset.hor~rs}',
            key: 'backgroundXOffset',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1["@:{eprops#number~rs}"],
            min: () => -const_1['@:{const#to.unit~rs}'](const_1['@:{const#page.max.width~rs}']),
            max: () => const_1['@:{const#to.unit~rs}'](const_1['@:{const#page.max.width~rs}']),
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            '@:{if.show~rs}'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1
        }, {
            tip: '@:{lang#props.offset.ver~rs}',
            key: 'backgroundYOffset',
            '@:{is.scale.and.unit.field~rs}': 1,
            type: props_1["@:{eprops#number~rs}"],
            min: () => -const_1['@:{const#to.unit~rs}'](const_1['@:{const#page.max.height~rs}']),
            max: () => const_1['@:{const#to.unit~rs}'](const_1['@:{const#page.max.height~rs}']),
            step: const_1["@:{const#unit.step~rs}"],
            fixed: const_1["@:{const#unit.fixed~rs}"],
            '@:{if.show~rs}'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
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