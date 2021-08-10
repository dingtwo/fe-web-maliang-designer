/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/data-ftable/designer",["4e","../../4d/4g","../../4d/enum","../../4d/5e","../../4d/4h","../../4t/table","../5r"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let props_1 = require("../../4d/5e");
let transform_1 = require("../../4d/4h");
let table_1 = require("../../4t/table");
let normal_1 = require("../5r");
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
            view: "53/data-ftable/dshow"
        });
    }
}).static({
    type: 'data-ftable',
    as: enum_1['dH'] | enum_1['dI'],
    title: 'gW',
    icon: '&#xe68d;',
    '_gi': enum_1['dM'] |
        enum_1['dS'],
    '_fV': {
        root: 1
    },
    '_fT': {
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
    '_fW': [{
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
    '_gf'(props, added, atRow, atCol) {
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
    '_hN'(props, atRow) {
        let { rows } = props;
        let ri = 0;
        for (let row of rows) {
            if (row.data) {
                return ri == atRow;
            }
            ri++;
        }
    },
    '_eF'(props, oldRect, fromPropPanel) {
        let { borderwidth: bw, tfootSpacing, rows, borderdeed, hideFoot, hideTotal, hideHead, hideLabel, bind } = props;
        table_1["dE"](props, true);
        let sizes = table_1["dF"](props);
        let height = 0, width = 0;
        for (let w of sizes["_hw"]) {
            width += w;
        }
        let heights = sizes["_hx"];
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
        let oneBorder = const_1['dF'](1);
        if (borderdeed == 'separate') {
            tableHeight = height + 2 * (sizes["_hx"].length + 3) * oneBorder;
            tableWidth = width + 2 * (sizes["_hw"].length + 2) * oneBorder;
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
    '_eE'(x, y) {
        let defaultProps = {
            height: const_1['dF'](30),
            width: const_1['dF'](150),
            rowspan: 1,
            colspan: 1,
            bLeft: true,
            bTop: true,
            bRight: true,
            bBottom: true
        };
        return {
            x: const_1['dF'](x),
            y: const_1['dF'](y),
            //rotate: 0,
            alpha: 1,
            autoHeight: true,
            borderwidth: const_1['dF'](1),
            bordercolor: '#000000',
            bordertype: 'solid',
            borderdeed: 'collapse',
            focusRow: -1,
            focusCol: -1,
            tfs: const_1['dF'](16),
            tfootSpacing: const_1['dF'](30),
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
            '_fc': 1,
        }, {
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
            key: 'bind',
            json: 1
        }, {
            tip: 'fr',
            type: props_1["dE"],
            key: 'x',
            '_fc': 1,
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            tip: 'fs',
            type: props_1["dE"],
            key: 'y',
            '_fc': 1,
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
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
        } /*, {
            tip: '@:{lang#props.rotate}',
            type: Props["@:{eprops#number}"],
            key: 'rotate',
            min: -360,
            max: 360,
            json: 1
        }*/,
        {
            tip: 'gX',
            key: 'bind',
            type: props_1['dL'],
            textKey: 'name',
            valueKey: 'id',
            '_gV'(destProps, srcProps) {
                destProps.bind = srcProps.bind;
            },
            read({ id }) {
                return id;
            },
            write(v, { bind }) {
                let listMap = State.get('dW');
                let dest = listMap && listMap[v];
                bind.id = v;
                if (dest) {
                    bind.url = dest.url;
                }
                return bind;
            },
            items() {
                return State.get('dV') || [];
            },
            '_ha'() {
                return config('getFieldUrl');
            }
        }, {
            tip: 'gl',
            type: props_1['eh'],
            '_hy': 1,
            dataPad: 2
        }, {
            type: props_1['d5']
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
            tip: 'fY',
            key: 'borderwidth',
            '_fc': 1,
            type: props_1["dE"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            min: 0,
            max: () => const_1["dF"](10),
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
            tip: 'gm',
            key: 'borderdeed',
            type: props_1["dL"],
            items: [{
                    text: 'gn',
                    value: 'collapse'
                }, {
                    text: 'go',
                    value: 'separate'
                }],
            json: 1
        }, {
            tip: 'gx',
            min: 0,
            '_fc': 1,
            key: 'tfootSpacing',
            type: props_1["dE"],
            step: const_1["ej"],
            fixed: const_1["ek"],
            read: transform_1["dH"],
            write: transform_1["dM"],
            json: 1
        }, {
            type: props_1['d5']
        }, {
            tip: 'gI',
            key: 'headFirst',
            type: props_1["dG"],
            json: 1
        }, {
            tip: 'gJ',
            key: 'footLast',
            json: 1,
            type: props_1["dG"]
        }, {
            tip: 'gK',
            key: 'hideHead',
            type: props_1["dG"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["dE"](props, true);
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
            tip: 'gY',
            key: 'hideLabel',
            type: props_1['dG'],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["dE"](props, true);
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
            tip: 'gZ',
            key: 'hideTotal',
            type: props_1["dG"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["dE"](props, true);
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
            tip: 'gO',
            key: 'hideFoot',
            type: props_1["dG"],
            json: 1,
            write(v, props) {
                let { focusRow, rows } = props;
                table_1["dE"](props, true);
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
            type: props_1['d5']
        }, {
            tip: 'g0',
            json: 1,
            key: 'autoHeight',
            type: props_1['dG']
        }, {
            tip: 'gP',
            key: 'dynamicCols',
            type: props_1['dG'],
            json: 1
        }, {
            tip: 'gQ',
            key: 'avgDynamicColsWidth',
            type: props_1['dL'],
            items: [{
                    'text': 'gR',
                    'value': 'percent'
                }, {
                    'text': 'gS',
                    'value': 'direct'
                }, {
                    'text': 'gT',
                    'value': 'none'
                }],
            json: 1,
            '_ha'({ dynamicCols }) {
                return dynamicCols;
            }
        }, {
            type: props_1["d5"],
            '_ha': isCellFocused
        }, {
            tip: 'gp',
            type: props_1["dW"],
            '_hy': 1,
            //'@:{auto.height}': 1,
            '_ha': isCellFocused
        }, {
            tip: 'gq',
            type: props_1["d9"],
            '_ha': isCellFocused
        }, {
            tip: 'gr',
            type: props_1['eg'],
            '_hy': 1,
            '_ha': isCellFocused
        }, {
            type: props_1["d5"]
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