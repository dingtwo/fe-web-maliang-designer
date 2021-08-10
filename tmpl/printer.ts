//magix-composer#loader=none;
if (typeof DEBUG == 'undefined') DEBUG = true;
'@:./lib/sea.js';
'@:./lib/magix.ts';
/*!report-desinger|https://github.com/xinglie/report-designer/blob/master/LICENSE*/
window.designer = {
    setup(ops) {
        return new Promise(resolve => {
            if (DEBUG) {
                let node = document.getElementById('boot') as HTMLScriptElement;
                let src = node.src.replace(/\/[^\/]+$/, '/');
                seajs.config({
                    paths: {
                        designer: src + 'designer',
                        elements: src + 'elements',
                        gallery: src + 'gallery',
                        i18n: src + 'i18n',
                        provider: src + 'provider'
                    },
                    alias: {
                        magix: 'magix5'
                    }
                });
            }
            seajs.use(['magix5', 'i18n/index'], ({
                applyStyle,
                config,
                node,
                View,
                boot
            }, I18n) => {
                if (!designer['@:{inited}']) {
                    designer['@:{inited}'] = 1;
                    applyStyle('@:scoped.style');
                    let lang = navigator.language.toLowerCase();
                    try {
                        let store = window.localStorage;
                        if (store) {
                            lang = store.getItem('rd.lang') || lang;
                        }
                    } catch {

                    }
                    config(ops, {
                        lang
                    });
                    //处理textarea中的回车换行
                    let returnReg = /(?:\r\n|\r|\n)/g;
                    let charMap = {
                        '&': 38,
                        '<': 60,
                        '>': 62,
                        '"': 34,
                        '\'': 39,
                        '\`': 96
                    };
                    let charReg = /[&<>"'\`]/g;
                    let charReplacer = m => `&#${charMap[m]};`;
                    let TextReturn = str => {
                        if (str == null) {
                            str = '';
                        } else {
                            str += '';
                        }
                        return str.replace(charReg, charReplacer).replace(returnReg, '<br/>');
                    };

                    let toExcelColTitle = (index, base = 65) => {
                        let str = '',
                            rest;
                        index += 1;
                        while (index) {
                            rest = (index - 1) % 26;
                            str = String.fromCharCode(rest + base) + str;
                            index = (index - rest - 1) / 26;
                        }
                        return str;
                    };
                    let scriptStyleReg = /<(script|style)[^>]*>[\S\s]*<\/\1[^>]*>/gi;
                    let safeHTML = v => v.replace(scriptStyleReg, '');
                    View.merge({
                        ctor() {
                            this.set({
                                excelTitle: toExcelColTitle,
                                textReturn: TextReturn,
                                safeHTML,
                                i18n: I18n
                            });
                        },
                        '@:{safe.html}': safeHTML,
                        '@:{stop.propagation}'(e: MouseEvent) {
                            e.stopPropagation();
                        },
                        '@:{stop}<change>'(e) {
                            this['@:{stop.propagation}'](e);
                        },
                    });
                }

                let rootId = 'app',
                    root,
                    view = 'index';
                if (ops &&
                    ops.use == 'virtual') {
                    view = ops.use;
                    rootId = config('rootId');
                    root = node(rootId);
                    if (!root) {
                        let div = document.createElement('div');
                        let cssText = `pointer-events:none;position:fixed;`;
                        if (DEBUG) {
                            cssText += 'left:0;top:0';
                        } else {
                            cssText += 'opacity:0;left:-500cm;top:-500cm';
                        }
                        div.style.cssText = cssText;
                        div.id = rootId;
                        root = div;
                        document.body.append(div);
                    }
                } else {
                    document.title = I18n('@:{lang#site.name}');
                    document.documentElement.style.background = '#eee';
                    root = node('app');
                }
                if (root) {
                    root.classList.add('@:scoped.style:designer-root');
                }
                boot({
                    defaultPath: '/index',
                    defaultView: 'printer/' + view,
                    rootId,
                    error(e: Error) {
                        setTimeout(() => {
                            throw e;
                        }, 0);
                    }
                });
                resolve();
            });
        });
    },
    getHTML(ops) {
        return new Promise((resolve, reject) => {
            seajs.use(['magix5'], ({
                config,
                node,
                Vframe
            }) => {
                let rootId = config('rootId');
                let root = node(rootId);
                if (root) {
                    let vf = Vframe.byNode(root);
                    if (vf) {
                        vf.invoke('@:{get.html}', [ops, resolve]);
                    } else {
                        reject('can not find ' + rootId);
                    }
                } else {
                    reject('can not find ' + rootId);
                }
            });
        });
    }
};