/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6h/v-size",["51","../../50/54","../../5g/cell","../../50/53","../6j/index"],(require,exports,module)=>{
require("../6j/index");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let transform_1 = require("../../50/54");
let cell_1 = require("../../5g/cell");
let const_1 = require("../../50/53");
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
	row,
	minHeight,
	cell,}=$dataFromView;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'$': 'minWidth,fixed,step,row','disabled': (disabled),'class': 'rd-gW rd-gg rd-hg','mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_lr()','mx5-view': '58/6j/index?min='+$keyOf($refData,minWidth,'eD')+'&fixed='+$keyOf($refData,fixed,'eE')+'&step='+$keyOf($refData,step,'eF')+'&value='+$keyOf($refData,read(row.width),'eG'),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'minHeight,fixed,step,cell','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_lq()','class': 'rd-gW rd-gg','mx5-view': '58/6j/index?min='+$keyOf($refData,minHeight,'eH')+'&fixed='+$keyOf($refData,fixed,'eE')+'&step='+$keyOf($refData,step,'eF')+'&value='+$keyOf($refData,read(cell.height),'eI'),})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            fixed: const_1["gU"],
            step: const_1["gU"],
            minWidth: () => const_1["ge"](cell_1["_lh"]),
            minHeight: () => const_1["ge"](cell_1["_lj"]),
            read: transform_1["gg"]
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
    '_lq<input>'(e) {
        this['_kt'](e);
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.height = transform_1["gl"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_lr<input>'(e) {
        this['_kt'](e);
        let rows = this.get('rows');
        let row = this.get('row');
        row.width = transform_1["gl"](e.value);
        dispatch(this.root, 'change', {
            rows
        });
    }
});

});