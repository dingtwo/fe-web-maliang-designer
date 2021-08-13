/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/7c/index",["5c","../6u/index"],(require,exports,module)=>{
require("../6u/index");
let $quick_n9_1_static_node;
let $quick_n9_0_static_attr={'class': 'rd-mX',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	value,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'value','disabled': (disabled),'class': 'rd-l5 rd-m7 rd-mK','mx5-input': $viewId+'_tj({i:0})','mx5-change': $viewId+'_p2()','mx5-view': '5j/6u/index?value='+$keyOf($refData,value[0],'i!'),})];
if($quick_n9_1_static_node){
$vnode_1.push($quick_n9_1_static_node);
}else{
$vnode_2=[$createVNode(0,'~')];$vnode_1.push($quick_n9_1_static_node=$createVNode('span',{'_': 'i!','class': 'rd-mG rd-mW rd-nj',},$vnode_2));
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'value','disabled': (disabled),'class': 'rd-l5 rd-m7 rd-mK','mx5-input': $viewId+'_tj({i:1})','mx5-change': $viewId+'_p2()','mx5-view': '5j/6u/index?value='+$keyOf($refData,value[1],'i@'),}));$vnode_0=[$createVNode('div',$quick_n9_0_static_attr,$vnode_1)]; 

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
    '_tj<input>'(e) {
        this['_qe'](e);
        let { i } = e.params;
        let value = this.get('value');
        value[i] = e.value;
        magix_1.dispatch(this.root, 'input', {
            range: value
        });
    },
});

});