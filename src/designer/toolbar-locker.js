/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6l",["5c","./65"],(require,exports,module)=>{
let $quick_mj_0_static_node;
let $quick_md_static_text;
let $quick_me_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let stage_generic_1 = require("./65");
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

if($quick_mj_0_static_node){
$vnode_0=[$quick_mj_0_static_node];
}else{
$vnode_0=[$quick_mj_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mH rd-pm',})];
}
$vnode_1=[$quick_md_static_text||($quick_md_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canLock){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('nG'))+'(Ctrl+L)','mx5-click': ((canLock))&&($viewId+'_pu()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_me_static_text||($quick_me_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canUnlock){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('nH'))+'(Shift+L)','mx5-click': ((canUnlock))&&($viewId+'_pu({un:1})'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['_l3'].locked) {
                update();
            }
        };
        State.on('l7', update);
        State.on('l5', update);
        State.on('l4', checkLocked);
        this.on('destroy', () => {
            State.off('l7', update);
            State.off('l5', update);
            State.off('l4', checkLocked);
        });
    },
    render() {
        let state = stage_generic_1["mq"]();
        this.digest({
            canLock: state["_pb"],
            canUnlock: state["_pc"]
        });
    },
    '_pu<click>'(e) {
        let { un } = e.params;
        stage_generic_1["mr"](un);
    }
});

});