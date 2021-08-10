/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5a",["4e","./4g","./enum","./4q","./57","./5b","./4h"],(require,exports,module)=>{


/**
 * 剪切板管理对象
 */
let magix_1 = require("4e");
let const_1 = require("./4g");
let enum_1 = require("./enum");
let history_1 = require("./4q");
let stage_generic_1 = require("./57");
let stage_selection_1 = require("./5b");
let transform_1 = require("./4h");
let { abs } = Math;
let { State, node, guid, mix } = magix_1;
//let { MAX_VALUE } = Number;
/**
 * 检测是否有相同宽度和旋转角度的元素在目标位置上
 * @param elements 检测哪些元素
 * @param compareX 比较的x坐标
 * @param compareY 比较的y坐标
 * @param width 比较的宽度
 * @param height 比较的高度
 * @param rotate 旋转角度
 * @param aberration 误差
 * @returns 在比较的位置上是否已经有了元素
 */
let hasSameXY = (elements, compareX, compareY, width, height, rotate, aberration) => {
    for (let { props } of elements) {
        if (abs(props.x - compareX) < aberration &&
            abs(props.y - compareY) < aberration &&
            abs(props.width - width) < aberration &&
            abs(props.height - height) < aberration &&
            const_1['en'](props.rotate || 0, rotate || 0)) {
            return 1;
        }
    }
};
/**
 * 获取相对偏移量
 * @param props 元素属性
 * @param xy 鼠标位置
 * @param stage 设计区
 * @param aberration 误差
 * @returns
 */
let getDiff = (props, xy, stage, aberration, moveX, moveY) => {
    let diffX, diffY, elements = stage['_fR'], { x, y, width, height, rotate } = props;
    let rect = transform_1['dF'](props);
    if (xy) {
        let lt = rect['_fE'][0];
        diffX = const_1['dF'](xy.x) - lt.x;
        diffY = const_1['dF'](xy.y) - lt.y;
    }
    else {
        let canvas = node(stage['_fS']);
        let canRect = {
            x: 0,
            y: 0,
            width: const_1['dF'](canvas.clientWidth) - 2 * aberration,
            height: const_1['dF'](canvas.clientHeight) - 2 * aberration
        };
        let newRect = {
            x: rect['_fH'] - aberration,
            y: rect['_fJ'] - aberration,
            width: rect['_e3'],
            height: rect['_e4']
        };
        if (!transform_1["dG"](newRect, canRect)) {
            x = canRect.x + (x - newRect.x - aberration);
            y = canRect.y + (y - newRect.y - aberration);
            if (moveX) {
                x += const_1['dF'](moveX);
            }
            if (moveY) {
                y += const_1['dF'](moveY);
            }
        }
        let moved = const_1['dF'](const_1['ec']);
        while (hasSameXY(elements, x, y, width, height, rotate, aberration)) {
            x += moved;
            y += moved;
        }
        diffX = x - props.x;
        diffY = y - props.y;
    }
    return {
        x: diffX,
        y: diffY
    };
};
/**
 * 深度遍历元素
 * @param from 来源元素
 * @param to 目标元素
 * @param elements 其它元素
 */
let walkElements = (from, to, elements) => {
    to.type = from.type;
    to.ctrl = from.ctrl;
    to.props = const_1['er'](from.props);
    to.id = guid('rde_');
    if (from.ctrl.as & enum_1['dH']) {
        to.props.rows = [];
        to.props.focusRow = -1;
        to.props.focusCol = -1;
        for (let r of from.props.rows) {
            let record = { ...r };
            let cols = [];
            for (let c of r.cols) {
                let ci = { ...c };
                if (c.elements) {
                    ci.elements = [];
                    for (let cc of c.elements) {
                        let canPaste = 1;
                        let count = cc.ctrl['_eJ'];
                        if (count >= 0) {
                            let cn = stage_generic_1["dF"](elements, cc.type);
                            if (cn.length >= count) {
                                canPaste = 0;
                            }
                        }
                        if (canPaste) {
                            let x = {};
                            walkElements(cc, x, elements);
                            ci.elements.push(x);
                        }
                    }
                }
                cols.push(ci);
            }
            record.cols = cols;
            to.props.rows.push(record);
        }
    }
};
/**
 * 粘贴元素
 * @param stage 粘贴到哪个设计区
 * @param list 粘贴的元素列表
 * @param flowProvider 流程图控制对象
 * @param relationships 存放流程图关系的对象
 * @param xy 在哪个位置粘贴
 * @param anchor 参考元素
 * @param moveX 如果位置上有相同元素，则x移动距离
 * @param moveY 如果位置上有相同元素，则y移动距离
 * @returns
 */
