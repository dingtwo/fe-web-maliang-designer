/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/61/element",["51","../../50/53","../../50/enum","../../50/5d","../../50/61","../../50/5q","../../50/54","58/6j/index","58/71/index","58/6l/index","58/6n/style","58/6g/index","58/6n/align","58/6k/index","58/6o/index","58/6u/index","58/6s/index","58/6i/style","58/6h/style","58/6h/h-operate","58/6h/v-operate","58/6i/operate","58/6i/border","58/6t/operate","58/6v/operate","58/6h/h-size","58/6h/v-size","58/6i/size","58/6i/share","58/6i/content","58/6t/content","58/70/index","58/70/help","58/73/kp","58/73/mod","58/6p/index","58/6m/operate","58/6m/content","58/6l/series","58/6p/fx","58/6q/items"],(require,exports,module)=>{
require("58/6j/index");
require("58/71/index");
require("58/6l/index");
require("58/6n/style");
require("58/6g/index");
require("58/6n/align");
require("58/6k/index");
require("58/6o/index");
require("58/6u/index");
require("58/6s/index");
require("58/6i/style");
require("58/6h/style");
require("58/6h/h-operate");
require("58/6h/v-operate");
require("58/6i/operate");
require("58/6i/border");
require("58/6t/operate");
require("58/6v/operate");
require("58/6h/h-size");
require("58/6h/v-size");
require("58/6i/size");
require("58/6i/share");
require("58/6i/content");
require("58/6t/content");
require("58/70/index");
require("58/70/help");
require("58/73/kp");
require("58/73/mod");
require("58/6p/index");
require("58/6m/operate");
require("58/6m/content");
require("58/6l/series");
require("58/6p/fx");
require("58/6q/items");
let $quick_iB_3_static_node;
let $quick_iB_5_static_node;
let $quick_iB_0_static_attr={'class': 'rd-g3 rd-gz rd-ir rd-mB rd-mD',};
let $quick_iB_1_static_attr={'class': 'rd-g9 rd-ha rd-mC',};
let $quick_iB_2_static_attr={'class': 'rd-gR rd-hM',};
let $quick_iB_4_static_attr={'class': 'rd-g9 rd-gP rd-gx rd-ha rd-hw',};
let $special_2={'checked':'checked',};
let $special_4={'value':'value',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let const_1 = require("../../50/53");
let enum_1 = require("../../50/enum");
let history_1 = require("../../50/5d");
let props_1 = require("../../50/61");
let stage_generic_1 = require("../../50/5q");
let transform_1 = require("../../50/54");
let { State, View, node, Vframe, config, mark } = magix_1;
//import StageGeneric from '../../50/5q';
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
$vnode_1=[];$vnode_3=[$createVNode(0,(i18n('oo')))];$vnode_2=[$createVNode('span',$quick_iB_2_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(e.ctrl.title)))];$vnode_2.push($createVNode('span',0,$vnode_3));$vnode_1.push($createVNode('li',$quick_iB_1_static_attr,$vnode_2));let ctrl=e.ctrl,props=e.props;;
for(let $q_a_gbxbe=ctrl.props,$q_c_plodixwko=$q_a_gbxbe.length,$q_key_epyhjmyq=0;$q_key_epyhjmyq<$q_c_plodixwko;$q_key_epyhjmyq+=1){
let p=$q_a_gbxbe[$q_key_epyhjmyq];

if(p.type&&(!p['_jN']||p['_jN'](props))){

if(p.type==propTypes['gE']){

if($quick_iB_3_static_node){
$vnode_1.push($quick_iB_3_static_node);
}else{
$vnode_1.push($quick_iB_3_static_node=$createVNode('li',{'_': 'eD','class': 'rd-g7',}));
}

}else{
let data=props[p.key];;
if(p.read){
data=p.read(data,props);;
}$vnode_2=[];
if(p.tip&&(he||p.type!=propTypes['gy'])){
$vnode_3=[$createVNode(0,(i18n(p.tip)))];$vnode_2.push($createVNode('span',$quick_iB_2_static_attr,$vnode_3));
}$text='';let locked=props.locked || (p.key=='x'&&props.pinX) || (p.key=='y'&&props.pinY) || (p.key=='rotate'&&(props.pinX||props.pinY));;$text+=' ';let pType=p.type,dyanmicType=p['_kH'];;
if(dyanmicType){
pType=pType(props);
}
if(pType==propTypes['gp']){
$vnode_3=[$createVNode(0,(data))];;$$_class='';if(locked){;$$_class+='rd-hX';};$vnode_2.push($createVNode('span',{'class': $$_class,},$vnode_3));
}else if(pType==propTypes['gd']){
;$$_mx5$_view='58/6j/index?value='+$keyOf($refData,data,'eD.'+(p.key)+'.eE');if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'eF.'+($q_key_epyhjmyq)+'.eG');};$$_mx5$_view+='&props='+$keyOf($refData,props,'eH');if(($temp_var=p.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'eF.'+($q_key_epyhjmyq)+'.eI');};if(($temp_var=p.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'eF.'+($q_key_epyhjmyq)+'.eJ');};if(($temp_var=p.min)!=null){;$$_mx5$_view+='&min='+$keyOf($refData,$temp_var,'eF.'+($q_key_epyhjmyq)+'.eK');};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-gW rd-gg rd-hj','disabled': (locked),'mx5-input': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'value\',element:\''+$keyOf($refData,e,'eL')+'\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_epyhjmyq)+'.eM')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['gz']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-input': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'range\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/71/index?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,data,'eD.'+(p.key)+'.eE'),}));
}else if(pType==propTypes['ge']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-input': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'color\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6l/index?clear='+($encodeUrl(p.clear))+'&color='+$keyOf($refData,data,'eD.'+(p.key)+'.eE')+'&align=right&disabled='+($encodeUrl(locked))+'&alpha='+($encodeUrl(p.alpha)),}));
}else if(pType==propTypes['gf']){
$vnode_3=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','checked': (data),'disabled': (locked&&!p.free),'mx5-change': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',native:\'checked\',element:\''+$keyOf($refData,e,'eL')+'\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_epyhjmyq)+'.eM')+'\'})',},1,$special_2)];
if($quick_iB_5_static_node){
$vnode_3.push($quick_iB_5_static_node);
}else{
$vnode_3.push($quick_iB_5_static_node=$createVNode('i',{'_': 'eE','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_2.push($createVNode('label',$quick_iB_4_static_attr,$vnode_3));
}else if(pType==propTypes['gi']){
$vnode_2.push($createVNode('textarea',{'class': 'rd-gh rd-hj rd-hm','disabled': (locked),'mx5-input': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',native:\'value\',element:\''+$keyOf($refData,e,'eL')+'\'})','value': (data),},0,$special_4));
}else if(pType==propTypes['gg']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-g9 rd-hj','mx5-input': $viewId+'_lu({use:\'_\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6n/style?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gh']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-g9 rd-hj','mx5-input': $viewId+'_lu({use:\'_\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6g/index?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gN']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-g9 rd-hj','mx5-input': $viewId+'_lu({use:\'_\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6n/align?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,props,'eH')+'&alignKey='+($encodeUrl(p.key)),}));
}else if(pType==propTypes['gk']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'value\',element:\''+$keyOf($refData,e,'eL')+'\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_epyhjmyq)+'.eM')+'\'})','mx5-view': '58/6k/index?disabled='+$keyOf($refData,locked)+'&selected='+($encodeUrl(data))+'&list='+$keyOf($refData,p.items,'eF.'+($q_key_epyhjmyq)+'.eN')+'&iconKey=icon&textKey='+($encodeUrl(p.textKey||'text'))+'&valueKey='+($encodeUrl(p.valueKey||'value')),}));
}else if(pType==propTypes['gj']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'src\',element:\''+$keyOf($refData,e,'eL')+'\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_epyhjmyq)+'.eM')+'\'})','mx5-view': '58/6o/index?src='+($encodeUrl(data))+'&disabled='+$keyOf($refData,locked),}));
}else if(pType==propTypes['gl']){
$vnode_3=[$createVNode(0,(i18n('nm')))];$vnode_2.push($createVNode('button',{'class': 'rd-gS rd-gk rd-gm rd-hw','disabled': (locked),'mx5-click': $viewId+'_oQ({key:\''+($encodeQuote(p.key))+'\',element:\''+$keyOf($refData,e,'eL')+'\'})',},$vnode_3));
}else if(pType==propTypes['gm']){
$vnode_2.push($createVNode('input',{'class': 'rd-gg','value': (data),'disabled': (locked),'mx5-input': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',native:\'value\',element:\''+$keyOf($refData,e,'eL')+'\'})',},1,$special_4));
}else if(pType==propTypes['gn']){
;$$_mx5$_view='58/6u/index?data='+$keyOf($refData,data,'eD.'+(p.key)+'.eE');if(($temp_var=p.max)){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'eF.'+($q_key_epyhjmyq)+'.eG');};$$_mx5$_view+='&disabled='+$keyOf($refData,locked);$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'bindField\',element:\''+$keyOf($refData,e,'eL')+'\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_epyhjmyq)+'.eM')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['go']){
;$$_mx5$_view='58/6s/index?';if(($temp_var=p.min)!=null){;$$_mx5$_view+='min='+$keyOf($refData,$temp_var,'eF.'+($q_key_epyhjmyq)+'.eK');};if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'eF.'+($q_key_epyhjmyq)+'.eG');};$$_mx5$_view+='&columns='+$keyOf($refData,data,'eD.'+(p.key)+'.eE')+'&fields='+$keyOf($refData,props.bind.fields,'eO')+'&disabled='+$keyOf($refData,locked);$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'columns\',element:\''+$keyOf($refData,e,'eL')+'\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_epyhjmyq)+'.eM')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['gq']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'skin\',element:\''+$keyOf($refData,e,'eL')+'\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_epyhjmyq)+'.eM')+'\'})','mx5-view': '58/6i/style?disabled='+$keyOf($refData,locked),}));
}else if(pType==propTypes['gs']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'_lu({use:\'rows\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6h/style?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gu']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6h/h-operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gw']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6h/v-operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gr']){
;$$_mx5$_view='58/6i/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH');if(($temp_var=p['_je'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['gI']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6i/border?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gG']){
;$$_mx5$_view='58/6t/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH');if(($temp_var=p['_je'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',operate:1,size:1,element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['gQ']){
;$$_mx5$_view='58/6v/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH');if(($temp_var=p['_je'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',operate:1,size:1,element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['gt']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6h/h-size?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gx']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6h/v-size?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gv']){
;$$_mx5$_view='58/6i/size?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH');if(($temp_var=p['_oR'])!=null){;$$_mx5$_view+='&ah='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['gR']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6i/share?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH')+'&dataPad='+$keyOf($refData,p.dataPad,'eF.'+($q_key_epyhjmyq)+'.eP'),}));
}else if(pType==propTypes['gF']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hl','mx5-change': $viewId+'_lu({use:\'rows\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6i/content?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gH']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hl','mx5-change': $viewId+'_lu({use:\'rows\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6t/content?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH'),}));
}else if(he&&pType==propTypes['gy']){
$vnode_3=[$createVNode(0,(data))];$vnode_2.push($createVNode('a',{'href': '//'+(data),'class': 'rd-g6 rd-gA rd-hj','title': (data),'target': '_blank','rel': 'noopener noreferrer',},$vnode_3));
}else if(pType==propTypes['gA']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'_lu({use:\'data\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/70/index?disabled='+$keyOf($refData,locked)+'&data='+$keyOf($refData,data,'eD.'+(p.key)+'.eE'),}));
}else if(pType==propTypes['gB']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hl','mx5-change': $viewId+'_lu({use:\'data\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/70/help?disabled='+$keyOf($refData,locked)+'&data='+$keyOf($refData,data,'eD.'+(p.key)+'.eE'),}));
}else if(pType==propTypes['gC']){
;$$_mx5$_view='58/73/kp?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH');if(($temp_var=p.mod)!=null){;$$_mx5$_view+='&mod='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hl','mx5-change': $viewId+'_lu({use:\'kp\',element:\''+$keyOf($refData,e,'eL')+'\',kp:1})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['gD']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hl','mx5-change': $viewId+'_lu({use:\'mod\',element:\''+$keyOf($refData,e,'eL')+'\',mod:1})','mx5-view': '58/73/mod?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gJ']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'format\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6p/index?format='+$keyOf($refData,data,'eD.'+(p.key)+'.eE')+'&disabled='+$keyOf($refData,locked),}));
}else if(pType==propTypes['gL']){
;$$_mx5$_view='58/6m/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH');if(($temp_var=p['_je'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['gM']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hl','mx5-change': $viewId+'_lu({use:\'rows\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6m/content?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'eH'),}));
}else if(pType==propTypes['gO']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({use:\'colors\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6l/series?colors='+$keyOf($refData,data,'eD.'+(p.key)+'.eE')+'&disabled='+$keyOf($refData,locked)+'&multi='+$keyOf($refData,p.multi,'eF.'+($q_key_epyhjmyq)+'.eQ'),}));
}else if(pType==propTypes['gK']){
;$$_mx5$_view='58/6p/fx?format='+$keyOf($refData,data,'eD.'+(p.key)+'.eE')+'&disabled='+$keyOf($refData,locked);if(($temp_var=p['_mF'])){;$$_mx5$_view+='&defaultFx='+$keyOf($refData,$temp_var,'eF.'+($q_key_epyhjmyq)+'.eR');};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'format\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['gP']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'_lu({use:\'items\',element:\''+$keyOf($refData,e,'eL')+'\'})','mx5-view': '58/6q/items?items='+$keyOf($refData,data,'eD.'+(p.key)+'.eE')+'&disabled='+$keyOf($refData,locked)+'&mutual='+$keyOf($refData,p.mutual&&p.mutual(props),'eF.'+($q_key_epyhjmyq)+'.eS'),}));
};$$_class='rd-mC rd-g9 ';if(p['_ka']){;$$_class+='rd-hO';}else{;$$_class+='rd-ha';};$vnode_1.push($createVNode('li',{'class': $$_class,},$vnode_2));
}
}
}$vnode_0=[$createVNode('ul',$quick_iB_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_gn'](this.render, 30);
        State.on('gf', update);
        State.on('gi', update);
        State.on('gg', update);
        this.on('destroy', () => {
            State.off('gf', update);
            State.off('gi', update);
            State.off('gg', update);
        });
        this.set({
            he: config('helpElement'),
            propTypes: props_1
        });
    },
    async render() {
        let selectElements = State.get('gd');
        let single = selectElements.length == 1;
        if (single) {
            this.digest({
                e: selectElements[0]
            });
        }
    },
    async '_lu<input,change>'(e) {
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
                let oldRotatedRect = transform_1['ge'](props);
                cachedOld = oldRotatedRect['_ig'][0];
            }
            if (resetXY) {
                old = cachedOld;
            }
            let updatePosition = key == 'x' || key == 'y';
            let oldWidth = props.width, oldHeight = props.height;
            let v = native ? e.eventTarget[native] : e[use];
            let updateMarker = mark(this, '_he');
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
                    let linkage = State.get('gs');
                    if (linkage) {
                        let groups = State.get('go');
                        let sameGroups = groups[id];
                        if (sameGroups) {
                            let { 'ge': allMap } = stage_generic_1['gd']();
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
                            let moveProps = ctrl['_iy'];
                            if (ctrl['_iz']) {
                                moveProps = ctrl['_iy'](props);
                            }
                            for (let m of moveProps) {
                                if (m.use == key) {
                                    props[m.key] += positionOffset;
                                }
                            }
                            if (ctrl['_he']) {
                                ctrl['_he'](props, old, 1);
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
                        (ctrl['_iV'] & enum_1['gv'])) {
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
                    if (ctrl['_he']) {
                        ctrl['_he'](props, old, 1);
                    }
                    if (old) {
                        let newRotatedRect = transform_1['ge'](props);
                        let n = newRotatedRect['_ig'][0];
                        props.x += old.x - n.x;
                        props.y += old.y - n.y;
                    }
                    changed = 1;
                }
                else {
                    if (ctrl['_he']) {
                        ctrl['_he'](props, old, 1);
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
            State.fire('gf', {
                '_hW': changedIds,
                '_hX': changedTypes,
                '_ge': changedProps
            });
            for (let me of moveElements) {
                let n = node(me.id);
                if (n) {
                    let vf = Vframe.byNode(n);
                    if (vf) {
                        vf.invoke('_iA', [me]);
                    }
                }
            }
            //非svg控制点的处理,才记录历史记录
            if (!e['_nG']) {
                let type;
                if (key == 'x' ||
                    key == 'y') {
                    type = history_1['gv'];
                }
                else if ((size && !operate) ||
                    key == 'width' ||
                    key == 'height' ||
                    key == 'rx' ||
                    key == 'ry' ||
                    key == 'r' ||
                    key == 'tfootSpacing') {
                    type = history_1['gJ'];
                }
                else if (key == 'rotate') {
                    type = history_1['gG'];
                }
                else if (kp) {
                    type = history_1['gH'];
                }
                else if (mod) {
                    type = history_1['gI'];
                }
                else if (key == 'locked') {
                    type = props.locked ? history_1['gC'] : history_1['gD'];
                }
                else {
                    type = history_1['gK'];
                }
                let ename = stage_generic_1['gp']([element]);
                history_1["gd"](type, ename, element.id + 'g1' + key, 500);
            }
        }
    },
    '_oQ<click>'(e) {
        let m = mark(this, '_oP');
        let { key, element } = e.params;
        let { props, ctrl } = element;
        let oldRotatedRect = transform_1['ge'](props);
        let old = oldRotatedRect['_ig'][0];
        let img = new Image();
        let setSize = () => {
            let newWidth = const_1['ge'](img.width), newHeight = const_1['ge'](img.height);
            if (m() &&
                (newWidth != props.width ||
                    newHeight != props.height)) {
                props.width = newWidth;
                props.height = newHeight;
                let newRotatedRect = transform_1['ge'](props);
                let n = newRotatedRect['_ig'][0];
                props.x += old.x - n.x;
                props.y += old.y - n.y;
                if (ctrl['_he']) {
                    ctrl['_he'](props);
                }
                this.render();
                State.fire('gf', {
                    '_hW': {
                        [element.id]: 1
                    },
                    '_hX': {
                        [element.type]: 1
                    },
                    '_ge': {
                        '_gf': 1
                    }
                });
                let n1 = node(element.id);
                let vf = Vframe.byNode(n1);
                if (vf) {
                    vf.invoke('_iA', [element]);
                }
                history_1["gd"](history_1['gJ'], props.ename, element.id + 'g1' + key, 500);
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