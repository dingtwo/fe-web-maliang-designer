/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5n",["4e","./57"],(require,exports,module)=>{
let $quick_dW_0_static_node;
let $quick_dQ_static_text;
let $quick_dR_static_text;
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
	canLock,
	i18n,
	canUnlock,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_dW_0_static_node){
$vnode_0=[$quick_dW_0_static_node];
}else{
$vnode_0=[$quick_dW_0_static_node=$createVNode('i',{'_': 'cH','class': 'rd-ej rd-gZ',})];
}
$vnode_1=[$quick_dQ_static_text||($quick_dQ_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canLock){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('fi'))+'(Ctrl+L)','mx5-click': ((canLock))&&($viewId+'_g7()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dR_static_text||($quick_dR_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canUnlock){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('fj'))+'(Shift+L)','mx5-click': ((canUnlock))&&($viewId+'_g7({un:1})'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['_dF'].locked) {
                update();
            }
        };
        State.on('dJ', update);
        State.on('dH', update);
        State.on('dG', checkLocked);
        this.on('destroy', () => {
            State.off('dJ', update);
            State.off('dH', update);
            State.off('dG', checkLocked);
        });
    },
    render() {
        let state = stage_generic_1["d3"]();
        this.digest({
            canLock: state["_gO"],
            canUnlock: state["_gP"]
        });
    },
    '_g7<click>'(e) {
        let { un } = e.params;
        stage_generic_1["d4"](un);
    }
});

});