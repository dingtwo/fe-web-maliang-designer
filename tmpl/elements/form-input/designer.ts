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
            view: '@:./index'
        });
    }
}).static({
    type: 'form-input',
    title: '@:{lang#elements.form.input}',
    icon: '&#xe6dc;',
    '@:{modifier}': Enum['@:{enum#modifier.width}'] |
        Enum['@:{enum#modifier.height}'] |
        Enum['@:{enum#modifier.rotate}'],
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{get.props}'(x, y) {
        return {
            background: '',
            height: Const['@:{const#to.unit}'](25),
            alpha: 1,
            text: '',
            placeholder: '',
            letterspacing: 0,
            markAs: '',
            className: '',
            multiline: false,
            inputName: '',
            textAlign: 'left',
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            rotate: 0,
            width: Const['@:{const#to.unit}'](200),
            forecolor: '#000000',
            fontsize: Const['@:{const#to.unit}'](14),
            fontfamily: 'Microsoft YaHei',
            locked: false,
            help: 'github.com/xinglie/report-designer/issues/39'
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
        tip: '@:{lang#props.placeholder}',
        key: 'placeholder',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.default.text}',
        key: 'text',
        type({ multiline }) {
            return multiline ? Props['@:{eprops#text.area}'] : Props['@:{eprops#text.input}'];
        },
        '@:{is.dynamic.type}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.element.name}',
        key: 'inputName',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.extend.mark}',
        key: 'markAs',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.extend.class.name}',
        key: 'className',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.multiline}',
        key: 'multiline',
        type: Props["@:{eprops#boolean}"],
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.text.align}',
        key: 'textAlign',
        type: Props["@:{eprops#text.align}"],
        json: 1
    }, {
        tip: '@:{lang#props.font.size}',
        key: 'fontsize',
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],
        min: 0,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.font.family}',
        key: 'fontfamily',
        type: Props["@:{eprops#dropdown}"],
        items: Const["@:{const#font.family}"],
        json: 1
    }, {
        tip: '@:{lang#props.letter.spacing}',
        key: 'letterspacing',
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],
        min: 0,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.forecolor}',
        key: 'forecolor',
        type: Props["@:{eprops#color}"],
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