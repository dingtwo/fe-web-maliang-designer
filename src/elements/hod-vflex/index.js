/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/hod-vflex/index",["5c"],(require,exports,module)=>{
let $quick_m6_0_static_attr={'class': 'rd-mX rd-mY',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];
for(let $q_a_sdeoybvqii=props.rows,$q_c_mngjfwvvx=$q_a_sdeoybvqii.length,ri=0;ri<$q_c_mngjfwvvx;ri+=1){
let row=$q_a_sdeoybvqii[ri];
$vnode_2=[];
for(let $q_a_wsudzaxo=row.cols,$q_c_gksyyjml=$q_a_wsudzaxo.length,ci=0;ci<$q_c_gksyyjml;ci+=1){
let col=$q_a_wsudzaxo[ci];
$vnode_3=[];
for(let $q_a_weuv=col.elements,$q_c_gzlsndln=$q_a_weuv.length,$q_key_fmbsrlavku=0;$q_key_fmbsrlavku<$q_c_gzlsndln;$q_key_fmbsrlavku+=1){
let e=$q_a_weuv[$q_key_fmbsrlavku];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','mx5-view': '61/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_fmbsrlavku)+'.i^')+'&unit='+$keyOf($refData,unit,'i*'),}));
}$vnode_2.push($createVNode('div',{'class': 'rd-mB rd-mC rd-mK rd-nO','style': 'width:'+(row.width)+(unit)+';height:'+(col.height)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_m6_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-mX rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});