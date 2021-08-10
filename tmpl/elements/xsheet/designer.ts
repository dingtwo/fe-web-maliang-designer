/*
    author:https://github.com/xinglie
*/
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import Designer from '../normal';
import Const from '../../designer/const';
import Enum from '../../designer/enum';
export default Designer.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
    }
}).static({
    type: 'xsheet',
    title: '@:{lang#elements.xsheet}',
    icon: '&#xe600;',
    '@:{allowed.total.count}': 1,//总共允许多少个
    '@:{allowed.to.hod}': { //当前元素允许添加到的容器元素
        root: 1,//编辑区
    },
    '@:{modifier}': Enum['@:{enum#modifier.width}'] |
        Enum['@:{enum#modifier.height}'] |
        Enum['@:{enum#modifier.rotate}'] |
        Enum['@:{enum#modifier.nomask}'] |
        Enum['@:{enum#modifier.icon}'],
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{get.props}'(x, y) {
        return {
            height: Const['@:{const#to.unit}'](400),
            alpha: 1,
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            sheetData: null,
            //rotate: 0,
            width: Const['@:{const#to.unit}'](500),
            locked: false,
            ow: 'github.com/mengshukeji/Luckysheet'
        }
    },
    props: [{
        key: 'sheetData',
        json: 1
    }, {
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
        min: () => Const["@:{const#to.unit}"](500),
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
        min: () => Const["@:{const#to.unit}"](400),
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }/*, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }*/, {
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
        tip: '@:{lang#props.official.website}',
        key: 'ow',
        type: Props["@:{eprops#link}"]
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