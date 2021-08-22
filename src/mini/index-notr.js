/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("mini/index-notr",["magix5","./index","designer/header","designer/stage"],(require,exports,module)=>{
require("designer/header");
require("designer/stage");
let $quick_dN_0_static_node;
let $quick_dN_3_static_node;
let $quick_dN_1_static_attr={'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-pr rd-_assets_index_less_-unselectable rd-_mini_index-notr_less_-foot',};
let $quick_dN_2_static_attr={'class': 'rd-_assets_index_less_-fl',};

let magix_1 = require("magix5");
let index_1 = require("./index");
magix_1.applyStyle("rd-_mini_index-notr_less_","\n.rd-_mini_index-notr_less_-header {\nbackground:#47B34E;\nheight:40px;\nline-height:40px;\npadding:0 10px;\ncolor:#ffffff;\nz-index:202;\n}\n.rd-_mini_index-notr_less_-stage {\noverflow:scroll;\nheight:calc(100% - 60px);\nbackground-color:#edeef3;\ntransition:all 0.3s;\n}\n.rd-_mini_index-notr_less_-stage-drag-scroll-zone {\ninset:40px 0 21px;\nbox-shadow:inset 0 0 0 20px rgba(71, 179, 78, 0.1);\nz-index:1000;\n}\n.rd-_mini_index-notr_less_-foot {\nheight:20px;\nbackground:#fafafa;\nz-index:200;\nborder-top:1px solid #ccc;\npadding-left:25px;\nline-height:20px;\n}\n");
module.exports= index_1.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/header','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-unselectable rd-_mini_index-notr_less_-header','mx5-contextmenu': $viewId+'@:{prevent~rs}()',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/stage','id': '_rd_stage','class': 'rd-_assets_index_less_-overflow-scroll rd-_assets_index_less_-pr rd-_assets_index_less_-scrollable rd-_assets_index_less_-unselectable rd-_mini_index-notr_less_-stage','mx5-contextmenu': $viewId+'@:{prevent~rs}()',})];
if($quick_dN_0_static_node){
$vnode_0.push($quick_dN_0_static_node);
}else{
$vnode_0.push($quick_dN_0_static_node=$createVNode('div',{'_': 'a^','class': 'rd-_assets_index_less_-none rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_mini_index-notr_less_-stage-drag-scroll-zone','id': '_rd_sdsz',}));
}
$vnode_2=[$createVNode(0,($__line=5,$__art='{{=i18n(\'@:{lang#site.copy.right~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#site.copy.right~rs}\')%>',(i18n('@:{lang#site.copy.right~rs}'))),1)];$vnode_1=[$createVNode('div',$quick_dN_2_static_attr,$vnode_2)];
if($quick_dN_3_static_node){
$vnode_1.push($quick_dN_3_static_node);
}else{
$vnode_1.push($quick_dN_3_static_node=$createVNode('div',{'_': 'a*','class': 'rd-_assets_index_less_-fr rd-_assets_index_less_-mr10','id': 'ss',}));
}
$vnode_0.push($createVNode('div',$quick_dN_1_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:mini/index-notr.html'; throw msg; }  } 
});

});