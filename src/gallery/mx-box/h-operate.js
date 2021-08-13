/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6s/h-operate",["5c","../../5b/5e","../../5r/cell","../6t/coperate"],(require,exports,module)=>{
let $quick_mF_static_text;
let $quick_mG_static_text;
let $quick_mH_static_text;
let $quick_mI_static_text;
let $quick_mJ_static_text;
let $quick_nC_0_static_attr={'class': 'rd-mX rd-mZ rd-nf rd-ni',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let cell_1 = require("../../5r/cell");
require("../6t/coperate");
let { View, dispatch, mix } = magix_1;
let { max } = Math;
let toUnits = ['width', 'borderLeftWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth'];
let getCellProps = () => {
    let initialCell = {
        width: cell_1["_qc"],
        borderLeftTopRadius: 0,
        borderRightTopRadius: 0,
        borderLeftBottomRadius: 0,
        borderRightBottomRadius: 0,
        borderLeftStyle: 'solid',
        borderLeftWidth: 1,
        borderLeftColor: '#000000',
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: '#000000',
        borderRightStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: '#000000',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#000000'
    };
    for (let e of toUnits) {
        initialCell[e] = const_1['l3'](initialCell[e]);
    }
    return initialCell;
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	i18n,
	canDel,
	canMergeLeft,
	canMergeRight,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_mF_static_text||($quick_mF_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled){;$$_class+=' rd-p9';};$vnode_1=[$createVNode('i',{'title': (i18n('ru')),'mx5-click': ((!disabled))&&($viewId+'_qZ({to:\'top\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_mF_static_text||($quick_mF_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m1 rd-m5';if(disabled){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('rv')),'mx5-click': ((!disabled))&&($viewId+'_qZ()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mG_static_text||($quick_mG_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m0 rd-m5';if(disabled){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('rw')),'mx5-click': ((!disabled))&&($viewId+'_q0({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mG_static_text||($quick_mG_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('rx')),'mx5-click': ((!disabled))&&($viewId+'_q0()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mH_static_text||($quick_mH_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled||!canDel){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('ry')),'mx5-click': ((!disabled&&canDel))&&($viewId+'_q1()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mI_static_text||($quick_mI_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5 rd-ms';if(disabled||!canMergeLeft){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('rz')),'mx5-click': ((!disabled&&canMergeLeft))&&($viewId+'_q2({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mI_static_text||($quick_mI_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled||!canMergeRight){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('rA')),'mx5-click': ((!disabled&&canMergeRight))&&($viewId+'_q2()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_mJ_static_text||($quick_mJ_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nX rd-p8 rd-nk rd-m5';if(disabled){;$$_class+=' rd-p9';};$vnode_1.push($createVNode('i',{'title': (i18n('rB')),'mx5-click': ((!disabled))&&($viewId+'_q4()'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_nC_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        let canDel = true;
        let canMergeLeft = true;
        let canMergeRight = true;
        let { props } = data;
        let { rows, focusRow, focusCol } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            if (rows.length == 1 &&
                rows[0].cols.length == 1) {
                canDel = false;
            }
            if (focusCol == 0) {
                canMergeLeft = false;
            }
            let row = rows[focusRow];
            if (focusCol == row.cols.length - 1) {
                canMergeRight = false;
            }
            this.set(data);
            this.set({
                canMergeLeft,
                canMergeRight,
                canDel
            });
        }
    },
    render() {
        this.digest();
    },
    '_qZ<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, rows } = props;
        if (focusRow != -1) {
            let index = to == 'top' ? focusRow : focusRow + 1;
            rows.splice(index, 0, {
                height: const_1['l3'](cell_1["_qb"]),
                cols: [mix({
                        elements: []
                    }, getCellProps())]
            });
            props.focusRow = index;
            props.focusCol = 0;
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
            let index = to == 'left' ? focusCol : focusCol + 1;
            let row = rows[focusRow];
            row.cols.splice(index, 0, mix({
                elements: []
            }, getCellProps()));
            props.focusCol = index;
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_q1<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let row = rows[focusRow];
            row.cols.splice(focusCol, 1);
            if (!row.cols.length) {
                rows.splice(focusRow, 1);
                props.focusCol = 0;
            }
            else if (focusCol >= row.cols.length) {
                props.focusCol = row.cols.length - 1;
            }
            if (focusRow >= rows.length) {
                props.focusRow = rows.length - 1;
                props.focusCol = 0;
            }
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
            let index = to == 'left' ? focusCol - 1 : focusCol + 1;
            let row = rows[focusRow];
            let dest = row.cols[index];
            let src = row.cols[focusCol];
            dest.elements.push(...src.elements);
            dest.width += src.width;
            row.cols.splice(focusCol, 1);
            props.focusCol = to == 'left' ? index : index - 1;
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '_q4<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let row = rows[focusRow];
            let src = row.cols[focusCol];
            let halfWidth = max(src.width / 2, const_1['l3'](cell_1["_q3"]));
            src.width = halfWidth;
            let destCell = mix({
                elements: []
            }, getCellProps());
            destCell.width = halfWidth;
            row.cols.splice(focusCol + 1, 0, destCell);
            dispatch(this.root, 'change', {
                rows
            });
        }
    }
});

});