/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/ls-image/index",["magix5"],(require,exports,module)=>{


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
$$_style;
;$$_style='left:'+($__line=2,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=2,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=2,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=2,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=2,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=2,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg);'+($__line=2,$__art='{{if props.rotateX||props.rotateY}}','');$__ctrl='<%if(props.rotateX||props.rotateY){%>';if(props.rotateX||props.rotateY){;$$_style+=';transform:'+($__line=2,$__art='{{if props.rotateX}}','');$__ctrl='<%if(props.rotateX){%>';if(props.rotateX){;$$_style+='rotateX(180deg)'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=2,$__art='{{if props.rotateY}}','');$__ctrl='<%if(props.rotateY){%>';if(props.rotateY){;$$_style+=' rotateY(180deg)'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('img',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-tag-img rd-_assets_index_less_-z-index-1','src': ($__line=3,$__art='{{=props.image}}',$__ctrl='<%=props.image%>',(props.image)),'style': $$_style,},1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/ls-image/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});