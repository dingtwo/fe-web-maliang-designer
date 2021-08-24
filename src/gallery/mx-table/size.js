/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6i/size",["51","../../50/54","../../5g/table","../../50/53","../../5g/cell","../6j/index"],(require,exports,module)=>{
require("../6j/index");
let $quick_hn_static_text;
let $quick_ir_2_static_node;
let $quick_ir_0_static_attr={'class': 'rd-g9 rd-hh',};
let $quick_ir_1_static_attr={'class': 'rd-g9 rd-gP rd-gx rd-ha rd-hw',};
let $special_2={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let transform_1 = require("../../50/54");
let table_1 = require("../../5g/table");
let const_1 = require("../../50/53");
let cell_1 = require("../../5g/cell");
let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0=[],
{
	disabled,
	step,
	fixed,
	minWidth,
	read,
	cell,
	minHeight,
	useAH,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,minWidth,cell','disabled': (disabled),'class': 'rd-gW rd-gg rd-hg','mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_lk()','mx5-view': '58/6j/index?step='+$keyOf($refData,step,'eD')+'&fixed='+$keyOf($refData,fixed,'eE')+'&min='+$keyOf($refData,minWidth,'eF')+'&value='+$keyOf($refData,read(cell.width),'eG'),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,minHeight,cell','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_lq()','class': 'rd-gW rd-gg','mx5-view': '58/6j/index?step='+$keyOf($refData,step,'eD')+'&fixed='+$keyOf($refData,fixed,'eE')+'&min='+$keyOf($refData,minHeight,'eH')+'&value='+$keyOf($refData,read(cell.height),'eI'),}));
if(useAH){
$vnode_1=[$quick_hn_static_text||($quick_hn_static_text=$createVNode(0,'内容撑高：'))];$vnode_2=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','checked': (!cell.fixedHeight),'disabled': (disabled),'mx5-change': $viewId+'_nO()',},1,$special_2)];
if($quick_ir_2_static_node){
$vnode_2.push($quick_ir_2_static_node);
}else{
$vnode_2.push($quick_ir_2_static_node=$createVNode('i',{'_': 'eD','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_1.push($createVNode('label',$quick_ir_1_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_ir_0_static_attr,$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            minWidth: () => const_1["ge"](cell_1['_lh']),
            minHeight: () => const_1["ge"](cell_1['_lj']),
            step: const_1["gT"],
            fixed: const_1["gU"],
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
            useAH: data.ah,
            props,
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
    '_lk<input>'(e) {
        this['_kt'](e);
        let props = this.get('props');
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.width = transform_1["gl"](e.value);
        table_1["gl"](props, cell);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_lq<input>'(e) {
        this['_kt'](e);
        let props = this.get('props');
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.height = transform_1["gl"](e.value);
        table_1["gl"](props, cell);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_nO<change>'(e) {
        let rows = this.get('rows');
        let cell = this.get('cell');
        let checked = e.eventTarget.checked;
        cell.fixedHeight = !checked;
        dispatch(this.root, 'change', {
            rows
        });
    }
});

});