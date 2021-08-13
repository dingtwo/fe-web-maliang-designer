/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/ls-border-css4/index",["5c"],(require,exports,module)=>{
let $quick_nd_0_static_node;
let $quick_nd_1_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let { View, applyStyle } = magix_1;
applyStyle("rd-md",".rd-pW{background:#0001;border:1px solid #19ba8b2b}.rd-pX:after,.rd-pX:before,.rd-pY:after,.rd-pY:before{content:\"\";height:10px;position:absolute;width:10px}.rd-pY:before{border-left:2px solid #02a6b5;left:0}.rd-pY:after,.rd-pY:before{border-top:2px solid #02a6b5}.rd-pY:after{border-right:2px solid #02a6b5;right:0}.rd-pX:before{border-left:2px solid #02a6b5;left:0}.rd-pX:after,.rd-pX:before{border-bottom:2px solid #02a6b5;bottom:0}.rd-pX:after{border-right:2px solid #02a6b5;right:0}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_1;

if($quick_nd_0_static_node){
$vnode_1=[$quick_nd_0_static_node];
}else{
$vnode_1=[$quick_nd_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-mB rd-mJ rd-nZ rd-pY',})];
}

if($quick_nd_1_static_node){
$vnode_1.push($quick_nd_1_static_node);
}else{
$vnode_1.push($quick_nd_1_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mB rd-mJ rd-n2 rd-nZ rd-pX',}));
}
$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5 rd-pW','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});