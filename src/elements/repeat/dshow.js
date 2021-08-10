/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/repeat/dshow",["4e","../../4t/ebind"],(require,exports,module)=>{


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
	uit,
	text,
	i18n,}=$dataFromView,
$$_class,
$$_style,
$vnode_2,
$vnode_1;
$vnode_1=[];
if(!props.image&&!props.webUrl){
$vnode_2=[$createVNode(0,(text||i18n('iL')))];$vnode_1.push($createVNode('div',{'class': 'rd-ei rd-en rd-fq','style': 'font-size:'+(props.tfs)+(unit)+';height:'+(props.height)+(unit)+';line-height:'+(props.height)+(unit)+';width:'+(props.width)+(unit),},$vnode_2));
};$$_class='rd-el rd-fH rd-fq';if(enter){;$$_class+=' rd-fb';};$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg);';if(props.radius){;$$_style+='border-radius:'+(props.radius)+(unit)+';';};if(props.image||props.webUrl){;$$_style+='background-image:url('+(props.image||props.webUrl)+');';if(props.repeat=='full'){;$$_style+='background-size:100% 100%;';}else if(props.imageWidth>0 && props.imageHeight>0){;$$_style+='background-size:'+(props.imageWidth)+(unit)+' '+(props.imageHeight)+(unit)+';';};$$_style+='background-repeat:'+(props.repeat=='full'?'no-repeat':props.repeat)+';background-position:'+(props.backgroundXOffset)+(uit)+' '+(props.backgroundYOffset)+(uit);};$vnode_0=[$createVNode('div',{'mx5-dragenter': $viewId+'_hj()','mx5-dragleave': $viewId+'_hk()','mx5-drop': $viewId+'_hl()','class': $$_class,'style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this['_hb'] = ['image'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[绑定:${bindField.name}]`;
        }
        this.set({
            text
        });
    },
    render() {
        this.digest();
    },
}).merge(ebind_1);

});