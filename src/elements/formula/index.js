/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/formula/index",["4e","../../4t/mathjax"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let mathjax_1 = require("../../4t/mathjax");
let { View, mark } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	html,}=$dataFromView,
$vnode_1;
$vnode_1=[$createVNode(0,(html),1)];$vnode_0=[$createVNode('div',{'class': 'rd-el rd-fH rd-fq','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg);padding:2px;color:'+(props.color)+';font-size:'+(props.fontsize)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_dU');
        try {
            if (!window.MathJax) {
                await this.digest({
                    html: 'loading...'
                });
            }
            await mathjax_1();
            if (m()) {
                let props = this.get('props');
                let text = props.text, html = this['_h6'];
                if (text != this['_h7']) {
                    this['_h7'] = text;
                    html = MathJax.tex2svg(text, {
                        em: 12,
                        ex: 6
                    }).innerHTML;
                    this['_h6'] = html;
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