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
            view: '@:./index'
        });
    }
}).static({
    type: 'chart-pie',
    title: '@:{lang#elements.chart-pie}',
    icon: '&#xe6d4;',
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
            alpha: 1,
            width: Const['@:{const#to.unit}'](500),
            height: Const['@:{const#to.unit}'](300),
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            title: '',
            titleAlign: 'left',
            rotate: 0,
            ow: 'echarts.apache.org',
            locked: false,
            colors: ['#FA742B'],
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
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        min: () => 0,
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.height}',
        key: 'height',
        type: Props["@:{eprops#number}"],
        min: () => 0,
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1
    }, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'() {
            return config('getFieldUrl');
        }
    }, {
        tip: '@:{lang#props.bind.fields}',
        key: 'bind',
        type: Props["@:{eprops#bind.field}"],
        json: 1,
        '@:{if.show}'() {
            return config('getFieldUrl');
        }
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.chart.title}',
        key: 'title',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.title.align}',
        key: 'titleAlign',
        type: Props['@:{eprops#text.align}'],
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
        tip: '@:{lang#props.background}',
        type: Props["@:{eprops#color}"],
        key: 'background',
        alpha: true,
        clear: true,
        json: 1
    }, {
        tip: '@:{lang#props.color.series}',
        key: 'colors',
        type: Props['@:{eprops#color.series}'],
        json: 1,
        multi: 1,
        //'@:{dock.top}': 1
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