import Magix from 'magix';
import Service from '../../designer/service';
import RDS from './index';
'ref@:../index.less';
let Layouts = [{
    text: '纵向',
    value: 'portrait'
}, {
    text: '横向',
    value: 'landscape'
}];
export default Magix.View.extend({
    tmpl: '@:./setting.html',
    init(data) {
        this['@:{dialog}'] = data.dialog;
        this.set({
            exf: RDS["@:{format.ex.message}"],
            layouts: Layouts
        });
    },
    render() {
        let mark = Magix.mark(this, '@:{render.rds.setting}');
        let s = new Service();
        s.all({
            name: '@:{post.by.url}',
            url: Magix.config('rds') + 'printers',
            '@:{body}': JSON.stringify({
                width: 0,
                height: 0,
                location: location.href
            })
        }, (ex, bag) => {
            if (mark()) {
                let printer = RDS["@:{get.config}"]();
                let list = bag.get('data', []);
                if (!printer.name) {
                    printer.name = list[0];
                }
                this.digest({
                    error: ex,
                    list,
                    printer
                });
            }
        });
    },
    '@:{cancel}<click>'() {
        this['@:{dialog}'].close();
    },
    '@:{update.num}<input>'(e) {
        let printer = this.get('printer');
        let { key } = e.params;
        printer[key] = e.value;
    },
    '@:{set.printer}<change>'(e) {
        let printer = this.get('printer');
        let { key } = e.params;
        printer[key] = e.value;
    },
    '@:{set.printer.two.side}<change>'(e) {
        let printer = this.get('printer');
        printer.ts = e.eventTarget.checked;
    },
    '@:{apply}<click>'() {
        RDS["@:{set.config}"](this.get('printer'));
        this['@:{dialog}'].close();
    }
});