/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/57",["4e","../4p/index","./4g","./5b","./4h","./4q","./enum"],(require,exports,module)=>{


let magix_1 = require("4e");
let index_1 = require("../4p/index");
let const_1 = require("./4g");
let stage_selection_1 = require("./5b");
let transform_1 = require("./4h");
let history_1 = require("./4q");
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
    if (!transform_1["dG"](rect1, rect2, true)) {
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
    let beginKey = h ? '_fH' : '_fJ', endKey = h ? '_fK' : '_e8';
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
    'dS': ScrollIntoView,
    'dN': ResetAllCache,
    /**
     * 安装监听器
     */
    'dK'() {
        State.on('d2', ResetAllCache);
        State.on('dM', ResetAllCache);
        State.on('dJ', ResetAllCache);
    },
    /**
     * 关闭监听器
     */
    'dL'() {
        ResetAllCache();
        State.off('d2', ResetAllCache);
        State.off('dM', ResetAllCache);
        State.off('dJ', ResetAllCache);
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
    'd1'(elements) {
        let locations = [];
        for (let e of elements) {
            let { props } = e;
            let { rotate, x, y, width, height, readonly } = props;
            if (const_1['ea'] && readonly)
                continue;
            let rect = {
                x: const_1['eo'](x),
                y: const_1['eo'](y),
                width: const_1['eo'](width),
                height: const_1['eo'](height),
                rotate
            };
            let tsed = transform_1["dF"](rect);
            let [lt, rt, rb, lb] = tsed['_fE'];
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
                '_gc': e,
                // left: tl,
                // top: tt,
                // right: tr,
                // bottom: tb,
                // '@:{width}': tsed.width,
                // '@:{height}': tsed.height,
                // '@:{left}': tsed.left,
                // '@:{top}': tsed.top,
                '_gM': [lt, rt, lb, rb],
                '_gN': [[lt, rt],
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
    'd2'(elementLocations, rect, selectElements, hods, selectElementsIdMap) {
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
            for (let p of e['_gM']) {
                if (p.x >= rect.x &&
                    p.y >= rect.y &&
                    p.x <= (rect.x + rect.width) &&
                    p.y <= (rect.y + rect.height)) {
                    let m = e['_gc'];
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
                for (let l of e['_gN']) {
                    for (let rl of rectLines) {
                        if (transform_1["dK"](l, rl)) {
                            find = 1;
                            let m = e['_gc'];
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
            '_f7': selected,
            '_fm': ids.join(',')
        };
    },
    /**
     * 获取所有元素及map对象
     */
    'dE'() {
        if (!AllElementsMap) {
            console.log('rebuild');
            AllElementsMap = {};
            AllStageElementsMap = {};
            AllElementsList = [];
            AllElementsParentHod = {};
            let stageElements = State.get('dM');
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
                    if (e.ctrl.as & enum_1['dH']) {
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
            'dF': AllElementsMap,
            'dH': AllStageElementsMap,
            'dE': AllElementsList,
            'dG': AllElementsParentHod
        };
    },
    /**
     * 获取指定类型的元素
     * @param elements 元素集合
     * @param type 指定的类型
     */
    'dF'(elements, type, readonly) {
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
    'dP'(idMap) {
        let stageElements = State.get('dM'), deleted = 0;
        ;
        let walk = cs => {
            for (let i = cs.length; i--;) {
                let e = cs[i];
                if (idMap[e.id]) {
                    cs.splice(i, 1);
                    deleted = 1;
                }
                else if (e.ctrl.as & enum_1['dH']) {
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
    'dZ'() {
        let selectedElements = State.get('dE');
        let selectedElementsMap = stage_selection_1['dJ']();
        let stageElements = State.get('dM');
        let flowProvider = State.get('dR');
        if (flowProvider) {
            selectedElements = flowProvider["dI"](selectedElements, 1);
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
                if (e.ctrl.as & enum_1['dH']) {
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
        let groups = State.get('dP');
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
            '_gH': canGroup,
            '_gG': canUngroup
        };
    },
    /**
     * 查询锁定状态
     */
    'd3'() {
        let canLock = false, canUnlock = false;
        let selectedElements = State.get('dE');
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
            '_gO': canLock,
            '_gP': canUnlock
        };
    },
    /**
     * 锁定或解锁选中的元素
     * @param unlock 是否为解锁
     */
    'd4'(unlock, shortcuts) {
        let selectElements = State.get('dE');
        let changed, to = !unlock, ids = {}, types = {}, changedProps = [];
        if (shortcuts) {
            let { '_gO': canLock, '_gP': canUnlock } = this['d3']();
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
                    vf.invoke('_fY', [e]);
                }
            }
        }
        if (changed) {
            State.fire('dG', {
                '_fm': ids,
                '_fn': types,
                '_dF': {
                    locked: 1
                }
            });
            let ename = this['dQ'](changedProps);
            history_1["dE"](to ? history_1['d3'] : history_1['d4'], ename);
        }
    },
    /**
     * 组合或取消组合选中的元素
     * @param ungroup 是否为取消组合
     */
    'd5'(ungroup) {
        let selectElements = State.get('dE');
        let flowProvider = State.get('dR');
        if (flowProvider) {
            selectElements = flowProvider["dH"](selectElements);
        }
        let groups = State.get('dP');
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
            this['dO'](selectedIds);
        }
        else {
            for (let n of newGroup) {
                groups[n] = newGroup;
            }
        }
        State.fire('d2');
        history_1["dE"](ungroup ? history_1['d2'] : history_1['d1']);
    },
    /**
     * 查询元素中的容器元素
     * @param elements 元素集合
     */
    'd6'(elements) {
        let map = {}, hods = [];
        for (let e of elements) {
            if (e.ctrl.as & enum_1['dH']) {
                hods.push(e);
            }
        }
        let walk = (children, hodId) => {
            for (let c of children) {
                if (hodId) {
                    map[c.id] = hodId;
                }
                if (c.ctrl.as & enum_1['dH']) {
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
    'dU'(element) {
        let collection = State.get('dM'), find, findCollection;
        let walk = coll => {
            for (let e of coll) {
                if (e.id == element.id) {
                    find = 1;
                    findCollection = coll;
                    break;
                }
                if (e.ctrl.as & enum_1['dH']) {
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
    'dM'(ctrl) {
        let all = this["dE"]();
        let allElements = all["dE"];
        return this["dF"](allElements, ctrl.type);
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
    'dO'(ids) {
        let groups = State.get('dP');
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
    'd7'(element, extra) {
        let selectElements = State.get('dE');
        let hasSelected = selectElements.length;
        let selectElementsMap = stage_selection_1['dJ']();
        if (element) {
            hasSelected = 1;
            selectElementsMap = {
                [element.id]: 1
            };
        }
        if (hasSelected) {
            let stageElements = State.get('dM');
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
                    if (e.ctrl.as & enum_1['dH']) {
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
                this['dO'](ids);
                if (element) {
                    stage_selection_1['dH'](element);
                }
                else {
                    stage_selection_1['dF']();
                }
                State.fire('d2', {
                    '_fU': '_gQ',
                    '_gR': extra,
                    '_gS': ids
                });
                history_1["dE"](history_1['d0'], this['dQ'](removedElements));
            }
        }
    },
    /**
     * 查询是否支持清空设计区
     */
    'dI'() {
        let xLines = State.get('dH');
        let yLines = State.get('dI');
        let stageElements = State.get('dM');
        let elements = const_1['ea'] ? this['dV'](stageElements, 1) : stageElements;
        return xLines.length + yLines.length + elements.length > 0;
    },
    /**
     * 查询是否支持新建
     */
    'dJ'() {
        let xLines = State.get('dH');
        let yLines = State.get('dI');
        let elements = State.get('dM');
        let canCreate = xLines.length + yLines.length + elements.length > 0;
        if (!canCreate) {
            let pc = State.get('dS');
            if (!defaultPageProps) {
                defaultPageProps = pc['_eE']();
            }
            let page = State.get('dN');
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
    'dV'(elements, deep) {
        let newElements = [];
        let walk = (elements, filters) => {
            for (let e of elements) {
                let { props, ctrl } = e;
                if (deep && (ctrl.as & enum_1['dH'])) {
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
                if (!const_1['ea'] ||
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
    'dQ'(elements) {
        let ename;
        if (elements.length == 1) {
            let { props, ctrl } = elements[0];
            ename = props.ename || index_1(ctrl.title);
        }
        else {
            ename = index_1('e8');
        }
        return ename;
    },
    /**
     * 根据差异对象查询对应的历史记录信息
     * @param diff 差异对象
     */
    'd8'(diff) {
        let type, ename, { 'dE': nowCount, 'dF': selectedElements, 'dG': deselectedElements } = diff;
        if (nowCount) {
            type = history_1['dV'];
            ename = this['dQ'](selectedElements);
        }
        else {
            type = history_1['dU'];
            ename = this['dQ'](deselectedElements);
        }
        return {
            'dE': type,
            'dF': ename
        };
    },
    /**
     * 查询能否进行对齐操作
     * @param currentElement 当前参考元素
     */
    'dX'(currentElement) {
        let selectElements = State.get('dE');
        let groups = State.get('dP');
        let flowProvider = State.get('dR');
        if (flowProvider) { //从选中元素中过滤掉流程图连接线元素，因为连接线不支持对齐
            selectElements = flowProvider["dI"](selectElements, 1);
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
                        let i = this["dE"]();
                        allElementsMap = i["dF"];
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
            'dE': xCanAlign,
            'dF': yCanAlign
        };
    },
    'd9'() {
        let selectElements = State.get('dE');
        let selectElementsMap = stage_selection_1['dJ']();
        let groups = State.get('dP');
        let flowProvider = State.get('dR');
        if (flowProvider) { //从选中元素中过滤掉流程图连接线元素，因为连接线不支持对齐
            selectElements = flowProvider["dI"](selectElements, 1);
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
                        let i = this["dE"]();
                        allElementsMap = i["dF"];
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
            'dE': xCanAvg,
            'dF': yCanAvg,
            'dG': stageXCanAvg,
            'dH': stageYCanAvg
        };
    },
    'dR'(current) {
        let parentElement, ri, ci;
        let collection = State.get('dM'), find;
        let walk = (coll, parent) => {
            for (let e of coll) {
                if (e.id == current.id) {
                    find = 1;
                    parentElement = parent;
                    break;
                }
                if (e.ctrl.as & enum_1['dH']) {
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
            '_gc': parentElement,
            '_gd': ri,
            '_ge': ci
        };
    },
    /**
     * 获取当前选中元素所在的编辑区
     * @param findEnableParent 是否仅查询可用的父编辑区
     * @param anchorElement 参考元素
     */
    'dT'(findEnableParent, anchorElement) {
        let selectElementsMap = anchorElement ? { [anchorElement.id]: 1 } : stage_selection_1['dJ']();
        let stagesAdded = {}, stages = [];
        let walk = (es, stageType, ownerContainer, ownerCollection, tb, hasLocked, rowIndex, colIndex) => {
            for (let e of es) {
                let { id, props, ctrl, type } = e;
                if (has(selectElementsMap, id)) {
                    let sId = tb ? [tb.id, rowIndex, colIndex].join('-') : '_gA';
                    if (!stagesAdded[sId]) {
                        let height = MaxNum, width = MaxNum;
                        if (tb) {
                            let row = tb.props.rows[rowIndex];
                            let cell = row.cols[colIndex];
                            height = row.height != null ? row.height : cell.height;
                            width = row.width != null ? row.width : cell.width;
                        }
                        stages.push(stagesAdded[sId] = {
                            '_fS': ownerContainer,
                            '_f7': [],
                            '_fR': ownerCollection,
                            '_fU': stageType,
                            '_gp': tb ? '_gq' : '_gA',
                            '_fT': tb && tb.ctrl['_fT'],
                            '_gq': tb,
                            '_e3': width,
                            '_e4': height,
                            '_gr': rowIndex,
                            '_gs': colIndex
                        });
                    }
                    stagesAdded[sId]['_f7'].push(e);
                }
                if (ctrl.as & enum_1['dH']) {
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
        let elements = State.get('dM');
        walk(elements, 'root', '_rd_sc', elements);
        return stages;
    },
    /**
     * 嵌套的情况下，获取元素最近的设计区
     * @param skipEmptyElements 忽略空元素的格子
     */
    'e_'(skipEmptyElements, currentElement, fakeFocusRow, fakeFocusCol) {
        let selectElements = State.get('dE'), c = selectElements.length;
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
                if ((ctrl.as & enum_1['dH']) &&
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
                            '_fS': `_rd_hm_${id}_${focusRow}_${focusCol}`,
                            '_fR': cell.elements,
                            '_fU': ctrl.type,
                            '_fT': ctrl['_fT'],
                            '_e3': width,
                            '_e4': height
                        };
                    }
                }
            }
            let stages = this['dT'](!skipEmptyElements, currentElement);
            if (stages.length === 1) {
                return stages[0];
            }
        }
        let elements = State.get('dM');
        return {
            '_fS': '_rd_sc',
            '_fR': elements,
            '_fU': 'root',
            '_e3': MaxNum,
            '_e4': MaxNum
        };
    },
    /**
     * 检查元素是否都在可用的容器内
     * @param elementMap 待查询元素的key value对象
     * @returns
     */
    'dW'(elementMap) {
        let stageElements = State.get('dM');
        let enable = 1;
        let walk = (elements, parentLocked) => {
            for (let { props, ctrl, id } of elements) {
                if (parentLocked &&
                    elementMap[id]) {
                    enable = 0;
                    break;
                }
                if (ctrl.as & enum_1['dH'] &&
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
    'd0'(copyList, 
    //isCut?: number | boolean,
    current, collection) {
        let selectElements = State.get('dE');
        let flowProvider = State.get('dR');
        let selectElementsMap;
        if (current) {
            selectElementsMap = {
                [current.id]: 1
            };
        }
        else {
            selectElementsMap = stage_selection_1['dJ']();
        }
        //进行判断时，需要移除流程图中的连线元素
        if (flowProvider) {
            selectElements = flowProvider['dI'](selectElements, 1);
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
                    if (ctrl.as & enum_1['dH']) { //是容器
                        if (props.locked ||
                            props.readonly) {
                            canPaste = 0;
                        }
                    }
                }
            }
        }
        else {
            canCut = canDuplicate = this['dW'](selectElementsMap);
            //选中的元素如果有固定或锁定的，不能使用剪切
            //选中的元素如果有数量限制，到达上限后不能复制
            for (let e of selectElements) {
                let { props } = e;
                let total = e.ctrl['_eI'];
                if (total >= 0) { //处理复制和剪切，当元素有个数控制时，如果已达上限，则相应的复制和剪切需要禁用
                    let added = this["dM"](e);
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
                    let total = ce.ctrl['_eI'];
                    if (total >= 0) {
                        let added = this["dM"](ce);
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
                        if (ctrl.as & enum_1['dH']) { //是容器
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
                                    let allowedElements = ctrl['_fT'];
                                    for (let ce of copyList) {
                                        let allowedToHods = ce.ctrl['_fV'];
                                        if ((!allowedElements ||
                                            allowedElements[ce.type]) &&
                                            (!allowedToHods ||
                                                allowedToHods[type])) {
                                            let total = ce.ctrl['_eJ'];
                                            if (total >= 0) {
                                                let added = this["dF"](collection, ce.type);
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
                                let s = this['e_']();
                                collection = s['_fR'];
                            }
                            for (let ce of copyList) {
                                let total = ce.ctrl['_eJ'];
                                if (total >= 0) {
                                    let added = this["dF"](collection, ce.type);
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
            '_gL': canPaste,
            '_gJ': canCopy,
            '_gI': canCut,
            '_gK': canDuplicate
        };
    },
    /**
     * 从列表中删除非只读元素
     * @param elements 待删除元素列表
     * @param deep 是否深度遍历
     */
    'dH'(elements, deep) {
        let removed = [];
        for (let i = elements.length; i--;) {
            let { ctrl, props } = elements[i];
            let { rows, readonly } = props;
            if (!readonly) {
                removed.push(elements[i]);
                elements.splice(i, 1);
            }
            if (deep && (ctrl.as & enum_1['dH'])) {
                for (let r of rows) {
                    for (let d of r.cols) {
                        if (d.elements &&
                            d.elements.length) {
                            this['dH'](d.elements);
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
    'dY'(elements) {
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
    'ea'(collection, reverse) {
        collection = this['dF'](collection, 0, 1);
        let i = collection.length;
        if (i) {
            if (reverse) {
                let selectedMap = stage_selection_1['dJ']();
                for (let i = collection.length; i--;) {
                    let { id } = collection[i];
                    if (selectedMap[id]) {
                        collection.splice(i, 1);
                    }
                }
            }
        }
        if (stage_selection_1['dG'](collection)) {
            let ename = this['dQ'](collection);
            history_1["dE"](history_1['dV'], ename);
        }
    },
    /**
     * 查询吸附点位置及辅助线尺寸信息
     * @param startX 开始x坐标
     * @param startY 开始y坐标
     * @param others 使用哪些元素的点进行吸附对齐
     * @returns
     */
    'dG'(startX, startY, others) {
        let testX = [], testY = [], sizesMap = {};
        if (others &&
            others.length) {
            let addToX = {}, addToY = {};
            for (let s of others) {
                let extraX = [];
                let extraY = [];
                let sx = s['dG'];
                let sy = s['dH'];
                let sh = s['dK'];
                let sw = s['dJ'];
                let xsd = s['dN'];
                let ysd = s['dO'];
                let ctrl = s['dI'];
                let l = sx - startX;
                let t = sy - startY;
                if (sw < const_1['ed']) {
                    extraX.push(l);
                }
                else {
                    if (enum_1['dF'] & const_1['d2']) {
                        extraX.push(l + sw / 2);
                    }
                    if (enum_1['dG'] & const_1['d2']) {
                        extraX.push(l, l + sw);
                    }
                    if (xsd) {
                        for (let xd of xsd) {
                            extraX.push(l + xd - sx);
                        }
                    }
                }
                if (sh < const_1['ed'] ||
                    (ctrl['_gi'] & enum_1['dV'])) {
                    extraY.push(t);
                }
                else {
                    if (enum_1['dF'] & const_1['d2']) {
                        extraY.push(t + sh / 2);
                    }
                    if (enum_1['dG'] & const_1['d2']) {
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
            '_eK': testX,
            '_eL': testY,
            '_eM': sizesMap
        };
    }
};

});