let PasteElements = (stage, list, flowProvider, relationships, xy, anchor, moveX, moveY) => {
    let elements = stage['_fR'];
    let allowedElements = stage['_fT'];
    let stageType = stage['_fU'];
    let groups = State.get('dP');
    let update, selected = [];
    let changedIds = {};
    if (list &&
        list.length) {
        list = const_1['er'](list);
        let diffX = 0, diffY = 0;
        let ab = const_1['ej']();
        let container = node(stage['_fS']);
        let cb = container.getBoundingClientRect();
        let stageBound = transform_1['dE']();
        let dx = const_1['dF'](cb.x - stageBound.x);
        let dy = const_1['dF'](cb.y - stageBound.y);
        if (!anchor) {
            anchor = list[0].id;
        }
        for (let i = list.length; i--;) {
            let m = list[i];
            if ((!flowProvider ||
                !flowProvider['dE'](m))) {
                let cloned = {
                    ...m,
                    props: {
                        ...m.props
                    }
                };
                let { props } = cloned;
                props.x -= dx;
                props.y -= dy;
                if (anchor == m.id) {
                    let diff = getDiff(props, xy, stage, ab, moveX, moveY);
                    diffX = diff.x;
                    diffY = diff.y;
                }
                list[i] = cloned;
            }
        }
        for (let m of list) {
            let canPaste = 1;
            let allowedToHods = m.ctrl['_fV'];
            if (allowedElements &&
                !allowedElements[m.type]) {
                canPaste = 0;
            }
            if (canPaste &&
                allowedToHods &&
                !allowedToHods[stageType]) {
                canPaste = 0;
            }
            if (canPaste) {
                let total = m.ctrl['_eI'];
                if (total >= 0) {
                    let added = stage_generic_1["dM"](m.ctrl);
                    if (added.length >= total) {
                        canPaste = 0;
                    }
                }
            }
            if (canPaste) {
                let count = m.ctrl['_eJ'];
                if (count >= 0) {
                    let cc = stage_generic_1["dF"](elements, m.type);
                    if (cc.length >= count) {
                        canPaste = 0;
                    }
                }
            }
            if (canPaste) {
                update = 1;
                let nm = {};
                walkElements(m, nm, elements);
                let { props, ctrl } = nm;
                let moveProps = ctrl['_fW'];
                if (ctrl['_fX']) {
                    moveProps = ctrl['_fW'](props);
                }
                for (let x of moveProps) {
                    props[x.key] += x.use == 'x' ? diffX : diffY;
                }
                props.locked = false;
                props.pinX = false;
                props.pinY = false;
                if (ctrl['_eF'] &&
                    (!flowProvider ||
                        !flowProvider['dE'](nm))) {
                    ctrl['_eF'](props);
                }
                //自动重连相应的关系
                if (relationships &&
                    relationships[m.id]) {
                    relationships[m.id] = nm.id;
                }
                elements.push(nm);
                selected.push(nm);
                changedIds[m.id] = nm.id;
                stage_generic_1['dN']();
            }
        }
        if (update) {
            for (let g in groups) {
                let list = groups[g];
                let dest = changedIds[g];
                if (dest) {
                    let newGroup = [];
                    for (let e of list) {
                        let exist = changedIds[e];
                        if (exist) {
                            newGroup.push(exist);
                        }
                    }
                    if (newGroup.length > 1) {
                        groups[dest] = newGroup;
                    }
                }
            }
        }
    }
    return {
        '_fY': update,
        '_fZ': selected,
        '_f0': changedIds,
        '_f1': relationships
    };
};
let emptyArray = [];
module.exports= {
    /**
     * 获取复制列表
     */
    '_f2'() {
        let clipboard = State.get('dQ');
        return clipboard.c || emptyArray;
    },
    /**
     * 清空剪切板信息
     */
    '_dP'() {
        let clipboard = State.get('dQ');
        if (clipboard.c) {
            State.set({
                'dQ': {}
            });
            State.fire('d1');
        }
    },
    /**
     * 是否剪切动作
     */
    '_f3'() {
        let clipboard = State.get('dQ');
        return clipboard.cut;
    },
    /**
     * 缓存元素
     * @param sourceList 源列表
     */
    '_f4'(sourceList, isCut, e) {
        let list, relationships;
        if (sourceList.length) {
            let underElement = State.get('dX');
            let offsetX = 0, offsetY = 0;
            list = const_1['er'](sourceList); //获取当前所有选中元素
            let flowProvider = State.get('dR');
            if (flowProvider) { //剪切时，如果是流程图元素，自动添加所包含的连接线一起移动
                if (isCut) {
                    list = flowProvider["dH"](list);
                }
                else { //复制时，对于连接线虽然也选中，但只要它连接的元素不全部在复制的元素内，则从复制元素中移除连接线
                    list = flowProvider["dI"](list);
                }
                relationships = flowProvider["dJ"](list);
            }
            let { x, y } = transform_1['dE']();
            //let offset = isCut ? 0 : Const['@:{const#to.unit}'](Const['@:{const#element.same.position.offset}']);
            let ab = const_1['ej']();
            let minLeft, minLeftBound, minTop, minTopBound;
            for (let m of list) {
                let { id, props } = m;
                let mk = node(`_rdm_${id}`);
                if (mk) {
                    let mkb = mk.getBoundingClientRect();
                    let cx = mkb.x + mkb.width / 2 - x, cy = mkb.y + mkb.height / 2 - y;
                    let rect = transform_1['dF'](props);
                    let dx = rect['_fG'] - const_1['dF'](cx);
                    let dy = rect['_fI'] - const_1['dF'](cy);
                    if (abs(dx) > ab) {
                        props.x -= dx;
                    }
                    if (abs(dy) > ab) {
                        props.y -= dy;
                    }
                    if (e &&
                        const_1['d3'] &&
                        id == underElement.id) {
                        let lt = rect['_fE'][0];
                        offsetX = e.pageX - x - const_1['eo'](lt.x - dx);
                        offsetY = e.pageY - y - const_1['eo'](lt.y - dy);
                    }
                    if (!minLeft ||
                        mkb.x < minLeftBound.x) {
                        minLeft = id;
                        minLeftBound = mkb;
                    }
                    if (!minTop ||
                        mkb.y < minTopBound.y) {
                        minTop = id;
                        minTopBound = mkb;
                    }
                }
            }
            /**
             * 粘贴时，需要整体考虑，使用最左侧或最顶部的元素为参考元素，把这2个元素尽可能的露一点在设计区
             */
            let scElement, moveX = 0, moveY = 0;
            if (minLeft != minTop) {
                let mx = minTopBound.x - minLeftBound.right;
                let my = minLeftBound.y - minTopBound.bottom;
                if (mx > my) {
                    scElement = minLeft;
                    if (my > 0) {
                        moveY = my + const_1['ec'];
                    }
                }
                else {
                    scElement = minTop;
                    if (mx > 0) {
                        moveX = mx + const_1['ec'];
                    }
                }
            }
            else {
                scElement = minTop;
            }
            let clipboard = State.get('dQ');
            clipboard.se = scElement;
            clipboard.ue = underElement && underElement.id;
            clipboard.ox = offsetX;
            clipboard.oy = offsetY;
            clipboard.mx = moveX;
            clipboard.my = moveY;
        }
        return {
            '_f1': relationships,
            '_e6': list
        };
    },
    /**
     * 复制元素
     */
    '_f5'(e) {
        let sourceList = State.get('dE');
        let clipboard = State.get('dQ');
        clipboard.cut = 0;
        let { '_f1': relationships, '_e6': list } = this['_f4'](sourceList, 0, e);
        if (list && list.length) {
            clipboard.fr = relationships;
            clipboard.c = list;
            State.fire('d1');
        }
    },
    /**
     * 剪切元素
     */
    '_f6'(e) {
        let sourceList = State.get('dE');
        let clipboard = State.get('dQ');
        clipboard.cut = 1;
        let { '_f1': relationships, '_e6': list } = this['_f4'](sourceList, 1, e);
        if (list && list.length) {
            clipboard.fr = relationships;
            clipboard.c = list;
            let ids = {};
            let flowProvider = State.get('dR');
            let changedElements = [];
            for (let e of list) {
                let { props } = e;
                if (!props.locked &&
                    !props.pinX &&
                    !props.pinY) {
                    changedElements.push(e);
                    ids[e.id] = 1;
                }
            }
            if (flowProvider) {
                let { //'@:{generic.all#map}': all,
                'dE': stageElements } = stage_generic_1['dE']();
                for (let element of stageElements) {
                    let { props, id } = element;
                    if (flowProvider['dE'](element) &&
                        (ids[props.linkFromId] ||
                            ids[props.linkToId])) {
                        ids[id] = 1;
                    }
                }
            }
            if (changedElements.length) {
                stage_generic_1['dO'](ids);
                stage_generic_1["dP"](ids);
                stage_selection_1['dF']();
                history_1['dE'](history_1['eb'], stage_generic_1['dQ'](changedElements));
                State.fire('d2');
            }
        }
    },
    /**
     * 克隆元素
     * @param stages 选中元素处在哪些设计区里
     * @returns
     */
    '_f8'(stages) {
        let page = State.get('dN');
        if (page.readonly) {
            return;
        }
        let rs = {}, selected = [];
        let flowProvider = State.get('dR');
        for (let stage of stages) {
            let { '_f1': preRel, '_e6': list } = this['_f4'](stage['_f7']);
            let { '_f1': relationships, '_fZ': added, '_fY': update } = PasteElements(stage, list, flowProvider, preRel);
            if (update) {
                mix(rs, relationships);
                selected.push(...added);
            }
        }
        if (selected.length) {
            if (flowProvider) {
                stage_generic_1['dN']();
                flowProvider["dK"](selected, rs);
            }
            State.fire('d2');
            stage_selection_1['dG'](selected);
            history_1['dE'](history_1['ec'], stage_generic_1['dQ'](selected));
        }
    },
    /**
     * 粘贴元素
     * @param stage 设计区对象，每一个容器的格子也是一个设计区,使用该对象表示粘贴到哪个设计区里
     * @param xy 粘贴坐标
     */
    '_f9'(stage, xy) {
        let page = State.get('dN');
        let flowProvider = State.get('dR');
        if (page.readonly) {
            return;
        }
        let clipboard = State.get('dQ');
        let under = clipboard.ue;
        let short = clipboard.se, moveX, moveY;
        if (under && xy) {
            let offsetX = clipboard.ox;
            let offsetY = clipboard.oy;
            xy.x -= offsetX;
            xy.y -= offsetY;
        }
        else {
            under = short;
            moveX = clipboard.mx;
            moveY = clipboard.my;
        }
        let { '_f1': relationships, '_fZ': selected, '_fY': update } = PasteElements(stage, clipboard.c, flowProvider, clipboard.fr, xy, under, moveX, moveY);
        if (update) {
            if (clipboard.cut &&
                const_1['dR']) {
                this['_dP']();
            }
            if (flowProvider) {
                stage_generic_1['dN']();
                flowProvider["dK"](selected, relationships);
            }
            State.fire('d2');
            stage_selection_1['dG'](selected);
            history_1['dE'](history_1['d6'], stage_generic_1['dQ'](selected));
        }
    }
};

});