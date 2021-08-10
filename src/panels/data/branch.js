/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/data/branch",["4e"],(require,exports,module)=>{
let $quick_eR_static_text;
let $quick_fW_0_static_node;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
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

for(let $q_c_vwwlfk=list.length,$q_key_jzilyomcb=0;$q_key_jzilyomcb<$q_c_vwwlfk;$q_key_jzilyomcb+=1){
let item=list[$q_key_jzilyomcb];
let children = item.children;;$vnode_1=[];$vnode_2=[];
if(children){
$vnode_3=[$quick_eR_static_text||($quick_eR_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-fw rd-fh';if(item.expand){;$$_class+=' rd-d6';};$vnode_2.push($createVNode('i',{'class': $$_class,},$vnode_3));
}else{

if($quick_fW_0_static_node){
$vnode_2.push($quick_fW_0_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_fW_0_static_node=$createVNode('i',{'_': 'cH','class': 'rd-dF',},$vnode_3));
}

}$vnode_3=[$createVNode(0,(highlight(item.name)),1)];$vnode_2.push($createVNode('span',0,$vnode_3));;$$_class='rd-ez rd-eB';if(disabled||item.disabled||readonly||bindMap[item.id]){;$$_class+=' rd-jw';};if(children){;$$_class+=' rd-jx rd-eX';}else{;$$_class+=' rd-jv';};$vnode_1.push($createVNode('div',{'mx5-click': ((children))&&($viewId+'_lp({item:\''+$keyOf($refData,item,'cH.'+($q_key_jzilyomcb)+'.cI')+'\'})'),'draggable': ((!children && !bindMap[item.id] && !readonly && !disabled && !item.disabled))&&('true'),'mx5-dragstart': $viewId+'_lr({url:\''+($encodeQuote(ownerUrl))+'\',field:\''+$keyOf($refData,item,'cH.'+($q_key_jzilyomcb)+'.cI')+'\',id:\''+($encodeQuote(ownerId))+'\'})','mx5-dragend': $viewId+'_ls()','mx5-pointerdown': ((!children && !bindMap[item.id] && !readonly && !disabled && !item.disabled))&&($viewId+'_lt()'),'class': $$_class,},$vnode_2));
if(children && item.expand){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'list,bindMap,disabled,readonly,kw','mx5-view': '58/data/branch?indent=true&list='+$keyOf($refData,children,'cH.'+($q_key_jzilyomcb)+'.cJ')+'&bindMap='+$keyOf($refData,bindMap,'cK')+'&ownerId='+$keyOf($refData,item.id,'cH.'+($q_key_jzilyomcb)+'.cL')+'&ownerUrl='+$keyOf($refData,item.url,'cH.'+($q_key_jzilyomcb)+'.cM')+'&disabled='+$keyOf($refData,disabled||item.disabled,'cN.'+($q_key_jzilyomcb)+'.cO')+'&readonly='+$keyOf($refData,readonly,'cP')+'&kw='+$keyOf($refData,kw,'cQ'),'class': 'rd-d4',}));
}$vnode_0.push($createVNode('div',{'class': ((indent))&&('rd-e_'),},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let view = this;
        this.set({
            highlight(title) {
                let kw = view.get('kw');
                if (kw) {
                    title = title.replaceAll(kw, `<span class="rd-jz">${kw}</span>`);
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
    '_lp<click>'(e) {
        let { item } = e.params;
        let list = this.get('list');
        item.expand = !item.expand;
        this.digest({
            list
        });
    },
    '_lr<dragstart>'(e) {
        let { params: dragData, eventTarget, pageX, pageY, dataTransfer } = e;
        let b = eventTarget.getBoundingClientRect();
        State.set({
            'dY': dragData,
            'd0': {
                '_lq': pageX - b.x,
                '_gz': pageY - b.y
            }
        });
        dataTransfer.setData('text/plain', '_jS');
        //dataTransfer.effectAllowed = 'move';
        State.fire('d5');
    },
    '_ls<dragend>'() {
        State.set({
            'dY': null,
            'd1': null
        });
        State.fire('d6');
    },
    //https://github.com/xinglie/report-designer/issues/45
    '_lt<pointerdown>'(e) {
        dispatch(this.root, 'treeitempointerdown', {
            treeDOMNode: e.eventTarget
        });
    }
});

});