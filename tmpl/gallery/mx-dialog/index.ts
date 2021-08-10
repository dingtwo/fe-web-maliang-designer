/*
    author:https://github.com/xinglie
 */
import Magix from 'magix';
let { View, Vframe,
    applyStyle, node, mark, dispatch,
    has, guid, use, mix, attach, detach } = Magix;
applyStyle('@:index.less');
interface DialogOptions {
    view: string
    width: number
    height?: number
    left?: string
    top?: string
    dialog: {
        close: () => void
    }
};
let DialogZIndex = 800;
let CacheList = [];
let RemoveCache = (view) => {
    for (let i = CacheList.length - 1, one; i >= 0; i--) {
        one = CacheList[i];
        if (one.id == view.id) {
            CacheList.splice(i, 1);
            break;
        }
    }
};
export default View.extend({
    tmpl: '@:index.html',
    init(extra) {
        let me = this;
        //let app = node(config('rootId'));
        let root = me.root;
        me.on('destroy', () => {
            RemoveCache(me);
            DialogZIndex -= 2;
            // if (DialogZIndex == 500) {
            //     app.classList.remove('@:index.less:blur');
            // }
            dispatch(root, '@:{dialog.hard.close}');
            root.parentNode.removeChild(root);
        });
        if (!has(extra, 'closable')) {
            extra.closable = true;
        }
        me.set(extra);
        // if (DialogZIndex == 500 &&
        //     !navigator.userAgent.includes('Firefox')) {
        //     app.classList.add('@:index.less:blur');
        // }
        DialogZIndex += 2;
        CacheList.push(me);
    },
    async render() {
        let me = this;
        //this.root.focus();
        await me.digest({
            zIndex: DialogZIndex
        });
        let scrollNode = node(`_mx_scroll_${this.id}`);
        if (scrollNode) {
            scrollNode.focus();
        }
        let data = me.get();
        let m = mark(me, '@:{render}');
        me.owner.mount(node('_mx_cnt_' + me.id), data.view, data);
        setTimeout(() => {
            if (m()) {
                me.digest({
                    removeClass: true
                });
            }
        }, 300);
    },
    '@:{notify.main.view.unload}'(e) {
        let n = node('_mx_cnt_' + this.id);
        let vf = Vframe.byNode(n);
        vf.invoke('fire', ['unload', e]);
    },
    '@:{close.anim}'() {
        let id = this.id,
            n;
        n = node('_mx_body_' + id);
        n.classList.add('@:index.less:anim-body-out');
        n = node('_mx_mask_' + id);
        n.classList.add('@:index.less:anim-mask-out');
    },
    '@:{close}<click>'() {
        dispatch(this.root, '@:{dialog.soft.close}');
    },
    '$doc<keyup>'(e) {
        if (e.code == 'Escape') { //esc
            let dlg = CacheList[CacheList.length - 1];
            if (dlg == this && dlg.get('closable')) {
                dispatch(this.root, '@:{dialog.soft.close}');
            }
        }
    }
}).static({
    '@:{dialog.show}'(view, options) {
        let id = guid('_mx_dlg_');
        document.body.insertAdjacentHTML('beforeend', '<div id="' + id + '" class="@:scoped.style:designer-root"/>');
        let n = node(id);
        let vf = view.owner.mount(n, '@:moduleId', options);
        let suspend;
        let whenClose = async () => {
            if (!n['@:{is.closing}'] &&
                !suspend) {
                let resume = () => {
                    n['@:{is.closing}'] = 1;
                    vf.invoke('@:{close.anim}');
                    detach(n, '@:{dialog.soft.close}', whenClose);
                    setTimeout(() => {
                        vf.unmount();
                    }, 200);
                };
                let e = {
                    p: 0,
                    prevent() {
                        suspend = 1;
                    },
                    resolve() {
                        e.p = 1;
                        suspend = 0;
                        resume();
                    },
                    reject() {
                        e.p = 1;
                        suspend = 0;
                    }
                };
                await vf.invoke('@:{notify.main.view.unload}', [e]);
                if (!suspend && !e.p) {
                    resume();
                }
            }
        };
        attach(n, '@:{dialog.soft.close}', whenClose);
        return n;
    },
    alert(content, enterCallback, title) {
        this.confirm(content, enterCallback, null, title, 'alert');
    },
    confirm(content, enterCallback, cancelCallback, title, view = 'confirm') {
        this.mxDialog('@:./' + view, {
            body: content,
            cancel: cancelCallback,
            enter: enterCallback,
            title: title,
            modal: true,
            width: 300
        });
    },
    mxDialog(view, options) {
        let me = this;
        let dlg;
        let closeCallback;
        let dOptions = {
            view: view
        } as DialogOptions;
        let m = mark(this, '@:{dialog}');
        use<{
            dialogOptions: DialogOptions
        }>(view, () => {
            let key = '$dlg_' + view;
            if (me[key] || !m()) return;
            me[key] = 1;
            mix(dOptions, options);
            if (!dOptions.width) dOptions.width = 500;
            dOptions.dialog = {
                close() {
                    if (dlg) {
                        dispatch(dlg, '@:{dialog.soft.close}');
                    }
                }
            };
            dlg = me['@:{dialog.show}'](me, dOptions);
            let closeWatcher = () => {
                delete me[key];
                detach(dlg, '@:{dialog.hard.close}', closeWatcher);
                if (closeCallback) {
                    closeCallback();
                }
            };
            attach(dlg, '@:{dialog.hard.close}', closeWatcher);
        });
        return {
            close() {
                if (dlg) {
                    dispatch(dlg, '@:{dialog.soft.close}');
                }
            },
            whenClose(fn) {
                closeCallback = fn;
            }
        };
    }
});