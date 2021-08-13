/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/tree/branch",["5c","../../5b/enum","../../5b/5o","./rect"],(require,exports,module)=>{
let $quick_l2_static_text;
let $quick_ot_0_static_attr={'class': 'rd-l3 rd-nU rd-sA',};
let $quick_ot_1_static_attr={'class': 'rd-mU rd-mW',};

let magix_1 = require("5c");
let enum_1 = require("../../5b/enum");
let history_1 = require("../../5b/5o");
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

for(let $q_c_ewtfj=rows.length,ri=0;ri<$q_c_ewtfj;ri+=1){
let row=rows[ri];

for(let $q_a_obbwledwl=row.cols,$q_c_ouyimmx=$q_a_obbwledwl.length,ci=0;ci<$q_c_ouyimmx;ci+=1){
let {elements:elements}=$q_a_obbwledwl[ci];

if(elements&&elements.length){
$vnode_1=[];
for(let ei=elements.length;ei--;){
let e=elements[ei];
$text='';let props=e.props,ctrl=e.ctrl,id=e.id;;$text+=' ';let locked=props.locked,readonly=props.readonly,eRows=props.rows,ename=props.ename;;
if(!ename){
ename=i18n(ctrl.title);
}$vnode_2=[];$vnode_3=[];$vnode_4=[$createVNode(0,(ctrl.icon),1)];$vnode_3.push($createVNode('i',$quick_ot_0_static_attr,$vnode_4));$vnode_4=[$createVNode(0,(ename))];$vnode_3.push($createVNode('div',$quick_ot_1_static_attr,$vnode_4));
if(!readonly && !locked){
$vnode_4=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-l3 rd-nK rd-nT rd-sA rd-sx','title': (i18n('ud')),'mx5-click': $viewId+'_uU({element:\''+$keyOf($refData,e,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+(ei)+'.i^')+'\'})',},$vnode_4));
};$$_class='rd-sw rd-nk rd-mX rd-mZ';if(map[id]){;$$_class+=' ';if(locked){;$$_class+='rd-sz';}else{;$$_class+='rd-sy';};};$vnode_2.push($createVNode('div',{'mx5-pointerover': $viewId+'_uR({element:\''+$keyOf($refData,e,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+(ei)+'.i^')+'\',dest:\'_rdm_'+($encodeQuote(id))+'\'})','mx5-pointerout': $viewId+'_uS()','mx5-click': ((!readonly))&&($viewId+'_uT({element:\''+$keyOf($refData,e,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+(ei)+'.i^')+'\',dest:\'_rdm_'+($encodeQuote(id))+'\'})'),'title': (ename),'class': $$_class,},$vnode_3));
if(e.ctrl.as & hodEnum){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'rows,map','class': 'rd-mx','mx5-view': '66/tree/branch?hid='+($encodeUrl(id))+'&rows='+$keyOf($refData,eRows,'i!.'+(ri)+'.i@.'+(ci)+'.i$.'+(ei)+'.i*')+'&map='+$keyOf($refData,map,'i{'),}));
};$$_class='rd-sv rd-mA rd-mX rd-mY';if(rowIndex==ri&&colIndex==ci&&current==ei){;$$_class+=' rd-sC';};if(drag&&rowIndex==ri&&colIndex==ci&&ei==index){;$$_class+=' rd-sD-'+(onTop?'top':'bottom');};$vnode_1.push($createVNode('div',{'id': 'te_'+(id),'mx5-dragstart': $viewId+'_sg({index:'+(ei)+',row:'+(ri)+',col:'+(ci)+'})','mx5-dragover': $viewId+'_sh({index:'+(ei)+',row:'+(ri)+',col:'+(ci)+'})','draggable': ((!locked&&!readonly))&&('true'),'class': $$_class,},$vnode_2));
}$vnode_0.push($createVNode('div',{'class': 'rd-sE','mx5-dragend': $viewId+'_rZ()',},$vnode_1));
}
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            hodEnum: enum_1['l5']
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_sg<dragstart>'(e) {
        let dest = State.get('mq');
        if (dest && dest != this.id)
            return;
        State.set({
            'mq': this.id
        });
        let me = this;
        let { params, dataTransfer } = e;
        let { index, row, col } = params;
        me['_sa'] = index;
        me['_uN'] = row;
        me['_uO'] = col;
        this.digest({
            current: index,
            rowIndex: row,
            colIndex: col
        });
        //dataTransfer.effectAllowed = 'move';
        //firefox required setData
        dataTransfer.setData('text/plain', '_sf');
    },
    '_sh<dragover>'(e) {
        let dest = State.get('mq');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { params, eventTarget, pageY } = e;
        let { index, row, col } = params;
        let currentIndex = me['_sa'];
        if (me['_uN'] === row &&
            me['_uO'] === col &&
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
    '_rZ<dragend>'() {
        let dest = State.get('mq');
        if (dest && dest != this.id)
            return;
        let me = this;
        me['_uN'] = -1;
        me['_uO'] = -1;
        let data = me.get();
        if (data.drag) {
            let startIndex = me['_sa'];
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
            State.fire('mp', {
                '_pe': '_uP'
            });
            history_1['l2'](history_1['ms'], drag.props.ename);
        }
        me.digest({
            current: -1,
            drag: 0
        });
        State.set({
            'mq': null
        });
        this['_uQ']();
    }
}).merge(rect_1);

});