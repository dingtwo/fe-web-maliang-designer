/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/67",["51","./5d"],(require,exports,module)=>{
let $quick_gj_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let history_1 = require("./5d");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	status,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;
$vnode_1=[$quick_gj_static_text||($quick_gj_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!status.canUndo){;$$_class+=' rd-jz';};$vnode_0=[$createVNode('i',{'title': (i18n('hM')),'mx5-click': $viewId+'_jF({s:\'-\',b:'+(status.canUndo)+'})','class': $$_class,},$vnode_1)];$vnode_1=[$quick_gj_static_text||($quick_gj_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs rd-hb';if(!status.canRedo){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('hN')),'mx5-click': $viewId+'_jF({s:\'+\',b:'+(status.canRedo)+'})','class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        State.on('gi', update);
        State.on('gw', update);
        this.on('destroy', () => {
            State.off('gi', update);
            State.off('gw', update);
        });
    },
    render() {
        this.digest({
            status: history_1["gR"]()
        });
    },
    '_jF<click>'(e) {
        //if (e.eventTarget.classList.contains('@:toolbar.less:toolbar-item-disabled')) {
        //return;
        //}
        let { s, b } = e.params;
        if (b) {
            if (s == '-') {
                history_1["gV"]();
            }
            else {
                history_1["gW"]();
            }
        }
    }
});

});