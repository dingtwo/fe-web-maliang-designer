/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/chart-line/index",["magix5","../../provider/datacenter","../../provider/echarts"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let datacenter_1 = require("../../provider/datacenter");
let echarts_1 = require("../../provider/echarts");
let { node, View, mark, isArray } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	error,}=$dataFromView,
$$_style;
;$$_style='left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg);'+($__line=1,$__art='{{if props.background}}','');$__ctrl='<%if(props.background){%>';if(props.background){;$$_style+='background:'+($__line=1,$__art='{{=props.background}}',$__ctrl='<%=props.background%>',(props.background))+';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-chart-loading rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','data-tip': ($__line=1,$__art='{{=error||\'正在加载图表组件...\'}}',$__ctrl='<%=error||\'正在加载图表组件...\'%>',(error||'正在加载图表组件...')),'id': '_rd_chart_'+($__line=1,$__art='{{=$viewId}}','')+$viewId,'style': $$_style,})]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/chart-line/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    '@:{set.chart~rs}'() {
        if (!this['@:{chart.entity~rs}']) {
            let n = node('_rd_chart_' + this.id);
            this['@:{chart.entity~rs}'] = echarts.init(n);
            this.on('destroy', () => {
                console.log('chart dispose');
                this['@:{chart.entity~rs}'].dispose();
            });
            this['@:{chart.entity~rs}'].setOption({
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
        this['@:{chart.entity~rs}'].resize();
    },
    async render() {
        let m = mark(this, '@:{render~rs}');
        await this.digest();
        try {
            await echarts_1();
            if (m()) {
                let props = this.get('props');
                this['@:{set.chart~rs}']();
                this['@:{chart.entity~rs}'].setOption({
                    title: {
                        text: props.title,
                        x: props.titleAlign
                    },
                    color: props.colors
                });
                let oldFields = this['@:{old.bind.fields~rs}'];
                let newFields = JSON.stringify(props.bind) + JSON.stringify(props.xBind);
                if (oldFields != newFields) {
                    this['@:{old.bind.fields~rs}'] = newFields;
                    this['@:{load.data~rs}'](props);
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
    async '@:{load.data~rs}'(props) {
        let chart = this['@:{chart.entity~rs}'];
        let { bind, xBind } = props;
        if (bind.url &&
            xBind.url) {
            let m = mark(this, '@:{load.data~rs}');
            let { '@:{data~rs}': data } = await datacenter_1(bind.url);
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