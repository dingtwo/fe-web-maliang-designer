/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6p/code",["51","../../5g/format","./share","../6f/index"],(require,exports,module)=>{
require("../6f/index");
let $quick_h9_0_static_node;
let $quick_h9_1_static_node;
let $quick_gO_static_text;
let $quick_h__static_text;
let $quick_ha_static_text;
let $quick_h9_5_static_node;
let $quick_h9_3_static_attr={'class': 'rd-g3 rd-gr rd-in',};
let $quick_h9_4_static_attr={'class': 'rd-g9 rd-gM rd-gt rd-gu rd-he rd-ht rd-id rd-ii',};


require("./share");
let magix_1 = require("51");
let format_1 = require("../../5g/format");
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

if($quick_h9_0_static_node){
$vnode_0=[$quick_h9_0_static_node];
}else{
$vnode_0=[$quick_h9_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gp rd-he rd-ij',})];
}

if($quick_h9_1_static_node){
$vnode_0.push($quick_h9_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-gy">自定义函数</h5>',1)];$vnode_0.push($quick_h9_1_static_node=$createVNode('div',{'_': 'eE','class': 'rd-gM rd-gn rd-go rd-he rd-hf rd-ik',},$vnode_1));
}
$vnode_2=[$quick_gO_static_text||($quick_gO_static_text=$createVNode(0,'loading...'))];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'parts','class': 'rd-lt','style': 'width:848px;height:480px','mx5-cmchange': $viewId+'_mI()','mx5-view': '58/6f/index?value='+$keyOf($refData,parts[1],'eD'),},$vnode_2)];$vnode_0.push($createVNode('div',$quick_h9_3_static_attr,$vnode_1));$vnode_2=[$quick_h__static_text||($quick_h__static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_gV()','class': 'rd-gS rd-gk rd-gm rd-hw','type': 'button',},$vnode_2)];$vnode_2=[$quick_ha_static_text||($quick_ha_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_g3()','class': 'rd-gJ rd-gS rd-gk rd-hw','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_h9_4_static_attr,$vnode_1));
if($quick_h9_5_static_node){
$vnode_0.push($quick_h9_5_static_node);
}else{
$vnode_0.push($quick_h9_5_static_node=$createVNode('div',{'_': 'eF','class': 'rd-gs rd-he rd-ih',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        let me = this;
        me['_j1'] = data.format;
        me['_mF'] = data.defaultFx;
        me['_gT'] = data.dialog;
        me['_mG'] = data.done;
    },
    render() {
        let parts = format_1["_mH"](this['_j1']);
        if (!parts[1]) {
            parts[1] = this['_mF'] || defaultFx;
        }
        console.log(parts);
        this.digest({
            parts
        });
    },
    '_mI<cmchange>'(e) {
        let parts = this.get('parts');
        parts[1] = e.value.trim();
    },
    '_gV<click>'() {
        this['_gT'].close();
        let parts = this.get('parts');
        this['_mG']('custom:' + parts[1]);
    },
    '_g3<click>'() {
        this['_gT'].close();
    }
});

});