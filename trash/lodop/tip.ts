import Magix from 'magix';
export default Magix.View.extend({
    tmpl: '@:./tip.html',
    init(data) {
        this['@:{dialog}'] = data.dialog;
    },
    render() {
        this.digest();
    },
    '@:{enter}<click>'() {
        this['@:{dialog}'].close();
    }
})