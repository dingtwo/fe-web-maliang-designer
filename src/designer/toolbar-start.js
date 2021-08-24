/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/6d",["51","./5q"],(require,exports,module)=>{
let $quick_gy_0_static_node;
let $quick_gt_static_text;
let $quick_gu_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let stage_generic_1 = require("./5q");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	canCreate,
	i18n,
	canClear,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_gy_0_static_node){
$vnode_0=[$quick_gy_0_static_node];
}else{
$vnode_0=[$quick_gy_0_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gT rd-jy',})];
}
$vnode_1=[$quick_gt_static_text||($quick_gt_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canCreate){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gM'))+'(N)','mx5-click': ((canCreate))&&($viewId+'_jL()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_gu_static_text||($quick_gu_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canClear){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gL'))+'(C)','mx5-click': ((canClear))&&($viewId+'_jK()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('gi', update);
        State.on('gg', update);
        State.on('gn', update);
        State.on('gB', update);
        State.on('gl', update);
        State.on('gj', update);
        this.on('destroy', () => {
            State.off('gi', update);
            State.off('gg', update);
            State.off('gn', update);
            State.off('gB', update);
            State.off('gl', update);
            State.off('gj', update);
        });
    },
    render() {
        this.digest({
            canClear: stage_generic_1['gh'](),
            canCreate: stage_generic_1['gi']()
        });
    },
    '_jK<click>'() {
        State.fire('gx');
    },
    '_jL<click>'() {
        State.fire('gx', {
            'gd': 'ge'
        });
    }
});

});