/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/hod-table/dshow",["51","../../50/53","../../58/59/index","../../5g/hodbase"],(require,exports,module)=>{
let $quick_gz_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let index_1 = require("../../58/59/index");
let hodbase_1 = require("../../5g/hodbase");
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
for(let $q_c_tnqbvjowm=rows.length,ri=0;ri<$q_c_tnqbvjowm;ri+=1){
let row=rows[ri];
$vnode_4=[];
for(let $q_a_fugpdr=row.cols,$q_c_hgpfvsf=$q_a_fugpdr.length,ci=0;ci<$q_c_hgpfvsf;ci+=1){
let col=$q_a_fugpdr[ci];
$vnode_5=[];$vnode_6=[];
for(let $q_a_iycykqz=col.elements,$q_c_piiscxwd=$q_a_iycykqz.length,$q_key_teigpydpk=0;$q_key_teigpydpk<$q_c_piiscxwd;$q_key_teigpydpk+=1){
let e=$q_a_iycykqz[$q_key_teigpydpk];
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,fs,unit','class': 'rd-iz','id': (e.id),'mx5-view': '5m/'+(e.type)+'/designer?element='+$keyOf($refData,e,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_teigpydpk)+'.eG')+'&fs='+$keyOf($refData,fs,'eH')+'&ownerId=_rd_h_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&maskId=_rd_hm_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&unit='+$keyOf($refData,unit,'eI'),'mx5-pointerdown': $viewId+'1_jw({element:\''+$keyOf($refData,e,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_teigpydpk)+'.eG')+'\',maskId:\'_rd_hm_'+($encodeQuote(element.id))+'_'+($encodeQuote(ri))+'_'+($encodeQuote(ci))+'\'})',}));
}$vnode_5.push($createVNode('div',{'class': 'rd-gN rd-gO rd-gW rd-h0','data-as': 'hod','id': '_rd_hm_'+(element.id)+'_'+(ri)+'_'+(ci),'mx5-contextmenu': $viewId+'_km({row:'+(ri)+',col:'+(ci)+'})',},$vnode_6));
if(!fs&&!props.locked){
let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_6=[];
if(focusCurrentCell&&!grouped){
$text='';let height=(min(26,toPx(col.height)-6)-4);;$text+=' ';let width=(min(26,toPx(col.width)-6)-4);;$text+=' ';let top=(toPx(col.height)-height-bwn)/2-2;;$text+=' ';let left=(toPx(col.width)-width-bwn)/2-2;;$vnode_6.push($createVNode('div',{'class': 'rd-gV rd-gY rd-hF rd-iz','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('i2')),'mx5-pointerdown': $viewId+'1_kh({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-gV rd-gY rd-hG rd-iz','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('i2')),'mx5-pointerdown': $viewId+'1_kh({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-gV rd-gY rd-hH rd-iz','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('i3')),'mx5-pointerdown': $viewId+'1_kh({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-gV rd-gY rd-hI rd-iz','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('i3')),'mx5-pointerdown': $viewId+'1_kh({key:\'tm\'})',}));
};$$_class='rd-gV rd-hJ rd-ig rd-gX';if(focusCurrentCell){;$$_class+=' rd-hE';};$$_style='';if(focusCurrentCell){;if(!col.bLeft){;$$_style+='border-left-style:dotted;';};if(!col.bTop){;$$_style+='border-top-style:dotted;';};if(!col.bRight){;$$_style+='border-right-style:dotted;';};if(!col.bBottom){;$$_style+='border-bottom-style:dotted;';};};$vnode_5.push($createVNode('div',{'id': '_rd_dm_'+(element.id)+'_'+(ri)+'_'+(ci),'class': $$_class,'style': $$_style,},$vnode_6));
}
if(!readonly && !fs && col.elements && col.elements.length){
$vnode_6=[$quick_gz_static_text||($quick_gz_static_text=$createVNode(0,''))];$vnode_5.push($createVNode('i',{'class': 'rd-gM rd-gV rd-ge rd-h5 rd-hW rd-hw rd-ib rd-ig rd-it rd-iu','title': (i18n('js')),},$vnode_6));
}
if(selectRect && srRow==ri && srCol==ci){
$vnode_5.push($createVNode('div',{'class': 'rd-gV rd-gX rd-ie','style': 'display:block;left:'+(selectRect.x)+'px;top:'+(selectRect.y)+'px;width:'+(selectRect.width)+'px;height:'+(selectRect.height)+'px',}));
};$$_class='rd-hB rd-hz rd-iz';if(selectRect&&srRow==ri&&srCol==ci){;$$_class+=' rd-h0';};$vnode_4.push($createVNode('td',{'colspan': ($temp_var=(col.colspan))!=null&&$temp_var,'rowspan': ($temp_var=(col.rowspan))!=null&&$temp_var,'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#ddd6')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#ddd6')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#ddd6')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#ddd6'),'mx5-pointerdown': $viewId+'_kf({row:'+(ri)+',col:'+(ci)+',elm:1})','id': '_rd_h_'+(element.id)+'_'+(ri)+'_'+(ci),'class': $$_class,},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-gN rd-hA','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            toPx: const_1['gY'],
            toUnit: const_1['ge'],
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