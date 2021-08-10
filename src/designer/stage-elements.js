/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/stage-elements",["magix5","../gallery/mx-menu/index","../gallery/mx-pointer/cursor","../i18n/index","./const","./contextmenu","./enum","./history","./stage-align","./stage-clipboard","./stage-generic","./stage-selection","./transform","../gallery/mx-pointer/tip"],(require,exports,module)=>{


let magix_1 = require("magix5");
let index_1 = require("../gallery/mx-menu/index");
let cursor_1 = require("../gallery/mx-pointer/cursor");
let index_2 = require("../i18n/index");
let const_1 = require("./const");
let contextmenu_1 = require("./contextmenu");
let enum_1 = require("./enum");
let history_1 = require("./history");
let stage_align_1 = require("./stage-align");
let stage_clipboard_1 = require("./stage-clipboard");
let stage_generic_1 = require("./stage-generic");
let stage_selection_1 = require("./stage-selection");
let transform_1 = require("./transform");
let tip_1 = require("../gallery/mx-pointer/tip");
//window.$C = Const;
//let sleep = time => new Promise(resolve => setTimeout(resolve, time));
let { random, abs, round, floor, min, max } = Math;
let { has, node, mix, State, Vframe, guid, taskFinale, inside, config, isFunction } = magix_1;
let MaxNum = Number.MAX_VALUE;
let MinNum = -MaxNum;
let nowTime = Date.now;
let contextMenuId = guid('_rdcm_');
/**
 * 根据节点矩形范围查询对应的元素id
 * @param sizes 尺寸id映射对象
 * @param elements 元素id集合
 * @param to 对齐方式
 */
let QueryElementIdByBound = (sizes, elements, to) => {
    let maxRight = MinNum;
    let minLeft = MaxNum;
    let minTop = MaxNum;
    let maxBottom = MinNum;
    let minVCenter = MaxNum;
    let minHCenter = MaxNum;
    let findId;
    for (let m of elements) {
        let { top, bottom, left, right } = sizes[m];
        if (to == 'right') {
            if (right > maxRight) {
                maxRight = right;
                findId = m;
            }
        }
        else if (to == 'left') {
            if (left < minLeft) {
                minLeft = left;
                findId = m;
            }
        }
        else if (to == 'top') {
            if (top < minTop) {
                minTop = top;
                findId = m;
            }
        }
        else if (to == 'bottom') {
            if (bottom > maxBottom) {
                maxBottom = bottom;
                findId = m;
            }
        }
        else if (to == 'middle') {
            let half = (bottom - top) / 2;
            if ((top + half) < minVCenter) {
                minVCenter = top + half;
                findId = m;
            }
        }
        else if (to == 'center') {
            let half = (right - left) / 2;
            if ((left + half) < minHCenter) {
                minHCenter = left + half;
                findId = m;
            }
        }
    }
    return findId;
};
/**
 * 获取元素在容器中的偏移量
 * @param destNode 目标dom节点
 * @param page 设计器page对象
 * @param scale 当前缩放
 */
// let GetHodOffset = (destNode, page, scale) => {
//     let x = 0,
//         y = 0;
//     if (destNode) {
//         let bound = destNode.getBoundingClientRect();
//         let stageNode = node('_rd_sc');
//         let stageBound = stageNode.getBoundingClientRect();
//         let left = bound.left - stageBound.left;
//         let top = bound.top - stageBound.top;
//         let realWidth = Const['@:{const#to.px}'](page.gridWidth) * scale;
//         let realHeight = Const['@:{const#to.px}'](page.gridHeight) * scale;
//         x = left % realWidth;
//         y = top % realHeight;
//     }
//     return { x, y };
// };
/**
 * 获取距离差异
 * @param scaledProps 保存缩放属性的对象
 * @param key 某一个参与缩放的key
 * @param diff 偏移量
 * @param hodOffset 格子偏移量
 * @param rest 剩余距离
 */
let GetDisatance = (scaledProps, key, diff /*, hodOffset, rest*/) => {
    let src = scaledProps[key];
    let old = src;
    src -= diff;
    // src += hodOffset;
    // if (rest > 0) {
    //     let r = src % rest;
    //     src -= r;
    //     if (r > rest / 2) {
    //         src += rest;
    //     }
    // }
    // src -= hodOffset;
    return src - old;
};
/**
 * 拖动对齐时，如果拖动容器元素，它所有子元素因一起移除，也不能成为对齐元素
 * @param e 元素
 */
