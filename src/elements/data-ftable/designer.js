/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/data-ftable/designer",["5c","../../5b/5e","../../5b/enum","../../5b/6c","../../5b/5f","../../5r/table","../6p"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let props_1 = require("../../5b/6c");
let transform_1 = require("../../5b/5f");
let table_1 = require("../../5r/table");
let normal_1 = require("../6p");
let { State, config } = magix_1;
let { max } = Math;
let transformFields = ['width', 'height'];
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
let isCellFocused = ({ focusRow, focusCol }) => focusRow > -1 && focusCol > -1;
module.exports= normal_1.extend({
    ctor() {
        this.set({
            view: "61/data-ftable/dshow"
        });
    }
}).static({
    type: 'data-ftable',
    as: enum_1['l5'] | enum_1['l6'],
    title: 'pj',
    icon: '&#xe68d;',
    '_oG': enum_1['m_'] |
        enum_1['mf'],
    '_oi': {
        root: 1
    },
    '_og': {
        barcode: 1,
        circle: 1,
        'data-celltable': 1,
        image: 1,
        line: 1,
        qrcode: 1,
        rect: 1,
        repeat: 1,
        text: 1
    },
    '_oj': [{
            key: 'x',
            use: 'x'
        }, {
            key: 'y',
            use: 'y'
        }],
    /**
     * 当其它带着数据绑定的元素添加到hod-col-table的格子里时被调用
     * @param props 当前hod-col-table属性
     * @param added 添加的元素
     * @param atRow 添加到哪一行
     * @param atCol 添加到哪一列
     */
    '_oD'(props, added, atRow, atCol) {
        let { bind, rows } = props;
        if (bind &&
            !bind.id) { //如果父数据容器无数据源绑定，在元素添加到数据行时，自动绑定
            let addedBind = added.props.bind, ri = 0;
            for (let row of rows) {
                if (row.data &&
                    ri == atRow) {
                    bind.id = addedBind.id;
                    bind.url = addedBind.url;
                    break;
                }
                ri++;
            }
        }
    },
    '_qa'(props, atRow) {
        let { rows } = props;
        let ri = 0;
        for (let row of rows) {
            if (row.data) {
                return ri == atRow;
            }
            ri++;
        }
    },
    '_m3'(props, oldRect, fromPropPanel) {
        let { borderwidth: bw, tfootSpacing, rows, borderdeed, hideFoot, hideTotal, hideHead, hideLabel, bind } = props;
        table_1["l2"](props, true);
        let sizes = table_1["l3"](props);
        let height = 0, width = 0;
        for (let w of sizes["_pU"]) {
            width += w;
        }
        let heights = sizes["_pV"];
        let total = heights.length;
        let headStart, headEnd, headHeight, labelStart, labelHeight, bodyStart, bodyHeight, totalStart, footStart, spacingStart, totalHeight = 0, footHeight = 0, spacingHeight = tfootSpacing, headRows = 0, footRows = 0;
        for (let i = 0; i < total; i++) {
            let row = rows[i];
            let h = heights[i];
            if (row.label &&
                !headHeight) {
                headEnd = height;
                headHeight = height;
            }
            else if (row.data) {
                labelHeight = (height - headHeight);
            }
            else if (!headEnd) {
                headRows++;
            }
            else if (!row.total &&
                totalHeight) {
                footRows++;
            }
            height += h;
            if (row.data) {
                props.tipTop = height + h;
                height += 2 * h;
                bodyHeight = (height - labelHeight - headHeight);
            }
            else if (row.total) {
                totalHeight += h;
            }
            else if (totalHeight) {
                footHeight += h;
            }
            if (row.data) { //只对数据行的绑定检查
                for (let col of row.cols) {
                    if (col.elements &&
                        col.elements.length) {
                        checkChildrenDataBind(col.elements, bind, fromPropPanel);
                    }
                }
            }
        }
        //表格宽：所以列宽＋一个边框宽
        //表格高：所以行高＋一个边框宽
        height += tfootSpacing;
        let tableHeight, tableWidth;
        let oneBorder = const_1['l3'](1);
        if (borderdeed == 'separate') {
            tableHeight = height + 2 * (sizes["_pV"].length + 3) * oneBorder;
            tableWidth = width + 2 * (sizes["_pU"].length + 2) * oneBorder;
            headStart = 4 * oneBorder;
            headHeight += 2 * (headRows - 1) * oneBorder;
            if (hideHead) {
                tableHeight -= headHeight + 2 * oneBorder;
                labelStart = headStart;
                props.tipTop -= headHeight + oneBorder;
            }
            else {
                labelStart = headStart + headHeight + 2 * oneBorder;
            }
            if (hideLabel) {
                bodyStart = labelStart;
                tableHeight -= labelHeight + 2 * oneBorder;
                props.tipTop -= labelHeight + oneBorder;
            }
            else {
                bodyStart = labelStart + labelHeight;
            }
            bodyHeight += 2 * 2 * oneBorder;
            if (hideTotal) {
                tableHeight -= totalHeight + 2 * oneBorder;
                totalHeight = bodyHeight;
                totalStart = bodyStart;
            }
            else {
                totalStart = bodyStart + bodyHeight + 2 * oneBorder;
            }
            footHeight += 2 * (footRows - 1) * oneBorder;
            if (hideFoot) {
                tableHeight -= footHeight + 2 * oneBorder;
                footStart = totalStart;
                footHeight = totalHeight;
            }
            else {
                footStart = totalStart + totalHeight + 2 * oneBorder;
            }
            spacingStart = footStart + footHeight;
            headHeight -= 4 * oneBorder;
            labelHeight -= 4 * oneBorder;
            bodyHeight -= 4 * oneBorder;
            totalHeight -= 4 * oneBorder;
            footHeight -= 4 * oneBorder;
        }
        else {
            tableHeight = height + bw;
            tableWidth = width + bw;
            headStart = bw + oneBorder;
            if (hideHead) {
                tableHeight -= headHeight;
                labelStart = headStart;
                props.tipTop -= headHeight;
            }
            else {
                labelStart = headStart + headHeight;
                headHeight -= bw + 2 * oneBorder;
            }
            if (hideLabel) {
                bodyStart = labelStart;
                tableHeight -= labelHeight;
                props.tipTop -= labelHeight;
            }
            else {
                bodyStart = labelStart + labelHeight - 2 * oneBorder;
                labelHeight -= bw + 2 * oneBorder;
            }
            if (hideTotal) {
                tableHeight -= totalHeight;
                totalStart = bodyStart;
                totalHeight = bodyHeight;
            }
            else {
                totalStart = bodyStart + bodyHeight;
            }
            if (hideFoot) {
                tableHeight -= footHeight;
                footStart = totalStart;
                footHeight = totalHeight;
            }
            else {
                footStart = totalStart + totalHeight;
            }
            spacingStart = footStart + footHeight;
            bodyHeight -= bw + 2 * oneBorder;
            totalHeight -= bw + 2 * oneBorder;
            footHeight -= bw + 2 * oneBorder;
        }
        props.width = tableWidth;
        props.height = tableHeight;
        props.headStart = headStart;
        props.headHeight = headHeight;
        props.labelStart = labelStart;
        props.labelHeight = labelHeight;
        props.bodyStart = bodyStart;
        props.bodyHeight = bodyHeight;
        props.totalStart = totalStart;
        props.totalHeight = totalHeight;
        props.footStart = footStart;
        props.footHeight = footHeight;
        props.spacingStart = spacingStart;
        props.spacingHeight = max(spacingHeight, 0);
    },
    '_m2'(x, y) {
        let defaultProps = {
            height: const_1['l3'](30),
            width: const_1['l3'](150),
            rowspan: 1,
            colspan: 1,
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true
        };
        return {
            x: const_1['l3'](x),
            y: const_1['l3'](y),
            //rotate: 0,
            alpha: 1,
            autoHeight: true,
            borderwidth: const_1['l3'](1),
            bordercolor: '#000000',
            bordertype: 'solid',
            borderdeed: 'collapse',
            focusRow: -1,
            focusCol: -1,
            tfs: const_1['l3'](16),
            tfootSpacing: const_1['l3'](30),
            hideTotal: false,
            hideFoot: false,
            hideHead: false,
            hideLabel: false,
            headFirst: true,
            footLast: true,
            dynamicCols: true,
            avgDynamicColsWidth: 'percent',
            bind: {
                url: '',
                id: ''
            },
            rows: [{
                    cols: [{
                            ...defaultProps,
                            elements: []
                        }, {
                            ...defaultProps,
                            elements: []
                        }, {
                            ...defaultProps,
                            elements: []
                        }]
                }, {
                    label: true,
                    cols: [{
                            ...defaultProps,
                            elements: []
                        }, {
                            ...defaultProps,
                            elements: []
                        }, {
                            ...defaultProps,
                            elements: []
                        }]
                }, {
                    data: true,
                    cols: [{
                            ...defaultProps,
                            elements: []
                        }, {
                            ...defaultProps,
                            elements: []
                        }, {
                            ...defaultProps,
                            elements: []
                        }]
                }, {
                    total: true,
                    cols: [{
                            ...defaultProps,
                            elements: []
                        }, {
                            ...defaultProps,
                            elements: []
                        }, {
                            ...defaultProps,
                            elements: []
                        }]
                }, {
                    cols: [{
                            ...defaultProps,
                            elements: []
                        }, {
                            ...defaultProps,
                            elements: []
                        }, {
                            ...defaultProps,
                            elements: []
                        }]
                }],
            locked: false
        };
    },
    props: [{
            key: 'tfs',
            '_nA': 1,
        }, {
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
            key: 'bind',
            json: 1
        }, {
            tip: 'nP',
            type: props_1["l2"],
            key: 'x',
            '_nA': 1,
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            tip: 'nQ',
            type: props_1["l2"],
            key: 'y',
            '_nA': 1,
            step: const_1["mH"],
            fixed: const_1["mI"],
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
            tip: 'oJ',
            type: props_1['mF'],
            '_pW': 1,
            dataPad: 2
        }, {
            type: props_1['ms']
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
            tip: 'ol',
            key: 'borderwidth',
            '_nA': 1,
            type: props_1["l2"],
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            min: 0,
            max: () => const_1["l3"](10),
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
            tip: 'oK',
            key: 'borderdeed',
            type: props_1["l9"],
            items: [{
                    text: 'oL',
                    value: 'collapse'
                }, {
                    text: 'oM',
                    value: 'separate'
                }],
            json: 1
        }, {
            tip: 'oV',
            min: 0,
            '_nA': 1,
            key: 'tfootSpacing',
            type: props_1["l2"],
            step: const_1["mH"],
            fixed: const_1["mI"],
            read: transform_1["l5"],
            write: transform_1["m_"],
            json: 1
        }, {
            type: props_1['ms']
        }, {
            tip: 'o6',
            key: 'headFirst',
            type: props_1["l4"],
            json: 1
        }, {
            tip: 'o7',
            key: 'footLast',
            json: 1,
            type: props_1["l4"]
        }, {
            tip: 'o8',
            key: 'hideHead',
            type: props_1["l4"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["l2"](props, true);
                let ri = 0, labelRowIndex = -1;
                for (let row of rows) {
                    if (row.label) {
                        labelRowIndex = ri;
                        break;
                    }
                    ri++;
                }
                if (focusRow < labelRowIndex) {
                    props.focusRow = -1;
                    props.focusCol = -1;
                }
                return v;
            }
        }, {
            tip: 'pl',
            key: 'hideLabel',
            type: props_1['l4'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["l2"](props, true);
                let ri = 0, labelRowIndex = -1;
                for (let row of rows) {
                    if (row.label) {
                        labelRowIndex = ri;
                        break;
                    }
                    ri++;
                }
                if (focusRow == labelRowIndex) {
                    props.focusRow = -1;
                    props.focusCol = -1;
                }
                return v;
            }
        }, {
            tip: 'pm',
            key: 'hideTotal',
            type: props_1["l4"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["l2"](props, true);
                let ri = 0, totalRowIndex = -1;
                for (let row of rows) {
                    if (row.total) {
                        totalRowIndex = ri;
                        break;
                    }
                    ri++;
                }
                if (focusRow == totalRowIndex) {
                    props.focusRow = -1;
                    props.focusCol = -1;
                }
                return v;
            }
        }, {
            tip: 'pb',
            key: 'hideFoot',
            type: props_1["l4"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["l2"](props, true);
                let ri = 0, totalRowIndex = -1;
                for (let row of rows) {
                    if (row.total) {
                        totalRowIndex = ri;
                        break;
                    }
                    ri++;
                }
                if (focusRow > totalRowIndex) {
                    props.focusRow = -1;
                    props.focusCol = -1;
                }
                return v;
            }
        }, {
            type: props_1['ms']
        }, {
            tip: 'pn',
            json: 1,
            key: 'autoHeight',
            type: props_1['l4']
        }, {
            tip: 'pc',
            key: 'dynamicCols',
            type: props_1['l4'],
            json: 1
        }, {
            tip: 'pd',
            key: 'avgDynamicColsWidth',
            type: props_1['l9'],
            items: [{
                    'text': 'pe',
                    'value': 'percent'
                }, {
                    'text': 'pf',
                    'value': 'direct'
                }, {
                    'text': 'pg',
                    'value': 'none'
                }],
            json: 1,
            '_py'({ dynamicCols }) {
                return dynamicCols;
            }
        }, {
            type: props_1["ms"],
            '_py': isCellFocused
        }, {
            tip: 'oN',
            type: props_1["mj"],
            '_pW': 1,
            //'@:{auto.height}': 1,
            '_py': isCellFocused
        }, {
            tip: 'oO',
            type: props_1["mw"],
            '_py': isCellFocused
        }, {
            tip: 'oP',
            type: props_1['mE'],
            '_pW': 1,
            '_py': isCellFocused
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