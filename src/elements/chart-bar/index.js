/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/chart-bar/index",["5c","../../5r/datacenter","../../5r/echarts"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let datacenter_1 = require("../../5r/datacenter");
let echarts_1 = require("../../5r/echarts");
let { node, View, mark, isArray } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	error,}=$dataFromView,
$$_style;
;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg);';if(props.background){;$$_style+='background:'+(props.background)+';';};$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5 rd-o_','data-tip': (error||'正在加载图表组件...'),'id': '_rd_chart_'+$viewId,'style': $$_style,})]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    '_pO'() {
        if (!this['_pN']) {
            let n = node('_rd_chart_' + this.id);
            this['_pN'] = echarts.init(n);
            this.on('destroy', () => {
                console.log('chart dispose');
                this['_pN'].dispose();
            });
            let xAxis = ['请绑定数据'];
            let yData = [100];
            // 绘制图表
            this['_pN'].setOption({
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
        this['_pN'].resize();
    },
    async render() {
        let m = mark(this, '_mh');
        await this.digest();
        try {
            await echarts_1();
            if (m()) {
                let props = this.get('props');
                this['_pO']();
                this['_pN'].setOption({
                    title: {
                        text: props.title,
                        x: props.titleAlign
                    },
                    color: props.colors
                });
                let oldFields = this['_pP'];
                let newFields = JSON.stringify(props.bind);
                if (oldFields != newFields) {
                    this['_pP'] = newFields;
                    this['_pQ'](props);
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
    async '_pQ'(props) {
        let { bind } = props;
        if (bind.url) {
            let m = mark(this, '_pQ');
            let { '_nV': data } = await datacenter_1(bind.url);
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
                    let chart = this['_pN'];
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