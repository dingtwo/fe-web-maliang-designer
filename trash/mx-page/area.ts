/*
    author:https://github.com/xinglie
*/
import Magix, { State } from 'magix';
export default Magix.View.extend({
    tmpl: '@:./area.html',
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{add.area}<click>'() {
        let page = State.get('@:{stage.page}');
        let areas = this.get('areas');
        areas.push({
            x: 0,
            y: page.height / 8,
            width: page.width,
            height: page.height / 2
        });
        Magix.dispatch(this.root, 'change', {
            areas
        });
    },
    '@:{remove.area}<click>'(e) {
        let { i } = e.params;
        let areas = this.get('areas');
        areas.splice(i, 1);
        Magix.dispatch(this.root, 'change', {
            areas
        });
    },
    '@:{update.area.value}<input>'(e) {
        let { i, key } = e.params;
        let areas = this.get('areas');
        let a = areas[i];
        a[key] = e.value;
        Magix.dispatch(this.root, 'change', {
            areas
        });
    },
    '@:{stop}<change>'(e: MouseEvent) {
        e.stopPropagation();
    }
})