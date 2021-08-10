/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
export default Magix.View.extend({
    tmpl: '@:./page.html',
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    getValue() {
        let { page, elements, groups } = this.get();
        return {
            page,
            elements,
            groups
        };
    }
});