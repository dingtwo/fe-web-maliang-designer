/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/html/index",["5c","../../5r/underscore"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let underscore_1 = require("../../5r/underscore");
let { View, } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$vnode_1;
$vnode_1=[$createVNode(0,(props.value),1)];$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';min-height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        let { props } = data;
        props.value = this['_qD'](props.value);
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