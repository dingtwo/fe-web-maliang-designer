/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { View, dispatch } = Magix;
export default View.extend({
    tmpl: '@:./items.html',
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
    '@:{update.item}<input>'(e) {
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
    '@:{update.state}<change>'(e) {
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
    '@:{add.item}<click>'() {
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
    '@:{remove.item}<click>'(e) {
        let { i } = e.params;
        let items = this.get('items');
        items.splice(i, 1);
        dispatch(this.root, 'change', {
            items
        });
    },
});