/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/hod-vflex/dshow",["5c","../../5b/5e","../../5j/5k/index","../../5r/hodbase","../../5r/hodflex"],(require,exports,module)=>{
let $quick_mn_static_text;
let $quick_m5_0_static_attr={'class': 'rd-mX rd-mY',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let index_1 = require("../../5j/5k/index");
let hodbase_1 = require("../../5r/hodbase");
let hodflex_1 = require("../../5r/hodflex");
let { View, State } = magix_1;
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
for(let $q_a_exmpvqepk=props.rows,$q_c_fvyuzxiwl=$q_a_exmpvqepk.length,ri=0;ri<$q_c_fvyuzxiwl;ri+=1){
let row=$q_a_exmpvqepk[ri];
$vnode_2=[];
for(let $q_a_xepjixi=row.cols,$q_c_dfdkoekan=$q_a_xepjixi.length,ci=0;ci<$q_c_dfdkoekan;ci+=1){
let col=$q_a_xepjixi[ci];
$vnode_3=[];$vnode_4=[];
for(let $q_a_krfpnctt=col.elements,$q_c_cvvqkylhai=$q_a_krfpnctt.length,$q_key_agmnscdif=0;$q_key_agmnscdif<$q_c_cvvqkylhai;$q_key_agmnscdif+=1){
let e=$q_a_krfpnctt[$q_key_agmnscdif];
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,fs,unit','class': 'rd-on','id': (e.id),'mx5-view': '61/'+(e.type)+'/designer?element='+$keyOf($refData,e,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_agmnscdif)+'.i^')+'&fs='+$keyOf($refData,fs,'i*')+'&ownerId=_rd_h_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&maskId=_rd_hm_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&unit='+$keyOf($refData,unit,'i{'),'mx5-pointerdown': $viewId+'1_ph({element:\''+$keyOf($refData,e,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_agmnscdif)+'.i^')+'\',maskId:\'_rd_hm_'+($encodeQuote(element.id))+'_'+($encodeQuote(ri))+'_'+($encodeQuote(ci))+'\'})',}));
}$vnode_3.push($createVNode('div',{'class': 'rd-mB rd-mC rd-mK rd-nO','data-as': 'hod','mx5-contextmenu': $viewId+'_p8({row:'+(ri)+',col:'+(ci)+'})','id': '_rd_hm_'+(element.id)+'_'+(ri)+'_'+(ci),},$vnode_4));
if(!fs&&!props.locked){
let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_4=[];
if(focusCurrentCell&&!grouped){
$text='';let height=(min(26,toPx(col.height)-2)-4);;$text+=' ';let width=(min(26,toPx(row.width)-2)-4);;$text+=' ';let top=(toPx(col.height)-height)/2-2;;$text+=' ';let left=(toPx(row.width)-width)/2-2;;$vnode_4.push($createVNode('div',{'class': 'rd-mJ rd-mM rd-nt rd-on','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('oR')),'mx5-pointerdown': $viewId+'1_qd({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-mJ rd-mM rd-nu rd-on','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('oR')),'mx5-pointerdown': $viewId+'1_qd({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-mJ rd-mM rd-nv rd-on','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('oS')),'mx5-pointerdown': $viewId+'1_qd({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-mJ rd-mM rd-nw rd-on','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('oS')),'mx5-pointerdown': $viewId+'1_qd({key:\'tm\'})',}));
};$$_class='rd-mJ rd-nx rd-n5 rd-mL';if(focusCurrentCell){;$$_class+=' rd-ns';};$$_style='';if(focusCurrentCell){;$$_style+='border-top-style:'+(col.borderTopStyle)+';border-right-style:'+(col.borderRightStyle)+';border-bottom-style:'+(col.borderBottomStyle)+';border-left-style:'+(col.borderLeftStyle);};$vnode_3.push($createVNode('div',{'id': '_rd_dm_'+(element.id)+'_'+(ri)+'_'+(ci),'class': $$_class,'style': $$_style,},$vnode_4));
}
if(!props.readonly && !fs && col.elements && col.elements.length){
$vnode_4=[$quick_mn_static_text||($quick_mn_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-l3 rd-mA rd-mJ rd-n0 rd-n5 rd-nK rd-nT rd-nk rd-oh rd-oi','title': (i18n('ph')),},$vnode_4));
}
if(selectRect && srRow==ri && srCol==ci){
$vnode_3.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-n3','style': 'display:block;left:'+(selectRect.x)+'px;top:'+(selectRect.y)+'px;width:'+(selectRect.width)+'px;height:'+(selectRect.height)+'px',}));
};$$_style='position:relative;width:'+(row.width)+(unit)+';height:'+(col.height)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor)+';border-radius:'+(col.borderLeftTopRadius)+(unit)+' '+(col.borderRightTopRadius)+(unit)+' '+(col.borderRightBottomRadius)+(unit)+' '+(col.borderLeftBottomRadius)+(unit)+';';if(selectRect&&srRow==ri&&srCol==ci){;$$_style+='overflow:hidden';};$vnode_2.push($createVNode('div',{'mx5-pointerdown': $viewId+'_p1({row:'+(ri)+',col:'+(ci)+',elm:1})','id': '_rd_h_'+(element.id)+'_'+(ri)+'_'+(ci),'class': 'rd-on','style': $$_style,},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_m5_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-mX rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

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
    },
}).merge(index_1, hodbase_1, hodflex_1);

});