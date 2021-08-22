/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar-start",["magix5","./stage-generic"],(require,exports,module)=>{
let $quick_bS_0_static_node;
let $quick_bN_static_text;
let $quick_bO_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let stage_generic_1 = require("./stage-generic");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	canCreate,
	i18n,
	canClear,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_bS_0_static_node){
$vnode_0=[$quick_bS_0_static_node];
}else{
$vnode_0=[$quick_bS_0_static_node=$createVNode('i',{'_': 'a^','class': 'rd-_assets_index_less_-fl rd-_designer_toolbar_less_-toolbar-spliter',})];
}
$vnode_1=[$quick_bN_static_text||($quick_bN_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=2,$__art='{{if !canCreate}}','');$__ctrl='<%if(!canCreate){%>';if(!canCreate){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#menu.new~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.new~rs}\')%>',(i18n('@:{lang#menu.new~rs}')))+'(N)','mx5-click': (($temp_var=($__line=2,$__art='{{=canCreate}}',$__ctrl='<%=canCreate%>',canCreate),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-start.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{new.page~rs}()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_bO_static_text||($quick_bO_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=3,$__art='{{if !canClear}}','');$__ctrl='<%if(!canClear){%>';if(!canClear){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=3,$__art='{{=i18n(\'@:{lang#menu.clear~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.clear~rs}\')%>',(i18n('@:{lang#menu.clear~rs}')))+'(C)','mx5-click': (($temp_var=($__line=3,$__art='{{=canClear}}',$__ctrl='<%=canClear%>',canClear),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-start.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{clear.elements~rs}()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar-start.html'; throw msg; }  } ,
    init() {
        let update = this.render.bind(this);
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.select.elements.change~rs}', update);
        State.on('@:{event#stage.axis.help.lines.change~rs}', update);
        State.on('@:{event#stage.elements.change~rs}', update);
        State.on('@:{event#stage.page.and.elements.change~rs}', update);
        State.on('@:{event#stage.page.change~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.select.elements.change~rs}', update);
            State.off('@:{event#stage.axis.help.lines.change~rs}', update);
            State.off('@:{event#stage.elements.change~rs}', update);
            State.off('@:{event#stage.page.and.elements.change~rs}', update);
            State.off('@:{event#stage.page.change~rs}', update);
        });
    },
    render() {
        this.digest({
            canClear: stage_generic_1['@:{generic#query.can.clear.stage~rs}'](),
            canCreate: stage_generic_1['@:{generic#query.can.create.new.page~rs}']()
        });
    },
    '@:{clear.elements~rs}<click>'() {
        State.fire('@:{event#stage.clear.elements~rs}');
    },
    '@:{new.page~rs}<click>'() {
        State.fire('@:{event#stage.clear.elements~rs}', {
            '@:{clear.events#action~rs}': '@:{clear.events#new~rs}'
        });
    }
});

});