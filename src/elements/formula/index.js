/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/formula/index",["magix5","../../provider/mathjax"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let mathjax_1 = require("../../provider/mathjax");
let { View, mark } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	html,}=$dataFromView,
$vnode_1;
$vnode_1=[$createVNode(0,($__line=1,$__art='{{=html}}',$__ctrl='<%=html%>',(html)),1)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg);padding:2px;color:'+($__line=1,$__art='{{=props.color}}',$__ctrl='<%=props.color%>',(props.color))+';font-size:'+($__line=1,$__art='{{=props.fontsize}}',$__ctrl='<%=props.fontsize%>',(props.fontsize))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/formula/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '@:{render~rs}');
        try {
            if (!window.MathJax) {
                await this.digest({
                    html: 'loading...'
                });
            }
            await mathjax_1();
            if (m()) {
                let props = this.get('props');
                let text = props.text, html = this['@:{last.html~rs}'];
                if (text != this['@:{last.text~rs}']) {
                    this['@:{last.text~rs}'] = text;
                    html = MathJax.tex2svg(text, {
                        em: 12,
                        ex: 6
                    }).innerHTML;
                    this['@:{last.html~rs}'] = html;
                }
                this.digest({
                    html
                });
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