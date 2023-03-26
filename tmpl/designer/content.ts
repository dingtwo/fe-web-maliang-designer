/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Toast from '../gallery/mx-toast/index';
import I18n from '../i18n/index';
import FileSystemProvider from '../provider/fs';
import DHistory from './history';
import ToJSON from './tojson';
let padStart = (str, n, char) => {
    str += '';
    if (str.length < n) {
        str = Array(n - str.length + 1).join(char) + str;
    }
    return str;
};
let { node, State, applyStyle, View, Vframe, mark } = Magix;
applyStyle('@:content.less');
let prefix = atob('LyohUmVwb3J0IERlc2lnbmVyIEZpbGUKRnJvbTpodHRwczovL2dpdGh1Yi5jb20veGluZ2xpZS9yZXBvcnQtZGVzaWduZXIKQXV0aG9yOmtvb2JveV9saUAxNjMuY29tKi8K');
let alertMsg = msg => {
    Vframe.root().invoke('alert', [msg]);
};
let tryApplyContent = (content: string) => {
    let json;
    try {
        content = content.trim();
        if (content.startsWith(prefix)) {
            content = decodeURIComponent(atob(content.replace(prefix, '')));
        }
        json = JSON.parse(content);
    } catch (ex) {
        alertMsg(I18n('@:{lang#read.failure}') + ex.message);
        return;
    }
    State.fire('@:{event#example.change}', {
        '@:{excample.change.event#stage}': json,
        '@:{excample.change.event#type}': DHistory['@:{history#example.from.custom}'],
        '@:{excample.change.event#title}': ''
    });
    return 1;
}
export default View.extend({
    tmpl: '@:content.html',
    init(data) {
        this['@:{dialog}'] = data.dialog;
    },
    render() {
        this.digest({
            body: ToJSON()
        });
    },
    '@:{cancel}<click>'() {
        this['@:{dialog}'].close();
    },
    '@:{apply}<click>'() {
        let value = (node('_rd_ta_' + this.id) as HTMLTextAreaElement).value.trim();
        if (tryApplyContent(value)) {
            this['@:{dialog}'].close();
        }
    }
}).static({
    async '@:{read.file}'(target: HTMLElement) {
        let readMark = mark(this, '@:{save.async}');
        try {
            let content = await FileSystemProvider['@:{read.file}'](target as HTMLInputElement);
            tryApplyContent(content);
        } catch (ex) {
            if (readMark() && ex.name != 'AbortError') {
                Vframe.root().invoke('alert', [ex.message]);
            }
        }

    },
    async '@:{save}'() {
        let saveMark = mark(this, '@:{save.async}');
        try {
            await FileSystemProvider['@:{prepare}']();
        } catch (ex) {
            Vframe.root().invoke('alert', [ex.message]);
            return;
        }
        if (saveMark()) {
            Toast.show(I18n('@:{lang#export.file.processing}'));
            let now = new Date();
            let time = [
                now.getFullYear(),
                padStart(now.getMonth() + 1, 2, '0'),
                padStart(now.getDate(), 2, '0'),
                padStart(now.getHours(), 2, '0'),
                padStart(now.getMinutes(), 2, '0'),
                padStart(now.getSeconds(), 2, '0')
            ].join('');
            let value = ToJSON();
            try {
                value = prefix + btoa(encodeURIComponent(value));
                await FileSystemProvider['@:{save.file}'](`${I18n('@:{lang#site.name}')}-${time}.rd`, value);
                Toast.show(I18n('@:{lang#export.success}'), 3e3);
            } catch (ex) {
                Toast.hide();
                if (saveMark() && ex.name != 'AbortError') {
                    Vframe.root().invoke('alert', [ex.message]);
                }
            }
        }
    }
});
