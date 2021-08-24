/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/html/index",["51","../../5g/underscore"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let underscore_1 = require("../../5g/underscore");
let { View, } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_1;
$vnode_1=[$createVNode(0,(props.value),1)];$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';min-height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        let { props } = data;
        props.value = this['_kS'](props.value);
        this.set(data);
    },
    async render() {
        await underscore_1();
        let props = this.get('props');
        let { bind } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            if (bind._data) {
                props.value = _.template(props.value)({
                    data: bind._data,
                    field: bindField
                });
            }
        }
        this.digest();
    }
});

});