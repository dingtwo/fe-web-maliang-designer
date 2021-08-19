/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/data-celltable/index",["magix5","../../designer/const","../../provider/format","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let format_1 = require("../../provider/format");
let format = format_1["@:{format~rs}"].bind(format_1);
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	toUnit,
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
$text=($__line=2,$__art='{{set {borderwidth:bw,bordertype,bordercolor,borderdeed,rows,bind}=props}}','');$__ctrl='<%let bw=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,bind=props.bind;%>';let bw=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,bind=props.bind;;$text+=' '+($__line=3,$__art='{{set bwn=(borderdeed==\'collapse\'?1:2)*bw}}','');$__ctrl='<%let bwn=(borderdeed==\'collapse\'?1:2)*bw;%>';let bwn=(borderdeed=='collapse'?1:2)*bw;;$vnode_3=[];$__line=6;$__art="{{each rows as row ri}}";$__ctrl="for(let $q_c_yzzwsfvq=rows.length,ri=0;ri<$q_c_yzzwsfvq;ri++){let row=rows[ri];";
for(let $q_c_yzzwsfvq=rows.length,ri=0;ri<$q_c_yzzwsfvq;ri+=1){
let row=rows[ri];
$vnode_4=[];$__line=8;$__art="{{each row.cols as col ci}}";$__ctrl="for(let $q_a_citcvg=row.cols,$q_c_fecotr=$q_a_citcvg.length,ci=0;ci<$q_c_fecotr;ci++){let col=$q_a_citcvg[ci];";
for(let $q_a_citcvg=row.cols,$q_c_fecotr=$q_a_citcvg.length,ci=0;ci<$q_c_fecotr;ci+=1){
let col=$q_a_citcvg[ci];
$vnode_5=[];$__line=10;$__art="{{if bind._tip}}";$__ctrl="if(bind._tip){";
if(bind._tip){
$vnode_5.push($createVNode(0,($__line=11,$__art='{{=bind._tip}}',$__ctrl='<%=bind._tip%>',(bind._tip))));
}else{
$text=($__line=13,$__art='{{set {paddingTop,paddingBottom,paddingLeft,paddingRight}=col}}','');$__ctrl='<%let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;%>';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' '+($__line=14,$__art='{{set realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1)}}','');$__ctrl='<%let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);%>';let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);;$__line=15;$__art="{{if paddingTop>realHeight}}";$__ctrl="if(paddingTop>realHeight){";
if(paddingTop>realHeight){
($__line=16,$__art='{{paddingTop=realHeight}}','');$__ctrl='<%paddingTop=realHeight%>';paddingTop=realHeight;
}$__line=18;$__art="{{if paddingTop+paddingBottom>realHeight}}";$__ctrl="if(paddingTop+paddingBottom>realHeight){";
if(paddingTop+paddingBottom>realHeight){
($__line=19,$__art='{{paddingBottom=realHeight-paddingTop}}','');$__ctrl='<%paddingBottom=realHeight-paddingTop%>';paddingBottom=realHeight-paddingTop;
}$__line=21;$__art="{{if paddingLeft>realWidth}}";$__ctrl="if(paddingLeft>realWidth){";
if(paddingLeft>realWidth){
($__line=22,$__art='{{paddingLeft=realWidth}}','');$__ctrl='<%paddingLeft=realWidth%>';paddingLeft=realWidth;
}$__line=24;$__art="{{if paddingLeft+paddingRight>realWidth}}";$__ctrl="if(paddingLeft+paddingRight>realWidth){";
if(paddingLeft+paddingRight>realWidth){
($__line=25,$__art='{{paddingRight=realWidth-paddingLeft}}','');$__ctrl='<%paddingRight=realWidth-paddingLeft%>';paddingRight=realWidth-paddingLeft;
}$vnode_6=[];($__line=28,$__art='{{set value}}','');$__ctrl='<%let value;%>';let value;;$__line=29;$__art="{{if col.type==\\'text\\'}}";$__ctrl="if(col.type=='text'){";
if(col.type=='text'){
$__line=30;$__art="{{if col.bindKey}}";$__ctrl="if(col.bindKey){";
if(col.bindKey){
$text=($__line=31,$__art='{{value=bind._data&&bind._data[col.bindKey]}}','');$__ctrl='<%value=bind._data&&bind._data[col.bindKey]%>';value=bind._data&&bind._data[col.bindKey];$text+=' '+($__line=32,$__art='{{value=format(col.textFormat,value,bind._data)}}','');$__ctrl='<%value=format(col.textFormat,value,bind._data)%>';value=format(col.textFormat,value,bind._data);
}else{
($__line=34,$__art='{{value=col.textContent}}','');$__ctrl='<%value=col.textContent%>';value=col.textContent;
}$__line=36;$__art="{{if value}}";$__ctrl="if(value){";
if(value){
$vnode_7=[$createVNode(0,($__line=37,$__art='{{=value}}',$__ctrl='<%=value%>',(value)),1)];$vnode_6.push($createVNode('div',{'class': (($__line=37,$__art='{{= !col.textAutoReturn}}',$__ctrl='<%= !col.textAutoReturn%>',!col.textAutoReturn))&&('rd-_assets_index_less_-ellipsis'),},$vnode_7));
}
}else if(($__line=39,$__art="{{else if col.type==\\'image\\'}}",$__ctrl="else if(col.type=='image'){"),col.type=='image'){
$__line=40;$__art="{{if col.bindKey}}";$__ctrl="if(col.bindKey){";
if(col.bindKey){
($__line=41,$__art='{{value=bind._data&&bind._data[col.bindKey]}}','');$__ctrl='<%value=bind._data&&bind._data[col.bindKey]%>';value=bind._data&&bind._data[col.bindKey];
}else{
($__line=43,$__art='{{value=col.imageContent}}','');$__ctrl='<%value=col.imageContent%>';value=col.imageContent;
}$__line=45;$__art="{{if value}}";$__ctrl="if(value){";
if(value){
;$$_style=($__line=46,$__art='{{if col.imageRotateX||col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateX||col.imageRotateY){%>';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:'+($__line=46,$__art='{{if col.imageRotateX}}','');$__ctrl='<%if(col.imageRotateX){%>';if(col.imageRotateX){;$$_style+='rotateX(180deg)'+($__line=46,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=46,$__art='{{if col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateY){%>';if(col.imageRotateY){;$$_style+=' rotateY(180deg)'+($__line=46,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=46,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_6.push($createVNode('img',{'class': 'rd-_assets_index_less_-mhp100 rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-img','src': ($__line=46,$__art='{{=value}}',$__ctrl='<%=value%>',(value)),'style': $$_style,},1));
}
}else if(($__line=48,$__art="{{else if col.type==\\'barcode\\'}}",$__ctrl="else if(col.type=='barcode'){"),col.type=='barcode'){
$__line=49;$__art="{{if col.bindKey}}";$__ctrl="if(col.bindKey){";
if(col.bindKey){
($__line=50,$__art='{{value=bind._data&&bind._data[col.bindKey]}}','');$__ctrl='<%value=bind._data&&bind._data[col.bindKey]%>';value=bind._data&&bind._data[col.bindKey];
}else{
($__line=52,$__art='{{value=col.barcodeContent}}','');$__ctrl='<%value=col.barcodeContent%>';value=col.barcodeContent;
}$__line=54;$__art="{{if value}}";$__ctrl="if(value){";
if(value){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-_assets_index_less_-flex','style': 'height:'+($__line=55,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=55,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=55,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos)),'mx5-view': 'elements/subs/barcode?lineColor='+($__line=55,$__art='{{=col.barcodeColor}}',$__ctrl='<%=$encodeUrl(col.barcodeColor)%>',($encodeUrl(col.barcodeColor)))+'&lineWidth='+($__line=55,$__art='{{=col.barcodeLineWidth}}',$__ctrl='<%=$encodeUrl(col.barcodeLineWidth)%>',($encodeUrl(col.barcodeLineWidth)))+'&showText='+($__line=55,$__art='{{=col.barcodeShowText}}',$__ctrl='<%=$encodeUrl(col.barcodeShowText)%>',($encodeUrl(col.barcodeShowText)))+'&format='+($__line=55,$__art='{{=col.barcodeFormat}}',$__ctrl='<%=$encodeUrl(col.barcodeFormat)%>',($encodeUrl(col.barcodeFormat)))+'&value='+($__line=55,$__art='{{=value}}',$__ctrl='<%=$encodeUrl(value)%>',($encodeUrl(value))),}));
}
}else if(($__line=57,$__art="{{else if col.type==\\'qrcode\\'}}",$__ctrl="else if(col.type=='qrcode'){"),col.type=='qrcode'){
$__line=58;$__art="{{if col.bindKey}}";$__ctrl="if(col.bindKey){";
if(col.bindKey){
($__line=59,$__art='{{value=bind._data&&bind._data[col.bindKey]}}','');$__ctrl='<%value=bind._data&&bind._data[col.bindKey]%>';value=bind._data&&bind._data[col.bindKey];
}else{
($__line=61,$__art='{{value=col.qrcodeContent}}','');$__ctrl='<%value=col.qrcodeContent%>';value=col.qrcodeContent;
}$__line=63;$__art="{{if value}}";$__ctrl="if(value){";
if(value){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+($__line=64,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=64,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'mx5-view': 'elements/subs/qrcode?vpos='+($__line=64,$__art='{{=col.vpos}}',$__ctrl='<%=$encodeUrl(col.vpos)%>',($encodeUrl(col.vpos)))+'&value='+($__line=64,$__art='{{=value}}',$__ctrl='<%=$encodeUrl(value)%>',($encodeUrl(value))),}));
}
}else if(($__line=66,$__art="{{else if col.bindKey}}",$__ctrl="else if(col.bindKey){"),col.bindKey){
$vnode_6.push($createVNode(0,'[未指定数据处理方式]'+($__line=67,$__art='{{=value==null?\'\':value}}',$__ctrl='<%=value==null?\'\':value%>',(value==null?'':value))));
};$$_style='padding:'+($__line=27,$__art='{{=paddingTop}}',$__ctrl='<%=paddingTop%>',(paddingTop))+($__line=27,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=27,$__art='{{=paddingRight}}',$__ctrl='<%=paddingRight%>',(paddingRight))+($__line=27,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=27,$__art='{{=paddingBottom}}',$__ctrl='<%=paddingBottom%>',(paddingBottom))+($__line=27,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=27,$__art='{{=paddingLeft}}',$__ctrl='<%=paddingLeft%>',(paddingLeft))+($__line=27,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=27,$__art='{{=realWidth}}',$__ctrl='<%=realWidth%>',(realWidth))+($__line=27,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=27,$__art='{{if row.hasAutoReturn}}','');$__ctrl='<%if(row.hasAutoReturn){%>';if(row.hasAutoReturn){;$$_style+='100%'+($__line=27,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+=''+($__line=27,$__art='{{=realHeight}}',$__ctrl='<%=realHeight%>',(realHeight))+($__line=27,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+($__line=27,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=';align-items:'+($__line=27,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos))+';justify-content:'+($__line=27,$__art='{{=col.hpos}}',$__ctrl='<%=col.hpos%>',(col.hpos))+';opacity:'+($__line=27,$__art='{{=col.alpha}}',$__ctrl='<%=col.alpha%>',(col.alpha))+';'+($__line=27,$__art='{{if col.background}}','');$__ctrl='<%if(col.background){%>';if(col.background){;$$_style+='background:'+($__line=27,$__art='{{=col.background}}',$__ctrl='<%=col.background%>',(col.background))+';'+($__line=27,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=27,$__art='{{if col.type==\'text\'}}','');$__ctrl='<%if(col.type==\'text\'){%>';if(col.type=='text'){;$$_style+='color:'+($__line=27,$__art='{{=col.textForecolor}}',$__ctrl='<%=col.textForecolor%>',(col.textForecolor))+';letter-spacing:'+($__line=27,$__art='{{=col.textLetterspacing}}',$__ctrl='<%=col.textLetterspacing%>',(col.textLetterspacing))+($__line=27,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=27,$__art='{{if col.textStyleBold}}','');$__ctrl='<%if(col.textStyleBold){%>';if(col.textStyleBold){;$$_style+='font-weight:bold;'+($__line=27,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=27,$__art='{{if col.textStyleItalic}}','');$__ctrl='<%if(col.textStyleItalic){%>';if(col.textStyleItalic){;$$_style+='font-style:italic;'+($__line=27,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=27,$__art='{{if col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline}}','');$__ctrl='<%if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){%>';if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:'+($__line=27,$__art='{{if col.textStyleStrike}}','');$__ctrl='<%if(col.textStyleStrike){%>';if(col.textStyleStrike){;$$_style+='line-through'+($__line=27,$__art='{{else if col.textStyleOverline}}','');$__ctrl='<%}else if(col.textStyleOverline){%>';}else if(col.textStyleOverline){;$$_style+='overline'+($__line=27,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='underline'+($__line=27,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=';'+($__line=27,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='font-family:'+($__line=27,$__art='{{=col.textFontfamily}}',$__ctrl='<%=col.textFontfamily%>',(col.textFontfamily))+';font-size:'+($__line=27,$__art='{{=col.textFontsize}}',$__ctrl='<%=col.textFontsize%>',(col.textFontsize))+($__line=27,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=27,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_5.push($createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden','style': $$_style,},$vnode_6));
}$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','colspan': (($__line=9,$__art='{{=col.colspan!=1}}',$__ctrl='<%=col.colspan!=1%>',col.colspan!=1))&&(($__line=9,$__art='{{=col.colspan}}',$__ctrl='<%=col.colspan%>',(col.colspan))),'rowspan': (($__line=9,$__art='{{=col.rowspan!=1}}',$__ctrl='<%=col.rowspan!=1%>',col.rowspan!=1))&&(($__line=9,$__art='{{=col.rowspan}}',$__ctrl='<%=col.rowspan%>',(col.rowspan))),'style': 'position:relative;width:'+($__line=9,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=9,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=9,$__art='{{=col.height}}',$__ctrl='<%=col.height%>',(col.height))+($__line=9,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-left:'+($__line=9,$__art='{{=bw?bordertype:\'dotted\'}}',$__ctrl='<%=bw?bordertype:\'dotted\'%>',(bw?bordertype:'dotted'))+' '+($__line=9,$__art='{{=bw}}',$__ctrl='<%=bw%>',(bw))+($__line=9,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=9,$__art='{{=bw&&col.bLeft?bordercolor:\'#0000\'}}',$__ctrl='<%=bw&&col.bLeft?bordercolor:\'#0000\'%>',(bw&&col.bLeft?bordercolor:'#0000'))+';border-top:'+($__line=9,$__art='{{=bw?bordertype:\'dotted\'}}',$__ctrl='<%=bw?bordertype:\'dotted\'%>',(bw?bordertype:'dotted'))+' '+($__line=9,$__art='{{=bw}}',$__ctrl='<%=bw%>',(bw))+($__line=9,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=9,$__art='{{=bw&&col.bTop?bordercolor:\'#0000\'}}',$__ctrl='<%=bw&&col.bTop?bordercolor:\'#0000\'%>',(bw&&col.bTop?bordercolor:'#0000'))+';border-right:'+($__line=9,$__art='{{=bw?bordertype:\'dotted\'}}',$__ctrl='<%=bw?bordertype:\'dotted\'%>',(bw?bordertype:'dotted'))+' '+($__line=9,$__art='{{=bw}}',$__ctrl='<%=bw%>',(bw))+($__line=9,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=9,$__art='{{=bw&&col.bRight?bordercolor:\'#0000\'}}',$__ctrl='<%=bw&&col.bRight?bordercolor:\'#0000\'%>',(bw&&col.bRight?bordercolor:'#0000'))+';border-bottom:'+($__line=9,$__art='{{=bw?bordertype:\'dotted\'}}',$__ctrl='<%=bw?bordertype:\'dotted\'%>',(bw?bordertype:'dotted'))+' '+($__line=9,$__art='{{=bw}}',$__ctrl='<%=bw%>',(bw))+($__line=9,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=9,$__art='{{=bw&&col.bBottom?bordercolor:\'#0000\'}}',$__ctrl='<%=bw&&col.bBottom?bordercolor:\'#0000\'%>',(bw&&col.bBottom?bordercolor:'#0000')),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-_assets_index_less_-table rd-_assets_index_less_-wp100','style': 'border-collapse:'+($__line=4,$__art='{{=borderdeed}}',$__ctrl='<%=borderdeed%>',(borderdeed)),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/data-celltable/index.html'; throw msg; }  } ,
    init() {
        this.set({
            toUnit: const_1['@:{const#to.unit~rs}'],
            format
        });
    },
    assign(data) {
        for (let row of data.props.rows) {
            for (let col of row.cols) {
                if (col.type == 'text' &&
                    col.textAutoReturn) {
                    row.hasAutoReturn = true;
                    break;
                }
            }
        }
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});