/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/56",["4e","../4l/5f/index","../4l/4n/cursor","../4p/index","./4g","./4v","./enum","./4q","./55","./5a","./57","./5b","./4h","../4l/4n/tip"],(require,exports,module)=>{


let magix_1 = require("4e");
let index_1 = require("../4l/5f/index");
let cursor_1 = require("../4l/4n/cursor");
let index_2 = require("../4p/index");
let const_1 = require("./4g");
let contextmenu_1 = require("./4v");
let enum_1 = require("./enum");
let history_1 = require("./4q");
let stage_align_1 = require("./55");
let stage_clipboard_1 = require("./5a");
let stage_generic_1 = require("./57");
let stage_selection_1 = require("./5b");
let transform_1 = require("./4h");
let tip_1 = require("../4l/4n/tip");
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
    if (e.ctrl.as & enum_1['dH']) {
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
    'dG'(e) {
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
        let srcArray = State.get('dO');
        if (srcArray) {
            //用完即删
            State.set({
                'dO': null
            });
            let returned = [];
            let selected = [];
            let scale = State.get('dF');
            let page = State.get('dN');
            if (!page.readonly) {
                let index = 0;
                for (let src of srcArray) {
                    let { props: definedProps, ctrl, silent, first } = src; //获取元素控制器和预定义属性
                    // let hodOffsetX = 0,
                    //     hodOffsetY = 0;
                    let cell;
                    if (e.node) { //如果有参考节点，则表示鼠标拖动添加元素，此时需要获取当前鼠标下可能存在的容器，以便把拖动的元素放进容器格子里
                        cell = this['dE'](e.node, ctrl);
                    }
                    //获取元素需要放置到的集合对象，设计区、容器的每一个格子用来存放子元素的地方均是互相独立的集合
                    let dest = this['dF'](e, silent, cell, ctrl);
                    let coll = dest['_fR'];
                    if (!coll)
                        continue;
                    //总共允许几个
                    let total = ctrl['_eI'];
                    if (total >= 0) {
                        let { 'dE': allElements } = stage_generic_1["dE"]();
                        let all = stage_generic_1["dF"](allElements, ctrl.type);
                        if (all.length >= total)
                            continue;
                    }
                    //一个编辑区允许几个
                    let count = ctrl['_eJ'];
                    if (count >= 0) {
                        let all = stage_generic_1["dF"](coll, ctrl.type);
                        if (all.length >= count)
                            continue;
                    }
                    let pos = dest['_g_'];
                    let props = ctrl['_eE'](pos.x + index * const_1['ec'], pos.y + index * const_1['ec']);
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
                        if (isFunction(s['_ga'])) {
                            s['_ga'](props, scale, scaledProps);
                        }
                        else if (s['_fc']) {
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
                    let moveProps = ctrl['_fW'];
                    if (ctrl['_fX']) {
                        moveProps = ctrl['_fW'](props);
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
                    if (ctrl['_eF']) {
                        ctrl['_eF'](props);
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
                    if (dest['_gb']) {
                        selected.push(em);
                        //StageSelection["@:{selection#set}"](em);
                        //StageGeneric["@:{generic#scroll.into.view}"](em.id);
                    }
                    let currentBind = props.bind;
                    if (currentBind &&
                        currentBind.id) { //如果添加的元素有绑定数据源
                        let { '_gc': pElement, '_gd': atRow, '_ge': atCol } = stage_generic_1['dR'](em);
                        if (pElement) { //检查父元素是否为数据容器
                            let { ctrl: pCtrl, props: pProps } = pElement;
                            if (pCtrl.as & enum_1['dI']) {
                                let bindAdded = pCtrl['_gf'];
                                if (bindAdded) {
                                    bindAdded(pProps, em, atRow, atCol);
                                }
                                let updateProps = pCtrl['_eF'];
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
                '_gg': returned,
                '_gh': selected
            };
        }
    },
    /**
     * 单选或多选元素
     * @param element 当前待处理的元素
     * @param isMulti 是否多选
     * @param scrollToElement 是否滚动到元素位置
     */
    'dH'(element, isMulti, scrollToElement = true) {
        let { 'dF': allMap } = stage_generic_1['dE']();
        if (!allMap[element.id])
            return;
        if (isMulti) { //多选逻辑
            //if (!element.props.locked) {
            let elements = State.get('dE');
            let exists, map = {}, elementsToHods = {}, hods = [];
            //容器元素需要处理自身和内容元素的关系
            if (element.ctrl.as & enum_1['dH']) {
                hods.push(element);
            }
            for (let i = elements.length; i--;) {
                let m = elements[i];
                if (m.id == element.id) {
                    exists = 1;
                }
                if (m.ctrl.as & enum_1['dH']) {
                    hods.push(m);
                }
            }
            //取消选择
            if (exists && elements.length > 1) {
                if (stage_selection_1['dH'](element)) {
                    history_1["dE"](history_1['dU'], element.props.ename);
                }
                return;
            }
            let groups = State.get('dP');
            let added = {}, selectAndCurrentElements = [...elements, element];
            for (let e of selectAndCurrentElements) {
                let list = groups[e.id];
                if (list) { //处理组合
                    for (let g of list) {
                        if (!added[g]) {
                            added[g] = 1;
                            let dest = allMap[g];
                            if (dest.ctrl.as & enum_1['dH']) {
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
                    if (c.ctrl.as & enum_1['dH']) {
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
            if (stage_selection_1['dI'](element)) {
                history_1["dE"](history_1['dV'], element.props.ename);
            }
            //}
            //如果是单选且当前未选中该元素
        }
        else if (stage_selection_1["dF"](element)) {
            if (scrollToElement) {
                stage_generic_1["dS"](element.id);
            }
            history_1["dE"](history_1['dV'], element.props.ename);
        }
    },
    /**
     * 空格快捷键或双击行为
     * @param m 处理行为的元素
     * @param e 键盘事件
     */
    async 'dI'(m, e) {
        let { props, ctrl, id } = m;
        let modifier = ctrl['_gi'];
        if (modifier) { //元素上有修改指示器
            let find; //查没查到相应的处理方式
            if (modifier & enum_1['dU']) { //如果有双击行为
                find = 1;
                props['_gj'] = 1;
            }
            else if ((modifier & enum_1['dT']) && //如果有显示文本输入框的行为
                (!ctrl['_gk'] ||
                    ctrl['_gk'](props))) {
                find = 1;
                props['_gl'] = 1;
            }
            if (find &&
                e) { //查找到就阻止默认行为，阻止页面滚动
                e['dL']();
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
    'dL'(event, view) {
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
                    elementVframe.invoke('_gm', [element]);
                }
            }
        }
        let { 'dF': elementsMap, 
        //'@:{stage.elements.map}': stageElementsMap,
        'dE': allElements, 'dG': parentHods, } = stage_generic_1['dE']();
        if (!elementsMap[id])
            return;
        let elements = State.get('dE');
        let flowProvider = State.get('dR');
        State.set({
            'dX': null
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
                if (stage_selection_1["dF"](element)) {
                    history_1["dE"](history_1['dV'], element.props.ename);
                }
            }
            State.set({
                'dX': element
            });
            return;
        }
        if (shiftKey || ctrlKey || metaKey) { //多选
            this["dH"](element, 1, false);
        }
        else {
            cursor_1["_gn"]('move');
            let startInfos = [], movedMap = {}, 
            //currentProps,
            //currentCtrl,
            //currentProps,
            isNowAdded; //临时聚焦的
            //hodOffsetX = 0,
            //hodOffsetY = 0;//容器偏移量，对于吸附格子，格子内要进行修正才能对应到背景网格上
            if (!exist) {
                isNowAdded = stage_selection_1["dF"](element);
                elements.length = 0;
                elements.push(element);
            }
            let groups = State.get('dP');
            let nearestElements = [];
            let newElements = [];
            let moveInfo, offsetInfo, page = State.get('dN'), scale = State.get('dF');
            let snapElement = page.snapElement, supportSnapElement = const_1['d0'];
            //snapGrid = page.grid && page.snapGrid;
            for (let e of elements) {
                if (!movedMap[e.id]) {
                    if (!flowProvider ||
                        !flowProvider['dE'](e)) {
                        movedMap[e.id] = enum_1['dE'];
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
                                !flowProvider['dE'](e)) {
                                movedMap[n] = enum_1['dL'];
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
                let moveProps = ctrl['_fW'];
                if (ctrl['_fX']) {
                    moveProps = ctrl['_fW'](props);
                }
                for (let m of moveProps) {
                    i[m.key] = const_1['eo'](props[m.key]);
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
            let elementMoved = 0, moveMinSize = const_1['ep'](), startX, startY, sizesMap, testX, testY, altPressed = snapElement ? altKey : !altKey, snapOffset = const_1['e_'] * scale;
            State.fire('d3', {
                show: 1,
                size: 1
            });
            if (supportSnapElement) {
                let alignElements = stage_align_1['dE'](allElements, maskId, element, movedMap);
                nearestElements = alignElements['dE'];
                startX = alignElements['dQ'];
                startY = alignElements['dR'];
                let others = alignElements['dP'];
                let sInfo = stage_generic_1['dG'](startX, startY, others);
                //console.log(sInfo);
                testX = sInfo['_eK'];
                testY = sInfo['_eL'];
                sizesMap = sInfo['_eM'];
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
                    offsetY += offsetInfo['dE'];
                    offsetX += offsetInfo['dF'];
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
                    let snapInfo = stage_align_1['dF'](nearestElements, startX, offsetX, startY, offsetY, sizesMap, testX, testY, pinX, pinY, altPressed, snapOffset, moveMinSize);
                    offsetX = snapInfo['dG'];
                    offsetY = snapInfo['dH'];
                    //console.log('y',offsetY);
                }
                let index = 0, ids = {}, types = {}, absX = abs(offsetX), absY = abs(offsetY);
                if (const_1['em'](absX, moveMinSize) ||
                    const_1['em'](absY, moveMinSize) ||
                    elementMoved) {
                    //console.log('moved', offsetX, offsetY);
                    for (let e of newElements) {
                        let s = startInfos[index++];
                        let { props, id, ctrl, type } = e;
                        let moveProps = ctrl['_fW'];
                        if (ctrl['_fX']) {
                            moveProps = ctrl['_fW'](props);
                        }
                        for (let m of moveProps) {
                            let offset = (m.use == 'x' ? offsetX : offsetY);
                            props[m.key] = const_1['dF'](s[m.key] + offset);
                            elementMoved = 1;
                        }
                        if (e.id == element.id) {
                            let tipMsg = `${transform_1['dH'](props.x)} , ${transform_1['dH'](props.y)}`;
                            tip_1['_gl'](tipMsg);
                            tip_1['_go'](moveInfo.pageX, moveInfo.pageY);
                        }
                        let vf = Vframe.byNode(node(id));
                        if (vf) {
                            ids[id] = 1;
                            types[type] = 1;
                            if (ctrl['_eF']) {
                                ctrl['_eF'](props);
                            }
                            let r = await vf.invoke('assign', [{
                                    element: e
                                }]);
                            if (r !== false) {
                                vf.invoke('render');
                            }
                        }
                    }
                    if (offsetInfo && !offsetInfo['dG']) {
                        offsetInfo['dG'] = 1;
                        await taskFinale();
                        //await sleep(3000);
                        offsetInfo['dH']();
                    }
                    State.fire('dG', {
                        '_fm': ids,
                        '_fn': types,
                        '_dF': {
                            '_dG': 1
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
                altPressed = snapElement ? e['dK'] : !e['dK'];
                moveElements();
            };
            //处理按键
            State.on('dN', watchKeypress);
            //处理贴边滚动
            State.on('dT', watchIntervalMove);
            view['_eb'](event, evt => {
                State.fire('dS', evt);
                moveInfo = evt;
                moveElements();
            }, () => {
                State.off('dN', watchKeypress);
                State.off('dT', watchIntervalMove);
                //console.log(offsetX, offsetY)
                if (elementMoved) {
                    delete this['dJ'];
                    if (const_1['em'](abs(offsetX), moveMinSize) ||
                        const_1['em'](abs(offsetY), moveMinSize)) {
                        let ename = stage_generic_1['dQ'](newElements);
                        history_1["dE"](history_1['dW'], ename);
                    }
                }
                else if (!exist &&
                    isNowAdded) {
                    history_1["dE"](history_1['dV'], element.props.ename);
                }
                if (!elementMoved) {
                    let lastEvent = this['dJ'];
                    if (lastEvent) {
                        //检测鼠标位置是否移动过
                        let distanceDiff = event.pageX - lastEvent.pageX + event.pageY - lastEvent.pageY;
                        //检测两次时间差
                        let timeDiff = nowTime() - this['dK'];
                        if (!distanceDiff && //未移动过
                            timeDiff < const_1['ee']) { //2次间隔
                            this['dI'](element);
                        }
                    }
                    this['dJ'] = event;
                    this['dK'] = nowTime();
                }
                State.fire('d3', {
                    hide: 1
                });
                State.fire('dV');
                if (supportSnapElement) {
                    State.fire('dE');
                }
                cursor_1["_ed"]();
                tip_1['_ed']();
            });
        }
    },
    /**
     * 聚焦选择元素的格子
     */
    'dM'() {
        let stages = stage_generic_1['dT']();
        if (stages.length === 1) {
            let f = stages[0];
            if (f['_gp'] == '_gq') {
                let table = f['_gq'];
                let { props } = table;
                if (!props.readonly) {
                    props.focusRow = f['_gr'];
                    props.focusCol = f['_gs'];
                    State.fire('dG', {
                        '_fm': {
                            [table.id]: 1
                        },
                        '_fn': {
                            [table.type]: 1
                        },
                        '_dF': {
                            '_gt': 1
                        }
                    });
                    let n = node(table.id);
                    if (n) {
                        let vf = Vframe.byNode(n);
                        if (vf) {
                            vf.invoke('_fY', [table]);
                        }
                    }
                    if (stage_selection_1["dF"](table)) {
                        history_1["dE"](history_1['dV'], props.ename);
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
    'dN'(to, element) {
        //3 top 4 bottom 5 to up 6 to down
        let selectElements = State.get('dE');
        let index = -1;
        if (element &&
            !element.props.locked &&
            selectElements.length) {
            let elements = stage_generic_1["dU"](selectElements[0]);
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
                history_1["dE"](history_1['d5'], element.props.ename);
                State.fire('d2');
            }
        }
    },
    /**
     * tab按键选择元素
     * @param revert 是否反向选择
     */
    'dO'(revert) {
        let selectElements = State.get('dE');
        let c = selectElements.length, current, select, stageElements = State.get('dM'), newElements = stage_generic_1['dV'](stageElements, 1);
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
            stage_generic_1["dS"](select.id);
            stage_selection_1["dF"](select);
            history_1["dE"](history_1['dV'], select.props.ename);
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
    'dP'(groupList, use, diff, ids, groupListIsElement) {
        let { 'dF': elementsMap } = stage_generic_1['dE']();
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
                let moveProps = ctrl['_fW'];
                if (ctrl['_fX']) {
                    moveProps = ctrl['_fW'](props);
                }
                for (let x of moveProps) {
                    if (x.use == use) {
                        props[x.key] += diff;
                    }
                }
                if (ctrl['_eF']) {
                    ctrl['_eF'](props);
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
    'dQ'(to) {
        let elements = State.get('dE');
        let underElement = State.get('dX');
        let selectedElementsMap = stage_selection_1['dJ']();
        let groups = State.get('dP');
        let { 'dF': elementsMap, 'dE': stageElements } = stage_generic_1['dE']();
        let flowProvider = State.get('dR');
        let maxRight = MinNum;
        let minLeft = MaxNum;
        let minTop = MaxNum;
        let maxBottom = MinNum;
        let minVCenter = MaxNum;
        let minHCenter = MaxNum;
        let compareId;
        State.set({
            'dX': null
        });
        if (flowProvider) {
            elements = flowProvider["dI"](elements, 1);
        }
        //console.log(underElement);
        let sizes = {};
        for (let m of stageElements) {
            let n = node('_rdm_' + m.id);
            let b = n.getBoundingClientRect();
            sizes[m.id] = {
                left: const_1['dF'](b.x),
                top: const_1['dF'](b.y),
                right: const_1['dF'](b.right),
                bottom: const_1['dF'](b.bottom),
                width: const_1['dF'](b.width),
                height: const_1['dF'](b.height)
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
            let mDiff = const_1['dG'](diff);
            //console.log(mDiff);
            if (mDiff) {
                ids[m.id] = 1;
                types[m.type] = 1;
                isChanged = 1;
                let groupList = moveWithGroup && groups[m.id] || [m.id];
                this['dP'](groupList, use, diff, ids);
            }
        }
        if (isChanged) {
            State.fire('dG', {
                '_fm': ids,
                '_fn': types,
                '_dF': {
                    '_dG': 1
                }
            });
            history_1["dE"](history_1['dX']);
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
    async 'dR'(from, to) {
        let elements = State.get('dE');
        if (elements.length == 2) {
            let underElement = State.get('dX');
            let [first, second] = elements;
            let source = first == underElement ? second : first;
            State.set({
                'dX': null
            });
            let { props: destProps, ctrl, id } = underElement;
            let fromKey = from == 1 ? 'width' : 'height';
            let destKey = to == 1 ? 'width' : 'height';
            //console.log(fromKey, destKey);
            let sourceProps = source.props;
            if (sourceProps[fromKey] != destProps[destKey]) {
                let oldRotatedRect = transform_1['dF'](destProps);
                let old = oldRotatedRect['_fE'][0];
                let r;
                if (ctrl['_gi'] & enum_1['dW']) {
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
                let newRotated = transform_1['dF'](destProps);
                let n = newRotated['_fE'][0];
                //console.log(old, n);
                destProps.x += old.x - n.x;
                destProps.y += old.y - n.y;
                if (ctrl['_eF']) {
                    ctrl['_eF'](destProps);
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
    'dS'(to, shift) {
        let elements = State.get('dE');
        let flowProvider = State.get('dR');
        let groups = State.get('dP');
        if (flowProvider) {
            elements = flowProvider["dI"](elements, 1);
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
                if ((vertical && const_1['en'](maxHeight, e[4])) ||
                    (!vertical && const_1['en'](maxWith, e[3]))) {
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
                let d = const_1['dG'](const_1['dF'](dest - current));
                if (d) {
                    ids[m.id] = 1;
                    types[m.type] = 1;
                    isChanged = 1;
                    let groupList = moveWithGroup && groups[m.id] || [m.id];
                    this['dP'](groupList, use, d, ids);
                }
            }
        }
        if (isChanged) {
            State.fire('dG', {
                '_fm': ids,
                '_fn': types,
                '_dF': {
                    '_dG': 1
                }
            });
            history_1['dE'](vertical ? history_1['ee'] : history_1['ed']);
        }
    },
    /**
     * 设计区内均匀分布元素
     * @param to 如何均分
     * @param shift 是否使用元素中心点
     */
    'dT'(to, shift, control) {
        let stages = stage_generic_1['dT']();
        let groups = State.get('dP');
        let flowProvider = State.get('dR');
        let page = State.get('dN');
        let selectElementsMap = stage_selection_1['dJ']();
        let isChanged;
        let ids = {}, types = {}, vertical = to == 'sv', maxPages = page.pages;
        if (control) {
            shift = 0;
        }
        let newStages = [], elementInPages = {};
        for (let stage of stages) {
            let rootBound = node(stage['_fS']).getBoundingClientRect();
            let one = {
                '_gu': rootBound.x,
                '_gv': rootBound.y,
                '_gw': rootBound.width,
                '_gx': rootBound.height,
                '_gy': 1,
                '_f7': [],
                '_gz': 0
            };
            let selectedElements = stage['_f7'];
            if (flowProvider) {
                selectedElements = flowProvider["dI"](selectedElements, 1);
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
                one['_gy'] = 0;
            }
            let pre = one;
            for (let e of selectedElements) {
                let bound = node('_rdm_' + e.id).getBoundingClientRect();
                if (stage['_gp'] == '_gA') {
                    let single = (rootBound.height / maxPages);
                    let whichPages = floor((bound.y - rootBound.y) / single);
                    whichPages = max(min(whichPages, maxPages - 1), 0);
                    let inPage = whichPages * single;
                    if (!has(elementInPages, inPage)) {
                        pre = const_1['er'](one);
                        pre['_gz'] = inPage;
                        pre['_gx'] = single;
                        newStages.push(elementInPages[inPage] = pre);
                    }
                    else {
                        pre = elementInPages[inPage];
                    }
                }
                pre['_f7'].push({
                    '_gB': bound,
                    '_gc': e
                });
            }
            if (stage['_gp'] == '_gq') {
                newStages.push(pre);
            }
        }
        for (let stage of newStages) {
            let rootBoundX = stage['_gu'];
            let rootBoundY = stage['_gv'];
            let stageWidth = stage['_gw'];
            let stageHeight = stage['_gx'];
            let prev = [rootBoundX, rootBoundY + stage['_gz'], 0, 0, 0];
            let selectedElements = stage['_f7'];
            let maxCX = MinNum, minCX = MaxNum, maxCY = MinNum, minCY = MaxNum, maxRight = MinNum, maxBottom = MinNum, moveWithGroup = stage['_gy'], tempArray = [];
            for (let { '_gB': bound, '_gc': m } of selectedElements) {
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
                    let d = const_1['dG'](const_1['dF'](dest - current));
                    if (d) {
                        ids[m.id] = 1;
                        types[m.type] = 1;
                        isChanged = 1;
                        let groupList = moveWithGroup && groups[m.id] || [m.id];
                        this['dP'](groupList, use, d, ids);
                    }
                }
            }
        }
        if (isChanged) {
            State.fire('dG', {
                '_fm': ids,
                '_fn': types,
                '_dF': {
                    '_dG': 1
                }
            });
            history_1['dE'](vertical ? history_1['ee'] : history_1['ed']);
        }
    },
    /**
     * 获取最佳的设计区元素列表对象
     * @param e 添加元素事件对象
     * @param silent 是否静默添加
     * @param cell 格子对象
     * @param srcCtrl 当前元素的ctrl对象
     */
    'dF'(e, silent, cell, srcCtrl) {
        let current = State.get('dE');
        let clicked = !e.node;
        //let { areas } = State.get('@:{global#stage.page}');
        // let collectionType = '@:{stage}';
        // let area;
        let first = current[0], xy = transform_1["dI"]({
            x: e.pageX,
            y: e.pageY
        }), collection = State.get('dM'), find = 0, focus = 1; //,
        //collType = '@:{stage}';
        if (clicked &&
            current.length == 1 &&
            (first.ctrl.as & enum_1['dH']) &&
            first.props.focusRow > -1) {
            let { rows, focusRow, focusCol } = first.props;
            let row = rows[focusRow];
            if (row &&
                (!first.ctrl['_fT'] ||
                    first.ctrl['_fT'][srcCtrl.type]) &&
                (!srcCtrl['_fV'] ||
                    srcCtrl['_fV'][first.type])) {
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
            let maskNode = node(cell['_eO']);
            if (maskNode) {
                let bound = maskNode.getBoundingClientRect();
                xy = {
                    x: e.pageX - bound.x,
                    y: e.pageY - bound.y
                };
                collection = cell['_gC'];
                find = 1;
            }
        }
        if (!find) {
            if (clicked) {
                xy = transform_1["dJ"](xy);
            }
            if (srcCtrl['_fV'] &&
                !srcCtrl['_fV'].root) {
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
            '_fR': collection,
            '_g_': xy,
            '_gb': focus,
            //'@:{collection.type}': collectionType,
            //'@:{area}': area
        };
    },
    /**
     * 获取最佳格子
     * @param testNode 待检测dom节点
     * @param ctrl 当前元素的ctrl对象
     */
    'dE'(testNode, ctrl) {
        let elements = State.get('dM'), cell = null;
        let walk = es => {
            for (let e of es) {
                let { type, id, ctrl: elementCtrl, props } = e;
                let n = node(id);
                if (inside(testNode, n)) {
                    //consolex.log(elementCtrl['@:{allowed.elements}'],ctrl.type);
                    if ((elementCtrl.as & enum_1['dH']) &&
                        (!ctrl ||
                            !elementCtrl['_fT'] ||
                            elementCtrl['_fT'][ctrl.type])) {
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
                                        !ctrl['_fV'] ||
                                        ctrl['_fV'][type]) {
                                        let canGenerateCell = true;
                                        if (ctrl) {
                                            let counter = ctrl['_eJ'];
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
                                                '_gD': type,
                                                '_gE': n,
                                                '_gF': `_rd_dm${cellId}`,
                                                '_eO': `_rd_hm${cellId}`,
                                                '_gC': elements
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
    'dU'(view, event, collection, hodId, picked) {
        //右键菜单
        let lang = config('lang');
        let list;
        let disabled = {};
        let selectElements = State.get('dE');
        let selectElementsMap = stage_selection_1['dJ']();
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
            list = contextmenu_1["d4"](lang); //获取相应的菜单列表
            let topElement = collection[collection.length - 1]; //处理z轴关系
            let bottomElement = collection[0];
            let atTop = topElement.id == element.id;
            let atBottom = bottomElement.id == element.id;
            let enable = stage_generic_1['dW'](selectElementsMap);
            disabled[contextmenu_1["dH"]] = locked || atTop;
            disabled[contextmenu_1["dG"]] = locked || atTop;
            disabled[contextmenu_1["dI"]] = locked || atBottom;
            disabled[contextmenu_1["dJ"]] = locked || atBottom;
            disabled[contextmenu_1['dN']] = enable != 1 || locked;
        }
        else if (selectCount > 1) { //多选
            let syncDisabled, syncWidth = 1, syncHeight = 1, syncWidthAsHeight = 1, syncHeightAsWidth = 1;
            if (selectCount == 2) { //如果有2个元素处于选中
                //开启尺寸同步功能
                syncDisabled = 0;
                //2个元素显示的右键菜单
                list = contextmenu_1['d5'](lang);
            }
            else {
                syncDisabled = 1;
                //3个元素
                list = contextmenu_1["d6"](lang);
            }
            let underElement = State.get('dX');
            if (!syncDisabled) { //正好有2个元素
                let [first, second] = selectElements;
                let from = first == underElement ? second : first;
                let fromCtrlModifier = from.ctrl['_gi'], toCtrlModifier = underElement.ctrl['_gi'];
                let fromFlag = 1, toFlag = 1;
                //根据元素控制器提供的相应的能否修改宽高能力，决定元素之间的宽高菜单项能否工作
                if (fromCtrlModifier & enum_1['dO']) {
                    fromFlag |= 2;
                }
                if (fromCtrlModifier & enum_1['dP']) {
                    fromFlag |= 4;
                }
                if (fromCtrlModifier & enum_1['dN']) {
                    fromFlag = 7;
                }
                //鼠标下的元素未处于锁定状态
                if (!underElement.props.locked) {
                    if (toCtrlModifier & enum_1['dO']) {
                        toFlag |= 2;
                    }
                    if (toCtrlModifier & enum_1['dP']) {
                        toFlag |= 4;
                    }
                    if (toCtrlModifier & enum_1['dN']) {
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
            let alignInfo = stage_generic_1['dX'](underElement), xCanotAlign = !alignInfo['dE'], yCanotAlign = !alignInfo['dF'];
            let enable = stage_generic_1['dW'](selectElementsMap);
            let hasDisabled = stage_generic_1['dY'](selectElements);
            disabled[contextmenu_1["dT"]] = syncHeightAsWidth;
            disabled[contextmenu_1["dS"]] = syncWidthAsHeight;
            disabled[contextmenu_1["dV"]] = syncHeight;
            disabled[contextmenu_1["dU"]] = syncWidth;
            disabled[contextmenu_1["dW"]] = yCanotAlign;
            disabled[contextmenu_1["dY"]] = xCanotAlign;
            disabled[contextmenu_1["d1"]] = yCanotAlign;
            disabled[contextmenu_1["d0"]] = xCanotAlign;
            disabled[contextmenu_1["dX"]] = xCanotAlign;
            disabled[contextmenu_1["dZ"]] = yCanotAlign;
            disabled[contextmenu_1['dN']] = enable != 1 || hasDisabled;
        }
        else {
            if (hodId) { //容器格子的右键菜单需要查询z轴
                list = contextmenu_1["d8"](lang);
                let ownerColl = stage_generic_1["dU"](element);
                let topElement = ownerColl[ownerColl.length - 1];
                let bottomElement = ownerColl[0];
                let atTop = topElement.id == element.id;
                let atBottom = bottomElement.id == element.id;
                disabled[contextmenu_1["dH"]] = locked || atTop;
                disabled[contextmenu_1["dG"]] = locked || atTop;
                disabled[contextmenu_1["dI"]] = locked || atBottom;
                disabled[contextmenu_1["dJ"]] = locked || atBottom;
                let nonreadonlyElements = stage_generic_1['dV'](collection);
                disabled[contextmenu_1['d2']] = !nonreadonlyElements.length;
                disabled[contextmenu_1['d3']] = readonly;
            }
            else {
                list = contextmenu_1["d7"](lang);
                disabled[contextmenu_1['dO']] = !stage_generic_1['dI']();
                disabled[contextmenu_1['dP']] = !stage_generic_1['dJ']();
                currentCollection = State.get('dM');
            }
            collection = stage_generic_1['dF'](collection, 0, 1);
            disabled[contextmenu_1["dE"]] = !collection.length;
            disabled[contextmenu_1["dN"]] = !hodId || readonly || locked;
        }
        if (selectCount) {
            let { '_gG': canUngroup, '_gH': canGroup } = stage_generic_1["dZ"]();
            disabled[contextmenu_1["dR"]] = !canGroup;
            disabled[contextmenu_1["dQ"]] = !canUngroup;
        }
        let copyElements = stage_clipboard_1["_f2"]();
        let cxvInfo = stage_generic_1['d0'](copyElements, element, currentCollection);
        disabled[contextmenu_1['dK']] = !cxvInfo['_gI'];
        disabled[contextmenu_1['dL']] = !cxvInfo['_gJ'];
        disabled[contextmenu_1['dM']] = !cxvInfo['_gJ'] || !cxvInfo['_gK'];
        disabled[contextmenu_1['dF']] = !cxvInfo['_gL'];
        index_1.show(view, event, contextMenuId, {
            list: list,
            disabled,
            picked
        });
    }
};

});