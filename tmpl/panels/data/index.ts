/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Enum from '../../designer/enum';
import StageGeneric from '../../designer/stage-generic';
let { State, View, applyStyle, toMap } = Magix;
applyStyle('@:./index.less');
let querySelectAndParent = () => {
    let select,
        parentElement,
        atRow,
        atCol;
    let elements = State.get('@:{global#stage.select.elements}');
    if (elements &&
        elements.length == 1) {
        select = elements[0];
        let find = StageGeneric['@:{generic#query.element.parent}'](select);
        parentElement = find['@:{element}'];
        atRow = find['@:{at.row}'];
        atCol = find['@:{at.col}'];
        if (parentElement) {
            let { props: pProps, ctrl: pCtrl } = parentElement;
            if (pCtrl.as & Enum['@:{enum#as.data.hod}']) {
                let update = pCtrl['@:{update.props}'];
                if (update) {
                    update(pProps);
                }
            }
        }
    }
    return {
        '@:{select}': select,
        '@:{parent.element}': parentElement,
        '@:{at.row}': atRow,
        '@:{at.col}': atCol
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
        let viewData = {//一个树形分支的数据
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
                if (sub.disabled) {//如果禁用则折叠
                    sub.expand = false;
                }
            } else {
                updateTeeViewDataDisabled(sub.children, parentBindId);
            }
        }
    }
};
export default View.extend({
    tmpl: '@:index.html',
    init() {
        // this.set({
        //     treeView: Const['@:{const#data.source.panel.tree.view}']
        // });
        this['@:{imme.search}'] = (kw = '') => {
            let source = this['@:{origional.data.source}'];
            let searchedList;
            if (kw) {
                searchedList = [];
                let search = (fromList, toList) => {
                    for (let from of fromList) {
                        if (from.name.includes(kw)) {
                            toList.push(from);
                        } else if (from.children) {
                            let newList = [];
                            let oldList = from.children;
                            search(oldList, newList);
                            if (newList.length) {
                                let copied = {
                                    ...from,
                                    expand: true,//如果节点未命中，子节点命中，则自动展开
                                    children: newList
                                };
                                toList.push(copied);
                            }
                        }
                    }
                };
                search(source, searchedList);
            } else {
                searchedList = source;
            }
            this.digest({
                kw,
                source: searchedList
            });
        };
        this['@:{delay.search}'] = this['@:{debounce}'](kw => {
            this['@:{imme.search}'](kw);
        }, 300);
        let delayUpdate = this['@:{debounce}'](this['@:{update.ui}'], 30);
        let propWatch = ({ '@:{props}': props }) => {
            //console.log(props);
            if (props['@:{focus.cell}'] ||
                props['@:{bind}'] ||
                props.bind) {
                let {
                    '@:{select}': current,
                    '@:{parent.element}': pElement,
                    '@:{at.row}': atRow,
                    '@:{at.col}': atCol
                } = querySelectAndParent();
                delayUpdate(current, pElement, atRow, atCol);
            }
        };
        let normalWatch = this['@:{debounce}'](() => {
            let {
                '@:{select}': current,
                '@:{parent.element}': pElement,
                '@:{at.row}': atRow,
                '@:{at.col}': atCol
            } = querySelectAndParent();
            this['@:{update.ui}'](current, pElement, atRow, atCol);
        }, 30);
        State.on('@:{event#stage.select.elements.change}', normalWatch);
        State.on('@:{event#stage.select.element.props.change}', propWatch);
        State.on('@:{event#history.shift.change}', normalWatch);
        State.on('@:{event#stage.page.change}', normalWatch);
        State.on('@:{event#stage.page.and.elements.change}', normalWatch);
        this.on('destroy', () => {
            State.off('@:{event#stage.select.elements.change}', normalWatch);
            State.off('@:{event#stage.select.element.props.change}', propWatch);
            State.off('@:{event#history.shift.change}', normalWatch);
            State.off('@:{event#stage.page.change}', normalWatch);
            State.off('@:{event#stage.page.and.elements.change}', normalWatch);
        });
    },
    '@:{update.ui}'(m: Report.StageElement,
        parentElement: Report.StageElement,
        atRow: number,
        atCol: number) {
        let { readonly } = State.get<Report.StagePage>('@:{global#stage.page}');
        //let treeView = Const['@:{const#data.source.panel.tree.view}']
        let canUseBind = false,
            bindFieldsMap = {},
            ddDisabled = readonly;
        let providerOfStageDrop = State.get<number>('@:{global#provider.of.stage.drop}');
        if (providerOfStageDrop) {
            canUseBind = true;
        }
        let pBind,
            currentIsDataHod,
            currentBind,
            hasDisableOthers,
            currentDisableOthers;
        if (m) {
            let { props, ctrl } = m;
            if (ctrl.as & Enum['@:{enum#as.data.hod}']) {
                currentIsDataHod = 1;
                currentBind = props.bind;
                if (ctrl['@:{disable.other.data.source}']) {
                    hasDisableOthers = 1;
                    let { focusCol, focusRow } = props;
                    currentDisableOthers = ctrl['@:{disable.other.data.source}'](props, focusRow, focusCol);
                }
            }
            let pCtrl: Report.StageElementCtrl,
                pProps: Report.StageElementProps;
            if (parentElement) {
                pCtrl = parentElement.ctrl;
                pProps = parentElement.props;
                pBind = pProps.bind;
            }
            if (pCtrl &&
                (pCtrl.as & Enum['@:{enum#as.data.hod}'])) {
                ddDisabled = true;
                if (pCtrl['@:{disable.other.data.source}']) {
                    ddDisabled = pCtrl['@:{disable.other.data.source}'](pProps, atRow, atCol);
                }
            }
            let { bind } = props;
            if (ctrl['@:{get.bind.info}']) {
                bind = ctrl['@:{get.bind.info}'](props);
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
        let error = State.get('@:{global#stage.data.source.error}');
        let source = State.get('@:{global#stage.data.source.list}');
        //if (Const['@:{const#data.source.panel.tree.view}']) {
        //树形数据需要跳过第一个选择数据源的提示
        //因数据源在其它地方也有使用，所以不能直接删除提示
        source = prepareTreeViewData(source.slice(1));
        //}
        this['@:{origional.data.source}'] = source;
        this.set({
            error,
            kw: '',
            source,
            selected: ''
        });
        let {
            '@:{select}': current,
            '@:{parent.element}': parentElement
        } = querySelectAndParent();
        this['@:{update.ui}'](current, parentElement);
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
    '@:{clear.keyword}<click>'() {
        this['@:{imme.search}']();
    },
    '@:{search.data.source}<input>'(e: Magix5.MagixKeyboardEvent) {
        let target = e.eventTarget as HTMLInputElement;
        this['@:{delay.search}'](target.value.trim());
    },
    //https://github.com/xinglie/report-designer/issues/45
    '@:{fix.drag.clip.bug}<pointerdown,treeitempointerdown>'(e: Magix5.MagixMouseEvent & {
        treeDOMNode: HTMLElement
    }) {
        let { eventTarget, treeDOMNode } = e;
        let target = treeDOMNode || eventTarget;
        let targetBound = target.getBoundingClientRect();
        let scrollNode = this.root;
        let scrollNodeBound = scrollNode.getBoundingClientRect();
        let scrollOffset;
        if (targetBound.y < scrollNodeBound.y) {//目标在滚动节点的上方
            scrollOffset = targetBound.y - scrollNodeBound.y;
        } else {
            let maxTargetBottom = targetBound.y + targetBound.height;
            let maxScrollBottom = scrollNodeBound.y + scrollNodeBound.height
            if (maxTargetBottom > maxScrollBottom) {//目标在滚动节点的下方
                scrollOffset = maxTargetBottom - maxScrollBottom;
            }
        }
        if (scrollOffset) {
            scrollNode.scrollTop += scrollOffset;
        }
    }
});