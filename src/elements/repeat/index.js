/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/repeat/index",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { View, isArray } = magix_1;
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$$_style;
;$$_style='left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg);'+($__line=1,$__art='{{if props.radius}}','');$__ctrl='<%if(props.radius){%>';if(props.radius){;$$_style+='border-radius:'+($__line=1,$__art='{{=props.radius}}',$__ctrl='<%=props.radius%>',(props.radius))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=1,$__art='{{if props.image||props.webUrl}}','');$__ctrl='<%if(props.image||props.webUrl){%>';if(props.image||props.webUrl){;$$_style+='background-image:url('+($__line=1,$__art='{{=props.image||props.webUrl}}',$__ctrl='<%=props.image||props.webUrl%>',(props.image||props.webUrl))+');'+($__line=1,$__art='{{if props.repeat==\'full\'}}','');$__ctrl='<%if(props.repeat==\'full\'){%>';if(props.repeat=='full'){;$$_style+='background-size:100% 100%;'+($__line=1,$__art='{{else if props.imageWidth>0&&props.imageHeight>0}}','');$__ctrl='<%}else if(props.imageWidth>0&&props.imageHeight>0){%>';}else if(props.imageWidth>0&&props.imageHeight>0){;$$_style+='background-size:'+($__line=1,$__art='{{=props.imageWidth}}',$__ctrl='<%=props.imageWidth%>',(props.imageWidth))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=1,$__art='{{=props.imageHeight}}',$__ctrl='<%=props.imageHeight%>',(props.imageHeight))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='background-repeat:'+($__line=1,$__art='{{=props.repeat==\'full\'?\'no-repeat\':props.repeat}}',$__ctrl='<%=props.repeat==\'full\'?\'no-repeat\':props.repeat%>',(props.repeat=='full'?'no-repeat':props.repeat))+';background-position:'+($__line=1,$__art='{{=props.backgroundXOffset}}',$__ctrl='<%=props.backgroundXOffset%>',(props.backgroundXOffset))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=1,$__art='{{=props.backgroundYOffset}}',$__ctrl='<%=props.backgroundYOffset%>',(props.backgroundYOffset))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': $$_style,})]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/repeat/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            if (bind._tip) {
                text = bind._tip;
            }
            else if (bind._data) {
                let src = bind._data;
                if (isArray(src)) {
                    src = src[0];
                }
                props.image = src[bindField.id];
            }
            else {
                text = `[绑定:${bindField.name}]`;
            }
        }
        this.set({
            text
        });
    },
    render() {
        this.digest();
    }
});

});