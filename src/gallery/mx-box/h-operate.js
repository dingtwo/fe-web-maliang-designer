/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6h/h-operate",["51","../../50/53","../../5g/cell","../6i/coperate"],(require,exports,module)=>{
let $quick_gR_static_text;
let $quick_gS_static_text;
let $quick_gT_static_text;
let $quick_gU_static_text;
let $quick_gV_static_text;
let $quick_hO_0_static_attr={'class': 'rd-g9 rd-ha rd-hr rd-hu',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let const_1 = require("../../50/53");
let cell_1 = require("../../5g/cell");
require("../6i/coperate");
let { View, dispatch, mix } = magix_1;
let { max } = Math;
let toUnits = ['width', 'borderLeftWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth'];
let getCellProps = () => {
    let initialCell = {
        width: cell_1["_kr"],
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
        initialCell[e] = const_1['ge'](initialCell[e]);
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
$vnode_2=[$quick_gR_static_text||($quick_gR_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled){;$$_class+=' rd-kk';};$vnode_1=[$createVNode('i',{'title': (i18n('lF')),'mx5-click': ((!disabled))&&($viewId+'_ld({to:\'top\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_gR_static_text||($quick_gR_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hc rd-hg';if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('lG')),'mx5-click': ((!disabled))&&($viewId+'_ld()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gS_static_text||($quick_gS_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hb rd-hg';if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('lH')),'mx5-click': ((!disabled))&&($viewId+'_le({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gS_static_text||($quick_gS_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('lI')),'mx5-click': ((!disabled))&&($viewId+'_le()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gT_static_text||($quick_gT_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled||!canDel){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('lJ')),'mx5-click': ((!disabled&&canDel))&&($viewId+'_lf()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gU_static_text||($quick_gU_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg rd-gE';if(disabled||!canMergeLeft){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('lK')),'mx5-click': ((!disabled&&canMergeLeft))&&($viewId+'_lg({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gU_static_text||($quick_gU_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled||!canMergeRight){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('lL')),'mx5-click': ((!disabled&&canMergeRight))&&($viewId+'_lg()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_gV_static_text||($quick_gV_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h9 rd-kj rd-hw rd-hg';if(disabled){;$$_class+=' rd-kk';};$vnode_1.push($createVNode('i',{'title': (i18n('lM')),'mx5-click': ((!disabled))&&($viewId+'_li()'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_hO_0_static_attr,$vnode_1)]; 

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
    '_ld<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, rows } = props;
        if (focusRow != -1) {
            let index = to == 'top' ? focusRow : focusRow + 1;
            rows.splice(index, 0, {
                height: const_1['ge'](cell_1["_kq"]),
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
    '_le<click>'(e) {
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
    '_lf<click>'() {
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
    '_lg<click>'(e) {
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
    '_li<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let row = rows[focusRow];
            let src = row.cols[focusCol];
            let halfWidth = max(src.width / 2, const_1['ge'](cell_1["_lh"]));
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