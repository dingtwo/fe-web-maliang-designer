/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/6d/index",["4e","../62/index","../61/index","../6e/index","../60/index"],(require,exports,module)=>{
require("../62/index");
require("../61/index");
require("../6e/index");
require("../60/index");
let $quick_dE_static_text;
let $quick_eE_static_text;
let $quick_fF_3_static_node;
let $quick_fF_4_static_node;
let $quick_fF_5_static_node;
let $quick_fF_7_static_node;
let $quick_fF_8_static_node;
let $quick_fF_9_static_node;
let $quick_fF_10_static_node;
let $quick_fF_11_static_node;
let $quick_fF_12_static_node;
let $quick_eF_static_text;
let $quick_fF_0_static_attr={'class': 'rd-eH rd-ez rd-fe',};
let $quick_fF_1_static_attr={'class': 'rd-eh rd-fc',};
let $quick_fF_2_static_attr={'class': 'rd-eB rd-eH rd-ez',};
let $quick_fF_6_static_attr={'class': 'rd-dY rd-eB rd-eX rd-ef rd-ez',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
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
let $temp_var,$vnode_0=[],
{
	data,
	disabled,
	lineTypes,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;

for(let $q_c_tytjden=data.length,$q_lc_rfkfsai=$q_c_tytjden-1,i=0;i<$q_c_tytjden;i+=1){
let d=data[i];let last=i===$q_lc_rfkfsai;
$vnode_2=[];
if(data.length>1){
$vnode_3=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-d8';if(disabled){;$$_class+=' rd-fp rd-fl';}else{;$$_class+=' rd-fm rd-eX';};$vnode_2.push($createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_kg({i:'+(i)+'})'),'title': '删除函数','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_eE_static_text||($quick_eE_static_text=$createVNode(0,'函数：')));$vnode_1=[$createVNode('span',$quick_fF_1_static_attr,$vnode_2),$createVNode('textarea',{'class': 'rd-dI rd-eK rd-eN','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_iS({i:'+(i)+',key:\'fn\',native:\'value\'})','value': (d.fn),},0,$special_2)];$vnode_0.push($createVNode('div',$quick_fF_0_static_attr,$vnode_1));
if($quick_fF_3_static_node){
$vnode_1=[$quick_fF_3_static_node];
}else{
$vnode_2=[$createVNode(0,'颜色：')];$vnode_1=[$quick_fF_3_static_node=$createVNode('span',{'_': 'cH','class': 'rd-eh rd-fc',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,data','class': 'rd-eK','mx5-input': $viewId+'_iS({i:'+(i)+',key:\'color\',use:\'color\'})','mx5-view': '4l/62/index?align=right&disabled='+$keyOf($refData,disabled,'cH')+'&color='+$keyOf($refData,d.color,'cI.'+(i)+'.cJ'),}));$vnode_0.push($createVNode('div',$quick_fF_2_static_attr,$vnode_1));
if($quick_fF_4_static_node){
$vnode_1=[$quick_fF_4_static_node];
}else{
$vnode_2=[$createVNode(0,'线条类型：')];$vnode_1=[$quick_fF_4_static_node=$createVNode('span',{'_': 'cI','class': 'rd-eh rd-fc',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,lineTypes','class': 'rd-eK','mx5-change': $viewId+'_iS({i:'+(i)+',key:\'graphType\',use:\'value\'})','mx5-view': '4l/61/index?disabled='+$keyOf($refData,disabled,'cH')+'&selected='+($encodeUrl(d.graphType))+'&list='+$keyOf($refData,lineTypes,'cK')+'&textKey=text&valueKey=value',}));$vnode_0.push($createVNode('div',$quick_fF_2_static_attr,$vnode_1));
if($quick_fF_5_static_node){
$vnode_1=[$quick_fF_5_static_node];
}else{
$vnode_2=[$createVNode(0,'设置范围：')];$vnode_1=[$quick_fF_5_static_node=$createVNode('span',{'_': 'cJ','class': 'rd-eh rd-fc',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','checked': (d.range!=null),'disabled': (disabled),'mx5-change': $viewId+'_kh({i:'+(i)+'})',},1,$special_4)];
if($quick_fF_7_static_node){
$vnode_2.push($quick_fF_7_static_node);
}else{
$vnode_2.push($quick_fF_7_static_node=$createVNode('i',{'_': 'cK','class': 'rd-em rd-et rd-fg',}));
}
$vnode_1.push($createVNode('label',$quick_fF_6_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_fF_2_static_attr,$vnode_1));
if(d.range){

if($quick_fF_8_static_node){
$vnode_1=[$quick_fF_8_static_node];
}else{
$vnode_2=[$createVNode(0,'取值范围：')];$vnode_1=[$quick_fF_8_static_node=$createVNode('span',{'_': 'cL','class': 'rd-eh rd-fc',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,data','class': 'rd-eK','mx5-input': $viewId+'_iS({i:'+(i)+',key:\'range\',use:\'range\'})','mx5-view': '4l/6e/index?disabled='+$keyOf($refData,disabled,'cH')+'&value='+$keyOf($refData,d.range,'cI.'+(i)+'.cL'),}));$vnode_0.push($createVNode('div',$quick_fF_2_static_attr,$vnode_1));
}
if($quick_fF_9_static_node){
$vnode_1=[$quick_fF_9_static_node];
}else{
$vnode_2=[$createVNode(0,'设置取样：')];$vnode_1=[$quick_fF_9_static_node=$createVNode('span',{'_': 'cM','class': 'rd-eh rd-fc',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','checked': (d.nSamples!=null),'disabled': (disabled),'mx5-change': $viewId+'_ki({i:'+(i)+'})',},1,$special_4)];
if($quick_fF_7_static_node){
$vnode_2.push($quick_fF_7_static_node);
}else{
$vnode_2.push($quick_fF_7_static_node=$createVNode('i',{'_': 'cK','class': 'rd-em rd-et rd-fg',}));
}
$vnode_1.push($createVNode('label',$quick_fF_6_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_fF_2_static_attr,$vnode_1));
if(d.nSamples!=null){

if($quick_fF_10_static_node){
$vnode_1=[$quick_fF_10_static_node];
}else{
$vnode_2=[$createVNode(0,'取样：')];$vnode_1=[$quick_fF_10_static_node=$createVNode('span',{'_': 'cN','class': 'rd-eh rd-fc',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'data','class': 'rd-dH rd-eK rd-em','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_iS({i:'+(i)+',key:\'nSamples\',use:\'value\'})','mx5-view': '4l/60/index?value='+$keyOf($refData,d.nSamples,'cI.'+(i)+'.cM')+'&min=10',}));$vnode_0.push($createVNode('div',$quick_fF_2_static_attr,$vnode_1));
}
if($quick_fF_11_static_node){
$vnode_1=[$quick_fF_11_static_node];
}else{
$vnode_2=[$createVNode(0,'填充：')];$vnode_1=[$quick_fF_11_static_node=$createVNode('span',{'_': 'cO','class': 'rd-eh rd-fc',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','checked': (d.closed),'disabled': (disabled),'mx5-change': $viewId+'_iS({i:'+(i)+',key:\'closed\',native:\'checked\'})',},1,$special_4)];
if($quick_fF_7_static_node){
$vnode_2.push($quick_fF_7_static_node);
}else{
$vnode_2.push($quick_fF_7_static_node=$createVNode('i',{'_': 'cK','class': 'rd-em rd-et rd-fg',}));
}
$vnode_1.push($createVNode('label',$quick_fF_6_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_fF_2_static_attr,$vnode_1));
if(!last){

if($quick_fF_12_static_node){
$vnode_0.push($quick_fF_12_static_node);
}else{
$vnode_0.push($quick_fF_12_static_node=$createVNode('div',{'_': 'cP','class': 'rd-ex',}));
}

}
}$vnode_1=[$quick_eF_static_text||($quick_eF_static_text=$createVNode(0,'添加函数'))];$vnode_0.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-ei rd-ek','disabled': (disabled),'mx5-click': $viewId+'_kf()',},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
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
    '_iS<change,input>'(e) {
        this['_hR'](e);
        let { i, native, key, use } = e.params;
        let data = this.get('data');
        let dest = data[i];
        let v = native ? e.eventTarget[native] : e[use];
        dest[key] = v;
        dispatch(this.root, 'change', {
            data
        });
    },
    '_kh<change>'(e) {
        this['_hR'](e);
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
    '_ki<change>'(e) {
        this['_hR'](e);
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
    '_kf<click>'() {
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
    '_kg<click>'(e) {
        let { i } = e.params;
        let data = this.get('data');
        data.splice(i, 1);
        dispatch(this.root, 'change', {
            data
        });
    },
});

});