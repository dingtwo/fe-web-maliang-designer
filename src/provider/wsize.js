/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("provider/wsize",["magix5","../gallery/mx-runner/index"],(require,exports,module)=>{


/**
 * 尺寸变化插件
 */
let magix_1 = require("magix5");
let index_1 = require("../gallery/mx-runner/index");
let { State, node } = magix_1;
let stage, cachedWidth, cachedHeight, cachedOffsetWidth, cachedOffsetHeight, cachedPageWidth, cachedPageHeight;
let watchSizeChange = () => {
    let stageRealWidth = stage.scrollWidth;
    let stageRealHeight = stage.scrollHeight;
    let stageOffsetWidth = stage.offsetWidth;
    let stageOffsetHeight = stage.offsetHeight;
    let page = State.get('@:{global#stage.page~rs}');
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
        State.fire('@:{event#stage.size.change~rs}');
    }
};
module.exports= {
    '@:{wsize#update~rs}': watchSizeChange,
    '@:{wsize#setup~rs}'() {
        stage = node('_rd_stage');
        index_1["@:{task.add~rs}"](500, watchSizeChange);
    },
    '@:{wsize#teardown~rs}'() {
        stage = null;
        index_1['@:{task.remove~rs}'](watchSizeChange);
    }
};

});