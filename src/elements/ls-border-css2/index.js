/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/ls-border-css2/index",["magix5"],(require,exports,module)=>{
let $quick_d2_0_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { View, applyStyle } = magix_1;
applyStyle("rd-_elements_ls-border-css2_index_less_",".rd-_elements_ls-border-css2_index_less_-outer {\nborder-radius:10px;\nborder:1px #0174f5 solid;\npadding:1px;\nbackground:#0208171a;\n}\n.rd-_elements_ls-border-css2_index_less_-inner {\nborder:2px solid #016ae0;\nborder-radius:10px;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_1;

if($quick_d2_0_static_node){
$vnode_1=[$quick_d2_0_static_node];
}else{
$vnode_1=[$quick_d2_0_static_node=$createVNode('div',{'_': 'b^','class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-wp100 rd-_elements_ls-border-css2_index_less_-inner',})];
}
$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1 rd-_elements_ls-border-css2_index_less_-outer','style': 'left:'+($__line=3,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=3,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=3,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=3,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=3,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=3,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/ls-border-css2/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});