/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/batch-text/designer",["5c","../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../6p"],(require,exports,module)=>{


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
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/batch-text/dshow"
        });
    }
}).static({
    type: 'batch-text',
    title: 'oa',
    icon: '&#xe6bc;',
    '_oG': enum_1['mb'] |
        enum_1['mc'] |
        enum_1['me'] |
        enum_1['mf'],
    '_oi': {
        root: 1
    },
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_m2'(x, y) {
        return {
            background: '',
            height: const_1['l3'](25),
            alpha: 1,
            text: '',
            //'@:{show.text}': 1,
            letterspacing: 0,
            autoReturn: false,
            richtext: false,
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            rotate: 0,
            width: const_1['l3'](200),
            hspace: const_1['l3'](30),
            vspace: const_1['l3'](30),
            forecolor: '#000000',
            fontsize: const_1['l3'](14),
            fontfamily: 'Microsoft YaHei',
            locked: false,
            styleBold: false,
            styleUnderline: false,
            styleItalic: false,
            styleStrike: false,
            styleOverline: false,
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
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1,
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1,
        }, {
            tip: 'nR',
            type: props_1["l2"],
            key: 'width',
            min: () => 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            type: props_1["l2"],
            min: () => 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
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
            '_py'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            tip: 'nW',
            key: 'bind',
            type: props_1["mb"],
            json: 1,
            //'@:{dock.top}': 1,
            max: 1,
            '_py'(props) {
                return !props.text && config('getFieldUrl');
            }
        }, {
            tip: 'ob',
            key: 'format',
            type: props_1["mx"],
            json: 1,
            '_py'(props) {
                return props.bind.url;
            }
        }, {
            type: props_1["ms"]
        }, {
            tip: 'n7',
            type: props_1['l2'],
            json: 1,
            key: 'hspace',
            min: 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            max: () => const_1['l3'](100)
        }, {
            tip: 'n8',
            type: props_1['l2'],
            json: 1,
            key: 'vspace',
            min: 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            max: () => const_1['l3'](100)
        }, {
            type: props_1["ms"]
        }, {
            tip: 'oc',
            type: props_1['l4'],
            key: 'autoReturn',
            json: 1
        }, {
            tip: 'od',
            type: props_1['l4'],
            key: 'richtext',
            json: 1
        }, {
            tip: 'oe',
            key: 'fontsize',
            type: props_1["l2"],
            min: 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'of',
            key: 'fontfamily',
            type: props_1["l9"],
            items: const_1["mD"],
            json: 1
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
            tip: 'og',
            key: 'letterspacing',
            type: props_1["l2"],
            min: 0,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            json: 1
        }, {
            tip: 'oh',
            key: 'background',
            clear: true,
            alpha: true,
            type: props_1["l3"],
            json: 1
        }, {
            tip: 'oi',
            key: 'forecolor',
            type: props_1["l3"],
            json: 1
        }, {
            tip: 'oj',
            type: props_1["l5"],
            '_pi'(dest, props) {
                dest.styleBold = props.styleBold;
                dest.styleUnderline = props.styleUnderline;
                dest.styleItalic = props.styleItalic;
                dest.styleStrike = props.styleStrike;
                dest.styleOverline = props.styleOverline;
            }
        }, {
            tip: 'ok',
            type: props_1["l6"],
            '_pi'(dest, props) {
                dest.hpos = props.hpos;
                dest.vpos = props.vpos;
            }
        }, {
            type: props_1["ms"]
        }, {
            tip: 'ol',
            key: 'borderwidth',
            type: props_1["l2"],
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            '_nA': 1,
            min: 0,
            json: 1
        }, {
            tip: 'om',
            key: 'bordertype',
            type: props_1["l9"],
            items: const_1['mE'],
            json: 1
        }, {
            tip: 'on',
            key: 'bordercolor',
            type: props_1["l3"],
            json: 1
        }, {
            type: props_1['ms']
        }, {
            tip: 'n2',
            type: props_1["mm"],
            key: 'help'
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