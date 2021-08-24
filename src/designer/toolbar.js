/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/5v",["51","../5r/index","./67","./6d","./65","./64","./63","./69","./68","./6a","./66","./6c","./6b"],(require,exports,module)=>{
require("./67");
require("./6d");
require("./65");
require("./64");
require("./63");
require("./69");
require("./68");
require("./6a");
require("./66");
require("./6c");
require("./6b");
let $quick_gz_2_static_node;
let $quick_gv_static_text;
let $quick_gz_0_static_attr={'class': 'rd-g9 rd-gO rd-gT rd-ha',};
let $quick_gz_1_static_attr={'class': 'rd-g9 rd-gO rd-gU rd-ha',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../5r/index");
let { State, View, applyStyle } = magix_1;
applyStyle("rd-gl",".rd-jv{border-radius:2px;display:inline-flex;height:22px;margin:0 2px;width:22px}.rd-jv:hover{background:#e6e6e6;color:#333}.rd-jw,.rd-jw:hover{background:#c4c4c4}.rd-jx,.rd-jy{background:#eee;height:16px;width:1px}.rd-jy{margin:3px 12px}.rd-jx{margin:3px 6px}.rd-jz{color:#aaa;cursor:not-allowed}.rd-jz:hover{background:transparent;color:#aaa}.rd-jA{display:inline-block;font-weight:400;width:40px}");
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
$vnode_1=[];$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/67',}));
if(!mini){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/6d',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/65',}));
}$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/64',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/63',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/69',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/68',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/6a',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/66',}));$vnode_0=[$createVNode('div',$quick_gz_0_static_attr,$vnode_1)];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/6c',})];
if($quick_gz_2_static_node){
$vnode_1.push($quick_gz_2_static_node);
}else{
$vnode_1.push($quick_gz_2_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gT rd-jx',}));
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '50/6b',}));
if($quick_gz_2_static_node){
$vnode_1.push($quick_gz_2_static_node);
}else{
$vnode_1.push($quick_gz_2_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gT rd-jx',}));
}
$vnode_2=[$quick_gv_static_text||($quick_gv_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(allOpen){;$$_class+=' rd-jw';};$vnode_1.push($createVNode('i',{'mx5-click': $viewId+'_jM()','title': (i18n(allOpen?'hY':'hZ')),'class': $$_class,},$vnode_2));$vnode_0.push($createVNode('div',$quick_gz_1_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('gD', update);
        this.on('destroy', () => {
            State.off('gD', update);
        });
        this.set({
            mini: State.get('gk'),
        });
    },
    render() {
        this.digest({
            allOpen: index_1["_hS"]()
        });
    },
    '_jM<click>'() {
        let allOpen = this.get('allOpen');
        if (allOpen) {
            index_1["_hT"]();
        }
        else {
            index_1["_hU"]();
        }
    }
});

});