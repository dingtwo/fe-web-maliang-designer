/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/hod-hflex/index",["5c"],(require,exports,module)=>{
let $quick_m2_0_static_attr={'class': 'rd-mX',};

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
for(let $q_a_kyjnxlhto=props.rows,$q_c_cthpgiwmpq=$q_a_kyjnxlhto.length,ri=0;ri<$q_c_cthpgiwmpq;ri+=1){
let row=$q_a_kyjnxlhto[ri];
$vnode_2=[];
for(let $q_a_tbjwbolza=row.cols,$q_c_qjvpuzq=$q_a_tbjwbolza.length,ci=0;ci<$q_c_qjvpuzq;ci+=1){
let col=$q_a_tbjwbolza[ci];
$vnode_3=[];
for(let $q_a_tpgkne=col.elements,$q_c_tvxbembg=$q_a_tpgkne.length,$q_key_wlhtqpe=0;$q_key_wlhtqpe<$q_c_tvxbembg;$q_key_wlhtqpe+=1){
let e=$q_a_tpgkne[$q_key_wlhtqpe];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','mx5-view': '61/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_wlhtqpe)+'.i^')+'&unit='+$keyOf($refData,unit,'i*'),}));
}$vnode_2.push($createVNode('div',{'class': 'rd-mB rd-mC rd-mK rd-nO','style': 'height:'+(row.height)+(unit)+';width:'+(col.width)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor)+';border-radius:'+(col.borderLeftTopRadius)+(unit)+' '+(col.borderRightTopRadius)+(unit)+' '+(col.borderRightBottomRadius)+(unit)+' '+(col.borderLeftBottomRadius)+(unit),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_m2_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-mX rd-mY rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});