/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/fx/designer",["../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../5r"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/fx/dshow"
        });
    }
}).static({
    type: 'fx',
    title: 'hr',
    icon: '&#xe628;',
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
            height: const_1['dF'](300),
            alpha: 1,
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            rotate: 0,
            width: const_1['dF'](400),
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
        };
    },
    props: [{
            tip: 'fr',
            type: props_1["dE"],
            key: 'x',
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'ft',
            type: props_1["dE"],
            key: 'width',
            '_fc': 1,
            min: () => const_1["dF"](20),
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fu',
            key: 'height',
            '_fc': 1,
            type: props_1["dE"],
            min: () => const_1["dF"](20),
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fv',
            type: props_1["dE"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
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
            type: props_1["d5"]
        }, {
            tip: 'f8',
            key: 'title',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'hs',
            key: 'grid',
            type: props_1["dG"],
            json: 1
        }, {
            tip: 'ht',
            key: 'zoom',
            type: props_1["dG"],
            json: 1
        }, {
            tip: 'hu',
            key: 'xAxisTitle',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'hv',
            type: props_1["d0"],
            key: 'xAxisRange',
            json: 1
        }, {
            tip: 'hw',
            key: 'yAxisTitle',
            type: props_1["dN"],
            json: 1
        }, {
            tip: 'hx',
            type: props_1["d0"],
            key: 'yAxisRange',
            json: 1
        }, {
            tip: 'hy',
            type: props_1["dG"],
            key: 'xLine',
            json: 1
        }, {
            tip: 'hz',
            type: props_1["dG"],
            key: 'yLine',
            json: 1
        }, {
            type: props_1["d5"]
        }, {
            key: 'data',
            type: props_1["d1"],
            json: 1
        }, {
            type: props_1["d5"]
        }, {
            key: 'annotations',
            type: props_1["d2"],
            json: 1
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