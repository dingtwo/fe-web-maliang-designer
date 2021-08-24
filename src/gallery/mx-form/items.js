/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6q/items",["51"],(require,exports,module)=>{
let $quick_gd_static_text;
let $quick_g8_static_text;
let $quick_h8_3_static_node;
let $quick_h8_4_static_node;
let $quick_h8_6_static_node;
let $quick_h8_7_static_node;
let $quick_h8_8_static_node;
let $quick_g9_static_text;
let $quick_h8_0_static_attr={'class': 'rd-g9 rd-hO rd-hg',};
let $quick_h8_1_static_attr={'class': 'rd-gR rd-hM',};
let $quick_h8_2_static_attr={'class': 'rd-g9 rd-ha rd-hg',};
let $quick_h8_5_static_attr={'class': 'rd-g9 rd-gP rd-gx rd-ha rd-hw',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
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

for(let $q_c_cqudiqcga=items.length,$q_lc_giicoijf=$q_c_cqudiqcga-1,i=0;i<$q_c_cqudiqcga;i+=1){
let d=items[i];let last=i===$q_lc_giicoijf;
$vnode_2=[];
if(items.length>1){
$vnode_3=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-gH';if(disabled){;$$_class+=' rd-hZ rd-hV';}else{;$$_class+=' rd-hW rd-hw';};$vnode_2.push($createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_mB({i:'+(i)+'})'),'title': '删除选项','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_g8_static_text||($quick_g8_static_text=$createVNode(0,'选项：')));$vnode_1=[$createVNode('span',$quick_h8_1_static_attr,$vnode_2),$createVNode('input',{'class': 'rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_my({i:'+(i)+',key:\'text\'})','value': (d.text),},1,$special_2)];$vnode_0.push($createVNode('div',$quick_h8_0_static_attr,$vnode_1));
if($quick_h8_3_static_node){
$vnode_1=[$quick_h8_3_static_node];
}else{
$vnode_2=[$createVNode(0,'值：')];$vnode_1=[$quick_h8_3_static_node=$createVNode('span',{'_': 'eD','class': 'rd-gR rd-hM',},$vnode_2)];
}
$vnode_1.push($createVNode('input',{'class': 'rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_my({i:'+(i)+',key:\'value\'})','value': (d.value),},1,$special_2));$vnode_0.push($createVNode('div',$quick_h8_2_static_attr,$vnode_1));
if($quick_h8_4_static_node){
$vnode_1=[$quick_h8_4_static_node];
}else{
$vnode_2=[$createVNode(0,'选中：')];$vnode_1=[$quick_h8_4_static_node=$createVNode('span',{'_': 'eE','class': 'rd-gR rd-hM',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','checked': (d.checked),'disabled': (disabled),'mx5-change': $viewId+'_mz({i:'+(i)+',key:\'checked\'})',},1,$special_4)];
if($quick_h8_6_static_node){
$vnode_2.push($quick_h8_6_static_node);
}else{
$vnode_2.push($quick_h8_6_static_node=$createVNode('i',{'_': 'eF','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_1.push($createVNode('label',$quick_h8_5_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_h8_2_static_attr,$vnode_1));
if($quick_h8_7_static_node){
$vnode_1=[$quick_h8_7_static_node];
}else{
$vnode_2=[$createVNode(0,'禁用：')];$vnode_1=[$quick_h8_7_static_node=$createVNode('span',{'_': 'eG','class': 'rd-gR rd-hM',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','checked': (d.disabled),'disabled': (disabled),'mx5-change': $viewId+'_mz({i:'+(i)+',key:\'disabled\'})',},1,$special_4)];
if($quick_h8_6_static_node){
$vnode_2.push($quick_h8_6_static_node);
}else{
$vnode_2.push($quick_h8_6_static_node=$createVNode('i',{'_': 'eF','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_1.push($createVNode('label',$quick_h8_5_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_h8_2_static_attr,$vnode_1));
if(!last){

if($quick_h8_8_static_node){
$vnode_0.push($quick_h8_8_static_node);
}else{
$vnode_0.push($quick_h8_8_static_node=$createVNode('div',{'_': 'eH','class': 'rd-g7',}));
}

}
}$vnode_1=[$quick_g9_static_text||($quick_g9_static_text=$createVNode(0,'添加选项'))];$vnode_0.push($createVNode('button',{'class': 'rd-gS rd-gU rd-gk rd-gm rd-hw','disabled': (disabled),'mx5-click': $viewId+'_mA()',},$vnode_1)); 

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
    '_my<input>'(e) {
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
    '_mz<change>'(e) {
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
    '_mA<click>'() {
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
    '_mB<click>'(e) {
        let { i } = e.params;
        let items = this.get('items');
        items.splice(i, 1);
        dispatch(this.root, 'change', {
            items
        });
    },
});

});