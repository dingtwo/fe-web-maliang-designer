/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/61/index",["4e","../68/index"],(require,exports,module)=>{
let $quick_fs_1_static_node;
let $quick_fs_0_static_attr={'class': 'rd-dF rd-iz',};
let $quick_fs_2_static_attr={'class': 'rd-el rd-eq rd-eu rd-ev rd-fs rd-iu',};
let $quick_fs_3_static_attr={'class': 'rd-dF rd-fw rd-iz',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let index_1 = require("../68/index");
let { View, applyStyle, toMap, inside, node, dispatch, isFunction } = magix_1;
applyStyle("rd-dY",".rd-in{background-color:#fff;border:1px solid #e6e6e6;border-radius:2px;height:22px;min-width:50px;outline:0;vertical-align:middle}.rd-io:focus,.rd-io:focus:hover{border-color:#fa742b}.rd-in:hover{border-color:#ccc}.rd-ip{color:#333;padding:0 20px 0 3px}.rd-iq{background-color:#f5f5f5;cursor:not-allowed}.rd-iq:hover{border-color:#e6e6e6}.rd-iq .rd-ip{color:#999;cursor:not-allowed}.rd-ir{color:#ccc;top:0;transition:all .25s;width:20px}.rd-ir:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #ccc;content:\"\";display:block;height:0;inset:0;margin:auto;position:absolute;width:0}.rd-is .rd-ir{transform:rotate(180deg)}.rd-is,.rd-is:hover{border-color:#fa742b}.rd-it{height:20px;line-height:21px}.rd-iu{background-color:#fff;border:1px solid #ccc;border-radius:2px;left:-1px;margin-top:4px;right:-1px;top:100%;z-index:300}.rd-is .rd-iu{display:block}.rd-iv{max-height:196px;padding:2px 0}.rd-iw{margin:2px 0;padding:0 2px}.rd-ix{border-radius:2px;height:20px;line-height:20px;padding:0 5px}.rd-ix:hover{background-color:#f0f0f0;color:#333}.rd-iy,.rd-iy:active,.rd-iy:focus,.rd-iy:hover{background-color:#fa742b;color:#fff}.rd-iz{padding:0 4px}");
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
$vnode_4=[$createVNode(0,(selectedIcon),1)];$vnode_3.push($createVNode('i',$quick_fs_0_static_attr,$vnode_4));
}$vnode_3.push($createVNode(0,(i18n(selectedText))));;$$_class='rd-it rd-er rd-ew';if(selected===''||selected==emptyText){;$$_class+=' rd-fn';};$vnode_2=[$createVNode('span',{'class': $$_class,},$vnode_3)];
if($quick_fs_1_static_node){
$vnode_2.push($quick_fs_1_static_node);
}else{
$vnode_2.push($quick_fs_1_static_node=$createVNode('span',{'_': 'cH','class': 'rd-ee rd-el rd-fB rd-ir',}));
}
$vnode_1.push($createVNode('div',{'class': 'rd-eX rd-ed rd-em rd-ip','mx5-click': $viewId+'_dQ()','title': (i18n(selectedText)),},$vnode_2));
if(rList){
$vnode_3=[];
for(let $q_c_ntlkmkhz=list.length,$q_key_lxzbokoc=0;$q_key_lxzbokoc<$q_c_ntlkmkhz;$q_key_lxzbokoc+=1){
let item=list[$q_key_lxzbokoc];
let text=item,value=item,icon;;
if(textKey&&valueKey){
$text='';text=i18n(item[textKey]);$text+=' ';value=item[valueKey];$text+=' ';icon=item[iconKey];
}let equal=(value+'')===(selected+'');;$vnode_5=[];
if(icon){
$vnode_6=[$createVNode(0,(icon),1)];$vnode_5.push($createVNode('i',$quick_fs_3_static_attr,$vnode_6));
}$vnode_5.push($createVNode(0,(text)));;$$_class='rd-ix rd-er rd-fp rd-ed rd-eX rd-ew';if(equal){;$$_class+=' rd-iy';};$vnode_4=[$createVNode('span',{'mx5-click': $viewId+'_jJ({item:\''+$keyOf($refData,item,'cH.'+($q_key_lxzbokoc)+'.cI')+'\'})','class': $$_class,},$vnode_5)];$vnode_3.push($createVNode('li',{'title': (text),'class': 'rd-fs rd-iw',},$vnode_4));
}$vnode_2=[$createVNode('ul',{'class': 'rd-d0 rd-iv','id': '_mx_list_'+$viewId,},$vnode_3)];$vnode_1.push($createVNode('div',$quick_fs_2_static_attr,$vnode_2));
};$$_class='rd-in rd-ed rd-et rd-em rd-es';if(disabled){;$$_class+=' rd-iq';}else{;$$_class+=' rd-io';};$vnode_0=[$createVNode('div',{'id': '_mx_dd_'+$viewId,'tabindex': ((!disabled))&&(0),'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        index_1["_i1"]();
        this.on('destroy', () => {
            index_1['_gQ'](this);
            index_1['_i2']();
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
    '_jg'(node) {
        return inside(node, this.root);
    },
    async '_ec'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (!n.classList.contains('rd-is')) {
            n.classList.add('rd-is');
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
            index_1['_jh'](me);
        }
    },
    '_ed'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (n.classList.contains('rd-is')) {
            n.classList.remove('rd-is');
            index_1['_gQ'](me);
        }
    },
    '_dQ<click>'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (n.classList.contains('rd-is')) {
            me['_ed']();
        }
        else if (!n.classList.contains('rd-iq')) {
            me['_ec']();
        }
    },
    '_jJ<click>'(e) {
        let me = this;
        me['_ed']();
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