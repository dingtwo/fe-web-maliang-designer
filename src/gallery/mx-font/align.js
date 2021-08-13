/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/72/align",["5c"],(require,exports,module)=>{
let $quick_mO_static_text;
let $quick_mP_static_text;
let $quick_mQ_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
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
$vnode_2=[$quick_mO_static_text||($quick_mO_static_text=$createVNode(0,''))];;$$_class='rd-mH rd-nG rd-mG rd-nk rd-l3';if(value[alignKey]=='left'){;$$_class+=' rd-nH';};$vnode_1=[$createVNode('li',{'title': (i18n('su')),'mx5-click': $viewId+'_qY({v:\'left\'})','class': $$_class,},$vnode_2)];$vnode_2=[$quick_mP_static_text||($quick_mP_static_text=$createVNode(0,''))];;$$_class='rd-mH rd-nG rd-mG rd-nk rd-l3';if(value[alignKey]=='center'){;$$_class+=' rd-nH';};$vnode_1.push($createVNode('li',{'title': (i18n('sv')),'mx5-click': $viewId+'_qY({v:\'center\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_mQ_static_text||($quick_mQ_static_text=$createVNode(0,''))];;$$_class='rd-mH rd-nG rd-mG rd-nk rd-l3';if(value[alignKey]=='right'){;$$_class+=' rd-nH';};$vnode_1.push($createVNode('li',{'title': (i18n('sw')),'mx5-click': $viewId+'_qY({v:\'right\'})','class': $$_class,},$vnode_2));;$$_class='rd-mn rd-mR';if(disabled){;$$_class+=' rd-nI';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_qY<click>'(e) {
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