/*
    author:https://github.com/xinglie
*/
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import Designer from '../normal';
export default Designer.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
    }
}).static({
    type: 'progressbar',
    title: '@:{lang#elements.progressbar}',
    icon: '&#xe689;',
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
            height: Const['@:{const#to.unit}'](10),
            alpha: 1,
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            rotate: 0,
            width: Const['@:{const#to.unit}'](240),
            locked: false,
            background: '#e2e2e2',
            barcolor: '#fa742b',
            value: 50,
            radius: Const['@:{const#to.unit}'](5),
            showText: true,
            textColor: '#000000',
            textFontsize: Const['@:{const#to.unit}'](12),
            textFormat: '',
            bind: {
                url: '',
                id: '',
                fields: []
            },
        }
    },
    props: [{
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
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.value}',
        key: 'value',
        type: Props['@:{eprops#number}'],
        min: 0,
        max: 100,
        json: 1,
        fixed: 1,
        '@:{if.show}'(props) {
            return !props.bind.url;
        }
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return !props.bind.url;
        }
    }, {
        tip: '@:{lang#props.bind.fields}',
        key: 'bind',
        type: Props["@:{eprops#bind.field}"],
        json: 1,
        max: 1
    }, {
        tip: '@:{lang#props.format.fx}',
        type: Props["@:{eprops#format.fx}"],
        key: 'textFormat',
        json: 1,
        '@:{if.show}'(props) {
            return props.bind.url;
        }
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.background}',
        key: 'background',
        type: Props['@:{eprops#color}'],
        json: 1
    }, {
        tip: '@:{lang#props.bar.color}',
        key: 'barcolor',
        type: Props['@:{eprops#color}'],
        json: 1
    }, {
        tip: '@:{lang#props.border.radius}',
        key: 'radius',
        type: Props['@:{eprops#number}'],
        json: 1,
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        min: 0,
    }, {
        tip: '@:{lang#props.show.text}',
        key: 'showText',
        json: 1,
        type: Props['@:{eprops#boolean}']
    }, {
        tip: '@:{lang#props.forecolor}',
        key: 'textColor',
        json: 1,
        type: Props['@:{eprops#color}'],
        '@:{if.show}'(props) {
            return props.showText
        }
    }, {
        tip: '@:{lang#props.font.size}',
        key: 'textFontsize',
        type: Props["@:{eprops#number}"],
        min: 0,
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1,
        '@:{if.show}'(props) {
            return props.showText
        }
    }, {
        type: Props["@:{eprops#spliter}"]
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