/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/hod-vflex/index",["51"],(require,exports,module)=>{
let $quick_hh_0_static_attr={'class': 'rd-g9 rd-h_',};

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
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];
for(let $q_a_pshtopdyor=props.rows,$q_c_ncsasxgd=$q_a_pshtopdyor.length,ri=0;ri<$q_c_ncsasxgd;ri+=1){
let row=$q_a_pshtopdyor[ri];
$vnode_2=[];
for(let $q_a_ainubf=row.cols,$q_c_nhmbehsus=$q_a_ainubf.length,ci=0;ci<$q_c_nhmbehsus;ci+=1){
let col=$q_a_ainubf[ci];
$vnode_3=[];
for(let $q_a_sivaj=col.elements,$q_c_shxrzc=$q_a_sivaj.length,$q_key_fixllifadw=0;$q_key_fixllifadw<$q_c_shxrzc;$q_key_fixllifadw+=1){
let e=$q_a_sivaj[$q_key_fixllifadw];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','mx5-view': '5m/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_fixllifadw)+'.eG')+'&unit='+$keyOf($refData,unit,'eH'),}));
}$vnode_2.push($createVNode('div',{'class': 'rd-gN rd-gO rd-gW rd-h0','style': 'width:'+(row.width)+(unit)+';height:'+(col.height)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_hh_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-g9 rd-gV rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});