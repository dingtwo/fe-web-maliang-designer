/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/6c/operate",["4e","../../4d/4g","../../4t/table","../5v/coperate"],(require,exports,module)=>{
let $quick_eh_static_text;
let $quick_ei_static_text;
let $quick_em_static_text;
let $quick_ej_static_text;
let $quick_el_static_text;
let $quick_ek_static_text;
let $quick_fD_0_static_attr={'class': 'rd-eB rd-eS rd-eV rd-ez',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let table_1 = require("../../4t/table");
require("../5v/coperate");
let { View, dispatch } = magix_1;
let { max } = Math;
let defaultCellProps = {
    bLeft: true,
    bTop: true,
    bRight: true,
    bBottom: true
};
let queryCellStatus = (table) => {
    let { rows, focusRow, focusCol, '_hu': rowMax, '_hv': colMax } = table;
    let canDeleteRow = false, canDeleteCol = false, canMergeLeft = false, canMergeTop = false, canMergeRight = false, canMergeBottom = false, canSplitH = false, canSplitV = false, canInsertRowBottom = false, canInsertRowTop = false;
    if (focusRow > -1 && focusCol > -1) {
        let destRow = rows[focusRow];
        let dest = destRow.cols[focusCol];
        let rowSpanned = dest['_iT'] - dest['_iU'] + 1;
        let colSpanned = dest['_hX'] - dest['_hW'] + 1;
        let totalRowIndex = -1;
        let labelRowIndex = -1;
        let dataRowIndex = -1;
        let footRowIndex = -1;
        let headRows = 0, footRows = 0, labelRows = 0, totalRows = 0;
        let ri = 0;
        for (let row of rows) {
            if (totalRowIndex != -1) {
                footRows++;
            }
            if (row.label) {
                if (labelRowIndex == -1) {
                    labelRowIndex = ri;
                }
                labelRows++;
            }
            else if (row.total) {
                if (totalRowIndex == -1) {
                    totalRowIndex = ri;
                }
                totalRows++;
            }
            if (labelRowIndex == -1) {
                headRows++;
            }
            ri++;
        }
        dataRowIndex = labelRowIndex + labelRows;
        footRowIndex = totalRowIndex + totalRows;
        let isNotDataRow = dest['_iT'] < dataRowIndex ||
            dest['_iU'] > dataRowIndex;
        canSplitV = isNotDataRow;
        canInsertRowTop = isNotDataRow;
        canSplitH = canSplitV;
        canInsertRowBottom = isNotDataRow;
        canDeleteRow = rowSpanned < rowMax &&
            ((headRows > 1 && dest['_iT'] < labelRowIndex && rowSpanned < headRows) ||
                (labelRows > 1 && dest['_iU'] >= labelRowIndex && rowSpanned < labelRows && dest['_iT'] < dataRowIndex) ||
                (totalRows > 1 && dest['_iU'] >= totalRowIndex && rowSpanned < totalRows && dest['_iT'] < footRowIndex) ||
                (footRows > 1 && dest['_iU'] >= footRowIndex && rowSpanned < footRows));
        canDeleteCol = colSpanned < colMax;
        let maxRowIndex = dest['_iT'] + 1, maxColIndex = dest['_hX'] + 1;
        for (let rowIndex = 0; rowIndex <= maxRowIndex; rowIndex++) {
            for (let colIndex = 0; colIndex <= maxColIndex; colIndex++) {
                let row = rows[rowIndex];
                if (row) {
                    let cell = row.cols[colIndex];
                    if (cell &&
                        cell != dest) {
                        if (cell['_hW'] == dest['_hW'] &&
                            cell['_hX'] == dest['_hX']) {
                            if (cell['_iT'] + 1 == dest['_iU']) {
                                canMergeTop = true;
                            }
                            else if (dest['_iT'] + 1 == cell['_iU']) {
                                canMergeBottom = true;
                            }
                        }
                        if (cell['_iU'] == dest['_iU'] &&
                            cell['_iT'] == dest['_iT']) {
                            if (cell['_hX'] + 1 == dest['_hW']) {
                                canMergeLeft = true;
                            }
                            else if (dest['_hX'] + 1 == cell['_hW']) {
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
            (dest['_iU'] < labelRowIndex ||
                (dest['_iU'] > labelRowIndex && dest['_iT'] < dataRowIndex) ||
                (dest['_iU'] > totalRowIndex && dest['_iT'] < footRowIndex) ||
                dest['_iU'] > footRowIndex);
        canMergeBottom = canMergeBottom &&
            (dest['_iT'] < labelRowIndex - 1 ||
                (dest['_iU'] >= labelRowIndex && dest['_iT'] < dataRowIndex - 1) ||
                (dest['_iU'] >= totalRowIndex && dest['_iT'] < footRowIndex - 1) ||
                dest['_iU'] > footRowIndex);
    }
    return {
        'dE': canDeleteRow,
        'dF': canDeleteCol,
        'dG': canMergeLeft,
        'dH': canMergeTop,
        'dI': canMergeRight,
        'dJ': canMergeBottom,
        '_iV': canInsertRowBottom,
        '_iW': canInsertRowTop,
        '_iX': canSplitH,
        '_iY': canSplitV
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
$vnode_2=[$quick_eh_static_text||($quick_eh_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled||!topRow){;$$_class+=' rd-hL';};$vnode_1=[$createVNode('i',{'title': (i18n('jG')),'mx5-click': ((!disabled&&topRow))&&($viewId+'_iB({to:\'top\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_eh_static_text||($quick_eh_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eD rd-eH';if(disabled||!bottomRow){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jH')),'mx5-click': ((!disabled&&bottomRow))&&($viewId+'_iB()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ei_static_text||($quick_ei_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eC rd-eH';if(disabled){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jI')),'mx5-click': ((!disabled))&&($viewId+'_iC({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ei_static_text||($quick_ei_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jJ')),'mx5-click': ((!disabled))&&($viewId+'_iC()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_em_static_text||($quick_em_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled||!deleteRow){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jK')),'mx5-click': ((!disabled&&deleteRow))&&($viewId+'_iZ()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ej_static_text||($quick_ej_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled||!deleteCol){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jL')),'mx5-click': ((!disabled&&deleteCol))&&($viewId+'_i0()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_el_static_text||($quick_el_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled||!splitH){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jM')),'mx5-click': ((!disabled&&splitH))&&($viewId+'_iG({h:1})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_el_static_text||($quick_el_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH rd-d6';if(disabled||!splitV){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jN')),'mx5-click': ((!disabled&&splitV))&&($viewId+'_iG({v:1})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ek_static_text||($quick_ek_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH rd-d5';if(disabled||!mergeLeft){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jO')),'mx5-click': ((!disabled&&mergeLeft))&&($viewId+'_iE({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ek_static_text||($quick_ek_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled||!mergeRight){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jP')),'mx5-click': ((!disabled&&mergeRight))&&($viewId+'_iE({to:\'right\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ek_static_text||($quick_ek_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH rd-d7';if(disabled||!mergeTop){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jQ')),'mx5-click': ((!disabled&&mergeTop))&&($viewId+'_iE({to:\'top\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ek_static_text||($quick_ek_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH rd-d6';if(disabled||!mergeBottom){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jR')),'mx5-click': ((!disabled&&mergeBottom))&&($viewId+'_iE({to:\'bottom\'})'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_fD_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        table_1["dE"](data.props, 1);
        let state = queryCellStatus(data.props);
        this.set({
            props: data.props,
            disabled: data.disabled,
            splitH: state["_iX"],
            splitV: state["_iY"],
            bottomRow: state["_iV"],
            topRow: state["_iW"],
            deleteRow: state["dE"],
            deleteCol: state["dF"],
            mergeLeft: state["dG"],
            mergeTop: state["dH"],
            mergeRight: state["dI"],
            mergeBottom: state["dJ"]
        });
    },
    render() {
        this.digest();
    },
    '_iB<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let currentRow = rows[focusRow];
            let dest = currentRow.cols[focusCol];
            let startIndx = dest['_hW'];
            let index = to == 'top' ? focusRow : dest['_iT'] + 1;
            table_1["dG"](props, index, defaultCellProps, const_1['dF'](30));
            table_1["dE"](props);
            props.focusRow = index;
            dest = rows[index];
            for (let c of dest.cols) {
                if (c['_hW'] >= startIndx) {
                    props.focusCol = c['_gs'];
                    break;
                }
            }
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_iC<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let dest = rows[focusRow].cols[focusCol];
            //let startIndx = dest['@:{start.col.index}'];
            let index = to == 'left' ? focusCol : dest['_hX'] + 1;
            table_1["dI"](props, index, defaultCellProps, const_1['dF'](150));
            table_1["dE"](props);
            dest = rows[focusRow];
            if (to != 'left') {
                //let ci = 0;
                for (let c of dest.cols) {
                    if (c['_hW'] >= index) {
                        props.focusCol = c['_gs'];
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
    '_iZ<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["dH"](props);
            table_1["dE"](props);
            props.focusCol = 0;
            if (focusRow >= props['_hu']) {
                props.focusRow = props['_hu'] - 1;
            }
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_i0<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["dJ"](props);
            table_1["dE"](props);
            props.focusCol = max(0, props.focusCol - 1);
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_iE<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["dK"](props, to);
            table_1["dE"](props);
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_iG<click>'(e) {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let { h } = e.params;
            let min = const_1['dF'](20);
            table_1["dL"](props, h, defaultCellProps, min, min);
            table_1["dE"](props);
            dispatch(this.root, 'change', {
                rows
            });
        }
    }
});

});