/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/fx/dshow",["51","../../50/53","../../5g/fx"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let fx_1 = require("../../5g/fx");
let { View, mark, node } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	html,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_2=[$createVNode(0,(html))];$vnode_1=[$createVNode('div',{'class': 'rd-gV','id': 'ld_'+$viewId,},$vnode_2),$createVNode('div',{'id': 'fx_'+$viewId,})];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-h0 rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_gt');
        try {
            if (!window.functionPlot) {
                await this.digest({
                    html: 'loading...'
                });
            }
            else {
                await this.digest();
            }
            await fx_1();
            if (m()) {
                let { title, width, height, xAxisRange, xAxisTitle, yAxisRange, yAxisTitle, grid, zoom, xLine, yLine, data, annotations } = this.get('props');
                let dest = node(`fx_${this.id}`);
                let ld = node(`ld_${this.id}`);
                if (this['_kK'] != title ||
                    this['_hC'] != width ||
                    this['_hD'] != height ||
                    this['_kL'] != xAxisRange.join(',') ||
                    this['_kM'] != xAxisTitle ||
                    this['_kN'] != yAxisRange.join(',') ||
                    this['_kO'] != yAxisTitle ||
                    this['_kP'] != grid ||
                    this['_kQ'] != zoom ||
                    this['_gw'] != xLine ||
                    this['_gx'] != yLine ||
                    this['_h8'] != JSON.stringify(data) ||
                    this['_kR'] != annotations.join(',')) {
                    dest.innerHTML = '';
                    this['_gw'] = xLine;
                    this['_gx'] = yLine;
                    this['_kL'] = xAxisRange.join(',');
                    this['_kN'] = yAxisRange.join(',');
                    this['_kR'] = annotations.join(',');
                    this['_h8'] = JSON.stringify(data);
                    console.log(annotations);
                    functionPlot({
                        target: dest,
                        width: this['_hC'] = const_1['gY'](width),
                        height: this['_hD'] = const_1['gY'](height),
                        yAxis: {
                            domain: yAxisRange,
                            label: this['_kO'] = yAxisTitle
                        },
                        xAxis: {
                            domain: xAxisRange,
                            label: this['_kM'] = xAxisTitle
                        },
                        tip: {
                            xLine,
                            yLine
                        },
                        grid,
                        disableZoom: zoom,
                        title: (this['_kK'] = title),
                        data: const_1['g1'](data),
                        annotations: const_1['g1'](annotations)
                    });
                    ld.innerHTML = '&nbsp;';
                }
                else {
                    this.digest();
                }
            }
            else {
                console.log(this.id, 'ignoer');
            }
        }
        catch (ex) {
            if (m()) {
                this.digest({
                    html: ex
                });
            }
        }
    }
});

});