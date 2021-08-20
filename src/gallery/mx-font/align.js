/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-font/align",["magix5"],(require,exports,module)=>{
let $quick_dD_static_text;
let $quick_dE_static_text;
let $quick_dF_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	i18n,
	value,
	alignKey,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_dD_static_text||($quick_dD_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-fl rd-_assets_index_less_-group-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont'+($__line=2,$__art='{{if value[alignKey]==\'left\'}}','');$__ctrl='<%if(value[alignKey]==\'left\'){%>';if(value[alignKey]=='left'){;$$_class+=' rd-_assets_index_less_-active'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('li',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#mx-gallery.font.text.align.left~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.font.text.align.left~rs}\')%>',(i18n('@:{lang#mx-gallery.font.text.align.left~rs}'))),'mx5-click': $viewId+'@:{set~rs}({v:\'left\'})','class': $$_class,},$vnode_2)];$vnode_2=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-fl rd-_assets_index_less_-group-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont'+($__line=3,$__art='{{if value[alignKey]==\'center\'}}','');$__ctrl='<%if(value[alignKey]==\'center\'){%>';if(value[alignKey]=='center'){;$$_class+=' rd-_assets_index_less_-active'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('li',{'title': ($__line=3,$__art='{{=i18n(\'@:{lang#mx-gallery.font.text.align.center~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.font.text.align.center~rs}\')%>',(i18n('@:{lang#mx-gallery.font.text.align.center~rs}'))),'mx5-click': $viewId+'@:{set~rs}({v:\'center\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_dF_static_text||($quick_dF_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-fl rd-_assets_index_less_-group-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont'+($__line=4,$__art='{{if value[alignKey]==\'right\'}}','');$__ctrl='<%if(value[alignKey]==\'right\'){%>';if(value[alignKey]=='right'){;$$_class+=' rd-_assets_index_less_-active'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('li',{'title': ($__line=4,$__art='{{=i18n(\'@:{lang#mx-gallery.font.text.align.right~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.font.text.align.right~rs}\')%>',(i18n('@:{lang#mx-gallery.font.text.align.right~rs}'))),'mx5-click': $viewId+'@:{set~rs}({v:\'right\'})','class': $$_class,},$vnode_2));;$$_class='rd-_assets_index_less_-tag-ul rd-_assets_index_less_-unselectable'+($__line=1,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_assets_index_less_-notallowed'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-font/align.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{set~rs}<click>'(e) {
        let me = this;
        if (me.get('disabled')) {
            return;
        }
        let props = me.get('value');
        let { v } = e.params;
        let alignKey = me.get('alignKey');
        props[alignKey] = v;
        magix_1.dispatch(me.root, 'input');
    }
});

});