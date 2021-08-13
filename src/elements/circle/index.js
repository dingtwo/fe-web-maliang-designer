/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/circle/index",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { min } = Math;
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	bw,}=$dataFromView,
$$_style;
;$$_style='border-radius:50%;left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=1,$__art='{{if bw}}','');$__ctrl='<%if(bw){%>';if(bw){;$$_style+='border:'+($__line=1,$__art='{{=bw}}',$__ctrl='<%=bw%>',(bw))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=1,$__art='{{=props.bordertype}}',$__ctrl='<%=props.bordertype%>',(props.bordertype))+' '+($__line=1,$__art='{{=props.bordercolor}}',$__ctrl='<%=props.bordercolor%>',(props.bordercolor))+';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=1,$__art='{{if props.fillcolor}}','');$__ctrl='<%if(props.fillcolor){%>';if(props.fillcolor){;$$_style+='background:'+($__line=1,$__art='{{=props.fillcolor}}',$__ctrl='<%=props.fillcolor%>',(props.fillcolor))+';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)';$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': $$_style,})]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/circle/index.html'; throw msg; }  } ,
    assign(data) {
        let { props } = data;
        let { borderwidth: bw, width, height } = props;
        let minSize = min(width, height);
        let half = minSize / 2;
        if (bw > half) {
            bw = half;
        }
        this.set(data);
        this.set({
            bw
        });
    },
    render() {
        this.digest();
    }
});

});