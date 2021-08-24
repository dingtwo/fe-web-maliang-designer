/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/hod-table/index",["51"],(require,exports,module)=>{
let $quick_hf_0_static_attr={'class': 'rd-gN rd-gO rd-gW rd-h0',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_6,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
let borderwidth=props.borderwidth,bordertype=props.bordertype,bordercolor=props.bordercolor,borderdeed=props.borderdeed,rows=props.rows;;$vnode_3=[];
for(let $q_c_nxvazs=rows.length,ri=0;ri<$q_c_nxvazs;ri+=1){
let row=rows[ri];
$vnode_4=[];
for(let $q_a_jeszomdl=row.cols,$q_c_ysyoyrbnj=$q_a_jeszomdl.length,ci=0;ci<$q_c_ysyoyrbnj;ci+=1){
let col=$q_a_jeszomdl[ci];
$vnode_6=[];
for(let $q_a_qfeorng=col.elements,$q_c_xvfonega=$q_a_qfeorng.length,$q_key_tvlzeiy=0;$q_key_tvlzeiy<$q_c_xvfonega;$q_key_tvlzeiy+=1){
let e=$q_a_qfeorng[$q_key_tvlzeiy];
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','id': (e.id),'mx5-view': '5m/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_tvlzeiy)+'.eG')+'&unit='+$keyOf($refData,unit,'eH'),}));
}$vnode_5=[$createVNode('div',$quick_hf_0_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-hB rd-hz','colspan': ((col.colspan!=1))&&((col.colspan)),'rowspan': ((col.rowspan!=1))&&((col.rowspan)),'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#0000')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#0000')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#0000')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#0000'),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-gN rd-hA','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});