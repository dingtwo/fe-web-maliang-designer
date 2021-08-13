/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/chart-line/designer",["5c","../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../6p"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let normal_1 = require("../6p");
let { config } = magix_1;
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
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/chart-line/index"
        });
    }
}).static({
    type: 'chart-line',
    title: 'oy',
    icon: '&#xe64b;',
    '_oG': enum_1['mb'] |
        enum_1['mc'] |
        enum_1['me'],
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_pR'(props) {
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
    '_m2'(x, y) {
        return {
            background: '',
            alpha: 1,
            width: const_1['l3'](500),
            height: const_1['l3'](300),
            x: const_1['l3'](x),
            y: const_1['l3'](y),
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
        };
    },
    props: [{
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1,
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1,
        }, {
            tip: 'nR',
            type: props_1["l2"],
            key: 'width',
            min: () => 0,
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            type: props_1["l2"],
            min: () => 0,
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nT',
            type: props_1["l2"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            type: props_1["ms"],
            '_py'() {
                return config('getFieldUrl');
            }
        }, {
            tip: 'nW',
            key: 'bind',
            type: props_1["mb"],
            json: 1,
            '_py'() {
                return config('getFieldUrl');
            },
            write(v, { xBind }) {
                resetOtherBindInfo(v, xBind);
                return v;
            }
        }, {
            tip: 'oz',
            key: 'xBind',
            type: props_1["mb"],
            json: 1,
            max: 1,
            '_py'() {
                return config('getFieldUrl');
            },
            write(v, { bind }) {
                resetOtherBindInfo(v, bind);
                return v;
            }
        }, {
            type: props_1["ms"]
        }, {
            tip: 'ov',
            key: 'title',
            type: props_1["ma"],
            json: 1
        }, {
            tip: 'ow',
            key: 'titleAlign',
            type: props_1['mB'],
            json: 1
        }, {
            type: props_1["ms"]
        }, {
            tip: 'nU',
            key: 'alpha',
            type: props_1["l2"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: 'oh',
            type: props_1["l3"],
            key: 'background',
            alpha: true,
            clear: true,
            json: 1
        }, {
            tip: 'ox',
            key: 'colors',
            type: props_1['mC'],
            json: 1,
            multi: 1,
        }, {
            type: props_1["ms"]
        }, {
            tip: 'n1',
            key: 'ow',
            type: props_1["mm"]
        }, {
            tip: 'n3',
            key: 'ename',
            type: props_1["ma"],
            json: 1
        }, {
            tip: 'n4',
            key: 'locked',
            type: props_1["l4"],
            free: true,
            json: 1
        }]
});

});