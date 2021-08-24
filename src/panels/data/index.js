/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/data/index",["51","../../50/enum","../../50/5q","./branch"],(require,exports,module)=>{
require("./branch");
let $quick_gY_static_text;
let $quick_iw_0_static_attr={'class': 'rd-g3 rd-ir',};
let $quick_iw_1_static_attr={'class': 'rd-gM rd-l8',};
let $quick_iw_2_static_attr={'class': 'rd-hX',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let enum_1 = require("../../50/enum");
let stage_generic_1 = require("../../50/5q");
let { State, View, applyStyle, toMap } = magix_1;
applyStyle("rd-gL",".rd-l5{background-color:#fff;border:1px solid #e6e6e6;border-radius:2px;margin:2px 0}.rd-l6{opacity:.4}.rd-l7{border-radius:2px;height:22px;line-height:22px}.rd-l7:hover{background:#f0f0f0}.rd-l8{margin:-4px -4px 0;padding:4px;top:0;z-index:2}.rd-l9{color:#bd0303}.rd-m_{opacity:.2;right:8px;top:8px}.rd-m_:hover{opacity:.5}");
let querySelectAndParent = () => {
    let select, parentElement, atRow, atCol;
    let elements = State.get('gd');
    if (elements &&
        elements.length == 1) {
        select = elements[0];
        let find = stage_generic_1['gq'](select);
        parentElement = find['_iP'];
        atRow = find['_iQ'];
        atCol = find['_iR'];
        if (parentElement) {
            let { props: pProps, ctrl: pCtrl } = parentElement;
            if (pCtrl.as & enum_1['gh']) {
                let update = pCtrl['_he'];
                if (update) {
                    update(pProps);
                }
            }
        }
    }
    return {
        '_ml': select,
        '_n7': parentElement,
        '_iQ': atRow,
        '_iR': atCol
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
$vnode_2=[$createVNode('input',{'class': 'rd-gN rd-gf rd-gg rd-he','value': (kw),'placeholder': '搜索数据源','mx5-input': $viewId+'_oc()',},1,$special_2)];$vnode_3=[$quick_gY_static_text||($quick_gY_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-m_ rd-h7 rd-gV rd-hw';if(!kw){;$$_class+=' rd-g0';};$vnode_2.push($createVNode('i',{'mx5-click': $viewId+'_ob()','title': (i18n('or')),'class': $$_class,},$vnode_3));$vnode_1.push($createVNode('div',$quick_iw_1_static_attr,$vnode_2));
if(source.length){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'source,bindFieldsMap,readonly,kw','mx5-view': '5r/data/branch?list='+$keyOf($refData,source,'eD')+'&bindMap='+$keyOf($refData,bindFieldsMap,'eE')+'&readonly='+$keyOf($refData,readonly,'eF')+'&kw='+$keyOf($refData,kw,'eG'),'mx5-treeitempointerdown': $viewId+'_n6()','mx5-contextmenu': $viewId+'_h6()',}));
}else if(kw){
$vnode_2=[$createVNode(0,'暂无“'+(kw)+'”数据')];$vnode_1.push($createVNode('span',$quick_iw_2_static_attr,$vnode_2));
}
}else{
$vnode_1.push($createVNode(0,(i18n('mV'))));
}$vnode_0.push($createVNode('div',$quick_iw_0_static_attr,$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        // this.set({
        //     treeView: Const['@:{const#data.source.panel.tree.view}']
        // });
        this['_n8'] = (kw = '') => {
            let source = this['_n9'];
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
        this['_o_'] = this['_gn'](kw => {
            this['_n8'](kw);
        }, 300);
        let delayUpdate = this['_gn'](this['_oa'], 30);
        let propWatch = ({ '_ge': props }) => {
            //console.log(props);
            if (props['_jz'] ||
                props['_kd'] ||
                props.bind) {
                let { '_ml': current, '_n7': pElement, '_iQ': atRow, '_iR': atCol } = querySelectAndParent();
                delayUpdate(current, pElement, atRow, atCol);
            }
        };
        let normalWatch = this['_gn'](() => {
            let { '_ml': current, '_n7': pElement, '_iQ': atRow, '_iR': atCol } = querySelectAndParent();
            this['_oa'](current, pElement, atRow, atCol);
        }, 30);
        State.on('gg', normalWatch);
        State.on('gf', propWatch);
        State.on('gi', normalWatch);
        State.on('gj', normalWatch);
        State.on('gl', normalWatch);
        this.on('destroy', () => {
            State.off('gg', normalWatch);
            State.off('gf', propWatch);
            State.off('gi', normalWatch);
            State.off('gj', normalWatch);
            State.off('gl', normalWatch);
        });
    },
    '_oa'(m, parentElement, atRow, atCol) {
        let { readonly } = State.get('gm');
        //let treeView = Const['@:{const#data.source.panel.tree.view}']
        let canUseBind = false, bindFieldsMap = {}, ddDisabled = readonly;
        let providerOfStageDrop = State.get('gB');
        if (providerOfStageDrop) {
            canUseBind = true;
        }
        let pBind, currentIsDataHod, currentBind, hasDisableOthers, currentDisableOthers;
        if (m) {
            let { props, ctrl } = m;
            if (ctrl.as & enum_1['gh']) {
                currentIsDataHod = 1;
                currentBind = props.bind;
                if (ctrl['_kp']) {
                    hasDisableOthers = 1;
                    let { focusCol, focusRow } = props;
                    currentDisableOthers = ctrl['_kp'](props, focusRow, focusCol);
                }
            }
            let pCtrl, pProps;
            if (parentElement) {
                pCtrl = parentElement.ctrl;
                pProps = parentElement.props;
                pBind = pProps.bind;
            }
            if (pCtrl &&
                (pCtrl.as & enum_1['gh'])) {
                ddDisabled = true;
                if (pCtrl['_kp']) {
                    ddDisabled = pCtrl['_kp'](pProps, atRow, atCol);
                }
            }
            let { bind } = props;
            if (ctrl['_j6']) {
                bind = ctrl['_j6'](props);
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
        let error = State.get('gt');
        let source = State.get('gu');
        //if (Const['@:{const#data.source.panel.tree.view}']) {
        //树形数据需要跳过第一个选择数据源的提示
        //因数据源在其它地方也有使用，所以不能直接删除提示
        source = prepareTreeViewData(source.slice(1));
        //}
        this['_n9'] = source;
        this.set({
            error,
            kw: '',
            source,
            selected: ''
        });
        let { '_ml': current, '_n7': parentElement } = querySelectAndParent();
        this['_oa'](current, parentElement);
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
    '_ob<click>'() {
        this['_n8']();
    },
    '_oc<input>'(e) {
        let target = e.eventTarget;
        this['_o_'](target.value.trim());
    },
    //https://github.com/xinglie/report-designer/issues/45
    '_n6<pointerdown,treeitempointerdown>'(e) {
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