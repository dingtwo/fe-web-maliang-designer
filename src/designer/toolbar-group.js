/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5l",["4e","./57"],(require,exports,module)=>{
let $quick_dU_0_static_node;
let $quick_dL_static_text;
let $quick_dM_static_text;
let $quick_dN_static_text;
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
	canGroup,
	i18n,
	canUngroup,
	linkEnable,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_dU_0_static_node){
$vnode_0=[$quick_dU_0_static_node];
}else{
$vnode_0=[$quick_dU_0_static_node=$createVNode('i',{'_': 'cH','class': 'rd-ej rd-gZ',})];
}
$vnode_1=[$quick_dL_static_text||($quick_dL_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canGroup){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('fe'))+'(Ctrl/Shift+G)','mx5-click': ((canGroup))&&($viewId+'_g4()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dM_static_text||($quick_dM_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canUngroup){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('ff'))+'(Shift/Ctrl+G)','mx5-click': ((canUngroup))&&($viewId+'_g4({un:1})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dN_static_text||($quick_dN_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(linkEnable){;$$_class+=' rd-gX';};$vnode_0.push($createVNode('i',{'title': (i18n(linkEnable?'fg':'fh')),'mx5-click': $viewId+'_g5()','class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('dJ', update);
        State.on('dH', update);
        State.on('d2', update);
        this.on('destroy', () => {
            State.off('dJ', update);
            State.off('dH', update);
            State.off('d2', update);
        });
    },
    render() {
        let { '_gH': canGroup, '_gG': canUngroup } = stage_generic_1["dZ"]();
        let linkEnable = State.get('dT');
        this.digest({
            linkEnable,
            canGroup,
            canUngroup
        });
    },
    '_g4<click>'(e) {
        let { un } = e.params;
        stage_generic_1["d5"](un);
    },
    '_g5<click>'() {
        let linkEnable = State.get('dT');
        State.set({
            'dT': !linkEnable
        });
        this.digest({
            linkEnable: !linkEnable
        });
    }
});

});