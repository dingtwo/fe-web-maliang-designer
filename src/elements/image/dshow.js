/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/image/dshow",["51","../../5g/ebind"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let ebind_1 = require("../../5g/ebind");
let { View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	enter,
	props,
	unit,
	text,
	i18n,}=$dataFromView,
$$_class,
$$_style,
$vnode_2,
$vnode_1;
$vnode_1=[];
if(props.image||props.webUrl){
;$$_style='';if(props.rotateX||props.rotateY){;$$_style+='transform:';if(props.rotateX){;$$_style+='rotateX(180deg)';};if(props.rotateY){;$$_style+=' rotateY(180deg)';};};$vnode_1.push($createVNode('img',{'class': 'rd-gB rd-gN rd-gO rd-gX','src': (props.image||props.webUrl),'style': $$_style,},1));
}else{
$vnode_2=[$createVNode(0,(text||i18n('kl')))];$vnode_1.push($createVNode('div',{'class': 'rd-gS rd-gX rd-h0','style': 'font-size:'+(props.tfs)+(unit)+';height:'+(props.height)+(unit)+';line-height:'+(props.height)+(unit)+';width:'+(props.width)+(unit),},$vnode_2));
};$$_class='rd-h0 rd-ig rd-gV';if(enter){;$$_class+=' rd-hL';};$vnode_0=[$createVNode('div',{'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)','mx5-dragenter': $viewId+'_jW()','mx5-dragleave': $viewId+'_jX()','mx5-drop': $viewId+'_jY()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this['_jO'] = ['image'];
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