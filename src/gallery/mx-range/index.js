/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/6e/index",["4e","../60/index"],(require,exports,module)=>{
require("../60/index");
let $quick_fL_1_static_node;
let $quick_fL_0_static_attr={'class': 'rd-ez',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	value,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'value','disabled': (disabled),'class': 'rd-dH rd-eJ rd-em','mx5-input': $viewId+'_kW({i:0})','mx5-change': $viewId+'_hE()','mx5-view': '4l/60/index?value='+$keyOf($refData,value[0],'cH'),})];
if($quick_fL_1_static_node){
$vnode_1.push($quick_fL_1_static_node);
}else{
$vnode_2=[$createVNode(0,'~')];$vnode_1.push($quick_fL_1_static_node=$createVNode('span',{'_': 'cH','class': 'rd-eW rd-ei rd-ey',},$vnode_2));
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'value','disabled': (disabled),'class': 'rd-dH rd-eJ rd-em','mx5-input': $viewId+'_kW({i:1})','mx5-change': $viewId+'_hE()','mx5-view': '4l/60/index?value='+$keyOf($refData,value[1],'cI'),}));$vnode_0=[$createVNode('div',$quick_fL_0_static_attr,$vnode_1)]; 

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
    '_kW<input>'(e) {
        this['_hR'](e);
        let { i } = e.params;
        let value = this.get('value');
        value[i] = e.value;
        magix_1.dispatch(this.root, 'input', {
            range: value
        });
    },
});

});