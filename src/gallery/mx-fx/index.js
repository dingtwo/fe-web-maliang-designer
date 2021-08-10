/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-fx/index",["magix5","../mx-color/index","../mx-dropdown/index","../mx-range/index","../mx-number/index"],(require,exports,module)=>{
require("../mx-color/index");
require("../mx-dropdown/index");
require("../mx-range/index");
require("../mx-number/index");
let $quick_dA_static_text;
let $quick_eA_static_text;
let $quick_fB_3_static_node;
let $quick_fB_4_static_node;
let $quick_fB_5_static_node;
let $quick_fB_7_static_node;
let $quick_fB_8_static_node;
let $quick_fB_9_static_node;
let $quick_fB_10_static_node;
let $quick_fB_11_static_node;
let $quick_fB_12_static_node;
let $quick_eB_static_text;
let $quick_fB_0_static_attr={'class': 'rd-_assets_index_less_-align-items-flex-start rd-_assets_index_less_-flex rd-_assets_index_less_-margin-bottom-4',};
let $quick_fB_1_static_attr={'class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',};
let $quick_fB_2_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-margin-bottom-4',};
let $quick_fB_6_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-label',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { floor, random } = Math;
let { View, dispatch } = magix_1;
let LineTypes = [{
        text: '线',
        value: 'interval'
    }, {
        text: '散点',
        value: 'scatter'
    }];
