/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/6c/page",["5c","../../5b/5o","../../5b/6c","../../5n/index","../../5b/5e","5j/6u/index","5j/70/index","5j/73/index","5j/6v/index"],(require,exports,module)=>{
require("5j/6u/index");
require("5j/70/index");
require("5j/73/index");
require("5j/6v/index");
let $quick_or_3_static_node;
let $quick_or_5_static_node;
let $quick_or_0_static_attr={'class': 'rd-mR rd-mn rd-of rd-sp rd-sr',};
let $quick_or_1_static_attr={'class': 'rd-mX rd-mZ rd-sq',};
let $quick_or_2_static_attr={'class': 'rd-mF rd-nA',};
let $quick_or_4_static_attr={'class': 'rd-mD rd-mX rd-mZ rd-ml rd-nk',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let history_1 = require("../../5b/5o");
let props_1 = require("../../5b/6c");
let index_1 = require("../../5n/index");
let const_1 = require("../../5b/5e");
let { State, View, mark } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0,
{
	i18n,
	ctrl,
	page,
	props,}=$dataFromView,
$vnode_3,
$vnode_2,
$$_class,
$$_mx5$_view,
$vnode_1;
$vnode_1=[];$vnode_3=[$createVNode(0,(i18n('uc')))];$vnode_2=[$createVNode('span',$quick_or_2_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(ctrl.title)))];$vnode_2.push($createVNode('span',0,$vnode_3));$vnode_1.push($createVNode('li',$quick_or_1_static_attr,$vnode_2));
for(let $q_a_damwchoh=ctrl.props,$q_c_xgzwjlszoz=$q_a_damwchoh.length,$q_key_kcbotwpfa=0;$q_key_kcbotwpfa<$q_c_xgzwjlszoz;$q_key_kcbotwpfa+=1){
let p=$q_a_damwchoh[$q_key_kcbotwpfa];

if(p.type&&(!p['_py']||p['_py'](page))){

if(p.type==props['ms']){

if($quick_or_3_static_node){
$vnode_1.push($quick_or_3_static_node);
}else{
$vnode_1.push($quick_or_3_static_node=$createVNode('li',{'_': 'i!','class': 'rd-mV',}));
}

}else{
let value=page[p.key];;
if(p.read){
value=p.read(value);
}$vnode_2=[];
if(p.tip){
$vnode_3=[$createVNode(0,(i18n(p.tip)))];$vnode_2.push($createVNode('span',$quick_or_2_static_attr,$vnode_3));
}let readonly=page.readonly;;
if(p.type==props['md']){
$vnode_3=[$createVNode(0,(value))];;$$_class='';if(readonly){;$$_class+='rd-nL';};$vnode_2.push($createVNode('span',{'class': $$_class,},$vnode_3));
}else if(p.type==props['l2']){
;$$_mx5$_view='5j/6u/index?value='+$keyOf($refData,value,'i!.'+(p.key)+'.i@');if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'i$.'+($q_key_kcbotwpfa)+'.i^');};if(($temp_var=p.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'i$.'+($q_key_kcbotwpfa)+'.i*');};if(($temp_var=p.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'i$.'+($q_key_kcbotwpfa)+'.i{');};if(($temp_var=p.min)!=null){;$$_mx5$_view+='&min='+$keyOf($refData,$temp_var,'i$.'+($q_key_kcbotwpfa)+'.i}');};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-l5 rd-m8 rd-mK','disabled': (readonly),'mx5-input': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_kcbotwpfa)+'.i[')+'\',use:\'value\'})','mx5-view': $$_mx5$_view,}));
}else if(p.type==props['ma']){
$vnode_2.push($createVNode('input',{'class': 'rd-l5','value': (value),'mx5-input': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',native:\'value\'})','disabled': (readonly),},1,$special_2));
}else if(p.type==props['l3']){
;$$_mx5$_view='5j/70/index?clear='+($encodeUrl(p.clear))+'&color='+$keyOf($refData,value,'i!.'+(p.key)+'.i@')+'&align=right&disabled='+($encodeUrl(readonly));if(($temp_var=p.alpha)!=null){;$$_mx5$_view+='&alpha='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-m8','mx5-input': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'color\'})','mx5-view': $$_mx5$_view,}));
}else if(p.type==props['l8']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'src\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_kcbotwpfa)+'.i[')+'\'})','mx5-view': '5j/73/index?src='+($encodeUrl(value))+'&disabled='+$keyOf($refData,readonly,'i]'),}));
}else if(p.type==props['l9']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'ctrl,page','class': 'rd-m8','mx5-change': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',use:\'value\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_kcbotwpfa)+'.i[')+'\'})','mx5-view': '5j/6v/index?selected='+($encodeUrl(value))+'&list='+$keyOf($refData,p.items,'i$.'+($q_key_kcbotwpfa)+'.i|')+'&textKey=text&valueKey=value&disabled='+$keyOf($refData,p.disabled||readonly,'i$.'+($q_key_kcbotwpfa)+'.i,'),}));
}else if(p.type==props['l4']){
$vnode_3=[$createVNode('input',{'class': 'rd-mJ rd-nD','type': 'checkbox','disabled': (readonly),'checked': (value),'mx5-change': $viewId+'_rf({key:\''+($encodeQuote(p.key))+'\',native:\'checked\',write:\''+$keyOf($refData,p.write,'i$.'+($q_key_kcbotwpfa)+'.i[')+'\'})',},1,$special_4)];
if($quick_or_5_static_node){
$vnode_3.push($quick_or_5_static_node);
}else{
$vnode_3.push($quick_or_5_static_node=$createVNode('i',{'_': 'i@','class': 'rd-mK rd-mR rd-nE',}));
}
$vnode_2.push($createVNode('label',$quick_or_4_static_attr,$vnode_3));
}else if(p.type==props['m_']){
$vnode_3=[$createVNode(0,(i18n('tb')))];$vnode_2.push($createVNode('button',{'class': 'rd-l9 rd-mG rd-ma rd-nk','disabled': (readonly),'mx5-click': $viewId+'_uB()',},$vnode_3));
};$$_class='rd-sq rd-mX ';if(p['_pW']){;$$_class+='rd-nC';}else{;$$_class+='rd-mZ';};$vnode_1.push($createVNode('li',{'class': $$_class,},$vnode_2));
}
}
}$vnode_0=[$createVNode('ul',$quick_or_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('l8', update);
        State.on('l7', update);
        State.on('m_', update);
        this.on('destroy', () => {
            State.off('l8', update);
            State.off('l7', update);
            State.off('m_', update);
        });
        this.set({
            props: props_1,
            ctrl: State.get('mf')
        });
    },
    assign() {
        return false;
    },
    render() {
        let page = State.get('ma');
        let size = page.width + 'x' + page.height;
        page.paper = size;
        page.screen = size;
        this.digest({
            page
        });
    },
    async '_rf<input,change>'(e) {
        let { key, use, native, write } = e.params;
        let page = State.get('ma');
        let v = native ? e.eventTarget[native] : e[use];
        let marker = mark(this, '_m3');
        if (write) {
            v = await write(v, page, e);
        }
        if (marker()) {
            page[key] = v;
            if (key == 'unit') {
                State.fire('mn', {
                    '_nJ': v
                });
            }
            else {
                State.fire('l8');
            }
            history_1["l2"](history_1['my'], index_1('qu'), 'mQ' + key, 500);
        }
    },
    '_uB<click>'(e) {
        let page = State.get('ma');
        let img = new Image();
        let m = mark(this, '_uA');
        let setSize = () => {
            let newWidth = const_1['l3'](img.width), newHeight = const_1['l3'](img.height);
            if (m() &&
                (newWidth != page.backgroundWidth ||
                    newHeight != page.backgroundHeight)) {
                page.backgroundWidth = newWidth;
                page.backgroundHeight = newHeight;
                State.fire('l8');
                history_1["l2"](history_1['my'], index_1('qu'));
            }
        };
        img.onload = setSize;
        img.src = page.backgroundImage;
        if (img.complete) {
            setSize();
        }
    }
});

});