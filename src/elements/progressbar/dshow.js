/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/progressbar/dshow",["4e","../../4t/ebind"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let ebind_1 = require("../../4t/ebind");
let { View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	enter,
	props,
	unit,
	value,
	text,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];
if(props.showText||text){
$vnode_3=[$createVNode(0,(text||value+'%'))];$vnode_2.push($createVNode('span',{'class': 'rd-el rd-en','style': 'transform:translate(50%,-100%);right:0;color:'+(props.textColor)+';font-size:'+(props.textFontsize)+(unit),},$vnode_3));
}$vnode_1=[$createVNode('div',{'style': 'width:'+(value)+'%;background-color:'+(props.barcolor)+';border-radius:'+(props.radius)+(unit),'class': 'rd-ee rd-em rd-en',},$vnode_2)];;$$_class='rd-fH rd-el';if(enter){;$$_class+=' rd-fb';};$vnode_0=[$createVNode('div',{'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg);background-color:'+(props.background)+';border-radius:'+(props.radius)+(unit),'mx5-dragenter': $viewId+'_hj()','mx5-dragleave': $viewId+'_hk()','mx5-drop': $viewId+'_hl()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, value } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[绑定:${bindField.name}]`;
            value = 60;
        }
        this.set({
            value,
            text
        });
    },
    render() {
        this.digest();
    }
}).merge(ebind_1);

});