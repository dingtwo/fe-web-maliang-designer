/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5q",["4e","./57"],(require,exports,module)=>{
let $quick_dZ_0_static_node;
let $quick_dU_static_text;
let $quick_dV_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let stage_generic_1 = require("./57");
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

if($quick_dZ_0_static_node){
$vnode_0=[$quick_dZ_0_static_node];
}else{
$vnode_0=[$quick_dZ_0_static_node=$createVNode('i',{'_': 'cH','class': 'rd-ej rd-gZ',})];
}
$vnode_1=[$quick_dU_static_text||($quick_dU_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canCreate){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('ec'))+'(N)','mx5-click': ((canCreate))&&($viewId+'_g9()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dV_static_text||($quick_dV_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canClear){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('eb'))+'(C)','mx5-click': ((canClear))&&($viewId+'_g8()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('dJ', update);
        State.on('dH', update);
        State.on('dO', update);
        State.on('d2', update);
        State.on('dM', update);
        State.on('dK', update);
        this.on('destroy', () => {
            State.off('dJ', update);
            State.off('dH', update);
            State.off('dO', update);
            State.off('d2', update);
            State.off('dM', update);
            State.off('dK', update);
        });
    },
    render() {
        this.digest({
            canClear: stage_generic_1['dI'](),
            canCreate: stage_generic_1['dJ']()
        });
    },
    '_g8<click>'() {
        State.fire('dY');
    },
    '_g9<click>'() {
        State.fire('dY', {
            'dE': 'dF'
        });
    }
});

});