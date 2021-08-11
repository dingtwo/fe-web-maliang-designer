/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar-locker",["magix5","./stage-generic"],(require,exports,module)=>{
let $quick_a3_0_static_node;
let $quick_aX_static_text;
let $quick_aY_static_text;
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
	canLock,
	i18n,
	canUnlock,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_a3_0_static_node){
$vnode_0=[$quick_a3_0_static_node];
}else{
$vnode_0=[$quick_a3_0_static_node=$createVNode('i',{'_': 'ar','class': 'rd-_assets_index_less_-fl rd-_designer_toolbar_less_-toolbar-spliter',})];
}
$vnode_1=[$quick_aX_static_text||($quick_aX_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=2,$__art='{{if !canLock}}','');$__ctrl='<%if(!canLock){%>';if(!canLock){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#menu.lock~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.lock~rs}\')%>',(i18n('@:{lang#menu.lock~rs}')))+'(Ctrl+L)','mx5-click': (($temp_var=($__line=2,$__art='{{canLock}}',$__ctrl='<%canLock%>',canLock),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-locker.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{lock.elements~rs}()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_aY_static_text||($quick_aY_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=3,$__art='{{if !canUnlock}}','');$__ctrl='<%if(!canUnlock){%>';if(!canUnlock){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=3,$__art='{{=i18n(\'@:{lang#menu.unlock~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.unlock~rs}\')%>',(i18n('@:{lang#menu.unlock~rs}')))+'(Shift+L)','mx5-click': (($temp_var=($__line=3,$__art='{{canUnlock}}',$__ctrl='<%canUnlock%>',canUnlock),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-locker.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{lock.elements~rs}({un:1})'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar-locker.html'; throw msg; }  } ,
    init() {
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['@:{props~rs}'].locked) {
                update();
            }
        };
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.select.elements.change~rs}', update);
        State.on('@:{event#stage.select.element.props.change~rs}', checkLocked);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.select.elements.change~rs}', update);
            State.off('@:{event#stage.select.element.props.change~rs}', checkLocked);
        });
    },
    render() {
        let state = stage_generic_1["@:{generic#query.lock.state~rs}"]();
        this.digest({
            canLock: state["@:{can.lock~rs}"],
            canUnlock: state["@:{can.unlock~rs}"]
        });
    },
    '@:{lock.elements~rs}<click>'(e) {
        let { un } = e.params;
        stage_generic_1["@:{generic#lock.select.elements~rs}"](un);
    }
});

});