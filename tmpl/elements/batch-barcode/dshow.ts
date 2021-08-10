/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import BarcodeProvider from '../../provider/barcode';
import EBind from '../../provider/ebind';
let { View, mark, task } = Magix;
export default View.extend({
    tmpl: '@:dshow.html',
    init() {
        this['@:{has.contents}'] = ['text'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, text } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[bind:${bindField.id}]`;
        }
        this.set({
            text
        });
    },
    async render() {
        let m = mark(this, '@:{render}');
        await this.digest({
            error: null
        });
        try {
            await BarcodeProvider["@:{load.library}"]();
            if (m()) {
                let { linewidth,
                    height,
                    format,
                    showText,
                    color } = this.get('props');
                let text = this.get('text');
                if (text != this['@:{cached.text}'] ||
                    format != this['@:{cached.format}'] ||
                    showText != this['@:{cached.show.text}'] ||
                    linewidth != this['@:{cached.line.width}'] ||
                    color != this['@:{cached.color}']) {
                    this['@:{cached.text}'] = text;
                    if (text) {
                        m = mark(this, '@:{render.barcode}');
                        task(() => {
                            if (m()) {
                                JsBarcode(`#_rd_${this.id}_bar`, text, {
                                    //height: Const['@:{const#to.px}'](height),
                                    lineColor: this['@:{cached.color}'] = color,
                                    width: this['@:{cached.line.width}'] = linewidth,
                                    format: this['@:{cached.format}'] = format,
                                    displayValue: this['@:{cached.show.text}'] = showText
                                });
                            }
                        });
                    }
                }
            }
        } catch (ex) {
            if (m()) {
                this.digest({
                    error: ex
                });
            }
        }
    },
}).merge(EBind);