/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/73/mod",["51","../../5g/ebase","../../50/54","../../50/53","../6j/index"],(require,exports,module)=>{
require("../6j/index");
let $quick_hl_static_text;
let $quick_im_0_static_attr={'class': 'rd-g9 rd-ha rd-hg',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let ebase_1 = require("../../5g/ebase");
let transform_1 = require("../../50/54");
let const_1 = require("../../50/53");
let { View, dispatch, inside } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	points,
	props,
	disabled,
	step,
	fixed,
	read,}=$dataFromView,
$$_class,
$vnode_2,
$$_mx5$_view,
$vnode_1,
$text;

for(let $q_c_fewkw=points.length,i=0;i<$q_c_fewkw;i+=1){
let p=points[i];

if(props[p+'X']!=null){
$vnode_2=[$quick_hl_static_text||($quick_hl_static_text=$createVNode(0,'调整点：'))];;$$_class='rd-hM rd-gR';if(disabled){;$$_class+=' rd-hV';}else{;$$_class+=' rd-hw';if(props['_kY']==p){;$$_class+=' rd-hN';};};$vnode_1=[$createVNode('span',{'mx5-pointerover': $viewId+'_k4({key:\''+($encodeQuote(p))+'\'})','class': $$_class,},$vnode_2)];;$$_mx5$_view='58/6j/index?';if((props[p+'Type']!='int')){;$$_mx5$_view+='min=0.00';};if((props[p+'Type']!='int')){;$$_mx5$_view+='&max=1.00';};$$_mx5$_view+='&step='+$keyOf($refData,props[p+'Type']!='int'?0.01:step,'eD.'+(i)+'.eE')+'&fixed='+$keyOf($refData,props[p+'Type']!='int'?2:fixed,'eD.'+(i)+'.eF')+'&value='+$keyOf($refData,props[p+'Type']!='int'?props[p+'X']:read(props[p+'X']),'eD.'+(i)+'.eG');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,points,step,fixed','class': 'rd-gW rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_nJ({i:'+(i+1)+',type:\'X\'})','mx5-view': $$_mx5$_view,}));$vnode_0.push($createVNode('div',$quick_im_0_static_attr,$vnode_1));
}
if(props[p+'Y']!=null){
$text='';if(props[p+'X']==null){;$text+=' 调整点： ';};$vnode_2=[$createVNode(0,$text)];;$$_class='rd-hM rd-gR';if(disabled){;$$_class+=' rd-hV';}else{;$$_class+=' rd-hw';if(props['_kY']==p&&props[p+'X']==null){;$$_class+=' rd-hN';};};$vnode_1=[$createVNode('span',{'mx5-pointerover': ((props[p+'X']==null))&&($viewId+'_k4({key:\''+($encodeQuote(p))+'\'})'),'class': $$_class,},$vnode_2)];;$$_mx5$_view='58/6j/index?';if((props[p+'Type']!='int')){;$$_mx5$_view+='min=0.00';};if((props[p+'Type']!='int')){;$$_mx5$_view+='&max=1.00';};$$_mx5$_view+='&step='+$keyOf($refData,props[p+'Type']!='int'?0.01:step,'eD.'+(i)+'.eE')+'&fixed='+$keyOf($refData,props[p+'Type']!='int'?2:fixed,'eD.'+(i)+'.eF')+'&value='+$keyOf($refData,props[p+'Type']!='int'?props[p+'Y']:read(props[p+'Y']),'eD.'+(i)+'.eH');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,points,step,fixed','class': 'rd-gW rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_nJ({i:'+(i+1)+',type:\'Y\'})','mx5-view': $$_mx5$_view,}));$vnode_0.push($createVNode('div',$quick_im_0_static_attr,$vnode_1));
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(extra) {
        let { props, disabled } = extra;
        this.set({
            disabled,
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"],
            points: ebase_1["_nI"](props),
            props
        });
    },
    render() {
        this.digest();
    },
    '_nJ<input>'(e) {
        let { i, type } = e.params;
        let props = this.get('props');
        let v = e.value;
        if (props['mod' + i + 'Type'] == 'int') {
            v = transform_1["gl"](v);
        }
        console.log(v);
        props['mod' + i + type] = v;
        dispatch(this.root, 'change');
    },
    '_k4<pointerover>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let { key } = e.params;
            let props = this.get('props');
            props['_kY'] = key;
            dispatch(this.root, 'change', {
                '_nG': 1
            });
        }
    },
});

});