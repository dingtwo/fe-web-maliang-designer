/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6k/index",["51","../6r/index"],(require,exports,module)=>{
let $quick_h2_1_static_node;
let $quick_h2_0_static_attr={'class': 'rd-ge rd-k9',};
let $quick_h2_2_static_attr={'class': 'rd-g0 rd-g4 rd-g5 rd-gV rd-h2 rd-k4',};
let $quick_h2_3_static_attr={'class': 'rd-ge rd-h6 rd-k9',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../6r/index");
let { View, applyStyle, toMap, inside, node, dispatch, isFunction } = magix_1;
applyStyle("rd-gx",".rd-kX{background-color:#fff;border:1px solid #e6e6e6;border-radius:2px;height:22px;min-width:50px;outline:0;vertical-align:middle}.rd-kY:focus,.rd-kY:focus:hover{border-color:#47b34e}.rd-kX:hover{border-color:#ccc}.rd-kZ{color:#333;padding:0 20px 0 3px}.rd-k0{background-color:#f5f5f5;cursor:not-allowed}.rd-k0:hover{border-color:#e6e6e6}.rd-k0 .rd-kZ{color:#999;cursor:not-allowed}.rd-k1{color:#ccc;top:0;transition:all .25s;width:20px}.rd-k1:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #ccc;content:\"\";display:block;height:0;inset:0;margin:auto;position:absolute;width:0}.rd-k2 .rd-k1{transform:rotate(180deg)}.rd-k2,.rd-k2:hover{border-color:#47b34e}.rd-k3{height:20px;line-height:21px}.rd-k4{background-color:#fff;border:1px solid #ccc;border-radius:2px;left:-1px;margin-top:4px;right:-1px;top:100%;z-index:300}.rd-k2 .rd-k4{display:block}.rd-k5{max-height:196px;padding:2px 0}.rd-k6{margin:2px 0;padding:0 2px}.rd-k7{border-radius:2px;height:20px;line-height:20px;padding:0 5px}.rd-k7:hover{background-color:#f0f0f0;color:#333}.rd-k8,.rd-k8:active,.rd-k8:focus,.rd-k8:hover{background-color:#47b34e;color:#fff}.rd-k9{padding:0 4px}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	disabled,
	i18n,
	selectedText,
	selected,
	emptyText,
	selectedIcon,
	rList,
	list,
	textKey,
	valueKey,
	iconKey,}=$dataFromView,
$$_class,
$vnode_4,
$vnode_3,
$vnode_2,
$text,
$vnode_6,
$vnode_5,
$vnode_1;
$vnode_1=[];$vnode_3=[];
if(selectedIcon){
$vnode_4=[$createVNode(0,(selectedIcon),1)];$vnode_3.push($createVNode('i',$quick_h2_0_static_attr,$vnode_4));
}$vnode_3.push($createVNode(0,(i18n(selectedText))));;$$_class='rd-k3 rd-g1 rd-g6';if(selected===''||selected==emptyText){;$$_class+=' rd-hX';};$vnode_2=[$createVNode('span',{'class': $$_class,},$vnode_3)];
if($quick_h2_1_static_node){
$vnode_2.push($quick_h2_1_static_node);
}else{
$vnode_2.push($quick_h2_1_static_node=$createVNode('span',{'_': 'eD','class': 'rd-gO rd-gV rd-ia rd-k1',}));
}
$vnode_1.push($createVNode('div',{'class': 'rd-gN rd-gW rd-hw rd-kZ','mx5-click': $viewId+'_gp()','title': (i18n(selectedText)),},$vnode_2));
if(rList){
$vnode_3=[];
for(let $q_c_rorwxj=list.length,$q_key_pjeujkywr=0;$q_key_pjeujkywr<$q_c_rorwxj;$q_key_pjeujkywr+=1){
let item=list[$q_key_pjeujkywr];
let text=item,value=item,icon;;
if(textKey&&valueKey){
$text='';text=i18n(item[textKey]);$text+=' ';value=item[valueKey];$text+=' ';icon=item[iconKey];
}let equal=(value+'')===(selected+'');;$vnode_5=[];
if(icon){
$vnode_6=[$createVNode(0,(icon),1)];$vnode_5.push($createVNode('i',$quick_h2_3_static_attr,$vnode_6));
}$vnode_5.push($createVNode(0,(text)));;$$_class='rd-k7 rd-g1 rd-hZ rd-gN rd-hw rd-g6';if(equal){;$$_class+=' rd-k8';};$vnode_4=[$createVNode('span',{'mx5-click': $viewId+'_ml({item:\''+$keyOf($refData,item,'eD.'+($q_key_pjeujkywr)+'.eE')+'\'})','class': $$_class,},$vnode_5)];$vnode_3.push($createVNode('li',{'title': (text),'class': 'rd-h2 rd-k6',},$vnode_4));
}$vnode_2=[$createVNode('ul',{'class': 'rd-gz rd-k5','id': '_mx_list_'+$viewId,},$vnode_3)];$vnode_1.push($createVNode('div',$quick_h2_2_static_attr,$vnode_2));
};$$_class='rd-kX rd-gN rd-g3 rd-gW rd-g2';if(disabled){;$$_class+=' rd-k0';}else{;$$_class+=' rd-kY';};$vnode_0=[$createVNode('div',{'id': '_mx_dd_'+$viewId,'tabindex': ((!disabled))&&(0),'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        index_1["_lD"]();
        this.on('destroy', () => {
            index_1['_js'](this);
            index_1['_lE']();
        });
    },
    assign(data) {
        let me = this;
        let selected = data.selected;
        let textKey = data.textKey || '';
        let valueKey = data.valueKey || '';
        let iconKey = data.iconKey || '';
        let emptyText = data.emptyText || '';
        let disabled = (data.disabled + '') === 'true';
        let list = data.list;
        if (isFunction(list)) {
            list = list();
        }
        else {
            list = list || [];
        }
        list = list.slice();
        let map = toMap(list, valueKey);
        if (emptyText) {
            if (textKey && valueKey) {
                if (!map['']) {
                    let temp = {};
                    temp[textKey] = emptyText;
                    temp[valueKey] = '';
                    list.unshift(temp);
                    map[''] = temp;
                }
            }
            else {
                if (!map[emptyText]) {
                    list.unshift(emptyText);
                    map[emptyText] = emptyText;
                }
            }
        }
        if (!selected && emptyText && !(textKey || valueKey)) {
            selected = emptyText;
        }
        if (!selected || !map[selected]) { //未提供选项，或提供的选项不在列表里，则默认第一个
            selected = map[selected] || list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }
        let selectedText = textKey && valueKey ? map[selected][textKey] : selected;
        let selectedIcon = iconKey ? map[selected][iconKey] : '';
        me.set({
            selected,
            selectedText,
            selectedIcon,
            list,
            iconKey,
            textKey,
            valueKey,
            emptyText,
            disabled
        });
    },
    render() {
        this.digest();
    },
    '_lT'(node) {
        return inside(node, this.root);
    },
    async '_gM'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (!n.classList.contains('rd-k2')) {
            n.classList.add('rd-k2');
            let r = me.get('rList');
            if (!r) {
                await me.digest({
                    rList: true
                });
            }
            n = node('_mx_list_' + me.id);
            let active = n.querySelector('li[active]');
            if (active && active.scrollIntoViewIfNeeded) {
                active.scrollIntoViewIfNeeded();
            }
            index_1['_lU'](me);
        }
    },
    '_gN'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (n.classList.contains('rd-k2')) {
            n.classList.remove('rd-k2');
            index_1['_js'](me);
        }
    },
    '_gp<click>'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (n.classList.contains('rd-k2')) {
            me['_gN']();
        }
        else if (!n.classList.contains('rd-k0')) {
            me['_gM']();
        }
    },
    '_ml<click>'(e) {
        let me = this;
        me['_gN']();
        let valueKey = me.get('valueKey');
        let textKey = me.get('textKey');
        let iconKey = me.get('iconKey');
        let lastSelected = me.get('selected');
        let item = e.params.item;
        let selected = item;
        let selectedText = item;
        let selectedIcon = '';
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
            selectedIcon = item[iconKey];
        }
        if (lastSelected !== selected) {
            me.digest({
                selected,
                selectedIcon,
                selectedText
            });
            dispatch(me.root, 'change', {
                item,
                value: valueKey ? item[valueKey] : item,
                text: textKey ? item[textKey] : item
            });
        }
    },
});

});