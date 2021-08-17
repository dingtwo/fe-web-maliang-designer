/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar-cxv",["magix5","./stage-clipboard","./stage-generic"],(require,exports,module)=>{
let $quick_bI_0_static_node;
let $quick_bx_static_text;
let $quick_by_static_text;
let $quick_bz_static_text;
let $quick_bA_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let stage_clipboard_1 = require("./stage-clipboard");
let stage_generic_1 = require("./stage-generic");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	canDuplicate,
	i18n,
	canCopy,
	canCut,
	canPaste,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_bI_0_static_node){
$vnode_0=[$quick_bI_0_static_node];
}else{
$vnode_0=[$quick_bI_0_static_node=$createVNode('i',{'_': 'a@','class': 'rd-_assets_index_less_-fl rd-_designer_toolbar_less_-toolbar-spliter',})];
}
$vnode_1=[$quick_bx_static_text||($quick_bx_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=2,$__art='{{if !canDuplicate}}','');$__ctrl='<%if(!canDuplicate){%>';if(!canDuplicate){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#menu.duplicate~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.duplicate~rs}\')%>',(i18n('@:{lang#menu.duplicate~rs}')))+'(Ctrl+D)','mx5-click': (($temp_var=($__line=2,$__art='{{=canDuplicate}}',$__ctrl='<%=canDuplicate%>',canDuplicate),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-cxv.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{duplicate~rs}()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_by_static_text||($quick_by_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=3,$__art='{{if !canCopy}}','');$__ctrl='<%if(!canCopy){%>';if(!canCopy){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=3,$__art='{{=i18n(\'@:{lang#menu.copy~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.copy~rs}\')%>',(i18n('@:{lang#menu.copy~rs}')))+'(Ctrl+C)','mx5-click': (($temp_var=($__line=3,$__art='{{=canCopy}}',$__ctrl='<%=canCopy%>',canCopy),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-cxv.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{copy~rs}()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_bz_static_text||($quick_bz_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=4,$__art='{{if !canCut}}','');$__ctrl='<%if(!canCut){%>';if(!canCut){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=4,$__art='{{=i18n(\'@:{lang#menu.cut~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.cut~rs}\')%>',(i18n('@:{lang#menu.cut~rs}')))+'(Ctrl+X)','mx5-click': (($temp_var=($__line=4,$__art='{{=canCut}}',$__ctrl='<%=canCut%>',canCut),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-cxv.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{cut~rs}()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_bA_static_text||($quick_bA_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=5,$__art='{{if !canPaste}}','');$__ctrl='<%if(!canPaste){%>';if(!canPaste){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=5,$__art='{{=i18n(\'@:{lang#menu.paste~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.paste~rs}\')%>',(i18n('@:{lang#menu.paste~rs}')))+'(Ctrl+V)','mx5-click': (($temp_var=($__line=5,$__art='{{=canPaste}}',$__ctrl='<%=canPaste%>',canPaste),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-cxv.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{paste~rs}()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar-cxv.html'; throw msg; }  } ,
    init() {
        let update = this['@:{debounce~rs}'](this.render, 30);
        let checkEnable = ({ '@:{props~rs}': changedProps }) => {
            if (changedProps.locked ||
                changedProps['@:{focus.cell~rs}']) {
                update();
            }
        };
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.select.elements.change~rs}', update);
        //State.on('@:{event#stage.page.and.elements.change}', update);
        State.on('@:{event#stage.select.element.props.change~rs}', checkEnable);
        State.on('@:{event#stage.clipboard.change~rs}', update);
        // State.on('@:{event#stage.elements.change}', update);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.select.elements.change~rs}', update);
            //State.off('@:{event#stage.page.and.elements.change}', update);
            State.off('@:{event#stage.select.element.props.change~rs}', checkEnable);
            State.off('@:{event#stage.clipboard.change~rs}', update);
            // State.off('@:{event#stage.elements.change}', update);
        });
    },
    render() {
        let copyList = stage_clipboard_1['@:{get.copy.list~rs}']();
        let canInfo = stage_generic_1['@:{generic#query.can.cxv~rs}'](copyList);
        this.digest({
            canCopy: canInfo['@:{can.copy~rs}'] > 0,
            canCut: canInfo['@:{can.cut~rs}'] > 0,
            canPaste: canInfo['@:{can.paste~rs}'] > 0,
            canDuplicate: canInfo['@:{can.copy~rs}'] > 0 &&
                canInfo['@:{can.duplicate~rs}'] > 0
        });
    },
    '@:{copy~rs}<click>'() {
        stage_clipboard_1['@:{copy.elements~rs}']();
    },
    '@:{duplicate~rs}<click>'() {
        let stages = stage_generic_1['@:{generic#query.select.elements.stage~rs}']();
        stage_clipboard_1['@:{duplicate.elements~rs}'](stages);
    },
    '@:{cut~rs}<click>'() {
        stage_clipboard_1['@:{cut.elements~rs}']();
    },
    '@:{paste~rs}<click>'() {
        let stage = stage_generic_1['@:{generic#query.nearest.stage~rs}']();
        stage_clipboard_1['@:{paste.elements~rs}'](stage);
    }
});

});