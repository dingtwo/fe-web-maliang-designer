/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import Designer from '../normal';
let { config } = Magix;
export default Designer.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
    }
}).static({
    type: 'repeat',
    title: '@:{lang#elements.repeat}',
    icon: '&#xe78f;',
    '@:{modifier}': Enum['@:{enum#modifier.width}'] |
        Enum['@:{enum#modifier.height}'] |
        Enum['@:{enum#modifier.rotate}'] |
        Enum['@:{enum#modifier.nomask}'],
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{get.props}'(x, y) {
        return {
            height: Const['@:{const#to.unit}'](100),
            alpha: 1,
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            rotate: 0,
            width: Const['@:{const#to.unit}'](200),
            tfs: Const['@:{const#to.unit}'](14),
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
        }
    },
    props: [{
        key: 'tfs',
        '@:{is.scale.and.unit.field}': 1,
    },{
        tip: '@:{lang#props.x}',
        type: Props["@:{eprops#number}"],
        key: 'x',
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.y}',
        type: Props["@:{eprops#number}"],
        key: 'y',
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.width}',
        type: Props["@:{eprops#number}"],
        key: 'width',
        '@:{is.scale.and.unit.field}': 1,
        min: () => 0,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.height}',
        key: 'height',
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],
        min: () => 0,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }, {
        tip: '@:{lang#props.alpha}',
        key: 'alpha',
        type: Props["@:{eprops#number}"],
        step: 0.1,
        fixed: 1,
        min: 0,
        max: 1,
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return !props.bind.url && !props.image;
        }
    }, {
        tip: '@:{lang#props.web.image}',
        key: 'webUrl',
        type: Props['@:{eprops#text.input}'],
        json: 1,
        '@:{if.show}'(props) {
            return !props.bind.url && !props.image;
        },
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return !props.bind.url && !props.webUrl;
        }
    }, {
        tip: '@:{lang#props.image}',
        key: 'image',
        type: Props["@:{eprops#image}"],
        write(v, props, e) {
            e.width = Const["@:{const#to.unit}"](e.width);
            e.height = Const["@:{const#to.unit}"](e.height);
            props.imageWidth = Transform["@:{transform#to.real.value}"](e.width);
            props.imageHeight = Transform["@:{transform#to.real.value}"](e.height);
            return v;
        },
        '@:{if.show}'(props) {
            return !props.bind.url && config('getImageUrl') && !props.webUrl;
        },
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return !props.image && config('getFieldUrl') && !props.webUrl;
        }
    }, {
        tip: '@:{lang#props.bind.fields}',
        key: 'bind',
        type: Props["@:{eprops#bind.field}"],
        json: 1,
        max: 1,
        '@:{if.show}'(props) {
            return !props.image && config('getFieldUrl') && !props.webUrl;
        }
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return props.image || props.bind.url || props.webUrl;
        },
    }, {
        tip: '@:{lang#props.background.repeat}',
        key: 'repeat',
        type: Props["@:{eprops#dropdown}"],
        '@:{if.show}'(props) {
            return props.image || props.bind.url || props.webUrl;
        },
        items: [{
            text: '@:{lang#props.repeat}',
            value: 'repeat'
        }, {
            text: '@:{lang#props.repeat.x}',
            value: 'repeat-x'
        }, {
            text: '@:{lang#props.repeat.y}',
            value: 'repeat-y'
        }, {
            text: '@:{lang#props.full}',
            value: 'full'
        }, {
            text: '@:{lang#props.no.repeat}',
            value: 'no-repeat'
        }],
        json: 1
    }, {
        tip: '@:{lang#props.border.radius}',
        key: 'radius',
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],
        min: 0,
        json: 1,
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        '@:{if.show}'(props) {
            return props.image || props.bind.url || props.webUrl;
        },
    }, {
        tip: '@:{lang#props.image.width}',
        key: 'imageWidth',
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],
        min: 0,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{if.show}'({ image, bind, webUrl, repeat }) {
            return (image || bind.url || webUrl) && repeat != 'full';
        },
        json: 1
    }, {
        tip: '@:{lang#props.image.height}',
        key: 'imageHeight',
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],
        min: 0,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{if.show}'({ image, bind, webUrl, repeat }) {
            return (image || bind.url || webUrl) && repeat != 'full';
        },
        json: 1
    }, {
        tip: '@:{lang#props.offset.hor}',
        key: 'backgroundXOffset',
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],
        min: () => -Const['@:{const#to.unit}'](Const['@:{const#page.max.width}']),
        max: () => Const['@:{const#to.unit}'](Const['@:{const#page.max.width}']),
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        '@:{if.show}'({ image, bind, webUrl, repeat }) {
            return (image || bind.url || webUrl) && repeat != 'full';
        },
        json: 1
    }, {
        tip: '@:{lang#props.offset.ver}',
        key: 'backgroundYOffset',
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],

        min: () => -Const['@:{const#to.unit}'](Const['@:{const#page.max.height}']),
        max: () => Const['@:{const#to.unit}'](Const['@:{const#page.max.height}']),
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        '@:{if.show}'({ image, bind, webUrl, repeat }) {
            return (image || bind.url || webUrl) && repeat != 'full';
        },
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.help}',
        type: Props["@:{eprops#link}"],
        key: 'help'
    }, {
        tip: '@:{lang#props.title}',
        key: 'ename',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.locked}',
        key: 'locked',
        type: Props["@:{eprops#boolean}"],
        free: true,
        json: 1
    }]
});