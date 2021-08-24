/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/data-repeater/designer",["51","../../50/53","../../50/enum","../../50/61","../../50/54","../../5g/cell","../6e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let props_1 = require("../../50/61");
let transform_1 = require("../../50/54");
let cell_1 = require("../../5g/cell");
let normal_1 = require("../6e");
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
            view: "5m/data-repeater/dshow"
        });
    }
}).static({
    type: 'data-repeater',
    as: enum_1['gg'] | enum_1['gh'],
    title: 'jz',
    icon: '&#xe636;',
    '_iV': enum_1['gl'] |
        enum_1['gr'],
    '_ix': {
        root: 1
    },
    '_iv': {
        barcode: 1,
        image: 1,
        qrcode: 1,
        text: 1,
        repeat: 1,
        line: 1,
        rect: 1,
        circle: 1,
        'data-dtable': 1
    },
    '_iy': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '_iS'(props, added) {
        let parentBind = props.bind;
        if (parentBind &&
            !parentBind.id) { //如果父数据容器无数据源绑定则默认为当前元素的
            let addedBind = added.props.bind;
            parentBind.id = addedBind.id;
            parentBind.url = addedBind.url;
        }
    },
    '_he'(props, rotated, fromPropsPanel) {
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
    '_hd'(x, y) {
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
            x: const_1['ge'](x),
            y: const_1['ge'](y),
            //rotate: 0,
            alpha: 1,
            focusRow: -1,
            focusCol: -1,
            bind: {
                id: '',
                url: '',
                fields: []
            },
            hspace: const_1['ge'](20),
            vspace: const_1['ge'](20),
            rows: [{
                    height: const_1['ge'](cell_1["_kq"]),
                    cols: [{
                            width: const_1['ge'](cell_1["_kr"]),
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
            '_jx'(dest, { rows }) {
                transform_1['gt'](dest, rows, transformFields);
            },
            '_hL'({ rows }, toUnit) {
                transform_1['gu'](rows, toUnit, transformFields);
            },
            '_iN'(props, step, dest) {
                transform_1['gs'](props, step, transformFields, dest);
            }
        }, {
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
            key: 'width',
            read: transform_1["gg"],
            type: props_1["gp"],
            json: 1
        }, {
            tip: 'h4',
            key: 'height',
            read: transform_1["gg"],
            type: props_1["gp"],
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
            tip: 'h6',
            key: 'alpha',
            type: props_1["gd"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: 'jv',
            key: 'bind',
            type: props_1['gk'],
            textKey: 'name',
            valueKey: 'id',
            '_jx'(destProps, srcProps) {
                destProps.bind = srcProps.bind;
            },
            read({ id }) {
                return id;
            },
            write(v, { bind }) {
                let listMap = State.get('gv');
                let dest = listMap && listMap[v];
                bind.id = v;
                if (dest) {
                    bind.url = dest.url;
                }
                return bind;
            },
            items() {
                return State.get('gu') || [];
            },
            '_jN'() {
                return config('getFieldUrl');
            }
        }, {
            type: props_1['gE']
        }, {
            tip: 'ih',
            type: props_1['gd'],
            json: 1,
            key: 'hspace',
            min: 0,
            '_hM': 1,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            max: () => const_1['ge'](200)
        }, {
            tip: 'ii',
            type: props_1['gd'],
            json: 1,
            key: 'vspace',
            min: 0,
            '_hM': 1,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            write: transform_1["gl"],
            max: () => const_1['ge'](200)
        }, {
            type: props_1["gE"],
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: 'iY',
            type: props_1["gt"],
            '_ka': 1,
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["gs"],
            '_jN'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["gE"]
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