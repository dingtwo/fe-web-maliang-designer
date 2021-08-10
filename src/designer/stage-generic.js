/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/stage-generic",["magix5","../i18n/index","./const","./stage-selection","./transform","./history","./enum"],(require,exports,module)=>{


let magix_1 = require("magix5");
let index_1 = require("../i18n/index");
let const_1 = require("./const");
let stage_selection_1 = require("./stage-selection");
let transform_1 = require("./transform");
let history_1 = require("./history");
let enum_1 = require("./enum");
let { node, State, toMap, Vframe, has } = magix_1;
let MaxNum = Number.MAX_VALUE;
let { max, min, abs } = Math;
let minPxUnit = 1;
let defaultPageProps;
let ScrollIntoView = (id, scrollerNode, count) => {
    if (!count)
        count = 1;
    if (count > 5) {
        return;
    }
    let n = node(scrollerNode ? id : '_rdm_' + id);
    if (!n) {
        setTimeout(ScrollIntoView, 20, id, scrollerNode, count++);
        return;
    }
    //console.log('count', count);
    let scroller = scrollerNode || node('_rd_stage');
    let rect = scroller.getBoundingClientRect();
    let rect1 = {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height
    };
    rect = n.getBoundingClientRect();
    let rect2 = {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height
    };
    if (!transform_1["@:{transform#rect.intersect~rs}"](rect1, rect2, true)) {
        let offsetY = scroller.clientHeight / 3;
        let offsetX = scroller.clientWidth / 3;
        let toLeft = rect2.x + scroller.scrollLeft - rect1.x - offsetX;
        let toTop = rect2.y + scroller.scrollTop - rect1.y - offsetY;
        let maxTop = scroller.scrollHeight - scroller.clientHeight;
        let maxLeft = scroller.scrollWidth - scroller.clientWidth;
        if (toLeft < 0) {
            toLeft = 0;
        }
        else if (toLeft > maxLeft) {
            toLeft = maxLeft;
        }
        if (toTop < 0) {
            toTop = 0;
        }
        else if (toTop > maxTop) {
            toTop = maxTop;
        }
        if (scroller.scrollTop != toTop) {
            scroller.scrollTop = toTop;
        }
        if (scroller.scrollLeft != toLeft) {
            scroller.scrollLeft = toLeft;
        }
    }
};
let AllElementsMap, AllElementsList, AllStageElementsMap, AllElementsParentHod;
let ResetAllCache = () => {
    if (AllElementsList) {
        console.log('reset all cache');
        AllElementsList = 0;
        AllElementsMap = 0;
        AllStageElementsMap = 0;
        AllElementsParentHod = 0;
    }
};
let addSizesMap = (sizesMap, h, size, start, end) => {
    if (!sizesMap[size]) {
        sizesMap[size] = {};
    }
    let m = sizesMap[size];
    let beginKey = h ? '@:{left~rs}' : '@:{top~rs}', endKey = h ? '@:{right~rs}' : '@:{bottom~rs}';
    if (m[beginKey] == null) {
        m[beginKey] = start;
        m[endKey] = end;
    }
    else {
        m[beginKey] = min(start, m[beginKey]);
        m[endKey] = max(end, m[endKey]);
    }
};
module.exports= {
    '@:{generic#scroll.into.view~rs}': ScrollIntoView,
    '@:{generic#reset.all.cache~rs}': ResetAllCache,
    /**
     * 安装监听器
     */
    '@:{generic#setup.all.elements.cache.monitor~rs}'() {
        State.on('@:{event#stage.elements.change~rs}', ResetAllCache);
        State.on('@:{event#stage.page.and.elements.change~rs}', ResetAllCache);
        State.on('@:{event#history.shift.change~rs}', ResetAllCache);
    },
    /**
     * 关闭监听器
     */
    '@:{generic#teardown.all.elements.cache.monitor~rs}'() {
        ResetAllCache();
        State.off('@:{event#stage.elements.change~rs}', ResetAllCache);
        State.off('@:{event#stage.page.and.elements.change~rs}', ResetAllCache);
        State.off('@:{event#history.shift.change~rs}', ResetAllCache);
    },
    /**
     * 缩放元素
     * @param props 缩放属性
     * @param ctrl 缩放控制对象
     * @param step 缩放比例
     * @param updateProps 是否更新其它属性
     */
    // '@:{generic#scale.element}'(props: Report.StageElementProps,
    //     ctrl: Report.StageElementCtrl,
    //     step: number,
    //     updateProps?: number) {
    //     let scaled = updateProps;
    //     if (ctrl['@:{scale.props}']) {
    //         scaled = 1;
    //         for (let s of ctrl['@:{scale.props}']) {
    //             if (type(s) == 'Function') {
    //                 s(props, step);
    //             } else {
    //                 props[s] *= step;
    //             }
    //         }
    //     }
    //     if (scaled &&
    //         ctrl['@:{update.props}']) {
    //         ctrl['@:{update.props}'](props);
    //     }
    // },
    /**
     * 获取元素坐标及尺寸信息，用于拉框选择
     * @param elements 待获取位置信息的元素列表
     */
    '@:{generic#get.elements.location~rs}'(elements) {
        let locations = [];
        for (let e of elements) {
            let { props } = e;
            let { rotate, x, y, width, height, readonly } = props;
            if (const_1['@:{const#support.readonly.element~rs}'] && readonly)
                continue;
            let rect = {
                x: const_1['@:{const#to.px~rs}'](x),
                y: const_1['@:{const#to.px~rs}'](y),
                width: const_1['@:{const#to.px~rs}'](width),
                height: const_1['@:{const#to.px~rs}'](height),
                rotate
            };
            let tsed = transform_1["@:{transform#rotate.rect~rs}"](rect);
            let [lt, rt, rb, lb] = tsed['@:{point~rs}'];
            // let tl = lt, tt = lt, tr = lt, tb = lt;
            // for (let p of [rt, lb, rb]) {
            //     if (p.x < tl.x) {
            //         tl = p;
            //     }
            //     if (p.x > tr.x) {
            //         tr = p;
            //     }
            //     if (p.y < tt.y) {
            //         tt = p;
            //     }
            //     if (p.y > tb.y) {
            //         tb = p;
            //     }
            // }
            locations.push({
                '@:{element~rs}': e,
                // left: tl,
                // top: tt,
                // right: tr,
                // bottom: tb,
                // '@:{width}': tsed.width,
                // '@:{height}': tsed.height,
                // '@:{left}': tsed.left,
                // '@:{top}': tsed.top,
                '@:{points~rs}': [lt, rt, lb, rb],
                '@:{lines~rs}': [[lt, rt],
                    [rt, rb],
                    [rb, lb],
                    [lb, lt]]
            });
        }
        return locations;
    },
    /**
     * 获取相交的元素
     * @param elementLocations 元素位置
     * @param rect 当前拉框的矩形
     * @param selectElements 拉框前已经选中的元素
     * @param hods 容器集合
     * @param selectElementsIdMap 拉框前选中元素的id对象
     */
    '@:{generic#get.intersect.elements~rs}'(elementLocations, rect, selectElements, hods, selectElementsIdMap) {
        let selected = [], find, ids = [], topHods = {}, rectLines = [[{
                    x: rect.x,
                    y: rect.y
                }, {
                    x: rect.x + rect.width,
                    y: rect.y
                }], [{
                    x: rect.x + rect.width,
                    y: rect.y
                }, {
                    x: rect.x + rect.width,
                    y: rect.y + rect.height
                }], [{
                    x: rect.x + rect.width,
                    y: rect.y + rect.height
                }, {
                    x: rect.x,
                    y: rect.y + rect.height
                }], [{
                    x: rect.x,
                    y: rect.y + rect.height
                }, {
                    x: rect.x,
                    y: rect.y
                }]], interesctElements = {}, deSelectedIdMap = {};
        for (let e of elementLocations) {
            find = 0;
            for (let p of e['@:{points~rs}']) {
                if (p.x >= rect.x &&
                    p.y >= rect.y &&
                    p.x <= (rect.x + rect.width) &&
                    p.y <= (rect.y + rect.height)) {
                    let m = e['@:{element~rs}'];
                    if (selectElementsIdMap[m.id]) {
                        deSelectedIdMap[m.id] = 1;
                    }
                    else {
                        selected.push(m);
                        interesctElements[m.id] = 1;
                        ids.push(m.id);
                        if (hods && hods[m.id]) {
                            topHods[hods[m.id]] = 1;
                        }
                    }
                    find = 1;
                    break;
                }
            }
            if (!find) {
                for (let l of e['@:{lines~rs}']) {
                    for (let rl of rectLines) {
                        if (transform_1["@:{transform#is.line.cross~rs}"](l, rl)) {
                            find = 1;
                            let m = e['@:{element~rs}'];
                            if (selectElementsIdMap[m.id]) {
                                deSelectedIdMap[m.id] = 1;
                            }
                            else {
                                ids.push(m.id);
                                interesctElements[m.id] = 1;
                                if (hods && hods[m.id]) {
                                    topHods[hods[m.id]] = 1;
                                }
                                selected.push(m);
                            }
                            break;
                        }
                    }
                    if (find) {
                        break;
                    }
                }
            }
        }
        if (hods &&
            selectElements) {
            for (let se of selectElements) {
                if (!interesctElements[se.id] &&
                    !deSelectedIdMap[se.id] &&
                    !topHods[se.id] && ( //之前选择的元素是容器不能包含当前元素，需要取消
                !hods[se.id] || //之前选择的元素不在容器里
                    !interesctElements[hods[se.id]])) { //之前选择的元素不在当前拉框范围内
                    ids.push(se.id);
                    selected.push(se);
                }
            }
        }
        return {
            '@:{selected~rs}': selected,
            '@:{ids~rs}': ids.join(',')
        };
    },
    /**
     * 获取所有元素及map对象
     */
    '@:{generic#get.all.elements.and.map~rs}'() {
        if (!AllElementsMap) {
            console.log('rebuild');
            AllElementsMap = {};
            AllStageElementsMap = {};
            AllElementsList = [];
            AllElementsParentHod = {};
            let stageElements = State.get('@:{global#stage.elements~rs}');
            let walk = (es, fromHod) => {
                for (let e of es) {
                    AllElementsMap[e.id] = e;
                    AllElementsList.push(e);
                    if (!fromHod) {
                        AllStageElementsMap[e.id] = e;
                    }
                    else {
                        AllElementsParentHod[e.id] = fromHod;
                    }
                    if (e.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                        for (let row of e.props.rows) {
                            for (let col of row.cols) {
                                if (col.elements) {
                                    walk(col.elements, e.id);
                                }
                            }
                        }
                    }
                }
            };
            walk(stageElements);
        }
        return {
            '@:{generic.all#map~rs}': AllElementsMap,
            '@:{generic.all#stage.elements.map~rs}': AllStageElementsMap,
            '@:{generic.all#elements~rs}': AllElementsList,
            '@:{generic.all#element.hods~rs}': AllElementsParentHod
        };
    },
    /**
     * 获取指定类型的元素
     * @param elements 元素集合
     * @param type 指定的类型
     */
    '@:{generic#filter.elements~rs}'(elements, type, readonly) {
        let newList = [];
        for (let e of elements) {
            if (e.type == type ||
                (readonly && !e.props.readonly)) {
                newList.push(e);
            }
        }
        return newList;
    },
    /**
     * 查询是否处于同一个分组
     * @param elements 元素集合
     */
    // '@:{generic#query.elements.same.group}'(elements: Report.StageElement[]): boolean | number {
    //     let groups = State.get('@:{global#stage.elements.groups}');
    //     let elementsMap,
    //         same = 1,
    //         grouped;
    //     for (let e of elements) {
    //         let list = groups[e.id];
    //         if (list) {
    //             if (!elementsMap) {
    //                 elementsMap = toMap(elements, 'id');
    //                 grouped = {};
    //             }
    //             for (let g of list) {
    //                 if (!elementsMap[g]) {
    //                     same = 0;
    //                     break;
    //                 }
    //                 grouped[g] = 1;
    //             }
    //         } else if (grouped &&
    //             !grouped[e.id]) {
    //             same = 0
    //         }
    //         if (!same) {
    //             break;
    //         }
    //     }
    //     return same;
    // },
    /**
     * 内部用于删除元素的方法，不触发事件
     * @param idMap id对象
     */
    '@:{generic#internal.delete.element.by.id.map.silent~rs}'(idMap) {
        let stageElements = State.get('@:{global#stage.elements~rs}'), deleted = 0;
        ;
        let walk = cs => {
            for (let i = cs.length; i--;) {
                let e = cs[i];
                if (idMap[e.id]) {
                    cs.splice(i, 1);
                    deleted = 1;
                }
                else if (e.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                    for (let row of e.props.rows) {
                        for (let col of row.cols) {
                            if (col.elements) {
                                walk(col.elements);
                            }
                        }
                    }
                }
            }
        };
        walk(stageElements);
        if (deleted) {
            ResetAllCache();
        }
    },
    /**
     * 查询组合状态
     */
    '@:{generic#query.group.state~rs}'() {
        let selectedElements = State.get('@:{global#stage.select.elements~rs}');
        let selectedElementsMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
        let stageElements = State.get('@:{global#stage.elements~rs}');
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        if (flowProvider) {
            selectedElements = flowProvider["@:{flow.provider#remove.connector.from.elements~rs}"](selectedElements, 1);
        }
        /**
         * 查找容器元素，跨设计区的元素不支持组合，考虑这样的场景：
         * 容器内的元素与容器外的元素组合，如果移除容器，那么容器外的元素如何移动？
         * 如果容器外的元素与容器一起选中移动，容器内的元素如何移动？
         */
        let findFirstCollectionId, findDifferetId;
        let walk = (cs, rootId) => {
            for (let e of cs) {
                if (selectedElementsMap[e.id]) {
                    if (!findFirstCollectionId) {
                        findFirstCollectionId = rootId;
                    }
                    if (rootId != findFirstCollectionId) {
                        findDifferetId = 1;
                        break;
                    }
                }
                if (e.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                    for (let row of e.props.rows) {
                        for (let col of row.cols) {
                            if (col.elements) {
                                walk(col.elements, e.id);
                            }
                            if (findDifferetId) {
                                break;
                            }
                        }
                        if (findDifferetId) {
                            break;
                        }
                    }
                }
            }
        };
        walk(stageElements, 1);
        let groups = State.get('@:{global#stage.elements.groups~rs}');
        let canGroup = false, canUngroup = false, findGroupList;
        for (let e of selectedElements) {
            if (groups[e.id]) {
                canUngroup = true;
                findGroupList = groups[e.id];
                break;
            }
        }
        if (!findDifferetId) {
            if (canUngroup) {
                let findGroupMap = toMap(findGroupList);
                for (let e of selectedElements) {
                    if (!findGroupMap[e.id]) {
                        canGroup = true;
                        break;
                    }
                }
            }
            else {
                canGroup = selectedElements.length > 1;
            }
        }
        return {
            //'@:{selected.length}': selectedElements.length,
            '@:{can.group~rs}': canGroup,
            '@:{can.ungroup~rs}': canUngroup
        };
    },
    /**
     * 查询锁定状态
     */
    '@:{generic#query.lock.state~rs}'() {
        let canLock = false, canUnlock = false;
        let selectedElements = State.get('@:{global#stage.select.elements~rs}');
        for (let { props } of selectedElements) {
            if (props.locked) {
                canUnlock = true;
            }
            else {
                canLock = true;
            }
            if (canUnlock && canLock) {
                break;
            }
        }
        return {
            '@:{can.lock~rs}': canLock,
            '@:{can.unlock~rs}': canUnlock
        };
    },
    /**
     * 锁定或解锁选中的元素
     * @param unlock 是否为解锁
     */
    '@:{generic#lock.select.elements~rs}'(unlock, shortcuts) {
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let changed, to = !unlock, ids = {}, types = {}, changedProps = [];
        if (shortcuts) {
            let { '@:{can.lock~rs}': canLock, '@:{can.unlock~rs}': canUnlock } = this['@:{generic#query.lock.state~rs}']();
            if (unlock &&
                !canUnlock) {
                to = !to;
            }
            else if (!unlock &&
                !canLock) {
                to = !to;
            }
        }
        for (let e of selectElements) {
            let { props, id } = e;
            if (props.locked != to) {
                ids[id] = 1;
                types[e.type] = 1;
                props.locked = to;
                changedProps.push(e);
                changed = 1;
                let n = node(id);
                let vf = Vframe.byNode(n);
                if (vf) {
                    vf.invoke('@:{update~rs}', [e]);
                }
            }
        }
        if (changed) {
            State.fire('@:{event#stage.select.element.props.change~rs}', {
                '@:{ids~rs}': ids,
                '@:{types~rs}': types,
                '@:{props~rs}': {
                    locked: 1
                }
            });
            let ename = this['@:{generic#query.element.name~rs}'](changedProps);
            history_1["@:{history#save~rs}"](to ? history_1['@:{history#element.locked~rs}'] : history_1['@:{history#element.unlocked~rs}'], ename);
        }
    },
    /**
     * 组合或取消组合选中的元素
     * @param ungroup 是否为取消组合
     */
    '@:{generic#group.select.elements~rs}'(ungroup) {
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        if (flowProvider) {
            selectElements = flowProvider["@:{flow.provider#add.connector.from.elements~rs}"](selectElements);
        }
        let groups = State.get('@:{global#stage.elements.groups~rs}');
        let newGroup = [], selectedIds = {};
        for (let { id } of selectElements) {
            selectedIds[id] = 1;
            let oldList = groups[id];
            if (oldList) {
                for (let e of oldList) {
                    if (newGroup.indexOf(e) == -1) {
                        newGroup.push(e);
                    }
                }
            }
            else if (newGroup.indexOf(id) == -1) {
                newGroup.push(id);
            }
        }
        if (ungroup) {
            this['@:{generic#remove.grouped.element.by.ids~rs}'](selectedIds);
        }
        else {
            for (let n of newGroup) {
                groups[n] = newGroup;
            }
        }
        State.fire('@:{event#stage.elements.change~rs}');
        history_1["@:{history#save~rs}"](ungroup ? history_1['@:{history#element.ungrouped~rs}'] : history_1['@:{history#element.grouped~rs}']);
    },
    /**
     * 查询元素中的容器元素
     * @param elements 元素集合
     */
    '@:{generic#find.hod.sub.elements.map~rs}'(elements) {
        let map = {}, hods = [];
        for (let e of elements) {
            if (e.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                hods.push(e);
            }
        }
        let walk = (children, hodId) => {
            for (let c of children) {
                if (hodId) {
                    map[c.id] = hodId;
                }
                if (c.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                    for (let r of c.props.rows) {
                        for (let d of r.cols) {
                            if (d.elements) {
                                walk(d.elements, hodId || c.id);
                            }
                        }
                    }
                }
            }
        };
        walk(hods);
        return map;
    },
    /**
     * 获取元素所属的集合
     * @param element 待查询的元素
     */
    '@:{generic#find.element.owner.collection~rs}'(element) {
        let collection = State.get('@:{global#stage.elements~rs}'), find, findCollection;
        let walk = coll => {
            for (let e of coll) {
                if (e.id == element.id) {
                    find = 1;
                    findCollection = coll;
                    break;
                }
                if (e.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                    for (let row of e.props.rows) {
                        for (let col of row.cols) {
                            if (col.elements) {
                                walk(col.elements);
                            }
                            if (find) {
                                break;
                            }
                        }
                        if (find) {
                            break;
                        }
                    }
                }
            }
        };
        walk(collection);
        return findCollection;
    },
    //查询所有容器id
    // '@:{find.all.hod.ids}'() {
    //     let collection = State.get('@:{global#stage.elements}'),
    //         ids = [];
    //     let walk = coll => {
    //         for (let e of coll) {
    //             if (e.ctrl.as & Enum['@:{enum#as.hod}']) {
    //                 let ri = 0;
    //                 for (let row of e.props.rows) {
    //                     let ci = 0;
    //                     for (let col of row.cols) {
    //                         ids.push(`hm_${e.id}_${ri}_${ci}`);
    //                         if (col.elements) {
    //                             walk(col.elements);
    //                         }
    //                         ci++;
    //                     }
    //                     ri++;
    //                 }
    //             }
    //         }
    //     }
    //     walk(collection);
    //     return ids;
    // },
    //
    /**
     * 查询某种元素已在编辑区的列表
     * @param ctrl 元素控制对象
     */
    '@:{generic#query.element.added.list~rs}'(ctrl) {
        let all = this["@:{generic#get.all.elements.and.map~rs}"]();
        let allElements = all["@:{generic.all#elements~rs}"];
        return this["@:{generic#filter.elements~rs}"](allElements, ctrl.type);
    },
    /**
     * 过滤列表中包含集合的元素
     * @param list 元素集合
     * @param destId 元素id
     */
    // '@:{generic#filter.list.own.collection}'(list: Report.StageElement[],
    //     destId: string | number): Report.StageElement[] {
    //     let newList = [],
    //         find;
    //     let findSubsHasCollection = dest => {
    //         if (!find) {
    //             if (dest.ctrl.as & Enum['@:{enum#as.hod}']) {
    //                 let { id, props } = dest;
    //                 if (id == destId) {
    //                     find = 1
    //                 } else {
    //                     let { rows } = props;
    //                     for (let row of rows) {
    //                         for (let col of row.cols) {
    //                             if (col.elements) {
    //                                 for (let e of col.elements) {
    //                                     findSubsHasCollection(e);
    //                                 }
    //                             }
    //                         }
    //                         if (find) {
    //                             break;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     };
    //     for (let copy of list) {
    //         find = 0;
    //         findSubsHasCollection(copy);
    //         if (!find) {
    //             newList.push(copy);
    //         }
    //     }
    //     return newList;
    // },
    /**
     * 根据id删除组合中的元素
     * @param ids id对象
     */
    '@:{generic#remove.grouped.element.by.ids~rs}'(ids) {
        let groups = State.get('@:{global#stage.elements.groups~rs}');
        for (let id in ids) {
            let list = groups[id], findIndex; //= list.indexOf(id);
            // list.splice(findIndex, 1);
            // if (list.length == 1) {
            //     delete groups[list[0]];
            // }
            //delete groups[id];
            if (list) {
                delete groups[id];
                for (let g in groups) {
                    list = groups[g];
                    findIndex = list.indexOf(id);
                    if (findIndex > -1) {
                        list.splice(findIndex, 1);
                    }
                    if (list.length == 1) {
                        delete groups[list[0]];
                    }
                }
            }
        }
    },
    /**
     * 删除选中元素
     * @param element 如果传入某个元素，则只删除该元素
     */
    '@:{generic#delete.select.elements~rs}'(element, extra) {
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let hasSelected = selectElements.length;
        let selectElementsMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
        if (element) {
            hasSelected = 1;
            selectElementsMap = {
                [element.id]: 1
            };
        }
        if (hasSelected) {
            let stageElements = State.get('@:{global#stage.elements~rs}');
            let update, ids = {}, removedElements = [];
            let walk = es => {
                for (let i = es.length; i--;) {
                    let e = es[i];
                    if (selectElementsMap[e.id]) {
                        update = 1;
                        ids[e.id] = 1;
                        es.splice(i, 1);
                        removedElements.push(e);
                    }
                    if (e.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                        for (let row of e.props.rows) {
                            for (let col of row.cols) {
                                if (col.elements) {
                                    walk(col.elements);
                                }
                            }
                        }
                    }
                }
            };
            walk(stageElements);
            if (update) {
                this['@:{generic#remove.grouped.element.by.ids~rs}'](ids);
                if (element) {
                    stage_selection_1['@:{selection#remove~rs}'](element);
                }
                else {
                    stage_selection_1['@:{selection#set~rs}']();
                }
                State.fire('@:{event#stage.elements.change~rs}', {
                    '@:{type~rs}': '@:{remove~rs}',
                    '@:{extra~rs}': extra,
                    '@:{changed.ids~rs}': ids
                });
                history_1["@:{history#save~rs}"](history_1['@:{history#element.removed~rs}'], this['@:{generic#query.element.name~rs}'](removedElements));
            }
        }
    },
    /**
     * 查询是否支持清空设计区
     */
    '@:{generic#query.can.clear.stage~rs}'() {
        let xLines = State.get('@:{global#stage.x.help.lines~rs}');
        let yLines = State.get('@:{global#stage.y.help.lines~rs}');
        let stageElements = State.get('@:{global#stage.elements~rs}');
        let elements = const_1['@:{const#support.readonly.element~rs}'] ? this['@:{generic#query.all.without.readonly.elements~rs}'](stageElements, 1) : stageElements;
        return xLines.length + yLines.length + elements.length > 0;
    },
    /**
     * 查询是否支持新建
     */
    '@:{generic#query.can.create.new.page~rs}'() {
        let xLines = State.get('@:{global#stage.x.help.lines~rs}');
        let yLines = State.get('@:{global#stage.y.help.lines~rs}');
        let elements = State.get('@:{global#stage.elements~rs}');
        let canCreate = xLines.length + yLines.length + elements.length > 0;
        if (!canCreate) {
            let pc = State.get('@:{global#stage.page.ctrl~rs}');
            if (!defaultPageProps) {
                defaultPageProps = pc['@:{get.props~rs}']();
            }
            let page = State.get('@:{global#stage.page~rs}');
            for (let { key, json } of pc.props) {
                if (json &&
                    page[key] != defaultPageProps[key]) {
                    canCreate = true;
                    break;
                }
            }
        }
        return canCreate;
    },
    /**
     * 查询所有非只读元素
     * @param elements 元素列表
     * @param deep 是否深度查询
     */
    '@:{generic#query.all.without.readonly.elements~rs}'(elements, deep) {
        let newElements = [];
        let walk = (elements, filters) => {
            for (let e of elements) {
                let { props, ctrl } = e;
                if (deep && (ctrl.as & enum_1['@:{enum#as.hod~rs}'])) {
                    let { rows, focusRow, focusCol } = props;
                    let after = [];
                    for (let ri = rows.length; ri--;) {
                        let r = rows[ri];
                        for (let ci = r.cols.length; ci--;) {
                            let d = r.cols[ci];
                            if (d.elements &&
                                d.elements.length) {
                                if (ri > focusRow ||
                                    (ri == focusRow && ci >= focusCol)) {
                                    walk(d.elements, after);
                                }
                                else {
                                    walk(d.elements, newElements);
                                }
                            }
                        }
                    }
                    newElements.push(...after);
                }
                if (!const_1['@:{const#support.readonly.element~rs}'] ||
                    !e.props.readonly) {
                    filters.push(e);
                }
            }
        };
        walk(elements, newElements);
        return newElements;
    }
    // /**
    //  * 查询在哪个限制区域里
    //  */
    // '@:{query.in.which.area}'(rect) {
    //     let { areas } = State.get('@:{global#stage.page}');
    //     let scale = State.get('@:{global#stage.scale}'),
    //         findArea;
    //     for (let a of areas) {
    //         let copy = { ...a };
    //         copy.x *= scale;
    //         copy.y *= scale;
    //         copy.width *= scale;
    //         copy.height *= scale;
    //         if (Transform["@:{transform#rect.intersect}"](copy, rect)) {
    //             findArea = a;
    //             break;
    //         }
    //     }
    //     return findArea;
    // },
    // /**
    //  * 根据坐标查询限制区域或返回第一个
    //  * @param xy 坐标对象
    //  */
    // '@:{query.area.by.xy.or.return.first}'(xy) {
    //     let { areas } = State.get('@:{global#stage.page}');
    //     let scale = State.get('@:{global#stage.scale}'),
    //         findArea = areas[0];
    //     let center = {
    //         x: xy.x + xy.width / 2,
    //         y: xy.y + xy.height / 2
    //     };
    //     for (let a of areas) {
    //         let copy = { ...a };
    //         copy.x *= scale;
    //         copy.y *= scale;
    //         copy.width *= scale;
    //         copy.height *= scale;
    //         if (Transform["@:{point.in.rect}"](center, copy)) {
    //             findArea = a;
    //             break;
    //         }
    //     }
    //     return findArea;
    // }
    ,
    /**
     * 查询元素的自定义名称
     * @param elements 集合列表
     */
    '@:{generic#query.element.name~rs}'(elements) {
        let ename;
        if (elements.length == 1) {
            let { props, ctrl } = elements[0];
            ename = props.ename || index_1(ctrl.title);
        }
        else {
            ename = index_1('@:{lang#multi.elements~rs}');
        }
        return ename;
    },
    /**
     * 根据差异对象查询对应的历史记录信息
     * @param diff 差异对象
     */
    '@:{generic#query.history.info.by.diff~rs}'(diff) {
        let type, ename, { '@:{selection.changed#now.count~rs}': nowCount, '@:{selection.changed#selected.elements~rs}': selectedElements, '@:{selection.changed#deselected.elements~rs}': deselectedElements } = diff;
        if (nowCount) {
            type = history_1['@:{history#element.get.focus~rs}'];
            ename = this['@:{generic#query.element.name~rs}'](selectedElements);
        }
        else {
            type = history_1['@:{history#element.lost.focus~rs}'];
            ename = this['@:{generic#query.element.name~rs}'](deselectedElements);
        }
        return {
            '@:{generic.diff.info#type~rs}': type,
            '@:{generic.diff.info#ename~rs}': ename
        };
    },
    /**
     * 查询能否进行对齐操作
     * @param currentElement 当前参考元素
     */
    '@:{generic#query.can.align~rs}'(currentElement) {
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let groups = State.get('@:{global#stage.elements.groups~rs}');
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        if (flowProvider) { //从选中元素中过滤掉流程图连接线元素，因为连接线不支持对齐
            selectElements = flowProvider["@:{flow.provider#remove.connector.from.elements~rs}"](selectElements, 1);
        }
        let xCanAlign = true;
        let yCanAlign = true;
        let queried = {};
        let allElementsMap;
        let underId = currentElement === null || currentElement === void 0 ? void 0 : currentElement.id;
        if (selectElements.length < 2) { //如果元素个数少于2个，则不支持对齐
            xCanAlign = false;
            yCanAlign = false;
        }
        else {
            for (let { props, id } of selectElements) {
                //let inSameGroupCount = 0;
                let list = groups[id];
                if (list &&
                    !queried[list]) { //元素处于组合中，且未查询过当前组合
                    queried[list] = 1;
                    if (!allElementsMap) { //获取所有元素对象
                        let i = this["@:{generic#get.all.elements.and.map~rs}"]();
                        allElementsMap = i["@:{generic.all#map~rs}"];
                    }
                    for (let g of list) {
                        // if (selectElementsMap[g]) {
                        //     inSameGroupCount++;
                        // }
                        // if (inSameGroupCount > 1) {//如果集合中的元素有超过1个处于选中状态，则也不支持对齐
                        //     // xCanAlign = false;
                        //     // yCanAlign = false;
                        //     break;
                        // }
                        if (underId != g) { //查询组合中的其它元素，当元素非鼠标下的元素时
                            let { props } = allElementsMap[g];
                            let { locked, pinX, pinY } = props;
                            if (locked) { //如果元素locked，则不支持
                                xCanAlign = false;
                                yCanAlign = false;
                            }
                            if (pinX) { //pinX后不支持水平对齐
                                xCanAlign = false;
                            }
                            if (pinY) { //pinY后不支持垂直对齐
                                yCanAlign = false;
                            }
                        }
                    }
                }
                if ((xCanAlign || yCanAlign) &&
                    underId != id) { //查询其它选中的元素是否locked,pinX或pinY来判断禁用哪种对齐
                    let { locked, pinX, pinY } = props;
                    if (locked) {
                        xCanAlign = false;
                        yCanAlign = false;
                    }
                    if (pinX) {
                        xCanAlign = false;
                    }
                    if (pinY) {
                        yCanAlign = false;
                    }
                }
                if (!xCanAlign && !yCanAlign) {
                    break;
                }
            }
        }
        console.log(xCanAlign, yCanAlign);
        return {
            '@:{generic.align#x.can.align~rs}': xCanAlign,
            '@:{generic.align#y.can.align~rs}': yCanAlign
        };
    },
    '@:{generic#query.can.avg~rs}'() {
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let selectElementsMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
        let groups = State.get('@:{global#stage.elements.groups~rs}');
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        if (flowProvider) { //从选中元素中过滤掉流程图连接线元素，因为连接线不支持对齐
            selectElements = flowProvider["@:{flow.provider#remove.connector.from.elements~rs}"](selectElements, 1);
        }
        let xCanAvg = true;
        let yCanAvg = true;
        let stageXCanAvg = true;
        let stageYCanAvg = true;
        let queried = {};
        let allElementsMap;
        if (selectElements.length < 3) { //如果元素个数少于2个，则不支持对齐
            xCanAvg = false;
            yCanAvg = false;
            if (selectElements.length < 1) {
                stageXCanAvg = false;
                stageYCanAvg = false;
            }
        }
        let updateByElmenetProps = props => {
            let { locked, pinX, pinY } = props;
            if (locked) {
                xCanAvg = false;
                yCanAvg = false;
                stageXCanAvg = false;
                stageYCanAvg = false;
            }
            if (pinX) {
                xCanAvg = false;
                stageXCanAvg = false;
            }
            if (pinY) {
                yCanAvg = false;
                stageYCanAvg = false;
            }
        };
        let inDifferentGroup = 0;
        let someSelected = 0;
        let fullSelected = 0;
        let inSameGroupCount = 0;
        for (let { props, id } of selectElements) {
            let list = groups[id];
            if (list) {
                if (!queried[list]) { //元素处于组合中，且未查询过当前组合
                    queried[list] = 1;
                    inSameGroupCount = 0;
                    inDifferentGroup++;
                    if (!allElementsMap) { //获取所有元素对象
                        let i = this["@:{generic#get.all.elements.and.map~rs}"]();
                        allElementsMap = i["@:{generic.all#map~rs}"];
                    }
                    for (let g of list) {
                        if (selectElementsMap[g]) {
                            inSameGroupCount++;
                        }
                        let { props } = allElementsMap[g];
                        updateByElmenetProps(props);
                    }
                    if (inSameGroupCount > 1) {
                        someSelected++;
                        if (inSameGroupCount == list.length) {
                            fullSelected++;
                        }
                    }
                }
            }
            else {
                inDifferentGroup++;
            }
            updateByElmenetProps(props);
            if (!xCanAvg &&
                !yCanAvg &&
                !stageXCanAvg &&
                !stageYCanAvg) {
                break;
            }
        }
        if (someSelected &&
            inDifferentGroup > 1) {
            stageXCanAvg = false;
            stageYCanAvg = false;
            xCanAvg = false;
            yCanAvg = false;
        }
        else if (inDifferentGroup == 1 &&
            !fullSelected) {
            xCanAvg = false;
            yCanAvg = false;
            if (inSameGroupCount > 1) {
                stageXCanAvg = false;
                stageYCanAvg = false;
            }
        }
        console.log(stageXCanAvg, stageYCanAvg);
        return {
            '@:{generic.avg#x.can.avg~rs}': xCanAvg,
            '@:{generic.avg#y.can.avg~rs}': yCanAvg,
            '@:{generic.avg#stage.x.can.avg~rs}': stageXCanAvg,
            '@:{generic.avg#stage.y.can.avg~rs}': stageYCanAvg
        };
    },
    '@:{generic#query.element.parent~rs}'(current) {
        let parentElement, ri, ci;
        let collection = State.get('@:{global#stage.elements~rs}'), find;
        let walk = (coll, parent) => {
            for (let e of coll) {
                if (e.id == current.id) {
                    find = 1;
                    parentElement = parent;
                    break;
                }
                if (e.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                    ri = 0;
                    for (let row of e.props.rows) {
                        ci = 0;
                        for (let col of row.cols) {
                            if (col.elements) {
                                walk(col.elements, e);
                            }
                            if (find) {
                                break;
                            }
                            ci++;
                        }
                        if (find) {
                            break;
                        }
                        ri++;
                    }
                }
            }
        };
        walk(collection);
        return {
            '@:{element~rs}': parentElement,
            '@:{at.row~rs}': ri,
            '@:{at.col~rs}': ci
        };
    },
    /**
     * 获取当前选中元素所在的编辑区
     * @param findEnableParent 是否仅查询可用的父编辑区
     * @param anchorElement 参考元素
     */
    '@:{generic#query.select.elements.stage~rs}'(findEnableParent, anchorElement) {
        let selectElementsMap = anchorElement ? { [anchorElement.id]: 1 } : stage_selection_1['@:{selection#get.selected.map~rs}']();
        let stagesAdded = {}, stages = [];
        let walk = (es, stageType, ownerContainer, ownerCollection, tb, hasLocked, rowIndex, colIndex) => {
            for (let e of es) {
                let { id, props, ctrl, type } = e;
                if (has(selectElementsMap, id)) {
                    let sId = tb ? [tb.id, rowIndex, colIndex].join('-') : '@:{stage~rs}';
                    if (!stagesAdded[sId]) {
                        let height = MaxNum, width = MaxNum;
                        if (tb) {
                            let row = tb.props.rows[rowIndex];
                            let cell = row.cols[colIndex];
                            height = row.height != null ? row.height : cell.height;
                            width = row.width != null ? row.width : cell.width;
                        }
                        stages.push(stagesAdded[sId] = {
                            '@:{container~rs}': ownerContainer,
                            '@:{selected~rs}': [],
                            '@:{collection~rs}': ownerCollection,
                            '@:{type~rs}': stageType,
                            '@:{stage.type~rs}': tb ? '@:{hod~rs}' : '@:{stage~rs}',
                            '@:{allowed.elements~rs}': tb && tb.ctrl['@:{allowed.elements~rs}'],
                            '@:{hod~rs}': tb,
                            '@:{width~rs}': width,
                            '@:{height~rs}': height,
                            '@:{row.index~rs}': rowIndex,
                            '@:{col.index~rs}': colIndex
                        });
                    }
                    stagesAdded[sId]['@:{selected~rs}'].push(e);
                }
                if (ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                    let ri = 0, isLocked = hasLocked || props.locked || props.readonly, useParent = isLocked && findEnableParent;
                    for (let r of props.rows) {
                        let ci = 0, currentCollection;
                        for (let d of r.cols) {
                            currentCollection = d.elements;
                            if (currentCollection) {
                                walk(currentCollection, type, useParent ? ownerContainer : `_rd_hm_${id}_${ri}_${ci}`, useParent ? ownerCollection : currentCollection, useParent ? tb : e, isLocked, ri, ci);
                            }
                            ci++;
                        }
                        ri++;
                    }
                }
            }
        };
        let elements = State.get('@:{global#stage.elements~rs}');
        walk(elements, 'root', '_rd_sc', elements);
        return stages;
    },
    /**
     * 嵌套的情况下，获取元素最近的设计区
     * @param skipEmptyElements 忽略空元素的格子
     */
    '@:{generic#query.nearest.stage~rs}'(skipEmptyElements, currentElement, fakeFocusRow, fakeFocusCol) {
        let selectElements = State.get('@:{global#stage.select.elements~rs}'), c = selectElements.length;
        if (c) {
            if (c === 1 ||
                currentElement) {
                let { props, ctrl, id } = currentElement || selectElements[0];
                let { rows, focusRow, focusCol } = props;
                if (currentElement ||
                    fakeFocusRow) {
                    focusRow = fakeFocusRow;
                    focusCol = fakeFocusCol;
                }
                if ((ctrl.as & enum_1['@:{enum#as.hod~rs}']) &&
                    focusRow > -1 &&
                    focusCol > -1 &&
                    (skipEmptyElements ||
                        !(props.readonly || props.locked))) {
                    let row = rows[focusRow];
                    let cell = row.cols[focusCol];
                    let height = row.height != null ? row.height : cell.height;
                    let width = row.width != null ? row.width : cell.width;
                    if (cell.elements &&
                        (!skipEmptyElements || cell.elements.length)) {
                        return {
                            //'@:{id}': id,
                            '@:{container~rs}': `_rd_hm_${id}_${focusRow}_${focusCol}`,
                            '@:{collection~rs}': cell.elements,
                            '@:{type~rs}': ctrl.type,
                            '@:{allowed.elements~rs}': ctrl['@:{allowed.elements~rs}'],
                            '@:{width~rs}': width,
                            '@:{height~rs}': height
                        };
                    }
                }
            }
            let stages = this['@:{generic#query.select.elements.stage~rs}'](!skipEmptyElements, currentElement);
            if (stages.length === 1) {
                return stages[0];
            }
        }
        let elements = State.get('@:{global#stage.elements~rs}');
        return {
            '@:{container~rs}': '_rd_sc',
            '@:{collection~rs}': elements,
            '@:{type~rs}': 'root',
            '@:{width~rs}': MaxNum,
            '@:{height~rs}': MaxNum
        };
    },
    /**
     * 检查元素是否都在可用的容器内
     * @param elementMap 待查询元素的key value对象
     * @returns
     */
    '@:{generic#query.in.enable.hod~rs}'(elementMap) {
        let stageElements = State.get('@:{global#stage.elements~rs}');
        let enable = 1;
        let walk = (elements, parentLocked) => {
            for (let { props, ctrl, id } of elements) {
                if (parentLocked &&
                    elementMap[id]) {
                    enable = 0;
                    break;
                }
                if (ctrl.as & enum_1['@:{enum#as.hod~rs}'] &&
                    enable) {
                    for (let r of props.rows) {
                        for (let d of r.cols) {
                            let c = d.elements;
                            if (enable &&
                                c &&
                                c.length) {
                                walk(c, parentLocked || props.locked || props.readonly);
                            }
                        }
                    }
                }
            }
        };
        walk(stageElements);
        return enable;
    },
    /**
     * 查询是否可以复制、剪切及粘贴
     * @param copyList 复制列表
     * @param current 当前聚焦的元素
     * @param collection 当前环境的元素列表集合
     * @returns
     */
    '@:{generic#query.can.cxv~rs}'(copyList, 
    //isCut?: number | boolean,
    current, collection) {
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        let selectElementsMap;
        if (current) {
            selectElementsMap = {
                [current.id]: 1
            };
        }
        else {
            selectElementsMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
        }
        //进行判断时，需要移除流程图中的连线元素
        if (flowProvider) {
            selectElements = flowProvider['@:{flow.provider#remove.connector.from.elements~rs}'](selectElements, 1);
        }
        let selectCount = selectElements.length;
        let copyCount = copyList.length;
        let canPaste = 0, canCut = 1, canCopy = 1, canDuplicate = 1;
        if (selectCount == 0) { //如果未有元素选中，则不能复制及剪切
            canCopy = 0;
            canCut = 0;
            canDuplicate = 0;
            if (copyCount) { //不存在复制列表，禁用粘贴
                canPaste = 1;
                if (current) {
                    let { props, ctrl } = current;
                    if (ctrl.as & enum_1['@:{enum#as.hod~rs}']) { //是容器
                        if (props.locked ||
                            props.readonly) {
                            canPaste = 0;
                        }
                    }
                }
            }
        }
        else {
            canCut = canDuplicate = this['@:{generic#query.in.enable.hod~rs}'](selectElementsMap);
            //选中的元素如果有固定或锁定的，不能使用剪切
            //选中的元素如果有数量限制，到达上限后不能复制
            for (let e of selectElements) {
                let { props } = e;
                let total = e.ctrl['@:{allowed.total.count~rs}'];
                if (total >= 0) { //处理复制和剪切，当元素有个数控制时，如果已达上限，则相应的复制和剪切需要禁用
                    let added = this["@:{generic#query.element.added.list~rs}"](e);
                    if (added.length >= total) {
                        canCopy = 0;
                    }
                }
                if (props.locked ||
                    props.pinX ||
                    props.pinY) {
                    canCut = 0;
                }
                if (props.readonly) {
                    canCut = canCopy = 0;
                }
                if (!canCopy &&
                    !canCut) {
                    break;
                }
            }
            if (copyCount) {
                //查询复制列表，判断是否可以粘贴
                for (let ce of copyList) {
                    let total = ce.ctrl['@:{allowed.total.count~rs}'];
                    if (total >= 0) {
                        let added = this["@:{generic#query.element.added.list~rs}"](ce);
                        if (added.length < total) {
                            canPaste++;
                        }
                    }
                    else {
                        canPaste++;
                    }
                }
                let processed, first = current || selectElements[0];
                if (current ||
                    selectCount == 1) { //如果传递了当前元素或只有一个选中，需要判断是否为容器元素
                    if (canPaste) {
                        let { ctrl, props, type } = first;
                        if (ctrl.as & enum_1['@:{enum#as.hod~rs}']) { //是容器
                            if (props.locked ||
                                props.readonly) { //如果禁用，是否可粘贴需要看有没有传递环境元素
                                if (current) {
                                    canPaste = 0;
                                    processed = 1;
                                }
                            }
                            else if (props.focusRow > -1 &&
                                props.focusCol > -1) {
                                processed = 1;
                                canPaste = 0;
                                if (canDuplicate) {
                                    let collection = props.rows[props.focusRow].cols[props.focusCol];
                                    let allowedElements = ctrl['@:{allowed.elements~rs}'];
                                    for (let ce of copyList) {
                                        let allowedToHods = ce.ctrl['@:{allowed.to.hod~rs}'];
                                        if ((!allowedElements ||
                                            allowedElements[ce.type]) &&
                                            (!allowedToHods ||
                                                allowedToHods[type])) {
                                            let total = ce.ctrl['@:{allowed.stage.count~rs}'];
                                            if (total >= 0) {
                                                let added = this["@:{generic#filter.elements~rs}"](collection, ce.type);
                                                if (added.length < total) {
                                                    canPaste++;
                                                }
                                            }
                                            else {
                                                canPaste++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (!processed) {
                    if (canPaste) {
                        canPaste = 0;
                        if (canDuplicate) {
                            if (!collection) {
                                let s = this['@:{generic#query.nearest.stage~rs}']();
                                collection = s['@:{collection~rs}'];
                            }
                            for (let ce of copyList) {
                                let total = ce.ctrl['@:{allowed.stage.count~rs}'];
                                if (total >= 0) {
                                    let added = this["@:{generic#filter.elements~rs}"](collection, ce.type);
                                    if (added.length < total) {
                                        canPaste++;
                                    }
                                }
                                else {
                                    canPaste++;
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            '@:{can.paste~rs}': canPaste,
            '@:{can.copy~rs}': canCopy,
            '@:{can.cut~rs}': canCut,
            '@:{can.duplicate~rs}': canDuplicate
        };
    },
    /**
     * 从列表中删除非只读元素
     * @param elements 待删除元素列表
     * @param deep 是否深度遍历
     */
    '@:{generic#remove.nonreadonly.elements~rs}'(elements, deep) {
        let removed = [];
        for (let i = elements.length; i--;) {
            let { ctrl, props } = elements[i];
            let { rows, readonly } = props;
            if (!readonly) {
                removed.push(elements[i]);
                elements.splice(i, 1);
            }
            if (deep && (ctrl.as & enum_1['@:{enum#as.hod~rs}'])) {
                for (let r of rows) {
                    for (let d of r.cols) {
                        if (d.elements &&
                            d.elements.length) {
                            this['@:{generic#remove.nonreadonly.elements~rs}'](d.elements);
                        }
                    }
                }
            }
        }
        return removed;
    },
    /**
     * 查询是否有禁用的元素
     * @param elements 元素列表
     * @returns
     */
    '@:{generic#query.has.disabled~rs}'(elements) {
        let disabled;
        for (let { props } of elements) {
            if (props.locked || props.readonly) {
                disabled = 1;
                break;
            }
        }
        return disabled;
    },
    /**
     * 全选集合中的元素
     * @param collection 元素列表
     */
    '@:{generic#select.all.collection.elements~rs}'(collection, reverse) {
        collection = this['@:{generic#filter.elements~rs}'](collection, 0, 1);
        let i = collection.length;
        if (i) {
            if (reverse) {
                let selectedMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
                for (let i = collection.length; i--;) {
                    let { id } = collection[i];
                    if (selectedMap[id]) {
                        collection.splice(i, 1);
                    }
                }
            }
        }
        if (stage_selection_1['@:{selection#set.all~rs}'](collection)) {
            let ename = this['@:{generic#query.element.name~rs}'](collection);
            history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], ename);
        }
    },
    /**
     * 查询吸附点位置及辅助线尺寸信息
     * @param startX 开始x坐标
     * @param startY 开始y坐标
     * @param others 使用哪些元素的点进行吸附对齐
     * @returns
     */
    '@:{generic#query.test.position.and.sizes~rs}'(startX, startY, others) {
        let testX = [], testY = [], sizesMap = {};
        if (others &&
            others.length) {
            let addToX = {}, addToY = {};
            for (let s of others) {
                let extraX = [];
                let extraY = [];
                let sx = s['@:{align.queried#left~rs}'];
                let sy = s['@:{align.queried#top~rs}'];
                let sh = s['@:{align.queried#height~rs}'];
                let sw = s['@:{align.queried#width~rs}'];
                let xsd = s['@:{align.queried#x.diffed~rs}'];
                let ysd = s['@:{align.queried#y.diffed~rs}'];
                let ctrl = s['@:{align.queried#ctrl~rs}'];
                let l = sx - startX;
                let t = sy - startY;
                if (sw < const_1['@:{const#element.min.px.size~rs}']) {
                    extraX.push(l);
                }
                else {
                    if (enum_1['@:{enum#align.centers~rs}'] & const_1['@:{const#align.points~rs}']) {
                        extraX.push(l + sw / 2);
                    }
                    if (enum_1['@:{enum#align.coners~rs}'] & const_1['@:{const#align.points~rs}']) {
                        extraX.push(l, l + sw);
                    }
                    if (xsd) {
                        for (let xd of xsd) {
                            extraX.push(l + xd - sx);
                        }
                    }
                }
                if (sh < const_1['@:{const#element.min.px.size~rs}'] ||
                    (ctrl['@:{modifier~rs}'] & enum_1['@:{enum#modifier.dheight~rs}'])) {
                    extraY.push(t);
                }
                else {
                    if (enum_1['@:{enum#align.centers~rs}'] & const_1['@:{const#align.points~rs}']) {
                        extraY.push(t + sh / 2);
                    }
                    if (enum_1['@:{enum#align.coners~rs}'] & const_1['@:{const#align.points~rs}']) {
                        extraY.push(t, t + sh);
                    }
                    if (ysd) {
                        for (let yd of ysd) {
                            extraY.push(t + yd - sy);
                        }
                    }
                }
                for (let ex of extraX) {
                    let find = ex;
                    if (!has(sizesMap, ex)) {
                        for (let tx of testX) {
                            if (abs(ex - tx) < minPxUnit) {
                                find = tx;
                                break;
                            }
                        }
                    }
                    if (!has(addToX, find)) {
                        addToX[find] = 1;
                        testX.push(find);
                    }
                    addSizesMap(sizesMap, 0, find, t, t + sh);
                }
                for (let ey of extraY) {
                    let find = ey;
                    if (!has(sizesMap, ey)) {
                        for (let ty of testY) {
                            if (abs(ey - ty) < minPxUnit) {
                                find = ty;
                                break;
                            }
                        }
                    }
                    if (!has(addToY, find)) {
                        addToY[find] = 1;
                        testY.push(find);
                    }
                    addSizesMap(sizesMap, 1, find, l, l + sw);
                }
            }
        }
        return {
            '@:{test.x~rs}': testX,
            '@:{test.y~rs}': testY,
            '@:{sizes.map~rs}': sizesMap
        };
    }
};

});