/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/fx/dshow",["magix5","../../designer/const","../../provider/fx"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let fx_1 = require("../../provider/fx");
let { View, mark, node } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	html,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_2=[$createVNode(0,($__line=2,$__art='{{=html}}',$__ctrl='<%=html%>',(html)))];$vnode_1=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa','id': 'ld_'+($__line=2,$__art='{{=$viewId}}','')+$viewId,},$vnode_2),$createVNode('div',{'id': 'fx_'+($__line=3,$__art='{{=$viewId}}','')+$viewId,})];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/fx/dshow.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '@:{render~rs}');
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
                if (this['@:{title~rs}'] != title ||
                    this['@:{width~rs}'] != width ||
                    this['@:{height~rs}'] != height ||
                    this['@:{x.axis.range~rs}'] != xAxisRange.join(',') ||
                    this['@:{x.axis.title~rs}'] != xAxisTitle ||
                    this['@:{y.axis.range~rs}'] != yAxisRange.join(',') ||
                    this['@:{y.axis.title~rs}'] != yAxisTitle ||
                    this['@:{grid~rs}'] != grid ||
                    this['@:{zoom~rs}'] != zoom ||
                    this['@:{x.line~rs}'] != xLine ||
                    this['@:{y.line~rs}'] != yLine ||
                    this['@:{data~rs}'] != JSON.stringify(data) ||
                    this['@:{annotations~rs}'] != annotations.join(',')) {
                    dest.innerHTML = '';
                    this['@:{x.line~rs}'] = xLine;
                    this['@:{y.line~rs}'] = yLine;
                    this['@:{x.axis.range~rs}'] = xAxisRange.join(',');
                    this['@:{y.axis.range~rs}'] = yAxisRange.join(',');
                    this['@:{annotations~rs}'] = annotations.join(',');
                    this['@:{data~rs}'] = JSON.stringify(data);
                    console.log(annotations);
                    functionPlot({
                        target: dest,
                        width: this['@:{width~rs}'] = const_1['@:{const#to.px~rs}'](width),
                        height: this['@:{height~rs}'] = const_1['@:{const#to.px~rs}'](height),
                        yAxis: {
                            domain: yAxisRange,
                            label: this['@:{y.axis.title~rs}'] = yAxisTitle
                        },
                        xAxis: {
                            domain: xAxisRange,
                            label: this['@:{x.axis.title~rs}'] = xAxisTitle
                        },
                        tip: {
                            xLine,
                            yLine
                        },
                        grid,
                        disableZoom: zoom,
                        title: (this['@:{title~rs}'] = title),
                        data: const_1['@:{const#clone~rs}'](data),
                        annotations: const_1['@:{const#clone~rs}'](annotations)
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