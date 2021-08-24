/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6p/list",["51","../../5g/format","./share","../6f/index"],(require,exports,module)=>{
require("../6f/index");
let $quick_ib_0_static_node;
let $quick_ib_1_static_node;
let $quick_gO_static_text;
let $quick_h__static_text;
let $quick_ha_static_text;
let $quick_ib_10_static_node;
let $quick_ib_3_static_attr={'class': 'rd-g3 rd-gr rd-in',};
let $quick_ib_4_static_attr={'class': 'rd-g9 rd-lq',};
let $quick_ib_5_static_attr={'class': 'rd-im',};
let $quick_ib_6_static_attr={'class': 'rd-h5 rd-hX rd-hg rd-hh',};
let $quick_ib_7_static_attr={'class': 'rd-g9 rd-hu',};
let $quick_ib_8_static_attr={'class': 'rd-hX',};
let $quick_ib_9_static_attr={'class': 'rd-g9 rd-gM rd-gt rd-gu rd-he rd-ht rd-id rd-ii',};
/*
    author:https://github.com/xinglie
*/


require("./share");
let magix_1 = require("51");
let format_1 = require("../../5g/format");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0,
{
	list,
	parts,}=$dataFromView,
$vnode_1,
$$_class,
$vnode_3,
$vnode_2,
$vnode_5,
$vnode_4;

if($quick_ib_0_static_node){
$vnode_0=[$quick_ib_0_static_node];
}else{
$vnode_0=[$quick_ib_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gp rd-he rd-ij',})];
}

if($quick_ib_1_static_node){
$vnode_0.push($quick_ib_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-gy">显示格式</h5>',1)];$vnode_0.push($quick_ib_1_static_node=$createVNode('div',{'_': 'eE','class': 'rd-gM rd-gn rd-go rd-he rd-hf rd-ik',},$vnode_1));
}
let cIndex=0;;$vnode_1=[];$vnode_2=[];
for(let $q_c_jjch=list.length,ci=0;ci<$q_c_jjch;ci+=1){
let category=list[ci];
$vnode_3=[$createVNode(0,(category.title))];;$$_class='rd-lr rd-gS rd-hw ';if(category.id==parts[0]){;cIndex=ci;$$_class+=' rd-ls';};$vnode_2.push($createVNode('div',{'mx5-click': ((category.id!=parts[0]))&&($viewId+'_mO({to:\''+($encodeQuote(category.id))+'\'})'),'class': $$_class,},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_ib_4_static_attr,$vnode_2));let current=list[cIndex];;
if(current.id=='custom'){
$vnode_2=[$quick_gO_static_text||($quick_gO_static_text=$createVNode(0,'loading...'))];$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'parts,list','class': 'rd-lt','style': 'width:848px;height:425px','mx5-cmchange': $viewId+'_mI()','mx5-view': '58/6f/index?value='+$keyOf($refData,parts[1]||current.defaults,'eD.'+(cIndex)+'.eE'),},$vnode_2));
}else{

for(let $q_a_xntlries=current.groups,$q_c_znridpo=$q_a_xntlries.length,gi=0;gi<$q_c_znridpo;gi+=1){
let group=$q_a_xntlries[gi];
$vnode_3=[$createVNode(0,(group.title))];$vnode_2=[$createVNode('div',$quick_ib_6_static_attr,$vnode_3)];$vnode_3=[];
for(let $q_a_atpyovmi=group.list,$q_c_kbkihy=$q_a_atpyovmi.length,$q_key_bvuawjkt=0;$q_key_bvuawjkt<$q_c_kbkihy;$q_key_bvuawjkt+=1){
let item=$q_a_atpyovmi[$q_key_bvuawjkt];
$vnode_4=[];$vnode_4.push($createVNode(0,(item.title.trim())));
if(item.example){
$vnode_5=[$createVNode(0,'('+(item.example)+')')];$vnode_4.push($createVNode('span',$quick_ib_8_static_attr,$vnode_5));
};$$_class='rd-gW rd-lj rd-h0 rd-lk rd-ir rd-ll rd-lm rd-ha rd-hw';if(parts[gi+1]==item.format){;$$_class+=' rd-ln';};$vnode_3.push($createVNode('div',{'mx5-click': $viewId+'_mN({format:\''+($encodeQuote(item.format))+'\',to:'+(gi+1)+'})','class': $$_class,},$vnode_4));
}$vnode_2.push($createVNode('div',$quick_ib_7_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_ib_5_static_attr,$vnode_2));
}
}$vnode_0.push($createVNode('div',$quick_ib_3_static_attr,$vnode_1));$vnode_2=[$quick_h__static_text||($quick_h__static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_gV()','class': 'rd-gS rd-gk rd-gm rd-hw','type': 'button',},$vnode_2)];$vnode_2=[$quick_ha_static_text||($quick_ha_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_g3()','class': 'rd-gJ rd-gS rd-gk rd-hw','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_ib_9_static_attr,$vnode_1));
if($quick_ib_10_static_node){
$vnode_0.push($quick_ib_10_static_node);
}else{
$vnode_0.push($quick_ib_10_static_node=$createVNode('div',{'_': 'eF','class': 'rd-gs rd-he rd-ih',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        let me = this;
        me['_j1'] = data.format;
        me['_gT'] = data.dialog;
        me['_mG'] = data.done;
    },
    render() {
        let list = format_1["_mM"](), parts = format_1["_mH"](this['_j1']);
        if (!parts[0])
            parts[0] = list[0].id;
        this.digest({
            list,
            parts
        });
    },
    '_mN<click>'(e) {
        let { format, to } = e.params;
        let parts = this.get('parts');
        if (parts[to] == format) {
            parts[to] = '';
        }
        else {
            parts[to] = format;
        }
        this.digest({
            parts
        });
    },
    '_mI<cmchange>'(e) {
        let parts = this.get('parts');
        parts[1] = e.value.trim();
    },
    '_mO<click>'(e) {
        let { to } = e.params;
        this.digest({
            parts: [to]
        });
    },
    '_gV<click>'() {
        this['_gT'].close();
        let parts = this.get('parts');
        let [prefix, ...rest] = parts;
        for (let i = rest.length; i--;) {
            if (rest[i] == null) {
                rest[i] = '';
            }
        }
        this['_mG'](prefix + ':' + rest.join(''));
    },
    '_g3<click>'() {
        this['_gT'].close();
    }
});

});