let Colors = ['d81e06', 'f4ea2a', '1afa29', '1296db', '13227a', 'd4237a', '707070', '515151', '2c2c2c', '000000', 'ea986c', 'eeb174', 'f3ca7e', 'f9f28b', 'c8db8c', 'aad08f', '87c38f', '83c6c2', '7dc5eb', '87a7d6', '8992c8', 'a686ba', 'bd8cbb', 'be8dbd', 'e89abe', 'e8989a', 'e16632', 'e98f36', 'efb336', 'f6ef37', 'afcd51', '7cba59', '36ab60', '1baba8', '17ace3', '3f81c1', '4f68b0', '594d9c', '82529d', 'a4579d', 'db649b', 'dd6572', 'd84e06', 'e0620d', 'ea9518', 'f4ea2a', '8cbb1a', '2ba515', '0e932e', '0c9890', '1295db', '0061b2', '0061b0', '004198', '122179', '88147f', 'd3227b', 'd6204b'];
let Fx = ['x', 'sin(x)', 'cos(x)+5', 'sqrt(20-x*x)', 'x^3', 'x^4'];
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
$__line=1;$__art="{{each data as d i last}}";$__ctrl="for(let $q_c_nxdlvyv=data.length,$q_lc_nuwpgf=$q_c_nxdlvyv-1,i=0;i<$q_c_nxdlvyv;i++){let d=data[i];let last=i===$q_lc_nuwpgf;";
for(let $q_c_nxdlvyv=data.length,$q_lc_nuwpgf=$q_c_nxdlvyv-1,i=0;i<$q_c_nxdlvyv;i+=1){
let d=data[i];let last=i===$q_lc_nuwpgf;
$vnode_2=[];$__line=4;$__art="{{if data.length>1}}";$__ctrl="if(data.length>1){";
if(data.length>1){
$vnode_3=[$quick_dA_static_text||($quick_dA_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-mr5'+($__line=5,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_assets_index_less_-color-666 rd-_assets_index_less_-cursor-not-allowed'+($__line=5,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_assets_index_less_-gray rd-_assets_index_less_-cursor-pointer'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('span',{'mx5-click': (($temp_var=($__line=5,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{remove.fx~rs}({i:'+($__line=5,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})'),'title': '删除函数','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_eA_static_text||($quick_eA_static_text=$createVNode(0,'函数：')));$vnode_1=[$createVNode('span',$quick_fB_1_static_attr,$vnode_2),$createVNode('textarea',{'class': 'rd-_assets_index_less_-height-100 rd-_assets_index_less_-textarea rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=9,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.prop~rs}({i:'+($__line=9,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+',key:\'fn\',native:\'value\'})','value': ($__line=9,$__art='{{=d.fn}}',$__ctrl='<%=d.fn%>',(d.fn)),},0,$special_2)];$vnode_0.push($createVNode('div',$quick_fB_0_static_attr,$vnode_1));
if($quick_fB_3_static_node){
$vnode_1=[$quick_fB_3_static_node];
}else{
$vnode_2=[$createVNode(0,'颜色：')];$vnode_1=[$quick_fB_3_static_node=$createVNode('span',{'_': 'cD','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,data','class': 'rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}({i:'+($__line=13,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+',key:\'color\',use:\'color\'})','mx5-view': 'gallery/mx-color/index?align=right&disabled='+($__line=13,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled'))+'&color='+($__line=13,$__art='{{#d.color}}',$__ctrl='<%#d.color,\'auto_key_data.\'+(i)+\'.d.color\'%>',$keyOf($refData,d.color,'auto_key_data.'+(i)+'.d.color')),}));$vnode_0.push($createVNode('div',$quick_fB_2_static_attr,$vnode_1));
if($quick_fB_4_static_node){
$vnode_1=[$quick_fB_4_static_node];
}else{
$vnode_2=[$createVNode(0,'线条类型：')];$vnode_1=[$quick_fB_4_static_node=$createVNode('span',{'_': 'cE','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,lineTypes','class': 'rd-_assets_index_less_-width-140','mx5-change': $viewId+'@:{update.prop~rs}({i:'+($__line=17,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+',key:\'graphType\',use:\'value\'})','mx5-view': 'gallery/mx-dropdown/index?disabled='+($__line=17,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled'))+'&selected='+($__line=17,$__art='{{=d.graphType}}',$__ctrl='<%=$encodeUrl(d.graphType)%>',($encodeUrl(d.graphType)))+'&list='+($__line=17,$__art='{{#lineTypes}}',$__ctrl='<%#lineTypes,\'auto_key_lineTypes\'%>',$keyOf($refData,lineTypes,'auto_key_lineTypes'))+'&textKey=text&valueKey=value',}));$vnode_0.push($createVNode('div',$quick_fB_2_static_attr,$vnode_1));
if($quick_fB_5_static_node){
$vnode_1=[$quick_fB_5_static_node];
}else{
$vnode_2=[$createVNode(0,'设置范围：')];$vnode_1=[$quick_fB_5_static_node=$createVNode('span',{'_': 'cF','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-switch-input','type': 'checkbox','checked': ($temp_var=($__line=22,$__art='{{=d.range!=null}}',$__ctrl='<%=d.range!=null%>',d.range!=null),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'disabled': ($temp_var=($__line=22,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{update.range.setting~rs}({i:'+($__line=22,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})',},1,$special_4)];
if($quick_fB_7_static_node){
$vnode_2.push($quick_fB_7_static_node);
}else{
$vnode_2.push($quick_fB_7_static_node=$createVNode('i',{'_': 'cG','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-switch-button rd-_assets_index_less_-unselectable',}));
}
$vnode_1.push($createVNode('label',$quick_fB_6_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_fB_2_static_attr,$vnode_1));$__line=26;$__art="{{if d.range}}";$__ctrl="if(d.range){";
if(d.range){

if($quick_fB_8_static_node){
$vnode_1=[$quick_fB_8_static_node];
}else{
$vnode_2=[$createVNode(0,'取值范围：')];$vnode_1=[$quick_fB_8_static_node=$createVNode('span',{'_': 'cH','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,data','class': 'rd-_assets_index_less_-width-140','mx5-input': $viewId+'@:{update.prop~rs}({i:'+($__line=29,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+',key:\'range\',use:\'range\'})','mx5-view': 'gallery/mx-range/index?disabled='+($__line=29,$__art='{{#disabled}}',$__ctrl='<%#disabled,\'auto_key_disabled\'%>',$keyOf($refData,disabled,'auto_key_disabled'))+'&value='+($__line=29,$__art='{{#d.range}}',$__ctrl='<%#d.range,\'auto_key_data.\'+(i)+\'.d.range\'%>',$keyOf($refData,d.range,'auto_key_data.'+(i)+'.d.range')),}));$vnode_0.push($createVNode('div',$quick_fB_2_static_attr,$vnode_1));
}
if($quick_fB_9_static_node){
$vnode_1=[$quick_fB_9_static_node];
}else{
$vnode_2=[$createVNode(0,'设置取样：')];$vnode_1=[$quick_fB_9_static_node=$createVNode('span',{'_': 'cI','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-switch-input','type': 'checkbox','checked': ($temp_var=($__line=35,$__art='{{=d.nSamples!=null}}',$__ctrl='<%=d.nSamples!=null%>',d.nSamples!=null),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'disabled': ($temp_var=($__line=35,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{update.samples.setting~rs}({i:'+($__line=35,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+'})',},1,$special_4)];
if($quick_fB_7_static_node){
$vnode_2.push($quick_fB_7_static_node);
}else{
$vnode_2.push($quick_fB_7_static_node=$createVNode('i',{'_': 'cG','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-switch-button rd-_assets_index_less_-unselectable',}));
}
$vnode_1.push($createVNode('label',$quick_fB_6_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_fB_2_static_attr,$vnode_1));$__line=39;$__art="{{if d.nSamples!=null}}";$__ctrl="if(d.nSamples!=null){";
if(d.nSamples!=null){

if($quick_fB_10_static_node){
$vnode_1=[$quick_fB_10_static_node];
}else{
$vnode_2=[$createVNode(0,'取样：')];$vnode_1=[$quick_fB_10_static_node=$createVNode('span',{'_': 'cJ','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'data','class': 'rd-_assets_index_less_-input rd-_assets_index_less_-pr rd-_assets_index_less_-width-140','disabled': ($temp_var=($__line=42,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{stop~rs}()','mx5-input': $viewId+'@:{update.prop~rs}({i:'+($__line=42,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+',key:\'nSamples\',use:\'value\'})','mx5-view': 'gallery/mx-number/index?value='+($__line=42,$__art='{{#d.nSamples}}',$__ctrl='<%#d.nSamples,\'auto_key_data.\'+(i)+\'.d.nSamples\'%>',$keyOf($refData,d.nSamples,'auto_key_data.'+(i)+'.d.nSamples'))+'&min=10',}));$vnode_0.push($createVNode('div',$quick_fB_2_static_attr,$vnode_1));
}
if($quick_fB_11_static_node){
$vnode_1=[$quick_fB_11_static_node];
}else{
$vnode_2=[$createVNode(0,'填充：')];$vnode_1=[$quick_fB_11_static_node=$createVNode('span',{'_': 'cK','class': 'rd-_assets_index_less_-props-item-title rd-_assets_index_less_-tr',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-switch-input','type': 'checkbox','checked': ($temp_var=($__line=48,$__art='{{=d.closed}}',$__ctrl='<%=d.closed%>',d.closed),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'disabled': ($temp_var=($__line=48,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{update.prop~rs}({i:'+($__line=48,$__art='{{=i}}',$__ctrl='<%=i%>',(i))+',key:\'closed\',native:\'checked\'})',},1,$special_4)];
if($quick_fB_7_static_node){
$vnode_2.push($quick_fB_7_static_node);
}else{
$vnode_2.push($quick_fB_7_static_node=$createVNode('i',{'_': 'cG','class': 'rd-_assets_index_less_-pr rd-_assets_index_less_-switch-button rd-_assets_index_less_-unselectable',}));
}
$vnode_1.push($createVNode('label',$quick_fB_6_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_fB_2_static_attr,$vnode_1));$__line=52;$__art="{{if !last}}";$__ctrl="if(!last){";
if(!last){

if($quick_fB_12_static_node){
$vnode_0.push($quick_fB_12_static_node);
}else{
$vnode_0.push($quick_fB_12_static_node=$createVNode('div',{'_': 'cL','class': 'rd-_assets_index_less_-item-spliter',}));
}

}
}$vnode_1=[$quick_eB_static_text||($quick_eB_static_text=$createVNode(0,'添加函数'))];$vnode_0.push($createVNode('button',{'class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fr rd-_assets_index_less_-tc','disabled': ($temp_var=($__line=56,$__art='{{=disabled}}',$__ctrl='<%=disabled%>',disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:gallery/mx-fx/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-click': $viewId+'@:{add.fx~rs}()',},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-fx/index.html'; throw msg; }  } ,
    init() {
        this.set({
            lineTypes: LineTypes
        });
    },
    assign(extra) {
        let { data, disabled } = extra;
        console.log(disabled);
        this.set({
            disabled,
            data
        });
    },
    render() {
        this.digest();
    },
    '@:{update.prop~rs}<change,input>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { i, native, key, use } = e.params;
        let data = this.get('data');
        let dest = data[i];
        let v = native ? e.eventTarget[native] : e[use];
        dest[key] = v;
        dispatch(this.root, 'change', {
            data
        });
    },
    '@:{update.range.setting~rs}<change>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { i } = e.params;
        let data = this.get('data');
        let dest = data[i];
        if (e.eventTarget.checked) {
            dest.range = [0, 100];
        }
        else {
            delete dest.range;
        }
        dispatch(this.root, 'change', {
            data
        });
    },
    '@:{update.samples.setting~rs}<change>'(e) {
        this['@:{stop.propagation~rs}'](e);
        let { i } = e.params;
        let data = this.get('data');
        let dest = data[i];
        if (e.eventTarget.checked) {
            dest.nSamples = 1000;
        }
        else {
            delete dest.nSamples;
        }
        dispatch(this.root, 'change', {
            data
        });
    },
    '@:{add.fx~rs}<click>'() {
        let data = this.get('data');
        data.push({
            color: '#' + Colors[floor(random() * Colors.length)],
            fn: Fx[floor(random() * Fx.length)],
            graphType: 'interval',
            closed: false
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