/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/68",["51","./5q"],(require,exports,module)=>{
let $quick_gt_0_static_node;
let $quick_gk_static_text;
let $quick_gl_static_text;
let $quick_gm_static_text;
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
	canGroup,
	i18n,
	canUngroup,
	linkEnable,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_gt_0_static_node){
$vnode_0=[$quick_gt_0_static_node];
}else{
$vnode_0=[$quick_gt_0_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gT rd-jy',})];
}
$vnode_1=[$quick_gk_static_text||($quick_gk_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canGroup){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('hO'))+'(Ctrl/Shift+G)','mx5-click': ((canGroup))&&($viewId+'_jG()'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_gl_static_text||($quick_gl_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canUngroup){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('hP'))+'(Shift/Ctrl+G)','mx5-click': ((canUngroup))&&($viewId+'_jG({un:1})'),'class': $$_class,},$vnode_1));$vnode_1=[$quick_gm_static_text||($quick_gm_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(linkEnable){;$$_class+=' rd-jw';};$vnode_0.push($createVNode('i',{'title': (i18n(linkEnable?'hQ':'hR')),'mx5-click': $viewId+'_jH()','class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('gi', update);
        State.on('gg', update);
        State.on('gB', update);
        this.on('destroy', () => {
            State.off('gi', update);
            State.off('gg', update);
            State.off('gB', update);
        });
    },
    render() {
        let { '_jj': canGroup, '_ji': canUngroup } = stage_generic_1["gy"]();
        let linkEnable = State.get('gs');
        this.digest({
            linkEnable,
            canGroup,
            canUngroup
        });
    },
    '_jG<click>'(e) {
        let { un } = e.params;
        stage_generic_1["gE"](un);
    },
    '_jH<click>'() {
        let linkEnable = State.get('gs');
        State.set({
            'gs': !linkEnable
        });
        this.digest({
            linkEnable: !linkEnable
        });
    }
});

});