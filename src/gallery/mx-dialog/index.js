/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-dialog/index",["magix5"],(require,exports,module)=>{
let $quick_bv_static_text;
let $quick_cy_0_static_node;

/*
    author:https://github.com/xinglie
 */
let magix_1 = require("magix5");
let { View, Vframe, applyStyle, node, mark, dispatch, has, guid, use, mix, attach, detach } = magix_1;
applyStyle("rd-_gallery_mx-dialog_index_less_","\n.rd-_gallery_mx-dialog_index_less_-dialog-content {\nborder-radius:2px;\nborder:1px solid #e6e6e6;\nbackground-color:#fff;\nmargin:25px 0;\nmin-height:60px;\n}\n.rd-_gallery_mx-dialog_index_less_-dialog-close {\nopacity:0.2;\ntop:10px;\nright:10px;\n}\n.rd-_gallery_mx-dialog_index_less_-dialog-close:hover,\n.rd-_gallery_mx-dialog_index_less_-dialog-close:focus {\nopacity:0.5;\n}\n.rd-_gallery_mx-dialog_index_less_-dialog-center {\nmargin:auto;\n}\n.rd-_gallery_mx-dialog_index_less_-dialog-close-sticky {\nfloat:right;\nmargin:35px 10px 0 -28px;\n}\n.rd-_gallery_mx-dialog_index_less_-dialog-backdrop {\nposition:fixed;\nbackground-color:#000;\nopacity:0.4;\n}\n.rd-_gallery_mx-dialog_index_less_-anim-mask {\n-webkit-animation:rd-_gallery_mx-dialog_index_less_-fadein 0.3s;\nanimation:rd-_gallery_mx-dialog_index_less_-fadein 0.3s;\n-webkit-animation-fill-mode:forwards;\nanimation-fill-mode:forwards;\n}\n.rd-_gallery_mx-dialog_index_less_-loading-ext {\npadding:80px 0;\n}\n@-webkit-keyframes rd-_gallery_mx-dialog_index_less_-fadein {\n  from {\nopacity:0;\n  }\n  to {\nopacity:0.4;\n  }\n}\n@keyframes rd-_gallery_mx-dialog_index_less_-fadein {\n  from {\nopacity:0;\n  }\n  to {\nopacity:0.4;\n  }\n}\n.rd-_gallery_mx-dialog_index_less_-anim-mask-out {\n-webkit-animation:rd-_gallery_mx-dialog_index_less_-fadeout 0.2s;\nanimation:rd-_gallery_mx-dialog_index_less_-fadeout 0.2s;\n-webkit-animation-fill-mode:forwards;\nanimation-fill-mode:forwards;\n}\n@-webkit-keyframes rd-_gallery_mx-dialog_index_less_-fadeout {\n  from {\nopacity:0.4;\n  }\n  to {\nopacity:0;\n  }\n}\n@keyframes rd-_gallery_mx-dialog_index_less_-fadeout {\n  from {\nopacity:0.4;\n  }\n  to {\nopacity:0;\n  }\n}\n.rd-_gallery_mx-dialog_index_less_-scroll-cnt {\n-ms-scroll-chaining:none;\noverscroll-behavior:contain;\nposition:fixed;\n}\n.rd-_gallery_mx-dialog_index_less_-anim-body {\n-webkit-animation:rd-_gallery_mx-dialog_index_less_-move 0.3s;\nanimation:rd-_gallery_mx-dialog_index_less_-move 0.3s;\n-webkit-animation-fill-mode:forwards;\nanimation-fill-mode:forwards;\n}\n@-webkit-keyframes rd-_gallery_mx-dialog_index_less_-move {\n  from {\ntransform:translateY(80px);\nopacity:0;\n  }\n  to {\ntransform:translateY(0);\nopacity:1;\n  }\n}\n@keyframes rd-_gallery_mx-dialog_index_less_-move {\n  from {\ntransform:translateY(80px);\nopacity:0;\n  }\n  to {\ntransform:translateY(0);\nopacity:1;\n  }\n}\n.rd-_gallery_mx-dialog_index_less_-anim-body-out {\n-webkit-animation:rd-_gallery_mx-dialog_index_less_-moveup 0.2s;\nanimation:rd-_gallery_mx-dialog_index_less_-moveup 0.2s;\n-webkit-animation-fill-mode:forwards;\nanimation-fill-mode:forwards;\n}\n@-webkit-keyframes rd-_gallery_mx-dialog_index_less_-moveup {\n  from {\ntransform:translateY(0);\nopacity:1;\n  }\n  to {\ntransform:translateY(-80px);\nopacity:0;\n  }\n}\n@keyframes rd-_gallery_mx-dialog_index_less_-moveup {\n  from {\ntransform:translateY(0);\nopacity:1;\n  }\n  to {\ntransform:translateY(-80px);\nopacity:0;\n  }\n}\n");
;
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
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	removeClass,
	zIndex,
	width,
	closable,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_4,
