/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/5n/index",["51"],(require,exports,module)=>{
let $quick_gY_static_text;
let $quick_h1_0_static_node;

/*
    author:https://github.com/xinglie
 */
let magix_1 = require("51");
let { View, Vframe, applyStyle, node, mark, dispatch, has, guid, use, mix, attach, detach } = magix_1;
applyStyle("rd-gw",".rd-kM{background-color:#fff;border:1px solid #e6e6e6;border-radius:2px;margin:25px 0;min-height:60px}.rd-kN{opacity:.2;right:10px;top:10px}.rd-kN:focus,.rd-kN:hover{opacity:.5}.rd-kO{margin:auto}.rd-kP{float:right;margin:35px 10px 0 -28px}.rd-kQ{background-color:#000;opacity:.4;position:fixed}.rd-kR{-webkit-animation:rd-ge .3s;animation:rd-ge .3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.rd-kS{padding:80px 0}@-webkit-keyframes rd-ge{0%{opacity:0}to{opacity:.4}}@keyframes rd-ge{0%{opacity:0}to{opacity:.4}}.rd-kT{-webkit-animation:rd-gf .2s;animation:rd-gf .2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes rd-gf{0%{opacity:.4}to{opacity:0}}@keyframes rd-gf{0%{opacity:.4}to{opacity:0}}.rd-kU{-ms-scroll-chaining:none;overscroll-behavior:contain;position:fixed}.rd-kV{-webkit-animation:rd-gg .3s;animation:rd-gg .3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes rd-gg{0%{opacity:0;transform:translateY(80px)}to{opacity:1;transform:translateY(0)}}@keyframes rd-gg{0%{opacity:0;transform:translateY(80px)}to{opacity:1;transform:translateY(0)}}.rd-kW{-webkit-animation:rd-gh .2s;animation:rd-gh .2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes rd-gh{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-80px)}}@keyframes rd-gh{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-80px)}}");
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
;$$_class='rd-kQ rd-hK';if(!removeClass){;$$_class+=' rd-kR';};$vnode_0=[$createVNode('div',{'style': 'z-index:'+(zIndex-1),'id': '_mx_mask_'+$viewId,'class': $$_class,})];$vnode_2=[];
if(closable){
$vnode_3=[$quick_gY_static_text||($quick_gY_static_text=$createVNode(0,''))];$vnode_2.push($createVNode('span',{'class': 'rd-ge rd-he rd-hw rd-ig rd-kN rd-kP','mx5-click': $viewId+'_g3()',},$vnode_3));
}
if($quick_h1_0_static_node){
$vnode_3=[$quick_h1_0_static_node];
}else{
$vnode_4=[$createVNode(0,'<span class="rd-gw"></span>',1)];$vnode_3=[$quick_h1_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gS rd-gv rd-kS',},$vnode_4)];
}
$vnode_2.push($createVNode('div',{'class': 'rd-gW rd-iq rd-kM','id': '_mx_cnt_'+$viewId,},$vnode_3));;$$_class='rd-kO';if(!removeClass){;$$_class+=' rd-kV';};$vnode_1=[$createVNode('div',{'id': '_mx_body_'+$viewId,'style': 'width:'+(width)+'px','class': $$_class,},$vnode_2)];$vnode_0.push($createVNode('div',{'class': 'rd-g9 rd-gN rd-gO rd-gj rd-h2 rd-hK rd-kU','style': 'z-index:'+(zIndex),'tabindex': 0,'id': '_mx_scroll_'+$viewId,},$vnode_1)); 

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
            dispatch(root, '_l7');
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
        let m = mark(me, '_gt');
        me.owner.mount(node('_mx_cnt_' + me.id), data.view, data);
        setTimeout(() => {
            if (m()) {
                me.digest({
                    removeClass: true
                });
            }
        }, 300);
    },
    '_l8'(e) {
        let n = node('_mx_cnt_' + this.id);
        let vf = Vframe.byNode(n);
        vf.invoke('fire', ['unload', e]);
    },
    '_l9'() {
        let id = this.id, n;
        n = node('_mx_body_' + id);
        n.classList.add('rd-kW');
        n = node('_mx_mask_' + id);
        n.classList.add('rd-kT');
    },
    '_g3<click>'() {
        dispatch(this.root, '_m_');
    },
    '$doc<keyup>'(e) {
        if (e.code == 'Escape') { //esc
            let dlg = CacheList[CacheList.length - 1];
            if (dlg == this && dlg.get('closable')) {
                dispatch(this.root, '_m_');
            }
        }
    }
}).static({
    '_mb'(view, options) {
        let id = guid('_mx_dlg_');
        document.body.insertAdjacentHTML('beforeend', '<div id="' + id + '" class="rd-gd"/>');
        let n = node(id);
        let vf = view.owner.mount(n, '58/5n/index', options);
        let suspend;
        let whenClose = async () => {
            if (!n['_ma'] &&
                !suspend) {
                let resume = () => {
                    n['_ma'] = 1;
                    vf.invoke('_l9');
                    detach(n, '_m_', whenClose);
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
                await vf.invoke('_l8', [e]);
                if (!suspend && !e.p) {
                    resume();
                }
            }
        };
        attach(n, '_m_', whenClose);
        return n;
    },
    alert(content, enterCallback, title) {
        this.confirm(content, enterCallback, null, title, 'alert');
    },
    confirm(content, enterCallback, cancelCallback, title, view = 'confirm') {
        this.mxDialog("58/5n/" + view, {
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
        let m = mark(this, '_gT');
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
                        dispatch(dlg, '_m_');
                    }
                }
            };
            dlg = me['_mb'](me, dOptions);
            let closeWatcher = () => {
                delete me[key];
                detach(dlg, '_l7', closeWatcher);
                if (closeCallback) {
                    closeCallback();
                }
            };
            attach(dlg, '_l7', closeWatcher);
        });
        return {
            close() {
                if (dlg) {
                    dispatch(dlg, '_m_');
                }
            },
            whenClose(fn) {
                closeCallback = fn;
            }
        };
    }
});

});