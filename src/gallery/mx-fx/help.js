/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-fx/help",["magix5","../mx-dropdown/index","../mx-number/index"],(require,exports,module)=>{
require("../mx-dropdown/index");
require("../mx-number/index");
let $quick_kk_static_text;
let $quick_li_static_text;
let $quick_mk_2_static_node;
let $quick_lj_static_text;
let $quick_mk_0_static_attr={'class': 'rd-_assets_index_less_-align-items-flex-start rd-_assets_index_less_-flex rd-_assets_index_less_-margin-bottom-4',};
let $quick_mk_1_static_attr={'class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { View, dispatch } = magix_1;
let LineTypes = [{
        text: 'X轴',
        value: 'x'
    }, {
        text: 'Y轴',
        value: 'y'
    }];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	data,
	disabled,
	lineTypes,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$__line=1;$__art="{{each data as l i}}";$__ctrl="for(let $q_c_cjhpfafxm=data.length,i=0;i<$q_c_cjhpfafxm;i++){let l=data[i];";
for(let $q_c_cjhpfafxm=data.length,i=0;i<$q_c_cjhpfafxm;i+=1){
let l=data[i];
$vnode_3=[$quick_kk_static_text||($quick_kk_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-mr5'+($__line=4,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_assets_index_less_-color-666 rd-_assets_index_less_-cursor-not-allowed'+($__line=4,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_assets_index_less_-gray rd-_assets_index_less_-cursor-pointer'+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2=[$createVNode('span',{'mx5-click': (($temp_var=($__line=4,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/help.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{remove.fx~rs}({i:'+($__line=4,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})'),'title': '删除辅助线','class': $$_class,},$vnode_3),$quick_li_static_text||($quick_li_static_text=$createVNode(0,'辅助线：'))];$vnode_1=[$createVNode('span',$quick_mk_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,lineTypes','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.line.type~rs}({i:'+($__line=7,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})','mx5-view': 'gallery/mx-dropdown/index?disabled='+($__line=7,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled'))+'&selected='+($__line=7,$__art='{{=l.x!=null?\'x\':\'y\'}}',$__ctrl='<%=$encodeUrl(l.x!=null?\'x\':\'y\')%>',($encodeUrl(l.x!=null?'x':'y')))+'&list='+($__line=7,$__art='{{#lineTypes}}',$__ctrl='<%#lineTypes,\'auto_key_lineTypes\'%>',$keyOf($refData,lineTypes,'auto_key_lineTypes'))+'&textKey=text&valueKey=value',})];$vnode_0.push($createVNode('div',$quick_mk_0_static_attr,$vnode_1));
if($quick_mk_2_static_node){
$vnode_1=[$quick_mk_2_static_node];
}else{
$vnode_1=[$quick_mk_2_static_node=$createVNode('span',{'_': 'hN','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'data','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=11,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/help.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.line.value~rs}({i:'+($__line=11,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})','mx5-view': 'gallery/mx-number/index?value='+($__line=11,$__art='{{#l.x!=null?l.x:l.y}}',$__ctrl='<%#l.x!=null?l.x:l.y,\'auto_key_data.\'+(i)+\'.l.x!%3Dnull%3Fl.x:l.y\'%>',$keyOf($refData,l.x!=null?l.x:l.y,'auto_key_data.'+(i)+'.l.x!%3Dnull%3Fl.x:l.y')),}));$vnode_0.push($createVNode('div',$quick_mk_0_static_attr,$vnode_1));
if($quick_mk_2_static_node){
$vnode_1=[$quick_mk_2_static_node];
}else{
$vnode_1=[$quick_mk_2_static_node=$createVNode('span',{'_': 'hN','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',})];
}
$vnode_1.push($createVNode('input',{'placeholder': '辅助线名称','class': 'rd-_assets_index_less_-input','value': ($__line=15,$__art='{{=l.text}}',$__ctrl='<%=l.text%>',(l.text)),'disabled': ($temp_var=($__line=15,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/help.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.line.text~rs}({i:'+($__line=15,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})',},1,$special_2));$vnode_0.push($createVNode('div',$quick_mk_0_static_attr,$vnode_1));
}$vnode_1=[$quick_lj_static_text||($quick_lj_static_text=$createVNode(0,'添加辅助线'))];$vnode_0.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fr rd-_assets_index_less_-tc','disabled': ($temp_var=($__line=18,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/help.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-click': $viewId+'@:{add.fx~rs}()',},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-fx/help.html'; throw msg; }  } ,
    init() {
        this.set({
            lineTypes: LineTypes
        });
    },
    assign(extra) {
        let { data, disabled } = extra;
        this.set({
            disabled,
            data
        });
    },
    render() {
        this.digest();
    },
    '@:{update.line.type~rs}<change>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { i } = e.params;
        let data = this.get('data');
        let dest = data[i];
        if (e.value == 'x') {
            dest.x = dest.y;
            delete dest.y;
        }
        else {
            dest.y = dest.x;
            delete dest.x;
        }
        dispatch(this.root, 'change', {
            data
        });
    },
    '@:{update.line.value~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { i } = e.params;
        let data = this.get('data');
        let dest = data[i];
        if (dest.x != null) {
            dest.x = e.value;
        }
        else {
            dest.y = e.value;
        }
        dispatch(this.root, 'change', {
            data
        });
    },
    '@:{update.line.text~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { i } = e.params;
        let data = this.get('data');
        let dest = data[i];
        dest.text = e.eventTarget.value;
        dispatch(this.root, 'change', {
            data
        });
    },
    '@:{add.fx~rs}<click>'() {
        let data = this.get('data');
        data.push({
            x: 1,
            text: ''
        });
        dispatch(this.root, 'change', {
            data
        });
    },
    '@:{remove.fx~rs}<click>'(e) {
        let { i } = e.params;
        let data = this.get('data');
        data.splice(i, 1);
        dispatch(this.root, 'change', {
            data
        });
    },
});

});