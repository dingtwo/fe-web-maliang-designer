/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/6g/kp",["4e","../../4t/ebase","../../4d/4h","../../4d/4g","../60/index"],(require,exports,module)=>{
require("../60/index");
let $quick_dE_static_text;
let $quick_eK_static_text;
let $quick_fM_2_static_node;
let $quick_eL_static_text;
let $quick_fM_0_static_attr={'class': 'rd-eB rd-eH rd-ez',};
let $quick_fM_1_static_attr={'class': 'rd-eH rd-ez',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let ebase_1 = require("../../4t/ebase");
let transform_1 = require("../../4d/4h");
let const_1 = require("../../4d/4g");
let { has, View, dispatch, inside } = magix_1;
let { random } = Math;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	points,
	disabled,
	props,
	mod,
	step,
	fixed,
	read,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
let total=points.length;;
for(let $q_c_rapqz=points.length,i=0;i<$q_c_rapqz;i+=1){
let p=points[i];
$vnode_2=[];
if(total>3&&mod){
$vnode_3=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-d8 rd-fx';if(disabled){;$$_class+=' rd-fn';}else{;$$_class+=' rd-fm';};$vnode_2.push($createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_k2({i:'+(i+1)+'})'),'title': '删除控制点','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_eK_static_text||($quick_eK_static_text=$createVNode(0,'控制点：')));;$$_class='rd-fc rd-eh';if(disabled){;$$_class+=' rd-fl';}else{;$$_class+=' rd-eX';if(props['_k3']==p){;$$_class+=' rd-fd';};};$vnode_1=[$createVNode('span',{'mx5-pointerover': $viewId+'_k5({key:\''+($encodeQuote(p))+'\'})','class': $$_class,},$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,props,points','class': 'rd-dH rd-eK rd-em','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_kY({i:'+(i+1)+',type:\'X\'})','mx5-view': '4l/60/index?step='+$keyOf($refData,step,'cH')+'&fixed='+$keyOf($refData,fixed,'cI')+'&value='+$keyOf($refData,read(props[p+'X']),'cJ.'+(i)+'.cK'),})];$vnode_0.push($createVNode('div',$quick_fM_0_static_attr,$vnode_1));
if($quick_fM_2_static_node){
$vnode_1=[$quick_fM_2_static_node];
}else{
$vnode_1=[$quick_fM_2_static_node=$createVNode('span',{'_': 'cH','class': 'rd-eh rd-fc',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,props,points','class': 'rd-dH rd-eK rd-em','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_kY({i:'+(i+1)+',type:\'Y\'})','mx5-view': '4l/60/index?step='+$keyOf($refData,step,'cH')+'&fixed='+$keyOf($refData,fixed,'cI')+'&value='+$keyOf($refData,read(props[p+'Y']),'cJ.'+(i)+'.cL'),}));$vnode_0.push($createVNode('div',$quick_fM_1_static_attr,$vnode_1));
}
if(mod){
$vnode_1=[$quick_eL_static_text||($quick_eL_static_text=$createVNode(0,'添加控制点'))];$vnode_0.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-ei rd-ek','disabled': (disabled),'mx5-click': $viewId+'_k1()',},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            fixed: const_1["ek"],
            step: const_1["ej"],
            read: transform_1["dH"]
        });
    },
    assign(extra) {
        let { props, disabled, mod } = extra;
        this.set({
            disabled,
            points: ebase_1["_kX"](props),
            props,
            mod
        });
    },
    render() {
        this.digest();
    },
    '_kY<input>'(e) {
        let { i, type } = e.params;
        let props = this.get('props');
        props['ctrl' + i + type] = transform_1["dM"](e.value);
        dispatch(this.root, 'change');
    },
    '_k1<click>'() {
        let props = this.get('props');
        let keyPoints = ebase_1["_kX"](props);
        let { x, y, width, height } = props;
        let nextIndex = keyPoints.length + 1;
        let nextX = x + (width * random());
        let nextY = y + (height * random());
        props[`ctrl${nextIndex}X`] = nextX;
        props[`ctrl${nextIndex}Y`] = nextY;
        delete props['_kZ'];
        delete props['_k0'];
        dispatch(this.root, 'change');
    },
    '_k2<click>'(e) {
        let props = this.get('props');
        let { i } = e.params;
        let next = i + 1;
        while (1) {
            if (has(props, `ctrl${next}X`)) {
                props[`ctrl${i}X`] = props[`ctrl${next}X`];
                props[`ctrl${i}Y`] = props[`ctrl${next}Y`];
                next++;
                i++;
            }
            else {
                break;
            }
        }
        delete props[`ctrl${i}X`];
        delete props[`ctrl${i}Y`];
        delete props['_kZ'];
        delete props['_k0'];
        dispatch(this.root, 'change');
    },
    '_k5<pointerover>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let { key } = e.params;
            let props = this.get('props');
            props['_k3'] = key;
            dispatch(this.root, 'change', {
                '_k4': 1
            });
        }
    },
});

});