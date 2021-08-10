/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/hod-header/designer",["4e","../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../5r"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let normal_1 = require("../5r");
let { State } = magix_1;
let transformFields = ['width', 'height', 'borderLeftWidth', 'borderTopWidth', 'borderBottomWidth', 'borderRightWidth'];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "53/hod-header/dshow"
        });
        let update = () => {
            let element = this.get('element');
            let page = State.get('dN');
            let scale = State.get('dF');
            let { ctrl, props } = element;
            props.rows[0].cols[0].width = page.width * scale;
            ctrl['_eF'](props);
        };
        State.on('dK', update);
        this.on('destroy', () => {
            State.off('dK', update);
        });
    }
}).static({
    type: 'hod-header',
    as: enum_1['dH'],
    title: 'hC',
    icon: '&#xebd9;',
    '_fV': {
        root: 1
    },
    '_gi': enum_1['dM'] |
        enum_1['dS'],
    '_eI': 1,
    '_fW': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_eF'(props) {
        //let page = State.get('@:{global#stage.page}');
        //let scale = State.get('@:{global#stage.scale}');
        let { rows } = props;
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
        //props.x = 0;
        //props.y = page.marginTop * scale;
    },
    '_eE'() {
        let page = State.get('dN');
        return {
            x: 0,
            y: 0,
            pinX: true,
            pinY: true,
            help: '//github.com/xinglie/report-designer/issues/12',
            //rotate: 0,
            alpha: 1,
            focusRow: -1,
            focusCol: -1,
            rows: [{
                    height: const_1['dF'](40),
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
                            borderTopWidth: 0,
                            borderTopColor: '#cccccc',
                            borderRightStyle: 'dashed',
                            borderRightWidth: 0,
                            borderRightColor: '#cccccc',
                            borderBottomStyle: 'dashed',
                            borderBottomWidth: const_1['dF'](1),
                            borderBottomColor: '#cccccc'
                        }]
                }],
            locked: false
        };
    },
    props: [{
            key: 'rows',
            '_gV'(dest, { rows }) {
                transform_1['dU'](dest, rows, transformFields);
            },
            '_fb'({ rows }, toUnit) {
                transform_1['dV'](rows, toUnit, transformFields);
            },
            '_ga'(props, step, dest) {
                transform_1['dT'](props, step, transformFields, dest);
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
            tip: 'ft',
            key: 'width',
            read: transform_1["dH"],
            type: props_1["dQ"],
            json: 1
        }, {
            tip: 'fu',
            key: 'height',
            read: transform_1["dH"],
            type: props_1["dQ"],
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
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: 'hB',
            type: props_1["dE"],
            read(x, props) {
                let row = props.rows[0];
                return transform_1["dH"](row.height);
            },
            write(x, props) {
                let v = transform_1["dM"](x);
                props.rows[0].height = v;
            },
            fixed: const_1["ek"],
            step: const_1["ej"],
            min: () => const_1["dF"](20),
            '_ha'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["dT"],
            '_ha'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
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