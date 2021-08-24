/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/5a/cursor",["51"],(require,exports,module)=>{


let magix_1 = require("51");
let { node, guid, applyStyle, config } = magix_1;
let CursorId = guid('_mx_cursor_');
applyStyle("rd-gF",".rd-lT{background:#fff;opacity:0;position:fixed;z-index:10000}");
let rootNode;
let prepareRoot = () => {
    if (!rootNode) {
        let rootId = config('rootId');
        rootNode = node(rootId) || document.body;
    }
};
module.exports= {
    '_gM'(e) {
        let styles = getComputedStyle(e);
        this['_i0'](styles.cursor);
    },
    '_i0'(cursor) {
        let n = node(CursorId);
        if (!n) {
            document.body.insertAdjacentHTML('beforeend', `<div class="rd-lT rd-g3 rd-hK" id="${CursorId}"/>`);
            n = node(CursorId);
        }
        n.style.cursor = cursor;
        n.style.display = 'block';
    },
    '_gN'() {
        let n = node(CursorId);
        if (n) {
            n.style.display = 'none';
        }
    },
    '_hg'(cursor) {
        prepareRoot();
        rootNode.style.cursor = cursor;
    },
    '_ho'() {
        prepareRoot();
        rootNode.style.cursor = 'auto';
    }
};

});