/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-color/series",["magix5","./index"],(require,exports,module)=>{
require("./index");
let $quick_k6_static_text;
let $quick_kk_static_text;
let $quick_kT_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { applyStyle, View, dispatch } = magix_1;
applyStyle("rd-_gallery_mx-color_series_less_","\n.rd-_gallery_mx-color_series_less_-flex-right {\nflex-basis:24px;\ncolor:#333;\n}\n.rd-_gallery_mx-color_series_less_-right-icon {\nopacity:0.5;\n}\n.rd-_gallery_mx-color_series_less_-right-icon:hover {\nopacity:1;\n}\n.rd-_gallery_mx-color_series_less_-notallowed {\nopacity:1;\ncursor:not-allowed;\ncolor:#bbb;\n}\n");
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
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	colors,
	disabled,
	i18n,
	multi,}=$dataFromView,
$$_class,
$$_mx5$_view,
$vnode_2,
$vnode_1;
$__line=1;$__art="{{each colors as color index last first}}";$__ctrl="for(let $q_c_igwluvub=colors.length,$q_lc_ybgmbtu=$q_c_igwluvub-1,index=0;index<$q_c_igwluvub;index++){let color=colors[index];let first=index===0;let last=index===$q_lc_ybgmbtu;";
for(let $q_c_igwluvub=colors.length,$q_lc_ybgmbtu=$q_c_igwluvub-1,index=0;index<$q_c_igwluvub;index+=1){
let color=colors[index];let first=index===0;let last=index===$q_lc_ybgmbtu;
$vnode_1=[];;$$_mx5$_view='gallery/mx-color/index?color='+($__line=3,$__art='{{#color}}',$__ctrl='<%#color,\'auto_key_colors.\'+(index)+\'.color\'%>',$keyOf($refData,color,'auto_key_colors.'+(index)+'.color'))+'&align=right'+($__line=3,$__art='{{=disabled}}','');$__ctrl='<%if(($temp_var=disabled)){%>';if(($temp_var=disabled)){;$$_mx5$_view+='&disabled='+($__ctrl='<%=$encodeUrl($temp_var)%>',($encodeUrl($temp_var)));$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'colors','class': 'rd-_assets_index_less_-wp100','mx5-input': $viewId+'@:{update.colors~rs}({index:'+($__line=3,$__art='{{=index}}',$__ctrl='<%=index%>',(index))+'})','mx5-view': $$_mx5$_view,}));$vnode_2=[$quick_k6_static_text||($quick_k6_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_gallery_mx-color_series_less_-flex-right rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tr rd-_gallery_mx-color_series_less_-right-icon'+($__line=4,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-color_series_less_-notallowed'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=4,$__art='{{=i18n(\'@:{lang#color.series.random~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#color.series.random~rs}\')%>',(i18n('@:{lang#color.series.random~rs}'))),'mx5-click': $viewId+'@:{random.color~rs}({index:'+($__line=4,$__art='{{=index}}',$__ctrl='<%=index%>',(index))+'})','class': $$_class,},$vnode_2));$__line=5;$__art="{{if colors.length>1}}";$__ctrl="if(colors.length>1){";
if(colors.length>1){
$vnode_2=[$quick_kk_static_text||($quick_kk_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_gallery_mx-color_series_less_-flex-right rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tr rd-_gallery_mx-color_series_less_-right-icon'+($__line=6,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-color_series_less_-notallowed'+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('i',{'title': ($__line=6,$__art='{{=i18n(\'@:{lang#color.series.remove~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#color.series.remove~rs}\')%>',(i18n('@:{lang#color.series.remove~rs}'))),'mx5-click': $viewId+'@:{remove.color~rs}({index:'+($__line=6,$__art='{{=index}}',$__ctrl='<%=index%>',(index))+'})','class': $$_class,},$vnode_2));
};$$_class='rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center'+($__line=2,$__art='{{if !first}}','');$__ctrl='<%if(!first){%>';if(!first){;$$_class+=' rd-_assets_index_less_-margin-top-4'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('div',{'class': $$_class,},$vnode_1));
}$__line=10;$__art="{{if multi}}";$__ctrl="if(multi){";
if(multi){
$vnode_1=[$quick_kT_static_text||($quick_kT_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-cursor-pointer'+($__line=11,$__art='{{if disabled||colors.length>9}}','');$__ctrl='<%if(disabled||colors.length>9){%>';if(disabled||colors.length>9){;$$_class+=' rd-_gallery_mx-color_series_less_-notallowed'+($__line=11,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'title': ($__line=11,$__art='{{=i18n(\'@:{lang#color.series.add~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#color.series.add~rs}\')%>',(i18n('@:{lang#color.series.add~rs}'))),'mx5-click': $viewId+'@:{add.color~rs}()','class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-color/series.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{update.colors~rs}<input>'(e) {
        let colors = this.get('colors');
        let { index } = e.params;
        colors[index] = e.color;
        dispatch(this.root, 'change');
    },
    '@:{add.color~rs}<click>'() {
        if (this.get('disabled'))
            return;
        let colors = this.get('colors');
        if (colors.length > 9)
            return;
        let color = getRandomColor();
        colors.push(color);
        dispatch(this.root, 'change');
    },
    '@:{remove.color~rs}<click>'(e) {
        if (this.get('disabled'))
            return;
        let colors = this.get('colors');
        let { index } = e.params;
        colors.splice(index, 1);
        dispatch(this.root, 'change');
    },
    '@:{random.color~rs}<click>'(e) {
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