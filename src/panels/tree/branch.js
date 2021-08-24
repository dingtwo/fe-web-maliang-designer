/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/tree/branch",["51","../../50/enum","../../50/5d","./rect"],(require,exports,module)=>{
let $quick_gd_static_text;
let $quick_iF_0_static_attr={'class': 'rd-ge rd-h6 rd-mM',};
let $quick_iF_1_static_attr={'class': 'rd-g6 rd-g8',};

let magix_1 = require("51");
let enum_1 = require("../../50/enum");
let history_1 = require("../../50/5d");
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

for(let $q_c_ullmjo=rows.length,ri=0;ri<$q_c_ullmjo;ri+=1){
let row=rows[ri];

for(let $q_a_vxbyawvhc=row.cols,$q_c_upooyajh=$q_a_vxbyawvhc.length,ci=0;ci<$q_c_upooyajh;ci+=1){
let {elements:elements}=$q_a_vxbyawvhc[ci];

if(elements&&elements.length){
$vnode_1=[];
for(let ei=elements.length;ei--;){
let e=elements[ei];
$text='';let props=e.props,ctrl=e.ctrl,id=e.id;;$text+=' ';let locked=props.locked,readonly=props.readonly,eRows=props.rows,ename=props.ename;;
if(!ename){
ename=i18n(ctrl.title);
}$vnode_2=[];$vnode_3=[];$vnode_4=[$createVNode(0,(ctrl.icon),1)];$vnode_3.push($createVNode('i',$quick_iF_0_static_attr,$vnode_4));$vnode_4=[$createVNode(0,(ename))];$vnode_3.push($createVNode('div',$quick_iF_1_static_attr,$vnode_4));
if(!readonly && !locked){
$vnode_4=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-ge rd-h5 rd-hW rd-mJ rd-mM','title': (i18n('op')),'mx5-click': $viewId+'_o9({element:\''+$keyOf($refData,e,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+(ei)+'.eG')+'\'})',},$vnode_4));
};$$_class='rd-mI rd-hw rd-g9 rd-ha';if(map[id]){;$$_class+=' ';if(locked){;$$_class+='rd-mL';}else{;$$_class+='rd-mK';};};$vnode_2.push($createVNode('div',{'mx5-pointerover': $viewId+'_o6({element:\''+$keyOf($refData,e,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+(ei)+'.eG')+'\',dest:\'_rdm_'+($encodeQuote(id))+'\'})','mx5-pointerout': $viewId+'_o7()','mx5-click': ((!readonly))&&($viewId+'_o8({element:\''+$keyOf($refData,e,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+(ei)+'.eG')+'\',dest:\'_rdm_'+($encodeQuote(id))+'\'})'),'title': (ename),'class': $$_class,},$vnode_3));
if(e.ctrl.as & hodEnum){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'rows,map','class': 'rd-gJ','mx5-view': '5r/tree/branch?hid='+($encodeUrl(id))+'&rows='+$keyOf($refData,eRows,'eD.'+(ri)+'.eE.'+(ci)+'.eF.'+(ei)+'.eH')+'&map='+$keyOf($refData,map,'eI'),}));
};$$_class='rd-mH rd-gM rd-g9 rd-h_';if(rowIndex==ri&&colIndex==ci&&current==ei){;$$_class+=' rd-mO';};if(drag&&rowIndex==ri&&colIndex==ci&&ei==index){;$$_class+=' rd-mP-'+(onTop?'top':'bottom');};$vnode_1.push($createVNode('div',{'id': 'te_'+(id),'mx5-dragstart': $viewId+'_mv({index:'+(ei)+',row:'+(ri)+',col:'+(ci)+'})','mx5-dragover': $viewId+'_mw({index:'+(ei)+',row:'+(ri)+',col:'+(ci)+'})','draggable': ((!locked&&!readonly))&&('true'),'class': $$_class,},$vnode_2));
}$vnode_0.push($createVNode('div',{'class': 'rd-mQ','mx5-dragend': $viewId+'_md()',},$vnode_1));
}
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            hodEnum: enum_1['gg']
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '_mv<dragstart>'(e) {
        let dest = State.get('gC');
        if (dest && dest != this.id)
            return;
        State.set({
            'gC': this.id
        });
        let me = this;
        let { params, dataTransfer } = e;
        let { index, row, col } = params;
        me['_mp'] = index;
        me['_o2'] = row;
        me['_o3'] = col;
        this.digest({
            current: index,
            rowIndex: row,
            colIndex: col
        });
        //dataTransfer.effectAllowed = 'move';
        //firefox required setData
        dataTransfer.setData('text/plain', '_mu');
    },
    '_mw<dragover>'(e) {
        let dest = State.get('gC');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { params, eventTarget, pageY } = e;
        let { index, row, col } = params;
        let currentIndex = me['_mp'];
        if (me['_o2'] === row &&
            me['_o3'] === col &&
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
    '_md<dragend>'() {
        let dest = State.get('gC');
        if (dest && dest != this.id)
            return;
        let me = this;
        me['_o2'] = -1;
        me['_o3'] = -1;
        let data = me.get();
        if (data.drag) {
            let startIndex = me['_mp'];
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
            State.fire('gB', {
                '_jt': '_o4'
            });
            history_1['gd'](history_1['gE'], drag.props.ename);
        }
        me.digest({
            current: -1,
            drag: 0
        });
        State.set({
            'gC': null
        });
        this['_o5']();
    }
}).merge(rect_1);

});