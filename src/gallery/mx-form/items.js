/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/67/items",["4e"],(require,exports,module)=>{
let $quick_dE_static_text;
let $quick_ey_static_text;
let $quick_fy_3_static_node;
let $quick_fy_4_static_node;
let $quick_fy_6_static_node;
let $quick_fy_7_static_node;
let $quick_fy_8_static_node;
let $quick_ez_static_text;
let $quick_fy_0_static_attr={'class': 'rd-eH rd-ez rd-fe',};
let $quick_fy_1_static_attr={'class': 'rd-eh rd-fc',};
let $quick_fy_2_static_attr={'class': 'rd-eB rd-eH rd-ez',};
let $quick_fy_5_static_attr={'class': 'rd-dY rd-eB rd-eX rd-ef rd-ez',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
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

for(let $q_c_sbymkp=items.length,$q_lc_asolyrlmc=$q_c_sbymkp-1,i=0;i<$q_c_sbymkp;i+=1){
let d=items[i];let last=i===$q_lc_asolyrlmc;
$vnode_2=[];
if(items.length>1){
$vnode_3=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-d8';if(disabled){;$$_class+=' rd-fp rd-fl';}else{;$$_class+=' rd-fm rd-eX';};$vnode_2.push($createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_jZ({i:'+(i)+'})'),'title': '删除选项','class': $$_class,},$vnode_3));
}$vnode_2.push($quick_ey_static_text||($quick_ey_static_text=$createVNode(0,'选项：')));$vnode_1=[$createVNode('span',$quick_fy_1_static_attr,$vnode_2),$createVNode('input',{'class': 'rd-dH rd-eK','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_jW({i:'+(i)+',key:\'text\'})','value': (d.text),},1,$special_2)];$vnode_0.push($createVNode('div',$quick_fy_0_static_attr,$vnode_1));
if($quick_fy_3_static_node){
$vnode_1=[$quick_fy_3_static_node];
}else{
$vnode_2=[$createVNode(0,'值：')];$vnode_1=[$quick_fy_3_static_node=$createVNode('span',{'_': 'cH','class': 'rd-eh rd-fc',},$vnode_2)];
}
$vnode_1.push($createVNode('input',{'class': 'rd-dH rd-eK','disabled': (disabled),'mx5-change': $viewId+'_hE()','mx5-input': $viewId+'_jW({i:'+(i)+',key:\'value\'})','value': (d.value),},1,$special_2));$vnode_0.push($createVNode('div',$quick_fy_2_static_attr,$vnode_1));
if($quick_fy_4_static_node){
$vnode_1=[$quick_fy_4_static_node];
}else{
$vnode_2=[$createVNode(0,'选中：')];$vnode_1=[$quick_fy_4_static_node=$createVNode('span',{'_': 'cI','class': 'rd-eh rd-fc',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','checked': (d.checked),'disabled': (disabled),'mx5-change': $viewId+'_jX({i:'+(i)+',key:\'checked\'})',},1,$special_4)];
if($quick_fy_6_static_node){
$vnode_2.push($quick_fy_6_static_node);
}else{
$vnode_2.push($quick_fy_6_static_node=$createVNode('i',{'_': 'cJ','class': 'rd-em rd-et rd-fg',}));
}
$vnode_1.push($createVNode('label',$quick_fy_5_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_fy_2_static_attr,$vnode_1));
if($quick_fy_7_static_node){
$vnode_1=[$quick_fy_7_static_node];
}else{
$vnode_2=[$createVNode(0,'禁用：')];$vnode_1=[$quick_fy_7_static_node=$createVNode('span',{'_': 'cK','class': 'rd-eh rd-fc',},$vnode_2)];
}
$vnode_2=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','checked': (d.disabled),'disabled': (disabled),'mx5-change': $viewId+'_jX({i:'+(i)+',key:\'disabled\'})',},1,$special_4)];
if($quick_fy_6_static_node){
$vnode_2.push($quick_fy_6_static_node);
}else{
$vnode_2.push($quick_fy_6_static_node=$createVNode('i',{'_': 'cJ','class': 'rd-em rd-et rd-fg',}));
}
$vnode_1.push($createVNode('label',$quick_fy_5_static_attr,$vnode_2));$vnode_0.push($createVNode('div',$quick_fy_2_static_attr,$vnode_1));
if(!last){

if($quick_fy_8_static_node){
$vnode_0.push($quick_fy_8_static_node);
}else{
$vnode_0.push($quick_fy_8_static_node=$createVNode('div',{'_': 'cL','class': 'rd-ex',}));
}

}
}$vnode_1=[$quick_ez_static_text||($quick_ez_static_text=$createVNode(0,'添加选项'))];$vnode_0.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-ei rd-ek','disabled': (disabled),'mx5-click': $viewId+'_jY()',},$vnode_1)); 

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
    '_jW<input>'(e) {
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
    '_jX<change>'(e) {
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
    '_jY<click>'() {
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
    '_jZ<click>'(e) {
        let { i } = e.params;
        let items = this.get('items');
        items.splice(i, 1);
        dispatch(this.root, 'change', {
            items
        });
    },
});

});