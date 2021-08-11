/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar-do",["magix5","./history"],(require,exports,module)=>{
let $quick_aR_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let history_1 = require("./history");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	status,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;
$vnode_1=[$quick_aR_static_text||($quick_aR_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=1,$__art='{{if !status.canUndo}}','');$__ctrl='<%if(!status.canUndo){%>';if(!status.canUndo){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('i',{'title': ($__line=1,$__art='{{=i18n(\'@:{lang#undo~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#undo~rs}\')%>',(i18n('@:{lang#undo~rs}'))),'mx5-click': $viewId+'@:{do.exec~rs}({s:\'-\',b:'+($__line=1,$__art='{{=status.canUndo}}',$__ctrl='<%=status.canUndo%>',(status.canUndo))+'})','class': $$_class,},$vnode_1)];$vnode_1=[$quick_aR_static_text||($quick_aR_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-flipx'+($__line=2,$__art='{{if !status.canRedo}}','');$__ctrl='<%if(!status.canRedo){%>';if(!status.canRedo){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#redo~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#redo~rs}\')%>',(i18n('@:{lang#redo~rs}'))),'mx5-click': $viewId+'@:{do.exec~rs}({s:\'+\',b:'+($__line=2,$__art='{{=status.canRedo}}',$__ctrl='<%=status.canRedo%>',(status.canRedo))+'})','class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar-do.html'; throw msg; }  } ,
    init() {
        let update = this.render.bind(this);
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#history.status.change~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#history.status.change~rs}', update);
        });
    },
    render() {
        this.digest({
            status: history_1["@:{history#query.status~rs}"]()
        });
    },
    '@:{do.exec~rs}<click>'(e) {
        //if (e.eventTarget.classList.contains('@:toolbar.less:toolbar-item-disabled')) {
        //return;
        //}
        let { s, b } = e.params;
        if (b) {
            if (s == '-') {
                history_1["@:{history#undo~rs}"]();
            }
            else {
                history_1["@:{history#redo~rs}"]();
            }
        }
    }
});

});