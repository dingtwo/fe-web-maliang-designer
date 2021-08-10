/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/repeat/dshow",["magix5","../../provider/ebind"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let ebind_1 = require("../../provider/ebind");
let { View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	enter,
	props,
	unit,
	uit,
	text,
	i18n,}=$dataFromView,
$$_class,
$$_style,
$vnode_2,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{if !props.image&&!props.webUrl}}";$__ctrl="if(!props.image&&!props.webUrl){";
if(!props.image&&!props.webUrl){
$vnode_2=[$createVNode(0,($__line=3,$__art='{{=text||i18n(\'@:{lang#elements.repeat.select.image~rs}\')}}',$__ctrl='<%=text||i18n(\'@:{lang#elements.repeat.select.image~rs}\')%>',(text||i18n('@:{lang#elements.repeat.select.image~rs}'))))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-tc','style': 'font-size:'+($__line=3,$__art='{{=props.tfs}}',$__ctrl='<%=props.tfs%>',(props.tfs))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=3,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';line-height:'+($__line=3,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=3,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_2));
};$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-overflow-hidden'+($__line=1,$__art='{{if enter}}','');$__ctrl='<%if(enter){%>';if(enter){;$$_class+=' rd-_assets_index_less_-hod-drop-tip'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style='left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg);'+($__line=1,$__art='{{if props.radius}}','');$__ctrl='<%if(props.radius){%>';if(props.radius){;$$_style+='border-radius:'+($__line=1,$__art='{{=props.radius}}',$__ctrl='<%=props.radius%>',(props.radius))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=1,$__art='{{if props.image||props.webUrl}}','');$__ctrl='<%if(props.image||props.webUrl){%>';if(props.image||props.webUrl){;$$_style+='background-image:url('+($__line=1,$__art='{{=props.image||props.webUrl}}',$__ctrl='<%=props.image||props.webUrl%>',(props.image||props.webUrl))+');'+($__line=1,$__art='{{if props.repeat==\'full\'}}','');$__ctrl='<%if(props.repeat==\'full\'){%>';if(props.repeat=='full'){;$$_style+='background-size:100% 100%;'+($__line=1,$__art='{{else if props.imageWidth>0 && props.imageHeight>0}}','');$__ctrl='<%}else if(props.imageWidth>0 && props.imageHeight>0){%>';}else if(props.imageWidth>0 && props.imageHeight>0){;$$_style+='background-size:'+($__line=1,$__art='{{=props.imageWidth}}',$__ctrl='<%=props.imageWidth%>',(props.imageWidth))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=1,$__art='{{=props.imageHeight}}',$__ctrl='<%=props.imageHeight%>',(props.imageHeight))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='background-repeat:'+($__line=1,$__art='{{=props.repeat==\'full\'?\'no-repeat\':props.repeat}}',$__ctrl='<%=props.repeat==\'full\'?\'no-repeat\':props.repeat%>',(props.repeat=='full'?'no-repeat':props.repeat))+';background-position:'+($__line=1,$__art='{{=props.backgroundXOffset}}',$__ctrl='<%=props.backgroundXOffset%>',(props.backgroundXOffset))+($__line=1,$__art='{{=uit}}',$__ctrl='<%=uit%>',(uit))+' '+($__line=1,$__art='{{=props.backgroundYOffset}}',$__ctrl='<%=props.backgroundYOffset%>',(props.backgroundYOffset))+($__line=1,$__art='{{=uit}}',$__ctrl='<%=uit%>',(uit))+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'mx5-dragenter': $viewId+'@:{when.data.field.enter~rs}()','mx5-dragleave': $viewId+'@:{when.data.field.leave~rs}()','mx5-drop': $viewId+'@:{when.data.field.drop~rs}()','class': $$_class,'style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/repeat/dshow.html'; throw msg; }  } ,
    init() {
        this['@:{has.contents~rs}'] = ['image'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[绑定:${bindField.name}]`;
        }
        this.set({
            text
        });
    },
    render() {
        this.digest();
    },
}).merge(ebind_1);

});