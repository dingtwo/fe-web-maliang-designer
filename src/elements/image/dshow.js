/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/image/dshow",["magix5","../../provider/ebind"],(require,exports,module)=>{


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
	text,
	i18n,}=$dataFromView,
$$_class,
$$_style,
$vnode_2,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{if props.image||props.webUrl}}";$__ctrl="if(props.image||props.webUrl){";
if(props.image||props.webUrl){
;$$_style=($__line=3,$__art='{{if props.rotateX||props.rotateY}}','');$__ctrl='<%if(props.rotateX||props.rotateY){%>';if(props.rotateX||props.rotateY){;$$_style+='transform:'+($__line=3,$__art='{{if props.rotateX}}','');$__ctrl='<%if(props.rotateX){%>';if(props.rotateX){;$$_style+='rotateX(180deg)'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=3,$__art='{{if props.rotateY}}','');$__ctrl='<%if(props.rotateY){%>';if(props.rotateY){;$$_style+=' rotateY(180deg)'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('img',{'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-tag-img rd-_assets_index_less_-wp100','src': ($__line=3,$__art='{{=props.image||props.webUrl}}',$__ctrl='<%=props.image||props.webUrl%>',(props.image||props.webUrl)),'style': $$_style,},1));
}else{
$vnode_2=[$createVNode(0,($__line=6,$__art='{{=text||i18n(\'@:{lang#elements.image.select.image~rs}\')}}',$__ctrl='<%=text||i18n(\'@:{lang#elements.image.select.image~rs}\')%>',(text||i18n('@:{lang#elements.image.select.image~rs}'))))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-tc','style': 'font-size:'+($__line=5,$__art='{{=props.tfs}}',$__ctrl='<%=props.tfs%>',(props.tfs))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=5,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';line-height:'+($__line=5,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=5,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_2));
};$$_class='rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-pa'+($__line=1,$__art='{{if enter}}','');$__ctrl='<%if(enter){%>';if(enter){;$$_class+=' rd-_assets_index_less_-hod-drop-tip'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)','mx5-dragenter': $viewId+'@:{when.data.field.enter~rs}()','mx5-dragleave': $viewId+'@:{when.data.field.leave~rs}()','mx5-drop': $viewId+'@:{when.data.field.drop~rs}()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/image/dshow.html'; throw msg; }  } ,
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