/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/5r",["4e","../4d/4g","../4d/enum","../4d/5b","../4l/4m/index","../4t/ebase"],(require,exports,module)=>{
let $quick_eU_1_static_node;
let $quick_eU_0_static_attr={'data-as': 'icon','class': 'rd-dF rd-el rd-eo rd-f0 rd-fU rd-hr',};
let $special_2={'value':'value',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let const_1 = require("../4d/4g");
let enum_1 = require("../4d/enum");
let stage_selection_1 = require("../4d/5b");
let index_1 = require("../4l/4m/index");
let ebase_1 = require("../4t/ebase");
let { State, has, View, node } = magix_1;
let { min, max } = Math;
let CellAndHod = enum_1['dH'] | enum_1['dJ'];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	element,
	denum,
	view,
	selected,
	count,
	fs,
	unit,
	selfGrouped,
	grouped,
	max,
	minSize,
	i18n,
	toPx,
	min,
	cursor,
	whEnum,}=$dataFromView,
$$_class,
$text,
$vnode_2,
$vnode_1;
let props=element.props,ctrl=element.ctrl,id=element.id;;;$$_class='rd-et';if(props.readonly&&(ctrl.as & denum['dH']) != denum['dH']){;$$_class+=' rd-en';};$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'element,selected,count,fs,unit,selfGrouped,grouped','mx5-view': (view)+'?props='+$keyOf($refData,props,'cH')+'&element='+$keyOf($refData,element,'cI')+'&selected='+$keyOf($refData,selected,'cJ')+'&count='+$keyOf($refData,count,'cK')+'&fs='+$keyOf($refData,fs,'cL')+'&unit='+$keyOf($refData,unit,'cM')+'&grouped='+$keyOf($refData,selfGrouped||grouped,'cN'),'class': $$_class,}));$text='';let r=((props.rotate||0)+360)%360;;$text+=' ';let modifier=ctrl['_gi'];;
if(!fs){
$vnode_1=[];
if(((modifier & denum['dM']) || (selected && (modifier & denum['dX']))) && !props.readonly){
$vnode_2=[$createVNode(0,(ctrl.icon),1)];$vnode_1.push($createVNode('i',$quick_eU_0_static_attr,$vnode_2));
}
if(!props.locked && selected){

if($quick_eU_1_static_node){
$vnode_1.push($quick_eU_1_static_node);
}else{
$vnode_1.push($quick_eU_1_static_node=$createVNode('div',{'_': 'cH','class': 'rd-el rd-hc',}));
}

}
if(!props.locked && count==1 && selected && !grouped && !selfGrouped){

if(modifier){

if((modifier & denum['dR']) && !props.pinX && !props.pinY){
$vnode_1.push($createVNode('div',{'class': 'rd-el rd-eo rd-f0 rd-hs','mx5-pointerdown': $viewId+'_ip()','title': (i18n('h2')),}));
}
if((modifier & denum['dT']) && props['_gl']){
$vnode_1.push($createVNode('textarea',{'data-as': 'da','mx5-pointerdown': $viewId+'_hE()','mx5-contextmenu': $viewId+'_hE()','id': '_rd_ta_'+$viewId,'class': 'rd-dI rd-ed rd-ee rd-eo rd-f0','mx5-input': $viewId+'_iq()','style': 'font-size:'+(props.fontsize)+(unit),'value': (props.text),},0,$special_2));
}let height=0,
                    　width=0,
                    　top=0,
                    　left=0,
                      pxPropsHeight=toPx(props.height),
                      pxPropsWidth=toPx(props.width),
                    　size;;
if(modifier & denum['dO']){
$text='';height=max(min(20,pxPropsHeight-6)-4,0);$text+=' ';top=(pxPropsHeight-height)/2;
}
if(modifier & denum['dP']){
$text='';width=max(min(20,pxPropsWidth-6)-4,0);$text+=' ';left=(pxPropsWidth-width-1)/2;
}size=min(max(0,min(pxPropsHeight-height-top-7,pxPropsHeight/2,pxPropsWidth-width-left-7,pxPropsWidth/2)),14);
if(modifier & denum['dO']){

if(!props.pinX){
$vnode_1.push($createVNode('div',{'class': 'rd-el rd-eo rd-f0 rd-fH rd-hk','style': 'height:'+(height)+'px;top:'+(top)+'px;cursor:'+(cursor(r,0))+'-resize','title': (i18n('h3')),'mx5-pointerdown': $viewId+'_hQ({key:\'ml\'})',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-el rd-eo rd-f0 rd-fH rd-hj','style': 'height:'+(height)+'px;top:'+(top)+'px;cursor:'+(cursor(r,0))+'-resize','title': (i18n('h3')),'mx5-pointerdown': $viewId+'_hQ({key:\'mr\'})',}));
}
if(modifier & denum['dP']){

if(!props.pinY){
$vnode_1.push($createVNode('div',{'class': 'rd-el rd-eo rd-f0 rd-fH rd-hm','style': 'width:'+(width)+'px;left:'+(left)+'px;cursor:'+(cursor(r,90))+'-resize','title': (i18n('h4')),'mx5-pointerdown': $viewId+'_hQ({key:\'tm\'})',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-el rd-eo rd-f0 rd-fH rd-hl','style': 'width:'+(width)+'px;left:'+(left)+'px;cursor:'+(cursor(r,90))+'-resize','title': (i18n('h4')),'mx5-pointerdown': $viewId+'_hQ({key:\'bm\'})',}));
}
if((modifier & denum['dN'])||((modifier & whEnum)==whEnum)){

if(!props.pinX){
;$$_class='rd-el rd-ho rd-eo rd-fH rd-f0';if(size<4){;$$_class+=' rd-eq';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,135))+'-resize','title': (i18n('h5')),'mx5-pointerdown': $viewId+'_hQ({key:\'bl\'})','class': $$_class,}));
}
if(!props.pinX&&!props.pinY){
;$$_class='rd-el rd-hp rd-eo rd-fH rd-f0';if(size<4){;$$_class+=' rd-eq';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,45))+'-resize','title': (i18n('h5')),'mx5-pointerdown': $viewId+'_hQ({key:\'tl\'})','class': $$_class,}));
}
if(!props.pinY){
;$$_class='rd-el rd-hq rd-eo rd-fH rd-f0';if(size<4){;$$_class+=' rd-eq';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,135))+'-resize','title': (i18n('h5')),'mx5-pointerdown': $viewId+'_hQ({key:\'tr\'})','class': $$_class,}));
};$$_class='rd-el rd-hn rd-eo rd-fH rd-f0';if(size<4){;$$_class+=' rd-eq';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,45))+'-resize','title': (i18n('h5')),'mx5-pointerdown': $viewId+'_hQ({key:\'br\'})','class': $$_class,}));
}
}
if(ctrl['_in']){

for(let $q_a_ustkqwoln=ctrl['_in'],$q_c_eblwqhzzko=$q_a_ustkqwoln.length,$q_key_thrdnnrh=0;$q_key_thrdnnrh<$q_c_eblwqhzzko;$q_key_thrdnnrh+=1){
let [r,c]=$q_a_ustkqwoln[$q_key_thrdnnrh];
$vnode_1.push($createVNode('div',{'style': 'left:'+(props[c+'X']-props.x-props[r])+(unit)+';top:'+(props[c+'Y']-props.y-props[r])+(unit)+';width:'+(2*props[r])+(unit)+';height:'+(2*props[r])+(unit),'class': 'rd-el rd-en rd-ht',}));
}
}
if(ctrl['_io']){
let keyPoints=ctrl['_io'](props);;
for(let $q_c_zukqpptui=keyPoints.length,$q_key_tpyzrmbg=0;$q_key_tpyzrmbg<$q_c_zukqpptui;$q_key_tpyzrmbg+=1){
let key=keyPoints[$q_key_tpyzrmbg];
;$$_class='rd-el rd-hu rd-ec rd-fH rd-f0';if(key.c==props['_il']){;$$_class+=' rd-hv';};$vnode_1.push($createVNode('div',{'style': 'left:calc('+(key.x)+(unit)+' - 4px);top:calc('+(key.y)+(unit)+' - 4px)','mx5-pointerover': $viewId+'_ir({key:\''+($encodeQuote(key.c))+'\'})','title': (i18n('h6')),'mx5-pointerdown': $viewId+'_is({key:\''+($encodeQuote(key.c))+'\'})','class': $$_class,}));
}
}
};$$_class='rd-el rd-fH rd-et rd-hd';if(selected){;if(props.locked){;$$_class+=' rd-hg';}else{;$$_class+=' rd-he';};if(selfGrouped){;$$_class+=' rd-hi';};};if(grouped){;$$_class+=' ';if(props.locked){;$$_class+=' rd-hf';}else{;$$_class+=' rd-hh';};};if((modifier & denum['dS'])|| props.readonly){;$$_class+=' rd-en';};$vnode_0.push($createVNode('div',{'id': '_rdm_'+(element.id),'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';width:'+(max(props.width,minSize()))+(unit)+';height:'+(max(props.height,minSize()))+(unit)+';transform:rotate('+(r)+'deg)','class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            denum: enum_1,
            max,
            min,
            minSize: () => const_1['dF'](1),
            whEnum: enum_1['dO'] | enum_1['dP'],
            toPx: const_1['eo'],
        });
    },
    async render() {
        //console.log('rerender');
        await this.digest();
        let ta = node(`_rd_ta_${this.id}`);
        if (ta) {
            ta.focus();
            ta.selectionStart = ta.value.length;
        }
    },
    '_gm'(element) {
        //以下是格子元素取消选中格子的操作
        let { ctrl, props, id, type } = element;
        if ((ctrl.as & CellAndHod) &&
            (props.focusCol != -1 ||
                props.focusRow != -1)) {
            props.focusRow = -1;
            props.focusCol = -1;
            this['_fY'](element);
            State.fire('dG', {
                '_fm': {
                    [id]: 1
                },
                '_fn': {
                    [type]: 1
                },
                '_dF': {
                    '_gX': 1
                }
            });
        }
    },
    '_im'() {
        let map = stage_selection_1['dJ']();
        let elements = State.get('dE');
        let count = elements.length;
        let element = this.get('element');
        if (element) {
            let id = element.id;
            let groups = State.get('dP');
            let list = groups[id], grouped = 0;
            if (!map[id] &&
                list) {
                for (let n of list) {
                    if (map[n]) {
                        grouped = 1;
                        break;
                    }
                }
            }
            // if (data.selected) {
            //     if (!Has(map, id)) {
            //         let vf = Vframe.get('entity_' + this.id);
            //         if (vf) {
            //             vf.invoke('@:{lost.select}');
            //         }
            //     }
            // } else {
            //     if (Has(map, id)) {
            //         let vf = Vframe.get('entity_' + this.id);
            //         if (vf) {
            //             vf.invoke('@:{got.select}');
            //         }
            //     }
            // }
            //console.log(Has(map, id));
            let selected = has(map, id);
            if (!selected) {
                element.props['_il'] = '';
                element.props['_gl'] = 0;
                let start = this.root;
                while (start &&
                    start.id != '_rd_sc') { //修复在overflow hidden下有输入框，容器会向上滚动以以显示，当输入框隐藏时，需要滚动回来
                    if (start.dataset &&
                        start.dataset.as == 'hod') {
                        start.scrollTop = 0;
                        start.scrollLeft = 0;
                        break;
                    }
                    start = start.parentNode;
                }
            }
            this.set({
                selfGrouped: list,
                grouped,
                selected,
                count
            });
        }
    },
}).merge(index_1, ebase_1);

});