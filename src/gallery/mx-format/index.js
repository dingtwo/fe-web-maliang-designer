/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6p/index",["51","../../5g/format","../5n/index","./share"],(require,exports,module)=>{
let $quick_gY_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let format_1 = require("../../5g/format");
let index_1 = require("../5n/index");
require("./share");

let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	text,
	format,}=$dataFromView,
$$_class,
$text,
$vnode_2,
$vnode_1;
$vnode_1=[];$text='';if(text){;$text+=' '+(text)+' ';}else{;$text+=' 点击选择显示格式 ';};$vnode_2=[$createVNode(0,$text)];;$$_class='rd-g8 rd-g6';if(!text||disabled){;$$_class+=' rd-hX';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));
if(format){
$vnode_2=[$quick_gY_static_text||($quick_gY_static_text=$createVNode(0,''))];$vnode_1.push($createVNode('i',{'class': 'rd-ge rd-lo','mx5-click': ((!disabled))&&($viewId+'_mK()'),'title': '清除格式',},$vnode_2));
};$$_class='rd-li rd-hw rd-g9 rd-ha';if(disabled){;$$_class+=' rd-lp';};$vnode_0=[$createVNode('div',{'mx5-click': ((!disabled))&&($viewId+'_mJ()'),'title': ($temp_var=(text))!=null&&$temp_var,'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            text: format_1["_mL"](this.get('format'))
        });
    },
    '_mJ<click>'() {
        let me = this;
        me.mxDialog("58/6p/list", {
            width: 900,
            format: me.get('format'),
            done(format) {
                dispatch(me.root, 'change', {
                    format
                });
            }
        });
    },
    '_mK<click>'(e) {
        dispatch(this.root, 'change', {
            format: ''
        });
    }
}).merge(index_1);

});