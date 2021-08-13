/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/74/list",["5c","../../5r/format","./share","../6q/index"],(require,exports,module)=>{
require("../6q/index");
let $quick_n0_0_static_node;
let $quick_n0_1_static_node;
let $quick_mC_static_text;
let $quick_mY_static_text;
let $quick_mZ_static_text;
let $quick_n0_10_static_node;
let $quick_n0_3_static_attr={'class': 'rd-mR rd-mf rd-ob',};
let $quick_n0_4_static_attr={'class': 'rd-mX rd-re',};
let $quick_n0_5_static_attr={'class': 'rd-oa',};
let $quick_n0_6_static_attr={'class': 'rd-m5 rd-m6 rd-nL rd-nT',};
let $quick_n0_7_static_attr={'class': 'rd-mX rd-ni',};
let $quick_n0_8_static_attr={'class': 'rd-nL',};
let $quick_n0_9_static_attr={'class': 'rd-m3 rd-mA rd-mX rd-mh rd-mi rd-n2 rd-n7 rd-nh',};
/*
    author:https://github.com/xinglie
*/


require("./share");
let magix_1 = require("5c");
let format_1 = require("../../5r/format");
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

if($quick_n0_0_static_node){
$vnode_0=[$quick_n0_0_static_node];
}else{
$vnode_0=[$quick_n0_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-m3 rd-md rd-n8',})];
}

if($quick_n0_1_static_node){
$vnode_0.push($quick_n0_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-mm">显示格式</h5>',1)];$vnode_0.push($quick_n0_1_static_node=$createVNode('div',{'_': 'i@','class': 'rd-m3 rd-m4 rd-mA rd-mb rd-mc rd-n9',},$vnode_1));
}
let cIndex=0;;$vnode_1=[];$vnode_2=[];
for(let $q_c_kntsbb=list.length,ci=0;ci<$q_c_kntsbb;ci+=1){
let category=list[ci];
$vnode_3=[$createVNode(0,(category.title))];;$$_class='rd-rf rd-mG rd-nk ';if(category.id==parts[0]){;cIndex=ci;$$_class+=' rd-rg';};$vnode_2.push($createVNode('div',{'mx5-click': ((category.id!=parts[0]))&&($viewId+'_sz({to:\''+($encodeQuote(category.id))+'\'})'),'class': $$_class,},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_n0_4_static_attr,$vnode_2));let current=list[cIndex];;
if(current.id=='custom'){
$vnode_2=[$quick_mC_static_text||($quick_mC_static_text=$createVNode(0,'loading...'))];$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'parts,list','class': 'rd-rh','style': 'width:848px;height:425px','mx5-cmchange': $viewId+'_st()','mx5-view': '5j/6q/index?value='+$keyOf($refData,parts[1]||current.defaults,'i!.'+(cIndex)+'.i@'),},$vnode_2));
}else{

for(let $q_a_lsajgu=current.groups,$q_c_lsilxjupd=$q_a_lsajgu.length,gi=0;gi<$q_c_lsilxjupd;gi+=1){
let group=$q_a_lsajgu[gi];
$vnode_3=[$createVNode(0,(group.title))];$vnode_2=[$createVNode('div',$quick_n0_6_static_attr,$vnode_3)];$vnode_3=[];
for(let $q_a_hzvnhjb=group.list,$q_c_kqcrspoxb=$q_a_hzvnhjb.length,$q_key_byyeju=0;$q_key_byyeju<$q_c_kqcrspoxb;$q_key_byyeju+=1){
let item=$q_a_hzvnhjb[$q_key_byyeju];
$vnode_4=[];$vnode_4.push($createVNode(0,(item.title.trim())));
if(item.example){
$vnode_5=[$createVNode(0,'('+(item.example)+')')];$vnode_4.push($createVNode('span',$quick_n0_8_static_attr,$vnode_5));
};$$_class='rd-mK rd-q8 rd-nO rd-q9 rd-of rd-r_ rd-ra rd-mZ rd-nk';if(parts[gi+1]==item.format){;$$_class+=' rd-rb';};$vnode_3.push($createVNode('div',{'mx5-click': $viewId+'_sy({format:\''+($encodeQuote(item.format))+'\',to:'+(gi+1)+'})','class': $$_class,},$vnode_4));
}$vnode_2.push($createVNode('div',$quick_n0_7_static_attr,$vnode_3));$vnode_1.push($createVNode('div',$quick_n0_5_static_attr,$vnode_2));
}
}$vnode_0.push($createVNode('div',$quick_n0_3_static_attr,$vnode_1));$vnode_2=[$quick_mY_static_text||($quick_mY_static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_mJ()','class': 'rd-l9 rd-mG rd-ma rd-nk','type': 'button',},$vnode_2)];$vnode_2=[$quick_mZ_static_text||($quick_mZ_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_mR()','class': 'rd-l9 rd-mG rd-mx rd-nk','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_n0_9_static_attr,$vnode_1));
if($quick_n0_10_static_node){
$vnode_0.push($quick_n0_10_static_node);
}else{
$vnode_0.push($quick_n0_10_static_node=$createVNode('div',{'_': 'i$','class': 'rd-m3 rd-mg rd-n6',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        let me = this;
        me['_pM'] = data.format;
        me['_mH'] = data.dialog;
        me['_sr'] = data.done;
    },
    render() {
        let list = format_1["_sx"](), parts = format_1["_ss"](this['_pM']);
        if (!parts[0])
            parts[0] = list[0].id;
        this.digest({
            list,
            parts
        });
    },
    '_sy<click>'(e) {
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
    '_st<cmchange>'(e) {
        let parts = this.get('parts');
        parts[1] = e.value.trim();
    },
    '_sz<click>'(e) {
        let { to } = e.params;
        this.digest({
            parts: [to]
        });
    },
    '_mJ<click>'() {
        this['_mH'].close();
        let parts = this.get('parts');
        let [prefix, ...rest] = parts;
        for (let i = rest.length; i--;) {
            if (rest[i] == null) {
                rest[i] = '';
            }
        }
        this['_sr'](prefix + ':' + rest.join(''));
    },
    '_mR<click>'() {
        this['_mH'].close();
    }
});

});