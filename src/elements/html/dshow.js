/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/html/dshow",["5c","../../5b/5o","../../5b/69","5j/6q/index"],(require,exports,module)=>{
require("5j/6q/index");
let $quick_mC_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let history_1 = require("../../5b/5o");
let stage_selection_1 = require("../../5b/69");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_mC_static_text||($quick_mC_static_text=$createVNode(0,'loading...'))];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'props','style': 'border:solid 1px #ddd','class': 'rd-mB rd-mC rd-nR rd-nm','mx5-cmchange': $viewId+'_qf()','mx5-view': '5j/6q/index?type=html&value='+$keyOf($refData,props.value,'i!'),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5 rd-on','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),'mx5-pointerdown': $viewId+'_p2()','mx5-contextmenu': $viewId+'_p2()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_qf<cmchange>'(e) {
        let props = this.get('props');
        props.value = e.value;
    },
    '_p2<pointerdown,contextmenu>'(e) {
        if (e['_mW'])
            return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['_mW'] = 1;
        let element = this.get('element');
        if (stage_selection_1["l3"](element)) {
            history_1["l2"](history_1['mi'], element.props.ename);
        }
        //}
    }
});

});