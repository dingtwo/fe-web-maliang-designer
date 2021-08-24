/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6n/style",["51"],(require,exports,module)=>{
let $quick_g3_static_text;
let $quick_g4_static_text;
let $quick_g5_static_text;
let $quick_g6_static_text;
let $quick_g7_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
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
$vnode_2=[$quick_g3_static_text||($quick_g3_static_text=$createVNode(0,''))];;$$_class='rd-gT rd-hS rd-gS rd-hw rd-ge';if(value[`${prefix}Bold`]){;$$_class+=' rd-hT';};$vnode_1=[$createVNode('li',{'title': (i18n('mI')),'mx5-click': $viewId+'_lc({key:\''+($encodeQuote(`${prefix}Bold`))+'\'})','class': $$_class,},$vnode_2)];$vnode_2=[$quick_g4_static_text||($quick_g4_static_text=$createVNode(0,''))];;$$_class='rd-gT rd-hS rd-gS rd-hw rd-ge';if(value[`${prefix}Italic`]){;$$_class+=' rd-hT';};$vnode_1.push($createVNode('li',{'title': (i18n('mJ')),'mx5-click': $viewId+'_lc({key:\''+($encodeQuote(`${prefix}Italic`))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_g5_static_text||($quick_g5_static_text=$createVNode(0,''))];;$$_class='rd-gT rd-hS rd-gS rd-hw rd-ge';if(value[`${prefix}Underline`]){;$$_class+=' rd-hT';};$vnode_1.push($createVNode('li',{'title': (i18n('mK')),'mx5-click': $viewId+'_lc({key:\''+($encodeQuote(`${prefix}Underline`))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_g6_static_text||($quick_g6_static_text=$createVNode(0,''))];;$$_class='rd-gT rd-hS rd-gS rd-hw rd-ge';if(value[`${prefix}Strike`]){;$$_class+=' rd-hT';};$vnode_1.push($createVNode('li',{'title': (i18n('mL')),'mx5-click': $viewId+'_lc({key:\''+($encodeQuote(`${prefix}Strike`))+'\'})','class': $$_class,},$vnode_2));$vnode_2=[$quick_g7_static_text||($quick_g7_static_text=$createVNode(0,''))];;$$_class='rd-gT rd-hS rd-gS rd-hw rd-ge';if(value[`${prefix}Overline`]){;$$_class+=' rd-hT';};$vnode_1.push($createVNode('li',{'title': (i18n('mM')),'mx5-click': $viewId+'_lc({key:\''+($encodeQuote(`${prefix}Overline`))+'\'})','class': $$_class,},$vnode_2));;$$_class='rd-gz rd-g3';if(disabled){;$$_class+=' rd-hU';};$vnode_0=[$createVNode('ul',{'class': $$_class,},$vnode_1)]; 

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
    '_lc<click>'(e) {
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