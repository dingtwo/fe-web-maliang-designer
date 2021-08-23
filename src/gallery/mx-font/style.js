/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-font/style",["magix5"],(require,exports,module)=>{
let $quick_l__static_text;
let $quick_la_static_text;
let $quick_lb_static_text;
let $quick_lc_static_text;
let $quick_ld_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	i18n,
	value,
	prefix,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_l__static_text||($quick_l__static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-fl rd-_assets_index_less_-group-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont'+($__line=2,$__art='{{if value[`${prefix}Bold`]}}','');$__ctrl='<%if(value[`${prefix}Bold`]){%>';if(value[`${prefix}Bold`]){;$$_class+=' rd-_assets_index_less_-active'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('li',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#mx-gallery.font.style.bold~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.font.style.bold~rs}\')%>',(i18n('@:{lang#mx-gallery.font.style.bold~rs}'))),'mx5-click': $viewId+'@:{set~rs}({key:\''+($__line=2,$__art='{{=`${prefix}Bold`}}',$__ctrl='<%=$encodeQuote(`${prefix}Bold`)%>',($encodeQuote(`${prefix}Bold`)))+'\'})','class': $$_class,},$vnode_2)];$vnode_2=[$quick_la_static_text||($quick_la_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-fl rd-_assets_index_less_-group-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont'+($__line=3,$__art='{{if value[`${prefix}Italic`]}}','');$__ctrl='<%if(value[`${prefix}Italic`]){%>';if(value[`${prefix}Italic`]){;$$_class+=' rd-_assets_index_less_-active'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('li',{'title': ($__line=3,$__art='{{=i18n(\'@:{lang#mx-gallery.font.style.italic~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.font.style.italic~rs}\')%>',(i18n('@:{lang#mx-gallery.font.style.italic~rs}'))),'mx5-click': $viewId+'@:{set~rs}({key:\''+($__line=3,$__art='{{=`${prefix}Italic`}}',$__ctrl='<%=$encodeQuote(`${prefix}Italic`)%>',($encodeQuote(`${prefix}Italic`)))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_lb_static_text||($quick_lb_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-fl rd-_assets_index_less_-group-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont'+($__line=4,$__art='{{if value[`${prefix}Underline`]}}','');$__ctrl='<%if(value[`${prefix}Underline`]){%>';if(value[`${prefix}Underline`]){;$$_class+=' rd-_assets_index_less_-active'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('li',{'title': ($__line=4,$__art='{{=i18n(\'@:{lang#mx-gallery.font.style.underline~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.font.style.underline~rs}\')%>',(i18n('@:{lang#mx-gallery.font.style.underline~rs}'))),'mx5-click': $viewId+'@:{set~rs}({key:\''+($__line=4,$__art='{{=`${prefix}Underline`}}',$__ctrl='<%=$encodeQuote(`${prefix}Underline`)%>',($encodeQuote(`${prefix}Underline`)))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_lc_static_text||($quick_lc_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-fl rd-_assets_index_less_-group-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont'+($__line=5,$__art='{{if value[`${prefix}Strike`]}}','');$__ctrl='<%if(value[`${prefix}Strike`]){%>';if(value[`${prefix}Strike`]){;$$_class+=' rd-_assets_index_less_-active'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('li',{'title': ($__line=5,$__art='{{=i18n(\'@:{lang#mx-gallery.font.style.strike~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.font.style.strike~rs}\')%>',(i18n('@:{lang#mx-gallery.font.style.strike~rs}'))),'mx5-click': $viewId+'@:{set~rs}({key:\''+($__line=5,$__art='{{=`${prefix}Strike`}}',$__ctrl='<%=$encodeQuote(`${prefix}Strike`)%>',($encodeQuote(`${prefix}Strike`)))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_ld_static_text||($quick_ld_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-fl rd-_assets_index_less_-group-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont'+($__line=6,$__art='{{if value[`${prefix}Overline`]}}','');$__ctrl='<%if(value[`${prefix}Overline`]){%>';if(value[`${prefix}Overline`]){;$$_class+=' rd-_assets_index_less_-active'+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('li',{'title': ($__line=6,$__art='{{=i18n(\'@:{lang#mx-gallery.font.style.overline~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#mx-gallery.font.style.overline~rs}\')%>',(i18n('@:{lang#mx-gallery.font.style.overline~rs}'))),'mx5-click': $viewId+'@:{set~rs}({key:\''+($__line=6,$__art='{{=`${prefix}Overline`}}',$__ctrl='<%=$encodeQuote(`${prefix}Overline`)%>',($encodeQuote(`${prefix}Overline`)))+'\'})','class': $$_class,},$vnode_2));;$$_class='rd-_assets_index_less_-tag-ul rd-_assets_index_less_-unselectable'+($__line=1,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_assets_index_less_-notallowed'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-font/style.html'; throw msg; }  } ,
    assign(data) {
        let prefix = data.prefix;
        if (!prefix) {
            prefix = 'style';
        }
        this.set(data);
        this.set({
            prefix
        });
    },
    render() {
        this.digest();
    },
    '@:{set~rs}<click>'(e) {
        let me = this;
        if (me.get('disabled')) {
            return;
        }
        let v = me.get('value');
        let { key } = e.params;
        let prefix = this.get('prefix');
        v[key] = !v[key];
        if (key == `${prefix}Underline` &&
            v[key]) {
            v[`${prefix}Strike`] = false;
            v[`${prefix}Overline`] = false;
        }
        if (key == `${prefix}Strike` &&
            v[key]) {
            v[`${prefix}Underline`] = false;
            v[`${prefix}Overline`] = false;
        }
        if (key == `${prefix}Overline` &&
            v[key]) {
            v[`${prefix}Strike`] = false;
            v[`${prefix}Underline`] = false;
        }
        me.digest({
            value: v
        });
        magix_1.dispatch(me.root, 'input');
    }
});

});