/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar-del",["magix5","./stage-generic","./stage-selection"],(require,exports,module)=>{
let $quick_co_0_static_node;
let $quick_ca_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let stage_generic_1 = require("./stage-generic");
let stage_selection_1 = require("./stage-selection");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	canDel,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_co_0_static_node){
$vnode_0=[$quick_co_0_static_node];
}else{
$vnode_0=[$quick_co_0_static_node=$createVNode('i',{'_': 'bx','class': 'rd-_assets_index_less_-fl rd-_designer_toolbar_less_-toolbar-spliter',})];
}
$vnode_1=[$quick_ca_static_text||($quick_ca_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=2,$__art='{{if !canDel}}','');$__ctrl='<%if(!canDel){%>';if(!canDel){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-disabled'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=2,$__art='{{=i18n(\'@:{lang#menu.delete~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#menu.delete~rs}\')%>',(i18n('@:{lang#menu.delete~rs}')))+'(Delete,Backspace)','mx5-click': (($temp_var=($__line=2,$__art='{{=canDel}}',$__ctrl='<%=canDel%>',canDel),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:designer/toolbar-del.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{remove.elements~rs}()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar-del.html'; throw msg; }  } ,
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
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let selectElementsMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
        let enable = 0, disabeld;
        if (selectElements.length > 0) {
            disabeld = stage_generic_1['@:{generic#query.has.disabled~rs}'](selectElements);
            if (!disabeld) {
                enable = stage_generic_1['@:{generic#query.in.enable.hod~rs}'](selectElementsMap);
            }
        }
        this.digest({
            canDel: enable == 1,
        });
    },
    '@:{remove.elements~rs}<click>'() {
        stage_generic_1["@:{generic#delete.select.elements~rs}"]();
    }
});

});