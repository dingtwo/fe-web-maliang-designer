/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-dtable/dshow",["magix5","../../designer/const","../../gallery/mx-dragdrop/index","../../provider/hodbase","../../provider/hodext","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");
let $quick_bv_static_text;
let $quick_bO_static_text;
let $quick_ca_2_static_node;
let $quick_ca_3_static_node;
let $quick_ca_4_static_node;
let $quick_ca_5_static_node;
let $quick_ca_6_static_node;
let $quick_ca_7_static_node;
let $quick_ca_8_static_node;
let $quick_bR_static_text;
let $quick_bS_static_text;
let $quick_bT_static_text;
let $quick_bU_static_text;
let $quick_bV_static_text;
let $quick_bW_static_text;
let $quick_bX_static_text;
let $quick_bY_static_text;
let $quick_ca_0_static_attr={'class': 'rd-_assets_index_less_-bottom-2 rd-_assets_index_less_-color-999 rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-right-2',};
let $quick_ca_1_static_attr={'class': 'rd-_assets_index_less_-ellipsis',};
let $quick_ca_9_static_attr={'class': 'rd-_assets_index_less_-border-style-dashed rd-_assets_index_less_-hod-focus-div rd-_assets_index_less_-hod-focus-line rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-z-index-1',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let index_1 = require("../../gallery/mx-dragdrop/index");
let hodbase_1 = require("../../provider/hodbase");
let hodext_1 = require("../../provider/hodext");
let { View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
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
$vnode_1=[];$text=($__line=2,$__art='{{set {max,min}=Math}}','');$__ctrl='<%let max=Math.max,min=Math.min;%>';let max=Math.max,min=Math.min;;$text+=' '+($__line=3,$__art='{{set {borderwidth,bordertype,bordercolor,borderdeed,rows,readonly}=props}}','');$__ctrl='<%let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,readonly=props.readonly;%>';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,readonly=props.readonly;;$text+=' '+($__line=4,$__art='{{set bwn=(borderdeed==\'collapse\'?1:2)*borderwidth}}','');$__ctrl='<%let bwn=(borderdeed==\'collapse\'?1:2)*borderwidth;%>';let bwn=(borderdeed=='collapse'?1:2)*borderwidth;;$vnode_3=[];$text=($__line=7,$__art='{{set findTotalRow=0}}','');$__ctrl='<%let findTotalRow=0;%>';let findTotalRow=0;;$text+=' '+($__line=8,$__art='{{set findLabelRow=0}}','');$__ctrl='<%let findLabelRow=0;%>';let findLabelRow=0;;$__line=9;$__art="{{each props.rows as row ri}}";$__ctrl="for(let $q_a_tttaqtvfup=props.rows,$q_c_jbgvn=$q_a_tttaqtvfup.length,ri=0;ri<$q_c_jbgvn;ri++){let row=$q_a_tttaqtvfup[ri];";
for(let $q_a_tttaqtvfup=props.rows,$q_c_jbgvn=$q_a_tttaqtvfup.length,ri=0;ri<$q_c_jbgvn;ri+=1){
let row=$q_a_tttaqtvfup[ri];
$__line=10;$__art="{{if row.label}}";$__ctrl="if(row.label){";
if(row.label){
($__line=11,$__art='{{findLabelRow=1}}','');$__ctrl='<%findLabelRow=1%>';findLabelRow=1;
}$__line=13;$__art="{{if ((!row.total||!props.hideTotal)&&(!findTotalRow||!props.hideFoot))&&(findLabelRow||!props.hideHead)&&(!row.label||!props.hideLabel)}}";$__ctrl="if(((!row.total||!props.hideTotal)&&(!findTotalRow||!props.hideFoot))&&(findLabelRow||!props.hideHead)&&(!row.label||!props.hideLabel)){";
if(((!row.total||!props.hideTotal)&&(!findTotalRow||!props.hideFoot))&&(findLabelRow||!props.hideHead)&&(!row.label||!props.hideLabel)){
$vnode_4=[];$__line=15;$__art="{{each row.cols as col ci}}";$__ctrl="for(let $q_a_zmmnmekyj=row.cols,$q_c_ddtoeeqb=$q_a_zmmnmekyj.length,ci=0;ci<$q_c_ddtoeeqb;ci++){let col=$q_a_zmmnmekyj[ci];";
for(let $q_a_zmmnmekyj=row.cols,$q_c_ddtoeeqb=$q_a_zmmnmekyj.length,ci=0;ci<$q_c_ddtoeeqb;ci+=1){
let col=$q_a_zmmnmekyj[ci];
$text=($__line=16,$__art='{{set hasContent=col[col.type+\'Content\']}}','');$__ctrl='<%let hasContent=col[col.type+\'Content\'];%>';let hasContent=col[col.type+'Content'];;$text+=' '+($__line=17,$__art='{{set hasElements=col.elements&&col.elements.length}}','');$__ctrl='<%let hasElements=col.elements&&col.elements.length;%>';let hasElements=col.elements&&col.elements.length;;$text+=' '+($__line=18,$__art='{{set asHod=hasElements||(!hasContent&&(findTotalRow==1||!findLabelRow))}}','');$__ctrl='<%let asHod=hasElements||(!hasContent&&(findTotalRow==1||!findLabelRow));%>';let asHod=hasElements||(!hasContent&&(findTotalRow==1||!findLabelRow));;$text+=' '+($__line=19,$__art='{{set hasInput=!hasElements&&!row.data&&col.type==\'text\'}}','');$__ctrl='<%let hasInput=!hasElements&&!row.data&&col.type==\'text\';%>';let hasInput=!hasElements&&!row.data&&col.type=='text';;$vnode_5=[];$vnode_6=[];$__line=22;$__art="{{if col.elements&&col.elements.length}}";$__ctrl="if(col.elements&&col.elements.length){";
if(col.elements&&col.elements.length){
$__line=23;$__art="{{each col.elements as e}}";$__ctrl="for(let $q_a_avszui=col.elements,$q_c_roefqndxb=$q_a_avszui.length,$q_key_doxwfajnb=0;$q_key_doxwfajnb<$q_c_roefqndxb;$q_key_doxwfajnb++){let e=$q_a_avszui[$q_key_doxwfajnb];";
for(let $q_a_avszui=col.elements,$q_c_roefqndxb=$q_a_avszui.length,$q_key_doxwfajnb=0;$q_key_doxwfajnb<$q_c_roefqndxb;$q_key_doxwfajnb+=1){
let e=$q_a_avszui[$q_key_doxwfajnb];
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,fs,unit','class': 'rd-_assets_index_less_-touch-action-none','id': ($__line=24,$__art='{{=e.id}}',$__ctrl='<%=e.id%>',(e.id)),'mx5-view': 'elements/'+($__line=24,$__art='{{=e.type}}',$__ctrl='<%=e.type%>',(e.type))+'/designer?element='+($__line=24,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+($q_key_doxwfajnb)+\'.e\'%>',$keyOf($refData,e,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.elements.'+($q_key_doxwfajnb)+'.e'))+'&fs='+($__line=24,$__art='{{#fs}}',$__ctrl='<%#fs,\'auto_key_fs\'%>',$keyOf($refData,fs,'auto_key_fs'))+'&ownerId=_rd_h_'+($__line=24,$__art='{{=element.id}}',$__ctrl='<%=$encodeUrl(element.id)%>',($encodeUrl(element.id)))+'_'+($__line=24,$__art='{{=ri}}',$__ctrl='<%=$encodeUrl(ri)%>',($encodeUrl(ri)))+'_'+($__line=24,$__art='{{=ci}}',$__ctrl='<%=$encodeUrl(ci)%>',($encodeUrl(ci)))+'&maskId=_rd_hm_'+($__line=24,$__art='{{=element.id}}',$__ctrl='<%=$encodeUrl(element.id)%>',($encodeUrl(element.id)))+'_'+($__line=24,$__art='{{=ri}}',$__ctrl='<%=$encodeUrl(ri)%>',($encodeUrl(ri)))+'_'+($__line=24,$__art='{{=ci}}',$__ctrl='<%=$encodeUrl(ci)%>',($encodeUrl(ci)))+'&unit='+($__line=24,$__art='{{#unit}}',$__ctrl='<%#unit,\'auto_key_unit\'%>',$keyOf($refData,unit,'auto_key_unit')),'mx5-pointerdown': $viewId+'1@:{element.start.drag~rs}({element:\''+($__line=24,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+($q_key_doxwfajnb)+\'.e\'%>',$keyOf($refData,e,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.elements.'+($q_key_doxwfajnb)+'.e'))+'\',maskId:\'_rd_hm_'+($__line=24,$__art='{{=element.id}}',$__ctrl='<%=$encodeQuote(element.id)%>',($encodeQuote(element.id)))+'_'+($__line=24,$__art='{{=ri}}',$__ctrl='<%=$encodeQuote(ri)%>',($encodeQuote(ri)))+'_'+($__line=24,$__art='{{=ci}}',$__ctrl='<%=$encodeQuote(ci)%>',($encodeQuote(ci)))+'\'})',}));
}
}else{
$__line=27;$__art="{{if !fs && col.type}}";$__ctrl="if(!fs && col.type){";
if(!fs && col.type){
$text=($__line=29,$__art='{{if col.type==\'text\'}}','');$__ctrl='<%if(col.type==\'text\'){%>';if(col.type=='text'){;$text+='  '+($__line=31,$__art='{{else if col.type==\'image\'}}','');$__ctrl='<%}else if(col.type==\'image\'){%>';}else if(col.type=='image'){;$text+='  '+($__line=33,$__art='{{else if col.type==\'barcode\'}}','');$__ctrl='<%}else if(col.type==\'barcode\'){%>';}else if(col.type=='barcode'){;$text+='  '+($__line=35,$__art='{{else if col.type==\'qrcode\'}}','');$__ctrl='<%}else if(col.type==\'qrcode\'){%>';}else if(col.type=='qrcode'){;$text+='  '+($__line=37,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_7=[$createVNode(0,$text)];$vnode_6.push($createVNode('i',$quick_ca_0_static_attr,$vnode_7));
}$text=($__line=40,$__art='{{set {paddingTop,paddingBottom,paddingLeft,paddingRight}=col}}','');$__ctrl='<%let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;%>';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' '+($__line=41,$__art='{{set realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1)}}','');$__ctrl='<%let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);%>';let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);;$__line=42;$__art="{{if paddingTop>realHeight}}";$__ctrl="if(paddingTop>realHeight){";
if(paddingTop>realHeight){
($__line=43,$__art='{{paddingTop=realHeight}}','');$__ctrl='<%paddingTop=realHeight%>';paddingTop=realHeight;
}$__line=45;$__art="{{if paddingTop+paddingBottom>realHeight}}";$__ctrl="if(paddingTop+paddingBottom>realHeight){";
if(paddingTop+paddingBottom>realHeight){
($__line=46,$__art='{{paddingBottom=realHeight-paddingTop}}','');$__ctrl='<%paddingBottom=realHeight-paddingTop%>';paddingBottom=realHeight-paddingTop;
}$__line=48;$__art="{{if paddingLeft>realWidth}}";$__ctrl="if(paddingLeft>realWidth){";
if(paddingLeft>realWidth){
($__line=49,$__art='{{paddingLeft=realWidth}}','');$__ctrl='<%paddingLeft=realWidth%>';paddingLeft=realWidth;
}$__line=51;$__art="{{if paddingLeft+paddingRight>realWidth}}";$__ctrl="if(paddingLeft+paddingRight>realWidth){";
if(paddingLeft+paddingRight>realWidth){
($__line=52,$__art='{{paddingRight=realWidth-paddingLeft}}','');$__ctrl='<%paddingRight=realWidth-paddingLeft%>';paddingRight=realWidth-paddingLeft;
}$vnode_7=[];$__line=55;$__art="{{if col.bindKey}}";$__ctrl="if(col.bindKey){";
if(col.bindKey){
$__line=56;$__art="{{if !fs&&!props.locked}}";$__ctrl="if(!fs&&!props.locked){";
if(!fs&&!props.locked){
$vnode_8=[$quick_bv_static_text||($quick_bv_static_text=$createVNode(0,''))];$vnode_7.push($createVNode('i',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-gray rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_assets_index_less_-right-2 rd-_assets_index_less_-top-2 rd-_assets_index_less_-touch-action-none','mx5-pointerdown': $viewId+'2@:{stop~rs}()','mx5-click': $viewId+'@:{delete.bind.field~rs}({row:'+($__line=57,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=57,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})','title': ($__line=57,$__art='{{=i18n(\'@:{lang#elements.delete.bind.field~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#elements.delete.bind.field~rs}\')%>',(i18n('@:{lang#elements.delete.bind.field~rs}'))),},$vnode_8));
}$vnode_7.push($createVNode(0,'[绑定:'+($__line=59,$__art='{{=col.bindName}}',$__ctrl='<%=col.bindName%>',(col.bindName))+']'));$__line=59;$__art="{{if !col.type}}";$__ctrl="if(!col.type){";
if(!col.type){
$vnode_7.push($quick_bO_static_text||($quick_bO_static_text=$createVNode(0,'，未指定格子内容')));
}
}else if(($__line=60,$__art="{{else if col.type==\\'text\\'}}",$__ctrl="else if(col.type=='text'){"),col.type=='text'){
$__line=61;$__art="{{if !row.data}}";$__ctrl="if(!row.data){";
if(!row.data){
;$$_style='width:calc(100% - '+($__line=62,$__art='{{=paddingLeft+paddingRight}}',$__ctrl='<%=paddingLeft+paddingRight%>',(paddingLeft+paddingRight))+($__line=62,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+');text-align:'+($__line=62,$__art='{{if col.hpos==\'center\'}}','');$__ctrl='<%if(col.hpos==\'center\'){%>';if(col.hpos=='center'){;$$_style+='center'+($__line=62,$__art='{{else if col.hpos==\'flex-end\'}}','');$__ctrl='<%}else if(col.hpos==\'flex-end\'){%>';}else if(col.hpos=='flex-end'){;$$_style+='right'+($__line=62,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='left'+($__line=62,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_7.push($createVNode('input',{'as': 'd-input','class': 'rd-_assets_index_less_-form-input rd-_assets_index_less_-input rd-_assets_index_less_-pa','value': ($__line=62,$__art='{{=col.textContent}}',$__ctrl='<%=col.textContent%>',(col.textContent)),'mx5-input': $viewId+'@:{update.cell.text~rs}({cell:\''+($__line=62,$__art='{{#col}}',$__ctrl='<%#col,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col\'%>',$keyOf($refData,col,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col'))+'\',key:\'textContent\'})','mx5-focusin': $viewId+'@:{active.cell.by.pos~rs}({row:'+($__line=62,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=62,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})','style': $$_style,},1,$special_2));
}$__line=64;$__art="{{if col.textContent}}";$__ctrl="if(col.textContent){";
if(col.textContent){
$vnode_8=[$createVNode(0,($__line=65,$__art='{{=col.textContent}}',$__ctrl='<%=col.textContent%>',(col.textContent)),1)];$vnode_7.push($createVNode('div',$quick_ca_1_static_attr,$vnode_8));
}
}else if(($__line=67,$__art="{{else if col.type==\\'image\\'}}",$__ctrl="else if(col.type=='image'){"),col.type=='image'){
$__line=68;$__art="{{if col.imageContent}}";$__ctrl="if(col.imageContent){";
if(col.imageContent){
;$$_style=($__line=69,$__art='{{if col.imageRotateX||col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateX||col.imageRotateY){%>';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:'+($__line=69,$__art='{{if col.imageRotateX}}','');$__ctrl='<%if(col.imageRotateX){%>';if(col.imageRotateX){;$$_style+='rotateX(180deg)'+($__line=69,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=69,$__art='{{if col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateY){%>';if(col.imageRotateY){;$$_style+=' rotateY(180deg)'+($__line=69,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=69,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_7.push($createVNode('img',{'class': 'rd-_assets_index_less_-mhp100 rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-img','src': ($__line=69,$__art='{{=col.imageContent}}',$__ctrl='<%=col.imageContent%>',(col.imageContent)),'style': $$_style,},1));
}
}else if(($__line=71,$__art="{{else if col.type==\\'barcode\\'}}",$__ctrl="else if(col.type=='barcode'){"),col.type=='barcode'){
$__line=72;$__art="{{if col.barcodeContent}}";$__ctrl="if(col.barcodeContent){";
if(col.barcodeContent){
$vnode_7.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-_assets_index_less_-flex','style': 'height:'+($__line=73,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=73,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=73,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos)),'mx5-view': 'elements/subs/barcode?lineColor='+($__line=73,$__art='{{=col.barcodeColor}}',$__ctrl='<%=$encodeUrl(col.barcodeColor)%>',($encodeUrl(col.barcodeColor)))+'&lineWidth='+($__line=73,$__art='{{=col.barcodeLineWidth}}',$__ctrl='<%=$encodeUrl(col.barcodeLineWidth)%>',($encodeUrl(col.barcodeLineWidth)))+'&showText='+($__line=73,$__art='{{=col.barcodeShowText}}',$__ctrl='<%=$encodeUrl(col.barcodeShowText)%>',($encodeUrl(col.barcodeShowText)))+'&format='+($__line=73,$__art='{{=col.barcodeFormat}}',$__ctrl='<%=$encodeUrl(col.barcodeFormat)%>',($encodeUrl(col.barcodeFormat)))+'&value='+($__line=73,$__art='{{=col.barcodeContent}}',$__ctrl='<%=$encodeUrl(col.barcodeContent)%>',($encodeUrl(col.barcodeContent))),}));
}
}else if(($__line=75,$__art="{{else if col.type==\\'qrcode\\'}}",$__ctrl="else if(col.type=='qrcode'){"),col.type=='qrcode'){
$__line=76;$__art="{{if col.qrcodeContent}}";$__ctrl="if(col.qrcodeContent){";
if(col.qrcodeContent){
$vnode_7.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+($__line=77,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=77,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'mx5-view': 'elements/subs/qrcode?vpos='+($__line=77,$__art='{{=col.vpos}}',$__ctrl='<%=$encodeUrl(col.vpos)%>',($encodeUrl(col.vpos)))+'&value='+($__line=77,$__art='{{=col.qrcodeContent}}',$__ctrl='<%=$encodeUrl(col.qrcodeContent)%>',($encodeUrl(col.qrcodeContent))),}));
}
}else if(($__line=79,$__art="{{else if col.type==\\'sum\\'}}",$__ctrl="else if(col.type=='sum'){"),col.type=='sum'){

if($quick_ca_2_static_node){
$vnode_7.push($quick_ca_2_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本单求和]')];$vnode_7.push($quick_ca_2_static_node=$createVNode('div',{'_': 'a@','class': 'rd-_assets_index_less_-ellipsis',},$vnode_8));
}

}else if(($__line=81,$__art="{{else if col.type==\\'sumpage\\'}}",$__ctrl="else if(col.type=='sumpage'){"),col.type=='sumpage'){

if($quick_ca_3_static_node){
$vnode_7.push($quick_ca_3_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本页求和]')];$vnode_7.push($quick_ca_3_static_node=$createVNode('div',{'_': 'a$','class': 'rd-_assets_index_less_-ellipsis',},$vnode_8));
}

}else if(($__line=83,$__art="{{else if col.type==\\'acc\\'}}",$__ctrl="else if(col.type=='acc'){"),col.type=='acc'){

if($quick_ca_4_static_node){
$vnode_7.push($quick_ca_4_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本页累计]')];$vnode_7.push($quick_ca_4_static_node=$createVNode('div',{'_': 'a^','class': 'rd-_assets_index_less_-ellipsis',},$vnode_8));
}

}else if(($__line=85,$__art="{{else if col.type==\\'avg\\'}}",$__ctrl="else if(col.type=='avg'){"),col.type=='avg'){

if($quick_ca_5_static_node){
$vnode_7.push($quick_ca_5_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本单平均]')];$vnode_7.push($quick_ca_5_static_node=$createVNode('div',{'_': 'a*','class': 'rd-_assets_index_less_-ellipsis',},$vnode_8));
}

}else if(($__line=87,$__art="{{else if col.type==\\'avgpage\\'}}",$__ctrl="else if(col.type=='avgpage'){"),col.type=='avgpage'){

if($quick_ca_6_static_node){
$vnode_7.push($quick_ca_6_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:本页平均]')];$vnode_7.push($quick_ca_6_static_node=$createVNode('div',{'_': 'a{','class': 'rd-_assets_index_less_-ellipsis',},$vnode_8));
}

}else if(($__line=89,$__art="{{else if col.type==\\'avgacc\\'}}",$__ctrl="else if(col.type=='avgacc'){"),col.type=='avgacc'){

if($quick_ca_7_static_node){
$vnode_7.push($quick_ca_7_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:累计平均]')];$vnode_7.push($quick_ca_7_static_node=$createVNode('div',{'_': 'a}','class': 'rd-_assets_index_less_-ellipsis',},$vnode_8));
}

}else if(($__line=91,$__art="{{else if col.type==\\'custom\\'}}",$__ctrl="else if(col.type=='custom'){"),col.type=='custom'){

if($quick_ca_8_static_node){
$vnode_7.push($quick_ca_8_static_node);
}else{
$vnode_8=[$createVNode(0,'[计算:自定义函数]')];$vnode_7.push($quick_ca_8_static_node=$createVNode('div',{'_': 'a[','class': 'rd-_assets_index_less_-ellipsis',},$vnode_8));
}

}else{
$vnode_8=[$createVNode(0,($__line=94,$__art='{{=col.type}}',$__ctrl='<%=col.type%>',(col.type)))];$vnode_7.push($createVNode('div',$quick_ca_1_static_attr,$vnode_8));
};$$_style='padding:'+($__line=54,$__art='{{=paddingTop}}',$__ctrl='<%=paddingTop%>',(paddingTop))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=54,$__art='{{=paddingRight}}',$__ctrl='<%=paddingRight%>',(paddingRight))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=54,$__art='{{=paddingBottom}}',$__ctrl='<%=paddingBottom%>',(paddingBottom))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=54,$__art='{{=paddingLeft}}',$__ctrl='<%=paddingLeft%>',(paddingLeft))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=54,$__art='{{=realWidth}}',$__ctrl='<%=realWidth%>',(realWidth))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=54,$__art='{{=realHeight}}',$__ctrl='<%=realHeight%>',(realHeight))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=54,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos))+';justify-content:'+($__line=54,$__art='{{=col.hpos}}',$__ctrl='<%=col.hpos%>',(col.hpos))+';opacity:'+($__line=54,$__art='{{=col.alpha}}',$__ctrl='<%=col.alpha%>',(col.alpha))+';'+($__line=54,$__art='{{if col.background}}','');$__ctrl='<%if(col.background){%>';if(col.background){;$$_style+='background:'+($__line=54,$__art='{{=col.background}}',$__ctrl='<%=col.background%>',(col.background))+';'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=54,$__art='{{if col.textFontsize!=null}}','');$__ctrl='<%if(col.textFontsize!=null){%>';if(col.textFontsize!=null){;$$_style+='color:'+($__line=54,$__art='{{=col.textForecolor}}',$__ctrl='<%=col.textForecolor%>',(col.textForecolor))+';letter-spacing:'+($__line=54,$__art='{{=col.textLetterspacing}}',$__ctrl='<%=col.textLetterspacing%>',(col.textLetterspacing))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=54,$__art='{{if col.textStyleBold}}','');$__ctrl='<%if(col.textStyleBold){%>';if(col.textStyleBold){;$$_style+='font-weight:bold;'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=54,$__art='{{if col.textStyleItalic}}','');$__ctrl='<%if(col.textStyleItalic){%>';if(col.textStyleItalic){;$$_style+='font-style:italic;'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=54,$__art='{{if col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline}}','');$__ctrl='<%if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){%>';if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:'+($__line=54,$__art='{{if col.textStyleStrike}}','');$__ctrl='<%if(col.textStyleStrike){%>';if(col.textStyleStrike){;$$_style+='line-through'+($__line=54,$__art='{{else if col.textStyleOverline}}','');$__ctrl='<%}else if(col.textStyleOverline){%>';}else if(col.textStyleOverline){;$$_style+='overline'+($__line=54,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='underline'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=';'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='font-family:'+($__line=54,$__art='{{=col.textFontfamily}}',$__ctrl='<%=col.textFontfamily%>',(col.textFontfamily))+';font-size:'+($__line=54,$__art='{{=col.textFontsize}}',$__ctrl='<%=col.textFontsize%>',(col.textFontsize))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_6.push($createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pr','style': $$_style,},$vnode_7));
}$vnode_5.push($createVNode('div',{'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pr rd-_assets_index_less_-wp100','data-as': 'hod','id': '_rd_hm_'+($__line=21,$__art='{{=element.id}}',$__ctrl='<%=element.id%>',(element.id))+'_'+($__line=21,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+'_'+($__line=21,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci)),},$vnode_6));$__line=99;$__art="{{if !fs&&!props.locked}}";$__ctrl="if(!fs&&!props.locked){";
if(!fs&&!props.locked){
($__line=100,$__art='{{set focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1}}','');$__ctrl='<%let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;%>';let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_6=[];$__line=102;$__art="{{if focusCurrentCell&&!grouped}}";$__ctrl="if(focusCurrentCell&&!grouped){";
if(focusCurrentCell&&!grouped){
$text=($__line=103,$__art='{{set height=(min(26,toPx(col.height)-6)-4)}}','');$__ctrl='<%let height=(min(26,toPx(col.height)-6)-4);%>';let height=(min(26,toPx(col.height)-6)-4);;$text+=' '+($__line=104,$__art='{{set width=(min(26,toPx(col.width)-6)-4)}}','');$__ctrl='<%let width=(min(26,toPx(col.width)-6)-4);%>';let width=(min(26,toPx(col.width)-6)-4);;$text+=' '+($__line=105,$__art='{{set top=(toPx(col.height)-height-bwn)/2-1}}','');$__ctrl='<%let top=(toPx(col.height)-height-bwn)/2-1;%>';let top=(toPx(col.height)-height-bwn)/2-1;;$text+=' '+($__line=106,$__art='{{set left=(toPx(col.width)-width-bwn)/2-1}}','');$__ctrl='<%let left=(toPx(col.width)-width-bwn)/2-1;%>';let left=(toPx(col.width)-width-bwn)/2-1;;$vnode_6.push($createVNode('div',{'class': 'rd-_assets_index_less_-hod-right rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none','style': 'height:'+($__line=107,$__art='{{=max(height,0)}}',$__ctrl='<%=max(height,0)%>',(max(height,0)))+'px;top:'+($__line=107,$__art='{{=top}}',$__ctrl='<%=top%>',(top))+'px;cursor:ew-resize','title': ($__line=107,$__art='{{=i18n(\'@:{lang#press.drag.cell.width~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.cell.width~rs}\')%>',(i18n('@:{lang#press.drag.cell.width~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize.table.cell~rs}({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-_assets_index_less_-hod-left rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none','style': 'height:'+($__line=108,$__art='{{=max(height,0)}}',$__ctrl='<%=max(height,0)%>',(max(height,0)))+'px;top:'+($__line=108,$__art='{{=top}}',$__ctrl='<%=top%>',(top))+'px;cursor:ew-resize','title': ($__line=108,$__art='{{=i18n(\'@:{lang#press.drag.cell.width~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.cell.width~rs}\')%>',(i18n('@:{lang#press.drag.cell.width~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize.table.cell~rs}({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-_assets_index_less_-hod-bottom rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none','style': 'width:'+($__line=109,$__art='{{=max(width,0)}}',$__ctrl='<%=max(width,0)%>',(max(width,0)))+'px;left:'+($__line=109,$__art='{{=left}}',$__ctrl='<%=left%>',(left))+'px;cursor:ns-resize','title': ($__line=109,$__art='{{=i18n(\'@:{lang#press.drag.cell.height~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.cell.height~rs}\')%>',(i18n('@:{lang#press.drag.cell.height~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize.table.cell~rs}({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-_assets_index_less_-hod-top rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none','style': 'width:'+($__line=110,$__art='{{=max(width,0)}}',$__ctrl='<%=max(width,0)%>',(max(width,0)))+'px;left:'+($__line=110,$__art='{{=left}}',$__ctrl='<%=left%>',(left))+'px;cursor:ns-resize','title': ($__line=110,$__art='{{=i18n(\'@:{lang#press.drag.cell.height~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.cell.height~rs}\')%>',(i18n('@:{lang#press.drag.cell.height~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize.table.cell~rs}({key:\'tm\'})',}));
};$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-hod-focus-div rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-pointer-events-none'+($__line=101,$__art='{{if focusCurrentCell}}','');$__ctrl='<%if(focusCurrentCell){%>';if(focusCurrentCell){;$$_class+=' rd-_assets_index_less_-hod-focus-line'+($__line=101,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=101,$__art='{{if fieldRow==ri&&fieldCol==ci}}','');$__ctrl='<%if(fieldRow==ri&&fieldCol==ci){%>';if(fieldRow==ri&&fieldCol==ci){;$$_class+=' rd-_assets_index_less_-hod-drop-tip'+($__line=101,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style=($__line=101,$__art='{{if focusCurrentCell}}','');$__ctrl='<%if(focusCurrentCell){%>';if(focusCurrentCell){;$$_style+=''+($__line=101,$__art='{{if !col.bLeft}}','');$__ctrl='<%if(!col.bLeft){%>';if(!col.bLeft){;$$_style+='border-left-style:dotted;'+($__line=101,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=101,$__art='{{if !col.bTop}}','');$__ctrl='<%if(!col.bTop){%>';if(!col.bTop){;$$_style+='border-top-style:dotted;'+($__line=101,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=101,$__art='{{if !col.bRight}}','');$__ctrl='<%if(!col.bRight){%>';if(!col.bRight){;$$_style+='border-right-style:dotted;'+($__line=101,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=101,$__art='{{if !col.bBottom}}','');$__ctrl='<%if(!col.bBottom){%>';if(!col.bBottom){;$$_style+='border-bottom-style:dotted;'+($__line=101,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=101,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_5.push($createVNode('div',{'id': (($__line=101,$__art='{{=asHod}}',$__ctrl='<%=asHod%>',asHod))&&('_rd_dm_'+($__line=101,$__art='{{=element.id}}',$__ctrl='<%=element.id%>',(element.id))+'_'+($__line=101,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+'_'+($__line=101,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))),'class': $$_class,'style': $$_style,},$vnode_6));
}$__line=114;$__art="{{if !readonly && !fs && col.elements && col.elements.length}}";$__ctrl="if(!readonly && !fs && col.elements && col.elements.length){";
if(!readonly && !fs && col.elements && col.elements.length){
$vnode_6=[$quick_bR_static_text||($quick_bR_static_text=$createVNode(0,''))];$vnode_5.push($createVNode('i',{'class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-cell-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-gray rd-_assets_index_less_-iconfont rd-_assets_index_less_-left-2 rd-_assets_index_less_-pa rd-_assets_index_less_-top-2 rd-_assets_index_less_-z-index-1','title': ($__line=115,$__art='{{=i18n(\'@:{lang#cell.select~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#cell.select~rs}\')%>',(i18n('@:{lang#cell.select~rs}'))),},$vnode_6));
}$__line=117;$__art="{{if selectRect&&srRow==ri&&srCol==ci}}";$__ctrl="if(selectRect&&srRow==ri&&srCol==ci){";
if(selectRect&&srRow==ri&&srCol==ci){
$vnode_5.push($createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-select-rect','style': 'display:block;left:'+($__line=118,$__art='{{=selectRect.x}}',$__ctrl='<%=selectRect.x%>',(selectRect.x))+'px;top:'+($__line=118,$__art='{{=selectRect.y}}',$__ctrl='<%=selectRect.y%>',(selectRect.y))+'px;width:'+($__line=118,$__art='{{=selectRect.width}}',$__ctrl='<%=selectRect.width%>',(selectRect.width))+'px;height:'+($__line=118,$__art='{{=selectRect.height}}',$__ctrl='<%=selectRect.height%>',(selectRect.height))+'px',}));
};$$_class='rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all rd-_assets_index_less_-touch-action-none'+($__line=20,$__art='{{if row.data}}','');$__ctrl='<%if(row.data){%>';if(row.data){;$$_class+=' rd-_assets_index_less_-table-main-cell'+($__line=20,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=20,$__art='{{if selectRect&&srRow==ri&&srCol==ci}}','');$__ctrl='<%if(selectRect&&srRow==ri&&srCol==ci){%>';if(selectRect&&srRow==ri&&srCol==ci){;$$_class+=' rd-_assets_index_less_-overflow-hidden'+($__line=20,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_4.push($createVNode('td',{'colspan': ($temp_var=($__line=20,$__art='{{=col.colspan}}',$__ctrl='<%=col.colspan%>',col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=($__line=20,$__art='{{=col.rowspan}}',$__ctrl='<%=col.rowspan%>',col.rowspan))!=null&&$temp_var,'style': 'position:relative;width:'+($__line=20,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=20,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=20,$__art='{{=col.height}}',$__ctrl='<%=col.height%>',(col.height))+($__line=20,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-left:'+($__line=20,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=20,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=20,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=20,$__art='{{=borderwidth&&col.bLeft?bordercolor:\'#ddd6\'}}',$__ctrl='<%=borderwidth&&col.bLeft?bordercolor:\'#ddd6\'%>',(borderwidth&&col.bLeft?bordercolor:'#ddd6'))+';border-top:'+($__line=20,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=20,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=20,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=20,$__art='{{=borderwidth&&col.bTop?bordercolor:\'#ddd6\'}}',$__ctrl='<%=borderwidth&&col.bTop?bordercolor:\'#ddd6\'%>',(borderwidth&&col.bTop?bordercolor:'#ddd6'))+';border-right:'+($__line=20,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=20,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=20,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=20,$__art='{{=borderwidth&&col.bRight?bordercolor:\'#ddd6\'}}',$__ctrl='<%=borderwidth&&col.bRight?bordercolor:\'#ddd6\'%>',(borderwidth&&col.bRight?bordercolor:'#ddd6'))+';border-bottom:'+($__line=20,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=20,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=20,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=20,$__art='{{=borderwidth&&col.bBottom?bordercolor:\'#ddd6\'}}',$__ctrl='<%=borderwidth&&col.bBottom?bordercolor:\'#ddd6\'%>',(borderwidth&&col.bBottom?bordercolor:'#ddd6')),'mx5-pointerdown': $viewId+'@:{active.cell~rs}({row:'+($__line=20,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=20,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+',elm:'+($__line=20,$__art='{{=asHod}}',$__ctrl='<%=asHod%>',(asHod))+',input:'+($__line=20,$__art='{{=hasInput}}',$__ctrl='<%=hasInput%>',(hasInput))+'})','mx5-dragenter': (($temp_var=($__line=20,$__art='{{=row.data}}',$__ctrl='<%=row.data%>',row.data),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-dragenter" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:elements/data-dtable/dshow.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{when.data.field.enter~rs}({row:'+($__line=20,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=20,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})'),'mx5-dragleave': (($temp_var=($__line=20,$__art='{{=row.data}}',$__ctrl='<%=row.data%>',row.data),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-dragleave" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:elements/data-dtable/dshow.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{when.data.field.leave~rs}({row:'+($__line=20,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=20,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})'),'id': (($__line=20,$__art='{{=asHod}}',$__ctrl='<%=asHod%>',asHod))&&('_rd_h_'+($__line=20,$__art='{{=element.id}}',$__ctrl='<%=element.id%>',(element.id))+'_'+($__line=20,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+'_'+($__line=20,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))),'mx5-contextmenu': (($temp_var=($__line=20,$__art='{{=asHod}}',$__ctrl='<%=asHod%>',asHod),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-contextmenu" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:elements/data-dtable/dshow.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{show.contxtmenu~rs}({row:'+($__line=20,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=20,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})'),'class': $$_class,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$__line=124;$__art="{{if row.data}}";$__ctrl="if(row.data){";
if(row.data){
$__line=125;$__art="{{for (let ti=0;ti<2;ti++)}}";$__ctrl="for(let ti=0;ti<2;ti++){";
for(let ti=0;ti<2;ti++){
$vnode_4=[];$__line=127;$__art="{{each row.cols as col ci}}";$__ctrl="for(let $q_a_rpac=row.cols,$q_c_jqawcphie=$q_a_rpac.length,ci=0;ci<$q_c_jqawcphie;ci++){let col=$q_a_rpac[ci];";
for(let $q_a_rpac=row.cols,$q_c_jqawcphie=$q_a_rpac.length,ci=0;ci<$q_c_jqawcphie;ci+=1){
let col=$q_a_rpac[ci];
$vnode_5=[];$vnode_5.push($createVNode(0,($__line=129,$__art='{{=props.bind._tip??\'\'}}',$__ctrl='<%=props.bind._tip??\'\'%>',(props.bind._tip??''))));$__line=130;$__art="{{if !fs && col.type==\\'text\\'&&col.bindKey}}";$__ctrl="if(!fs && col.type=='text'&&col.bindKey){";
if(!fs && col.type=='text'&&col.bindKey){
$vnode_6=[$createVNode(0,($__line=131,$__art='{{=col.textAutoReturn?\'自动换行\':\'超长省略\'}}',$__ctrl='<%=col.textAutoReturn?\'自动换行\':\'超长省略\'%>',(col.textAutoReturn?'自动换行':'超长省略')))];$vnode_5.push($createVNode('span',{'class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-bottom-0 rd-_assets_index_less_-ellipsis rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-line-height-1 rd-_assets_index_less_-pa rd-_assets_index_less_-right-2','style': 'width:'+($__line=131,$__art='{{=min(col.width-bwn-toUnit(5),toUnit(40))}}',$__ctrl='<%=min(col.width-bwn-toUnit(5),toUnit(40))%>',(min(col.width-bwn-toUnit(5),toUnit(40))))+($__line=131,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_6));
}$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': 'position:relative;width:'+($__line=128,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=128,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=128,$__art='{{=col.height}}',$__ctrl='<%=col.height%>',(col.height))+($__line=128,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-left:'+($__line=128,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=128,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=128,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=128,$__art='{{=borderwidth&&col.bLeft?bordercolor:\'#ddd6\'}}',$__ctrl='<%=borderwidth&&col.bLeft?bordercolor:\'#ddd6\'%>',(borderwidth&&col.bLeft?bordercolor:'#ddd6'))+';border-top:'+($__line=128,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=128,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=128,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=128,$__art='{{=borderwidth&&col.bTop?bordercolor:\'#ddd6\'}}',$__ctrl='<%=borderwidth&&col.bTop?bordercolor:\'#ddd6\'%>',(borderwidth&&col.bTop?bordercolor:'#ddd6'))+';border-right:'+($__line=128,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=128,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=128,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=128,$__art='{{=borderwidth&&col.bRight?bordercolor:\'#ddd6\'}}',$__ctrl='<%=borderwidth&&col.bRight?bordercolor:\'#ddd6\'%>',(borderwidth&&col.bRight?bordercolor:'#ddd6'))+';border-bottom:'+($__line=128,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=128,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=128,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=128,$__art='{{=borderwidth&&col.bBottom?bordercolor:\'#ddd6\'}}',$__ctrl='<%=borderwidth&&col.bBottom?bordercolor:\'#ddd6\'%>',(borderwidth&&col.bBottom?bordercolor:'#ddd6'))+';background:#eeeeee80','colspan': ($temp_var=($__line=128,$__art='{{=col.colspan}}',$__ctrl='<%=col.colspan%>',col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=($__line=128,$__art='{{=col.rowspan}}',$__ctrl='<%=col.rowspan%>',col.rowspan))!=null&&$temp_var,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
}$__line=138;$__art="{{if row.total}}";$__ctrl="if(row.total){";
if(row.total){
($__line=139,$__art='{{findTotalRow=1}}','');$__ctrl='<%findTotalRow=1%>';findTotalRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1.push($createVNode('table',{'class': 'rd-_assets_index_less_-table rd-_assets_index_less_-wp100','style': 'border-collapse:'+($__line=5,$__art='{{=borderdeed}}',$__ctrl='<%=borderdeed%>',(borderdeed)),},$vnode_2));$__line=144;$__art="{{if !fs&&props.tfootSpacing}}";$__ctrl="if(!fs&&props.tfootSpacing){";
if(!fs&&props.tfootSpacing){
$vnode_2=[];$__line=146;$__art="{{if selected&&!props.locked&&count==1&&props.focusRow==-2&&props.focusCol==-2}}";$__ctrl="if(selected&&!props.locked&&count==1&&props.focusRow==-2&&props.focusCol==-2){";
if(selected&&!props.locked&&count==1&&props.focusRow==-2&&props.focusCol==-2){
($__line=148,$__art='{{set left=(toPx(props.width)-22-bwn)/2-1}}','');$__ctrl='<%let left=(toPx(props.width)-22-bwn)/2-1;%>';let left=(toPx(props.width)-22-bwn)/2-1;;$vnode_3=[$createVNode('div',{'class': 'rd-_assets_index_less_-hod-bottom rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none','style': 'width:22px;left:'+($__line=149,$__art='{{=left}}',$__ctrl='<%=left%>',(left))+'px;cursor:ns-resize','title': ($__line=149,$__art='{{=i18n(\'@:{lang#press.drag.space.height~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.space.height~rs}\')%>',(i18n('@:{lang#press.drag.space.height~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize.table.cell~rs}({key:\'bm\'})',})];$vnode_2.push($createVNode('div',$quick_ca_9_static_attr,$vnode_3));
}$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-border-dotted-999 rd-_assets_index_less_-pr rd-_assets_index_less_-touch-action-none','style': 'height:'+($__line=145,$__art='{{=props.tfootSpacing}}',$__ctrl='<%=props.tfootSpacing%>',(props.tfootSpacing))+($__line=145,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'mx5-pointerdown': $viewId+'@:{active.cell~rs}({row:-2,col:-2})',},$vnode_2));
}$vnode_2=[$quick_bS_static_text||($quick_bS_static_text=$createVNode(0,'重复数据行'))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-pa rd-_assets_index_less_-tc rd-_assets_index_less_-wp100','style': 'top:'+($__line=154,$__art='{{=props.tipTop}}',$__ctrl='<%=props.tipTop%>',(props.tipTop))+($__line=154,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';left:0;font-size:'+($__line=154,$__art='{{=props.tfs}}',$__ctrl='<%=props.tfs%>',(props.tfs))+($__line=154,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:translateY(-50%)',},$vnode_2));$__line=155;$__art="{{if !fs&&selected&&count==1}}";$__ctrl="if(!fs&&selected&&count==1){";
if(!fs&&selected&&count==1){
($__line=156,$__art='{{set h=toPx(props.headHeight)}}','');$__ctrl='<%let h=toPx(props.headHeight);%>';let h=toPx(props.headHeight);;$__line=157;$__art="{{if !props.hideHead}}";$__ctrl="if(!props.hideHead){";
if(!props.hideHead){
$vnode_2=[$createVNode('path',{'d': 'M10 0C0 0 10 '+($__line=159,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=159,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+'C10 '+($__line=159,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=159,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+' 10 '+($__line=159,$__art='{{=h}}',$__ctrl='<%=h%>',(h)),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+($__line=158,$__art='{{=props.headStart}}',$__ctrl='<%=props.headStart%>',(props.headStart))+($__line=158,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:15px;height:'+($__line=158,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+'px','class': 'rd-_assets_index_less_-overflow-visible rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none',},$vnode_2));$vnode_2=[$quick_bT_static_text||($quick_bT_static_text=$createVNode(0,'头'))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none','style': 'left:-15px;top:'+($__line=161,$__art='{{=h/2+toPx(props.headStart)}}',$__ctrl='<%=h/2+toPx(props.headStart)%>',(h/2+toPx(props.headStart)))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}$__line=163;$__art="{{if !props.hideLabel}}";$__ctrl="if(!props.hideLabel){";
if(!props.hideLabel){
($__line=164,$__art='{{h=toPx(props.labelHeight)}}','');$__ctrl='<%h=toPx(props.labelHeight)%>';h=toPx(props.labelHeight);$vnode_2=[$createVNode('path',{'d': 'M10 0C0 0 10 '+($__line=166,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=166,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+'C10 '+($__line=166,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=166,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+' 10 '+($__line=166,$__art='{{=h}}',$__ctrl='<%=h%>',(h)),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+($__line=165,$__art='{{=props.labelStart}}',$__ctrl='<%=props.labelStart%>',(props.labelStart))+($__line=165,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:15px;height:'+($__line=165,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+'px','class': 'rd-_assets_index_less_-overflow-visible rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none',},$vnode_2));$vnode_2=[$quick_bU_static_text||($quick_bU_static_text=$createVNode(0,'标题'))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none','style': 'left:-15px;top:'+($__line=168,$__art='{{=h/2+toPx(props.labelStart)}}',$__ctrl='<%=h/2+toPx(props.labelStart)%>',(h/2+toPx(props.labelStart)))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}($__line=170,$__art='{{h=toPx(props.bodyHeight)}}','');$__ctrl='<%h=toPx(props.bodyHeight)%>';h=toPx(props.bodyHeight);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+($__line=172,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=172,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+'C10 '+($__line=172,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=172,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+' 10 '+($__line=172,$__art='{{=h}}',$__ctrl='<%=h%>',(h)),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+($__line=171,$__art='{{=props.bodyStart}}',$__ctrl='<%=props.bodyStart%>',(props.bodyStart))+($__line=171,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:15px;height:'+($__line=171,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+'px','class': 'rd-_assets_index_less_-overflow-visible rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none',},$vnode_2));$vnode_2=[$quick_bV_static_text||($quick_bV_static_text=$createVNode(0,'数据'))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none','style': 'left:-15px;top:'+($__line=174,$__art='{{=h/2+toPx(props.bodyStart)}}',$__ctrl='<%=h/2+toPx(props.bodyStart)%>',(h/2+toPx(props.bodyStart)))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));$__line=175;$__art="{{if !props.hideTotal}}";$__ctrl="if(!props.hideTotal){";
if(!props.hideTotal){
($__line=176,$__art='{{h=toPx(props.totalHeight)}}','');$__ctrl='<%h=toPx(props.totalHeight)%>';h=toPx(props.totalHeight);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+($__line=178,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=178,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+'C10 '+($__line=178,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=178,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+' 10 '+($__line=178,$__art='{{=h}}',$__ctrl='<%=h%>',(h)),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+($__line=177,$__art='{{=props.totalStart}}',$__ctrl='<%=props.totalStart%>',(props.totalStart))+($__line=177,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:15px;height:'+($__line=177,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+'px','class': 'rd-_assets_index_less_-overflow-visible rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none',},$vnode_2));$vnode_2=[$quick_bW_static_text||($quick_bW_static_text=$createVNode(0,'合计'))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none','style': 'left:-15px;top:'+($__line=180,$__art='{{=h/2+toPx(props.totalStart)}}',$__ctrl='<%=h/2+toPx(props.totalStart)%>',(h/2+toPx(props.totalStart)))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}$__line=182;$__art="{{if !props.hideFoot}}";$__ctrl="if(!props.hideFoot){";
if(!props.hideFoot){
($__line=183,$__art='{{h=props.footHeight}}','');$__ctrl='<%h=props.footHeight%>';h=props.footHeight;$__line=184;$__art="{{if h>0}}";$__ctrl="if(h>0){";
if(h>0){
($__line=185,$__art='{{h=toPx(h)}}','');$__ctrl='<%h=toPx(h)%>';h=toPx(h);$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+($__line=187,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=187,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+'C10 '+($__line=187,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=187,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+' 10 '+($__line=187,$__art='{{=h}}',$__ctrl='<%=h%>',(h)),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+($__line=186,$__art='{{=props.footStart}}',$__ctrl='<%=props.footStart%>',(props.footStart))+($__line=186,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:15px;height:'+($__line=186,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+'px','class': 'rd-_assets_index_less_-overflow-visible rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none',},$vnode_2));$vnode_2=[$quick_bX_static_text||($quick_bX_static_text=$createVNode(0,'尾'))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none','style': 'left:-15px;top:'+($__line=189,$__art='{{=h/2+toPx(props.footStart)}}',$__ctrl='<%=h/2+toPx(props.footStart)%>',(h/2+toPx(props.footStart)))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
}$text=($__line=192,$__art='{{h=props.spacingHeight}}','');$__ctrl='<%h=props.spacingHeight%>';h=props.spacingHeight;$text+=' '+($__line=193,$__art='{{h=toPx(h)}}','');$__ctrl='<%h=toPx(h)%>';h=toPx(h);$__line=194;$__art="{{if h>3}}";$__ctrl="if(h>3){";
if(h>3){
$vnode_2=[$createVNode('path',{'d': 'M10 2C0 2 10 '+($__line=196,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=196,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+'C10 '+($__line=196,$__art='{{=h/2}}',$__ctrl='<%=h/2%>',(h/2))+' 0 '+($__line=196,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+' 10 '+($__line=196,$__art='{{=h}}',$__ctrl='<%=h%>',(h)),'style': 'fill:none;stroke:#999',},1)];$vnode_1.push($createVNode('svg',{'style': 'left:-15px;top:'+($__line=195,$__art='{{=props.spacingStart}}',$__ctrl='<%=props.spacingStart%>',(props.spacingStart))+($__line=195,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:15px;height:'+($__line=195,$__art='{{=h}}',$__ctrl='<%=h%>',(h))+'px','class': 'rd-_assets_index_less_-overflow-visible rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none',},$vnode_2));$vnode_2=[$quick_bY_static_text||($quick_bY_static_text=$createVNode(0,'留白'))];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-color-999 rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none','style': 'left:-15px;top:'+($__line=198,$__art='{{=h/2+toPx(props.spacingStart)}}',$__ctrl='<%=h/2+toPx(props.spacingStart)%>',(h/2+toPx(props.spacingStart)))+'px;transform:translate(-110%,-50%);width:20px;line-height:1',},$vnode_2));
}
}$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'mx5-drop': $viewId+'@:{when.data.field.drop~rs}()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/data-dtable/dshow.html'; throw msg; }  } ,
    init() {
        this.set({
            toPx: const_1['@:{const#to.px~rs}'],
            toUnit: const_1['@:{const#to.unit~rs}'],
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