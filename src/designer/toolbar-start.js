/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6o",["5c","./65"],(require,exports,module)=>{
let $quick_mm_0_static_node;
let $quick_mh_static_text;
let $quick_mi_static_text;
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
	canCreate,
	i18n,
	canClear,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_mm_0_static_node){
$vnode_0=[$quick_mm_0_static_node];
}else{
$vnode_0=[$quick_mm_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mH rd-pm',})];
}
$vnode_1=[$quick_mh_static_text||($quick_mh_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canCreate){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('mA'))+'(N)','mx5-click': ((canCreate))&&($viewId+'_pw()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_mi_static_text||($quick_mi_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canClear){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('mz'))+'(C)','mx5-click': ((canClear))&&($viewId+'_pv()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('l7', update);
        State.on('l5', update);
        State.on('mb', update);
        State.on('mp', update);
        State.on('m_', update);
        State.on('l8', update);
        this.on('destroy', () => {
            State.off('l7', update);
            State.off('l5', update);
            State.off('mb', update);
            State.off('mp', update);
            State.off('m_', update);
            State.off('l8', update);
        });
    },
    render() {
        this.digest({
            canClear: stage_generic_1['l6'](),
            canCreate: stage_generic_1['l7']()
        });
    },
    '_pv<click>'() {
        State.fire('ml');
    },
    '_pw<click>'() {
        State.fire('ml', {
            'l2': 'l3'
        });
    }
});

});