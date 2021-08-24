/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/image/index",["51"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let { View, isArray } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0=[],
{
	image,
	props,
	unit,}=$dataFromView,
$$_style;

if(image){
;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg);';if(props.rotateX||props.rotateY){;$$_style+=';transform:';if(props.rotateX){;$$_style+='rotateX(180deg)';};if(props.rotateY){;$$_style+=' rotateY(180deg)';};};$vnode_0.push($createVNode('img',{'class': 'rd-gB rd-gV rd-ig','src': (image),'style': $$_style,},1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, image, webUrl } = props;
        let text = '';
        if (!image && webUrl) {
            image = webUrl;
        }
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
                image = src[bindField.id];
            }
            else {
                text = `[绑定:${bindField.name}]`;
            }
        }
        this.set({
            image,
            text
        });
    },
    render() {
        this.digest();
    }
});

});