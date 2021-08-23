/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/hod-footer/dshow",["magix5","../../designer/const","../../gallery/mx-dragdrop/index","../../provider/hodbase","../../provider/hodflex"],(require,exports,module)=>{
let $quick_kG_static_text;
let $quick_lf_0_static_attr={'class': 'rd-_assets_index_less_-flex',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let index_1 = require("../../gallery/mx-dragdrop/index");
let hodbase_1 = require("../../provider/hodbase");
let hodflex_1 = require("../../provider/hodflex");
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
	selected,
	count,
	grouped,
	toPx,
	i18n,}=$dataFromView,
$$_style,
$vnode_4,
$$_class,
$text,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];($__line=2,$__art='{{set {max,min}=Math}}','');$__ctrl='<%let max=Math.max,min=Math.min;%>';let max=Math.max,min=Math.min;;$__line=3;$__art="{{each props.rows as row ri}}";$__ctrl="for(let $q_a_fcsewyr=props.rows,$q_c_vsmayaogu=$q_a_fcsewyr.length,ri=0;ri<$q_c_vsmayaogu;ri++){let row=$q_a_fcsewyr[ri];";
for(let $q_a_fcsewyr=props.rows,$q_c_vsmayaogu=$q_a_fcsewyr.length,ri=0;ri<$q_c_vsmayaogu;ri+=1){
let row=$q_a_fcsewyr[ri];
$vnode_2=[];$__line=5;$__art="{{each row.cols as col ci}}";$__ctrl="for(let $q_a_oqtapv=row.cols,$q_c_sdqqbuh=$q_a_oqtapv.length,ci=0;ci<$q_c_sdqqbuh;ci++){let col=$q_a_oqtapv[ci];";
for(let $q_a_oqtapv=row.cols,$q_c_sdqqbuh=$q_a_oqtapv.length,ci=0;ci<$q_c_sdqqbuh;ci+=1){
let col=$q_a_oqtapv[ci];
$vnode_3=[];$vnode_4=[];$__line=8;$__art="{{each col.elements as e}}";$__ctrl="for(let $q_a_bxvvkmfyk=col.elements,$q_c_bfdmspsy=$q_a_bxvvkmfyk.length,$q_key_yalbflm=0;$q_key_yalbflm<$q_c_bfdmspsy;$q_key_yalbflm++){let e=$q_a_bxvvkmfyk[$q_key_yalbflm];";
for(let $q_a_bxvvkmfyk=col.elements,$q_c_bfdmspsy=$q_a_bxvvkmfyk.length,$q_key_yalbflm=0;$q_key_yalbflm<$q_c_bfdmspsy;$q_key_yalbflm+=1){
let e=$q_a_bxvvkmfyk[$q_key_yalbflm];
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit,fs','class': 'rd-_assets_index_less_-touch-action-none','id': ($__line=9,$__art='{{=e.id}}',$__ctrl='<%=e.id%>',(e.id)),'mx5-view': 'elements/'+($__line=9,$__art='{{=e.type}}',$__ctrl='<%=e.type%>',(e.type))+'/designer?element='+($__line=9,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+($q_key_yalbflm)+\'.e\'%>',$keyOf($refData,e,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.elements.'+($q_key_yalbflm)+'.e'))+'&unit='+($__line=9,$__art='{{#unit}}',$__ctrl='<%#unit,\'auto_key_unit\'%>',$keyOf($refData,unit,'auto_key_unit'))+'&fs='+($__line=9,$__art='{{#fs}}',$__ctrl='<%#fs,\'auto_key_fs\'%>',$keyOf($refData,fs,'auto_key_fs'))+'&ownerId=_rd_h_'+($__line=9,$__art='{{=element.id}}',$__ctrl='<%=$encodeUrl(element.id)%>',($encodeUrl(element.id)))+'_'+($__line=9,$__art='{{=ri}}',$__ctrl='<%=$encodeUrl(ri)%>',($encodeUrl(ri)))+'_'+($__line=9,$__art='{{=ci}}',$__ctrl='<%=$encodeUrl(ci)%>',($encodeUrl(ci)))+'&maskId=_rd_hm_'+($__line=9,$__art='{{=element.id}}',$__ctrl='<%=$encodeUrl(element.id)%>',($encodeUrl(element.id)))+'_'+($__line=9,$__art='{{=ri}}',$__ctrl='<%=$encodeUrl(ri)%>',($encodeUrl(ri)))+'_'+($__line=9,$__art='{{=ci}}',$__ctrl='<%=$encodeUrl(ci)%>',($encodeUrl(ci))),'mx5-pointerdown': $viewId+'1@:{element.start.drag~rs}({element:\''+($__line=9,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+($q_key_yalbflm)+\'.e\'%>',$keyOf($refData,e,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.elements.'+($q_key_yalbflm)+'.e'))+'\',maskId:\'_rd_hm_'+($__line=9,$__art='{{=element.id}}',$__ctrl='<%=$encodeQuote(element.id)%>',($encodeQuote(element.id)))+'_'+($__line=9,$__art='{{=ri}}',$__ctrl='<%=$encodeQuote(ri)%>',($encodeQuote(ri)))+'_'+($__line=9,$__art='{{=ci}}',$__ctrl='<%=$encodeQuote(ci)%>',($encodeQuote(ci)))+'\'})',}));
}$vnode_3.push($createVNode('div',{'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pr rd-_assets_index_less_-wp100','data-as': 'hod','mx5-contextmenu': $viewId+'@:{show.contxtmenu~rs}({row:'+($__line=7,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=7,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})','id': '_rd_hm_'+($__line=7,$__art='{{=element.id}}',$__ctrl='<%=element.id%>',(element.id))+'_'+($__line=7,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+'_'+($__line=7,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci)),},$vnode_4));$__line=12;$__art="{{if !fs&&!props.locked}}";$__ctrl="if(!fs&&!props.locked){";
if(!fs&&!props.locked){
($__line=13,$__art='{{set focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1}}','');$__ctrl='<%let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;%>';let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_4=[];$__line=15;$__art="{{if focusCurrentCell&&!grouped}}";$__ctrl="if(focusCurrentCell&&!grouped){";
if(focusCurrentCell&&!grouped){
$text=($__line=16,$__art='{{set width=(min(26,toPx(col.width)-2)-4)}}','');$__ctrl='<%let width=(min(26,toPx(col.width)-2)-4);%>';let width=(min(26,toPx(col.width)-2)-4);;$text+=' '+($__line=17,$__art='{{set left=(toPx(col.width)-width)/2}}','');$__ctrl='<%let left=(toPx(col.width)-width)/2;%>';let left=(toPx(col.width)-width)/2;;$vnode_4.push($createVNode('div',{'class': 'rd-_assets_index_less_-hod-top rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-all rd-_assets_index_less_-touch-action-none','style': 'width:'+($__line=18,$__art='{{=max(width,0)}}',$__ctrl='<%=max(width,0)%>',(max(width,0)))+'px;left:'+($__line=18,$__art='{{=left}}',$__ctrl='<%=left%>',(left))+'px;cursor:ns-resize','title': ($__line=18,$__art='{{=i18n(\'@:{lang#press.drag.cell.height~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#press.drag.cell.height~rs}\')%>',(i18n('@:{lang#press.drag.cell.height~rs}'))),'mx5-pointerdown': $viewId+'1@:{start.resize~rs}({key:\'tm\'})',}));
};$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-hod-focus-div rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-pointer-events-none'+($__line=14,$__art='{{if focusCurrentCell}}','');$__ctrl='<%if(focusCurrentCell){%>';if(focusCurrentCell){;$$_class+=' rd-_assets_index_less_-hod-focus-line'+($__line=14,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style=($__line=14,$__art='{{if focusCurrentCell}}','');$__ctrl='<%if(focusCurrentCell){%>';if(focusCurrentCell){;$$_style+='border-top-style:'+($__line=14,$__art='{{=col.borderTopStyle}}',$__ctrl='<%=col.borderTopStyle%>',(col.borderTopStyle))+';border-right-style:'+($__line=14,$__art='{{=col.borderRightStyle}}',$__ctrl='<%=col.borderRightStyle%>',(col.borderRightStyle))+';border-bottom-style:'+($__line=14,$__art='{{=col.borderBottomStyle}}',$__ctrl='<%=col.borderBottomStyle%>',(col.borderBottomStyle))+';border-left-style:'+($__line=14,$__art='{{=col.borderLeftStyle}}',$__ctrl='<%=col.borderLeftStyle%>',(col.borderLeftStyle))+($__line=14,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_3.push($createVNode('div',{'id': '_rd_dm_'+($__line=14,$__art='{{=element.id}}',$__ctrl='<%=element.id%>',(element.id))+'_'+($__line=14,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+'_'+($__line=14,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci)),'class': $$_class,'style': $$_style,},$vnode_4));
}$__line=22;$__art="{{if !props.readonly && !fs && col.elements && col.elements.length}}";$__ctrl="if(!props.readonly && !fs && col.elements && col.elements.length){";
if(!props.readonly && !fs && col.elements && col.elements.length){
$vnode_4=[$quick_kG_static_text||($quick_kG_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-cell-icon rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-gray rd-_assets_index_less_-iconfont rd-_assets_index_less_-left-2 rd-_assets_index_less_-pa rd-_assets_index_less_-top-2 rd-_assets_index_less_-z-index-1','title': ($__line=23,$__art='{{=i18n(\'@:{lang#cell.select~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#cell.select~rs}\')%>',(i18n('@:{lang#cell.select~rs}'))),},$vnode_4));
}$__line=25;$__art="{{if selectRect&&srRow==ri&&srCol==ci}}";$__ctrl="if(selectRect&&srRow==ri&&srCol==ci){";
if(selectRect&&srRow==ri&&srCol==ci){
$vnode_3.push($createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-select-rect','style': 'display:block;left:'+($__line=26,$__art='{{=selectRect.x}}',$__ctrl='<%=selectRect.x%>',(selectRect.x))+'px;top:'+($__line=26,$__art='{{=selectRect.y}}',$__ctrl='<%=selectRect.y%>',(selectRect.y))+'px;width:'+($__line=26,$__art='{{=selectRect.width}}',$__ctrl='<%=selectRect.width%>',(selectRect.width))+'px;height:'+($__line=26,$__art='{{=selectRect.height}}',$__ctrl='<%=selectRect.height%>',(selectRect.height))+'px',}));
};$$_style='position:relative;height:'+($__line=6,$__art='{{=row.height}}',$__ctrl='<%=row.height%>',(row.height))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=6,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-top:'+($__line=6,$__art='{{=col.borderTopStyle}}',$__ctrl='<%=col.borderTopStyle%>',(col.borderTopStyle))+' '+($__line=6,$__art='{{=col.borderTopWidth}}',$__ctrl='<%=col.borderTopWidth%>',(col.borderTopWidth))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=6,$__art='{{=col.borderTopColor}}',$__ctrl='<%=col.borderTopColor%>',(col.borderTopColor))+';border-right:'+($__line=6,$__art='{{=col.borderRightStyle}}',$__ctrl='<%=col.borderRightStyle%>',(col.borderRightStyle))+' '+($__line=6,$__art='{{=col.borderRightWidth}}',$__ctrl='<%=col.borderRightWidth%>',(col.borderRightWidth))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=6,$__art='{{=col.borderRightColor}}',$__ctrl='<%=col.borderRightColor%>',(col.borderRightColor))+';border-bottom:'+($__line=6,$__art='{{=col.borderBottomStyle}}',$__ctrl='<%=col.borderBottomStyle%>',(col.borderBottomStyle))+' '+($__line=6,$__art='{{=col.borderBottomWidth}}',$__ctrl='<%=col.borderBottomWidth%>',(col.borderBottomWidth))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=6,$__art='{{=col.borderBottomColor}}',$__ctrl='<%=col.borderBottomColor%>',(col.borderBottomColor))+';border-left:'+($__line=6,$__art='{{=col.borderLeftStyle}}',$__ctrl='<%=col.borderLeftStyle%>',(col.borderLeftStyle))+' '+($__line=6,$__art='{{=col.borderLeftWidth}}',$__ctrl='<%=col.borderLeftWidth%>',(col.borderLeftWidth))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=6,$__art='{{=col.borderLeftColor}}',$__ctrl='<%=col.borderLeftColor%>',(col.borderLeftColor))+';border-radius:'+($__line=6,$__art='{{=col.borderLeftTopRadius}}',$__ctrl='<%=col.borderLeftTopRadius%>',(col.borderLeftTopRadius))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=6,$__art='{{=col.borderRightTopRadius}}',$__ctrl='<%=col.borderRightTopRadius%>',(col.borderRightTopRadius))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=6,$__art='{{=col.borderRightBottomRadius}}',$__ctrl='<%=col.borderRightBottomRadius%>',(col.borderRightBottomRadius))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=6,$__art='{{=col.borderLeftBottomRadius}}',$__ctrl='<%=col.borderLeftBottomRadius%>',(col.borderLeftBottomRadius))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=6,$__art='{{if selectRect&&srRow==ri&&srCol==ci}}','');$__ctrl='<%if(selectRect&&srRow==ri&&srCol==ci){%>';if(selectRect&&srRow==ri&&srCol==ci){;$$_style+='overflow:hidden'+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-pointerdown': $viewId+'@:{active.cell~rs}({row:'+($__line=6,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=6,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+',elm:1})','id': '_rd_h_'+($__line=6,$__art='{{=element.id}}',$__ctrl='<%=element.id%>',(element.id))+'_'+($__line=6,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+'_'+($__line=6,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci)),'class': 'rd-_assets_index_less_-touch-action-none','style': $$_style,},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_lf_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-flex-direction-column rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/hod-footer/dshow.html'; throw msg; }  } ,
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
}).merge(index_1, hodbase_1, hodflex_1);

});