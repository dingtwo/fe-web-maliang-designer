/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/69",["51","./5p","./5q"],(require,exports,module)=>{
let $quick_gu_0_static_node;
let $quick_gn_static_text;
let $quick_go_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let stage_elements_1 = require("./5p");
let stage_generic_1 = require("./5q");
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

if($quick_gu_0_static_node){
$vnode_0=[$quick_gu_0_static_node];
}else{
$vnode_0=[$quick_gu_0_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gT rd-jy',})];
}
$vnode_1=[$quick_gn_static_text||($quick_gn_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!toTop){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gE'))+'(T)','mx5-click': ((toTop))&&($viewId+'_jI({to:3})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_go_static_text||($quick_go_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!toTop){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gG'))+'(U)','mx5-click': ((toTop))&&($viewId+'_jI({to:5})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_go_static_text||($quick_go_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs rd-gE';if(!toBottom){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gH'))+'(D)','mx5-click': ((toBottom))&&($viewId+'_jI({to:6})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_gn_static_text||($quick_gn_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs rd-gE';if(!toBottom){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gF'))+'(B)','mx5-click': ((toBottom))&&($viewId+'_jI({to:4})'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_gn'](this.render, 30);
        let checkLocked = e => {
            if (e['_ge'].locked) {
                update();
            }
        };
        State.on('gi', update);
        State.on('gB', update);
        State.on('gg', update);
        State.on('gf', checkLocked);
        this.on('destroy', () => {
            State.off('gi', update);
            State.off('gB', update);
            State.off('gg', update);
            State.off('gf', checkLocked);
        });
    },
    render() {
        let selectedElements = State.get('gd');
        let toTop = false, toBottom = false, first = selectedElements[0];
        if (selectedElements.length == 1) {
            if (!first.props.locked) {
                let collection = stage_generic_1["gt"](first);
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
    '_jI<click>'(e) {
        let { to } = e.params;
        let element = this.get('current');
        stage_elements_1["gm"](to, element);
    }
});

});