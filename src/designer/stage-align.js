/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/5o",["51","./53","./enum","./54"],(require,exports,module)=>{


/**
 * 拖动对齐
 */
let magix_1 = require("51");
let const_1 = require("./53");
let enum_1 = require("./enum");
let transform_1 = require("./54");
let { node, State } = magix_1;
let alignLocker = {};
/**
 * 可对齐元素的类型
 */
let Stage_Line = 1; //设计区
let Axis_X_Line = 2; //x辅助线
let Axis_Y_Line = 4; //y辅助线
let Element_Line = 8; //元素线
let Stage_OR_Element_Line = Stage_Line | Element_Line;
let MaxNum = Number.MAX_VALUE;
let { min, max, atan, PI, sin, cos, tan, abs, round, pow } = Math;
let sortAsc = (a, b) => a - b;
let approachZero = const_1['gV'];
let minUnitPx = 1;
let halfUnitPx = .5;
/**
 * 合并同样位置的吸附辅助线，减少最终生成辅助线的DOM数量
 * @param align 记录辅助线信息的数组
 * @param aberration 误差
 * @param snapInfo 吸附辅助线信息
 */
let mergeSamePositionSnapLine = (align, aberration, snapInfo) => {
    let find;
    for (let a of align) {
        if (abs(a[0] - snapInfo[0]) <= aberration) {
            find = 1;
            if (a[1] > snapInfo[1]) {
                a[1] = snapInfo[1];
            }
            if (a[2] < snapInfo[2]) {
                a[2] = snapInfo[2];
            }
            break;
        }
    }
    if (!find) {
        align.push(snapInfo);
    }
};
let queryXAndYFromAlignElements = (neType, neLeft, neTop, neWidth, neHeight, neXDiffed, neYDiffed, helpLineIsShown) => {
    let nearestX;
    //根据type不同，采用不同的测量方案
    if (neType == Axis_X_Line) { //x辅助线
        //如果辅助线临时隐藏，则不比较
        nearestX = helpLineIsShown ? [neLeft] : []; //只需要比较辅助线坐标
    }
    else if (neType == Axis_Y_Line) { //y辅助线
        nearestX = []; //不比较
    }
    else { //普通元素，比较左中右3个x坐标
        if (neWidth < const_1['gN']) {
            nearestX = [neLeft];
        }
        else {
            nearestX = [];
            if (enum_1['gf'] & const_1['gB']) {
                nearestX.push(neLeft, neLeft + neWidth);
            }
            if (enum_1['ge'] & const_1['gB']) {
                nearestX.push(neLeft + neWidth / 2);
            }
            if (neXDiffed) {
                nearestX.push(...neXDiffed);
            }
        }
    }
    let nearestY; //同x的逻辑
    if (neType == Axis_Y_Line) {
        nearestY = helpLineIsShown ? [neTop] : [];
    }
    else if (neType == Axis_X_Line) {
        nearestY = [];
    }
    else {
        if (neHeight < const_1['gN']) {
            nearestY = [neTop];
        }
        else {
            nearestY = [];
            if (enum_1['gf'] & const_1['gB']) {
                nearestY.push(neTop, neTop + neHeight);
            }
            if (enum_1['ge'] & const_1['gB']) {
                nearestY.push(neTop + neHeight / 2);
            }
            if (neYDiffed) {
                nearestY.push(...neYDiffed);
            }
        }
    }
    return {
        h: nearestX,
        v: nearestY
    };
};
let queryFinalPoint = (dragHandler, handX, handY, cx, cy, sWidth, osWidth, sHeight, osHeight, oppsiteWidth, oppsiteHeight) => {
    let finalX, finalY;
    if (handY == 'm') { //左右中间手柄
        finalX = cx + (sWidth + osHeight / 2) * oppsiteWidth;
        finalY = cy + (osWidth - sHeight / 2) * oppsiteWidth;
    }
    else if (handX == 'm') { //上下中间手柄
        finalX = cx + (sWidth / 2 - osHeight) * oppsiteHeight;
        finalY = cy + (sHeight + osWidth / 2) * oppsiteHeight;
    }
    else if (dragHandler == 'tl' ||
        dragHandler == 'br') { //左上右下
        finalX = cx + (sWidth - osHeight) * oppsiteWidth;
        finalY = cy + (sHeight + osWidth) * oppsiteHeight;
    }
    else { //左下右上
        finalX = cx + (sWidth + osHeight) * oppsiteWidth;
        finalY = cy + (sHeight - osWidth) * oppsiteHeight;
    }
    return {
        x: finalX,
        y: finalY
    };
};
module.exports= {
    /**
     * 查询所有可对齐元素的可用对齐信息，比如旋转后的元素多2个对齐点
     * @param allElements 所有可对齐的元素
     * @param maskId 如果在窗口里，则表示容器格子的遮盖层id
     * @param element 鼠标下的元素，比如同时拖动多个元素
     * @param selectedMap 选中的元素id对象，选中的元素一起移动，所以需要从对齐的元素中排除
     */
    'gd'(allElements, maskId, element, selectedMap) {
        let nearestElements = [];
        //流程图插件
        let flowProvider = State.get('gq');
        let scale = State.get('ge'); //缩放
        let { pages } = State.get('gm'); //几个编辑区
        let pos = transform_1['gd']();
        let singlePageHeight = pos.height / pages; //单个编辑区高度
        let maskBound, startX, startY, othersElements = [];
        for (let i = 0; i < pages; i++) { //几个编辑区是逻辑上的设置，它们仍然是一个节点，所以这里需要进行位置拆分
            nearestElements.push({
                'gl': Stage_Line,
                'gf': 0,
                'gg': i * singlePageHeight,
                'gi': pos.width,
                'gj': singlePageHeight
            });
        }
        if (maskId) { //元素处在元素格子里，则拖动时，该格子也可以成为对齐对象
            let hodMaskNode = node(maskId);
            if (hodMaskNode) {
                maskBound = hodMaskNode.getBoundingClientRect();
                nearestElements.push({
                    'gl': Stage_Line,
                    'gf': maskBound.x - pos.x,
                    'gg': maskBound.y - pos.y,
                    'gi': maskBound.width,
                    'gj': maskBound.height
                });
            }
        }
        let xLines = State.get('gg');
        let yLines = State.get('gh');
        for (let x of xLines) {
            nearestElements.push({
                'gl': Axis_X_Line,
                'gf': x * scale
            });
        }
        for (let y of yLines) {
            nearestElements.push({
                'gl': Axis_Y_Line,
                'gg': y * scale
            });
        }
        for (let l of allElements) {
            let rect;
            //流程图的连线不作为对齐参考
            if (!flowProvider ||
                !flowProvider['gd'](l)) { //鼠标下的元素不作为对齐参考
                let maskNode = node(`_rdm_${l.id}`);
                if (!maskNode) {
                    continue;
                }
                let b = maskNode.getBoundingClientRect();
                let { props, ctrl } = l, xDiffed, yDiffed, bLeft = b.x - pos.x, bTop = b.y - pos.y, bWidth = b.width, bHeight = b.height;
                /**
                 * 元素未旋转，则从左到右分左、中、右3个对齐点
                 * 而旋转后，顶或底的点也需要成为水平对齐点，则有5个对齐点
                 * 垂直方向上同理
                 */
                let fourPoints, fourMiddles; //,
                //dHeight = ctrl['@:{modifier}'] & Enum['@:{enum#modifier.dheight}'];
                if (props.rotate) {
                    let rect = transform_1['ge'](props);
                    fourPoints = rect['_ig'];
                    fourMiddles = rect['_ih'];
                    let cx = const_1['gY'](rect['_ii'] - rect['_ij']);
                    let cy = const_1['gY'](rect['_ik'] - rect['_il']);
                    xDiffed = [];
                    yDiffed = [];
                    let rotatePoints = [];
                    if (enum_1['gf'] & const_1['gB']) {
                        rotatePoints = rotatePoints.concat(fourPoints);
                    }
                    if (enum_1['gj'] & const_1['gB']) {
                        rotatePoints = rotatePoints.concat(fourMiddles);
                    }
                    for (let np of rotatePoints) {
                        let xDiff = const_1['gY'](np.x - rect['_ij']);
                        let yDiff = const_1['gY'](np.y - rect['_il']);
                        //如果点离左侧或右侧非常近，则不再记录，比如旋转了非常小的角度，仍以原始的左或右侧进行对齐
                        if (xDiff > minUnitPx &&
                            xDiff < bWidth - minUnitPx &&
                            abs(xDiff - cx) > minUnitPx) {
                            xDiffed.push(xDiff + bLeft);
                        }
                        if (yDiff > minUnitPx &&
                            yDiff < bHeight - minUnitPx &&
                            abs(yDiff - cy) > minUnitPx) {
                            yDiffed.push(yDiff + bTop);
                        }
                    }
                }
                rect = {
                    'gh': ctrl,
                    'gm': xDiffed,
                    'gn': yDiffed,
                    'gl': Element_Line,
                    'gf': bLeft,
                    'gg': bTop,
                    'gi': bWidth,
                    'gj': bHeight
                };
                if (element &&
                    element.id == l.id) { //当前鼠标下的元素
                    othersElements.unshift(rect); //把鼠标下的元素放在首位，其它元素相对它进行偏移
                    startX = rect['gf'];
                    startY = rect['gg'];
                }
                else {
                    // if (dHeight) {
                    //     rect['@:{align.queried#height}'] = 0;
                    // }
                    if (selectedMap &&
                        selectedMap[l.id]) { //真实选中和程序处理后认为`选中`的元素
                        if (selectedMap[l.id] != -1 && //如果不是特殊的容器或指定的跟随，则进行吸附
                            (selectedMap[l.id] & const_1['gA'])) {
                            othersElements.push(rect);
                        }
                    }
                    else {
                        nearestElements.push(rect);
                    }
                }
            }
        }
        return {
            'gd': nearestElements,
            'go': othersElements,
            'gp': startX,
            'gq': startY,
            'ge': pos,
            'gr': maskBound
        };
    },
    /**
     * 查找并触发对齐信息
     * @param nearestElements 所有附近可对齐的元素信息
     * @param startX 开始x坐标
     * @param offsetX x坐标偏移
     * @param startY 开始y坐标
     * @param offsetY y坐标偏移
     * @param sizesMap 位置信息对象
     * @param testX 待测试x点信息
     * @param fixTestX 修正的x点信息
     * @param testY y点信息
     * @param fixTestY 修正的y点信息
     * @param pinX 是否固定x
     * @param pinY 是否固定y
     * @param altPressed alt键是否按下
     * @param aberration 误差
     * @param snapThreshold 吸附阈值
     * @param ref 引用对象
     * @param scrollOffsetX 滚动x偏移
     * @param scrollOffsetY 滚动y偏移
     * @param maxWidth 吸附提示线最大宽度
     * @param maxHeight 吸附提示线最大高度
     */
    'ge'(nearestElements, startX, offsetX, startY, offsetY, sizesMap, testX, testY, pinX, pinY, altPressed, snapThreshold, aberration, scrollOffsetX = 0, scrollOffsetY = 0, maxWidth = 0, maxHeight = 0) {
        snapThreshold += aberration;
        //console.log(nearestElements, startX, startY, startWidth, startHeight);
        let alignLinkX, alignLinkY, hasXOrYLines;
        if (!altPressed) {
            let minX = MaxNum, minY = MaxNum;
            let destX = startX + offsetX, destY = startY + offsetY, helpLineIsShown = State.get('gi');
            //console.log('helpLineIsShown', helpLineIsShown);
            let findFirstTXPoint, findFirstCXPoint, findFirstTYPoint, findFirstCYPoint;
            // console.log('------');
            for (let { 'gl': neType, 'gf': neLeft, 'gg': neTop, 'gi': neWidth, 'gj': neHeight, 'gm': neXDiffed, 'gn': neYDiffed } of nearestElements) {
                let { h: nearestX, v: nearestY } = queryXAndYFromAlignElements(neType, neLeft, neTop, neWidth, neHeight, neXDiffed, neYDiffed, helpLineIsShown);
                if (!pinX) {
                    for (let tx of nearestX) {
                        for (let cx of testX) {
                            //元素当前x坐标与待测量x坐标的差值
                            let diffX = abs(destX + cx - tx - scrollOffsetX);
                            //console.log(diffX, tx,diffX-minX);
                            if (diffX <= snapThreshold && //可以吸附
                                diffX < minX &&
                                abs(diffX - minX) >= halfUnitPx) { //其它单位有一定误差，只要小于半像素则认为相同
                                minX = diffX;
                                //计算吸附需要的偏移量
                                offsetX = tx - startX - cx + scrollOffsetX;
                                //if (neType & Stage_OR_Element_Line) {//辅助线无须拉线，而普通元素需要
                                findFirstCXPoint = cx;
                                findFirstTXPoint = tx;
                                // }
                                if (alignLinkY) {
                                    alignLinkY.length = 0;
                                }
                                else {
                                    alignLinkY = [];
                                }
                            }
                        }
                    }
                    if (minX != MaxNum) {
                        //console.log(minX);
                        for (let tx of nearestX) {
                            for (let cx of testX) {
                                //console.log(tx,cx,abs(tx - findFirstTXPoint - cx + findFirstCXPoint))
                                if ((neType & Stage_OR_Element_Line) &&
                                    abs(tx - findFirstTXPoint - cx + findFirstCXPoint) < halfUnitPx) { //元素才需要记录更多线
                                    //参考元素找到的位置，与当前第一个y线的距离，需要和拖动的元素找到的y一样大
                                    mergeSamePositionSnapLine(alignLinkY, halfUnitPx, [tx, neTop, neTop + neHeight, cx]);
                                }
                            }
                        }
                    }
                }
                if (!pinY) {
                    for (let ty of nearestY) {
                        for (let cy of testY) {
                            let diffY = abs(destY + cy - ty - scrollOffsetY);
                            if (diffY <= snapThreshold &&
                                diffY < minY &&
                                abs(diffY - minY) >= halfUnitPx) {
                                //console.log(nearestY, ty, startY, cy, diffY, minY);
                                minY = diffY;
                                offsetY = ty - startY - cy + scrollOffsetY;
                                //console.log(offsetY);
                                //if (neType & Stage_OR_Element_Line) {//辅助线无须拉线，而普通元素需要
                                findFirstCYPoint = cy;
                                findFirstTYPoint = ty;
                                //}
                                if (alignLinkX) {
                                    alignLinkX.length = 0;
                                }
                                else {
                                    alignLinkX = [];
                                }
                            }
                        }
                    }
                    //console.clear();
                    if (minY != MaxNum) {
                        for (let ty of nearestY) {
                            for (let cy of testY) {
                                //console.log(abs(ty - findFirstTYPoint - cy + findFirstCYPoint), aberration, ty, cy);
                                if ((neType & Stage_OR_Element_Line) &&
                                    abs(ty - findFirstTYPoint - cy + findFirstCYPoint) < halfUnitPx) {
                                    //console.log(abs(ty - findFirstTYPoint - cy + findFirstCYPoint),ty,cy);
                                    mergeSamePositionSnapLine(alignLinkX, halfUnitPx, [ty, neLeft, neLeft + neWidth, cy]);
                                }
                            }
                        }
                    }
                }
            }
            hasXOrYLines = minX != MaxNum || minY != MaxNum;
        }
        //console.log(hasXOrYLines,ref);
        if (hasXOrYLines ||
            alignLocker['gi']) {
            alignLocker['gi'] = hasXOrYLines;
            if (alignLinkY) {
                for (let y of alignLinkY) {
                    //y长度在循环x的时候，因offsetY不确定，所以需要在这里重新处理一次
                    let [, neTop, neBottom, cy] = y;
                    let m = sizesMap[cy];
                    let minTop = min(neTop, startY + m['_il'] + offsetY - scrollOffsetY) - snapThreshold, maxBottom = max(neBottom, startY + m['_hH'] + offsetY - scrollOffsetY) + snapThreshold;
                    if (maxHeight > 0 &&
                        maxBottom > maxHeight) {
                        maxBottom = maxHeight;
                    }
                    //y[0] = tx | 0;
                    y[1] = minTop;
                    y[2] = maxBottom;
                }
            }
            if (alignLinkX) {
                for (let x of alignLinkX) {
                    let [, neLeft, neRight, cx] = x;
                    let m = sizesMap[cx];
                    //console.log(m['@:{right}'] - m['@:{left}'])
                    let minLeft = min(neLeft, startX + m['_ij'] + offsetX - scrollOffsetX) - snapThreshold, maxRight = max(neRight, startX + m['_im'] + offsetX - scrollOffsetX) + snapThreshold;
                    if (maxWidth > 0 &&
                        maxRight > maxWidth) {
                        maxRight = maxWidth;
                    }
                    //x[0] = ty | 0;
                    x[1] = minLeft;
                    x[2] = maxRight;
                }
            }
            //console.log(JSON.stringify(alignLinkX));//, alignLinkY, offsetX, offsetY);
            State.fire('gd', {
                x: alignLinkX,
                y: alignLinkY
            });
        }
        return {
            'gf': offsetX,
            'gg': offsetY
        };
    },
    /**
     * 清空所有吸附提示线
     */
    'gh'() {
        if (alignLocker['gi']) {
            alignLocker['gi'] = 0;
            State.fire('gd');
        }
    },
    /**
     * 查询尺寸吸附信息
     * @param nearestElements 附近元素信息
     * @param fixedPoint 哪个点固定不动
     * @param dragHandler 拖动手柄
     * @param rotate 旋转角度
     * @param draggedWidth 拖动的宽度
     * @param draggedHeight 拖动的高度
     * @param snapThreshold 吸附阈值
     * @param minWidth 最小宽度
     * @param maxWidth 最大宽度
     * @param minHeight 最小高度
     * @param maxHeight 最大高度
     * @param syncSize 是否同步尺寸
     * @param beginWidth 开始宽度
     * @param beginHeight 开始高度
     * @param minRatio 最小缩放比例
     * @param maxRatio 最大缩放比例
     * @param isShiftPressed shift键是否按下
     * @param altPressed alt键是否按下
     * @param hodCellLeft 容器左侧坐标
     * @param hodCellTop 容器顶部坐标
     * @returns 吸附信息
     */
    'gk'(nearestElements, fixedPoint, dragHandler, rotate, draggedWidth, draggedHeight, snapThreshold, minWidth, maxWidth, minHeight, maxHeight, syncFlag, beginWidth, beginHeight, minRatio, maxRatio, altPressed, hodCellLeft, hodCellTop) {
        //alt键按下，关闭吸附
        if (altPressed) {
            if (alignLocker['gj']) {
                alignLocker['gj'] = 0;
                State.fire('gd');
            }
            return {
                '_in': 0
            };
        }
        //syncSize=isShiftPressed;
        let [handY, handX] = dragHandler;
        let oppsiteWidth = handX == 'l' ? -1 : 1;
        let oppsiteHeight = handY == 't' ? -1 : 1;
        let minX = MaxNum, minY = MaxNum, helpLineIsShown = State.get('gi');
        let b = sin(rotate * (PI / 180)), a = cos(rotate * (PI / 180)), c = tan(rotate * (PI / 180)), { x: cx, y: cy } = fixedPoint;
        //统一使用px进行判断
        cx = const_1['gY'](cx);
        cy = const_1['gY'](cy);
        draggedWidth = const_1['gY'](draggedWidth);
        draggedHeight = const_1['gY'](draggedHeight);
        beginWidth = const_1['gY'](beginWidth);
        beginHeight = const_1['gY'](beginHeight);
        minWidth = const_1['gY'](minWidth);
        maxWidth = const_1['gY'](maxWidth);
        minHeight = const_1['gY'](minHeight);
        maxHeight = const_1['gY'](maxHeight);
        let sWidth = a * draggedWidth;
        let osWidth = b * draggedWidth;
        let sHeight = a * draggedHeight;
        let osHeight = b * draggedHeight;
        let absA = abs(a), absB = abs(b);
        //console.log(sThreshod, osThreshod);
        //先查出当前手柄对应矩形点的信息，需要把鼠标点转化成矩形点
        //鼠标点可以任意位置，矩形点相对是固定的
        let { x: finalX, y: finalY } = queryFinalPoint(dragHandler, handX, handY, cx, cy, sWidth, osWidth, sHeight, osHeight, oppsiteWidth, oppsiteHeight);
        //坐标相对容器坐标，需要转换成世界坐标
        if (hodCellLeft) {
            finalX += hodCellLeft;
        }
        if (hodCellTop) {
            finalY += hodCellTop;
        }
        let snapX, snapY, snapH, snapV, snapHList = [], snapVList = [], snapWidth, snapHeight;
        let hThreshod, vThreshod;
        //不同的吸附不一样的阈值，防止旋转1度这样小角度，导致突然吸附的问题
        let rectAngle;
        let leftTopOrRightBottom = dragHandler == 'tl' ||
            dragHandler == 'br';
        if (handY == 'm') {
            if (syncFlag) {
                rectAngle = atan(beginHeight / 2 / beginWidth) * 180 / PI;
                rectAngle = (rectAngle + (360 - rotate)) % 360;
            }
            else {
                hThreshod = absA * snapThreshold;
                vThreshod = absB * snapThreshold;
            }
        }
        else if (handX == 'm') {
            if (syncFlag) {
                rectAngle = atan(beginHeight / (beginWidth / 2)) * 180 / PI;
                rectAngle = (rectAngle - (360 - rotate)) % 360;
            }
            else {
                hThreshod = absB * snapThreshold;
                vThreshod = absA * snapThreshold;
            }
        }
        else {
            if (syncFlag) {
                let f = leftTopOrRightBottom ? -1 : 1;
                //计算从固定点出发和当前点连线在矩形中的角度
                rectAngle = atan(beginHeight / beginWidth) * 180 / PI;
                rectAngle = (rectAngle + f * (360 - rotate)) % 360;
            }
            else {
                hThreshod = vThreshod = snapThreshold;
            }
        }
        if (syncFlag) {
            hThreshod = abs(cos(rectAngle * PI / 180)) * snapThreshold;
            vThreshod = abs(sin(rectAngle * PI / 180)) * snapThreshold;
        }
        hThreshod = max(0.2, hThreshod);
        vThreshod = max(0.2, vThreshod);
        //console.log('before', finalX, finalY, hThreshod, vThreshod);
        //console.log(hThreshod, vThreshod,draggedWidth,draggedHeight);
        //console.log(hThreshod, vThreshod);
        //let firstY;
        //查询吸附信息
        for (let { 'gl': neType, 'gf': neLeft, 'gg': neTop, 'gi': neWidth, 'gj': neHeight, 'gm': neXDiffed, 'gn': neYDiffed } of nearestElements) {
            let { h: nearestX, v: nearestY } = queryXAndYFromAlignElements(neType, neLeft, neTop, neWidth, neHeight, neXDiffed, neYDiffed, helpLineIsShown);
            for (let tx of nearestX) {
                let diffX = abs(finalX - tx);
                if (diffX <= hThreshod) {
                    snapH = 1;
                    if (diffX < minX) {
                        minX = diffX;
                        snapX = round(tx);
                    }
                }
            }
            for (let ty of nearestY) {
                let diffY = abs(finalY - ty);
                if (diffY <= vThreshod) {
                    snapV = 1;
                    if (diffY < minY) {
                        minY = diffY;
                        snapY = round(ty);
                        //firstY = nearestY;
                    }
                }
            }
        }
        if (snapH ||
            snapV) {
            //console.log('find snap', snapX, snapY, hThreshod, vThreshod, draggedWidth, draggedHeight, finalX, finalY);
            //需要再转化成容器坐标
            if (hodCellLeft) {
                finalX -= hodCellLeft;
                if (snapH) {
                    snapX -= hodCellLeft;
                }
            }
            if (hodCellTop) {
                finalY -= hodCellTop;
                if (snapV) {
                    snapY -= hodCellTop;
                }
            }
            if (handY == 'm') { //左右中间手柄，高固定，只需要计算宽度
                //思路：先根据当前吸附的x或y坐标，推出对应的y或x坐标
                //再根据最终的x,y计算矩形应该对应的宽高是什么
                let r1 = draggedHeight / 2 / b;
                if (snapH) {
                    finalX = snapX;
                    if (!syncFlag &&
                        absB > approachZero) {
                        let rest = (cx - snapX + r1 * oppsiteWidth) * c;
                        finalY = cy - rest;
                    }
                }
                if (snapV &&
                    !snapH) {
                    finalY = snapY;
                    if (!syncFlag &&
                        absB > approachZero) {
                        let rest = (snapY - cy) * oppsiteWidth / c + r1;
                        finalX = cx + rest * oppsiteWidth;
                    }
                }
                if (syncFlag) {
                    //console.log(finalX,finalY,snapV,snapH,absA,absB);
                    if (dragHandler == 'mr') {
                        oppsiteHeight = -1;
                    }
                    if (snapH) {
                        //注意这里是 * tan
                        finalY = cy + ((finalX - cx) * oppsiteWidth * tan(rectAngle * PI / 180)) * oppsiteHeight;
                    }
                    else { //
                        finalX = cx + ((finalY - cy) * oppsiteHeight / tan(rectAngle * PI / 180)) * oppsiteWidth;
                    }
                }
                //console.log('snap',snapH,snapV,finalX,finalY);
                snapWidth = ((finalX - cx) * a + (finalY - cy) * b) / (b * b * oppsiteWidth + a * a * oppsiteWidth);
                snapHeight = draggedHeight;
                //snapHeight = (2 * b * (finalX - cx) + 2 * a * (cy - finalY)) / (b * b * oppsiteWidth + a * a * oppsiteWidth);
            }
            else if (handX == 'm') { //上下手柄，只计算高度
                let halfHA = draggedWidth / 2 * a;
                let halfHB = draggedWidth / 2 * b;
                if (snapV) {
                    finalY = snapY;
                    if (!syncFlag) {
                        let rest1 = (snapY - cy) * oppsiteHeight - halfHB;
                        let halfH1 = rest1 * c;
                        finalX = cx + (halfHA - halfH1) * oppsiteHeight;
                    }
                }
                if (snapH &&
                    !snapV) {
                    finalX = snapX;
                    if (!syncFlag &&
                        absB > approachZero) {
                        let hr1 = halfHA - (snapX - cx) * oppsiteHeight;
                        let v2 = hr1 / c;
                        finalY = cy + (halfHB + v2) * oppsiteHeight;
                    }
                }
                if (syncFlag) {
                    if (dragHandler == 'tm') {
                        oppsiteWidth = -1;
                    }
                    if (snapV) {
                        finalX = cx + ((finalY - cy) * oppsiteHeight / tan(rectAngle * PI / 180)) * oppsiteWidth;
                    }
                    else { //
                        //注意这里是 * tan
                        finalY = cy + ((finalX - cx) * oppsiteWidth * tan(rectAngle * PI / 180)) * oppsiteHeight;
                    }
                }
                snapHeight = ((finalY - cy) * a + (cx - finalX) * b) / (b * b + a * a) * oppsiteHeight;
                snapWidth = draggedWidth;
            }
            else {
                //优先使用y吸附
                if (snapV) {
                    finalY = snapY;
                }
                //如果未找到y吸附或不锁定长宽比，自由移动的点，x也可以吸附
                if (snapH &&
                    (!syncFlag || !snapV)) {
                    finalX = snapX;
                }
                //锁定长宽比的吸附
                if (syncFlag) {
                    /**
                     * 锁定长宽比的情况下，我们需要根据某一个吸附，比如x或y，推算它相应的y和x的值，算出这个点的坐标，只有这样做在旋转吸附时才不抖动
                     */
                    if (snapV) { //垂直吸附，即y值确定，推算x的值
                        finalX = cx + ((finalY - cy) * oppsiteHeight / tan(rectAngle * PI / 180)) * oppsiteWidth;
                    }
                    else {
                        //注意这里是 * tan
                        finalY = cy + ((finalX - cx) * oppsiteWidth * tan(rectAngle * PI / 180)) * oppsiteHeight;
                    }
                }
                // console.log(useHRatio, useVRatio, syncFlag);
                //console.log(finalX, finalY);
                //console.log(finalX, finalY, snapX, snapY);
                // if (a
                //     && b) {//拐角手柄，因为拐角点是自由的，直接算矩形宽度或高度即可
                if (leftTopOrRightBottom) {
                    snapWidth = ((finalY - cy) * b * oppsiteWidth + (finalX - cx) * a * oppsiteHeight) / ((a * a + b * b) * oppsiteWidth * oppsiteHeight);
                    //console.log('------', snapWidth);
                    snapHeight = ((finalY - cy) * a * oppsiteWidth + (cx - finalX) * b * oppsiteHeight) / ((a * a + b * b) * oppsiteWidth * oppsiteHeight);
                }
                else {
                    snapWidth = ((finalX - cx) * a * oppsiteHeight + (cy - finalY) * b * oppsiteWidth) / ((a * a + b * b) * oppsiteWidth * oppsiteHeight);
                    //console.log('------', snapWidth);
                    snapHeight = ((finalX - cx) * b * oppsiteHeight + (finalY - cy) * a * oppsiteWidth) / ((a * a + b * b) * oppsiteWidth * oppsiteHeight);
                }
            }
            //以下进行尺寸判断，有可能吸附后计算出的矩形超出限制，因此在这种情况下需要取消吸附
            if (snapWidth < minWidth) {
                snapWidth = minWidth;
            }
            else if (snapWidth > maxWidth) {
                snapWidth = maxWidth;
            }
            if (snapHeight < minHeight) {
                snapHeight = minHeight;
            }
            else if (snapHeight > maxHeight) {
                snapHeight = maxHeight;
            }
            //按下shift键或元素本身就需要使用相同的宽高
            if (syncFlag) {
                let r;
                //console.log('===', beginWidth, beginHeight, snapWidth, snapHeight);
                if (syncFlag == 1) {
                    r = snapHeight / beginHeight;
                }
                else if (syncFlag == 2) {
                    r = snapWidth / beginWidth;
                }
                if (r < minRatio) {
                    r = minRatio;
                }
                else if (r > maxRatio) {
                    r = maxRatio;
                }
                snapWidth = beginWidth * r;
                snapHeight = beginHeight * r;
                draggedHeight = snapHeight;
                draggedWidth = snapWidth;
            }
            //console.log(syncFlag, snapWidth, snapHeight, draggedWidth, draggedHeight, snapX, snapY);
            sWidth = a * snapWidth;
            osWidth = b * snapWidth;
            sHeight = a * snapHeight;
            osHeight = b * snapHeight;
            //对吸附的宽高进行限制后，重新算出当前手柄对应的点
            let { x, y } = queryFinalPoint(dragHandler, handX, handY, cx, cy, sWidth, osWidth, sHeight, osHeight, oppsiteWidth, oppsiteHeight);
            //console.log(x, y, snapX, snapY);
            minX = MaxNum;
            minY = MaxNum;
            let snappedX = x + (hodCellLeft || 0), snappedY = y + (hodCellTop || 0);
            //处理某些元素限制尺寸，虽然在吸附阈值内但无法定位到目标点上
            //这种情况下我们需要取消吸附
            //比如矩形是{x:10,y:-15,width:200,height:30} 最小高度是20
            //拉最底边向上调整高度，当贴近设计区顶边时，进行吸附，但吸附后底边的坐标是5不是0，所以这种无法吸附到目标点上时，应该取消吸附
            //console.log(snapV, snapY, y, snapH, snapX, x, snapWidth, snapHeight);
            if (snapV &&
                abs(snapY - y) >= minUnitPx) {
                snapV = 0;
                snapHeight = draggedHeight;
            }
            if (snapH &&
                abs(snapX - x) >= minUnitPx) {
                snapH = 0;
                snapWidth = draggedWidth;
            }
            if (snapV ||
                snapH) {
                if (hodCellLeft) {
                    x += hodCellLeft;
                    if (snapH) {
                        snapX += hodCellLeft;
                    }
                }
                if (hodCellTop) {
                    y += hodCellTop;
                    if (snapV) {
                        snapY += hodCellTop;
                    }
                }
                //查询所有与吸附坐标相同的元素，进行辅助线提示
                for (let { 'gl': neType, 'gf': neLeft, 'gg': neTop, 'gi': neWidth, 'gj': neHeight, 'gm': neXDiffed, 'gn': neYDiffed } of nearestElements) {
                    let { h: nearestX, v: nearestY } = queryXAndYFromAlignElements(neType, neLeft, neTop, neWidth, neHeight, neXDiffed, neYDiffed, helpLineIsShown);
                    for (let tx of nearestX) {
                        let d = abs(x - tx);
                        //console.log('---', d, x, tx, approachZero, d < approachZero);
                        if (d < minUnitPx) {
                            if (d < minX) {
                                minX = d;
                                snappedX = tx;
                            }
                            snapHList.push(neTop, neTop + neHeight);
                        }
                    }
                    for (let ty of nearestY) {
                        let d = abs(y - ty);
                        //console.log(d,y,ty,d<approachZero);
                        if (d < minUnitPx) {
                            if (d < minY) {
                                minY = d;
                                snappedY = ty;
                            }
                            snapVList.push(neLeft, neLeft + neWidth);
                        }
                    }
                }
            }
            let alignLinkX, alignLinkY, vCount = snapVList.length, hCount = snapHList.length;
            //console.log(snapH, snapV, snapHList, snapVList);
            if (vCount) {
                snapVList.push(snappedX);
                snapVList.sort(sortAsc);
                alignLinkX = [[snapY, snapVList[0] - snapThreshold, snapVList[vCount] + snapThreshold]];
            }
            if (hCount) {
                snapHList.push(snappedY);
                snapHList.sort(sortAsc);
                alignLinkY = [[snapX, snapHList[0] - snapThreshold, snapHList[hCount] + snapThreshold]];
            }
            //console.log(JSON.stringify(alignLinkX) + JSON.stringify(alignLinkY));
            if (alignLinkX ||
                alignLinkY) {
                alignLocker['gj'] = 1;
                State.fire('gd', {
                    x: alignLinkX,
                    y: alignLinkY
                });
            }
            else if (alignLocker['gj']) {
                alignLocker['gj'] = 0;
                State.fire('gd');
            }
        }
        else if (alignLocker['gj']) {
            alignLocker['gj'] = 0;
            State.fire('gd');
        }
        return {
            '_io': snapH || snapV,
            '_ip': const_1['ge'](snapWidth),
            '_iq': const_1['ge'](snapHeight)
        };
    },
    /**
     * svg点进行吸附
     * @param nearestElements 附近吸附元素
     * @param nowX 当前x坐标
     * @param nowY 当前y坐标
     * @param snapThreshold 吸附阈值
     * @param altPressed alt键是否按下
     * @returns 吸附信息
     */
    'gm'(nearestElements, nowX, nowY, snapThreshold, altPressed) {
        if (altPressed) {
            if (alignLocker['gl']) {
                alignLocker['gl'] = 0;
                State.fire('gd');
            }
            return {
                '_io': 0
            };
        }
        let minX = MaxNum, minY = MaxNum, helpLineIsShown = State.get('gi');
        let snapX, snapY, snapHList = [], snapVList = [];
        for (let { 'gl': neType, 'gf': neLeft, 'gg': neTop, 'gi': neWidth, 'gj': neHeight, 'gm': neXDiffed, 'gn': neYDiffed } of nearestElements) {
            let { h: nearestX, v: nearestY } = queryXAndYFromAlignElements(neType, neLeft, neTop, neWidth, neHeight, neXDiffed, neYDiffed, helpLineIsShown);
            for (let tx of nearestX) {
                let diffX = abs(nowX - tx);
                if (diffX <= snapThreshold) {
                    if (diffX <= minX) {
                        minX = diffX;
                        snapX = tx;
                        snapHList.length = 0;
                        snapHList.push(neTop, neTop + neHeight);
                    }
                    else if (diffX == minX) {
                        snapHList.push(neTop, neTop + neHeight);
                    }
                }
            }
            for (let ty of nearestY) {
                let diffY = abs(nowY - ty);
                if (diffY <= snapThreshold) {
                    if (diffY < minY) {
                        minY = diffY;
                        snapY = ty;
                        snapVList.length = 0;
                        snapVList.push(neLeft, neLeft + neWidth);
                    }
                    else if (diffY == minY) {
                        snapVList.push(neLeft, neLeft + neWidth);
                    }
                }
            }
        }
        let alignLinkX, alignLinkY;
        let hCount = snapHList.length, vCount = snapVList.length;
        if (vCount) {
            snapVList.push(hCount ? snapX : nowX);
            snapVList.sort(sortAsc);
            alignLinkX = [[snapY, snapVList[0] - snapThreshold, snapVList[vCount] + snapThreshold]];
        }
        if (hCount) {
            snapHList.push(vCount ? snapY : nowY);
            snapHList.sort(sortAsc);
            alignLinkY = [[snapX, snapHList[0] - snapThreshold, snapHList[hCount] + snapThreshold]];
        }
        if (alignLinkX ||
            alignLinkY) {
            alignLocker['gl'] = 1;
            State.fire('gd', {
                x: alignLinkX,
                y: alignLinkY
            });
        }
        else if (alignLocker['gl']) {
            alignLocker['gl'] = 0;
            State.fire('gd');
        }
        return {
            '_io': vCount || hCount,
            '_ir': hCount ? snapX : nowX,
            '_is': vCount ? snapY : nowY
        };
    }
};

});