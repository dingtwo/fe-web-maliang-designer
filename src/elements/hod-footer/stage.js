/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/hod-footer/stage",["5c"],(require,exports,module)=>{
let $quick_mY_0_static_attr={'class': 'rd-mX',};

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
	unit,
	stage,}=$dataFromView,
$$_style,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];
for(let $q_a_pbrdbsjlh=props.rows,$q_c_tsxjzkdc=$q_a_pbrdbsjlh.length,ri=0;ri<$q_c_tsxjzkdc;ri+=1){
let row=$q_a_pbrdbsjlh[ri];
$vnode_2=[];
for(let $q_a_pajxi=row.cols,$q_c_nkistlzifw=$q_a_pajxi.length,ci=0;ci<$q_c_nkistlzifw;ci+=1){
let col=$q_a_pajxi[ci];
$vnode_3=[];
for(let $q_a_crljgok=col.elements,$q_c_wgywfs=$q_a_crljgok.length,$q_key_wuttamo=0;$q_key_wuttamo<$q_c_wgywfs;$q_key_wuttamo+=1){
let e=$q_a_crljgok[$q_key_wuttamo];
$vnode_3.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,unit','mx5-view': '61/'+(e.type)+'/index?props='+$keyOf($refData,e.props,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+($q_key_wuttamo)+'.i^')+'&unit='+$keyOf($refData,unit,'i*'),}));
}$vnode_2.push($createVNode('div',{'class': 'rd-mB rd-mC rd-mK rd-nO','style': 'height:'+(row.height)+(unit)+';width:'+(col.width)+(unit)+';border-top:'+(col.borderTopStyle)+' '+(col.borderTopWidth)+(unit)+' '+(col.borderTopColor)+';border-right:'+(col.borderRightStyle)+' '+(col.borderRightWidth)+(unit)+' '+(col.borderRightColor)+';border-bottom:'+(col.borderBottomStyle)+' '+(col.borderBottomWidth)+(unit)+' '+(col.borderBottomColor)+';border-left:'+(col.borderLeftStyle)+' '+(col.borderLeftWidth)+(unit)+' '+(col.borderLeftColor)+';border-radius:'+(col.borderLeftTopRadius)+(unit)+' '+(col.borderRightTopRadius)+(unit)+' '+(col.borderRightBottomRadius)+(unit)+' '+(col.borderLeftBottomRadius)+(unit),},$vnode_3));
}$vnode_1.push($createVNode('div',$quick_mY_0_static_attr,$vnode_2));
};$$_style='left:'+(props.x)+(unit)+';';if(stage){;$$_style+='bottom:0;';}else{;$$_style+='top:'+(props.y)+(unit)+';';};$$_style+='opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit);$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-mX rd-mY rd-n5','style': $$_style,},$vnode_1)]; 

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
        this.set({
            stage: 1
        });
    },
    render() {
        this.digest();
    }
});

});