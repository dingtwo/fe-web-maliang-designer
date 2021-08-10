/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar-layer",["magix5","./stage-elements","./stage-generic"],(require,exports,module)=>{
let $quick_dR_0_static_node;
let $quick_dK_static_text;
let $quick_dL_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let stage_elements_1 = require("./stage-elements");
let stage_generic_1 = require("./stage-generic");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	toTop,
	i18n,
	toBottom,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_dR_0_static_node){
$vnode_0=[$quick_dR_0_static_node];
}else{
$vnode_0=[$quick_dR_0_static_node=$createVNode('i',{'_': 'cD','class': 'rd-_assets_index_less_-fl rd-_designer_toolbar_less_-toolbar-spliter',})];
}
$vnode_1=[$quick_dK_static_text||($quick_dK_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=2,$__art='{{if !toTop}}','');$__ctrl='<%if(!toTop){%>';if(!toTop){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#menu.to.top~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.to.top~rs}\')%>',(i18n('@:{lang#menu.to.top~rs}')))+'(T)','mx5-click': (($temp_var=($__line=2,$__art='{{=toTop}}',$__ctrl='<%=toTop%>',toTop),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-layer.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{move.element~rs}({to:3})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dL_static_text||($quick_dL_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=3,$__art='{{if !toTop}}','');$__ctrl='<%if(!toTop){%>';if(!toTop){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=3,$__art='{{=i18n(\'@:{lang#menu.move.up~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.move.up~rs}\')%>',(i18n('@:{lang#menu.move.up~rs}')))+'(U)','mx5-click': (($temp_var=($__line=3,$__art='{{=toTop}}',$__ctrl='<%=toTop%>',toTop),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-layer.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{move.element~rs}({to:5})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dL_static_text||($quick_dL_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-r180'+($__line=4,$__art='{{if !toBottom}}','');$__ctrl='<%if(!toBottom){%>';if(!toBottom){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=4,$__art='{{=i18n(\'@:{lang#menu.move.down~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.move.down~rs}\')%>',(i18n('@:{lang#menu.move.down~rs}')))+'(D)','mx5-click': (($temp_var=($__line=4,$__art='{{=toBottom}}',$__ctrl='<%=toBottom%>',toBottom),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-layer.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{move.element~rs}({to:6})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dK_static_text||($quick_dK_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-r180'+($__line=5,$__art='{{if !toBottom}}','');$__ctrl='<%if(!toBottom){%>';if(!toBottom){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=5,$__art='{{=i18n(\'@:{lang#menu.to.bottom~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.to.bottom~rs}\')%>',(i18n('@:{lang#menu.to.bottom~rs}')))+'(B)','mx5-click': (($temp_var=($__line=5,$__art='{{=toBottom}}',$__ctrl='<%=toBottom%>',toBottom),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-layer.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{move.element~rs}({to:4})'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar-layer.html'; throw msg; }  } ,
    init() {
        let update = this['@:{debounce~rs}'](this.render, 30);
        let checkLocked = e => {
            if (e['@:{props~rs}'].locked) {
                update();
            }
        };
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.elements.change~rs}', update);
        State.on('@:{event#stage.select.elements.change~rs}', update);
        State.on('@:{event#stage.select.element.props.change~rs}', checkLocked);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.elements.change~rs}', update);
            State.off('@:{event#stage.select.elements.change~rs}', update);
            State.off('@:{event#stage.select.element.props.change~rs}', checkLocked);
        });
    },
    render() {
        let selectedElements = State.get('@:{global#stage.select.elements~rs}');
        let toTop = false, toBottom = false, first = selectedElements[0];
        if (selectedElements.length == 1) {
            if (!first.props.locked) {
                let collection = stage_generic_1["@:{generic#find.element.owner.collection~rs}"](first);
                if (collection) {
                    let top = collection[collection.length - 1];
                    let bottom = collection[0];
                    toTop = first.id != top.id;
                    toBottom = first.id != bottom.id;
                }
            }
        }
        this.digest({
            current: first,
            toTop,
            toBottom
        });
    },
    '@:{move.element~rs}<click>'(e) {
        let { to } = e.params;
        let element = this.get('current');
        stage_elements_1["@:{elements#modify.element.z.index~rs}"](to, element);
    }
});

});