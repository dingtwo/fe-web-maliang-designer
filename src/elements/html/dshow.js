/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/html/dshow",["4e","../../4d/4q","../../4d/5b","4l/5s/index"],(require,exports,module)=>{
require("4l/5s/index");
let $quick_ee_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let history_1 = require("../../4d/4q");
let stage_selection_1 = require("../../4d/5b");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_2=[$quick_ee_static_text||($quick_ee_static_text=$createVNode(0,'loading...'))];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'props','style': 'border:solid 1px #ddd','class': 'rd-eZ rd-ed rd-ee rd-ft','mx5-cmchange': $viewId+'_hS()','mx5-view': '4l/5s/index?type=html&value='+$keyOf($refData,props.value,'cH'),},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-el rd-f0 rd-fH','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),'mx5-pointerdown': $viewId+'_hE()','mx5-contextmenu': $viewId+'_hE()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_hS<cmchange>'(e) {
        let props = this.get('props');
        props.value = e.value;
    },
    '_hE<pointerdown,contextmenu>'(e) {
        if (e['_ey'])
            return;
        // let { target } = e;
        // if (target.id != `${this.id}_pv`) {
        e['_ey'] = 1;
        let element = this.get('element');
        if (stage_selection_1["dF"](element)) {
            history_1["dE"](history_1['dV'], element.props.ename);
        }
        //}
    }
});

});