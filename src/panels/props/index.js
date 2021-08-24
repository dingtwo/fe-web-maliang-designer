/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/61/index",["51","./element","./page"],(require,exports,module)=>{
require("./element");
require("./page");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let { State, View, applyStyle } = magix_1;
applyStyle("rd-gQ",".rd-mB{min-width:200px}.rd-mC{line-height:24px;padding:2px 0}.rd-mD{padding-bottom:200px}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	single,}=$dataFromView,
$$_class;
;$$_class='';if(!single){;$$_class+='rd-g0';};$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5r/61/element','class': $$_class,})];;$$_class='';if(single){;$$_class+='rd-g0';};$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '5r/61/page','class': $$_class,})); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_gn'](this.render, 30);
        State.on('gg', update);
        State.on('gi', update);
        this.on('destroy', () => {
            State.off('gg', update);
            State.off('gi', update);
        });
    },
    render() {
        let selectElements = State.get('gd');
        let single = selectElements.length == 1;
        this.digest({
            single
        });
    }
});

});