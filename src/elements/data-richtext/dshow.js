/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/data-richtext/dshow",["4e","../../4t/ebind"],(require,exports,module)=>{
let $quick_ep_0_static_attr={'class': 'rd-en rd-ez rd-fq',};

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
	text,
	i18n,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];
if(text){
$vnode_2.push($createVNode(0,(text)));
}else{
$vnode_3=[$createVNode(0,(i18n('fL')))];$vnode_2.push($createVNode('span',{'style': 'font-size:'+(props.tfs)+(unit),},$vnode_3));
}$vnode_1=[$createVNode('div',$quick_ep_0_static_attr,$vnode_2)];;$$_class='rd-el rd-fH';if(enter){;$$_class+=' rd-fb';};$vnode_0=[$createVNode('div',{'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),'mx5-dragenter': $viewId+'_hj()','mx5-dragleave': $viewId+'_hk()','mx5-drop': $viewId+'_hl()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this['_hb'] = ['text', '_gl'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { text, bind } = props;
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