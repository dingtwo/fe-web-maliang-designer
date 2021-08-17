/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/props/element",["magix5","../../designer/const","../../designer/enum","../../designer/history","../../designer/props","../../designer/stage-generic","../../designer/transform","gallery/mx-number/index","gallery/mx-range/index","gallery/mx-color/index","gallery/mx-font/style","gallery/mx-align/index","gallery/mx-font/align","gallery/mx-dropdown/index","gallery/mx-picture/index","gallery/mx-field/index","gallery/mx-column/index","gallery/mx-table/style","gallery/mx-box/style","gallery/mx-box/h-operate","gallery/mx-box/v-operate","gallery/mx-table/operate","gallery/mx-table/border","gallery/mx-dtable/operate","gallery/mx-ftable/operate","gallery/mx-box/h-size","gallery/mx-box/v-size","gallery/mx-table/size","gallery/mx-table/share","gallery/mx-table/content","gallery/mx-dtable/content","gallery/mx-fx/index","gallery/mx-fx/help","gallery/mx-svg/kp","gallery/mx-svg/mod","gallery/mx-format/index","gallery/mx-collect/operate","gallery/mx-collect/content","gallery/mx-color/series","gallery/mx-format/fx","gallery/mx-form/items"],(require,exports,module)=>{
require("gallery/mx-number/index");
require("gallery/mx-range/index");
require("gallery/mx-color/index");
require("gallery/mx-font/style");
require("gallery/mx-align/index");
require("gallery/mx-font/align");
require("gallery/mx-dropdown/index");
require("gallery/mx-picture/index");
require("gallery/mx-field/index");
require("gallery/mx-column/index");
require("gallery/mx-table/style");
require("gallery/mx-box/style");
require("gallery/mx-box/h-operate");
require("gallery/mx-box/v-operate");
require("gallery/mx-table/operate");
require("gallery/mx-table/border");
require("gallery/mx-dtable/operate");
require("gallery/mx-ftable/operate");
require("gallery/mx-box/h-size");
require("gallery/mx-box/v-size");
require("gallery/mx-table/size");
require("gallery/mx-table/share");
require("gallery/mx-table/content");
require("gallery/mx-dtable/content");
require("gallery/mx-fx/index");
require("gallery/mx-fx/help");
require("gallery/mx-svg/kp");
require("gallery/mx-svg/mod");
require("gallery/mx-format/index");
require("gallery/mx-collect/operate");
require("gallery/mx-collect/content");
require("gallery/mx-color/series");
require("gallery/mx-format/fx");
require("gallery/mx-form/items");
let $quick_dT_3_static_node;
let $quick_dT_5_static_node;
let $quick_dT_0_static_attr={'class': 'rd-_assets_index_less_-padding-4 rd-_assets_index_less_-tag-ul rd-_assets_index_less_-unselectable rd-_panels_props_index_less_-props rd-_panels_props_index_less_-props-padding-bottom',};
let $quick_dT_1_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_panels_props_index_less_-props-item',};
let $quick_dT_2_static_attr={'class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',};
let $quick_dT_4_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-label',};
let $special_2={'checked':'checked',};
let $special_4={'value':'value',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let enum_1 = require("../../designer/enum");
let history_1 = require("../../designer/history");
let props_1 = require("../../designer/props");
let stage_generic_1 = require("../../designer/stage-generic");
let transform_1 = require("../../designer/transform");
let { State, View, node, Vframe, config, mark } = magix_1;
//import StageGeneric from '../../designer/stage-generic';
//let { max, min } = Math;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
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
$vnode_1=[];$vnode_3=[$createVNode(0,($__line=4,$__art='{{=i18n(\'@:{lang#props.type~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#props.type~rs}\')%>',(i18n('@:{lang#props.type~rs}'))))];$vnode_2=[$createVNode('span',$quick_dT_2_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,($__line=5,$__art='{{=i18n(e.ctrl.title)}}',$__ctrl='<%=i18n(e.ctrl.title)%>',(i18n(e.ctrl.title))))];$vnode_2.push($createVNode('span',0,$vnode_3));$vnode_1.push($createVNode('li',$quick_dT_1_static_attr,$vnode_2));($__line=7,$__art='{{set {ctrl,props}=e}}','');$__ctrl='<%let ctrl=e.ctrl,props=e.props;%>';let ctrl=e.ctrl,props=e.props;;$__line=8;$__art="{{each ctrl.props as p}}";$__ctrl="for(let $q_a_bdvpeui=ctrl.props,$q_c_jjkpnffmz=$q_a_bdvpeui.length,$q_key_soierzg=0;$q_key_soierzg<$q_c_jjkpnffmz;$q_key_soierzg++){let p=$q_a_bdvpeui[$q_key_soierzg];";
for(let $q_a_bdvpeui=ctrl.props,$q_c_jjkpnffmz=$q_a_bdvpeui.length,$q_key_soierzg=0;$q_key_soierzg<$q_c_jjkpnffmz;$q_key_soierzg+=1){
let p=$q_a_bdvpeui[$q_key_soierzg];
$__line=9;$__art="{{if p.type&&(!p[\\'@:{if.show~rs}\\']||p[\\'@:{if.show}\\'](props))}}";$__ctrl="if(p.type&&(!p['@:{if.show~rs}']||p['@:{if.show~rs}'](props))){";
if(p.type&&(!p['@:{if.show~rs}']||p['@:{if.show~rs}'](props))){
$__line=10;$__art="{{if p.type==propTypes[\\'@:{eprops#spliter~rs}\\']}}";$__ctrl="if(p.type==propTypes['@:{eprops#spliter~rs}']){";
if(p.type==propTypes['@:{eprops#spliter~rs}']){

if($quick_dT_3_static_node){
$vnode_1.push($quick_dT_3_static_node);
}else{
$vnode_1.push($quick_dT_3_static_node=$createVNode('li',{'_': 'a@','class': 'rd-_assets_index_less_-item-spliter',}));
}

}else{
($__line=13,$__art='{{set data=props[p.key]}}','');$__ctrl='<%let data=props[p.key];%>';let data=props[p.key];;$__line=14;$__art="{{if p.read}}";$__ctrl="if(p.read){";
if(p.read){
($__line=15,$__art='{{data=p.read(data,props);}}','');$__ctrl='<%data=p.read(data,props);%>';data=p.read(data,props);;
}$vnode_2=[];$__line=18;$__art="{{if p.tip&&(he||p.type!=propTypes[\\'@:{eprops#link~rs}\\'])}}";$__ctrl="if(p.tip&&(he||p.type!=propTypes['@:{eprops#link~rs}'])){";
if(p.tip&&(he||p.type!=propTypes['@:{eprops#link~rs}'])){
$vnode_3=[$createVNode(0,($__line=20,$__art='{{=i18n(p.tip)}}',$__ctrl='<%=i18n(p.tip)%>',(i18n(p.tip))))];$vnode_2.push($createVNode('span',$quick_dT_2_static_attr,$vnode_3));
}$text=($__line=23,$__art='{{set locked=props.locked || (p.key==\'x\'&&props.pinX) || (p.key==\'y\'&&props.pinY) || (p.key==\'rotate\'&&(props.pinX||props.pinY))}}','');$__ctrl='<%let locked=props.locked || (p.key==\'x\'&&props.pinX) || (p.key==\'y\'&&props.pinY) || (p.key==\'rotate\'&&(props.pinX||props.pinY));%>';let locked=props.locked || (p.key=='x'&&props.pinX) || (p.key=='y'&&props.pinY) || (p.key=='rotate'&&(props.pinX||props.pinY));;$text+=' '+($__line=24,$__art='{{set {type:pType,\'@:{is.dynamic.type~rs}\':dyanmicType}=p}}','');$__ctrl='<%let pType=p.type,dyanmicType=p[\'@:{is.dynamic.type~rs}\'];%>';let pType=p.type,dyanmicType=p['@:{is.dynamic.type~rs}'];;$__line=25;$__art="{{if dyanmicType}}";$__ctrl="if(dyanmicType){";
if(dyanmicType){
($__line=26,$__art='{{pType=pType(props)}}','');$__ctrl='<%pType=pType(props)%>';pType=pType(props);
}$__line=28;$__art="{{if pType==propTypes[\\'@:{eprops#label~rs}\\']}}";$__ctrl="if(pType==propTypes['@:{eprops#label~rs}']){";
if(pType==propTypes['@:{eprops#label~rs}']){
$vnode_3=[$createVNode(0,($__line=29,$__art='{{=data}}',$__ctrl='<%=data%>',(data)))];;$$_class=($__line=29,$__art='{{if locked}}','');$__ctrl='<%if(locked){%>';if(locked){;$$_class+='rd-_assets_index_less_-color-999'+($__line=29,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('span',{'class': $$_class,},$vnode_3));
}else if(($__line=30,$__art="{{else if pType==propTypes[\\'@:{eprops#number~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#number~rs}']){"),pType==propTypes['@:{eprops#number~rs}']){
;$$_mx5$_view='gallery/mx-number/index?value='+($__line=31,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data'))+($__line=31,$__art='{{#p.max}}','');$__ctrl='<%if(($temp_var=p.max)!=null){%>';if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+($__ctrl='<%#$temp_var,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.max\'%>',$keyOf($refData,$temp_var,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.max'));$__ctrl='<%}%>';};$$_mx5$_view+='&props='+($__line=31,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props'))+($__line=31,$__art='{{#p.step}}','');$__ctrl='<%if(($temp_var=p.step)!=null){%>';if(($temp_var=p.step)!=null){;$$_mx5$_view+='&step='+($__ctrl='<%#$temp_var,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.step\'%>',$keyOf($refData,$temp_var,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.step'));$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=31,$__art='{{#p.fixed}}','');$__ctrl='<%if(($temp_var=p.fixed)!=null){%>';if(($temp_var=p.fixed)!=null){;$$_mx5$_view+='&fixed='+($__ctrl='<%#$temp_var,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.fixed\'%>',$keyOf($refData,$temp_var,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.fixed'));$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=31,$__art='{{#p.min}}','');$__ctrl='<%if(($temp_var=p.min)!=null){%>';if(($temp_var=p.min)!=null){;$$_mx5$_view+='&min='+($__ctrl='<%#$temp_var,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.min\'%>',$keyOf($refData,$temp_var,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.min'));$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=31,$__art='{{=locked}}',$__ctrl='<%=locked%>',locked),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/element.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=31,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'value\',element:\''+($__line=31,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\',write:\''+($__line=31,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.write'))+'\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=32,$__art="{{else if pType==propTypes[\\'@:{eprops#number.range~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#number.range~rs}']){"),pType==propTypes['@:{eprops#number.range~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=33,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'range\',element:\''+($__line=33,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-range/index?disabled='+($__line=33,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&value='+($__line=33,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data')),}));
}else if(($__line=34,$__art="{{else if pType==propTypes[\\'@:{eprops#color~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#color~rs}']){"),pType==propTypes['@:{eprops#color~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=35,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'color\',element:\''+($__line=35,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-color/index?clear='+($__line=35,$__art='{{=p.clear}}',$__ctrl='<%=$encodeUrl(p.clear)%>',($encodeUrl(p.clear)))+'&color='+($__line=35,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data'))+'&align=right&disabled='+($__line=35,$__art='{{=locked}}',$__ctrl='<%=$encodeUrl(locked)%>',($encodeUrl(locked)))+'&alpha='+($__line=35,$__art='{{=p.alpha}}',$__ctrl='<%=$encodeUrl(p.alpha)%>',($encodeUrl(p.alpha))),}));
}else if(($__line=36,$__art="{{else if pType==propTypes[\\'@:{eprops#boolean~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#boolean~rs}']){"),pType==propTypes['@:{eprops#boolean~rs}']){
$vnode_3=[$createVNode('input',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-switch-input','type': 'checkbox','checked': ($temp_var=($__line=38,$__art='{{=data}}',$__ctrl='<%=data%>',data),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/element.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'disabled': ($temp_var=($__line=38,$__art='{{=locked&&!p.free}}',$__ctrl='<%=locked&&!p.free%>',locked&&!p.free),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/element.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=38,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',native:\'checked\',element:\''+($__line=38,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\',write:\''+($__line=38,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.write'))+'\'})',},1,$special_2)];
if($quick_dT_5_static_node){
$vnode_3.push($quick_dT_5_static_node);
}else{
$vnode_3.push($quick_dT_5_static_node=$createVNode('i',{'_': 'a$','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-switch-button rd-_assets_index_less_-unselectable',}));
}
$vnode_2.push($createVNode('label',$quick_dT_4_static_attr,$vnode_3));
}else if(($__line=41,$__art="{{else if pType==propTypes[\\'@:{eprops#text.area~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#text.area~rs}']){"),pType==propTypes['@:{eprops#text.area~rs}']){
$vnode_2.push($createVNode('textarea',{'class': 'rd-_assets_index_less_-height-100 rd-_assets_index_less_-textarea rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=42,$__art='{{=locked}}',$__ctrl='<%=locked%>',locked),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/element.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=42,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',native:\'value\',element:\''+($__line=42,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','value': ($__line=42,$__art='{{=data}}',$__ctrl='<%=data%>',(data)),},0,$special_4));
}else if(($__line=43,$__art="{{else if pType==propTypes[\\'@:{eprops#font.style~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#font.style~rs}']){"),pType==propTypes['@:{eprops#font.style~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}({use:\'_\',element:\''+($__line=44,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-font/style?disabled='+($__line=44,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&value='+($__line=44,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=45,$__art="{{else if pType==propTypes[\\'@:{eprops#align~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#align~rs}']){"),pType==propTypes['@:{eprops#align~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}({use:\'_\',element:\''+($__line=46,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-align/index?disabled='+($__line=46,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&value='+($__line=46,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=47,$__art="{{else if pType==propTypes[\\'@:{eprops#text.align~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#text.align~rs}']){"),pType==propTypes['@:{eprops#text.align~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}({use:\'_\',element:\''+($__line=48,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-font/align?disabled='+($__line=48,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&value='+($__line=48,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props'))+'&alignKey='+($__line=48,$__art='{{=p.key}}',$__ctrl='<%=$encodeUrl(p.key)%>',($encodeUrl(p.key))),}));
}else if(($__line=49,$__art="{{else if pType==propTypes[\\'@:{eprops#dropdown~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#dropdown~rs}']){"),pType==propTypes['@:{eprops#dropdown~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=50,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'value\',element:\''+($__line=50,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\',write:\''+($__line=50,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.write'))+'\'})','mx5-view': 'gallery/mx-dropdown/index?disabled='+($__line=50,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&selected='+($__line=50,$__art='{{=data}}',$__ctrl='<%=$encodeUrl(data)%>',($encodeUrl(data)))+'&list='+($__line=50,$__art='{{#p.items}}',$__ctrl='<%#p.items,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.items\'%>',$keyOf($refData,p.items,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.items'))+'&iconKey=icon&textKey='+($__line=50,$__art='{{=p.textKey||\'text\'}}',$__ctrl='<%=$encodeUrl(p.textKey||\'text\')%>',($encodeUrl(p.textKey||'text')))+'&valueKey='+($__line=50,$__art='{{=p.valueKey||\'value\'}}',$__ctrl='<%=$encodeUrl(p.valueKey||\'value\')%>',($encodeUrl(p.valueKey||'value'))),}));
}else if(($__line=51,$__art="{{else if pType==propTypes[\\'@:{eprops#image~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#image~rs}']){"),pType==propTypes['@:{eprops#image~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=52,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'src\',element:\''+($__line=52,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\',write:\''+($__line=52,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.write'))+'\'})','mx5-view': 'gallery/mx-picture/index?src='+($__line=52,$__art='{{=data}}',$__ctrl='<%=$encodeUrl(data)%>',($encodeUrl(data)))+'&disabled='+($__line=52,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked)),}));
}else if(($__line=53,$__art="{{else if pType==propTypes[\\'@:{eprops#image.reset~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#image.reset~rs}']){"),pType==propTypes['@:{eprops#image.reset~rs}']){
$vnode_3=[$createVNode(0,($__line=54,$__art='{{=i18n(\'@:{lang#elements.image.reset~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#elements.image.reset~rs}\')%>',(i18n('@:{lang#elements.image.reset~rs}'))))];$vnode_2.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc','disabled': ($temp_var=($__line=54,$__art='{{=locked}}',$__ctrl='<%=locked%>',locked),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/element.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-click': $viewId+'@:{update.image.size~rs}({key:\''+($__line=54,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',element:\''+($__line=54,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})',},$vnode_3));
}else if(($__line=55,$__art="{{else if pType==propTypes[\\'@:{eprops#text.input~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#text.input~rs}']){"),pType==propTypes['@:{eprops#text.input~rs}']){
$vnode_2.push($createVNode('input',{'class': 'rd-_assets_index_less_-input','value': ($__line=56,$__art='{{=data}}',$__ctrl='<%=data%>',(data)),'disabled': ($temp_var=($__line=56,$__art='{{=locked}}',$__ctrl='<%=locked%>',locked),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:panels/props/element.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-input': $viewId+'@:{update.prop~rs}({key:\''+($__line=56,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',native:\'value\',element:\''+($__line=56,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})',},1,$special_4));
}else if(($__line=57,$__art="{{else if pType==propTypes[\\'@:{eprops#bind.field~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#bind.field~rs}']){"),pType==propTypes['@:{eprops#bind.field~rs}']){
;$$_mx5$_view='gallery/mx-field/index?data='+($__line=58,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data'))+($__line=58,$__art='{{#p.max}}','');$__ctrl='<%if(($temp_var=p.max)){%>';if(($temp_var=p.max)){;$$_mx5$_view+='&max='+($__ctrl='<%#$temp_var,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.max\'%>',$keyOf($refData,$temp_var,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.max'));$__ctrl='<%}%>';};$$_mx5$_view+='&disabled='+($__line=58,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked));$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=58,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'bindField\',element:\''+($__line=58,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\',write:\''+($__line=58,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.write'))+'\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=59,$__art="{{else if pType==propTypes[\\'@:{eprops#column.width~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#column.width~rs}']){"),pType==propTypes['@:{eprops#column.width~rs}']){
;$$_mx5$_view='gallery/mx-column/index?'+($__line=60,$__art='{{#p.min}}','');$__ctrl='<%if(($temp_var=p.min)!=null){%>';if(($temp_var=p.min)!=null){;$$_mx5$_view+='min='+($__ctrl='<%#$temp_var,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.min\'%>',$keyOf($refData,$temp_var,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.min'));$__ctrl='<%}%>';};$$_mx5$_view+=''+($__line=60,$__art='{{#p.max}}','');$__ctrl='<%if(($temp_var=p.max)!=null){%>';if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+($__ctrl='<%#$temp_var,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.max\'%>',$keyOf($refData,$temp_var,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.max'));$__ctrl='<%}%>';};$$_mx5$_view+='&columns='+($__line=60,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data'))+'&fields='+($__line=60,$__art='{{#props.bind.fields}}',$__ctrl='<%#props.bind.fields,\'auto_key_e.props.props.bind.fields\'%>',$keyOf($refData,props.bind.fields,'auto_key_e.props.props.bind.fields'))+'&disabled='+($__line=60,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked));$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=60,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'columns\',element:\''+($__line=60,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\',write:\''+($__line=60,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.write'))+'\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=61,$__art="{{else if pType==propTypes[\\'@:{eprops#table.style~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#table.style~rs}']){"),pType==propTypes['@:{eprops#table.style~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'skin\',element:\''+($__line=62,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\',write:\''+($__line=62,$__art='{{#p.write}}',$__ctrl='<%#p.write,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.write\'%>',$keyOf($refData,p.write,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.write'))+'\'})','mx5-view': 'gallery/mx-table/style?disabled='+($__line=62,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked)),}));
}else if(($__line=63,$__art="{{else if pType==propTypes[\\'@:{eprops#cell.style~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#cell.style~rs}']){"),pType==propTypes['@:{eprops#cell.style~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',element:\''+($__line=64,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-box/style?disabled='+($__line=64,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=64,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=65,$__art="{{else if pType==propTypes[\\'@:{eprops#h.cell.operate~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#h.cell.operate~rs}']){"),pType==propTypes['@:{eprops#h.cell.operate~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',size:1,operate:1,element:\''+($__line=66,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-box/h-operate?disabled='+($__line=66,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=66,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=67,$__art="{{else if pType==propTypes[\\'@:{eprops#v.cell.operate~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#v.cell.operate~rs}']){"),pType==propTypes['@:{eprops#v.cell.operate~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',size:1,operate:1,element:\''+($__line=68,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-box/v-operate?disabled='+($__line=68,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=68,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=69,$__art="{{else if pType==propTypes[\\'@:{eprops#table.cell.operate~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#table.cell.operate~rs}']){"),pType==propTypes['@:{eprops#table.cell.operate~rs}']){
;$$_mx5$_view='gallery/mx-table/operate?disabled='+($__line=70,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=70,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props'))+($__line=70,$__art='{{=p[\'@:{elements~rs}\']}}','');$__ctrl='<%if(($temp_var=p[\'@:{elements~rs}\'])!=null){%>';if(($temp_var=p['@:{elements~rs}'])!=null){;$$_mx5$_view+='&sub='+($__ctrl='<%=$encodeUrl($temp_var)%>',($encodeUrl($temp_var)));$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',size:1,operate:1,element:\''+($__line=70,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=71,$__art="{{else if pType==propTypes[\\'@:{eprops#table.cell.border~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#table.cell.border~rs}']){"),pType==propTypes['@:{eprops#table.cell.border~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',element:\''+($__line=72,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-table/border?disabled='+($__line=72,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=72,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=73,$__art="{{else if pType==propTypes[\\'@:{eprops#dtable.cell.operate~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#dtable.cell.operate~rs}']){"),pType==propTypes['@:{eprops#dtable.cell.operate~rs}']){
;$$_mx5$_view='gallery/mx-dtable/operate?disabled='+($__line=74,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=74,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props'))+($__line=74,$__art='{{=p[\'@:{elements~rs}\']}}','');$__ctrl='<%if(($temp_var=p[\'@:{elements~rs}\'])!=null){%>';if(($temp_var=p['@:{elements~rs}'])!=null){;$$_mx5$_view+='&sub='+($__ctrl='<%=$encodeUrl($temp_var)%>',($encodeUrl($temp_var)));$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',operate:1,size:1,element:\''+($__line=74,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=75,$__art="{{else if pType==propTypes[\\'@:{eprops#ftable.cell.operate~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#ftable.cell.operate~rs}']){"),pType==propTypes['@:{eprops#ftable.cell.operate~rs}']){
;$$_mx5$_view='gallery/mx-ftable/operate?disabled='+($__line=76,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=76,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props'))+($__line=76,$__art='{{=p[\'@:{elements~rs}\']}}','');$__ctrl='<%if(($temp_var=p[\'@:{elements~rs}\'])!=null){%>';if(($temp_var=p['@:{elements~rs}'])!=null){;$$_mx5$_view+='&sub='+($__ctrl='<%=$encodeUrl($temp_var)%>',($encodeUrl($temp_var)));$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',operate:1,size:1,element:\''+($__line=76,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=77,$__art="{{else if pType==propTypes[\\'@:{eprops#h.cell.size~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#h.cell.size~rs}']){"),pType==propTypes['@:{eprops#h.cell.size~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',size:1,element:\''+($__line=78,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-box/h-size?disabled='+($__line=78,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=78,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=79,$__art="{{else if pType==propTypes[\\'@:{eprops#v.cell.size~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#v.cell.size~rs}']){"),pType==propTypes['@:{eprops#v.cell.size~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',size:1,element:\''+($__line=80,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-box/v-size?disabled='+($__line=80,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=80,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=81,$__art="{{else if pType==propTypes[\\'@:{eprops#table.cell.size~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#table.cell.size~rs}']){"),pType==propTypes['@:{eprops#table.cell.size~rs}']){
;$$_mx5$_view='gallery/mx-table/size?disabled='+($__line=82,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=82,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props'))+($__line=82,$__art='{{=p[\'@:{auto.height~rs}\']}}','');$__ctrl='<%if(($temp_var=p[\'@:{auto.height~rs}\'])!=null){%>';if(($temp_var=p['@:{auto.height~rs}'])!=null){;$$_mx5$_view+='&ah='+($__ctrl='<%=$encodeUrl($temp_var)%>',($encodeUrl($temp_var)));$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',size:1,element:\''+($__line=82,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=83,$__art="{{else if pType==propTypes[\\'@:{eprops#table.cell.share~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#table.cell.share~rs}']){"),pType==propTypes['@:{eprops#table.cell.share~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',size:1,element:\''+($__line=84,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-table/share?disabled='+($__line=84,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=84,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props'))+'&dataPad='+($__line=84,$__art='{{#p.dataPad}}',$__ctrl='<%#p.dataPad,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.dataPad\'%>',$keyOf($refData,p.dataPad,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.dataPad')),}));
}else if(($__line=85,$__art="{{else if pType==propTypes[\\'@:{eprops#table.cell.content~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#table.cell.content~rs}']){"),pType==propTypes['@:{eprops#table.cell.content~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-220','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',element:\''+($__line=86,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-table/content?disabled='+($__line=86,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=86,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=87,$__art="{{else if pType==propTypes[\\'@:{eprops#dtable.cell.content~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#dtable.cell.content~rs}']){"),pType==propTypes['@:{eprops#dtable.cell.content~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-220','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',element:\''+($__line=88,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-dtable/content?disabled='+($__line=88,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=88,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=89,$__art="{{else if he&&pType==propTypes[\\'@:{eprops#link~rs}\\']}}",$__ctrl="else if(he&&pType==propTypes['@:{eprops#link~rs}']){"),he&&pType==propTypes['@:{eprops#link~rs}']){
$vnode_3=[$createVNode(0,($__line=90,$__art='{{=data}}',$__ctrl='<%=data%>',(data)))];$vnode_2.push($createVNode('a',{'href': '//'+($__line=90,$__art='{{=data}}',$__ctrl='<%=data%>',(data)),'class': 'rd-_assets_index_less_-ellipsis rd-_assets_index_less_-tag-a rd-_assets_index_less_-width-140','title': ($__line=90,$__art='{{=data}}',$__ctrl='<%=data%>',(data)),'target': '_blank','rel': 'noopener noreferrer',},$vnode_3));
}else if(($__line=91,$__art="{{else if pType==propTypes[\\'@:{eprops#fx.expression~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#fx.expression~rs}']){"),pType==propTypes['@:{eprops#fx.expression~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'@:{update.prop~rs}({use:\'data\',element:\''+($__line=92,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-fx/index?disabled='+($__line=92,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&data='+($__line=92,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data')),}));
}else if(($__line=93,$__art="{{else if pType==propTypes[\\'@:{eprops#fx.help~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#fx.help~rs}']){"),pType==propTypes['@:{eprops#fx.help~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-220','mx5-change': $viewId+'@:{update.prop~rs}({use:\'data\',element:\''+($__line=94,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-fx/help?disabled='+($__line=94,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&data='+($__line=94,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data')),}));
}else if(($__line=95,$__art="{{else if pType==propTypes[\\'@:{eprops#svg.key.point~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#svg.key.point~rs}']){"),pType==propTypes['@:{eprops#svg.key.point~rs}']){
;$$_mx5$_view='gallery/mx-svg/kp?disabled='+($__line=96,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=96,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props'))+($__line=96,$__art='{{=p.mod}}','');$__ctrl='<%if(($temp_var=p.mod)!=null){%>';if(($temp_var=p.mod)!=null){;$$_mx5$_view+='&mod='+($__ctrl='<%=$encodeUrl($temp_var)%>',($encodeUrl($temp_var)));$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-220','mx5-change': $viewId+'@:{update.prop~rs}({use:\'kp\',element:\''+($__line=96,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\',kp:1})','mx5-view': $$_mx5$_view,}));
}else if(($__line=97,$__art="{{else if pType==propTypes[\\'@:{eprops#svg.mod.point~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#svg.mod.point~rs}']){"),pType==propTypes['@:{eprops#svg.mod.point~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-220','mx5-change': $viewId+'@:{update.prop~rs}({use:\'mod\',element:\''+($__line=98,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\',mod:1})','mx5-view': 'gallery/mx-svg/mod?disabled='+($__line=98,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=98,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=99,$__art="{{else if pType==propTypes[\\'@:{eprops#format~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#format~rs}']){"),pType==propTypes['@:{eprops#format~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=100,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'format\',element:\''+($__line=100,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-format/index?format='+($__line=100,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data'))+'&disabled='+($__line=100,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked)),}));
}else if(($__line=101,$__art="{{else if pType==propTypes[\\'@:{eprops#form.collect.cell.operate~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#form.collect.cell.operate~rs}']){"),pType==propTypes['@:{eprops#form.collect.cell.operate~rs}']){
;$$_mx5$_view='gallery/mx-collect/operate?disabled='+($__line=102,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=102,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props'))+($__line=102,$__art='{{=p[\'@:{elements~rs}\']}}','');$__ctrl='<%if(($temp_var=p[\'@:{elements~rs}\'])!=null){%>';if(($temp_var=p['@:{elements~rs}'])!=null){;$$_mx5$_view+='&sub='+($__ctrl='<%=$encodeUrl($temp_var)%>',($encodeUrl($temp_var)));$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',size:1,operate:1,element:\''+($__line=102,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=103,$__art="{{else if pType==propTypes[\\'@:{eprops#form.collect.cell.content~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#form.collect.cell.content~rs}']){"),pType==propTypes['@:{eprops#form.collect.cell.content~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-220','mx5-change': $viewId+'@:{update.prop~rs}({use:\'rows\',element:\''+($__line=104,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-collect/content?disabled='+($__line=104,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&props='+($__line=104,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_e.props.props\'%>',$keyOf($refData,props,'auto_key_e.props.props')),}));
}else if(($__line=105,$__art="{{else if pType==propTypes[\\'@:{eprops#color.series~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#color.series~rs}']){"),pType==propTypes['@:{eprops#color.series~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({use:\'colors\',element:\''+($__line=106,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-color/series?colors='+($__line=106,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data'))+'&disabled='+($__line=106,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&multi='+($__line=106,$__art='{{#p.multi}}',$__ctrl='<%#p.multi,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p.multi\'%>',$keyOf($refData,p.multi,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p.multi')),}));
}else if(($__line=107,$__art="{{else if pType==propTypes[\\'@:{eprops#format.fx~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#format.fx~rs}']){"),pType==propTypes['@:{eprops#format.fx~rs}']){
;$$_mx5$_view='gallery/mx-format/fx?format='+($__line=108,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data'))+'&disabled='+($__line=108,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+($__line=108,$__art='{{#p[\'@:{default.fx~rs}\']}}','');$__ctrl='<%if(($temp_var=p[\'@:{default.fx~rs}\'])){%>';if(($temp_var=p['@:{default.fx~rs}'])){;$$_mx5$_view+='&defaultFx='+($__ctrl='<%#$temp_var,\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.p[\\\'@:{default.fx~rs}\\\']\'%>',$keyOf($refData,$temp_var,'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.p[\'@:{default.fx~rs}\']'));$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({key:\''+($__line=108,$__art='{{=p.key}}',$__ctrl='<%=$encodeQuote(p.key)%>',($encodeQuote(p.key)))+'\',use:\'format\',element:\''+($__line=108,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': $$_mx5$_view,}));
}else if(($__line=109,$__art="{{else if pType==propTypes[\\'@:{eprops#form.items~rs}\\']}}",$__ctrl="else if(pType==propTypes['@:{eprops#form.items~rs}']){"),pType==propTypes['@:{eprops#form.items~rs}']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'e','mx5-change': $viewId+'@:{update.prop~rs}({use:\'items\',element:\''+($__line=110,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_e\'%>',$keyOf($refData,e,'auto_key_e'))+'\'})','mx5-view': 'gallery/mx-form/items?items='+($__line=110,$__art='{{#data}}',$__ctrl='<%#data,\'auto_key_e.props.\'+(p.key)+\'.data\'%>',$keyOf($refData,data,'auto_key_e.props.'+(p.key)+'.data'))+'&disabled='+($__line=110,$__art='{{#locked}}',$__ctrl='<%#locked%>',$keyOf($refData,locked))+'&mutual='+($__line=110,$__art='{{#p.mutual&&p.mutual(props)}}',$__ctrl='<%#p.mutual&&p.mutual(props),\'auto_key_e.ctrl.props.\'+($q_key_soierzg)+\'.e.props.p.mutual%26%26p.mutual(props)\'%>',$keyOf($refData,p.mutual&&p.mutual(props),'auto_key_e.ctrl.props.'+($q_key_soierzg)+'.e.props.p.mutual%26%26p.mutual(props)')),}));
};$$_class='rd-_panels_props_index_less_-props-item rd-_assets_index_less_-flex '+($__line=17,$__art='{{if p[\'@:{dock.top~rs}\']}}','');$__ctrl='<%if(p[\'@:{dock.top~rs}\']){%>';if(p['@:{dock.top~rs}']){;$$_class+='rd-_assets_index_less_-align-items-flex-start'+($__line=17,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+='rd-_assets_index_less_-align-items-center'+($__line=17,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('li',{'class': $$_class,},$vnode_2));
}
}
}$vnode_0=[$createVNode('ul',$quick_dT_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/props/element.html'; throw msg; }  } ,
    init() {
        let update = this['@:{debounce~rs}'](this.render, 30);
        State.on('@:{event#stage.select.element.props.change~rs}', update);
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.select.elements.change~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#stage.select.element.props.change~rs}', update);
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.select.elements.change~rs}', update);
        });
        this.set({
            he: config('helpElement'),
            propTypes: props_1
        });
    },
    async render() {
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let single = selectElements.length == 1;
        if (single) {
            this.digest({
                e: selectElements[0]
            });
        }
    },
    async '@:{update.prop~rs}<input,change>'(e) {
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
                let oldRotatedRect = transform_1['@:{transform#rotate.rect~rs}'](props);
                cachedOld = oldRotatedRect['@:{point~rs}'][0];
            }
            if (resetXY) {
                old = cachedOld;
            }
            let updatePosition = key == 'x' || key == 'y';
            let oldWidth = props.width, oldHeight = props.height;
            let v = native ? e.eventTarget[native] : e[use];
            let updateMarker = mark(this, '@:{update.props~rs}');
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
                    let linkage = State.get('@:{global#stage.elements.groups.linked~rs}');
                    if (linkage) {
                        let groups = State.get('@:{global#stage.elements.groups~rs}');
                        let sameGroups = groups[id];
                        if (sameGroups) {
                            let { '@:{generic.all#map~rs}': allMap } = stage_generic_1['@:{generic#get.all.elements.and.map~rs}']();
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
                            let moveProps = ctrl['@:{move.props~rs}'];
                            if (ctrl['@:{move.props.is.function~rs}']) {
                                moveProps = ctrl['@:{move.props~rs}'](props);
                            }
                            for (let m of moveProps) {
                                if (m.use == key) {
                                    props[m.key] += positionOffset;
                                }
                            }
                            if (ctrl['@:{update.props~rs}']) {
                                ctrl['@:{update.props~rs}'](props, old, 1);
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
                        (ctrl['@:{modifier~rs}'] & enum_1['@:{enum#modifier.sync.size~rs}'])) {
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
                    if (ctrl['@:{update.props~rs}']) {
                        ctrl['@:{update.props~rs}'](props, old, 1);
                    }
                    if (old) {
                        let newRotatedRect = transform_1['@:{transform#rotate.rect~rs}'](props);
                        let n = newRotatedRect['@:{point~rs}'][0];
                        props.x += old.x - n.x;
                        props.y += old.y - n.y;
                    }
                    changed = 1;
                }
                else {
                    if (ctrl['@:{update.props~rs}']) {
                        ctrl['@:{update.props~rs}'](props, old, 1);
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
            State.fire('@:{event#stage.select.element.props.change~rs}', {
                '@:{ids~rs}': changedIds,
                '@:{types~rs}': changedTypes,
                '@:{props~rs}': changedProps
            });
            for (let me of moveElements) {
                let n = node(me.id);
                if (n) {
                    let vf = Vframe.byNode(n);
                    if (vf) {
                        vf.invoke('@:{update~rs}', [me]);
                    }
                }
            }
            //非svg控制点的处理,才记录历史记录
            if (!e['@:{svg.control.point~rs}']) {
                let type;
                if (key == 'x' ||
                    key == 'y') {
                    type = history_1['@:{history#element.moved~rs}'];
                }
                else if ((size && !operate) ||
                    key == 'width' ||
                    key == 'height' ||
                    key == 'rx' ||
                    key == 'ry' ||
                    key == 'r' ||
                    key == 'tfootSpacing') {
                    type = history_1['@:{history#element.modified.size~rs}'];
                }
                else if (key == 'rotate') {
                    type = history_1['@:{history#element.rotated~rs}'];
                }
                else if (kp) {
                    type = history_1['@:{history#element.modified.ctrl.point~rs}'];
                }
                else if (mod) {
                    type = history_1['@:{history#element.modified.mod.point~rs}'];
                }
                else if (key == 'locked') {
                    type = props.locked ? history_1['@:{history#element.locked~rs}'] : history_1['@:{history#element.unlocked~rs}'];
                }
                else {
                    type = history_1['@:{history#element.modified.props~rs}'];
                }
                let ename = stage_generic_1['@:{generic#query.element.name~rs}']([element]);
                history_1["@:{history#save~rs}"](type, ename, element.id + '@:{history#element.props.change~rs}' + key, 500);
            }
        }
    },
    '@:{update.image.size~rs}<click>'(e) {
        let m = mark(this, '@:{update.img.size~rs}');
        let { key, element } = e.params;
        let { props, ctrl } = element;
        let oldRotatedRect = transform_1['@:{transform#rotate.rect~rs}'](props);
        let old = oldRotatedRect['@:{point~rs}'][0];
        let img = new Image();
        let setSize = () => {
            let newWidth = const_1['@:{const#to.unit~rs}'](img.width), newHeight = const_1['@:{const#to.unit~rs}'](img.height);
            if (m() &&
                (newWidth != props.width ||
                    newHeight != props.height)) {
                props.width = newWidth;
                props.height = newHeight;
                let newRotatedRect = transform_1['@:{transform#rotate.rect~rs}'](props);
                let n = newRotatedRect['@:{point~rs}'][0];
                props.x += old.x - n.x;
                props.y += old.y - n.y;
                if (ctrl['@:{update.props~rs}']) {
                    ctrl['@:{update.props~rs}'](props);
                }
                this.render();
                State.fire('@:{event#stage.select.element.props.change~rs}', {
                    '@:{ids~rs}': {
                        [element.id]: 1
                    },
                    '@:{types~rs}': {
                        [element.type]: 1
                    },
                    '@:{props~rs}': {
                        '@:{position~rs}': 1
                    }
                });
                let n1 = node(element.id);
                let vf = Vframe.byNode(n1);
                if (vf) {
                    vf.invoke('@:{update~rs}', [element]);
                }
                history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.size~rs}'], props.ename, element.id + '@:{history#element.props.change~rs}' + key, 500);
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