/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-format/index",["magix5","../../provider/format","../mx-dialog/index","./share"],(require,exports,module)=>{
let $quick_k5_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let format_1 = require("../../provider/format");
let index_1 = require("../mx-dialog/index");
require("./share");

let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	text,
	format,}=$dataFromView,
$$_class,
$text,
$vnode_2,
$vnode_1;
$vnode_1=[];$text=($__line=3,$__art='{{if text}}','');$__ctrl='<%if(text){%>';if(text){;$text+=' '+($__line=4,$__art='{{=text}}',$__ctrl='<%=text%>',(text))+' '+($__line=5,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$text+=' 点击选择显示格式 '+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2=[$createVNode(0,$text)];;$$_class='rd-_assets_index_less_-flex-fill-rest rd-_assets_index_less_-ellipsis'+($__line=2,$__art='{{if !text||disabled}}','');$__ctrl='<%if(!text||disabled){%>';if(!text||disabled){;$$_class+=' rd-_assets_index_less_-color-999'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));$__line=9;$__art="{{if format}}";$__ctrl="if(format){";
if(format){
$vnode_2=[$quick_k5_static_text||($quick_k5_static_text=$createVNode(0,''))];$vnode_1.push($createVNode('i',{'class': 'rd-_assets_index_less_-iconfont rd-_gallery_mx-format_share_less_-remove','mx5-click': (($temp_var=($__line=10,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-format/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{clear.format~rs}()'),'title': '清除格式',},$vnode_2));
};$$_class='rd-_gallery_mx-format_share_less_-format rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center'+($__line=1,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-format_share_less_-notallowed'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'mx5-click': (($temp_var=($__line=1,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-format/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{choose.format~rs}()'),'title': ($temp_var=($__line=1,$__art='{{=text}}',$__ctrl='<%=text%>',text))!=null&&$temp_var,'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-format/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            text: format_1["@:{translate~rs}"](this.get('format'))
        });
    },
    '@:{choose.format~rs}<click>'() {
        let me = this;
        me.mxDialog("gallery/mx-format/list", {
            width: 900,
            format: me.get('format'),
            done(format) {
                dispatch(me.root, 'change', {
                    format
                });
            }
        });
    },
    '@:{clear.format~rs}<click>'(e) {
        dispatch(this.root, 'change', {
            format: ''
        });
    }
}).merge(index_1);

});