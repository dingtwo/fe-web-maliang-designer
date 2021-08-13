/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/6v/index",["5c","../76/index"],(require,exports,module)=>{
let $quick_nQ_1_static_node;
let $quick_nQ_0_static_attr={'class': 'rd-l3 rd-qX',};
let $quick_nQ_2_static_attr={'class': 'rd-mJ rd-mO rd-mS rd-mT rd-nQ rd-qS',};
let $quick_nQ_3_static_attr={'class': 'rd-l3 rd-nU rd-qX',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let index_1 = require("../76/index");
let { View, applyStyle, toMap, inside, node, dispatch, isFunction } = magix_1;
applyStyle("rd-ml",".rd-qL{background-color:#fff;border:1px solid #e6e6e6;border-radius:2px;height:22px;min-width:50px;outline:0;vertical-align:middle}.rd-qM:focus,.rd-qM:focus:hover{border-color:#47b34e}.rd-qL:hover{border-color:#ccc}.rd-qN{color:#333;padding:0 20px 0 3px}.rd-qO{background-color:#f5f5f5;cursor:not-allowed}.rd-qO:hover{border-color:#e6e6e6}.rd-qO .rd-qN{color:#999;cursor:not-allowed}.rd-qP{color:#ccc;top:0;transition:all .25s;width:20px}.rd-qP:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #ccc;content:\"\";display:block;height:0;inset:0;margin:auto;position:absolute;width:0}.rd-qQ .rd-qP{transform:rotate(180deg)}.rd-qQ,.rd-qQ:hover{border-color:#47b34e}.rd-qR{height:20px;line-height:21px}.rd-qS{background-color:#fff;border:1px solid #ccc;border-radius:2px;left:-1px;margin-top:4px;right:-1px;top:100%;z-index:300}.rd-qQ .rd-qS{display:block}.rd-qT{max-height:196px;padding:2px 0}.rd-qU{margin:2px 0;padding:0 2px}.rd-qV{border-radius:2px;height:20px;line-height:20px;padding:0 5px}.rd-qV:hover{background-color:#f0f0f0;color:#333}.rd-qW,.rd-qW:active,.rd-qW:focus,.rd-qW:hover{background-color:#47b34e;color:#fff}.rd-qX{padding:0 4px}");
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
$vnode_4=[$createVNode(0,(selectedIcon),1)];$vnode_3.push($createVNode('i',$quick_nQ_0_static_attr,$vnode_4));
}$vnode_3.push($createVNode(0,(i18n(selectedText))));;$$_class='rd-qR rd-mP rd-mU';if(selected===''||selected==emptyText){;$$_class+=' rd-nL';};$vnode_2=[$createVNode('span',{'class': $$_class,},$vnode_3)];
if($quick_nQ_1_static_node){
$vnode_2.push($quick_nQ_1_static_node);
}else{
$vnode_2.push($quick_nQ_1_static_node=$createVNode('span',{'_': 'i!','class': 'rd-mC rd-mJ rd-nZ rd-qP',}));
}
$vnode_1.push($createVNode('div',{'class': 'rd-mB rd-mK rd-nk rd-qN','mx5-click': $viewId+'_md()','title': (i18n(selectedText)),},$vnode_2));
if(rList){
$vnode_3=[];
for(let $q_c_nyucze=list.length,$q_key_tlpcy=0;$q_key_tlpcy<$q_c_nyucze;$q_key_tlpcy+=1){
let item=list[$q_key_tlpcy];
let text=item,value=item,icon;;
if(textKey&&valueKey){
$text='';text=i18n(item[textKey]);$text+=' ';value=item[valueKey];$text+=' ';icon=item[iconKey];
}let equal=(value+'')===(selected+'');;$vnode_5=[];
if(icon){
$vnode_6=[$createVNode(0,(icon),1)];$vnode_5.push($createVNode('i',$quick_nQ_3_static_attr,$vnode_6));
}$vnode_5.push($createVNode(0,(text)));;$$_class='rd-qV rd-mP rd-nN rd-mB rd-nk rd-mU';if(equal){;$$_class+=' rd-qW';};$vnode_4=[$createVNode('span',{'mx5-click': $viewId+'_r7({item:\''+$keyOf($refData,item,'i!.'+($q_key_tlpcy)+'.i@')+'\'})','class': $$_class,},$vnode_5)];$vnode_3.push($createVNode('li',{'title': (text),'class': 'rd-nQ rd-qU',},$vnode_4));
}$vnode_2=[$createVNode('ul',{'class': 'rd-mn rd-qT','id': '_mx_list_'+$viewId,},$vnode_3)];$vnode_1.push($createVNode('div',$quick_nQ_2_static_attr,$vnode_2));
};$$_class='rd-qL rd-mB rd-mR rd-mK rd-mQ';if(disabled){;$$_class+=' rd-qO';}else{;$$_class+=' rd-qM';};$vnode_0=[$createVNode('div',{'id': '_mx_dd_'+$viewId,'tabindex': ((!disabled))&&(0),'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        index_1["_ro"]();
        this.on('destroy', () => {
            index_1['_pd'](this);
            index_1['_rp']();
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
    '_rE'(node) {
        return inside(node, this.root);
    },
    async '_mA'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (!n.classList.contains('rd-qQ')) {
            n.classList.add('rd-qQ');
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
            index_1['_rF'](me);
        }
    },
    '_mB'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (n.classList.contains('rd-qQ')) {
            n.classList.remove('rd-qQ');
            index_1['_pd'](me);
        }
    },
    '_md<click>'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (n.classList.contains('rd-qQ')) {
            me['_mB']();
        }
        else if (!n.classList.contains('rd-qO')) {
            me['_mA']();
        }
    },
    '_r7<click>'(e) {
        let me = this;
        me['_mB']();
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