/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/71/index",["51","../6j/index"],(require,exports,module)=>{
require("../6j/index");
let $quick_ik_1_static_node;
let $quick_ik_0_static_attr={'class': 'rd-g9',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	value,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'value','disabled': (disabled),'class': 'rd-gW rd-gg rd-hi','mx5-input': $viewId+'_ny({i:0})','mx5-change': $viewId+'_kg()','mx5-view': '58/6j/index?value='+$keyOf($refData,value[0],'eD'),})];
if($quick_ik_1_static_node){
$vnode_1.push($quick_ik_1_static_node);
}else{
$vnode_2=[$createVNode(0,'~')];$vnode_1.push($quick_ik_1_static_node=$createVNode('span',{'_': 'eD','class': 'rd-g8 rd-gS rd-hv',},$vnode_2));
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'value','disabled': (disabled),'class': 'rd-gW rd-gg rd-hi','mx5-input': $viewId+'_ny({i:1})','mx5-change': $viewId+'_kg()','mx5-view': '58/6j/index?value='+$keyOf($refData,value[1],'eE'),}));$vnode_0=[$createVNode('div',$quick_ik_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        if (!data.value) {
            data.value = [];
        }
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_ny<input>'(e) {
        this['_kt'](e);
        let { i } = e.params;
        let value = this.get('value');
        value[i] = e.value;
        magix_1.dispatch(this.root, 'input', {
            range: value
        });
    },
});

});