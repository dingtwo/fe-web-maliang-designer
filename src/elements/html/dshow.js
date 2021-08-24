/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/html/dshow",["51","../../50/5d","../../50/5u","58/6f/index"],(require,exports,module)=>{
require("58/6f/index");
let $quick_gO_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let history_1 = require("../../50/5d");
let stage_selection_1 = require("../../50/5u");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_gO_static_text||($quick_gO_static_text=$createVNode(0,'loading...'))];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'props','style': 'border:solid 1px #ddd','class': 'rd-gN rd-gO rd-h3 rd-hy','mx5-cmchange': $viewId+'_ku()','mx5-view': '58/6f/index?type=html&value='+$keyOf($refData,props.value,'eD'),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig rd-iz','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),'mx5-pointerdown': $viewId+'_kg()','mx5-contextmenu': $viewId+'_kg()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_ku<cmchange>'(e) {
        let props = this.get('props');
        props.value = e.value;
    },
    '_kg<pointerdown,contextmenu>'(e) {
        if (e['_g8'])
            return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['_g8'] = 1;
        let element = this.get('element');
        if (stage_selection_1["ge"](element)) {
            history_1["gd"](history_1['gu'], element.props.ename);
        }
        //}
    }
});

});