/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/5e/page",["4e","../../4d/4q","../../4d/5e","../../4p/index","../../4d/4g","4l/60/index","4l/62/index","4l/65/index","4l/61/index"],(require,exports,module)=>{
require("4l/60/index");
require("4l/62/index");
require("4l/65/index");
require("4l/61/index");
let $quick_f4_3_static_node;
let $quick_f4_5_static_node;
let $quick_f4_0_static_attr={'class': 'rd-d0 rd-et rd-fS rd-j2 rd-j4',};
let $quick_f4_1_static_attr={'class': 'rd-eB rd-ez rd-j3',};
let $quick_f4_2_static_attr={'class': 'rd-eh rd-fc',};
let $quick_f4_4_static_attr={'class': 'rd-dY rd-eB rd-eX rd-ef rd-ez',};
let $special_2={'value':'value',};
let $special_4={'checked':'checked',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let history_1 = require("../../4d/4q");
let props_1 = require("../../4d/5e");
let index_1 = require("../../4p/index");
let const_1 = require("../../4d/4g");
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
$vnode_1=[];$vnode_3=[$createVNode(0,(i18n('lP')))];$vnode_2=[$createVNode('span',$quick_f4_2_static_attr,$vnode_3)];$vnode_3=[$createVNode(0,(i18n(ctrl.title)))];$vnode_2.push($createVNode('span',0,$vnode_3));$vnode_1.push($createVNode('li',$quick_f4_1_static_attr,$vnode_2));
for(let $q_a_exglwsz=ctrl.props,$q_c_kcqxowpik=$q_a_exglwsz.length,$q_key_gkjzgxqkvl=0;$q_key_gkjzgxqkvl<$q_c_kcqxowpik;$q_key_gkjzgxqkvl+=1){
let p=$q_a_exglwsz[$q_key_gkjzgxqkvl];

if(p.type&&(!p['_ha']||p['_ha'](page))){

if(p.type==props['d5']){

if($quick_f4_3_static_node){
$vnode_1.push($quick_f4_3_static_node);
}else{
$vnode_1.push($quick_f4_3_static_node=$createVNode('li',{'_': 'cH','class': 'rd-ex',}));
}

}else{
let value=page[p.key];;
if(p.read){
value=p.read(value);
}$vnode_2=[];
if(p.tip){
$vnode_3=[$createVNode(0,(i18n(p.tip)))];$vnode_2.push($createVNode('span',$quick_f4_2_static_attr,$vnode_3));
}let readonly=page.readonly;;
if(p.type==props['dQ']){
$vnode_3=[$createVNode(0,(value))];;$$_class='';if(readonly){;$$_class+='rd-fn';};$vnode_2.push($createVNode('span',{'class': $$_class,},$vnode_3));
}else if(p.type==props['dE']){
;$$_mx5$_view='4l/60/index?value='+$keyOf($refData,value,'cH.'+(p.key)+'.cI');if(($temp_var=p.max)!=null){;$$_mx5$_view+='&max='+$keyOf($refData,$temp_var,'cJ.'+($q_key_gkjzgxqkvl)+'.cK');};if(($temp_var=p.step)!=null){;$$_mx5$_view+='&step='+$keyOf($refData,$temp_var,'cJ.'+($q_key_gkjzgxqkvl)+'.cL');};if(($temp_var=p.fixed)!=null){;$$_mx5$_view+='&fixed='+$keyOf($refData,$temp_var,'cJ.'+($q_key_gkjzgxqkvl)+'.cM');};if(($temp_var=p.min)!=null){;$$_mx5$_view+='&min='+$keyOf($refData,$temp_var,'cJ.'+($q_key_gkjzgxqkvl)+'.cN');};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-dH rd-eK rd-em','disabled': (readonly),'mx5-input': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_gkjzgxqkvl)+'.cO')+'\',use:\'value\'})','mx5-view': $$_mx5$_view,}));
}else if(p.type==props['dN']){
$vnode_2.push($createVNode('input',{'class': 'rd-dH','value': (value),'mx5-input': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',native:\'value\'})','disabled': (readonly),},1,$special_2));
}else if(p.type==props['dF']){
;$$_mx5$_view='4l/62/index?clear='+($encodeUrl(p.clear))+'&color='+$keyOf($refData,value,'cH.'+(p.key)+'.cI')+'&align=right&disabled='+($encodeUrl(readonly));if(($temp_var=p.alpha)!=null){;$$_mx5$_view+='&alpha='+($encodeUrl($temp_var));};$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-eK','mx5-input': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'color\'})','mx5-view': $$_mx5$_view,}));
}else if(p.type==props['dK']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'page,ctrl','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'src\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_gkjzgxqkvl)+'.cO')+'\'})','mx5-view': '4l/65/index?src='+($encodeUrl(value))+'&disabled='+$keyOf($refData,readonly,'cP'),}));
}else if(p.type==props['dL']){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'ctrl,page','class': 'rd-eK','mx5-change': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',use:\'value\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_gkjzgxqkvl)+'.cO')+'\'})','mx5-view': '4l/61/index?selected='+($encodeUrl(value))+'&list='+$keyOf($refData,p.items,'cJ.'+($q_key_gkjzgxqkvl)+'.cQ')+'&textKey=text&valueKey=value&disabled='+$keyOf($refData,p.disabled||readonly,'cJ.'+($q_key_gkjzgxqkvl)+'.cR'),}));
}else if(p.type==props['dG']){
$vnode_3=[$createVNode('input',{'class': 'rd-el rd-ff','type': 'checkbox','disabled': (readonly),'checked': (value),'mx5-change': $viewId+'_iS({key:\''+($encodeQuote(p.key))+'\',native:\'checked\',write:\''+$keyOf($refData,p.write,'cJ.'+($q_key_gkjzgxqkvl)+'.cO')+'\'})',},1,$special_4)];
if($quick_f4_5_static_node){
$vnode_3.push($quick_f4_5_static_node);
}else{
$vnode_3.push($quick_f4_5_static_node=$createVNode('i',{'_': 'cI','class': 'rd-em rd-et rd-fg',}));
}
$vnode_2.push($createVNode('label',$quick_f4_4_static_attr,$vnode_3));
}else if(p.type==props['dM']){
$vnode_3=[$createVNode(0,(i18n('kO')))];$vnode_2.push($createVNode('button',{'class': 'rd-dL rd-dN rd-eX rd-ei','disabled': (readonly),'mx5-click': $viewId+'_md()',},$vnode_3));
};$$_class='rd-j3 rd-ez ';if(p['_hy']){;$$_class+='rd-fe';}else{;$$_class+='rd-eB';};$vnode_1.push($createVNode('li',{'class': $$_class,},$vnode_2));
}
}
}$vnode_0=[$createVNode('ul',$quick_f4_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('dK', update);
        State.on('dJ', update);
        State.on('dM', update);
        this.on('destroy', () => {
            State.off('dK', update);
            State.off('dJ', update);
            State.off('dM', update);
        });
        this.set({
            props: props_1,
            ctrl: State.get('dS')
        });
    },
    assign() {
        return false;
    },
    render() {
        let page = State.get('dN');
        let size = page.width + 'x' + page.height;
        page.paper = size;
        page.screen = size;
        this.digest({
            page
        });
    },
    async '_iS<input,change>'(e) {
        let { key, use, native, write } = e.params;
        let page = State.get('dN');
        let v = native ? e.eventTarget[native] : e[use];
        let marker = mark(this, '_eF');
        if (write) {
            v = await write(v, page, e);
        }
        if (marker()) {
            page[key] = v;
            if (key == 'unit') {
                State.fire('d0', {
                    '_fl': v
                });
            }
            else {
                State.fire('dK');
            }
            history_1["dE"](history_1['ea'], index_1('h7'), 'es' + key, 500);
        }
    },
    '_md<click>'(e) {
        let page = State.get('dN');
        let img = new Image();
        let m = mark(this, '_mc');
        let setSize = () => {
            let newWidth = const_1['dF'](img.width), newHeight = const_1['dF'](img.height);
            if (m() &&
                (newWidth != page.backgroundWidth ||
                    newHeight != page.backgroundHeight)) {
                page.backgroundWidth = newWidth;
                page.backgroundHeight = newHeight;
                State.fire('dK');
                history_1["dE"](history_1['ea'], index_1('h7'));
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