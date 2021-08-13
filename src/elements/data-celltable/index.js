/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/data-celltable/index",["5c","../../5b/5e","../../5r/format","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let format_1 = require("../../5r/format");
let format = format_1["_pM"].bind(format_1);
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl)=> { 
let $temp_var,$vnode_0,
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
$text='';let bw=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,bind=props.bind;;$text+=' ';let bwn=(borderdeed=='collapse'?1:2)*bw;;$vnode_3=[];
for(let $q_c_fevppre=rows.length,ri=0;ri<$q_c_fevppre;ri+=1){
let row=rows[ri];
$vnode_4=[];
for(let $q_a_gzdtxfqjw=row.cols,$q_c_cnfgwkxl=$q_a_gzdtxfqjw.length,ci=0;ci<$q_c_cnfgwkxl;ci+=1){
let col=$q_a_gzdtxfqjw[ci];
$vnode_5=[];
if(bind._tip){
$vnode_5.push($createVNode(0,(bind._tip)));
}else{
$text='';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' ';let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);;
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
}$vnode_6=[];let value;;
if(col.type=='text'){

if(col.bindKey){
$text='';value=bind._data&&bind._data[col.bindKey];$text+=' ';value=format(col.textFormat,value,bind._data);
}else{
value=col.textContent;
}
if(value){
$vnode_7=[$createVNode(0,(value),1)];$vnode_6.push($createVNode('div',{'class': ((!col.textAutoReturn))&&('rd-mU'),},$vnode_7));
}
}else if(col.type=='image'){

if(col.bindKey){
value=bind._data&&bind._data[col.bindKey];
}else{
value=col.imageContent;
}
if(value){
;$$_style='';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:';if(col.imageRotateX){;$$_style+='rotateX(180deg)';};if(col.imageRotateY){;$$_style+=' rotateY(180deg)';};};$vnode_6.push($createVNode('img',{'class': 'rd-mD rd-mE rd-mp','src': (value),'style': $$_style,},1));
}
}else if(col.type=='barcode'){

if(col.bindKey){
value=bind._data&&bind._data[col.bindKey];
}else{
value=col.barcodeContent;
}
if(value){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-mX','style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit)+';align-items:'+(col.vpos),'mx5-view': '61/subs/barcode?lineColor='+($encodeUrl(col.barcodeColor))+'&lineWidth='+($encodeUrl(col.barcodeLineWidth))+'&showText='+($encodeUrl(col.barcodeShowText))+'&format='+($encodeUrl(col.barcodeFormat))+'&value='+($encodeUrl(value)),}));
}
}else if(col.type=='qrcode'){

if(col.bindKey){
value=bind._data&&bind._data[col.bindKey];
}else{
value=col.qrcodeContent;
}
if(value){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit),'mx5-view': '61/subs/qrcode?vpos='+($encodeUrl(col.vpos))+'&value='+($encodeUrl(value)),}));
}
}else if(col.bindKey){
$vnode_6.push($createVNode(0,'[未指定数据处理方式]'+(value==null?'':value)));
};$$_style='padding:'+(paddingTop)+(unit)+' '+(paddingRight)+(unit)+' '+(paddingBottom)+(unit)+' '+(paddingLeft)+(unit)+';width:'+(realWidth)+(unit)+';height:';if(row.hasAutoReturn){;$$_style+='100%';}else{;$$_style+=''+(realHeight)+(unit);};$$_style+=';align-items:'+(col.vpos)+';justify-content:'+(col.hpos)+';opacity:'+(col.alpha)+';';if(col.background){;$$_style+='background:'+(col.background)+';';};if(col.type=='text'){;$$_style+='color:'+(col.textForecolor)+';letter-spacing:'+(col.textLetterspacing)+(unit)+';';if(col.textStyleBold){;$$_style+='font-weight:bold;';};if(col.textStyleItalic){;$$_style+='font-style:italic;';};if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:';if(col.textStyleStrike){;$$_style+='line-through';}else if(col.textStyleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='font-family:'+(col.textFontfamily)+';font-size:'+(col.textFontsize)+(unit)+';';};$vnode_5.push($createVNode('div',{'class': 'rd-mX rd-nO','style': $$_style,},$vnode_6));
}$vnode_4.push($createVNode('td',{'class': 'rd-nn rd-np','colspan': ((col.colspan!=1))&&((col.colspan)),'rowspan': ((col.rowspan!=1))&&((col.rowspan)),'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(bw?bordertype:'dotted')+' '+(bw)+(unit)+' '+(bw&&col.bLeft?bordercolor:'#0000')+';border-top:'+(bw?bordertype:'dotted')+' '+(bw)+(unit)+' '+(bw&&col.bTop?bordercolor:'#0000')+';border-right:'+(bw?bordertype:'dotted')+' '+(bw)+(unit)+' '+(bw&&col.bRight?bordercolor:'#0000')+';border-bottom:'+(bw?bordertype:'dotted')+' '+(bw)+(unit)+' '+(bw&&col.bBottom?bordercolor:'#0000'),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-mB rd-no','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            toUnit: const_1['l3'],
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