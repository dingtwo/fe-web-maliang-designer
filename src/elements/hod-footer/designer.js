/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/hod-footer/designer",["5c","../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../6p"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let normal_1 = require("../6p");
let { State } = magix_1;
let transformFields = ['width', 'height', 'borderLeftWidth', 'borderTopWidth', 'borderBottomWidth', 'borderRightWidth'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/hod-footer/dshow"
        });
        let update = () => {
            let element = this.get('element');
            let page = State.get('ma');
            let scale = State.get('l3');
            let { ctrl, props } = element;
            props.rows[0].cols[0].width = page.width * scale;
            ctrl['_m3'](props);
        };
        State.on('l8', update);
        this.on('destroy', () => {
            State.off('l8', update);
        });
    }
}).static({
    type: 'hod-footer',
    as: enum_1['l5'],
    title: 'pY',
    icon: '&#xe675;',
    '_oG': enum_1['m_'] |
        enum_1['mf'],
    '_oi': {
        root: 1
    },
    '_m6': 1,
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_m3'(props) {
        let { rows } = props;
        let page = State.get('ma');
        let scale = State.get('l3');
        let height = 0, width = 0;
        for (let row of rows) {
            let w = 0;
            for (let col of row.cols) {
                w += col.width;
            }
            if (w > width) {
                width = w;
            }
            height += row.height;
        }
        props.width = width;
        props.height = height;
        props.x = 0;
        props.y = page.pages * page.height * scale - height - page.marginBottom * scale;
    },
    '_m2'() {
        let page = State.get('ma');
        return {
            x: 0,
            y: 0,
            //rotate: 0,
            alpha: 1,
            focusRow: -1,
            focusCol: -1,
            pinX: true,
            pinY: true,
            help: '//github.com/xinglie/report-designer/issues/12',
            rows: [{
                    height: const_1['l3'](40),
                    cols: [{
                            width: page.width,
                            elements: [],
                            borderLeftTopRadius: 0,
                            borderRightTopRadius: 0,
                            borderLeftBottomRadius: 0,
                            borderRightBottomRadius: 0,
                            borderLeftStyle: 'dashed',
                            borderLeftWidth: 0,
                            borderLeftColor: '#cccccc',
                            borderTopStyle: 'dashed',
                            borderTopWidth: const_1['l3'](1),
                            borderTopColor: '#cccccc',
                            borderRightStyle: 'dashed',
                            borderRightWidth: 0,
                            borderRightColor: '#cccccc',
                            borderBottomStyle: 'dashed',
                            borderBottomWidth: 0,
                            borderBottomColor: '#cccccc'
                        }]
                }],
            locked: false
        };
    },
    props: [{
            key: 'rows',
            '_pi'(dest, { rows }) {
                transform_1['mh'](dest, rows, transformFields);
            },
            '_nz'({ rows }, toUnit) {
                transform_1['mi'](rows, toUnit, transformFields);
            },
            '_oy'(props, step, dest) {
                transform_1['mg'](props, step, transformFields, dest);
            }
        }, {
            //tip: '@:{lang#props.x}',
            //type: Props["@:{eprops#label}"],
            key: 'x',
            //read: Transform["@:{transform#to.show.value}"],
            json: 1
        }, {
            //tip: '@:{lang#props.y}',
            //type: Props["@:{eprops#label}"],
            key: 'y',
            //read: Transform["@:{transform#to.show.value}"],
            json: 1
        }, {
            tip: 'nR',
            key: 'width',
            read: transform_1["l5"],
            type: props_1["md"],
            json: 1
        }, {
            tip: 'nS',
            key: 'height',
            read: transform_1["l5"],
            type: props_1["md"],
            json: 1
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
        {
            tip: 'nU',
            key: 'alpha',
            type: props_1["l2"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            type: props_1["ms"],
            '_py'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: 'pZ',
            type: props_1["l2"],
            read(x, props) {
                let row = props.rows[0];
                return transform_1["l5"](row.height);
            },
            write(x, props, e, changed) {
                let v = transform_1["m_"](x);
                props.rows[0].height = v;
                changed['_l5'] = 1;
            },
            fixed: const_1["mI"],
            step: const_1["mH"],
            min: () => const_1["l3"](20),
            '_py'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["mg"],
            '_py'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["ms"]
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