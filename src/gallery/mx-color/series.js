/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6l/series",["51","./index"],(require,exports,module)=>{
require("./index");
let $quick_gZ_static_text;
let $quick_gd_static_text;
let $quick_gM_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let { applyStyle, View, dispatch } = magix_1;
applyStyle("rd-gu",".rd-kH{color:#333;flex-basis:24px}.rd-kI{opacity:.5}.rd-kI:hover{opacity:1}.rd-kJ{color:#bbb;cursor:not-allowed;opacity:1}");
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

for(let $q_c_ayvcovmeiit=colors.length,$q_lc_gsjke=$q_c_ayvcovmeiit-1,index=0;index<$q_c_ayvcovmeiit;index+=1){
let color=colors[index];let first=index===0;let last=index===$q_lc_gsjke;
$vnode_1=[];;$$_mx5$_view='58/6l/index?color='+$keyOf($refData,color,'eD.'+(index)+'.eE')+'&align=right';if(($temp_var=disabled)){;$$_mx5$_view+='&disabled='+($encodeUrl($temp_var));};$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'colors','class': 'rd-gN','mx5-input': $viewId+'_lX({index:'+(index)+'})','mx5-view': $$_mx5$_view,}));$vnode_2=[$quick_gZ_static_text||($quick_gZ_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-kH rd-h6 rd-hw rd-gR rd-kI';if(disabled){;$$_class+=' rd-kJ';};$vnode_1.push($createVNode('i',{'title': (i18n('ms')),'mx5-click': $viewId+'_l0({index:'+(index)+'})','class': $$_class,},$vnode_2));
if(colors.length>1){
$vnode_2=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-kH rd-h6 rd-hw rd-gR rd-kI';if(disabled){;$$_class+=' rd-kJ';};$vnode_1.push($createVNode('i',{'title': (i18n('mt')),'mx5-click': $viewId+'_lZ({index:'+(index)+'})','class': $$_class,},$vnode_2));
};$$_class='rd-g9 rd-ha';if(!first){;$$_class+=' rd-hh';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
}
if(multi){
$vnode_1=[$quick_gM_static_text||($quick_gM_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-hw';if(disabled||colors.length>9){;$$_class+=' rd-kJ';};$vnode_0.push($createVNode('i',{'title': (i18n('mu')),'mx5-click': $viewId+'_lY()','class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_lX<input>'(e) {
        let colors = this.get('colors');
        let { index } = e.params;
        colors[index] = e.color;
        dispatch(this.root, 'change');
    },
    '_lY<click>'() {
        if (this.get('disabled'))
            return;
        let colors = this.get('colors');
        if (colors.length > 9)
            return;
        let color = getRandomColor();
        colors.push(color);
        dispatch(this.root, 'change');
    },
    '_lZ<click>'(e) {
        if (this.get('disabled'))
            return;
        let colors = this.get('colors');
        let { index } = e.params;
        colors.splice(index, 1);
        dispatch(this.root, 'change');
    },
    '_l0<click>'(e) {
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