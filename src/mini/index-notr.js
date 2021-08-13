/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("7g/index-notr",["5c","./index","5b/60","5b/6b"],(require,exports,module)=>{
require("5b/60");
require("5b/6b");
let $quick_oh_0_static_node;
let $quick_oh_3_static_node;
let $quick_oh_1_static_attr={'class': 'rd-mK rd-mR rd-nL rd-nU rd-rS',};
let $quick_oh_2_static_attr={'class': 'rd-mH',};

let magix_1 = require("5c");
let index_1 = require("./index");
magix_1.applyStyle("rd-my",".rd-rP{background:#47b34e;color:#fff;height:40px;line-height:40px;padding:0 10px;z-index:202}.rd-rQ{background-color:#edeef3;height:calc(100% - 60px);overflow:scroll;transition:all .3s}.rd-rR{box-shadow:inset 0 0 0 20px rgba(71,179,78,.1);inset:40px 0 21px;z-index:1000}.rd-rS{background:#fafafa;border-top:1px solid #ccc;height:20px;line-height:20px;padding-left:25px;z-index:200}");
module.exports= index_1.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/60','class': 'rd-mK rd-mR rd-rP','mx5-contextmenu': $viewId+'_nT()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6b','id': '_rd_stage','class': 'rd-mK rd-mR rd-mS rd-nR rd-rQ','mx5-contextmenu': $viewId+'_nT()',})];
if($quick_oh_0_static_node){
$vnode_0.push($quick_oh_0_static_node);
}else{
$vnode_0.push($quick_oh_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-mJ rd-mL rd-mO rd-rR','id': '_rd_sdsz',}));
}
$vnode_2=[$createVNode(0,(i18n('nt')),1)];$vnode_1=[$createVNode('div',$quick_oh_2_static_attr,$vnode_2)];
if($quick_oh_3_static_node){
$vnode_1.push($quick_oh_3_static_node);
}else{
$vnode_1.push($quick_oh_3_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mI rd-mw','id': 'ss',}));
}
$vnode_0.push($createVNode('div',$quick_oh_1_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } 
});

});