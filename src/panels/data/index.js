/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/data/index",["magix5","../../designer/enum","../../designer/stage-generic","./branch"],(require,exports,module)=>{
require("./branch");
let $quick_gK_static_text;
let $quick_ii_0_static_attr={'class': 'rd-_assets_index_less_-padding-4 rd-_assets_index_less_-unselectable',};
let $quick_ii_1_static_attr={'class': 'rd-_assets_index_less_-background-color-fff rd-_panels_data_index_less_-search-input',};
let $quick_ii_2_static_attr={'class': 'rd-_assets_index_less_-color-999',};
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let enum_1 = require("../../designer/enum");
let stage_generic_1 = require("../../designer/stage-generic");
let { State, View, applyStyle, toMap } = magix_1;
applyStyle("rd-_panels_data_index_less_","\n.rd-_panels_data_index_less_-item-draggable {\nborder:solid 1px #e6e6e6;\nborder-radius:2px;\nmargin:2px 0;\nbackground-color:#fff;\n}\n.rd-_panels_data_index_less_-opacity-40 {\nopacity:0.4;\n}\n.rd-_panels_data_index_less_-branch-title {\nheight:22px;\nline-height:22px;\nborder-radius:2px;\n}\n.rd-_panels_data_index_less_-branch-title:hover {\nbackground:#f0f0f0;\n}\n.rd-_panels_data_index_less_-search-input {\nmargin:-4px -4px 0;\ntop:0;\npadding:4px;\nz-index:2;\n}\n.rd-_panels_data_index_less_-search-highlight {\ncolor:#bd0303;\n}\n.rd-_panels_data_index_less_-search-remove {\nright:8px;\ntop:8px;\nopacity:0.2;\n}\n.rd-_panels_data_index_less_-search-remove:hover {\nopacity:0.5;\n}\n");
let querySelectAndParent = () => {
    let select, parentElement, atRow, atCol;
    let elements = State.get('@:{global#stage.select.elements~rs}');
    if (elements &&
        elements.length == 1) {
        select = elements[0];
        let find = stage_generic_1['@:{generic#query.element.parent~rs}'](select);
        parentElement = find['@:{element~rs}'];
        atRow = find['@:{at.row~rs}'];
        atCol = find['@:{at.col~rs}'];
        if (parentElement) {
            let { props: pProps, ctrl: pCtrl } = parentElement;
            if (pCtrl.as & enum_1['@:{enum#as.data.hod~rs}']) {
                let update = pCtrl['@:{update.props~rs}'];
                if (update) {
                    update(pProps);
                }
            }
        }
    }
    return {
        '@:{select~rs}': select,
        '@:{parent.element~rs}': parentElement,
        '@:{at.row~rs}': atRow,
        '@:{at.col~rs}': atCol
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
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
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
$__line=1;$__art="{{if error}}";$__ctrl="if(error){";
if(error){
$vnode_0.push($createVNode(0,($__line=2,$__art='{{=error.message||error}}',$__ctrl='<%=error.message||error%>',(error.message||error))));
}else{
$vnode_1=[];$__line=5;$__art="{{if canUseBind}}";$__ctrl="if(canUseBind){";
if(canUseBind){
$vnode_2=[$createVNode('input',{'class': 'rd-_assets_index_less_-input rd-_assets_index_less_-position-sticky rd-_assets_index_less_-tag-input rd-_assets_index_less_-wp100','value': ($__line=8,$__art='{{=kw}}',$__ctrl='<%=kw%>',(kw)),'placeholder': '搜索数据源','mx5-input': $viewId+'@:{search.data.source~rs}()',},1,$special_2)];$vnode_3=[$quick_gK_static_text||($quick_gK_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_panels_data_index_less_-search-remove rd-_assets_index_less_-fontsize-14 rd-_assets_index_less_-pa rd-_assets_index_less_-cursor-pointer'+($__line=9,$__art='{{if !kw}}','');$__ctrl='<%if(!kw){%>';if(!kw){;$$_class+=' rd-_assets_index_less_-none'+($__line=9,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('i',{'mx5-click': $viewId+'@:{clear.keyword~rs}()','title': ($__line=9,$__art='{{=i18n(\'@:{lang#remove.keyword~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#remove.keyword~rs}\')%>',(i18n('@:{lang#remove.keyword~rs}'))),'class': $$_class,},$vnode_3));$vnode_1.push($createVNode('div',$quick_ii_1_static_attr,$vnode_2));$__line=11;$__art="{{if source.length}}";$__ctrl="if(source.length){";
if(source.length){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'source,bindFieldsMap,readonly,kw','mx5-view': 'panels/data/branch?list='+($__line=12,$__art='{{#source}}',$__ctrl='<%#source,\'auto_key_source\'%>',$keyOf($refData,source,'auto_key_source'))+'&bindMap='+($__line=12,$__art='{{#bindFieldsMap}}',$__ctrl='<%#bindFieldsMap,\'auto_key_bindFieldsMap\'%>',$keyOf($refData,bindFieldsMap,'auto_key_bindFieldsMap'))+'&readonly='+($__line=12,$__art='{{#readonly}}',$__ctrl='<%#readonly,\'auto_key_readonly\'%>',$keyOf($refData,readonly,'auto_key_readonly'))+'&kw='+($__line=12,$__art='{{#kw}}',$__ctrl='<%#kw,\'auto_key_kw\'%>',$keyOf($refData,kw,'auto_key_kw')),'mx5-treeitempointerdown': $viewId+'@:{fix.drag.clip.bug~rs}()','mx5-contextmenu': $viewId+'@:{prevent~rs}()',}));
}else if(($__line=13,$__art="{{else if kw}}",$__ctrl="else if(kw){"),kw){
$vnode_2=[$createVNode(0,'暂无“'+($__line=14,$__art='{{=kw}}',$__ctrl='<%=kw%>',(kw))+'”数据')];$vnode_1.push($createVNode('span',$quick_ii_2_static_attr,$vnode_2));
}
}else{
$vnode_1.push($createVNode(0,($__line=33,$__art='{{=i18n(\'@:{lang#data.choose.support.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#data.choose.support.element~rs}\')%>',(i18n('@:{lang#data.choose.support.element~rs}')))));
}$vnode_0.push($createVNode('div',$quick_ii_0_static_attr,$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/data/index.html'; throw msg; }  } ,
    init() {
        // this.set({
        //     treeView: Const['@:{const#data.source.panel.tree.view}']
        // });
        this['@:{imme.search~rs}'] = (kw = '') => {
            let source = this['@:{origional.data.source~rs}'];
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
        this['@:{delay.search~rs}'] = this['@:{debounce~rs}'](kw => {
            this['@:{imme.search~rs}'](kw);
        }, 300);
        let delayUpdate = this['@:{debounce~rs}'](this['@:{update.ui~rs}'], 30);
        let propWatch = ({ '@:{props~rs}': props }) => {
            //console.log(props);
            if (props['@:{focus.cell~rs}'] ||
                props['@:{bind~rs}'] ||
                props.bind) {
                let { '@:{select~rs}': current, '@:{parent.element~rs}': pElement, '@:{at.row~rs}': atRow, '@:{at.col~rs}': atCol } = querySelectAndParent();
                delayUpdate(current, pElement, atRow, atCol);
            }
        };
        let normalWatch = this['@:{debounce~rs}'](() => {
            let { '@:{select~rs}': current, '@:{parent.element~rs}': pElement, '@:{at.row~rs}': atRow, '@:{at.col~rs}': atCol } = querySelectAndParent();
            this['@:{update.ui~rs}'](current, pElement, atRow, atCol);
        }, 30);
        State.on('@:{event#stage.select.elements.change~rs}', normalWatch);
        State.on('@:{event#stage.select.element.props.change~rs}', propWatch);
        State.on('@:{event#history.shift.change~rs}', normalWatch);
        State.on('@:{event#stage.page.change~rs}', normalWatch);
        State.on('@:{event#stage.page.and.elements.change~rs}', normalWatch);
        this.on('destroy', () => {
            State.off('@:{event#stage.select.elements.change~rs}', normalWatch);
            State.off('@:{event#stage.select.element.props.change~rs}', propWatch);
            State.off('@:{event#history.shift.change~rs}', normalWatch);
            State.off('@:{event#stage.page.change~rs}', normalWatch);
            State.off('@:{event#stage.page.and.elements.change~rs}', normalWatch);
        });
    },
    '@:{update.ui~rs}'(m, parentElement, atRow, atCol) {
        let { readonly } = State.get('@:{global#stage.page~rs}');
        //let treeView = Const['@:{const#data.source.panel.tree.view}']
        let canUseBind = false, bindFieldsMap = {}, ddDisabled = readonly;
        let providerOfStageDrop = State.get('@:{global#provider.of.stage.drop~rs}');
        if (providerOfStageDrop) {
            canUseBind = true;
        }
        let pBind, currentIsDataHod, currentBind, hasDisableOthers, currentDisableOthers;
        if (m) {
            let { props, ctrl } = m;
            if (ctrl.as & enum_1['@:{enum#as.data.hod~rs}']) {
                currentIsDataHod = 1;
                currentBind = props.bind;
                if (ctrl['@:{disable.other.data.source~rs}']) {
                    hasDisableOthers = 1;
                    let { focusCol, focusRow } = props;
                    currentDisableOthers = ctrl['@:{disable.other.data.source~rs}'](props, focusRow, focusCol);
                }
            }
            let pCtrl, pProps;
            if (parentElement) {
                pCtrl = parentElement.ctrl;
                pProps = parentElement.props;
                pBind = pProps.bind;
            }
            if (pCtrl &&
                (pCtrl.as & enum_1['@:{enum#as.data.hod~rs}'])) {
                ddDisabled = true;
                if (pCtrl['@:{disable.other.data.source~rs}']) {
                    ddDisabled = pCtrl['@:{disable.other.data.source~rs}'](pProps, atRow, atCol);
                }
            }
            let { bind } = props;
            if (ctrl['@:{get.bind.info~rs}']) {
                bind = ctrl['@:{get.bind.info~rs}'](props);
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
        let error = State.get('@:{global#stage.data.source.error~rs}');
        let source = State.get('@:{global#stage.data.source.list~rs}');
        //if (Const['@:{const#data.source.panel.tree.view}']) {
        //树形数据需要跳过第一个选择数据源的提示
        //因数据源在其它地方也有使用，所以不能直接删除提示
        source = prepareTreeViewData(source.slice(1));
        //}
        this['@:{origional.data.source~rs}'] = source;
        this.set({
            error,
            kw: '',
            source,
            selected: ''
        });
        let { '@:{select~rs}': current, '@:{parent.element~rs}': parentElement } = querySelectAndParent();
        this['@:{update.ui~rs}'](current, parentElement);
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
    '@:{clear.keyword~rs}<click>'() {
        this['@:{imme.search~rs}']();
    },
    '@:{search.data.source~rs}<input>'(e) {
        let target = e.eventTarget;
        this['@:{delay.search~rs}'](target.value.trim());
    },
    //https://github.com/xinglie/report-designer/issues/45
    '@:{fix.drag.clip.bug~rs}<pointerdown,treeitempointerdown>'(e) {
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