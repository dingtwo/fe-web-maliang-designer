/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/perf/index",["4e"],(require,exports,module)=>{
let $quick_f1_0_static_node;
let $quick_f1_1_static_node;

let magix_1 = require("4e");
let { View, applyStyle, node, mark, mix } = magix_1;
applyStyle("rd-ef",".rd-j1{height:30px;width:200px}");
//canvas宽
let grapWidth = 400;
//canvas高
let graphHeight = 60;
let Data = function (d) {
    this['_lZ'] = [];
    this['_dL'] = d;
};
mix(Data.prototype, {
    '_l0'(v) {
        //采样多于图表宽度，画不下，删除
        if (this['_lZ'].length > grapWidth) {
            this['_lZ'].shift();
        }
        this['_lZ'].push(v);
    },
    '_l2'() {
        //从采样中计算最大值，最小值，及当前对应的值
        let samples = this['_lZ'];
        let d = this['_dL'];
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
            '_ks': max.toFixed(d),
            '_kt': min.toFixed(d),
            '_l1': now.toFixed(d)
        };
    }
});
//图表
let Widget = function (id) {
    this['_l3'] = [];
    this['_l4'] = node(`${id}_text`);
    this['_l5'] = node(`${id}_canvas`).getContext('2d');
};
mix(Widget.prototype, {
    '_l8'(r) {
        if (this['_l3'].length > grapWidth) {
            this['_l3'].shift();
        }
        this['_l3'].push(r);
        if (!this['_l6']) {
            this['_l6'] = 1;
            this['_l7']();
        }
    },
    '_l7'() {
        let results = this['_l3'];
        let len = results.length;
        let result = results[len - 1];
        let scale = graphHeight / (result['_ks'] * 1.2);
        this['_l4'].innerHTML = `min:${result['_kt']}&nbsp;max:${result['_ks']}&nbsp;now:${result['_l1']}`;
        let ctx = this['_l5'];
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, 0, grapWidth, graphHeight);
        ctx.fillStyle = "#FA742B";
        let diff = grapWidth - len;
        for (let i = 0; i < len; i++) {
            ctx.fillRect(diff + i, graphHeight, 1, -(results[i]['_l1'] * scale));
        }
        this['_l6'] = 0;
    }
});
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
$vnode_1;

if($quick_f1_0_static_node){
$vnode_0=[$quick_f1_0_static_node];
}else{
$vnode_1=[$createVNode(0,'FPS')];$vnode_0=[$quick_f1_0_static_node=$createVNode('div',{'_': 'cH','class': 'rd-eT rd-ez rd-fy',},$vnode_1)];
}
$vnode_0.push($createVNode('div',{'class': 'rd-eT rd-ez rd-fw','id': $viewId+'_fps_text',}),$createVNode('canvas',{'width': 400,'height': 60,'class': 'rd-j1','id': $viewId+'_fps_canvas',}));
if($quick_f1_1_static_node){
$vnode_0.push($quick_f1_1_static_node);
}else{
$vnode_1=[$createVNode(0,'Memory(MB)')];$vnode_0.push($quick_f1_1_static_node=$createVNode('div',{'_': 'cI','class': 'rd-eT rd-ez rd-fy',},$vnode_1));
}
$vnode_0.push($createVNode('div',{'class': 'rd-eT rd-ez rd-fw','id': $viewId+'_mem_text',}),$createVNode('canvas',{'width': 400,'height': 60,'class': 'rd-j1','id': $viewId+'_mem_canvas',})); 

return $createVNode($viewId,0,$vnode_0); } ,
    '_ec'(shrink) {
        delete this['_l9'];
        if (!this['_m_'] &&
            !shrink) {
            this['_m_'] = 1;
            requestAnimationFrame(this['_ma']);
            this['_mb']();
        }
    },
    '_ed'() {
        delete this['_m_'];
        this['_l9'] = 1;
    },
    async render() {
        let renderMark = mark(this, '_dU');
        await this.digest();
        if (renderMark()) {
            let fpsData = new Data(0);
            let fpsWidget = new Widget(`${this.id}_fps`);
            let samples = [];
            let last = 0;
            let fpsUpdate = now => {
                if (renderMark() &&
                    !this['_l9']) {
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
                        fpsData['_l0'](mean);
                        fpsWidget['_l8'](fpsData['_l2']());
                    }
                    last = now;
                    requestAnimationFrame(fpsUpdate);
                }
            };
            this['_ma'] = fpsUpdate;
            let memData = new Data(1);
            let memWidget = new Widget(`${this.id}_mem`);
            let updateMem = () => {
                if (renderMark() &&
                    !this['_l9'] &&
                    performance.memory) {
                    memData['_l0'](performance.memory.usedJSHeapSize / (1024 * 1024));
                    memWidget['_l8'](memData['_l2']());
                    setTimeout(updateMem, 30);
                }
            };
            this['_mb'] = updateMem;
            this['_ec']();
        }
    },
});

});