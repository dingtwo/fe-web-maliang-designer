/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6i/share",["51","../../5g/table","../../50/53"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let table_1 = require("../../5g/table");
let const_1 = require("../../50/53");
let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	canSetWidth,
	i18n,
	canSetHeight,}=$dataFromView,
$vnode_1;
$vnode_1=[$createVNode(0,(i18n('mT')))];$vnode_0=[$createVNode('button',{'class': 'rd-gN rd-gk rd-gm','disabled': (disabled||!canSetWidth),'mx5-click': $viewId+'_nN({type:\'x\'})',},$vnode_1)];$vnode_1=[$createVNode(0,(i18n('mU')))];$vnode_0.push($createVNode('button',{'class': 'rd-gN rd-gk rd-gm','disabled': (disabled||!canSetHeight),'mx5-click': $viewId+'_nN({type:\'y\'})',},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        let { props, disabled, dataPad } = data;
        table_1['gd'](props, true);
        let sizes = table_1['ge'](props);
        let canSetWidth = false, canSetHeight = false;
        let widths = sizes['_j9'], heights = sizes['_k_'];
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
        this['_ge'] = props;
        this['_nM'] = dataPad || 0;
        this.set({
            disabled,
            canSetWidth,
            canSetHeight
        });
    },
    render() {
        this.digest();
    },
    '_nN<click>'(e) {
        let { type } = e.params;
        let props = this['_ge'];
        let { rows, hideHead, hideLabel, hideTotal, hideFoot } = props;
        let sizes = table_1['ge'](props);
        let widths = sizes['_j9'], heights = sizes['_k_'];
        let dataPad = this['_nM'];
        if (type == 'x') {
            let totalWidth = 0, avgWidth = 0;
            for (let w of widths) {
                totalWidth += w;
            }
            avgWidth = const_1['gf'](totalWidth / widths.length);
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
            avgHeight = const_1['gf'](totalHeight / totalRows);
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