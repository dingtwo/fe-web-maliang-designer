/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/6c/index",["5c","./element","./page"],(require,exports,module)=>{
require("./element");
require("./page");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let { State, View, applyStyle } = magix_1;
applyStyle("rd-mE",".rd-sp{min-width:200px}.rd-sq{line-height:24px;padding:2px 0}.rd-sr{padding-bottom:200px}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	single,}=$dataFromView,
$$_class;
;$$_class='';if(!single){;$$_class+='rd-mO';};$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '66/6c/element','class': $$_class,})];;$$_class='';if(single){;$$_class+='rd-mO';};$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '66/6c/page','class': $$_class,})); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_mb'](this.render, 30);
        State.on('l5', update);
        State.on('l7', update);
        this.on('destroy', () => {
            State.off('l5', update);
            State.off('l7', update);
        });
    },
    render() {
        let selectElements = State.get('l2');
        let single = selectElements.length == 1;
        this.digest({
            single
        });
    }
});

});