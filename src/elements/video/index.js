/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/video/index",["5c"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_1=[];
if(props.src){
$vnode_1.push($createVNode('video',{'src': (props.src),'poster': (props.poster),'controls': (props.controls),'autoplay': (props.autoplay),'loop': (props.loop),'muted': (props.muted),'style': 'width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),}));
}else{
$vnode_2=[$createVNode(0,(i18n('rm')))];$vnode_1.push($createVNode('div',{'class': 'rd-mG rd-nO','style': 'width:'+(props.width)+(unit)+';height:'+(props.height)+(unit)+';line-height:'+(props.height)+(unit),},$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});