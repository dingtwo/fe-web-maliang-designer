/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/form-collect/dshow",["4e","../../4d/4g","../../4d/4q","../../4l/4m/index","../../4t/hodbase","../../4t/hodext","../../4t/table","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");
let $quick_e__static_text;
let $quick_ea_static_text;
let $quick_eb_static_text;
let $quick_d0_static_text;
let $quick_d2_static_text;
let $quick_d3_static_text;
let $quick_d4_static_text;
let $quick_d5_static_text;
let $quick_d6_static_text;
let $quick_er_0_static_attr={'class': 'rd-e5 rd-el rd-en rd-fH rd-f_',};
let $quick_er_1_static_attr={'class': 'rd-eB rd-eO rd-eT rd-ed rd-ee rd-ez',};
let $quick_er_2_static_attr={'class': 'rd-dF rd-el rd-fA rd-fD rd-fn rd-fv',};
let $quick_er_3_static_attr={'class': 'rd-ew',};
let $special_2={'value':'value',};
let $special_4={'selected':'selected',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let history_1 = require("../../4d/4q");
let index_1 = require("../../4l/4m/index");
let hodbase_1 = require("../../4t/hodbase");
let hodext_1 = require("../../4t/hodext");
let table_1 = require("../../4t/table");
let { View, State } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	fs,
	selected,
	count,
	toPx,
	i18n,
	getMaxCol,
	excelTitle,
	selectRect,
	srRow,
	srCol,
	element,
	toUnit,
	fieldRow,
	fieldCol,
	grouped,}=$dataFromView,
