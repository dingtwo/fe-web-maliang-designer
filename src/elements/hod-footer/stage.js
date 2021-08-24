/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/hod-footer/stage",["51"],(require,exports,module)=>{
let $quick_h__0_static_attr={'class': 'rd-g9',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let { State, View, LOW } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	stage,}=$dataFromView,
$$_style,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];
for(let $q_a_fhrdcgrs=props.rows,$q_c_wpptgxyahh=$q_a_fhrdcgrs.length,ri=0;ri<$q_c_wpptgxyahh;ri+=1){
let row=$q_a_fhrdcgrs[ri];
$vnode_2=[];
for(let $q_a_ipqpoisax=row.cols,$q_c_dlqnqmyn=$q_a_ipqpoisax.length,ci=0;ci<$q_c_dlqnqmyn;ci+=1){
let col=$q_a_ipqpoisax[ci];
$vnode_3=[];
for(let $q_a_sazwocmvl=col.elements,$q_c_itrujxiefv=$q_a_sazwocmvl.length,$q_key_odhgtbzxy=0;$q_key_odhgtbzxy<$q_c_itrujxiefv;$q_key_odhgtbzxy+=1){
let e=$q_a_sazwocmvl[$q_key_odhgtbzxy];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','mx5-view': '5m/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_odhgtbzxy)+'.eG')+'&unit='+$keyOf($refData,unit,'eH'),}));
}$vnode_2.push($createVNode('div',{'class': 'rd-gN rd-gO rd-gW rd-h0','style': 'height:'+(row.height)+(unit)+';width:'+(col.width)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor)+';border-radius:'+(col.borderLeftTopRadius)+(unit)+' '+(col.borderRightTopRadius)+(unit)+' '+(col.borderRightBottomRadius)+(unit)+' '+(col.borderLeftBottomRadius)+(unit),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_h__0_static_attr,$vnode_2));
};$$_style='left:'+(props.x)+(unit)+';';if(stage){;$$_style+='bottom:0;';}else{;$$_style+='top:'+(props.y)+(unit)+';';};$$_style+='opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit);$vnode_0=[$createVNode('div',{'class': 'rd-g9 rd-gV rd-h_ rd-ig','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_gn'](e => {
            let props = this.get('props');
            this.digest({
                props
            });
        });
        State.on('gf', update, LOW);
        this.on('destroy', () => {
            State.off('gf', update);
        });
    },
    assign(data) {
        this.set(data);
        this.set({
            stage: 1
        });
    },
    render() {
        this.digest();
    }
});

});