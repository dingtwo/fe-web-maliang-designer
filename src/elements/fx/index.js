/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/fx/index",["4e","../../4d/4g","../../4t/fx"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let fx_1 = require("../../4t/fx");
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
$vnode_2=[$createVNode(0,(html))];$vnode_1=[$createVNode('div',{'class': 'rd-el','id': 'ld_'+$viewId,},$vnode_2),$createVNode('div',{'id': 'fx_'+$viewId,})];$vnode_0=[$createVNode('div',{'class': 'rd-el rd-fH rd-fq','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_dU');
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
                dest.innerHTML = '';
                functionPlot({
                    target: dest,
                    width: this['_e3'] = const_1['eo'](width),
                    height: this['_e4'] = const_1['eo'](height),
                    yAxis: {
                        domain: yAxisRange,
                        label: this['_ib'] = yAxisTitle
                    },
                    xAxis: {
                        domain: xAxisRange,
                        label: this['_i_'] = xAxisTitle
                    },
                    tip: {
                        xLine,
                        yLine
                    },
                    grid,
                    disableZoom: zoom,
                    title: (this['_h8'] = title),
                    data,
                    annotations
                });
                ld.innerHTML = '&nbsp;';
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