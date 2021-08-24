/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/data/branch",["51"],(require,exports,module)=>{
let $quick_hq_static_text;
let $quick_iv_0_static_node;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let { View, State, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	list,
	indent,
	disabled,
	readonly,
	bindMap,
	ownerUrl,
	ownerId,
	highlight,
	kw,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;

for(let $q_c_xanvyksud=list.length,$q_key_xzgxypw=0;$q_key_xzgxypw<$q_c_xanvyksud;$q_key_xzgxypw+=1){
let item=list[$q_key_xzgxypw];
let children = item.children;;$vnode_1=[];$vnode_2=[];
if(children){
$vnode_3=[$quick_hq_static_text||($quick_hq_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-h6 rd-hR';if(item.expand){;$$_class+=' rd-gF';};$vnode_2.push($createVNode('i',{'class': $$_class,},$vnode_3));
}else{

if($quick_iv_0_static_node){
$vnode_2.push($quick_iv_0_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_iv_0_static_node=$createVNode('i',{'_': 'eD','class': 'rd-ge',},$vnode_3));
}

}$vnode_3=[$createVNode(0,(highlight(item.name)),1)];$vnode_2.push($createVNode('span',0,$vnode_3));;$$_class='rd-g9 rd-ha';if(disabled||item.disabled||readonly||bindMap[item.id]){;$$_class+=' rd-l6';};if(children){;$$_class+=' rd-l7 rd-hw';}else{;$$_class+=' rd-l5';};$vnode_1.push($createVNode('div',{'mx5-click': ((children))&&($viewId+'_n2({item:\''+$keyOf($refData,item,'eD.'+($q_key_xzgxypw)+'.eE')+'\'})'),'draggable': ((!children && !bindMap[item.id] && !readonly && !disabled && !item.disabled))&&('true'),'mx5-dragstart': $viewId+'_n4({url:\''+($encodeQuote(ownerUrl))+'\',field:\''+$keyOf($refData,item,'eD.'+($q_key_xzgxypw)+'.eE')+'\',id:\''+($encodeQuote(ownerId))+'\'})','mx5-dragend': $viewId+'_n5()','mx5-pointerdown': ((!children && !bindMap[item.id] && !readonly && !disabled && !item.disabled))&&($viewId+'_n6()'),'class': $$_class,},$vnode_2));
if(children && item.expand){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'list,bindMap,disabled,readonly,kw','mx5-view': '5r/data/branch?indent=true&list='+$keyOf($refData,children,'eD.'+($q_key_xzgxypw)+'.eF')+'&bindMap='+$keyOf($refData,bindMap,'eG')+'&ownerId='+$keyOf($refData,item.id,'eD.'+($q_key_xzgxypw)+'.eH')+'&ownerUrl='+$keyOf($refData,item.url,'eD.'+($q_key_xzgxypw)+'.eI')+'&disabled='+$keyOf($refData,disabled||item.disabled,'eJ.'+($q_key_xzgxypw)+'.eK')+'&readonly='+$keyOf($refData,readonly,'eL')+'&kw='+$keyOf($refData,kw,'eM'),'class': 'rd-gD',}));
}$vnode_0.push($createVNode('div',{'class': ((indent))&&('rd-gJ'),},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let view = this;
        this.set({
            highlight(title) {
                let kw = view.get('kw');
                if (kw) {
                    title = title.replaceAll(kw, `<span class="rd-l9">${kw}</span>`);
                }
                return title;
            }
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_n2<click>'(e) {
        let { item } = e.params;
        let list = this.get('list');
        item.expand = !item.expand;
        this.digest({
            list
        });
    },
    '_n4<dragstart>'(e) {
        let { params: dragData, eventTarget, pageX, pageY, dataTransfer } = e;
        let b = eventTarget.getBoundingClientRect();
        State.set({
            'gx': dragData,
            'gz': {
                '_n3': pageX - b.x,
                '_jb': pageY - b.y
            }
        });
        dataTransfer.setData('text/plain', '_mu');
        //dataTransfer.effectAllowed = 'move';
        State.fire('gE');
    },
    '_n5<dragend>'() {
        State.set({
            'gx': null,
            'gA': null
        });
        State.fire('gF');
    },
    //https://github.com/xinglie/report-designer/issues/45
    '_n6<pointerdown>'(e) {
        dispatch(this.root, 'treeitempointerdown', {
            treeDOMNode: e.eventTarget
        });
    }
});

});