/*
    author:https://github.com/xinglie
*/
import Const from '../../designer/const';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import Designer from '../normal';
import Enum from '../../designer/enum';
export default Designer.extend({
    ctor() {
        this.set({
            view: '@:./index'
        });
    }
}).static({
    type: 'clock',
    title: '@:{lang#elements.clock}',
    icon: '&#xe7f1;',
    '@:{modifier}': Enum['@:{enum#modifier.size}'] |
        Enum['@:{enum#modifier.sync.size}'],
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{get.props}'(x, y) {
        return {
            alpha: 1,
            width: Const['@:{const#to.unit}'](150),
            height: Const['@:{const#to.unit}'](150),
            dialColor: '#00000040',
            handleColor: '#ffffff',
            markColor: '#ffffff80',
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            locked: false
        }
    },
    props: [{
        tip: '@:{lang#props.x}',
        type: Props["@:{eprops#number}"],
        key: 'x',
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.y}',
        type: Props["@:{eprops#number}"],
        key: 'y',
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.width}',
        type: Props["@:{eprops#number}"],
        key: 'width',
        min: () => Const['@:{const#to.unit}'](100),
        max: () => Const['@:{const#to.unit}'](400),
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.height}',
        key: 'height',
        type: Props["@:{eprops#number}"],
        min: () => Const['@:{const#to.unit}'](100),
        max: () => Const['@:{const#to.unit}'](400),
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
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
        tip: '@:{lang#props.clock.dial.color}',
        key: 'dialColor',
        type: Props["@:{eprops#color}"],
        alpha: true,
        json: 1
    }, {
        tip: '@:{lang#props.clock.handle.color}',
        key: 'handleColor',
        type: Props["@:{eprops#color}"],
        alpha: true,
        json: 1
    }, {
        tip: '@:{lang#props.clock.mark.color}',
        key: 'markColor',
        type: Props["@:{eprops#color}"],
        alpha: true,
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