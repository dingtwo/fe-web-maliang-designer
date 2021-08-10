/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/ls-border-css4/index",["4e"],(require,exports,module)=>{
let $quick_eQ_0_static_node;
let $quick_eQ_1_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let { View, applyStyle } = magix_1;
applyStyle("rd-dQ",".rd-hy{background:#0001;border:1px solid #19ba8b2b}.rd-hz:after,.rd-hz:before,.rd-hA:after,.rd-hA:before{content:\"\";height:10px;position:absolute;width:10px}.rd-hA:before{border-left:2px solid #02a6b5;left:0}.rd-hA:after,.rd-hA:before{border-top:2px solid #02a6b5}.rd-hA:after{border-right:2px solid #02a6b5;right:0}.rd-hz:before{border-left:2px solid #02a6b5;left:0}.rd-hz:after,.rd-hz:before{border-bottom:2px solid #02a6b5;bottom:0}.rd-hz:after{border-right:2px solid #02a6b5;right:0}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_1;

if($quick_eQ_0_static_node){
$vnode_1=[$quick_eQ_0_static_node];
}else{
$vnode_1=[$quick_eQ_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-ed rd-el rd-fB rd-hA',})];
}

if($quick_eQ_1_static_node){
$vnode_1.push($quick_eQ_1_static_node);
}else{
$vnode_1.push($quick_eQ_1_static_node=$createVNode('div',{'_': 'cI','class': 'rd-ed rd-el rd-fB rd-fE rd-hz',}));
}
$vnode_0=[$createVNode('div',{'class': 'rd-el rd-fH rd-hy','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});