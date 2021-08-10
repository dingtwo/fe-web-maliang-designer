/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Const from '../../designer/const';
import FxProvider from '../../provider/fx';
let { View, mark, node } = Magix;
export default View.extend({
    tmpl: '@:index.html',
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '@:{render}');
        try {
            if (!window.functionPlot) {
                await this.digest({
                    html: 'loading...'
                });
            } else {
                await this.digest();
            }
            await FxProvider();
            if (m()) {
                let {
                    title,
                    width,
                    height,
                    xAxisRange,
                    xAxisTitle,
                    yAxisRange,
                    yAxisTitle,
                    grid,
                    zoom,
                    xLine,
                    yLine,
                    data,
                    annotations
                } = this.get('props');
                let dest = node(`fx_${this.id}`);
                let ld = node(`ld_${this.id}`);

                dest.innerHTML = '';
                functionPlot({
                    target: dest,
                    width: this['@:{width}'] = Const['@:{const#to.px}'](width),
                    height: this['@:{height}'] = Const['@:{const#to.px}'](height),
                    yAxis: {
                        domain: yAxisRange,
                        label: this['@:{y.axis.title}'] = yAxisTitle
                    },
                    xAxis: {
                        domain: xAxisRange,
                        label: this['@:{x.axis.title}'] = xAxisTitle
                    },
                    tip: {
                        xLine,
                        yLine
                    },
                    grid,
                    disableZoom: zoom,
                    title: (this['@:{title}'] = title),
                    data,
                    annotations
                });
                ld.innerHTML = '&nbsp;';
            } else {
                console.log(this.id, 'ignoer');
            }
        } catch (ex) {
            if (m()) {
                this.digest({
                    html: ex
                });
            }
        }
    }
});