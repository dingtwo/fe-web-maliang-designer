/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/chart-pie/designer",["4e","../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../5r"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/chart-pie/index"
        });
    }
}).static({
    type: 'chart-pie',
    title: 'gd',
    icon: '&#xe6d4;',
    '_gi': enum_1['dO'] |
        enum_1['dP'] |
        enum_1['dR'],
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eE'(x, y) {
        return {
            background: '',
            alpha: 1,
            width: const_1['dF'](500),
            height: const_1['dF'](300),
            x: const_1['dF'](x),
            y: const_1['dF'](y),
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
        };
    },
    props: [{
            tip: 'fr',
            type: props_1["dE"],
            key: 'x',
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'ft',
            type: props_1["dE"],
            key: 'width',
            step: const_1["ej"],
            fixed: const_1["ek"],
            min: () => 0,
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fu',
            key: 'height',
            type: props_1["dE"],
            min: () => 0,
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_fc': 1,
            json: 1
        }, {
            tip: 'fv',
            type: props_1["dE"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }, {
            type: props_1["d5"],
            '_ha'() {
                return config('getFieldUrl');
            }
        }, {
            tip: 'fy',
            key: 'bind',
            type: props_1["dO"],
            json: 1,
            '_ha'() {
                return config('getFieldUrl');
            }
        }, {
            type: props_1["d5"]
        }, {
            tip: 'f8',
            key: 'title',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'f9',
            key: 'titleAlign',
            type: props_1['ed'],
            json: 1
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fw',
            key: 'alpha',
            type: props_1["dE"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: 'fU',
            type: props_1["dF"],
            key: 'background',
            alpha: true,
            clear: true,
            json: 1
        }, {
            tip: 'g_',
            key: 'colors',
            type: props_1['ee'],
            json: 1,
            multi: 1,
            //'@:{dock.top}': 1
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fD',
            key: 'ow',
            type: props_1["dZ"]
        }, {
            tip: 'fF',
            key: 'ename',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'fG',
            key: 'locked',
            type: props_1["dG"],
            free: true,
            json: 1
        }]
});

});