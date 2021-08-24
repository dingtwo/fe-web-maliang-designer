/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/hod-header/stage",["51"],(require,exports,module)=>{
let $quick_hb_0_static_attr={'class': 'rd-g9',};

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
	unit,}=$dataFromView,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];
for(let $q_a_miunfrwtg=props.rows,$q_c_zmeecyyq=$q_a_miunfrwtg.length,ri=0;ri<$q_c_zmeecyyq;ri+=1){
let row=$q_a_miunfrwtg[ri];
$vnode_2=[];
for(let $q_a_kdcfbituro=row.cols,$q_c_lecrdy=$q_a_kdcfbituro.length,ci=0;ci<$q_c_lecrdy;ci+=1){
let col=$q_a_kdcfbituro[ci];
$vnode_3=[];
for(let $q_a_owqsoih=col.elements,$q_c_nbaorny=$q_a_owqsoih.length,$q_key_tndpvbzzg=0;$q_key_tndpvbzzg<$q_c_nbaorny;$q_key_tndpvbzzg+=1){
let e=$q_a_owqsoih[$q_key_tndpvbzzg];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','mx5-view': '5m/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+($q_key_tndpvbzzg)+'.eG')+'&unit='+$keyOf($refData,unit,'eH'),}));
}$vnode_2.push($createVNode('div',{'class': 'rd-gN rd-gO rd-gW rd-h0','style': 'height:'+(row.height)+(unit)+';width:'+(col.width)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor)+';border-radius:'+(col.borderLeftTopRadius)+(unit)+' '+(col.borderRightTopRadius)+(unit)+' '+(col.borderRightBottomRadius)+(unit)+' '+(col.borderLeftBottomRadius)+(unit),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_hb_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-g9 rd-gV rd-h_ rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

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
    },
    render() {
        this.digest();
    }
});

});