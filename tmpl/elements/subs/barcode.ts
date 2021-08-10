/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import BarcodeProvider from '../../provider/barcode';
let { View, task, mark } = Magix;
export default View.extend({
    tmpl: '@:barcode.html',
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '@:{render}');
        await this.digest({
            msg: 'loading...'
        });
        try {
            await BarcodeProvider["@:{load.library}"]();
            if (m()) {
                let {
                    //height,
                    value,
                    lineWidth,
                    format,
                    showText,
                    lineColor } = this.get();
                await this.digest({
                    msg: null
                });
                m = mark(this, '@:{render.barcode}');
                task(() => {
                    if (m()) {
                        JsBarcode(`#${this.id}_bar`, value, {
                            lineColor,
                            width: +lineWidth,
                            format,
                            displayValue: showText == 'true'
                        });
                    }
                });
            }
        } catch (ex) {
            if (m()) {
                this.digest({
                    msg: ex.message || ex
                });
            }
        }
    }
});