/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/richtext/index",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$$_class,
$$_style,
$vnode_1;
$vnode_1=[$createVNode(0,(props.text),1)];;$$_class='rd-gV rd-ig';if(!props.splitToPages){;$$_class+=' rd-h2';};$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:';if(props.splitToPages){;$$_style+='auto';}else{;$$_style+=''+(props.height)+(unit);};$vnode_0=[$createVNode('div',{'class': $$_class,'style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});