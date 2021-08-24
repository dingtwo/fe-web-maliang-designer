/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/ls-border-css4/index",["51"],(require,exports,module)=>{
let $quick_hp_0_static_node;
let $quick_hp_1_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let { View, applyStyle } = magix_1;
applyStyle("rd-gp",".rd-j8{background:#0001;border:1px solid #19ba8b2b}.rd-j9:after,.rd-j9:before,.rd-k_:after,.rd-k_:before{content:\"\";height:10px;position:absolute;width:10px}.rd-k_:before{border-left:2px solid #02a6b5;left:0}.rd-k_:after,.rd-k_:before{border-top:2px solid #02a6b5}.rd-k_:after{border-right:2px solid #02a6b5;right:0}.rd-j9:before{border-left:2px solid #02a6b5;left:0}.rd-j9:after,.rd-j9:before{border-bottom:2px solid #02a6b5;bottom:0}.rd-j9:after{border-right:2px solid #02a6b5;right:0}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_1;

if($quick_hp_0_static_node){
$vnode_1=[$quick_hp_0_static_node];
}else{
$vnode_1=[$quick_hp_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gN rd-gV rd-ia rd-k_',})];
}

if($quick_hp_1_static_node){
$vnode_1.push($quick_hp_1_static_node);
}else{
$vnode_1.push($quick_hp_1_static_node=$createVNode('div',{'_': 'eE','class': 'rd-gN rd-gV rd-ia rd-id rd-j9',}));
}
$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig rd-j8','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});