/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar-group",["magix5","./stage-generic"],(require,exports,module)=>{
let $quick_bN_0_static_node;
let $quick_bE_static_text;
let $quick_bF_static_text;
let $quick_bG_static_text;
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
	canGroup,
	i18n,
	canUngroup,
	linkEnable,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_bN_0_static_node){
$vnode_0=[$quick_bN_0_static_node];
}else{
$vnode_0=[$quick_bN_0_static_node=$createVNode('i',{'_': 'a^','class': 'rd-_assets_index_less_-fl rd-_designer_toolbar_less_-toolbar-spliter',})];
}
$vnode_1=[$quick_bE_static_text||($quick_bE_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=2,$__art='{{if !canGroup}}','');$__ctrl='<%if(!canGroup){%>';if(!canGroup){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#menu.group~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.group~rs}\')%>',(i18n('@:{lang#menu.group~rs}')))+'(Ctrl/Shift+G)','mx5-click': (($temp_var=($__line=2,$__art='{{=canGroup}}',$__ctrl='<%=canGroup%>',canGroup),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-group.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{group.elements~rs}()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_bF_static_text||($quick_bF_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=3,$__art='{{if !canUngroup}}','');$__ctrl='<%if(!canUngroup){%>';if(!canUngroup){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=3,$__art='{{=i18n(\'@:{lang#menu.ungroup~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.ungroup~rs}\')%>',(i18n('@:{lang#menu.ungroup~rs}')))+'(Shift/Ctrl+G)','mx5-click': (($temp_var=($__line=3,$__art='{{=canUngroup}}',$__ctrl='<%=canUngroup%>',canUngroup),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-group.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{group.elements~rs}({un:1})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_bG_static_text||($quick_bG_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=4,$__art='{{if linkEnable}}','');$__ctrl='<%if(linkEnable){%>';if(linkEnable){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-active'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=4,$__art='{{=i18n(linkEnable?\'@:{lang#menu.group.unlinked~rs}\':\'@:{lang#menu.group.linked}\')}}',$__ctrl='<%=i18n(linkEnable?\'@:{lang#menu.group.unlinked~rs}\':\'@:{lang#menu.group.linked~rs}\')%>',(i18n(linkEnable?'@:{lang#menu.group.unlinked~rs}':'@:{lang#menu.group.linked~rs}'))),'mx5-click': $viewId+'@:{toggle.enable~rs}()','class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar-group.html'; throw msg; }  } ,
    init() {
        let update = this.render.bind(this);
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.select.elements.change~rs}', update);
        State.on('@:{event#stage.elements.change~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.select.elements.change~rs}', update);
            State.off('@:{event#stage.elements.change~rs}', update);
        });
    },
    render() {
        let { '@:{can.group~rs}': canGroup, '@:{can.ungroup~rs}': canUngroup } = stage_generic_1["@:{generic#query.group.state~rs}"]();
        let linkEnable = State.get('@:{global#stage.elements.groups.linked~rs}');
        this.digest({
            linkEnable,
            canGroup,
            canUngroup
        });
    },
    '@:{group.elements~rs}<click>'(e) {
        let { un } = e.params;
        stage_generic_1["@:{generic#group.select.elements~rs}"](un);
    },
    '@:{toggle.enable~rs}<click>'() {
        let linkEnable = State.get('@:{global#stage.elements.groups.linked~rs}');
        State.set({
            '@:{global#stage.elements.groups.linked~rs}': !linkEnable
        });
        this.digest({
            linkEnable: !linkEnable
        });
    }
});

});