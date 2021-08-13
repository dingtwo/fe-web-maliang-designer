/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/perf/index",["5c"],(require,exports,module)=>{
let $quick_oo_0_static_node;
let $quick_oo_1_static_node;

let magix_1 = require("5c");
let { View, applyStyle, node, mark, mix } = magix_1;
applyStyle("rd-mD",".rd-so{height:30px;width:200px}");
//canvas宽
let grapWidth = 400;
//canvas高
let graphHeight = 60;
let Data = function (d) {
    this['_um'] = [];
    this['_l9'] = d;
};
mix(Data.prototype, {
    '_un'(v) {
        //采样多于图表宽度，画不下，删除
        if (this['_um'].length > grapWidth) {
            this['_um'].shift();
        }
        this['_um'].push(v);
    },
    '_up'() {
        //从采样中计算最大值，最小值，及当前对应的值
        let samples = this['_um'];
        let d = this['_l9'];
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
            '_sQ': max.toFixed(d),
            '_sR': min.toFixed(d),
            '_uo': now.toFixed(d)
        };
    }
});
//图表
let Widget = function (id) {
    this['_uq'] = [];
    this['_ur'] = node(`${id}_text`);
    this['_us'] = node(`${id}_canvas`).getContext('2d');
};
mix(Widget.prototype, {
    '_uv'(r) {
        if (this['_uq'].length > grapWidth) {
            this['_uq'].shift();
        }
        this['_uq'].push(r);
        if (!this['_ut']) {
            this['_ut'] = 1;
            this['_uu']();
        }
    },
    '_uu'() {
        let results = this['_uq'];
        let len = results.length;
        let result = results[len - 1];
        let scale = graphHeight / (result['_sQ'] * 1.2);
        this['_ur'].innerHTML = `min:${result['_sR']}&nbsp;max:${result['_sQ']}&nbsp;now:${result['_uo']}`;
        let ctx = this['_us'];
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, 0, grapWidth, graphHeight);
        ctx.fillStyle = "#FA742B";
        let diff = grapWidth - len;
        for (let i = 0; i < len; i++) {
            ctx.fillRect(diff + i, graphHeight, 1, -(results[i]['_uo'] * scale));
        }
        this['_ut'] = 0;
    }
});
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
$vnode_1;

if($quick_oo_0_static_node){
$vnode_0=[$quick_oo_0_static_node];
}else{
$vnode_1=[$createVNode(0,'FPS')];$vnode_0=[$quick_oo_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-mX rd-nW rd-ng',},$vnode_1)];
}
$vnode_0.push($createVNode('div',{'class': 'rd-mX rd-nU rd-ng','id': $viewId+'_fps_text',}),$createVNode('canvas',{'width': 400,'height': 60,'class': 'rd-so','id': $viewId+'_fps_canvas',}));
if($quick_oo_1_static_node){
$vnode_0.push($quick_oo_1_static_node);
}else{
$vnode_1=[$createVNode(0,'Memory(MB)')];$vnode_0.push($quick_oo_1_static_node=$createVNode('div',{'_': 'i@','class': 'rd-mX rd-nW rd-ng',},$vnode_1));
}
$vnode_0.push($createVNode('div',{'class': 'rd-mX rd-nU rd-ng','id': $viewId+'_mem_text',}),$createVNode('canvas',{'width': 400,'height': 60,'class': 'rd-so','id': $viewId+'_mem_canvas',})); 

return $createVNode($viewId,0,$vnode_0); } ,
    '_mA'(shrink) {
        delete this['_uw'];
        if (!this['_ux'] &&
            !shrink) {
            this['_ux'] = 1;
            requestAnimationFrame(this['_uy']);
            this['_uz']();
        }
    },
    '_mB'() {
        delete this['_ux'];
        this['_uw'] = 1;
    },
    async render() {
        let renderMark = mark(this, '_mh');
        await this.digest();
        if (renderMark()) {
            let fpsData = new Data(0);
            let fpsWidget = new Widget(`${this.id}_fps`);
            let samples = [];
            let last = 0;
            let fpsUpdate = now => {
                if (renderMark() &&
                    !this['_uw']) {
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
                        fpsData['_un'](mean);
                        fpsWidget['_uv'](fpsData['_up']());
                    }
                    last = now;
                    requestAnimationFrame(fpsUpdate);
                }
            };
            this['_uy'] = fpsUpdate;
            let memData = new Data(1);
            let memWidget = new Widget(`${this.id}_mem`);
            let updateMem = () => {
                if (renderMark() &&
                    !this['_uw'] &&
                    performance.memory) {
                    memData['_un'](performance.memory.usedJSHeapSize / (1024 * 1024));
                    memWidget['_uv'](memData['_up']());
                    setTimeout(updateMem, 30);
                }
            };
            this['_uz'] = updateMem;
            this['_mA']();
        }
    },
});

});