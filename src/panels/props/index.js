/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/5e/index",["4e","./element","./page"],(require,exports,module)=>{
require("./element");
require("./page");

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let { State, View, applyStyle } = magix_1;
applyStyle("rd-eg",".rd-j2{min-width:200px}.rd-j3{line-height:24px;padding:2px 0}.rd-j4{padding-bottom:200px}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	single,}=$dataFromView,
$$_class;
;$$_class='';if(!single){;$$_class+='rd-eq';};$vnode_0=[$createVNode('div',{'mx5-owner': $viewId,'mx5-view': '58/5e/element','class': $$_class,})];;$$_class='';if(single){;$$_class+='rd-eq';};$vnode_0.push($createVNode('div',{'mx5-owner': $viewId,'mx5-view': '58/5e/page','class': $$_class,})); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let update = this['_dO'](this.render, 30);
        State.on('dH', update);
        State.on('dJ', update);
        this.on('destroy', () => {
            State.off('dH', update);
            State.off('dJ', update);
        });
    },
    render() {
        let selectElements = State.get('dE');
        let single = selectElements.length == 1;
        this.digest({
            single
        });
    }
});

});