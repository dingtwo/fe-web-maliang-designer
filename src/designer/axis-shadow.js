/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/52",["51","./53","./54"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
/**
 * 投影
 */
let magix_1 = require("51");
let const_1 = require("./53");
let transform_1 = require("./54");
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
    let selectElements = State.get('gd');
    let srcSizesOfX = [], srcSizesOfY = [], stageBound = transform_1['gd']();
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
    State.fire('ge', {
        x: mergeSizesOfX,
        y: mergeSizesOfY
    });
};
/**
 * 监视选中元素的改变
 */
let watchSelectElementsChange = async () => {
    let dealyMark = mark(shadow, '_gd');
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
    let props = e['_ge'];
    if (props['_gf'] ||
        props['_gg'] ||
        props['_gh'] ||
        props['_gi'] ||
        props['_gj'] ||
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
    'gd'() {
        if (const_1['gd']) {
            State.on('gf', watchPropsChange, LOW);
            State.on('gg', delayChange, LOW);
            State.on('gh', delayChange, LOW);
            State.on('gi', delayChange, LOW);
        }
    },
    'ge'() {
        if (const_1['gd']) {
            State.off('gf', watchPropsChange);
            State.off('gg', delayChange);
            State.off('gh', delayChange);
            State.off('gi', delayChange);
        }
    }
};

});