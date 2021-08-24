/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/ls-border-css2/index",["51"],(require,exports,module)=>{
let $quick_ho_0_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let { View, applyStyle } = magix_1;
applyStyle("rd-go",".rd-j6{background:#0208171a;border:1px solid #0174f5;border-radius:10px;padding:1px}.rd-j7{border:2px solid #016ae0;border-radius:10px}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_1;

if($quick_ho_0_static_node){
$vnode_1=[$quick_ho_0_static_node];
}else{
$vnode_1=[$quick_ho_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gN rd-gO rd-j7',})];
}
$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig rd-j6','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});