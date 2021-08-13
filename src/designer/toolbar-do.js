/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6i",["5c","./5o"],(require,exports,module)=>{
let $quick_l8_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let history_1 = require("./5o");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	status,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;
$vnode_1=[$quick_l8_static_text||($quick_l8_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!status.canUndo){;$$_class+=' rd-pn';};$vnode_0=[$createVNode('i',{'title': (i18n('nA')),'mx5-click': $viewId+'_pq({s:\'-\',b:'+(status.canUndo)+'})','class': $$_class,},$vnode_1)];$vnode_1=[$quick_l8_static_text||($quick_l8_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng rd-m0';if(!status.canRedo){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('nB')),'mx5-click': $viewId+'_pq({s:\'+\',b:'+(status.canRedo)+'})','class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('l7', update);
        State.on('mk', update);
        this.on('destroy', () => {
            State.off('l7', update);
            State.off('mk', update);
        });
    },
    render() {
        this.digest({
            status: history_1["mF"]()
        });
    },
    '_pq<click>'(e) {
        //if (e.eventTarget.classList.contains('@:toolbar.less:toolbar-item-disabled')) {
        //return;
        //}
        let { s, b } = e.params;
        if (b) {
            if (s == '-') {
                history_1["mJ"]();
            }
            else {
                history_1["mK"]();
            }
        }
    }
});

});