/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/circle/index",["5c"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let { min } = Math;
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	bw,}=$dataFromView,
$$_style;
;$$_style='border-radius:50%;left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';';if(bw){;$$_style+='border:'+(bw)+(unit)+' '+(props.bordertype)+' '+(props.bordercolor)+';';};if(props.fillcolor){;$$_style+='background:'+(props.fillcolor)+';';};$$_style+='height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)';$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5','style': $$_style,})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        let { props } = data;
        let { borderwidth: bw, width, height } = props;
        let minSize = min(width, height);
        let half = minSize / 2;
        if (bw > half) {
            bw = half;
        }
        this.set(data);
        this.set({
            bw
        });
    },
    render() {
        this.digest();
    }
});

});