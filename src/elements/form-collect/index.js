/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/form-collect/index",["magix5","../../designer/const","../../provider/format","../../provider/table","../subs/barcode","../subs/qrcode"],(require,exports,module)=>{
require("../subs/barcode");
require("../subs/qrcode");
let $quick_gy_static_text;
let $quick_gz_static_text;
let $quick_gO_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-height-1 rd-_assets_index_less_-hp100 rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-wp100',};
let $quick_gO_1_static_attr={'class': 'rd-_assets_index_less_-ellipsis',};
let $special_2={'value':'value',};
let $special_4={'selected':'selected',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let format_1 = require("../../provider/format");
let table_1 = require("../../provider/table");
let { View, mark, dispatch, node, mix } = magix_1;
let format = format_1["@:{format~rs}"].bind(format_1);
let filter = (key, value) => key.startsWith('_') ? undefined : value;
let calcSum = values => {
    let sum = 0;
    for (let group of values) {
        for (let one of group) {
            if (one['@:{user.input~rs}']) {
                sum += one['@:{number~rs}'];
            }
        }
    }
    return sum;
};
let calcAvg = values => {
    let sum = 0, avg = 0, count = 0;
    for (let group of values) {
        for (let one of group) {
            if (one['@:{user.input~rs}']) {
                sum += one['@:{number~rs}'];
                count++;
            }
        }
    }
    if (count > 0) {
        avg = sum / count;
    }
    return avg;
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	readonly,
	getMaxCol,
	excelTitle,
	toUnit,
	getSumByCell,
	format,
	calcSum,
	calcAvg,
	toPx,}=$dataFromView,
$text,
$vnode_6,
$vnode_5,
$vnode_4,
$$_class,
$$_style,
$vnode_7,
$vnode_8,
$vnode_3,
$vnode_2,
$vnode_1;
$text=($__line=2,$__art='{{set {borderwidth,bordertype,bordercolor,borderdeed,rows,readonly:eReadonly,excel,excelLeft,excelTop,excelBackground,excelForecolor}=props}}','');$__ctrl='<%let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,eReadonly=props.readonly,excel=props.excel,excelLeft=props.excelLeft,excelTop=props.excelTop,excelBackground=props.excelBackground,excelForecolor=props.excelForecolor;%>';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,eReadonly=props.readonly,excel=props.excel,excelLeft=props.excelLeft,excelTop=props.excelTop,excelBackground=props.excelBackground,excelForecolor=props.excelForecolor;;$text+=' '+($__line=3,$__art='{{set bwn=(borderdeed==\'collapse\'?1:2)*borderwidth}}','');$__ctrl='<%let bwn=(borderdeed==\'collapse\'?1:2)*borderwidth;%>';let bwn=(borderdeed=='collapse'?1:2)*borderwidth;;$text+=' '+($__line=4,$__art='{{set findLabelRow,findTotalRow}}','');$__ctrl='<%let findLabelRow,findTotalRow;%>';let findLabelRow,findTotalRow;;$text+=' '+($__line=5,$__art='{{set rowIndex=0}}','');$__ctrl='<%let rowIndex=0;%>';let rowIndex=0;;$text+=' '+($__line=6,$__art='{{set isReadonly=readonly||eReadonly}}','');$__ctrl='<%let isReadonly=readonly||eReadonly;%>';let isReadonly=readonly||eReadonly;;$vnode_3=[];$__line=9;$__art="{{if excel}}";$__ctrl="if(excel){";
if(excel){
$vnode_4=[];$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': 'height:'+($__line=11,$__art='{{=excelTop}}',$__ctrl='<%=excelTop%>',(excelTop))+($__line=11,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';background:'+($__line=11,$__art='{{=excelBackground}}',$__ctrl='<%=excelBackground%>',(excelBackground))+';border:'+($__line=11,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=11,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=11,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=11,$__art='{{=bordercolor}}',$__ctrl='<%=bordercolor%>',(bordercolor)),}));($__line=13,$__art='{{set maxCol=getMaxCol(props)}}','');$__ctrl='<%let maxCol=getMaxCol(props);%>';let maxCol=getMaxCol(props);;$__line=14;$__art="{{for (let i=0;i<maxCol;i++)}}";$__ctrl="for(let i=0;i<maxCol;i++){";
for(let i=0;i<maxCol;i++){
$vnode_6=[$createVNode(0,($__line=16,$__art='{{=excelTitle(i)}}',$__ctrl='<%=excelTitle(i)%>',(excelTitle(i))))];$vnode_5=[$createVNode('div',$quick_gO_0_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': 'height:'+($__line=15,$__art='{{=excelTop}}',$__ctrl='<%=excelTop%>',(excelTop))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';background:'+($__line=15,$__art='{{=excelBackground}}',$__ctrl='<%=excelBackground%>',(excelBackground))+';border:'+($__line=15,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=15,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=15,$__art='{{=bordercolor}}',$__ctrl='<%=bordercolor%>',(bordercolor))+';color:'+($__line=15,$__art='{{=excelForecolor}}',$__ctrl='<%=excelForecolor%>',(excelForecolor)),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$__line=21;$__art="{{each rows as row ri}}";$__ctrl="for(let $q_c_lwvkpwarvs=rows.length,ri=0;ri<$q_c_lwvkpwarvs;ri++){let row=rows[ri];";
for(let $q_c_lwvkpwarvs=rows.length,ri=0;ri<$q_c_lwvkpwarvs;ri+=1){
let row=rows[ri];
$__line=23;$__art="{{if row.label}}";$__ctrl="if(row.label){";
if(row.label){
($__line=24,$__art='{{findLabelRow=1}}','');$__ctrl='<%findLabelRow=1%>';findLabelRow=1;
}$__line=26;$__art="{{if (row.total&&!props.hideTotal)||row.data||(row.label&&!props.hideLabel)||(!findLabelRow&&!props.hideHead)||(findTotalRow&&!props.hideFoot)}}";$__ctrl="if((row.total&&!props.hideTotal)||row.data||(row.label&&!props.hideLabel)||(!findLabelRow&&!props.hideHead)||(findTotalRow&&!props.hideFoot)){";
if((row.total&&!props.hideTotal)||row.data||(row.label&&!props.hideLabel)||(!findLabelRow&&!props.hideHead)||(findTotalRow&&!props.hideFoot)){
$vnode_4=[];$__line=28;$__art="{{if excel}}";$__ctrl="if(excel){";
if(excel){
$vnode_6=[$createVNode(0,($__line=30,$__art='{{=++rowIndex}}',$__ctrl='<%=++rowIndex%>',(++rowIndex)))];$vnode_5=[$createVNode('div',$quick_gO_0_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','style': 'width:'+($__line=29,$__art='{{=excelLeft}}',$__ctrl='<%=excelLeft%>',(excelLeft))+($__line=29,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';background:'+($__line=29,$__art='{{=excelBackground}}',$__ctrl='<%=excelBackground%>',(excelBackground))+';border:'+($__line=29,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=29,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=29,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=29,$__art='{{=bordercolor}}',$__ctrl='<%=bordercolor%>',(bordercolor))+';color:'+($__line=29,$__art='{{=excelForecolor}}',$__ctrl='<%=excelForecolor%>',(excelForecolor)),},$vnode_5));
}$__line=33;$__art="{{each row.cols as col ci last first}}";$__ctrl="for(let $q_a_oclkuyf=row.cols,$q_c_ridrlas=$q_a_oclkuyf.length,$q_lc_hbgylvjy=$q_c_ridrlas-1,ci=0;ci<$q_c_ridrlas;ci++){let col=$q_a_oclkuyf[ci];let first=ci===0;let last=ci===$q_lc_hbgylvjy;";
for(let $q_a_oclkuyf=row.cols,$q_c_ridrlas=$q_a_oclkuyf.length,$q_lc_hbgylvjy=$q_c_ridrlas-1,ci=0;ci<$q_c_ridrlas;ci+=1){
let col=$q_a_oclkuyf[ci];let first=ci===0;let last=ci===$q_lc_hbgylvjy;
$vnode_5=[];$__line=35;$__art="{{if col.elements&&col.elements.length}}";$__ctrl="if(col.elements&&col.elements.length){";
if(col.elements&&col.elements.length){
$__line=36;$__art="{{each col.elements as e}}";$__ctrl="for(let $q_a_drfvkgcmc=col.elements,$q_c_lthixyqd=$q_a_drfvkgcmc.length,$q_key_qwlcdj=0;$q_key_qwlcdj<$q_c_lthixyqd;$q_key_qwlcdj++){let e=$q_a_drfvkgcmc[$q_key_qwlcdj];";
for(let $q_a_drfvkgcmc=col.elements,$q_c_lthixyqd=$q_a_drfvkgcmc.length,$q_key_qwlcdj=0;$q_key_qwlcdj<$q_c_lthixyqd;$q_key_qwlcdj+=1){
let e=$q_a_drfvkgcmc[$q_key_qwlcdj];
$vnode_5.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,readonly||eReadonly','id': ($__line=37,$__art='{{=e.id}}',$__ctrl='<%=e.id%>',(e.id)),'mx5-view': 'elements/'+($__line=37,$__art='{{=e.type}}',$__ctrl='<%=e.type%>',(e.type))+'/index?props='+($__line=37,$__art='{{#e.props}}',$__ctrl='<%#e.props,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+($q_key_qwlcdj)+\'.e.props\'%>',$keyOf($refData,e.props,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.elements.'+($q_key_qwlcdj)+'.e.props'))+'&unit='+($__line=37,$__art='{{=unit}}',$__ctrl='<%=$encodeUrl(unit)%>',($encodeUrl(unit)))+'&readonly='+($__line=37,$__art='{{# isReadonly}}',$__ctrl='<%#isReadonly%>',$keyOf($refData,isReadonly)),'mx5-elementinput': $viewId+'@:{sub.element.input~rs}()',}));
}
}else{
$text=($__line=40,$__art='{{set {paddingTop,paddingBottom,paddingLeft,paddingRight}=col}}','');$__ctrl='<%let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;%>';let paddingTop=col.paddingTop,paddingBottom=col.paddingBottom,paddingLeft=col.paddingLeft,paddingRight=col.paddingRight;;$text+=' '+($__line=41,$__art='{{set realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1)}}','');$__ctrl='<%let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);%>';let realWidth=col.width-bwn-toUnit(1),realHeight=col.height-bwn-toUnit(1);;$__line=42;$__art="{{if paddingTop>realHeight}}";$__ctrl="if(paddingTop>realHeight){";
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
}$vnode_6=[];$__line=55;$__art="{{if col.type==\\'text\\'}}";$__ctrl="if(col.type=='text'){";
if(col.type=='text'){
$vnode_7=[$createVNode(0,($__line=56,$__art='{{=col.textContent}}',$__ctrl='<%=col.textContent%>',(col.textContent)),1)];$vnode_6.push($createVNode('div',$quick_gO_1_static_attr,$vnode_7));
}else if(($__line=57,$__art="{{else if col.type==\\'image\\'}}",$__ctrl="else if(col.type=='image'){"),col.type=='image'){
$__line=58;$__art="{{if col.imageContent}}";$__ctrl="if(col.imageContent){";
if(col.imageContent){
;$$_style=($__line=59,$__art='{{if col.imageRotateX||col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateX||col.imageRotateY){%>';if(col.imageRotateX||col.imageRotateY){;$$_style+=';transform:'+($__line=59,$__art='{{if col.imageRotateX}}','');$__ctrl='<%if(col.imageRotateX){%>';if(col.imageRotateX){;$$_style+='rotateX(180deg)'+($__line=59,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=59,$__art='{{if col.imageRotateY}}','');$__ctrl='<%if(col.imageRotateY){%>';if(col.imageRotateY){;$$_style+=' rotateY(180deg)'+($__line=59,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=59,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_6.push($createVNode('img',{'class': 'rd-_assets_index_less_-mhp100 rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-img','src': ($__line=59,$__art='{{=col.imageContent}}',$__ctrl='<%=col.imageContent%>',(col.imageContent)),'style': $$_style,},1));
}
}else if(($__line=61,$__art="{{else if col.type==\\'barcode\\'}}",$__ctrl="else if(col.type=='barcode'){"),col.type=='barcode'){
$__line=62;$__art="{{if col.barcodeContent}}";$__ctrl="if(col.barcodeContent){";
if(col.barcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props','class': 'rd-_assets_index_less_-flex','style': 'height:'+($__line=63,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=63,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=63,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos)),'mx5-view': 'elements/subs/barcode?lineColor='+($__line=63,$__art='{{#col.barcodeColor}}',$__ctrl='<%#col.barcodeColor,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col.barcodeColor\'%>',$keyOf($refData,col.barcodeColor,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col.barcodeColor'))+'&lineWidth='+($__line=63,$__art='{{#col.barcodeLineWidth}}',$__ctrl='<%#col.barcodeLineWidth,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col.barcodeLineWidth\'%>',$keyOf($refData,col.barcodeLineWidth,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col.barcodeLineWidth'))+'&showText='+($__line=63,$__art='{{#col.barcodeShowText}}',$__ctrl='<%#col.barcodeShowText,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col.barcodeShowText\'%>',$keyOf($refData,col.barcodeShowText,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col.barcodeShowText'))+'&format='+($__line=63,$__art='{{#col.barcodeFormat}}',$__ctrl='<%#col.barcodeFormat,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col.barcodeFormat\'%>',$keyOf($refData,col.barcodeFormat,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col.barcodeFormat'))+'&value='+($__line=63,$__art='{{=col.barcodeContent}}',$__ctrl='<%=$encodeUrl(col.barcodeContent)%>',($encodeUrl(col.barcodeContent))),}));
}
}else if(($__line=65,$__art="{{else if col.type==\\'qrcode\\'}}",$__ctrl="else if(col.type=='qrcode'){"),col.type=='qrcode'){
$__line=66;$__art="{{if col.qrcodeContent}}";$__ctrl="if(col.qrcodeContent){";
if(col.qrcodeContent){
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'style': 'height:'+($__line=67,$__art='{{=realHeight-paddingTop-paddingBottom}}',$__ctrl='<%=realHeight-paddingTop-paddingBottom%>',(realHeight-paddingTop-paddingBottom))+($__line=67,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'mx5-view': 'elements/subs/qrcode?vpos='+($__line=67,$__art='{{=col.vpos}}',$__ctrl='<%=$encodeUrl(col.vpos)%>',($encodeUrl(col.vpos)))+'&value='+($__line=67,$__art='{{=col.qrcodeContent}}',$__ctrl='<%=$encodeUrl(col.qrcodeContent)%>',($encodeUrl(col.qrcodeContent))),}));
}
}else if(($__line=69,$__art="{{else if col.type==\\'input\\'}}",$__ctrl="else if(col.type=='input'){"),col.type=='input'){
$__line=70;$__art="{{if col.inputMultiline}}";$__ctrl="if(col.inputMultiline){";
if(col.inputMultiline){
;$$_class='rd-_assets_index_less_-wp100 rd-_assets_index_less_-hp100 rd-_assets_index_less_-textarea'+($__line=71,$__art='{{if col.inputClassName}}','');$__ctrl='<%if(col.inputClassName){%>';if(col.inputClassName){;$$_class+=' '+($__line=71,$__art='{{=col.inputClassName}}',$__ctrl='<%=col.inputClassName%>',(col.inputClassName))+($__line=71,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_6.push($createVNode('textarea',{'id': 'ipt_'+($__line=71,$__art='{{=$viewId}}','')+$viewId+'_'+($__line=71,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+'_'+($__line=71,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci)),'readonly': ($temp_var=($__line=71,$__art='{{=isReadonly===true}}',$__ctrl='<%=isReadonly===true%>',isReadonly===true),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"readonly" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-collect/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'style': 'color:'+($__line=71,$__art='{{=col.inputForecolor}}',$__ctrl='<%=col.inputForecolor%>',(col.inputForecolor))+';font-size:'+($__line=71,$__art='{{=col.inputFontsize}}',$__ctrl='<%=col.inputFontsize%>',(col.inputFontsize))+($__line=71,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';letter-spacing:'+($__line=71,$__art='{{=col.inputLetterspacing}}',$__ctrl='<%=col.inputLetterspacing%>',(col.inputLetterspacing))+($__line=71,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-family:'+($__line=71,$__art='{{=col.inputFontfamily}}',$__ctrl='<%=col.inputFontfamily%>',(col.inputFontfamily))+';text-align:'+($__line=71,$__art='{{=col.inputTextAlign}}',$__ctrl='<%=col.inputTextAlign%>',(col.inputTextAlign)),'placeholder': ($__line=71,$__art='{{=col.inputplaceholder}}',$__ctrl='<%=col.inputplaceholder%>',(col.inputplaceholder)),'mx5-input': $viewId+'@:{update.value~rs}({cell:\''+($__line=71,$__art='{{#col}}',$__ctrl='<%#col,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col\'%>',$keyOf($refData,col,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col'))+'\'})','value': ($__line=71,$__art='{{=col.inputUserValue||col.inputText}}',$__ctrl='<%=col.inputUserValue||col.inputText%>',(col.inputUserValue||col.inputText)),'class': $$_class,},0,$special_2));
}else{
;$$_class='rd-_assets_index_less_-wp100 rd-_assets_index_less_-hp100 rd-_assets_index_less_-input'+($__line=73,$__art='{{if col.inputClassName}}','');$__ctrl='<%if(col.inputClassName){%>';if(col.inputClassName){;$$_class+=' '+($__line=73,$__art='{{=col.inputClassName}}',$__ctrl='<%=col.inputClassName%>',(col.inputClassName))+($__line=73,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_6.push($createVNode('input',{'id': 'ipt_'+($__line=73,$__art='{{=$viewId}}','')+$viewId+'_'+($__line=73,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+'_'+($__line=73,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci)),'readonly': ($temp_var=($__line=73,$__art='{{=isReadonly===true}}',$__ctrl='<%=isReadonly===true%>',isReadonly===true),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"readonly" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-collect/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'style': 'color:'+($__line=73,$__art='{{=col.inputForecolor}}',$__ctrl='<%=col.inputForecolor%>',(col.inputForecolor))+';font-size:'+($__line=73,$__art='{{=col.inputFontsize}}',$__ctrl='<%=col.inputFontsize%>',(col.inputFontsize))+($__line=73,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';letter-spacing:'+($__line=73,$__art='{{=col.inputLetterspacing}}',$__ctrl='<%=col.inputLetterspacing%>',(col.inputLetterspacing))+($__line=73,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-family:'+($__line=73,$__art='{{=col.inputFontfamily}}',$__ctrl='<%=col.inputFontfamily%>',(col.inputFontfamily))+';text-align:'+($__line=73,$__art='{{=col.inputTextAlign}}',$__ctrl='<%=col.inputTextAlign%>',(col.inputTextAlign)),'placeholder': ($__line=73,$__art='{{=col.inputPlaceholder}}',$__ctrl='<%=col.inputPlaceholder%>',(col.inputPlaceholder)),'value': ($__line=73,$__art='{{=col.inputUserValue||col.inputText}}',$__ctrl='<%=col.inputUserValue||col.inputText%>',(col.inputUserValue||col.inputText)),'mx5-input': $viewId+'@:{update.value~rs}({cell:\''+($__line=73,$__art='{{#col}}',$__ctrl='<%#col,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col\'%>',$keyOf($refData,col,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col'))+'\'})','class': $$_class,},1,$special_2));
}
}else if(($__line=75,$__art="{{else if col.type==\\'sum\\'||\n                            col.type==\\'custom\\'||\n                            col.type==\\'avg\\'}}",$__ctrl="else if(col.type=='sum'||\n                            col.type=='custom'||\n                            col.type=='avg'){"),col.type=='sum'||
                            col.type=='custom'||
                            col.type=='avg'){
($__line=78,$__art='{{set sum=getSumByCell(col)}}','');$__ctrl='<%let sum=getSumByCell(col);%>';let sum=getSumByCell(col);;$__line=79;$__art="{{if col.type==\\'sum\\'}}";$__ctrl="if(col.type=='sum'){";
if(col.type=='sum'){
$vnode_7=[$createVNode(0,($__line=80,$__art='{{=format(col.textFormat,calcSum(sum))}}',$__ctrl='<%=format(col.textFormat,calcSum(sum))%>',(format(col.textFormat,calcSum(sum)))),1)];$vnode_6.push($createVNode('div',$quick_gO_1_static_attr,$vnode_7));
}else if(($__line=81,$__art="{{else if col.type==\\'avg\\'}}",$__ctrl="else if(col.type=='avg'){"),col.type=='avg'){
$vnode_7=[$createVNode(0,($__line=82,$__art='{{=format(col.textFormat,calcAvg(sum))}}',$__ctrl='<%=format(col.textFormat,calcAvg(sum))%>',(format(col.textFormat,calcAvg(sum)))),1)];$vnode_6.push($createVNode('div',$quick_gO_1_static_attr,$vnode_7));
}else{
$vnode_7=[$createVNode(0,($__line=84,$__art='{{=format(col.textFormat,sum)}}',$__ctrl='<%=format(col.textFormat,sum)%>',(format(col.textFormat,sum))),1)];$vnode_6.push($createVNode('div',$quick_gO_1_static_attr,$vnode_7));
}
}else if(($__line=86,$__art="{{else if col.type==\\'dropdown\\'}}",$__ctrl="else if(col.type=='dropdown'){"),col.type=='dropdown'){
$vnode_7=[];$__line=88;$__art="{{each col.dropdownItems as item}}";$__ctrl="for(let $q_a_gzdonywgvr=col.dropdownItems,$q_c_uttzei=$q_a_gzdonywgvr.length,$q_key_cthfvgwnp=0;$q_key_cthfvgwnp<$q_c_uttzei;$q_key_cthfvgwnp++){let item=$q_a_gzdonywgvr[$q_key_cthfvgwnp];";
for(let $q_a_gzdonywgvr=col.dropdownItems,$q_c_uttzei=$q_a_gzdonywgvr.length,$q_key_cthfvgwnp=0;$q_key_cthfvgwnp<$q_c_uttzei;$q_key_cthfvgwnp+=1){
let item=$q_a_gzdonywgvr[$q_key_cthfvgwnp];
$vnode_8=[$createVNode(0,($__line=90,$__art='{{=item.text}}',$__ctrl='<%=item.text%>',(item.text)))];$vnode_7.push($createVNode('option',{'disabled': ($temp_var=($__line=89,$__art='{{=item.disabled}}',$__ctrl='<%=item.disabled%>',item.disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-collect/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'selected': ($temp_var=($__line=89,$__art='{{=item.checked}}',$__ctrl='<%=item.checked%>',item.checked),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"selected" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-collect/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'value': ($__line=89,$__art='{{=item.value}}',$__ctrl='<%=item.value%>',(item.value)),},$vnode_8,$special_4));
};$$_class='rd-_assets_index_less_-wp100 rd-_assets_index_less_-hp100'+($__line=87,$__art='{{if col.dropdownClassName}}','');$__ctrl='<%if(col.dropdownClassName){%>';if(col.dropdownClassName){;$$_class+=' '+($__line=87,$__art='{{=col.dropdownClassName}}',$__ctrl='<%=col.dropdownClassName%>',(col.dropdownClassName))+($__line=87,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_6.push($createVNode('select',{'multiple': ($temp_var=($__line=87,$__art='{{=col.dropdownMultipleSelect}}',$__ctrl='<%=col.dropdownMultipleSelect%>',col.dropdownMultipleSelect),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"multiple" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-collect/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'readonly': ($temp_var=($__line=87,$__art='{{=isReadonly===true}}',$__ctrl='<%=isReadonly===true%>',isReadonly===true),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"readonly" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-collect/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'style': 'color:'+($__line=87,$__art='{{=col.dropdownForecolor}}',$__ctrl='<%=col.dropdownForecolor%>',(col.dropdownForecolor))+';font-size:'+($__line=87,$__art='{{=col.dropdownFontsize}}',$__ctrl='<%=col.dropdownFontsize%>',(col.dropdownFontsize))+($__line=87,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';letter-spacing:'+($__line=87,$__art='{{=col.dropdownLetterspacing}}',$__ctrl='<%=col.dropdownLetterspacing%>',(col.dropdownLetterspacing))+($__line=87,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-family:'+($__line=87,$__art='{{=col.dropdownFontfamily}}',$__ctrl='<%=col.dropdownFontfamily%>',(col.dropdownFontfamily)),'name': ($__line=87,$__art='{{=col.dropdownName}}',$__ctrl='<%=col.dropdownName%>',(col.dropdownName)),'mx5-change': $viewId+'@:{update.value~rs}({cell:\''+($__line=87,$__art='{{#col}}',$__ctrl='<%#col,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.col\'%>',$keyOf($refData,col,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.col'))+'\'})','class': $$_class,},$vnode_7));
}else{
$vnode_6.push($createVNode(0,($__line=95,$__art='{{=col.type}}',$__ctrl='<%=col.type%>',(col.type))));
}$__line=97;$__art="{{if !isReadonly}}";$__ctrl="if(!isReadonly){";
if(!isReadonly){
$__line=98;$__art="{{if row.data}}";$__ctrl="if(row.data){";
if(row.data){
$__line=100;$__art="{{if first}}";$__ctrl="if(first){";
if(first){
$vnode_7=[$quick_gy_static_text||($quick_gy_static_text=$createVNode(0,''))];$vnode_6.push($createVNode('i',{'style': 'left:'+($__line=101,$__art='{{=-45-toPx(borderwidth)-(excel?toPx(excelLeft):0)}}',$__ctrl='<%=-45-toPx(borderwidth)-(excel?toPx(excelLeft):0)%>',(-45-toPx(borderwidth)-(excel?toPx(excelLeft):0)))+'px;top:'+($__line=101,$__art='{{=(toPx(realHeight)-22)/2}}',$__ctrl='<%=(toPx(realHeight)-22)/2%>',((toPx(realHeight)-22)/2))+'px','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-tc','title': '点击复制添加当前行','mx5-click': $viewId+'@:{add.row.at~rs}({ri:'+($__line=101,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+'})',},$vnode_7));
}$__line=103;$__art="{{if last&&row.copy}}";$__ctrl="if(last&&row.copy){";
if(last&&row.copy){
$vnode_7=[$quick_gz_static_text||($quick_gz_static_text=$createVNode(0,''))];$vnode_6.push($createVNode('i',{'style': 'right:'+($__line=104,$__art='{{=-45-toPx(borderwidth)}}',$__ctrl='<%=-45-toPx(borderwidth)%>',(-45-toPx(borderwidth)))+'px;top:'+($__line=104,$__art='{{=(toPx(realHeight)-22)/2}}',$__ctrl='<%=(toPx(realHeight)-22)/2%>',((toPx(realHeight)-22)/2))+'px','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-tc','title': '点击删除当前行','mx5-click': $viewId+'@:{delete.row.at~rs}({ri:'+($__line=104,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+'})',},$vnode_7));
}
}
};$$_style='padding:'+($__line=54,$__art='{{=paddingTop}}',$__ctrl='<%=paddingTop%>',(paddingTop))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=54,$__art='{{=paddingRight}}',$__ctrl='<%=paddingRight%>',(paddingRight))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=54,$__art='{{=paddingBottom}}',$__ctrl='<%=paddingBottom%>',(paddingBottom))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=54,$__art='{{=paddingLeft}}',$__ctrl='<%=paddingLeft%>',(paddingLeft))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=54,$__art='{{=realWidth}}',$__ctrl='<%=realWidth%>',(realWidth))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=54,$__art='{{=realHeight}}',$__ctrl='<%=realHeight%>',(realHeight))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';align-items:'+($__line=54,$__art='{{=col.vpos}}',$__ctrl='<%=col.vpos%>',(col.vpos))+';justify-content:'+($__line=54,$__art='{{=col.hpos}}',$__ctrl='<%=col.hpos%>',(col.hpos))+';opacity:'+($__line=54,$__art='{{=col.alpha}}',$__ctrl='<%=col.alpha%>',(col.alpha))+';'+($__line=54,$__art='{{if col.background}}','');$__ctrl='<%if(col.background){%>';if(col.background){;$$_style+='background:'+($__line=54,$__art='{{=col.background}}',$__ctrl='<%=col.background%>',(col.background))+';'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=54,$__art='{{if col.textFontsize!=null}}','');$__ctrl='<%if(col.textFontsize!=null){%>';if(col.textFontsize!=null){;$$_style+='color:'+($__line=54,$__art='{{=col.textForecolor}}',$__ctrl='<%=col.textForecolor%>',(col.textForecolor))+';letter-spacing:'+($__line=54,$__art='{{=col.textLetterspacing}}',$__ctrl='<%=col.textLetterspacing%>',(col.textLetterspacing))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=54,$__art='{{if col.textStyleBold}}','');$__ctrl='<%if(col.textStyleBold){%>';if(col.textStyleBold){;$$_style+='font-weight:bold;'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=54,$__art='{{if col.textStyleItalic}}','');$__ctrl='<%if(col.textStyleItalic){%>';if(col.textStyleItalic){;$$_style+='font-style:italic;'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=54,$__art='{{if col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline}}','');$__ctrl='<%if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){%>';if(col.textStyleUnderline||col.textStyleStrike||col.textStyleOverline){;$$_style+='text-decoration:'+($__line=54,$__art='{{if col.textStyleStrike}}','');$__ctrl='<%if(col.textStyleStrike){%>';if(col.textStyleStrike){;$$_style+='line-through'+($__line=54,$__art='{{else if col.textStyleOverline}}','');$__ctrl='<%}else if(col.textStyleOverline){%>';}else if(col.textStyleOverline){;$$_style+='overline'+($__line=54,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='underline'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=';'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='font-family:'+($__line=54,$__art='{{=col.textFontfamily}}',$__ctrl='<%=col.textFontfamily%>',(col.textFontfamily))+';font-size:'+($__line=54,$__art='{{=col.textFontsize}}',$__ctrl='<%=col.textFontsize%>',(col.textFontsize))+($__line=54,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=54,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_5.push($createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden','style': $$_style,},$vnode_6));
};$$_class='rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all'+($__line=34,$__art='{{if !row.data}}','');$__ctrl='<%if(!row.data){%>';if(!row.data){;$$_class+=' rd-_assets_index_less_-overflow-hidden'+($__line=34,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_4.push($createVNode('td',{'colspan': (($__line=34,$__art='{{=col.colspan!=1}}',$__ctrl='<%=col.colspan!=1%>',col.colspan!=1))&&(($__line=34,$__art='{{=col.colspan}}',$__ctrl='<%=col.colspan%>',(col.colspan))),'rowspan': (($__line=34,$__art='{{=col.rowspan!=1}}',$__ctrl='<%=col.rowspan!=1%>',col.rowspan!=1))&&(($__line=34,$__art='{{=col.rowspan}}',$__ctrl='<%=col.rowspan%>',(col.rowspan))),'style': 'position:relative;width:'+($__line=34,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=34,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=34,$__art='{{=col.height}}',$__ctrl='<%=col.height%>',(col.height))+($__line=34,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-left:'+($__line=34,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=34,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=34,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=34,$__art='{{=borderwidth&&col.bLeft?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bLeft?bordercolor:\'#0000\'%>',(borderwidth&&col.bLeft?bordercolor:'#0000'))+';border-top:'+($__line=34,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=34,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=34,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=34,$__art='{{=borderwidth&&col.bTop?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bTop?bordercolor:\'#0000\'%>',(borderwidth&&col.bTop?bordercolor:'#0000'))+';border-right:'+($__line=34,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=34,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=34,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=34,$__art='{{=borderwidth&&col.bRight?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bRight?bordercolor:\'#0000\'%>',(borderwidth&&col.bRight?bordercolor:'#0000'))+';border-bottom:'+($__line=34,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=34,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=34,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=34,$__art='{{=borderwidth&&col.bBottom?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bBottom?bordercolor:\'#0000\'%>',(borderwidth&&col.bBottom?bordercolor:'#0000')),'class': $$_class,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$__line=114;$__art="{{if row.total}}";$__ctrl="if(row.total){";
if(row.total){
($__line=115,$__art='{{findTotalRow=1}}','');$__ctrl='<%findTotalRow=1%>';findTotalRow=1;
}
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-_assets_index_less_-table rd-_assets_index_less_-wp100','style': 'border-collapse:'+($__line=7,$__art='{{=borderdeed}}',$__ctrl='<%=borderdeed%>',(borderdeed)),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/form-collect/index.html'; throw msg; }  } ,
    init() {
        this.set({
            format,
            toPx: const_1['@:{const#to.px~rs}'],
            toUnit: const_1['@:{const#to.unit~rs}'],
            getMaxCol(props) {
                let ext = table_1['@:{table.provider#add.ext.meta~rs}'](props, 1);
                return ext['@:{col.max~rs}'];
            },
            getSumByCell: (cell) => {
                let { rows } = this.get('props');
                let colIndexToArrays = {};
                for (let row of rows) {
                    if (row.data) { //只计算数据行
                        for (let c of row.cols) {
                            let ci = c['@:{start.col.index~rs}'];
                            if (ci >= cell['@:{start.col.index~rs}'] &&
                                ci <= cell['@:{end.col.index~rs}']) {
                                if (!colIndexToArrays[ci]) {
                                    colIndexToArrays[ci] = [];
                                }
                                let userValue = c.inputUserValue || c.inputText;
                                let toNumber = parseInt(userValue, 10);
                                let pushed;
                                if (isNaN(toNumber)) {
                                    pushed = {
                                        '@:{number~rs}': 0,
                                        '@:{user.input~rs}': 0
                                    };
                                }
                                else {
                                    pushed = {
                                        '@:{number~rs}': toNumber,
                                        '@:{user.input~rs}': 1
                                    };
                                }
                                colIndexToArrays[ci].push(pushed);
                            }
                        }
                    }
                }
                let values = [];
                for (let key in colIndexToArrays) {
                    values.push(colIndexToArrays[key]);
                }
                return values;
            },
            calcSum,
            calcAvg
        });
    },
    assign(data) {
        if (data.overrideProps) {
            mix(data.props, data.overrideProps);
        }
        table_1["@:{table.provider#add.ext.meta~rs}"](data.props, true);
        // if (data.data) {
        //     let { rows } = data.props;
        //     let userData = data.data;
        //     let fillSubs = (elements, data) => {
        //         for (let i = 0; i < elements.length; i++) {
        //             let e = elements[i];
        //             if (e.type == 'form-input') {
        //                 e.props.userValue = data[i].value;
        //             }
        //         }
        //     };
        //     let headIndex = 0,
        //         labelIndex = 0,
        //         dataIndex = 0,
        //         totalIndex = 0,
        //         footIndex = 0;
        //     for (let i = 0; i < rows.length; i++) {
        //         let row = rows[i];
        //         let dest;
        //         if (row.head) {
        //             dest = userData.head[headIndex++];
        //         } else if (row.label) {
        //             dest = userData.label[labelIndex++];
        //         } else if (row.data) {
        //             dest = userData.data[dataIndex++];
        //         } else if (row.total) {
        //             dest = userData.total[totalIndex++];
        //         } else if (row.foot) {
        //             dest = userData.foot[footIndex++];
        //         }
        //         for (let j = 0; j < row.cols.length; j++) {
        //             let col = row.cols[j];
        //             if (col.elements &&
        //                 col.elements.length) {
        //                 fillSubs(col.elements, dest[j]);
        //             } else if (col.type == 'input') {
        //                 col.inputUserValue = dest[j].value;
        //             }
        //         }
        //     }
        // }
        if (data.overrideProps) {
            mix(data.props, data.overrideProps);
        }
        this.set(data);
    },
    async render() {
        let collectMark = mark(this, '@:{collect.render.mark~rs}');
        // let props = this.get('props');
        // let sizes = TableProvider["@:{table.provider#get.sizes}"](props);
        await this.digest();
        let value = await this.getValue();
        if (collectMark()) {
            this['@:{dispatch.event~rs}'](value);
        }
    },
    '@:{dispatch.event~rs}'(value) {
        if (!value) {
            value = this['@:{collect.value~rs}']();
        }
        if (value.elementProps != this['@:{cached.element.props~rs}']) {
            this['@:{cached.element.props~rs}'] = value.elementProps;
            delete value.id;
            delete value.type;
            dispatch(this.root, 'elementinput', value);
        }
    },
    '@:{collect.value~rs}'() {
        let props = this.get('props');
        let stringifyProps = JSON.stringify(props, filter);
        let { rows } = props;
        let values = {
            head: [],
            label: [],
            data: [],
            total: [],
            foot: []
        };
        let elementInputs = [];
        let collectFromElements = elements => {
            let values = [];
            for (let e of elements) {
                if (e.type == 'form-input') {
                    let { userValue, text, inputName } = e.props;
                    if (userValue == null) {
                        userValue = text;
                    }
                    values.push({
                        type: 'form-input',
                        value: userValue,
                        name: inputName
                    });
                    let root = node(e.id);
                    if (root) {
                        elementInputs.push({
                            node: root.querySelector('input'),
                            type: 'form-input',
                            value: userValue,
                            name: inputName
                        });
                    }
                }
                else {
                    values.push(null);
                }
            }
            return values;
        };
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let cells = [];
            for (let j = 0; j < row.cols.length; j++) {
                let col = row.cols[j];
                if (col.elements &&
                    col.elements.length) {
                    cells.push(collectFromElements(col.elements));
                }
                else if (col.type == 'input') {
                    let userValue;
                    if (col.inputUserValue != null) {
                        userValue = col.inputUserValue;
                    }
                    else {
                        userValue = col.inputText;
                    }
                    cells.push({
                        value: userValue,
                        type: 'form-collect-input',
                        name: col.inputName
                    });
                    elementInputs.push({
                        node: node(`ipt_${this.id}_${i}_${j}`),
                        type: 'form-collect-input',
                        value: userValue,
                        name: col.inputName
                    });
                }
                else if (col.type == 'sum' ||
                    col.type == 'custom') {
                    let { getSumByCell, format, calcSum } = this.get();
                    let sum = getSumByCell(col);
                    let sumValue;
                    if (col.type == 'sum') {
                        sumValue = format(col.textFormat, calcSum(sum));
                    }
                    else {
                        sumValue = format(col.textFormat, sum);
                    }
                    cells.push({
                        type: 'total-sum',
                        value: sumValue
                    });
                }
                else {
                    cells.push(null);
                }
            }
            let dest;
            if (row.head) {
                dest = values.head;
            }
            else if (row.label) {
                dest = values.label;
            }
            else if (row.data) {
                dest = values.data;
            }
            else if (row.total) {
                dest = values.total;
            }
            else if (row.foot) {
                dest = values.foot;
            }
            dest.push(cells);
        }
        let id = this.get('id');
        return {
            id,
            type: 'form-collect',
            props,
            elementId: id,
            elementType: 'form-collect',
            elementProps: stringifyProps,
            elementValue: values,
            elementInputs
        };
    },
    getValue() {
        return new Promise(resolve => {
            let startCheck = () => {
                let value = this['@:{collect.value~rs}']();
                let allReady = 1;
                for (let e of value.elementInputs) {
                    if (!e.node) {
                        allReady = 0;
                        break;
                    }
                }
                if (allReady) {
                    resolve(value);
                }
                else {
                    setTimeout(startCheck, 50);
                }
            };
            setTimeout(startCheck, 50);
        });
    },
    '@:{update.value~rs}<input>'(e) {
        let { cell } = e.params;
        let input = e.eventTarget;
        cell.inputUserValue = input.value.trim();
        let props = this.get('props');
        this.digest({
            props
        });
        this['@:{dispatch.event~rs}']();
    },
    '@:{update.value~rs}<change>'(e) {
        // let { cell } = e.params;
        // let input = e.eventTarget as HTMLSelectElement;
        // let { dropdownItems } = cell;
        // for (let e of dropdownItems) {
        //     e.checked = false;
        // }
        // let current = dropdownItems[input.selectedIndex];
        // current.checked = true;
        // cell.inputUserValue = current.value;
        // let props = this.get('props');
        // this.digest({
        //     props
        // });
        // this['@:{dispatch.event}']();
    },
    '@:{sub.element.input~rs}<elementinput>'(e) {
        e.stopImmediatePropagation();
        this['@:{dispatch.event~rs}']();
    },
    '@:{add.row.at~rs}<click>'(e) {
        let { ri } = e.params;
        let props = this.get('props');
        let { rows } = props;
        let currentRow = rows[ri];
        let lastDataRow = 0;
        for (let row of rows) {
            if (row.total) {
                break;
            }
            lastDataRow++;
        }
        table_1["@:{table.provider#insert.row.at~rs}"](props, lastDataRow, {}, 0);
        let addedRow = rows[lastDataRow];
        addedRow.data = true;
        addedRow.copy = true;
        for (let i = currentRow.cols.length; i--;) {
            let oldCol = currentRow.cols[i];
            let newCol = addedRow.cols[i];
            let copiedProps = JSON.parse(JSON.stringify(oldCol));
            mix(newCol, copiedProps);
        }
        table_1["@:{table.provider#add.ext.meta~rs}"](props);
        this.set({
            props
        });
        this.render();
    },
    '@:{delete.row.at~rs}<click>'(e) {
        let { ri } = e.params;
        let props = this.get('props');
        table_1["@:{table.provider#delete.row~rs}"](props, ri);
        table_1["@:{table.provider#add.ext.meta~rs}"](props);
        this.set({
            props
        });
        this.render();
    }
});

});