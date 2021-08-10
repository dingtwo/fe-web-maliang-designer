/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
let { has, View, applyStyle } = Magix;
applyStyle('@:./index.less');
let HodElements = {
    'hod-table': 1,
    'hod-hflex': 1,
    'hod-vflex': 1,
    'hod-footer': 1,
    'hod-header': 1,
    'data-dtable': 1
};
export default View.extend({
    tmpl: '@:./index.html',
    render() {
        this.digest();
    },
    '@:{render.page.by.json}'(data) {
        let stage = JSON.parse(data);

        let collectPager = elements => {
            for (let e of elements) {
                if (e.type == 'pager') {
                    e.props.ext.totalPage = 1;
                    e.props.ext.currentPage = 1;
                }
                if (has(HodElements, e.type)) {
                    let { rows } = e.props;
                    for (let row of rows) {
                        for (let col of row.cols) {
                            if (col.elements) {
                                collectPager(col.elements);
                            }
                        }
                    }
                }
            }
        };
        collectPager(stage.elements);
        this.digest({
            stage
        });
    },
    '$doc<paste>'(e: ClipboardEvent) {
        let data = e.clipboardData.getData('text/plain');
        this['@:{render.page.by.json}'](data);
    },
    '$win<message>'(e) {
        e.source.postMessage('@:{display.message.received}', '*');
        this['@:{render.page.by.json}'](e.data);
    }
});