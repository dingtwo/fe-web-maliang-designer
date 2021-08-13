/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/ls-border-css2/index",["5c"],(require,exports,module)=>{
let $quick_nc_0_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let { View, applyStyle } = magix_1;
applyStyle("rd-mc",".rd-pU{background:#0208171a;border:1px solid #0174f5;border-radius:10px;padding:1px}.rd-pV{border:2px solid #016ae0;border-radius:10px}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_1;

if($quick_nc_0_static_node){
$vnode_1=[$quick_nc_0_static_node];
}else{
$vnode_1=[$quick_nc_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-mB rd-mC rd-pV',})];
}
$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5 rd-pU','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});