/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/7b/help",["5c","../6v/index","../6u/index"],(require,exports,module)=>{
require("../6v/index");
require("../6u/index");
let $quick_l2_static_text;
let $quick_m0_static_text;
let $quick_n2_2_static_node;
let $quick_m1_static_text;
let $quick_n2_0_static_attr={'class': 'rd-m5 rd-mX rd-nC',};
let $quick_n2_1_static_attr={'class': 'rd-mF rd-nA',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
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

for(let $q_c_rtowsswg=data.length,i=0;i<$q_c_rtowsswg;i+=1){
let l=data[i];
$vnode_3=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-mv';if(disabled){;$$_class+=' rd-nN rd-nJ';}else{;$$_class+=' rd-nK rd-nk';};$vnode_2=[$createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_sE({i:'+(i)+'})'),'title': '删除辅助线','class': $$_class,},$vnode_3),$quick_m0_static_text||($quick_m0_static_text=$createVNode(0,'辅助线：'))];$vnode_1=[$createVNode('span',$quick_n2_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,lineTypes','class': 'rd-m8 rd-mX','mx5-change': $viewId+'_sA({i:'+(i)+'})','mx5-view': '5j/6v/index?disabled='+$keyOf($refData,disabled,'i!')+'&selected='+($encodeUrl(l.x!=null?'x':'y'))+'&list='+$keyOf($refData,lineTypes,'i@')+'&textKey=text&valueKey=value',})];$vnode_0.push($createVNode('div',$quick_n2_0_static_attr,$vnode_1));
if($quick_n2_2_static_node){
$vnode_1=[$quick_n2_2_static_node];
}else{
$vnode_1=[$quick_n2_2_static_node=$createVNode('span',{'_': 'i!','class': 'rd-mF rd-nA',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'data','class': 'rd-l5 rd-m8 rd-mK','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_sB({i:'+(i)+'})','mx5-view': '5j/6u/index?value='+$keyOf($refData,l.x!=null?l.x:l.y,'i$.'+(i)+'.i^'),}));$vnode_0.push($createVNode('div',$quick_n2_0_static_attr,$vnode_1));
if($quick_n2_2_static_node){
$vnode_1=[$quick_n2_2_static_node];
}else{
$vnode_1=[$quick_n2_2_static_node=$createVNode('span',{'_': 'i!','class': 'rd-mF rd-nA',})];
}
$vnode_1.push($createVNode('input',{'placeholder': '辅助线名称','class': 'rd-l5','value': (l.text),'disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_sC({i:'+(i)+'})',},1,$special_2));$vnode_0.push($createVNode('div',$quick_n2_0_static_attr,$vnode_1));
}$vnode_1=[$quick_m1_static_text||($quick_m1_static_text=$createVNode(0,'添加辅助线'))];$vnode_0.push($createVNode('button',{'class': 'rd-l9 rd-mG rd-mI rd-ma rd-nk','disabled': (disabled),'mx5-click': $viewId+'_sD()',},$vnode_1)); 

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
    '_sA<change>'(e) {
        this['_qe'](e);
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
    '_sB<input>'(e) {
        this['_qe'](e);
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
    '_sC<input>'(e) {
        this['_qe'](e);
        let { i } = e.params;
        let data = this.get('data');
        let dest = data[i];
        dest.text = e.eventTarget.value;
        dispatch(this.root, 'change', {
            data
        });
    },
    '_sD<click>'() {
        let data = this.get('data');
        data.push({
            x: 1,
            text: ''
        });
        dispatch(this.root, 'change', {
            data
        });
    },
    '_sE<click>'(e) {
        let { i } = e.params;
        let data = this.get('data');
        data.splice(i, 1);
        dispatch(this.root, 'change', {
            data
        });
    },
});

});