let recoreHodElements = (e, movedMap, parentHods) => {
    if (e.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
        for (let row of e.props.rows) {
            for (let col of row.cols) {
                if (col.elements) {
                    for (let ce of col.elements) {
                        if (!movedMap[ce.id]) {
                            movedMap[ce.id] = -1;
                        }
                        recoreHodElements(ce, movedMap, parentHods);
                    }
                }
            }
        }
    }
    let start = parentHods[e.id];
    while (start) {
        if (!movedMap[start]) {
            movedMap[start] = -1;
        }
        start = parentHods[start];
    }
};
module.exports= {
    /**
     * 添加元素
     * @param e 添加元素时额外的信息
     */
    '@:{elements#add.element~rs}'(e) {
        /**
         * 元素允许添加的个数
         * '@:{allowed.total.count}':2,//总共允许多少个
         * '@:{allowed.stage.count}':2 //一个编辑区允许多少个
         * '@:{allowed.to.hod}':{ //当前元素允许添加到的容器元素
         *   root:1,//编辑区
         *   table:1,//表格
         *   'h-flexbox':1
         * },
         * '@:{allowed.elements}':{//容器元素允许放置的其它元素
         *  barcode:1,
         *  qrcode:1
         * }
         */
        //从内存中取出缓存的元素对象
        let srcArray = State.get('@:{global#memory.cache.element~rs}');
        if (srcArray) {
            //用完即删
            State.set({
                '@:{global#memory.cache.element~rs}': null
            });
            let returned = [];
            let selected = [];
            let scale = State.get('@:{global#stage.scale~rs}');
            let page = State.get('@:{global#stage.page~rs}');
            if (!page.readonly) {
                let index = 0;
                for (let src of srcArray) {
                    let { props: definedProps, ctrl, silent, first } = src; //获取元素控制器和预定义属性
                    // let hodOffsetX = 0,
                    //     hodOffsetY = 0;
                    let cell;
                    if (e.node) { //如果有参考节点，则表示鼠标拖动添加元素，此时需要获取当前鼠标下可能存在的容器，以便把拖动的元素放进容器格子里
                        cell = this['@:{elements#get.best.hod~rs}'](e.node, ctrl);
                    }
                    //获取元素需要放置到的集合对象，设计区、容器的每一个格子用来存放子元素的地方均是互相独立的集合
                    let dest = this['@:{elements#get.best.collection~rs}'](e, silent, cell, ctrl);
                    let coll = dest['@:{collection~rs}'];
                    if (!coll)
                        continue;
                    //总共允许几个
                    let total = ctrl['@:{allowed.total.count~rs}'];
                    if (total >= 0) {
                        let { '@:{generic.all#elements~rs}': allElements } = stage_generic_1["@:{generic#get.all.elements.and.map~rs}"]();
                        let all = stage_generic_1["@:{generic#filter.elements~rs}"](allElements, ctrl.type);
                        if (all.length >= total)
                            continue;
                    }
                    //一个编辑区允许几个
                    let count = ctrl['@:{allowed.stage.count~rs}'];
                    if (count >= 0) {
                        let all = stage_generic_1["@:{generic#filter.elements~rs}"](coll, ctrl.type);
                        if (all.length >= count)
                            continue;
                    }
                    let pos = dest['@:{position.xy~rs}'];
                    let props = ctrl['@:{get.props~rs}'](pos.x + index * const_1['@:{const#element.same.position.offset~rs}'], pos.y + index * const_1['@:{const#element.same.position.offset~rs}']);
                    if (!has(props, 'ename')) { //补充组件树名称
                        props.ename = index_2(ctrl.title);
                    }
                    if (props) {
                        if (isFunction(definedProps)) {
                            definedProps = definedProps();
                        }
                        mix(props, definedProps);
                    }
                    //缩放属性处理
                    let scaledProps = {};
                    for (let s of ctrl.props) {
                        if (isFunction(s['@:{stage.scale~rs}'])) {
                            s['@:{stage.scale~rs}'](props, scale, scaledProps);
                        }
                        else if (s['@:{is.scale.and.unit.field~rs}']) {
                            scaledProps[s.key] = props[s.key] * scale;
                        }
                    }
                    let diffX = scaledProps.x - props.x;
                    let diffY = scaledProps.y - props.y;
                    // let restWidth = 0,
                    //     restHeight = 0;
                    //流程图provider
                    //let flowProvider = State.get('@:{global#provider.of.flow}');
                    //检测是否是流程图的连接线元素
                    //let isFlowConnector = flowProvider && flowProvider['@:{flow.provider#is.connector}'](ctrl);
                    //流程图的连接线不支持吸附到格子
                    // if (page.grid &&
                    //     page.snapGrid &&
                    //     !isFlowConnector) {
                    //     restWidth = page.gridWidth * scale;
                    //     restHeight = page.gridHeight * scale;
                    //     if (cell) {
                    //         let offset = GetHodOffset(cell['@:{node}'], page, scale);
                    //         hodOffsetX = offset.x;
                    //         hodOffsetY = offset.y;
                    //     }
                    // }
                    let xDiffed = 0, yDiffed = 0; //,
                    //hasXAP = 0,
                    // hasYAP = 0;
                    //元素自身的有哪些位置信息属性
                    let moveProps = ctrl['@:{move.props~rs}'];
                    if (ctrl['@:{move.props.is.function~rs}']) {
                        moveProps = ctrl['@:{move.props~rs}'](props);
                    }
                    //查找参考点进行平移
                    //像svg有多个点，只需要计算一次
                    //if (ctrl['@:{find.anchor.point}']) {
                    xDiffed = GetDisatance(scaledProps, 'x', diffX /*, hodOffsetX, restWidth*/);
                    //hasXAP = 1;
                    yDiffed = GetDisatance(scaledProps, 'y', diffY /*, hodOffsetY, restHeight*/);
                    // hasYAP = 1;
                    //}
                    //需要对所有可移除的属性进行平移
                    //普通元素只需要移动xy坐标即可
                    //svg元素需要平移所有的点
                    for (let m of moveProps) {
                        if (m.use == 'x') {
                            // if (!hasXAP) {//未查找过参考点，则需要计算
                            //     scaledProps[m.key] += GetDisatance(scaledProps, m.key, diffX, hodOffsetX, restWidth);
                            // } else {
                            scaledProps[m.key] += xDiffed;
                            //}
                        }
                        else {
                            // if (!hasYAP) {
                            //     scaledProps[m.key] += GetDisatance(scaledProps, m.key, diffY, hodOffsetY, restHeight);
                            // } else {
                            scaledProps[m.key] += yDiffed;
                            //}
                        }
                    }
                    //同步缩放状态的属性
                    for (let p in scaledProps) {
                        props[p] = scaledProps[p];
                    }
                    //如果元素自身有其它更新属性的逻辑，则调用
                    if (ctrl['@:{update.props~rs}']) {
                        ctrl['@:{update.props~rs}'](props);
                    }
                    // let area = dest['@:{area}'];
                    // if (area) {
                    //     if (props.x + props.width >
                    //         (area.x + area.width) * scale) {
                    //         props.x = (area.x + area.width) * scale - props.width;
                    //     }
                    //     if (props.y + props.height >
                    //         (area.y + area.height) * scale) {
                    //         props.y = (area.y + area.height) * scale - props.height;
                    //     }
                    //     if (props.x < area.x) {
                    //         props.x = area.x;
                    //     }
                    //     if (props.y < area.y) {
                    //         props.y = area.y;
                    //     }
                    // }
                    let em = {
                        id: guid('rde_'),
                        ctrl,
                        type: ctrl.type,
                        props
                    };
                    //添加到最前面
                    if (first) {
                        coll.unshift(em);
                    }
                    else {
                        coll.push(em);
                    }
                    //如果允许对新增加的元素聚焦
                    if (dest['@:{focus.add.element~rs}']) {
                        selected.push(em);
                        //StageSelection["@:{selection#set}"](em);
                        //StageGeneric["@:{generic#scroll.into.view}"](em.id);
                    }
                    let currentBind = props.bind;
                    if (currentBind &&
                        currentBind.id) { //如果添加的元素有绑定数据源
                        let { '@:{element~rs}': pElement, '@:{at.row~rs}': atRow, '@:{at.col~rs}': atCol } = stage_generic_1['@:{generic#query.element.parent~rs}'](em);
                        if (pElement) { //检查父元素是否为数据容器
                            let { ctrl: pCtrl, props: pProps } = pElement;
                            if (pCtrl.as & enum_1['@:{enum#as.data.hod~rs}']) {
                                let bindAdded = pCtrl['@:{bind.data.added~rs}'];
                                if (bindAdded) {
                                    bindAdded(pProps, em, atRow, atCol);
                                }
                                let updateProps = pCtrl['@:{update.props~rs}'];
                                if (updateProps) {
                                    updateProps(pProps);
                                }
                            }
                        }
                    }
                    returned.push(em);
                    index++;
                }
            }
            return {
                '@:{add.elements~rs}': returned,
                '@:{select.elements~rs}': selected
            };
        }
    },
    /**
     * 单选或多选元素
     * @param element 当前待处理的元素
     * @param isMulti 是否多选
     * @param scrollToElement 是否滚动到元素位置
     */
    '@:{elements#single.or.multi.select~rs}'(element, isMulti, scrollToElement = true) {
        let { '@:{generic.all#map~rs}': allMap } = stage_generic_1['@:{generic#get.all.elements.and.map~rs}']();
        if (!allMap[element.id])
            return;
        if (isMulti) { //多选逻辑
            //if (!element.props.locked) {
            let elements = State.get('@:{global#stage.select.elements~rs}');
            let exists, map = {}, elementsToHods = {}, hods = [];
            //容器元素需要处理自身和内容元素的关系
            if (element.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                hods.push(element);
            }
            for (let i = elements.length; i--;) {
                let m = elements[i];
                if (m.id == element.id) {
                    exists = 1;
                }
                if (m.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                    hods.push(m);
                }
            }
            //取消选择
            if (exists && elements.length > 1) {
                if (stage_selection_1['@:{selection#remove~rs}'](element)) {
                    history_1["@:{history#save~rs}"](history_1['@:{history#element.lost.focus~rs}'], element.props.ename);
                }
                return;
            }
            let groups = State.get('@:{global#stage.elements.groups~rs}');
            let added = {}, selectAndCurrentElements = [...elements, element];
            for (let e of selectAndCurrentElements) {
                let list = groups[e.id];
                if (list) { //处理组合
                    for (let g of list) {
                        if (!added[g]) {
                            added[g] = 1;
                            let dest = allMap[g];
                            if (dest.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                                hods.push(dest);
                            }
                        }
                    }
                }
            }
            /**
             * 递归遍历所有子元素
             * @param children 子元素
             * @param hodId 容器id
             */
            let walk = (children, hodId) => {
                for (let c of children) {
                    if (hodId) {
                        map[c.id] = 1;
                        elementsToHods[c.id] = hodId;
                    }
                    if (c.ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                        for (let r of c.props.rows) {
                            for (let d of r.cols) {
                                if (d.elements) {
                                    walk(d.elements, c.id);
                                }
                            }
                        }
                    }
                }
            };
            walk(hods);
            if (has(map, element.id)) { //选择的元素在选中的表格内，取消表格的选择
                let sId = element.id;
                do {
                    let tId = elementsToHods[sId];
                    if (tId) {
                        map[tId] = 1;
                        let list = groups[tId];
                        if (list) {
                            for (let g of list) {
                                map[g] = 1;
                            }
                        }
                        sId = tId;
                    }
                    else {
                        break;
                    }
                } while (true);
            }
            for (let i = elements.length; i--;) {
                let m = elements[i];
                if (has(map, m.id)) {
                    elements.splice(i, 1);
                }
            }
            if (stage_selection_1['@:{selection#add~rs}'](element)) {
                history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], element.props.ename);
            }
            //}
            //如果是单选且当前未选中该元素
        }
        else if (stage_selection_1["@:{selection#set~rs}"](element)) {
            if (scrollToElement) {
                stage_generic_1["@:{generic#scroll.into.view~rs}"](element.id);
            }
            history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], element.props.ename);
        }
    },
    /**
     * 空格快捷键或双击行为
     * @param m 处理行为的元素
     * @param e 键盘事件
     */
    async '@:{elements#space.or.double.click.action~rs}'(m, e) {
        let { props, ctrl, id } = m;
        let modifier = ctrl['@:{modifier~rs}'];
        if (modifier) { //元素上有修改指示器
            let find; //查没查到相应的处理方式
            if (modifier & enum_1['@:{enum#modifier.dblclick~rs}']) { //如果有双击行为
                find = 1;
                props['@:{dblclick~rs}'] = 1;
            }
            else if ((modifier & enum_1['@:{enum#modifier.text~rs}']) && //如果有显示文本输入框的行为
                (!ctrl['@:{can.show.text~rs}'] ||
                    ctrl['@:{can.show.text~rs}'](props))) {
                find = 1;
                props['@:{show.text~rs}'] = 1;
            }
            if (find &&
                e) { //查找到就阻止默认行为，阻止页面滚动
                e['@:{keypress#prevent.default~rs}']();
            }
            if (find) {
                let vf = Vframe.byNode(node(id));
                let r = await vf.invoke('assign', [{ element: m }]);
                if (r !== false) {
                    vf.invoke('render');
                }
            }
        }
    },
    /**
     * 选中或移动选中的元素
     * @param event pointerdown事件对象
     * @param view 调用该方法的Magix.View对象
     */
    '@:{elements#select.or.move.elements~rs}'(event, view) {
        let { params, button, shiftKey, ctrlKey, metaKey, altKey, target } = event;
        let { element, maskId } = params;
        let { props: elementProps, id } = element;
        if (elementProps.readonly)
            return;
        if (target.dataset.as == 'icon') {
            let elementNode = node(id);
            if (elementNode) {
                let elementVframe = Vframe.byNode(elementNode);
                if (elementVframe) {
                    elementVframe.invoke('@:{icon.pointer.down~rs}', [element]);
                }
            }
        }
        let { '@:{generic.all#map~rs}': elementsMap, 
        //'@:{stage.elements.map}': stageElementsMap,
        '@:{generic.all#elements~rs}': allElements, '@:{generic.all#element.hods~rs}': parentHods, } = stage_generic_1['@:{generic#get.all.elements.and.map~rs}']();
        if (!elementsMap[id])
            return;
        let elements = State.get('@:{global#stage.select.elements~rs}');
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        State.set({
            '@:{global#stage.contextmenu.under.item~rs}': null
        });
        let exist = 0;
        for (let m of elements) {
            if (m.id === element.id) {
                exist = 1;
                break;
            }
        }
        if (button) { //如果不是左键
            if (!exist) { //如果在当前选中的元素内找不到当前的，则激活当前
                if (stage_selection_1["@:{selection#set~rs}"](element)) {
                    history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], element.props.ename);
                }
            }
            State.set({
                '@:{global#stage.contextmenu.under.item~rs}': element
            });
            return;
        }
        if (shiftKey || ctrlKey || metaKey) { //多选
            this["@:{elements#single.or.multi.select~rs}"](element, 1, false);
        }
        else {
            cursor_1["@:{show.by.type~rs}"]('move');
            let startInfos = [], movedMap = {}, 
            //currentProps,
            //currentCtrl,
            //currentProps,
            isNowAdded; //临时聚焦的
            //hodOffsetX = 0,
            //hodOffsetY = 0;//容器偏移量，对于吸附格子，格子内要进行修正才能对应到背景网格上
            if (!exist) {
                isNowAdded = stage_selection_1["@:{selection#set~rs}"](element);
                elements.length = 0;
                elements.push(element);
            }
            let groups = State.get('@:{global#stage.elements.groups~rs}');
            let nearestElements = [];
            let newElements = [];
            let moveInfo, offsetInfo, page = State.get('@:{global#stage.page~rs}'), scale = State.get('@:{global#stage.scale~rs}');
            let snapElement = page.snapElement, supportSnapElement = const_1['@:{const#page.enable.snap.align.elements~rs}'];
            //snapGrid = page.grid && page.snapGrid;
            for (let e of elements) {
                if (!movedMap[e.id]) {
                    if (!flowProvider ||
                        !flowProvider['@:{flow.provider#is.connector~rs}'](e)) {
                        movedMap[e.id] = enum_1['@:{enum#follow.align.selected~rs}'];
                        newElements.push(e);
                        if (supportSnapElement) {
                            recoreHodElements(e, movedMap, parentHods);
                        }
                    }
                }
                let list = groups[e.id];
                if (list) {
                    for (let n of list) {
                        if (!movedMap[n]) {
                            let e = elementsMap[n];
                            if (!flowProvider ||
                                !flowProvider['@:{flow.provider#is.connector~rs}'](e)) {
                                movedMap[n] = enum_1['@:{enum#follow.align.grouped~rs}'];
                                newElements.push(e);
                                if (supportSnapElement) {
                                    recoreHodElements(e, movedMap, parentHods);
                                }
                            }
                        }
                    }
                }
            }
            //console.log(movedMap);
            let pinX = 0, pinY = 0;
            // let minLeftDistance = MaxNum;
            // let minTopDistance = MaxNum;
            // let minRightDistance = MaxNum;
            // let minBottomDistance = MaxNum;
            //let currentNode = node(element.id);
            // let hod = this['@:{elements#get.best.hod}'](currentNode);
            // let h = Const['@:{const#to.px}'](page.gridHeight) * scale,
            //     w = Const['@:{const#to.px}'](page.gridWidth) * scale;
            for (let e of newElements) {
                let { id, ctrl, props } = e;
                if (props.locked) {
                    pinX = 1;
                    pinY = 1;
                }
                else {
                    if (props.pinX) {
                        pinX = 1;
                    }
                    if (props.pinY) {
                        pinY = 1;
                    }
                }
                let i = {};
                let moveProps = ctrl['@:{move.props~rs}'];
                if (ctrl['@:{move.props.is.function~rs}']) {
                    moveProps = ctrl['@:{move.props~rs}'](props);
                }
                for (let m of moveProps) {
                    i[m.key] = const_1['@:{const#to.px~rs}'](props[m.key]);
                }
                // if (id == element.id) {
                //     currentProps = props;
                // }
                startInfos.push(i);
                // if (stageElementsMap[id]) {
                //     let area = StageGeneric["@:{query.area.by.xy.or.return.first}"](props);
                //     if (area) {
                //         let rect = Transform["@:{transform#rotate.rect}"](props, props.rotate || 0);
                //         let leftDistance = rect.left - area.x * scale;
                //         if (leftDistance < minLeftDistance) {
                //             minLeftDistance = leftDistance;
                //         }
                //         let rightDistance = (area.x + area.width) * scale - rect.right;
                //         if (rightDistance < minRightDistance) {
                //             minRightDistance = rightDistance;
                //         }
                //         let topDistance = rect.top - area.y * scale;
                //         if (topDistance < minTopDistance) {
                //             minTopDistance = topDistance;
                //         }
                //         let bottomDistance = (area.y + area.height) * scale - rect.bottom;
                //         if (bottomDistance < minBottomDistance) {
                //             minBottomDistance = bottomDistance;
                //         }
                //     }
                // }
            }
            //console.log(startInfos);
            // if (hod) {
            //     let destNode = hod['@:{node}'];
            //     let offset = GetHodOffset(destNode, page, scale);
            //     hodOffsetX = -offset.x;
            //     hodOffsetY = -offset.y;
            //     if (offset.x > w / 2) {
            //         hodOffsetX = w - offset.x;
            //     }
            //     if (offset.y > h / 2) {
            //         hodOffsetY = h - offset.y;
            //     }
            // }
            let elementMoved = 0, moveMinSize = const_1['@:{const#unit.px.aberration~rs}'](), startX, startY, sizesMap, testX, testY, altPressed = snapElement ? altKey : !altKey, snapOffset = const_1['@:{const#drag.snap.to.other.element.offset~rs}'] * scale;
            State.fire('@:{event#stage.toggle.scroll~rs}', {
                show: 1,
                size: 1
            });
            if (supportSnapElement) {
                let alignElements = stage_align_1['@:{align#query.align.elements~rs}'](allElements, maskId, element, movedMap);
                nearestElements = alignElements['@:{align.queried#align.elements.sizes~rs}'];
                startX = alignElements['@:{align.queried#start.x~rs}'];
                startY = alignElements['@:{align.queried#start.y~rs}'];
                let others = alignElements['@:{align.queried#together.elements.sizes~rs}'];
                let sInfo = stage_generic_1['@:{generic#query.test.position.and.sizes~rs}'](startX, startY, others);
                //console.log(sInfo);
                testX = sInfo['@:{test.x~rs}'];
                testY = sInfo['@:{test.y~rs}'];
                sizesMap = sInfo['@:{sizes.map~rs}'];
                //console.log(testX);
            }
            //console.log(testX, fixTestX);
            //console.log(startInfos, newElements);
            let offsetX;
            let offsetY;
            let moveElements = async () => {
                //console.log('enter');
                if (!moveInfo)
                    return;
                offsetX = moveInfo.pageX - event.pageX;
                offsetY = moveInfo.pageY - event.pageY;
                //console.log('real move', offsetX, offsetY);
                if (offsetInfo) {
                    offsetY += offsetInfo['@:{interval.move.event#y~rs}'];
                    offsetX += offsetInfo['@:{interval.move.event#x~rs}'];
                }
                // if (snapGrid) {
                //     let s = startInfos[currentIndex],
                //         findX = 0,
                //         findY = 0;
                //     let moveProps = currentCtrl['@:{move.props}'];
                //     if (currentCtrl['@:{move.props.is.function}']) {
                //         moveProps = currentCtrl['@:{move.props}'](currentProps);
                //     }
                //     for (let m of moveProps) {
                //         let v, r;
                //         if (m.use == 'x') {
                //             findX = 1;
                //             v = s[m.key] - hodOffsetX + offsetX;
                //             //console.log(s[m.key], hodOffsetX, offsetX);
                //             r = v % w;
                //             v = v - r;
                //             if (r > (w / 2)) {
                //                 v = v + w;
                //             }
                //             offsetX = v - s[m.key] + hodOffsetX;
                //             //offsetX += hodOffsetX;
                //         } else if (m.use == 'y') {
                //             findY = 1;
                //             v = s[m.key] + offsetY - hodOffsetY;
                //             r = v % h;
                //             v = v - r;
                //             if (r > (h / 2)) {
                //                 v = v + h;
                //             }
                //             offsetY = v - s[m.key] + hodOffsetY;
                //         }
                //         if (findX &&
                //             findY) {
                //             break;
                //         }
                //     }
                //     if (!findX) {
                //         offsetX = 0
                //     }
                //     if (!findY) {
                //         offsetY = 0;
                //     }
                // }
                if (pinX) {
                    offsetX = 0;
                }
                if (pinY) {
                    offsetY = 0;
                }
                //吸附逻辑可参考./header.ts中的注释
                if (supportSnapElement &&
                    testX) {
                    let snapInfo = stage_align_1['@:{align#find.and.fire.align.position~rs}'](nearestElements, startX, offsetX, startY, offsetY, sizesMap, testX, testY, pinX, pinY, altPressed, snapOffset, moveMinSize);
                    offsetX = snapInfo['@:{align#new.offset.x~rs}'];
                    offsetY = snapInfo['@:{align#new.offset.y~rs}'];
                    //console.log('y',offsetY);
                }
                let index = 0, ids = {}, types = {}, absX = abs(offsetX), absY = abs(offsetY);
                if (const_1['@:{const#great.than.or.approach~rs}'](absX, moveMinSize) ||
                    const_1['@:{const#great.than.or.approach~rs}'](absY, moveMinSize) ||
                    elementMoved) {
                    //console.log('moved', offsetX, offsetY);
                    for (let e of newElements) {
                        let s = startInfos[index++];
                        let { props, id, ctrl, type } = e;
                        let moveProps = ctrl['@:{move.props~rs}'];
                        if (ctrl['@:{move.props.is.function~rs}']) {
                            moveProps = ctrl['@:{move.props~rs}'](props);
                        }
                        for (let m of moveProps) {
                            let offset = (m.use == 'x' ? offsetX : offsetY);
                            props[m.key] = const_1['@:{const#to.unit~rs}'](s[m.key] + offset);
                            elementMoved = 1;
                        }
                        if (e.id == element.id) {
                            let tipMsg = `${transform_1['@:{transform#to.show.value~rs}'](props.x)} , ${transform_1['@:{transform#to.show.value~rs}'](props.y)}`;
                            tip_1['@:{show.text~rs}'](tipMsg);
                            tip_1['@:{update.position~rs}'](moveInfo.pageX, moveInfo.pageY);
                        }
                        let vf = Vframe.byNode(node(id));
                        if (vf) {
                            ids[id] = 1;
                            types[type] = 1;
                            if (ctrl['@:{update.props~rs}']) {
                                ctrl['@:{update.props~rs}'](props);
                            }
                            let r = await vf.invoke('assign', [{
                                    element: e
                                }]);
                            if (r !== false) {
                                vf.invoke('render');
                            }
                        }
                    }
                    if (offsetInfo && !offsetInfo['@:{interval.move.event#called~rs}']) {
                        offsetInfo['@:{interval.move.event#called~rs}'] = 1;
                        await taskFinale();
                        //await sleep(3000);
                        offsetInfo['@:{interval.move.event#ready~rs}']();
                    }
                    State.fire('@:{event#stage.select.element.props.change~rs}', {
                        '@:{ids~rs}': ids,
                        '@:{types~rs}': types,
                        '@:{props~rs}': {
                            '@:{position~rs}': 1
                        }
                    });
                }
            };
            /**
             * 监听设计器贴边滚动事件
             * @param e 内部滚动事件对象
             */
            let watchIntervalMove = (e) => {
                offsetInfo = e;
                moveElements();
            };
            /**
             * 监听键盘按键的按下抬起
             * @param e 按键按下抬起事件
             */
            let watchKeypress = (e) => {
                altPressed = snapElement ? e['@:{keypress#alt.key~rs}'] : !e['@:{keypress#alt.key~rs}'];
                moveElements();
            };
            //处理按键
            State.on('@:{event#stage.key.press~rs}', watchKeypress);
            //处理贴边滚动
            State.on('@:{event#stage.interval.move~rs}', watchIntervalMove);
            view['@:{drag.drop~rs}'](event, evt => {
                State.fire('@:{event#drag.element.move~rs}', evt);
                moveInfo = evt;
                moveElements();
            }, () => {
                State.off('@:{event#stage.key.press~rs}', watchKeypress);
                State.off('@:{event#stage.interval.move~rs}', watchIntervalMove);
                //console.log(offsetX, offsetY)
                if (elementMoved) {
                    delete this['@:{elements#last.pointer.down.event~rs}'];
                    if (const_1['@:{const#great.than.or.approach~rs}'](abs(offsetX), moveMinSize) ||
                        const_1['@:{const#great.than.or.approach~rs}'](abs(offsetY), moveMinSize)) {
                        let ename = stage_generic_1['@:{generic#query.element.name~rs}'](newElements);
                        history_1["@:{history#save~rs}"](history_1['@:{history#element.moved~rs}'], ename);
                    }
                }
                else if (!exist &&
                    isNowAdded) {
                    history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], element.props.ename);
                }
                if (!elementMoved) {
                    let lastEvent = this['@:{elements#last.pointer.down.event~rs}'];
                    if (lastEvent) {
                        //检测鼠标位置是否移动过
                        let distanceDiff = event.pageX - lastEvent.pageX + event.pageY - lastEvent.pageY;
                        //检测两次时间差
                        let timeDiff = nowTime() - this['@:{elements#last.pointer.down.time~rs}'];
                        if (!distanceDiff && //未移动过
                            timeDiff < const_1['@:{const#element.dblclick.interval.ms.time~rs}']) { //2次间隔
                            this['@:{elements#space.or.double.click.action~rs}'](element);
                        }
                    }
                    this['@:{elements#last.pointer.down.event~rs}'] = event;
                    this['@:{elements#last.pointer.down.time~rs}'] = nowTime();
                }
                State.fire('@:{event#stage.toggle.scroll~rs}', {
                    hide: 1
                });
                State.fire('@:{event#drag.element.stop~rs}');
                if (supportSnapElement) {
                    State.fire('@:{event#stage.find.snap.element~rs}');
                }
                cursor_1["@:{hide~rs}"]();
                tip_1['@:{hide~rs}']();
            });
        }
    },
    /**
     * 聚焦选择元素的格子
     */
    '@:{elements#focus.select.element.hod~rs}'() {
        let stages = stage_generic_1['@:{generic#query.select.elements.stage~rs}']();
        if (stages.length === 1) {
            let f = stages[0];
            if (f['@:{stage.type~rs}'] == '@:{hod~rs}') {
                let table = f['@:{hod~rs}'];
                let { props } = table;
                if (!props.readonly) {
                    props.focusRow = f['@:{row.index~rs}'];
                    props.focusCol = f['@:{col.index~rs}'];
                    State.fire('@:{event#stage.select.element.props.change~rs}', {
                        '@:{ids~rs}': {
                            [table.id]: 1
                        },
                        '@:{types~rs}': {
                            [table.type]: 1
                        },
                        '@:{props~rs}': {
                            '@:{focus.hod~rs}': 1
                        }
                    });
                    let n = node(table.id);
                    if (n) {
                        let vf = Vframe.byNode(n);
                        if (vf) {
                            vf.invoke('@:{update~rs}', [table]);
                        }
                    }
                    if (stage_selection_1["@:{selection#set~rs}"](table)) {
                        history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], props.ename);
                    }
                }
            }
        }
    },
    /**
     * 移动元素的z轴
     * @param to 移动方向
     * @param element 移动的元素
     */
    '@:{elements#modify.element.z.index~rs}'(to, element) {
        //3 top 4 bottom 5 to up 6 to down
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let index = -1;
        if (element &&
            !element.props.locked &&
            selectElements.length) {
            let elements = stage_generic_1["@:{generic#find.element.owner.collection~rs}"](selectElements[0]);
            let topElement = elements[elements.length - 1], bottomElement = elements[0];
            if (((to == 4 || to == 6) &&
                element.id != bottomElement.id) ||
                ((to == 3 || to == 5) &&
                    element.id != topElement.id)) {
                for (let i = elements.length; i--;) {
                    let e = elements[i];
                    if (e.id === element.id) {
                        elements.splice(index = i, 1);
                        break;
                    }
                }
                if (to == 3) {
                    elements.push(element);
                }
                else if (to == 4) {
                    elements.unshift(element);
                }
                else if (to == 5) {
                    elements.splice(index + 1, 0, element);
                }
                else if (to == 6) {
                    if (index === 0)
                        index = 1;
                    elements.splice(index - 1, 0, element);
                }
                history_1["@:{history#save~rs}"](history_1['@:{history#element.z.index~rs}'], element.props.ename);
                State.fire('@:{event#stage.elements.change~rs}');
            }
        }
    },
    /**
     * tab按键选择元素
     * @param revert 是否反向选择
     */
    '@:{elements#handle.key.tab~rs}'(revert) {
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let c = selectElements.length, current, select, stageElements = State.get('@:{global#stage.elements~rs}'), newElements = stage_generic_1['@:{generic#query.all.without.readonly.elements~rs}'](stageElements, 1);
        //未选或多选2个以上的我们取消多选，然后从头选择一个
        if (c != 1) {
            let first = newElements[revert ? 0 : newElements.length - 1];
            if (first) {
                select = first;
            }
        }
        else {
            current = selectElements[0];
            let findIndex = newElements.length;
            for (; findIndex--;) {
                let ne = newElements[findIndex];
                if (current.id == ne.id) {
                    break;
                }
            }
            if (revert) {
                findIndex++;
                if (findIndex >= newElements.length) {
                    findIndex = 0;
                }
            }
            else {
                findIndex--;
                if (findIndex < 0) {
                    findIndex = newElements.length - 1;
                }
            }
            select = newElements[findIndex];
        }
        if (select &&
            (!current ||
                select.id != current.id)) {
            stage_generic_1["@:{generic#scroll.into.view~rs}"](select.id);
            stage_selection_1["@:{selection#set~rs}"](select);
            history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], select.props.ename);
        }
    },
    /**
     * 移动元素及它所在的组合列表
     * @param groupList 组合元素id列表
     * @param use 使用x还是y进行移动
     * @param diff 移动距离
     * @param ids id对象，用于记录哪些元素进行了移动
     * @param groupListIsElement 指示groupList是否为元素数组
     */
    '@:{elements#move.elements.by.ids~rs}'(groupList, use, diff, ids, groupListIsElement) {
        let { '@:{generic.all#map~rs}': elementsMap } = stage_generic_1['@:{generic#get.all.elements.and.map~rs}']();
        //diff = Const['@:{const#to.unit}'](diff);
        for (let ge of groupList) {
            let m = groupListIsElement ? ge : elementsMap[ge];
            let { ctrl, props, id } = m;
            let elementNode = node(id);
            let vf;
            if (elementNode) {
                vf = Vframe.byNode(elementNode);
            }
            if (vf) {
                if (ids) {
                    ids[id] = 1;
                }
                let moveProps = ctrl['@:{move.props~rs}'];
                if (ctrl['@:{move.props.is.function~rs}']) {
                    moveProps = ctrl['@:{move.props~rs}'](props);
                }
                for (let x of moveProps) {
                    if (x.use == use) {
                        props[x.key] += diff;
                    }
                }
                if (ctrl['@:{update.props~rs}']) {
                    ctrl['@:{update.props~rs}'](props);
                }
                vf.invoke('assign', [{ element: m }]).then(r => {
                    if (r !== false) {
                        vf.invoke('render');
                    }
                });
            }
        }
    },
    /**
     * 对齐元素
     * @param to 对齐方式
     */
    '@:{elements#align.elements~rs}'(to) {
        let elements = State.get('@:{global#stage.select.elements~rs}');
        let underElement = State.get('@:{global#stage.contextmenu.under.item~rs}');
        let selectedElementsMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
        let groups = State.get('@:{global#stage.elements.groups~rs}');
        let { '@:{generic.all#map~rs}': elementsMap, '@:{generic.all#elements~rs}': stageElements } = stage_generic_1['@:{generic#get.all.elements.and.map~rs}']();
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        let maxRight = MinNum;
        let minLeft = MaxNum;
        let minTop = MaxNum;
        let maxBottom = MinNum;
        let minVCenter = MaxNum;
        let minHCenter = MaxNum;
        let compareId;
        State.set({
            '@:{global#stage.contextmenu.under.item~rs}': null
        });
        if (flowProvider) {
            elements = flowProvider["@:{flow.provider#remove.connector.from.elements~rs}"](elements, 1);
        }
        //console.log(underElement);
        let sizes = {};
        for (let m of stageElements) {
            let n = node('_rdm_' + m.id);
            let b = n.getBoundingClientRect();
            sizes[m.id] = {
                left: const_1['@:{const#to.unit~rs}'](b.x),
                top: const_1['@:{const#to.unit~rs}'](b.y),
                right: const_1['@:{const#to.unit~rs}'](b.right),
                bottom: const_1['@:{const#to.unit~rs}'](b.bottom),
                width: const_1['@:{const#to.unit~rs}'](b.width),
                height: const_1['@:{const#to.unit~rs}'](b.height)
            };
        }
        if (underElement) {
            compareId = underElement.id;
        }
        else {
            let elementIds = [];
            for (let m of elements) {
                elementIds.push(m.id);
            }
            compareId = QueryElementIdByBound(sizes, elementIds, to);
        }
        let { top, bottom, left, right } = sizes[compareId];
        maxRight = right;
        minLeft = left;
        minTop = top;
        maxBottom = bottom;
        minVCenter = top + (bottom - top) / 2;
        minHCenter = left + (right - left) / 2;
        let isChanged = 0;
        let newElements = [];
        let group = groups[compareId];
        let added = { [compareId]: 1 };
        let pinX = 0, pinY = 0;
        let moveWithGroup = 1;
        if (group) {
            for (let e of group) {
                added[e] = 1;
            }
        }
        for (let e of elements) {
            group = groups[e.id];
            if (group) {
                let newList = [];
                for (let g of group) {
                    if (selectedElementsMap[g] &&
                        !added[g]) {
                        newList.push(g);
                    }
                }
                if (newList.length) {
                    let cId = QueryElementIdByBound(sizes, newList, to);
                    if (!added[cId]) {
                        added[cId] = 1;
                        newElements.push(elementsMap[cId]);
                        for (let n of newList) {
                            added[n] = 1;
                        }
                    }
                }
            }
            else if (!added[e.id]) {
                added[e.id] = 1;
                newElements.push(e);
            }
        }
        if (!newElements.length &&
            group) {
            moveWithGroup = 0;
            for (let e of elements) {
                if (e.id != compareId) {
                    newElements.push(e);
                }
            }
        }
        for (let { props } of newElements) {
            if (props.locked) {
                pinX = 1;
                pinY = 1;
            }
            else {
                if (props.pinX) {
                    pinX = 1;
                }
                if (props.pinY) {
                    pinY = 1;
                }
            }
            if (pinX &&
                pinY) {
                break;
            }
        }
        //分组后的移动
        /**
         * 如果选中的元素处于同一分组中，则只对齐当前选中的元素，分组中的其它元素则不移动，可以理解为分组内的操作只影响选中的元素
         * 如果选中的元素处于不同分组中，则从中挑出固定对齐元素，其所在分组中的元素均不移动，其它分组中的元素则全部移动相应的距离
         */
        let ids = {}, types = {};
        for (let m of newElements) {
            let bound = sizes[m.id];
            let use, diff = 0;
            if (to == 'right' && !pinX) {
                diff = maxRight - bound.right;
                use = 'x';
            }
            else if (to == 'left' && !pinX) {
                diff = minLeft - bound.left;
                use = 'x';
            }
            else if (to == 'top' && !pinY) {
                diff = minTop - bound.top;
                use = 'y';
            }
            else if (to == 'bottom' && !pinY) {
                diff = maxBottom - bound.bottom;
                use = 'y';
            }
            else if (to == 'middle' && !pinY) {
                diff = minVCenter - (bound.top + bound.height / 2);
                use = 'y';
            }
            else if (to == 'center' && !pinX) {
                diff = minHCenter - (bound.left + bound.width / 2);
                use = 'x';
            }
            let mDiff = const_1['@:{const#scale.to.unit~rs}'](diff);
            //console.log(mDiff);
            if (mDiff) {
                ids[m.id] = 1;
                types[m.type] = 1;
                isChanged = 1;
                let groupList = moveWithGroup && groups[m.id] || [m.id];
                this['@:{elements#move.elements.by.ids~rs}'](groupList, use, diff, ids);
            }
        }
        if (isChanged) {
            State.fire('@:{event#stage.select.element.props.change~rs}', {
                '@:{ids~rs}': ids,
                '@:{types~rs}': types,
                '@:{props~rs}': {
                    '@:{position~rs}': 1
                }
            });
            history_1["@:{history#save~rs}"](history_1['@:{history#element.aligned~rs}']);
        }
    },
    // async '@:{same.size.elements}'(to, shiftKey) {
    //     let elements = State.get('@:{global#stage.select.elements}');
    //     let maxWidth = MinNum,
    //         maxHeight = MinNum,
    //         minWidth = MaxNum,
    //         minHeight = MaxNum;
    //     for (let m of elements) {
    //         let props = m.props;
    //         if (props.width > maxWidth) {
    //             maxWidth = props.width;
    //         }
    //         if (props.width < minWidth) {
    //             minWidth = props.width;
    //         }
    //         if (props.height > maxHeight) {
    //             maxHeight = props.height;
    //         }
    //         if (props.height < minHeight) {
    //             minHeight = props.height;
    //         }
    //     }
    //     let isChanged = 0;
    //     let ids = {},
    //         types = {};
    //     for (let m of elements) {
    //         let { props, ctrl } = m,
    //             lChanged = 0,
    //             temp,
    //             old = Transform["@:{transform#get.rect.xy}"](props);
    //         if (to == 'width') {
    //             temp = shiftKey ? minWidth : maxWidth;
    //             if (props.width != temp) {
    //                 lChanged = 1;
    //                 props.width = temp;
    //             }
    //         } else {
    //             temp = shiftKey ? minHeight : maxHeight;
    //             if (props.height != temp) {
    //                 lChanged = 1;
    //                 props.height = temp;
    //             }
    //         }
    //         if (lChanged) {
    //             ids[m.id] = 1;
    //             types[m.type] = 1;
    //             isChanged = 1;
    //             let syncProps = ctrl['@:{sync.props}'];
    //             let syncTo = syncProps && syncProps[to];
    //             if (syncTo) {
    //                 props[syncTo] = props[to];
    //             }
    //             let n = Transform["@:{transform#get.rect.xy}"](props);
    //             //console.log(old, n);
    //             props.x += old.x - n.x;
    //             props.y += old.y - n.y;
    //             if (ctrl['@:{update.props}']) {
    //                 ctrl['@:{update.props}'](props);
    //             }
    //             let vf = Vframe.byNode(node(m.id));
    //             if (vf) {
    //                 let r = await vf.invoke('assign', [{ element: m }]);
    //                 if (r !== false) {
    //                     vf.invoke('render');
    //                 }
    //             }
    //         }
    //     }
    //     if (isChanged) {
    //         State.fire('@:{event#stage.select.element.props.change}', {
    //             '@:{ids}': ids,
    //             '@:{types}': types,
    //             '@:{props}': {
    //                 '@:{position}': 1
    //             }
    //         });
    //         DHistory["@:{history#save}"](54);
    //     }
    // },
    /**
     * 同步宽高或把某个元素的宽同步为高
     * @param from from为1时代表宽，否则为高
     * @param to to为1时代表宽，否则为高
     */
    async '@:{elements#sync.or.reverse.size.elements~rs}'(from, to) {
        let elements = State.get('@:{global#stage.select.elements~rs}');
        if (elements.length == 2) {
            let underElement = State.get('@:{global#stage.contextmenu.under.item~rs}');
            let [first, second] = elements;
            let source = first == underElement ? second : first;
            State.set({
                '@:{global#stage.contextmenu.under.item~rs}': null
            });
            let { props: destProps, ctrl, id } = underElement;
            let fromKey = from == 1 ? 'width' : 'height';
            let destKey = to == 1 ? 'width' : 'height';
            //console.log(fromKey, destKey);
            let sourceProps = source.props;
            if (sourceProps[fromKey] != destProps[destKey]) {
                let oldRotatedRect = transform_1['@:{transform#rotate.rect~rs}'](destProps);
                let old = oldRotatedRect['@:{point~rs}'][0];
                let r;
                if (ctrl['@:{modifier~rs}'] & enum_1['@:{enum#modifier.sync.size~rs}']) {
                    r = destProps.height ? destProps.width / destProps.height : 0;
                }
                destProps[destKey] = sourceProps[fromKey];
                if (r) {
                    if (to == 1) {
                        destProps.height = destProps.width / r;
                    }
                    else {
                        destProps.width = destProps.height * r;
                    }
                }
                let newRotated = transform_1['@:{transform#rotate.rect~rs}'](destProps);
                let n = newRotated['@:{point~rs}'][0];
                //console.log(old, n);
                destProps.x += old.x - n.x;
                destProps.y += old.y - n.y;
                if (ctrl['@:{update.props~rs}']) {
                    ctrl['@:{update.props~rs}'](destProps);
                }
                let vf = Vframe.byNode(node(id));
                if (vf) {
                    let r = await vf.invoke('assign', [{ element: underElement }]);
                    if (r !== false) {
                        vf.invoke('render');
                    }
                }
                return [1, id, underElement];
            }
        }
        return [0, 0];
    },
    /**
     * 均匀分布元素
     * @param to 如何均分
     * @param shift 是否使用元素中心点
     */
    '@:{elements#avg.elements~rs}'(to, shift) {
        let elements = State.get('@:{global#stage.select.elements~rs}');
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        let groups = State.get('@:{global#stage.elements.groups~rs}');
        if (flowProvider) {
            elements = flowProvider["@:{flow.provider#remove.connector.from.elements~rs}"](elements, 1);
        }
        let avgY;
        let avgX;
        let vertical = to == 'v', canAvg = 1, sort;
        let maxCX = MinNum, minCX = MaxNum, maxCY = MinNum, minCY = MaxNum, maxBottom = MinNum, maxRight = MinNum, tempArray = [], differentGroups = 0, moveWithGroup = 1, queried = {};
        for (let m of elements) {
            let group = groups[m.id];
            if (group) {
                if (!queried[group]) {
                    queried[group] = 1;
                    differentGroups++;
                }
            }
            else {
                differentGroups++;
            }
            let bound = node('_rdm_' + m.id).getBoundingClientRect();
            let { x, y, width, height, bottom, right } = bound;
            let mx = x, my = y;
            if (shift) {
                mx += width / 2;
                my += height / 2;
            }
            if (mx > maxCX) {
                maxCX = mx;
            }
            if (mx < minCX) {
                minCX = mx;
            }
            if (my > maxCY) {
                maxCY = my;
            }
            if (my < minCY) {
                minCY = my;
            }
            if (right > maxRight) {
                maxRight = right;
            }
            if (bottom > maxBottom) {
                maxBottom = bottom;
            }
            tempArray.push([mx, my, m, width, height, right, bottom]);
        }
        if (differentGroups < 2) {
            moveWithGroup = 0;
        }
        let isChanged;
        let ids = {}, types = {};
        let startIndex = 1;
        let endIndex = tempArray.length - 1;
        let count = endIndex;
        if (vertical) {
            sort = (a, b) => {
                if (!shift) {
                    if (a[6] == maxBottom) {
                        return 1;
                    }
                    else if (b[6] == maxBottom) {
                        return -1;
                    }
                }
                return a[1] - b[1] || b[0] - a[0];
            };
        }
        else {
            sort = (a, b) => {
                if (!shift) {
                    if (a[5] == maxRight) {
                        return 1;
                    }
                    else if (b[5] == maxRight) {
                        return -1;
                    }
                }
                return a[0] - b[0] || b[1] - a[1];
            };
        }
        tempArray.sort(sort);
        let prev = tempArray[0];
        if (shift) {
            avgY = round((maxCY - minCY) / count);
            avgX = round((maxCX - minCX) / count);
        }
        else {
            let totalInnerWidth = 0, totalInnerHeight = 0, maxHeight = maxBottom - minCY, maxWith = maxRight - minCX;
            for (let e of tempArray) {
                if ((vertical && const_1['@:{const#approach~rs}'](maxHeight, e[4])) ||
                    (!vertical && const_1['@:{const#approach~rs}'](maxWith, e[3]))) {
                    canAvg = 0;
                    break;
                }
                totalInnerWidth += e[3];
                totalInnerHeight += e[4];
            }
            avgY = round((maxHeight - totalInnerHeight) / count);
            avgX = round((maxWith - totalInnerWidth) / count);
        }
        if (canAvg) {
            for (let i = startIndex; i < endIndex; i++) {
                let now = tempArray[i], m = now[2], dest, current, use;
                if (shift) {
                    if (vertical) {
                        dest = i * avgY + minCY;
                        current = now[1];
                        use = 'y';
                    }
                    else {
                        dest = i * avgX + minCX;
                        current = now[0];
                        use = 'x';
                    }
                }
                else {
                    if (vertical) {
                        dest = prev[1] + prev[4] + avgY;
                        current = now[1];
                        now[1] = dest;
                        use = 'y';
                    }
                    else {
                        dest = prev[0] + prev[3] + avgX;
                        current = now[0];
                        now[0] = dest;
                        use = 'x';
                    }
                }
                prev = now;
                let d = const_1['@:{const#scale.to.unit~rs}'](const_1['@:{const#to.unit~rs}'](dest - current));
                if (d) {
                    ids[m.id] = 1;
                    types[m.type] = 1;
                    isChanged = 1;
                    let groupList = moveWithGroup && groups[m.id] || [m.id];
                    this['@:{elements#move.elements.by.ids~rs}'](groupList, use, d, ids);
                }
            }
        }
        if (isChanged) {
            State.fire('@:{event#stage.select.element.props.change~rs}', {
                '@:{ids~rs}': ids,
                '@:{types~rs}': types,
                '@:{props~rs}': {
                    '@:{position~rs}': 1
                }
            });
            history_1['@:{history#save~rs}'](vertical ? history_1['@:{history#element.avg.v~rs}'] : history_1['@:{history#element.avg.h~rs}']);
        }
    },
    /**
     * 设计区内均匀分布元素
     * @param to 如何均分
     * @param shift 是否使用元素中心点
     */
    '@:{elements#stage.avg.elements~rs}'(to, shift, control) {
        let stages = stage_generic_1['@:{generic#query.select.elements.stage~rs}']();
        let groups = State.get('@:{global#stage.elements.groups~rs}');
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        let page = State.get('@:{global#stage.page~rs}');
        let selectElementsMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
        let isChanged;
        let ids = {}, types = {}, vertical = to == 'sv', maxPages = page.pages;
        if (control) {
            shift = 0;
        }
        let newStages = [], elementInPages = {};
        for (let stage of stages) {
            let rootBound = node(stage['@:{container~rs}']).getBoundingClientRect();
            let one = {
                '@:{bound.x~rs}': rootBound.x,
                '@:{bound.y~rs}': rootBound.y,
                '@:{bound.width~rs}': rootBound.width,
                '@:{bound.height~rs}': rootBound.height,
                '@:{move.with.group~rs}': 1,
                '@:{selected~rs}': [],
                '@:{offset.y~rs}': 0
            };
            let selectedElements = stage['@:{selected~rs}'];
            if (flowProvider) {
                selectedElements = flowProvider["@:{flow.provider#remove.connector.from.elements~rs}"](selectedElements, 1);
            }
            let differentGroups = 0, sameGroupCount = 0, fullSelected = 0, queried = {};
            for (let e of selectedElements) {
                let group = groups[e.id];
                if (group) {
                    if (!queried[group]) {
                        queried[group] = 1;
                        sameGroupCount = 0;
                        differentGroups++;
                        for (let g of group) {
                            if (selectElementsMap[g]) {
                                sameGroupCount++;
                            }
                        }
                        if (sameGroupCount == group.length) {
                            fullSelected++;
                        }
                    }
                }
                else {
                    differentGroups++;
                }
            }
            if (differentGroups == 1 &&
                fullSelected == 1) {
                one['@:{move.with.group~rs}'] = 0;
            }
            let pre = one;
            for (let e of selectedElements) {
                let bound = node('_rdm_' + e.id).getBoundingClientRect();
                if (stage['@:{stage.type~rs}'] == '@:{stage~rs}') {
                    let single = (rootBound.height / maxPages);
                    let whichPages = floor((bound.y - rootBound.y) / single);
                    whichPages = max(min(whichPages, maxPages - 1), 0);
                    let inPage = whichPages * single;
                    if (!has(elementInPages, inPage)) {
                        pre = const_1['@:{const#clone~rs}'](one);
                        pre['@:{offset.y~rs}'] = inPage;
                        pre['@:{bound.height~rs}'] = single;
                        newStages.push(elementInPages[inPage] = pre);
                    }
                    else {
                        pre = elementInPages[inPage];
                    }
                }
                pre['@:{selected~rs}'].push({
                    '@:{bound~rs}': bound,
                    '@:{element~rs}': e
                });
            }
            if (stage['@:{stage.type~rs}'] == '@:{hod~rs}') {
                newStages.push(pre);
            }
        }
        for (let stage of newStages) {
            let rootBoundX = stage['@:{bound.x~rs}'];
            let rootBoundY = stage['@:{bound.y~rs}'];
            let stageWidth = stage['@:{bound.width~rs}'];
            let stageHeight = stage['@:{bound.height~rs}'];
            let prev = [rootBoundX, rootBoundY + stage['@:{offset.y~rs}'], 0, 0, 0];
            let selectedElements = stage['@:{selected~rs}'];
            let maxCX = MinNum, minCX = MaxNum, maxCY = MinNum, minCY = MaxNum, maxRight = MinNum, maxBottom = MinNum, moveWithGroup = stage['@:{move.with.group~rs}'], tempArray = [];
            for (let { '@:{bound~rs}': bound, '@:{element~rs}': m } of selectedElements) {
                let { x, y, width, height, right, bottom } = bound;
                let mx = x, my = y;
                if (shift) {
                    mx += width / 2;
                    my += height / 2;
                }
                if (mx > maxCX) {
                    maxCX = mx;
                }
                if (mx < minCX) {
                    minCX = mx;
                }
                if (my > maxCY) {
                    maxCY = my;
                }
                if (my < minCY) {
                    minCY = my;
                }
                if (bottom > maxBottom) {
                    maxBottom = bottom;
                }
                if (right > maxRight) {
                    maxRight = right;
                }
                tempArray.push([mx, my, m, width, height]);
            }
            let count = tempArray.length;
            let avgY;
            let avgX;
            let canAvg = 1, sort;
            if (vertical) {
                sort = (a, b) => {
                    return a[1] - b[1] || b[0] - a[0];
                };
            }
            else {
                sort = (a, b) => {
                    return a[0] - b[0] || b[1] - a[1];
                };
            }
            tempArray.sort(sort);
            if (control) {
                avgY = (rootBoundY + stageHeight / 2) - (minCY + (maxBottom - minCY) / 2);
                avgX = (rootBoundX + stageWidth / 2) - (minCX + (maxRight - minCX) / 2);
            }
            else if (shift) {
                avgY = stageHeight / (count + 1);
                avgX = stageWidth / (count + 1);
            }
            else {
                let totalInnerWidth = 0, totalInnerHeight = 0;
                for (let e of tempArray) {
                    totalInnerWidth += e[3];
                    totalInnerHeight += e[4];
                }
                avgY = (stageHeight - totalInnerHeight) / (count + 1);
                avgX = (stageWidth - totalInnerWidth) / (count + 1);
            }
            if (canAvg) {
                for (let now of tempArray) {
                    let m = now[2], dest, current, use;
                    if (shift) {
                        if (vertical) {
                            dest = prev[1] + avgY;
                            current = now[1];
                            now[1] = dest;
                            use = 'y';
                        }
                        else {
                            dest = prev[0] + avgX;
                            current = now[0];
                            now[0] = dest;
                            use = 'x';
                        }
                    }
                    else {
                        if (vertical) {
                            if (control) {
                                dest = now[1] + avgY;
                            }
                            else {
                                dest = prev[1] + prev[4] + avgY;
                            }
                            current = now[1];
                            now[1] = dest;
                            use = 'y';
                        }
                        else {
                            if (control) {
                                dest = now[0] + avgX;
                            }
                            else {
                                dest = prev[0] + prev[3] + avgX;
                            }
                            current = now[0];
                            now[0] = dest;
                            use = 'x';
                        }
                    }
                    prev = now;
                    let d = const_1['@:{const#scale.to.unit~rs}'](const_1['@:{const#to.unit~rs}'](dest - current));
                    if (d) {
                        ids[m.id] = 1;
                        types[m.type] = 1;
                        isChanged = 1;
                        let groupList = moveWithGroup && groups[m.id] || [m.id];
                        this['@:{elements#move.elements.by.ids~rs}'](groupList, use, d, ids);
                    }
                }
            }
        }
        if (isChanged) {
            State.fire('@:{event#stage.select.element.props.change~rs}', {
                '@:{ids~rs}': ids,
                '@:{types~rs}': types,
                '@:{props~rs}': {
                    '@:{position~rs}': 1
                }
            });
            history_1['@:{history#save~rs}'](vertical ? history_1['@:{history#element.avg.v~rs}'] : history_1['@:{history#element.avg.h~rs}']);
        }
    },
    /**
     * 获取最佳的设计区元素列表对象
     * @param e 添加元素事件对象
     * @param silent 是否静默添加
     * @param cell 格子对象
     * @param srcCtrl 当前元素的ctrl对象
     */
    '@:{elements#get.best.collection~rs}'(e, silent, cell, srcCtrl) {
        let current = State.get('@:{global#stage.select.elements~rs}');
        let clicked = !e.node;
        //let { areas } = State.get('@:{global#stage.page}');
        // let collectionType = '@:{stage}';
        // let area;
        let first = current[0], xy = transform_1["@:{transform#real.to.stage.coord~rs}"]({
            x: e.pageX,
            y: e.pageY
        }), collection = State.get('@:{global#stage.elements~rs}'), find = 0, focus = 1; //,
        //collType = '@:{stage}';
        if (clicked &&
            current.length == 1 &&
            (first.ctrl.as & enum_1['@:{enum#as.hod~rs}']) &&
            first.props.focusRow > -1) {
            let { rows, focusRow, focusCol } = first.props;
            let row = rows[focusRow];
            if (row &&
                (!first.ctrl['@:{allowed.elements~rs}'] ||
                    first.ctrl['@:{allowed.elements~rs}'][srcCtrl.type]) &&
                (!srcCtrl['@:{allowed.to.hod~rs}'] ||
                    srcCtrl['@:{allowed.to.hod~rs}'][first.type])) {
                let cell = row.cols[focusCol];
                if (cell) {
                    collection = cell.elements;
                    let height = row.height != null ? row.height : cell.height;
                    let width = row.width != null ? row.width : cell.width;
                    xy = {
                        x: random() * width / 4,
                        y: random() * height / 4
                    };
                    focus = 0;
                    find = 1;
                }
            }
        }
        else if (!clicked && cell) {
            let maskNode = node(cell['@:{mask.id~rs}']);
            if (maskNode) {
                let bound = maskNode.getBoundingClientRect();
                xy = {
                    x: e.pageX - bound.x,
                    y: e.pageY - bound.y
                };
                collection = cell['@:{elements~rs}'];
                find = 1;
            }
        }
        if (!find) {
            if (clicked) {
                xy = transform_1["@:{transform#stage.to.real.coord~rs}"](xy);
            }
            if (srcCtrl['@:{allowed.to.hod~rs}'] &&
                !srcCtrl['@:{allowed.to.hod~rs}'].root) {
                collection = 0;
            }
            // if (collection &&
            //     areas.length) {
            //     xy.width = e.width;
            //     xy.height = e.height;
            //     area = StageGeneric["@:{query.in.which.area}"](xy);
            //     if (clicked) {
            //         if (!area) {
            //             area = areas[0];
            //         }
            //     } else if (!area) {
            //         collection = 0;
            //     }
            // }
        }
        if (silent) {
            focus = 0;
        }
        return {
            '@:{collection~rs}': collection,
            '@:{position.xy~rs}': xy,
            '@:{focus.add.element~rs}': focus,
            //'@:{collection.type}': collectionType,
            //'@:{area}': area
        };
    },
    /**
     * 获取最佳格子
     * @param testNode 待检测dom节点
     * @param ctrl 当前元素的ctrl对象
     */
    '@:{elements#get.best.hod~rs}'(testNode, ctrl) {
        let elements = State.get('@:{global#stage.elements~rs}'), cell = null;
        let walk = es => {
            for (let e of es) {
                let { type, id, ctrl: elementCtrl, props } = e;
                let n = node(id);
                if (inside(testNode, n)) {
                    //consolex.log(elementCtrl['@:{allowed.elements}'],ctrl.type);
                    if ((elementCtrl.as & enum_1['@:{enum#as.hod~rs}']) &&
                        (!ctrl ||
                            !elementCtrl['@:{allowed.elements~rs}'] ||
                            elementCtrl['@:{allowed.elements~rs}'][ctrl.type])) {
                        let rows = props.rows;
                        for (let i = rows.length; i--;) {
                            let row = rows[i];
                            for (let j = row.cols.length; j--;) {
                                let cellId = `_${id}_${i}_${j}`;
                                let n = node(`_rd_h${cellId}`);
                                let c = row.cols[j];
                                let { elements } = c;
                                if (inside(testNode, n) &&
                                    !props.locked) {
                                    if (!ctrl ||
                                        !ctrl['@:{allowed.to.hod~rs}'] ||
                                        ctrl['@:{allowed.to.hod~rs}'][type]) {
                                        let canGenerateCell = true;
                                        if (ctrl) {
                                            let counter = ctrl['@:{allowed.stage.count~rs}'];
                                            if (counter >= 0) {
                                                let t = 0;
                                                if (elements) {
                                                    for (let x of elements) {
                                                        if (x.type == ctrl.type) {
                                                            t++;
                                                        }
                                                    }
                                                }
                                                canGenerateCell = t < counter;
                                            }
                                        }
                                        if (canGenerateCell) {
                                            cell = {
                                                '@:{owner.type~rs}': type,
                                                '@:{node~rs}': n,
                                                '@:{dashed.id~rs}': `_rd_dm${cellId}`,
                                                '@:{mask.id~rs}': `_rd_hm${cellId}`,
                                                '@:{elements~rs}': elements
                                            };
                                        }
                                    }
                                    if (elements) {
                                        walk(elements);
                                    }
                                }
                            }
                        }
                    }
                    break;
                }
            }
        };
        walk(elements);
        return cell;
    },
    /**
     * 展示右键菜单
     * @param view Magix.View对象
     * @param event 鼠标事件对象
     * @param collection 当前触发事件所对应的元素集合
     * @param hodId 格子id
     * @param picked 右键菜单点击时的回调
     */
    '@:{elements#show.contextmenu~rs}'(view, event, collection, hodId, picked) {
        //右键菜单
        let lang = config('lang');
        let list;
        let disabled = {};
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let selectElementsMap = stage_selection_1['@:{selection#get.selected.map~rs}']();
        let selectCount = selectElements.length;
        //element : 右键时，处于右键下的文件
        let element = selectElements[0] || view.get('element');
        let eleProps = element && element.props;
        let readonly, locked;
        if (eleProps) {
            readonly = eleProps.readonly;
            locked = readonly || eleProps.locked;
        }
        let currentCollection = collection;
        if (hodId && hodId == element.id) {
            selectCount = 0;
        }
        if (selectCount == 1) { //只有一个元素处于选中状态
            list = contextmenu_1["@:{cm#single.element~rs}"](lang); //获取相应的菜单列表
            let topElement = collection[collection.length - 1]; //处理z轴关系
            let bottomElement = collection[0];
            let atTop = topElement.id == element.id;
            let atBottom = bottomElement.id == element.id;
            let enable = stage_generic_1['@:{generic#query.in.enable.hod~rs}'](selectElementsMap);
            disabled[contextmenu_1["@:{cm#up.id~rs}"]] = locked || atTop;
            disabled[contextmenu_1["@:{cm#top.id~rs}"]] = locked || atTop;
            disabled[contextmenu_1["@:{cm#bottom.id~rs}"]] = locked || atBottom;
            disabled[contextmenu_1["@:{cm#down.id~rs}"]] = locked || atBottom;
            disabled[contextmenu_1['@:{cm#delete.id~rs}']] = enable != 1 || locked;
        }
        else if (selectCount > 1) { //多选
            let syncDisabled, syncWidth = 1, syncHeight = 1, syncWidthAsHeight = 1, syncHeightAsWidth = 1;
            if (selectCount == 2) { //如果有2个元素处于选中
                //开启尺寸同步功能
                syncDisabled = 0;
                //2个元素显示的右键菜单
                list = contextmenu_1['@:{cm#double.element~rs}'](lang);
            }
            else {
                syncDisabled = 1;
                //3个元素
                list = contextmenu_1["@:{cm#multiple.element~rs}"](lang);
            }
            let underElement = State.get('@:{global#stage.contextmenu.under.item~rs}');
            if (!syncDisabled) { //正好有2个元素
                let [first, second] = selectElements;
                let from = first == underElement ? second : first;
                let fromCtrlModifier = from.ctrl['@:{modifier~rs}'], toCtrlModifier = underElement.ctrl['@:{modifier~rs}'];
                let fromFlag = 1, toFlag = 1;
                //根据元素控制器提供的相应的能否修改宽高能力，决定元素之间的宽高菜单项能否工作
                if (fromCtrlModifier & enum_1['@:{enum#modifier.width~rs}']) {
                    fromFlag |= 2;
                }
                if (fromCtrlModifier & enum_1['@:{enum#modifier.height~rs}']) {
                    fromFlag |= 4;
                }
                if (fromCtrlModifier & enum_1['@:{enum#modifier.size~rs}']) {
                    fromFlag = 7;
                }
                //鼠标下的元素未处于锁定状态
                if (!underElement.props.locked) {
                    if (toCtrlModifier & enum_1['@:{enum#modifier.width~rs}']) {
                        toFlag |= 2;
                    }
                    if (toCtrlModifier & enum_1['@:{enum#modifier.height~rs}']) {
                        toFlag |= 4;
                    }
                    if (toCtrlModifier & enum_1['@:{enum#modifier.size~rs}']) {
                        toFlag = 7;
                    }
                }
                //检查相应的同步宽高是否可用
                if (fromFlag & 2) {
                    if (toFlag & 2) {
                        syncWidth = 0;
                    }
                    if (toFlag & 4) {
                        syncWidthAsHeight = 0;
                    }
                }
                if (fromFlag & 4) {
                    if (toFlag & 4) {
                        syncHeight = 0;
                    }
                    if (toFlag & 2) {
                        syncHeightAsWidth = 0;
                    }
                }
            }
            let alignInfo = stage_generic_1['@:{generic#query.can.align~rs}'](underElement), xCanotAlign = !alignInfo['@:{generic.align#x.can.align~rs}'], yCanotAlign = !alignInfo['@:{generic.align#y.can.align~rs}'];
            let enable = stage_generic_1['@:{generic#query.in.enable.hod~rs}'](selectElementsMap);
            let hasDisabled = stage_generic_1['@:{generic#query.has.disabled~rs}'](selectElements);
            disabled[contextmenu_1["@:{cm#sync.height.as.width.id~rs}"]] = syncHeightAsWidth;
            disabled[contextmenu_1["@:{cm#sync.width.as.height.id~rs}"]] = syncWidthAsHeight;
            disabled[contextmenu_1["@:{cm#sync.height.id~rs}"]] = syncHeight;
            disabled[contextmenu_1["@:{cm#sync.width.id~rs}"]] = syncWidth;
            disabled[contextmenu_1["@:{cm#align.bottom.id~rs}"]] = yCanotAlign;
            disabled[contextmenu_1["@:{cm#align.left.id~rs}"]] = xCanotAlign;
            disabled[contextmenu_1["@:{cm#align.top.id~rs}"]] = yCanotAlign;
            disabled[contextmenu_1["@:{cm#align.right.id~rs}"]] = xCanotAlign;
            disabled[contextmenu_1["@:{cm#align.center.id~rs}"]] = xCanotAlign;
            disabled[contextmenu_1["@:{cm#align.middle.id~rs}"]] = yCanotAlign;
            disabled[contextmenu_1['@:{cm#delete.id~rs}']] = enable != 1 || hasDisabled;
        }
        else {
            if (hodId) { //容器格子的右键菜单需要查询z轴
                list = contextmenu_1["@:{cm#hod.stage~rs}"](lang);
                let ownerColl = stage_generic_1["@:{generic#find.element.owner.collection~rs}"](element);
                let topElement = ownerColl[ownerColl.length - 1];
                let bottomElement = ownerColl[0];
                let atTop = topElement.id == element.id;
                let atBottom = bottomElement.id == element.id;
                disabled[contextmenu_1["@:{cm#up.id~rs}"]] = locked || atTop;
                disabled[contextmenu_1["@:{cm#top.id~rs}"]] = locked || atTop;
                disabled[contextmenu_1["@:{cm#bottom.id~rs}"]] = locked || atBottom;
                disabled[contextmenu_1["@:{cm#down.id~rs}"]] = locked || atBottom;
                let nonreadonlyElements = stage_generic_1['@:{generic#query.all.without.readonly.elements~rs}'](collection);
                disabled[contextmenu_1['@:{cm#clear.hod.stage.id~rs}']] = !nonreadonlyElements.length;
                disabled[contextmenu_1['@:{cm#reverse.id~rs}']] = readonly;
            }
            else {
                list = contextmenu_1["@:{cm#stage~rs}"](lang);
                disabled[contextmenu_1['@:{cm#clear.id~rs}']] = !stage_generic_1['@:{generic#query.can.clear.stage~rs}']();
                disabled[contextmenu_1['@:{cm#new.id~rs}']] = !stage_generic_1['@:{generic#query.can.create.new.page~rs}']();
                currentCollection = State.get('@:{global#stage.elements~rs}');
            }
            collection = stage_generic_1['@:{generic#filter.elements~rs}'](collection, 0, 1);
            disabled[contextmenu_1["@:{cm#all.id~rs}"]] = !collection.length;
            disabled[contextmenu_1["@:{cm#delete.id~rs}"]] = !hodId || readonly || locked;
        }
        if (selectCount) {
            let { '@:{can.ungroup~rs}': canUngroup, '@:{can.group~rs}': canGroup } = stage_generic_1["@:{generic#query.group.state~rs}"]();
            disabled[contextmenu_1["@:{cm#group.id~rs}"]] = !canGroup;
            disabled[contextmenu_1["@:{cm#ungroup.id~rs}"]] = !canUngroup;
        }
        let copyElements = stage_clipboard_1["@:{get.copy.list~rs}"]();
        let cxvInfo = stage_generic_1['@:{generic#query.can.cxv~rs}'](copyElements, element, currentCollection);
        disabled[contextmenu_1['@:{cm#cut.id~rs}']] = !cxvInfo['@:{can.cut~rs}'];
        disabled[contextmenu_1['@:{cm#copy.id~rs}']] = !cxvInfo['@:{can.copy~rs}'];
        disabled[contextmenu_1['@:{cm#duplicate.id~rs}']] = !cxvInfo['@:{can.copy~rs}'] || !cxvInfo['@:{can.duplicate~rs}'];
        disabled[contextmenu_1['@:{cm#paste.id~rs}']] = !cxvInfo['@:{can.paste~rs}'];
        index_1.show(view, event, contextMenuId, {
            list: list,
            disabled,
            picked
        });
    }
};

});