/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/hod-table/index",["magix5"],(require,exports,module)=>{
let $quick_g2_0_static_attr={'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pr rd-_assets_index_less_-wp100',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
($__line=2,$__art='{{set {borderwidth,bordertype,bordercolor,borderdeed,rows}=props}}','');$__ctrl='<%let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows;%>';let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows;;$vnode_3=[];$__line=5;$__art="{{each rows as row ri}}";$__ctrl="for(let $q_c_uxmfyxo=rows.length,ri=0;ri<$q_c_uxmfyxo;ri++){let row=rows[ri];";
for(let $q_c_uxmfyxo=rows.length,ri=0;ri<$q_c_uxmfyxo;ri+=1){
let row=rows[ri];
$vnode_4=[];$__line=7;$__art="{{each row.cols as col ci}}";$__ctrl="for(let $q_a_bepdzptm=row.cols,$q_c_urxboe=$q_a_bepdzptm.length,ci=0;ci<$q_c_urxboe;ci++){let col=$q_a_bepdzptm[ci];";
for(let $q_a_bepdzptm=row.cols,$q_c_urxboe=$q_a_bepdzptm.length,ci=0;ci<$q_c_urxboe;ci+=1){
let col=$q_a_bepdzptm[ci];
$vnode_6=[];$__line=10;$__art="{{each col.elements as e}}";$__ctrl="for(let $q_a_obzilaaoe=col.elements,$q_c_gwodba=$q_a_obzilaaoe.length,$q_key_mefpblkm=0;$q_key_mefpblkm<$q_c_gwodba;$q_key_mefpblkm++){let e=$q_a_obzilaaoe[$q_key_mefpblkm];";
for(let $q_a_obzilaaoe=col.elements,$q_c_gwodba=$q_a_obzilaaoe.length,$q_key_mefpblkm=0;$q_key_mefpblkm<$q_c_gwodba;$q_key_mefpblkm+=1){
let e=$q_a_obzilaaoe[$q_key_mefpblkm];
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','id': ($__line=11,$__art='{{=e.id}}',$__ctrl='<%=e.id%>',(e.id)),'mx5-view': 'elements/'+($__line=11,$__art='{{=e.type}}',$__ctrl='<%=e.type%>',(e.type))+'/index?props='+($__line=11,$__art='{{#e.props}}',$__ctrl='<%#e.props,\'auto_key_props.rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+($q_key_mefpblkm)+\'.e.props\'%>',$keyOf($refData,e.props,'auto_key_props.rows.'+(ri)+'.cols.'+(ci)+'.elements.'+($q_key_mefpblkm)+'.e.props'))+'&unit='+($__line=11,$__art='{{#unit}}',$__ctrl='<%#unit,\'auto_key_unit\'%>',$keyOf($refData,unit,'auto_key_unit')),}));
}$vnode_5=[$createVNode('div',$quick_g2_0_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-_assets_index_less_-table-cell rd-_assets_index_less_-word-break-break-all','colspan': (($__line=8,$__art='{{=col.colspan!=1}}',$__ctrl='<%=col.colspan!=1%>',col.colspan!=1))&&(($__line=8,$__art='{{=col.colspan}}',$__ctrl='<%=col.colspan%>',(col.colspan))),'rowspan': (($__line=8,$__art='{{=col.rowspan!=1}}',$__ctrl='<%=col.rowspan!=1%>',col.rowspan!=1))&&(($__line=8,$__art='{{=col.rowspan}}',$__ctrl='<%=col.rowspan%>',(col.rowspan))),'style': 'position:relative;width:'+($__line=8,$__art='{{=col.width}}',$__ctrl='<%=col.width%>',(col.width))+($__line=8,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=8,$__art='{{=col.height}}',$__ctrl='<%=col.height%>',(col.height))+($__line=8,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';border-left:'+($__line=8,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=8,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=8,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=8,$__art='{{=borderwidth&&col.bLeft?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bLeft?bordercolor:\'#0000\'%>',(borderwidth&&col.bLeft?bordercolor:'#0000'))+';border-top:'+($__line=8,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=8,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=8,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=8,$__art='{{=borderwidth&&col.bTop?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bTop?bordercolor:\'#0000\'%>',(borderwidth&&col.bTop?bordercolor:'#0000'))+';border-right:'+($__line=8,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=8,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=8,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=8,$__art='{{=borderwidth&&col.bRight?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bRight?bordercolor:\'#0000\'%>',(borderwidth&&col.bRight?bordercolor:'#0000'))+';border-bottom:'+($__line=8,$__art='{{=borderwidth?bordertype:\'dotted\'}}',$__ctrl='<%=borderwidth?bordertype:\'dotted\'%>',(borderwidth?bordertype:'dotted'))+' '+($__line=8,$__art='{{=borderwidth}}',$__ctrl='<%=borderwidth%>',(borderwidth))+($__line=8,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=8,$__art='{{=borderwidth&&col.bBottom?bordercolor:\'#0000\'}}',$__ctrl='<%=borderwidth&&col.bBottom?bordercolor:\'#0000\'%>',(borderwidth&&col.bBottom?bordercolor:'#0000')),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-_assets_index_less_-table rd-_assets_index_less_-wp100','style': 'border-collapse:'+($__line=3,$__art='{{=borderdeed}}',$__ctrl='<%=borderdeed%>',(borderdeed)),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/hod-table/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});