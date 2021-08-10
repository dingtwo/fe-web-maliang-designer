/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import CodeMirrorProvider from '../../provider/codemirror';
let { node, View, mark, dispatch, delay } = Magix;
let types = {
    script: {
        '@:{provides}': ['mode/javascript/javascript.min.js'],
        '@:{mode}': 'javascript'
    },
    html: {
        '@:{provides}': ['mode/xml/xml.min.js',
            'mode/css/css.min.js',
            'mode/javascript/javascript.min.js',
            'mode/htmlmixed/htmlmixed.min.js'],
        '@:{mode}': 'htmlmixed'
    }
};
export default View.extend({
    tmpl: '@:index.html',
    init() {
        this.on('destroy', () => {
            if (this['@:{editor}']) {
                this['@:{editor}'].toTextArea();
            }
        });
    },
    assign(data) {
        this.set(data);
        if (this['@:{editor}']) {
            this['@:{editor}'].setValue(data.value);
        }
        return false;
    },
    async render() {
        let m = mark(this, '@:{render}');
        let type = this.get('type') || 'script';
        let tInfo = types[type];
        console.log(tInfo);
        await CodeMirrorProvider(tInfo['@:{provides}']);
        await delay(200);
        await this.digest();
        if (m() && !this['@:{editor}']) {
            let ta = node(`_mx_ta_${this.id}`);
            this['@:{editor}'] = CodeMirror.fromTextArea(ta, {
                mode: tInfo['@:{mode}'],
                lineNumbers: true,
                lineWrapping: true
            });
            this['@:{editor}'].setSize('100%', '100%');
            this['@:{editor}'].on('blur', e => {
                dispatch(this.root, 'cmchange', {
                    value: e.getValue()
                });
            });
        }
    }
});