/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/tree/index",["4e","../../4d/enum","../../4d/4q","../../4d/57","../../4d/5b","./rect","./branch"],(require,exports,module)=>{
require("./branch");
let $quick_dE_static_text;
let $quick_f7_0_static_attr={'class': 'rd-dF rd-fw rd-kc',};
let $quick_f7_1_static_attr={'class': 'rd-ew rd-ey',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let enum_1 = require("../../4d/enum");
let history_1 = require("../../4d/4q");
let stage_generic_1 = require("../../4d/57");
let stage_selection_1 = require("../../4d/5b");
let rect_1 = require("./rect");
let { State, View, applyStyle, mark } = magix_1;
applyStyle("rd-ei",".rd-j7{padding:5px 4px}.rd-j8{color:#333;margin:1px 0}.rd-j9{border-radius:2px;height:22px;line-height:22px}.rd-k_{visibility:hidden}.rd-j9:hover{background:#f5f5f5}.rd-j9:hover .rd-k_{visibility:visible}.rd-ka,.rd-ka:hover{background:#fed6c0}.rd-kb,.rd-kb:hover{background:#e5e5e5}.rd-kc{margin:0 4px 0 2px}.rd-kd{background:#fa742b}.rd-ke,.rd-kd{opacity:.4}.rd-kf-top{box-shadow:0 -1px #fa742b}.rd-kf-bottom{box-shadow:0 1px #fa742b}.rd-kg{border-top:1px dotted #f5f5f5}");
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
}$vnode_2=[];$vnode_3=[];$vnode_4=[$createVNode(0,(ctrl.icon),1)];$vnode_3.push($createVNode('i',$quick_f7_0_static_attr,$vnode_4));$vnode_4=[$createVNode(0,(ename))];$vnode_3.push($createVNode('div',$quick_f7_1_static_attr,$vnode_4));
if(!readonly && !locked){
$vnode_4=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-dF rd-fm rd-fv rd-k_ rd-kc','title': (i18n('lQ')),'mx5-click': $viewId+'_mw({element:\''+$keyOf($refData,e,'cH.'+(ei)+'.cI')+'\'})',},$vnode_4));
};$$_class='rd-j9 rd-eX rd-ez rd-eB';if(map[id]){;$$_class+=' ';if(locked){;$$_class+='rd-kb';}else{;$$_class+='rd-ka';};};$vnode_2.push($createVNode('div',{'mx5-pointerover': $viewId+'_mt({element:\''+$keyOf($refData,e,'cH.'+(ei)+'.cI')+'\'})','mx5-pointerout': $viewId+'_mu()','mx5-click': ((!readonly))&&($viewId+'_mv({element:\''+$keyOf($refData,e,'cH.'+(ei)+'.cI')+'\'})'),'title': (ename),'class': $$_class,},$vnode_3));
if(e.ctrl.as & hodEnum){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'elements,map','class': 'rd-e_','mx5-view': '58/tree/branch?rows='+$keyOf($refData,rows,'cH.'+(ei)+'.cJ')+'&map='+$keyOf($refData,map,'cK'),}));
};$$_class='rd-j8 rd-ec rd-ez rd-eA';if(current==ei){;$$_class+=' rd-ke';};if(drag&&ei==index){;$$_class+=' rd-kf-'+(onTop?'top':'bottom');};$vnode_1.push($createVNode('div',{'id': 'te_'+(id),'mx5-dragstart': $viewId+'_jT({index:'+(ei)+'})','mx5-dragover': $viewId+'_jU({index:'+(ei)+'})','draggable': ((!locked&&!readonly))&&('true'),'class': $$_class,},$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-et rd-j7','mx5-dragend': $viewId+'_jB()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            hodEnum: enum_1['dH']
        });
        let update = this['_dO'](this.render, 30);
        let checkLocked = e => {
            let props = e['_dF'];
            if (props.locked ||
                props.ename ||
                props.rows) {
                update();
            }
        };
        rect_1['_i1']();
        State.on('dJ', update);
        State.on('d2', update);
        State.on('dH', update);
        State.on('dM', update);
        State.on('dG', checkLocked);
        this.on('destroy', () => {
            State.off('dJ', update);
            State.off('d2', update);
            State.off('dH', update);
            State.off('dM', update);
            State.off('dG', checkLocked);
        });
    },
    async render(e) {
        let elements = State.get('dM');
        let map = stage_selection_1['dJ']();
        let selectElements = State.get('dE');
        let renderMark = mark(this, '_lB');
        await this.digest({
            map,
            elements
        });
        await magix_1.lowTaskFinale();
        let highlight = renderMark() && selectElements.length == 1;
        if (e &&
            e.type == 'd2' &&
            (e['_gR'] == '_mx' ||
                e['_gR'] == '_mr')) {
            highlight = false;
        }
        //console.log(e);
        //setTimeout(() => {
        if (highlight) {
            let first = selectElements[0];
            stage_generic_1['dS'](`te_` + first.id, this.root);
        }
        //}, 50);
    },
    '_jT<dragstart>'(e) {
        let dest = State.get('d3');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { params, dataTransfer } = e;
        this.set({
            current: me['_jN'] = params.index
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
        let { eventTarget, params, pageY } = e;
        let { index } = params;
        let currentIndex = me['_jN'];
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
    '_jB<dragend>'(e) {
        let dest = State.get('d3');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { drag, elements, onTop, index } = me.get();
        if (drag) {
            let startIndex = me['_jN'];
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
            State.fire('d2', {
                '_gR': '_mr'
            });
            history_1['dE'](history_1['d5'], drag.props.ename);
        }
        me.digest({
            current: -1,
            drag: 0
        });
        this['_ms']();
    }
}).merge(rect_1);

});