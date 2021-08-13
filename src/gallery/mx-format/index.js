/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/74/index",["5c","../../5r/format","../62/index","./share"],(require,exports,module)=>{
let $quick_mM_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let format_1 = require("../../5r/format");
let index_1 = require("../62/index");
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
$vnode_1=[];$text='';if(text){;$text+=' '+(text)+' ';}else{;$text+=' 点击选择显示格式 ';};$vnode_2=[$createVNode(0,$text)];;$$_class='rd-mW rd-mU';if(!text||disabled){;$$_class+=' rd-nL';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));
if(format){
$vnode_2=[$quick_mM_static_text||($quick_mM_static_text=$createVNode(0,''))];$vnode_1.push($createVNode('i',{'class': 'rd-l3 rd-rc','mx5-click': ((!disabled))&&($viewId+'_sv()'),'title': '清除格式',},$vnode_2));
};$$_class='rd-q7 rd-nk rd-mX rd-mZ';if(disabled){;$$_class+=' rd-rd';};$vnode_0=[$createVNode('div',{'mx5-click': ((!disabled))&&($viewId+'_su()'),'title': ($temp_var=(text))!=null&&$temp_var,'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            text: format_1["_sw"](this.get('format'))
        });
    },
    '_su<click>'() {
        let me = this;
        me.mxDialog("5j/74/list", {
            width: 900,
            format: me.get('format'),
            done(format) {
                dispatch(me.root, 'change', {
                    format
                });
            }
        });
    },
    '_sv<click>'(e) {
        dispatch(this.root, 'change', {
            format: ''
        });
    }
}).merge(index_1);

});