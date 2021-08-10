/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-align/index",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let actions = [{
        '@:{g.align#icon~rs}': '&#xe687;',
        '@:{g.align#title~rs}': '@:{lang#mx-gallery.font.align.left~rs}',
        '@:{g.align#type~rs}': 'hpos',
        '@:{g.align#value~rs}': 'flex-start'
    }, {
        '@:{g.align#icon~rs}': '&#xe68a;',
        '@:{g.align#title~rs}': '@:{lang#mx-gallery.font.align.center~rs}',
        '@:{g.align#type~rs}': 'hpos',
        '@:{g.align#value~rs}': 'center'
    }, {
        '@:{g.align#icon~rs}': '&#xe686;',
        '@:{g.align#title~rs}': '@:{lang#mx-gallery.font.align.right~rs}',
        '@:{g.align#type~rs}': 'hpos',
        '@:{g.align#value~rs}': 'flex-end'
    }, {
        '@:{g.align#icon~rs}': '&#xe687;',
        '@:{g.align#title~rs}': '@:{lang#mx-gallery.font.align.top~rs}',
        '@:{g.align#type~rs}': 'vpos',
        '@:{g.align#value~rs}': 'flex-start',
        '@:{g.align#r90~rs}': 1
    }, {
        '@:{g.align#icon~rs}': '&#xe68a;',
        '@:{g.align#title~rs}': '@:{lang#mx-gallery.font.align.middle~rs}',
        '@:{g.align#type~rs}': 'vpos',
        '@:{g.align#value~rs}': 'center',
        '@:{g.align#r90~rs}': 1
    }, {
        '@:{g.align#icon~rs}': '&#xe686;',
        '@:{g.align#title~rs}': '@:{lang#mx-gallery.font.align.bottom~rs}',
        '@:{g.align#type~rs}': 'vpos',
        '@:{g.align#value~rs}': 'flex-end',
        '@:{g.align#r90~rs}': 1
    }];
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	actions,
	i18n,
	value,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{each actions as a}}";$__ctrl="for(let $q_c_hkprpeijk=actions.length,$q_key_esmeksxk=0;$q_key_esmeksxk<$q_c_hkprpeijk;$q_key_esmeksxk++){let a=actions[$q_key_esmeksxk];";
for(let $q_c_hkprpeijk=actions.length,$q_key_esmeksxk=0;$q_key_esmeksxk<$q_c_hkprpeijk;$q_key_esmeksxk+=1){
let a=actions[$q_key_esmeksxk];
$vnode_2=[$createVNode(0,($__line=3,$__art='{{=a[\'@:{g.align#icon~rs}\']}}',$__ctrl='<%=a[\'@:{g.align#icon~rs}\']%>',(a['@:{g.align#icon~rs}'])),1)];;$$_class='rd-_assets_index_less_-fl rd-_assets_index_less_-group-item rd-_assets_index_less_-tc rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont'+($__line=3,$__art='{{if a[\'@:{g.align#r90~rs}\']}}','');$__ctrl='<%if(a[\'@:{g.align#r90~rs}\']){%>';if(a['@:{g.align#r90~rs}']){;$$_class+=' rd-_assets_index_less_-r90'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=3,$__art='{{if value[a[\'@:{g.align#type~rs}\']]==a[\'@:{g.align#value}\']}}','');$__ctrl='<%if(value[a[\'@:{g.align#type~rs}\']]==a[\'@:{g.align#value~rs}\']){%>';if(value[a['@:{g.align#type~rs}']]==a['@:{g.align#value~rs}']){;$$_class+=' rd-_assets_index_less_-active'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('li',{'title': ($__line=3,$__art='{{=i18n(a[\'@:{g.align#title~rs}\'])}}',$__ctrl='<%=i18n(a[\'@:{g.align#title~rs}\'])%>',(i18n(a['@:{g.align#title~rs}']))),'mx5-click': $viewId+'@:{set~rs}({type:\''+($__line=3,$__art='{{=a[\'@:{g.align#type~rs}\']}}',$__ctrl='<%=$encodeQuote(a[\'@:{g.align#type~rs}\'])%>',($encodeQuote(a['@:{g.align#type~rs}'])))+'\',v:\''+($__line=3,$__art='{{=a[\'@:{g.align#value~rs}\']}}',$__ctrl='<%=$encodeQuote(a[\'@:{g.align#value~rs}\'])%>',($encodeQuote(a['@:{g.align#value~rs}'])))+'\'})','class': $$_class,},$vnode_2));
};$$_class='rd-_assets_index_less_-tag-ul rd-_assets_index_less_-unselectable'+($__line=1,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_assets_index_less_-notallowed'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-align/index.html'; throw msg; }  } ,
    init() {
        this.set({
            actions
        });
    },
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
        let { type, v } = e.params;
        props[type] = v;
        magix_1.dispatch(me.root, 'input');
    }
});

});