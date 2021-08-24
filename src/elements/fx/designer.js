/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/fx/designer",["../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let normal_1 = require("../6e");
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/fx/dshow"
        });
    }
}).static({
    type: 'fx',
    title: 'j0',
    icon: '&#xe628;',
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
    '_hd'(x, y) {
        return {
            height: const_1['ge'](300),
            alpha: 1,
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            rotate: 0,
            width: const_1['ge'](400),
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
            tip: 'h1',
            type: props_1["gd"],
            key: 'x',
            '_hM': 1,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'h2',
            type: props_1["gd"],
            key: 'y',
            '_hM': 1,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'h3',
            type: props_1["gd"],
            key: 'width',
            '_hM': 1,
            min: () => const_1["ge"](20),
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'h4',
            key: 'height',
            '_hM': 1,
            type: props_1["gd"],
            min: () => const_1["ge"](20),
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            json: 1
        }, {
            tip: 'h5',
            type: props_1["gd"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
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
            type: props_1["gE"]
        }, {
            tip: 'iG',
            key: 'title',
            type: props_1["gm"],
            json: 1
        }, {
            tip: 'j1',
            key: 'grid',
            type: props_1["gf"],
            json: 1
        }, {
            tip: 'j2',
            key: 'zoom',
            type: props_1["gf"],
            json: 1
        }, {
            tip: 'j3',
            key: 'xAxisTitle',
            type: props_1["gm"],
            json: 1
        }, {
            tip: 'j4',
            type: props_1["gz"],
            key: 'xAxisRange',
            json: 1
        }, {
            tip: 'j5',
            key: 'yAxisTitle',
            type: props_1["gm"],
            json: 1
        }, {
            tip: 'j6',
            type: props_1["gz"],
            key: 'yAxisRange',
            json: 1
        }, {
            tip: 'j7',
            type: props_1["gf"],
            key: 'xLine',
            json: 1
        }, {
            tip: 'j8',
            type: props_1["gf"],
            key: 'yLine',
            json: 1
        }, {
            type: props_1["gE"]
        }, {
            key: 'data',
            type: props_1["gA"],
            json: 1
        }, {
            type: props_1["gE"]
        }, {
            key: 'annotations',
            type: props_1["gB"],
            json: 1
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