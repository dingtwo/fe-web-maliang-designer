/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { View, node, dispatch } = Magix;
export default View.extend({
    tmpl: '@:index.html',
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    getValue() {
        let props = this.get('props');
        let input = node(`ipt_${this.id}`);
        let id = this.get('id');
        return {
            id,
            type: 'form-input',
            props,
            elementId: id,
            elementType: 'form-input',
            elementProps: JSON.stringify(props),
            elementValue: props.userValue,
            elementName: props.inputName,
            elementInput: input
        }
    },
    '@:{update.value}<input>'(e: Magix5.MagixKeyboardEvent) {
        this['@:{stop.propagation}'](e);
        let { eventTarget } = e;
        let value = (eventTarget as HTMLInputElement).value.trim();
        let props = this.get('props');
        props.userValue = value;
        dispatch(this.root, 'elementinput', {
            elementId: this.get('id'),
            elementType: 'form-input',
            elementProps: JSON.stringify(props),
            elementValue: value,
            elementName: props.inputName,
            elementInput: eventTarget
        });
    }
});