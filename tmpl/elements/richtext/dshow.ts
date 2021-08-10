/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import CKEitorProvider from '../../provider/ckeditor5';
import DHistory from '../../designer/history';
import StageSelection from '../../designer/stage-selection';
let { applyStyle, View, mark, node } = Magix;
applyStyle('@:./dshow.less');
export default View.extend({
    tmpl: '@:dshow.html',
    init() {
        this.on('destroy', () => {
            let editor = this['@:{editor}'];
            if (editor && editor !== 1) {
                editor.destroy();
            }
        });
    },
    assign(data) {
        this.set(data);
    },
    async render() {
        let marker = mark(this, '@:{render}');
        let props = this.get('props');
        let readonly = props.readonly;
        await this.digest({
            readonly
        });
        if (!readonly) {
            await CKEitorProvider();
            if (marker()) {
                if (!this['@:{editor}']) {
                    this['@:{editor}'] = 1;
                    let editor = await CKEditor.Classic.create(node(`${this.id}_ed`), {
                        initialData: props.text
                    });
                    this['@:{editor}'] = editor;
                    editor.model.document.on('change', () => {
                        this.get('props').text = editor.getData();
                    });
                } else if (this['@:{editor}'] != 1) {
                    this['@:{editor}'].setData(props.text);
                }
            }
        } else {
            this.digest({
                pv: true,
                text: props.text
            });
        }
    },
    '@:{toggle.state}<click>'(e) {
        let pv = this.get('pv');
        let props = this.get('props');
        this.digest({
            pv: !pv,
            text: props.text
        });
    },
    '@:{stop}<pointerdown,contextmenu>'(e: Magix5.MagixMouseEvent & {
        target: HTMLElement
    }) {
        if (e['@:{halt}']) return;
        let { target } = e;
        if (target.id != `${this.id}_pv`) {
            e['@:{halt}'] = 1;
            let element = this.get('element');
            if (StageSelection["@:{selection#set}"](element)) {
                DHistory["@:{history#save}"](DHistory['@:{history#element.get.focus}'], element.props.ename);
            }
        }
    }
});