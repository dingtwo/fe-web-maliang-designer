/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/content",["5c","../5j/5q/index","../5n/index","../5r/fs","./5o","./5s"],(require,exports,module)=>{
let $quick_l6_0_static_node;
let $quick_l6_3_static_node;
let $quick_l6_6_static_node;
let $quick_l6_1_static_attr={'class': 'rd-m3 rd-m4 rd-mA rd-mX rd-mZ rd-mb rd-mc rd-n9',};
let $quick_l6_2_static_attr={'class': 'rd-mm',};
let $quick_l6_4_static_attr={'class': 'rd-mf',};
let $quick_l6_5_static_attr={'class': 'rd-m3 rd-mA rd-mX rd-mZ rd-mh rd-mi rd-n2 rd-n7 rd-nh',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let index_1 = require("../5j/5q/index");
let index_2 = require("../5n/index");
let fs_1 = require("../5r/fs");
let history_1 = require("./5o");
let tojson_1 = require("./5s");
let padStart = (str, n, char) => {
    str += '';
    if (str.length < n) {
        str = Array(n - str.length + 1).join(char) + str;
    }
    return str;
};
let { node, State, applyStyle, View, Vframe, mark } = magix_1;
applyStyle("rd-l4",".rd-oH{height:calc(100vh - 180px)}");
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
        alertMsg(index_2('mi') + ex.message);
        return;
    }
    State.fire('mc', {
        'l2': json,
        'l3': history_1['l7'],
        'l4': ''
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

if($quick_l6_0_static_node){
$vnode_0=[$quick_l6_0_static_node];
}else{
$vnode_0=[$quick_l6_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-m3 rd-md rd-n8',})];
}
$vnode_2=[$createVNode(0,(i18n('mm')))];$vnode_1=[$createVNode('h5',$quick_l6_2_static_attr,$vnode_2)];
if($quick_l6_3_static_node){
$vnode_1.push($quick_l6_3_static_node);
}else{
$vnode_2=[$createVNode(0,'如何保存数据到数据库?')];$vnode_1.push($quick_l6_3_static_node=$createVNode('a',{'_': 'i@','class': 'rd-mo rd-mx','href': 'https://github.com/xinglie/report-designer/issues/29','rel': 'noopener noreferrer','target': '_blank',},$vnode_2));
}
$vnode_0.push($createVNode('div',$quick_l6_1_static_attr,$vnode_1));$vnode_1=[$createVNode('textarea',{'class': 'rd-l6 rd-mB rd-oH','spellcheck': 'false','id': '_rd_ta_'+$viewId,'value': (body),},0,$special_2)];$vnode_0.push($createVNode('div',$quick_l6_4_static_attr,$vnode_1));$vnode_2=[$createVNode(0,(i18n('mn')))];$vnode_1=[$createVNode('button',{'mx5-click': $viewId+'_mJ()','class': 'rd-l9 rd-mG rd-ma rd-nk','type': 'button',},$vnode_2)];$vnode_2=[$createVNode(0,(i18n('mo')))];$vnode_1.push($createVNode('button',{'mx5-click': $viewId+'_mI()','class': 'rd-l9 rd-mG rd-mx rd-nk','type': 'button',},$vnode_2));$vnode_0.push($createVNode('div',$quick_l6_5_static_attr,$vnode_1));
if($quick_l6_6_static_node){
$vnode_0.push($quick_l6_6_static_node);
}else{
$vnode_0.push($quick_l6_6_static_node=$createVNode('div',{'_': 'i$','class': 'rd-m3 rd-mg rd-n6',}));
}
 

return $createVNode($viewId,0,$vnode_0); } ,
    init(data) {
        this['_mH'] = data.dialog;
    },
    render() {
        this.digest({
            body: tojson_1()
        });
    },
    '_mI<click>'() {
        this['_mH'].close();
    },
    '_mJ<click>'() {
        //rd#need-register-code
        //保留if逻辑体中的代码，删除if条件及else代码即可删除相应的未授权提示
        if (DEBUG) {
            let value = node('_rd_ta_' + this.id).value.trim();
            if (tryApplyContent(value)) {
                this['_mH'].close();
            }
        }
        else {
            alertMsg('未授权版本不支持该功能');
        }
    }
}).static({
    async '_mL'(target) {
        //rd#need-register-code
        //保留if逻辑体中的代码，删除if条件及else代码即可删除相应的未授权提示
        if (DEBUG) {
            let readMark = mark(this, '_mK');
            try {
                let content = await fs_1['_mL'](target);
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
    async '_mO'() {
        let saveMark = mark(this, '_mK');
        try {
            await fs_1['_mM']();
        }
        catch (ex) {
            Vframe.root().invoke('alert', [ex.message]);
            return;
        }
        if (saveMark()) {
            index_1.show(index_2('mj'));
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
                await fs_1['_mN'](`${index_2('mk')}-${time}.rd`, value);
                index_1.show(index_2('ml'), 3e3);
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