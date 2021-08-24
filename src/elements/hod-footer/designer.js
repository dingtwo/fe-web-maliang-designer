/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/hod-footer/designer",["51","../../50/53","../../50/enum","../../50/61","../../50/54","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let normal_1 = require("../6e");
let { State } = magix_1;
let transformFields = [
    'width',
    'height',
    'borderLeftWidth',
    'borderTopWidth',
    'borderBottomWidth',
    'borderRightWidth',
];
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "5m/hod-footer/dshow",
        });
        let update = () => {
            let element = this.get('element');
            let page = State.get('gm');
            let scale = State.get('ge');
            let { ctrl, props } = element;
            props.rows[0].cols[0].width = page.width * scale;
            ctrl['_he'](props);
        };
        State.on('gj', update);
        this.on('destroy', () => {
            State.off('gj', update);
        });
    },
}).static({
    type: 'hod-footer',
    as: enum_1['gg'],
    title: 'j9',
    icon: '&#xe675;',
    '_iV': enum_1['gl'] | enum_1['gr'],
    '_ix': {
        root: 1,
    },
    '_hh': 1,
    '_iy': [
        {
            key: 'x',
            use: 'x',
        },
        {
            key: 'y',
            use: 'y',
        },
    ],
    '_he'(props) {
        let { rows } = props;
        let page = State.get('gm');
        let scale = State.get('ge');
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
    '_hd'() {
        let page = State.get('gm');
        return {
            x: 0,
            y: 0,
            //rotate: 0,
            alpha: 1,
            focusRow: -1,
            focusCol: -1,
            pinX: true,
            pinY: true,
            // NOTICE: 去掉帮助信息
            // help: '//github.com/xinglie/report-designer/issues/12',
            help: '',
            rows: [
                {
                    height: const_1['ge'](40),
                    cols: [
                        {
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
                            borderTopWidth: const_1['ge'](1),
                            borderTopColor: '#cccccc',
                            borderRightStyle: 'dashed',
                            borderRightWidth: 0,
                            borderRightColor: '#cccccc',
                            borderBottomStyle: 'dashed',
                            borderBottomWidth: 0,
                            borderBottomColor: '#cccccc',
                        },
                    ],
                },
            ],
            locked: false,
        };
    },
    props: [
        {
            key: 'rows',
            '_jx'(dest, { rows }) {
                transform_1['gt'](dest, rows, transformFields);
            },
            '_hL'({ rows }, toUnit) {
                transform_1['gu'](rows, toUnit, transformFields);
            },
            '_iN'(props, step, dest) {
                transform_1['gs'](props, step, transformFields, dest);
            },
        },
        {
            //tip: '@:{lang#props.x}',
            //type: Props["@:{eprops#label}"],
            key: 'x',
            //read: Transform["@:{transform#to.show.value}"],
            json: 1,
        },
        {
            //tip: '@:{lang#props.y}',
            //type: Props["@:{eprops#label}"],
            key: 'y',
            //read: Transform["@:{transform#to.show.value}"],
            json: 1,
        },
        {
            tip: 'h3',
            key: 'width',
            read: transform_1['gg'],
            type: props_1['gp'],
            json: 1,
        },
        {
            tip: 'h4',
            key: 'height',
            read: transform_1['gg'],
            type: props_1['gp'],
            json: 1,
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
        {
            tip: 'h6',
            key: 'alpha',
            type: props_1['gd'],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1,
        },
        {
            type: props_1['gE'],
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            tip: 'k_',
            type: props_1['gd'],
            read(x, props) {
                let row = props.rows[0];
                return transform_1['gg'](row.height);
            },
            write(x, props, e, changed) {
                let v = transform_1['gl'](x);
                props.rows[0].height = v;
                changed['_gg'] = 1;
            },
            fixed: const_1['gU'],
            step: const_1['gT'],
            min: () => const_1['ge'](20),
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            type: props_1['gs'],
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            },
        },
        {
            type: props_1['gE'],
        },
        // {
        //   tip: '@:{lang#props.help}',
        //   type: Props['@:{eprops#link}'],
        //   key: 'help',
        // },
        {
            tip: 'id',
            key: 'ename',
            type: props_1['gm'],
            json: 1,
        },
        {
            tip: 'ie',
            key: 'locked',
            type: props_1['gf'],
            free: true,
            json: 1,
        },
    ],
});

});