/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/6g/mod",["4e","../../4t/ebase","../../4d/4h","../../4d/4g","../60/index"],(require,exports,module)=>{
require("../60/index");
let $quick_eM_static_text;
let $quick_fN_0_static_attr={'class': 'rd-eB rd-eH rd-ez',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let ebase_1 = require("../../4t/ebase");
let transform_1 = require("../../4d/4h");
let const_1 = require("../../4d/4g");
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

for(let $q_c_yxjochyh=points.length,i=0;i<$q_c_yxjochyh;i+=1){
let p=points[i];

if(props[p+'X']!=null){
$vnode_2=[$quick_eM_static_text||($quick_eM_static_text=$createVNode(0,'调整点：'))];;$$_class='rd-fc rd-eh';if(disabled){;$$_class+=' rd-fl';}else{;$$_class+=' rd-eX';if(props['_il']==p){;$$_class+=' rd-fd';};};$vnode_1=[$createVNode('span',{'mx5-pointerover': $viewId+'_ir({key:\''+($encodeQuote(p))+'\'})','class': $$_class,},$vnode_2)];;$$_mx5$_view='4l/60/index?';if((props[p+'Type']!='int')){;$$_mx5$_view+='min=0.00';};if((props[p+'Type']!='int')){;$$_mx5$_view+='&max=1.00';};$$_mx5$_view+='&step='+$keyOf($refData,props[p+'Type']!='int'?0.01:step,'cH.'+(i)+'.cI')+'&fixed='+$keyOf($refData,props[p+'Type']!='int'?2:fixed,'cH.'+(i)+'.cJ')+'&value='+$keyOf($refData,props[p+'Type']!='int'?props[p+'X']:read(props[p+'X']),'cH.'+(i)+'.cK');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,points,step,fixed','class': 'rd-dH rd-eK rd-em','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_k7({i:'+(i+1)+',type:\'X\'})','mx5-view': $$_mx5$_view,}));$vnode_0.push($createVNode('div',$quick_fN_0_static_attr,$vnode_1));
}
if(props[p+'Y']!=null){
$text='';if(props[p+'X']==null){;$text+=' 调整点： ';};$vnode_2=[$createVNode(0,$text)];;$$_class='rd-fc rd-eh';if(disabled){;$$_class+=' rd-fl';}else{;$$_class+=' rd-eX';if(props['_il']==p&&props[p+'X']==null){;$$_class+=' rd-fd';};};$vnode_1=[$createVNode('span',{'mx5-pointerover': ((props[p+'X']==null))&&($viewId+'_ir({key:\''+($encodeQuote(p))+'\'})'),'class': $$_class,},$vnode_2)];;$$_mx5$_view='4l/60/index?';if((props[p+'Type']!='int')){;$$_mx5$_view+='min=0.00';};if((props[p+'Type']!='int')){;$$_mx5$_view+='&max=1.00';};$$_mx5$_view+='&step='+$keyOf($refData,props[p+'Type']!='int'?0.01:step,'cH.'+(i)+'.cI')+'&fixed='+$keyOf($refData,props[p+'Type']!='int'?2:fixed,'cH.'+(i)+'.cJ')+'&value='+$keyOf($refData,props[p+'Type']!='int'?props[p+'Y']:read(props[p+'Y']),'cH.'+(i)+'.cL');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,points,step,fixed','class': 'rd-dH rd-eK rd-em','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_k7({i:'+(i+1)+',type:\'Y\'})','mx5-view': $$_mx5$_view,}));$vnode_0.push($createVNode('div',$quick_fN_0_static_attr,$vnode_1));
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(extra) {
        let { props, disabled } = extra;
        this.set({
            disabled,
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"],
            points: ebase_1["_k6"](props),
            props
        });
    },
    render() {
        this.digest();
    },
    '_k7<input>'(e) {
        let { i, type } = e.params;
        let props = this.get('props');
        let v = e.value;
        if (props['mod' + i + 'Type'] == 'int') {
            v = transform_1["dM"](v);
        }
        console.log(v);
        props['mod' + i + type] = v;
        dispatch(this.root, 'change');
    },
    '_ir<pointerover>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let { key } = e.params;
            let props = this.get('props');
            props['_il'] = key;
            dispatch(this.root, 'change', {
                '_k4': 1
            });
        }
    },
});

});