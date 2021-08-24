/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/content",["51","../58/5f/index","../5c/index","../5g/fs","./5d","./5h"],(require,exports,module)=>{
let $quick_gh_0_static_node;
let $quick_gh_3_static_node;
let $quick_gh_6_static_node;
let $quick_gh_1_static_attr={'class': 'rd-g9 rd-gM rd-gn rd-go rd-ha rd-he rd-hf rd-ik',};
let $quick_gh_2_static_attr={'class': 'rd-gy',};
let $quick_gh_4_static_attr={'class': 'rd-gr',};
let $quick_gh_5_static_attr={'class': 'rd-g9 rd-gM rd-gt rd-gu rd-ha rd-he rd-ht rd-id rd-ii',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../58/5f/index");
let index_2 = require("../5c/index");
let fs_1 = require("../5g/fs");
let history_1 = require("./5d");
let tojson_1 = require("./5h");
let padStart = (str, n, char) => {
    str += '';
    if (str.length < n) {
        str = Array(n - str.length + 1).join(char) + str;
    }
    return str;
};
let { node, State, applyStyle, View, Vframe, mark } = magix_1;
applyStyle("rd-gf",".rd-iT{height:calc(100vh - 180px)}");
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
        alertMsg(index_2('gu') + ex.message);
        return;
    }
    State.fire('go', {
        'gd': json,
        'ge': history_1['gi'],
        'gf': ''
    });
    return 1;
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	i18n,
	body,}=$dataFromView,
$vnode_2,
$vnode_1;

if($quick_gh_0_static_node){
$vnode_0=[$quick_gh_0_static_node];
}else{
$vnode_0=[$quick_gh_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gp rd-he rd-ij',})];
}
$vnode_2=[$createVNode(0,(i18n('gy')))];$vnode_1=[$createVNode('h5',$quick_gh_2_static_attr,$vnode_2)];
if($quick_gh_3_static_node){
$vnode_1.push($quick_gh_3_static_node);
}else{
$vnode_2=[$createVNode(0,'如何保存数据到数据库?')];$vnode_1.push($quick_gh_3_static_node=$createVNode('a',{'_': 'eE','class': 'rd-gA rd-gJ','href': 'https://github.com/xinglie/report-designer/issues/29','rel': 'noopener noreferrer','target': '_blank',},$vnode_2));
}
$vnode_0.push($createVNode('div',$quick_gh_1_static_attr,$vnode_1));$vnode_1=[$createVNode('textarea',{'class': 'rd-gN rd-gh rd-iT','spellcheck': 'false','id': '_rd_ta_'+$viewId,'value': (body),},0,$special_2)];$vnode_0.push($createVNode('div',$quick_gh_4_static_attr,$vnode_1));$vnode_2=[$createVNode(0,(i18n('gz')))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_gV()','class': 'rd-gS rd-gk rd-gm rd-hw','type': 'button',},$vnode_2)];$vnode_2=[$createVNode(0,(i18n('gA')))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_gU()','class': 'rd-gJ rd-gS rd-gk rd-hw','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_gh_5_static_attr,$vnode_1));
if($quick_gh_6_static_node){
$vnode_0.push($quick_gh_6_static_node);
}else{
$vnode_0.push($quick_gh_6_static_node=$createVNode('div',{'_': 'eF','class': 'rd-gs rd-he rd-ih',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        this['_gT'] = data.dialog;
    },
    render() {
        this.digest({
            body: tojson_1()
        });
    },
    '_gU<click>'() {
        this['_gT'].close();
    },
    '_gV<click>'() {
        let value = node('_rd_ta_' + this.id).value.trim();
        if (tryApplyContent(value)) {
            this['_gT'].close();
        }
    }
}).static({
    async '_gX'(target) {
        let readMark = mark(this, '_gW');
        try {
            let content = await fs_1['_gX'](target);
            tryApplyContent(content);
        }
        catch (ex) {
            if (readMark() && ex.name != 'AbortError') {
                Vframe.root().invoke('alert', [ex.message]);
            }
        }
    },
    async '_g0'() {
        let saveMark = mark(this, '_gW');
        try {
            await fs_1['_gY']();
        }
        catch (ex) {
            Vframe.root().invoke('alert', [ex.message]);
            return;
        }
        if (saveMark()) {
            index_1.show(index_2('gv'));
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
                await fs_1['_gZ'](`${index_2('gw')}-${time}.rd`, value);
                index_1.show(index_2('gx'), 3e3);
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