/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-dropdown/index",["magix5","../mx-monitor/index"],(require,exports,module)=>{
let $quick_eF_1_static_node;
let $quick_eF_0_static_attr={'class': 'rd-_assets_index_less_-iconfont rd-_gallery_mx-dropdown_index_less_-icon-text',};
let $quick_eF_2_static_attr={'class': 'rd-_assets_index_less_-none rd-_assets_index_less_-overflow-auto rd-_assets_index_less_-pa rd-_assets_index_less_-scrollable rd-_assets_index_less_-thin-scrollable rd-_gallery_mx-dropdown_index_less_-dropdown-menu-wrapper',};
let $quick_eF_3_static_attr={'class': 'rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-iconfont rd-_gallery_mx-dropdown_index_less_-icon-text',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../mx-monitor/index");
let { View, applyStyle, toMap, inside, node, dispatch, isFunction } = magix_1;
applyStyle("rd-_gallery_mx-dropdown_index_less_","\n.rd-_gallery_mx-dropdown_index_less_-dropdown {\nmin-width:50px;\nbackground-color:#fff;\nborder:solid 1px #e6e6e6;\nborder-radius:2px;\nvertical-align:middle;\nheight:22px;\noutline:0;\n}\n.rd-_gallery_mx-dropdown_index_less_-dropdown-enable:focus,\n.rd-_gallery_mx-dropdown_index_less_-dropdown-enable:focus:hover {\nborder-color:#47B34E;\n}\n.rd-_gallery_mx-dropdown_index_less_-dropdown:hover {\nborder-color:#ccc;\n}\n.rd-_gallery_mx-dropdown_index_less_-dropdown-toggle {\ncolor:#333;\npadding:0 20px 0 3px;\n}\n.rd-_gallery_mx-dropdown_index_less_-notallowed {\ncursor:not-allowed;\nbackground-color:#f5f5f5;\n}\n.rd-_gallery_mx-dropdown_index_less_-notallowed:hover {\nborder-color:#e6e6e6;\n}\n.rd-_gallery_mx-dropdown_index_less_-notallowed .rd-_gallery_mx-dropdown_index_less_-dropdown-toggle {\ncursor:not-allowed;\ncolor:#999;\n}\n.rd-_gallery_mx-dropdown_index_less_-arrow {\ntop:0;\nwidth:20px;\ncolor:#ccc;\ntransition:all 0.25s;\n}\n.rd-_gallery_mx-dropdown_index_less_-arrow::after {\nwidth:0;\nheight:0;\nposition:absolute;\ninset:0;\nborder-left:4px solid rgba(0, 0, 0, 0);\nborder-right:4px solid rgba(0, 0, 0, 0);\nborder-top:4px solid #ccc;\ncontent:'';\ndisplay:block;\nmargin:auto;\n}\n.rd-_gallery_mx-dropdown_index_less_-open .rd-_gallery_mx-dropdown_index_less_-arrow {\ntransform:rotate(180deg);\n}\n.rd-_gallery_mx-dropdown_index_less_-open,\n.rd-_gallery_mx-dropdown_index_less_-open:hover {\nborder-color:#47B34E;\n}\n.rd-_gallery_mx-dropdown_index_less_-dropdown-toggle-label {\nheight:20px;\nline-height:21px;\n}\n.rd-_gallery_mx-dropdown_index_less_-dropdown-menu-wrapper {\ntop:100%;\nleft:-1px;\nright:-1px;\nmargin-top:4px;\nborder-radius:2px;\nz-index:300;\nborder:1px solid #ccc;\nbackground-color:#fff;\n}\n.rd-_gallery_mx-dropdown_index_less_-open .rd-_gallery_mx-dropdown_index_less_-dropdown-menu-wrapper {\ndisplay:block;\n}\n.rd-_gallery_mx-dropdown_index_less_-dropdown-menu {\nmax-height:196px;\npadding:2px 0;\n}\n.rd-_gallery_mx-dropdown_index_less_-dropdown-item {\npadding:0 2px;\nmargin:2px 0;\n}\n.rd-_gallery_mx-dropdown_index_less_-item-link {\npadding:0 5px;\nheight:20px;\nline-height:20px;\nborder-radius:2px;\n}\n.rd-_gallery_mx-dropdown_index_less_-item-link:hover {\ncolor:#333;\nbackground-color:#f0f0f0;\n}\n.rd-_gallery_mx-dropdown_index_less_-active,\n.rd-_gallery_mx-dropdown_index_less_-active:hover,\n.rd-_gallery_mx-dropdown_index_less_-active:active,\n.rd-_gallery_mx-dropdown_index_less_-active:focus {\ncolor:#fff;\nbackground-color:#47B34E;\n}\n.rd-_gallery_mx-dropdown_index_less_-icon-text {\npadding:0 4px;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
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
$vnode_1=[];$vnode_3=[];$__line=7;$__art="{{if selectedIcon}}";$__ctrl="if(selectedIcon){";
if(selectedIcon){
$vnode_4=[$createVNode(0,($__line=8,$__art='{{=selectedIcon}}',$__ctrl='<%=selectedIcon%>',(selectedIcon)),1)];$vnode_3.push($createVNode('i',$quick_eF_0_static_attr,$vnode_4));
}$vnode_3.push($createVNode(0,($__line=10,$__art='{{=i18n(selectedText)}}',$__ctrl='<%=i18n(selectedText)%>',(i18n(selectedText)))));;$$_class='rd-_gallery_mx-dropdown_index_less_-dropdown-toggle-label rd-_assets_index_less_-display-block rd-_assets_index_less_-ellipsis'+($__line=6,$__art='{{if (selected===\'\'||selected==emptyText)}}','');$__ctrl='<%if(selected===\'\'||selected==emptyText){%>';if(selected===''||selected==emptyText){;$$_class+=' rd-_assets_index_less_-color-999'+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2=[$createVNode('span',{'class': $$_class,},$vnode_3)];
if($quick_eF_1_static_node){
$vnode_2.push($quick_eF_1_static_node);
}else{
$vnode_2.push($quick_eF_1_static_node=$createVNode('span',{'_': 'b^','class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-pa rd-_assets_index_less_-right-0 rd-_gallery_mx-dropdown_index_less_-arrow',}));
}
$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-pr rd-_assets_index_less_-wp100 rd-_gallery_mx-dropdown_index_less_-dropdown-toggle','mx5-click': $viewId+'@:{toggle~rs}()','title': ($__line=5,$__art='{{=i18n(selectedText)}}',$__ctrl='<%=i18n(selectedText)%>',(i18n(selectedText))),},$vnode_2));$__line=14;$__art="{{if rList}}";$__ctrl="if(rList){";
if(rList){
$vnode_3=[];$__line=17;$__art="{{each list as item}}";$__ctrl="for(let $q_c_vxhxukfy=list.length,$q_key_zokgepyd=0;$q_key_zokgepyd<$q_c_vxhxukfy;$q_key_zokgepyd++){let item=list[$q_key_zokgepyd];";
for(let $q_c_vxhxukfy=list.length,$q_key_zokgepyd=0;$q_key_zokgepyd<$q_c_vxhxukfy;$q_key_zokgepyd+=1){
let item=list[$q_key_zokgepyd];
($__line=18,$__art='{{set text=item,value=item,icon}}','');$__ctrl='<%let text=item,value=item,icon;%>';let text=item,value=item,icon;;$__line=19;$__art="{{if textKey&&valueKey}}";$__ctrl="if(textKey&&valueKey){";
if(textKey&&valueKey){
$text=($__line=20,$__art='{{text=i18n(item[textKey])}}','');$__ctrl='<%text=i18n(item[textKey])%>';text=i18n(item[textKey]);$text+=' '+($__line=21,$__art='{{value=item[valueKey]}}','');$__ctrl='<%value=item[valueKey]%>';value=item[valueKey];$text+=' '+($__line=22,$__art='{{icon=item[iconKey]}}','');$__ctrl='<%icon=item[iconKey]%>';icon=item[iconKey];
}($__line=24,$__art='{{set equal=(value+\'\')===(selected+\'\')}}','');$__ctrl='<%let equal=(value+\'\')===(selected+\'\');%>';let equal=(value+'')===(selected+'');;$vnode_5=[];$__line=29;$__art="{{if icon}}";$__ctrl="if(icon){";
if(icon){
$vnode_6=[$createVNode(0,($__line=30,$__art='{{=icon}}',$__ctrl='<%=icon%>',(icon)),1)];$vnode_5.push($createVNode('i',$quick_eF_3_static_attr,$vnode_6));
}$vnode_5.push($createVNode(0,($__line=32,$__art='{{=text}}',$__ctrl='<%=text%>',(text))));;$$_class='rd-_gallery_mx-dropdown_index_less_-item-link rd-_assets_index_less_-display-block rd-_assets_index_less_-color-666 rd-_assets_index_less_-wp100 rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ellipsis'+($__line=27,$__art='{{if equal}}','');$__ctrl='<%if(equal){%>';if(equal){;$$_class+=' rd-_gallery_mx-dropdown_index_less_-active'+($__line=27,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_4=[$createVNode('span',{'mx5-click': $viewId+'@:{select~rs}({item:\''+($__line=28,$__art='{{#item}}',$__ctrl='<%#item,\'auto_key_list.\'+($q_key_zokgepyd)+\'.item\'%>',$keyOf($refData,item,'auto_key_list.'+($q_key_zokgepyd)+'.item'))+'\'})','class': $$_class,},$vnode_5)];$vnode_3.push($createVNode('li',{'title': ($__line=25,$__art='{{=text}}',$__ctrl='<%=text%>',(text)),'class': 'rd-_assets_index_less_-overflow-auto rd-_gallery_mx-dropdown_index_less_-dropdown-item',},$vnode_4));
}$vnode_2=[$createVNode('ul',{'class': 'rd-_assets_index_less_-tag-ul rd-_gallery_mx-dropdown_index_less_-dropdown-menu','id': '_mx_list_'+($__line=16,$__art='{{=$viewId}}','')+$viewId,},$vnode_3)];$vnode_1.push($createVNode('div',$quick_eF_2_static_attr,$vnode_2));
};$$_class='rd-_gallery_mx-dropdown_index_less_-dropdown rd-_assets_index_less_-wp100 rd-_assets_index_less_-unselectable rd-_assets_index_less_-pr rd-_assets_index_less_-display-inline-block'+($__line=1,$__art='{{if disabled}}','');$__ctrl='<%if(disabled){%>';if(disabled){;$$_class+=' rd-_gallery_mx-dropdown_index_less_-notallowed'+($__line=1,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_gallery_mx-dropdown_index_less_-dropdown-enable'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'id': '_mx_dd_'+($__line=1,$__art='{{=$viewId}}','')+$viewId,'tabindex': (($__line=1,$__art='{{=!disabled}}',$__ctrl='<%=!disabled%>',!disabled))&&(0),'class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-dropdown/index.html'; throw msg; }  } ,
    init() {
        index_1["@:{setup~rs}"]();
        this.on('destroy', () => {
            index_1['@:{remove~rs}'](this);
            index_1['@:{teardown~rs}']();
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
    '@:{inside~rs}'(node) {
        return inside(node, this.root);
    },
    async '@:{show~rs}'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (!n.classList.contains('rd-_gallery_mx-dropdown_index_less_-open')) {
            n.classList.add('rd-_gallery_mx-dropdown_index_less_-open');
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
            index_1['@:{add~rs}'](me);
        }
    },
    '@:{hide~rs}'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (n.classList.contains('rd-_gallery_mx-dropdown_index_less_-open')) {
            n.classList.remove('rd-_gallery_mx-dropdown_index_less_-open');
            index_1['@:{remove~rs}'](me);
        }
    },
    '@:{toggle~rs}<click>'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (n.classList.contains('rd-_gallery_mx-dropdown_index_less_-open')) {
            me['@:{hide~rs}']();
        }
        else if (!n.classList.contains('rd-_gallery_mx-dropdown_index_less_-notallowed')) {
            me['@:{show~rs}']();
        }
    },
    '@:{select~rs}<click>'(e) {
        let me = this;
        me['@:{hide~rs}']();
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