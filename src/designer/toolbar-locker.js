/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/6a",["51","./5q"],(require,exports,module)=>{
let $quick_gv_0_static_node;
let $quick_gp_static_text;
let $quick_gq_static_text;
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
	canLock,
	i18n,
	canUnlock,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_gv_0_static_node){
$vnode_0=[$quick_gv_0_static_node];
}else{
$vnode_0=[$quick_gv_0_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gT rd-jy',})];
}
$vnode_1=[$quick_gp_static_text||($quick_gp_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canLock){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('hS'))+'(Ctrl+L)','mx5-click': ((canLock))&&($viewId+'_jJ()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_gq_static_text||($quick_gq_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canUnlock){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('hT'))+'(Shift+L)','mx5-click': ((canUnlock))&&($viewId+'_jJ({un:1})'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['_ge'].locked) {
                update();
            }
        };
        State.on('gi', update);
        State.on('gg', update);
        State.on('gf', checkLocked);
        this.on('destroy', () => {
            State.off('gi', update);
            State.off('gg', update);
            State.off('gf', checkLocked);
        });
    },
    render() {
        let state = stage_generic_1["gC"]();
        this.digest({
            canLock: state["_jq"],
            canUnlock: state["_jr"]
        });
    },
    '_jJ<click>'(e) {
        let { un } = e.params;
        stage_generic_1["gD"](un);
    }
});

});