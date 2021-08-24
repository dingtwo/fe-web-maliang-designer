/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/6e",["51","../50/53","../50/enum","../50/5u","../58/59/index","../5g/ebase"],(require,exports,module)=>{
let $quick_ht_1_static_node;
let $quick_ht_0_static_attr={'data-as': 'icon','class': 'rd-gV rd-gY rd-ge rd-it rd-iz rd-j1',};
let $special_2={'value':'value',};
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let const_1 = require("../50/53");
let enum_1 = require("../50/enum");
let stage_selection_1 = require("../50/5u");
let index_1 = require("../58/59/index");
let ebase_1 = require("../5g/ebase");
let { State, has, View, node } = magix_1;
let { min, max } = Math;
let CellAndHod = enum_1['gg'] | enum_1['gi'];
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
let props=element.props,ctrl=element.ctrl,id=element.id;;;$$_class='rd-g3';if(props.readonly&&(ctrl.as & denum['gg']) != denum['gg']){;$$_class+=' rd-gX';};$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'$': 'element,selected,count,fs,unit,selfGrouped,grouped','mx5-view': (view)+'?props='+$keyOf($refData,props,'eD')+'&element='+$keyOf($refData,element,'eE')+'&selected='+$keyOf($refData,selected,'eF')+'&count='+$keyOf($refData,count,'eG')+'&fs='+$keyOf($refData,fs,'eH')+'&unit='+$keyOf($refData,unit,'eI')+'&grouped='+$keyOf($refData,selfGrouped||grouped,'eJ'),'class': $$_class,}));$text='';let r=((props.rotate||0)+360)%360;;$text+=' ';let modifier=ctrl['_iV'];;
if(!fs){
$vnode_1=[];
if(((modifier & denum['gl']) || (selected && (modifier & denum['gw']))) && !props.readonly){
$vnode_2=[$createVNode(0,(ctrl.icon),1)];$vnode_1.push($createVNode('i',$quick_ht_0_static_attr,$vnode_2));
}
if(!props.locked && selected){

if($quick_ht_1_static_node){
$vnode_1.push($quick_ht_1_static_node);
}else{
$vnode_1.push($quick_ht_1_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gV rd-jM',}));
}

}
if(!props.locked && count==1 && selected && !grouped && !selfGrouped){

if(modifier){

if((modifier & denum['gq']) && !props.pinX && !props.pinY){
$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gY rd-iz rd-j2','mx5-pointerdown': $viewId+'_k2()','title': (i18n('kA')),}));
}
if((modifier & denum['gs']) && props['_iY']){
$vnode_1.push($createVNode('textarea',{'data-as': 'da','mx5-pointerdown': $viewId+'_kg()','mx5-contextmenu': $viewId+'_kg()','id': '_rd_ta_'+$viewId,'class': 'rd-gN rd-gO rd-gY rd-gh rd-iz','mx5-input': $viewId+'_k3()','style': 'font-size:'+(props.fontsize)+(unit),'value': (props.text),},0,$special_2));
}let height=0,
                    　width=0,
                    　top=0,
                    　left=0,
                      pxPropsHeight=toPx(props.height),
                      pxPropsWidth=toPx(props.width),
                    　size;;
if(modifier & denum['gn']){
$text='';height=max(min(20,pxPropsHeight-6)-4,0);$text+=' ';top=(pxPropsHeight-height)/2;
}
if(modifier & denum['go']){
$text='';width=max(min(20,pxPropsWidth-6)-4,0);$text+=' ';left=(pxPropsWidth-width-1)/2;
}size=min(max(0,min(pxPropsHeight-height-top-7,pxPropsHeight/2,pxPropsWidth-width-left-7,pxPropsWidth/2)),14);
if(modifier & denum['gn']){

if(!props.pinX){
$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gY rd-ig rd-iz rd-jU','style': 'height:'+(height)+'px;top:'+(top)+'px;cursor:'+(cursor(r,0))+'-resize','title': (i18n('kB')),'mx5-pointerdown': $viewId+'_ks({key:\'ml\'})',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gY rd-ig rd-iz rd-jT','style': 'height:'+(height)+'px;top:'+(top)+'px;cursor:'+(cursor(r,0))+'-resize','title': (i18n('kB')),'mx5-pointerdown': $viewId+'_ks({key:\'mr\'})',}));
}
if(modifier & denum['go']){

if(!props.pinY){
$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gY rd-ig rd-iz rd-jW','style': 'width:'+(width)+'px;left:'+(left)+'px;cursor:'+(cursor(r,90))+'-resize','title': (i18n('kC')),'mx5-pointerdown': $viewId+'_ks({key:\'tm\'})',}));
}$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gY rd-ig rd-iz rd-jV','style': 'width:'+(width)+'px;left:'+(left)+'px;cursor:'+(cursor(r,90))+'-resize','title': (i18n('kC')),'mx5-pointerdown': $viewId+'_ks({key:\'bm\'})',}));
}
if((modifier & denum['gm'])||((modifier & whEnum)==whEnum)){

if(!props.pinX){
;$$_class='rd-gV rd-jY rd-gY rd-ig rd-iz';if(size<4){;$$_class+=' rd-g0';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,135))+'-resize','title': (i18n('kD')),'mx5-pointerdown': $viewId+'_ks({key:\'bl\'})','class': $$_class,}));
}
if(!props.pinX&&!props.pinY){
;$$_class='rd-gV rd-jZ rd-gY rd-ig rd-iz';if(size<4){;$$_class+=' rd-g0';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,45))+'-resize','title': (i18n('kD')),'mx5-pointerdown': $viewId+'_ks({key:\'tl\'})','class': $$_class,}));
}
if(!props.pinY){
;$$_class='rd-gV rd-j0 rd-gY rd-ig rd-iz';if(size<4){;$$_class+=' rd-g0';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,135))+'-resize','title': (i18n('kD')),'mx5-pointerdown': $viewId+'_ks({key:\'tr\'})','class': $$_class,}));
};$$_class='rd-gV rd-jX rd-gY rd-ig rd-iz';if(size<4){;$$_class+=' rd-g0';};$vnode_1.push($createVNode('div',{'style': 'width:'+(size)+'px;height:'+(size)+'px;cursor:'+(cursor(r,45))+'-resize','title': (i18n('kD')),'mx5-pointerdown': $viewId+'_ks({key:\'br\'})','class': $$_class,}));
}
}
if(ctrl['_k0']){

for(let $q_a_uxiygrr=ctrl['_k0'],$q_c_nrqmcphp=$q_a_uxiygrr.length,$q_key_hcaxsturhc=0;$q_key_hcaxsturhc<$q_c_nrqmcphp;$q_key_hcaxsturhc+=1){
let [r,c]=$q_a_uxiygrr[$q_key_hcaxsturhc];
$vnode_1.push($createVNode('div',{'style': 'left:'+(props[c+'X']-props.x-props[r])+(unit)+';top:'+(props[c+'Y']-props.y-props[r])+(unit)+';width:'+(2*props[r])+(unit)+';height:'+(2*props[r])+(unit),'class': 'rd-gV rd-gX rd-j3',}));
}
}
if(ctrl['_k1']){
let keyPoints=ctrl['_k1'](props);;
for(let $q_c_axvqqqivi=keyPoints.length,$q_key_lpbbwjg=0;$q_key_lpbbwjg<$q_c_axvqqqivi;$q_key_lpbbwjg+=1){
let key=keyPoints[$q_key_lpbbwjg];
;$$_class='rd-gV rd-j4 rd-gM rd-ig rd-iz';if(key.c==props['_kY']){;$$_class+=' rd-j5';};$vnode_1.push($createVNode('div',{'style': 'left:calc('+(key.x)+(unit)+' - 4px);top:calc('+(key.y)+(unit)+' - 4px)','mx5-pointerover': $viewId+'_k4({key:\''+($encodeQuote(key.c))+'\'})','title': (i18n('kE')),'mx5-pointerdown': $viewId+'_k5({key:\''+($encodeQuote(key.c))+'\'})','class': $$_class,}));
}
}
};$$_class='rd-gV rd-ig rd-g3 rd-jN';if(selected){;if(props.locked){;$$_class+=' rd-jQ';}else{;$$_class+=' rd-jO';};if(selfGrouped){;$$_class+=' rd-jS';};};if(grouped){;$$_class+=' ';if(props.locked){;$$_class+=' rd-jP';}else{;$$_class+=' rd-jR';};};if((modifier & denum['gr'])|| props.readonly){;$$_class+=' rd-gX';};$vnode_0.push($createVNode('div',{'id': '_rdm_'+(element.id),'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';width:'+(max(props.width,minSize()))+(unit)+';height:'+(max(props.height,minSize()))+(unit)+';transform:rotate('+(r)+'deg)','class': $$_class,},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            denum: enum_1,
            max,
            min,
            minSize: () => const_1['ge'](1),
            whEnum: enum_1['gn'] | enum_1['go'],
            toPx: const_1['gY'],
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
    '_iZ'(element) {
        //以下是格子元素取消选中格子的操作
        let { ctrl, props, id, type } = element;
        if ((ctrl.as & CellAndHod) &&
            (props.focusCol != -1 ||
                props.focusRow != -1)) {
            props.focusRow = -1;
            props.focusCol = -1;
            this['_iA'](element);
            State.fire('gf', {
                '_hW': {
                    [id]: 1
                },
                '_hX': {
                    [type]: 1
                },
                '_ge': {
                    '_jz': 1
                }
            });
        }
    },
    '_kZ'() {
        let map = stage_selection_1['gi']();
        let elements = State.get('gd');
        let count = elements.length;
        let element = this.get('element');
        if (element) {
            let id = element.id;
            let groups = State.get('go');
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
                element.props['_kY'] = '';
                element.props['_iY'] = 0;
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