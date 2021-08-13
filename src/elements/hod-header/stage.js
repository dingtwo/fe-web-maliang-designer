/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/hod-header/stage",["5c"],(require,exports,module)=>{
let $quick_m0_0_static_attr={'class': 'rd-mX',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
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
for(let $q_a_qalczwe=props.rows,$q_c_usmexut=$q_a_qalczwe.length,ri=0;ri<$q_c_usmexut;ri+=1){
let row=$q_a_qalczwe[ri];
$vnode_2=[];
for(let $q_a_mroy=row.cols,$q_c_nasgetoc=$q_a_mroy.length,ci=0;ci<$q_c_nasgetoc;ci+=1){
let col=$q_a_mroy[ci];
$vnode_3=[];
for(let $q_a_qwojpmc=col.elements,$q_c_ntybfvtqfbc=$q_a_qwojpmc.length,$q_key_vxbdrmwwho=0;$q_key_vxbdrmwwho<$q_c_ntybfvtqfbc;$q_key_vxbdrmwwho+=1){
let e=$q_a_qwojpmc[$q_key_vxbdrmwwho];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','mx5-view': '61/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_vxbdrmwwho)+'.i^')+'&unit='+$keyOf($refData,unit,'i*'),}));
}$vnode_2.push($createVNode('div',{'class': 'rd-mB rd-mC rd-mK rd-nO','style': 'height:'+(row.height)+(unit)+';width:'+(col.width)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor)+';border-radius:'+(col.borderLeftTopRadius)+(unit)+' '+(col.borderRightTopRadius)+(unit)+' '+(col.borderRightBottomRadius)+(unit)+' '+(col.borderLeftBottomRadius)+(unit),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_m0_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-mX rd-mY rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_mb'](e => {
            let props = this.get('props');
            this.digest({
                props
            });
        });
        State.on('l4', update, LOW);
        this.on('destroy', () => {
            State.off('l4', update);
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