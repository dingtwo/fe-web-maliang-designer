/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/data-richtext/dshow",["5c","../../5r/ebind"],(require,exports,module)=>{
let $quick_mN_0_static_attr={'class': 'rd-mL rd-mX rd-nO',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let ebind_1 = require("../../5r/ebind");
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
$vnode_3=[$createVNode(0,(i18n('n9')))];$vnode_2.push($createVNode('span',{'style': 'font-size:'+(props.tfs)+(unit),},$vnode_3));
}$vnode_1=[$createVNode('div',$quick_mN_0_static_attr,$vnode_2)];;$$_class='rd-mJ rd-n5';if(enter){;$$_class+=' rd-nz';};$vnode_0=[$createVNode('div',{'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),'mx5-dragenter': $viewId+'_pH()','mx5-dragleave': $viewId+'_pI()','mx5-drop': $viewId+'_pJ()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this['_pz'] = ['text', '_oJ'];
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