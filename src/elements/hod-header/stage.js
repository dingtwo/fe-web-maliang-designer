/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/hod-header/stage",["4e"],(require,exports,module)=>{
let $quick_eC_0_static_attr={'class': 'rd-ez',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
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
for(let $q_a_qejjlyc=props.rows,$q_c_pxqvzasx=$q_a_qejjlyc.length,ri=0;ri<$q_c_pxqvzasx;ri+=1){
let row=$q_a_qejjlyc[ri];
$vnode_2=[];
for(let $q_a_dwstemo=row.cols,$q_c_hyrpedjs=$q_a_dwstemo.length,ci=0;ci<$q_c_hyrpedjs;ci+=1){
let col=$q_a_dwstemo[ci];
$vnode_3=[];
for(let $q_a_hgpnzzfst=col.elements,$q_c_mulsnsa=$q_a_hgpnzzfst.length,$q_key_zovjzbsd=0;$q_key_zovjzbsd<$q_c_mulsnsa;$q_key_zovjzbsd+=1){
let e=$q_a_hgpnzzfst[$q_key_zovjzbsd];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','mx5-view': '53/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+($q_key_zovjzbsd)+'.cK')+'&unit='+$keyOf($refData,unit,'cL'),}));
}$vnode_2.push($createVNode('div',{'class': 'rd-ed rd-ee rd-em rd-fq','style': 'height:'+(row.height)+(unit)+';width:'+(col.width)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor)+';border-radius:'+(col.borderLeftTopRadius)+(unit)+' '+(col.borderRightTopRadius)+(unit)+' '+(col.borderRightBottomRadius)+(unit)+' '+(col.borderLeftBottomRadius)+(unit),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_eC_0_static_attr,$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-eA rd-el rd-ez rd-fH','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_dO'](e => {
            let props = this.get('props');
            this.digest({
                props
            });
        });
        State.on('dG', update, LOW);
        this.on('destroy', () => {
            State.off('dG', update);
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