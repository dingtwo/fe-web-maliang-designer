/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { applyStyle, View, dispatch } = Magix;
applyStyle('@:series.less');
//https://www.jianshu.com/p/e38768ac7740
//let defaultColors = ['#194f97', '#bd6b08', '#00686b', '#c82d31', '#625ba1', '#898989', '#9c9800', '#007f54', '#a195c5', '#103667', '#f19272', '#fa2c7b', '#ff38e0', '#ffa235', '#04c5f3', '#0066fe', '#8932a5', '#c90444', '#cb9bff', '#90ed7d', '#f7a35c', '#8085e9'];
let { random } = Math;
// let padStart = (str, n, char) => {
//     str += '';
//     if (str.length < n) {
//         str = Array(n - str.length + 1).join(char) + str;
//     }
//     return str;
// };
let getRandomColor = () => '#' + ('00000' + (0x1000000 * random() | 0).toString(16)).slice(-6);
export default View.extend({
    tmpl: '@:series.html',
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{update.colors}<input>'(e) {
        let colors = this.get('colors');
        let { index } = e.params;
        colors[index] = e.color;
        dispatch(this.root, 'change');
    },
    '@:{add.color}<click>'() {
        if (this.get('disabled')) return;
        let colors = this.get('colors');
        if (colors.length > 9) return;
        let color = getRandomColor();
        colors.push(color);
        dispatch(this.root, 'change');
    },
    '@:{remove.color}<click>'(e) {
        if (this.get('disabled')) return;
        let colors = this.get('colors');
        let { index } = e.params;
        colors.splice(index, 1);
        dispatch(this.root, 'change');
    },
    '@:{random.color}<click>'(e) {
        if (this.get('disabled')) return;
        let colors = this.get('colors');
        let { index } = e.params;
        let color = getRandomColor();
        colors[index] = color;
        dispatch(this.root, 'change');
    }
});