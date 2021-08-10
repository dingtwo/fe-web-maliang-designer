/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Monitor from '../mx-monitor/index';
let { View, applyStyle, toMap, inside, node, dispatch, isFunction } = Magix;
applyStyle('@:index.less');
export default View.extend({
    tmpl: '@:index.html',
    init() {
        Monitor["@:{setup}"]();
        this.on('destroy', () => {
            Monitor['@:{remove}'](this);
            Monitor['@:{teardown}']();
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
        } else {
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
            } else {
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
    '@:{inside}'(node) {
        return inside(node, this.root);
    },
    async '@:{show}'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (!n.classList.contains('@:index.less:open')) {
            n.classList.add('@:index.less:open');
            let r = me.get('rList');
            if (!r) {
                await me.digest({
                    rList: true
                });
            }
            n = node('_mx_list_' + me.id);
            let active = n.querySelector('li[active]') as HTMLLIElement & {
                scrollIntoViewIfNeeded: () => void
            };
            if (active && active.scrollIntoViewIfNeeded) {
                active.scrollIntoViewIfNeeded();
            }

            Monitor['@:{add}'](me);
        }
    },
    '@:{hide}'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (n.classList.contains('@:index.less:open')) {
            n.classList.remove('@:index.less:open');
            Monitor['@:{remove}'](me);
        }
    },
    '@:{toggle}<click>'() {
        let me = this;
        let n = node('_mx_dd_' + me.id);
        if (n.classList.contains('@:index.less:open')) {
            me['@:{hide}']();
        } else if (!n.classList.contains('@:index.less:notallowed')) {
            me['@:{show}']();
        }
    },
    '@:{select}<click>'(e) {
        let me = this;
        me['@:{hide}']();
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