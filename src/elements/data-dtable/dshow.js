/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/data-dtable/dshow",["51","../../50/53","../../58/59/index","../../5g/hodbase","../../5g/hodext","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");
let $quick_gd_static_text;
let $quick_gw_static_text;
let $quick_gT_2_static_node;
let $quick_gT_3_static_node;
let $quick_gT_4_static_node;
let $quick_gT_5_static_node;
let $quick_gT_6_static_node;
let $quick_gT_7_static_node;
let $quick_gT_8_static_node;
let $quick_gz_static_text;
let $quick_gA_static_text;
let $quick_gB_static_text;
let $quick_gC_static_text;
let $quick_gD_static_text;
let $quick_gE_static_text;
let $quick_gF_static_text;
let $quick_gG_static_text;
let $quick_gT_0_static_attr={'class': 'rd-gV rd-gX rd-ge rd-h5 rd-hX rd-i_ rd-ic',};
let $quick_gT_1_static_attr={'class': 'rd-g6',};
let $quick_gT_9_static_attr={'class': 'rd-gV rd-gX rd-hE rd-hJ rd-ig rd-ip',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let index_1 = require("../../58/59/index");
let hodbase_1 = require("../../5g/hodbase");
let hodext_1 = require("../../5g/hodext");
let { View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	selectRect,
	srRow,
	srCol,
	element,
	fs,
	toUnit,
	i18n,
	selected,
	count,
	fieldRow,
	fieldCol,
	grouped,
	toPx,}=$dataFromView,
$text,
$$_class,
$vnode_7,
$$_style,
$vnode_8,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];$text='';let max=Math.max,min=Math.min;;$text+=' ';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,readonly=props.readonly;;$text+=' ';let bwn=(borderdeed=='collapse'?1:2)*borderwidth;;$vnode_3=[];$text='';let findTotalRow=0;;$text+=' ';let findLabelRow=0;;
for(let $q_a_sogvegrymr=props.rows,$q_c_ccyfcpnx=$q_a_sogvegrymr.length,ri=0;ri<$q_c_ccyfcpnx;ri+=1){
let row=$q_a_sogvegrymr[ri];

if(row.label){
findLabelRow=1;
}
if(((!row.total||!props.hideTotal)&&(!findTotalRow||!props.hideFoot))&&(findLabelRow||!props.hideHead)&&(!row.label||!props.hideLabel)){
$vnode_4=[];
for(let $q_a_bbvcyz=row.cols,$q_c_ynskoej=$q_a_bbvcyz.length,ci=0;ci<$q_c_ynskoej;ci+=1){
let col=$q_a_bbvcyz[ci];
$text='';let hasContent=col[col.type+'Content'];;$text+=' ';let hasElements=col.elements&&col.elements.length;;$text+=' ';let asHod=hasElements||(!hasContent&&(findTotalRow==1||!findLabelRow));;$text+=' ';let hasInput=!hasElements&&!row.data&&col.type=='text';;$vnode_5=[];$vnode_6=[];
if(col.elements&&col.elements.length){

for(let $q_a_pkzpfyg=col.elements,$q_c_ypzhmtmnyb=$q_a_pkzpfyg.length,$q_key_cororei=0;$q_key_cororei<$q_c_ypzhmtmnyb;$q_key_cororei+=1){
let e=$q_a_pkzpfyg[$q_key_cororei];
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,fs,unit','class': 'rd-iz','id': (e.id),'mx5-view': '5m/'+(e.type)+'/designer?element='+$keyOf($refData,e,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_cororei)+'.eG')+'&fs='+$keyOf($refData,fs,'eH')+'&ownerId=_rd_h_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&maskId=_rd_hm_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&unit='+$keyOf($refData,unit,'eI'),'mx5-pointerdown': $viewId+'1_jw({element:\''+$keyOf($refData,e,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_cororei)+'.eG')+'\',maskId:\'_rd_hm_'+($encodeQuote(element.id))+'_'+($encodeQuote(ri))+'_'+($encodeQuote(ci))+'\'})',}));
}
}else{

if(!fs && col.type){
$text='';if(col.type=='text'){;$text+='  ';}else if(col.type=='image'){;$text+='  ';}else if(col.type=='barcode'){;$text+='  ';}else if(col.type=='qrcode'){;$text+='  ';};$vnode_7=[$createVNode(0,$text)];$vnode_6.push($createVNode('i',$quick_gT_0_static_attr,$vnode_7));
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
if(col.bindKey){

if(!fs&&!props.locked){
$vnode_8=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];$vnode_7.push($createVNode('i',{'class': 'rd-gV rd-ge rd-h5 rd-hW rd-hw rd-i_ rd-ib rd-iz','mx5-pointerdown': $viewId+'2_kg()','mx5-click': $viewId+'_ke({row:'+(ri)+',col:'+(ci)+'})','title': (i18n('i1')),},$vnode_8));
}$vnode_7.push($createVNode(0,'[绑定:'+(col.bindName)+']'));
if(!col.type){
$vnode_7.push($quick_gw_static_text||($quick_gw_static_text=$createVNode(0,'，未指定格子内容')));
}
}else if(col.type=='text'){

if(!row.data){
;$$_style='width:calc(100% - '+(paddingLeft+paddingRight)+(unit)+');text-align:';if(col.hpos=='center'){;$$_style+='center';}else if(col.hpos=='flex-end'){;$$_style+='right';}else{;$$_style+='left';};$vnode_7.push($createVNode('input',{'as': 'd-input','class': 'rd-gV rd-gg rd-iv','value': (col.textContent),'mx5-input': $viewId+'_kn({cell:\''+$keyOf($refData,col,'eD.'+(ri)+'.eE.'+(ci)+'.eJ')+'\',key:\'textContent\'})','mx5-focusin': $viewId+'_ko({row:'+(ri)+',col:'+(ci)+'})','style': $$_style,},1,$special_2));
}
if(col.textContent){
$vnode_8=[$createVNode(0,(col.textContent),1)];$vnode_7.push($createVNode('div',$quick_gT_1_static_attr,$vnode_8));
}
}else if(col.type=='image'){

if(col.imageContent){
;$$_style='';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:';if(col.imageRotateX){;$$_style+='rotateX(180deg)';};if(col.imageRotateY){;$$_style+=' rotateY(180deg)';};};$vnode_7.push($createVNode('img',{'class': 'rd-gB rd-gP rd-gQ','src': (col.imageContent),'style': $$_style,},1));
}
}else if(col.type=='barcode'){

if(col.barcodeContent){
$vnode_7.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-g9','style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit)+';align-items:'+(col.vpos),'mx5-view': '5m/subs/barcode?lineColor='+($encodeUrl(col.barcodeColor))+'&lineWidth='+($encodeUrl(col.barcodeLineWidth))+'&showText='+($encodeUrl(col.barcodeShowText))+'&format='+($encodeUrl(col.barcodeFormat))+'&value='+($encodeUrl(col.barcodeContent)),}));
}
}else if(col.type=='qrcode'){

if(col.qrcodeContent){
$vnode_7.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit),'mx5-view': '5m/subs/qrcode?vpos='+($encodeUrl(col.vpos))+'&value='+($encodeUrl(col.qrcodeContent)),}));
}
}else if(col.type=='sum'){

if($quick_gT_2_static_node){
$vnode_7.push($quick_gT_2_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本单求和]')];$vnode_7.push($quick_gT_2_static_node=$createVNode('div',{'_': 'eD','class': 'rd-g6',},$vnode_8));
}

}else if(col.type=='sumpage'){

if($quick_gT_3_static_node){
$vnode_7.push($quick_gT_3_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本页求和]')];$vnode_7.push($quick_gT_3_static_node=$createVNode('div',{'_': 'eE','class': 'rd-g6',},$vnode_8));
}

}else if(col.type=='acc'){

if($quick_gT_4_static_node){
$vnode_7.push($quick_gT_4_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本页累计]')];$vnode_7.push($quick_gT_4_static_node=$createVNode('div',{'_': 'eF','class': 'rd-g6',},$vnode_8));
}

}else if(col.type=='avg'){

if($quick_gT_5_static_node){
$vnode_7.push($quick_gT_5_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本单平均]')];$vnode_7.push($quick_gT_5_static_node=$createVNode('div',{'_': 'eG','class': 'rd-g6',},$vnode_8));
}

}else if(col.type=='avgpage'){

if($quick_gT_6_static_node){
$vnode_7.push($quick_gT_6_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本页平均]')];$vnode_7.push($quick_gT_6_static_node=$createVNode('div',{'_': 'eH','class': 'rd-g6',},$vnode_8));
}

}else if(col.type=='avgacc'){

if($quick_gT_7_static_node){
$vnode_7.push($quick_gT_7_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:累计平均]')];$vnode_7.push($quick_gT_7_static_node=$createVNode('div',{'_': 'eI','class': 'rd-g6',},$vnode_8));
}

}else if(col.type=='custom'){

if($quick_gT_8_static_node){
$vnode_7.push($quick_gT_8_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:自定义函数]')];$vnode_7.push($quick_gT_8_static_node=$createVNode('div',{'_': 'eJ','class': 'rd-g6',},$vnode_8));
}

}else{
$vnode_8=[$createVNode(0,(col.type))];$vnode_7.push($createVNode('div',$quick_gT_1_static_attr,$vnode_8));
};$$_style='padding:'+(paddingTop)+(unit)+' '+(paddingRight)+(unit)+' '+(paddingBottom)+(unit)+' '+(paddingLeft)+(unit)+';width:'+(realWidth)+(unit)+';height:'+(realHeight)+(unit)+';align-items:'+(col.vpos)+';justify-content:'+(col.hpos)+';opacity:'+(col.alpha)+';';if(col.background){;$$_style+='background:'+(col.background)+';';};if(col.textFontsize!=null){;$$_style+='color:'+(col.textForecolor)+';letter-spacing:'+(col.textLetterspacing)+(unit)+';';if(col.textStyleBold){;$$_style+='font-weight:bold;';};if(col.textStyleItalic){;$$_style+='font-style:italic;';};if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:';if(col.textStyleStrike){;$$_style+='line-through';}else if(col.textStyleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='font-family:'+(col.textFontfamily)+';font-size:'+(col.textFontsize)+(unit)+';';};$vnode_6.push($createVNode('div',{'class': 'rd-g9 rd-gW rd-h0','style': $$_style,},$vnode_7));
}$vnode_5.push($createVNode('div',{'class': 'rd-gN rd-gO rd-gW rd-h0','data-as': 'hod','id': '_rd_hm_'+(element.id)+'_'+(ri)+'_'+(ci),},$vnode_6));
if(!fs&&!props.locked){
let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_6=[];
if(focusCurrentCell&&!grouped){
$text='';let height=(min(26,toPx(col.height)-6)-4);;$text+=' ';let width=(min(26,toPx(col.width)-6)-4);;$text+=' ';let top=(toPx(col.height)-height-bwn)/2-1;;$text+=' ';let left=(toPx(col.width)-width-bwn)/2-1;;$vnode_6.push($createVNode('div',{'class': 'rd-gV rd-gY rd-hF rd-iz','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('i2')),'mx5-pointerdown': $viewId+'1_kh({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-gV rd-gY rd-hG rd-iz','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('i2')),'mx5-pointerdown': $viewId+'1_kh({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-gV rd-gY rd-hH rd-iz','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('i3')),'mx5-pointerdown': $viewId+'1_kh({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-gV rd-gY rd-hI rd-iz','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('i3')),'mx5-pointerdown': $viewId+'1_kh({key:\'tm\'})',}));
};$$_class='rd-gV rd-hJ rd-ig rd-gX';if(focusCurrentCell){;$$_class+=' rd-hE';};if(fieldRow==ri&&fieldCol==ci){;$$_class+=' rd-hL';};$$_style='';if(focusCurrentCell){;if(!col.bLeft){;$$_style+='border-left-style:dotted;';};if(!col.bTop){;$$_style+='border-top-style:dotted;';};if(!col.bRight){;$$_style+='border-right-style:dotted;';};if(!col.bBottom){;$$_style+='border-bottom-style:dotted;';};};$vnode_5.push($createVNode('div',{'id': ((asHod))&&('_rd_dm_'+(element.id)+'_'+(ri)+'_'+(ci)),'class': $$_class,'style': $$_style,},$vnode_6));
}
if(!readonly && !fs && col.elements && col.elements.length){
$vnode_6=[$quick_gz_static_text||($quick_gz_static_text=$createVNode(0,''))];$vnode_5.push($createVNode('i',{'class': 'rd-gM rd-gV rd-ge rd-h5 rd-hW rd-hw rd-ib rd-ig rd-it rd-iu','title': (i18n('js')),},$vnode_6));
}
if(selectRect&&srRow==ri&&srCol==ci){
$vnode_5.push($createVNode('div',{'class': 'rd-gV rd-gX rd-ie','style': 'display:block;left:'+(selectRect.x)+'px;top:'+(selectRect.y)+'px;width:'+(selectRect.width)+'px;height:'+(selectRect.height)+'px',}));
};$$_class='rd-hB rd-hz rd-iz';if(row.data){;$$_class+=' rd-hC';};if(selectRect&&srRow==ri&&srCol==ci){;$$_class+=' rd-h0';};$vnode_4.push($createVNode('td',{'colspan': ($temp_var=(col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=(col.rowspan))!=null&&$temp_var,'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#ddd6')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#ddd6')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#ddd6')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#ddd6'),'mx5-pointerdown': $viewId+'_kf({row:'+(ri)+',col:'+(ci)+',elm:'+(asHod)+',input:'+(hasInput)+'})','mx5-dragenter': ((row.data))&&($viewId+'_jW({row:'+(ri)+',col:'+(ci)+'})'),'mx5-dragleave': ((row.data))&&($viewId+'_jX({row:'+(ri)+',col:'+(ci)+'})'),'id': ((asHod))&&('_rd_h_'+(element.id)+'_'+(ri)+'_'+(ci)),'mx5-contextmenu': ((asHod))&&($viewId+'_km({row:'+(ri)+',col:'+(ci)+'})'),'class': $$_class,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
if(row.data){

for(let ti=0;ti<2;ti++){
$vnode_4=[];
for(let $q_a_boabtqjm=row.cols,$q_c_rucpsrbmi=$q_a_boabtqjm.length,ci=0;ci<$q_c_rucpsrbmi;ci+=1){
let col=$q_a_boabtqjm[ci];
$vnode_5=[];$vnode_5.push($createVNode(0,(props.bind._tip??'')));
if(!fs && col.type=='text'&&col.bindKey){
$vnode_6=[$createVNode(0,(col.textAutoReturn?'自动换行':'超长省略'))];$vnode_5.push($createVNode('span',{'class': 'rd-g6 rd-gM rd-gV rd-gq rd-h5 rd-i_ rd-id','style': 'width:'+(min(col.width-bwn-toUnit(5),toUnit(40)))+(unit),},$vnode_6));
}$vnode_4.push($createVNode('td',{'class': 'rd-hB rd-hz','style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#ddd6')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#ddd6')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#ddd6')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#ddd6')+';background:#eeeeee80','colspan': ($temp_var=(col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=(col.rowspan))!=null&&$temp_var,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
}
if(row.total){
findTotalRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1.push($createVNode('table',{'class': 'rd-gN rd-hA','style': 'border-collapse:'+(borderdeed),},$vnode_2));
if(!fs&&props.tfootSpacing){
$vnode_2=[];
if(selected&&!props.locked&&count==1&&props.focusRow==-2&&props.focusCol==-2){
let left=(toPx(props.width)-22-bwn)/2-1;;$vnode_3=[$createVNode('div',{'class': 'rd-gV rd-gY rd-hH rd-iz','style': 'width:22px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('jt')),'mx5-pointerdown': $viewId+'1_kh({key:\'bm\'})',})];$vnode_2.push($createVNode('div',$quick_gT_9_static_attr,$vnode_3));
}$vnode_1.push($createVNode('div',{'class': 'rd-gW rd-if rd-iz','style': 'height:'+(props.tfootSpacing)+(unit),'mx5-pointerdown': $viewId+'_kf({row:-2,col:-2})',},$vnode_2));
}$vnode_2=[$quick_gA_static_text||($quick_gA_static_text=$createVNode(0,'重复数据行'))];$vnode_1.push($createVNode('div',{'class': 'rd-gN rd-gS rd-gV rd-hX','style': 'top:'+(props.tipTop)+(unit)+';left:0;font-size:'+(props.tfs)+(unit)+';transform:translateY(-50%)',},$vnode_2));
if(!fs&&selected&&count==1){
let h=toPx(props.headHeight);;
if(!props.hideHead){
$vnode_2=[$createVNode('path',{'d': 'M10 0C0 0 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.headStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-gV rd-gX rd-h1',},$vnode_2));$vnode_2=[$quick_gB_static_text||($quick_gB_static_text=$createVNode(0,'头'))];$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gX rd-hX','style': 'left:-15px;top:'+(h/2+toPx(props.headStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
if(!props.hideLabel){
h=toPx(props.labelHeight);$vnode_2=[$createVNode('path',{'d': 'M10 0C0 0 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.labelStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-gV rd-gX rd-h1',},$vnode_2));$vnode_2=[$quick_gC_static_text||($quick_gC_static_text=$createVNode(0,'标题'))];$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gX rd-hX','style': 'left:-15px;top:'+(h/2+toPx(props.labelStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}h=toPx(props.bodyHeight);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.bodyStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-gV rd-gX rd-h1',},$vnode_2));$vnode_2=[$quick_gD_static_text||($quick_gD_static_text=$createVNode(0,'数据'))];$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gX rd-hX','style': 'left:-15px;top:'+(h/2+toPx(props.bodyStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
if(!props.hideTotal){
h=toPx(props.totalHeight);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.totalStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-gV rd-gX rd-h1',},$vnode_2));$vnode_2=[$quick_gE_static_text||($quick_gE_static_text=$createVNode(0,'合计'))];$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gX rd-hX','style': 'left:-15px;top:'+(h/2+toPx(props.totalStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
if(!props.hideFoot){
h=props.footHeight;
if(h>0){
h=toPx(h);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.footStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-gV rd-gX rd-h1',},$vnode_2));$vnode_2=[$quick_gF_static_text||($quick_gF_static_text=$createVNode(0,'尾'))];$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gX rd-hX','style': 'left:-15px;top:'+(h/2+toPx(props.footStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
}$text='';h=props.spacingHeight;$text+=' ';h=toPx(h);
if(h>3){
$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.spacingStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-gV rd-gX rd-h1',},$vnode_2));$vnode_2=[$quick_gG_static_text||($quick_gG_static_text=$createVNode(0,'留白'))];$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gX rd-hX','style': 'left:-15px;top:'+(h/2+toPx(props.spacingStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
}$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),'mx5-drop': $viewId+'_jY()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            toPx: const_1['gY'],
            toUnit: const_1['ge'],
            fieldRow: -1,
            fieldCol: -1
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
}).merge(index_1, hodbase_1, hodext_1);

});