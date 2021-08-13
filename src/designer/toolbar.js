/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6a",["5c","../66/index","./6i","./6o","./6g","./6f","./6e","./6k","./6j","./6l","./6h","./6n","./6m"],(require,exports,module)=>{
require("./6i");
require("./6o");
require("./6g");
require("./6f");
require("./6e");
require("./6k");
require("./6j");
require("./6l");
require("./6h");
require("./6n");
require("./6m");
let $quick_mn_2_static_node;
let $quick_mj_static_text;
let $quick_mn_0_static_attr={'class': 'rd-mC rd-mH rd-mX rd-mZ',};
let $quick_mn_1_static_attr={'class': 'rd-mC rd-mI rd-mX rd-mZ',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let index_1 = require("../66/index");
let { State, View, applyStyle } = magix_1;
applyStyle("rd-m_",".rd-pj{border-radius:2px;display:inline-flex;height:22px;margin:0 2px;width:22px}.rd-pj:hover{background:#e6e6e6;color:#333}.rd-pk,.rd-pk:hover{background:#c4c4c4}.rd-pl,.rd-pm{background:#eee;height:16px;width:1px}.rd-pm{margin:3px 12px}.rd-pl{margin:3px 6px}.rd-pn{color:#aaa;cursor:not-allowed}.rd-pn:hover{background:transparent;color:#aaa}.rd-po{display:inline-block;font-weight:400;width:40px}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	mini,
	allOpen,
	i18n,}=$dataFromView,
$vnode_1,
$$_class,
$vnode_2;
$vnode_1=[];$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6i',}));
if(!mini){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6o',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6g',}));
}$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6f',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6e',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6k',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6j',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6l',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6h',}));$vnode_0=[$createVNode('div',$quick_mn_0_static_attr,$vnode_1)];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6n',})];
if($quick_mn_2_static_node){
$vnode_1.push($quick_mn_2_static_node);
}else{
$vnode_1.push($quick_mn_2_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mH rd-pl',}));
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5b/6m',}));
if($quick_mn_2_static_node){
$vnode_1.push($quick_mn_2_static_node);
}else{
$vnode_1.push($quick_mn_2_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mH rd-pl',}));
}
$vnode_2=[$quick_mj_static_text||($quick_mj_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(allOpen){;$$_class+=' rd-pk';};$vnode_1.push($createVNode('i',{'mx5-click': $viewId+'_px()','title': (i18n(allOpen?'nM':'nN')),'class': $$_class,},$vnode_2));$vnode_0.push($createVNode('div',$quick_mn_1_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('mr', update);
        this.on('destroy', () => {
            State.off('mr', update);
        });
        this.set({
            mini: State.get('l9'),
        });
    },
    render() {
        this.digest({
            allOpen: index_1["_nG"]()
        });
    },
    '_px<click>'() {
        let allOpen = this.get('allOpen');
        if (allOpen) {
            index_1["_nH"]();
        }
        else {
            index_1["_nI"]();
        }
    }
});

});