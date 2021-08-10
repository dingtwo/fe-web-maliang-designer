/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-repeater/designer",["magix5","../../designer/const","../../designer/enum","../../designer/props","../../designer/transform","../../provider/cell","../normal"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let props_1 = require("../../designer/props");
let transform_1 = require("../../designer/transform");
let cell_1 = require("../../provider/cell");
let normal_1 = require("../normal");
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
            view: "elements/data-repeater/dshow"
        });
    }
}).static({
    type: 'data-repeater',
    as: enum_1['@:{enum#as.hod~rs}'] | enum_1['@:{enum#as.data.hod~rs}'],
    title: '@:{lang#elements.data.repeater~rs}',
    icon: '&#xe636;',
    '@:{modifier~rs}': enum_1['@:{enum#modifier.icon~rs}'] |
        enum_1['@:{enum#modifier.nomask~rs}'],
    '@:{allowed.to.hod~rs}': {
        root: 1
    },
    '@:{allowed.elements~rs}': {
        barcode: 1,
        image: 1,
        qrcode: 1,
        text: 1,
        repeat: 1,
        line: 1,
        rect: 1,
        circle: 1
    },
    '@:{move.props~rs}': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    '@:{bind.data.added~rs}'(props, added) {
        let parentBind = props.bind;
        if (parentBind &&
            !parentBind.id) { //如果父数据容器无数据源绑定则默认为当前元素的
            let addedBind = added.props.bind;
            parentBind.id = addedBind.id;
            parentBind.url = addedBind.url;
        }
    },
    '@:{update.props~rs}'(props, rotated, fromPropsPanel) {
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
    '@:{get.props~rs}'(x, y) {
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
            x: const_1['@:{const#to.unit~rs}'](x),
            y: const_1['@:{const#to.unit~rs}'](y),
            //rotate: 0,
            alpha: 1,
            focusRow: -1,
            focusCol: -1,
            bind: {
                id: '',
                url: '',
                fields: []
            },
            hspace: const_1['@:{const#to.unit~rs}'](20),
            vspace: const_1['@:{const#to.unit~rs}'](20),
            rows: [{
                    height: const_1['@:{const#to.unit~rs}'](cell_1["@:{default.height~rs}"]),
                    cols: [{
                            width: const_1['@:{const#to.unit~rs}'](cell_1["@:{default.width~rs}"]),
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
            '@:{json.encode~rs}'(dest, { rows }) {
                transform_1['@:{transform#json.encode.cells~rs}'](dest, rows, transformFields);
            },
            '@:{unit.convert~rs}'({ rows }, toUnit) {
                transform_1['@:{transform#unit.convert.cells~rs}'](rows, toUnit, transformFields);
            },
            '@:{stage.scale~rs}'(props, step, dest) {
                transform_1['@:{transform#stage.scale.cells~rs}'](props, step, transformFields, dest);
            }
        }, {
            tip: '@:{lang#props.x~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'x',
            '@:{is.scale.and.unit.field~rs}': 1,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.y~rs}',
            type: props_1["@:{eprops#number~rs}"],
            key: 'y',
            '@:{is.scale.and.unit.field~rs}': 1,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.width~rs}',
            key: 'width',
            read: transform_1["@:{transform#to.show.value~rs}"],
            type: props_1["@:{eprops#label~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.height~rs}',
            key: 'height',
            read: transform_1["@:{transform#to.show.value~rs}"],
            type: props_1["@:{eprops#label~rs}"],
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
            tip: '@:{lang#props.alpha~rs}',
            key: 'alpha',
            type: props_1["@:{eprops#number~rs}"],
            step: 0.1,
            fixed: 1,
            min: 0,
            max: 1,
            json: 1
        }, {
            tip: '@:{lang#props.data.source~rs}',
            key: 'bind',
            type: props_1['@:{eprops#dropdown~rs}'],
            textKey: 'name',
            valueKey: 'id',
            '@:{json.encode~rs}'(destProps, srcProps) {
                destProps.bind = srcProps.bind;
            },
            read({ id }) {
                return id;
            },
            write(v, { bind }) {
                let listMap = State.get('@:{global#stage.data.source.list.map~rs}');
                let dest = listMap && listMap[v];
                bind.id = v;
                if (dest) {
                    bind.url = dest.url;
                }
                return bind;
            },
            items() {
                return State.get('@:{global#stage.data.source.list~rs}') || [];
            },
            '@:{if.show~rs}'() {
                return config('getFieldUrl');
            }
        }, {
            type: props_1['@:{eprops#spliter~rs}']
        }, {
            tip: '@:{lang#props.h.space~rs}',
            type: props_1['@:{eprops#number~rs}'],
            json: 1,
            key: 'hspace',
            min: 0,
            '@:{is.scale.and.unit.field~rs}': 1,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            max: () => const_1['@:{const#to.unit~rs}'](200)
        }, {
            tip: '@:{lang#props.v.space~rs}',
            type: props_1['@:{eprops#number~rs}'],
            json: 1,
            key: 'vspace',
            min: 0,
            '@:{is.scale.and.unit.field~rs}': 1,
            fixed: const_1["@:{const#unit.fixed~rs}"],
            step: const_1["@:{const#unit.step~rs}"],
            read: transform_1["@:{transform#to.show.value~rs}"],
            write: transform_1["@:{transform#to.real.value~rs}"],
            max: () => const_1['@:{const#to.unit~rs}'](200)
        }, {
            type: props_1["@:{eprops#spliter~rs}"],
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            tip: '@:{lang#props.cell.size~rs}',
            type: props_1["@:{eprops#h.cell.size~rs}"],
            '@:{dock.top~rs}': 1,
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["@:{eprops#cell.style~rs}"],
            '@:{if.show~rs}'(props) {
                return props.focusRow != -1 && props.focusCol != -1;
            }
        }, {
            type: props_1["@:{eprops#spliter~rs}"]
        }, {
            tip: '@:{lang#props.title~rs}',
            key: 'ename',
            type: props_1["@:{eprops#text.input~rs}"],
            json: 1
        }, {
            tip: '@:{lang#props.locked~rs}',
            key: 'locked',
            type: props_1["@:{eprops#boolean~rs}"],
            free: true,
            json: 1
        }]
});

});