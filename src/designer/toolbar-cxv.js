/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/65",["51","./5t","./5q"],(require,exports,module)=>{
let $quick_gq_0_static_node;
let $quick_gf_static_text;
let $quick_gg_static_text;
let $quick_gh_static_text;
let $quick_gi_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let stage_clipboard_1 = require("./5t");
let stage_generic_1 = require("./5q");
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

if($quick_gq_0_static_node){
$vnode_0=[$quick_gq_0_static_node];
}else{
$vnode_0=[$quick_gq_0_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gT rd-jy',})];
}
$vnode_1=[$quick_gf_static_text||($quick_gf_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canDuplicate){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gI'))+'(Ctrl+D)','mx5-click': ((canDuplicate))&&($viewId+'_jB()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_gg_static_text||($quick_gg_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canCopy){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gC'))+'(Ctrl+C)','mx5-click': ((canCopy))&&($viewId+'_jA()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_gh_static_text||($quick_gh_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canCut){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gD'))+'(Ctrl+X)','mx5-click': ((canCut))&&($viewId+'_jC()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_gi_static_text||($quick_gi_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canPaste){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gJ'))+'(Ctrl+V)','mx5-click': ((canPaste))&&($viewId+'_jD()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_gn'](this.render, 30);
        let checkEnable = ({ '_ge': changedProps }) => {
            if (changedProps.locked ||
                changedProps['_jz']) {
                update();
            }
        };
        State.on('gi', update);
        State.on('gg', update);
        //State.on('@:{event#stage.page.and.elements.change}', update);
        State.on('gf', checkEnable);
        State.on('gA', update);
        // State.on('@:{event#stage.elements.change}', update);
        this.on('destroy', () => {
            State.off('gi', update);
            State.off('gg', update);
            //State.off('@:{event#stage.page.and.elements.change}', update);
            State.off('gf', checkEnable);
            State.off('gA', update);
            // State.off('@:{event#stage.elements.change}', update);
        });
    },
    render() {
        let copyList = stage_clipboard_1['_iE']();
        let canInfo = stage_generic_1['gz'](copyList);
        this.digest({
            canCopy: canInfo['_jl'] > 0,
            canCut: canInfo['_jk'] > 0,
            canPaste: canInfo['_jn'] > 0,
            canDuplicate: canInfo['_jl'] > 0 &&
                canInfo['_jm'] > 0
        });
    },
    '_jA<click>'() {
        stage_clipboard_1['_iH']();
    },
    '_jB<click>'() {
        let stages = stage_generic_1['gs']();
        stage_clipboard_1['_iK'](stages);
    },
    '_jC<click>'() {
        stage_clipboard_1['_iI']();
    },
    '_jD<click>'() {
        let stage = stage_generic_1['gJ']();
        stage_clipboard_1['_iL'](stage);
    }
});

});