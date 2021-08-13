/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-format/code",["magix5","../../provider/format","./share","../mx-codemirror/index"],(require,exports,module)=>{
require("../mx-codemirror/index");
let $quick_gY_0_static_node;
let $quick_gY_1_static_node;
let $quick_fD_static_text;
let $quick_fZ_static_text;
let $quick_f0_static_text;
let $quick_gY_5_static_node;
let $quick_gY_3_static_attr={'class': 'rd-_assets_index_less_-dialog-body rd-_assets_index_less_-min-height-500 rd-_assets_index_less_-unselectable',};
let $quick_gY_4_static_attr={'class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-bottom-0 rd-_assets_index_less_-dialog-footer rd-_assets_index_less_-dialog-footer-with-shadow rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-flex-end rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-6',};


require("./share");
let magix_1 = require("magix5");
let format_1 = require("../../provider/format");
let defaultFx = `/*
    item是完整的单条数据对象
    page是当前页面使用的数据列表
    all是所有数据列表
    可以把下面的console前的注释去掉查看相应的数据
    不同的场景下传递参数不一样，page和all在某些场景下不存在
*/
function(item,page,all){
    //console.log(item,page,all);
    return item;
}`;
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	parts,}=$dataFromView,
$vnode_1,
$vnode_2;

if($quick_gY_0_static_node){
$vnode_0=[$quick_gY_0_static_node];
}else{
$vnode_0=[$quick_gY_0_static_node=$createVNode('div',{'_': 'dM','class': 'rd-_assets_index_less_-dialog-header-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-7',})];
}

if($quick_gY_1_static_node){
$vnode_0.push($quick_gY_1_static_node);
}else{
$vnode_1=[$createVNode(0,'<h5 class="rd-_assets_index_less_-tag-h5">自定义函数</h5>',1)];$vnode_0.push($quick_gY_1_static_node=$createVNode('div',{'_': 'dN','class': 'rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-dialog-header rd-_assets_index_less_-dialog-header-with-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-top-0 rd-_assets_index_less_-z-index-8',},$vnode_1));
}
$vnode_2=[$quick_fD_static_text||($quick_fD_static_text=$createVNode(0,'loading...'))];$vnode_1=[$createVNode('div',{'mx5-owner': $viewId,'$': 'parts','class': 'rd-_gallery_mx-format_share_less_-codemirror','style': 'width:848px;height:480px','mx5-cmchange': $viewId+'@:{update.format~rs}()','mx5-view': 'gallery/mx-codemirror/index?value='+($__line=6,$__art='{{#parts[1]}}',$__ctrl='<%#parts[1],\'auto_key_parts.parts[1]\'%>',$keyOf($refData,parts[1],'auto_key_parts.parts[1]')),},$vnode_2)];$vnode_0.push($createVNode('div',$quick_gY_3_static_attr,$vnode_1));$vnode_2=[$quick_fZ_static_text||($quick_fZ_static_text=$createVNode(0,'应用'))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'@:{apply~rs}()','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc','type': 'button',},$vnode_2)];$vnode_2=[$quick_f0_static_text||($quick_f0_static_text=$createVNode(0,'取消'))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'@:{close~rs}()','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10 rd-_assets_index_less_-tc','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_gY_4_static_attr,$vnode_1));
if($quick_gY_5_static_node){
$vnode_0.push($quick_gY_5_static_node);
}else{
$vnode_0.push($quick_gY_5_static_node=$createVNode('div',{'_': 'dO','class': 'rd-_assets_index_less_-dialog-footer-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-5',}));
}
 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:gallery/mx-format/code.html'; throw msg; }  } ,
    init(data) {
        let me = this;
        me['@:{format~rs}'] = data.format;
        me['@:{default.fx~rs}'] = data.defaultFx;
        me['@:{dialog~rs}'] = data.dialog;
        me['@:{done.callback~rs}'] = data.done;
    },
    render() {
        let parts = format_1["@:{get.parts~rs}"](this['@:{format~rs}']);
        if (!parts[1]) {
            parts[1] = this['@:{default.fx~rs}'] || defaultFx;
        }
        console.log(parts);
        this.digest({
            parts
        });
    },
    '@:{update.format~rs}<cmchange>'(e) {
        let parts = this.get('parts');
        parts[1] = e.value.trim();
    },
    '@:{apply~rs}<click>'() {
        this['@:{dialog~rs}'].close();
        let parts = this.get('parts');
        this['@:{done.callback~rs}']('custom:' + parts[1]);
    },
    '@:{close~rs}<click>'() {
        this['@:{dialog~rs}'].close();
    }
});

});