/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/tree/index",["5c","../../5b/enum","../../5b/5o","../../5b/65","../../5b/69","./rect","./branch"],(require,exports,module)=>{
require("./branch");
let $quick_l2_static_text;
let $quick_ou_0_static_attr={'class': 'rd-l3 rd-nU rd-sA',};
let $quick_ou_1_static_attr={'class': 'rd-mU rd-mW',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let enum_1 = require("../../5b/enum");
let history_1 = require("../../5b/5o");
let stage_generic_1 = require("../../5b/65");
let stage_selection_1 = require("../../5b/69");
let rect_1 = require("./rect");
let { State, View, applyStyle, mark } = magix_1;
applyStyle("rd-mG",".rd-su{padding:5px 4px}.rd-sv{color:#333;margin:1px 0}.rd-sw{border-radius:2px;height:22px;line-height:22px}.rd-sx{visibility:hidden}.rd-sw:hover{background:#f5f5f5}.rd-sw:hover .rd-sx{visibility:visible}.rd-sy,.rd-sy:hover{background:#b2e1b5}.rd-sz,.rd-sz:hover{background:#e5e5e5}.rd-sA{margin:0 4px 0 2px}.rd-sB{background:#47b34e}.rd-sC,.rd-sB{opacity:.4}.rd-sD-top{box-shadow:0 -1px #47b34e}.rd-sD-bottom{box-shadow:0 1px #47b34e}.rd-sE{border-top:1px dotted #f5f5f5}");
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
}$vnode_2=[];$vnode_3=[];$vnode_4=[$createVNode(0,(ctrl.icon),1)];$vnode_3.push($createVNode('i',$quick_ou_0_static_attr,$vnode_4));$vnode_4=[$createVNode(0,(ename))];$vnode_3.push($createVNode('div',$quick_ou_1_static_attr,$vnode_4));
if(!readonly && !locked){
$vnode_4=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-l3 rd-nK rd-nT rd-sA rd-sx','title': (i18n('ud')),'mx5-click': $viewId+'_uU({element:\''+$keyOf($refData,e,'i!.'+(ei)+'.i@')+'\'})',},$vnode_4));
};$$_class='rd-sw rd-nk rd-mX rd-mZ';if(map[id]){;$$_class+=' ';if(locked){;$$_class+='rd-sz';}else{;$$_class+='rd-sy';};};$vnode_2.push($createVNode('div',{'mx5-pointerover': $viewId+'_uR({element:\''+$keyOf($refData,e,'i!.'+(ei)+'.i@')+'\'})','mx5-pointerout': $viewId+'_uS()','mx5-click': ((!readonly))&&($viewId+'_uT({element:\''+$keyOf($refData,e,'i!.'+(ei)+'.i@')+'\'})'),'title': (ename),'class': $$_class,},$vnode_3));
if(e.ctrl.as & hodEnum){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'elements,map','class': 'rd-mx','mx5-view': '66/tree/branch?rows='+$keyOf($refData,rows,'i!.'+(ei)+'.i$')+'&map='+$keyOf($refData,map,'i^'),}));
};$$_class='rd-sv rd-mA rd-mX rd-mY';if(current==ei){;$$_class+=' rd-sC';};if(drag&&ei==index){;$$_class+=' rd-sD-'+(onTop?'top':'bottom');};$vnode_1.push($createVNode('div',{'id': 'te_'+(id),'mx5-dragstart': $viewId+'_sg({index:'+(ei)+'})','mx5-dragover': $viewId+'_sh({index:'+(ei)+'})','draggable': ((!locked&&!readonly))&&('true'),'class': $$_class,},$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-mR rd-su','mx5-dragend': $viewId+'_rZ()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            hodEnum: enum_1['l5']
        });
        let update = this['_mb'](this.render, 30);
        let checkLocked = e => {
            let props = e['_l3'];
            if (props.locked ||
                props.ename ||
                props.rows) {
                update();
            }
        };
        rect_1['_ro']();
        State.on('l7', update);
        State.on('mp', update);
        State.on('l5', update);
        State.on('m_', update);
        State.on('l4', checkLocked);
        this.on('destroy', () => {
            State.off('l7', update);
            State.off('mp', update);
            State.off('l5', update);
            State.off('m_', update);
            State.off('l4', checkLocked);
        });
    },
    async render(e) {
        let elements = State.get('m_');
        let map = stage_selection_1['l7']();
        let selectElements = State.get('l2');
        let renderMark = mark(this, '_tZ');
        await this.digest({
            map,
            elements
        });
        await magix_1.lowTaskFinale();
        let highlight = renderMark() && selectElements.length == 1;
        if (e &&
            e.type == 'mp' &&
            (e['_pe'] == '_uV' ||
                e['_pe'] == '_uP')) {
            highlight = false;
        }
        //console.log(e);
        //setTimeout(() => {
        if (highlight) {
            let first = selectElements[0];
            stage_generic_1['mf'](`te_` + first.id, this.root);
        }
        //}, 50);
    },
    '_sg<dragstart>'(e) {
        let dest = State.get('mq');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { params, dataTransfer } = e;
        this.set({
            current: me['_sa'] = params.index
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
        let { eventTarget, params, pageY } = e;
        let { index } = params;
        let currentIndex = me['_sa'];
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
    '_rZ<dragend>'(e) {
        let dest = State.get('mq');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { drag, elements, onTop, index } = me.get();
        if (drag) {
            let startIndex = me['_sa'];
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
            State.fire('mp', {
                '_pe': '_uP'
            });
            history_1['l2'](history_1['ms'], drag.props.ename);
        }
        me.digest({
            current: -1,
            drag: 0
        });
        this['_uQ']();
    }
}).merge(rect_1);

});