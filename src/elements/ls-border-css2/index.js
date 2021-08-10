/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/ls-border-css2/index",["4e"],(require,exports,module)=>{
let $quick_eP_0_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let { View, applyStyle } = magix_1;
applyStyle("rd-dP",".rd-hw{background:#0208171a;border:1px solid #0174f5;border-radius:10px;padding:1px}.rd-hx{border:2px solid #016ae0;border-radius:10px}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_1;

if($quick_eP_0_static_node){
$vnode_1=[$quick_eP_0_static_node];
}else{
$vnode_1=[$quick_eP_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-ed rd-ee rd-hx',})];
}
$vnode_0=[$createVNode('div',{'class': 'rd-el rd-fH rd-hw','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});