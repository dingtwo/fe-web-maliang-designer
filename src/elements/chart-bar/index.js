/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/chart-bar/index",["4e","../../4t/datacenter","../../4t/echarts"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let datacenter_1 = require("../../4t/datacenter");
let echarts_1 = require("../../4t/echarts");
let { node, View, mark, isArray } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	error,}=$dataFromView,
$$_style;
;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg);';if(props.background){;$$_style+='background:'+(props.background)+';';};$vnode_0=[$createVNode('div',{'class': 'rd-el rd-fH rd-fM','data-tip': (error||'正在加载图表组件...'),'id': '_rd_chart_'+$viewId,'style': $$_style,})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    '_hq'() {
        if (!this['_hp']) {
            let n = node('_rd_chart_' + this.id);
            this['_hp'] = echarts.init(n);
            this.on('destroy', () => {
                console.log('chart dispose');
                this['_hp'].dispose();
            });
            let xAxis = ['请绑定数据'];
            let yData = [100];
            // 绘制图表
            this['_hp'].setOption({
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    data: xAxis
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                        data: yData,
                        type: 'bar'
                    }]
            }, true); //true for clear canvas
            n.dataset.tip = '';
        }
        this['_hp'].resize();
    },
    async render() {
        let m = mark(this, '_dU');
        await this.digest();
        try {
            await echarts_1();
            if (m()) {
                let props = this.get('props');
                this['_hq']();
                this['_hp'].setOption({
                    title: {
                        text: props.title,
                        x: props.titleAlign
                    },
                    color: props.colors
                });
                let oldFields = this['_hr'];
                let newFields = JSON.stringify(props.bind);
                if (oldFields != newFields) {
                    this['_hr'] = newFields;
                    this['_hs'](props);
                }
            }
        }
        catch (ex) {
            if (m()) {
                this.digest({
                    error: ex
                });
            }
        }
    },
    async '_hs'(props) {
        let { bind } = props;
        if (bind.url) {
            let m = mark(this, '_hs');
            let { '_fx': data } = await datacenter_1(bind.url);
            if (m()) {
                if (!isArray(data)) {
                    data = [data];
                }
                let first = data[0];
                let xAxis = [];
                let yData = [];
                if (first) {
                    for (let f of bind.fields) {
                        xAxis.push(f.name);
                        yData.push(first[f.id]);
                    }
                    console.log('update chart');
                    let chart = this['_hp'];
                    chart.setOption({
                        xAxis: {
                            data: xAxis
                        },
                        series: [{
                                data: yData,
                                type: 'bar'
                            }]
                    });
                }
            }
        }
    }
});

});