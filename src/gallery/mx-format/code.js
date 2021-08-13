/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/74/code",["5c","../../5r/format","./share","../6q/index"],(require,exports,module)=>{
require("../6q/index");
let $quick_nX_0_static_node;
let $quick_nX_1_static_node;
let $quick_mC_static_text;
let $quick_mY_static_text;
let $quick_mZ_static_text;
let $quick_nX_5_static_node;
let $quick_nX_3_static_attr={'class': 'rd-mR rd-mf rd-ob',};
let $quick_nX_4_static_attr={'class': 'rd-m3 rd-mA rd-mX rd-mh rd-mi rd-n2 rd-n7 rd-nh',};


require("./share");
let magix_1 = require("5c");
let format_1 = require("../../5r/format");
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

if($quick_nX_0_static_node){
$vnode_0=[$quick_nX_0_static_node];
}else{
$vnode_0=[$quick_nX_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-m3 rd-md rd-n8',})];
}

if($quick_nX_1_static_node){
$vnode_0.push($quick_nX_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-mm">自定义函数</h5>',1)];$vnode_0.push($quick_nX_1_static_node=$createVNode('div',{'_': 'i@','class': 'rd-m3 rd-m4 rd-mA rd-mb rd-mc rd-n9',},$vnode_1));
}
$vnode_2=[$quick_mC_static_text||($quick_mC_static_text=$createVNode(0,'loading...'))];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'parts','class': 'rd-rh','style': 'width:848px;height:480px','mx5-cmchange': $viewId+'_st()','mx5-view': '5j/6q/index?value='+$keyOf($refData,parts[1],'i!'),},$vnode_2)];$vnode_0.push($createVNode('div',$quick_nX_3_static_attr,$vnode_1));$vnode_2=[$quick_mY_static_text||($quick_mY_static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_mJ()','class': 'rd-l9 rd-mG rd-ma rd-nk','type': 'button',},$vnode_2)];$vnode_2=[$quick_mZ_static_text||($quick_mZ_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_mR()','class': 'rd-l9 rd-mG rd-mx rd-nk','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_nX_4_static_attr,$vnode_1));
if($quick_nX_5_static_node){
$vnode_0.push($quick_nX_5_static_node);
}else{
$vnode_0.push($quick_nX_5_static_node=$createVNode('div',{'_': 'i$','class': 'rd-m3 rd-mg rd-n6',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        let me = this;
        me['_pM'] = data.format;
        me['_sq'] = data.defaultFx;
        me['_mH'] = data.dialog;
        me['_sr'] = data.done;
    },
    render() {
        let parts = format_1["_ss"](this['_pM']);
        if (!parts[1]) {
            parts[1] = this['_sq'] || defaultFx;
        }
        console.log(parts);
        this.digest({
            parts
        });
    },
    '_st<cmchange>'(e) {
        let parts = this.get('parts');
        parts[1] = e.value.trim();
    },
    '_mJ<click>'() {
        this['_mH'].close();
        let parts = this.get('parts');
        this['_sr']('custom:' + parts[1]);
    },
    '_mR<click>'() {
        this['_mH'].close();
    }
});

});