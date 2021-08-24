/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("75/index-notr",["51","./index","50/5l","50/60"],(require,exports,module)=>{
require("50/5l");
require("50/60");
let $quick_it_0_static_node;
let $quick_it_3_static_node;
let $quick_it_1_static_attr={'class': 'rd-g3 rd-gW rd-h6 rd-hX rd-l4',};
let $quick_it_2_static_attr={'class': 'rd-gT',};

let magix_1 = require("51");
let index_1 = require("./index");
magix_1.applyStyle("rd-gK",".rd-l1{background:#47b34e;color:#fff;height:40px;line-height:40px;padding:0 10px;z-index:202}.rd-l2{background-color:#edeef3;height:calc(100% - 60px);overflow:scroll;transition:all .3s}.rd-l3{box-shadow:inset 0 0 0 20px rgba(71,179,78,.1);inset:40px 0 21px;z-index:1000}.rd-l4{background:#fafafa;border-top:1px solid #ccc;height:20px;line-height:20px;padding-left:25px;z-index:200}");
module.exports= index_1.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/5l','class': 'rd-g3 rd-gW rd-l1','mx5-contextmenu': $viewId+'_h6()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/60','id': '_rd_stage','class': 'rd-g3 rd-g4 rd-gW rd-h3 rd-l2','mx5-contextmenu': $viewId+'_h6()',})];
if($quick_it_0_static_node){
$vnode_0.push($quick_it_0_static_node);
}else{
$vnode_0.push($quick_it_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-g0 rd-gV rd-gX rd-l3','id': '_rd_sdsz',}));
}
$vnode_2=[$createVNode(0,(i18n('hF')),1)];$vnode_1=[$createVNode('div',$quick_it_2_static_attr,$vnode_2)];
if($quick_it_3_static_node){
$vnode_1.push($quick_it_3_static_node);
}else{
$vnode_1.push($quick_it_3_static_node=$createVNode('div',{'_': 'eE','class': 'rd-gI rd-gU','id': 'ss',}));
}
$vnode_0.push($createVNode('div',$quick_it_1_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } 
});

});