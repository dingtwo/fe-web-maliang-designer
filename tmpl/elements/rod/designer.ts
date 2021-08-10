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
    type: 'rod',
    title: '@:{lang#elements.rod}',
    icon: '&#xe6a2;',
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
    '@:{update.props}'(props) {
        props.text = Transform["@:{transform#to.show.value}"](props.width);
    },
    '@:{get.props}'(x, y) {
        return {
            height: Const['@:{const#to.unit}'](14),
            alpha: 1,
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            rotate: 0,
            textRotate: 0,
            startBorder: true,
            endBorder: true,
            width: Const['@:{const#to.unit}'](400),
            linetype: 'solid',
            color: '#000000',
            locked: false
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
        tip: '@:{lang#props.long}',
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
        key: 'text',
        '@:{json.encode}'(dest, props) {
            dest.text = Transform["@:{transform#to.show.value}"](props.width);
        }
    }, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }, {
        tip: '@:{lang#props.text.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'textRotate',
        min: -360,
        max: 360,
        json: 1
    }, {
        tip: '@:{lang#props.start.border}',
        type: Props["@:{eprops#boolean}"],
        key: 'startBorder',
        json: 1
    }, {
        tip: '@:{lang#props.end.border}',
        type: Props["@:{eprops#boolean}"],
        key: 'endBorder',
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"]
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
        tip: '@:{lang#props.height}',
        key: 'height',
        '@:{is.scale.and.unit.field}': 1,
        type: Props["@:{eprops#number}"],
        min: () => Const["@:{const#to.unit}"](4),
        max: () => Const["@:{const#to.unit}"](100),
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.line.type}',
        key: 'linetype',
        type: Props["@:{eprops#dropdown}"],
        items: Const['@:{const#border.types}'],
        json: 1
    }, {
        tip: '@:{lang#props.color}',
        key: 'color',
        type: Props["@:{eprops#color}"],
        json: 1
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