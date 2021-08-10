
//magix-composer#loader=none;
if (typeof DEBUG == 'undefined') DEBUG = true;
'@:./lib/sea.js';
'@:./lib/magix.ts';
/*!report-desinger|https://github.com/xinglie/report-designer/blob/master/LICENSE*/
window.designer = {
    setup(ops) {
        if (DEBUG) {
            let node = document.getElementById('boot') as HTMLScriptElement;
            let src = node.src.replace(/\/[^\/]+$/, '/');
            seajs.config({
                paths: {
                    designer: src + 'designer',
                    elements: src + 'elements',
                    gallery: src + 'gallery',
                    i18n: src + 'i18n',
                    mini: src + 'mini',
                    panels: src + 'panels',
                    provider: src + 'provider'
                },
                alias: {
                    magix: 'magix5'
                }
            });
        }
        seajs.use([
            'magix',
            'i18n/index'
        ], ({
            applyStyle,
            config,
            State,
            View,
            node,
            boot,
            guid,
            mark,
            parseUrl
        }, I18n) => {
            config(ops);
            if (!designer['@:{prepare.env}']) {
                designer['@:{prepare.env}'] = 1;
                applyStyle('@:scoped.style');
                let lang = navigator.language.toLowerCase();
                try {
                    let store = window.localStorage;
                    if (store) {
                        lang = store.getItem('rd.lang') || lang;
                    }
                } catch {

                }
                config({
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
                let CursorShape = (rotate, offset) => {
                    rotate = (rotate + offset) % 180;
                    if (rotate <= 22.5 ||
                        rotate > 157.5) {
                        return 'ew';
                    }
                    if (rotate <= 67.5) {
                        return 'nwse';
                    }
                    if (rotate <= 112.5) {
                        return 'ns'
                    }
                    if (rotate <= 157.5) {
                        return 'nesw';
                    }
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
                let scriptStyleReg = /<(script|style)[^>]*>[\S\s]*<\/\1[^>]*>/gi; let safeHTML = v => v.replace(scriptStyleReg, '');
                View.merge({
                    ctor() {
                        this.set({
                            excelTitle: toExcelColTitle,
                            textReturn: TextReturn,
                            i18n: I18n,
                            safeHTML,
                            cursor: CursorShape
                        });
                    },
                    /*'@:{throttle}'(fn, timespan) {
                        timespan = timespan || 150;
                        let last = Date.now();
                        let timer;
                        return (...args) => {
                            let now = Date.now();
                            clearTimeout(timer);
                            if ((now - last) > timespan) {
                                last = now;
                                fn.apply(this, args);
                            } else {
                                timer = setTimeout(() => {
                                    fn.apply(this, args);
                                }, timespan - (now - last));
                            }
                        };
                    },*/
                    '@:{safe.html}': safeHTML,
                    '@:{debounce}'(fn, timespan) {
                        timespan = timespan || 150;
                        let timer,
                            markKey = guid('dm_'),
                            view = this;
                        return (...args) => {
                            clearTimeout(timer);
                            let m = mark(view, markKey);
                            timer = setTimeout(() => {
                                if (m()) {
                                    fn.apply(this, args);
                                }
                            }, timespan);
                        };
                    },
                    '@:{prevent.default}'(e: MouseEvent) {
                        e.preventDefault();
                    },
                    '@:{stop.propagation}'(e: MouseEvent) {
                        e.stopPropagation();
                    },
                    '@:{stop}<change>'(e) {
                        this['@:{stop.propagation}'](e);
                    },
                    '@:{prevent}<contextmenu>'(e: MouseEvent) {
                        this['@:{prevent.default}'](e);
                    }
                });
                let lastBusy = 0;
                let root = node(config('rootId'));
                root.classList.add('@:scoped.style:designer-root', '@:scoped.style:pr', '@:scoped.style:overflow-hidden')
                config({
                    defaultPath: '/index',
                    wait(f) {
                        if (f != lastBusy) {
                            State.fire('@:{event#magix.busy}', {
                                busy: lastBusy = f
                            });
                        }
                    },
                    error(e: Error) {
                        setTimeout(() => {
                            throw e;
                        }, 0);
                    }
                });
            }
            let { params } = parseUrl(location.href);
            let path = 'mini/index';
            if (params.mode == 'notr') {
                path += '-notr';
            }
            boot({
                defaultView: path
            });
        });
    },
    destroy() {
        seajs.use([
            'magix',
        ], ({ unboot }) => {
            unboot();
        });
    }
};