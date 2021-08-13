/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/78/operate",["5c","../../5b/5e","../../5r/cell","../../5r/table","../6t/coperate"],(require,exports,module)=>{
let $quick_mF_static_text;
let $quick_mG_static_text;
let $quick_mK_static_text;
let $quick_mH_static_text;
let $quick_mJ_static_text;
let $quick_mI_static_text;
let $quick_nS_0_static_attr={'class': 'rd-mX rd-mZ rd-nf rd-ni',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let cell_1 = require("../../5r/cell");
let table_1 = require("../../5r/table");
require("../6t/coperate");
let { View, dispatch } = magix_1;
let { max } = Math;
let defaultCellProps = {
    bLeft: true,
    bTop: true,
    bRight: true,
    bBottom: true,
};
let toUnits = ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight', 'textFontsize'];
let getDefaultProps = () => {
    let defaultCellContentProps = {
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        hpos: 'flex-start',
        vpos: 'flex-start',
        alpha: 1,
        type: 'text',
        ...defaultCellProps,
        ...cell_1.text
    };
    for (let e of toUnits) {
        defaultCellContentProps[e] = const_1['l3'](defaultCellContentProps[e]);
    }
    return defaultCellContentProps;
};
let queryCellStatus = (table) => {
    let { rows, focusRow, focusCol, '_pS': rowMax, '_pT': colMax } = table;
    let canDeleteRow = false, canDeleteCol = false, canMergeLeft = false, canMergeTop = false, canMergeRight = false, canMergeBottom = false, canSplitH = false, canSplitV = false, canInsertRowBottom = false, canInsertRowTop = false;
    if (focusRow > -1 && focusCol > -1) {
        let destRow = rows[focusRow];
        let dest = destRow.cols[focusCol];
        let rowSpanned = dest['_rg'] - dest['_rh'] + 1;
        let colSpanned = dest['_qk'] - dest['_qj'] + 1;
        let totalRowIndex = -1;
        let labelRowIndex = -1;
        let dataRowIndex = -1;
        let headRows = 0, footRows = 0, labelRows = 0;
        let ri = 0;
        for (let row of rows) {
            if (totalRowIndex != -1) {
                footRows++;
            }
            if (row.label) {
                if (!labelRows) {
                    labelRowIndex = ri;
                }
                labelRows++;
            }
            else if (row.total) {
                totalRowIndex = ri;
            }
            if (labelRowIndex == -1) {
                headRows++;
            }
            ri++;
        }
        dataRowIndex = labelRowIndex + labelRows;
        canSplitV = dest['_rg'] < dataRowIndex ||
            dest['_rh'] > totalRowIndex;
        let notDataAndTotalRow = dest['_rh'] > totalRowIndex || dest['_rg'] < dataRowIndex;
        canInsertRowTop = notDataAndTotalRow;
        canSplitH = canSplitV;
        canInsertRowBottom = notDataAndTotalRow;
        canDeleteRow = rowSpanned < rowMax &&
            ((headRows > 1 && dest['_rg'] < labelRowIndex && rowSpanned < headRows) ||
                (labelRows > 1 && dest['_rh'] >= labelRowIndex && rowSpanned < labelRows && dest['_rg'] < dataRowIndex) ||
                (footRows > 1 && dest['_rh'] > totalRowIndex && rowSpanned < footRows));
        canDeleteCol = colSpanned < colMax;
        let maxRowIndex = dest['_rg'] + 1, maxColIndex = dest['_qk'] + 1;
        for (let rowIndex = 0; rowIndex <= maxRowIndex; rowIndex++) {
            for (let colIndex = 0; colIndex <= maxColIndex; colIndex++) {
                let row = rows[rowIndex];
                if (row) {
                    let cell = row.cols[colIndex];
                    if (cell &&
                        cell != dest) {
                        if (cell['_qj'] == dest['_qj'] &&
                            cell['_qk'] == dest['_qk']) {
                            if (cell['_rg'] + 1 == dest['_rh']) {
                                canMergeTop = true;
                            }
                            else if (dest['_rg'] + 1 == cell['_rh']) {
                                canMergeBottom = true;
                            }
                        }
                        if (cell['_rh'] == dest['_rh'] &&
                            cell['_rg'] == dest['_rg']) {
                            if (cell['_qk'] + 1 == dest['_qj']) {
                                canMergeLeft = true;
                            }
                            else if (dest['_qk'] + 1 == cell['_qj']) {
                                canMergeRight = true;
                            }
                        }
                    }
                }
            }
        }
        canMergeLeft = canMergeLeft && canSplitV;
        canMergeRight = canMergeRight && canSplitV;
        canMergeTop = canMergeTop &&
            (dest['_rh'] < labelRowIndex ||
                (dest['_rh'] > labelRowIndex && dest['_rg'] < dataRowIndex) ||
                dest['_rh'] > totalRowIndex + 1);
        canMergeBottom = canMergeBottom &&
            (dest['_rg'] < labelRowIndex - 1 ||
                (dest['_rh'] >= labelRowIndex && dest['_rg'] < dataRowIndex - 1) ||
                dest['_rh'] > totalRowIndex);
    }
    return {
        'l2': canDeleteRow,
        'l3': canDeleteCol,
        'l4': canMergeLeft,
        'l5': canMergeTop,
        'l6': canMergeRight,
        'l7': canMergeBottom,
        '_ri': canInsertRowBottom,
        '_rj': canInsertRowTop,
        '_rk': canSplitH,
        '_rl': canSplitV
    };
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	topRow,
	i18n,
	bottomRow,
	deleteRow,
	deleteCol,
	splitH,
	splitV,
	mergeLeft,
	mergeRight,
	mergeTop,
	mergeBottom,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_mF_static_text||($quick_mF_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled||!topRow){;$$_class+=' rd-p9';};$vnode_1=[$createVNode('i',{'title': (i18n('r4')),'mx5-click': ((!disabled&&topRow))&&($viewId+'_qZ({to:\'top\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_mF_static_text||($quick_mF_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m1 rd-m5';if(disabled||!bottomRow){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('r5')),'mx5-click': ((!disabled&&bottomRow))&&($viewId+'_qZ()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mG_static_text||($quick_mG_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m0 rd-m5';if(disabled){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('r6')),'mx5-click': ((!disabled))&&($viewId+'_q0({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mG_static_text||($quick_mG_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('r7')),'mx5-click': ((!disabled))&&($viewId+'_q0()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mK_static_text||($quick_mK_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled||!deleteRow){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('r8')),'mx5-click': ((!disabled&&deleteRow))&&($viewId+'_rm()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mH_static_text||($quick_mH_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled||!deleteCol){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('r9')),'mx5-click': ((!disabled&&deleteCol))&&($viewId+'_rn()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mJ_static_text||($quick_mJ_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled||!splitH){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('s_')),'mx5-click': ((!disabled&&splitH))&&($viewId+'_q4({h:1})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mJ_static_text||($quick_mJ_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5 rd-mt';if(disabled||!splitV){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('sa')),'mx5-click': ((!disabled&&splitV))&&($viewId+'_q4({v:1})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mI_static_text||($quick_mI_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5 rd-ms';if(disabled||!mergeLeft){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('sb')),'mx5-click': ((!disabled&&mergeLeft))&&($viewId+'_q2({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mI_static_text||($quick_mI_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled||!mergeRight){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('sc')),'mx5-click': ((!disabled&&mergeRight))&&($viewId+'_q2({to:\'right\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mI_static_text||($quick_mI_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5 rd-mu';if(disabled||!mergeTop){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('sd')),'mx5-click': ((!disabled&&mergeTop))&&($viewId+'_q2({to:\'top\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mI_static_text||($quick_mI_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5 rd-mt';if(disabled||!mergeBottom){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('se')),'mx5-click': ((!disabled&&mergeBottom))&&($viewId+'_q2({to:\'bottom\'})'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_nS_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        table_1["l2"](data.props, 1);
        let state = queryCellStatus(data.props);
        this.set({
            props: data.props,
            disabled: data.disabled,
            splitH: state["_rk"],
            splitV: state["_rl"],
            bottomRow: state["_ri"],
            topRow: state["_rj"],
            deleteRow: state["l2"],
            deleteCol: state["l3"],
            mergeLeft: state["l4"],
            mergeTop: state["l5"],
            mergeRight: state["l6"],
            mergeBottom: state["l7"]
        });
    },
    render() {
        this.digest();
    },
    '_qZ<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let dest = rows[focusRow].cols[focusCol];
            let startIndx = dest['_qj'];
            let index = to == 'top' ? focusRow : dest['_rg'] + 1;
            table_1["l4"](props, index, getDefaultProps(), const_1['l3'](30));
            table_1["l2"](props);
            props.focusRow = index;
            dest = rows[index];
            for (let c of dest.cols) {
                if (c['_qj'] >= startIndx) {
                    props.focusCol = c['_oQ'];
                    break;
                }
            }
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_q0<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let dest = rows[focusRow].cols[focusCol];
            //let startIndx = dest['@:{start.col.index}'];
            let index = to == 'left' ? focusCol : dest['_qk'] + 1;
            table_1["l6"](props, index, getDefaultProps(), const_1['l3'](150));
            table_1["l2"](props);
            dest = rows[focusRow];
            if (to != 'left') {
                //let ci = 0;
                for (let c of dest.cols) {
                    if (c['_qj'] >= index) {
                        props.focusCol = c['_oQ'];
                        break;
                    }
                }
            }
            else {
                props.focusCol = index;
            }
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_rm<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["l5"](props);
            table_1["l2"](props);
            props.focusCol = 0;
            if (focusRow >= props['_pS']) {
                props.focusRow = props['_pS'] - 1;
            }
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_rn<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["l7"](props);
            table_1["l2"](props);
            props.focusCol = max(0, props.focusCol - 1);
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_q2<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["l8"](props, to);
            table_1["l2"](props);
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_q4<click>'(e) {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let { h } = e.params;
            let min = const_1['l3'](20);
            table_1["l9"](props, h, getDefaultProps(), min, min);
            table_1["l2"](props);
            dispatch(this.root, 'change', {
                rows
            });
        }
    }
});

});