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
    type: 'fx',
    title: '@:{lang#elements.fx}',
    icon: '&#xe628;',
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
            height: Const['@:{const#to.unit}'](300),
            alpha: 1,
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            rotate: 0,
            width: Const['@:{const#to.unit}'](400),
            title: '',
            grid: false,
            zoom: true,
            xLine: true,
            yLine: true,
            xAxisRange: [-10, 10],
            xAxisTitle: '',
            yAxisRange: [-1, 10],
            yAxisTitle: '',
            data: [{
                color: '#e16632',
                fn: 'x^2',
                graphType: 'interval',
                closed: false
            }],
            annotations: [],
            ow: 'github.com/mauriciopoppe/function-plot',
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
        tip: '@:{lang#props.width}',
        type: Props["@:{eprops#number}"],
        key: 'width',
        '@:{is.scale.and.unit.field}': 1,
        min: () => Const["@:{const#to.unit}"](20),
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
        min: () => Const["@:{const#to.unit}"](20),
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
        tip: '@:{lang#props.chart.title}',
        key: 'title',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.page.grid}',
        key: 'grid',
        type: Props["@:{eprops#boolean}"],
        json: 1
    }, {
        tip: '@:{lang#props.disable.zoom}',
        key: 'zoom',
        type: Props["@:{eprops#boolean}"],
        json: 1
    }, {
        tip: '@:{lang#props.x.axis.title}',
        key: 'xAxisTitle',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.x.axis.range}',
        type: Props["@:{eprops#number.range}"],
        key: 'xAxisRange',
        json: 1
    }, {
        tip: '@:{lang#props.y.axis.title}',
        key: 'yAxisTitle',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.y.axis.range}',
        type: Props["@:{eprops#number.range}"],
        key: 'yAxisRange',
        json: 1
    }, {
        tip: '@:{lang#props.x.line}',
        type: Props["@:{eprops#boolean}"],
        key: 'xLine',
        json: 1
    }, {
        tip: '@:{lang#props.y.line}',
        type: Props["@:{eprops#boolean}"],
        key: 'yLine',
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        key: 'data',
        type: Props["@:{eprops#fx.expression}"],
        json: 1
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        key: 'annotations',
        type: Props["@:{eprops#fx.help}"],
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