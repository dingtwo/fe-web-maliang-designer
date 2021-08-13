/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/6p",["5c","../5b/5e","../5b/enum","../5b/69","../5j/5k/index","../5r/ebase"],(require,exports,module)=>{
let $quick_nh_1_static_node;
let $quick_nh_0_static_attr={'data-as': 'icon','class': 'rd-l3 rd-mJ rd-mM rd-oh rd-on rd-pP',};
let $special_2={'value':'value',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let const_1 = require("../5b/5e");
let enum_1 = require("../5b/enum");
let stage_selection_1 = require("../5b/69");
let index_1 = require("../5j/5k/index");
let ebase_1 = require("../5r/ebase");
let { State, has, View, node } = magix_1;
let { min, max } = Math;
let CellAndHod = enum_1['l5'] | enum_1['l7'];
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
let props=element.props,ctrl=element.ctrl,id=element.id;;;$$_class='rd-mR';if(props.readonly&&(ctrl.as & denum['l5']) != denum['l5']){;$$_class+=' rd-mL';};$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'element,selected,count,fs,unit,selfGrouped,grouped','mx5-view': (view)+'?props='+$keyOf($refData,props,'i!')+'&element='+$keyOf($refData,element,'i@')+'&selected='+$keyOf($refData,selected,'i$')+'&count='+$keyOf($refData,count,'i^')+'&fs='+$keyOf($refData,fs,'i*')+'&unit='+$keyOf($refData,unit,'i{')+'&grouped='+$keyOf($refData,selfGrouped||grouped,'i}'),'class': $$_class,}));$text='';let r=((props.rotate||0)+360)%360;;$text+=' ';let modifier=ctrl['_oG'];;
if(!fs){
$vnode_1=[];
if(((modifier & denum['m_']) || (selected && (modifier & denum['mk']))) && !props.readonly){
$vnode_2=[$createVNode(0,(ctrl.icon),1)];$vnode_1.push($createVNode('i',$quick_nh_0_static_attr,$vnode_2));
}
if(!props.locked && selected){

if($quick_nh_1_static_node){
$vnode_1.push($quick_nh_1_static_node);
}else{
$vnode_1.push($quick_nh_1_static_node=$createVNode('div',{'_': 'i!','class': 'rd-mJ rd-pA',}));
}

}
if(!props.locked && count==1 && selected && !grouped && !selfGrouped){

if(modifier){

if((modifier & denum['me']) && !props.pinX && !props.pinY){
$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mM rd-on rd-pQ','mx5-pointerdown': $viewId+'_qN()','title': (i18n('qp')),}));
}
if((modifier & denum['mg']) && props['_oJ']){
$vnode_1.push($createVNode('textarea',{'data-as': 'da','mx5-pointerdown': $viewId+'_p2()','mx5-contextmenu': $viewId+'_p2()','id': '_rd_ta_'+$viewId,'class': 'rd-l6 rd-mB rd-mC rd-mM rd-on','mx5-input': $viewId+'_qO()','style': 'font-size:'+(props.fontsize)+(unit),'value': (props.text),},0,$special_2));
}let height=0,
                    　width=0,
                    　top=0,
                    　left=0,
                      pxPropsHeight=toPx(props.height),
                      pxPropsWidth=toPx(props.width),
                    　size;;
if(modifier & denum['mb']){
$text='';height=max(min(20,pxPropsHeight-6)-4,0);$text+=' ';top=(pxPropsHeight-height)/2;
}
if(modifier & denum['mc']){
$text='';width=max(min(20,pxPropsWidth-6)-4,0);$text+=' ';left=(pxPropsWidth-width-1)/2;
}size=min(max(0,min(pxPropsHeight-height-top-7,pxPropsHeight/2,pxPropsWidth-width-left-7,pxPropsWidth/2)),14);
if(modifier & denum['mb']){

if(!props.pinX){
$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mM rd-n5 rd-on rd-pI','style': 'height:'+(height)+'px;top:'+(top)+'px;cursor:'+(cursor(r,0))+'-resize','title': (i18n('qq')),'mx5-pointerdown': $viewId+'_qd({key:\'ml\'})',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mM rd-n5 rd-on rd-pH','style': 'height:'+(height)+'px;top:'+(top)+'px;cursor:'+(cursor(r,0))+'-resize','title': (i18n('qq')),'mx5-pointerdown': $viewId+'_qd({key:\'mr\'})',}));
}
if(modifier & denum['mc']){

if(!props.pinY){
$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mM rd-n5 rd-on rd-pK','style': 'width:'+(width)+'px;left:'+(left)+'px;cursor:'+(cursor(r,90))+'-resize','title': (i18n('qr')),'mx5-pointerdown': $viewId+'_qd({key:\'tm\'})',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mM rd-n5 rd-on rd-pJ','style': 'width:'+(width)+'px;left:'+(left)+'px;cursor:'+(cursor(r,90))+'-resize','title': (i18n('qr')),'mx5-pointerdown': $viewId+'_qd({key:\'bm\'})',}));
}
if((modifier & denum['ma'])||((modifier & whEnum)==whEnum)){

if(!props.pinX){
;$$_class='rd-mJ rd-pM rd-mM rd-n5 rd-on';if(size<4){;$$_class+=' rd-mO';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,135))+'-resize','title': (i18n('qs')),'mx5-pointerdown': $viewId+'_qd({key:\'bl\'})','class': $$_class,}));
}
if(!props.pinX&&!props.pinY){
;$$_class='rd-mJ rd-pN rd-mM rd-n5 rd-on';if(size<4){;$$_class+=' rd-mO';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,45))+'-resize','title': (i18n('qs')),'mx5-pointerdown': $viewId+'_qd({key:\'tl\'})','class': $$_class,}));
}
if(!props.pinY){
;$$_class='rd-mJ rd-pO rd-mM rd-n5 rd-on';if(size<4){;$$_class+=' rd-mO';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,135))+'-resize','title': (i18n('qs')),'mx5-pointerdown': $viewId+'_qd({key:\'tr\'})','class': $$_class,}));
};$$_class='rd-mJ rd-pL rd-mM rd-n5 rd-on';if(size<4){;$$_class+=' rd-mO';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,45))+'-resize','title': (i18n('qs')),'mx5-pointerdown': $viewId+'_qd({key:\'br\'})','class': $$_class,}));
}
}
if(ctrl['_qL']){

for(let $q_a_eopwyr=ctrl['_qL'],$q_c_fyiffcgu=$q_a_eopwyr.length,$q_key_dtaoxgygdq=0;$q_key_dtaoxgygdq<$q_c_fyiffcgu;$q_key_dtaoxgygdq+=1){
let [r,c]=$q_a_eopwyr[$q_key_dtaoxgygdq];
$vnode_1.push($createVNode('div',{'style': 'left:'+(props[c+'X']-props.x-props[r])+(unit)+';top:'+(props[c+'Y']-props.y-props[r])+(unit)+';width:'+(2*props[r])+(unit)+';height:'+(2*props[r])+(unit),'class': 'rd-mJ rd-mL rd-pR',}));
}
}
if(ctrl['_qM']){
let keyPoints=ctrl['_qM'](props);;
for(let $q_c_xypswnns=keyPoints.length,$q_key_wwpshffx=0;$q_key_wwpshffx<$q_c_xypswnns;$q_key_wwpshffx+=1){
let key=keyPoints[$q_key_wwpshffx];
;$$_class='rd-mJ rd-pS rd-mA rd-n5 rd-on';if(key.c==props['_qJ']){;$$_class+=' rd-pT';};$vnode_1.push($createVNode('div',{'style': 'left:calc('+(key.x)+(unit)+' - 4px);top:calc('+(key.y)+(unit)+' - 4px)','mx5-pointerover': $viewId+'_qP({key:\''+($encodeQuote(key.c))+'\'})','title': (i18n('qt')),'mx5-pointerdown': $viewId+'_qQ({key:\''+($encodeQuote(key.c))+'\'})','class': $$_class,}));
}
}
};$$_class='rd-mJ rd-n5 rd-mR rd-pB';if(selected){;if(props.locked){;$$_class+=' rd-pE';}else{;$$_class+=' rd-pC';};if(selfGrouped){;$$_class+=' rd-pG';};};if(grouped){;$$_class+=' ';if(props.locked){;$$_class+=' rd-pD';}else{;$$_class+=' rd-pF';};};if((modifier & denum['mf'])|| props.readonly){;$$_class+=' rd-mL';};$vnode_0.push($createVNode('div',{'id': '_rdm_'+(element.id),'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';width:'+(max(props.width,minSize()))+(unit)+';height:'+(max(props.height,minSize()))+(unit)+';transform:rotate('+(r)+'deg)','class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            denum: enum_1,
            max,
            min,
            minSize: () => const_1['l3'](1),
            whEnum: enum_1['mb'] | enum_1['mc'],
            toPx: const_1['mM'],
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
    '_oK'(element) {
        //以下是格子元素取消选中格子的操作
        let { ctrl, props, id, type } = element;
        if ((ctrl.as & CellAndHod) &&
            (props.focusCol != -1 ||
                props.focusRow != -1)) {
            props.focusRow = -1;
            props.focusCol = -1;
            this['_ol'](element);
            State.fire('l4', {
                '_nK': {
                    [id]: 1
                },
                '_nL': {
                    [type]: 1
                },
                '_l3': {
                    '_pk': 1
                }
            });
        }
    },
    '_qK'() {
        let map = stage_selection_1['l7']();
        let elements = State.get('l2');
        let count = elements.length;
        let element = this.get('element');
        if (element) {
            let id = element.id;
            let groups = State.get('mc');
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
                element.props['_qJ'] = '';
                element.props['_oJ'] = 0;
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