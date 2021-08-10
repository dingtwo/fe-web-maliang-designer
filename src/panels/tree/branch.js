/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/tree/branch",["4e","../../4d/enum","../../4d/4q","./rect"],(require,exports,module)=>{
let $quick_dE_static_text;
let $quick_f6_0_static_attr={'class': 'rd-dF rd-fw rd-kc',};
let $quick_f6_1_static_attr={'class': 'rd-ew rd-ey',};

let magix_1 = require("4e");
let enum_1 = require("../../4d/enum");
let history_1 = require("../../4d/4q");
let rect_1 = require("./rect");
let { State, View } = magix_1;

module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $temp_var,$vnode_0=[],
{
	rows,
	i18n,
	rowIndex,
	colIndex,
	current,
	drag,
	index,
	onTop,
	map,
	hodEnum,}=$dataFromView,
$text,
$$_class,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;

for(let $q_c_aprfro=rows.length,ri=0;ri<$q_c_aprfro;ri+=1){
let row=rows[ri];

for(let $q_a_ieuvoisbhfq=row.cols,$q_c_dryorseh=$q_a_ieuvoisbhfq.length,ci=0;ci<$q_c_dryorseh;ci+=1){
let {elements:elements}=$q_a_ieuvoisbhfq[ci];

if(elements&&elements.length){
$vnode_1=[];
for(let ei=elements.length;ei--;){
let e=elements[ei];
$text='';let props=e.props,ctrl=e.ctrl,id=e.id;;$text+=' ';let locked=props.locked,readonly=props.readonly,eRows=props.rows,ename=props.ename;;
if(!ename){
ename=i18n(ctrl.title);
}$vnode_2=[];$vnode_3=[];$vnode_4=[$createVNode(0,(ctrl.icon),1)];$vnode_3.push($createVNode('i',$quick_f6_0_static_attr,$vnode_4));$vnode_4=[$createVNode(0,(ename))];$vnode_3.push($createVNode('div',$quick_f6_1_static_attr,$vnode_4));
if(!readonly && !locked){
$vnode_4=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-dF rd-fm rd-fv rd-k_ rd-kc','title': (i18n('lQ')),'mx5-click': $viewId+'_mw({element:\''+$keyOf($refData,e,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+(ei)+'.cK')+'\'})',},$vnode_4));
};$$_class='rd-j9 rd-eX rd-ez rd-eB';if(map[id]){;$$_class+=' ';if(locked){;$$_class+='rd-kb';}else{;$$_class+='rd-ka';};};$vnode_2.push($createVNode('div',{'mx5-pointerover': $viewId+'_mt({element:\''+$keyOf($refData,e,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+(ei)+'.cK')+'\',dest:\'_rdm_'+($encodeQuote(id))+'\'})','mx5-pointerout': $viewId+'_mu()','mx5-click': ((!readonly))&&($viewId+'_mv({element:\''+$keyOf($refData,e,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+(ei)+'.cK')+'\',dest:\'_rdm_'+($encodeQuote(id))+'\'})'),'title': (ename),'class': $$_class,},$vnode_3));
if(e.ctrl.as & hodEnum){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'rows,map','class': 'rd-e_','mx5-view': '58/tree/branch?hid='+($encodeUrl(id))+'&rows='+$keyOf($refData,eRows,'cH.'+(ri)+'.cI.'+(ci)+'.cJ.'+(ei)+'.cL')+'&map='+$keyOf($refData,map,'cM'),}));
};$$_class='rd-j8 rd-ec rd-ez rd-eA';if(rowIndex==ri&&colIndex==ci&&current==ei){;$$_class+=' rd-ke';};if(drag&&rowIndex==ri&&colIndex==ci&&ei==index){;$$_class+=' rd-kf-'+(onTop?'top':'bottom');};$vnode_1.push($createVNode('div',{'id': 'te_'+(id),'mx5-dragstart': $viewId+'_jT({index:'+(ei)+',row:'+(ri)+',col:'+(ci)+'})','mx5-dragover': $viewId+'_jU({index:'+(ei)+',row:'+(ri)+',col:'+(ci)+'})','draggable': ((!locked&&!readonly))&&('true'),'class': $$_class,},$vnode_2));
}$vnode_0.push($createVNode('div',{'class': 'rd-kg','mx5-dragend': $viewId+'_jB()',},$vnode_1));
}
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            hodEnum: enum_1['dH']
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_jT<dragstart>'(e) {
        let dest = State.get('d3');
        if (dest && dest != this.id)
            return;
        State.set({
            'd3': this.id
        });
        let me = this;
        let { params, dataTransfer } = e;
        let { index, row, col } = params;
        me['_jN'] = index;
        me['_mp'] = row;
        me['_mq'] = col;
        this.digest({
            current: index,
            rowIndex: row,
            colIndex: col
        });
        //dataTransfer.effectAllowed = 'move';
        //firefox required setData
        dataTransfer.setData('text/plain', '_jS');
    },
    '_jU<dragover>'(e) {
        let dest = State.get('d3');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { params, eventTarget, pageY } = e;
        let { index, row, col } = params;
        let currentIndex = me['_jN'];
        if (me['_mp'] === row &&
            me['_mq'] === col &&
            currentIndex != index) {
            let rect = eventTarget.getBoundingClientRect();
            let onTop = (rect.y + rect.height / 2) > pageY;
            let canDrop = 1;
            if (onTop) {
                //界面是倒序显示的
                if (currentIndex == index + 1) {
                    canDrop = 0;
                }
            }
            else {
                if (currentIndex == index - 1) {
                    canDrop = 0;
                }
            }
            if (canDrop) {
                //dataTransfer.dropEffect = 'move';
                me.digest({
                    onTop,
                    drag: true,
                    index
                });
            }
            else {
                //dataTransfer.dropEffect = 'none';
                me.digest({
                    drag: 0
                });
            }
        }
        else if (me.get('drag')) {
            //dataTransfer.dropEffect = 'none';
            me.digest({
                drag: 0
            });
        }
    },
    '_jB<dragend>'() {
        let dest = State.get('d3');
        if (dest && dest != this.id)
            return;
        let me = this;
        me['_mp'] = -1;
        me['_mq'] = -1;
        let data = me.get();
        if (data.drag) {
            let startIndex = me['_jN'];
            let { rowIndex, colIndex, rows, index, onTop } = data;
            let elements = rows[rowIndex].cols[colIndex].elements;
            let drag = elements[startIndex];
            elements.splice(index + (onTop ? 1 : 0), 0, drag);
            if (index < startIndex) {
                elements.splice(startIndex + 1, 1);
            }
            else {
                elements.splice(startIndex, 1);
            }
            me.set({
                rows
            });
            State.fire('d2', {
                '_gR': '_mr'
            });
            history_1['dE'](history_1['d5'], drag.props.ename);
        }
        me.digest({
            current: -1,
            drag: 0
        });
        State.set({
            'd3': null
        });
        this['_ms']();
    }
}).merge(rect_1);

});