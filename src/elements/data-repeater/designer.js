/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/data-repeater/designer",["5c","../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../../5r/cell","../6p"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let cell_1 = require("../../5r/cell");
let normal_1 = require("../6p");
let { State, config } = magix_1;
let transformFields = ['width', 'height', 'borderLeftWidth', 'borderTopWidth', 'borderBottomWidth', 'borderRightWidth'];
let checkChildrenDataBind = (subs, currentBind, force) => {
    if (subs &&
        subs.length) {
        let subBindCount = 0, subBind;
        if (!force) {
            for (let { props: { bind } } of subs) {
                if (bind &&
                    bind.id) {
                    subBindCount++;
                    subBind = bind;
                }
            }
        }
        if (subBindCount == 1 &&
            !currentBind.id) {
            currentBind.id = subBind.id;
            currentBind.url = subBind.url;
        }
        else {
            for (let { props: { bind } } of subs) {
                if (bind &&
                    bind.id != currentBind.id) {
                    bind.id = '';
                    if (bind.fields) {
                        bind.fields.length = 0;
                    }
                    bind.url = '';
                }
            }
        }
    }
};
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/data-repeater/dshow"
        });
    }
}).static({
    type: 'data-repeater',
    as: enum_1['l5'] | enum_1['l6'],
    title: 'po',
    icon: '&#xe636;',
    '_oG': enum_1['m_'] |
        enum_1['mf'],
    '_oi': {
        root: 1
    },
    '_og': {
        barcode: 1,
        image: 1,
        qrcode: 1,
        text: 1,
        repeat: 1,
        line: 1,
        rect: 1,
        circle: 1
    },
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_oD'(props, added) {
        let parentBind = props.bind;
        if (parentBind &&
            !parentBind.id) { //如果父数据容器无数据源绑定则默认为当前元素的
            let addedBind = added.props.bind;
            parentBind.id = addedBind.id;
            parentBind.url = addedBind.url;
        }
    },
    '_m3'(props, rotated, fromPropsPanel) {
        let { rows, bind } = props;
        let height = 0, width = 0;
        for (let row of rows) {
            let w = 0;
            for (let col of row.cols) {
                w += col.width;
                checkChildrenDataBind(col.elements, bind, fromPropsPanel);
            }
            if (w > width) {
                width = w;
            }
            height += row.height;
        }
        props.width = width;
        props.height = height;
        // if (old) {
        //     let newRotatedRect=Transform['@:{transform#rotate.rect}'](props);
        //     let n = newRotatedRect['@:{point}'][0];
        //     props.x += old.x - n.x;
        //     props.y += old.y - n.y;
        // }
    },
    '_m2'(x, y) {
        let borderWidth = 0;
        // let elementsMap = State.get<Report.StageElementCtrlMapObject>('@:{global#stage.elements.map}');
        // let textType = 'text';
        // let textCtrl = elementsMap[textType];
        // let textElement = {
        //     id: Magix.guid(textType),
        //     type: textType,
        //     ctrl: textCtrl,
        //     props: textCtrl['@:{get.props}'](10, 10)
        // };
        // textElement.props.text = 'abc';
        // textElement.props.ename = '文本';
        return {
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            //rotate: 0,
            alpha: 1,
            focusRow: -1,
            focusCol: -1,
            bind: {
                id: '',
                url: '',
                fields: []
            },
            hspace: const_1['l3'](20),
            vspace: const_1['l3'](20),
            rows: [{
                    height: const_1['l3'](cell_1["_qb"]),
                    cols: [{
                            width: const_1['l3'](cell_1["_qc"]),
                            elements: [
                            //textElement
                            ],
                            borderLeftStyle: 'solid',
                            borderLeftWidth: borderWidth,
                            borderLeftTopRadius: 0,
                            borderRightTopRadius: 0,
                            borderLeftBottomRadius: 0,
                            borderRightBottomRadius: 0,
                            borderLeftColor: '#000000',
                            borderTopStyle: 'solid',
                            borderTopWidth: borderWidth,
                            borderTopColor: '#000000',
                            borderRightStyle: 'solid',
                            borderRightWidth: borderWidth,
                            borderRightColor: '#000000',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: borderWidth,
                            borderBottomColor: '#000000'
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
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
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
            tip: 'pk',
            key: 'bind',
            type: props_1['l9'],
            textKey: 'name',
            valueKey: 'id',
            '_pi'(destProps, srcProps) {
                destProps.bind = srcProps.bind;
            },
            read({ id }) {
                return id;
            },
            write(v, { bind }) {
                let listMap = State.get('mj');
                let dest = listMap && listMap[v];
                bind.id = v;
                if (dest) {
                    bind.url = dest.url;
                }
                return bind;
            },
            items() {
                return State.get('mi') || [];
            },
            '_py'() {
                return config('getFieldUrl');
            }
        }, {
            type: props_1['ms']
        }, {
            tip: 'n7',
            type: props_1['l2'],
            json: 1,
            key: 'hspace',
            min: 0,
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            max: () => const_1['l3'](200)
        }, {
            tip: 'n8',
            type: props_1['l2'],
            json: 1,
            key: 'vspace',
            min: 0,
            '_nA': 1,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            max: () => const_1['l3'](200)
        }, {
            type: props_1["ms"],
            '_py'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: 'oN',
            type: props_1["mh"],
            '_pW': 1,
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