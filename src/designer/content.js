/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/content",["magix5","../gallery/mx-toast/index","../i18n/index","../provider/fs","./history","./tojson"],(require,exports,module)=>{
let $quick_e7_0_static_node;
let $quick_e7_3_static_node;
let $quick_e7_6_static_node;
let $quick_e7_1_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-dialog-header rd-_assets_index_less_-dialog-header-with-shadow rd-_assets_index_less_-flex rd-_assets_index_less_-position-sticky rd-_assets_index_less_-top-0 rd-_assets_index_less_-z-index-8',};
let $quick_e7_2_static_attr={'class': 'rd-_assets_index_less_-tag-h5',};
let $quick_e7_4_static_attr={'class': 'rd-_assets_index_less_-dialog-body',};
let $quick_e7_5_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-bottom-0 rd-_assets_index_less_-dialog-footer rd-_assets_index_less_-dialog-footer-with-shadow rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-flex-end rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-6',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../gallery/mx-toast/index");
let index_2 = require("../i18n/index");
let fs_1 = require("../provider/fs");
let history_1 = require("./history");
let tojson_1 = require("./tojson");
let padStart = (str, n, char) => {
    str += '';
    if (str.length < n) {
        str = Array(n - str.length + 1).join(char) + str;
    }
    return str;
};
let { node, State, applyStyle, View, Vframe, mark } = magix_1;
applyStyle("rd-_designer_content_less_","\n.rd-_designer_content_less_-content-area {\nheight:calc(100vh - 180px);\n}\n");
let prefix = atob('LyohUmVwb3J0IERlc2lnbmVyIEZpbGUKRnJvbTpodHRwczovL2dpdGh1Yi5jb20veGluZ2xpZS9yZXBvcnQtZGVzaWduZXIKQXV0aG9yOmtvb2JveV9saUAxNjMuY29tKi8K');
let alertMsg = msg => {
    Vframe.root().invoke('alert', [msg]);
};
let tryApplyContent = (content) => {
    let json;
    try {
        content = content.trim();
        if (content.startsWith(prefix)) {
            content = decodeURIComponent(atob(content.replace(prefix, '')));
        }
        json = JSON.parse(content);
    }
    catch (ex) {
        alertMsg(index_2('@:{lang#read.failure~rs}') + ex.message);
        return;
    }
    State.fire('@:{event#example.change~rs}', {
        '@:{excample.change.event#stage~rs}': json,
        '@:{excample.change.event#type~rs}': history_1['@:{history#example.from.custom~rs}'],
        '@:{excample.change.event#title~rs}': ''
    });
    return 1;
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	i18n,
	body,}=$dataFromView,
$vnode_2,
$vnode_1;

if($quick_e7_0_static_node){
$vnode_0=[$quick_e7_0_static_node];
}else{
$vnode_0=[$quick_e7_0_static_node=$createVNode('div',{'_': 'dM','class': 'rd-_assets_index_less_-dialog-header-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-7',})];
}
$vnode_2=[$createVNode(0,($__line=3,$__art='{{=i18n(\'@:{lang#save.content.title~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#save.content.title~rs}\')%>',(i18n('@:{lang#save.content.title~rs}'))))];$vnode_1=[$createVNode('h5',$quick_e7_2_static_attr,$vnode_2)];
if($quick_e7_3_static_node){
$vnode_1.push($quick_e7_3_static_node);
}else{
$vnode_2=[$createVNode(0,'如何保存数据到数据库?')];$vnode_1.push($quick_e7_3_static_node=$createVNode('a',{'_': 'dN','class': 'rd-_assets_index_less_-ml10 rd-_assets_index_less_-tag-a','href': 'https://github.com/xinglie/report-designer/issues/29','rel': 'noopener noreferrer','target': '_blank',},$vnode_2));
}
$vnode_0.push($createVNode('div',$quick_e7_1_static_attr,$vnode_1));$vnode_1=[$createVNode('textarea',{'class': 'rd-_assets_index_less_-textarea rd-_assets_index_less_-wp100 rd-_designer_content_less_-content-area','spellcheck': 'false','id': '_rd_ta_'+($__line=7,$__art='{{=$viewId}}','')+$viewId,'value': ($__line=7,$__art='{{=body}}',$__ctrl='<%=body%>',(body)),},0,$special_2)];$vnode_0.push($createVNode('div',$quick_e7_4_static_attr,$vnode_1));$vnode_2=[$createVNode(0,($__line=10,$__art='{{=i18n(\'@:{lang#btn.apply~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#btn.apply~rs}\')%>',(i18n('@:{lang#btn.apply~rs}'))))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'@:{apply~rs}()','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-btn-brand rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-tc','type': 'button',},$vnode_2)];$vnode_2=[$createVNode(0,($__line=11,$__art='{{=i18n(\'@:{lang#btn.cancel~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#btn.cancel~rs}\')%>',(i18n('@:{lang#btn.cancel~rs}'))))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'@:{cancel~rs}()','class': 'rd-_assets_index_less_-btn rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-ml10 rd-_assets_index_less_-tc','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_e7_5_static_attr,$vnode_1));
if($quick_e7_6_static_node){
$vnode_0.push($quick_e7_6_static_node);
}else{
$vnode_0.push($quick_e7_6_static_node=$createVNode('div',{'_': 'dO','class': 'rd-_assets_index_less_-dialog-footer-shadow rd-_assets_index_less_-position-sticky rd-_assets_index_less_-z-index-5',}));
}
 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/content.html'; throw msg; }  } ,
    init(data) {
        this['@:{dialog~rs}'] = data.dialog;
    },
    render() {
        this.digest({
            body: tojson_1()
        });
    },
    '@:{cancel~rs}<click>'() {
        this['@:{dialog~rs}'].close();
    },
    '@:{apply~rs}<click>'() {
        let value = node('_rd_ta_' + this.id).value.trim();
        if (tryApplyContent(value)) {
            this['@:{dialog~rs}'].close();
        }
    }
}).static({
    async '@:{read.file~rs}'(target) {
        let readMark = mark(this, '@:{save.async~rs}');
        try {
            let content = await fs_1['@:{read.file~rs}'](target);
            tryApplyContent(content);
        }
        catch (ex) {
            if (readMark() && ex.name != 'AbortError') {
                Vframe.root().invoke('alert', [ex.message]);
            }
        }
    },
    async '@:{save~rs}'() {
        let saveMark = mark(this, '@:{save.async~rs}');
        try {
            await fs_1['@:{prepare~rs}']();
        }
        catch (ex) {
            Vframe.root().invoke('alert', [ex.message]);
            return;
        }
        if (saveMark()) {
            index_1.show(index_2('@:{lang#export.file.processing~rs}'));
            let now = new Date();
            let time = [
                now.getFullYear(),
                padStart(now.getMonth() + 1, 2, '0'),
                padStart(now.getDate(), 2, '0'),
                padStart(now.getHours(), 2, '0'),
                padStart(now.getMinutes(), 2, '0'),
                padStart(now.getSeconds(), 2, '0')
            ].join('');
            let value = tojson_1();
            try {
                value = prefix + btoa(encodeURIComponent(value));
                await fs_1['@:{save.file~rs}'](`${index_2('@:{lang#site.name~rs}')}-${time}.rd`, value);
                index_1.show(index_2('@:{lang#export.success~rs}'), 3e3);
            }
            catch (ex) {
                index_1.hide();
                if (saveMark() && ex.name != 'AbortError') {
                    Vframe.root().invoke('alert', [ex.message]);
                }
            }
        }
    }
});

});