/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5k",["4e","./4q"],(require,exports,module)=>{
let $quick_dK_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let history_1 = require("./4q");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	status,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;
$vnode_1=[$quick_dK_static_text||($quick_dK_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!status.canUndo){;$$_class+=' rd-g0';};$vnode_0=[$createVNode('i',{'title': (i18n('fc')),'mx5-click': $viewId+'_g3({s:\'-\',b:'+(status.canUndo)+'})','class': $$_class,},$vnode_1)];$vnode_1=[$quick_dK_static_text||($quick_dK_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT rd-eC';if(!status.canRedo){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('fd')),'mx5-click': $viewId+'_g3({s:\'+\',b:'+(status.canRedo)+'})','class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('dJ', update);
        State.on('dX', update);
        this.on('destroy', () => {
            State.off('dJ', update);
            State.off('dX', update);
        });
    },
    render() {
        this.digest({
            status: history_1["eh"]()
        });
    },
    '_g3<click>'(e) {
        //if (e.eventTarget.classList.contains('@:toolbar.less:toolbar-item-disabled')) {
        //return;
        //}
        let { s, b } = e.params;
        if (b) {
            if (s == '-') {
                history_1["el"]();
            }
            else {
                history_1["em"]();
            }
        }
    }
});

});