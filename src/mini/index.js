/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("7g/index",["5c","../5b/index","5b/60","5b/6a","5b/5i","5b/6b"],(require,exports,module)=>{
require("5b/60");
require("5b/6a");
require("5b/5i");
require("5b/6b");
let $quick_oi_2_static_node;
let $quick_oi_3_static_node;
let $quick_oi_4_static_node;
let $quick_oi_7_static_node;
let $quick_oi_0_static_attr={'class': 'rd-nO rd-o2',};
let $quick_oi_1_static_attr={'class': 'rd-mX rd-o3',};
let $quick_oi_5_static_attr={'class': 'rd-mK rd-mR rd-nL rd-nU rd-o8',};
let $quick_oi_6_static_attr={'class': 'rd-mH',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let index_1 = require("../5b/index");
let { State } = magix_1;
State.set({
    'l9': 1
});
module.exports= index_1.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/60','class': 'rd-mK rd-mR rd-oZ','mx5-contextmenu': $viewId+'_nT()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6a','class': 'rd-mK rd-mR rd-o0','mx5-contextmenu': $viewId+'_nT()',})];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/5i','id': '_rd_axis','class': 'rd-mK rd-mR rd-o1','mx5-contextmenu': $viewId+'_nT()',})];
if($quick_oi_2_static_node){
$vnode_2=[$quick_oi_2_static_node];
}else{
$vnode_2=[$quick_oi_2_static_node=$createVNode('div',{'_': 'i!','class': 'rd-mS rd-o5',})];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6b','id': '_rd_stage','class': 'rd-mK rd-mR rd-mS rd-mW rd-nR rd-o4',}));
if($quick_oi_3_static_node){
$vnode_2.push($quick_oi_3_static_node);
}else{
$vnode_2.push($quick_oi_3_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mS rd-o6',}));
}
$vnode_1.push($createVNode('div',$quick_oi_1_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_oi_0_static_attr,$vnode_1));
if($quick_oi_4_static_node){
$vnode_0.push($quick_oi_4_static_node);
}else{
$vnode_0.push($quick_oi_4_static_node=$createVNode('div',{'_': 'i$','class': 'rd-mJ rd-mL rd-mO rd-mR rd-o7','id': '_rd_sdsz',}));
}
$vnode_2=[$createVNode(0,(i18n('nt')),1)];$vnode_1=[$createVNode('div',$quick_oi_6_static_attr,$vnode_2)];
if($quick_oi_7_static_node){
$vnode_1.push($quick_oi_7_static_node);
}else{
$vnode_1.push($quick_oi_7_static_node=$createVNode('div',{'_': 'i^','class': 'rd-mI rd-mw','id': 'ss',}));
}
$vnode_0.push($createVNode('div',$quick_oi_5_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } 
});

});