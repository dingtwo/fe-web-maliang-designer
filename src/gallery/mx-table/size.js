/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/5v/size",["4e","../../4d/4h","../../4t/table","../../4d/4g","../../4t/cell","../60/index"],(require,exports,module)=>{
require("../60/index");
let $quick_eO_static_text;
let $quick_fS_2_static_node;
let $quick_fS_0_static_attr={'class': 'rd-eI rd-ez',};
let $quick_fS_1_static_attr={'class': 'rd-dY rd-eB rd-eX rd-ef rd-ez',};
let $special_2={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let transform_1 = require("../../4d/4h");
let table_1 = require("../../4t/table");
let const_1 = require("../../4d/4g");
let cell_1 = require("../../4t/cell");
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
$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,minWidth,cell','disabled': (disabled),'class': 'rd-dH rd-eH rd-em','mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_iI()','mx5-view': '4l/60/index?step='+$keyOf($refData,step,'cH')+'&fixed='+$keyOf($refData,fixed,'cI')+'&min='+$keyOf($refData,minWidth,'cJ')+'&value='+$keyOf($refData,read(cell.width),'cK'),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,minHeight,cell','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_iO()','class': 'rd-dH rd-em','mx5-view': '4l/60/index?step='+$keyOf($refData,step,'cH')+'&fixed='+$keyOf($refData,fixed,'cI')+'&min='+$keyOf($refData,minHeight,'cL')+'&value='+$keyOf($refData,read(cell.height),'cM'),}));
if(useAH){
$vnode_1=[$quick_eO_static_text||($quick_eO_static_text=$createVNode(0,'内容撑高：'))];$vnode_2=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','checked': (!cell.fixedHeight),'disabled': (disabled),'mx5-change': $viewId+'_lb()',},1,$special_2)];
if($quick_fS_2_static_node){
$vnode_2.push($quick_fS_2_static_node);
}else{
$vnode_2.push($quick_fS_2_static_node=$createVNode('i',{'_': 'cH','class': 'rd-em rd-et rd-fg',}));
}
$vnode_1.push($createVNode('label',$quick_fS_1_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_fS_0_static_attr,$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            minWidth: () => const_1["dF"](cell_1['_iF']),
            minHeight: () => const_1["dF"](cell_1['_iH']),
            step: const_1["ej"],
            fixed: const_1["ek"],
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
    '_iI<input>'(e) {
        this['_hR'](e);
        let props = this.get('props');
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.width = transform_1["dM"](e.value);
        table_1["dM"](props, cell);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_iO<input>'(e) {
        this['_hR'](e);
        let props = this.get('props');
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.height = transform_1["dM"](e.value);
        table_1["dM"](props, cell);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_lb<change>'(e) {
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