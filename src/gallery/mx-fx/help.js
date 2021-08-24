/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/70/help",["51","../6k/index","../6j/index"],(require,exports,module)=>{
require("../6k/index");
require("../6j/index");
let $quick_gd_static_text;
let $quick_hb_static_text;
let $quick_id_2_static_node;
let $quick_hc_static_text;
let $quick_id_0_static_attr={'class': 'rd-g9 rd-hO rd-hg',};
let $quick_id_1_static_attr={'class': 'rd-gR rd-hM',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
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

for(let $q_c_sjoyflhfs=data.length,i=0;i<$q_c_sjoyflhfs;i+=1){
let l=data[i];
$vnode_3=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-gH';if(disabled){;$$_class+=' rd-hZ rd-hV';}else{;$$_class+=' rd-hW rd-hw';};$vnode_2=[$createVNode('span',{'mx5-click': ((!disabled))&&($viewId+'_mT({i:'+(i)+'})'),'title': '删除辅助线','class': $$_class,},$vnode_3),$quick_hb_static_text||($quick_hb_static_text=$createVNode(0,'辅助线：'))];$vnode_1=[$createVNode('span',$quick_id_1_static_attr,$vnode_2),$createVNode('div',{'mx5-owner': $viewId,'$': 'disabled,lineTypes','class': 'rd-g9 rd-hj','mx5-change': $viewId+'_mP({i:'+(i)+'})','mx5-view': '58/6k/index?disabled='+$keyOf($refData,disabled,'eD')+'&selected='+($encodeUrl(l.x!=null?'x':'y'))+'&list='+$keyOf($refData,lineTypes,'eE')+'&textKey=text&valueKey=value',})];$vnode_0.push($createVNode('div',$quick_id_0_static_attr,$vnode_1));
if($quick_id_2_static_node){
$vnode_1=[$quick_id_2_static_node];
}else{
$vnode_1=[$quick_id_2_static_node=$createVNode('span',{'_': 'eD','class': 'rd-gR rd-hM',})];
}
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'data','class': 'rd-gW rd-gg rd-hj','disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_mQ({i:'+(i)+'})','mx5-view': '58/6j/index?value='+$keyOf($refData,l.x!=null?l.x:l.y,'eF.'+(i)+'.eG'),}));$vnode_0.push($createVNode('div',$quick_id_0_static_attr,$vnode_1));
if($quick_id_2_static_node){
$vnode_1=[$quick_id_2_static_node];
}else{
$vnode_1=[$quick_id_2_static_node=$createVNode('span',{'_': 'eD','class': 'rd-gR rd-hM',})];
}
$vnode_1.push($createVNode('input',{'placeholder': '辅助线名称','class': 'rd-gg','value': (l.text),'disabled': (disabled),'mx5-change': $viewId+'_kg()','mx5-input': $viewId+'_mR({i:'+(i)+'})',},1,$special_2));$vnode_0.push($createVNode('div',$quick_id_0_static_attr,$vnode_1));
}$vnode_1=[$quick_hc_static_text||($quick_hc_static_text=$createVNode(0,'添加辅助线'))];$vnode_0.push($createVNode('button',{'class': 'rd-gS rd-gU rd-gk rd-gm rd-hw','disabled': (disabled),'mx5-click': $viewId+'_mS()',},$vnode_1)); 

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
    '_mP<change>'(e) {
        this['_kt'](e);
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
    '_mQ<input>'(e) {
        this['_kt'](e);
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
    '_mR<input>'(e) {
        this['_kt'](e);
        let { i } = e.params;
        let data = this.get('data');
        let dest = data[i];
        dest.text = e.eventTarget.value;
        dispatch(this.root, 'change', {
            data
        });
    },
    '_mS<click>'() {
        let data = this.get('data');
        data.push({
            x: 1,
            text: ''
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