//#loader=none;
if (typeof DEBUG == 'undefined') DEBUG = true;
'@:./lib/sea.js';
'@:./lib/magix.ts';
let designer = () => {
    let node = document.getElementById('boot') as HTMLScriptElement;
    let src = node.src.replace(/\/[^\/]+$/, '/');
    seajs.config({
        paths: {
            display: src + 'display',
            elements: src + 'elements',
            i18n: src + 'i18n'
        },
        alias: {
            magix: 'magix5'
        }
    });
    seajs.use(['magix5', 'i18n/index'], (Magix: Magix5.Magix, I18n) => {
        Magix.applyStyle('@:scoped.style');
        let lang = navigator.language.toLowerCase();
        try {
            let store = window.localStorage;
            if (store) {
                lang = store.getItem('l.lang') || lang;
            }
        } catch {

        }
        Magix.config({
            lang
        });
        document.title = I18n('@:{lang#site.name}');

        let root = Magix.node('app');
        root.classList.add('@:scoped.style:designer-root');
        let returnReg = /(?:\r\n|\r|\n)/g;
        let charMap = {
            '&': '&#38;',
            '<': '&#60;',
            '>': '&#62;',
            '"': '&#34;',
            '\'': '&#39;',
            '\`': '&#96;'
        };
        let charReg = /[&<>"'\`]/g;
        let charReplacer = m => charMap[m];
        let TextReturn = str => {
            return (str + '').replace(charReg, charReplacer).replace(returnReg, '<br/>');
        };
        Magix.View.merge({
            ctor() {
                this.set({
                    textReturn: TextReturn,
                    i18n: I18n
                });
            }
        });
        Magix.boot({
            defaultPath: '/index',
            defaultView: 'display/index',
            rootId: 'app',
            error(e: Error) {
                setTimeout(() => {
                    throw e;
                }, 0);
            }
        });
    });
};