/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6g",["5c","./68","./65"],(require,exports,module)=>{
let $quick_me_0_static_node;
let $quick_l4_static_text;
let $quick_l5_static_text;
let $quick_l6_static_text;
let $quick_l7_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let stage_clipboard_1 = require("./68");
let stage_generic_1 = require("./65");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	canDuplicate,
	i18n,
	canCopy,
	canCut,
	canPaste,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_me_0_static_node){
$vnode_0=[$quick_me_0_static_node];
}else{
$vnode_0=[$quick_me_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mH rd-pm',})];
}
$vnode_1=[$quick_l4_static_text||($quick_l4_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canDuplicate){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('mw'))+'(Ctrl+D)','mx5-click': ((canDuplicate))&&($viewId+'_pm()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_l5_static_text||($quick_l5_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canCopy){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('mq'))+'(Ctrl+C)','mx5-click': ((canCopy))&&($viewId+'_pl()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_l6_static_text||($quick_l6_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canCut){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('mr'))+'(Ctrl+X)','mx5-click': ((canCut))&&($viewId+'_pn()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_l7_static_text||($quick_l7_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canPaste){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('mx'))+'(Ctrl+V)','mx5-click': ((canPaste))&&($viewId+'_po()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_mb'](this.render, 30);
        let checkEnable = ({ '_l3': changedProps }) => {
            if (changedProps.locked ||
                changedProps['_pk']) {
                update();
            }
        };
        State.on('l7', update);
        State.on('l5', update);
        //State.on('@:{event#stage.page.and.elements.change}', update);
        State.on('l4', checkEnable);
        State.on('mo', update);
        // State.on('@:{event#stage.elements.change}', update);
        this.on('destroy', () => {
            State.off('l7', update);
            State.off('l5', update);
            //State.off('@:{event#stage.page.and.elements.change}', update);
            State.off('l4', checkEnable);
            State.off('mo', update);
            // State.off('@:{event#stage.elements.change}', update);
        });
    },
    render() {
        let copyList = stage_clipboard_1['_op']();
        let canInfo = stage_generic_1['mn'](copyList);
        this.digest({
            canCopy: canInfo['_o7'] > 0,
            canCut: canInfo['_o6'] > 0,
            canPaste: canInfo['_o9'] > 0,
            canDuplicate: canInfo['_o7'] > 0 &&
                canInfo['_o8'] > 0
        });
    },
    '_pl<click>'() {
        stage_clipboard_1['_os']();
    },
    '_pm<click>'() {
        let stages = stage_generic_1['mg']();
        stage_clipboard_1['_ov'](stages);
    },
    '_pn<click>'() {
        stage_clipboard_1['_ot']();
    },
    '_po<click>'() {
        let stage = stage_generic_1['mx']();
        stage_clipboard_1['_ow'](stage);
    }
});

});