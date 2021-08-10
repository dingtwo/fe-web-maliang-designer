/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/66/list",["4e","../../4t/format","./share","../5s/index"],(require,exports,module)=>{
require("../5s/index");
let $quick_fC_0_static_node;
let $quick_fC_1_static_node;
let $quick_ee_static_text;
let $quick_eA_static_text;
let $quick_eB_static_text;
let $quick_fC_10_static_node;
let $quick_fC_3_static_attr={'class': 'rd-dS rd-et rd-fO',};
let $quick_fC_4_static_attr={'class': 'rd-ez rd-iR',};
let $quick_fC_5_static_attr={'class': 'rd-fN',};
let $quick_fC_6_static_attr={'class': 'rd-eH rd-eI rd-fn rd-fv',};
let $quick_fC_7_static_attr={'class': 'rd-eV rd-ez',};
let $quick_fC_8_static_attr={'class': 'rd-fn',};
let $quick_fC_9_static_attr={'class': 'rd-dU rd-dV rd-eF rd-eU rd-ec rd-ez rd-fE rd-fJ',};
/*
    author:https://github.com/xinglie
*/


require("./share");
let magix_1 = require("4e");
let format_1 = require("../../4t/format");
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

if($quick_fC_0_static_node){
$vnode_0=[$quick_fC_0_static_node];
}else{
$vnode_0=[$quick_fC_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-dQ rd-eF rd-fK',})];
}

if($quick_fC_1_static_node){
$vnode_0.push($quick_fC_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-dZ">显示格式</h5>',1)];$vnode_0.push($quick_fC_1_static_node=$createVNode('div',{'_': 'cI','class': 'rd-dO rd-dP rd-eF rd-eG rd-ec rd-fL',},$vnode_1));
}
let cIndex=0;;$vnode_1=[];$vnode_2=[];
for(let $q_c_pjxyrqni=list.length,ci=0;ci<$q_c_pjxyrqni;ci+=1){
let category=list[ci];
$vnode_3=[$createVNode(0,(category.title))];;$$_class='rd-iS rd-ei rd-eX ';if(category.id==parts[0]){;cIndex=ci;$$_class+=' rd-iT';};$vnode_2.push($createVNode('div',{'mx5-click': ((category.id!=parts[0]))&&($viewId+'_kb({to:\''+($encodeQuote(category.id))+'\'})'),'class': $$_class,},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_fC_4_static_attr,$vnode_2));let current=list[cIndex];;
if(current.id=='custom'){
$vnode_2=[$quick_ee_static_text||($quick_ee_static_text=$createVNode(0,'loading...'))];$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'parts,list','class': 'rd-iU','style': 'width:848px;height:425px','mx5-cmchange': $viewId+'_j6()','mx5-view': '4l/5s/index?value='+$keyOf($refData,parts[1]||current.defaults,'cH.'+(cIndex)+'.cI'),},$vnode_2));
}else{

for(let $q_a_ytkzrvhmd=current.groups,$q_c_xjscnaz=$q_a_ytkzrvhmd.length,gi=0;gi<$q_c_xjscnaz;gi+=1){
let group=$q_a_ytkzrvhmd[gi];
$vnode_3=[$createVNode(0,(group.title))];$vnode_2=[$createVNode('div',$quick_fC_6_static_attr,$vnode_3)];$vnode_3=[];
for(let $q_a_pykyrriqvb=group.list,$q_c_vbemipehzh=$q_a_pykyrriqvb.length,$q_key_sxsikzy=0;$q_key_sxsikzy<$q_c_vbemipehzh;$q_key_sxsikzy+=1){
let item=$q_a_pykyrriqvb[$q_key_sxsikzy];
$vnode_4=[];$vnode_4.push($createVNode(0,(item.title.trim())));
if(item.example){
$vnode_5=[$createVNode(0,'('+(item.example)+')')];$vnode_4.push($createVNode('span',$quick_fC_8_static_attr,$vnode_5));
};$$_class='rd-em rd-iK rd-fq rd-iL rd-fS rd-iM rd-iN rd-eB rd-eX';if(parts[gi+1]==item.format){;$$_class+=' rd-iO';};$vnode_3.push($createVNode('div',{'mx5-click': $viewId+'_ka({format:\''+($encodeQuote(item.format))+'\',to:'+(gi+1)+'})','class': $$_class,},$vnode_4));
}$vnode_2.push($createVNode('div',$quick_fC_7_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_fC_5_static_attr,$vnode_2));
}
}$vnode_0.push($createVNode('div',$quick_fC_3_static_attr,$vnode_1));$vnode_2=[$quick_eA_static_text||($quick_eA_static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_el()','class': 'rd-dL rd-dN rd-eX rd-ei','type': 'button',},$vnode_2)];$vnode_2=[$quick_eB_static_text||($quick_eB_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_et()','class': 'rd-dL rd-eX rd-e_ rd-ei','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_fC_9_static_attr,$vnode_1));
if($quick_fC_10_static_node){
$vnode_0.push($quick_fC_10_static_node);
}else{
$vnode_0.push($quick_fC_10_static_node=$createVNode('div',{'_': 'cJ','class': 'rd-dT rd-eF rd-fI',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        let me = this;
        me['_ho'] = data.format;
        me['_ej'] = data.dialog;
        me['_j4'] = data.done;
    },
    render() {
        let list = format_1["_k_"](), parts = format_1["_j5"](this['_ho']);
        if (!parts[0])
            parts[0] = list[0].id;
        this.digest({
            list,
            parts
        });
    },
    '_ka<click>'(e) {
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
    '_j6<cmchange>'(e) {
        let parts = this.get('parts');
        parts[1] = e.value.trim();
    },
    '_kb<click>'(e) {
        let { to } = e.params;
        this.digest({
            parts: [to]
        });
    },
    '_el<click>'() {
        this['_ej'].close();
        let parts = this.get('parts');
        let [prefix, ...rest] = parts;
        for (let i = rest.length; i--;) {
            if (rest[i] == null) {
                rest[i] = '';
            }
        }
        this['_j4'](prefix + ':' + rest.join(''));
    },
    '_et<click>'() {
        this['_ej'].close();
    }
});

});