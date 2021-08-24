/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/66",["51","./5q","./5u"],(require,exports,module)=>{
let $quick_gr_0_static_node;
let $quick_gd_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("51");
let stage_generic_1 = require("./5q");
let stage_selection_1 = require("./5u");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	canDel,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_gr_0_static_node){
$vnode_0=[$quick_gr_0_static_node];
}else{
$vnode_0=[$quick_gr_0_static_node=$createVNode('i',{'_': 'eD','class': 'rd-gT rd-jy',})];
}
$vnode_1=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];;$$_class='rd-ge rd-jv rd-hw rd-ha rd-hs';if(!canDel){;$$_class+=' rd-jz';};$vnode_0.push($createVNode('i',{'title': (i18n('gK'))+'(Delete,Backspace)','mx5-click': ((canDel))&&($viewId+'_jE()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['_ge'].locked) {
                update();
            }
        };
        State.on('gi', update);
        State.on('gg', update);
        State.on('gf', checkLocked);
        this.on('destroy', () => {
            State.off('gi', update);
            State.off('gg', update);
            State.off('gf', checkLocked);
        });
    },
    render() {
        let selectElements = State.get('gd');
        let selectElementsMap = stage_selection_1['gi']();
        let enable = 0, disabeld;
        if (selectElements.length > 0) {
            disabeld = stage_generic_1['gx'](selectElements);
            if (!disabeld) {
                enable = stage_generic_1['gv'](selectElementsMap);
            }
        }
        this.digest({
            canDel: enable == 1,
        });
    },
    '_jE<click>'() {
        stage_generic_1["gG"]();
    }
});

});