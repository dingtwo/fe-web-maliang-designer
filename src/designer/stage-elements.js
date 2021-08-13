/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/64",["5c","../5j/6d/index","../5j/5l/cursor","../5n/index","./5e","./5t","./enum","./5o","./63","./68","./65","./69","./5f","../5j/5l/tip"],(require,exports,module)=>{


let magix_1 = require("5c");
let index_1 = require("../5j/6d/index");
let cursor_1 = require("../5j/5l/cursor");
let index_2 = require("../5n/index");
let const_1 = require("./5e");
let contextmenu_1 = require("./5t");
let enum_1 = require("./enum");
let history_1 = require("./5o");
let stage_align_1 = require("./63");
let stage_clipboard_1 = require("./68");
let stage_generic_1 = require("./65");
let stage_selection_1 = require("./69");
let transform_1 = require("./5f");
let tip_1 = require("../5j/5l/tip");
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
    if (e.ctrl.as & enum_1['l5']) {
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
    'l4'(e) {
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
        let srcArray = State.get('mb');
        if (srcArray) {
            //用完即删
            State.set({
                'mb': null
            });
            let returned = [];
            let selected = [];
            let scale = State.get('l3');
            let page = State.get('ma');
            if (!page.readonly) {
                let index = 0;
                for (let src of srcArray) {
                    let { props: definedProps, ctrl, silent, first } = src; //获取元素控制器和预定义属性
                    // let hodOffsetX = 0,
                    //     hodOffsetY = 0;
                    let cell;
                    if (e.node) { //如果有参考节点，则表示鼠标拖动添加元素，此时需要获取当前鼠标下可能存在的容器，以便把拖动的元素放进容器格子里
                        cell = this['l2'](e.node, ctrl);
                    }
                    //获取元素需要放置到的集合对象，设计区、容器的每一个格子用来存放子元素的地方均是互相独立的集合
                    let dest = this['l3'](e, silent, cell, ctrl);
                    let coll = dest['_oe'];
                    if (!coll)
                        continue;
                    //总共允许几个
                    let total = ctrl['_m6'];
                    if (total >= 0) {
                        let { 'l2': allElements } = stage_generic_1["l2"]();
                        let all = stage_generic_1["l3"](allElements, ctrl.type);
                        if (all.length >= total)
                            continue;
                    }
                    //一个编辑区允许几个
                    let count = ctrl['_m7'];
                    if (count >= 0) {
                        let all = stage_generic_1["l3"](coll, ctrl.type);
                        if (all.length >= count)
                            continue;
                    }
                    let pos = dest['_ox'];
                    let props = ctrl['_m2'](pos.x + index * const_1['mA'], pos.y + index * const_1['mA']);
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
                        if (isFunction(s['_oy'])) {
                            s['_oy'](props, scale, scaledProps);
                        }
                        else if (s['_nA']) {
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
                    let moveProps = ctrl['_oj'];
                    if (ctrl['_ok']) {
                        moveProps = ctrl['_oj'](props);
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
                    if (ctrl['_m3']) {
                        ctrl['_m3'](props);
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
                    if (dest['_oz']) {
                        selected.push(em);
                        //StageSelection["@:{selection#set}"](em);
                        //StageGeneric["@:{generic#scroll.into.view}"](em.id);
                    }
                    let currentBind = props.bind;
                    if (currentBind &&
                        currentBind.id) { //如果添加的元素有绑定数据源
                        let { '_oA': pElement, '_oB': atRow, '_oC': atCol } = stage_generic_1['me'](em);
                        if (pElement) { //检查父元素是否为数据容器
                            let { ctrl: pCtrl, props: pProps } = pElement;
                            if (pCtrl.as & enum_1['l6']) {
                                let bindAdded = pCtrl['_oD'];
                                if (bindAdded) {
                                    bindAdded(pProps, em, atRow, atCol);
                                }
                                let updateProps = pCtrl['_m3'];
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
                '_oE': returned,
                '_oF': selected
            };
        }
    },
    /**
     * 单选或多选元素
     * @param element 当前待处理的元素
     * @param isMulti 是否多选
     * @param scrollToElement 是否滚动到元素位置
     */
    'l5'(element, isMulti, scrollToElement = true) {
        let { 'l3': allMap } = stage_generic_1['l2']();
        if (!allMap[element.id])
            return;
        if (isMulti) { //多选逻辑
            //if (!element.props.locked) {
            let elements = State.get('l2');
            let exists, map = {}, elementsToHods = {}, hods = [];
            //容器元素需要处理自身和内容元素的关系
            if (element.ctrl.as & enum_1['l5']) {
                hods.push(element);
            }
            for (let i = elements.length; i--;) {
                let m = elements[i];
                if (m.id == element.id) {
                    exists = 1;
                }
                if (m.ctrl.as & enum_1['l5']) {
                    hods.push(m);
                }
            }
            //取消选择
            if (exists && elements.length > 1) {
                if (stage_selection_1['l5'](element)) {
                    history_1["l2"](history_1['mh'], element.props.ename);
                }
                return;
            }
            let groups = State.get('mc');
            let added = {}, selectAndCurrentElements = [...elements, element];
            for (let e of selectAndCurrentElements) {
                let list = groups[e.id];
                if (list) { //处理组合
                    for (let g of list) {
                        if (!added[g]) {
                            added[g] = 1;
                            let dest = allMap[g];
                            if (dest.ctrl.as & enum_1['l5']) {
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
                    if (c.ctrl.as & enum_1['l5']) {
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
            if (stage_selection_1['l6'](element)) {
                history_1["l2"](history_1['mi'], element.props.ename);
            }
            //}
            //如果是单选且当前未选中该元素
        }
        else if (stage_selection_1["l3"](element)) {
            if (scrollToElement) {
                stage_generic_1["mf"](element.id);
            }
            history_1["l2"](history_1['mi'], element.props.ename);
        }
    },
    /**
     * 空格快捷键或双击行为
     * @param m 处理行为的元素
     * @param e 键盘事件
     */
    async 'l6'(m, e) {
        let { props, ctrl, id } = m;
        let modifier = ctrl['_oG'];
        if (modifier) { //元素上有修改指示器
            let find; //查没查到相应的处理方式
            if (modifier & enum_1['mh']) { //如果有双击行为
                find = 1;
                props['_oH'] = 1;
            }
            else if ((modifier & enum_1['mg']) && //如果有显示文本输入框的行为
                (!ctrl['_oI'] ||
                    ctrl['_oI'](props))) {
                find = 1;
                props['_oJ'] = 1;
            }
            if (find &&
                e) { //查找到就阻止默认行为，阻止页面滚动
                e['l9']();
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
    'l9'(event, view) {
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
                    elementVframe.invoke('_oK', [element]);
                }
            }
        }
        let { 'l3': elementsMap, 
        //'@:{stage.elements.map}': stageElementsMap,
        'l2': allElements, 'l4': parentHods, } = stage_generic_1['l2']();
        if (!elementsMap[id])
            return;
        let elements = State.get('l2');
        let flowProvider = State.get('me');
        State.set({
            'mk': null
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
                if (stage_selection_1["l3"](element)) {
                    history_1["l2"](history_1['mi'], element.props.ename);
                }
            }
            State.set({
                'mk': element
            });
            return;
        }
        if (shiftKey || ctrlKey || metaKey) { //多选
            this["l5"](element, 1, false);
        }
        else {
            cursor_1["_oL"]('move');
            let startInfos = [], movedMap = {}, 
            //currentProps,
            //currentCtrl,
            //currentProps,
            isNowAdded; //临时聚焦的
            //hodOffsetX = 0,
            //hodOffsetY = 0;//容器偏移量，对于吸附格子，格子内要进行修正才能对应到背景网格上
            if (!exist) {
                isNowAdded = stage_selection_1["l3"](element);
                elements.length = 0;
                elements.push(element);
            }
            let groups = State.get('mc');
            let nearestElements = [];
            let newElements = [];
            let moveInfo, offsetInfo, page = State.get('ma'), scale = State.get('l3');
            let snapElement = page.snapElement, supportSnapElement = const_1['mn'];
            //snapGrid = page.grid && page.snapGrid;
            for (let e of elements) {
                if (!movedMap[e.id]) {
                    if (!flowProvider ||
                        !flowProvider['l2'](e)) {
                        movedMap[e.id] = enum_1['l2'];
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
                                !flowProvider['l2'](e)) {
                                movedMap[n] = enum_1['l9'];
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
                let moveProps = ctrl['_oj'];
                if (ctrl['_ok']) {
                    moveProps = ctrl['_oj'](props);
                }
                for (let m of moveProps) {
                    i[m.key] = const_1['mM'](props[m.key]);
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
            let elementMoved = 0, moveMinSize = const_1['mN'](), startX, startY, sizesMap, testX, testY, altPressed = snapElement ? altKey : !altKey, snapOffset = const_1['mx'] * scale;
            State.fire('mq', {
                show: 1,
                size: 1
            });
            if (supportSnapElement) {
                let alignElements = stage_align_1['l2'](allElements, maskId, element, movedMap);
                nearestElements = alignElements['l2'];
                startX = alignElements['md'];
                startY = alignElements['me'];
                let others = alignElements['mc'];
                let sInfo = stage_generic_1['l4'](startX, startY, others);
                //console.log(sInfo);
                testX = sInfo['_m8'];
                testY = sInfo['_m9'];
                sizesMap = sInfo['_n_'];
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
                    offsetY += offsetInfo['l2'];
                    offsetX += offsetInfo['l3'];
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
                    let snapInfo = stage_align_1['l3'](nearestElements, startX, offsetX, startY, offsetY, sizesMap, testX, testY, pinX, pinY, altPressed, snapOffset, moveMinSize);
                    offsetX = snapInfo['l4'];
                    offsetY = snapInfo['l5'];
                    //console.log('y',offsetY);
                }
                let index = 0, ids = {}, types = {}, absX = abs(offsetX), absY = abs(offsetY);
                if (const_1['mK'](absX, moveMinSize) ||
                    const_1['mK'](absY, moveMinSize) ||
                    elementMoved) {
                    //console.log('moved', offsetX, offsetY);
                    for (let e of newElements) {
                        let s = startInfos[index++];
                        let { props, id, ctrl, type } = e;
                        let moveProps = ctrl['_oj'];
                        if (ctrl['_ok']) {
                            moveProps = ctrl['_oj'](props);
                        }
                        for (let m of moveProps) {
                            let offset = (m.use == 'x' ? offsetX : offsetY);
                            props[m.key] = const_1['l3'](s[m.key] + offset);
                            elementMoved = 1;
                        }
                        if (e.id == element.id) {
                            let tipMsg = `${transform_1['l5'](props.x)} , ${transform_1['l5'](props.y)}`;
                            tip_1['_oJ'](tipMsg);
                            tip_1['_oM'](moveInfo.pageX, moveInfo.pageY);
                        }
                        let vf = Vframe.byNode(node(id));
                        if (vf) {
                            ids[id] = 1;
                            types[type] = 1;
                            if (ctrl['_m3']) {
                                ctrl['_m3'](props);
                            }
                            let r = await vf.invoke('assign', [{
                                    element: e
                                }]);
                            if (r !== false) {
                                vf.invoke('render');
                            }
                        }
                    }
                    if (offsetInfo && !offsetInfo['l4']) {
                        offsetInfo['l4'] = 1;
                        await taskFinale();
                        //await sleep(3000);
                        offsetInfo['l5']();
                    }
                    State.fire('l4', {
                        '_nK': ids,
                        '_nL': types,
                        '_l3': {
                            '_l4': 1
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
                altPressed = snapElement ? e['l8'] : !e['l8'];
                moveElements();
            };
            //处理按键
            State.on('ma', watchKeypress);
            //处理贴边滚动
            State.on('mg', watchIntervalMove);
            view['_mz'](event, evt => {
                State.fire('mf', evt);
                moveInfo = evt;
                moveElements();
            }, () => {
                State.off('ma', watchKeypress);
                State.off('mg', watchIntervalMove);
                //console.log(offsetX, offsetY)
                if (elementMoved) {
                    delete this['l7'];
                    if (const_1['mK'](abs(offsetX), moveMinSize) ||
                        const_1['mK'](abs(offsetY), moveMinSize)) {
                        let ename = stage_generic_1['md'](newElements);
                        history_1["l2"](history_1['mj'], ename);
                    }
                }
                else if (!exist &&
                    isNowAdded) {
                    history_1["l2"](history_1['mi'], element.props.ename);
                }
                if (!elementMoved) {
                    let lastEvent = this['l7'];
                    if (lastEvent) {
                        //检测鼠标位置是否移动过
                        let distanceDiff = event.pageX - lastEvent.pageX + event.pageY - lastEvent.pageY;
                        //检测两次时间差
                        let timeDiff = nowTime() - this['l8'];
                        if (!distanceDiff && //未移动过
                            timeDiff < const_1['mC']) { //2次间隔
                            this['l6'](element);
                        }
                    }
                    this['l7'] = event;
                    this['l8'] = nowTime();
                }
                State.fire('mq', {
                    hide: 1
                });
                State.fire('mi');
                if (supportSnapElement) {
                    State.fire('l2');
                }
                cursor_1["_mB"]();
                tip_1['_mB']();
            });
        }
    },
    /**
     * 聚焦选择元素的格子
     */
    'm_'() {
        let stages = stage_generic_1['mg']();
        if (stages.length === 1) {
            let f = stages[0];
            if (f['_oN'] == '_oO') {
                let table = f['_oO'];
                let { props } = table;
                if (!props.readonly) {
                    props.focusRow = f['_oP'];
                    props.focusCol = f['_oQ'];
                    State.fire('l4', {
                        '_nK': {
                            [table.id]: 1
                        },
                        '_nL': {
                            [table.type]: 1
                        },
                        '_l3': {
                            '_oR': 1
                        }
                    });
                    let n = node(table.id);
                    if (n) {
                        let vf = Vframe.byNode(n);
                        if (vf) {
                            vf.invoke('_ol', [table]);
                        }
                    }
                    if (stage_selection_1["l3"](table)) {
                        history_1["l2"](history_1['mi'], props.ename);
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
    'ma'(to, element) {
        //3 top 4 bottom 5 to up 6 to down
        let selectElements = State.get('l2');
        let index = -1;
        if (element &&
            !element.props.locked &&
            selectElements.length) {
            let elements = stage_generic_1["mh"](selectElements[0]);
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
                history_1["l2"](history_1['ms'], element.props.ename);
                State.fire('mp');
            }
        }
    },
    /**
     * tab按键选择元素
     * @param revert 是否反向选择
     */
    'mb'(revert) {
        let selectElements = State.get('l2');
        let c = selectElements.length, current, select, stageElements = State.get('m_'), newElements = stage_generic_1['mi'](stageElements, 1);
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
            stage_generic_1["mf"](select.id);
            stage_selection_1["l3"](select);
            history_1["l2"](history_1['mi'], select.props.ename);
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
    'mc'(groupList, use, diff, ids, groupListIsElement) {
        let { 'l3': elementsMap } = stage_generic_1['l2']();
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
                let moveProps = ctrl['_oj'];
                if (ctrl['_ok']) {
                    moveProps = ctrl['_oj'](props);
                }
                for (let x of moveProps) {
                    if (x.use == use) {
                        props[x.key] += diff;
                    }
                }
                if (ctrl['_m3']) {
                    ctrl['_m3'](props);
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
    'md'(to) {
        let elements = State.get('l2');
        let underElement = State.get('mk');
        let selectedElementsMap = stage_selection_1['l7']();
        let groups = State.get('mc');
        let { 'l3': elementsMap, 'l2': stageElements } = stage_generic_1['l2']();
        let flowProvider = State.get('me');
        let maxRight = MinNum;
        let minLeft = MaxNum;
        let minTop = MaxNum;
        let maxBottom = MinNum;
        let minVCenter = MaxNum;
        let minHCenter = MaxNum;
        let compareId;
        State.set({
            'mk': null
        });
        if (flowProvider) {
            elements = flowProvider["l6"](elements, 1);
        }
        //console.log(underElement);
        let sizes = {};
        for (let m of stageElements) {
            let n = node('_rdm_' + m.id);
            let b = n.getBoundingClientRect();
            sizes[m.id] = {
                left: const_1['l3'](b.x),
                top: const_1['l3'](b.y),
                right: const_1['l3'](b.right),
                bottom: const_1['l3'](b.bottom),
                width: const_1['l3'](b.width),
                height: const_1['l3'](b.height)
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
            let mDiff = const_1['l4'](diff);
            //console.log(mDiff);
            if (mDiff) {
                ids[m.id] = 1;
                types[m.type] = 1;
                isChanged = 1;
                let groupList = moveWithGroup && groups[m.id] || [m.id];
                this['mc'](groupList, use, diff, ids);
            }
        }
        if (isChanged) {
            State.fire('l4', {
                '_nK': ids,
                '_nL': types,
                '_l3': {
                    '_l4': 1
                }
            });
            history_1["l2"](history_1['mk']);
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
    async 'me'(from, to) {
        let elements = State.get('l2');
        if (elements.length == 2) {
            let underElement = State.get('mk');
            let [first, second] = elements;
            let source = first == underElement ? second : first;
            State.set({
                'mk': null
            });
            let { props: destProps, ctrl, id } = underElement;
            let fromKey = from == 1 ? 'width' : 'height';
            let destKey = to == 1 ? 'width' : 'height';
            //console.log(fromKey, destKey);
            let sourceProps = source.props;
            if (sourceProps[fromKey] != destProps[destKey]) {
                let oldRotatedRect = transform_1['l3'](destProps);
                let old = oldRotatedRect['_n2'][0];
                let r;
                if (ctrl['_oG'] & enum_1['mj']) {
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
                let newRotated = transform_1['l3'](destProps);
                let n = newRotated['_n2'][0];
                //console.log(old, n);
                destProps.x += old.x - n.x;
                destProps.y += old.y - n.y;
                if (ctrl['_m3']) {
                    ctrl['_m3'](destProps);
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
    'mf'(to, shift) {
        let elements = State.get('l2');
        let flowProvider = State.get('me');
        let groups = State.get('mc');
        if (flowProvider) {
            elements = flowProvider["l6"](elements, 1);
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
                if ((vertical && const_1['mL'](maxHeight, e[4])) ||
                    (!vertical && const_1['mL'](maxWith, e[3]))) {
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
                let d = const_1['l4'](const_1['l3'](dest - current));
                if (d) {
                    ids[m.id] = 1;
                    types[m.type] = 1;
                    isChanged = 1;
                    let groupList = moveWithGroup && groups[m.id] || [m.id];
                    this['mc'](groupList, use, d, ids);
                }
            }
        }
        if (isChanged) {
            State.fire('l4', {
                '_nK': ids,
                '_nL': types,
                '_l3': {
                    '_l4': 1
                }
            });
            history_1['l2'](vertical ? history_1['mC'] : history_1['mB']);
        }
    },
    /**
     * 设计区内均匀分布元素
     * @param to 如何均分
     * @param shift 是否使用元素中心点
     */
    'mg'(to, shift, control) {
        let stages = stage_generic_1['mg']();
        let groups = State.get('mc');
        let flowProvider = State.get('me');
        let page = State.get('ma');
        let selectElementsMap = stage_selection_1['l7']();
        let isChanged;
        let ids = {}, types = {}, vertical = to == 'sv', maxPages = page.pages;
        if (control) {
            shift = 0;
        }
        let newStages = [], elementInPages = {};
        for (let stage of stages) {
            let rootBound = node(stage['_of']).getBoundingClientRect();
            let one = {
                '_oS': rootBound.x,
                '_oT': rootBound.y,
                '_oU': rootBound.width,
                '_oV': rootBound.height,
                '_oW': 1,
                '_ou': [],
                '_oX': 0
            };
            let selectedElements = stage['_ou'];
            if (flowProvider) {
                selectedElements = flowProvider["l6"](selectedElements, 1);
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
                one['_oW'] = 0;
            }
            let pre = one;
            for (let e of selectedElements) {
                let bound = node('_rdm_' + e.id).getBoundingClientRect();
                if (stage['_oN'] == '_oY') {
                    let single = (rootBound.height / maxPages);
                    let whichPages = floor((bound.y - rootBound.y) / single);
                    whichPages = max(min(whichPages, maxPages - 1), 0);
                    let inPage = whichPages * single;
                    if (!has(elementInPages, inPage)) {
                        pre = const_1['mP'](one);
                        pre['_oX'] = inPage;
                        pre['_oV'] = single;
                        newStages.push(elementInPages[inPage] = pre);
                    }
                    else {
                        pre = elementInPages[inPage];
                    }
                }
                pre['_ou'].push({
                    '_oZ': bound,
                    '_oA': e
                });
            }
            if (stage['_oN'] == '_oO') {
                newStages.push(pre);
            }
        }
        for (let stage of newStages) {
            let rootBoundX = stage['_oS'];
            let rootBoundY = stage['_oT'];
            let stageWidth = stage['_oU'];
            let stageHeight = stage['_oV'];
            let prev = [rootBoundX, rootBoundY + stage['_oX'], 0, 0, 0];
            let selectedElements = stage['_ou'];
            let maxCX = MinNum, minCX = MaxNum, maxCY = MinNum, minCY = MaxNum, maxRight = MinNum, maxBottom = MinNum, moveWithGroup = stage['_oW'], tempArray = [];
            for (let { '_oZ': bound, '_oA': m } of selectedElements) {
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
                    let d = const_1['l4'](const_1['l3'](dest - current));
                    if (d) {
                        ids[m.id] = 1;
                        types[m.type] = 1;
                        isChanged = 1;
                        let groupList = moveWithGroup && groups[m.id] || [m.id];
                        this['mc'](groupList, use, d, ids);
                    }
                }
            }
        }
        if (isChanged) {
            State.fire('l4', {
                '_nK': ids,
                '_nL': types,
                '_l3': {
                    '_l4': 1
                }
            });
            history_1['l2'](vertical ? history_1['mC'] : history_1['mB']);
        }
    },
    /**
     * 获取最佳的设计区元素列表对象
     * @param e 添加元素事件对象
     * @param silent 是否静默添加
     * @param cell 格子对象
     * @param srcCtrl 当前元素的ctrl对象
     */
    'l3'(e, silent, cell, srcCtrl) {
        let current = State.get('l2');
        let clicked = !e.node;
        //let { areas } = State.get('@:{global#stage.page}');
        // let collectionType = '@:{stage}';
        // let area;
        let first = current[0], xy = transform_1["l6"]({
            x: e.pageX,
            y: e.pageY
        }), collection = State.get('m_'), find = 0, focus = 1; //,
        //collType = '@:{stage}';
        if (clicked &&
            current.length == 1 &&
            (first.ctrl.as & enum_1['l5']) &&
            first.props.focusRow > -1) {
            let { rows, focusRow, focusCol } = first.props;
            let row = rows[focusRow];
            if (row &&
                (!first.ctrl['_og'] ||
                    first.ctrl['_og'][srcCtrl.type]) &&
                (!srcCtrl['_oi'] ||
                    srcCtrl['_oi'][first.type])) {
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
            let maskNode = node(cell['_nb']);
            if (maskNode) {
                let bound = maskNode.getBoundingClientRect();
                xy = {
                    x: e.pageX - bound.x,
                    y: e.pageY - bound.y
                };
                collection = cell['_o0'];
                find = 1;
            }
        }
        if (!find) {
            if (clicked) {
                xy = transform_1["l7"](xy);
            }
            if (srcCtrl['_oi'] &&
                !srcCtrl['_oi'].root) {
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
            '_oe': collection,
            '_ox': xy,
            '_oz': focus,
            //'@:{collection.type}': collectionType,
            //'@:{area}': area
        };
    },
    /**
     * 获取最佳格子
     * @param testNode 待检测dom节点
     * @param ctrl 当前元素的ctrl对象
     */
    'l2'(testNode, ctrl) {
        let elements = State.get('m_'), cell = null;
        let walk = es => {
            for (let e of es) {
                let { type, id, ctrl: elementCtrl, props } = e;
                let n = node(id);
                if (inside(testNode, n)) {
                    //consolex.log(elementCtrl['@:{allowed.elements}'],ctrl.type);
                    if ((elementCtrl.as & enum_1['l5']) &&
                        (!ctrl ||
                            !elementCtrl['_og'] ||
                            elementCtrl['_og'][ctrl.type])) {
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
                                        !ctrl['_oi'] ||
                                        ctrl['_oi'][type]) {
                                        let canGenerateCell = true;
                                        if (ctrl) {
                                            let counter = ctrl['_m7'];
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
                                                '_o1': type,
                                                '_o2': n,
                                                '_o3': `_rd_dm${cellId}`,
                                                '_nb': `_rd_hm${cellId}`,
                                                '_o0': elements
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
    'mh'(view, event, collection, hodId, picked) {
        //右键菜单
        let lang = config('lang');
        let list;
        let disabled = {};
        let selectElements = State.get('l2');
        let selectElementsMap = stage_selection_1['l7']();
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
            list = contextmenu_1["mr"](lang); //获取相应的菜单列表
            let topElement = collection[collection.length - 1]; //处理z轴关系
            let bottomElement = collection[0];
            let atTop = topElement.id == element.id;
            let atBottom = bottomElement.id == element.id;
            let enable = stage_generic_1['mj'](selectElementsMap);
            disabled[contextmenu_1["l5"]] = locked || atTop;
            disabled[contextmenu_1["l4"]] = locked || atTop;
            disabled[contextmenu_1["l6"]] = locked || atBottom;
            disabled[contextmenu_1["l7"]] = locked || atBottom;
            disabled[contextmenu_1['ma']] = enable != 1 || locked;
        }
        else if (selectCount > 1) { //多选
            let syncDisabled, syncWidth = 1, syncHeight = 1, syncWidthAsHeight = 1, syncHeightAsWidth = 1;
            if (selectCount == 2) { //如果有2个元素处于选中
                //开启尺寸同步功能
                syncDisabled = 0;
                //2个元素显示的右键菜单
                list = contextmenu_1['ms'](lang);
            }
            else {
                syncDisabled = 1;
                //3个元素
                list = contextmenu_1["mt"](lang);
            }
            let underElement = State.get('mk');
            if (!syncDisabled) { //正好有2个元素
                let [first, second] = selectElements;
                let from = first == underElement ? second : first;
                let fromCtrlModifier = from.ctrl['_oG'], toCtrlModifier = underElement.ctrl['_oG'];
                let fromFlag = 1, toFlag = 1;
                //根据元素控制器提供的相应的能否修改宽高能力，决定元素之间的宽高菜单项能否工作
                if (fromCtrlModifier & enum_1['mb']) {
                    fromFlag |= 2;
                }
                if (fromCtrlModifier & enum_1['mc']) {
                    fromFlag |= 4;
                }
                if (fromCtrlModifier & enum_1['ma']) {
                    fromFlag = 7;
                }
                //鼠标下的元素未处于锁定状态
                if (!underElement.props.locked) {
                    if (toCtrlModifier & enum_1['mb']) {
                        toFlag |= 2;
                    }
                    if (toCtrlModifier & enum_1['mc']) {
                        toFlag |= 4;
                    }
                    if (toCtrlModifier & enum_1['ma']) {
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
            let alignInfo = stage_generic_1['mk'](underElement), xCanotAlign = !alignInfo['l2'], yCanotAlign = !alignInfo['l3'];
            let enable = stage_generic_1['mj'](selectElementsMap);
            let hasDisabled = stage_generic_1['ml'](selectElements);
            disabled[contextmenu_1["mg"]] = syncHeightAsWidth;
            disabled[contextmenu_1["mf"]] = syncWidthAsHeight;
            disabled[contextmenu_1["mi"]] = syncHeight;
            disabled[contextmenu_1["mh"]] = syncWidth;
            disabled[contextmenu_1["mj"]] = yCanotAlign;
            disabled[contextmenu_1["ml"]] = xCanotAlign;
            disabled[contextmenu_1["mo"]] = yCanotAlign;
            disabled[contextmenu_1["mn"]] = xCanotAlign;
            disabled[contextmenu_1["mk"]] = xCanotAlign;
            disabled[contextmenu_1["mm"]] = yCanotAlign;
            disabled[contextmenu_1['ma']] = enable != 1 || hasDisabled;
        }
        else {
            if (hodId) { //容器格子的右键菜单需要查询z轴
                list = contextmenu_1["mv"](lang);
                let ownerColl = stage_generic_1["mh"](element);
                let topElement = ownerColl[ownerColl.length - 1];
                let bottomElement = ownerColl[0];
                let atTop = topElement.id == element.id;
                let atBottom = bottomElement.id == element.id;
                disabled[contextmenu_1["l5"]] = locked || atTop;
                disabled[contextmenu_1["l4"]] = locked || atTop;
                disabled[contextmenu_1["l6"]] = locked || atBottom;
                disabled[contextmenu_1["l7"]] = locked || atBottom;
                let nonreadonlyElements = stage_generic_1['mi'](collection);
                disabled[contextmenu_1['mp']] = !nonreadonlyElements.length;
                disabled[contextmenu_1['mq']] = readonly;
            }
            else {
                list = contextmenu_1["mu"](lang);
                disabled[contextmenu_1['mb']] = !stage_generic_1['l6']();
                disabled[contextmenu_1['mc']] = !stage_generic_1['l7']();
                currentCollection = State.get('m_');
            }
            collection = stage_generic_1['l3'](collection, 0, 1);
            disabled[contextmenu_1["l2"]] = !collection.length;
            disabled[contextmenu_1["ma"]] = !hodId || readonly || locked;
        }
        if (selectCount) {
            let { '_o4': canUngroup, '_o5': canGroup } = stage_generic_1["mm"]();
            disabled[contextmenu_1["me"]] = !canGroup;
            disabled[contextmenu_1["md"]] = !canUngroup;
        }
        let copyElements = stage_clipboard_1["_op"]();
        let cxvInfo = stage_generic_1['mn'](copyElements, element, currentCollection);
        disabled[contextmenu_1['l8']] = !cxvInfo['_o6'];
        disabled[contextmenu_1['l9']] = !cxvInfo['_o7'];
        disabled[contextmenu_1['m_']] = !cxvInfo['_o7'] || !cxvInfo['_o8'];
        disabled[contextmenu_1['l3']] = !cxvInfo['_o9'];
        index_1.show(view, event, contextMenuId, {
            list: list,
            disabled,
            picked
        });
    }
};

});