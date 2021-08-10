/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/5u/h-size",["4e","../../4d/4h","../../4t/cell","../../4d/4g","../60/index"],(require,exports,module)=>{
require("../60/index");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let transform_1 = require("../../4d/4h");
let cell_1 = require("../../4t/cell");
let const_1 = require("../../4d/4g");
let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	minWidth,
	fixed,
	step,
	read,
	cell,
	minHeight,
	row,}=$dataFromView;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'$': 'minWidth,fixed,step,cell','disabled': (disabled),'class': 'rd-dH rd-eH rd-em','mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_iI()','mx5-view': '4l/60/index?min='+$keyOf($refData,minWidth,'cH')+'&fixed='+$keyOf($refData,fixed,'cI')+'&step='+$keyOf($refData,step,'cJ')+'&value='+$keyOf($refData,read(cell.width),'cK'),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'minHeight,fixed,step,row','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_iJ()','class': 'rd-dH rd-em','mx5-view': '4l/60/index?min='+$keyOf($refData,minHeight,'cL')+'&fixed='+$keyOf($refData,fixed,'cI')+'&step='+$keyOf($refData,step,'cJ')+'&value='+$keyOf($refData,read(row.height),'cM'),})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            fixed: const_1["ek"],
            step: const_1["ek"],
            minWidth: () => const_1["dF"](cell_1["_iF"]),
            minHeight: () => const_1["dF"](cell_1["_iH"]),
            read: transform_1["dH"]
        });
    },
    assign(data) {
        let { props, disabled } = data;
        let { rows, focusRow, focusCol } = props;
        if (focusRow == -1) {
            focusRow = 0;
        }
        if (focusCol == -1) {
            focusCol = 0;
        }
        let cell = rows[focusRow].cols[focusCol];
        this.set({
            row: rows[focusRow],
            disabled,
            cell,
            rows,
            focusRow,
            focusCol
        });
    },
    render() {
        this.digest();
    },
    '_iI<input>'(e) {
        this['_hR'](e);
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.width = transform_1["dM"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_iJ<input>'(e) {
        this['_hR'](e);
        let rows = this.get('rows');
        let row = this.get('row');
        row.height = transform_1["dM"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    }
});

});