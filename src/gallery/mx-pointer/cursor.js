/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5j/5l/cursor",["5c"],(require,exports,module)=>{


let magix_1 = require("5c");
let { node, guid, applyStyle, config } = magix_1;
let CursorId = guid('_mx_cursor_');
applyStyle("rd-mt",".rd-rH{background:#fff;opacity:0;position:fixed;z-index:10000}");
let rootNode;
let prepareRoot = () => {
    if (!rootNode) {
        let rootId = config('rootId');
        rootNode = node(rootId) || document.body;
    }
};
module.exports= {
    '_mA'(e) {
        let styles = getComputedStyle(e);
        this['_oL'](styles.cursor);
    },
    '_oL'(cursor) {
        let n = node(CursorId);
        if (!n) {
            document.body.insertAdjacentHTML('beforeend', `<div class="rd-rH rd-mR rd-ny" id="${CursorId}"/>`);
            n = node(CursorId);
        }
        n.style.cursor = cursor;
        n.style.display = 'block';
    },
    '_mB'() {
        let n = node(CursorId);
        if (n) {
            n.style.display = 'none';
        }
    },
    '_m5'(cursor) {
        prepareRoot();
        rootNode.style.cursor = cursor;
    },
    '_nc'() {
        prepareRoot();
        rootNode.style.cursor = 'auto';
    }
};

});