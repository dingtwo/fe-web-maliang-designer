/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("gallery/mx-pointer/cursor",["magix5"],(require,exports,module)=>{


let magix_1 = require("magix5");
let { node, guid, applyStyle, config } = magix_1;
let CursorId = guid('_mx_cursor_');
applyStyle("rd-_gallery_mx-pointer_cursor_less_",".rd-_gallery_mx-pointer_cursor_less_-cursor {\nopacity:0;\nbackground:#fff;\nposition:fixed;\nz-index:10000;\n}\n");
let rootNode;
let prepareRoot = () => {
    if (!rootNode) {
        let rootId = config('rootId');
        rootNode = node(rootId) || document.body;
    }
};
module.exports= {
    '@:{show~rs}'(e) {
        let styles = getComputedStyle(e);
        this['@:{show.by.type~rs}'](styles.cursor);
    },
    '@:{show.by.type~rs}'(cursor) {
        let n = node(CursorId);
        if (!n) {
            document.body.insertAdjacentHTML('beforeend', `<div class="rd-_gallery_mx-pointer_cursor_less_-cursor rd-_assets_index_less_-unselectable rd-_assets_index_less_-full-fill" id="${CursorId}"/>`);
            n = node(CursorId);
        }
        n.style.cursor = cursor;
        n.style.display = 'block';
    },
    '@:{hide~rs}'() {
        let n = node(CursorId);
        if (n) {
            n.style.display = 'none';
        }
    },
    '@:{root.show.by.type~rs}'(cursor) {
        prepareRoot();
        rootNode.style.cursor = cursor;
    },
    '@:{root.hide~rs}'() {
        prepareRoot();
        rootNode.style.cursor = 'auto';
    }
};

});