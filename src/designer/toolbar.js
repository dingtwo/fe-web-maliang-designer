/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5c",["4e","../58/index","./5k","./5q","./5i","./5h","./5g","./5m","./5l","./5n","./5j","./5p","./5o"],(require,exports,module)=>{
require("./5k");
require("./5q");
require("./5i");
require("./5h");
require("./5g");
require("./5m");
require("./5l");
require("./5n");
require("./5j");
require("./5p");
require("./5o");
let $quick_d0_2_static_node;
let $quick_dW_static_text;
let $quick_d0_0_static_attr={'class': 'rd-eB rd-ee rd-ej rd-ez',};
let $quick_d0_1_static_attr={'class': 'rd-eB rd-ee rd-ek rd-ez',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let index_1 = require("../58/index");
let { State, View, applyStyle } = magix_1;
applyStyle("rd-dM",".rd-gW{border-radius:2px;display:inline-flex;height:22px;margin:0 2px;width:22px}.rd-gW:hover{background:#e6e6e6;color:#333}.rd-gX,.rd-gX:hover{background:#c4c4c4}.rd-gY,.rd-gZ{background:#eee;height:16px;width:1px}.rd-gZ{margin:3px 12px}.rd-gY{margin:3px 6px}.rd-g0{color:#aaa;cursor:not-allowed}.rd-g0:hover{background:transparent;color:#aaa}.rd-g1{display:inline-block;font-weight:400;width:40px}");
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
$vnode_1=[];$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5k',}));
if(!mini){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5q',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5i',}));
}$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5h',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5g',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5m',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5l',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5n',}),$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5j',}));$vnode_0=[$createVNode('div',$quick_d0_0_static_attr,$vnode_1)];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5p',})];
if($quick_d0_2_static_node){
$vnode_1.push($quick_d0_2_static_node);
}else{
$vnode_1.push($quick_d0_2_static_node=$createVNode('i',{'_': 'cH','class': 'rd-ej rd-gY',}));
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '4d/5o',}));
if($quick_d0_2_static_node){
$vnode_1.push($quick_d0_2_static_node);
}else{
$vnode_1.push($quick_d0_2_static_node=$createVNode('i',{'_': 'cH','class': 'rd-ej rd-gY',}));
}
$vnode_2=[$quick_dW_static_text||($quick_dW_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(allOpen){;$$_class+=' rd-gX';};$vnode_1.push($createVNode('i',{'mx5-click': $viewId+'_h_()','title': (i18n(allOpen?'fo':'fp')),'class': $$_class,},$vnode_2));$vnode_0.push($createVNode('div',$quick_d0_1_static_attr,$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('d4', update);
        this.on('destroy', () => {
            State.off('d4', update);
        });
        this.set({
            mini: State.get('dL'),
        });
    },
    render() {
        this.digest({
            allOpen: index_1["_fi"]()
        });
    },
    '_h_<click>'() {
        let allOpen = this.get('allOpen');
        if (allOpen) {
            index_1["_fj"]();
        }
        else {
            index_1["_fk"]();
        }
    }
});

});