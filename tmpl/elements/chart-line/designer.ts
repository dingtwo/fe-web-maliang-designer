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
//当数据绑定与x轴绑定的数据源不一致时自动清空另外一个
let resetOtherBindInfo = (current, check) => {
    if (check.id &&
        current.id &&
        current.id != check.id) {
        check.id = '';
        check.url = '';
        check.fields.length = 0;
    }
};
export default Designer.extend({
    ctor() {
        this.set({
            view: '@:./index'
        });
    }
}).static({
    type: 'chart-line',
    title: '@:{lang#elements.chart-line}',
    icon: '&#xe64b;',
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
    '@:{get.bind.info}'(props) {
        let { bind, xBind } = props;
        let fields = [...bind.fields];
        if (bind.id == xBind.id) {
            fields.push(...xBind.fields);
        }
        return {
            id: bind.id,
            fields
        };
    },
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
            bind: {
                url: '',
                id: '',
                fields: []
            },
            xBind: {
                url: '',
                id: '',
                fields: []
            },
            ow: 'echarts.apache.org',
            locked: false,
            colors: ['#FA742B']
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
        json: 1,
    }, {
        tip: '@:{lang#props.y}',
        type: Props["@:{eprops#number}"],
        key: 'y',
        step: Const["@:{const#unit.step}"],
        fixed: Const["@:{const#unit.fixed}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        '@:{is.scale.and.unit.field}': 1,
        json: 1,
    }, {
        tip: '@:{lang#props.width}',
        type: Props["@:{eprops#number}"],
        key: 'width',
        min: () => 0,
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
        },
        write(v, { xBind }) {
            resetOtherBindInfo(v, xBind);
            return v;
        }
    }, {
        tip: '@:{lang#props.bind.x.fields}',
        key: 'xBind',
        type: Props["@:{eprops#bind.field}"],
        json: 1,
        max: 1,
        '@:{if.show}'() {
            return config('getFieldUrl');
        },
        write(v, { bind }) {
            resetOtherBindInfo(v, bind);
            return v;
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