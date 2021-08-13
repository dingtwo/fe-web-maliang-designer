/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/hod-table/dshow",["5c","../../5b/5e","../../5j/5k/index","../../5r/hodbase"],(require,exports,module)=>{
let $quick_mn_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let index_1 = require("../../5j/5k/index");
let hodbase_1 = require("../../5r/hodbase");
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
	selected,
	count,
	grouped,
	toPx,
	i18n,}=$dataFromView,
$text,
$$_class,
$vnode_6,
$$_style,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$text='';let max=Math.max,min=Math.min;;$text+=' ';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows,readonly=props.readonly;;$text+=' ';let bwn=(borderdeed=='collapse'?1:2)*borderwidth;;$vnode_3=[];
for(let $q_c_dkipcnly=rows.length,ri=0;ri<$q_c_dkipcnly;ri+=1){
let row=rows[ri];
$vnode_4=[];
for(let $q_a_rsohi=row.cols,$q_c_vcyubig=$q_a_rsohi.length,ci=0;ci<$q_c_vcyubig;ci+=1){
let col=$q_a_rsohi[ci];
$vnode_5=[];$vnode_6=[];
for(let $q_a_ztlmtlhmv=col.elements,$q_c_ynjcrtkn=$q_a_ztlmtlhmv.length,$q_key_jmclpzy=0;$q_key_jmclpzy<$q_c_ynjcrtkn;$q_key_jmclpzy+=1){
let e=$q_a_ztlmtlhmv[$q_key_jmclpzy];
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,fs,unit','class': 'rd-on','id': (e.id),'mx5-view': '61/'+(e.type)+'/designer?element='+$keyOf($refData,e,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_jmclpzy)+'.i^')+'&fs='+$keyOf($refData,fs,'i*')+'&ownerId=_rd_h_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&maskId=_rd_hm_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&unit='+$keyOf($refData,unit,'i{'),'mx5-pointerdown': $viewId+'1_ph({element:\''+$keyOf($refData,e,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_jmclpzy)+'.i^')+'\',maskId:\'_rd_hm_'+($encodeQuote(element.id))+'_'+($encodeQuote(ri))+'_'+($encodeQuote(ci))+'\'})',}));
}$vnode_5.push($createVNode('div',{'class': 'rd-mB rd-mC rd-mK rd-nO','data-as': 'hod','id': '_rd_hm_'+(element.id)+'_'+(ri)+'_'+(ci),'mx5-contextmenu': $viewId+'_p8({row:'+(ri)+',col:'+(ci)+'})',},$vnode_6));
if(!fs&&!props.locked){
let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_6=[];
if(focusCurrentCell&&!grouped){
$text='';let height=(min(26,toPx(col.height)-6)-4);;$text+=' ';let width=(min(26,toPx(col.width)-6)-4);;$text+=' ';let top=(toPx(col.height)-height-bwn)/2-2;;$text+=' ';let left=(toPx(col.width)-width-bwn)/2-2;;$vnode_6.push($createVNode('div',{'class': 'rd-mJ rd-mM rd-nt rd-on','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('oR')),'mx5-pointerdown': $viewId+'1_p3({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-mJ rd-mM rd-nu rd-on','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('oR')),'mx5-pointerdown': $viewId+'1_p3({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-mJ rd-mM rd-nv rd-on','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('oS')),'mx5-pointerdown': $viewId+'1_p3({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-mJ rd-mM rd-nw rd-on','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('oS')),'mx5-pointerdown': $viewId+'1_p3({key:\'tm\'})',}));
};$$_class='rd-mJ rd-nx rd-n5 rd-mL';if(focusCurrentCell){;$$_class+=' rd-ns';};$$_style='';if(focusCurrentCell){;if(!col.bLeft){;$$_style+='border-left-style:dotted;';};if(!col.bTop){;$$_style+='border-top-style:dotted;';};if(!col.bRight){;$$_style+='border-right-style:dotted;';};if(!col.bBottom){;$$_style+='border-bottom-style:dotted;';};};$vnode_5.push($createVNode('div',{'id': '_rd_dm_'+(element.id)+'_'+(ri)+'_'+(ci),'class': $$_class,'style': $$_style,},$vnode_6));
}
if(!readonly && !fs && col.elements && col.elements.length){
$vnode_6=[$quick_mn_static_text||($quick_mn_static_text=$createVNode(0,''))];$vnode_5.push($createVNode('i',{'class': 'rd-l3 rd-mA rd-mJ rd-n0 rd-n5 rd-nK rd-nT rd-nk rd-oh rd-oi','title': (i18n('ph')),},$vnode_6));
}
if(selectRect && srRow==ri && srCol==ci){
$vnode_5.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-n3','style': 'display:block;left:'+(selectRect.x)+'px;top:'+(selectRect.y)+'px;width:'+(selectRect.width)+'px;height:'+(selectRect.height)+'px',}));
};$$_class='rd-np rd-nn rd-on';if(selectRect&&srRow==ri&&srCol==ci){;$$_class+=' rd-nO';};$vnode_4.push($createVNode('td',{'colspan': ($temp_var=(col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=(col.rowspan))!=null&&$temp_var,'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#ddd6')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#ddd6')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#ddd6')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#ddd6'),'mx5-pointerdown': $viewId+'_p1({row:'+(ri)+',col:'+(ci)+',elm:1})','id': '_rd_h_'+(element.id)+'_'+(ri)+'_'+(ci),'class': $$_class,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-mB rd-no','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            toPx: const_1['mM'],
            toUnit: const_1['l3'],
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
}).merge(index_1, hodbase_1);

});