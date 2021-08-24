/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6i/operate",["51","../../50/53","../../5g/cell","../../5g/table","./coperate"],(require,exports,module)=>{
let $quick_gR_static_text;
let $quick_gS_static_text;
let $quick_gW_static_text;
let $quick_gT_static_text;
let $quick_gV_static_text;
let $quick_gU_static_text;
let $quick_ip_0_static_attr={'class': 'rd-g9 rd-ha rd-hr rd-hu',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let const_1 = require("../../50/53");
let cell_1 = require("../../5g/cell");
let table_1 = require("../../5g/table");
require("./coperate");
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
        defaultCellContentProps[e] = const_1['ge'](defaultCellContentProps[e]);
    }
    return defaultCellContentProps;
};
let queryCellStatus = (table) => {
    let { rows, focusRow, focusCol, '_j7': rowMax, '_j8': colMax } = table;
    let canDeleteRow = false, canDeleteCol = false, canMergeLeft = false, canMergeTop = false, canMergeRight = false, canMergeBottom = false;
    if (focusRow > -1 && focusCol > -1) {
        let destRow = rows[focusRow];
        let dest = destRow.cols[focusCol];
        let rowSpanned = dest['_lv'] - dest['_lw'] + 1;
        let colSpanned = dest['_kz'] - dest['_ky'] + 1;
        canDeleteRow = rowSpanned < rowMax;
        canDeleteCol = colSpanned < colMax;
        let maxRowIndex = dest['_lv'] + 1, maxColIndex = dest['_kz'] + 1;
        for (let rowIndex = 0; rowIndex <= maxRowIndex; rowIndex++) {
            for (let colIndex = 0; colIndex <= maxColIndex; colIndex++) {
                let row = rows[rowIndex];
                if (row) {
                    let cell = row.cols[colIndex];
                    if (cell &&
                        cell != dest) {
                        if (cell['_ky'] == dest['_ky'] &&
                            cell['_kz'] == dest['_kz']) {
                            if (cell['_lv'] + 1 == dest['_lw']) {
                                canMergeTop = true;
                            }
                            else if (dest['_lv'] + 1 == cell['_lw']) {
                                canMergeBottom = true;
                            }
                        }
                        if (cell['_lw'] == dest['_lw'] &&
                            cell['_lv'] == dest['_lv']) {
                            if (cell['_kz'] + 1 == dest['_ky']) {
                                canMergeLeft = true;
                            }
                            else if (dest['_kz'] + 1 == cell['_ky']) {
                                canMergeRight = true;
                            }
                        }
                    }
                }
            }
        }
    }
    return {
        'gd': canDeleteRow,
        'ge': canDeleteCol,
        'gf': canMergeLeft,
        'gg': canMergeTop,
        'gh': canMergeRight,
        'gi': canMergeBottom
    };
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	i18n,
	deleteRow,
	deleteCol,
	mergeLeft,
	mergeRight,
	mergeTop,
	mergeBottom,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_gR_static_text||($quick_gR_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled){;$$_class+=' rd-kk';};$vnode_1=[$createVNode('i',{'title': (i18n('me')),'mx5-click': ((!disabled))&&($viewId+'_ld({to:\'top\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_gR_static_text||($quick_gR_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hc rd-hg';if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('mf')),'mx5-click': ((!disabled))&&($viewId+'_ld()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gS_static_text||($quick_gS_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hb rd-hg';if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('mg')),'mx5-click': ((!disabled))&&($viewId+'_le({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gS_static_text||($quick_gS_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('mh')),'mx5-click': ((!disabled))&&($viewId+'_le()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gW_static_text||($quick_gW_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled||!deleteRow){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('mi')),'mx5-click': ((!disabled&&deleteRow))&&($viewId+'_lB()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gT_static_text||($quick_gT_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled||!deleteCol){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('mj')),'mx5-click': ((!disabled&&deleteCol))&&($viewId+'_lC()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gV_static_text||($quick_gV_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('mk')),'mx5-click': ((!disabled))&&($viewId+'_li({h:1})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gV_static_text||($quick_gV_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg rd-gF';if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('ml')),'mx5-click': ((!disabled))&&($viewId+'_li({v:1})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gU_static_text||($quick_gU_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg rd-gE';if(disabled||!mergeLeft){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('mm')),'mx5-click': ((!disabled&&mergeLeft))&&($viewId+'_lg({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gU_static_text||($quick_gU_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled||!mergeRight){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('mn')),'mx5-click': ((!disabled&&mergeRight))&&($viewId+'_lg({to:\'right\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gU_static_text||($quick_gU_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg rd-gG';if(disabled||!mergeTop){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('mo')),'mx5-click': ((!disabled&&mergeTop))&&($viewId+'_lg({to:\'top\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gU_static_text||($quick_gU_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg rd-gF';if(disabled||!mergeBottom){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('mp')),'mx5-click': ((!disabled&&mergeBottom))&&($viewId+'_lg({to:\'bottom\'})'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_ip_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        table_1["gd"](data.props, 1);
        let state = queryCellStatus(data.props);
        this['_nL'] = data.sub;
        this.set({
            props: data.props,
            disabled: data.disabled,
            deleteRow: state["gd"],
            deleteCol: state["ge"],
            mergeLeft: state["gf"],
            mergeTop: state["gg"],
            mergeRight: state["gh"],
            mergeBottom: state["gi"]
        });
    },
    render() {
        this.digest();
    },
    '_ld<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let dest = rows[focusRow].cols[focusCol];
            let startIndx = dest['_ky'];
            let index = to == 'top' ? focusRow : dest['_lv'] + 1;
            let cellProps;
            if (this['_nL']) {
                cellProps = defaultCellProps;
            }
            else {
                cellProps = getDefaultProps();
            }
            table_1["gf"](props, index, cellProps, const_1['ge'](30));
            table_1["gd"](props);
            props.focusRow = index;
            dest = rows[index];
            for (let c of dest.cols) {
                if (c['_ky'] >= startIndx) {
                    props.focusCol = c['_i5'];
                    break;
                }
            }
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_le<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let dest = rows[focusRow].cols[focusCol];
            //let startIndx = dest['@:{start.col.index}'];
            let index = to == 'left' ? focusCol : dest['_kz'] + 1;
            let cellProps;
            if (this['_nL']) {
                cellProps = defaultCellProps;
            }
            else {
                cellProps = getDefaultProps();
            }
            table_1["gh"](props, index, cellProps, const_1['ge'](150));
            table_1["gd"](props);
            dest = rows[focusRow];
            if (to != 'left') {
                //let ci = 0;
                for (let c of dest.cols) {
                    if (c['_ky'] >= index) {
                        props.focusCol = c['_i5'];
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
    '_lB<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["gg"](props);
            table_1["gd"](props);
            props.focusCol = 0;
            if (focusRow >= props['_j7']) {
                props.focusRow = props['_j7'] - 1;
            }
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_lC<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["gi"](props);
            table_1["gd"](props);
            props.focusCol = max(0, props.focusCol - 1);
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_lg<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["gj"](props, to);
            table_1["gd"](props);
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_li<click>'(e) {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let { h } = e.params;
            let cellProps;
            if (this['_nL']) {
                cellProps = defaultCellProps;
            }
            else {
                cellProps = getDefaultProps();
            }
            let min = const_1['ge'](20);
            table_1["gk"](props, h, cellProps, min, min);
            table_1["gd"](props);
            dispatch(this.root, 'change', {
                rows
            });
        }
    }
});

});