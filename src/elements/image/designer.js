/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/image/designer",["4e","../../4d/5e","../../4d/4h","../5r","../../4d/4g","../../4d/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/image/dshow"
        });
    }
}).static({
    type: 'image',
    title: 'hH',
    icon: '&#xe650;',
    '_gi': enum_1['dO'] |
        enum_1['dP'] |
        enum_1['dR'] |
        enum_1['dS'],
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eE'(x, y) {
        return {
            height: const_1['dF'](100),
            alpha: 1,
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            tfs: const_1['dF'](14),
            rotate: 0,
            rotateX: false,
            rotateY: false,
            width: const_1['dF'](200),
            image: '',
            webUrl: '',
            locked: false,
            help: 'github.com/xinglie/report-designer/issues/31',
            bind: {
                url: '',
                id: '',
                fields: []
            },
        };
    },
    props: [{
            key: 'tfs',
            '_fc': 1,
        }, {
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
            min: () => 0,
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
            min: () => 0,
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
            type: props_1["d5"],
            '_ha'(props) {
                return !props.bind.url && !props.image;
            }
        }, {
            tip: 'hI',
            key: 'webUrl',
            type: props_1['dN'],
            json: 1,
            '_ha'(props) {
                return !props.bind.url && !props.image;
            },
        }, {
            type: props_1["d5"],
            '_ha'(props) {
                return !props.bind.url && !props.webUrl;
            }
        }, {
            tip: 'hJ',
            key: 'image',
            type: props_1["dK"],
            write(v, props, e) {
                if (!v) {
                    e.width = 200;
                    e.height = 100;
                }
                e.width = const_1["dF"](e.width);
                e.height = const_1["dF"](e.height);
                props.width = transform_1["dM"](e.width);
                props.height = transform_1["dM"](e.height);
                return v;
            },
            json: 1,
            '_ha'(props) {
                return !props.bind.url && config('getImageUrl') && !props.webUrl;
            }
        }, {
            tip: 'hK',
            type: props_1["dM"],
            key: 'image',
            '_ha'(props) {
                return props.image;
            }
        }, {
            type: props_1["d5"],
            '_ha'(props) {
                return !props.image && config('getFieldUrl') && !props.webUrl;
            }
        }, {
            tip: 'fy',
            key: 'bind',
            type: props_1["dO"],
            json: 1,
            max: 1,
            '_ha'(props) {
                return !props.image && config('getFieldUrl') && !props.webUrl;
            }
        }, {
            type: props_1["d5"]
        }, {
            tip: 'hL',
            type: props_1["dG"],
            key: 'rotateX',
            json: 1
        }, {
            tip: 'hM',
            type: props_1["dG"],
            key: 'rotateY',
            json: 1
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fE',
            type: props_1["dZ"],
            key: 'help'
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