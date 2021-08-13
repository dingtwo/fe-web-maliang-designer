/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/75/items",["5c"],(require,exports,module)=>{
let $quick_l2_static_text;
let $quick_mW_static_text;
let $quick_nW_3_static_node;
let $quick_nW_4_static_node;
let $quick_nW_6_static_node;
let $quick_nW_7_static_node;
let $quick_nW_8_static_node;
let $quick_mX_static_text;
let $quick_nW_0_static_attr={'class': 'rd-m5 rd-mX rd-nC',};
let $quick_nW_1_static_attr={'class': 'rd-mF rd-nA',};
let $quick_nW_2_static_attr={'class': 'rd-m5 rd-mX rd-mZ',};
let $quick_nW_5_static_attr={'class': 'rd-mD rd-mX rd-mZ rd-ml rd-nk',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let { View, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0=[],
{
	items,
	disabled,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;

for(let $q_c_dknklgr=items.length,$q_lc_qhfjqgffl=$q_c_dknklgr-1,i=0;i<$q_c_dknklgr;i+=1){
let d=items[i];let last=i===$q_lc_qhfjqgffl;
$vnode_2=[];
if(items.length>1){
$vnode_3=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-mv';if(disabled){;$$_class+=' rd-nN rd-nJ';}else{;$$_class+=' rd-nK rd-nk';};$vnode_2.push($createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_sm({i:'+(i)+'})'),'title': '删除选项','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_mW_static_text||($quick_mW_static_text=$createVNode(0,'选项：')));$vnode_1=[$createVNode('span',$quick_nW_1_static_attr,$vnode_2),$createVNode('input',{'class': 'rd-l5 rd-m8','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_sj({i:'+(i)+',key:\'text\'})','value': (d.text),},1,$special_2)];$vnode_0.push($createVNode('div',$quick_nW_0_static_attr,$vnode_1));
if($quick_nW_3_static_node){
$vnode_1=[$quick_nW_3_static_node];
}else{
$vnode_2=[$createVNode(0,'值：')];$vnode_1=[$quick_nW_3_static_node=$createVNode('span',{'_': 'i!','class': 'rd-mF rd-nA',},$vnode_2)];
}
$vnode_1.push($createVNode('input',{'class': 'rd-l5 rd-m8','disabled': (disabled),'mx5-change': $viewId+'_p2()','mx5-input': $viewId+'_sj({i:'+(i)+',key:\'value\'})','value': (d.value),},1,$special_2));$vnode_0.push($createVNode('div',$quick_nW_2_static_attr,$vnode_1));
if($quick_nW_4_static_node){
$vnode_1=[$quick_nW_4_static_node];
}else{
$vnode_2=[$createVNode(0,'选中：')];$vnode_1=[$quick_nW_4_static_node=$createVNode('span',{'_': 'i@','class': 'rd-mF rd-nA',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-mJ rd-nD','type': 'checkbox','checked': (d.checked),'disabled': (disabled),'mx5-change': $viewId+'_sk({i:'+(i)+',key:\'checked\'})',},1,$special_4)];
if($quick_nW_6_static_node){
$vnode_2.push($quick_nW_6_static_node);
}else{
$vnode_2.push($quick_nW_6_static_node=$createVNode('i',{'_': 'i$','class': 'rd-mK rd-mR rd-nE',}));
}
$vnode_1.push($createVNode('label',$quick_nW_5_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_nW_2_static_attr,$vnode_1));
if($quick_nW_7_static_node){
$vnode_1=[$quick_nW_7_static_node];
}else{
$vnode_2=[$createVNode(0,'禁用：')];$vnode_1=[$quick_nW_7_static_node=$createVNode('span',{'_': 'i^','class': 'rd-mF rd-nA',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-mJ rd-nD','type': 'checkbox','checked': (d.disabled),'disabled': (disabled),'mx5-change': $viewId+'_sk({i:'+(i)+',key:\'disabled\'})',},1,$special_4)];
if($quick_nW_6_static_node){
$vnode_2.push($quick_nW_6_static_node);
}else{
$vnode_2.push($quick_nW_6_static_node=$createVNode('i',{'_': 'i$','class': 'rd-mK rd-mR rd-nE',}));
}
$vnode_1.push($createVNode('label',$quick_nW_5_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_nW_2_static_attr,$vnode_1));
if(!last){

if($quick_nW_8_static_node){
$vnode_0.push($quick_nW_8_static_node);
}else{
$vnode_0.push($quick_nW_8_static_node=$createVNode('div',{'_': 'i*','class': 'rd-mV',}));
}

}
}$vnode_1=[$quick_mX_static_text||($quick_mX_static_text=$createVNode(0,'添加选项'))];$vnode_0.push($createVNode('button',{'class': 'rd-l9 rd-mG rd-mI rd-ma rd-nk','disabled': (disabled),'mx5-click': $viewId+'_sl()',},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
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
    '_sj<input>'(e) {
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
    '_sk<change>'(e) {
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
    '_sl<click>'() {
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
    '_sm<click>'(e) {
        let { i } = e.params;
        let items = this.get('items');
        items.splice(i, 1);
        dispatch(this.root, 'change', {
            items
        });
    },
});

});