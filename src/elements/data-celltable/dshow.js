/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-celltable/dshow",["magix5","../../designer/const","../../designer/history","../../designer/stage-selection","../../gallery/mx-dragdrop/index","../../provider/hodbase","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");
let $quick_ca_static_text;
let $quick_ct_static_text;
let $quick_cM_0_static_attr={'class': 'rd-_assets_index_less_-bottom-2 rd-_assets_index_less_-color-999 rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-right-2',};
let $quick_cM_1_static_attr={'class': 'rd-_assets_index_less_-ellipsis',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let history_1 = require("../../designer/history");
let stage_selection_1 = require("../../designer/stage-selection");
let index_1 = require("../../gallery/mx-dragdrop/index");
let hodbase_1 = require("../../provider/hodbase");
let { State, View } = magix_1;
let hasContent = (props, row, col) => {
    let cell = props.rows[row].cols[col];
    if (cell.type == 'text') {
        return cell.textContent;
    }
};
let dragLocker = {};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	fs,
	toUnit,
	i18n,
	selected,
	count,
	fieldRow,
	fieldCol,
	grouped,
	toPx,
	cursor,}=$dataFromView,
$text,
$vnode_6,
$$_style,
$vnode_7,
$$_class,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$text=($__line=2,$__art='{{set {max,min}=Math}}','');$__ctrl='<%let max=Math.max,min=Math.min;%>';let max=Math.max,min=Math.min;;$text+=' '+($__line=3,$__art='{{set {borderwidth:bw,bordertype,bordercolor,borderdeed,rows}=props}}','');$__ctrl='<%let bw=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows;%>';let bw=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows;;$text+=' '+($__line=4,$__art='{{set bwn=(borderdeed==\'collapse\'?1:2)*bw}}','');$__ctrl='<%let bwn=(borderdeed==\'collapse\'?1:2)*bw;%>';let bwn=(borderdeed=='collapse'?1:2)*bw;;$vnode_3=[];$__line=7;$__art="{{each rows as row ri}}";$__ctrl="for(let $q_c_vacoft=rows.length,ri=0;ri<$q_c_vacoft;ri++){let row=rows[ri];";
for(let $q_c_vacoft=rows.length,ri=0;ri<$q_c_vacoft;ri+=1){
let row=rows[ri];
$vnode_4=[];$__line=9;$__art="{{each row.cols as col ci}}";$__ctrl="for(let $q_a_heehczwf=row.cols,$q_c_ijijmcie=$q_a_heehczwf.length,ci=0;ci<$q_c_ijijmcie;ci++){let col=$q_a_heehczwf[ci];";
for(let $q_a_heehczwf=row.cols,$q_c_ijijmcie=$q_a_heehczwf.length,ci=0;ci<$q_c_ijijmcie;ci+=1){
let col=$q_a_heehczwf[ci];
$vnode_5=[];$__line=11;$__art="{{if !fs && col.type}}";$__ctrl="if(!fs && col.type){";
if(!fs && col.type){
$text=($__line=13,$__art='{{if col.type==\'text\'}}','');$__ctrl='<%if(col.type==\'text\'){%>';if(col.type=='text'){;$text+='  '+($__line=15,$__art='{{else if col.type==\'image\'}}','');$__ctrl='<%}else if(col.type==\'image\'){%>';}else if(col.type=='image'){;$text+='  '+($__line=17,$__art='{{else if col.type==\'barcode\'}}','');$__ctrl='<%}else if(col.type==\'barcode\'){%>';}else if(col.type=='barcode'){;$text+='  '+($__line=19,$__art='{{else if col.type==\'qrcode\'}}','');$__ctrl='<%}else if(col.type==\'qrcode\'){%>';}else if(col.type=='qrcode'){;$text+='  '+($__line=21,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_6=[$createVNode(0,$text)];$vnode_5.push($createVNode('i',$quick_cM_0_static_attr,$vnode_6));
}$text=($__line=24,$__art='{{set {paddingTop,paddingBottom,paddingLeft,paddingRight}=col}}','');$__ctrl='<%let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;%>';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' '+($__line=25,$__art='{{set realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1)}}','');$__ctrl='<%let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);%>';let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);;$__line=26;$__art="{{if paddingTop>realHeight}}";$__ctrl="if(paddingTop>realHeight){";
if(paddingTop>realHeight){
($__line=27,$__art='{{paddingTop=realHeight}}','');$__ctrl='<%paddingTop=realHeight%>';paddingTop=realHeight;
}$__line=29;$__art="{{if paddingTop+paddingBottom>realHeight}}";$__ctrl="if(paddingTop+paddingBottom>realHeight){";
if(paddingTop+paddingBottom>realHeight){
($__line=30,$__art='{{paddingBottom=realHeight-paddingTop}}','');$__ctrl='<%paddingBottom=realHeight-paddingTop%>';paddingBottom=realHeight-paddingTop;
}$__line=32;$__art="{{if paddingLeft>realWidth}}";$__ctrl="if(paddingLeft>realWidth){";
if(paddingLeft>realWidth){
($__line=33,$__art='{{paddingLeft=realWidth}}','');$__ctrl='<%paddingLeft=realWidth%>';paddingLeft=realWidth;
}$__line=35;$__art="{{if paddingLeft+paddingRight>realWidth}}";$__ctrl="if(paddingLeft+paddingRight>realWidth){";
if(paddingLeft+paddingRight>realWidth){
($__line=36,$__art='{{paddingRight=realWidth-paddingLeft}}','');$__ctrl='<%paddingRight=realWidth-paddingLeft%>';paddingRight=realWidth-paddingLeft;
}$vnode_6=[];$__line=39;$__art="{{if col.bindKey}}";$__ctrl="if(col.bindKey){";
if(col.bindKey){
$__line=40;$__art="{{if !fs&&!props.locked}}";$__ctrl="if(!fs&&!props.locked){";
if(!fs&&!props.locked){
$vnode_7=[$quick_ca_static_text||($quick_ca_static_text=$createVNode(0,''))];$vnode_6.push($createVNode('i',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-gray rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_assets_index_less_-right-2 rd-_assets_index_less_-top-2 rd-_assets_index_less_-touch-action-none','mx5-pointerdown': $viewId+'1@:{stop~rs}()','mx5-click': $viewId+'@:{delete.bind.field~rs}({row:'+($__line=41,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=41,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})','title': ($__line=41,$__art='{{=i18n(\'@:{lang#elements.delete.bind.field~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#elements.delete.bind.field~rs}\')%>',(i18n('@:{lang#elements.delete.bind.field~rs}'))),},$vnode_7));
}$vnode_6.push($createVNode(0,'[绑定:'+($__line=43,$__art='{{=col.bindName}}',$__ctrl='<%=col.bindName%>',(col.bindName))+']'));$__line=43;$__art="{{if !col.type}}";$__ctrl="if(!col.type){";
if(!col.type){
$vnode_6.push($quick_ct_static_text||($quick_ct_static_text=$createVNode(0,'，未指定格子内容')));
}
}else if(($__line=44,$__art="{{else if col.type==\\'text\\'}}",$__ctrl="else if(col.type=='text'){"),col.type=='text'){
$__line=45;$__art="{{if col.textContent}}";$__ctrl="if(col.textContent){";
if(col.textContent){
$vnode_7=[$createVNode(0,($__line=46,$__art='{{=col.textContent}}',$__ctrl='<%=col.textContent%>',(col.textContent)),1)];$vnode_6.push($createVNode('div',$quick_cM_1_static_attr,$vnode_7));
}
}else if(($__line=48,$__art="{{else if col.type==\\'image\\'}}",$__ctrl="else if(col.type=='image'){"),col.type=='image'){
$__line=49;$__art="{{if col.imageContent}}";$__ctrl="if(col.imageContent){";
if(col.imageContent){
;$$_style=($__line=50,$__art='{{if col.imageRotateX||col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateX||col.imageRotateY){%>';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:'+($__line=50,$__art='{{if col.imageRotateX}}','');$__ctrl='<%if(col.imageRotateX){%>';if(col.imageRotateX){;$$_style+='rotateX(180deg)'+($__line=50,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=50,$__art='{{if col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateY){%>';if(col.imageRotateY){;$$_style+=' rotateY(180deg)'+($__line=50,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=50,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_6.push($createVNode('img',{'class': 'rd-_assets_index_less_-mhp100 rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-img','src': ($__line=50,$__art='{{=col.imageContent}}',$__ctrl='<%=col.imageContent%>',(col.imageContent)),'style': $$_style,},1));
}
}else if(($__line=52,$__art="{{else if col.type==\\'barcode\\'}}",$__ctrl="else if(col.type=='barcode'){"),col.type=='barcode'){
$__line=53;$__art="{{if col.barcodeContent}}";$__ctrl="if(col.barcodeContent){";
if(col.barcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-_assets_index_less_-flex','style': 'height:'+($__line=54,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=54,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos)),'mx5-view': 'elements/subs/barcode?lineColor='+($__line=54,$__art='{{=col.barcodeColor}}',$__ctrl='<%=$encodeUrl(col.barcodeColor)%>',($encodeUrl(col.barcodeColor)))+'&lineWidth='+($__line=54,$__art='{{=col.barcodeLineWidth}}',$__ctrl='<%=$encodeUrl(col.barcodeLineWidth)%>',($encodeUrl(col.barcodeLineWidth)))+'&showText='+($__line=54,$__art='{{=col.barcodeShowText}}',$__ctrl='<%=$encodeUrl(col.barcodeShowText)%>',($encodeUrl(col.barcodeShowText)))+'&format='+($__line=54,$__art='{{=col.barcodeFormat}}',$__ctrl='<%=$encodeUrl(col.barcodeFormat)%>',($encodeUrl(col.barcodeFormat)))+'&value='+($__line=54,$__art='{{=col.barcodeContent}}',$__ctrl='<%=$encodeUrl(col.barcodeContent)%>',($encodeUrl(col.barcodeContent))),}));
}
}else if(($__line=56,$__art="{{else if col.type==\\'qrcode\\'}}",$__ctrl="else if(col.type=='qrcode'){"),col.type=='qrcode'){
$__line=57;$__art="{{if col.qrcodeContent}}";$__ctrl="if(col.qrcodeContent){";
if(col.qrcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+($__line=58,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=58,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'mx5-view': 'elements/subs/qrcode?vpos='+($__line=58,$__art='{{=col.vpos}}',$__ctrl='<%=$encodeUrl(col.vpos)%>',($encodeUrl(col.vpos)))+'&value='+($__line=58,$__art='{{=col.qrcodeContent}}',$__ctrl='<%=$encodeUrl(col.qrcodeContent)%>',($encodeUrl(col.qrcodeContent))),}));
}
};$$_style='padding:'+($__line=38,$__art='{{=paddingTop}}',$__ctrl='<%=paddingTop%>',(paddingTop))+($__line=38,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=38,$__art='{{=paddingRight}}',$__ctrl='<%=paddingRight%>',(paddingRight))+($__line=38,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=38,$__art='{{=paddingBottom}}',$__ctrl='<%=paddingBottom%>',(paddingBottom))+($__line=38,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=38,$__art='{{=paddingLeft}}',$__ctrl='<%=paddingLeft%>',(paddingLeft))+($__line=38,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=38,$__art='{{=realWidth}}',$__ctrl='<%=realWidth%>',(realWidth))+($__line=38,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=38,$__art='{{=realHeight}}',$__ctrl='<%=realHeight%>',(realHeight))+($__line=38,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=38,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos))+';justify-content:'+($__line=38,$__art='{{=col.hpos}}',$__ctrl='<%=col.hpos%>',(col.hpos))+';opacity:'+($__line=38,$__art='{{=col.alpha}}',$__ctrl='<%=col.alpha%>',(col.alpha))+';'+($__line=38,$__art='{{if col.background}}','');$__ctrl='<%if(col.background){%>';if(col.background){;$$_style+='background:'+($__line=38,$__art='{{=col.background}}',$__ctrl='<%=col.background%>',(col.background))+';'+($__line=38,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=38,$__art='{{if col.type==\'text\'}}','');$__ctrl='<%if(col.type==\'text\'){%>';if(col.type=='text'){;$$_style+='color:'+($__line=38,$__art='{{=col.textForecolor}}',$__ctrl='<%=col.textForecolor%>',(col.textForecolor))+';letter-spacing:'+($__line=38,$__art='{{=col.textLetterspacing}}',$__ctrl='<%=col.textLetterspacing%>',(col.textLetterspacing))+($__line=38,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=38,$__art='{{if col.textStyleBold}}','');$__ctrl='<%if(col.textStyleBold){%>';if(col.textStyleBold){;$$_style+='font-weight:bold;'+($__line=38,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=38,$__art='{{if col.textStyleItalic}}','');$__ctrl='<%if(col.textStyleItalic){%>';if(col.textStyleItalic){;$$_style+='font-style:italic;'+($__line=38,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=38,$__art='{{if col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline}}','');$__ctrl='<%if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){%>';if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:'+($__line=38,$__art='{{if col.textStyleStrike}}','');$__ctrl='<%if(col.textStyleStrike){%>';if(col.textStyleStrike){;$$_style+='line-through'+($__line=38,$__art='{{else if col.textStyleOverline}}','');$__ctrl='<%}else if(col.textStyleOverline){%>';}else if(col.textStyleOverline){;$$_style+='overline'+($__line=38,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='underline'+($__line=38,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=';'+($__line=38,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='font-family:'+($__line=38,$__art='{{=col.textFontfamily}}',$__ctrl='<%=col.textFontfamily%>',(col.textFontfamily))+';font-size:'+($__line=38,$__art='{{=col.textFontsize}}',$__ctrl='<%=col.textFontsize%>',(col.textFontsize))+($__line=38,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=38,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_5.push($createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pr','style': $$_style,},$vnode_6));$__line=62;$__art="{{if !fs&&!props.locked}}";$__ctrl="if(!fs&&!props.locked){";
if(!fs&&!props.locked){
($__line=63,$__art='{{set focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1}}','');$__ctrl='<%let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;%>';let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_6=[];$__line=65;$__art="{{if focusCurrentCell&&!grouped}}";$__ctrl="if(focusCurrentCell&&!grouped){";
if(focusCurrentCell&&!grouped){
$text=($__line=66,$__art='{{set height=(min(26,toPx(col.height)-6)-4)}}','');$__ctrl='<%let height=(min(26,toPx(col.height)-6)-4);%>';let height=(min(26,toPx(col.height)-6)-4);;$text+=' '+($__line=67,$__art='{{set width=(min(26,toPx(col.width)-6)-4)}}','');$__ctrl='<%let width=(min(26,toPx(col.width)-6)-4);%>';let width=(min(26,toPx(col.width)-6)-4);;$text+=' '+($__line=68,$__art='{{set top=(toPx(col.height)-height-bwn)/2-1}}','');$__ctrl='<%let top=(toPx(col.height)-height-bwn)/2-1;%>';let top=(toPx(col.height)-height-bwn)/2-1;;$text+=' '+($__line=69,$__art='{{set left=(toPx(col.width)-width-bwn)/2-1}}','');$__ctrl='<%let left=(toPx(col.width)-width-bwn)/2-1;%>';let left=(toPx(col.width)-width-bwn)/2-1;;$vnode_6.push($createVNode('div',{'class': 'rd-_assets_index_less_-hod-right rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none','style': 'height:'+($__line=70,$__art='{{=max(height,0)}}',$__ctrl='<%=max(height,0)%>',(max(height,0)))+'px;top:'+($__line=70,$__art='{{=top}}',$__ctrl='<%=top%>',(top))+'px;cursor:'+($__line=70,$__art='{{=cursor(props.rotate,0)}}',$__ctrl='<%=cursor(props.rotate,0)%>',(cursor(props.rotate,0)))+'-resize','title': ($__line=70,$__art='{{=i18n(\'@:{lang#press.drag.cell.width~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.cell.width~rs}\')%>',(i18n('@:{lang#press.drag.cell.width~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize.table.cell~rs}({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-_assets_index_less_-hod-left rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none','style': 'height:'+($__line=71,$__art='{{=max(height,0)}}',$__ctrl='<%=max(height,0)%>',(max(height,0)))+'px;top:'+($__line=71,$__art='{{=top}}',$__ctrl='<%=top%>',(top))+'px;cursor:'+($__line=71,$__art='{{=cursor(props.rotate,0)}}',$__ctrl='<%=cursor(props.rotate,0)%>',(cursor(props.rotate,0)))+'-resize','title': ($__line=71,$__art='{{=i18n(\'@:{lang#press.drag.cell.width~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.cell.width~rs}\')%>',(i18n('@:{lang#press.drag.cell.width~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize.table.cell~rs}({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-_assets_index_less_-hod-bottom rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none','style': 'width:'+($__line=72,$__art='{{=max(width,0)}}',$__ctrl='<%=max(width,0)%>',(max(width,0)))+'px;left:'+($__line=72,$__art='{{=left}}',$__ctrl='<%=left%>',(left))+'px;cursor:'+($__line=72,$__art='{{=cursor(props.rotate,90)}}',$__ctrl='<%=cursor(props.rotate,90)%>',(cursor(props.rotate,90)))+'-resize','title': ($__line=72,$__art='{{=i18n(\'@:{lang#press.drag.cell.height~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.cell.height~rs}\')%>',(i18n('@:{lang#press.drag.cell.height~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize.table.cell~rs}({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-_assets_index_less_-hod-top rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none','style': 'width:'+($__line=73,$__art='{{=max(width,0)}}',$__ctrl='<%=max(width,0)%>',(max(width,0)))+'px;left:'+($__line=73,$__art='{{=left}}',$__ctrl='<%=left%>',(left))+'px;cursor:'+($__line=73,$__art='{{=cursor(props.rotate,90)}}',$__ctrl='<%=cursor(props.rotate,90)%>',(cursor(props.rotate,90)))+'-resize','title': ($__line=73,$__art='{{=i18n(\'@:{lang#press.drag.cell.height~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.cell.height~rs}\')%>',(i18n('@:{lang#press.drag.cell.height~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize.table.cell~rs}({key:\'tm\'})',}));
};$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-hod-focus-div rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-pointer-events-none'+($__line=64,$__art='{{if focusCurrentCell}}','');$__ctrl='<%if(focusCurrentCell){%>';if(focusCurrentCell){;$$_class+=' rd-_assets_index_less_-hod-focus-line'+($__line=64,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=64,$__art='{{if fieldRow==ri&&fieldCol==ci}}','');$__ctrl='<%if(fieldRow==ri&&fieldCol==ci){%>';if(fieldRow==ri&&fieldCol==ci){;$$_class+=' rd-_assets_index_less_-hod-drop-tip'+($__line=64,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style=($__line=64,$__art='{{if focusCurrentCell}}','');$__ctrl='<%if(focusCurrentCell){%>';if(focusCurrentCell){;$$_style+=''+($__line=64,$__art='{{if !col.bLeft}}','');$__ctrl='<%if(!col.bLeft){%>';if(!col.bLeft){;$$_style+='border-left-style:dotted;'+($__line=64,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=64,$__art='{{if !col.bTop}}','');$__ctrl='<%if(!col.bTop){%>';if(!col.bTop){;$$_style+='border-top-style:dotted;'+($__line=64,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=64,$__art='{{if !col.bRight}}','');$__ctrl='<%if(!col.bRight){%>';if(!col.bRight){;$$_style+='border-right-style:dotted;'+($__line=64,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=64,$__art='{{if !col.bBottom}}','');$__ctrl='<%if(!col.bBottom){%>';if(!col.bBottom){;$$_style+='border-bottom-style:dotted;'+($__line=64,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=64,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_5.push($createVNode('div',{'class': $$_class,'style': $$_style,},$vnode_6));
}$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-word-break-break-all','colspan': ($temp_var=($__line=10,$__art='{{=col.colspan}}',$__ctrl='<%=col.colspan%>',col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=($__line=10,$__art='{{=col.rowspan}}',$__ctrl='<%=col.rowspan%>',col.rowspan))!=null&&$temp_var,'style': 'position:relative;width:'+($__line=10,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=10,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=10,$__art='{{=col.height}}',$__ctrl='<%=col.height%>',(col.height))+($__line=10,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-left:'+($__line=10,$__art='{{=bw?bordertype:\'dotted\'}}',$__ctrl='<%=bw?bordertype:\'dotted\'%>',(bw?bordertype:'dotted'))+' '+($__line=10,$__art='{{=bw}}',$__ctrl='<%=bw%>',(bw))+($__line=10,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=10,$__art='{{=bw&&col.bLeft?bordercolor:\'#ddd6\'}}',$__ctrl='<%=bw&&col.bLeft?bordercolor:\'#ddd6\'%>',(bw&&col.bLeft?bordercolor:'#ddd6'))+';border-top:'+($__line=10,$__art='{{=bw?bordertype:\'dotted\'}}',$__ctrl='<%=bw?bordertype:\'dotted\'%>',(bw?bordertype:'dotted'))+' '+($__line=10,$__art='{{=bw}}',$__ctrl='<%=bw%>',(bw))+($__line=10,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=10,$__art='{{=bw&&col.bTop?bordercolor:\'#ddd6\'}}',$__ctrl='<%=bw&&col.bTop?bordercolor:\'#ddd6\'%>',(bw&&col.bTop?bordercolor:'#ddd6'))+';border-right:'+($__line=10,$__art='{{=bw?bordertype:\'dotted\'}}',$__ctrl='<%=bw?bordertype:\'dotted\'%>',(bw?bordertype:'dotted'))+' '+($__line=10,$__art='{{=bw}}',$__ctrl='<%=bw%>',(bw))+($__line=10,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=10,$__art='{{=bw&&col.bRight?bordercolor:\'#ddd6\'}}',$__ctrl='<%=bw&&col.bRight?bordercolor:\'#ddd6\'%>',(bw&&col.bRight?bordercolor:'#ddd6'))+';border-bottom:'+($__line=10,$__art='{{=bw?bordertype:\'dotted\'}}',$__ctrl='<%=bw?bordertype:\'dotted\'%>',(bw?bordertype:'dotted'))+' '+($__line=10,$__art='{{=bw}}',$__ctrl='<%=bw%>',(bw))+($__line=10,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=10,$__art='{{=bw&&col.bBottom?bordercolor:\'#ddd6\'}}',$__ctrl='<%=bw&&col.bBottom?bordercolor:\'#ddd6\'%>',(bw&&col.bBottom?bordercolor:'#ddd6')),'mx5-pointerdown': $viewId+'@:{active.cell~rs}({row:'+($__line=10,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=10,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})','mx5-dragenter': $viewId+'@:{when.data.field.enter~rs}({row:'+($__line=10,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=10,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})','mx5-dragleave': $viewId+'@:{when.data.field.leave~rs}({row:'+($__line=10,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=10,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})',},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-_assets_index_less_-table rd-_assets_index_less_-wp100','style': 'border-collapse:'+($__line=5,$__art='{{=borderdeed}}',$__ctrl='<%=borderdeed%>',(borderdeed)),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)','mx5-drop': $viewId+'@:{when.data.field.drop~rs}()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/data-celltable/dshow.html'; throw msg; }  } ,
    init() {
        this.set({
            toPx: const_1['@:{const#to.px~rs}'],
            toUnit: const_1['@:{const#to.unit~rs}'],
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{when.data.field.enter~rs}<dragenter>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        e['@:{halt~rs}'] = 1;
        let { row, col } = e.params;
        if (index_1['@:{is.dragenter~rs}'](dragLocker, `${row}_${col}`)) {
            if (hasContent(props, row, col)) {
                this.digest({
                    fieldRow: -1,
                    colRow: -1
                });
            }
            else {
                let src = State.get('@:{global#bind.field.drag.data~rs}');
                if (src) {
                    this.digest({
                        fieldRow: row,
                        fieldCol: col
                    });
                }
            }
        }
    },
    '@:{when.data.field.leave~rs}<dragleave>'(e) {
        let { row, col } = e.params;
        if (index_1['@:{is.dragleave~rs}'](dragLocker, `${row}_${col}`)) {
            if (this.get('fieldRow') == row &&
                this.get('fieldCol') == col) {
                this.digest({
                    fieldRow: -1,
                    fieldCol: -1
                });
            }
        }
    },
    '@:{delete.bind.field~rs}<click>'(e) {
        let props = this.get('props');
        if (props.locked)
            return;
        let element = this.get('element');
        let { row, col } = e.params;
        let { rows } = props;
        let cell = rows[row].cols[col];
        delete cell.bindKey;
        delete cell.bindName;
        let hasBindKey = 0;
        for (let row of rows) {
            for (let col of row.cols) {
                if (col.bindKey) {
                    hasBindKey = 1;
                    break;
                }
            }
            if (hasBindKey) {
                break;
            }
        }
        if (!hasBindKey) {
            props.bind.id = '';
            props.bind.url = '';
        }
        this.digest({
            props
        });
        State.fire('@:{event#stage.select.element.props.change~rs}', {
            '@:{ids~rs}': {
                [element.id]: 1
            },
            '@:{types~rs}': {
                [element.type]: 1
            },
            '@:{props~rs}': {
                '@:{bind~rs}': 1
            }
        });
        history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.props~rs}'], props.ename);
    },
    '@:{when.data.field.drop~rs}<drop>'(e) {
        this['@:{prevent.default~rs}'](e);
        dragLocker = {};
        e['@:{halt~rs}'] = 1;
        let row = this.get('fieldRow'), col = this.get('fieldCol');
        let src = State.get('@:{global#bind.field.drag.data~rs}');
        if (src &&
            row != -1 &&
            col != -1) {
            let props = this.get('props');
            let element = this.get('element');
            let { rows } = props;
            if (props.bind.id != src.id) {
                for (let row of rows) {
                    for (let col of row.cols) {
                        if (col.bindKey) {
                            delete col.bindKey;
                            delete col.bindName;
                        }
                    }
                }
            }
            props.bind.id = src.id;
            props.bind.url = src.url;
            props.focusRow = row;
            props.focusCol = col;
            let cell = rows[row].cols[col];
            cell.bindKey = src.field.id;
            cell.bindName = src.field.name;
            this.digest({
                fieldRow: -1,
                fieldCol: -1
            });
            if (!stage_selection_1["@:{selection#set~rs}"](element)) {
                State.fire('@:{event#stage.select.element.props.change~rs}', {
                    '@:{ids~rs}': {
                        [element.id]: 1
                    },
                    '@:{types~rs}': {
                        [element.type]: 1
                    },
                    '@:{props~rs}': {
                        '@:{bind~rs}': 1
                    }
                });
            }
            history_1["@:{history#save~rs}"](history_1['@:{history#element.modified.props~rs}'], props.ename);
        }
    }
}).merge(index_1, hodbase_1);

});