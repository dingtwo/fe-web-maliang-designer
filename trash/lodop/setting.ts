import Magix from 'magix';
import Lodop from './index';
'ref@:../index.less';
export default Magix.View.extend({
    tmpl: '@:./setting.html',
    init(data) {
        this['@:{dialog}'] = data.dialog;
    },
    render() {
        this.digest({
            src: Lodop["@:{get.clodop.src}"]()
        });
    },
    '@:{cancel}<click>'() {
        this['@:{dialog}'].close();
    },
    '@:{update.src}<input>'(e) {
        let value = e.eventTarget.value;
        this.digest({
            src: value
        });
    },
    '@:{apply}<click>'() {
        Lodop["@:{set.clodop.src}"](this.get('src'));
        this['@:{dialog}'].close();
    }
});