/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/62/series",["4e","./index"],(require,exports,module)=>{
require("./index");
let $quick_ep_static_text;
let $quick_dE_static_text;
let $quick_ec_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let { applyStyle, View, dispatch } = magix_1;
applyStyle("rd-dV",".rd-h8{color:#333;flex-basis:24px}.rd-h9{opacity:.5}.rd-h9:hover{opacity:1}.rd-i_{color:#bbb;cursor:not-allowed;opacity:1}");
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

for(let $q_c_pahmpro=colors.length,$q_lc_jyhhsrzck=$q_c_pahmpro-1,index=0;index<$q_c_pahmpro;index+=1){
let color=colors[index];let first=index===0;let last=index===$q_lc_jyhhsrzck;
$vnode_1=[];;$$_mx5$_view='4l/62/index?color='+$keyOf($refData,color,'cH.'+(index)+'.cI')+'&align=right';if(($temp_var=disabled)){;$$_mx5$_view+='&disabled='+($encodeUrl($temp_var));};$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'colors','class': 'rd-ed','mx5-input': $viewId+'_jk({index:'+(index)+'})','mx5-view': $$_mx5$_view,}));$vnode_2=[$quick_ep_static_text||($quick_ep_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-h8 rd-fw rd-eX rd-eh rd-h9';if(disabled){;$$_class+=' rd-i_';};$vnode_1.push($createVNode('i',{'title': (i18n('jU')),'mx5-click': $viewId+'_jn({index:'+(index)+'})','class': $$_class,},$vnode_2));
if(colors.length>1){
$vnode_2=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-h8 rd-fw rd-eX rd-eh rd-h9';if(disabled){;$$_class+=' rd-i_';};$vnode_1.push($createVNode('i',{'title': (i18n('jV')),'mx5-click': $viewId+'_jm({index:'+(index)+'})','class': $$_class,},$vnode_2));
};$$_class='rd-ez rd-eB';if(!first){;$$_class+=' rd-eI';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
}
if(multi){
$vnode_1=[$quick_ec_static_text||($quick_ec_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-eX';if(disabled||colors.length>9){;$$_class+=' rd-i_';};$vnode_0.push($createVNode('i',{'title': (i18n('jW')),'mx5-click': $viewId+'_jl()','class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_jk<input>'(e) {
        let colors = this.get('colors');
        let { index } = e.params;
        colors[index] = e.color;
        dispatch(this.root, 'change');
    },
    '_jl<click>'() {
        if (this.get('disabled'))
            return;
        let colors = this.get('colors');
        if (colors.length > 9)
            return;
        let color = getRandomColor();
        colors.push(color);
        dispatch(this.root, 'change');
    },
    '_jm<click>'(e) {
        if (this.get('disabled'))
            return;
        let colors = this.get('colors');
        let { index } = e.params;
        colors.splice(index, 1);
        dispatch(this.root, 'change');
    },
    '_jn<click>'(e) {
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