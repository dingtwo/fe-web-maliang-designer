/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/fx/index",["5c","../../5b/5e","../../5r/fx"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let fx_1 = require("../../5r/fx");
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
$vnode_2=[$createVNode(0,(html))];$vnode_1=[$createVNode('div',{'class': 'rd-mJ','id': 'ld_'+$viewId,},$vnode_2),$createVNode('div',{'id': 'fx_'+$viewId,})];$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5 rd-nO','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_mh');
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
                    width: this['_nq'] = const_1['mM'](width),
                    height: this['_nr'] = const_1['mM'](height),
                    yAxis: {
                        domain: yAxisRange,
                        label: this['_qz'] = yAxisTitle
                    },
                    xAxis: {
                        domain: xAxisRange,
                        label: this['_qx'] = xAxisTitle
                    },
                    tip: {
                        xLine,
                        yLine
                    },
                    grid,
                    disableZoom: zoom,
                    title: (this['_qv'] = title),
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