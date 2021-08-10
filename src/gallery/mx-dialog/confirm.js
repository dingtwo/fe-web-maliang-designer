/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/54/confirm",["4e","../../4p/index"],(require,exports,module)=>{
let $quick_fq_0_static_node;
let $quick_fq_5_static_node;
let $quick_fq_1_static_attr={'class': 'rd-dO rd-dP rd-eB rd-eF rd-eG rd-ec rd-ez rd-fL',};
let $quick_fq_2_static_attr={'class': 'rd-dZ',};
let $quick_fq_3_static_attr={'class': 'rd-dS rd-e0',};
let $quick_fq_4_static_attr={'class': 'rd-dU rd-dV rd-eB rd-eF rd-eU rd-ec rd-ez rd-fE rd-fJ',};

/*
    author:https://github.com/xinglie
 */
let magix_1 = require("4e");
let index_1 = require("../../4p/index");
let { View, toTry, node } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	title,
	body,
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;

if($quick_fq_0_static_node){
$vnode_0=[$quick_fq_0_static_node];
}else{
$vnode_0=[$quick_fq_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-dQ rd-eF rd-fK',})];
}
$vnode_2=[$createVNode(0,(title))];$vnode_1=[$createVNode('h5',$quick_fq_2_static_attr,$vnode_2)];$vnode_0.push($createVNode('div',$quick_fq_1_static_attr,$vnode_1));$vnode_1=[$createVNode(0,(body))];$vnode_0.push($createVNode('div',$quick_fq_3_static_attr,$vnode_1));$vnode_2=[$createVNode(0,(i18n('jZ')))];$vnode_1=[$createVNode('button',{'type': 'button','mx5-click': $viewId+'_je()','class': 'rd-dL rd-dN rd-eX rd-ei','tabindex': 1,'id': '_mx_o_'+$viewId,},$vnode_2)];$vnode_2=[$createVNode(0,(i18n('d1')))];$vnode_1.push($createVNode('button',{'type': 'button','mx5-click': $viewId+'_ek()','class': 'rd-dL rd-eX rd-e_ rd-ei','tabindex': 2,},$vnode_2));$vnode_0.push($createVNode('div',$quick_fq_4_static_attr,$vnode_1));
if($quick_fq_5_static_node){
$vnode_0.push($quick_fq_5_static_node);
}else{
$vnode_0.push($quick_fq_5_static_node=$createVNode('div',{'_': 'cI','class': 'rd-dT rd-eF rd-fI',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(extra) {
        let me = this;
        me['_ej'] = extra.dialog;
        me['_jq'] = extra.body;
        me['_jr'] = extra.title || index_1('jY');
        me['_js'] = extra.enter;
        me['_jt'] = extra.cancel;
    },
    async render() {
        let me = this;
        await me.digest({
            body: me['_jq'],
            title: me['_jr']
        });
        let okBtn = node(`_mx_o_${this.id}`);
        if (okBtn) {
            okBtn.focus();
        }
    },
    '_je<click>'() {
        let me = this;
        me['_ej'].close();
        if (me['_js']) {
            toTry(me['_js']);
        }
    },
    '_ek<click>'() {
        let me = this;
        me['_ej'].close();
        if (me['_jt']) {
            toTry(me['_jt']);
        }
    }
});

});