/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/tree/index",["51","../../50/enum","../../50/5d","../../50/5q","../../50/5u","./rect","./branch"],(require,exports,module)=>{
require("./branch");
let $quick_gd_static_text;
let $quick_iG_0_static_attr={'class': 'rd-ge rd-h6 rd-mM',};
let $quick_iG_1_static_attr={'class': 'rd-g6 rd-g8',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let enum_1 = require("../../50/enum");
let history_1 = require("../../50/5d");
let stage_generic_1 = require("../../50/5q");
let stage_selection_1 = require("../../50/5u");
let rect_1 = require("./rect");
let { State, View, applyStyle, mark } = magix_1;
applyStyle("rd-gS",".rd-mG{padding:5px 4px}.rd-mH{color:#333;margin:1px 0}.rd-mI{border-radius:2px;height:22px;line-height:22px}.rd-mJ{visibility:hidden}.rd-mI:hover{background:#f5f5f5}.rd-mI:hover .rd-mJ{visibility:visible}.rd-mK,.rd-mK:hover{background:#b2e1b5}.rd-mL,.rd-mL:hover{background:#e5e5e5}.rd-mM{margin:0 4px 0 2px}.rd-mN{background:#47b34e}.rd-mO,.rd-mN{opacity:.4}.rd-mP-top{box-shadow:0 -1px #47b34e}.rd-mP-bottom{box-shadow:0 1px #47b34e}.rd-mQ{border-top:1px dotted #f5f5f5}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	elements,
	i18n,
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
$vnode_1=[];
for(let ei=elements.length;ei--;){
let e=elements[ei];
$text='';let props=e.props,ctrl=e.ctrl,id=e.id;;$text+=' ';let locked=props.locked,readonly=props.readonly,rows=props.rows,ename=props.ename;;
if(!ename){
ename=i18n(ctrl.title);
}$vnode_2=[];$vnode_3=[];$vnode_4=[$createVNode(0,(ctrl.icon),1)];$vnode_3.push($createVNode('i',$quick_iG_0_static_attr,$vnode_4));$vnode_4=[$createVNode(0,(ename))];$vnode_3.push($createVNode('div',$quick_iG_1_static_attr,$vnode_4));
if(!readonly && !locked){
$vnode_4=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-ge rd-h5 rd-hW rd-mJ rd-mM','title': (i18n('op')),'mx5-click': $viewId+'_o9({element:\''+$keyOf($refData,e,'eD.'+(ei)+'.eE')+'\'})',},$vnode_4));
};$$_class='rd-mI rd-hw rd-g9 rd-ha';if(map[id]){;$$_class+=' ';if(locked){;$$_class+='rd-mL';}else{;$$_class+='rd-mK';};};$vnode_2.push($createVNode('div',{'mx5-pointerover': $viewId+'_o6({element:\''+$keyOf($refData,e,'eD.'+(ei)+'.eE')+'\'})','mx5-pointerout': $viewId+'_o7()','mx5-click': ((!readonly))&&($viewId+'_o8({element:\''+$keyOf($refData,e,'eD.'+(ei)+'.eE')+'\'})'),'title': (ename),'class': $$_class,},$vnode_3));
if(e.ctrl.as & hodEnum){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'elements,map','class': 'rd-gJ','mx5-view': '5r/tree/branch?rows='+$keyOf($refData,rows,'eD.'+(ei)+'.eF')+'&map='+$keyOf($refData,map,'eG'),}));
};$$_class='rd-mH rd-gM rd-g9 rd-h_';if(current==ei){;$$_class+=' rd-mO';};if(drag&&ei==index){;$$_class+=' rd-mP-'+(onTop?'top':'bottom');};$vnode_1.push($createVNode('div',{'id': 'te_'+(id),'mx5-dragstart': $viewId+'_mv({index:'+(ei)+'})','mx5-dragover': $viewId+'_mw({index:'+(ei)+'})','draggable': ((!locked&&!readonly))&&('true'),'class': $$_class,},$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-g3 rd-mG','mx5-dragend': $viewId+'_md()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            hodEnum: enum_1['gg']
        });
        let update = this['_gn'](this.render, 30);
        let checkLocked = e => {
            let props = e['_ge'];
            if (props.locked ||
                props.ename ||
                props.rows) {
                update();
            }
        };
        rect_1['_lD']();
        State.on('gi', update);
        State.on('gB', update);
        State.on('gg', update);
        State.on('gl', update);
        State.on('gf', checkLocked);
        this.on('destroy', () => {
            State.off('gi', update);
            State.off('gB', update);
            State.off('gg', update);
            State.off('gl', update);
            State.off('gf', checkLocked);
        });
    },
    async render(e) {
        let elements = State.get('gl');
        let map = stage_selection_1['gi']();
        let selectElements = State.get('gd');
        let renderMark = mark(this, '_od');
        await this.digest({
            map,
            elements
        });
        await magix_1.lowTaskFinale();
        let highlight = renderMark() && selectElements.length == 1;
        if (e &&
            e.type == 'gB' &&
            (e['_jt'] == '_p_' ||
                e['_jt'] == '_o4')) {
            highlight = false;
        }
        //console.log(e);
        //setTimeout(() => {
        if (highlight) {
            let first = selectElements[0];
            stage_generic_1['gr'](`te_` + first.id, this.root);
        }
        //}, 50);
    },
    '_mv<dragstart>'(e) {
        let dest = State.get('gC');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { params, dataTransfer } = e;
        this.set({
            current: me['_mp'] = params.index
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
        let { eventTarget, params, pageY } = e;
        let { index } = params;
        let currentIndex = me['_mp'];
        if (currentIndex != index) {
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
        else {
            //dataTransfer.dropEffect = 'none';
            me.digest({
                drag: 0
            });
        }
    },
    '_md<dragend>'(e) {
        let dest = State.get('gC');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { drag, elements, onTop, index } = me.get();
        if (drag) {
            let startIndex = me['_mp'];
            let drag = elements[startIndex];
            elements.splice(index + (onTop ? 1 : 0), 0, drag);
            if (index < startIndex) {
                elements.splice(startIndex + 1, 1);
            }
            else {
                elements.splice(startIndex, 1);
            }
            me.set({
                elements
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
        this['_o5']();
    }
}).merge(rect_1);

});