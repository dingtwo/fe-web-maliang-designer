/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/54/index",["4e"],(require,exports,module)=>{
let $quick_eo_static_text;
let $quick_fr_0_static_node;

/*
    author:https://github.com/xinglie
 */
let magix_1 = require("4e");
let { View, Vframe, applyStyle, node, mark, dispatch, has, guid, use, mix, attach, detach } = magix_1;
applyStyle("rd-dX",".rd-ic{background-color:#fff;border:1px solid #e6e6e6;border-radius:2px;margin:25px 0;min-height:60px}.rd-id{opacity:.2;right:10px;top:10px}.rd-id:focus,.rd-id:hover{opacity:.5}.rd-ie{margin:auto}.rd-if{float:right;margin:35px 10px 0 -28px}.rd-ig{background-color:#000;opacity:.4;position:fixed}.rd-ih{-webkit-animation:rd-dF .3s;animation:rd-dF .3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.rd-ii{padding:80px 0}@-webkit-keyframes rd-dF{0%{opacity:0}to{opacity:.4}}@keyframes rd-dF{0%{opacity:0}to{opacity:.4}}.rd-ij{-webkit-animation:rd-dG .2s;animation:rd-dG .2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes rd-dG{0%{opacity:.4}to{opacity:0}}@keyframes rd-dG{0%{opacity:.4}to{opacity:0}}.rd-ik{-ms-scroll-chaining:none;overscroll-behavior:contain;position:fixed}.rd-il{-webkit-animation:rd-dH .3s;animation:rd-dH .3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes rd-dH{0%{opacity:0;transform:translateY(80px)}to{opacity:1;transform:translateY(0)}}@keyframes rd-dH{0%{opacity:0;transform:translateY(80px)}to{opacity:1;transform:translateY(0)}}.rd-im{-webkit-animation:rd-dI .2s;animation:rd-dI .2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes rd-dI{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-80px)}}@keyframes rd-dI{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-80px)}}");
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
let $temp_var,$vnode_0,
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
;$$_class='rd-ig rd-fa';if(!removeClass){;$$_class+=' rd-ih';};$vnode_0=[$createVNode('div',{'style': 'z-index:'+(zIndex-1),'id': '_mx_mask_'+$viewId,'class': $$_class,})];$vnode_2=[];
if(closable){
$vnode_3=[$quick_eo_static_text||($quick_eo_static_text=$createVNode(0,''))];$vnode_2.push($createVNode('span',{'class': 'rd-dF rd-eF rd-eX rd-fH rd-id rd-if','mx5-click': $viewId+'_et()',},$vnode_3));
}
if($quick_fr_0_static_node){
$vnode_3=[$quick_fr_0_static_node];
}else{
$vnode_4=[$createVNode(0,'<span class="rd-dX"></span>',1)];$vnode_3=[$quick_fr_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-dW rd-ei rd-ii',},$vnode_4)];
}
$vnode_2.push($createVNode('div',{'class': 'rd-em rd-fR rd-ic','id': '_mx_cnt_'+$viewId,},$vnode_3));;$$_class='rd-ie';if(!removeClass){;$$_class+=' rd-il';};$vnode_1=[$createVNode('div',{'id': '_mx_body_'+$viewId,'style': 'width:'+(width)+'px','class': $$_class,},$vnode_2)];$vnode_0.push($createVNode('div',{'class': 'rd-dK rd-ed rd-ee rd-ez rd-fa rd-fs rd-ik','style': 'z-index:'+(zIndex),'tabindex': 0,'id': '_mx_scroll_'+$viewId,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
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
            dispatch(root, '_ju');
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
        let m = mark(me, '_dU');
        me.owner.mount(node('_mx_cnt_' + me.id), data.view, data);
        setTimeout(() => {
            if (m()) {
                me.digest({
                    removeClass: true
                });
            }
        }, 300);
    },
    '_jv'(e) {
        let n = node('_mx_cnt_' + this.id);
        let vf = Vframe.byNode(n);
        vf.invoke('fire', ['unload', e]);
    },
    '_jw'() {
        let id = this.id, n;
        n = node('_mx_body_' + id);
        n.classList.add('rd-im');
        n = node('_mx_mask_' + id);
        n.classList.add('rd-ij');
    },
    '_et<click>'() {
        dispatch(this.root, '_jx');
    },
    '$doc<keyup>'(e) {
        if (e.code == 'Escape') { //esc
            let dlg = CacheList[CacheList.length - 1];
            if (dlg == this && dlg.get('closable')) {
                dispatch(this.root, '_jx');
            }
        }
    }
}).static({
    '_jz'(view, options) {
        let id = guid('_mx_dlg_');
        document.body.insertAdjacentHTML('beforeend', '<div id="' + id + '" class="rd-dE"/>');
        let n = node(id);
        let vf = view.owner.mount(n, '4l/54/index', options);
        let suspend;
        let whenClose = async () => {
            if (!n['_jy'] &&
                !suspend) {
                let resume = () => {
                    n['_jy'] = 1;
                    vf.invoke('_jw');
                    detach(n, '_jx', whenClose);
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
                await vf.invoke('_jv', [e]);
                if (!suspend && !e.p) {
                    resume();
                }
            }
        };
        attach(n, '_jx', whenClose);
        return n;
    },
    alert(content, enterCallback, title) {
        this.confirm(content, enterCallback, null, title, 'alert');
    },
    confirm(content, enterCallback, cancelCallback, title, view = 'confirm') {
        this.mxDialog("4l/54/" + view, {
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
        let m = mark(this, '_ej');
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
                        dispatch(dlg, '_jx');
                    }
                }
            };
            dlg = me['_jz'](me, dOptions);
            let closeWatcher = () => {
                delete me[key];
                detach(dlg, '_ju', closeWatcher);
                if (closeCallback) {
                    closeCallback();
                }
            };
            attach(dlg, '_ju', closeWatcher);
        });
        return {
            close() {
                if (dlg) {
                    dispatch(dlg, '_jx');
                }
            },
            whenClose(fn) {
                closeCallback = fn;
            }
        };
    }
});

});