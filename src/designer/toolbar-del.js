/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/5j",["4e","./57","./5b"],(require,exports,module)=>{
let $quick_dS_0_static_node;
let $quick_dE_static_text;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("4e");
let stage_generic_1 = require("./57");
let stage_selection_1 = require("./5b");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	canDel,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;

if($quick_dS_0_static_node){
$vnode_0=[$quick_dS_0_static_node];
}else{
$vnode_0=[$quick_dS_0_static_node=$createVNode('i',{'_': 'cH','class': 'rd-ej rd-gZ',})];
}
$vnode_1=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];;$$_class='rd-dF rd-gW rd-eX rd-eB rd-eT';if(!canDel){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('i',{'title': (i18n('ea'))+'(Delete,Backspace)','mx5-click': ((canDel))&&($viewId+'_g2()'),'class': $$_class,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this.render.bind(this);
        let checkLocked = e => {
            if (e['_dF'].locked) {
                update();
            }
        };
        State.on('dJ', update);
        State.on('dH', update);
        State.on('dG', checkLocked);
        this.on('destroy', () => {
            State.off('dJ', update);
            State.off('dH', update);
            State.off('dG', checkLocked);
        });
    },
    render() {
        let selectElements = State.get('dE');
        let selectElementsMap = stage_selection_1['dJ']();
        let enable = 0, disabeld;
        if (selectElements.length > 0) {
            disabeld = stage_generic_1['dY'](selectElements);
            if (!disabeld) {
                enable = stage_generic_1['dW'](selectElementsMap);
            }
        }
        this.digest({
            canDel: enable == 1,
        });
    },
    '_g2<click>'() {
        stage_generic_1["d7"]();
    }
});

});