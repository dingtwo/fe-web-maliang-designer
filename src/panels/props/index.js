/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/props/index",["magix5","./element","./page"],(require,exports,module)=>{
require("./element");
require("./page");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { State, View, applyStyle } = magix_1;
applyStyle("rd-_panels_props_index_less_","\n.rd-_panels_props_index_less_-props {\nmin-width:200px;\n}\n.rd-_panels_props_index_less_-props-item {\nline-height:24px;\npadding:2px 0;\n}\n.rd-_panels_props_index_less_-props-padding-bottom {\npadding-bottom:200px;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	single,}=$dataFromView,
$$_class;
;$$_class=($__line=1,$__art='{{if !single}}','');$__ctrl='<%if(!single){%>';if(!single){;$$_class+='rd-_assets_index_less_-none'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'panels/props/element','class': $$_class,})];;$$_class=($__line=2,$__art='{{if single}}','');$__ctrl='<%if(single){%>';if(single){;$$_class+='rd-_assets_index_less_-none'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': 'panels/props/page','class': $$_class,})); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/props/index.html'; throw msg; }  } ,
    init() {
        let update = this['@:{debounce~rs}'](this.render, 30);
        State.on('@:{event#stage.select.elements.change~rs}', update);
        State.on('@:{event#history.shift.change~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#stage.select.elements.change~rs}', update);
            State.off('@:{event#history.shift.change~rs}', update);
        });
    },
    render() {
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let single = selectElements.length == 1;
        this.digest({
            single
        });
    }
});

});