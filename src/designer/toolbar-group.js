/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6j",["5c","./65"],(require,exports,module)=>{
let $quick_mh_0_static_node;
let $quick_l9_static_text;
let $quick_m__static_text;
let $quick_ma_static_text;
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
	canGroup,
	i18n,
	canUngroup,
	linkEnable,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_mh_0_static_node){
$vnode_0=[$quick_mh_0_static_node];
}else{
$vnode_0=[$quick_mh_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mH rd-pm',})];
}
$vnode_1=[$quick_l9_static_text||($quick_l9_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canGroup){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('nC'))+'(Ctrl/Shift+G)','mx5-click': ((canGroup))&&($viewId+'_pr()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_m__static_text||($quick_m__static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canUngroup){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('nD'))+'(Shift/Ctrl+G)','mx5-click': ((canUngroup))&&($viewId+'_pr({un:1})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_ma_static_text||($quick_ma_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(linkEnable){;$$_class+=' rd-pk';};$vnode_0.push($createVNode('i',{'title': (i18n(linkEnable?'nE':'nF')),'mx5-click': $viewId+'_ps()','class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('l7', update);
        State.on('l5', update);
        State.on('mp', update);
        this.on('destroy', () => {
            State.off('l7', update);
            State.off('l5', update);
            State.off('mp', update);
        });
    },
    render() {
        let { '_o5': canGroup, '_o4': canUngroup } = stage_generic_1["mm"]();
        let linkEnable = State.get('mg');
        this.digest({
            linkEnable,
            canGroup,
            canUngroup
        });
    },
    '_pr<click>'(e) {
        let { un } = e.params;
        stage_generic_1["ms"](un);
    },
    '_ps<click>'() {
        let linkEnable = State.get('mg');
        State.set({
            'mg': !linkEnable
        });
        this.digest({
            linkEnable: !linkEnable
        });
    }
});

});