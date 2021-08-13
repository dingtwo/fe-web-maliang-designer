/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/5d",["5c","./5e","./5f"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
/**
 * 投影
 */
let magix_1 = require("5c");
let const_1 = require("./5e");
let transform_1 = require("./5f");
let { State, node, mark, lowTaskFinale, LOW } = magix_1;
let shadow = {}; //用于异步标识对象
//排序
let sortByAsc = (a, b) => a[0] - b[0];
let { max } = Math;
/**
 * 计算投影
 * @param e 事件对象
 */
let computeShadow = (e) => {
    let selectElements = State.get('l2');
    let srcSizesOfX = [], srcSizesOfY = [], stageBound = transform_1['l2']();
    //先获取当前选中元素的所有坐标及尺寸
    for (let { id } of selectElements) {
        let maskNode = node(`_rdm_${id}`);
        if (maskNode) {
            let b = maskNode.getBoundingClientRect();
            let px = b.x - stageBound.x;
            let py = b.y - stageBound.y;
            srcSizesOfX.push([px, px + b.width]);
            srcSizesOfY.push([py, py + b.height]);
        }
    }
    //以下对坐标及尺寸进行合并，减少dom的生成
    let mergeSizesOfX = [];
    srcSizesOfX.sort(sortByAsc);
    let mergeSizesOfY = [];
    srcSizesOfY.sort(sortByAsc);
    let srcAndMergeSizes = [
        [srcSizesOfX, mergeSizesOfX],
        [srcSizesOfY, mergeSizesOfY]
    ];
    for (let [src, merge] of srcAndMergeSizes) {
        for (let size of src) {
            let extend;
            for (let merged of merge) {
                if (size[0] >= merged[0] &&
                    size[0] <= merged[1]) {
                    merged[1] = max(size[1], merged[1]);
                    extend = 1;
                }
            }
            if (!extend) {
                merge.push(size);
            }
        }
    }
    //派发事件
    State.fire('l3', {
        x: mergeSizesOfX,
        y: mergeSizesOfY
    });
};
/**
 * 监视选中元素的改变
 */
let watchSelectElementsChange = async () => {
    let dealyMark = mark(shadow, '_l2');
    await lowTaskFinale();
    if (dealyMark()) {
        computeShadow();
    }
};
let delayTimer;
let delayChange = () => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(watchSelectElementsChange, 15);
};
//监视属性改变，只对引起影子变化的属性进行处理
let watchPropsChange = (e) => {
    //console.log(e);
    let props = e['_l3'];
    if (props['_l4'] ||
        props['_l5'] ||
        props['_l6'] ||
        props['_l7'] ||
        props['_l8'] ||
        props.x ||
        props.y ||
        props.width ||
        props.height ||
        props.rotate ||
        props.kp ||
        props.borderwidth) {
        watchSelectElementsChange();
    }
};
module.exports= {
    'l2'() {
        if (const_1['l2']) {
            State.on('l4', watchPropsChange, LOW);
            State.on('l5', delayChange, LOW);
            State.on('l6', delayChange, LOW);
            State.on('l7', delayChange, LOW);
        }
    },
    'l3'() {
        if (const_1['l2']) {
            State.off('l4', watchPropsChange);
            State.off('l5', delayChange);
            State.off('l6', delayChange);
            State.off('l7', delayChange);
        }
    }
};

});