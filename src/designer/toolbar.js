/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar",["magix5","../panels/index","./toolbar-do","./toolbar-start","./toolbar-cxv","./toolbar-avg","./toolbar-align","./toolbar-layer","./toolbar-group","./toolbar-locker","./toolbar-del","./toolbar-scale","./toolbar-panels"],(require,exports,module)=>{
require("./toolbar-do");
require("./toolbar-start");
require("./toolbar-cxv");
require("./toolbar-avg");
require("./toolbar-align");
require("./toolbar-layer");
require("./toolbar-group");
require("./toolbar-locker");
require("./toolbar-del");
require("./toolbar-scale");
require("./toolbar-panels");
let $quick_fo_2_static_node;
let $quick_fk_static_text;
let $quick_fo_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-fl rd-_assets_index_less_-flex rd-_assets_index_less_-hp100',};
let $quick_fo_1_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-fr rd-_assets_index_less_-hp100',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../panels/index");
let { State, View, applyStyle } = magix_1;
applyStyle("rd-_designer_toolbar_less_","\n.rd-_designer_toolbar_less_-toolbar-item {\nheight:22px;\nwidth:22px;\nmargin:0 2px;\ndisplay:inline-flex;\nborder-radius:2px;\n}\n.rd-_designer_toolbar_less_-toolbar-item:hover {\nbackground:#e6e6e6;\ncolor:#333;\n}\n.rd-_designer_toolbar_less_-toolbar-item-active,\n.rd-_designer_toolbar_less_-toolbar-item-active:hover {\nbackground:#c4c4c4;\n}\n.rd-_designer_toolbar_less_-toolbar-spliter,\n.rd-_designer_toolbar_less_-toolbar-compact-spliter {\nheight:16px;\nwidth:1px;\nbackground:#eee;\n}\n.rd-_designer_toolbar_less_-toolbar-spliter {\nmargin:3px 12px;\n}\n.rd-_designer_toolbar_less_-toolbar-compact-spliter {\nmargin:3px 6px;\n}\n.rd-_designer_toolbar_less_-toolbar-item-disabled {\ncolor:#aaa;\ncursor:not-allowed;\n}\n.rd-_designer_toolbar_less_-toolbar-item-disabled:hover {\ncolor:#aaa;\nbackground:transparent;\n}\n.rd-_designer_toolbar_less_-toolbar-text {\nfont-weight:400;\nwidth:40px;\ndisplay:inline-block;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	mini,
	allOpen,
	i18n,}=$dataFromView,
$vnode_1,
$$_class,
$vnode_2;
$vnode_1=[];$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-do',}));$__line=3;$__art="{{if !mini}}";$__ctrl="if(!mini){";
if(!mini){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-start',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-cxv',}));
}$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-avg',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-align',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-layer',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-group',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-locker',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-del',}));$vnode_0=[$createVNode('div',$quick_fo_0_static_attr,$vnode_1)];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-scale',})];
if($quick_fo_2_static_node){
$vnode_1.push($quick_fo_2_static_node);
}else{
$vnode_1.push($quick_fo_2_static_node=$createVNode('i',{'_': 'dM','class': 'rd-_assets_index_less_-fl rd-_designer_toolbar_less_-toolbar-compact-spliter',}));
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'designer/toolbar-panels',}));
if($quick_fo_2_static_node){
$vnode_1.push($quick_fo_2_static_node);
}else{
$vnode_1.push($quick_fo_2_static_node=$createVNode('i',{'_': 'dM','class': 'rd-_assets_index_less_-fl rd-_designer_toolbar_less_-toolbar-compact-spliter',}));
}
$vnode_2=[$quick_fk_static_text||($quick_fk_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=20,$__art='{{if allOpen}}','');$__ctrl='<%if(allOpen){%>';if(allOpen){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-active'+($__line=20,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'mx5-click': $viewId+'@:{close.all.panel~rs}()','title': ($__line=20,$__art='{{=i18n(allOpen?\'@:{lang#panel.close.all~rs}\':\'@:{lang#panel.open.all}\')}}',$__ctrl='<%=i18n(allOpen?\'@:{lang#panel.close.all~rs}\':\'@:{lang#panel.open.all~rs}\')%>',(i18n(allOpen?'@:{lang#panel.close.all~rs}':'@:{lang#panel.open.all~rs}'))),'class': $$_class,},$vnode_2));$vnode_0.push($createVNode('div',$quick_fo_1_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar.html'; throw msg; }  } ,
    init() {
        let update = this.render.bind(this);
        State.on('@:{event#panel.change~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#panel.change~rs}', update);
        });
        this.set({
            mini: State.get('@:{global#provider.of.use.mini~rs}'),
        });
    },
    render() {
        this.digest({
            allOpen: index_1["@:{is.all.opened~rs}"]()
        });
    },
    '@:{close.all.panel~rs}<click>'() {
        let allOpen = this.get('allOpen');
        if (allOpen) {
            index_1["@:{close.all.panels~rs}"]();
        }
        else {
            index_1["@:{open.all.panels~rs}"]();
        }
    }
});

});