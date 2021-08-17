/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-dialog/confirm",["magix5","../../i18n/index"],(require,exports,module)=>{
let $quick_mb_0_static_node;
let $quick_mb_5_static_node;
let $quick_mb_1_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-dialog-header rd-_assets_index_less_-dialog-header-with-shadow rd-_assets_index_less_-flex rd-_assets_index_less_-position-sticky rd-_assets_index_less_-top-0 rd-_assets_index_less_-z-index-8',};
let $quick_mb_2_static_attr={'class': 'rd-_assets_index_less_-tag-h5',};
let $quick_mb_3_static_attr={'class': 'rd-_assets_index_less_-dialog-body rd-_assets_index_less_-word-break-break-all',};
let $quick_mb_4_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-bottom-0 rd-_assets_index_less_-dialog-footer rd-_assets_index_less_-dialog-footer-with-shadow rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-flex-end rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-6',};

/*
    author:https://github.com/xinglie
 */
let magix_1 = require("magix5");
let index_1 = require("../../i18n/index");
let { View, toTry, node } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	title,
	body,
	i18n,}=$dataFromView,
$vnode_2,
$vnode_1;

if($quick_mb_0_static_node){
$vnode_0=[$quick_mb_0_static_node];
}else{
$vnode_0=[$quick_mb_0_static_node=$createVNode('div',{'_': 'hS','class': 'rd-_assets_index_less_-dialog-header-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-7',})];
}
$vnode_2=[$createVNode(0,($__line=3,$__art='{{=title}}',$__ctrl='<%=title%>',(title)))];$vnode_1=[$createVNode('h5',$quick_mb_2_static_attr,$vnode_2)];$vnode_0.push($createVNode('div',$quick_mb_1_static_attr,$vnode_1));$vnode_1=[$createVNode(0,($__line=5,$__art='{{=body}}',$__ctrl='<%=body%>',(body)))];$vnode_0.push($createVNode('div',$quick_mb_3_static_attr,$vnode_1));$vnode_2=[$createVNode(0,($__line=7,$__art='{{=i18n(\'@:{lang#btn.enter~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#btn.enter~rs}\')%>',(i18n('@:{lang#btn.enter~rs}'))))];$vnode_1=[$createVNode('button',{'type': 'button','mx5-click': $viewId+'@:{enter~rs}()','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc','tabindex': 1,'id': '_mx_o_'+($__line=7,$__art='{{=$viewId}}','')+$viewId,},$vnode_2)];$vnode_2=[$createVNode(0,($__line=8,$__art='{{=i18n(\'@:{lang#btn.cancel~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#btn.cancel~rs}\')%>',(i18n('@:{lang#btn.cancel~rs}'))))];$vnode_1.push($createVNode('button',{'type': 'button','mx5-click': $viewId+'@:{cancel~rs}()','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10 rd-_assets_index_less_-tc','tabindex': 2,},$vnode_2));$vnode_0.push($createVNode('div',$quick_mb_4_static_attr,$vnode_1));
if($quick_mb_5_static_node){
$vnode_0.push($quick_mb_5_static_node);
}else{
$vnode_0.push($quick_mb_5_static_node=$createVNode('div',{'_': 'hT','class': 'rd-_assets_index_less_-dialog-footer-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-5',}));
}
 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-dialog/confirm.html'; throw msg; }  } ,
    init(extra) {
        let me = this;
        me['@:{dialog~rs}'] = extra.dialog;
        me['@:{string.body~rs}'] = extra.body;
        me['@:{string.title~rs}'] = extra.title || index_1('@:{lang#dialog.tip~rs}');
        me['@:{fn.enter.callback~rs}'] = extra.enter;
        me['@:{fn.calcel.callback~rs}'] = extra.cancel;
    },
    async render() {
        let me = this;
        await me.digest({
            body: me['@:{string.body~rs}'],
            title: me['@:{string.title~rs}']
        });
        let okBtn = node(`_mx_o_${this.id}`);
        if (okBtn) {
            okBtn.focus();
        }
    },
    '@:{enter~rs}<click>'() {
        let me = this;
        me['@:{dialog~rs}'].close();
        if (me['@:{fn.enter.callback~rs}']) {
            toTry(me['@:{fn.enter.callback~rs}']);
        }
    },
    '@:{cancel~rs}<click>'() {
        let me = this;
        me['@:{dialog~rs}'].close();
        if (me['@:{fn.calcel.callback~rs}']) {
            toTry(me['@:{fn.calcel.callback~rs}']);
        }
    }
});

});