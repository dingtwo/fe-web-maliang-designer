/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/72/style",["5c"],(require,exports,module)=>{
let $quick_mR_static_text;
let $quick_mS_static_text;
let $quick_mT_static_text;
let $quick_mU_static_text;
let $quick_mV_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
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
$vnode_2=[$quick_mR_static_text||($quick_mR_static_text=$createVNode(0,''))];;$$_class='rd-mH rd-nG rd-mG rd-nk rd-l3';if(value[`${prefix}Bold`]){;$$_class+=' rd-nH';};$vnode_1=[$createVNode('li',{'title': (i18n('sx')),'mx5-click': $viewId+'_qY({key:\''+($encodeQuote(`${prefix}Bold`))+'\'})','class': $$_class,},$vnode_2)];$vnode_2=[$quick_mS_static_text||($quick_mS_static_text=$createVNode(0,''))];;$$_class='rd-mH rd-nG rd-mG rd-nk rd-l3';if(value[`${prefix}Italic`]){;$$_class+=' rd-nH';};$vnode_1.push($createVNode('li',{'title': (i18n('sy')),'mx5-click': $viewId+'_qY({key:\''+($encodeQuote(`${prefix}Italic`))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_mT_static_text||($quick_mT_static_text=$createVNode(0,''))];;$$_class='rd-mH rd-nG rd-mG rd-nk rd-l3';if(value[`${prefix}Underline`]){;$$_class+=' rd-nH';};$vnode_1.push($createVNode('li',{'title': (i18n('sz')),'mx5-click': $viewId+'_qY({key:\''+($encodeQuote(`${prefix}Underline`))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_mU_static_text||($quick_mU_static_text=$createVNode(0,''))];;$$_class='rd-mH rd-nG rd-mG rd-nk rd-l3';if(value[`${prefix}Strike`]){;$$_class+=' rd-nH';};$vnode_1.push($createVNode('li',{'title': (i18n('sA')),'mx5-click': $viewId+'_qY({key:\''+($encodeQuote(`${prefix}Strike`))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_mV_static_text||($quick_mV_static_text=$createVNode(0,''))];;$$_class='rd-mH rd-nG rd-mG rd-nk rd-l3';if(value[`${prefix}Overline`]){;$$_class+=' rd-nH';};$vnode_1.push($createVNode('li',{'title': (i18n('sB')),'mx5-click': $viewId+'_qY({key:\''+($encodeQuote(`${prefix}Overline`))+'\'})','class': $$_class,},$vnode_2));;$$_class='rd-mn rd-mR';if(disabled){;$$_class+=' rd-nI';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

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
    '_qY<click>'(e) {
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