/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/data/branch",["5c"],(require,exports,module)=>{
let $quick_ne_static_text;
let $quick_oj_0_static_node;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
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

for(let $q_c_irzszbcvc=list.length,$q_key_kaawkzvm=0;$q_key_kaawkzvm<$q_c_irzszbcvc;$q_key_kaawkzvm+=1){
let item=list[$q_key_kaawkzvm];
let children = item.children;;$vnode_1=[];$vnode_2=[];
if(children){
$vnode_3=[$quick_ne_static_text||($quick_ne_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nU rd-nF';if(item.expand){;$$_class+=' rd-mt';};$vnode_2.push($createVNode('i',{'class': $$_class,},$vnode_3));
}else{

if($quick_oj_0_static_node){
$vnode_2.push($quick_oj_0_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_oj_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-l3',},$vnode_3));
}

}$vnode_3=[$createVNode(0,(highlight(item.name)),1)];$vnode_2.push($createVNode('span',0,$vnode_3));;$$_class='rd-mX rd-mZ';if(disabled||item.disabled||readonly||bindMap[item.id]){;$$_class+=' rd-rU';};if(children){;$$_class+=' rd-rV rd-nk';}else{;$$_class+=' rd-rT';};$vnode_1.push($createVNode('div',{'mx5-click': ((children))&&($viewId+'_tN({item:\''+$keyOf($refData,item,'i!.'+($q_key_kaawkzvm)+'.i@')+'\'})'),'draggable': ((!children && !bindMap[item.id] && !readonly && !disabled && !item.disabled))&&('true'),'mx5-dragstart': $viewId+'_tP({url:\''+($encodeQuote(ownerUrl))+'\',field:\''+$keyOf($refData,item,'i!.'+($q_key_kaawkzvm)+'.i@')+'\',id:\''+($encodeQuote(ownerId))+'\'})','mx5-dragend': $viewId+'_tQ()','mx5-pointerdown': ((!children && !bindMap[item.id] && !readonly && !disabled && !item.disabled))&&($viewId+'_tR()'),'class': $$_class,},$vnode_2));
if(children && item.expand){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'list,bindMap,disabled,readonly,kw','mx5-view': '66/data/branch?indent=true&list='+$keyOf($refData,children,'i!.'+($q_key_kaawkzvm)+'.i$')+'&bindMap='+$keyOf($refData,bindMap,'i^')+'&ownerId='+$keyOf($refData,item.id,'i!.'+($q_key_kaawkzvm)+'.i*')+'&ownerUrl='+$keyOf($refData,item.url,'i!.'+($q_key_kaawkzvm)+'.i{')+'&disabled='+$keyOf($refData,disabled||item.disabled,'i}.'+($q_key_kaawkzvm)+'.i[')+'&readonly='+$keyOf($refData,readonly,'i]')+'&kw='+$keyOf($refData,kw,'i|'),'class': 'rd-mr',}));
}$vnode_0.push($createVNode('div',{'class': ((indent))&&('rd-mx'),},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let view = this;
        this.set({
            highlight(title) {
                let kw = view.get('kw');
                if (kw) {
                    title = title.replaceAll(kw, `<span class="rd-rX">${kw}</span>`);
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
    '_tN<click>'(e) {
        let { item } = e.params;
        let list = this.get('list');
        item.expand = !item.expand;
        this.digest({
            list
        });
    },
    '_tP<dragstart>'(e) {
        let { params: dragData, eventTarget, pageX, pageY, dataTransfer } = e;
        let b = eventTarget.getBoundingClientRect();
        State.set({
            'ml': dragData,
            'mn': {
                '_tO': pageX - b.x,
                '_oX': pageY - b.y
            }
        });
        dataTransfer.setData('text/plain', '_sf');
        //dataTransfer.effectAllowed = 'move';
        State.fire('ms');
    },
    '_tQ<dragend>'() {
        State.set({
            'ml': null,
            'mo': null
        });
        State.fire('mt');
    },
    //https://github.com/xinglie/report-designer/issues/45
    '_tR<pointerdown>'(e) {
        dispatch(this.root, 'treeitempointerdown', {
            treeDOMNode: e.eventTarget
        });
    }
});

});