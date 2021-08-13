/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/form-checkbox/index",["5c"],(require,exports,module)=>{
let $special_2={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let { View, node, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$$_class,
$$_style,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];
for(let $q_a_ffvjgpksk=props.items,$q_c_rmotldccu=$q_a_ffvjgpksk.length,$q_lc_jmramo=$q_c_rmotldccu-1,ii=0;ii<$q_c_rmotldccu;ii+=1){
let item=$q_a_ffvjgpksk[ii];let first=ii===0;let last=ii===$q_lc_jmramo;
$vnode_2=[$createVNode('input',{'name': (props.inputName),'class': 'rd-l4','type': 'checkbox','checked': (item.checked),'disabled': (item.disabled),'value': (item.value),},1,$special_2)];$vnode_3=[$createVNode(0,(item.text))];$vnode_2.push($createVNode('span',{'style': 'color:'+(props.forecolor)+';font-size:'+(props.fontsize)+(unit)+';letter-spacing:'+(props.letterspacing)+(unit)+';font-family:'+(props.fontfamily)+';margin-left:'+(props.textSpace)+(unit),},$vnode_3));;$$_style='';if(!first){;$$_style+='margin-';if(props.rank=='row'){;$$_style+='left';}else{;$$_style+='top';};$$_style+=':'+(props.itemSpace)+(unit);};$vnode_1.push($createVNode('label',{'class': 'rd-mX rd-mZ','style': $$_style,},$vnode_2));
};$$_class='rd-mJ rd-n5 rd-mX rd-nO';if(props.rank=='column'){;$$_class+=' rd-mY';};$vnode_0=[$createVNode('div',{'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)','class': $$_class,},$vnode_1)]; 

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
    '_qf<input>'(e) {
        this['_qe'](e);
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