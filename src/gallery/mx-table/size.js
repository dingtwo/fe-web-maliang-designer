/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6t/size",["5c","../../5b/5f","../../5r/table","../../5b/5e","../../5r/cell","../6u/index"],(require,exports,module)=>{
require("../6u/index");
let $quick_nb_static_text;
let $quick_of_2_static_node;
let $quick_of_0_static_attr={'class': 'rd-m6 rd-mX',};
let $quick_of_1_static_attr={'class': 'rd-mD rd-mX rd-mZ rd-ml rd-nk',};
let $special_2={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let transform_1 = require("../../5b/5f");
let table_1 = require("../../5r/table");
let const_1 = require("../../5b/5e");
let cell_1 = require("../../5r/cell");
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
$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,minWidth,cell','disabled': (disabled),'class': 'rd-l5 rd-m5 rd-mK','mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_q6()','mx5-view': '5j/6u/index?step='+$keyOf($refData,step,'i!')+'&fixed='+$keyOf($refData,fixed,'i@')+'&min='+$keyOf($refData,minWidth,'i$')+'&value='+$keyOf($refData,read(cell.width),'i^'),}),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,minHeight,cell','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_rb()','class': 'rd-l5 rd-mK','mx5-view': '5j/6u/index?step='+$keyOf($refData,step,'i!')+'&fixed='+$keyOf($refData,fixed,'i@')+'&min='+$keyOf($refData,minHeight,'i*')+'&value='+$keyOf($refData,read(cell.height),'i{'),}));
if(useAH){
$vnode_1=[$quick_nb_static_text||($quick_nb_static_text=$createVNode(0,'内容撑高：'))];$vnode_2=[$createVNode('input',{'class': 'rd-mJ rd-nD','type': 'checkbox','checked': (!cell.fixedHeight),'disabled': (disabled),'mx5-change': $viewId+'_tz()',},1,$special_2)];
if($quick_of_2_static_node){
$vnode_2.push($quick_of_2_static_node);
}else{
$vnode_2.push($quick_of_2_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mK rd-mR rd-nE',}));
}
$vnode_1.push($createVNode('label',$quick_of_1_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_of_0_static_attr,$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            minWidth: () => const_1["l3"](cell_1['_q3']),
            minHeight: () => const_1["l3"](cell_1['_q5']),
            step: const_1["mH"],
            fixed: const_1["mI"],
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
    '_q6<input>'(e) {
        this['_qe'](e);
        let props = this.get('props');
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.width = transform_1["m_"](e.value);
        table_1["m_"](props, cell);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_rb<input>'(e) {
        this['_qe'](e);
        let props = this.get('props');
        let rows = this.get('rows');
        let cell = this.get('cell');
        cell.height = transform_1["m_"](e.value);
        table_1["m_"](props, cell);
        dispatch(this.root, 'change', {
            rows
        });
    },
    '_tz<change>'(e) {
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