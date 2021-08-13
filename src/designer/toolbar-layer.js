/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6k",["5c","./64","./65"],(require,exports,module)=>{
let $quick_mi_0_static_node;
let $quick_mb_static_text;
let $quick_mc_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let stage_elements_1 = require("./64");
let stage_generic_1 = require("./65");
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

if($quick_mi_0_static_node){
$vnode_0=[$quick_mi_0_static_node];
}else{
$vnode_0=[$quick_mi_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mH rd-pm',})];
}
$vnode_1=[$quick_mb_static_text||($quick_mb_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!toTop){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('ms'))+'(T)','mx5-click': ((toTop))&&($viewId+'_pt({to:3})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_mc_static_text||($quick_mc_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!toTop){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('mu'))+'(U)','mx5-click': ((toTop))&&($viewId+'_pt({to:5})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_mc_static_text||($quick_mc_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng rd-ms';if(!toBottom){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('mv'))+'(D)','mx5-click': ((toBottom))&&($viewId+'_pt({to:6})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_mb_static_text||($quick_mb_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng rd-ms';if(!toBottom){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('mt'))+'(B)','mx5-click': ((toBottom))&&($viewId+'_pt({to:4})'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_mb'](this.render, 30);
        let checkLocked = e => {
            if (e['_l3'].locked) {
                update();
            }
        };
        State.on('l7', update);
        State.on('mp', update);
        State.on('l5', update);
        State.on('l4', checkLocked);
        this.on('destroy', () => {
            State.off('l7', update);
            State.off('mp', update);
            State.off('l5', update);
            State.off('l4', checkLocked);
        });
    },
    render() {
        let selectedElements = State.get('l2');
        let toTop = false, toBottom = false, first = selectedElements[0];
        if (selectedElements.length == 1) {
            if (!first.props.locked) {
                let collection = stage_generic_1["mh"](first);
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
    '_pt<click>'(e) {
        let { to } = e.params;
        let element = this.get('current');
        stage_elements_1["ma"](to, element);
    }
});

});