/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { has, View } = Magix;
let wrapReg = /\$\{([a-zA-z0-9_]+)\}/g;
export default View.extend({
    tmpl: '@:index.html',
    assign(data) {
        this.set(data);
        let { props } = data;
        let { text, ext } = props;
        if (ext._totalPage == null) {
            ext._totalPage = 'Y';
        }
        if (ext._currentPage == null) {
            ext._currentPage = 'X';
        }
        text = text.replace(wrapReg, (_, $1) => {
            return has(ext, '_' + $1) ? ext['_' + $1] : _;
        });
        this.set({
            text
        });
    },
    render() {
        this.digest();
    }
});