/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/data-richtext/dshow",["51","../../5g/ebind"],(require,exports,module)=>{
let $quick_gZ_0_static_attr={'class': 'rd-g9 rd-gX rd-h0',};

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
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];
if(text){
$vnode_2.push($createVNode(0,(text)));
}else{
$vnode_3=[$createVNode(0,(i18n('ij')))];$vnode_2.push($createVNode('span',{'style': 'font-size:'+(props.tfs)+(unit),},$vnode_3));
}$vnode_1=[$createVNode('div',$quick_gZ_0_static_attr,$vnode_2)];;$$_class='rd-gV rd-ig';if(enter){;$$_class+=' rd-hL';};$vnode_0=[$createVNode('div',{'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),'mx5-dragenter': $viewId+'_jW()','mx5-dragleave': $viewId+'_jX()','mx5-drop': $viewId+'_jY()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this['_jO'] = ['text', '_iY'];
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