/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-table/share",["magix5","../../provider/table","../../designer/const"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let table_1 = require("../../provider/table");
let const_1 = require("../../designer/const");
let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	canSetWidth,
	i18n,
	canSetHeight,}=$dataFromView,
$vnode_1;
$vnode_1=[$createVNode(0,($__line=1,$__art='{{=i18n(\'@:{lang#mx-gallery.share.width~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.share.width~rs}\')%>',(i18n('@:{lang#mx-gallery.share.width~rs}'))))];$vnode_0=[$createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-wp100','disabled': ($temp_var=($__line=1,$__art='{{=disabled||!canSetWidth}}',$__ctrl='<%=disabled||!canSetWidth%>',disabled||!canSetWidth),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/share.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-click': $viewId+'@:{share~rs}({type:\'x\'})',},$vnode_1)];$vnode_1=[$createVNode(0,($__line=2,$__art='{{=i18n(\'@:{lang#mx-gallery.share.height~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.share.height~rs}\')%>',(i18n('@:{lang#mx-gallery.share.height~rs}'))))];$vnode_0.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-wp100','disabled': ($temp_var=($__line=2,$__art='{{=disabled||!canSetHeight}}',$__ctrl='<%=disabled||!canSetHeight%>',disabled||!canSetHeight),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-table/share.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-click': $viewId+'@:{share~rs}({type:\'y\'})',},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-table/share.html'; throw msg; }  } ,
    assign(data) {
        let { props, disabled, dataPad } = data;
        table_1['@:{table.provider#add.ext.meta~rs}'](props, true);
        let sizes = table_1['@:{table.provider#get.sizes~rs}'](props);
        let canSetWidth = false, canSetHeight = false;
        let widths = sizes['@:{col.widths~rs}'], heights = sizes['@:{row.heights~rs}'];
        let fw = widths[0], fh = heights[0];
        for (let w of widths) {
            if (w != fw) {
                canSetWidth = true;
                break;
            }
        }
        let { rows, hideHead, hideLabel, hideTotal, hideFoot } = props;
        let firstCompare, firstSetted, findLabelRow, findTotalRow, findFootRow, ri = 0;
        for (let row of rows) {
            if (row.label) {
                findLabelRow = 1;
            }
            else if (row.total) {
                findTotalRow = 1;
            }
            else if (findTotalRow) {
                findFootRow = 1;
            }
            if ((row.label && !hideLabel) ||
                row.data ||
                (row.total && !hideTotal) ||
                (!findLabelRow && !hideHead) ||
                (findFootRow && !hideFoot)) {
                if (firstSetted) {
                    if (firstCompare != heights[ri]) {
                        canSetHeight = true;
                        break;
                    }
                }
                else {
                    firstCompare = heights[ri];
                    firstSetted = 1;
                }
            }
            ri++;
        }
        this['@:{props~rs}'] = props;
        this['@:{data.pad~rs}'] = dataPad || 0;
        this.set({
            disabled,
            canSetWidth,
            canSetHeight
        });
    },
    render() {
        this.digest();
    },
    '@:{share~rs}<click>'(e) {
        let { type } = e.params;
        let props = this['@:{props~rs}'];
        let { rows, hideHead, hideLabel, hideTotal, hideFoot } = props;
        let sizes = table_1['@:{table.provider#get.sizes~rs}'](props);
        let widths = sizes['@:{col.widths~rs}'], heights = sizes['@:{row.heights~rs}'];
        let dataPad = this['@:{data.pad~rs}'];
        if (type == 'x') {
            let totalWidth = 0, avgWidth = 0;
            for (let w of widths) {
                totalWidth += w;
            }
            avgWidth = const_1['@:{const#scale.to.unit~rs}'](totalWidth / widths.length);
            for (let row of rows) {
                for (let col of row.cols) {
                    col.width = (col.colspan || 1) * avgWidth;
                }
            }
        }
        else {
            let totalHeight = 0, avgHeight = 0, totalRows = heights.length;
            for (let h of heights) {
                totalHeight += h;
            }
            totalRows += dataPad;
            let ri = 0, labelRowIndex = -1, dataRowIndex = -1, totalRowIndex = -1;
            for (let row of rows) {
                if (!row.label &&
                    labelRowIndex == -1) {
                    if (hideHead) {
                        totalHeight -= heights[ri];
                        totalRows--;
                    }
                }
                else if (row.label) {
                    if (labelRowIndex == -1) {
                        labelRowIndex = ri;
                    }
                    if (hideLabel) {
                        totalHeight -= heights[ri];
                        totalRows--;
                    }
                }
                else if (row.data) {
                    totalHeight += dataPad * heights[ri];
                    if (dataRowIndex == -1) {
                        dataRowIndex = ri;
                    }
                }
                else if (row.total) {
                    if (hideTotal) {
                        totalHeight -= heights[ri];
                        totalRows--;
                    }
                    if (totalRowIndex == -1) {
                        totalRowIndex = ri;
                    }
                }
                else if (totalRowIndex != -1 &&
                    hideFoot) {
                    totalHeight -= heights[ri];
                    totalRows--;
                }
                ri++;
            }
            avgHeight = const_1['@:{const#scale.to.unit~rs}'](totalHeight / totalRows);
            let findLabelRow, findTotalRow, findFootRow;
            for (let row of rows) {
                if (row.label) {
                    findLabelRow = 1;
                }
                else if (row.total) {
                    findTotalRow = 1;
                }
                else if (findTotalRow) {
                    findFootRow = 1;
                }
                if ((row.label && !hideLabel) ||
                    row.data ||
                    (row.total && !hideTotal) ||
                    (!findLabelRow && !hideHead) ||
                    (findFootRow && !hideFoot)) {
                    for (let col of row.cols) {
                        col.height = (col.rowspan || 1) * avgHeight;
                    }
                }
            }
        }
        dispatch(this.root, 'change', {
            rows
        });
    }
});

});