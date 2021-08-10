/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/data-repeater/dshow",["4e","../../4d/4g","../../4l/4m/index","../../4t/hodbase","../../4t/hodflex"],(require,exports,module)=>{
let $quick_d0_static_text;
let $quick_en_0_static_attr={'class': 'rd-ez',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let index_1 = require("../../4l/4m/index");
let hodbase_1 = require("../../4t/hodbase");
let hodflex_1 = require("../../4t/hodflex");
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
for(let $q_a_bvxxkcun=props.rows,$q_c_kvazrlzhj=$q_a_bvxxkcun.length,ri=0;ri<$q_c_kvazrlzhj;ri+=1){
let row=$q_a_bvxxkcun[ri];
$vnode_2=[];
for(let $q_a_vbvxgvds=row.cols,$q_c_jcpykd=$q_a_vbvxgvds.length,ci=0;ci<$q_c_jcpykd;ci+=1){
let col=$q_a_vbvxgvds[ci];
$vnode_3=[];$vnode_4=[];
for(let $q_a_knliaycf=col.elements,$q_c_okainhic=$q_a_knliaycf.length,$q_key_eewlxumi=0;$q_key_eewlxumi<$q_c_okainhic;$q_key_eewlxumi+=1){
let e=$q_a_knliaycf[$q_key_eewlxumi];
$vnode_4.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,fs,unit','class': 'rd-f0','id': (e.id),'mx5-view': '53/'+(e.type)+'/designer?element='+$keyOf($refData,e,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+($q_key_eewlxumi)+'.cK')+'&fs='+$keyOf($refData,fs,'cL')+'&ownerId=_rd_h_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&maskId=_rd_hm_'+($encodeUrl(element.id))+'_'+($encodeUrl(ri))+'_'+($encodeUrl(ci))+'&unit='+$keyOf($refData,unit,'cM'),'mx5-pointerdown': $viewId+'1_gU({element:\''+$keyOf($refData,e,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+($q_key_eewlxumi)+'.cK')+'\',maskId:\'_rd_hm_'+($encodeQuote(element.id))+'_'+($encodeQuote(ri))+'_'+($encodeQuote(ci))+'\'})',}));
}$vnode_3.push($createVNode('div',{'class': 'rd-ed rd-ee rd-em rd-fq','data-as': 'hod','mx5-contextmenu': $viewId+'_hK({row:'+(ri)+',col:'+(ci)+'})','id': '_rd_hm_'+(element.id)+'_'+(ri)+'_'+(ci),},$vnode_4));
if(!fs&&!props.locked){
let focusCurrentCell=props.focusRow==ri&&props.focusCol==ci&&selected&&count==1;;$vnode_4=[];
if(focusCurrentCell&&!grouped){
$text='';let height=(min(26,toPx(row.height)-2)-4);;$text+=' ';let width=(min(26,toPx(col.width)-2)-4);;$text+=' ';let top=(toPx(row.height)-height)/2-2;;$text+=' ';let left=(toPx(col.width)-width)/2-2;;$vnode_4.push($createVNode('div',{'class': 'rd-e6 rd-el rd-eo rd-f0','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('gt')),'mx5-pointerdown': $viewId+'1_hQ({key:\'mr\'})',}),$createVNode('div',{'class': 'rd-e7 rd-el rd-eo rd-f0','style': 'height:'+(max(height,0))+'px;top:'+(top)+'px;cursor:ew-resize','title': (i18n('gt')),'mx5-pointerdown': $viewId+'1_hQ({key:\'ml\'})',}),$createVNode('div',{'class': 'rd-e8 rd-el rd-eo rd-f0','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('gu')),'mx5-pointerdown': $viewId+'1_hQ({key:\'bm\'})',}),$createVNode('div',{'class': 'rd-e9 rd-el rd-eo rd-f0','style': 'width:'+(max(width,0))+'px;left:'+(left)+'px;cursor:ns-resize','title': (i18n('gu')),'mx5-pointerdown': $viewId+'1_hQ({key:\'tm\'})',}));
};$$_class='rd-el rd-f_ rd-fH rd-en';if(focusCurrentCell){;$$_class+=' rd-e5';};$$_style='';if(focusCurrentCell){;$$_style+='border-top-style:'+(col.borderTopStyle)+';border-right-style:'+(col.borderRightStyle)+';border-bottom-style:'+(col.borderBottomStyle)+';border-left-style:'+(col.borderLeftStyle);};$vnode_3.push($createVNode('div',{'id': '_rd_dm_'+(element.id)+'_'+(ri)+'_'+(ci),'class': $$_class,'style': $$_style,},$vnode_4));
}
if(!props.readonly && !fs && col.elements && col.elements.length){
$vnode_4=[$quick_d0_static_text||($quick_d0_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-dF rd-eX rd-ec rd-el rd-fC rd-fH rd-fU rd-fV rd-fm rd-fv','title': (i18n('gU')),},$vnode_4));
}
if(selectRect&&srRow==ri&&srCol==ci){
$vnode_3.push($createVNode('div',{'class': 'rd-el rd-en rd-fF','style': 'display:block;left:'+(selectRect.x)+'px;top:'+(selectRect.y)+'px;width:'+(selectRect.width)+'px;height:'+(selectRect.height)+'px',}));
};$$_style='position:relative;height:'+(row.height)+(unit)+';width:'+(col.width)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor)+';border-radius:'+(col.borderLeftTopRadius)+(unit)+' '+(col.borderRightTopRadius)+(unit)+' '+(col.borderRightBottomRadius)+(unit)+' '+(col.borderLeftBottomRadius)+(unit)+';';if(selectRect&&srRow==ri&&srCol==ci){;$$_style+='overflow:hidden';};$vnode_2.push($createVNode('div',{'mx5-pointerdown': $viewId+'_hD({row:'+(ri)+',col:'+(ci)+',elm:1})','id': '_rd_h_'+(element.id)+'_'+(ri)+'_'+(ci),'class': 'rd-f0','style': $$_style,},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_en_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-eA rd-el rd-ez rd-fH','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            toPx: const_1['eo'],
            toUnit: const_1['dF'],
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