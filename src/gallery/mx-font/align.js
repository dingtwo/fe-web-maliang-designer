/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/64/align",["4e"],(require,exports,module)=>{
let $quick_eq_static_text;
let $quick_er_static_text;
let $quick_es_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
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
$vnode_2=[$quick_eq_static_text||($quick_eq_static_text=$createVNode(0,''))];;$$_class='rd-ej rd-fi rd-ei rd-eX rd-dF';if(value[alignKey]=='left'){;$$_class+=' rd-fj';};$vnode_1=[$createVNode('li',{'title': (i18n('j7')),'mx5-click': $viewId+'_iA({v:\'left\'})','class': $$_class,},$vnode_2)];$vnode_2=[$quick_er_static_text||($quick_er_static_text=$createVNode(0,''))];;$$_class='rd-ej rd-fi rd-ei rd-eX rd-dF';if(value[alignKey]=='center'){;$$_class+=' rd-fj';};$vnode_1.push($createVNode('li',{'title': (i18n('j8')),'mx5-click': $viewId+'_iA({v:\'center\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_es_static_text||($quick_es_static_text=$createVNode(0,''))];;$$_class='rd-ej rd-fi rd-ei rd-eX rd-dF';if(value[alignKey]=='right'){;$$_class+=' rd-fj';};$vnode_1.push($createVNode('li',{'title': (i18n('j9')),'mx5-click': $viewId+'_iA({v:\'right\'})','class': $$_class,},$vnode_2));;$$_class='rd-d0 rd-et';if(disabled){;$$_class+=' rd-fk';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_iA<click>'(e) {
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