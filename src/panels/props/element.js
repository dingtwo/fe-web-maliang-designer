/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/6c/element",["5c","../../5b/5e","../../5b/enum","../../5b/5o","../../5b/6c","../../5b/65","../../5b/5f","5j/6u/index","5j/7c/index","5j/70/index","5j/72/style","5j/6r/index","5j/72/align","5j/6v/index","5j/73/index","5j/79/index","5j/77/index","5j/6t/style","5j/6s/style","5j/6s/h-operate","5j/6s/v-operate","5j/6t/operate","5j/6t/border","5j/78/operate","5j/7a/operate","5j/6s/h-size","5j/6s/v-size","5j/6t/size","5j/6t/share","5j/6t/content","5j/78/content","5j/7b/index","5j/7b/help","5j/7e/kp","5j/7e/mod","5j/74/index","5j/71/operate","5j/71/content","5j/70/series","5j/74/fx","5j/75/items"],(require,exports,module)=>{
require("5j/6u/index");
require("5j/7c/index");
require("5j/70/index");
require("5j/72/style");
require("5j/6r/index");
require("5j/72/align");
require("5j/6v/index");
require("5j/73/index");
require("5j/79/index");
require("5j/77/index");
require("5j/6t/style");
require("5j/6s/style");
require("5j/6s/h-operate");
require("5j/6s/v-operate");
require("5j/6t/operate");
require("5j/6t/border");
require("5j/78/operate");
require("5j/7a/operate");
require("5j/6s/h-size");
require("5j/6s/v-size");
require("5j/6t/size");
require("5j/6t/share");
require("5j/6t/content");
require("5j/78/content");
require("5j/7b/index");
require("5j/7b/help");
require("5j/7e/kp");
require("5j/7e/mod");
require("5j/74/index");
require("5j/71/operate");
require("5j/71/content");
require("5j/70/series");
require("5j/74/fx");
require("5j/75/items");
let $quick_op_3_static_node;
let $quick_op_5_static_node;
let $quick_op_0_static_attr={'class': 'rd-mR rd-mn rd-of rd-sp rd-sr',};
let $quick_op_1_static_attr={'class': 'rd-mX rd-mZ rd-sq',};
let $quick_op_2_static_attr={'class': 'rd-mF rd-nA',};
let $quick_op_4_static_attr={'class': 'rd-mD rd-mX rd-mZ rd-ml rd-nk',};
let $special_2={'checked':'checked',};
let $special_4={'value':'value',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let enum_1 = require("../../5b/enum");
let history_1 = require("../../5b/5o");
let props_1 = require("../../5b/6c");
let stage_generic_1 = require("../../5b/65");
let transform_1 = require("../../5b/5f");
let { State, View, node, Vframe, config, mark } = magix_1;
//import StageGeneric from '../../5b/65';
//let { max, min } = Math;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0,
{
	i18n,
	e,
	propTypes,
	he,}=$dataFromView,
$vnode_3,
$vnode_2,
$$_class,
$text,
$$_mx5$_view,
$vnode_1;
$vnode_1=[];$vnode_3=[$createVNode(0,(i18n('uc')))];$vnode_2=[$createVNode('span',$quick_op_2_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(e.ctrl.title)))];$vnode_2.push($createVNode('span',0,$vnode_3));$vnode_1.push($createVNode('li',$quick_op_1_static_attr,$vnode_2));let ctrl=e.ctrl,props=e.props;;
for(let $q_a_sqssouxql=ctrl.props,$q_c_upssqkxrcc=$q_a_sqssouxql.length,$q_key_xegioknudfs=0;$q_key_xegioknudfs<$q_c_upssqkxrcc;$q_key_xegioknudfs+=1){
let p=$q_a_sqssouxql[$q_key_xegioknudfs];

if(p.type&&(!p['_py']||p['_py'](props))){

if(p.type==propTypes['ms']){

if($quick_op_3_static_node){
$vnode_1.push($quick_op_3_static_node);
}else{
$vnode_1.push($quick_op_3_static_node=$createVNode('li',{'_': 'i!','class': 'rd-mV',}));
}

}else{
let data=props[p.key];;
if(p.read){
data=p.read(data,props);;
}$vnode_2=[];
if(p.tip&&(he||p.type!=propTypes['mm'])){
$vnode_3=[$createVNode(0,(i18n(p.tip)))];$vnode_2.push($createVNode('span',$quick_op_2_static_attr,$vnode_3));
}$text='';let locked=props.locked || (p.key=='x'&&props.pinX) || (p.key=='y'&&props.pinY) || (p.key=='rotate'&&(props.pinX||props.pinY));;$text+=' ';let pType=p.type,dyanmicType=p['_qs'];;
if(dyanmicType){
pType=pType(props);
}
if(pType==propTypes['md']){
$vnode_3=[$createVNode(0,(data))];;$$_class='';if(locked){;$$_class+='rd-nL';};$vnode_2.push($createVNode('span',{'class': $$_class,},$vnode_3));
}else if(pType==propTypes['l2']){
;$$_mx5$_view='5j/6u/index?value='+$keyOf($refData,data,'i!.'+(p.key)+'.i@');if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'i$.'+($q_key_xegioknudfs)+'.i^');};$$_mx5$_view+='&props='+$keyOf($refData,props,'i*');if(($temp_var=p.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'i$.'+($q_key_xegioknudfs)+'.i{');};if(($temp_var=p.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'i$.'+($q_key_xegioknudfs)+'.i}');};if(($temp_var=p.min)!=null){;$$_mx5$_view+='&min='+$keyOf($refData,$temp_var,'i$.'+($q_key_xegioknudfs)+'.i[');};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-l5 rd-m8 rd-mK','disabled': (locked),'mx5-input': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'value\',element:\''+$keyOf($refData,e,'i]')+'\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_xegioknudfs)+'.i|')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['mn']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-input': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'range\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/7c/index?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,data,'i!.'+(p.key)+'.i@'),}));
}else if(pType==propTypes['l3']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-input': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'color\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/70/index?clear='+($encodeUrl(p.clear))+'&color='+$keyOf($refData,data,'i!.'+(p.key)+'.i@')+'&align=right&disabled='+($encodeUrl(locked))+'&alpha='+($encodeUrl(p.alpha)),}));
}else if(pType==propTypes['l4']){
$vnode_3=[$createVNode('input',{'class': 'rd-mJ rd-nD','type': 'checkbox','checked': (data),'disabled': (locked&&!p.free),'mx5-change': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',native:\'checked\',element:\''+$keyOf($refData,e,'i]')+'\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_xegioknudfs)+'.i|')+'\'})',},1,$special_2)];
if($quick_op_5_static_node){
$vnode_3.push($quick_op_5_static_node);
}else{
$vnode_3.push($quick_op_5_static_node=$createVNode('i',{'_': 'i@','class': 'rd-mK rd-mR rd-nE',}));
}
$vnode_2.push($createVNode('label',$quick_op_4_static_attr,$vnode_3));
}else if(pType==propTypes['l7']){
$vnode_2.push($createVNode('textarea',{'class': 'rd-l6 rd-m8 rd-na','disabled': (locked),'mx5-input': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',native:\'value\',element:\''+$keyOf($refData,e,'i]')+'\'})','value': (data),},0,$special_4));
}else if(pType==propTypes['l5']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8 rd-mX','mx5-input': $viewId+'_rf({use:\'_\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/72/style?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['l6']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8 rd-mX','mx5-input': $viewId+'_rf({use:\'_\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/6r/index?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['mB']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8 rd-mX','mx5-input': $viewId+'_rf({use:\'_\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/72/align?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,props,'i*')+'&alignKey='+($encodeUrl(p.key)),}));
}else if(pType==propTypes['l9']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'value\',element:\''+$keyOf($refData,e,'i]')+'\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_xegioknudfs)+'.i|')+'\'})','mx5-view': '5j/6v/index?disabled='+$keyOf($refData,locked)+'&selected='+($encodeUrl(data))+'&list='+$keyOf($refData,p.items,'i$.'+($q_key_xegioknudfs)+'.i,')+'&iconKey=icon&textKey='+($encodeUrl(p.textKey||'text'))+'&valueKey='+($encodeUrl(p.valueKey||'value')),}));
}else if(pType==propTypes['l8']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'src\',element:\''+$keyOf($refData,e,'i]')+'\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_xegioknudfs)+'.i|')+'\'})','mx5-view': '5j/73/index?src='+($encodeUrl(data))+'&disabled='+$keyOf($refData,locked),}));
}else if(pType==propTypes['m_']){
$vnode_3=[$createVNode(0,(i18n('tb')))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-mG rd-ma rd-nk','disabled': (locked),'mx5-click': $viewId+'_uB({key:\''+($encodeQuote(p.key))+'\',element:\''+$keyOf($refData,e,'i]')+'\'})',},$vnode_3));
}else if(pType==propTypes['ma']){
$vnode_2.push($createVNode('input',{'class': 'rd-l5','value': (data),'disabled': (locked),'mx5-input': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',native:\'value\',element:\''+$keyOf($refData,e,'i]')+'\'})',},1,$special_4));
}else if(pType==propTypes['mb']){
;$$_mx5$_view='5j/79/index?data='+$keyOf($refData,data,'i!.'+(p.key)+'.i@');if(($temp_var=p.max)){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'i$.'+($q_key_xegioknudfs)+'.i^');};$$_mx5$_view+='&disabled='+$keyOf($refData,locked);$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'bindField\',element:\''+$keyOf($refData,e,'i]')+'\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_xegioknudfs)+'.i|')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['mc']){
;$$_mx5$_view='5j/77/index?';if(($temp_var=p.min)!=null){;$$_mx5$_view+='min='+$keyOf($refData,$temp_var,'i$.'+($q_key_xegioknudfs)+'.i[');};if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'i$.'+($q_key_xegioknudfs)+'.i^');};$$_mx5$_view+='&columns='+$keyOf($refData,data,'i!.'+(p.key)+'.i@')+'&fields='+$keyOf($refData,props.bind.fields,'i.')+'&disabled='+$keyOf($refData,locked);$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'columns\',element:\''+$keyOf($refData,e,'i]')+'\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_xegioknudfs)+'.i|')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['me']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'skin\',element:\''+$keyOf($refData,e,'i]')+'\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_xegioknudfs)+'.i|')+'\'})','mx5-view': '5j/6t/style?disabled='+$keyOf($refData,locked),}));
}else if(pType==propTypes['mg']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'_rf({use:\'rows\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/6s/style?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['mi']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/6s/h-operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['mk']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/6s/v-operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['mf']){
;$$_mx5$_view='5j/6t/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*');if(($temp_var=p['_o0'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['mw']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/6t/border?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['mu']){
;$$_mx5$_view='5j/78/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*');if(($temp_var=p['_o0'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',operate:1,size:1,element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['mE']){
;$$_mx5$_view='5j/7a/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*');if(($temp_var=p['_o0'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',operate:1,size:1,element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['mh']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/6s/h-size?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['ml']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/6s/v-size?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['mj']){
;$$_mx5$_view='5j/6t/size?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*');if(($temp_var=p['_uC'])!=null){;$$_mx5$_view+='&ah='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['mF']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/6t/share?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*')+'&dataPad='+$keyOf($refData,p.dataPad,'i$.'+($q_key_xegioknudfs)+'.i`'),}));
}else if(pType==propTypes['mt']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-n_','mx5-change': $viewId+'_rf({use:\'rows\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/6t/content?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['mv']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-n_','mx5-change': $viewId+'_rf({use:\'rows\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/78/content?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*'),}));
}else if(he&&pType==propTypes['mm']){
$vnode_3=[$createVNode(0,(data))];$vnode_2.push($createVNode('a',{'href': '//'+(data),'class': 'rd-m8 rd-mU rd-mo','title': (data),'target': '_blank','rel': 'noopener noreferrer',},$vnode_3));
}else if(pType==propTypes['mo']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'_rf({use:\'data\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/7b/index?disabled='+$keyOf($refData,locked)+'&data='+$keyOf($refData,data,'i!.'+(p.key)+'.i@'),}));
}else if(pType==propTypes['mp']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-n_','mx5-change': $viewId+'_rf({use:\'data\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/7b/help?disabled='+$keyOf($refData,locked)+'&data='+$keyOf($refData,data,'i!.'+(p.key)+'.i@'),}));
}else if(pType==propTypes['mq']){
;$$_mx5$_view='5j/7e/kp?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*');if(($temp_var=p.mod)!=null){;$$_mx5$_view+='&mod='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-n_','mx5-change': $viewId+'_rf({use:\'kp\',element:\''+$keyOf($refData,e,'i]')+'\',kp:1})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['mr']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-n_','mx5-change': $viewId+'_rf({use:\'mod\',element:\''+$keyOf($refData,e,'i]')+'\',mod:1})','mx5-view': '5j/7e/mod?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['mx']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'format\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/74/index?format='+$keyOf($refData,data,'i!.'+(p.key)+'.i@')+'&disabled='+$keyOf($refData,locked),}));
}else if(pType==propTypes['mz']){
;$$_mx5$_view='5j/71/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*');if(($temp_var=p['_o0'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['mA']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-n_','mx5-change': $viewId+'_rf({use:\'rows\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/71/content?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'i*'),}));
}else if(pType==propTypes['mC']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({use:\'colors\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/70/series?colors='+$keyOf($refData,data,'i!.'+(p.key)+'.i@')+'&disabled='+$keyOf($refData,locked)+'&multi='+$keyOf($refData,p.multi,'i$.'+($q_key_xegioknudfs)+'.i~'),}));
}else if(pType==propTypes['my']){
;$$_mx5$_view='5j/74/fx?format='+$keyOf($refData,data,'i!.'+(p.key)+'.i@')+'&disabled='+$keyOf($refData,locked);if(($temp_var=p['_sq'])){;$$_mx5$_view+='&defaultFx='+$keyOf($refData,$temp_var,'i$.'+($q_key_xegioknudfs)+'.i/');};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'format\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['mD']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'_rf({use:\'items\',element:\''+$keyOf($refData,e,'i]')+'\'})','mx5-view': '5j/75/items?items='+$keyOf($refData,data,'i!.'+(p.key)+'.i@')+'&disabled='+$keyOf($refData,locked)+'&mutual='+$keyOf($refData,p.mutual&&p.mutual(props),'i$.'+($q_key_xegioknudfs)+'.i;'),}));
};$$_class='rd-sq rd-mX ';if(p['_pW']){;$$_class+='rd-nC';}else{;$$_class+='rd-mZ';};$vnode_1.push($createVNode('li',{'class': $$_class,},$vnode_2));
}
}
}$vnode_0=[$createVNode('ul',$quick_op_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_mb'](this.render, 30);
        State.on('l4', update);
        State.on('l7', update);
        State.on('l5', update);
        this.on('destroy', () => {
            State.off('l4', update);
            State.off('l7', update);
            State.off('l5', update);
        });
        this.set({
            he: config('helpElement'),
            propTypes: props_1
        });
    },
    async render() {
        let selectElements = State.get('l2');
        let single = selectElements.length == 1;
        if (single) {
            this.digest({
                e: selectElements[0]
            });
        }
    },
    async '_rf<input,change>'(e) {
        //console.log(e);
        let { key, use, element, native, write, size, kp, operate, mod } = e.params;
        let changed = 0, changedProps, changedIds, changedTypes;
        let { ctrl, props, id, type } = element;
        let moveElements = [element];
        if (use || native) {
            let resetXY = size ||
                key == 'width' ||
                key == 'height' ||
                key == 'rx' ||
                key == 'ry', old, cachedOld;
            if (props.rotate) {
                let oldRotatedRect = transform_1['l3'](props);
                cachedOld = oldRotatedRect['_n2'][0];
            }
            if (resetXY) {
                old = cachedOld;
            }
            let updatePosition = key == 'x' || key == 'y';
            let oldWidth = props.width, oldHeight = props.height;
            let v = native ? e.eventTarget[native] : e[use];
            let updateMarker = mark(this, '_m3');
            changedProps = {};
            changedIds = { [id]: 1 };
            changedTypes = { [type]: 1 };
            if (use) {
                changedProps[use] = 1;
            }
            if (key) {
                changedProps[key] = 1;
            }
            if (write) {
                v = await write(v, props, e, changedProps);
            }
            if (updateMarker()) {
                if (oldWidth != props.width ||
                    oldHeight != props.height) {
                    old = cachedOld;
                }
                if (updatePosition) {
                    let positionOffset = v - props[key];
                    let linkage = State.get('mg');
                    if (linkage) {
                        let groups = State.get('mc');
                        let sameGroups = groups[id];
                        if (sameGroups) {
                            let { 'l3': allMap } = stage_generic_1['l2']();
                            for (let g of sameGroups) {
                                if (g != id) {
                                    let e = allMap[g];
                                    moveElements.push(e);
                                    if (e.props.pinX &&
                                        key == 'x') {
                                        positionOffset = 0;
                                    }
                                    else if (e.props.pinY &&
                                        key == 'y') {
                                        positionOffset = 0;
                                    }
                                }
                            }
                        }
                    }
                    if (positionOffset) {
                        for (let me of moveElements) {
                            let { ctrl, props, id, type } = me;
                            changedIds[id] = 1;
                            changedTypes[type] = 1;
                            let moveProps = ctrl['_oj'];
                            if (ctrl['_ok']) {
                                moveProps = ctrl['_oj'](props);
                            }
                            for (let m of moveProps) {
                                if (m.use == key) {
                                    props[m.key] += positionOffset;
                                }
                            }
                            if (ctrl['_m3']) {
                                ctrl['_m3'](props, old, 1);
                            }
                            changed = 1;
                        }
                    }
                    else {
                        this.render();
                    }
                }
                else if (key) {
                    let r;
                    if ((key == 'width' ||
                        key == 'height') &&
                        (ctrl['_oG'] & enum_1['mj'])) {
                        r = props.height ? props.width / props.height : 0;
                    }
                    props[key] = v;
                    if (r) {
                        if (key == 'width') {
                            props.height = props.width / r;
                        }
                        else {
                            props.width = props.height * r;
                        }
                    }
                    if (ctrl['_m3']) {
                        ctrl['_m3'](props, old, 1);
                    }
                    if (old) {
                        let newRotatedRect = transform_1['l3'](props);
                        let n = newRotatedRect['_n2'][0];
                        props.x += old.x - n.x;
                        props.y += old.y - n.y;
                    }
                    changed = 1;
                }
                else {
                    if (ctrl['_m3']) {
                        ctrl['_m3'](props, old, 1);
                    }
                    changed = 1;
                }
                // if (key == 'width' ||
                //     key == 'height') {
                //     let { '@:{stage.elements.map}': stageElementsMap } = StageGeneric["@:{generic#get.all.elements.and.map}"]();
                //     if (stageElementsMap[element.id]) {
                //         let area = StageGeneric["@:{query.area.by.xy.or.return.first}"](props);
                //         if (area) {
                //             if (key == 'width') {
                //                 props.width = min(props.width, (area.width + area.x) * scale - props.x);
                //             } else {
                //                 props.height = min(props.height, (area.height + area.y) * scale - props.y);
                //             }
                //         }
                //     }
                // }
                // if (key == 'x' ||
                //     key == 'y') {
                //     let { '@:{stage.elements.map}': stageElementsMap } = StageGeneric["@:{generic#get.all.elements.and.map}"]();
                //     let xOffset = 0,
                //         yOffset = 0;
                //     if (stageElementsMap[element.id]) {
                //         let area = StageGeneric["@:{query.area.by.xy.or.return.first}"](props);
                //         if (area) {
                //             let rect = Transform["@:{transform#rotate.rect}"](props, props.rotate || 0);
                //             //console.log(rect);
                //             let rightDistance = (area.x + area.width) * scale - rect.right;
                //             let leftDistance = rect.left - area.x * scale;
                //             let topDistance = rect.top - area.y * scale;
                //             let bottomDistance = (area.y + area.height) * scale - rect.bottom
                //             if (rightDistance < 0) {
                //                 xOffset = max(rightDistance, -leftDistance);
                //             } else if (leftDistance < 0) {
                //                 xOffset = -leftDistance;
                //             }
                //             if (bottomDistance < 0) {
                //                 yOffset = max(bottomDistance, -topDistance);
                //             } else if (topDistance < 0) {
                //                 yOffset = -topDistance;
                //             }
                //             let moveProps = ctrl['@:{move.props}'];
                //             if (ctrl['@:{move.props.is.function}']) {
                //                 moveProps = ctrl['@:{move.props}'](props);
                //             }
                //             for (let m of moveProps) {
                //                 if (m.use == 'x') {
                //                     props[m.key] += xOffset;
                //                 } else if (m.use == 'y') {
                //                     props[m.key] += yOffset;
                //                 }
                //             }
                //         }
                //     }
                // }
            }
        }
        if (changed) {
            State.fire('l4', {
                '_nK': changedIds,
                '_nL': changedTypes,
                '_l3': changedProps
            });
            for (let me of moveElements) {
                let n = node(me.id);
                if (n) {
                    let vf = Vframe.byNode(n);
                    if (vf) {
                        vf.invoke('_ol', [me]);
                    }
                }
            }
            //非svg控制点的处理,才记录历史记录
            if (!e['_tr']) {
                let type;
                if (key == 'x' ||
                    key == 'y') {
                    type = history_1['mj'];
                }
                else if ((size && !operate) ||
                    key == 'width' ||
                    key == 'height' ||
                    key == 'rx' ||
                    key == 'ry' ||
                    key == 'r' ||
                    key == 'tfootSpacing') {
                    type = history_1['mx'];
                }
                else if (key == 'rotate') {
                    type = history_1['mu'];
                }
                else if (kp) {
                    type = history_1['mv'];
                }
                else if (mod) {
                    type = history_1['mw'];
                }
                else if (key == 'locked') {
                    type = props.locked ? history_1['mq'] : history_1['mr'];
                }
                else {
                    type = history_1['my'];
                }
                let ename = stage_generic_1['md']([element]);
                history_1["l2"](type, ename, element.id + 'mP' + key, 500);
            }
        }
    },
    '_uB<click>'(e) {
        let m = mark(this, '_uA');
        let { key, element } = e.params;
        let { props, ctrl } = element;
        let oldRotatedRect = transform_1['l3'](props);
        let old = oldRotatedRect['_n2'][0];
        let img = new Image();
        let setSize = () => {
            let newWidth = const_1['l3'](img.width), newHeight = const_1['l3'](img.height);
            if (m() &&
                (newWidth != props.width ||
                    newHeight != props.height)) {
                props.width = newWidth;
                props.height = newHeight;
                let newRotatedRect = transform_1['l3'](props);
                let n = newRotatedRect['_n2'][0];
                props.x += old.x - n.x;
                props.y += old.y - n.y;
                if (ctrl['_m3']) {
                    ctrl['_m3'](props);
                }
                this.render();
                State.fire('l4', {
                    '_nK': {
                        [element.id]: 1
                    },
                    '_nL': {
                        [element.type]: 1
                    },
                    '_l3': {
                        '_l4': 1
                    }
                });
                let n1 = node(element.id);
                let vf = Vframe.byNode(n1);
                if (vf) {
                    vf.invoke('_ol', [element]);
                }
                history_1["l2"](history_1['mx'], props.ename, element.id + 'mP' + key, 500);
            }
        };
        img.onload = setSize;
        img.src = props[key];
        if (img.complete) {
            setSize();
        }
    }
});

});