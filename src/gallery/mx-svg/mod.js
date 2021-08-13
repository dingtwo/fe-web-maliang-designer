/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/7e/mod",["5c","../../5r/ebase","../../5b/5f","../../5b/5e","../6u/index"],(require,exports,module)=>{
require("../6u/index");
let $quick_n__static_text;
let $quick_oa_0_static_attr={'class': 'rd-m5 rd-mX rd-mZ',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let ebase_1 = require("../../5r/ebase");
let transform_1 = require("../../5b/5f");
let const_1 = require("../../5b/5e");
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

for(let $q_c_aykrvscovf=points.length,i=0;i<$q_c_aykrvscovf;i+=1){
let p=points[i];

if(props[p+'X']!=null){
$vnode_2=[$quick_n__static_text||($quick_n__static_text=$createVNode(0,'调整点：'))];;$$_class='rd-nA rd-mF';if(disabled){;$$_class+=' rd-nJ';}else{;$$_class+=' rd-nk';if(props['_qJ']==p){;$$_class+=' rd-nB';};};$vnode_1=[$createVNode('span',{'mx5-pointerover': $viewId+'_qP({key:\''+($encodeQuote(p))+'\'})','class': $$_class,},$vnode_2)];;$$_mx5$_view='5j/6u/index?';if((props[p+'Type']!='int')){;$$_mx5$_view+='min=0.00';};if((props[p+'Type']!='int')){;$$_mx5$_view+='&max=1.00';};$$_mx5$_view+='&step='+$keyOf($refData,props[p+'Type']!='int'?0.01:step,'i!.'+(i)+'.i@')+'&fixed='+$keyOf($refData,props[p+'Type']!='int'?2:fixed,'i!.'+(i)+'.i$')+'&value='+$keyOf($refData,props[p+'Type']!='int'?props[p+'X']:read(props[p+'X']),'i!.'+(i)+'.i^');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,points,step,fixed','class': 'rd-l5 rd-m8 rd-mK','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_tu({i:'+(i+1)+',type:\'X\'})','mx5-view': $$_mx5$_view,}));$vnode_0.push($createVNode('div',$quick_oa_0_static_attr,$vnode_1));
}
if(props[p+'Y']!=null){
$text='';if(props[p+'X']==null){;$text+=' 调整点： ';};$vnode_2=[$createVNode(0,$text)];;$$_class='rd-nA rd-mF';if(disabled){;$$_class+=' rd-nJ';}else{;$$_class+=' rd-nk';if(props['_qJ']==p&&props[p+'X']==null){;$$_class+=' rd-nB';};};$vnode_1=[$createVNode('span',{'mx5-pointerover': ((props[p+'X']==null))&&($viewId+'_qP({key:\''+($encodeQuote(p))+'\'})'),'class': $$_class,},$vnode_2)];;$$_mx5$_view='5j/6u/index?';if((props[p+'Type']!='int')){;$$_mx5$_view+='min=0.00';};if((props[p+'Type']!='int')){;$$_mx5$_view+='&max=1.00';};$$_mx5$_view+='&step='+$keyOf($refData,props[p+'Type']!='int'?0.01:step,'i!.'+(i)+'.i@')+'&fixed='+$keyOf($refData,props[p+'Type']!='int'?2:fixed,'i!.'+(i)+'.i$')+'&value='+$keyOf($refData,props[p+'Type']!='int'?props[p+'Y']:read(props[p+'Y']),'i!.'+(i)+'.i*');$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'props,points,step,fixed','class': 'rd-l5 rd-m8 rd-mK','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_tu({i:'+(i+1)+',type:\'Y\'})','mx5-view': $$_mx5$_view,}));$vnode_0.push($createVNode('div',$quick_oa_0_static_attr,$vnode_1));
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(extra) {
        let { props, disabled } = extra;
        this.set({
            disabled,
            fixed: const_1["mI"],
            step: const_1["mH"],
            read: transform_1["l5"],
            points: ebase_1["_tt"](props),
            props
        });
    },
    render() {
        this.digest();
    },
    '_tu<input>'(e) {
        let { i, type } = e.params;
        let props = this.get('props');
        let v = e.value;
        if (props['mod' + i + 'Type'] == 'int') {
            v = transform_1["m_"](v);
        }
        console.log(v);
        props['mod' + i + type] = v;
        dispatch(this.root, 'change');
    },
    '_qP<pointerover>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget)) {
            let { key } = e.params;
            let props = this.get('props');
            props['_qJ'] = key;
            dispatch(this.root, 'change', {
                '_tr': 1
            });
        }
    },
});

});