/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/chart-line/index",["4e","../../4t/datacenter","../../4t/echarts"],(require,exports,module)=>{


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
            this['_hp'].setOption({
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    data: ['请先绑定数据和X轴的数据'],
                },
                yAxis: {
                    type: 'value'
                }
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
                let newFields = JSON.stringify(props.bind) + JSON.stringify(props.xBind);
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
        let chart = this['_hp'];
        let { bind, xBind } = props;
        if (bind.url &&
            xBind.url) {
            let m = mark(this, '_hs');
            let { '_fx': data } = await datacenter_1(bind.url);
            if (m()) {
                if (!isArray(data)) {
                    data = [data];
                }
                let xData = [], yData = [];
                for (let d of data) {
                    for (let f of xBind.fields) {
                        xData.push(d[f.id]);
                    }
                    let index = 0;
                    for (let f of bind.fields) {
                        let dest = yData[index];
                        if (!dest) {
                            yData[index] = dest = {
                                data: [],
                                type: 'line'
                            };
                        }
                        dest.data.push(d[f.id]);
                        index++;
                    }
                }
                chart.setOption({
                    xAxis: {
                        data: xData
                    },
                    series: yData
                });
            }
        }
        else {
            chart.setOption({
                xAxis: {
                    data: ['请先绑定数据和X轴的数据']
                },
                series: [{
                        data: [],
                        type: 'line'
                    }]
            });
        }
    }
});

});