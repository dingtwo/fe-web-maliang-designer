/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/73/kp",["51","../../5g/ebase","../../50/54","../../50/53","../6j/index"],(require,exports,module)=>{
require("../6j/index");
let $quick_gd_static_text;
let $quick_hj_static_text;
let $quick_il_2_static_node;
let $quick_hk_static_text;
let $quick_il_0_static_attr={'class': 'rd-g9 rd-ha rd-hg',};
let $quick_il_1_static_attr={'class': 'rd-g9 rd-hg',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let ebase_1 = require("../../5g/ebase");
let transform_1 = require("../../50/54");
let const_1 = require("../../50/53");
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
for(let $q_c_nypmcqccpa=points.length,i=0;i<$q_c_nypmcqccpa;i+=1){
let p=points[i];
$vnode_2=[];
if(total>3&&mod){
$vnode_3=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-gH rd-h7';if(disabled){;$$_class+=' rd-hX';}else{;$$_class+=' rd-hW';};$vnode_2.push($createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_nE({i:'+(i+1)+'})'),'title': '删除控制点','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_hj_static_text||($quick_hj_static_text=$createVNode(0,'控制点：')));;$$_class='rd-hM rd-gR';if(disabled){;$$_class+=' rd-hV';}else{;$$_class+=' rd-hw';if(props['_nF']==p){;$$_class+=' rd-hN';};};$vnode_1=[$createVNode('span',{'mx5-pointerover': $viewId+'_nH({key:\''+($encodeQuote(p))+'\'})','class': $$_class,},$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,props,points','class': 'rd-gW rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_nA({i:'+(i+1)+',type:\'X\'})','mx5-view': '58/6j/index?step='+$keyOf($refData,step,'eD')+'&fixed='+$keyOf($refData,fixed,'eE')+'&value='+$keyOf($refData,read(props[p+'X']),'eF.'+(i)+'.eG'),})];$vnode_0.push($createVNode('div',$quick_il_0_static_attr,$vnode_1));
if($quick_il_2_static_node){
$vnode_1=[$quick_il_2_static_node];
}else{
$vnode_1=[$quick_il_2_static_node=$createVNode('span',{'_': 'eD','class': 'rd-gR rd-hM',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'step,fixed,props,points','class': 'rd-gW rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_nA({i:'+(i+1)+',type:\'Y\'})','mx5-view': '58/6j/index?step='+$keyOf($refData,step,'eD')+'&fixed='+$keyOf($refData,fixed,'eE')+'&value='+$keyOf($refData,read(props[p+'Y']),'eF.'+(i)+'.eH'),}));$vnode_0.push($createVNode('div',$quick_il_1_static_attr,$vnode_1));
}
if(mod){
$vnode_1=[$quick_hk_static_text||($quick_hk_static_text=$createVNode(0,'添加控制点'))];$vnode_0.push($createVNode('button',{'class': 'rd-gS rd-gU rd-gk rd-gm rd-hw','disabled': (disabled),'mx5-click': $viewId+'_nD()',},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            fixed: const_1["gU"],
            step: const_1["gT"],
            read: transform_1["gg"]
        });
    },
    assign(extra) {
        let { props, disabled, mod } = extra;
        this.set({
            disabled,
            points: ebase_1["_nz"](props),
            props,
            mod
        });
    },
    render() {
        this.digest();
    },
    '_nA<input>'(e) {
        let { i, type } = e.params;
        let props = this.get('props');
        props['ctrl' + i + type] = transform_1["gl"](e.value);
        dispatch(this.root, 'change');
    },
    '_nD<click>'() {
        let props = this.get('props');
        let keyPoints = ebase_1["_nz"](props);
        let { x, y, width, height } = props;
        let nextIndex = keyPoints.length + 1;
        let nextX = x + (width * random());
        let nextY = y + (height * random());
        props[`ctrl${nextIndex}X`] = nextX;
        props[`ctrl${nextIndex}Y`] = nextY;
        delete props['_nB'];
        delete props['_nC'];
        dispatch(this.root, 'change');
    },
    '_nE<click>'(e) {
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
        delete props['_nB'];
        delete props['_nC'];
        dispatch(this.root, 'change');
    },
    '_nH<pointerover>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let { key } = e.params;
            let props = this.get('props');
            props['_nF'] = key;
            dispatch(this.root, 'change', {
                '_nG': 1
            });
        }
    },
});

});