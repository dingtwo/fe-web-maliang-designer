/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/text/designer",["4e","../../4d/4g","../../4d/5e","../../4d/4h","../5r","../../4d/enum"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
let enum_1 = require("../../4d/enum");
let { config } = magix_1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/text/dshow"
        });
    }
}).static({
    type: 'text',
    title: 'iR',
    icon: '&#xe6bc;',
    '_gi': enum_1['dO'] |
        enum_1['dP'] |
        enum_1['dR'] |
        enum_1['dS'] |
        enum_1['dT'],
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_gk'(props) {
        return !props.bind.url;
    },
    '_eE'(x, y) {
        return {
            background: '',
            height: const_1['dF'](25),
            alpha: 1,
            text: '',
            //'@:{show.text}': 1,
            letterspacing: 0,
            autoReturn: false,
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            rotate: 0,
            width: const_1['dF'](200),
            forecolor: '#000000',
            fontsize: const_1['dF'](14),
            fontfamily: 'Microsoft YaHei',
            locked: false,
            styleBold: false,
            styleUnderline: false,
            styleItalic: false,
            styleStrike: false,
            styleOverline: false,
            richtext: false,
            borderwidth: 0,
            bordercolor: '#000000',
            bordertype: 'solid',
            format: '',
            hpos: 'flex-start',
            vpos: 'flex-start',
            bind: {
                url: '',
                id: '',
                fields: []
            },
            help: 'github.com/xinglie/report-designer/issues/31',
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
            json: 1,
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1,
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
            type: props_1["d5"],
            '_ha'(props) {
                return !props.bind.url;
            }
        }, {
            tip: 'fx',
            key: 'text',
            type: props_1["dJ"],
            //'@:{dock.top}': 1,
            json: 1,
            '_ha'(props) {
                return !props.bind.url;
            }
        }, {
            type: props_1["d5"],
            '_ha'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            tip: 'fy',
            key: 'bind',
            type: props_1["dO"],
            json: 1,
            //'@:{dock.top}': 1,
            max: 1,
            '_ha'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            tip: 'fO',
            key: 'format',
            type: props_1["e_"],
            json: 1,
            '_ha'(props) {
                return props.bind.url;
            }
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fP',
            type: props_1['dG'],
            key: 'autoReturn',
            json: 1
        }, {
            tip: 'fQ',
            type: props_1['dG'],
            key: 'richtext',
            json: 1
        }, {
            tip: 'fR',
            key: 'fontsize',
            type: props_1["dE"],
            min: 0,
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fS',
            key: 'fontfamily',
            type: props_1["dL"],
            items: const_1["ef"],
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
            tip: 'fT',
            key: 'letterspacing',
            type: props_1["dE"],
            min: 0,
            '_fc': 1,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fU',
            key: 'background',
            clear: true,
            alpha: true,
            type: props_1["dF"],
            json: 1
        }, {
            tip: 'fV',
            key: 'forecolor',
            type: props_1["dF"],
            json: 1
        }, {
            tip: 'fW',
            type: props_1["dH"],
            '_gV'(dest, props) {
                dest.styleBold = props.styleBold;
                dest.styleUnderline = props.styleUnderline;
                dest.styleItalic = props.styleItalic;
                dest.styleStrike = props.styleStrike;
                dest.styleOverline = props.styleOverline;
            }
        }, {
            tip: 'fX',
            type: props_1["dI"],
            '_gV'(dest, props) {
                dest.hpos = props.hpos;
                dest.vpos = props.vpos;
            }
        }, {
            type: props_1["d5"]
        }, {
            tip: 'fY',
            key: 'borderwidth',
            type: props_1["dE"],
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            min: 0,
            json: 1
        }, {
            tip: 'fZ',
            key: 'bordertype',
            type: props_1["dL"],
            items: const_1['eg'],
            json: 1
        }, {
            tip: 'f0',
            key: 'bordercolor',
            type: props_1["dF"],
            json: 1
        }, {
            type: props_1['d5']
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