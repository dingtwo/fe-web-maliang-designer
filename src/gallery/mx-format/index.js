/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/66/index",["4e","../../4t/format","../54/index","./share"],(require,exports,module)=>{
let $quick_eo_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let format_1 = require("../../4t/format");
let index_1 = require("../54/index");
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
$vnode_1=[];$text='';if(text){;$text+=' '+(text)+' ';}else{;$text+=' 点击选择显示格式 ';};$vnode_2=[$createVNode(0,$text)];;$$_class='rd-ey rd-ew';if(!text||disabled){;$$_class+=' rd-fn';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));
if(format){
$vnode_2=[$quick_eo_static_text||($quick_eo_static_text=$createVNode(0,''))];$vnode_1.push($createVNode('i',{'class': 'rd-dF rd-iP','mx5-click': ((!disabled))&&($viewId+'_j8()'),'title': '清除格式',},$vnode_2));
};$$_class='rd-iJ rd-eX rd-ez rd-eB';if(disabled){;$$_class+=' rd-iQ';};$vnode_0=[$createVNode('div',{'mx5-click': ((!disabled))&&($viewId+'_j7()'),'title': ($temp_var=(text))!=null&&$temp_var,'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            text: format_1["_j9"](this.get('format'))
        });
    },
    '_j7<click>'() {
        let me = this;
        me.mxDialog("4l/66/list", {
            width: 900,
            format: me.get('format'),
            done(format) {
                dispatch(me.root, 'change', {
                    format
                });
            }
        });
    },
    '_j8<click>'(e) {
        dispatch(this.root, 'change', {
            format: ''
        });
    }
}).merge(index_1);

});