/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/4f",["4e","./4g","./4h"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
/**
 * 投影
 */
let magix_1 = require("4e");
let const_1 = require("./4g");
let transform_1 = require("./4h");
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
    let selectElements = State.get('dE');
    let srcSizesOfX = [], srcSizesOfY = [], stageBound = transform_1['dE']();
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
    State.fire('dF', {
        x: mergeSizesOfX,
        y: mergeSizesOfY
    });
};
/**
 * 监视选中元素的改变
 */
let watchSelectElementsChange = async () => {
    let dealyMark = mark(shadow, '_dE');
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
    let props = e['_dF'];
    if (props['_dG'] ||
        props['_dH'] ||
        props['_dI'] ||
        props['_dJ'] ||
        props['_dK'] ||
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
    'dE'() {
        if (const_1['dE']) {
            State.on('dG', watchPropsChange, LOW);
            State.on('dH', delayChange, LOW);
            State.on('dI', delayChange, LOW);
            State.on('dJ', delayChange, LOW);
        }
    },
    'dF'() {
        if (const_1['dE']) {
            State.off('dG', watchPropsChange);
            State.off('dH', delayChange);
            State.off('dI', delayChange);
            State.off('dJ', delayChange);
        }
    }
};

});