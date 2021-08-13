/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/wsize",["5c","../5j/5m/index"],(require,exports,module)=>{


/**
 * 尺寸变化插件
 */
let magix_1 = require("5c");
let index_1 = require("../5j/5m/index");
let { State, node } = magix_1;
let stage, cachedWidth, cachedHeight, cachedOffsetWidth, cachedOffsetHeight, cachedPageWidth, cachedPageHeight;
let watchSizeChange = () => {
    let stageRealWidth = stage.scrollWidth;
    let stageRealHeight = stage.scrollHeight;
    let stageOffsetWidth = stage.offsetWidth;
    let stageOffsetHeight = stage.offsetHeight;
    let page = State.get('ma');
    let changed;
    if (stageRealHeight) {
        if (stageRealWidth != cachedWidth) {
            cachedWidth = stageRealWidth;
            changed = 1;
        }
        if (stageRealHeight != cachedHeight) {
            cachedHeight = stageRealHeight;
            changed = 1;
        }
        if (stageOffsetWidth != cachedOffsetWidth) {
            cachedOffsetWidth = stageOffsetWidth;
            changed = 1;
        }
        if (stageOffsetHeight != cachedOffsetHeight) {
            cachedOffsetHeight = stageOffsetHeight;
            changed = 1;
        }
        if (page.width != cachedPageWidth) {
            changed = 1;
            cachedPageWidth = page.width;
        }
        if (page.height != cachedPageHeight) {
            changed = 1;
            cachedPageHeight = page.height;
        }
    }
    if (changed) {
        State.fire('l9');
    }
};
module.exports= {
    'l2': watchSizeChange,
    'l3'() {
        stage = node('_rd_stage');
        index_1["_mr"](500, watchSizeChange);
    },
    'l4'() {
        stage = null;
        index_1['_mq'](watchSizeChange);
    }
};

});