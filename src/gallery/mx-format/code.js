/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/66/code",["4e","../../4t/format","./share","../5s/index"],(require,exports,module)=>{
require("../5s/index");
let $quick_fz_0_static_node;
let $quick_fz_1_static_node;
let $quick_ee_static_text;
let $quick_eA_static_text;
let $quick_eB_static_text;
let $quick_fz_5_static_node;
let $quick_fz_3_static_attr={'class': 'rd-dS rd-et rd-fO',};
let $quick_fz_4_static_attr={'class': 'rd-dU rd-dV rd-eF rd-eU rd-ec rd-ez rd-fE rd-fJ',};


require("./share");
let magix_1 = require("4e");
let format_1 = require("../../4t/format");
let defaultFx = `/*
    item是完整的单条数据对象
    page是当前页面使用的数据列表
    all是所有数据列表
    可以把下面的console前的注释去掉查看相应的数据
    不同的场景下传递参数不一样，page和all在某些场景下不存在
*/
function(item,page,all){
    //console.log(item,page,all);
    return item;
}`;
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	parts,}=$dataFromView,
$vnode_1,
$vnode_2;

if($quick_fz_0_static_node){
$vnode_0=[$quick_fz_0_static_node];
}else{
$vnode_0=[$quick_fz_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-dQ rd-eF rd-fK',})];
}

if($quick_fz_1_static_node){
$vnode_0.push($quick_fz_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-dZ">自定义函数</h5>',1)];$vnode_0.push($quick_fz_1_static_node=$createVNode('div',{'_': 'cI','class': 'rd-dO rd-dP rd-eF rd-eG rd-ec rd-fL',},$vnode_1));
}
$vnode_2=[$quick_ee_static_text||($quick_ee_static_text=$createVNode(0,'loading...'))];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'parts','class': 'rd-iU','style': 'width:848px;height:480px','mx5-cmchange': $viewId+'_j6()','mx5-view': '4l/5s/index?value='+$keyOf($refData,parts[1],'cH'),},$vnode_2)];$vnode_0.push($createVNode('div',$quick_fz_3_static_attr,$vnode_1));$vnode_2=[$quick_eA_static_text||($quick_eA_static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_el()','class': 'rd-dL rd-dN rd-eX rd-ei','type': 'button',},$vnode_2)];$vnode_2=[$quick_eB_static_text||($quick_eB_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_et()','class': 'rd-dL rd-eX rd-e_ rd-ei','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_fz_4_static_attr,$vnode_1));
if($quick_fz_5_static_node){
$vnode_0.push($quick_fz_5_static_node);
}else{
$vnode_0.push($quick_fz_5_static_node=$createVNode('div',{'_': 'cJ','class': 'rd-dT rd-eF rd-fI',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        let me = this;
        me['_ho'] = data.format;
        me['_j3'] = data.defaultFx;
        me['_ej'] = data.dialog;
        me['_j4'] = data.done;
    },
    render() {
        let parts = format_1["_j5"](this['_ho']);
        if (!parts[1]) {
            parts[1] = this['_j3'] || defaultFx;
        }
        console.log(parts);
        this.digest({
            parts
        });
    },
    '_j6<cmchange>'(e) {
        let parts = this.get('parts');
        parts[1] = e.value.trim();
    },
    '_el<click>'() {
        this['_ej'].close();
        let parts = this.get('parts');
        this['_j4']('custom:' + parts[1]);
    },
    '_et<click>'() {
        this['_ej'].close();
    }
});

});