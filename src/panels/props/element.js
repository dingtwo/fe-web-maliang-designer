/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/5e/element",["4e","../../4d/4g","../../4d/enum","../../4d/4q","../../4d/5e","../../4d/57","../../4d/4h","4l/60/index","4l/6e/index","4l/62/index","4l/64/style","4l/5t/index","4l/64/align","4l/61/index","4l/65/index","4l/6b/index","4l/69/index","4l/5v/style","4l/5u/style","4l/5u/h-operate","4l/5u/v-operate","4l/5v/operate","4l/5v/border","4l/6a/operate","4l/6c/operate","4l/5u/h-size","4l/5u/v-size","4l/5v/size","4l/5v/share","4l/5v/content","4l/6a/content","4l/6d/index","4l/6d/help","4l/6g/kp","4l/6g/mod","4l/66/index","4l/63/operate","4l/63/content","4l/62/series","4l/66/fx","4l/67/items"],(require,exports,module)=>{
require("4l/60/index");
require("4l/6e/index");
require("4l/62/index");
require("4l/64/style");
require("4l/5t/index");
require("4l/64/align");
require("4l/61/index");
require("4l/65/index");
require("4l/6b/index");
require("4l/69/index");
require("4l/5v/style");
require("4l/5u/style");
require("4l/5u/h-operate");
require("4l/5u/v-operate");
require("4l/5v/operate");
require("4l/5v/border");
require("4l/6a/operate");
require("4l/6c/operate");
require("4l/5u/h-size");
require("4l/5u/v-size");
require("4l/5v/size");
require("4l/5v/share");
require("4l/5v/content");
require("4l/6a/content");
require("4l/6d/index");
require("4l/6d/help");
require("4l/6g/kp");
require("4l/6g/mod");
require("4l/66/index");
require("4l/63/operate");
require("4l/63/content");
require("4l/62/series");
require("4l/66/fx");
require("4l/67/items");
let $quick_f2_3_static_node;
let $quick_f2_5_static_node;
let $quick_f2_0_static_attr={'class': 'rd-d0 rd-et rd-fS rd-j2 rd-j4',};
let $quick_f2_1_static_attr={'class': 'rd-eB rd-ez rd-j3',};
let $quick_f2_2_static_attr={'class': 'rd-eh rd-fc',};
let $quick_f2_4_static_attr={'class': 'rd-dY rd-eB rd-eX rd-ef rd-ez',};
let $special_2={'checked':'checked',};
let $special_4={'value':'value',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let enum_1 = require("../../4d/enum");
let history_1 = require("../../4d/4q");
let props_1 = require("../../4d/5e");
let stage_generic_1 = require("../../4d/57");
let transform_1 = require("../../4d/4h");
let { State, View, node, Vframe, config, mark } = magix_1;
//import StageGeneric from '../../4d/57';
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
$vnode_1=[];$vnode_3=[$createVNode(0,(i18n('lP')))];$vnode_2=[$createVNode('span',$quick_f2_2_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(e.ctrl.title)))];$vnode_2.push($createVNode('span',0,$vnode_3));$vnode_1.push($createVNode('li',$quick_f2_1_static_attr,$vnode_2));let ctrl=e.ctrl,props=e.props;;
for(let $q_a_fwplrcxs=ctrl.props,$q_c_rocvviyj=$q_a_fwplrcxs.length,$q_key_nuvvntwg=0;$q_key_nuvvntwg<$q_c_rocvviyj;$q_key_nuvvntwg+=1){
let p=$q_a_fwplrcxs[$q_key_nuvvntwg];

if(p.type&&(!p['_ha']||p['_ha'](props))){

if(p.type==propTypes['d5']){

if($quick_f2_3_static_node){
$vnode_1.push($quick_f2_3_static_node);
}else{
$vnode_1.push($quick_f2_3_static_node=$createVNode('li',{'_': 'cH','class': 'rd-ex',}));
}

}else{
let data=props[p.key];;
if(p.read){
data=p.read(data,props);;
}$vnode_2=[];
if(p.tip&&(he||p.type!=propTypes['dZ'])){
$vnode_3=[$createVNode(0,(i18n(p.tip)))];$vnode_2.push($createVNode('span',$quick_f2_2_static_attr,$vnode_3));
}$text='';let locked=props.locked || (p.key=='x'&&props.pinX) || (p.key=='y'&&props.pinY) || (p.key=='rotate'&&(props.pinX||props.pinY));;$text+=' ';let pType=p.type,dyanmicType=p['_h5'];;
if(dyanmicType){
pType=pType(props);
}
if(pType==propTypes['dQ']){
$vnode_3=[$createVNode(0,(data))];;$$_class='';if(locked){;$$_class+='rd-fn';};$vnode_2.push($createVNode('span',{'class': $$_class,},$vnode_3));
}else if(pType==propTypes['dE']){
;$$_mx5$_view='4l/60/index?value='+$keyOf($refData,data,'cH.'+(p.key)+'.cI');if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'cJ.'+($q_key_nuvvntwg)+'.cK');};$$_mx5$_view+='&props='+$keyOf($refData,props,'cL');if(($temp_var=p.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'cJ.'+($q_key_nuvvntwg)+'.cM');};if(($temp_var=p.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'cJ.'+($q_key_nuvvntwg)+'.cN');};if(($temp_var=p.min)!=null){;$$_mx5$_view+='&min='+$keyOf($refData,$temp_var,'cJ.'+($q_key_nuvvntwg)+'.cO');};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-dH rd-eK rd-em','disabled': (locked),'mx5-input': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'value\',element:\''+$keyOf($refData,e,'cP')+'\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_nuvvntwg)+'.cQ')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['d0']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-input': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'range\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/6e/index?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,data,'cH.'+(p.key)+'.cI'),}));
}else if(pType==propTypes['dF']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-input': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'color\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/62/index?clear='+($encodeUrl(p.clear))+'&color='+$keyOf($refData,data,'cH.'+(p.key)+'.cI')+'&align=right&disabled='+($encodeUrl(locked))+'&alpha='+($encodeUrl(p.alpha)),}));
}else if(pType==propTypes['dG']){
$vnode_3=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','checked': (data),'disabled': (locked&&!p.free),'mx5-change': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',native:\'checked\',element:\''+$keyOf($refData,e,'cP')+'\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_nuvvntwg)+'.cQ')+'\'})',},1,$special_2)];
if($quick_f2_5_static_node){
$vnode_3.push($quick_f2_5_static_node);
}else{
$vnode_3.push($quick_f2_5_static_node=$createVNode('i',{'_': 'cI','class': 'rd-em rd-et rd-fg',}));
}
$vnode_2.push($createVNode('label',$quick_f2_4_static_attr,$vnode_3));
}else if(pType==propTypes['dJ']){
$vnode_2.push($createVNode('textarea',{'class': 'rd-dI rd-eK rd-eN','disabled': (locked),'mx5-input': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',native:\'value\',element:\''+$keyOf($refData,e,'cP')+'\'})','value': (data),},0,$special_4));
}else if(pType==propTypes['dH']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK rd-ez','mx5-input': $viewId+'_iS({use:\'_\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/64/style?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['dI']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK rd-ez','mx5-input': $viewId+'_iS({use:\'_\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/5t/index?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['ed']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK rd-ez','mx5-input': $viewId+'_iS({use:\'_\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/64/align?disabled='+$keyOf($refData,locked)+'&value='+$keyOf($refData,props,'cL')+'&alignKey='+($encodeUrl(p.key)),}));
}else if(pType==propTypes['dL']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'value\',element:\''+$keyOf($refData,e,'cP')+'\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_nuvvntwg)+'.cQ')+'\'})','mx5-view': '4l/61/index?disabled='+$keyOf($refData,locked)+'&selected='+($encodeUrl(data))+'&list='+$keyOf($refData,p.items,'cJ.'+($q_key_nuvvntwg)+'.cR')+'&iconKey=icon&textKey='+($encodeUrl(p.textKey||'text'))+'&valueKey='+($encodeUrl(p.valueKey||'value')),}));
}else if(pType==propTypes['dK']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'src\',element:\''+$keyOf($refData,e,'cP')+'\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_nuvvntwg)+'.cQ')+'\'})','mx5-view': '4l/65/index?src='+($encodeUrl(data))+'&disabled='+$keyOf($refData,locked),}));
}else if(pType==propTypes['dM']){
$vnode_3=[$createVNode(0,(i18n('kO')))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-ei','disabled': (locked),'mx5-click': $viewId+'_md({key:\''+($encodeQuote(p.key))+'\',element:\''+$keyOf($refData,e,'cP')+'\'})',},$vnode_3));
}else if(pType==propTypes['dN']){
$vnode_2.push($createVNode('input',{'class': 'rd-dH','value': (data),'disabled': (locked),'mx5-input': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',native:\'value\',element:\''+$keyOf($refData,e,'cP')+'\'})',},1,$special_4));
}else if(pType==propTypes['dO']){
;$$_mx5$_view='4l/6b/index?data='+$keyOf($refData,data,'cH.'+(p.key)+'.cI');if(($temp_var=p.max)){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'cJ.'+($q_key_nuvvntwg)+'.cK');};$$_mx5$_view+='&disabled='+$keyOf($refData,locked);$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'bindField\',element:\''+$keyOf($refData,e,'cP')+'\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_nuvvntwg)+'.cQ')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['dP']){
;$$_mx5$_view='4l/69/index?';if(($temp_var=p.min)!=null){;$$_mx5$_view+='min='+$keyOf($refData,$temp_var,'cJ.'+($q_key_nuvvntwg)+'.cO');};if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'cJ.'+($q_key_nuvvntwg)+'.cK');};$$_mx5$_view+='&columns='+$keyOf($refData,data,'cH.'+(p.key)+'.cI')+'&fields='+$keyOf($refData,props.bind.fields,'cS')+'&disabled='+$keyOf($refData,locked);$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'columns\',element:\''+$keyOf($refData,e,'cP')+'\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_nuvvntwg)+'.cQ')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['dR']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'skin\',element:\''+$keyOf($refData,e,'cP')+'\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_nuvvntwg)+'.cQ')+'\'})','mx5-view': '4l/5v/style?disabled='+$keyOf($refData,locked),}));
}else if(pType==propTypes['dT']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'_iS({use:\'rows\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/5u/style?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['dV']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/5u/h-operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['dX']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/5u/v-operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['dS']){
;$$_mx5$_view='4l/5v/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL');if(($temp_var=p['_gC'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['d9']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/5v/border?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['d7']){
;$$_mx5$_view='4l/6a/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL');if(($temp_var=p['_gC'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',operate:1,size:1,element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['eg']){
;$$_mx5$_view='4l/6c/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL');if(($temp_var=p['_gC'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',operate:1,size:1,element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['dU']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/5u/h-size?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['dY']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/5u/v-size?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['dW']){
;$$_mx5$_view='4l/5v/size?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL');if(($temp_var=p['_me'])!=null){;$$_mx5$_view+='&ah='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['eh']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',size:1,element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/5v/share?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL')+'&dataPad='+$keyOf($refData,p.dataPad,'cJ.'+($q_key_nuvvntwg)+'.cT'),}));
}else if(pType==propTypes['d6']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eM','mx5-change': $viewId+'_iS({use:\'rows\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/5v/content?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['d8']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eM','mx5-change': $viewId+'_iS({use:\'rows\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/6a/content?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL'),}));
}else if(he&&pType==propTypes['dZ']){
$vnode_3=[$createVNode(0,(data))];$vnode_2.push($createVNode('a',{'href': '//'+(data),'class': 'rd-d1 rd-eK rd-ew','title': (data),'target': '_blank','rel': 'noopener noreferrer',},$vnode_3));
}else if(pType==propTypes['d1']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'_iS({use:\'data\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/6d/index?disabled='+$keyOf($refData,locked)+'&data='+$keyOf($refData,data,'cH.'+(p.key)+'.cI'),}));
}else if(pType==propTypes['d2']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eM','mx5-change': $viewId+'_iS({use:\'data\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/6d/help?disabled='+$keyOf($refData,locked)+'&data='+$keyOf($refData,data,'cH.'+(p.key)+'.cI'),}));
}else if(pType==propTypes['d3']){
;$$_mx5$_view='4l/6g/kp?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL');if(($temp_var=p.mod)!=null){;$$_mx5$_view+='&mod='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eM','mx5-change': $viewId+'_iS({use:\'kp\',element:\''+$keyOf($refData,e,'cP')+'\',kp:1})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['d4']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eM','mx5-change': $viewId+'_iS({use:\'mod\',element:\''+$keyOf($refData,e,'cP')+'\',mod:1})','mx5-view': '4l/6g/mod?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['e_']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'format\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/66/index?format='+$keyOf($refData,data,'cH.'+(p.key)+'.cI')+'&disabled='+$keyOf($refData,locked),}));
}else if(pType==propTypes['eb']){
;$$_mx5$_view='4l/63/operate?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL');if(($temp_var=p['_gC'])!=null){;$$_mx5$_view+='&sub='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'rows\',size:1,operate:1,element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['ec']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eM','mx5-change': $viewId+'_iS({use:\'rows\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/63/content?disabled='+$keyOf($refData,locked)+'&props='+$keyOf($refData,props,'cL'),}));
}else if(pType==propTypes['ee']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({use:\'colors\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/62/series?colors='+$keyOf($refData,data,'cH.'+(p.key)+'.cI')+'&disabled='+$keyOf($refData,locked)+'&multi='+$keyOf($refData,p.multi,'cJ.'+($q_key_nuvvntwg)+'.cU'),}));
}else if(pType==propTypes['ea']){
;$$_mx5$_view='4l/66/fx?format='+$keyOf($refData,data,'cH.'+(p.key)+'.cI')+'&disabled='+$keyOf($refData,locked);if(($temp_var=p['_j3'])){;$$_mx5$_view+='&defaultFx='+$keyOf($refData,$temp_var,'cJ.'+($q_key_nuvvntwg)+'.cV');};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'format\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': $$_mx5$_view,}));
}else if(pType==propTypes['ef']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'_iS({use:\'items\',element:\''+$keyOf($refData,e,'cP')+'\'})','mx5-view': '4l/67/items?items='+$keyOf($refData,data,'cH.'+(p.key)+'.cI')+'&disabled='+$keyOf($refData,locked)+'&mutual='+$keyOf($refData,p.mutual&&p.mutual(props),'cJ.'+($q_key_nuvvntwg)+'.cW'),}));
};$$_class='rd-j3 rd-ez ';if(p['_hy']){;$$_class+='rd-fe';}else{;$$_class+='rd-eB';};$vnode_1.push($createVNode('li',{'class': $$_class,},$vnode_2));
}
}
}$vnode_0=[$createVNode('ul',$quick_f2_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_dO'](this.render, 30);
        State.on('dG', update);
        State.on('dJ', update);
        State.on('dH', update);
        this.on('destroy', () => {
            State.off('dG', update);
            State.off('dJ', update);
            State.off('dH', update);
        });
        this.set({
            he: config('helpElement'),
            propTypes: props_1
        });
    },
    async render() {
        let selectElements = State.get('dE');
        let single = selectElements.length == 1;
        if (single) {
            this.digest({
                e: selectElements[0]
            });
        }
    },
    async '_iS<input,change>'(e) {
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
                let oldRotatedRect = transform_1['dF'](props);
                cachedOld = oldRotatedRect['_fE'][0];
            }
            if (resetXY) {
                old = cachedOld;
            }
            let updatePosition = key == 'x' || key == 'y';
            let oldWidth = props.width, oldHeight = props.height;
            let v = native ? e.eventTarget[native] : e[use];
            let updateMarker = mark(this, '_eF');
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
                    let linkage = State.get('dT');
                    if (linkage) {
                        let groups = State.get('dP');
                        let sameGroups = groups[id];
                        if (sameGroups) {
                            let { 'dF': allMap } = stage_generic_1['dE']();
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
                            let moveProps = ctrl['_fW'];
                            if (ctrl['_fX']) {
                                moveProps = ctrl['_fW'](props);
                            }
                            for (let m of moveProps) {
                                if (m.use == key) {
                                    props[m.key] += positionOffset;
                                }
                            }
                            if (ctrl['_eF']) {
                                ctrl['_eF'](props, old, 1);
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
                        (ctrl['_gi'] & enum_1['dW'])) {
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
                    if (ctrl['_eF']) {
                        ctrl['_eF'](props, old, 1);
                    }
                    if (old) {
                        let newRotatedRect = transform_1['dF'](props);
                        let n = newRotatedRect['_fE'][0];
                        props.x += old.x - n.x;
                        props.y += old.y - n.y;
                    }
                    changed = 1;
                }
                else {
                    if (ctrl['_eF']) {
                        ctrl['_eF'](props, old, 1);
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
            State.fire('dG', {
                '_fm': changedIds,
                '_fn': changedTypes,
                '_dF': changedProps
            });
            for (let me of moveElements) {
                let n = node(me.id);
                if (n) {
                    let vf = Vframe.byNode(n);
                    if (vf) {
                        vf.invoke('_fY', [me]);
                    }
                }
            }
            //非svg控制点的处理,才记录历史记录
            if (!e['_k4']) {
                let type;
                if (key == 'x' ||
                    key == 'y') {
                    type = history_1['dW'];
                }
                else if ((size && !operate) ||
                    key == 'width' ||
                    key == 'height' ||
                    key == 'rx' ||
                    key == 'ry' ||
                    key == 'r' ||
                    key == 'tfootSpacing') {
                    type = history_1['e_'];
                }
                else if (key == 'rotate') {
                    type = history_1['d7'];
                }
                else if (kp) {
                    type = history_1['d8'];
                }
                else if (mod) {
                    type = history_1['d9'];
                }
                else if (key == 'locked') {
                    type = props.locked ? history_1['d3'] : history_1['d4'];
                }
                else {
                    type = history_1['ea'];
                }
                let ename = stage_generic_1['dQ']([element]);
                history_1["dE"](type, ename, element.id + 'er' + key, 500);
            }
        }
    },
    '_md<click>'(e) {
        let m = mark(this, '_mc');
        let { key, element } = e.params;
        let { props, ctrl } = element;
        let oldRotatedRect = transform_1['dF'](props);
        let old = oldRotatedRect['_fE'][0];
        let img = new Image();
        let setSize = () => {
            let newWidth = const_1['dF'](img.width), newHeight = const_1['dF'](img.height);
            if (m() &&
                (newWidth != props.width ||
                    newHeight != props.height)) {
                props.width = newWidth;
                props.height = newHeight;
                let newRotatedRect = transform_1['dF'](props);
                let n = newRotatedRect['_fE'][0];
                props.x += old.x - n.x;
                props.y += old.y - n.y;
                if (ctrl['_eF']) {
                    ctrl['_eF'](props);
                }
                this.render();
                State.fire('dG', {
                    '_fm': {
                        [element.id]: 1
                    },
                    '_fn': {
                        [element.type]: 1
                    },
                    '_dF': {
                        '_dG': 1
                    }
                });
                let n1 = node(element.id);
                let vf = Vframe.byNode(n1);
                if (vf) {
                    vf.invoke('_fY', [element]);
                }
                history_1["dE"](history_1['e_'], props.ename, element.id + 'er' + key, 500);
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