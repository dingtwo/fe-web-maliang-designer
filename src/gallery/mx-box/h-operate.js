/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/5u/h-operate",["4e","../../4d/4g","../../4t/cell","../5v/coperate"],(require,exports,module)=>{
let $quick_eh_static_text;
let $quick_ei_static_text;
let $quick_ej_static_text;
let $quick_ek_static_text;
let $quick_el_static_text;
let $quick_fe_0_static_attr={'class': 'rd-eB rd-eS rd-eV rd-ez',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let cell_1 = require("../../4t/cell");
require("../5v/coperate");
let { View, dispatch, mix } = magix_1;
let { max } = Math;
let toUnits = ['width', 'borderLeftWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth'];
let getCellProps = () => {
    let initialCell = {
        width: cell_1["_hP"],
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
        initialCell[e] = const_1['dF'](initialCell[e]);
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
$vnode_2=[$quick_eh_static_text||($quick_eh_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled){;$$_class+=' rd-hL';};$vnode_1=[$createVNode('i',{'title': (i18n('i7')),'mx5-click': ((!disabled))&&($viewId+'_iB({to:\'top\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_eh_static_text||($quick_eh_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eD rd-eH';if(disabled){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('i8')),'mx5-click': ((!disabled))&&($viewId+'_iB()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ei_static_text||($quick_ei_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eC rd-eH';if(disabled){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('i9')),'mx5-click': ((!disabled))&&($viewId+'_iC({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ei_static_text||($quick_ei_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('j_')),'mx5-click': ((!disabled))&&($viewId+'_iC()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ej_static_text||($quick_ej_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled||!canDel){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('ja')),'mx5-click': ((!disabled&&canDel))&&($viewId+'_iD()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ek_static_text||($quick_ek_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH rd-d5';if(disabled||!canMergeLeft){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jb')),'mx5-click': ((!disabled&&canMergeLeft))&&($viewId+'_iE({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_ek_static_text||($quick_ek_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled||!canMergeRight){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jc')),'mx5-click': ((!disabled&&canMergeRight))&&($viewId+'_iE()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_el_static_text||($quick_el_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fz rd-hK rd-eX rd-eH';if(disabled){;$$_class+=' rd-hL';};$vnode_1.push($createVNode('i',{'title': (i18n('jd')),'mx5-click': ((!disabled))&&($viewId+'_iG()'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_fe_0_static_attr,$vnode_1)]; 

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
    '_iB<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, rows } = props;
        if (focusRow != -1) {
            let index = to == 'top' ? focusRow : focusRow + 1;
            rows.splice(index, 0, {
                height: const_1['dF'](cell_1["_hO"]),
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
    '_iC<click>'(e) {
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
    '_iD<click>'() {
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
    '_iE<click>'(e) {
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
    '_iG<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let row = rows[focusRow];
            let src = row.cols[focusCol];
            let halfWidth = max(src.width / 2, const_1['dF'](cell_1["_iF"]));
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