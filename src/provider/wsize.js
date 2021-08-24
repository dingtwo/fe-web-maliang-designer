/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5g/wsize",["51","../58/5b/index"],(require,exports,module)=>{


/**
 * 尺寸变化插件
 */
let magix_1 = require("51");
let index_1 = require("../58/5b/index");
let { State, node } = magix_1;
let stage, cachedWidth, cachedHeight, cachedOffsetWidth, cachedOffsetHeight, cachedPageWidth, cachedPageHeight;
let watchSizeChange = () => {
    let stageRealWidth = stage.scrollWidth;
    let stageRealHeight = stage.scrollHeight;
    let stageOffsetWidth = stage.offsetWidth;
    let stageOffsetHeight = stage.offsetHeight;
    let page = State.get('gm');
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
        State.fire('gk');
    }
};
module.exports= {
    'gd': watchSizeChange,
    'ge'() {
        stage = node('_rd_stage');
        index_1["_gD"](500, watchSizeChange);
    },
    'gf'() {
        stage = null;
        index_1['_gC'](watchSizeChange);
    }
};

});