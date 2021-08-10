import Magix from 'magix';
let { View, applyStyle, node, mark,mix } = Magix;
applyStyle('@:index.less');
//canvas宽
let grapWidth = 400;
//canvas高
let graphHeight = 60;
let Data = function (d) {
    this['@:{samples}'] = [];
    this['@:{decimals}'] = d;
};
mix(Data.prototype, {
    '@:{add.sample}'(v) {
        //采样多于图表宽度，画不下，删除
        if (this['@:{samples}'].length > grapWidth) {
            this['@:{samples}'].shift();
        }
        this['@:{samples}'].push(v);
    },
    '@:{calc}'() {
        //从采样中计算最大值，最小值，及当前对应的值
        let samples = this['@:{samples}'];
        let d = this['@:{decimals}'];
        let min = samples[0];
        let max = samples[0];
        for (let i = 0; i < samples.length; i++) {
            let k = samples[i];
            if (k < min) {
                min = k;
            }
            if (k > max) {
                max = k;
            }
        }
        let now = samples[samples.length - 1];
        return {
            '@:{max}': max.toFixed(d),
            '@:{min}': min.toFixed(d),
            '@:{now}': now.toFixed(d)
        };
    }
});
//图表
let Widget = function (id) {
    this['@:{results}'] = [];
    this['@:{text.node}'] = node(`${id}_text`);
    this['@:{canvas.ctx}'] = (node(`${id}_canvas`) as HTMLCanvasElement).getContext('2d');
};
mix(Widget.prototype, {
    '@:{add.result}'(r) {
        if (this['@:{results}'].length > grapWidth) {
            this['@:{results}'].shift();
        }
        this['@:{results}'].push(r);
        if (!this['@:{dirty}']) {
            this['@:{dirty}'] = 1;
            this['@:{draw}']();
        }
    },
    '@:{draw}'() {
        let results = this['@:{results}'];
        let len = results.length;
        let result = results[len - 1];
        let scale = graphHeight / (result['@:{max}'] * 1.2);
        this['@:{text.node}'].innerHTML = `min:${result['@:{min}']}&nbsp;max:${result['@:{max}']}&nbsp;now:${result['@:{now}']}`;
        let ctx = this['@:{canvas.ctx}'];
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, 0, grapWidth, graphHeight);
        ctx.fillStyle = "#FA742B";
        let diff = grapWidth - len;
        for (let i = 0; i < len; i++) {
            ctx.fillRect(diff + i, graphHeight, 1, -(results[i]['@:{now}'] * scale));
        }
        this['@:{dirty}'] = 0;
    }
})
export default View.extend<{
    '@:{started}': number
    '@:{hidden}': number
    '@:{fps.update}'(n: number): void
    '@:{mem.update}'(): void
}>({
    tmpl: '@:index.html',
    '@:{show}'(shrink) {
        delete this['@:{hidden}'];
        if (!this['@:{started}'] &&
            !shrink) {
            this['@:{started}'] = 1;
            requestAnimationFrame(this['@:{fps.update}']);
            this['@:{mem.update}']();
        }
    },
    '@:{hide}'() {
        delete this['@:{started}'];
        this['@:{hidden}'] = 1;
    },
    async render() {
        let renderMark = mark(this, '@:{render}');
        await this.digest();
        if (renderMark()) {
            let fpsData = new Data(0);
            let fpsWidget = new Widget(`${this.id}_fps`);
            let samples = [];
            let last = 0;
            let fpsUpdate = now => {
                if (renderMark() &&
                    !this['@:{hidden}']) {
                    let elapsed = (now - (last === 0 ? now : last)) / 1000;
                    let fps = 1 / elapsed;
                    if (fps !== Infinity) {
                        if (samples.length === 64) {
                            samples.shift();
                        }
                        samples.push(fps);
                        let sum = 0;
                        for (let i = 0; i < samples.length; i++) {
                            sum += samples[i];
                        }
                        let mean = sum / samples.length;
                        fpsData['@:{add.sample}'](mean);
                        fpsWidget['@:{add.result}'](fpsData['@:{calc}']());
                    }
                    last = now;
                    requestAnimationFrame(fpsUpdate);
                }
            };
            this['@:{fps.update}'] = fpsUpdate;

            let memData = new Data(1);
            let memWidget = new Widget(`${this.id}_mem`);
            let updateMem = () => {
                if (renderMark() &&
                    !this['@:{hidden}'] &&
                    performance.memory) {
                    memData['@:{add.sample}'](performance.memory.usedJSHeapSize / (1024 * 1024));
                    memWidget['@:{add.result}'](memData['@:{calc}']());
                    setTimeout(updateMem, 30);
                }
            };
            this['@:{mem.update}'] = updateMem;
            this['@:{show}']();
        }
    },
});