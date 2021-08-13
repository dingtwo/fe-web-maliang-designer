/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/rod/index",["magix5"],(require,exports,module)=>{


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
$$_style,
$vnode_2,
$vnode_1;
$vnode_1=[$createVNode('span',{'style': 'flex-grow:1;border-top:1px '+($__line=3,$__art='{{=props.linetype}}',$__ctrl='<%=props.linetype%>',(props.linetype))+' '+($__line=3,$__art='{{=props.color}}',$__ctrl='<%=props.color%>',(props.color)),})];$vnode_2=[$createVNode(0,($__line=4,$__art='{{=props.text}}',$__ctrl='<%=props.text%>',(props.text)))];$vnode_1.push($createVNode('span',{'style': 'padding:0 4px;transform:rotate('+($__line=4,$__art='{{=props.textRotate}}',$__ctrl='<%=props.textRotate%>',(props.textRotate))+'deg);color:'+($__line=4,$__art='{{=props.color}}',$__ctrl='<%=props.color%>',(props.color)),},$vnode_2),$createVNode('span',{'style': 'flex-grow:1;border-top:1px '+($__line=5,$__art='{{=props.linetype}}',$__ctrl='<%=props.linetype%>',(props.linetype))+' '+($__line=5,$__art='{{=props.color}}',$__ctrl='<%=props.color%>',(props.color)),}));;$$_style='left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg);'+($__line=1,$__art='{{if props.startBorder}}','');$__ctrl='<%if(props.startBorder){%>';if(props.startBorder){;$$_style+='border-left:1px '+($__line=1,$__art='{{=props.linetype}}',$__ctrl='<%=props.linetype%>',(props.linetype))+' '+($__line=1,$__art='{{=props.color}}',$__ctrl='<%=props.color%>',(props.color))+';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=1,$__art='{{if props.endBorder}}','');$__ctrl='<%if(props.endBorder){%>';if(props.endBorder){;$$_style+='border-right:1px '+($__line=1,$__art='{{=props.linetype}}',$__ctrl='<%=props.linetype%>',(props.linetype))+' '+($__line=1,$__art='{{=props.color}}',$__ctrl='<%=props.color%>',(props.color))+';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/rod/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});