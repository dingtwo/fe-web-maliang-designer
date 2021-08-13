/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6s/h-size",["5c","../../5b/5f","../../5r/cell","../../5b/5e","../6u/index"],(require,exports,module)=>{
require("../6u/index");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let transform_1 = require("../../5b/5f");
let cell_1 = require("../../5r/cell");
let const_1 = require("../../5b/5e");
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
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'$': 'minWidth,fixed,step,cell','disabled': (disabled),'class': 'rd-l5 rd-m5 rd-mK','mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_q6()','mx5-view': '5j/6u/index?min='+$keyOf($refData,minWidth,'i!')+'&fixed='+$keyOf($refData,fixed,'i@')+'&step='+$keyOf($refData,step,'i$')+'&value='+$keyOf($refData,read(cell.width),'i^'),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'minHeight,fixed,step,row','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_q7()','class': 'rd-l5 rd-mK','mx5-view': '5j/6u/index?min='+$keyOf($refData,minHeight,'i*')+'&fixed='+$keyOf($refData,fixed,'i@')+'&step='+$keyOf($refData,step,'i$')+'&value='+$keyOf($refData,read(row.height),'i{'),})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            fixed: const_1["mI"],
            step: const_1["mI"],
            minWidth: () => const_1["l3"](cell_1["_q3"]),
            minHeight: () => const_1["l3"](cell_1["_q5"]),
            read: transform_1["l5"]
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
    '_q6<input>'(e) {
        this['_qe'](e);
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.width = transform_1["m_"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_q7<input>'(e) {
        this['_qe'](e);
        let rows = this.get('rows');
        let row = this.get('row');
        row.height = transform_1["m_"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    }
});

});