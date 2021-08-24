/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/form-dropdown/index",["51"],(require,exports,module)=>{
let $special_2={'selected':'selected',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let { View, node, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];
for(let $q_a_suuvfob=props.items,$q_c_ytyrmdr=$q_a_suuvfob.length,$q_key_gbqggqyc=0;$q_key_gbqggqyc<$q_c_ytyrmdr;$q_key_gbqggqyc+=1){
let item=$q_a_suuvfob[$q_key_gbqggqyc];
$vnode_3=[$createVNode(0,(item.text))];$vnode_2.push($createVNode('option',{'disabled': (item.disabled),'selected': (item.checked),'value': (item.value),},$vnode_3,$special_2));
};$$_class='rd-gN rd-gO';if(props.className){;$$_class+=' '+(props.className);};$vnode_1=[$createVNode('select',{'multiple': (props.multipleSelect),'style': 'color:'+(props.forecolor)+';font-size:'+(props.fontsize)+(unit)+';letter-spacing:'+(props.letterspacing)+(unit)+';font-family:'+(props.fontfamily),'name': (props.inputName),'class': $$_class,},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-g9 rd-gV rd-h0 rd-ha rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    getValue() {
        let props = this.get('props');
        let input = node(`ipt_${this.id}`);
        let id = this.get('id');
        return {
            id,
            type: 'form-input',
            props,
            elementId: id,
            elementType: 'form-input',
            elementProps: JSON.stringify(props),
            elementValue: props.userValue,
            elementName: props.inputName,
            elementInput: input
        };
    },
    '_ku<input>'(e) {
        this['_kt'](e);
        let { eventTarget } = e;
        let value = eventTarget.value.trim();
        let props = this.get('props');
        props.userValue = value;
        dispatch(this.root, 'elementinput', {
            elementId: this.get('id'),
            elementType: 'form-input',
            elementProps: JSON.stringify(props),
            elementValue: value,
            elementName: props.inputName,
            elementInput: eventTarget
        });
    }
});

});