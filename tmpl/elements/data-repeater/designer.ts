/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import Enum from '../../designer/enum';
import Props from '../../designer/props';
import Transform from '../../designer/transform';
import Box from '../../provider/cell';
import Normal from '../normal';
let { State, config } = Magix;
let transformFields = ['width', 'height', 'borderLeftWidth', 'borderTopWidth', 'borderBottomWidth', 'borderRightWidth'];
let checkChildrenDataBind = (subs, currentBind, force) => {
    if (subs &&
        subs.length) {
        let subBindCount = 0,
            subBind;
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
        } else {
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
export default Normal.extend({
    ctor() {
        this.set({
            view: '@:./dshow'
        });
    }
}).static({
    type: 'data-repeater',
    as: Enum['@:{enum#as.hod}'] | Enum['@:{enum#as.data.hod}'],
    title: '@:{lang#elements.data.repeater}',
    icon: '&#xe636;',
    '@:{modifier}': Enum['@:{enum#modifier.icon}'] |
        Enum['@:{enum#modifier.nomask}'],
    '@:{allowed.to.hod}': {//只允许放设计区
        root: 1
    },
    '@:{allowed.elements}': {//只允许哪放些元素
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
    '@:{move.props}': [{
        key: 'x',
        use: 'x'
    }, {
        key: 'y',
        use: 'y'
    }],
    '@:{bind.data.added}'(props, added) {
        let parentBind = props.bind;
        if (parentBind &&
            !parentBind.id) {//如果父数据容器无数据源绑定则默认为当前元素的
            let addedBind = added.props.bind;
            parentBind.id = addedBind.id;
            parentBind.url = addedBind.url;
        }
    },
    '@:{update.props}'(props, rotated, fromPropsPanel) {
        let { rows, bind } = props;
        let height = 0,
            width = 0;
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
    '@:{get.props}'(x, y) {
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
            x: Const['@:{const#to.unit}'](x),
            y: Const['@:{const#to.unit}'](y),
            //rotate: 0,
            alpha: 1,
            focusRow: -1,
            focusCol: -1,
            bind: {
                id: '',
                url: '',
                fields: []
            },
            hspace: Const['@:{const#to.unit}'](20),
            vspace: Const['@:{const#to.unit}'](20),
            rows: [{
                height: Const['@:{const#to.unit}'](Box["@:{default.height}"]),
                cols: [{
                    width: Const['@:{const#to.unit}'](Box["@:{default.width}"]),
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
        }
    },
    props: [{
        key: 'rows',
        '@:{json.encode}'(dest, { rows }) {
            Transform['@:{transform#json.encode.cells}'](dest, rows, transformFields);
        },
        '@:{unit.convert}'({ rows }, toUnit) {
            Transform['@:{transform#unit.convert.cells}'](rows, toUnit, transformFields);
        },
        '@:{stage.scale}'(props, step, dest) {
            Transform['@:{transform#stage.scale.cells}'](props, step, transformFields, dest);
        }
    }, {
        tip: '@:{lang#props.x}',
        type: Props["@:{eprops#number}"],
        key: 'x',
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.y}',
        type: Props["@:{eprops#number}"],
        key: 'y',
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        json: 1
    }, {
        tip: '@:{lang#props.width}',
        key: 'width',
        read: Transform["@:{transform#to.show.value}"],
        type: Props["@:{eprops#label}"],
        json: 1
    }, {
        tip: '@:{lang#props.height}',
        key: 'height',
        read: Transform["@:{transform#to.show.value}"],
        type: Props["@:{eprops#label}"],
        json: 1
    }/*, {
        tip: '@:{lang#props.rotate}',
        type: Props["@:{eprops#number}"],
        key: 'rotate',
        min: -360,
        max: 360,
        json: 1
    }*/, {
        tip: '@:{lang#props.alpha}',
        key: 'alpha',
        type: Props["@:{eprops#number}"],
        step: 0.1,
        fixed: 1,
        min: 0,
        max: 1,
        json: 1
    }, {
        tip: '@:{lang#props.data.source}',
        key: 'bind',
        type: Props['@:{eprops#dropdown}'],
        textKey: 'name',
        valueKey: 'id',
        '@:{json.encode}'(destProps, srcProps) {
            destProps.bind = srcProps.bind;
        },
        read({ id }) {
            return id;
        },
        write(v, { bind }) {
            let listMap = State.get('@:{global#stage.data.source.list.map}');
            let dest = listMap && listMap[v];
            bind.id = v;
            if (dest) {
                bind.url = dest.url;
            }
            return bind;
        },
        items() {
            return State.get('@:{global#stage.data.source.list}') || [];
        },
        '@:{if.show}'() {
            return config('getFieldUrl');
        }
    }, {
        type: Props['@:{eprops#spliter}']
    }, {
        tip: '@:{lang#props.h.space}',
        type: Props['@:{eprops#number}'],
        json: 1,
        key: 'hspace',
        min: 0,
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        max: () => Const['@:{const#to.unit}'](200)
    }, {
        tip: '@:{lang#props.v.space}',
        type: Props['@:{eprops#number}'],
        json: 1,
        key: 'vspace',
        min: 0,
        '@:{is.scale.and.unit.field}': 1,
        fixed: Const["@:{const#unit.fixed}"],
        step: Const["@:{const#unit.step}"],
        read: Transform["@:{transform#to.show.value}"],
        write: Transform["@:{transform#to.real.value}"],
        max: () => Const['@:{const#to.unit}'](200)
    }, {
        type: Props["@:{eprops#spliter}"],
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        tip: '@:{lang#props.cell.size}',
        type: Props["@:{eprops#h.cell.size}"],
        '@:{dock.top}': 1,
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        type: Props["@:{eprops#cell.style}"],
        '@:{if.show}'(props) {
            return props.focusRow != -1 && props.focusCol != -1;
        }
    }, {
        type: Props["@:{eprops#spliter}"]
    }, {
        tip: '@:{lang#props.title}',
        key: 'ename',
        type: Props["@:{eprops#text.input}"],
        json: 1
    }, {
        tip: '@:{lang#props.locked}',
        key: 'locked',
        type: Props["@:{eprops#boolean}"],
        free: true,
        json: 1
    }]
});
