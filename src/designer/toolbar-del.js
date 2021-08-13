/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/6h",["5c","./65","./69"],(require,exports,module)=>{
let $quick_mf_0_static_node;
let $quick_l2_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("5c");
let stage_generic_1 = require("./65");
let stage_selection_1 = require("./69");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	canDel,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_mf_0_static_node){
$vnode_0=[$quick_mf_0_static_node];
}else{
$vnode_0=[$quick_mf_0_static_node=$createVNode('i',{'_': 'i!','class': 'rd-mH rd-pm',})];
}
$vnode_1=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];;$$_class='rd-l3 rd-pj rd-nk rd-mZ rd-ng';if(!canDel){;$$_class+=' rd-pn';};$vnode_0.push($createVNode('i',{'title': (i18n('my'))+'(Delete,Backspace)','mx5-click': ((canDel))&&($viewId+'_pp()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['_l3'].locked) {
                update();
            }
        };
        State.on('l7', update);
        State.on('l5', update);
        State.on('l4', checkLocked);
        this.on('destroy', () => {
            State.off('l7', update);
            State.off('l5', update);
            State.off('l4', checkLocked);
        });
    },
    render() {
        let selectElements = State.get('l2');
        let selectElementsMap = stage_selection_1['l7']();
        let enable = 0, disabeld;
        if (selectElements.length > 0) {
            disabeld = stage_generic_1['ml'](selectElements);
            if (!disabeld) {
                enable = stage_generic_1['mj'](selectElementsMap);
            }
        }
        this.digest({
            canDel: enable == 1,
        });
    },
    '_pp<click>'() {
        stage_generic_1["mu"]();
    }
});

});