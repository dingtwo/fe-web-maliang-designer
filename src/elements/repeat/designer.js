/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/repeat/designer",["4e","../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../5r"],(require,exports,module)=>{


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
            view: "53/repeat/dshow"
        });
    }
}).static({
    type: 'repeat',
    title: 'iK',
    icon: '&#xe78f;',
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
            rotate: 0,
            width: const_1['dF'](200),
            tfs: const_1['dF'](14),
            radius: 0,
            image: '',
            webUrl: '',
            repeat: 'repeat',
            imageWidth: 0,
            imageHeight: 0,
            backgroundXOffset: 0,
            backgroundYOffset: 0,
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
                e.width = const_1["dF"](e.width);
                e.height = const_1["dF"](e.height);
                props.imageWidth = transform_1["dM"](e.width);
                props.imageHeight = transform_1["dM"](e.height);
                return v;
            },
            '_ha'(props) {
                return !props.bind.url && config('getImageUrl') && !props.webUrl;
            },
            json: 1
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
            type: props_1["d5"],
            '_ha'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
        }, {
            tip: 'is',
            key: 'repeat',
            type: props_1["dL"],
            '_ha'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
            items: [{
                    text: 'ix',
                    value: 'repeat'
                }, {
                    text: 'iv',
                    value: 'repeat-x'
                }, {
                    text: 'iw',
                    value: 'repeat-y'
                }, {
                    text: 'it',
                    value: 'full'
                }, {
                    text: 'iu',
                    value: 'no-repeat'
                }],
            json: 1
        }, {
            tip: 'iH',
            key: 'radius',
            '_fc': 1,
            type: props_1["dE"],
            min: 0,
            json: 1,
            read: transform_1["dH"],
            write: transform_1["dM"],
            fixed: const_1["ek"],
            step: const_1["ej"],
            '_ha'(props) {
                return props.image || props.bind.url || props.webUrl;
            },
        }, {
            tip: 'iy',
            key: 'imageWidth',
            '_fc': 1,
            type: props_1["dE"],
            min: 0,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_ha'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1
        }, {
            tip: 'iz',
            key: 'imageHeight',
            '_fc': 1,
            type: props_1["dE"],
            min: 0,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            '_ha'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1
        }, {
            tip: 'iA',
            key: 'backgroundXOffset',
            '_fc': 1,
            type: props_1["dE"],
            min: () => -const_1['dF'](const_1['dW']),
            max: () => const_1['dF'](const_1['dW']),
            step: const_1["ej"],
            fixed: const_1["ek"],
            '_ha'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
            json: 1
        }, {
            tip: 'iB',
            key: 'backgroundYOffset',
            '_fc': 1,
            type: props_1["dE"],
            min: () => -const_1['dF'](const_1['dX']),
            max: () => const_1['dF'](const_1['dX']),
            step: const_1["ej"],
            fixed: const_1["ek"],
            '_ha'({ image, bind, webUrl, repeat }) {
                return (image || bind.url || webUrl) && repeat != 'full';
            },
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