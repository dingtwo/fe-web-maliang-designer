/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/6d/help",["4e","../61/index","../60/index"],(require,exports,module)=>{
require("../61/index");
require("../60/index");
let $quick_dE_static_text;
let $quick_eC_static_text;
let $quick_fE_2_static_node;
let $quick_eD_static_text;
let $quick_fE_0_static_attr={'class': 'rd-eH rd-ez rd-fe',};
let $quick_fE_1_static_attr={'class': 'rd-eh rd-fc',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
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
let $temp_var,$vnode_0=[],
{
	data,
	disabled,
	lineTypes,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;

for(let $q_c_weluyyjhjg=data.length,i=0;i<$q_c_weluyyjhjg;i+=1){
let l=data[i];
$vnode_3=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-d8';if(disabled){;$$_class+=' rd-fp rd-fl';}else{;$$_class+=' rd-fm rd-eX';};$vnode_2=[$createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_kg({i:'+(i)+'})'),'title': '删除辅助线','class': $$_class,},$vnode_3),$quick_eC_static_text||($quick_eC_static_text=$createVNode(0,'辅助线：'))];$vnode_1=[$createVNode('span',$quick_fE_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,lineTypes','class': 'rd-eK rd-ez','mx5-change': $viewId+'_kc({i:'+(i)+'})','mx5-view': '4l/61/index?disabled='+$keyOf($refData,disabled,'cH')+'&selected='+($encodeUrl(l.x!=null?'x':'y'))+'&list='+$keyOf($refData,lineTypes,'cI')+'&textKey=text&valueKey=value',})];$vnode_0.push($createVNode('div',$quick_fE_0_static_attr,$vnode_1));
if($quick_fE_2_static_node){
$vnode_1=[$quick_fE_2_static_node];
}else{
$vnode_1=[$quick_fE_2_static_node=$createVNode('span',{'_': 'cH','class': 'rd-eh rd-fc',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'data','class': 'rd-dH rd-eK rd-em','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_kd({i:'+(i)+'})','mx5-view': '4l/60/index?value='+$keyOf($refData,l.x!=null?l.x:l.y,'cJ.'+(i)+'.cK'),}));$vnode_0.push($createVNode('div',$quick_fE_0_static_attr,$vnode_1));
if($quick_fE_2_static_node){
$vnode_1=[$quick_fE_2_static_node];
}else{
$vnode_1=[$quick_fE_2_static_node=$createVNode('span',{'_': 'cH','class': 'rd-eh rd-fc',})];
}
$vnode_1.push($createVNode('input',{'placeholder': '辅助线名称','class': 'rd-dH','value': (l.text),'disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_ke({i:'+(i)+'})',},1,$special_2));$vnode_0.push($createVNode('div',$quick_fE_0_static_attr,$vnode_1));
}$vnode_1=[$quick_eD_static_text||($quick_eD_static_text=$createVNode(0,'添加辅助线'))];$vnode_0.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-ei rd-ek','disabled': (disabled),'mx5-click': $viewId+'_kf()',},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
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
    '_kc<change>'(e) {
        this['_hR'](e);
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
    '_kd<input>'(e) {
        this['_hR'](e);
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
    '_ke<input>'(e) {
        this['_hR'](e);
        let { i } = e.params;
        let data = this.get('data');
        let dest = data[i];
        dest.text = e.eventTarget.value;
        dispatch(this.root, 'change', {
            data
        });
    },
    '_kf<click>'() {
        let data = this.get('data');
        data.push({
            x: 1,
            text: ''
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