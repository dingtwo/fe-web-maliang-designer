/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/hod-table/index",["4e"],(require,exports,module)=>{
let $quick_eG_0_static_attr={'class': 'rd-ed rd-ee rd-em rd-fq',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
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
for(let $q_c_ftvinrgs=rows.length,ri=0;ri<$q_c_ftvinrgs;ri+=1){
let row=rows[ri];
$vnode_4=[];
for(let $q_a_xksgeqz=row.cols,$q_c_hngbikih=$q_a_xksgeqz.length,ci=0;ci<$q_c_hngbikih;ci+=1){
let col=$q_a_xksgeqz[ci];
$vnode_6=[];
for(let $q_a_lovxfbnlhm=col.elements,$q_c_scxbpmqs=$q_a_lovxfbnlhm.length,$q_key_ifvqvytb=0;$q_key_ifvqvytb<$q_c_scxbpmqs;$q_key_ifvqvytb+=1){
let e=$q_a_lovxfbnlhm[$q_key_ifvqvytb];
$vnode_6.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','id': (e.id),'mx5-view': '53/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+($q_key_ifvqvytb)+'.cK')+'&unit='+$keyOf($refData,unit,'cL'),}));
}$vnode_5=[$createVNode('div',$quick_eG_0_static_attr,$vnode_6)];$vnode_4.push($createVNode('td',{'class': 'rd-e0 rd-e2','colspan': ((col.colspan!=1))&&((col.colspan)),'rowspan': ((col.rowspan!=1))&&((col.rowspan)),'style': 'position:relative;width:'+(col.width)+(unit)+';height:'+(col.height)+(unit)+';border-left:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bLeft?bordercolor:'#0000')+';border-top:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bTop?bordercolor:'#0000')+';border-right:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bRight?bordercolor:'#0000')+';border-bottom:'+(borderwidth?bordertype:'dotted')+' '+(borderwidth)+(unit)+' '+(borderwidth&&col.bBottom?bordercolor:'#0000'),},$vnode_5));
}$vnode_3.push($createVNode('tr',0,$vnode_4));
}$vnode_2=[$createVNode('tbody',0,$vnode_3)];$vnode_1=[$createVNode('table',{'class': 'rd-e1 rd-ed','style': 'border-collapse:'+(borderdeed),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-el rd-fH','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});