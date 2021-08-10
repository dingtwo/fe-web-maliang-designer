/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("6i/index",["4e","../4d/index","4d/52","4d/5c","4d/4k","4d/5d"],(require,exports,module)=>{
require("4d/52");
require("4d/5c");
require("4d/4k");
require("4d/5d");
let $quick_fV_2_static_node;
let $quick_fV_3_static_node;
let $quick_fV_4_static_node;
let $quick_fV_7_static_node;
let $quick_fV_0_static_attr={'class': 'rd-fq rd-gE',};
let $quick_fV_1_static_attr={'class': 'rd-ez rd-gF',};
let $quick_fV_5_static_attr={'class': 'rd-em rd-et rd-fn rd-fw rd-gK',};
let $quick_fV_6_static_attr={'class': 'rd-ej',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let index_1 = require("../4d/index");
let { State } = magix_1;
State.set({
    'dL': 1
});
module.exports= index_1.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/52','class': 'rd-em rd-et rd-gB','mx5-contextmenu': $viewId+'_fv()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5c','class': 'rd-em rd-et rd-gC','mx5-contextmenu': $viewId+'_fv()',})];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/4k','id': '_rd_axis','class': 'rd-em rd-et rd-gD','mx5-contextmenu': $viewId+'_fv()',})];
if($quick_fV_2_static_node){
$vnode_2=[$quick_fV_2_static_node];
}else{
$vnode_2=[$quick_fV_2_static_node=$createVNode('div',{'_': 'cH','class': 'rd-eu rd-gH',})];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5d','id': '_rd_stage','class': 'rd-em rd-et rd-eu rd-ey rd-ft rd-gG',}));
if($quick_fV_3_static_node){
$vnode_2.push($quick_fV_3_static_node);
}else{
$vnode_2.push($quick_fV_3_static_node=$createVNode('div',{'_': 'cI','class': 'rd-eu rd-gI',}));
}
$vnode_1.push($createVNode('div',$quick_fV_1_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_fV_0_static_attr,$vnode_1));
if($quick_fV_4_static_node){
$vnode_0.push($quick_fV_4_static_node);
}else{
$vnode_0.push($quick_fV_4_static_node=$createVNode('div',{'_': 'cJ','class': 'rd-el rd-en rd-eq rd-et rd-gJ','id': '_rd_sdsz',}));
}
$vnode_2=[$createVNode(0,(i18n('e6')),1)];$vnode_1=[$createVNode('div',$quick_fV_6_static_attr,$vnode_2)];
if($quick_fV_7_static_node){
$vnode_1.push($quick_fV_7_static_node);
}else{
$vnode_1.push($quick_fV_7_static_node=$createVNode('div',{'_': 'cK','class': 'rd-d9 rd-ek','id': 'ss',}));
}
$vnode_0.push($createVNode('div',$quick_fV_5_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } 
});

});