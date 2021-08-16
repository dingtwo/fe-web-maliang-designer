/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-dtable/index",["magix5","../../designer/const","../../provider/format","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let format_1 = require("../../provider/format");
let format = format_1["@:{format~rs}"].bind(format_1);
let firstToUppercase = str => {
    str += '';
    if (str.length) {
        return str[0].toUpperCase() + str.substring(1);
    }
    return str;
};
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	toUnit,
	ftu,
	format,}=$dataFromView,
$text,
$$_style,
$vnode_7,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$text=($__line=2,$__art='{{set findLabelRow,findTotalRow}}','');$__ctrl='<%let findLabelRow,findTotalRow;%>';let findLabelRow,findTotalRow;;$text+=' '+($__line=3,$__art='{{set {borderwidth,bordertype,bordercolor,borderdeed,rows,bind}=props}}','');$__ctrl='<%let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,bind=props.bind;%>';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,bind=props.bind;;$text+=' '+($__line=4,$__art='{{set bwn=(borderdeed==\'collapse\'?1:2)*borderwidth}}','');$__ctrl='<%let bwn=(borderdeed==\'collapse\'?1:2)*borderwidth;%>';let bwn=(borderdeed=='collapse'?1:2)*borderwidth;;$text+=' '+($__line=5,$__art='{{set dataRowCols}}','');$__ctrl='<%let dataRowCols;%>';let dataRowCols;;$vnode_3=[];$__line=8;$__art="{{each rows as row ri}}";$__ctrl="for(let $q_c_rrpnq=rows.length,ri=0;ri<$q_c_rrpnq;ri++){let row=rows[ri];";
for(let $q_c_rrpnq=rows.length,ri=0;ri<$q_c_rrpnq;ri+=1){
let row=rows[ri];
$__line=9;$__art="{{if (row.label&&bind._data&&bind._data.length&&!props.hideLabel)||(!row.data&&!row.label&&!findLabelRow&&bind._showHead)||(findTotalRow&&!props.hideFoot&&bind._showFoot)||(row.total&&!props.hideTotal&&bind._showAcc)}}";$__ctrl="if((row.label&&bind._data&&bind._data.length&&!props.hideLabel)||(!row.data&&!row.label&&!findLabelRow&&bind._showHead)||(findTotalRow&&!props.hideFoot&&bind._showFoot)||(row.total&&!props.hideTotal&&bind._showAcc)){";
if((row.label&&bind._data&&bind._data.length&&!props.hideLabel)||(!row.data&&!row.label&&!findLabelRow&&bind._showHead)||(findTotalRow&&!props.hideFoot&&bind._showFoot)||(row.total&&!props.hideTotal&&bind._showAcc)){
$vnode_4=[];$__line=11;$__art="{{each row.cols as col ci}}";$__ctrl="for(let $q_a_shezqxxbj=row.cols,$q_c_isxsuozmka=$q_a_shezqxxbj.length,ci=0;ci<$q_c_isxsuozmka;ci++){let col=$q_a_shezqxxbj[ci];";
for(let $q_a_shezqxxbj=row.cols,$q_c_isxsuozmka=$q_a_shezqxxbj.length,ci=0;ci<$q_c_isxsuozmka;ci+=1){
let col=$q_a_shezqxxbj[ci];
$vnode_5=[];$__line=13;$__art="{{if bind._tip}}";$__ctrl="if(bind._tip){";
if(bind._tip){
$vnode_5.push($createVNode(0,($__line=14,$__art='{{=bind._tip}}',$__ctrl='<%=bind._tip%>',(bind._tip))));
}else{
$__line=16;$__art="{{if col.elements&&col.elements.length}}";$__ctrl="if(col.elements&&col.elements.length){";
if(col.elements&&col.elements.length){
$__line=17;$__art="{{each col.elements as e}}";$__ctrl="for(let $q_a_gixfcsgr=col.elements,$q_c_dgjwqmcq=$q_a_gixfcsgr.length,$q_key_exypkdgyck=0;$q_key_exypkdgyck<$q_c_dgjwqmcq;$q_key_exypkdgyck++){let e=$q_a_gixfcsgr[$q_key_exypkdgyck];";
for(let $q_a_gixfcsgr=col.elements,$q_c_dgjwqmcq=$q_a_gixfcsgr.length,$q_key_exypkdgyck=0;$q_key_exypkdgyck<$q_c_dgjwqmcq;$q_key_exypkdgyck+=1){
let e=$q_a_gixfcsgr[$q_key_exypkdgyck];
$vnode_5.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props','mx5-view': 'elements/'+($__line=18,$__art='{{=e.type}}',$__ctrl='<%=e.type%>',(e.type))+'/index?props='+($__line=18,$__art='{{#e.props}}',$__ctrl='<%#e.props,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+($q_key_exypkdgyck)+\'.e.props\'%>',$keyOf($refData,e.props,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.elements.'+($q_key_exypkdgyck)+'.e.props'))+'&unit='+($__line=18,$__art='{{=unit}}',$__ctrl='<%=$encodeUrl(unit)%>',($encodeUrl(unit))),}));
}
}else{
$text=($__line=21,$__art='{{set {paddingTop,paddingBottom,paddingLeft,paddingRight}=col}}','');$__ctrl='<%let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;%>';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' '+($__line=22,$__art='{{set realWidth=col.width-bwn-toUnit(1),realHeight=Math.max(col.height-bwn-toUnit(1),0)}}','');$__ctrl='<%let realWidth=col.width-bwn-toUnit(1),realHeight=Math.max(col.height-bwn-toUnit(1),0);%>';let realWidth=col.width-bwn-toUnit(1),realHeight=Math.max(col.height-bwn-toUnit(1),0);;$__line=23;$__art="{{if paddingTop>realHeight}}";$__ctrl="if(paddingTop>realHeight){";
if(paddingTop>realHeight){
($__line=24,$__art='{{paddingTop=realHeight}}','');$__ctrl='<%paddingTop=realHeight%>';paddingTop=realHeight;
}$__line=26;$__art="{{if paddingTop+paddingBottom>realHeight}}";$__ctrl="if(paddingTop+paddingBottom>realHeight){";
if(paddingTop+paddingBottom>realHeight){
($__line=27,$__art='{{paddingBottom=realHeight-paddingTop}}','');$__ctrl='<%paddingBottom=realHeight-paddingTop%>';paddingBottom=realHeight-paddingTop;
}$__line=29;$__art="{{if paddingLeft>realWidth}}";$__ctrl="if(paddingLeft>realWidth){";
if(paddingLeft>realWidth){
($__line=30,$__art='{{paddingLeft=realWidth}}','');$__ctrl='<%paddingLeft=realWidth%>';paddingLeft=realWidth;
}$__line=32;$__art="{{if paddingLeft+paddingRight>realWidth}}";$__ctrl="if(paddingLeft+paddingRight>realWidth){";
if(paddingLeft+paddingRight>realWidth){
($__line=33,$__art='{{paddingRight=realWidth-paddingLeft}}','');$__ctrl='<%paddingRight=realWidth-paddingLeft%>';paddingRight=realWidth-paddingLeft;
}$vnode_6=[];$__line=36;$__art="{{if col.type==\\'text\\'}}";$__ctrl="if(col.type=='text'){";
if(col.type=='text'){
$vnode_7=[$createVNode(0,($__line=37,$__art='{{=col.textContent}}',$__ctrl='<%=col.textContent%>',(col.textContent)),1)];$vnode_6.push($createVNode('div',{'class': (($__line=37,$__art='{{=!col.textAutoReturn}}',$__ctrl='<%=!col.textAutoReturn%>',!col.textAutoReturn))&&('rd-_assets_index_less_-ellipsis'),},$vnode_7));
}else if(($__line=38,$__art="{{else if col.type==\\'image\\'}}",$__ctrl="else if(col.type=='image'){"),col.type=='image'){
$__line=39;$__art="{{if col.imageContent}}";$__ctrl="if(col.imageContent){";
if(col.imageContent){
;$$_style=($__line=40,$__art='{{if col.imageRotateX||col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateX||col.imageRotateY){%>';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:'+($__line=40,$__art='{{if col.imageRotateX}}','');$__ctrl='<%if(col.imageRotateX){%>';if(col.imageRotateX){;$$_style+='rotateX(180deg)'+($__line=40,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=40,$__art='{{if col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateY){%>';if(col.imageRotateY){;$$_style+=' rotateY(180deg)'+($__line=40,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=40,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_6.push($createVNode('img',{'class': 'rd-_assets_index_less_-mhp100 rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-img','src': ($__line=40,$__art='{{=col.imageContent}}',$__ctrl='<%=col.imageContent%>',(col.imageContent)),'style': $$_style,},1));
}
}else if(($__line=42,$__art="{{else if col.type==\\'barcode\\'}}",$__ctrl="else if(col.type=='barcode'){"),col.type=='barcode'){
$__line=43;$__art="{{if col.barcodeContent}}";$__ctrl="if(col.barcodeContent){";
if(col.barcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props','class': 'rd-_assets_index_less_-flex','style': 'height:'+($__line=44,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=44,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=44,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos)),'mx5-view': 'elements/subs/barcode?lineColor='+($__line=44,$__art='{{#col.barcodeColor}}',$__ctrl='<%#col.barcodeColor,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col.barcodeColor\'%>',$keyOf($refData,col.barcodeColor,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col.barcodeColor'))+'&lineWidth='+($__line=44,$__art='{{#col.barcodeLineWidth}}',$__ctrl='<%#col.barcodeLineWidth,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col.barcodeLineWidth\'%>',$keyOf($refData,col.barcodeLineWidth,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col.barcodeLineWidth'))+'&showText='+($__line=44,$__art='{{#col.barcodeShowText}}',$__ctrl='<%#col.barcodeShowText,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col.barcodeShowText\'%>',$keyOf($refData,col.barcodeShowText,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col.barcodeShowText'))+'&format='+($__line=44,$__art='{{#col.barcodeFormat}}',$__ctrl='<%#col.barcodeFormat,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col.barcodeFormat\'%>',$keyOf($refData,col.barcodeFormat,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col.barcodeFormat'))+'&value='+($__line=44,$__art='{{=col.barcodeContent}}',$__ctrl='<%=$encodeUrl(col.barcodeContent)%>',($encodeUrl(col.barcodeContent))),}));
}
}else if(($__line=46,$__art="{{else if col.type==\\'qrcode\\'}}",$__ctrl="else if(col.type=='qrcode'){"),col.type=='qrcode'){
$__line=47;$__art="{{if col.qrcodeContent}}";$__ctrl="if(col.qrcodeContent){";
if(col.qrcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+($__line=48,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=48,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'mx5-view': 'elements/subs/qrcode?vpos='+($__line=48,$__art='{{=col.vpos}}',$__ctrl='<%=$encodeUrl(col.vpos)%>',($encodeUrl(col.vpos)))+'&value='+($__line=48,$__art='{{=col.qrcodeContent}}',$__ctrl='<%=$encodeUrl(col.qrcodeContent)%>',($encodeUrl(col.qrcodeContent))),}));
}
}else if(($__line=50,$__art="{{else if row.total}}",$__ctrl="else if(row.total){"),row.total){
$text=($__line=51,$__art='{{set dataCol=dataRowCols[ci]}}','');$__ctrl='<%let dataCol=dataRowCols[ci];%>';let dataCol=dataRowCols[ci];;$text+=' '+($__line=52,$__art='{{set cellType=ftu(col.type)}}','');$__ctrl='<%let cellType=ftu(col.type);%>';let cellType=ftu(col.type);;$__line=53;$__art="{{if col.type==\\'text\\'}}";$__ctrl="if(col.type=='text'){";
if(col.type=='text'){
$vnode_7=[$createVNode(0,($__line=54,$__art='{{=col.textContent}}',$__ctrl='<%=col.textContent%>',(col.textContent)))];$vnode_6.push($createVNode('div',{'class': (($__line=54,$__art='{{=!col.textAutoReturn}}',$__ctrl='<%=!col.textAutoReturn%>',!col.textAutoReturn))&&('rd-_assets_index_less_-ellipsis'),},$vnode_7));
}else if(($__line=55,$__art="{{else if col.type==\\'custom\\'}}",$__ctrl="else if(col.type=='custom'){"),col.type=='custom'){
$vnode_7=[$createVNode(0,($__line=56,$__art='{{=format(col.textFormat,col.totalData,bind._data,bind._all)}}',$__ctrl='<%=format(col.textFormat,col.totalData,bind._data,bind._all)%>',(format(col.textFormat,col.totalData,bind._data,bind._all))))];$vnode_6.push($createVNode('div',{'class': (($__line=56,$__art='{{=!col.textAutoReturn}}',$__ctrl='<%=!col.textAutoReturn%>',!col.textAutoReturn))&&('rd-_assets_index_less_-ellipsis'),},$vnode_7));
}else if(($__line=57,$__art="{{else if col.totalData[dataCol.bindKey+cellType]!=null}}",$__ctrl="else if(col.totalData[dataCol.bindKey+cellType]!=null){"),col.totalData[dataCol.bindKey+cellType]!=null){
$vnode_7=[$createVNode(0,($__line=58,$__art='{{=format(col.textFormat,col.totalData[dataCol.bindKey+cellType],col.totalData)}}',$__ctrl='<%=format(col.textFormat,col.totalData[dataCol.bindKey+cellType],col.totalData)%>',(format(col.textFormat,col.totalData[dataCol.bindKey+cellType],col.totalData))))];$vnode_6.push($createVNode('div',{'class': (($__line=58,$__art='{{=!col.textAutoReturn}}',$__ctrl='<%=!col.textAutoReturn%>',!col.textAutoReturn))&&('rd-_assets_index_less_-ellipsis'),},$vnode_7));
}
};$$_style='padding:'+($__line=35,$__art='{{=paddingTop}}',$__ctrl='<%=paddingTop%>',(paddingTop))+($__line=35,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=35,$__art='{{=paddingRight}}',$__ctrl='<%=paddingRight%>',(paddingRight))+($__line=35,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=35,$__art='{{=paddingBottom}}',$__ctrl='<%=paddingBottom%>',(paddingBottom))+($__line=35,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=35,$__art='{{=paddingLeft}}',$__ctrl='<%=paddingLeft%>',(paddingLeft))+($__line=35,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=35,$__art='{{=realWidth}}',$__ctrl='<%=realWidth%>',(realWidth))+($__line=35,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=35,$__art='{{if col.textAutoReturn}}','');$__ctrl='<%if(col.textAutoReturn){%>';if(col.textAutoReturn){;$$_style+='min-'+($__line=35,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='height:'+($__line=35,$__art='{{=realHeight}}',$__ctrl='<%=realHeight%>',(realHeight))+($__line=35,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=35,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos))+';justify-content:'+($__line=35,$__art='{{=col.hpos}}',$__ctrl='<%=col.hpos%>',(col.hpos))+';opacity:'+($__line=35,$__art='{{=col.alpha}}',$__ctrl='<%=col.alpha%>',(col.alpha))+';'+($__line=35,$__art='{{if col.background}}','');$__ctrl='<%if(col.background){%>';if(col.background){;$$_style+='background:'+($__line=35,$__art='{{=col.background}}',$__ctrl='<%=col.background%>',(col.background))+';'+($__line=35,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=35,$__art='{{if col.textFontsize!=null}}','');$__ctrl='<%if(col.textFontsize!=null){%>';if(col.textFontsize!=null){;$$_style+='color:'+($__line=35,$__art='{{=col.textForecolor}}',$__ctrl='<%=col.textForecolor%>',(col.textForecolor))+';letter-spacing:'+($__line=35,$__art='{{=col.textLetterspacing}}',$__ctrl='<%=col.textLetterspacing%>',(col.textLetterspacing))+($__line=35,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=35,$__art='{{if col.textStyleBold}}','');$__ctrl='<%if(col.textStyleBold){%>';if(col.textStyleBold){;$$_style+='font-weight:bold;'+($__line=35,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=35,$__art='{{if col.textStyleItalic}}','');$__ctrl='<%if(col.textStyleItalic){%>';if(col.textStyleItalic){;$$_style+='font-style:italic;'+($__line=35,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=35,$__art='{{if col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline}}','');$__ctrl='<%if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){%>';if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:'+($__line=35,$__art='{{if col.textStyleStrike}}','');$__ctrl='<%if(col.textStyleStrike){%>';if(col.textStyleStrike){;$$_style+='line-through'+($__line=35,$__art='{{else if col.textStyleOverline}}','');$__ctrl='<%}else if(col.textStyleOverline){%>';}else if(col.textStyleOverline){;$$_style+='overline'+($__line=35,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='underline'+($__line=35,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=';'+($__line=35,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='font-family:'+($__line=35,$__art='{{=col.textFontfamily}}',$__ctrl='<%=col.textFontfamily%>',(col.textFontfamily))+';font-size:'+($__line=35,$__art='{{=col.textFontsize}}',$__ctrl='<%=col.textFontsize%>',(col.textFontsize))+($__line=35,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=35,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_5.push($createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden','style': $$_style,},$vnode_6));
}
}$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','colspan': (($__line=12,$__art='{{=col.colspan!=1}}',$__ctrl='<%=col.colspan!=1%>',col.colspan!=1))&&(($__line=12,$__art='{{=col.colspan}}',$__ctrl='<%=col.colspan%>',(col.colspan))),'rowspan': (($__line=12,$__art='{{=col.rowspan!=1}}',$__ctrl='<%=col.rowspan!=1%>',col.rowspan!=1))&&(($__line=12,$__art='{{=col.rowspan}}',$__ctrl='<%=col.rowspan%>',(col.rowspan))),'style': 'position:relative;width:'+($__line=12,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=12,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=12,$__art='{{=col.height}}',$__ctrl='<%=col.height%>',(col.height))+($__line=12,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-left:'+($__line=12,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=12,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=12,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=12,$__art='{{=borderwidth&&col.bLeft?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bLeft?bordercolor:\'#0000\'%>',(borderwidth&&col.bLeft?bordercolor:'#0000'))+';border-top:'+($__line=12,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=12,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=12,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=12,$__art='{{=borderwidth&&col.bTop?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bTop?bordercolor:\'#0000\'%>',(borderwidth&&col.bTop?bordercolor:'#0000'))+';border-right:'+($__line=12,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=12,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=12,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=12,$__art='{{=borderwidth&&col.bRight?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bRight?bordercolor:\'#0000\'%>',(borderwidth&&col.bRight?bordercolor:'#0000'))+';border-bottom:'+($__line=12,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=12,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=12,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=12,$__art='{{=borderwidth&&col.bBottom?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bBottom?bordercolor:\'#0000\'%>',(borderwidth&&col.bBottom?bordercolor:'#0000')),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$__line=68;$__art="{{if row.data}}";$__ctrl="if(row.data){";
if(row.data){
($__line=69,$__art='{{dataRowCols=row.cols}}','');$__ctrl='<%dataRowCols=row.cols%>';dataRowCols=row.cols;$__line=70;$__art="{{if bind._data}}";$__ctrl="if(bind._data){";
if(bind._data){
($__line=71,$__art='{{set realHeights=bind._rHeights}}','');$__ctrl='<%let realHeights=bind._rHeights;%>';let realHeights=bind._rHeights;;$__line=72;$__art="{{each bind._data as data di}}";$__ctrl="for(let $q_a_ccqxrkestv=bind._data,$q_c_qikqxzjji=$q_a_ccqxrkestv.length,di=0;di<$q_c_qikqxzjji;di++){let data=$q_a_ccqxrkestv[di];";
for(let $q_a_ccqxrkestv=bind._data,$q_c_qikqxzjji=$q_a_ccqxrkestv.length,di=0;di<$q_c_qikqxzjji;di+=1){
let data=$q_a_ccqxrkestv[di];
$vnode_4=[];($__line=74,$__art='{{set height=realHeights&&realHeights[di]}}','');$__ctrl='<%let height=realHeights&&realHeights[di];%>';let height=realHeights&&realHeights[di];;$__line=75;$__art="{{each row.cols as col ci}}";$__ctrl="for(let $q_a_iwowbj=row.cols,$q_c_mrpeczzcc=$q_a_iwowbj.length,ci=0;ci<$q_c_mrpeczzcc;ci++){let col=$q_a_iwowbj[ci];";
for(let $q_a_iwowbj=row.cols,$q_c_mrpeczzcc=$q_a_iwowbj.length,ci=0;ci<$q_c_mrpeczzcc;ci+=1){
let col=$q_a_iwowbj[ci];
$vnode_5=[];$__line=77;$__art="{{if bind._tip}}";$__ctrl="if(bind._tip){";
if(bind._tip){
$vnode_5.push($createVNode(0,($__line=78,$__art='{{=bind._tip}}',$__ctrl='<%=bind._tip%>',(bind._tip))));
}else{
$text=($__line=80,$__art='{{set {paddingTop,paddingBottom,paddingLeft,paddingRight}=col}}','');$__ctrl='<%let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;%>';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' '+($__line=81,$__art='{{set realWidth=col.width-bwn,realHeight=(height||col.height)-bwn}}','');$__ctrl='<%let realWidth=col.width-bwn,realHeight=(height||col.height)-bwn;%>';let realWidth=col.width-bwn,realHeight=(height||col.height)-bwn;;$__line=82;$__art="{{if paddingTop>realHeight}}";$__ctrl="if(paddingTop>realHeight){";
if(paddingTop>realHeight){
($__line=83,$__art='{{paddingTop=realHeight}}','');$__ctrl='<%paddingTop=realHeight%>';paddingTop=realHeight;
}$__line=85;$__art="{{if paddingTop+paddingBottom>realHeight}}";$__ctrl="if(paddingTop+paddingBottom>realHeight){";
if(paddingTop+paddingBottom>realHeight){
($__line=86,$__art='{{paddingBottom=realHeight-paddingTop}}','');$__ctrl='<%paddingBottom=realHeight-paddingTop%>';paddingBottom=realHeight-paddingTop;
}$__line=88;$__art="{{if paddingLeft>realWidth}}";$__ctrl="if(paddingLeft>realWidth){";
if(paddingLeft>realWidth){
($__line=89,$__art='{{paddingLeft=realWidth}}','');$__ctrl='<%paddingLeft=realWidth%>';paddingLeft=realWidth;
}$__line=91;$__art="{{if paddingLeft+paddingRight>realWidth}}";$__ctrl="if(paddingLeft+paddingRight>realWidth){";
if(paddingLeft+paddingRight>realWidth){
($__line=92,$__art='{{paddingRight=realWidth-paddingLeft}}','');$__ctrl='<%paddingRight=realWidth-paddingLeft%>';paddingRight=realWidth-paddingLeft;
}$vnode_6=[];($__line=95,$__art='{{set value}}','');$__ctrl='<%let value;%>';let value;;$__line=96;$__art="{{if col.type==\\'text\\'}}";$__ctrl="if(col.type=='text'){";
if(col.type=='text'){
$__line=97;$__art="{{if col.bindKey}}";$__ctrl="if(col.bindKey){";
if(col.bindKey){
$text=($__line=98,$__art='{{value=data[col.bindKey]}}','');$__ctrl='<%value=data[col.bindKey]%>';value=data[col.bindKey];$text+=' '+($__line=99,$__art='{{value=format(col.textFormat,value,data)}}','');$__ctrl='<%value=format(col.textFormat,value,data)%>';value=format(col.textFormat,value,data);
}$__line=101;$__art="{{if value}}";$__ctrl="if(value){";
if(value){
$vnode_7=[$createVNode(0,($__line=102,$__art='{{=value}}',$__ctrl='<%=value%>',(value)),1)];$vnode_6.push($createVNode('div',{'class': (($__line=102,$__art='{{=!col.textAutoReturn}}',$__ctrl='<%=!col.textAutoReturn%>',!col.textAutoReturn))&&('rd-_assets_index_less_-ellipsis'),},$vnode_7));
}
}else if(($__line=104,$__art="{{else if col.type==\\'image\\'}}",$__ctrl="else if(col.type=='image'){"),col.type=='image'){
$__line=105;$__art="{{if col.bindKey}}";$__ctrl="if(col.bindKey){";
if(col.bindKey){
($__line=106,$__art='{{value=data[col.bindKey]}}','');$__ctrl='<%value=data[col.bindKey]%>';value=data[col.bindKey];
}$__line=108;$__art="{{if value}}";$__ctrl="if(value){";
if(value){
;$$_style='height:'+($__line=109,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+'px;'+($__line=109,$__art='{{if col.imageRotateX||col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateX||col.imageRotateY){%>';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:'+($__line=109,$__art='{{if col.imageRotateX}}','');$__ctrl='<%if(col.imageRotateX){%>';if(col.imageRotateX){;$$_style+='rotateX(180deg)'+($__line=109,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=109,$__art='{{if col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateY){%>';if(col.imageRotateY){;$$_style+=' rotateY(180deg)'+($__line=109,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=109,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_6.push($createVNode('img',{'class': 'rd-_assets_index_less_-mhp100 rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-img','src': ($__line=109,$__art='{{=value}}',$__ctrl='<%=value%>',(value)),'style': $$_style,},1));
}
}else if(($__line=111,$__art="{{else if col.type==\\'barcode\\'}}",$__ctrl="else if(col.type=='barcode'){"),col.type=='barcode'){
$__line=112;$__art="{{if col.bindKey}}";$__ctrl="if(col.bindKey){";
if(col.bindKey){
($__line=113,$__art='{{value=data[col.bindKey]}}','');$__ctrl='<%value=data[col.bindKey]%>';value=data[col.bindKey];
}$__line=115;$__art="{{if value}}";$__ctrl="if(value){";
if(value){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-_assets_index_less_-flex','style': 'height:'+($__line=116,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=116,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=116,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos)),'mx5-view': 'elements/subs/barcode?lineColor='+($__line=116,$__art='{{=col.barcodeColor}}',$__ctrl='<%=$encodeUrl(col.barcodeColor)%>',($encodeUrl(col.barcodeColor)))+'&lineWidth='+($__line=116,$__art='{{=col.barcodeLineWidth}}',$__ctrl='<%=$encodeUrl(col.barcodeLineWidth)%>',($encodeUrl(col.barcodeLineWidth)))+'&showText='+($__line=116,$__art='{{=col.barcodeShowText}}',$__ctrl='<%=$encodeUrl(col.barcodeShowText)%>',($encodeUrl(col.barcodeShowText)))+'&format='+($__line=116,$__art='{{=col.barcodeFormat}}',$__ctrl='<%=$encodeUrl(col.barcodeFormat)%>',($encodeUrl(col.barcodeFormat)))+'&value='+($__line=116,$__art='{{=value}}',$__ctrl='<%=$encodeUrl(value)%>',($encodeUrl(value))),}));
}
}else if(($__line=118,$__art="{{else if col.type==\\'qrcode\\'}}",$__ctrl="else if(col.type=='qrcode'){"),col.type=='qrcode'){
$__line=119;$__art="{{if col.bindKey}}";$__ctrl="if(col.bindKey){";
if(col.bindKey){
($__line=120,$__art='{{value=data[col.bindKey]}}','');$__ctrl='<%value=data[col.bindKey]%>';value=data[col.bindKey];
}$__line=122;$__art="{{if value}}";$__ctrl="if(value){";
if(value){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+($__line=123,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=123,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'mx5-view': 'elements/subs/qrcode?vpos='+($__line=123,$__art='{{=col.vpos}}',$__ctrl='<%=$encodeUrl(col.vpos)%>',($encodeUrl(col.vpos)))+'&value='+($__line=123,$__art='{{=value}}',$__ctrl='<%=$encodeUrl(value)%>',($encodeUrl(value))),}));
}
}else if(($__line=125,$__art="{{else if col.bindKey}}",$__ctrl="else if(col.bindKey){"),col.bindKey){
$vnode_6.push($createVNode(0,'[未指定数据处理方式]'+($__line=126,$__art='{{=value}}',$__ctrl='<%=value%>',(value))));
};$$_style='padding:'+($__line=94,$__art='{{=paddingTop}}',$__ctrl='<%=paddingTop%>',(paddingTop))+($__line=94,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=94,$__art='{{=paddingRight}}',$__ctrl='<%=paddingRight%>',(paddingRight))+($__line=94,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=94,$__art='{{=paddingBottom}}',$__ctrl='<%=paddingBottom%>',(paddingBottom))+($__line=94,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=94,$__art='{{=paddingLeft}}',$__ctrl='<%=paddingLeft%>',(paddingLeft))+($__line=94,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=94,$__art='{{=realWidth}}',$__ctrl='<%=realWidth%>',(realWidth))+($__line=94,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=94,$__art='{{if col.textAutoReturn}}','');$__ctrl='<%if(col.textAutoReturn){%>';if(col.textAutoReturn){;$$_style+='min-'+($__line=94,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='height:'+($__line=94,$__art='{{=realHeight}}',$__ctrl='<%=realHeight%>',(realHeight))+($__line=94,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=94,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos))+';justify-content:'+($__line=94,$__art='{{=col.hpos}}',$__ctrl='<%=col.hpos%>',(col.hpos))+';opacity:'+($__line=94,$__art='{{=col.alpha}}',$__ctrl='<%=col.alpha%>',(col.alpha))+';'+($__line=94,$__art='{{if col.background}}','');$__ctrl='<%if(col.background){%>';if(col.background){;$$_style+='background:'+($__line=94,$__art='{{=col.background}}',$__ctrl='<%=col.background%>',(col.background))+($__line=94,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=94,$__art='{{if col.type==\'text\'}}','');$__ctrl='<%if(col.type==\'text\'){%>';if(col.type=='text'){;$$_style+='color:'+($__line=94,$__art='{{=col.textForecolor}}',$__ctrl='<%=col.textForecolor%>',(col.textForecolor))+';letter-spacing:'+($__line=94,$__art='{{=col.textLetterspacing}}',$__ctrl='<%=col.textLetterspacing%>',(col.textLetterspacing))+($__line=94,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=94,$__art='{{if col.textStyleBold}}','');$__ctrl='<%if(col.textStyleBold){%>';if(col.textStyleBold){;$$_style+='font-weight:bold;'+($__line=94,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=94,$__art='{{if col.textStyleItalic}}','');$__ctrl='<%if(col.textStyleItalic){%>';if(col.textStyleItalic){;$$_style+='font-style:italic;'+($__line=94,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=94,$__art='{{if col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline}}','');$__ctrl='<%if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){%>';if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:'+($__line=94,$__art='{{if col.textStyleStrike}}','');$__ctrl='<%if(col.textStyleStrike){%>';if(col.textStyleStrike){;$$_style+='line-through'+($__line=94,$__art='{{else if col.textStyleOverline}}','');$__ctrl='<%}else if(col.textStyleOverline){%>';}else if(col.textStyleOverline){;$$_style+='overline'+($__line=94,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='underline'+($__line=94,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=';'+($__line=94,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='font-family:'+($__line=94,$__art='{{=col.textFontfamily}}',$__ctrl='<%=col.textFontfamily%>',(col.textFontfamily))+';font-size:'+($__line=94,$__art='{{=col.textFontsize}}',$__ctrl='<%=col.textFontsize%>',(col.textFontsize))+($__line=94,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=94,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_5.push($createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden','style': $$_style,},$vnode_6));
}$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','colspan': (($__line=76,$__art='{{=col.colspan!=1}}',$__ctrl='<%=col.colspan!=1%>',col.colspan!=1))&&(($__line=76,$__art='{{=col.colspan}}',$__ctrl='<%=col.colspan%>',(col.colspan))),'rowspan': (($__line=76,$__art='{{=col.rowspan!=1}}',$__ctrl='<%=col.rowspan!=1%>',col.rowspan!=1))&&(($__line=76,$__art='{{=col.rowspan}}',$__ctrl='<%=col.rowspan%>',(col.rowspan))),'style': 'position:relative;width:'+($__line=76,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=76,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-left:'+($__line=76,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=76,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=76,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=76,$__art='{{=borderwidth&&col.bLeft?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bLeft?bordercolor:\'#0000\'%>',(borderwidth&&col.bLeft?bordercolor:'#0000'))+';border-top:'+($__line=76,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=76,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=76,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=76,$__art='{{=borderwidth&&col.bTop?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bTop?bordercolor:\'#0000\'%>',(borderwidth&&col.bTop?bordercolor:'#0000'))+';border-right:'+($__line=76,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=76,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=76,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=76,$__art='{{=borderwidth&&col.bRight?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bRight?bordercolor:\'#0000\'%>',(borderwidth&&col.bRight?bordercolor:'#0000'))+';border-bottom:'+($__line=76,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=76,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=76,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=76,$__art='{{=borderwidth&&col.bBottom?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bBottom?bordercolor:\'#0000\'%>',(borderwidth&&col.bBottom?bordercolor:'#0000')),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
}
}else if(($__line=135,$__art="{{else if row.total}}",$__ctrl="else if(row.total){"),row.total){
($__line=136,$__art='{{findTotalRow=1}}','');$__ctrl='<%findTotalRow=1%>';findTotalRow=1;
}else if(($__line=137,$__art="{{else if row.label}}",$__ctrl="else if(row.label){"),row.label){
($__line=138,$__art='{{findLabelRow=1}}','');$__ctrl='<%findLabelRow=1%>';findLabelRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-_assets_index_less_-table rd-_assets_index_less_-wp100','style': 'border-collapse:'+($__line=6,$__art='{{=borderdeed}}',$__ctrl='<%=borderdeed%>',(borderdeed)),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/data-dtable/index.html'; throw msg; }  } ,
    init() {
        this.set({
            format,
            toPx: const_1['@:{const#to.px~rs}'],
            toUnit: const_1['@:{const#to.unit~rs}'],
            ftu: firstToUppercase,
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});