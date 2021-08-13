/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/data-dtable/index",["5c","../../5b/5e","../../5r/format","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let format_1 = require("../../5r/format");
let format = format_1["_pM"].bind(format_1);
let firstToUppercase = str => {
    str += '';
    if (str.length) {
        return str[0].toUpperCase() + str.substring(1);
    }
    return str;
};
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
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
$text='';let findLabelRow,findTotalRow;;$text+=' ';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,bind=props.bind;;$text+=' ';let bwn=(borderdeed=='collapse'?1:2)*borderwidth;;$text+=' ';let dataRowCols;;$vnode_3=[];
for(let $q_c_bnlbvqa=rows.length,ri=0;ri<$q_c_bnlbvqa;ri+=1){
let row=rows[ri];

if((row.label&&bind._data&&bind._data.length&&!props.hideLabel)||(!row.data&&!row.label&&!findLabelRow&&bind._showHead)||(findTotalRow&&!props.hideFoot&&bind._showFoot)||(row.total&&!props.hideTotal&&bind._showAcc)){
$vnode_4=[];
for(let $q_a_gyfdmsutf=row.cols,$q_c_jwcofixtg=$q_a_gyfdmsutf.length,ci=0;ci<$q_c_jwcofixtg;ci+=1){
let col=$q_a_gyfdmsutf[ci];
$vnode_5=[];
if(bind._tip){
$vnode_5.push($createVNode(0,(bind._tip)));
}else{

if(col.elements&&col.elements.length){

for(let $q_a_sihprae=col.elements,$q_c_zdqrjkeu=$q_a_sihprae.length,$q_key_rizwzcnan=0;$q_key_rizwzcnan<$q_c_zdqrjkeu;$q_key_rizwzcnan+=1){
let e=$q_a_sihprae[$q_key_rizwzcnan];
$vnode_5.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props','mx5-view': '61/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_rizwzcnan)+'.i^')+'&unit='+($encodeUrl(unit)),}));
}
}else{
$text='';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' ';let realWidth=col.width-bwn-toUnit(1),realHeight=Math.max(col.height-bwn-toUnit(1),0);;
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
}$vnode_6=[];
if(col.type=='text'){
$vnode_7=[$createVNode(0,(col.textContent),1)];$vnode_6.push($createVNode('div',{'class': ((!col.textAutoReturn))&&('rd-mU'),},$vnode_7));
}else if(col.type=='image'){

if(col.imageContent){
;$$_style='';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:';if(col.imageRotateX){;$$_style+='rotateX(180deg)';};if(col.imageRotateY){;$$_style+=' rotateY(180deg)';};};$vnode_6.push($createVNode('img',{'class': 'rd-mD rd-mE rd-mp','src': (col.imageContent),'style': $$_style,},1));
}
}else if(col.type=='barcode'){

if(col.barcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props','class': 'rd-mX','style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit)+';align-items:'+(col.vpos),'mx5-view': '61/subs/barcode?lineColor='+$keyOf($refData,col.barcodeColor,'i!.'+(ri)+'.i@.'+(ci)+'.i*')+'&lineWidth='+$keyOf($refData,col.barcodeLineWidth,'i!.'+(ri)+'.i@.'+(ci)+'.i{')+'&showText='+$keyOf($refData,col.barcodeShowText,'i!.'+(ri)+'.i@.'+(ci)+'.i}')+'&format='+$keyOf($refData,col.barcodeFormat,'i!.'+(ri)+'.i@.'+(ci)+'.i[')+'&value='+($encodeUrl(col.barcodeContent)),}));
}
}else if(col.type=='qrcode'){

if(col.qrcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit),'mx5-view': '61/subs/qrcode?vpos='+($encodeUrl(col.vpos))+'&value='+($encodeUrl(col.qrcodeContent)),}));
}
}else if(row.total){
$text='';let dataCol=dataRowCols[ci];;$text+=' ';let cellType=ftu(col.type);;
if(col.type=='text'){
$vnode_7=[$createVNode(0,(col.textContent))];$vnode_6.push($createVNode('div',{'class': ((!col.textAutoReturn))&&('rd-mU'),},$vnode_7));
}else if(col.type=='custom'){
$vnode_7=[$createVNode(0,(format(col.textFormat,col.totalData,bind._data,bind._all)))];$vnode_6.push($createVNode('div',{'class': ((!col.textAutoReturn))&&('rd-mU'),},$vnode_7));
}else if(col.totalData[dataCol.bindKey+cellType]!=null){
$vnode_7=[$createVNode(0,(format(col.textFormat,col.totalData[dataCol.bindKey+cellType],col.totalData)))];$vnode_6.push($createVNode('div',{'class': ((!col.textAutoReturn))&&('rd-mU'),},$vnode_7));
}
};$$_style='padding:'+(paddingTop)+(unit)+' '+(paddingRight)+(unit)+' '+(paddingBottom)+(unit)+' '+(paddingLeft)+(unit)+';width:'+(realWidth)+(unit)+';';if(col.textAutoReturn){;$$_style+='min-';};$$_style+='height:'+(realHeight)+(unit)+';align-items:'+(col.vpos)+';justify-content:'+(col.hpos)+';opacity:'+(col.alpha)+';';if(col.background){;$$_style+='background:'+(col.background)+';';};if(col.textFontsize!=null){;$$_style+='color:'+(col.textForecolor)+';letter-spacing:'+(col.textLetterspacing)+(unit)+';';if(col.textStyleBold){;$$_style+='font-weight:bold;';};if(col.textStyleItalic){;$$_style+='font-style:italic;';};if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:';if(col.textStyleStrike){;$$_style+='line-through';}else if(col.textStyleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='font-family:'+(col.textFontfamily)+';font-size:'+(col.textFontsize)+(unit)+';';};$vnode_5.push($createVNode('div',{'class': 'rd-mX rd-nO','style': $$_style,},$vnode_6));
}
}$vnode_4.push($createVNode('td',{'class': 'rd-nO rd-nn rd-np','colspan': ((col.colspan!=1))&&((col.colspan)),'rowspan': ((col.rowspan!=1))&&((col.rowspan)),'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#0000')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#0000')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#0000')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#0000'),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
if(row.data){
dataRowCols=row.cols;
if(bind._data){
let realHeights=bind._rHeights;;
for(let $q_a_inaqeuu=bind._data,$q_c_rtuetewq=$q_a_inaqeuu.length,di=0;di<$q_c_rtuetewq;di+=1){
let data=$q_a_inaqeuu[di];
$vnode_4=[];let height=realHeights&&realHeights[di];;
for(let $q_a_ngwvhbql=row.cols,$q_c_ahywczweknl=$q_a_ngwvhbql.length,ci=0;ci<$q_c_ahywczweknl;ci+=1){
let col=$q_a_ngwvhbql[ci];
$vnode_5=[];
if(bind._tip){
$vnode_5.push($createVNode(0,(bind._tip)));
}else{
$text='';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' ';let realWidth=col.width-bwn,realHeight=(height||col.height)-bwn;;
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
$text='';value=data[col.bindKey];$text+=' ';value=format(col.textFormat,value,data);
}
if(value){
$vnode_7=[$createVNode(0,(value),1)];$vnode_6.push($createVNode('div',{'class': ((!col.textAutoReturn))&&('rd-mU'),},$vnode_7));
}
}else if(col.type=='image'){

if(col.bindKey){
value=data[col.bindKey];
}
if(value){
;$$_style='height:'+(realHeight-paddingTop-paddingBottom)+'px;';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:';if(col.imageRotateX){;$$_style+='rotateX(180deg)';};if(col.imageRotateY){;$$_style+=' rotateY(180deg)';};};$vnode_6.push($createVNode('img',{'class': 'rd-mD rd-mE rd-mp','src': (value),'style': $$_style,},1));
}
}else if(col.type=='barcode'){

if(col.bindKey){
value=data[col.bindKey];
}
if(value){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'class': 'rd-mX','style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit)+';align-items:'+(col.vpos),'mx5-view': '61/subs/barcode?lineColor='+($encodeUrl(col.barcodeColor))+'&lineWidth='+($encodeUrl(col.barcodeLineWidth))+'&showText='+($encodeUrl(col.barcodeShowText))+'&format='+($encodeUrl(col.barcodeFormat))+'&value='+($encodeUrl(value)),}));
}
}else if(col.type=='qrcode'){

if(col.bindKey){
value=data[col.bindKey];
}
if(value){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+(realHeight-paddingTop-paddingBottom)+(unit),'mx5-view': '61/subs/qrcode?vpos='+($encodeUrl(col.vpos))+'&value='+($encodeUrl(value)),}));
}
}else if(col.bindKey){
$vnode_6.push($createVNode(0,'[未指定数据处理方式]'+(value)));
};$$_style='padding:'+(paddingTop)+(unit)+' '+(paddingRight)+(unit)+' '+(paddingBottom)+(unit)+' '+(paddingLeft)+(unit)+';width:'+(realWidth)+(unit)+';';if(col.textAutoReturn){;$$_style+='min-';};$$_style+='height:'+(realHeight)+(unit)+';align-items:'+(col.vpos)+';justify-content:'+(col.hpos)+';opacity:'+(col.alpha)+';';if(col.background){;$$_style+='background:'+(col.background);};if(col.type=='text'){;$$_style+='color:'+(col.textForecolor)+';letter-spacing:'+(col.textLetterspacing)+(unit)+';';if(col.textStyleBold){;$$_style+='font-weight:bold;';};if(col.textStyleItalic){;$$_style+='font-style:italic;';};if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:';if(col.textStyleStrike){;$$_style+='line-through';}else if(col.textStyleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='font-family:'+(col.textFontfamily)+';font-size:'+(col.textFontsize)+(unit)+';';};$vnode_5.push($createVNode('div',{'class': 'rd-mX rd-nO','style': $$_style,},$vnode_6));
}$vnode_4.push($createVNode('td',{'class': 'rd-nn rd-np','colspan': ((col.colspan!=1))&&((col.colspan)),'rowspan': ((col.rowspan!=1))&&((col.rowspan)),'style': 'position:relative;width:'+(col.width)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#0000')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#0000')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#0000')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#0000'),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}
}
}else if(row.total){
findTotalRow=1;
}else if(row.label){
findLabelRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-mB rd-no','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            format,
            toPx: const_1['mM'],
            toUnit: const_1['l3'],
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