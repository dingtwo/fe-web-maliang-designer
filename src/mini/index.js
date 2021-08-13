/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("mini/index",["magix5","../designer/index","designer/header","designer/toolbar","designer/axis","designer/stage"],(require,exports,module)=>{
require("designer/header");
require("designer/toolbar");
require("designer/axis");
require("designer/stage");
let $quick_hj_2_static_node;
let $quick_hj_3_static_node;
let $quick_hj_4_static_node;
let $quick_hj_7_static_node;
let $quick_hj_0_static_attr={'class': 'rd-_assets_index_less_-overflow-hidden rd-_designer_index_less_-axis-stage-wrapper',};
let $quick_hj_1_static_attr={'class': 'rd-_assets_index_less_-flex rd-_designer_index_less_-stage-wrapper',};
let $quick_hj_5_static_attr={'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-pr rd-_assets_index_less_-unselectable rd-_designer_index_less_-foot',};
let $quick_hj_6_static_attr={'class': 'rd-_assets_index_less_-fl',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let index_1 = require("../designer/index");
let { State } = magix_1;
State.set({
    '@:{global#provider.of.use.mini~rs}': 1
});
module.exports= index_1.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/header','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-unselectable rd-_designer_index_less_-header','mx5-contextmenu': $viewId+'@:{prevent~rs}()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-unselectable rd-_designer_index_less_-toolbar','mx5-contextmenu': $viewId+'@:{prevent~rs}()',})];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/axis','id': '_rd_axis','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-unselectable rd-_designer_index_less_-axis','mx5-contextmenu': $viewId+'@:{prevent~rs}()',})];
if($quick_hj_2_static_node){
$vnode_2=[$quick_hj_2_static_node];
}else{
$vnode_2=[$quick_hj_2_static_node=$createVNode('div',{'_': 'dM','class': 'rd-_assets_index_less_-scrollable rd-_designer_index_less_-stage-left',})];
}
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/stage','id': '_rd_stage','class': 'rd-_assets_index_less_-flex-fill-rest rd-_assets_index_less_-overflow-scroll rd-_assets_index_less_-pr rd-_assets_index_less_-scrollable rd-_assets_index_less_-unselectable rd-_designer_index_less_-stage',}));
if($quick_hj_3_static_node){
$vnode_2.push($quick_hj_3_static_node);
}else{
$vnode_2.push($quick_hj_3_static_node=$createVNode('div',{'_': 'dN','class': 'rd-_assets_index_less_-scrollable rd-_designer_index_less_-stage-right',}));
}
$vnode_1.push($createVNode('div',$quick_hj_1_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_hj_0_static_attr,$vnode_1));
if($quick_hj_4_static_node){
$vnode_0.push($quick_hj_4_static_node);
}else{
$vnode_0.push($quick_hj_4_static_node=$createVNode('div',{'_': 'dO','class': 'rd-_assets_index_less_-none rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-unselectable rd-_designer_index_less_-stage-drag-scroll-zone','id': '_rd_sdsz',}));
}
$vnode_2=[$createVNode(0,($__line=17,$__art='{{=i18n(\'@:{lang#site.copy.right~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#site.copy.right~rs}\')%>',(i18n('@:{lang#site.copy.right~rs}'))),1)];$vnode_1=[$createVNode('div',$quick_hj_6_static_attr,$vnode_2)];
if($quick_hj_7_static_node){
$vnode_1.push($quick_hj_7_static_node);
}else{
$vnode_1.push($quick_hj_7_static_node=$createVNode('div',{'_': 'dP','class': 'rd-_assets_index_less_-fr rd-_assets_index_less_-mr10','id': 'ss',}));
}
$vnode_0.push($createVNode('div',$quick_hj_5_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:mini/index.html'; throw msg; }  } 
});

});