/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/61/page",["51","../../50/5d","../../50/61","../../5c/index","../../50/53","58/6j/index","58/6l/index","58/6o/index","58/6k/index"],(require,exports,module)=>{
require("58/6j/index");
require("58/6l/index");
require("58/6o/index");
require("58/6k/index");
let $quick_iD_3_static_node;
let $quick_iD_5_static_node;
let $quick_iD_0_static_attr={'class': 'rd-g3 rd-gz rd-ir rd-mB rd-mD',};
let $quick_iD_1_static_attr={'class': 'rd-g9 rd-ha rd-mC',};
let $quick_iD_2_static_attr={'class': 'rd-gR rd-hM',};
let $quick_iD_4_static_attr={'class': 'rd-g9 rd-gP rd-gx rd-ha rd-hw',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let history_1 = require("../../50/5d");
let props_1 = require("../../50/61");
let index_1 = require("../../5c/index");
let const_1 = require("../../50/53");
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
$vnode_1=[];$vnode_3=[$createVNode(0,(i18n('oo')))];$vnode_2=[$createVNode('span',$quick_iD_2_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(ctrl.title)))];$vnode_2.push($createVNode('span',0,$vnode_3));$vnode_1.push($createVNode('li',$quick_iD_1_static_attr,$vnode_2));
for(let $q_a_gxcydpswe=ctrl.props,$q_c_tgvgmwcj=$q_a_gxcydpswe.length,$q_key_qwkfwl=0;$q_key_qwkfwl<$q_c_tgvgmwcj;$q_key_qwkfwl+=1){
let p=$q_a_gxcydpswe[$q_key_qwkfwl];

if(p.type&&(!p['_jN']||p['_jN'](page))){

if(p.type==props['gE']){

if($quick_iD_3_static_node){
$vnode_1.push($quick_iD_3_static_node);
}else{
$vnode_1.push($quick_iD_3_static_node=$createVNode('li',{'_': 'eD','class': 'rd-g7',}));
}

}else{
let value=page[p.key];;
if(p.read){
value=p.read(value);
}$vnode_2=[];
if(p.tip){
$vnode_3=[$createVNode(0,(i18n(p.tip)))];$vnode_2.push($createVNode('span',$quick_iD_2_static_attr,$vnode_3));
}let readonly=page.readonly;;
if(p.type==props['gp']){
$vnode_3=[$createVNode(0,(value))];;$$_class='';if(readonly){;$$_class+='rd-hX';};$vnode_2.push($createVNode('span',{'class': $$_class,},$vnode_3));
}else if(p.type==props['gd']){
;$$_mx5$_view='58/6j/index?value='+$keyOf($refData,value,'eD.'+(p.key)+'.eE');if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'eF.'+($q_key_qwkfwl)+'.eG');};if(($temp_var=p.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'eF.'+($q_key_qwkfwl)+'.eH');};if(($temp_var=p.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'eF.'+($q_key_qwkfwl)+'.eI');};if(($temp_var=p.min)!=null){;$$_mx5$_view+='&min='+$keyOf($refData,$temp_var,'eF.'+($q_key_qwkfwl)+'.eJ');};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-gW rd-gg rd-hj','disabled': (readonly),'mx5-input': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_qwkfwl)+'.eK')+'\',use:\'value\'})','mx5-view': $$_mx5$_view,}));
}else if(p.type==props['gm']){
$vnode_2.push($createVNode('input',{'class': 'rd-gg','value': (value),'mx5-input': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',native:\'value\'})','disabled': (readonly),},1,$special_2));
}else if(p.type==props['ge']){
;$$_mx5$_view='58/6l/index?clear='+($encodeUrl(p.clear))+'&color='+$keyOf($refData,value,'eD.'+(p.key)+'.eE')+'&align=right&disabled='+($encodeUrl(readonly));if(($temp_var=p.alpha)!=null){;$$_mx5$_view+='&alpha='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-hj','mx5-input': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'color\'})','mx5-view': $$_mx5$_view,}));
}else if(p.type==props['gj']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'src\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_qwkfwl)+'.eK')+'\'})','mx5-view': '58/6o/index?src='+($encodeUrl(value))+'&disabled='+$keyOf($refData,readonly,'eL'),}));
}else if(p.type==props['gk']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'ctrl,page','class': 'rd-hj','mx5-change': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',use:\'value\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_qwkfwl)+'.eK')+'\'})','mx5-view': '58/6k/index?selected='+($encodeUrl(value))+'&list='+$keyOf($refData,p.items,'eF.'+($q_key_qwkfwl)+'.eM')+'&textKey=text&valueKey=value&disabled='+$keyOf($refData,p.disabled||readonly,'eF.'+($q_key_qwkfwl)+'.eN'),}));
}else if(p.type==props['gf']){
$vnode_3=[$createVNode('input',{'class': 'rd-gV rd-hP','type': 'checkbox','disabled': (readonly),'checked': (value),'mx5-change': $viewId+'_lu({key:\''+($encodeQuote(p.key))+'\',native:\'checked\',write:\''+$keyOf($refData,p.write,'eF.'+($q_key_qwkfwl)+'.eK')+'\'})',},1,$special_4)];
if($quick_iD_5_static_node){
$vnode_3.push($quick_iD_5_static_node);
}else{
$vnode_3.push($quick_iD_5_static_node=$createVNode('i',{'_': 'eE','class': 'rd-g3 rd-gW rd-hQ',}));
}
$vnode_2.push($createVNode('label',$quick_iD_4_static_attr,$vnode_3));
}else if(p.type==props['gl']){
$vnode_3=[$createVNode(0,(i18n('nm')))];$vnode_2.push($createVNode('button',{'class': 'rd-gS rd-gk rd-gm rd-hw','disabled': (readonly),'mx5-click': $viewId+'_oQ()',},$vnode_3));
};$$_class='rd-mC rd-g9 ';if(p['_ka']){;$$_class+='rd-hO';}else{;$$_class+='rd-ha';};$vnode_1.push($createVNode('li',{'class': $$_class,},$vnode_2));
}
}
}$vnode_0=[$createVNode('ul',$quick_iD_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('gj', update);
        State.on('gi', update);
        State.on('gl', update);
        this.on('destroy', () => {
            State.off('gj', update);
            State.off('gi', update);
            State.off('gl', update);
        });
        this.set({
            props: props_1,
            ctrl: State.get('gr')
        });
    },
    assign() {
        return false;
    },
    render() {
        let page = State.get('gm');
        let size = page.width + 'x' + page.height;
        page.paper = size;
        page.screen = size;
        this.digest({
            page
        });
    },
    async '_lu<input,change>'(e) {
        let { key, use, native, write } = e.params;
        let page = State.get('gm');
        let v = native ? e.eventTarget[native] : e[use];
        let marker = mark(this, '_he');
        if (write) {
            v = await write(v, page, e);
        }
        if (marker()) {
            page[key] = v;
            if (key == 'unit') {
                State.fire('gz', {
                    '_hV': v
                });
            }
            else {
                State.fire('gj');
            }
            history_1["gd"](history_1['gK'], index_1('kF'), 'g2' + key, 500);
        }
    },
    '_oQ<click>'(e) {
        let page = State.get('gm');
        let img = new Image();
        let m = mark(this, '_oP');
        let setSize = () => {
            let newWidth = const_1['ge'](img.width), newHeight = const_1['ge'](img.height);
            if (m() &&
                (newWidth != page.backgroundWidth ||
                    newHeight != page.backgroundHeight)) {
                page.backgroundWidth = newWidth;
                page.backgroundHeight = newHeight;
                State.fire('gj');
                history_1["gd"](history_1['gK'], index_1('kF'));
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