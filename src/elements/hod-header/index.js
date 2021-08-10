/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/hod-header/index",["4e"],(require,exports,module)=>{
let $quick_eC_0_static_attr={'class': 'rd-ez',};

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
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];
for(let $q_a_kwxxywm=props.rows,$q_c_dvrrbdd=$q_a_kwxxywm.length,ri=0;ri<$q_c_dvrrbdd;ri+=1){
let row=$q_a_kwxxywm[ri];
$vnode_2=[];
for(let $q_a_hfyjcuqysh=row.cols,$q_c_hhrcpdyg=$q_a_hfyjcuqysh.length,ci=0;ci<$q_c_hhrcpdyg;ci+=1){
let col=$q_a_hfyjcuqysh[ci];
$vnode_3=[];
for(let $q_a_dbacvbwc=col.elements,$q_c_gjynxld=$q_a_dbacvbwc.length,$q_key_fvqbkj=0;$q_key_fvqbkj<$q_c_gjynxld;$q_key_fvqbkj+=1){
let e=$q_a_dbacvbwc[$q_key_fvqbkj];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','mx5-view': '53/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+($q_key_fvqbkj)+'.cK')+'&unit='+$keyOf($refData,unit,'cL'),}));
}$vnode_2.push($createVNode('div',{'class': 'rd-ed rd-ee rd-em rd-fq','style': 'height:'+(row.height)+(unit)+';width:'+(col.width)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor)+';border-radius:'+(col.borderLeftTopRadius)+(unit)+' '+(col.borderRightTopRadius)+(unit)+' '+(col.borderRightBottomRadius)+(unit)+' '+(col.borderLeftBottomRadius)+(unit),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_eC_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-eA rd-el rd-ez rd-fH','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});