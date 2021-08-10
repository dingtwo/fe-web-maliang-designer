/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/content",["4e","../4l/4s/index","../4p/index","../4t/fs","./4q","./4u"],(require,exports,module)=>{
let $quick_dI_0_static_node;
let $quick_dI_3_static_node;
let $quick_dI_6_static_node;
let $quick_dI_1_static_attr={'class': 'rd-dO rd-dP rd-eB rd-eF rd-eG rd-ec rd-ez rd-fL',};
let $quick_dI_2_static_attr={'class': 'rd-dZ',};
let $quick_dI_4_static_attr={'class': 'rd-dS',};
let $quick_dI_5_static_attr={'class': 'rd-dU rd-dV rd-eB rd-eF rd-eU rd-ec rd-ez rd-fE rd-fJ',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let index_1 = require("../4l/4s/index");
let index_2 = require("../4p/index");
let fs_1 = require("../4t/fs");
let history_1 = require("./4q");
let tojson_1 = require("./4u");
let padStart = (str, n, char) => {
    str += '';
    if (str.length < n) {
        str = Array(n - str.length + 1).join(char) + str;
    }
    return str;
};
let { node, State, applyStyle, View, Vframe, mark } = magix_1;
applyStyle("rd-dG",".rd-gj{height:calc(100vh - 180px)}");
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
        alertMsg(index_2('dV') + ex.message);
        return;
    }
    State.fire('dP', {
        'dE': json,
        'dF': history_1['dJ'],
        'dG': ''
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

if($quick_dI_0_static_node){
$vnode_0=[$quick_dI_0_static_node];
}else{
$vnode_0=[$quick_dI_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-dQ rd-eF rd-fK',})];
}
$vnode_2=[$createVNode(0,(i18n('dZ')))];$vnode_1=[$createVNode('h5',$quick_dI_2_static_attr,$vnode_2)];
if($quick_dI_3_static_node){
$vnode_1.push($quick_dI_3_static_node);
}else{
$vnode_2=[$createVNode(0,'如何保存数据到数据库?')];$vnode_1.push($quick_dI_3_static_node=$createVNode('a',{'_': 'cI','class': 'rd-d1 rd-e_','href': 'https://github.com/xinglie/report-designer/issues/29','rel': 'noopener noreferrer','target': '_blank',},$vnode_2));
}
$vnode_0.push($createVNode('div',$quick_dI_1_static_attr,$vnode_1));$vnode_1=[$createVNode('textarea',{'class': 'rd-dI rd-ed rd-gj','spellcheck': 'false','id': '_rd_ta_'+$viewId,'value': (body),},0,$special_2)];$vnode_0.push($createVNode('div',$quick_dI_4_static_attr,$vnode_1));$vnode_2=[$createVNode(0,(i18n('d0')))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_el()','class': 'rd-dL rd-dN rd-eX rd-ei','type': 'button',},$vnode_2)];$vnode_2=[$createVNode(0,(i18n('d1')))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_ek()','class': 'rd-dL rd-eX rd-e_ rd-ei','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_dI_5_static_attr,$vnode_1));
if($quick_dI_6_static_node){
$vnode_0.push($quick_dI_6_static_node);
}else{
$vnode_0.push($quick_dI_6_static_node=$createVNode('div',{'_': 'cJ','class': 'rd-dT rd-eF rd-fI',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        this['_ej'] = data.dialog;
    },
    render() {
        this.digest({
            body: tojson_1()
        });
    },
    '_ek<click>'() {
        this['_ej'].close();
    },
    '_el<click>'() {
        //rd#need-register-code
        //保留if逻辑体中的代码，删除if条件及else代码即可删除相应的未授权提示
        if (DEBUG) {
            let value = node('_rd_ta_' + this.id).value.trim();
            if (tryApplyContent(value)) {
                this['_ej'].close();
            }
        }
        else {
            alertMsg('未授权版本不支持该功能');
        }
    }
}).static({
    async '_en'(target) {
        //rd#need-register-code
        //保留if逻辑体中的代码，删除if条件及else代码即可删除相应的未授权提示
        if (DEBUG) {
            let readMark = mark(this, '_em');
            try {
                let content = await fs_1['_en'](target);
                tryApplyContent(content);
            }
            catch (ex) {
                if (readMark() && ex.name != 'AbortError') {
                    Vframe.root().invoke('alert', [ex.message]);
                }
            }
        }
        else {
            alertMsg('未授权版本不支持该功能');
        }
    },
    async '_eq'() {
        let saveMark = mark(this, '_em');
        try {
            await fs_1['_eo']();
        }
        catch (ex) {
            Vframe.root().invoke('alert', [ex.message]);
            return;
        }
        if (saveMark()) {
            index_1.show(index_2('dW'));
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
                await fs_1['_ep'](`${index_2('dX')}-${time}.rd`, value);
                index_1.show(index_2('dY'), 3e3);
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