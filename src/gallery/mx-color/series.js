/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/70/series",["5c","./index"],(require,exports,module)=>{
require("./index");
let $quick_mN_static_text;
let $quick_l2_static_text;
let $quick_mA_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let { applyStyle, View, dispatch } = magix_1;
applyStyle("rd-mi",".rd-qv{color:#333;flex-basis:24px}.rd-qw{opacity:.5}.rd-qw:hover{opacity:1}.rd-qx{color:#bbb;cursor:not-allowed;opacity:1}");
//https://www.jianshu.com/p/e38768ac7740
//let defaultColors = ['#194f97', '#bd6b08', '#00686b', '#c82d31', '#625ba1', '#898989', '#9c9800', '#007f54', '#a195c5', '#103667', '#f19272', '#fa2c7b', '#ff38e0', '#ffa235', '#04c5f3', '#0066fe', '#8932a5', '#c90444', '#cb9bff', '#90ed7d', '#f7a35c', '#8085e9'];
let { random } = Math;
// let padStart = (str, n, char) => {
//     str += '';
//     if (str.length < n) {
//         str = Array(n - str.length + 1).join(char) + str;
//     }
//     return str;
// };
let getRandomColor = () => '#' + ('00000' + (0x1000000 * random() | 0).toString(16)).slice(-6);
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0=[],
{
	colors,
	disabled,
	i18n,
	multi,}=$dataFromView,
$$_class,
$$_mx5$_view,
$vnode_2,
$vnode_1;

for(let $q_c_tegtotfl=colors.length,$q_lc_htrqyyyxuud=$q_c_tegtotfl-1,index=0;index<$q_c_tegtotfl;index+=1){
let color=colors[index];let first=index===0;let last=index===$q_lc_htrqyyyxuud;
$vnode_1=[];;$$_mx5$_view='5j/70/index?color='+$keyOf($refData,color,'i!.'+(index)+'.i@')+'&align=right';if(($temp_var=disabled)){;$$_mx5$_view+='&disabled='+($encodeUrl($temp_var));};$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'colors','class': 'rd-mB','mx5-input': $viewId+'_rI({index:'+(index)+'})','mx5-view': $$_mx5$_view,}));$vnode_2=[$quick_mN_static_text||($quick_mN_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-qv rd-nU rd-nk rd-mF rd-qw';if(disabled){;$$_class+=' rd-qx';};$vnode_1.push($createVNode('i',{'title': (i18n('sh')),'mx5-click': $viewId+'_rL({index:'+(index)+'})','class': $$_class,},$vnode_2));
if(colors.length>1){
$vnode_2=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-qv rd-nU rd-nk rd-mF rd-qw';if(disabled){;$$_class+=' rd-qx';};$vnode_1.push($createVNode('i',{'title': (i18n('si')),'mx5-click': $viewId+'_rK({index:'+(index)+'})','class': $$_class,},$vnode_2));
};$$_class='rd-mX rd-mZ';if(!first){;$$_class+=' rd-m6';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
}
if(multi){
$vnode_1=[$quick_mA_static_text||($quick_mA_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-nk';if(disabled||colors.length>9){;$$_class+=' rd-qx';};$vnode_0.push($createVNode('i',{'title': (i18n('sj')),'mx5-click': $viewId+'_rJ()','class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_rI<input>'(e) {
        let colors = this.get('colors');
        let { index } = e.params;
        colors[index] = e.color;
        dispatch(this.root, 'change');
    },
    '_rJ<click>'() {
        if (this.get('disabled'))
            return;
        let colors = this.get('colors');
        if (colors.length > 9)
            return;
        let color = getRandomColor();
        colors.push(color);
        dispatch(this.root, 'change');
    },
    '_rK<click>'(e) {
        if (this.get('disabled'))
            return;
        let colors = this.get('colors');
        let { index } = e.params;
        colors.splice(index, 1);
        dispatch(this.root, 'change');
    },
    '_rL<click>'(e) {
        if (this.get('disabled'))
            return;
        let colors = this.get('colors');
        let { index } = e.params;
        let color = getRandomColor();
        colors[index] = color;
        dispatch(this.root, 'change');
    }
});

});