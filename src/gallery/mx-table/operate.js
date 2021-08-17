/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-table/operate",["magix5","../../designer/const","../../provider/cell","../../provider/table","./coperate"],(require,exports,module)=>{
let $quick_k3_static_text;
let $quick_k4_static_text;
let $quick_k8_static_text;
let $quick_k5_static_text;
let $quick_k7_static_text;
let $quick_k6_static_text;
let $quick_mB_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-flex-wrap-wrap rd-_assets_index_less_-justify-content-space-between',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let cell_1 = require("../../provider/cell");
let table_1 = require("../../provider/table");
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
        defaultCellContentProps[e] = const_1['@:{const#to.unit~rs}'](defaultCellContentProps[e]);
    }
    return defaultCellContentProps;
};
let queryCellStatus = (table) => {
    let { rows, focusRow, focusCol, '@:{row.max~rs}': rowMax, '@:{col.max~rs}': colMax } = table;
    let canDeleteRow = false, canDeleteCol = false, canMergeLeft = false, canMergeTop = false, canMergeRight = false, canMergeBottom = false;
    if (focusRow > -1 && focusCol > -1) {
        let destRow = rows[focusRow];
        let dest = destRow.cols[focusCol];
        let rowSpanned = dest['@:{end.row.index~rs}'] - dest['@:{start.row.index~rs}'] + 1;
        let colSpanned = dest['@:{end.col.index~rs}'] - dest['@:{start.col.index~rs}'] + 1;
        canDeleteRow = rowSpanned < rowMax;
        canDeleteCol = colSpanned < colMax;
        let maxRowIndex = dest['@:{end.row.index~rs}'] + 1, maxColIndex = dest['@:{end.col.index~rs}'] + 1;
        for (let rowIndex = 0; rowIndex <= maxRowIndex; rowIndex++) {
            for (let colIndex = 0; colIndex <= maxColIndex; colIndex++) {
                let row = rows[rowIndex];
                if (row) {
                    let cell = row.cols[colIndex];
                    if (cell &&
                        cell != dest) {
                        if (cell['@:{start.col.index~rs}'] == dest['@:{start.col.index~rs}'] &&
                            cell['@:{end.col.index~rs}'] == dest['@:{end.col.index~rs}']) {
                            if (cell['@:{end.row.index~rs}'] + 1 == dest['@:{start.row.index~rs}']) {
                                canMergeTop = true;
                            }
                            else if (dest['@:{end.row.index~rs}'] + 1 == cell['@:{start.row.index~rs}']) {
                                canMergeBottom = true;
                            }
                        }
                        if (cell['@:{start.row.index~rs}'] == dest['@:{start.row.index~rs}'] &&
                            cell['@:{end.row.index~rs}'] == dest['@:{end.row.index~rs}']) {
                            if (cell['@:{end.col.index~rs}'] + 1 == dest['@:{start.col.index~rs}']) {
                                canMergeLeft = true;
                            }
                            else if (dest['@:{end.col.index~rs}'] + 1 == cell['@:{start.col.index~rs}']) {
                                canMergeRight = true;
                            }
                        }
                    }
                }
            }
        }
    }
    return {
        '@:{table.cell#can.delete.row~rs}': canDeleteRow,
        '@:{table.cell#can.delete.col~rs}': canDeleteCol,
        '@:{table.cell#can.mrege.left~rs}': canMergeLeft,
        '@:{table.cell#can.merge.top~rs}': canMergeTop,
        '@:{table.cell#can.merge.right~rs}': canMergeRight,
        '@:{table.cell#can.merge.bottom~rs}': canMergeBottom
    };
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
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
$vnode_2=[$quick_k3_static_text||($quick_k3_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=2,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('i',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#mx-gallery.table.insert.row.before~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.insert.row.before~rs}\')%>',(i18n('@:{lang#mx-gallery.table.insert.row.before~rs}'))),'mx5-click': (($temp_var=($__line=2,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{add.row~rs}({to:\'top\'})'),'class': $$_class,},$vnode_2)];$vnode_2=[$quick_k3_static_text||($quick_k3_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flipy rd-_assets_index_less_-margin-bottom-4'+($__line=3,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=3,$__art='{{=i18n(\'@:{lang#mx-gallery.table.insert.row.after~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.insert.row.after~rs}\')%>',(i18n('@:{lang#mx-gallery.table.insert.row.after~rs}'))),'mx5-click': (($temp_var=($__line=3,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{add.row~rs}()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_k4_static_text||($quick_k4_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flipx rd-_assets_index_less_-margin-bottom-4'+($__line=4,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=4,$__art='{{=i18n(\'@:{lang#mx-gallery.table.insert.col.left~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.insert.col.left~rs}\')%>',(i18n('@:{lang#mx-gallery.table.insert.col.left~rs}'))),'mx5-click': (($temp_var=($__line=4,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{add.col~rs}({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_k4_static_text||($quick_k4_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=5,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=5,$__art='{{=i18n(\'@:{lang#mx-gallery.table.insert.col.right~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.insert.col.right~rs}\')%>',(i18n('@:{lang#mx-gallery.table.insert.col.right~rs}'))),'mx5-click': (($temp_var=($__line=5,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{add.col~rs}()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_k8_static_text||($quick_k8_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=7,$__art='{{if disabled||!deleteRow}}','');$__ctrl='<%if(disabled||!deleteRow){%>';if(disabled||!deleteRow){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=7,$__art='{{=i18n(\'@:{lang#mx-gallery.table.delete.row~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.delete.row~rs}\')%>',(i18n('@:{lang#mx-gallery.table.delete.row~rs}'))),'mx5-click': (($temp_var=($__line=7,$__art='{{=!disabled&&deleteRow}}',$__ctrl='<%=!disabled&&deleteRow%>',!disabled&&deleteRow),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{del.row~rs}()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_k5_static_text||($quick_k5_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=8,$__art='{{if disabled||!deleteCol}}','');$__ctrl='<%if(disabled||!deleteCol){%>';if(disabled||!deleteCol){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=8,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=8,$__art='{{=i18n(\'@:{lang#mx-gallery.table.delete.col~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.delete.col~rs}\')%>',(i18n('@:{lang#mx-gallery.table.delete.col~rs}'))),'mx5-click': (($temp_var=($__line=8,$__art='{{=!disabled&&deleteCol}}',$__ctrl='<%=!disabled&&deleteCol%>',!disabled&&deleteCol),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{del.col~rs}()'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_k7_static_text||($quick_k7_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=10,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=10,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=10,$__art='{{=i18n(\'@:{lang#mx-gallery.table.split.col.h~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.split.col.h~rs}\')%>',(i18n('@:{lang#mx-gallery.table.split.col.h~rs}'))),'mx5-click': (($temp_var=($__line=10,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{split.cell~rs}({h:1})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_k7_static_text||($quick_k7_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4 rd-_assets_index_less_-r90'+($__line=11,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=11,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=11,$__art='{{=i18n(\'@:{lang#mx-gallery.table.split.col.v~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.split.col.v~rs}\')%>',(i18n('@:{lang#mx-gallery.table.split.col.v~rs}'))),'mx5-click': (($temp_var=($__line=11,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{split.cell~rs}({v:1})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_k6_static_text||($quick_k6_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4 rd-_assets_index_less_-r180'+($__line=13,$__art='{{if disabled||!mergeLeft}}','');$__ctrl='<%if(disabled||!mergeLeft){%>';if(disabled||!mergeLeft){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=13,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=13,$__art='{{=i18n(\'@:{lang#mx-gallery.table.merge.to.left~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.merge.to.left~rs}\')%>',(i18n('@:{lang#mx-gallery.table.merge.to.left~rs}'))),'mx5-click': (($temp_var=($__line=13,$__art='{{=!disabled&&mergeLeft}}',$__ctrl='<%=!disabled&&mergeLeft%>',!disabled&&mergeLeft),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{merge.cell~rs}({to:\'left\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_k6_static_text||($quick_k6_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4'+($__line=14,$__art='{{if disabled||!mergeRight}}','');$__ctrl='<%if(disabled||!mergeRight){%>';if(disabled||!mergeRight){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=14,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=14,$__art='{{=i18n(\'@:{lang#mx-gallery.table.merge.to.right~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.merge.to.right~rs}\')%>',(i18n('@:{lang#mx-gallery.table.merge.to.right~rs}'))),'mx5-click': (($temp_var=($__line=14,$__art='{{=!disabled&&mergeRight}}',$__ctrl='<%=!disabled&&mergeRight%>',!disabled&&mergeRight),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{merge.cell~rs}({to:\'right\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_k6_static_text||($quick_k6_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4 rd-_assets_index_less_-r270'+($__line=15,$__art='{{if disabled||!mergeTop}}','');$__ctrl='<%if(disabled||!mergeTop){%>';if(disabled||!mergeTop){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=15,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=15,$__art='{{=i18n(\'@:{lang#mx-gallery.table.merge.to.top~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.merge.to.top~rs}\')%>',(i18n('@:{lang#mx-gallery.table.merge.to.top~rs}'))),'mx5-click': (($temp_var=($__line=15,$__art='{{=!disabled&&mergeTop}}',$__ctrl='<%=!disabled&&mergeTop%>',!disabled&&mergeTop),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{merge.cell~rs}({to:\'top\'})'),'class': $$_class,},$vnode_2));$vnode_2=[$quick_k6_static_text||($quick_k6_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-26 rd-_gallery_mx-table_coperate_less_-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-margin-bottom-4 rd-_assets_index_less_-r90'+($__line=16,$__art='{{if disabled||!mergeBottom}}','');$__ctrl='<%if(disabled||!mergeBottom){%>';if(disabled||!mergeBottom){;$$_class+=' rd-_gallery_mx-table_coperate_less_-icon-disabled'+($__line=16,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=16,$__art='{{=i18n(\'@:{lang#mx-gallery.table.merge.to.bottom~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.table.merge.to.bottom~rs}\')%>',(i18n('@:{lang#mx-gallery.table.merge.to.bottom~rs}'))),'mx5-click': (($temp_var=($__line=16,$__art='{{=!disabled&&mergeBottom}}',$__ctrl='<%=!disabled&&mergeBottom%>',!disabled&&mergeBottom),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/operate.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{merge.cell~rs}({to:\'bottom\'})'),'class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',$quick_mB_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-table/operate.html'; throw msg; }  } ,
    assign(data) {
        table_1["@:{table.provider#add.ext.meta~rs}"](data.props, 1);
        let state = queryCellStatus(data.props);
        this['@:{has.elements~rs}'] = data.sub;
        this.set({
            props: data.props,
            disabled: data.disabled,
            deleteRow: state["@:{table.cell#can.delete.row~rs}"],
            deleteCol: state["@:{table.cell#can.delete.col~rs}"],
            mergeLeft: state["@:{table.cell#can.mrege.left~rs}"],
            mergeTop: state["@:{table.cell#can.merge.top~rs}"],
            mergeRight: state["@:{table.cell#can.merge.right~rs}"],
            mergeBottom: state["@:{table.cell#can.merge.bottom~rs}"]
        });
    },
    render() {
        this.digest();
    },
    '@:{add.row~rs}<click>'(e) {
        let { to } = e.params;
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let dest = rows[focusRow].cols[focusCol];
            let startIndx = dest['@:{start.col.index~rs}'];
            let index = to == 'top' ? focusRow : dest['@:{end.row.index~rs}'] + 1;
            let cellProps;
            if (this['@:{has.elements~rs}']) {
                cellProps = defaultCellProps;
            }
            else {
                cellProps = getDefaultProps();
            }
            table_1["@:{table.provider#insert.row.at~rs}"](props, index, cellProps, const_1['@:{const#to.unit~rs}'](30));
            table_1["@:{table.provider#add.ext.meta~rs}"](props);
            props.focusRow = index;
            dest = rows[index];
            for (let c of dest.cols) {
                if (c['@:{start.col.index~rs}'] >= startIndx) {
                    props.focusCol = c['@:{col.index~rs}'];
                    break;
                }
            }
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
            let dest = rows[focusRow].cols[focusCol];
            //let startIndx = dest['@:{start.col.index}'];
            let index = to == 'left' ? focusCol : dest['@:{end.col.index~rs}'] + 1;
            let cellProps;
            if (this['@:{has.elements~rs}']) {
                cellProps = defaultCellProps;
            }
            else {
                cellProps = getDefaultProps();
            }
            table_1["@:{table.provider#insert.col.at~rs}"](props, index, cellProps, const_1['@:{const#to.unit~rs}'](150));
            table_1["@:{table.provider#add.ext.meta~rs}"](props);
            dest = rows[focusRow];
            if (to != 'left') {
                //let ci = 0;
                for (let c of dest.cols) {
                    if (c['@:{start.col.index~rs}'] >= index) {
                        props.focusCol = c['@:{col.index~rs}'];
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
    '@:{del.row~rs}<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["@:{table.provider#delete.row~rs}"](props);
            table_1["@:{table.provider#add.ext.meta~rs}"](props);
            props.focusCol = 0;
            if (focusRow >= props['@:{row.max~rs}']) {
                props.focusRow = props['@:{row.max~rs}'] - 1;
            }
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '@:{del.col~rs}<click>'() {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            table_1["@:{table.provider#delete.col~rs}"](props);
            table_1["@:{table.provider#add.ext.meta~rs}"](props);
            props.focusCol = max(0, props.focusCol - 1);
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
            table_1["@:{table.provider#merge.cell~rs}"](props, to);
            table_1["@:{table.provider#add.ext.meta~rs}"](props);
            dispatch(this.root, 'change', {
                rows
            });
        }
    },
    '@:{split.cell~rs}<click>'(e) {
        let props = this.get('props');
        let { focusRow, focusCol, rows } = props;
        if (focusRow != -1 &&
            focusCol != -1) {
            let { h } = e.params;
            let cellProps;
            if (this['@:{has.elements~rs}']) {
                cellProps = defaultCellProps;
            }
            else {
                cellProps = getDefaultProps();
            }
            let min = const_1['@:{const#to.unit~rs}'](20);
            table_1["@:{table.provider#split.cell~rs}"](props, h, cellProps, min, min);
            table_1["@:{table.provider#add.ext.meta~rs}"](props);
            dispatch(this.root, 'change', {
                rows
            });
        }
    }
});

});