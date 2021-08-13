/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/7e/kp",["5c","../../5r/ebase","../../5b/5f","../../5b/5e","../6u/index"],(require,exports,module)=>{
require("../6u/index");
let $quick_l2_static_text;
let $quick_m8_static_text;
let $quick_o__2_static_node;
let $quick_m9_static_text;
let $quick_o__0_static_attr={'class': 'rd-m5 rd-mX rd-mZ',};
let $quick_o__1_static_attr={'class': 'rd-m5 rd-mX',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let ebase_1 = require("../../5r/ebase");
let transform_1 = require("../../5b/5f");
let const_1 = require("../../5b/5e");
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
for(let $q_c_kzsdegejh=points.length,i=0;i<$q_c_kzsdegejh;i+=1){
let p=points[i];
$vnode_2=[];
if(total>3&&mod){
$vnode_3=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-mv rd-nV';if(disabled){;$$_class+=' rd-nL';}else{;$$_class+=' rd-nK';};$vnode_2.push($createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_tp({i:'+(i+1)+'})'),'title': '删除控制点','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_m8_static_text||($quick_m8_static_text=$createVNode(0,'控制点：')));;$$_class='rd-nA rd-mF';if(disabled){;$$_class+=' rd-nJ';}else{;$$_class+=' rd-nk';if(props['_tq']==p){;$$_class+=' rd-nB';};};$vnode_1=[$createVNode('span',{'mx5-pointerover': $viewId+'_ts({key:\''+($encodeQuote(p))+'\'})','class': $$_class,},$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,props,points','class': 'rd-l5 rd-m8 rd-mK','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_tl({i:'+(i+1)+',type:\'X\'})','mx5-view': '5j/6u/index?step='+$keyOf($refData,step,'i!')+'&fixed='+$keyOf($refData,fixed,'i@')+'&value='+$keyOf($refData,read(props[p+'X']),'i$.'+(i)+'.i^'),})];$vnode_0.push($createVNode('div',$quick_o__0_static_attr,$vnode_1));
if($quick_o__2_static_node){
$vnode_1=[$quick_o__2_static_node];
}else{
$vnode_1=[$quick_o__2_static_node=$createVNode('span',{'_': 'i!','class': 'rd-mF rd-nA',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,props,points','class': 'rd-l5 rd-m8 rd-mK','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_tl({i:'+(i+1)+',type:\'Y\'})','mx5-view': '5j/6u/index?step='+$keyOf($refData,step,'i!')+'&fixed='+$keyOf($refData,fixed,'i@')+'&value='+$keyOf($refData,read(props[p+'Y']),'i$.'+(i)+'.i*'),}));$vnode_0.push($createVNode('div',$quick_o__1_static_attr,$vnode_1));
}
if(mod){
$vnode_1=[$quick_m9_static_text||($quick_m9_static_text=$createVNode(0,'添加控制点'))];$vnode_0.push($createVNode('button',{'class': 'rd-l9 rd-mG rd-mI rd-ma rd-nk','disabled': (disabled),'mx5-click': $viewId+'_to()',},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"]
        });
    },
    assign(extra) {
        let { props, disabled, mod } = extra;
        this.set({
            disabled,
            points: ebase_1["_tk"](props),
            props,
            mod
        });
    },
    render() {
        this.digest();
    },
    '_tl<input>'(e) {
        let { i, type } = e.params;
        let props = this.get('props');
        props['ctrl' + i + type] = transform_1["m_"](e.value);
        dispatch(this.root, 'change');
    },
    '_to<click>'() {
        let props = this.get('props');
        let keyPoints = ebase_1["_tk"](props);
        let { x, y, width, height } = props;
        let nextIndex = keyPoints.length + 1;
        let nextX = x + (width * random());
        let nextY = y + (height * random());
        props[`ctrl${nextIndex}X`] = nextX;
        props[`ctrl${nextIndex}Y`] = nextY;
        delete props['_tm'];
        delete props['_tn'];
        dispatch(this.root, 'change');
    },
    '_tp<click>'(e) {
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
        delete props['_tm'];
        delete props['_tn'];
        dispatch(this.root, 'change');
    },
    '_ts<pointerover>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let { key } = e.params;
            let props = this.get('props');
            props['_tq'] = key;
            dispatch(this.root, 'change', {
                '_tr': 1
            });
        }
    },
});

});