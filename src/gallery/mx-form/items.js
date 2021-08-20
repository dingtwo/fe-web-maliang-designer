/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-form/items",["magix5"],(require,exports,module)=>{
let $quick_cR_static_text;
let $quick_dL_static_text;
let $quick_eL_3_static_node;
let $quick_eL_4_static_node;
let $quick_eL_6_static_node;
let $quick_eL_7_static_node;
let $quick_eL_8_static_node;
let $quick_dM_static_text;
let $quick_eL_0_static_attr={'class': 'rd-_assets_index_less_-align-items-flex-start rd-_assets_index_less_-flex rd-_assets_index_less_-margin-bottom-4',};
let $quick_eL_1_static_attr={'class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',};
let $quick_eL_2_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-margin-bottom-4',};
let $quick_eL_5_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-label',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	items,
	disabled,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$__line=1;$__art="{{each items as d i last}}";$__ctrl="for(let $q_c_emwuwoyvp=items.length,$q_lc_ontmw=$q_c_emwuwoyvp-1,i=0;i<$q_c_emwuwoyvp;i++){let d=items[i];let last=i===$q_lc_ontmw;";
for(let $q_c_emwuwoyvp=items.length,$q_lc_ontmw=$q_c_emwuwoyvp-1,i=0;i<$q_c_emwuwoyvp;i+=1){
let d=items[i];let last=i===$q_lc_ontmw;
$vnode_2=[];$__line=4;$__art="{{if items.length>1}}";$__ctrl="if(items.length>1){";
if(items.length>1){
$vnode_3=[$quick_cR_static_text||($quick_cR_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-mr5'+($__line=5,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_assets_index_less_-color-666 rd-_assets_index_less_-cursor-not-allowed'+($__line=5,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_assets_index_less_-gray rd-_assets_index_less_-cursor-pointer'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('span',{'mx5-click': (($temp_var=($__line=5,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-form/items.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{remove.item~rs}({i:'+($__line=5,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})'),'title': '删除选项','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_dL_static_text||($quick_dL_static_text=$createVNode(0,'选项：')));$vnode_1=[$createVNode('span',$quick_eL_1_static_attr,$vnode_2),$createVNode('input',{'class': 'rd-_assets_index_less_-input rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=9,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-form/items.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.item~rs}({i:'+($__line=9,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+',key:\'text\'})','value': ($__line=9,$__art='{{=d.text}}',$__ctrl='<%=d.text%>',(d.text)),},1,$special_2)];$vnode_0.push($createVNode('div',$quick_eL_0_static_attr,$vnode_1));
if($quick_eL_3_static_node){
$vnode_1=[$quick_eL_3_static_node];
}else{
$vnode_2=[$createVNode(0,'值：')];$vnode_1=[$quick_eL_3_static_node=$createVNode('span',{'_': 'b^','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',},$vnode_2)];
}
$vnode_1.push($createVNode('input',{'class': 'rd-_assets_index_less_-input rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=13,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-form/items.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.item~rs}({i:'+($__line=13,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+',key:\'value\'})','value': ($__line=13,$__art='{{=d.value}}',$__ctrl='<%=d.value%>',(d.value)),},1,$special_2));$vnode_0.push($createVNode('div',$quick_eL_2_static_attr,$vnode_1));
if($quick_eL_4_static_node){
$vnode_1=[$quick_eL_4_static_node];
}else{
$vnode_2=[$createVNode(0,'选中：')];$vnode_1=[$quick_eL_4_static_node=$createVNode('span',{'_': 'b*','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-switch-input','type': 'checkbox','checked': ($temp_var=($__line=18,$__art='{{=d.checked}}',$__ctrl='<%=d.checked%>',d.checked),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-form/items.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'disabled': ($temp_var=($__line=18,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-form/items.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{update.state~rs}({i:'+($__line=18,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+',key:\'checked\'})',},1,$special_4)];
if($quick_eL_6_static_node){
$vnode_2.push($quick_eL_6_static_node);
}else{
$vnode_2.push($quick_eL_6_static_node=$createVNode('i',{'_': 'b{','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-switch-button rd-_assets_index_less_-unselectable',}));
}
$vnode_1.push($createVNode('label',$quick_eL_5_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_eL_2_static_attr,$vnode_1));
if($quick_eL_7_static_node){
$vnode_1=[$quick_eL_7_static_node];
}else{
$vnode_2=[$createVNode(0,'禁用：')];$vnode_1=[$quick_eL_7_static_node=$createVNode('span',{'_': 'b}','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-switch-input','type': 'checkbox','checked': ($temp_var=($__line=25,$__art='{{=d.disabled}}',$__ctrl='<%=d.disabled%>',d.disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-form/items.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'disabled': ($temp_var=($__line=25,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-form/items.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{update.state~rs}({i:'+($__line=25,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+',key:\'disabled\'})',},1,$special_4)];
if($quick_eL_6_static_node){
$vnode_2.push($quick_eL_6_static_node);
}else{
$vnode_2.push($quick_eL_6_static_node=$createVNode('i',{'_': 'b{','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-switch-button rd-_assets_index_less_-unselectable',}));
}
$vnode_1.push($createVNode('label',$quick_eL_5_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_eL_2_static_attr,$vnode_1));$__line=29;$__art="{{if !last}}";$__ctrl="if(!last){";
if(!last){

if($quick_eL_8_static_node){
$vnode_0.push($quick_eL_8_static_node);
}else{
$vnode_0.push($quick_eL_8_static_node=$createVNode('div',{'_': 'b[','class': 'rd-_assets_index_less_-item-spliter',}));
}

}
}$vnode_1=[$quick_dM_static_text||($quick_dM_static_text=$createVNode(0,'添加选项'))];$vnode_0.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fr rd-_assets_index_less_-tc','disabled': ($temp_var=($__line=33,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-form/items.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-click': $viewId+'@:{add.item~rs}()',},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-form/items.html'; throw msg; }  } ,
    assign({ items, disabled, mutual }) {
        console.log('mutual', this.id, mutual);
        this.set({
            disabled,
            items,
            mutual
        });
    },
    render() {
        this.digest();
    },
    '@:{update.item~rs}<input>'(e) {
        let { eventTarget, params } = e;
        let value = eventTarget.value.trim();
        let { i, key } = params;
        let items = this.get('items');
        let current = items[i];
        current[key] = value;
        dispatch(this.root, 'change', {
            items
        });
    },
    '@:{update.state~rs}<change>'(e) {
        let { eventTarget, params } = e;
        let checked = eventTarget.checked;
        let { i, key } = params;
        let items = this.get('items');
        let current = items[i];
        current[key] = checked;
        let mutual = this.get('mutual');
        console.log(this.id, mutual);
        if (checked &&
            !mutual) {
            for (let i of items) {
                if (i != current &&
                    i.checked) {
                    i.checked = false;
                }
            }
        }
        dispatch(this.root, 'change', {
            items
        });
    },
    '@:{add.item~rs}<click>'() {
        let items = this.get('items');
        items.push({
            text: '',
            value: '',
            disabled: false,
            checked: false
        });
        dispatch(this.root, 'change', {
            items
        });
    },
    '@:{remove.item~rs}<click>'(e) {
        let { i } = e.params;
        let items = this.get('items');
        items.splice(i, 1);
        dispatch(this.root, 'change', {
            items
        });
    },
});

});