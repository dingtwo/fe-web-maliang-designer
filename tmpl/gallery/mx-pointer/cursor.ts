import Magix from 'magix';
let { node, guid, applyStyle, config } = Magix;
let CursorId = guid('_mx_cursor_');
applyStyle('@:cursor.less');
let rootNode;
let prepareRoot = () => {
    if (!rootNode) {
        let rootId = config<string>('rootId');
        rootNode = node(rootId) || document.body;
    }
};
export default {
    '@:{show}'(e: HTMLElement) {
        let styles = getComputedStyle(e);
        this['@:{show.by.type}'](styles.cursor);
    },
    '@:{show.by.type}'(cursor: string) {
        let n = node(CursorId);
        if (!n) {
            document.body.insertAdjacentHTML('beforeend', `<div class="@:./cursor.less:cursor @:scoped.style:{unselectable,full-fill}" id="${CursorId}"/>`);
            n = node(CursorId);
        }
        n.style.cursor = cursor;
        n.style.display = 'block';
    },
    '@:{hide}'() {
        let n = node(CursorId);
        if (n) {
            n.style.display = 'none';
        }
    },
    '@:{root.show.by.type}'(cursor: string) {
        prepareRoot();
        rootNode.style.cursor = cursor;
    },
    '@:{root.hide}'() {
        prepareRoot();
        rootNode.style.cursor = 'auto';
    }
}