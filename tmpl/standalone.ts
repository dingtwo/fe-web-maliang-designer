
//magix-composer#loader=none;
if (typeof DEBUG == 'undefined') DEBUG = true;
'@:./lib/sea.js';
'@:./lib/magix.ts';
/*!report-desinger|https://github.com/xinglie/report-designer/blob/master/LICENSE*/
(() => {
    let filter = (key, value) => key.startsWith('_') ? undefined : value;
    let init = (ops?) => {
        if (!init['@:{inited.promise}']) {
            if (DEBUG) {
                let node = document.getElementById('boot') as HTMLScriptElement;
                // let node = document.currentScript as HTMLScriptElement;
                let src = node.src.replace(/\/[^\/]+$/, '/');
                seajs.config({
                    paths: {
                        designer: src + 'designer',
                        elements: src + 'elements',
                        gallery: src + 'gallery',
                        i18n: src + 'i18n',
                        provider: src + 'provider',
                        standalone: src + 'standalone'
                    },
                    alias: {
                        magix: 'magix5'
                    }
                });
            }
            init['@:{inited.promise}'] = new Promise<void>(resolve => {
                seajs.use(['magix5', 'i18n/index'], ({
                    applyStyle,
                    config,
                    View,
                    guid,
                    boot
                }, I18n) => {
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
                        getValue() {
                            let { id, type, props } = this.get();
                            return {
                                id, type, props,
                                elementId: id,
                                elementType: type,
                                elementProps: JSON.stringify(props, filter)
                            };
                        },
                        getProps() {
                            return this.get('props');
                        },
                        update(props) {
                            this.set({
                                props
                            });
                            this.render();
                        },
                        '@:{safe.html}': safeHTML,
                        '@:{stop.propagation}'(e: MouseEvent) {
                            e.stopPropagation();
                        },
                        '@:{stop}<change>'(e) {
                            this['@:{stop.propagation}'](e);
                        },
                    });
                    let rootId = guid();
                    define('standalone/~', () => {
                        return View.extend();
                    });
                    if (!document.body.id) {
                        document.body.id = rootId;
                    }
                    boot({
                        defaultPath: '/index',
                        defaultView: 'standalone/~',
                        rootId: document.body.id,
                        error(e: Error) {
                            setTimeout(() => {
                                throw e;
                            }, 0);
                        }
                    });
                    resolve();
                });
            });
        }
        return init['@:{inited.promise}'];
    };
    let rootSelector = '@:scoped.style:designer-root';
    let mountView = async (nodeOrId, path, params) => {
        await init();
        let { config, node, type, Vframe, State } = seajs.require('magix');
        let rootId = config('rootId');
        let rootNode = node(rootId);
        State.set({
            '@:{global#stage.unit}': params.unit || 'px'
        });
        let rootVframe = Vframe.byNode(rootNode);
        let destNode = nodeOrId;
        if (type(destNode) == 'String') {
            destNode = node(destNode.replace(/^#/, ''));
        }
        if (destNode) {
            if (!destNode.classList.contains(rootSelector)) {
                destNode.classList.add(rootSelector);
            }
            let oldVf = Vframe.byNode(destNode);
            if (oldVf &&
                oldVf.path == path) {
                await oldVf.invoke('assign', [params]);
                await oldVf.invoke('render');
            } else {
                rootVframe.mount(destNode, path, params);
            }
        }
    };
    window.designer = {
        config: init,
        element(nodeOrId, elementJSON) {
            mountView(nodeOrId, `elements/${elementJSON.type}/index`, elementJSON);
        },
        getVframe(nodeOrId) {
            return new Promise((resolve, reject) => {
                let tryTimes = 20;
                let destNode = nodeOrId;
                let { type, node, Vframe, isString } = seajs.require('magix');
                if (isString(destNode)) {
                    destNode = node((destNode as string).replace(/^#/, ''));
                }
                let check = () => {
                    if (destNode) {
                        let vf = Vframe.byNode(destNode);
                        if (vf) {
                            resolve(vf);
                        } else {
                            tryTimes--;
                            if (!tryTimes) {
                                reject(new Error('can not find vframe'));
                            } else {
                                setTimeout(check, 50);
                            }
                        }
                    } else {
                        reject(new Error('can not find nodeOrId'));
                    }
                };
                setTimeout(check, 50);
            });
        },
        page(nodeOrId, pageJSON) {
            mountView(nodeOrId, `standalone/page`, pageJSON);
        },
        remove(nodeOrId) {
            let destNode = nodeOrId;
            let { node, Vframe, isString } = seajs.require('magix');
            if (isString(destNode)) {
                destNode = node((destNode as string).replace(/^#/, ''));
            }
            if (destNode) {
                let vf = Vframe.byNode(destNode);
                if (vf) {
                    vf.unmount();
                    return true;
                }
            }
            return false;
        }
    };
})();