$vnode_2,
$vnode_1;
;$$_class='rd-_gallery_mx-dialog_index_less_-dialog-backdrop rd-_assets_index_less_-full-fill'+($__line=1,$__art='{{if !removeClass}}','');$__ctrl='<%if(!removeClass){%>';if(!removeClass){;$$_class+=' rd-_gallery_mx-dialog_index_less_-anim-mask'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'style': 'z-index:'+($__line=1,$__art='{{=zIndex-1}}',$__ctrl='<%=zIndex-1%>',(zIndex-1)),'id': '_mx_mask_'+($__line=1,$__art='{{=$viewId}}','')+$viewId,'class': $$_class,})];$vnode_2=[];$__line=4;$__art="{{if closable}}";$__ctrl="if(closable){";
if(closable){
$vnode_3=[$quick_bv_static_text||($quick_bv_static_text=$createVNode(0,''))];$vnode_2.push($createVNode('span',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-1 rd-_gallery_mx-dialog_index_less_-dialog-close rd-_gallery_mx-dialog_index_less_-dialog-close-sticky','mx5-click': $viewId+'@:{close~rs}()',},$vnode_3));
}
if($quick_cy_0_static_node){
$vnode_3=[$quick_cy_0_static_node];
}else{
$vnode_4=[$createVNode(0,'<span class="rd-_assets_index_less_-loading-anim"></span>',1)];$vnode_3=[$quick_cy_0_static_node=$createVNode('div',{'_': 'ar','class': 'rd-_assets_index_less_-loading rd-_assets_index_less_-tc rd-_gallery_mx-dialog_index_less_-loading-ext',},$vnode_4)];
}
$vnode_2.push($createVNode('div',{'class': 'rd-_assets_index_less_-contain-paint rd-_assets_index_less_-pr rd-_gallery_mx-dialog_index_less_-dialog-content','id': '_mx_cnt_'+($__line=7,$__art='{{=$viewId}}','')+$viewId,},$vnode_3));;$$_class='rd-_gallery_mx-dialog_index_less_-dialog-center'+($__line=3,$__art='{{if !removeClass}}','');$__ctrl='<%if(!removeClass){%>';if(!removeClass){;$$_class+=' rd-_gallery_mx-dialog_index_less_-anim-body'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('div',{'id': '_mx_body_'+($__line=3,$__art='{{=$viewId}}','')+$viewId,'style': 'width:'+($__line=3,$__art='{{=width}}',$__ctrl='<%=width%>',(width))+'px','class': $$_class,},$vnode_2)];$vnode_0.push($createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-full-fill rd-_assets_index_less_-hp100 rd-_assets_index_less_-outline-none rd-_assets_index_less_-overflow-auto rd-_assets_index_less_-wp100 rd-_gallery_mx-dialog_index_less_-scroll-cnt','style': 'z-index:'+($__line=2,$__art='{{=zIndex}}',$__ctrl='<%=zIndex%>',(zIndex)),'tabindex': 0,'id': '_mx_scroll_'+($__line=2,$__art='{{=$viewId}}','')+$viewId,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-dialog/index.html'; throw msg; }  } ,
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
            dispatch(root, '@:{dialog.hard.close~rs}');
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
        let m = mark(me, '@:{render~rs}');
        me.owner.mount(node('_mx_cnt_' + me.id), data.view, data);
        setTimeout(() => {
            if (m()) {
                me.digest({
                    removeClass: true
                });
            }
        }, 300);
    },
    '@:{notify.main.view.unload~rs}'(e) {
        let n = node('_mx_cnt_' + this.id);
        let vf = Vframe.byNode(n);
        vf.invoke('fire', ['unload', e]);
    },
    '@:{close.anim~rs}'() {
        let id = this.id, n;
        n = node('_mx_body_' + id);
        n.classList.add('rd-_gallery_mx-dialog_index_less_-anim-body-out');
        n = node('_mx_mask_' + id);
        n.classList.add('rd-_gallery_mx-dialog_index_less_-anim-mask-out');
    },
    '@:{close~rs}<click>'() {
        dispatch(this.root, '@:{dialog.soft.close~rs}');
    },
    '$doc<keyup>'(e) {
        if (e.code == 'Escape') { //esc
            let dlg = CacheList[CacheList.length - 1];
            if (dlg == this && dlg.get('closable')) {
                dispatch(this.root, '@:{dialog.soft.close~rs}');
            }
        }
    }
}).static({
    '@:{dialog.show~rs}'(view, options) {
        let id = guid('_mx_dlg_');
        document.body.insertAdjacentHTML('beforeend', '<div id="' + id + '" class="rd-_assets_index_less_-designer-root"/>');
        let n = node(id);
        let vf = view.owner.mount(n, 'gallery/mx-dialog/index', options);
        let suspend;
        let whenClose = async () => {
            if (!n['@:{is.closing~rs}'] &&
                !suspend) {
                let resume = () => {
                    n['@:{is.closing~rs}'] = 1;
                    vf.invoke('@:{close.anim~rs}');
                    detach(n, '@:{dialog.soft.close~rs}', whenClose);
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
                await vf.invoke('@:{notify.main.view.unload~rs}', [e]);
                if (!suspend && !e.p) {
                    resume();
                }
            }
        };
        attach(n, '@:{dialog.soft.close~rs}', whenClose);
        return n;
    },
    alert(content, enterCallback, title) {
        this.confirm(content, enterCallback, null, title, 'alert');
    },
    confirm(content, enterCallback, cancelCallback, title, view = 'confirm') {
        this.mxDialog("gallery/mx-dialog/" + view, {
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
        };
        let m = mark(this, '@:{dialog~rs}');
        use(view, () => {
            let key = '$dlg_' + view;
            if (me[key] || !m())
                return;
            me[key] = 1;
            mix(dOptions, options);
            if (!dOptions.width)
                dOptions.width = 500;
            dOptions.dialog = {
                close() {
                    if (dlg) {
                        dispatch(dlg, '@:{dialog.soft.close~rs}');
                    }
                }
            };
            dlg = me['@:{dialog.show~rs}'](me, dOptions);
            let closeWatcher = () => {
                delete me[key];
                detach(dlg, '@:{dialog.hard.close~rs}', closeWatcher);
                if (closeCallback) {
                    closeCallback();
                }
            };
            attach(dlg, '@:{dialog.hard.close~rs}', closeWatcher);
        });
        return {
            close() {
                if (dlg) {
                    dispatch(dlg, '@:{dialog.soft.close~rs}');
                }
            },
            whenClose(fn) {
                closeCallback = fn;
            }
        };
    }
});

});