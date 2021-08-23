/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/normal",["magix5","../designer/const","../designer/enum","../designer/stage-selection","../gallery/mx-dragdrop/index","../provider/ebase"],(require,exports,module)=>{
let $quick_lA_1_static_node;
let $quick_lA_0_static_attr={'data-as': 'icon','class': 'rd-_assets_index_less_-iconfont rd-_assets_index_less_-left-2 rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none rd-_elements_index_less_-icon',};
let $special_2={'value':'value',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let const_1 = require("../designer/const");
let enum_1 = require("../designer/enum");
let stage_selection_1 = require("../designer/stage-selection");
let index_1 = require("../gallery/mx-dragdrop/index");
let ebase_1 = require("../provider/ebase");
let { State, has, View, node } = magix_1;
let { min, max } = Math;
let CellAndHod = enum_1['@:{enum#as.hod~rs}'] | enum_1['@:{enum#as.cells~rs}'];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	element,
	denum,
	view,
	selected,
	count,
	fs,
	unit,
	selfGrouped,
	grouped,
	max,
	minSize,
	i18n,
	toPx,
	min,
	cursor,
	whEnum,}=$dataFromView,
$$_class,
$text,
$vnode_2,
$vnode_1;
($__line=1,$__art='{{set {props,ctrl,id}=element}}','');$__ctrl='<%let props=element.props,ctrl=element.ctrl,id=element.id;%>';let props=element.props,ctrl=element.ctrl,id=element.id;;;$$_class='rd-_assets_index_less_-unselectable'+($__line=2,$__art='{{if props.readonly&&(ctrl.as & denum[\'@:{enum#as.hod~rs}\']) != denum[\'@:{enum#as.hod}\']}}','');$__ctrl='<%if(props.readonly&&(ctrl.as & denum[\'@:{enum#as.hod~rs}\']) != denum[\'@:{enum#as.hod~rs}\']){%>';if(props.readonly&&(ctrl.as & denum['@:{enum#as.hod~rs}']) != denum['@:{enum#as.hod~rs}']){;$$_class+=' rd-_assets_index_less_-pointer-events-none'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'element,selected,count,fs,unit,selfGrouped,grouped','mx5-view': ($__line=2,$__art='{{=view}}',$__ctrl='<%=view%>',(view))+'?props='+($__line=2,$__art='{{#props}}',$__ctrl='<%#props,\'auto_key_element.props.props\'%>',$keyOf($refData,props,'auto_key_element.props.props'))+'&element='+($__line=2,$__art='{{#element}}',$__ctrl='<%#element,\'auto_key_element\'%>',$keyOf($refData,element,'auto_key_element'))+'&selected='+($__line=2,$__art='{{#selected}}',$__ctrl='<%#selected,\'auto_key_selected\'%>',$keyOf($refData,selected,'auto_key_selected'))+'&count='+($__line=2,$__art='{{#count}}',$__ctrl='<%#count,\'auto_key_count\'%>',$keyOf($refData,count,'auto_key_count'))+'&fs='+($__line=2,$__art='{{#fs}}',$__ctrl='<%#fs,\'auto_key_fs\'%>',$keyOf($refData,fs,'auto_key_fs'))+'&unit='+($__line=2,$__art='{{#unit}}',$__ctrl='<%#unit,\'auto_key_unit\'%>',$keyOf($refData,unit,'auto_key_unit'))+'&grouped='+($__line=2,$__art='{{# selfGrouped||grouped}}',$__ctrl='<%#selfGrouped||grouped,\'auto_key_selfGrouped.grouped.selfGrouped||grouped\'%>',$keyOf($refData,selfGrouped||grouped,'auto_key_selfGrouped.grouped.selfGrouped||grouped')),'class': $$_class,}));$text=($__line=3,$__art='{{set r=((props.rotate||0)+360)%360}}','');$__ctrl='<%let r=((props.rotate||0)+360)%360;%>';let r=((props.rotate||0)+360)%360;;$text+=' '+($__line=4,$__art='{{set modifier=ctrl[\'@:{modifier~rs}\']}}','');$__ctrl='<%let modifier=ctrl[\'@:{modifier~rs}\'];%>';let modifier=ctrl['@:{modifier~rs}'];;$__line=6;$__art="{{if !fs}}";$__ctrl="if(!fs){";
if(!fs){
$vnode_1=[];$__line=8;$__art="{{if ((modifier & denum[\\'@:{enum#modifier.icon~rs}\\']) || (selected && (modifier & denum[\\'@:{enum#modifier.selected.show.icon}\\']))) && !props.readonly}}";$__ctrl="if(((modifier & denum['@:{enum#modifier.icon~rs}']) || (selected && (modifier & denum['@:{enum#modifier.selected.show.icon~rs}']))) && !props.readonly){";
if(((modifier & denum['@:{enum#modifier.icon~rs}']) || (selected && (modifier & denum['@:{enum#modifier.selected.show.icon~rs}']))) && !props.readonly){
$vnode_2=[$createVNode(0,($__line=10,$__art='{{=ctrl.icon}}',$__ctrl='<%=ctrl.icon%>',(ctrl.icon)),1)];$vnode_1.push($createVNode('i',$quick_lA_0_static_attr,$vnode_2));
}$__line=12;$__art="{{if !props.locked && selected}}";$__ctrl="if(!props.locked && selected){";
if(!props.locked && selected){

if($quick_lA_1_static_node){
$vnode_1.push($quick_lA_1_static_node);
}else{
$vnode_1.push($quick_lA_1_static_node=$createVNode('div',{'_': 'hN','class': 'rd-_assets_index_less_-pa rd-_elements_index_less_-cross',}));
}

}$__line=16;$__art="{{if !props.locked && count==1 && selected && !grouped && !selfGrouped}}";$__ctrl="if(!props.locked && count==1 && selected && !grouped && !selfGrouped){";
if(!props.locked && count==1 && selected && !grouped && !selfGrouped){
$__line=17;$__art="{{if modifier}}";$__ctrl="if(modifier){";
if(modifier){
$__line=18;$__art="{{if (modifier & denum[\\'@:{enum#modifier.rotate~rs}\\']) && !props.pinX && !props.pinY}}";$__ctrl="if((modifier & denum['@:{enum#modifier.rotate~rs}']) && !props.pinX && !props.pinY){";
if((modifier & denum['@:{enum#modifier.rotate~rs}']) && !props.pinX && !props.pinY){
$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none rd-_elements_index_less_-rotate','mx5-pointerdown': $viewId+'@:{start.rotate~rs}()','title': ($__line=19,$__art='{{=i18n(\'@:{lang#press.drag.rotate.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.rotate.element~rs}\')%>',(i18n('@:{lang#press.drag.rotate.element~rs}'))),}));
}$__line=22;$__art="{{if (modifier & denum[\\'@:{enum#modifier.text~rs}\\']) && props[\\'@:{show.text}\\']}}";$__ctrl="if((modifier & denum['@:{enum#modifier.text~rs}']) && props['@:{show.text~rs}']){";
if((modifier & denum['@:{enum#modifier.text~rs}']) && props['@:{show.text~rs}']){
$vnode_1.push($createVNode('textarea',{'data-as': 'da','mx5-pointerdown': $viewId+'@:{stop~rs}()','mx5-contextmenu': $viewId+'@:{stop~rs}()','id': '_rd_ta_'+($__line=23,$__art='{{=$viewId}}','')+$viewId,'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-textarea rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-wp100','mx5-input': $viewId+'@:{update.text~rs}()','style': 'font-size:'+($__line=23,$__art='{{=props.fontsize}}',$__ctrl='<%=props.fontsize%>',(props.fontsize))+($__line=23,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'value': ($__line=23,$__art='{{=props.text}}',$__ctrl='<%=props.text%>',(props.text)),},0,$special_2));
}($__line=25,$__art='{{set height=0,\n                    　width=0,\n                    　top=0,\n                    　left=0,\n                      pxPropsHeight=toPx(props.height),\n                      pxPropsWidth=toPx(props.width),\n                    　size}}','');$__ctrl='<%let height=0,\n                    　width=0,\n                    　top=0,\n                    　left=0,\n                      pxPropsHeight=toPx(props.height),\n                      pxPropsWidth=toPx(props.width),\n                    　size;%>';let height=0,
                    　width=0,
                    　top=0,
                    　left=0,
                      pxPropsHeight=toPx(props.height),
                      pxPropsWidth=toPx(props.width),
                    　size;;$__line=32;$__art="{{if modifier & denum[\\'@:{enum#modifier.width~rs}\\']}}";$__ctrl="if(modifier & denum['@:{enum#modifier.width~rs}']){";
if(modifier & denum['@:{enum#modifier.width~rs}']){
$text=($__line=33,$__art='{{height=max(min(20,pxPropsHeight-6)-4,0)}}','');$__ctrl='<%height=max(min(20,pxPropsHeight-6)-4,0)%>';height=max(min(20,pxPropsHeight-6)-4,0);$text+=' '+($__line=34,$__art='{{top=(pxPropsHeight-height)/2}}','');$__ctrl='<%top=(pxPropsHeight-height)/2%>';top=(pxPropsHeight-height)/2;
}$__line=36;$__art="{{if modifier & denum[\\'@:{enum#modifier.height~rs}\\']}}";$__ctrl="if(modifier & denum['@:{enum#modifier.height~rs}']){";
if(modifier & denum['@:{enum#modifier.height~rs}']){
$text=($__line=37,$__art='{{width=max(min(20,pxPropsWidth-6)-4,0)}}','');$__ctrl='<%width=max(min(20,pxPropsWidth-6)-4,0)%>';width=max(min(20,pxPropsWidth-6)-4,0);$text+=' '+($__line=38,$__art='{{left=(pxPropsWidth-width-1)/2}}','');$__ctrl='<%left=(pxPropsWidth-width-1)/2%>';left=(pxPropsWidth-width-1)/2;
}($__line=40,$__art='{{size=min(max(0,min(pxPropsHeight-height-top-7,pxPropsHeight/2,pxPropsWidth-width-left-7,pxPropsWidth/2)),14)}}','');$__ctrl='<%size=min(max(0,min(pxPropsHeight-height-top-7,pxPropsHeight/2,pxPropsWidth-width-left-7,pxPropsWidth/2)),14)%>';size=min(max(0,min(pxPropsHeight-height-top-7,pxPropsHeight/2,pxPropsWidth-width-left-7,pxPropsWidth/2)),14);$__line=42;$__art="{{if modifier & denum[\\'@:{enum#modifier.width~rs}\\']}}";$__ctrl="if(modifier & denum['@:{enum#modifier.width~rs}']){";
if(modifier & denum['@:{enum#modifier.width~rs}']){
$__line=44;$__art="{{if !props.pinX}}";$__ctrl="if(!props.pinX){";
if(!props.pinX){
$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-z-index-1 rd-_elements_index_less_-left','style': 'height:'+($__line=45,$__art='{{=height}}',$__ctrl='<%=height%>',(height))+'px;top:'+($__line=45,$__art='{{=top}}',$__ctrl='<%=top%>',(top))+'px;cursor:'+($__line=45,$__art='{{=cursor(r,0)}}',$__ctrl='<%=cursor(r,0)%>',(cursor(r,0)))+'-resize','title': ($__line=45,$__art='{{=i18n(\'@:{lang#press.drag.width.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.width.element~rs}\')%>',(i18n('@:{lang#press.drag.width.element~rs}'))),'mx5-pointerdown': $viewId+'@:{start.resize~rs}({key:\'ml\'})',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-z-index-1 rd-_elements_index_less_-right','style': 'height:'+($__line=47,$__art='{{=height}}',$__ctrl='<%=height%>',(height))+'px;top:'+($__line=47,$__art='{{=top}}',$__ctrl='<%=top%>',(top))+'px;cursor:'+($__line=47,$__art='{{=cursor(r,0)}}',$__ctrl='<%=cursor(r,0)%>',(cursor(r,0)))+'-resize','title': ($__line=47,$__art='{{=i18n(\'@:{lang#press.drag.width.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.width.element~rs}\')%>',(i18n('@:{lang#press.drag.width.element~rs}'))),'mx5-pointerdown': $viewId+'@:{start.resize~rs}({key:\'mr\'})',}));
}$__line=50;$__art="{{if modifier & denum[\\'@:{enum#modifier.height~rs}\\']}}";$__ctrl="if(modifier & denum['@:{enum#modifier.height~rs}']){";
if(modifier & denum['@:{enum#modifier.height~rs}']){
$__line=52;$__art="{{if !props.pinY}}";$__ctrl="if(!props.pinY){";
if(!props.pinY){
$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-z-index-1 rd-_elements_index_less_-top','style': 'width:'+($__line=53,$__art='{{=width}}',$__ctrl='<%=width%>',(width))+'px;left:'+($__line=53,$__art='{{=left}}',$__ctrl='<%=left%>',(left))+'px;cursor:'+($__line=53,$__art='{{=cursor(r,90)}}',$__ctrl='<%=cursor(r,90)%>',(cursor(r,90)))+'-resize','title': ($__line=53,$__art='{{=i18n(\'@:{lang#press.drag.height.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.height.element~rs}\')%>',(i18n('@:{lang#press.drag.height.element~rs}'))),'mx5-pointerdown': $viewId+'@:{start.resize~rs}({key:\'tm\'})',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-z-index-1 rd-_elements_index_less_-bottom','style': 'width:'+($__line=55,$__art='{{=width}}',$__ctrl='<%=width%>',(width))+'px;left:'+($__line=55,$__art='{{=left}}',$__ctrl='<%=left%>',(left))+'px;cursor:'+($__line=55,$__art='{{=cursor(r,90)}}',$__ctrl='<%=cursor(r,90)%>',(cursor(r,90)))+'-resize','title': ($__line=55,$__art='{{=i18n(\'@:{lang#press.drag.height.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.height.element~rs}\')%>',(i18n('@:{lang#press.drag.height.element~rs}'))),'mx5-pointerdown': $viewId+'@:{start.resize~rs}({key:\'bm\'})',}));
}$__line=58;$__art="{{if (modifier & denum[\\'@:{enum#modifier.size~rs}\\'])||((modifier & whEnum)==whEnum)}}";$__ctrl="if((modifier & denum['@:{enum#modifier.size~rs}'])||((modifier & whEnum)==whEnum)){";
if((modifier & denum['@:{enum#modifier.size~rs}'])||((modifier & whEnum)==whEnum)){
$__line=60;$__art="{{if !props.pinX}}";$__ctrl="if(!props.pinX){";
if(!props.pinX){
;$$_class='rd-_assets_index_less_-pa rd-_elements_index_less_-left-bottom rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-touch-action-none'+($__line=61,$__art='{{if size<4}}','');$__ctrl='<%if(size<4){%>';if(size<4){;$$_class+=' rd-_assets_index_less_-none'+($__line=61,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'style': 'width:'+($__line=61,$__art='{{=size}}',$__ctrl='<%=size%>',(size))+'px;height:'+($__line=61,$__art='{{=size}}',$__ctrl='<%=size%>',(size))+'px;cursor:'+($__line=61,$__art='{{=cursor(r,135)}}',$__ctrl='<%=cursor(r,135)%>',(cursor(r,135)))+'-resize','title': ($__line=61,$__art='{{=i18n(\'@:{lang#press.drag.width.height.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.width.height.element~rs}\')%>',(i18n('@:{lang#press.drag.width.height.element~rs}'))),'mx5-pointerdown': $viewId+'@:{start.resize~rs}({key:\'bl\'})','class': $$_class,}));
}$__line=63;$__art="{{if !props.pinX&&!props.pinY}}";$__ctrl="if(!props.pinX&&!props.pinY){";
if(!props.pinX&&!props.pinY){
;$$_class='rd-_assets_index_less_-pa rd-_elements_index_less_-left-top rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-touch-action-none'+($__line=64,$__art='{{if size<4}}','');$__ctrl='<%if(size<4){%>';if(size<4){;$$_class+=' rd-_assets_index_less_-none'+($__line=64,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'style': 'width:'+($__line=64,$__art='{{=size}}',$__ctrl='<%=size%>',(size))+'px;height:'+($__line=64,$__art='{{=size}}',$__ctrl='<%=size%>',(size))+'px;cursor:'+($__line=64,$__art='{{=cursor(r,45)}}',$__ctrl='<%=cursor(r,45)%>',(cursor(r,45)))+'-resize','title': ($__line=64,$__art='{{=i18n(\'@:{lang#press.drag.width.height.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.width.height.element~rs}\')%>',(i18n('@:{lang#press.drag.width.height.element~rs}'))),'mx5-pointerdown': $viewId+'@:{start.resize~rs}({key:\'tl\'})','class': $$_class,}));
}$__line=66;$__art="{{if !props.pinY}}";$__ctrl="if(!props.pinY){";
if(!props.pinY){
;$$_class='rd-_assets_index_less_-pa rd-_elements_index_less_-right-top rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-touch-action-none'+($__line=67,$__art='{{if size<4}}','');$__ctrl='<%if(size<4){%>';if(size<4){;$$_class+=' rd-_assets_index_less_-none'+($__line=67,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'style': 'width:'+($__line=67,$__art='{{=size}}',$__ctrl='<%=size%>',(size))+'px;height:'+($__line=67,$__art='{{=size}}',$__ctrl='<%=size%>',(size))+'px;cursor:'+($__line=67,$__art='{{=cursor(r,135)}}',$__ctrl='<%=cursor(r,135)%>',(cursor(r,135)))+'-resize','title': ($__line=67,$__art='{{=i18n(\'@:{lang#press.drag.width.height.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.width.height.element~rs}\')%>',(i18n('@:{lang#press.drag.width.height.element~rs}'))),'mx5-pointerdown': $viewId+'@:{start.resize~rs}({key:\'tr\'})','class': $$_class,}));
};$$_class='rd-_assets_index_less_-pa rd-_elements_index_less_-right-bottom rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-touch-action-none'+($__line=69,$__art='{{if size<4}}','');$__ctrl='<%if(size<4){%>';if(size<4){;$$_class+=' rd-_assets_index_less_-none'+($__line=69,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'style': 'width:'+($__line=69,$__art='{{=size}}',$__ctrl='<%=size%>',(size))+'px;height:'+($__line=69,$__art='{{=size}}',$__ctrl='<%=size%>',(size))+'px;cursor:'+($__line=69,$__art='{{=cursor(r,45)}}',$__ctrl='<%=cursor(r,45)%>',(cursor(r,45)))+'-resize','title': ($__line=69,$__art='{{=i18n(\'@:{lang#press.drag.width.height.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.width.height.element~rs}\')%>',(i18n('@:{lang#press.drag.width.height.element~rs}'))),'mx5-pointerdown': $viewId+'@:{start.resize~rs}({key:\'br\'})','class': $$_class,}));
}
}$__line=72;$__art="{{if ctrl[\\'@:{circle.paths~rs}\\']}}";$__ctrl="if(ctrl['@:{circle.paths~rs}']){";
if(ctrl['@:{circle.paths~rs}']){
$__line=73;$__art="{{each ctrl[\\'@:{circle.paths~rs}\\'] as [r,c]}}";$__ctrl="for(let $q_a_iacakbm=ctrl['@:{circle.paths~rs}'],$q_c_sruubvvt=$q_a_iacakbm.length,$q_key_xvlysrgw=0;$q_key_xvlysrgw<$q_c_sruubvvt;$q_key_xvlysrgw++){let [r,c]=$q_a_iacakbm[$q_key_xvlysrgw];";
for(let $q_a_iacakbm=ctrl['@:{circle.paths~rs}'],$q_c_sruubvvt=$q_a_iacakbm.length,$q_key_xvlysrgw=0;$q_key_xvlysrgw<$q_c_sruubvvt;$q_key_xvlysrgw+=1){
let [r,c]=$q_a_iacakbm[$q_key_xvlysrgw];
$vnode_1.push($createVNode('div',{'style': 'left:'+($__line=74,$__art='{{=props[c+\'X\']-props.x-props[r]}}',$__ctrl='<%=props[c+\'X\']-props.x-props[r]%>',(props[c+'X']-props.x-props[r]))+($__line=74,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=74,$__art='{{=props[c+\'Y\']-props.y-props[r]}}',$__ctrl='<%=props[c+\'Y\']-props.y-props[r]%>',(props[c+'Y']-props.y-props[r]))+($__line=74,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=74,$__art='{{=2*props[r]}}',$__ctrl='<%=2*props[r]%>',(2*props[r]))+($__line=74,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=74,$__art='{{=2*props[r]}}',$__ctrl='<%=2*props[r]%>',(2*props[r]))+($__line=74,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_elements_index_less_-div-circle-path',}));
}
}$__line=77;$__art="{{if ctrl[\\'@:{get.ctrl.points~rs}\\']}}";$__ctrl="if(ctrl['@:{get.ctrl.points~rs}']){";
if(ctrl['@:{get.ctrl.points~rs}']){
($__line=78,$__art='{{set keyPoints=ctrl[\'@:{get.ctrl.points~rs}\'](props)}}','');$__ctrl='<%let keyPoints=ctrl[\'@:{get.ctrl.points~rs}\'](props);%>';let keyPoints=ctrl['@:{get.ctrl.points~rs}'](props);;$__line=79;$__art="{{each keyPoints as key}}";$__ctrl="for(let $q_c_jzznngoxf=keyPoints.length,$q_key_eqkpge=0;$q_key_eqkpge<$q_c_jzznngoxf;$q_key_eqkpge++){let key=keyPoints[$q_key_eqkpge];";
for(let $q_c_jzznngoxf=keyPoints.length,$q_key_eqkpge=0;$q_key_eqkpge<$q_c_jzznngoxf;$q_key_eqkpge+=1){
let key=keyPoints[$q_key_eqkpge];
;$$_class='rd-_assets_index_less_-pa rd-_elements_index_less_-svg-rect rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-touch-action-none'+($__line=80,$__art='{{if key.c==props[\'@:{focus.mod~rs}\']}}','');$__ctrl='<%if(key.c==props[\'@:{focus.mod~rs}\']){%>';if(key.c==props['@:{focus.mod~rs}']){;$$_class+=' rd-_elements_index_less_-svg-rect-focus'+($__line=80,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'style': 'left:calc('+($__line=80,$__art='{{=key.x}}',$__ctrl='<%=key.x%>',(key.x))+($__line=80,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' - 4px);top:calc('+($__line=80,$__art='{{=key.y}}',$__ctrl='<%=key.y%>',(key.y))+($__line=80,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' - 4px)','mx5-pointerover': $viewId+'@:{focus.mod.point~rs}({key:\''+($__line=80,$__art='{{=key.c}}',$__ctrl='<%=$encodeQuote(key.c)%>',($encodeQuote(key.c)))+'\'})','title': ($__line=80,$__art='{{=i18n(\'@:{lang#press.drag.modify.point~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.modify.point~rs}\')%>',(i18n('@:{lang#press.drag.modify.point~rs}'))),'mx5-pointerdown': $viewId+'@:{drag.mod.point~rs}({key:\''+($__line=80,$__art='{{=key.c}}',$__ctrl='<%=$encodeQuote(key.c)%>',($encodeQuote(key.c)))+'\'})','class': $$_class,}));
}
}
};$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-unselectable rd-_elements_index_less_-normal'+($__line=7,$__art='{{if selected}}','');$__ctrl='<%if(selected){%>';if(selected){;$$_class+=''+($__line=7,$__art='{{if props.locked}}','');$__ctrl='<%if(props.locked){%>';if(props.locked){;$$_class+=' rd-_elements_index_less_-locked-line'+($__line=7,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_elements_index_less_-focus-line'+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=7,$__art='{{if selfGrouped}}','');$__ctrl='<%if(selfGrouped){%>';if(selfGrouped){;$$_class+=' rd-_elements_index_less_-grouped-self'+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=7,$__art='{{if grouped}}','');$__ctrl='<%if(grouped){%>';if(grouped){;$$_class+=' '+($__line=7,$__art='{{if props.locked}}','');$__ctrl='<%if(props.locked){%>';if(props.locked){;$$_class+=' rd-_elements_index_less_-grouped-locked-line'+($__line=7,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_elements_index_less_-grouped-line'+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=7,$__art='{{if (modifier & denum[\'@:{enum#modifier.nomask~rs}\'])|| props.readonly}}','');$__ctrl='<%if((modifier & denum[\'@:{enum#modifier.nomask~rs}\'])|| props.readonly){%>';if((modifier & denum['@:{enum#modifier.nomask~rs}'])|| props.readonly){;$$_class+=' rd-_assets_index_less_-pointer-events-none'+($__line=7,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('div',{'id': '_rdm_'+($__line=7,$__art='{{=element.id}}',$__ctrl='<%=element.id%>',(element.id)),'style': 'left:'+($__line=7,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=7,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=7,$__art='{{=max(props.width,minSize())}}',$__ctrl='<%=max(props.width,minSize())%>',(max(props.width,minSize())))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=7,$__art='{{=max(props.height,minSize())}}',$__ctrl='<%=max(props.height,minSize())%>',(max(props.height,minSize())))+($__line=7,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=7,$__art='{{=r}}',$__ctrl='<%=r%>',(r))+'deg)','class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/normal.html'; throw msg; }  } ,
    init() {
        this.set({
            denum: enum_1,
            max,
            min,
            minSize: () => const_1['@:{const#to.unit~rs}'](1),
            whEnum: enum_1['@:{enum#modifier.width~rs}'] | enum_1['@:{enum#modifier.height~rs}'],
            toPx: const_1['@:{const#to.px~rs}'],
        });
    },
    async render() {
        //console.log('rerender');
        await this.digest();
        let ta = node(`_rd_ta_${this.id}`);
        if (ta) {
            ta.focus();
            ta.selectionStart = ta.value.length;
        }
    },
    '@:{icon.pointer.down~rs}'(element) {
        //以下是格子元素取消选中格子的操作
        let { ctrl, props, id, type } = element;
        if ((ctrl.as & CellAndHod) &&
            (props.focusCol != -1 ||
                props.focusRow != -1)) {
            props.focusRow = -1;
            props.focusCol = -1;
            this['@:{update~rs}'](element);
            State.fire('@:{event#stage.select.element.props.change~rs}', {
                '@:{ids~rs}': {
                    [id]: 1
                },
                '@:{types~rs}': {
                    [type]: 1
                },
                '@:{props~rs}': {
                    '@:{focus.cell~rs}': 1
                }
            });
        }
    },
    '@:{check.status~rs}'() {
        let map = stage_selection_1['@:{selection#get.selected.map~rs}']();
        let elements = State.get('@:{global#stage.select.elements~rs}');
        let count = elements.length;
        let element = this.get('element');
        if (element) {
            let id = element.id;
            let groups = State.get('@:{global#stage.elements.groups~rs}');
            let list = groups[id], grouped = 0;
            if (!map[id] &&
                list) {
                for (let n of list) {
                    if (map[n]) {
                        grouped = 1;
                        break;
                    }
                }
            }
            // if (data.selected) {
            //     if (!Has(map, id)) {
            //         let vf = Vframe.get('entity_' + this.id);
            //         if (vf) {
            //             vf.invoke('@:{lost.select}');
            //         }
            //     }
            // } else {
            //     if (Has(map, id)) {
            //         let vf = Vframe.get('entity_' + this.id);
            //         if (vf) {
            //             vf.invoke('@:{got.select}');
            //         }
            //     }
            // }
            //console.log(Has(map, id));
            let selected = has(map, id);
            if (!selected) {
                element.props['@:{focus.mod~rs}'] = '';
                element.props['@:{show.text~rs}'] = 0;
                let start = this.root;
                while (start &&
                    start.id != '_rd_sc') { //修复在overflow hidden下有输入框，容器会向上滚动以以显示，当输入框隐藏时，需要滚动回来
                    if (start.dataset &&
                        start.dataset.as == 'hod') {
                        start.scrollTop = 0;
                        start.scrollLeft = 0;
                        break;
                    }
                    start = start.parentNode;
                }
            }
            this.set({
                selfGrouped: list,
                grouped,
                selected,
                count
            });
        }
    },
}).merge(index_1, ebase_1);

});