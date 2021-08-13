/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/62/confirm",["5c","../../5n/index"],(require,exports,module)=>{
let $quick_nO_0_static_node;
let $quick_nO_5_static_node;
let $quick_nO_1_static_attr={'class': 'rd-m3 rd-m4 rd-mA rd-mX rd-mZ rd-mb rd-mc rd-n9',};
let $quick_nO_2_static_attr={'class': 'rd-mm',};
let $quick_nO_3_static_attr={'class': 'rd-mf rd-nn',};
let $quick_nO_4_static_attr={'class': 'rd-m3 rd-mA rd-mX rd-mZ rd-mh rd-mi rd-n2 rd-n7 rd-nh',};

/*
    author:https://github.com/xinglie
 */
let magix_1 = require("5c");
let index_1 = require("../../5n/index");
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

if($quick_nO_0_static_node){
$vnode_0=[$quick_nO_0_static_node];
}else{
$vnode_0=[$quick_nO_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-m3 rd-md rd-n8',})];
}
$vnode_2=[$createVNode(0,(title))];$vnode_1=[$createVNode('h5',$quick_nO_2_static_attr,$vnode_2)];$vnode_0.push($createVNode('div',$quick_nO_1_static_attr,$vnode_1));$vnode_1=[$createVNode(0,(body))];$vnode_0.push($createVNode('div',$quick_nO_3_static_attr,$vnode_1));$vnode_2=[$createVNode(0,(i18n('sm')))];$vnode_1=[$createVNode('button',{'type': 'button','mx5-click': $viewId+'_rC()','class': 'rd-l9 rd-mG rd-ma rd-nk','tabindex': 1,'id': '_mx_o_'+$viewId,},$vnode_2)];$vnode_2=[$createVNode(0,(i18n('mo')))];$vnode_1.push($createVNode('button',{'type': 'button','mx5-click': $viewId+'_mI()','class': 'rd-l9 rd-mG rd-mx rd-nk','tabindex': 2,},$vnode_2));$vnode_0.push($createVNode('div',$quick_nO_4_static_attr,$vnode_1));
if($quick_nO_5_static_node){
$vnode_0.push($quick_nO_5_static_node);
}else{
$vnode_0.push($quick_nO_5_static_node=$createVNode('div',{'_': 'i@','class': 'rd-m3 rd-mg rd-n6',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(extra) {
        let me = this;
        me['_mH'] = extra.dialog;
        me['_rO'] = extra.body;
        me['_rP'] = extra.title || index_1('sl');
        me['_rQ'] = extra.enter;
        me['_rR'] = extra.cancel;
    },
    async render() {
        let me = this;
        await me.digest({
            body: me['_rO'],
            title: me['_rP']
        });
        let okBtn = node(`_mx_o_${this.id}`);
        if (okBtn) {
            okBtn.focus();
        }
    },
    '_rC<click>'() {
        let me = this;
        me['_mH'].close();
        if (me['_rQ']) {
            toTry(me['_rQ']);
        }
    },
    '_mI<click>'() {
        let me = this;
        me['_mH'].close();
        if (me['_rR']) {
            toTry(me['_rR']);
        }
    }
});

});