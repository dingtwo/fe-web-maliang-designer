/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/hod-hflex/dshow",["51","../../50/53","../../58/59/index","../../5g/hodbase","../../5g/hodflex"],(require,exports,module)=>{
let $quick_gz_static_text;
let $quick_hc_0_static_attr={'class': 'rd-g9',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let index_1 = require("../../58/59/index");
let hodbase_1 = require("../../5g/hodbase");
let hodflex_1 = require("../../5g/hodflex");
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
$$_style,
$vnode_4,
$$_class,
$text,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];let max=Math.max,min=Math.min;;
for(let $q_a_ekqxbbrg=props.rows,$q_c_nvaxi=$q_a_ekqxbbrg.length,ri=0;ri<$q_c_nvaxi;ri+=1){
let row=$q_a_ekqxbbrg[ri];
$vnode_2=[];
for(let $q_a_agsbicfv=row.cols,$q_c_tumzfzp=$q_a_agsbicfv.length,ci=0;ci<$q_c_tumzfzp;ci+=1){
let col=$q_a_agsbicfv[ci];
$vnode_3=[];$vnode_4=[];
for(let $q_a_zqtmxbf=col.elements,$q_c_xif=$q_a_zqtmxbf.length,$q_key_kpazcok=0;$q_key_kpazcok<$q_c_xif;$q_key_kpazcok+=1){
let e=$q_a_zqtmxbf[$q_key_kpazcok];
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,fs,unit','class': 'rd-iz','id': (e.id),'mx5-view': '5m/'+(e.type)+'/designer?element='+$keyOf($refData,e,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_kpazcok)+'.eG')+'&fs='+$keyOf($refData,fs,'eH')+'&ownerId=_rd_h_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&maskId=_rd_hm_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&unit='+$keyOf($refData,unit,'eI'),'mx5-pointerdown': $viewId+'1_jw({element:\''+$keyOf($refData,e,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_kpazcok)+'.eG')+'\',maskId:\'_rd_hm_'+($encodeQuote(element.id))+'_'+($encodeQuote(ri))+'_'+($encodeQuote(ci))+'\'})',}));
}$vnode_3.push($createVNode('div',{'class': 'rd-gN rd-gO rd-gW rd-h0','data-as': 'hod','mx5-contextmenu': $viewId+'_km({row:'+(ri)+',col:'+(ci)+'})','id': '_rd_hm_'+(element.id)+'_'+(ri)+'_'+(ci),},$vnode_4));
if(!fs&&!props.locked){
let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_4=[];
if(focusCurrentCell&&!grouped){
$text='';let height=(min(26,toPx(row.height)-2)-4);;$text+=' ';let width=(min(26,toPx(col.width)-2)-4);;$text+=' ';let top=(toPx(row.height)-height)/2-2;;$text+=' ';let left=(toPx(col.width)-width)/2-2;;$vnode_4.push($createVNode('div',{'class': 'rd-gV rd-gY rd-hF rd-iz','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('i2')),'mx5-pointerdown': $viewId+'1_ks({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-gV rd-gY rd-hG rd-iz','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('i2')),'mx5-pointerdown': $viewId+'1_ks({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-gV rd-gY rd-hH rd-iz','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('i3')),'mx5-pointerdown': $viewId+'1_ks({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-gV rd-gY rd-hI rd-iz','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('i3')),'mx5-pointerdown': $viewId+'1_ks({key:\'tm\'})',}));
};$$_class='rd-gV rd-hJ rd-ig rd-gX';if(focusCurrentCell){;$$_class+=' rd-hE';};$$_style='';if(focusCurrentCell){;$$_style+='border-top-style:'+(col.borderTopStyle)+';border-right-style:'+(col.borderRightStyle)+';border-bottom-style:'+(col.borderBottomStyle)+';border-left-style:'+(col.borderLeftStyle);};$vnode_3.push($createVNode('div',{'id': '_rd_dm_'+(element.id)+'_'+(ri)+'_'+(ci),'class': $$_class,'style': $$_style,},$vnode_4));
}
if(!props.readonly && !fs && col.elements && col.elements.length){
$vnode_4=[$quick_gz_static_text||($quick_gz_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-gM rd-gV rd-ge rd-h5 rd-hW rd-hw rd-ib rd-ig rd-it rd-iu','title': (i18n('js')),},$vnode_4));
}
if(selectRect&&srRow==ri&&srCol==ci){
$vnode_3.push($createVNode('div',{'class': 'rd-gV rd-gX rd-ie','style': 'display:block;left:'+(selectRect.x)+'px;top:'+(selectRect.y)+'px;width:'+(selectRect.width)+'px;height:'+(selectRect.height)+'px',}));
};$$_style='position:relative;height:'+(row.height)+(unit)+';width:'+(col.width)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor)+';border-radius:'+(col.borderLeftTopRadius)+(unit)+' '+(col.borderRightTopRadius)+(unit)+' '+(col.borderRightBottomRadius)+(unit)+' '+(col.borderLeftBottomRadius)+(unit)+';';if(selectRect&&srRow==ri&&srCol==ci){;$$_style+='overflow:hidden';};$vnode_2.push($createVNode('div',{'mx5-pointerdown': $viewId+'_kf({row:'+(ri)+',col:'+(ci)+',elm:1})','id': '_rd_h_'+(element.id)+'_'+(ri)+'_'+(ci),'class': 'rd-iz','style': $$_style,},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_hc_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-g9 rd-gV rd-h_ rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

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
    },
}).merge(index_1, hodbase_1, hodflex_1);

});