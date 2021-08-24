/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6n/align",["51"],(require,exports,module)=>{
let $quick_g0_static_text;
let $quick_g1_static_text;
let $quick_g2_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	i18n,
	value,
	alignKey,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_g0_static_text||($quick_g0_static_text=$createVNode(0,''))];;$$_class='rd-gT rd-hS rd-gS rd-hw rd-ge';if(value[alignKey]=='left'){;$$_class+=' rd-hT';};$vnode_1=[$createVNode('li',{'title': (i18n('mF')),'mx5-click': $viewId+'_lc({v:\'left\'})','class': $$_class,},$vnode_2)];$vnode_2=[$quick_g1_static_text||($quick_g1_static_text=$createVNode(0,''))];;$$_class='rd-gT rd-hS rd-gS rd-hw rd-ge';if(value[alignKey]=='center'){;$$_class+=' rd-hT';};$vnode_1.push($createVNode('li',{'title': (i18n('mG')),'mx5-click': $viewId+'_lc({v:\'center\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_g2_static_text||($quick_g2_static_text=$createVNode(0,''))];;$$_class='rd-gT rd-hS rd-gS rd-hw rd-ge';if(value[alignKey]=='right'){;$$_class+=' rd-hT';};$vnode_1.push($createVNode('li',{'title': (i18n('mH')),'mx5-click': $viewId+'_lc({v:\'right\'})','class': $$_class,},$vnode_2));;$$_class='rd-gz rd-g3';if(disabled){;$$_class+=' rd-hU';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_lc<click>'(e) {
        let me = this;
        if (me.get('disabled')) {
            return;
        }
        let props = me.get('value');
        let { v } = e.params;
        let alignKey = me.get('alignKey');
        props[alignKey] = v;
        magix_1.dispatch(me.root, 'input');
    }
});

});