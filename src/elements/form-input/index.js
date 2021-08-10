/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/form-input/index",["4e"],(require,exports,module)=>{
let $special_2={'value':'value',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let { View, node, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	readonly,}=$dataFromView,
$$_class,
$vnode_1;
$vnode_1=[];let isReadonly=readonly||props.readonly;;
if(props.multiline){
;$$_class='rd-ed rd-ee rd-dI';if(props.className){;$$_class+=' '+(props.className);};$vnode_1.push($createVNode('textarea',{'id': 'ipt_'+$viewId,'readonly': (isReadonly===true),'style': 'color:'+(props.forecolor)+';font-size:'+(props.fontsize)+(unit)+';letter-spacing:'+(props.letterspacing)+(unit)+';font-family:'+(props.fontfamily)+';text-align:'+(props.textAlign),'placeholder': (props.placeholder),'mx5-input': $viewId+'_hS()','value': (props.userValue||props.text),'class': $$_class,},0,$special_2));
}else{
;$$_class='rd-ed rd-ee rd-dH';if(props.className){;$$_class+=' '+(props.className);};$vnode_1.push($createVNode('input',{'id': 'ipt_'+$viewId,'readonly': (isReadonly===true),'style': 'color:'+(props.forecolor)+';font-size:'+(props.fontsize)+(unit)+';letter-spacing:'+(props.letterspacing)+(unit)+';font-family:'+(props.fontfamily)+';text-align:'+(props.textAlign),'placeholder': (props.placeholder),'value': (props.userValue||props.text),'mx5-input': $viewId+'_hS()','class': $$_class,},1,$special_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-eB rd-el rd-ez rd-fH rd-fq','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1)]; 

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
    '_hS<input>'(e) {
        this['_hR'](e);
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