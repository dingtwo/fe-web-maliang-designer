/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/5n/alert",["51","../../5c/index"],(require,exports,module)=>{
let $quick_hZ_0_static_node;
let $quick_hZ_5_static_node;
let $quick_hZ_1_static_attr={'class': 'rd-g9 rd-gM rd-gn rd-go rd-ha rd-he rd-hf rd-ik',};
let $quick_hZ_2_static_attr={'class': 'rd-gy',};
let $quick_hZ_3_static_attr={'class': 'rd-gr rd-hz',};
let $quick_hZ_4_static_attr={'class': 'rd-g9 rd-gM rd-gt rd-gu rd-ha rd-he rd-ht rd-id rd-ii',};

/*
    author:https://github.com/xinglie
 */
let magix_1 = require("51");
let index_1 = require("../../5c/index");
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

if($quick_hZ_0_static_node){
$vnode_0=[$quick_hZ_0_static_node];
}else{
$vnode_0=[$quick_hZ_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gp rd-he rd-ij',})];
}
$vnode_2=[$createVNode(0,(title))];$vnode_1=[$createVNode('h5',$quick_hZ_2_static_attr,$vnode_2)];$vnode_0.push($createVNode('div',$quick_hZ_1_static_attr,$vnode_1));$vnode_1=[$createVNode(0,(body))];$vnode_0.push($createVNode('div',$quick_hZ_3_static_attr,$vnode_1));$vnode_2=[$createVNode(0,(i18n('mx')))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_lR()','class': 'rd-gS rd-gk rd-gm rd-hw','type': 'button','tabindex': 1,'id': '_mx_o_'+$viewId,},$vnode_2)];$vnode_0.push($createVNode('div',$quick_hZ_4_static_attr,$vnode_1));
if($quick_hZ_5_static_node){
$vnode_0.push($quick_hZ_5_static_node);
}else{
$vnode_0.push($quick_hZ_5_static_node=$createVNode('div',{'_': 'eE','class': 'rd-gs rd-he rd-ih',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(extra) {
        let me = this;
        me['_gT'] = extra.dialog;
        me['_l3'] = extra.body;
        me['_l4'] = extra.title || index_1('mw');
        me['_l5'] = extra.enter;
    },
    async render() {
        let me = this;
        await me.digest({
            body: me['_l3'],
            title: me['_l4']
        });
        let okBtn = node(`_mx_o_${this.id}`);
        if (okBtn) {
            okBtn.focus();
        }
    },
    '_lR<click>'() {
        let me = this;
        me['_gT'].close();
        if (me['_l5']) {
            toTry(me['_l5']);
        }
    }
});

});