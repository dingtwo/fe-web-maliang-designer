/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/repeat/index",["4e"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let { View, isArray } = magix_1;
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$$_style;
;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg);';if(props.radius){;$$_style+='border-radius:'+(props.radius)+(unit)+';';};if(props.image||props.webUrl){;$$_style+='background-image:url('+(props.image||props.webUrl)+');';if(props.repeat=='full'){;$$_style+='background-size:100% 100%;';}else if(props.imageWidth>0&&props.imageHeight>0){;$$_style+='background-size:'+(props.imageWidth)+(unit)+' '+(props.imageHeight)+(unit)+';';};$$_style+='background-repeat:'+(props.repeat=='full'?'no-repeat':props.repeat)+';background-position:'+(props.backgroundXOffset)+(unit)+' '+(props.backgroundYOffset)+(unit);};$vnode_0=[$createVNode('div',{'class': 'rd-el rd-fH rd-fq','style': $$_style,})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            if (bind._tip) {
                text = bind._tip;
            }
            else if (bind._data) {
                let src = bind._data;
                if (isArray(src)) {
                    src = src[0];
                }
                props.image = src[bindField.id];
            }
            else {
                text = `[绑定:${bindField.name}]`;
            }
        }
        this.set({
            text
        });
    },
    render() {
        this.digest();
    }
});

});