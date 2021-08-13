/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/data/index",["5c","../../5b/enum","../../5b/65","./branch"],(require,exports,module)=>{
require("./branch");
let $quick_mM_static_text;
let $quick_ok_0_static_attr={'class': 'rd-mR rd-of',};
let $quick_ok_1_static_attr={'class': 'rd-mA rd-rW',};
let $quick_ok_2_static_attr={'class': 'rd-nL',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let enum_1 = require("../../5b/enum");
let stage_generic_1 = require("../../5b/65");
let { State, View, applyStyle, toMap } = magix_1;
applyStyle("rd-mz",".rd-rT{background-color:#fff;border:1px solid #e6e6e6;border-radius:2px;margin:2px 0}.rd-rU{opacity:.4}.rd-rV{border-radius:2px;height:22px;line-height:22px}.rd-rV:hover{background:#f0f0f0}.rd-rW{margin:-4px -4px 0;padding:4px;top:0;z-index:2}.rd-rX{color:#bd0303}.rd-rY{opacity:.2;right:8px;top:8px}.rd-rY:hover{opacity:.5}");
let querySelectAndParent = () => {
    let select, parentElement, atRow, atCol;
    let elements = State.get('l2');
    if (elements &&
        elements.length == 1) {
        select = elements[0];
        let find = stage_generic_1['me'](select);
        parentElement = find['_oA'];
        atRow = find['_oB'];
        atCol = find['_oC'];
        if (parentElement) {
            let { props: pProps, ctrl: pCtrl } = parentElement;
            if (pCtrl.as & enum_1['l6']) {
                let update = pCtrl['_m3'];
                if (update) {
                    update(pProps);
                }
            }
        }
    }
    return {
        '_r7': select,
        '_tS': parentElement,
        '_oB': atRow,
        '_oC': atCol
    };
};
/**
 * 准备树形需要的数据格式，在这里进行统一转换，以适应不同的后端接口数据格式
 * 当后端接口数据与我们需求不同时，只需要修改这里的逻辑
 * @param dataSourceList 数据源列表
 */
let prepareTreeViewData = dataSourceList => {
    let treeViewData = [];
    for (let dataSource of dataSourceList) {
        let viewData = {
            expand: false,
            name: '',
            id: '',
            url: '',
            children: []
        };
        viewData.name = dataSource.name;
        viewData.id = dataSource.id;
        viewData.url = dataSource.url;
        viewData.children.push(...dataSource.fields);
        treeViewData.push(viewData);
    }
    //以下进行嵌套测试，最后包含拖动字段的父级需要有id和url，不包含拖动字段的不要设置id和url
    // let subs = [];
    // for (let i = 0; i < 200; i++) {
    //     subs.push({
    //         expand: false,
    //         name: '接口分组a' + i,
    //         children: treeViewData
    //     }, {
    //         expand: false,
    //         name: '接口分组b' + i,
    //         children: treeViewData
    //     });
    // }
    // treeViewData = [{
    //     expand: false,
    //     name: '接口分组',
    //     children: treeViewData
    // }, {
    //     expand: true,
    //     name: '接口分组1',
    //     children: treeViewData
    // }, {
    //     expand: false,
    //     name: '接口分组3',
    //     children: treeViewData
    // }, {
    //     expand: false,
    //     name: '接口分组',
    //     children: subs
    // }];
    return treeViewData;
};
/**
 * 递归遍历树形数据设置禁用状态
 * @param treeViewData 树形数据
 * @param parentBindId 父级绑定id
 */
let updateTeeViewDataDisabled = (treeViewData, parentBindId) => {
    for (let sub of treeViewData) {
        if (sub.children) {
            if (sub.id) {
                sub.disabled = parentBindId && sub.id != parentBindId;
                if (sub.disabled) { //如果禁用则折叠
                    sub.expand = false;
                }
            }
            else {
                updateTeeViewDataDisabled(sub.children, parentBindId);
            }
        }
    }
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0=[],
{
	error,
	canUseBind,
	kw,
	i18n,
	source,
	bindFieldsMap,
	readonly,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;

if(error){
$vnode_0.push($createVNode(0,(error.message||error)));
}else{
$vnode_1=[];
if(canUseBind){
$vnode_2=[$createVNode('input',{'class': 'rd-l4 rd-l5 rd-m3 rd-mB','value': (kw),'placeholder': '搜索数据源','mx5-input': $viewId+'_tY()',},1,$special_2)];$vnode_3=[$quick_mM_static_text||($quick_mM_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-rY rd-nV rd-mJ rd-nk';if(!kw){;$$_class+=' rd-mO';};$vnode_2.push($createVNode('i',{'mx5-click': $viewId+'_tX()','title': (i18n('uf')),'class': $$_class,},$vnode_3));$vnode_1.push($createVNode('div',$quick_ok_1_static_attr,$vnode_2));
if(source.length){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'source,bindFieldsMap,readonly,kw','mx5-view': '66/data/branch?list='+$keyOf($refData,source,'i!')+'&bindMap='+$keyOf($refData,bindFieldsMap,'i@')+'&readonly='+$keyOf($refData,readonly,'i$')+'&kw='+$keyOf($refData,kw,'i^'),'mx5-treeitempointerdown': $viewId+'_tR()','mx5-contextmenu': $viewId+'_nT()',}));
}else if(kw){
$vnode_2=[$createVNode(0,'暂无“'+(kw)+'”数据')];$vnode_1.push($createVNode('span',$quick_ok_2_static_attr,$vnode_2));
}
}else{
$vnode_1.push($createVNode(0,(i18n('sK'))));
}$vnode_0.push($createVNode('div',$quick_ok_0_static_attr,$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        // this.set({
        //     treeView: Const['@:{const#data.source.panel.tree.view}']
        // });
        this['_tT'] = (kw = '') => {
            let source = this['_tU'];
            let searchedList;
            if (kw) {
                searchedList = [];
                let search = (fromList, toList) => {
                    for (let from of fromList) {
                        if (from.name.includes(kw)) {
                            toList.push(from);
                        }
                        else if (from.children) {
                            let newList = [];
                            let oldList = from.children;
                            search(oldList, newList);
                            if (newList.length) {
                                let copied = {
                                    ...from,
                                    expand: true,
                                    children: newList
                                };
                                toList.push(copied);
                            }
                        }
                    }
                };
                search(source, searchedList);
            }
            else {
                searchedList = source;
            }
            this.digest({
                kw,
                source: searchedList
            });
        };
        this['_tV'] = this['_mb'](kw => {
            this['_tT'](kw);
        }, 300);
        let delayUpdate = this['_mb'](this['_tW'], 30);
        let propWatch = ({ '_l3': props }) => {
            //console.log(props);
            if (props['_pk'] ||
                props['_pZ'] ||
                props.bind) {
                let { '_r7': current, '_tS': pElement, '_oB': atRow, '_oC': atCol } = querySelectAndParent();
                delayUpdate(current, pElement, atRow, atCol);
            }
        };
        let normalWatch = this['_mb'](() => {
            let { '_r7': current, '_tS': pElement, '_oB': atRow, '_oC': atCol } = querySelectAndParent();
            this['_tW'](current, pElement, atRow, atCol);
        }, 30);
        State.on('l5', normalWatch);
        State.on('l4', propWatch);
        State.on('l7', normalWatch);
        State.on('l8', normalWatch);
        State.on('m_', normalWatch);
        this.on('destroy', () => {
            State.off('l5', normalWatch);
            State.off('l4', propWatch);
            State.off('l7', normalWatch);
            State.off('l8', normalWatch);
            State.off('m_', normalWatch);
        });
    },
    '_tW'(m, parentElement, atRow, atCol) {
        let { readonly } = State.get('ma');
        //let treeView = Const['@:{const#data.source.panel.tree.view}']
        let canUseBind = false, bindFieldsMap = {}, ddDisabled = readonly;
        let providerOfStageDrop = State.get('mp');
        if (providerOfStageDrop) {
            canUseBind = true;
        }
        let pBind, currentIsDataHod, currentBind, hasDisableOthers, currentDisableOthers;
        if (m) {
            let { props, ctrl } = m;
            if (ctrl.as & enum_1['l6']) {
                currentIsDataHod = 1;
                currentBind = props.bind;
                if (ctrl['_qa']) {
                    hasDisableOthers = 1;
                    let { focusCol, focusRow } = props;
                    currentDisableOthers = ctrl['_qa'](props, focusRow, focusCol);
                }
            }
            let pCtrl, pProps;
            if (parentElement) {
                pCtrl = parentElement.ctrl;
                pProps = parentElement.props;
                pBind = pProps.bind;
            }
            if (pCtrl &&
                (pCtrl.as & enum_1['l6'])) {
                ddDisabled = true;
                if (pCtrl['_qa']) {
                    ddDisabled = pCtrl['_qa'](pProps, atRow, atCol);
                }
            }
            let { bind } = props;
            if (ctrl['_pR']) {
                bind = ctrl['_pR'](props);
            }
            // let map = State.get('@:{global#stage.data.source.list.map}'),
            //     ddSettled;
            if (bind) {
                let { fields, id } = bind;
                canUseBind = true;
                if (id) {
                    if (fields &&
                        fields.length) {
                        bindFieldsMap = toMap(fields, 'id');
                    }
                    // let dest = map[id];
                    // this.set({
                    //     selected: dest ? id : '',
                    //     fields: dest ? dest.fields : [],
                    //     url: dest ? dest.url : ''
                    // });
                    // ddSettled = 1;
                } /*else if (ctrl.as & Enum['@:{enum#as.data.hod}']) {
                    this.set({
                        selected: '',
                        fields: [],
                        url: ''
                    });
                    ddSettled = 1;
                }*/
            }
            // if (!ddSettled &&
            //     ddDisabled &&
            //     pBind) {
            //     let dest = map[pBind.id];
            //     this.set({
            //         selected: dest ? dest.id : '',
            //         fields: dest ? dest.fields : [],
            //         url: dest ? dest.url : ''
            //     });
            // }
        }
        //if (treeView) {
        let pId = ddDisabled && pBind && pBind.id;
        if (!pId &&
            currentIsDataHod &&
            currentBind.id) {
            if (!hasDisableOthers ||
                currentDisableOthers) {
                pId = currentBind.id;
            }
        }
        let source = this.get('source');
        updateTeeViewDataDisabled(source, pId);
        // this.set({
        //     source
        // });
        //}
        //debugger;
        this.digest({
            //ddDisabled,
            source,
            readonly,
            canUseBind,
            bindFieldsMap
        });
    },
    render() {
        let error = State.get('mh');
        let source = State.get('mi');
        //if (Const['@:{const#data.source.panel.tree.view}']) {
        //树形数据需要跳过第一个选择数据源的提示
        //因数据源在其它地方也有使用，所以不能直接删除提示
        source = prepareTreeViewData(source.slice(1));
        //}
        this['_tU'] = source;
        this.set({
            error,
            kw: '',
            source,
            selected: ''
        });
        let { '_r7': current, '_tS': parentElement } = querySelectAndParent();
        this['_tW'](current, parentElement);
    },
    // '@:{update.source}<change>'(e) {
    //     this.digest({
    //         url: e.item.url,
    //         fields: e.item.fields,
    //         selected: e.value
    //     });
    //     let elements = State.get('@:{global#stage.select.elements}');
    //     if (elements &&
    //         elements.length == 1) {
    //         let m = elements[0];
    //         let { props, id, type, ctrl } = m as Report.StageElement;
    //         if ((ctrl.as & Enum['@:{enum#as.data.hod}']) &&
    //             has(props, 'bind')) {
    //             props.bind.id = e.value;
    //             props.bind.url = e.item.url;
    //             if (ctrl['@:{update.props}']) {
    //                 ctrl['@:{update.props}'](props);
    //             }
    //             let n = node(id);
    //             if (n) {
    //                 let vf = Vframe.byNode(n);
    //                 if (vf) {
    //                     vf.invoke('@:{update}', [m]);
    //                 }
    //             }
    //             State.fire('@:{event#stage.select.element.props.change}', {
    //                 '@:{ids}': {
    //                     [id]: 1
    //                 },
    //                 '@:{types}': {
    //                     [type]: 1
    //                 },
    //                 '@:{props}': {
    //                     dataSource: 1
    //                 }
    //             });
    //             DHistory['@:{history#save}'](DHistory['@:{history#element.modified.props}'], StageGeneric['@:{generic#query.element.name}']([m]));
    //         }
    //     }
    // },
    // '@:{drag.field.start}<dragstart>'(e: DragEvent & Magix5.MagixMixedEvent) {
    //     let { params: dragData,
    //         eventTarget,
    //         dataTransfer,
    //         pageX, pageY } = e;
    //     let b = eventTarget.getBoundingClientRect();
    //     State.set({
    //         '@:{global#bind.field.drag.data}': dragData,
    //         '@:{global#bind.field.drag.event.offset}': {
    //             '@:{offset.x}': pageX - b.x,
    //             '@:{offset.y}': pageY - b.y
    //         }
    //     });
    //     dataTransfer.setData('text/plain', '@:{fix.firefox.cursor}');
    //     //dataTransfer.effectAllowed = 'move';
    //     State.fire('@:{event#bind.field.drag.start}');
    // },
    // '@:{drag.field.end}<dragend>'() {
    //     State.set({
    //         '@:{global#bind.field.drag.data}': null,
    //         '@:{global#bind.field.drag.event}': null
    //     });
    //     State.fire('@:{event#bind.field.drag.end}');
    // },
    '_tX<click>'() {
        this['_tT']();
    },
    '_tY<input>'(e) {
        let target = e.eventTarget;
        this['_tV'](target.value.trim());
    },
    //https://github.com/xinglie/report-designer/issues/45
    '_tR<pointerdown,treeitempointerdown>'(e) {
        let { eventTarget, treeDOMNode } = e;
        let target = treeDOMNode || eventTarget;
        let targetBound = target.getBoundingClientRect();
        let scrollNode = this.root;
        let scrollNodeBound = scrollNode.getBoundingClientRect();
        let scrollOffset;
        if (targetBound.y < scrollNodeBound.y) { //目标在滚动节点的上方
            scrollOffset = targetBound.y - scrollNodeBound.y;
        }
        else {
            let maxTargetBottom = targetBound.y + targetBound.height;
            let maxScrollBottom = scrollNodeBound.y + scrollNodeBound.height;
            if (maxTargetBottom > maxScrollBottom) { //目标在滚动节点的下方
                scrollOffset = maxTargetBottom - maxScrollBottom;
            }
        }
        if (scrollOffset) {
            scrollNode.scrollTop += scrollOffset;
        }
    }
});

});