$text,
$$_class,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_7,
$$_style,
$vnode_8,
$vnode_9,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];$text='';let max=Math.max,min=Math.min;;$text+=' ';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,excel=props.excel,excelLeft=props.excelLeft,excelTop=props.excelTop,excelBackground=props.excelBackground,excelForecolor=props.excelForecolor,readonly=props.readonly;;$text+=' ';let rowIndex=0;;$text+=' ';let bwn=(borderdeed=='collapse'?1:2)*borderwidth;;$vnode_3=[];
if(excel){
$vnode_4=[];$vnode_5=[];
if(!fs&&selected&&!props.locked&&count==1&&props.focusRow==-3&&props.focusCol==-3){
$text='';let height=(min(26,toPx(excelTop)-6)-4);;$text+=' ';let width=(min(26,toPx(excelLeft)-6)-4);;$text+=' ';let top=(toPx(excelTop)-height-bwn)/2-1;;$text+=' ';let left=(toPx(excelLeft)-width-bwn)/2-1;;$vnode_6=[$createVNode('div',{'class': 'rd-e6 rd-el rd-eo rd-f0','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('he')),'mx5-pointerdown': $viewId+'1_hF({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-e7 rd-el rd-eo rd-f0','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('he')),'mx5-pointerdown': $viewId+'1_hF({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-e8 rd-el rd-eo rd-f0','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('hf')),'mx5-pointerdown': $viewId+'1_hF({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-e9 rd-el rd-eo rd-f0','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('hf')),'mx5-pointerdown': $viewId+'1_hF({key:\'tm\'})',})];$vnode_5.push($createVNode('div',$quick_er_0_static_attr,$vnode_6));
}$vnode_4.push($createVNode('td',{'class': 'rd-e0 rd-e2 rd-em rd-f0','style': 'height:'+(excelTop)+(unit)+';background:'+(excelBackground)+';border:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(bordercolor),'mx5-pointerdown': $viewId+'_hD({row:-3,col:-3})',},$vnode_5));let maxCol=getMaxCol(props);;
for(let i=0;i<maxCol;i++){
$vnode_6=[$createVNode(0,(excelTitle(i)))];$vnode_5=[$createVNode('div',$quick_er_1_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-e0 rd-e2','style': 'height:'+(excelTop)+(unit)+';background:'+(excelBackground)+';border:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(bordercolor)+';color:'+(excelForecolor),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$text='';let findTotalRow=0;;$text+=' ';let findLabelRow=0;;
for(let $q_a_zzvmpxrvc=props.rows,$q_c_mmmfjrbo=$q_a_zzvmpxrvc.length,ri=0;ri<$q_c_mmmfjrbo;ri+=1){
let row=$q_a_zzvmpxrvc[ri];

if(row.label){
findLabelRow=1;
}
if(((!row.total||!props.hideTotal)&&(!findTotalRow||!props.hideFoot))&&(findLabelRow||!props.hideHead)&&(!row.label||!props.hideLabel)){
$vnode_4=[];
if(excel){
$vnode_6=[$createVNode(0,(++rowIndex))];$vnode_5=[$createVNode('div',$quick_er_1_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-e0 rd-e2','style': 'width:'+(excelLeft)+(unit)+';background:'+(excelBackground)+';border:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(bordercolor)+';color:'+(excelForecolor),},$vnode_5));
}
for(let $q_a_vptwbwr=row.cols,$q_c_nnxohdp=$q_a_vptwbwr.length,ci=0;ci<$q_c_nnxohdp;ci+=1){
let col=$q_a_vptwbwr[ci];
$text='';let hasContent=col[col.type+'Content']||col.type=='input'||col.type=='dropdown';;$text+=' ';let hasElements=col.elements&&col.elements.length;;$text+=' ';let asHod=hasElements||(!hasContent&&(findTotalRow==1||!findLabelRow));;$text+=' ';let hasInput=!hasElements&&!row.data&&col.type=='text';;$vnode_5=[];$vnode_6=[];
if(col.elements&&col.elements.length){

for(let $q_a_nksfcfjup=col.elements,$q_c_mtbohaen=$q_a_nksfcfjup.length,$q_key_bueeccvjz=0;$q_key_bueeccvjz<$q_c_mtbohaen;$q_key_bueeccvjz+=1){
let e=$q_a_nksfcfjup[$q_key_bueeccvjz];
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,fs,unit','class': 'rd-f0','id': (e.id),'mx5-view': '53/'+(e.type)+'/designer?element='+$keyOf($refData,e,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+($q_key_bueeccvjz)+'.cK')+'&fs='+$keyOf($refData,fs,'cL')+'&ownerId=_rd_h_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&maskId=_rd_hm_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&unit='+$keyOf($refData,unit,'cM'),'mx5-pointerdown': $viewId+'1_gU({element:\''+$keyOf($refData,e,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+($q_key_bueeccvjz)+'.cK')+'\',maskId:\'_rd_hm_'+($encodeQuote(element.id))+'_'+($encodeQuote(ri))+'_'+($encodeQuote(ci))+'\'})',}));
}
}else{

if(!fs && col.type){
$text='';if(col.type=='text'){;$text+='  ';}else if(col.type=='image'){;$text+='  ';}else if(col.type=='barcode'){;$text+='  ';}else if(col.type=='qrcode'){;$text+='  ';}else if(col.type=='input'){;$text+='  ';};$vnode_7=[$createVNode(0,$text)];$vnode_6.push($createVNode('i',$quick_er_2_static_attr,$vnode_7));
}$text='';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' ';let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);;
if(paddingTop>realHeight){
paddingTop=realHeight;
}
if(paddingTop+paddingBottom>realHeight){
paddingBottom=realHeight-paddingTop;
}
if(paddingLeft>realWidth){
paddingLeft=realWidth;
}
if(paddingLeft+paddingRight>realWidth){
paddingRight=realWidth-paddingLeft;
}$vnode_7=[];
if(col.type=='text'){
;$$_style='width:calc(100% - '+(paddingLeft+paddingRight)+(unit)+');text-align:';if(col.hpos=='center'){;$$_style+='center';}else if(col.hpos=='flex-end'){;$$_style+='right';}else{;$$_style+='left';};$vnode_7.push($createVNode('input',{'as': 'd-input','class': 'rd-dH rd-el rd-fW','value': (col.textContent),'mx5-input': $viewId+'_hL({cell:\''+$keyOf($refData,col,'cH.'+(ri)+'.cI.'+(ci)+'.cN')+'\',key:\'textContent\'})','mx5-focusin': $viewId+'_hM({row:'+(ri)+',col:'+(ci)+'})','style': $$_style,},1,$special_2));
if(col.textContent){
$vnode_8=[$createVNode(0,(col.textContent),1)];$vnode_7.push($createVNode('div',$quick_er_3_static_attr,$vnode_8));
}
}else if(col.type=='image'){

if(col.imageContent){
;$$_style='';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:';if(col.imageRotateX){;$$_style+='rotateX(180deg)';};if(col.imageRotateY){;$$_style+=' rotateY(180deg)';};};$vnode_7.push($createVNode('img',{'class': 'rd-d2 rd-ef rd-eg','src': (col.imageContent),'style': $$_style,},1));
}
}else if(col.type=='barcode'){

if(col.barcodeContent){
$vnode_7.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-ez','style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit)+';align-items:'+(col.vpos),'mx5-view': '53/subs/barcode?lineColor='+($encodeUrl(col.barcodeColor))+'&lineWidth='+($encodeUrl(col.barcodeLineWidth))+'&showText='+($encodeUrl(col.barcodeShowText))+'&format='+($encodeUrl(col.barcodeFormat))+'&value='+($encodeUrl(col.barcodeContent)),}));
}
}else if(col.type=='qrcode'){

if(col.qrcodeContent){
$vnode_7.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit),'mx5-view': '53/subs/qrcode?vpos='+($encodeUrl(col.vpos))+'&value='+($encodeUrl(col.qrcodeContent)),}));
}
}else if(col.type=='sum'){
$vnode_7.push($quick_e__static_text||($quick_e__static_text=$createVNode(0,'[计算:求和]')));
}else if(col.type=='avg'){
$vnode_7.push($quick_ea_static_text||($quick_ea_static_text=$createVNode(0,'[计算:求平均]')));
}else if(col.type=='custom'){
$vnode_7.push($quick_eb_static_text||($quick_eb_static_text=$createVNode(0,'[计算:自定义函数]')));
}else if(col.type=='input'){

if(col.inputMultiline){
;$$_class='rd-ed rd-ee rd-dI';if(col.inputClassName){;$$_class+=' '+(col.inputClassName);};$vnode_7.push($createVNode('textarea',{'as': 'd-input','style': 'color:'+(col.inputForecolor)+';font-size:'+(col.inputFontsize)+(unit)+';letter-spacing:'+(col.inputLetterspacing)+(unit)+';font-family:'+(col.inputFontfamily)+';text-align:'+(col.inputTextAlign),'placeholder': (col.inputplaceholder),'mx5-input': $viewId+'_hL({cell:\''+$keyOf($refData,col,'cH.'+(ri)+'.cI.'+(ci)+'.cN')+'\',key:\'inputText\'})','mx5-focusin': $viewId+'_hM({row:'+(ri)+',col:'+(ci)+'})','value': (col.inputText),'class': $$_class,},0,$special_2));
}else{
;$$_class='rd-ed rd-ee rd-dH';if(col.inputClassName){;$$_class+=' '+(col.inputClassName);};$vnode_7.push($createVNode('input',{'as': 'd-input','style': 'color:'+(col.inputForecolor)+';font-size:'+(col.inputFontsize)+(unit)+';letter-spacing:'+(col.inputLetterspacing)+(unit)+';font-family:'+(col.inputFontfamily)+';text-align:'+(col.inputTextAlign),'placeholder': (col.inputPlaceholder),'value': (col.inputText),'mx5-input': $viewId+'_hL({cell:\''+$keyOf($refData,col,'cH.'+(ri)+'.cI.'+(ci)+'.cN')+'\',key:\'inputText\'})','mx5-focusin': $viewId+'_hM({row:'+(ri)+',col:'+(ci)+'})','class': $$_class,},1,$special_2));
}
}else if(col.type=='dropdown'){
$vnode_8=[];
for(let $q_a_hmvvdbpznx=col.dropdownItems,$q_c_patujfiqj=$q_a_hmvvdbpznx.length,$q_key_gmxhevoi=0;$q_key_gmxhevoi<$q_c_patujfiqj;$q_key_gmxhevoi+=1){
let item=$q_a_hmvvdbpznx[$q_key_gmxhevoi];
$vnode_9=[$createVNode(0,(item.text))];$vnode_8.push($createVNode('option',{'disabled': (item.disabled),'selected': (item.checked),'value': (item.value),},$vnode_9,$special_4));
};$$_class='rd-ed rd-ee';if(col.dropdownClassName){;$$_class+=' '+(col.dropdownClassName);};$vnode_7.push($createVNode('select',{'multiple': (col.dropdownMultipleSelect),'style': 'color:'+(col.dropdownForecolor)+';font-size:'+(col.dropdownFontsize)+(unit)+';letter-spacing:'+(col.dropdownLetterspacing)+(unit)+';font-family:'+(col.dropdownFontfamily),'name': (col.dropdownName),'mx5-change': $viewId+'_hT({cell:\''+$keyOf($refData,col,'cH.'+(ri)+'.cI.'+(ci)+'.cN')+'\'})','class': $$_class,},$vnode_8));
}else{
$vnode_7.push($createVNode(0,(col.type)));
};$$_style='padding:'+(paddingTop)+(unit)+' '+(paddingRight)+(unit)+' '+(paddingBottom)+(unit)+' '+(paddingLeft)+(unit)+';width:'+(realWidth)+(unit)+';height:'+(realHeight)+(unit)+';align-items:'+(col.vpos)+';justify-content:'+(col.hpos)+';opacity:'+(col.alpha)+';';if(col.background){;$$_style+='background:'+(col.background)+';';};if(col.textFontsize!=null){;$$_style+='color:'+(col.textForecolor)+';letter-spacing:'+(col.textLetterspacing)+(unit)+';';if(col.textStyleBold){;$$_style+='font-weight:bold;';};if(col.textStyleItalic){;$$_style+='font-style:italic;';};if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:';if(col.textStyleStrike){;$$_style+='line-through';}else if(col.textStyleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='font-family:'+(col.textFontfamily)+';font-size:'+(col.textFontsize)+(unit)+';';};$vnode_6.push($createVNode('div',{'class': 'rd-em rd-ez rd-fq','style': $$_style,},$vnode_7));
}$vnode_5.push($createVNode('div',{'class': 'rd-ed rd-ee rd-em rd-fq','data-as': 'hod','id': '_rd_hm_'+(element.id)+'_'+(ri)+'_'+(ci),},$vnode_6));
if(!fs&&!props.locked){
let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_6=[];
if(focusCurrentCell&&!grouped){
$text='';let height=(min(26,toPx(col.height)-6)-4);;$text+=' ';let width=(min(26,toPx(col.width)-6)-4);;$text+=' ';let top=(toPx(col.height)-height-bwn)/2-1;;$text+=' ';let left=(toPx(col.width)-width-bwn)/2-1;;$vnode_6.push($createVNode('div',{'class': 'rd-e6 rd-el rd-eo rd-f0','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('gt')),'mx5-pointerdown': $viewId+'1_hF({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-e7 rd-el rd-eo rd-f0','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('gt')),'mx5-pointerdown': $viewId+'1_hF({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-e8 rd-el rd-eo rd-f0','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('gu')),'mx5-pointerdown': $viewId+'1_hF({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-e9 rd-el rd-eo rd-f0','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('gu')),'mx5-pointerdown': $viewId+'1_hF({key:\'tm\'})',}));
};$$_class='rd-el rd-f_ rd-fH rd-en';if(focusCurrentCell){;$$_class+=' rd-e5';};if(fieldRow==ri&&fieldCol==ci){;$$_class+=' rd-fb';};$$_style='';if(focusCurrentCell){;if(!col.bLeft){;$$_style+='border-left-style:dotted;';};if(!col.bTop){;$$_style+='border-top-style:dotted;';};if(!col.bRight){;$$_style+='border-right-style:dotted;';};if(!col.bBottom){;$$_style+='border-bottom-style:dotted;';};};$vnode_5.push($createVNode('div',{'id': ((asHod))&&('_rd_dm_'+(element.id)+'_'+(ri)+'_'+(ci)),'class': $$_class,'style': $$_style,},$vnode_6));
}
if(!readonly && !fs && col.elements && col.elements.length){
$vnode_6=[$quick_d0_static_text||($quick_d0_static_text=$createVNode(0,''))];$vnode_5.push($createVNode('i',{'class': 'rd-dF rd-eX rd-ec rd-el rd-fC rd-fH rd-fU rd-fV rd-fm rd-fv','title': (i18n('gU')),},$vnode_6));
}
if(selectRect&&srRow==ri&&srCol==ci){
$vnode_5.push($createVNode('div',{'class': 'rd-el rd-en rd-fF','style': 'display:block;left:'+(selectRect.x)+'px;top:'+(selectRect.y)+'px;width:'+(selectRect.width)+'px;height:'+(selectRect.height)+'px',}));
};$$_class='rd-e2 rd-e0 rd-f0';if(selectRect&&srRow==ri&&srCol==ci){;$$_class+=' rd-fq';};$vnode_4.push($createVNode('td',{'colspan': ($temp_var=(col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=(col.rowspan))!=null&&$temp_var,'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#ddd6')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#ddd6')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#ddd6')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#ddd6'),'mx5-pointerdown': $viewId+'_hD({row:'+(ri)+',col:'+(ci)+',elm:'+(asHod)+',input:'+(hasInput)+'})','id': ((asHod))&&('_rd_h_'+(element.id)+'_'+(ri)+'_'+(ci)),'mx5-contextmenu': ((asHod))&&($viewId+'_hK({row:'+(ri)+',col:'+(ci)+'})'),'class': $$_class,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
if(row.total){
findTotalRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];;$$_class='rd-ed rd-e1';if(readonly){;$$_class+=' rd-en';};$vnode_1.push($createVNode('table',{'style': 'border-collapse:'+(borderdeed),'class': $$_class,},$vnode_2));
if(!fs&&selected&&count==1){
let h=toPx(props.headHeight);;
if(!props.hideHead){
$vnode_2=[$createVNode('path',{'d': 'M10 0C0 0 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.headStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-el rd-en rd-fr',},$vnode_2));$vnode_2=[$quick_d2_static_text||($quick_d2_static_text=$createVNode(0,'头'))];$vnode_1.push($createVNode('div',{'class': 'rd-el rd-en rd-fn','style': 'left:-15px;top:'+(h/2+toPx(props.headStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
if(!props.hideLabel){
h=toPx(props.labelHeight);$vnode_2=[$createVNode('path',{'d': 'M10 0C0 0 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.labelStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-el rd-en rd-fr',},$vnode_2));$vnode_2=[$quick_d3_static_text||($quick_d3_static_text=$createVNode(0,'标题'))];$vnode_1.push($createVNode('div',{'class': 'rd-el rd-en rd-fn','style': 'left:-15px;top:'+(h/2+toPx(props.labelStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}h=toPx(props.bodyHeight);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.bodyStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-el rd-en rd-fr',},$vnode_2));$vnode_2=[$quick_d4_static_text||($quick_d4_static_text=$createVNode(0,'数据'))];$vnode_1.push($createVNode('div',{'class': 'rd-el rd-en rd-fn','style': 'left:-15px;top:'+(h/2+toPx(props.bodyStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
if(!props.hideTotal){
h=toPx(props.totalHeight);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.totalStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-el rd-en rd-fr',},$vnode_2));$vnode_2=[$quick_d5_static_text||($quick_d5_static_text=$createVNode(0,'合计'))];$vnode_1.push($createVNode('div',{'class': 'rd-el rd-en rd-fn','style': 'left:-15px;top:'+(h/2+toPx(props.totalStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
if(!props.hideFoot){
h=props.footHeight;
if(h>0){
h=toPx(h);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.footStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-el rd-en rd-fr',},$vnode_2));$vnode_2=[$quick_d6_static_text||($quick_d6_static_text=$createVNode(0,'尾'))];$vnode_1.push($createVNode('div',{'class': 'rd-el rd-en rd-fn','style': 'left:-15px;top:'+(h/2+toPx(props.footStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
}
}$vnode_0=[$createVNode('div',{'class': 'rd-el rd-fH','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            toPx: const_1['eo'],
            toUnit: const_1['dF'],
            getMaxCol(props) {
                let ext = table_1['dE'](props, 1);
                return ext['_hv'];
            },
            fieldRow: -1,
            fieldCol: -1
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_hT<change>'(e) {
        let { params, eventTarget } = e;
        let { cell } = params;
        let value = eventTarget.options;
        let dropdownItems = cell.dropdownItems, changed;
        console.log(dropdownItems, value);
        for (let i = value.length; i--;) {
            let item = value[i];
            let src = dropdownItems[item.index];
            if (src.checked != item.selected) {
                src.checked = item.selected;
                changed = 1;
            }
        }
        console.log(changed);
        if (changed) {
            let element = this.get('element');
            let props = this.get('props');
            this.digest({
                props
            });
            State.fire('dG', {
                '_fm': {
                    [element.id]: 1
                },
                '_fn': {
                    [element.type]: 1
                },
                '_dF': {
                    rows: 1
                }
            });
            history_1["dE"](history_1['ea'], props.ename, element.id + 'er' + 'rows', 500);
        }
    }
}).merge(index_1, hodbase_1, hodext_1);

});