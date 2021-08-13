/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/richtext/index",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$$_class,
$$_style,
$vnode_1;
$vnode_1=[$createVNode(0,($__line=1,$__art='{{=props.text}}',$__ctrl='<%=props.text%>',(props.text)),1)];;$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1'+($__line=1,$__art='{{if !props.splitToPages}}','');$__ctrl='<%if(!props.splitToPages){%>';if(!props.splitToPages){;$$_class+=' rd-_assets_index_less_-overflow-auto'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style='left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{if props.splitToPages}}','');$__ctrl='<%if(props.splitToPages){%>';if(props.splitToPages){;$$_style+='auto'+($__line=1,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+=''+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'class': $$_class,'style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/richtext/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});