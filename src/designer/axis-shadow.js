/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/axis-shadow",["magix5","./const","./transform"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
/**
 * 投影
 */
let magix_1 = require("magix5");
let const_1 = require("./const");
let transform_1 = require("./transform");
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
    let selectElements = State.get('@:{global#stage.select.elements~rs}');
    let srcSizesOfX = [], srcSizesOfY = [], stageBound = transform_1['@:{transform#get.stage.dom.rect~rs}']();
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
    State.fire('@:{event#stage.axis.shadow.change~rs}', {
        x: mergeSizesOfX,
        y: mergeSizesOfY
    });
};
/**
 * 监视选中元素的改变
 */
let watchSelectElementsChange = async () => {
    let dealyMark = mark(shadow, '@:{delay.compute.shadow~rs}');
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
    let props = e['@:{props~rs}'];
    if (props['@:{position~rs}'] ||
        props['@:{size~rs}'] ||
        props['@:{rotate~rs}'] ||
        props['@:{protated~rs}'] ||
        props['@:{kped~rs}'] ||
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
    '@:{axis.shadow#setup~rs}'() {
        if (const_1['@:{const#axis.show.shadow~rs}']) {
            State.on('@:{event#stage.select.element.props.change~rs}', watchPropsChange, LOW);
            State.on('@:{event#stage.select.elements.change~rs}', delayChange, LOW);
            State.on('@:{event#stage.scale.change~rs}', delayChange, LOW);
            State.on('@:{event#history.shift.change~rs}', delayChange, LOW);
        }
    },
    '@:{axis.shadow#teardown~rs}'() {
        if (const_1['@:{const#axis.show.shadow~rs}']) {
            State.off('@:{event#stage.select.element.props.change~rs}', watchPropsChange);
            State.off('@:{event#stage.select.elements.change~rs}', delayChange);
            State.off('@:{event#stage.scale.change~rs}', delayChange);
            State.off('@:{event#history.shift.change~rs}', delayChange);
        }
    }
};

});