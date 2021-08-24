/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/perf/index",["51"],(require,exports,module)=>{
let $quick_iA_0_static_node;
let $quick_iA_1_static_node;

let magix_1 = require("51");
let { View, applyStyle, node, mark, mix } = magix_1;
applyStyle("rd-gP",".rd-mA{height:30px;width:200px}");
//canvas宽
let grapWidth = 400;
//canvas高
let graphHeight = 60;
let Data = function (d) {
    this['_oB'] = [];
    this['_gk'] = d;
};
mix(Data.prototype, {
    '_oC'(v) {
        //采样多于图表宽度，画不下，删除
        if (this['_oB'].length > grapWidth) {
            this['_oB'].shift();
        }
        this['_oB'].push(v);
    },
    '_oE'() {
        //从采样中计算最大值，最小值，及当前对应的值
        let samples = this['_oB'];
        let d = this['_gk'];
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
            '_m5': max.toFixed(d),
            '_m6': min.toFixed(d),
            '_oD': now.toFixed(d)
        };
    }
});
//图表
let Widget = function (id) {
    this['_oF'] = [];
    this['_oG'] = node(`${id}_text`);
    this['_oH'] = node(`${id}_canvas`).getContext('2d');
};
mix(Widget.prototype, {
    '_oK'(r) {
        if (this['_oF'].length > grapWidth) {
            this['_oF'].shift();
        }
        this['_oF'].push(r);
        if (!this['_oI']) {
            this['_oI'] = 1;
            this['_oJ']();
        }
    },
    '_oJ'() {
        let results = this['_oF'];
        let len = results.length;
        let result = results[len - 1];
        let scale = graphHeight / (result['_m5'] * 1.2);
        this['_oG'].innerHTML = `min:${result['_m6']}&nbsp;max:${result['_m5']}&nbsp;now:${result['_oD']}`;
        let ctx = this['_oH'];
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, 0, grapWidth, graphHeight);
        ctx.fillStyle = "#FA742B";
        let diff = grapWidth - len;
        for (let i = 0; i < len; i++) {
            ctx.fillRect(diff + i, graphHeight, 1, -(results[i]['_oD'] * scale));
        }
        this['_oI'] = 0;
    }
});
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
$vnode_1;

if($quick_iA_0_static_node){
$vnode_0=[$quick_iA_0_static_node];
}else{
$vnode_1=[$createVNode(0,'FPS')];$vnode_0=[$quick_iA_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-g9 rd-h8 rd-hs',},$vnode_1)];
}
$vnode_0.push($createVNode('div',{'class': 'rd-g9 rd-h6 rd-hs','id': $viewId+'_fps_text',}),$createVNode('canvas',{'width': 400,'height': 60,'class': 'rd-mA','id': $viewId+'_fps_canvas',}));
if($quick_iA_1_static_node){
$vnode_0.push($quick_iA_1_static_node);
}else{
$vnode_1=[$createVNode(0,'Memory(MB)')];$vnode_0.push($quick_iA_1_static_node=$createVNode('div',{'_': 'eE','class': 'rd-g9 rd-h8 rd-hs',},$vnode_1));
}
$vnode_0.push($createVNode('div',{'class': 'rd-g9 rd-h6 rd-hs','id': $viewId+'_mem_text',}),$createVNode('canvas',{'width': 400,'height': 60,'class': 'rd-mA','id': $viewId+'_mem_canvas',})); 

return $createVNode($viewId,0,$vnode_0); } ,
    '_gM'(shrink) {
        delete this['_oL'];
        if (!this['_oM'] &&
            !shrink) {
            this['_oM'] = 1;
            requestAnimationFrame(this['_oN']);
            this['_oO']();
        }
    },
    '_gN'() {
        delete this['_oM'];
        this['_oL'] = 1;
    },
    async render() {
        let renderMark = mark(this, '_gt');
        await this.digest();
        if (renderMark()) {
            let fpsData = new Data(0);
            let fpsWidget = new Widget(`${this.id}_fps`);
            let samples = [];
            let last = 0;
            let fpsUpdate = now => {
                if (renderMark() &&
                    !this['_oL']) {
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
                        fpsData['_oC'](mean);
                        fpsWidget['_oK'](fpsData['_oE']());
                    }
                    last = now;
                    requestAnimationFrame(fpsUpdate);
                }
            };
            this['_oN'] = fpsUpdate;
            let memData = new Data(1);
            let memWidget = new Widget(`${this.id}_mem`);
            let updateMem = () => {
                if (renderMark() &&
                    !this['_oL'] &&
                    performance.memory) {
                    memData['_oC'](performance.memory.usedJSHeapSize / (1024 * 1024));
                    memWidget['_oK'](memData['_oE']());
                    setTimeout(updateMem, 30);
                }
            };
            this['_oO'] = updateMem;
            this['_gM']();
        }
    },
});

});