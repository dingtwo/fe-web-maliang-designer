/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5i",["4e","./5a","./57"],(require,exports,module)=>{
let $quick_dR_0_static_node;
let $quick_dG_static_text;
let $quick_dH_static_text;
let $quick_dI_static_text;
let $quick_dJ_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let stage_clipboard_1 = require("./5a");
let stage_generic_1 = require("./57");
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

if($quick_dR_0_static_node){
$vnode_0=[$quick_dR_0_static_node];
}else{
$vnode_0=[$quick_dR_0_static_node=$createVNode('i',{'_': 'cH','class': 'rd-ej rd-gZ',})];
}
$vnode_1=[$quick_dG_static_text||($quick_dG_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canDuplicate){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('d9'))+'(Ctrl+D)','mx5-click': ((canDuplicate))&&($viewId+'_gZ()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dH_static_text||($quick_dH_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canCopy){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('d3'))+'(Ctrl+C)','mx5-click': ((canCopy))&&($viewId+'_gY()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dI_static_text||($quick_dI_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canCut){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('d4'))+'(Ctrl+X)','mx5-click': ((canCut))&&($viewId+'_g0()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dJ_static_text||($quick_dJ_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canPaste){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('e_'))+'(Ctrl+V)','mx5-click': ((canPaste))&&($viewId+'_g1()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_dO'](this.render, 30);
        let checkEnable = ({ '_dF': changedProps }) => {
            if (changedProps.locked ||
                changedProps['_gX']) {
                update();
            }
        };
        State.on('dJ', update);
        State.on('dH', update);
        //State.on('@:{event#stage.page.and.elements.change}', update);
        State.on('dG', checkEnable);
        State.on('d1', update);
        // State.on('@:{event#stage.elements.change}', update);
        this.on('destroy', () => {
            State.off('dJ', update);
            State.off('dH', update);
            //State.off('@:{event#stage.page.and.elements.change}', update);
            State.off('dG', checkEnable);
            State.off('d1', update);
            // State.off('@:{event#stage.elements.change}', update);
        });
    },
    render() {
        let copyList = stage_clipboard_1['_f2']();
        let canInfo = stage_generic_1['d0'](copyList);
        this.digest({
            canCopy: canInfo['_gJ'] > 0,
            canCut: canInfo['_gI'] > 0,
            canPaste: canInfo['_gL'] > 0,
            canDuplicate: canInfo['_gJ'] > 0 &&
                canInfo['_gK'] > 0
        });
    },
    '_gY<click>'() {
        stage_clipboard_1['_f5']();
    },
    '_gZ<click>'() {
        let stages = stage_generic_1['dT']();
        stage_clipboard_1['_f8'](stages);
    },
    '_g0<click>'() {
        stage_clipboard_1['_f6']();
    },
    '_g1<click>'() {
        let stage = stage_generic_1['e_']();
        stage_clipboard_1['_f9'](stage);
    }
});

});