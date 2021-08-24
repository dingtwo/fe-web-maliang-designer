/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/chart-line/designer",["51","../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let normal_1 = require("../6e");
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
            view: "5m/chart-line/index"
        });
    }
}).static({
    type: 'chart-line',
    title: 'iJ',
    icon: '&#xe64b;',
    '_iV': enum_1['gn'] |
        enum_1['go'] |
        enum_1['gq'],
    '_iy': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_j6'(props) {
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
    '_hd'(x, y) {
        return {
            background: '',
            alpha: 1,
            width: const_1['ge'](500),
            height: const_1['ge'](300),
            x: const_1['ge'](x),
            y: const_1['ge'](y),
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
            tip: 'h1',
            type: props_1["gd"],
            key: 'x',
            step: const_1["gT"],
            fixed: const_1["gU"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            '_hM': 1,
            json: 1,
        }, {
            tip: 'h2',
            type: props_1["gd"],
            key: 'y',
            step: const_1["gT"],
            fixed: const_1["gU"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            '_hM': 1,
            json: 1,
        }, {
            tip: 'h3',
            type: props_1["gd"],
            key: 'width',
            min: () => 0,
            step: const_1["gT"],
            fixed: const_1["gU"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            '_hM': 1,
            json: 1
        }, {
            tip: 'h4',
            key: 'height',
            type: props_1["gd"],
            min: () => 0,
            step: const_1["gT"],
            fixed: const_1["gU"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            '_hM': 1,
            json: 1
        }, {
            tip: 'h5',
            type: props_1["gd"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            type: props_1["gE"],
            '_jN'() {
                return config('getFieldUrl');
            }
        }, {
            tip: 'h8',
            key: 'bind',
            type: props_1["gn"],
            json: 1,
            '_jN'() {
                return config('getFieldUrl');
            },
            write(v, { xBind }) {
                resetOtherBindInfo(v, xBind);
                return v;
            }
        }, {
            tip: 'iK',
            key: 'xBind',
            type: props_1["gn"],
            json: 1,
            max: 1,
            '_jN'() {
                return config('getFieldUrl');
            },
            write(v, { bind }) {
                resetOtherBindInfo(v, bind);
                return v;
            }
        }, {
            type: props_1["gE"]
        }, {
            tip: 'iG',
            key: 'title',
            type: props_1["gm"],
            json: 1
        }, {
            tip: 'iH',
            key: 'titleAlign',
            type: props_1['gN'],
            json: 1
        }, {
            type: props_1["gE"]
        }, {
            tip: 'h6',
            key: 'alpha',
            type: props_1["gd"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: 'is',
            type: props_1["ge"],
            key: 'background',
            alpha: true,
            clear: true,
            json: 1
        }, {
            tip: 'iI',
            key: 'colors',
            type: props_1['gO'],
            json: 1,
            multi: 1,
        }, {
            type: props_1["gE"]
        }, {
            tip: 'ic',
            key: 'ow',
            type: props_1["gy"]
        }, {
            tip: 'id',
            key: 'ename',
            type: props_1["gm"],
            json: 1
        }, {
            tip: 'ie',
            key: 'locked',
            type: props_1["gf"],
            free: true,
            json: 1
        }]
});

});