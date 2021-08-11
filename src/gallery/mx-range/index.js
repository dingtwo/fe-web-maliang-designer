/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-range/index",["magix5","../mx-number/index"],(require,exports,module)=>{
require("../mx-number/index");
let $quick_cS_1_static_node;
let $quick_cS_0_static_attr={'class': 'rd-_assets_index_less_-flex',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	disabled,
	value,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'value','disabled': ($temp_var=($__line=2,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-range/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-60','mx5-input': $viewId+'@:{num.input~rs}({i:0})','mx5-change': $viewId+'@:{stop~rs}()','mx5-view': 'gallery/mx-number/index?value='+($__line=2,$__art='{{#value[0]}}',$__ctrl='<%#value[0],\'auto_key_value.value[0]\'%>',$keyOf($refData,value[0],'auto_key_value.value[0]')),})];
if($quick_cS_1_static_node){
$vnode_1.push($quick_cS_1_static_node);
}else{
$vnode_2=[$createVNode(0,'~')];$vnode_1.push($quick_cS_1_static_node=$createVNode('span',{'_': 'ar','class': 'rd-_assets_index_less_-flex-fill-rest rd-_assets_index_less_-fore-color-border rd-_assets_index_less_-tc',},$vnode_2));
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'value','disabled': ($temp_var=($__line=4,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-range/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-60','mx5-input': $viewId+'@:{num.input~rs}({i:1})','mx5-change': $viewId+'@:{stop~rs}()','mx5-view': 'gallery/mx-number/index?value='+($__line=4,$__art='{{#value[1]}}',$__ctrl='<%#value[1],\'auto_key_value.value[1]\'%>',$keyOf($refData,value[1],'auto_key_value.value[1]')),}));$vnode_0=[$createVNode('div',$quick_cS_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-range/index.html'; throw msg; }  } ,
    assign(data) {
        if (!data.value) {
            data.value = [];
        }
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{num.input~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { i } = e.params;
        let value = this.get('value');
        value[i] = e.value;
        magix_1.dispatch(this.root, 'input', {
            range: value
        });
    },
});

});