/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/70/index",["51","../6l/index","../6k/index","../71/index","../6j/index"],(require,exports,module)=>{
require("../6l/index");
require("../6k/index");
require("../71/index");
require("../6j/index");
let $quick_gd_static_text;
let $quick_hd_static_text;
let $quick_ie_3_static_node;
let $quick_ie_4_static_node;
let $quick_ie_5_static_node;
let $quick_ie_7_static_node;
let $quick_ie_8_static_node;
let $quick_ie_9_static_node;
let $quick_ie_10_static_node;
let $quick_ie_11_static_node;
let $quick_ie_12_static_node;
let $quick_he_static_text;
let $quick_ie_0_static_attr={'class': 'rd-g9 rd-hO rd-hg',};
let $quick_ie_1_static_attr={'class': 'rd-gR rd-hM',};
let $quick_ie_2_static_attr={'class': 'rd-g9 rd-ha rd-hg',};
let $quick_ie_6_static_attr={'class': 'rd-g9 rd-gP rd-gx rd-ha rd-hw',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
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

for(let $q_c_ftjsjewfe=data.length,$q_lc_xilctqzxo=$q_c_ftjsjewfe-1,i=0;i<$q_c_ftjsjewfe;i+=1){
let d=data[i];let last=i===$q_lc_xilctqzxo;
$vnode_2=[];
if(data.length>1){
$vnode_3=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-gH';if(disabled){;$$_class+=' rd-hZ rd-hV';}else{;$$_class+=' rd-hW rd-hw';};$vnode_2.push($createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_mT({i:'+(i)+'})'),'title': '删除函数','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_hd_static_text||($quick_hd_static_text=$createVNode(0,'函数：')));$vnode_1=[$createVNode('span',$quick_ie_1_static_attr,$vnode_2),$createVNode('textarea',{'class': 'rd-gh rd-hj rd-hm','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_lu({i:'+(i)+',key:\'fn\',native:\'value\'})','value': (d.fn),},0,$special_2)];$vnode_0.push($createVNode('div',$quick_ie_0_static_attr,$vnode_1));
if($quick_ie_3_static_node){
$vnode_1=[$quick_ie_3_static_node];
}else{
$vnode_2=[$createVNode(0,'颜色：')];$vnode_1=[$quick_ie_3_static_node=$createVNode('span',{'_': 'eD','class': 'rd-gR rd-hM',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,data','class': 'rd-hj','mx5-input': $viewId+'_lu({i:'+(i)+',key:\'color\',use:\'color\'})','mx5-view': '58/6l/index?align=right&disabled='+$keyOf($refData,disabled,'eD')+'&color='+$keyOf($refData,d.color,'eE.'+(i)+'.eF'),}));$vnode_0.push($createVNode('div',$quick_ie_2_static_attr,$vnode_1));
if($quick_ie_4_static_node){
$vnode_1=[$quick_ie_4_static_node];
}else{
$vnode_2=[$createVNode(0,'线条类型：')];$vnode_1=[$quick_ie_4_static_node=$createVNode('span',{'_': 'eE','class': 'rd-gR rd-hM',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,lineTypes','class': 'rd-hj','mx5-change': $viewId+'_lu({i:'+(i)+',key:\'graphType\',use:\'value\'})','mx5-view': '58/6k/index?disabled='+$keyOf($refData,disabled,'eD')+'&selected='+($encodeUrl(d.graphType))+'&list='+$keyOf($refData,lineTypes,'eG')+'&textKey=text&valueKey=value',}));$vnode_0.push($createVNode('div',$quick_ie_2_static_attr,$vnode_1));
if($quick_ie_5_static_node){
$vnode_1=[$quick_ie_5_static_node];
}else{
$vnode_2=[$createVNode(0,'设置范围：')];$vnode_1=[$quick_ie_5_static_node=$createVNode('span',{'_': 'eF','class': 'rd-gR rd-hM',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','checked': (d.range!=null),'disabled': (disabled),'mx5-change': $viewId+'_mU({i:'+(i)+'})',},1,$special_4)];
if($quick_ie_7_static_node){
$vnode_2.push($quick_ie_7_static_node);
}else{
$vnode_2.push($quick_ie_7_static_node=$createVNode('i',{'_': 'eG','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_1.push($createVNode('label',$quick_ie_6_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_ie_2_static_attr,$vnode_1));
if(d.range){

if($quick_ie_8_static_node){
$vnode_1=[$quick_ie_8_static_node];
}else{
$vnode_2=[$createVNode(0,'取值范围：')];$vnode_1=[$quick_ie_8_static_node=$createVNode('span',{'_': 'eH','class': 'rd-gR rd-hM',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,data','class': 'rd-hj','mx5-input': $viewId+'_lu({i:'+(i)+',key:\'range\',use:\'range\'})','mx5-view': '58/71/index?disabled='+$keyOf($refData,disabled,'eD')+'&value='+$keyOf($refData,d.range,'eE.'+(i)+'.eH'),}));$vnode_0.push($createVNode('div',$quick_ie_2_static_attr,$vnode_1));
}
if($quick_ie_9_static_node){
$vnode_1=[$quick_ie_9_static_node];
}else{
$vnode_2=[$createVNode(0,'设置取样：')];$vnode_1=[$quick_ie_9_static_node=$createVNode('span',{'_': 'eI','class': 'rd-gR rd-hM',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','checked': (d.nSamples!=null),'disabled': (disabled),'mx5-change': $viewId+'_mV({i:'+(i)+'})',},1,$special_4)];
if($quick_ie_7_static_node){
$vnode_2.push($quick_ie_7_static_node);
}else{
$vnode_2.push($quick_ie_7_static_node=$createVNode('i',{'_': 'eG','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_1.push($createVNode('label',$quick_ie_6_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_ie_2_static_attr,$vnode_1));
if(d.nSamples!=null){

if($quick_ie_10_static_node){
$vnode_1=[$quick_ie_10_static_node];
}else{
$vnode_2=[$createVNode(0,'取样：')];$vnode_1=[$quick_ie_10_static_node=$createVNode('span',{'_': 'eJ','class': 'rd-gR rd-hM',},$vnode_2)];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'data','class': 'rd-gW rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_lu({i:'+(i)+',key:\'nSamples\',use:\'value\'})','mx5-view': '58/6j/index?value='+$keyOf($refData,d.nSamples,'eE.'+(i)+'.eI')+'&min=10',}));$vnode_0.push($createVNode('div',$quick_ie_2_static_attr,$vnode_1));
}
if($quick_ie_11_static_node){
$vnode_1=[$quick_ie_11_static_node];
}else{
$vnode_2=[$createVNode(0,'填充：')];$vnode_1=[$quick_ie_11_static_node=$createVNode('span',{'_': 'eK','class': 'rd-gR rd-hM',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','checked': (d.closed),'disabled': (disabled),'mx5-change': $viewId+'_lu({i:'+(i)+',key:\'closed\',native:\'checked\'})',},1,$special_4)];
if($quick_ie_7_static_node){
$vnode_2.push($quick_ie_7_static_node);
}else{
$vnode_2.push($quick_ie_7_static_node=$createVNode('i',{'_': 'eG','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_1.push($createVNode('label',$quick_ie_6_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_ie_2_static_attr,$vnode_1));
if(!last){

if($quick_ie_12_static_node){
$vnode_0.push($quick_ie_12_static_node);
}else{
$vnode_0.push($quick_ie_12_static_node=$createVNode('div',{'_': 'eL','class': 'rd-g7',}));
}

}
}$vnode_1=[$quick_he_static_text||($quick_he_static_text=$createVNode(0,'添加函数'))];$vnode_0.push($createVNode('button',{'class': 'rd-gS rd-gU rd-gk rd-gm rd-hw','disabled': (disabled),'mx5-click': $viewId+'_mS()',},$vnode_1)); 

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
    '_lu<change,input>'(e) {
        this['_kt'](e);
        let { i, native, key, use } = e.params;
        let data = this.get('data');
        let dest = data[i];
        let v = native ? e.eventTarget[native] : e[use];
        dest[key] = v;
        dispatch(this.root, 'change', {
            data
        });
    },
    '_mU<change>'(e) {
        this['_kt'](e);
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
    '_mV<change>'(e) {
        this['_kt'](e);
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
    '_mS<click>'() {
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
    '_mT<click>'(e) {
        let { i } = e.params;
        let data = this.get('data');
        data.splice(i, 1);
        dispatch(this.root, 'change', {
            data
        });
    },
});

});