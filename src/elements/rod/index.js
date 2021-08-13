/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/rod/index",["5c"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$$_style,
$vnode_2,
$vnode_1;
$vnode_1=[$createVNode('span',{'style': 'flex-grow:1;border-top:1px '+(props.linetype)+' '+(props.color),})];$vnode_2=[$createVNode(0,(props.text))];$vnode_1.push($createVNode('span',{'style': 'padding:0 4px;transform:rotate('+(props.textRotate)+'deg);color:'+(props.color),},$vnode_2),$createVNode('span',{'style': 'flex-grow:1;border-top:1px '+(props.linetype)+' '+(props.color),}));;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit)+';transform:rotate('+(props.rotate)+'deg);';if(props.startBorder){;$$_style+='border-left:1px '+(props.linetype)+' '+(props.color)+';';};if(props.endBorder){;$$_style+='border-right:1px '+(props.linetype)+' '+(props.color)+';';};$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-mX rd-mZ rd-n5 rd-ng','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});