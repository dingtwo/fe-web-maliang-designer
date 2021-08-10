/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4l/4n/cursor",["4e"],(require,exports,module)=>{


let magix_1 = require("4e");
let { node, guid, applyStyle, config } = magix_1;
let CursorId = guid('_mx_cursor_');
applyStyle("rd-d6",".rd-jj{background:#fff;opacity:0;position:fixed;z-index:10000}");
let rootNode;
let prepareRoot = () => {
    if (!rootNode) {
        let rootId = config('rootId');
        rootNode = node(rootId) || document.body;
    }
};
module.exports= {
    '_ec'(e) {
        let styles = getComputedStyle(e);
        this['_gn'](styles.cursor);
    },
    '_gn'(cursor) {
        let n = node(CursorId);
        if (!n) {
            document.body.insertAdjacentHTML('beforeend', `<div class="rd-jj rd-et rd-fa" id="${CursorId}"/>`);
            n = node(CursorId);
        }
        n.style.cursor = cursor;
        n.style.display = 'block';
    },
    '_ed'() {
        let n = node(CursorId);
        if (n) {
            n.style.display = 'none';
        }
    },
    '_eH'(cursor) {
        prepareRoot();
        rootNode.style.cursor = cursor;
    },
    '_eP'() {
        prepareRoot();
        rootNode.style.cursor = 'auto';
    }
};

});