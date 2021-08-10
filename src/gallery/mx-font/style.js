/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/64/style",["4e"],(require,exports,module)=>{
let $quick_et_static_text;
let $quick_eu_static_text;
let $quick_ev_static_text;
let $quick_ew_static_text;
let $quick_ex_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	i18n,
	value,
	prefix,}=$dataFromView,
$$_class,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_et_static_text||($quick_et_static_text=$createVNode(0,''))];;$$_class='rd-ej rd-fi rd-ei rd-eX rd-dF';if(value[`${prefix}Bold`]){;$$_class+=' rd-fj';};$vnode_1=[$createVNode('li',{'title': (i18n('k_')),'mx5-click': $viewId+'_iA({key:\''+($encodeQuote(`${prefix}Bold`))+'\'})','class': $$_class,},$vnode_2)];$vnode_2=[$quick_eu_static_text||($quick_eu_static_text=$createVNode(0,''))];;$$_class='rd-ej rd-fi rd-ei rd-eX rd-dF';if(value[`${prefix}Italic`]){;$$_class+=' rd-fj';};$vnode_1.push($createVNode('li',{'title': (i18n('ka')),'mx5-click': $viewId+'_iA({key:\''+($encodeQuote(`${prefix}Italic`))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_ev_static_text||($quick_ev_static_text=$createVNode(0,''))];;$$_class='rd-ej rd-fi rd-ei rd-eX rd-dF';if(value[`${prefix}Underline`]){;$$_class+=' rd-fj';};$vnode_1.push($createVNode('li',{'title': (i18n('kb')),'mx5-click': $viewId+'_iA({key:\''+($encodeQuote(`${prefix}Underline`))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_ew_static_text||($quick_ew_static_text=$createVNode(0,''))];;$$_class='rd-ej rd-fi rd-ei rd-eX rd-dF';if(value[`${prefix}Strike`]){;$$_class+=' rd-fj';};$vnode_1.push($createVNode('li',{'title': (i18n('kc')),'mx5-click': $viewId+'_iA({key:\''+($encodeQuote(`${prefix}Strike`))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_ex_static_text||($quick_ex_static_text=$createVNode(0,''))];;$$_class='rd-ej rd-fi rd-ei rd-eX rd-dF';if(value[`${prefix}Overline`]){;$$_class+=' rd-fj';};$vnode_1.push($createVNode('li',{'title': (i18n('kd')),'mx5-click': $viewId+'_iA({key:\''+($encodeQuote(`${prefix}Overline`))+'\'})','class': $$_class,},$vnode_2));;$$_class='rd-d0 rd-et';if(disabled){;$$_class+=' rd-fk';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        let prefix = data.prefix;
        if (!prefix) {
            prefix = 'style';
        }
        this.set(data);
        this.set({
            prefix
        });
    },
    render() {
        this.digest();
    },
    '_iA<click>'(e) {
        let me = this;
        if (me.get('disabled')) {
            return;
        }
        let v = me.get('value');
        let { key } = e.params;
        let prefix = this.get('prefix');
        v[key] = !v[key];
        if (key == `${prefix}Underline` &&
            v[key]) {
            v[`${prefix}Strike`] = false;
            v[`${prefix}Overline`] = false;
        }
        if (key == `${prefix}Strike` &&
            v[key]) {
            v[`${prefix}Underline`] = false;
            v[`${prefix}Overline`] = false;
        }
        if (key == `${prefix}Overline` &&
            v[key]) {
            v[`${prefix}Strike`] = false;
            v[`${prefix}Underline`] = false;
        }
        me.digest({
            value: v
        });
        magix_1.dispatch(me.root, 'input');
    }
});

});