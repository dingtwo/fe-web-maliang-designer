/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-richtext/dshow",["magix5","../../provider/ebind"],(require,exports,module)=>{
let $quick_la_0_static_attr={'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pointer-events-none',};

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
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];$__line=3;$__art="{{if text}}";$__ctrl="if(text){";
if(text){
$vnode_2.push($createVNode(0,($__line=4,$__art='{{=text}}',$__ctrl='<%=text%>',(text))));
}else{
$vnode_3=[$createVNode(0,($__line=6,$__art='{{=i18n(\'@:{lang#elements.data.bind.tip~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#elements.data.bind.tip~rs}\')%>',(i18n('@:{lang#elements.data.bind.tip~rs}'))))];$vnode_2.push($createVNode('span',{'style': 'font-size:'+($__line=6,$__art='{{=props.tfs}}',$__ctrl='<%=props.tfs%>',(props.tfs))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_3));
}$vnode_1=[$createVNode('div',$quick_la_0_static_attr,$vnode_2)];;$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1'+($__line=1,$__art='{{if enter}}','');$__ctrl='<%if(enter){%>';if(enter){;$$_class+=' rd-_assets_index_less_-hod-drop-tip'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'mx5-dragenter': $viewId+'@:{when.data.field.enter~rs}()','mx5-dragleave': $viewId+'@:{when.data.field.leave~rs}()','mx5-drop': $viewId+'@:{when.data.field.drop~rs}()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/data-richtext/dshow.html'; throw msg; }  } ,
    init() {
        this['@:{has.contents~rs}'] = ['text', '@:{show.text~rs}'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { text, bind } = props;
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