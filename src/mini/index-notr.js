/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("6i/index-notr",["4e","./index","4d/52","4d/5d"],(require,exports,module)=>{
require("4d/52");
require("4d/5d");
let $quick_fU_0_static_node;
let $quick_fU_3_static_node;
let $quick_fU_1_static_attr={'class': 'rd-em rd-et rd-fn rd-fw rd-ju',};
let $quick_fU_2_static_attr={'class': 'rd-ej',};

let magix_1 = require("4e");
let index_1 = require("./index");
magix_1.applyStyle("rd-ea",".rd-jr{background:#fa742b;color:#fff;height:40px;line-height:40px;padding:0 10px;z-index:202}.rd-js{background-color:#edeef3;height:calc(100% - 60px);overflow:scroll;transition:all .3s}.rd-jt{box-shadow:inset 0 0 0 20px rgba(250,116,43,.1);inset:40px 0 21px;z-index:1000}.rd-ju{background:#fafafa;border-top:1px solid #ccc;height:20px;line-height:20px;padding-left:25px;z-index:200}");
module.exports= index_1.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/52','class': 'rd-em rd-et rd-jr','mx5-contextmenu': $viewId+'_fv()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5d','id': '_rd_stage','class': 'rd-em rd-et rd-eu rd-ft rd-js','mx5-contextmenu': $viewId+'_fv()',})];
if($quick_fU_0_static_node){
$vnode_0.push($quick_fU_0_static_node);
}else{
$vnode_0.push($quick_fU_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-el rd-en rd-eq rd-jt','id': '_rd_sdsz',}));
}
$vnode_2=[$createVNode(0,(i18n('e6')),1)];$vnode_1=[$createVNode('div',$quick_fU_2_static_attr,$vnode_2)];
if($quick_fU_3_static_node){
$vnode_1.push($quick_fU_3_static_node);
}else{
$vnode_1.push($quick_fU_3_static_node=$createVNode('div',{'_': 'cI','class': 'rd-d9 rd-ek','id': 'ss',}));
}
$vnode_0.push($createVNode('div',$quick_fU_1_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } 
});

});