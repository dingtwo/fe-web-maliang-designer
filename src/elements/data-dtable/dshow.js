/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/data-dtable/dshow",["5c","../../5b/5e","../../5j/5k/index","../../5r/hodbase","../../5r/hodext","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");
let $quick_l2_static_text;
let $quick_mk_static_text;
let $quick_mH_2_static_node;
let $quick_mH_3_static_node;
let $quick_mH_4_static_node;
let $quick_mH_5_static_node;
let $quick_mH_6_static_node;
let $quick_mH_7_static_node;
let $quick_mH_8_static_node;
let $quick_mn_static_text;
let $quick_mo_static_text;
let $quick_mp_static_text;
let $quick_mq_static_text;
let $quick_mr_static_text;
let $quick_ms_static_text;
let $quick_mt_static_text;
let $quick_mu_static_text;
let $quick_mH_0_static_attr={'class': 'rd-l3 rd-mJ rd-mL rd-n1 rd-nL rd-nT rd-nY',};
let $quick_mH_1_static_attr={'class': 'rd-mU',};
let $quick_mH_9_static_attr={'class': 'rd-mJ rd-mL rd-n5 rd-ns rd-nx rd-od',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let index_1 = require("../../5j/5k/index");
let hodbase_1 = require("../../5r/hodbase");
let hodext_1 = require("../../5r/hodext");
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
for(let $q_a_idpskayp=props.rows,$q_c_ireoxjjqo=$q_a_idpskayp.length,ri=0;ri<$q_c_ireoxjjqo;ri+=1){
let row=$q_a_idpskayp[ri];

if(row.label){
findLabelRow=1;
}
if(((!row.total||!props.hideTotal)&&(!findTotalRow||!props.hideFoot))&&(findLabelRow||!props.hideHead)&&(!row.label||!props.hideLabel)){
$vnode_4=[];
for(let $q_a_npwqigd=row.cols,$q_c_bgfnyfbk=$q_a_npwqigd.length,ci=0;ci<$q_c_bgfnyfbk;ci+=1){
let col=$q_a_npwqigd[ci];
$text='';let hasContent=col[col.type+'Content'];;$text+=' ';let hasElements=col.elements&&col.elements.length;;$text+=' ';let asHod=hasElements||(!hasContent&&(findTotalRow==1||!findLabelRow));;$text+=' ';let hasInput=!hasElements&&!row.data&&col.type=='text';;$vnode_5=[];$vnode_6=[];
if(col.elements&&col.elements.length){

for(let $q_a_mvzikcbrn=col.elements,$q_c_iwyczickrh=$q_a_mvzikcbrn.length,$q_key_egiqvx=0;$q_key_egiqvx<$q_c_iwyczickrh;$q_key_egiqvx+=1){
let e=$q_a_mvzikcbrn[$q_key_egiqvx];
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,fs,unit','class': 'rd-on','id': (e.id),'mx5-view': '61/'+(e.type)+'/designer?element='+$keyOf($refData,e,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_egiqvx)+'.i^')+'&fs='+$keyOf($refData,fs,'i*')+'&ownerId=_rd_h_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&maskId=_rd_hm_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&unit='+$keyOf($refData,unit,'i{'),'mx5-pointerdown': $viewId+'1_ph({element:\''+$keyOf($refData,e,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_egiqvx)+'.i^')+'\',maskId:\'_rd_hm_'+($encodeQuote(element.id))+'_'+($encodeQuote(ri))+'_'+($encodeQuote(ci))+'\'})',}));
}
}else{

if(!fs && col.type){
$text='';if(col.type=='text'){;$text+='  ';}else if(col.type=='image'){;$text+='  ';}else if(col.type=='barcode'){;$text+='  ';}else if(col.type=='qrcode'){;$text+='  ';};$vnode_7=[$createVNode(0,$text)];$vnode_6.push($createVNode('i',$quick_mH_0_static_attr,$vnode_7));
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
$vnode_8=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];$vnode_7.push($createVNode('i',{'class': 'rd-l3 rd-mJ rd-n0 rd-nK rd-nT rd-nY rd-nk rd-on','mx5-pointerdown': $viewId+'2_p2()','mx5-click': $viewId+'_p0({row:'+(ri)+',col:'+(ci)+'})','title': (i18n('oQ')),},$vnode_8));
}$vnode_7.push($createVNode(0,'[绑定:'+(col.bindName)+']'));
if(!col.type){
$vnode_7.push($quick_mk_static_text||($quick_mk_static_text=$createVNode(0,'，未指定格子内容')));
}
}else if(col.type=='text'){

if(!row.data){
;$$_style='width:calc(100% - '+(paddingLeft+paddingRight)+(unit)+');text-align:';if(col.hpos=='center'){;$$_style+='center';}else if(col.hpos=='flex-end'){;$$_style+='right';}else{;$$_style+='left';};$vnode_7.push($createVNode('input',{'as': 'd-input','class': 'rd-l5 rd-mJ rd-oj','value': (col.textContent),'mx5-input': $viewId+'_p9({cell:\''+$keyOf($refData,col,'i!.'+(ri)+'.i@.'+(ci)+'.i}')+'\',key:\'textContent\'})','mx5-focusin': $viewId+'_q_({row:'+(ri)+',col:'+(ci)+'})','style': $$_style,},1,$special_2));
}
if(col.textContent){
$vnode_8=[$createVNode(0,(col.textContent),1)];$vnode_7.push($createVNode('div',$quick_mH_1_static_attr,$vnode_8));
}
}else if(col.type=='image'){

if(col.imageContent){
;$$_style='';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:';if(col.imageRotateX){;$$_style+='rotateX(180deg)';};if(col.imageRotateY){;$$_style+=' rotateY(180deg)';};};$vnode_7.push($createVNode('img',{'class': 'rd-mD rd-mE rd-mp','src': (col.imageContent),'style': $$_style,},1));
}
}else if(col.type=='barcode'){

if(col.barcodeContent){
$vnode_7.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-mX','style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit)+';align-items:'+(col.vpos),'mx5-view': '61/subs/barcode?lineColor='+($encodeUrl(col.barcodeColor))+'&lineWidth='+($encodeUrl(col.barcodeLineWidth))+'&showText='+($encodeUrl(col.barcodeShowText))+'&format='+($encodeUrl(col.barcodeFormat))+'&value='+($encodeUrl(col.barcodeContent)),}));
}
}else if(col.type=='qrcode'){

if(col.qrcodeContent){
$vnode_7.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit),'mx5-view': '61/subs/qrcode?vpos='+($encodeUrl(col.vpos))+'&value='+($encodeUrl(col.qrcodeContent)),}));
}
}else if(col.type=='sum'){

if($quick_mH_2_static_node){
$vnode_7.push($quick_mH_2_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本单求和]')];$vnode_7.push($quick_mH_2_static_node=$createVNode('div',{'_': 'i!','class': 'rd-mU',},$vnode_8));
}

}else if(col.type=='sumpage'){

if($quick_mH_3_static_node){
$vnode_7.push($quick_mH_3_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本页求和]')];$vnode_7.push($quick_mH_3_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mU',},$vnode_8));
}

}else if(col.type=='acc'){

if($quick_mH_4_static_node){
$vnode_7.push($quick_mH_4_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本页累计]')];$vnode_7.push($quick_mH_4_static_node=$createVNode('div',{'_': 'i$','class': 'rd-mU',},$vnode_8));
}

}else if(col.type=='avg'){

if($quick_mH_5_static_node){
$vnode_7.push($quick_mH_5_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本单平均]')];$vnode_7.push($quick_mH_5_static_node=$createVNode('div',{'_': 'i^','class': 'rd-mU',},$vnode_8));
}

}else if(col.type=='avgpage'){

if($quick_mH_6_static_node){
$vnode_7.push($quick_mH_6_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本页平均]')];$vnode_7.push($quick_mH_6_static_node=$createVNode('div',{'_': 'i*','class': 'rd-mU',},$vnode_8));
}

}else if(col.type=='avgacc'){

if($quick_mH_7_static_node){
$vnode_7.push($quick_mH_7_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:累计平均]')];$vnode_7.push($quick_mH_7_static_node=$createVNode('div',{'_': 'i{','class': 'rd-mU',},$vnode_8));
}

}else if(col.type=='custom'){

if($quick_mH_8_static_node){
$vnode_7.push($quick_mH_8_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:自定义函数]')];$vnode_7.push($quick_mH_8_static_node=$createVNode('div',{'_': 'i}','class': 'rd-mU',},$vnode_8));
}

}else{
$vnode_8=[$createVNode(0,(col.type))];$vnode_7.push($createVNode('div',$quick_mH_1_static_attr,$vnode_8));
};$$_style='padding:'+(paddingTop)+(unit)+' '+(paddingRight)+(unit)+' '+(paddingBottom)+(unit)+' '+(paddingLeft)+(unit)+';width:'+(realWidth)+(unit)+';height:'+(realHeight)+(unit)+';align-items:'+(col.vpos)+';justify-content:'+(col.hpos)+';opacity:'+(col.alpha)+';';if(col.background){;$$_style+='background:'+(col.background)+';';};if(col.textFontsize!=null){;$$_style+='color:'+(col.textForecolor)+';letter-spacing:'+(col.textLetterspacing)+(unit)+';';if(col.textStyleBold){;$$_style+='font-weight:bold;';};if(col.textStyleItalic){;$$_style+='font-style:italic;';};if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:';if(col.textStyleStrike){;$$_style+='line-through';}else if(col.textStyleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='font-family:'+(col.textFontfamily)+';font-size:'+(col.textFontsize)+(unit)+';';};$vnode_6.push($createVNode('div',{'class': 'rd-mK rd-mX rd-nO','style': $$_style,},$vnode_7));
}$vnode_5.push($createVNode('div',{'class': 'rd-mB rd-mC rd-mK rd-nO','data-as': 'hod','id': '_rd_hm_'+(element.id)+'_'+(ri)+'_'+(ci),},$vnode_6));
if(!fs&&!props.locked){
let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_6=[];
if(focusCurrentCell&&!grouped){
$text='';let height=(min(26,toPx(col.height)-6)-4);;$text+=' ';let width=(min(26,toPx(col.width)-6)-4);;$text+=' ';let top=(toPx(col.height)-height-bwn)/2-1;;$text+=' ';let left=(toPx(col.width)-width-bwn)/2-1;;$vnode_6.push($createVNode('div',{'class': 'rd-mJ rd-mM rd-nt rd-on','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('oR')),'mx5-pointerdown': $viewId+'1_p3({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-mJ rd-mM rd-nu rd-on','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('oR')),'mx5-pointerdown': $viewId+'1_p3({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-mJ rd-mM rd-nv rd-on','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('oS')),'mx5-pointerdown': $viewId+'1_p3({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-mJ rd-mM rd-nw rd-on','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('oS')),'mx5-pointerdown': $viewId+'1_p3({key:\'tm\'})',}));
};$$_class='rd-mJ rd-nx rd-n5 rd-mL';if(focusCurrentCell){;$$_class+=' rd-ns';};if(fieldRow==ri&&fieldCol==ci){;$$_class+=' rd-nz';};$$_style='';if(focusCurrentCell){;if(!col.bLeft){;$$_style+='border-left-style:dotted;';};if(!col.bTop){;$$_style+='border-top-style:dotted;';};if(!col.bRight){;$$_style+='border-right-style:dotted;';};if(!col.bBottom){;$$_style+='border-bottom-style:dotted;';};};$vnode_5.push($createVNode('div',{'id': ((asHod))&&('_rd_dm_'+(element.id)+'_'+(ri)+'_'+(ci)),'class': $$_class,'style': $$_style,},$vnode_6));
}
if(!readonly && !fs && col.elements && col.elements.length){
$vnode_6=[$quick_mn_static_text||($quick_mn_static_text=$createVNode(0,''))];$vnode_5.push($createVNode('i',{'class': 'rd-l3 rd-mA rd-mJ rd-n0 rd-n5 rd-nK rd-nT rd-nk rd-oh rd-oi','title': (i18n('ph')),},$vnode_6));
}
if(selectRect&&srRow==ri&&srCol==ci){
$vnode_5.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-n3','style': 'display:block;left:'+(selectRect.x)+'px;top:'+(selectRect.y)+'px;width:'+(selectRect.width)+'px;height:'+(selectRect.height)+'px',}));
};$$_class='rd-np rd-nn rd-on';if(row.data){;$$_class+=' rd-nq';};if(selectRect&&srRow==ri&&srCol==ci){;$$_class+=' rd-nO';};$vnode_4.push($createVNode('td',{'colspan': ($temp_var=(col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=(col.rowspan))!=null&&$temp_var,'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#ddd6')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#ddd6')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#ddd6')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#ddd6'),'mx5-pointerdown': $viewId+'_p1({row:'+(ri)+',col:'+(ci)+',elm:'+(asHod)+',input:'+(hasInput)+'})','mx5-dragenter': ((row.data))&&($viewId+'_pH({row:'+(ri)+',col:'+(ci)+'})'),'mx5-dragleave': ((row.data))&&($viewId+'_pI({row:'+(ri)+',col:'+(ci)+'})'),'id': ((asHod))&&('_rd_h_'+(element.id)+'_'+(ri)+'_'+(ci)),'mx5-contextmenu': ((asHod))&&($viewId+'_p8({row:'+(ri)+',col:'+(ci)+'})'),'class': $$_class,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
if(row.data){

for(let ti=0;ti<2;ti++){
$vnode_4=[];
for(let $q_a_lrkxhmlr=row.cols,$q_c_jamtxfj=$q_a_lrkxhmlr.length,ci=0;ci<$q_c_jamtxfj;ci+=1){
let col=$q_a_lrkxhmlr[ci];
$vnode_5=[];$vnode_5.push($createVNode(0,(props.bind._tip??'')));
if(!fs && col.type=='text'&&col.bindKey){
$vnode_6=[$createVNode(0,(col.textAutoReturn?'自动换行':'超长省略'))];$vnode_5.push($createVNode('span',{'class': 'rd-mA rd-mJ rd-mU rd-me rd-n2 rd-nT rd-nY','style': 'width:'+(min(col.width-bwn-toUnit(5),toUnit(40)))+(unit),},$vnode_6));
}$vnode_4.push($createVNode('td',{'class': 'rd-nn rd-np','style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#ddd6')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#ddd6')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#ddd6')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#ddd6')+';background:#eeeeee80','colspan': ($temp_var=(col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=(col.rowspan))!=null&&$temp_var,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
}
if(row.total){
findTotalRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1.push($createVNode('table',{'class': 'rd-mB rd-no','style': 'border-collapse:'+(borderdeed),},$vnode_2));
if(!fs&&props.tfootSpacing){
$vnode_2=[];
if(selected&&!props.locked&&count==1&&props.focusRow==-2&&props.focusCol==-2){
let left=(toPx(props.width)-22-bwn)/2-1;;$vnode_3=[$createVNode('div',{'class': 'rd-mJ rd-mM rd-nv rd-on','style': 'width:22px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('pi')),'mx5-pointerdown': $viewId+'1_p3({key:\'bm\'})',})];$vnode_2.push($createVNode('div',$quick_mH_9_static_attr,$vnode_3));
}$vnode_1.push($createVNode('div',{'class': 'rd-mK rd-n4 rd-on','style': 'height:'+(props.tfootSpacing)+(unit),'mx5-pointerdown': $viewId+'_p1({row:-2,col:-2})',},$vnode_2));
}$vnode_2=[$quick_mo_static_text||($quick_mo_static_text=$createVNode(0,'重复数据行'))];$vnode_1.push($createVNode('div',{'class': 'rd-mB rd-mG rd-mJ rd-nL','style': 'top:'+(props.tipTop)+(unit)+';left:0;font-size:'+(props.tfs)+(unit)+';transform:translateY(-50%)',},$vnode_2));
if(!fs&&selected&&count==1){
let h=toPx(props.headHeight);;
if(!props.hideHead){
$vnode_2=[$createVNode('path',{'d': 'M10 0C0 0 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.headStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-mJ rd-mL rd-nP',},$vnode_2));$vnode_2=[$quick_mp_static_text||($quick_mp_static_text=$createVNode(0,'头'))];$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-nL','style': 'left:-15px;top:'+(h/2+toPx(props.headStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
if(!props.hideLabel){
h=toPx(props.labelHeight);$vnode_2=[$createVNode('path',{'d': 'M10 0C0 0 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.labelStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-mJ rd-mL rd-nP',},$vnode_2));$vnode_2=[$quick_mq_static_text||($quick_mq_static_text=$createVNode(0,'标题'))];$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-nL','style': 'left:-15px;top:'+(h/2+toPx(props.labelStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}h=toPx(props.bodyHeight);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.bodyStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-mJ rd-mL rd-nP',},$vnode_2));$vnode_2=[$quick_mr_static_text||($quick_mr_static_text=$createVNode(0,'数据'))];$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-nL','style': 'left:-15px;top:'+(h/2+toPx(props.bodyStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
if(!props.hideTotal){
h=toPx(props.totalHeight);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.totalStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-mJ rd-mL rd-nP',},$vnode_2));$vnode_2=[$quick_ms_static_text||($quick_ms_static_text=$createVNode(0,'合计'))];$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-nL','style': 'left:-15px;top:'+(h/2+toPx(props.totalStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
if(!props.hideFoot){
h=props.footHeight;
if(h>0){
h=toPx(h);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.footStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-mJ rd-mL rd-nP',},$vnode_2));$vnode_2=[$quick_mt_static_text||($quick_mt_static_text=$createVNode(0,'尾'))];$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-nL','style': 'left:-15px;top:'+(h/2+toPx(props.footStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
}$text='';h=props.spacingHeight;$text+=' ';h=toPx(h);
if(h>3){
$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+(h/2)+' 0 '+(h/2)+'C10 '+(h/2)+' 0 '+(h)+' 10 '+(h),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+(props.spacingStart)+(unit)+';width:15px;height:'+(h)+'px','class': 'rd-mJ rd-mL rd-nP',},$vnode_2));$vnode_2=[$quick_mu_static_text||($quick_mu_static_text=$createVNode(0,'留白'))];$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-nL','style': 'left:-15px;top:'+(h/2+toPx(props.spacingStart))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
}$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),'mx5-drop': $viewId+'_pJ()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            toPx: const_1['mM'],
            toUnit: const_1['l3'],
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