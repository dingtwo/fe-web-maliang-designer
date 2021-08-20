/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/perf/index",["magix5"],(require,exports,module)=>{
let $quick_fd_0_static_node;
let $quick_fd_1_static_node;

let magix_1 = require("magix5");
let { View, applyStyle, node, mark, mix } = magix_1;
applyStyle("rd-_panels_perf_index_less_",".rd-_panels_perf_index_less_-canvas {\nwidth:200px;\nheight:30px;\n}\n");
//canvas宽
let grapWidth = 400;
//canvas高
let graphHeight = 60;
let Data = function (d) {
    this['@:{samples~rs}'] = [];
    this['@:{decimals~rs}'] = d;
};
mix(Data.prototype, {
    '@:{add.sample~rs}'(v) {
        //采样多于图表宽度，画不下，删除
        if (this['@:{samples~rs}'].length > grapWidth) {
            this['@:{samples~rs}'].shift();
        }
        this['@:{samples~rs}'].push(v);
    },
    '@:{calc~rs}'() {
        //从采样中计算最大值，最小值，及当前对应的值
        let samples = this['@:{samples~rs}'];
        let d = this['@:{decimals~rs}'];
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
            '@:{max~rs}': max.toFixed(d),
            '@:{min~rs}': min.toFixed(d),
            '@:{now~rs}': now.toFixed(d)
        };
    }
});
//图表
let Widget = function (id) {
    this['@:{results~rs}'] = [];
    this['@:{text.node~rs}'] = node(`${id}_text`);
    this['@:{canvas.ctx~rs}'] = node(`${id}_canvas`).getContext('2d');
};
mix(Widget.prototype, {
    '@:{add.result~rs}'(r) {
        if (this['@:{results~rs}'].length > grapWidth) {
            this['@:{results~rs}'].shift();
        }
        this['@:{results~rs}'].push(r);
        if (!this['@:{dirty~rs}']) {
            this['@:{dirty~rs}'] = 1;
            this['@:{draw~rs}']();
        }
    },
    '@:{draw~rs}'() {
        let results = this['@:{results~rs}'];
        let len = results.length;
        let result = results[len - 1];
        let scale = graphHeight / (result['@:{max~rs}'] * 1.2);
        this['@:{text.node~rs}'].innerHTML = `min:${result['@:{min~rs}']}&nbsp;max:${result['@:{max~rs}']}&nbsp;now:${result['@:{now~rs}']}`;
        let ctx = this['@:{canvas.ctx~rs}'];
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, 0, grapWidth, graphHeight);
        ctx.fillStyle = "#FA742B";
        let diff = grapWidth - len;
        for (let i = 0; i < len; i++) {
            ctx.fillRect(diff + i, graphHeight, 1, -(results[i]['@:{now~rs}'] * scale));
        }
        this['@:{dirty~rs}'] = 0;
    }
});
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
$vnode_1;

if($quick_fd_0_static_node){
$vnode_0=[$quick_fd_0_static_node];
}else{
$vnode_1=[$createVNode(0,'FPS')];$vnode_0=[$quick_fd_0_static_node=$createVNode('div',{'_': 'b^','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-fontsize-16 rd-_assets_index_less_-justify-content-center',},$vnode_1)];
}
$vnode_0.push($createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-justify-content-center','id': ($__line=2,$__art='{{= $viewId}}','')+$viewId+'_fps_text',}),$createVNode('canvas',{'width': 400,'height': 60,'class': 'rd-_panels_perf_index_less_-canvas','id': ($__line=3,$__art='{{= $viewId}}','')+$viewId+'_fps_canvas',}));
if($quick_fd_1_static_node){
$vnode_0.push($quick_fd_1_static_node);
}else{
$vnode_1=[$createVNode(0,'Memory(MB)')];$vnode_0.push($quick_fd_1_static_node=$createVNode('div',{'_': 'b*','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-fontsize-16 rd-_assets_index_less_-justify-content-center',},$vnode_1));
}
$vnode_0.push($createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-justify-content-center','id': ($__line=5,$__art='{{= $viewId}}','')+$viewId+'_mem_text',}),$createVNode('canvas',{'width': 400,'height': 60,'class': 'rd-_panels_perf_index_less_-canvas','id': ($__line=6,$__art='{{= $viewId}}','')+$viewId+'_mem_canvas',})); 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/perf/index.html'; throw msg; }  } ,
    '@:{show~rs}'(shrink) {
        delete this['@:{hidden~rs}'];
        if (!this['@:{started~rs}'] &&
            !shrink) {
            this['@:{started~rs}'] = 1;
            requestAnimationFrame(this['@:{fps.update~rs}']);
            this['@:{mem.update~rs}']();
        }
    },
    '@:{hide~rs}'() {
        delete this['@:{started~rs}'];
        this['@:{hidden~rs}'] = 1;
    },
    async render() {
        let renderMark = mark(this, '@:{render~rs}');
        await this.digest();
        if (renderMark()) {
            let fpsData = new Data(0);
            let fpsWidget = new Widget(`${this.id}_fps`);
            let samples = [];
            let last = 0;
            let fpsUpdate = now => {
                if (renderMark() &&
                    !this['@:{hidden~rs}']) {
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
                        fpsData['@:{add.sample~rs}'](mean);
                        fpsWidget['@:{add.result~rs}'](fpsData['@:{calc~rs}']());
                    }
                    last = now;
                    requestAnimationFrame(fpsUpdate);
                }
            };
            this['@:{fps.update~rs}'] = fpsUpdate;
            let memData = new Data(1);
            let memWidget = new Widget(`${this.id}_mem`);
            let updateMem = () => {
                if (renderMark() &&
                    !this['@:{hidden~rs}'] &&
                    performance.memory) {
                    memData['@:{add.sample~rs}'](performance.memory.usedJSHeapSize / (1024 * 1024));
                    memWidget['@:{add.result~rs}'](memData['@:{calc~rs}']());
                    setTimeout(updateMem, 30);
                }
            };
            this['@:{mem.update~rs}'] = updateMem;
            this['@:{show~rs}']();
        }
    },
});

});