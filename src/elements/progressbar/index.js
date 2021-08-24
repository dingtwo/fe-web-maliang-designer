/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/progressbar/index",["51","../../5g/format"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let format_1 = require("../../5g/format");
let { View, isArray } = magix_1;
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	value,
	text,}=$dataFromView,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];
if(props.showText||text){
$vnode_3=[$createVNode(0,(text||value+'%'))];$vnode_2.push($createVNode('span',{'class': 'rd-gV','style': 'transform:translate(50%,-100%);right:0;color:'+(props.textColor)+';font-size:'+(props.textFontsize)+(unit),},$vnode_3));
}$vnode_1=[$createVNode('div',{'style': 'width:'+(value)+'%;background-color:'+(props.barcolor)+';border-radius:'+(props.radius)+(unit),'class': 'rd-gO rd-gW',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-gV','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg);background-color:'+(props.background)+';border-radius:'+(props.radius)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, value, textFormat } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            if (bind._tip) {
                text = bind._tip;
                value = 60;
            }
            else if (bind._data) {
                let src = bind._data;
                if (isArray(src)) {
                    src = src[0];
                }
                value = src[bindField.id];
                value = format_1['_j1'](textFormat, value, props);
                if (isNaN(value) ||
                    !isFinite(value)) {
                    value = 0;
                }
                if (value < 0) {
                    value = 0;
                }
                else if (value > 100) {
                    value = 100;
                }
            }
            else {
                text = `[绑定:${bindField.name}]`;
                value = 60;
            }
        }
        this.set({
            value,
            text
        });
    },
    render() {
        this.digest();
    }
});

});