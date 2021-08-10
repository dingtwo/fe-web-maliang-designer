/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5m",["4e","./56","./57"],(require,exports,module)=>{
let $quick_dV_0_static_node;
let $quick_dO_static_text;
let $quick_dP_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let stage_elements_1 = require("./56");
let stage_generic_1 = require("./57");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	toTop,
	i18n,
	toBottom,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_dV_0_static_node){
$vnode_0=[$quick_dV_0_static_node];
}else{
$vnode_0=[$quick_dV_0_static_node=$createVNode('i',{'_': 'cH','class': 'rd-ej rd-gZ',})];
}
$vnode_1=[$quick_dO_static_text||($quick_dO_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!toTop){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('d5'))+'(T)','mx5-click': ((toTop))&&($viewId+'_g6({to:3})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dP_static_text||($quick_dP_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!toTop){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('d7'))+'(U)','mx5-click': ((toTop))&&($viewId+'_g6({to:5})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dP_static_text||($quick_dP_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT rd-d5';if(!toBottom){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('d8'))+'(D)','mx5-click': ((toBottom))&&($viewId+'_g6({to:6})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_dO_static_text||($quick_dO_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT rd-d5';if(!toBottom){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('d6'))+'(B)','mx5-click': ((toBottom))&&($viewId+'_g6({to:4})'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_dO'](this.render, 30);
        let checkLocked = e => {
            if (e['_dF'].locked) {
                update();
            }
        };
        State.on('dJ', update);
        State.on('d2', update);
        State.on('dH', update);
        State.on('dG', checkLocked);
        this.on('destroy', () => {
            State.off('dJ', update);
            State.off('d2', update);
            State.off('dH', update);
            State.off('dG', checkLocked);
        });
    },
    render() {
        let selectedElements = State.get('dE');
        let toTop = false, toBottom = false, first = selectedElements[0];
        if (selectedElements.length == 1) {
            if (!first.props.locked) {
                let collection = stage_generic_1["dU"](first);
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
    '_g6<click>'(e) {
        let { to } = e.params;
        let element = this.get('current');
        stage_elements_1["dN"](to, element);
    }
});

});