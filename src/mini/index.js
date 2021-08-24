/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("75/index",["51","../50/index","50/5l","50/5v","50/57","50/60"],(require,exports,module)=>{
require("50/5l");
require("50/5v");
require("50/57");
require("50/60");
let $quick_iu_2_static_node;
let $quick_iu_3_static_node;
let $quick_iu_4_static_node;
let $quick_iu_7_static_node;
let $quick_iu_0_static_attr={'class': 'rd-h0 rd-jd',};
let $quick_iu_1_static_attr={'class': 'rd-g9 rd-je',};
let $quick_iu_5_static_attr={'class': 'rd-g3 rd-gW rd-h6 rd-hX rd-jj',};
let $quick_iu_6_static_attr={'class': 'rd-gT',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let index_1 = require("../50/index");
let { State } = magix_1;
State.set({
    'gk': 1
});
module.exports= index_1.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/5l','class': 'rd-g3 rd-gW rd-ja','mx5-contextmenu': $viewId+'_h6()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/5v','class': 'rd-g3 rd-gW rd-jb','mx5-contextmenu': $viewId+'_h6()',})];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/57','id': '_rd_axis','class': 'rd-g3 rd-gW rd-jc','mx5-contextmenu': $viewId+'_h6()',})];
if($quick_iu_2_static_node){
$vnode_2=[$quick_iu_2_static_node];
}else{
$vnode_2=[$quick_iu_2_static_node=$createVNode('div',{'_': 'eD','class': 'rd-g4 rd-jg',})];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/60','id': '_rd_stage','class': 'rd-g3 rd-g4 rd-g8 rd-gW rd-h3 rd-jf',}));
if($quick_iu_3_static_node){
$vnode_2.push($quick_iu_3_static_node);
}else{
$vnode_2.push($quick_iu_3_static_node=$createVNode('div',{'_': 'eE','class': 'rd-g4 rd-jh',}));
}
$vnode_1.push($createVNode('div',$quick_iu_1_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_iu_0_static_attr,$vnode_1));
if($quick_iu_4_static_node){
$vnode_0.push($quick_iu_4_static_node);
}else{
$vnode_0.push($quick_iu_4_static_node=$createVNode('div',{'_': 'eF','class': 'rd-g0 rd-g3 rd-gV rd-gX rd-ji','id': '_rd_sdsz',}));
}
$vnode_2=[$createVNode(0,(i18n('hF')),1)];$vnode_1=[$createVNode('div',$quick_iu_6_static_attr,$vnode_2)];
if($quick_iu_7_static_node){
$vnode_1.push($quick_iu_7_static_node);
}else{
$vnode_1.push($quick_iu_7_static_node=$createVNode('div',{'_': 'eG','class': 'rd-gI rd-gU','id': 'ss',}));
}
$vnode_0.push($createVNode('div',$quick_iu_5_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } 
});

});