/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-box/h-operate",["magix5","../../designer/const","../../provider/cell","../mx-table/coperate"],(require,exports,module)=>{
let $quick_fG_static_text;
let $quick_fH_static_text;
let $quick_fI_static_text;
let $quick_fJ_static_text;
let $quick_fK_static_text;
let $quick_gD_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-flex-wrap-wrap rd-_assets_index_less_-justify-content-space-between',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let cell_1 = require("../../provider/cell");
require("../mx-table/coperate");
let { View, dispatch, mix } = magix_1;
let { max } = Math;
let toUnits = ['width', 'borderLeftWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth'];
let getCellProps = () => {
    let initialCell = {
        width: cell_1["@:{default.width~rs}"],
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
        initialCell[e] = const_1['@:{const#to.unit~rs}'](initialCell[e]);
    }
    return initialCell;
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	i18n,
	canDel,
	canMergeLeft,
	canMergeRight,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_fG_static_text||($quick_fG_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=2,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('i',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#mx-gallery.box.insert.row.before~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.box.insert.row.before~rs}\')%>',(i18n('@:{lang#mx-gallery.box.insert.row.before~rs}'))),'mx5-click': (($temp_var=($__line=2,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/h-operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{add.row~rs}({to:\'top\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_fG_static_text||($quick_fG_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flipy rd-_assets_index_less_-margin-bottom-4'+($__line=3,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=3,$__art='{{=i18n(\'@:{lang#mx-gallery.box.insert.row.after~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.box.insert.row.after~rs}\')%>',(i18n('@:{lang#mx-gallery.box.insert.row.after~rs}'))),'mx5-click': (($temp_var=($__line=3,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/h-operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{add.row~rs}()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_fH_static_text||($quick_fH_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flipx rd-_assets_index_less_-margin-bottom-4'+($__line=4,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=4,$__art='{{=i18n(\'@:{lang#mx-gallery.box.insert.box.left~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.box.insert.box.left~rs}\')%>',(i18n('@:{lang#mx-gallery.box.insert.box.left~rs}'))),'mx5-click': (($temp_var=($__line=4,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/h-operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{add.col~rs}({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_fH_static_text||($quick_fH_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=5,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=5,$__art='{{=i18n(\'@:{lang#mx-gallery.box.insert.box.right~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.box.insert.box.right~rs}\')%>',(i18n('@:{lang#mx-gallery.box.insert.box.right~rs}'))),'mx5-click': (($temp_var=($__line=5,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/h-operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{add.col~rs}()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_fI_static_text||($quick_fI_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=6,$__art='{{if disabled||!canDel}}','');$__ctrl='<%if(disabled||!canDel){%>';if(disabled||!canDel){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=6,$__art='{{=i18n(\'@:{lang#mx-gallery.box.delete.box~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.box.delete.box~rs}\')%>',(i18n('@:{lang#mx-gallery.box.delete.box~rs}'))),'mx5-click': (($temp_var=($__line=6,$__art='{{=!disabled&&canDel}}',$__ctrl='<%=!disabled&&canDel%>',!disabled&&canDel),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/h-operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{del.cell~rs}()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_fJ_static_text||($quick_fJ_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4 rd-_assets_index_less_-r180'+($__line=7,$__art='{{if disabled||!canMergeLeft}}','');$__ctrl='<%if(disabled||!canMergeLeft){%>';if(disabled||!canMergeLeft){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=7,$__art='{{=i18n(\'@:{lang#mx-gallery.box.merge.to.left~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.box.merge.to.left~rs}\')%>',(i18n('@:{lang#mx-gallery.box.merge.to.left~rs}'))),'mx5-click': (($temp_var=($__line=7,$__art='{{=!disabled&&canMergeLeft}}',$__ctrl='<%=!disabled&&canMergeLeft%>',!disabled&&canMergeLeft),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/h-operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{merge.cell~rs}({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_fJ_static_text||($quick_fJ_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=8,$__art='{{if disabled||!canMergeRight}}','');$__ctrl='<%if(disabled||!canMergeRight){%>';if(disabled||!canMergeRight){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=8,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=8,$__art='{{=i18n(\'@:{lang#mx-gallery.box.merge.to.right~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.box.merge.to.right~rs}\')%>',(i18n('@:{lang#mx-gallery.box.merge.to.right~rs}'))),'mx5-click': (($temp_var=($__line=8,$__art='{{=!disabled&&canMergeRight}}',$__ctrl='<%=!disabled&&canMergeRight%>',!disabled&&canMergeRight),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/h-operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{merge.cell~rs}()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_fK_static_text||($quick_fK_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=9,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=9,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=9,$__art='{{=i18n(\'@:{lang#mx-gallery.box.split.box~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.box.split.box~rs}\')%>',(i18n('@:{lang#mx-gallery.box.split.box~rs}'))),'mx5-click': (($temp_var=($__line=9,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-box/h-operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{split.cell~rs}()'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_gD_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-box/h-operate.html'; throw msg; }  } ,
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
    '@:{add.row~rs}<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, rows } = props;
        if (focusRow != -1) {
            let index = to == 'top' ? focusRow : focusRow + 1;
            rows.splice(index, 0, {
                height: const_1['@:{const#to.unit~rs}'](cell_1["@:{default.height~rs}"]),
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
    '@:{add.col~rs}<click>'(e) {
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
    '@:{del.cell~rs}<click>'() {
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
    '@:{merge.cell~rs}<click>'(e) {
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
    '@:{split.cell~rs}<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let row = rows[focusRow];
            let src = row.cols[focusCol];
            let halfWidth = max(src.width / 2, const_1['@:{const#to.unit~rs}'](cell_1["@:{min.width~rs}"]));
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