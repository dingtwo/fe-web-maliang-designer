/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/form-dropdown/index",["magix5"],(require,exports,module)=>{
let $special_2={'selected':'selected',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { View, node, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];$__line=3;$__art="{{each props.items as item}}";$__ctrl="for(let $q_a_bwcllu=props.items,$q_c_dnqpcj=$q_a_bwcllu.length,$q_key_dmdhzlo=0;$q_key_dmdhzlo<$q_c_dnqpcj;$q_key_dmdhzlo++){let item=$q_a_bwcllu[$q_key_dmdhzlo];";
for(let $q_a_bwcllu=props.items,$q_c_dnqpcj=$q_a_bwcllu.length,$q_key_dmdhzlo=0;$q_key_dmdhzlo<$q_c_dnqpcj;$q_key_dmdhzlo+=1){
let item=$q_a_bwcllu[$q_key_dmdhzlo];
$vnode_3=[$createVNode(0,($__line=5,$__art='{{=item.text}}',$__ctrl='<%=item.text%>',(item.text)))];$vnode_2.push($createVNode('option',{'disabled': ($temp_var=($__line=4,$__art='{{=item.disabled}}',$__ctrl='<%=item.disabled%>',item.disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-dropdown/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'selected': ($temp_var=($__line=4,$__art='{{=item.checked}}',$__ctrl='<%=item.checked%>',item.checked),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"selected" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-dropdown/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'value': ($__line=4,$__art='{{=item.value}}',$__ctrl='<%=item.value%>',(item.value)),},$vnode_3,$special_2));
};$$_class='rd-_assets_index_less_-wp100 rd-_assets_index_less_-hp100'+($__line=2,$__art='{{if props.className}}','');$__ctrl='<%if(props.className){%>';if(props.className){;$$_class+=' '+($__line=2,$__art='{{=props.className}}',$__ctrl='<%=props.className%>',(props.className))+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('select',{'multiple': ($temp_var=($__line=2,$__art='{{=props.multipleSelect}}',$__ctrl='<%=props.multipleSelect%>',props.multipleSelect),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"multiple" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-dropdown/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'style': 'color:'+($__line=2,$__art='{{=props.forecolor}}',$__ctrl='<%=props.forecolor%>',(props.forecolor))+';font-size:'+($__line=2,$__art='{{=props.fontsize}}',$__ctrl='<%=props.fontsize%>',(props.fontsize))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';letter-spacing:'+($__line=2,$__art='{{=props.letterspacing}}',$__ctrl='<%=props.letterspacing%>',(props.letterspacing))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-family:'+($__line=2,$__art='{{=props.fontfamily}}',$__ctrl='<%=props.fontfamily%>',(props.fontfamily)),'name': ($__line=2,$__art='{{=props.inputName}}',$__ctrl='<%=props.inputName%>',(props.inputName)),'class': $$_class,},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/form-dropdown/index.html'; throw msg; }  } ,
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
    '@:{update.value~rs}<input>'(e) {
        this['@:{stop.propagation~rs}'](e);
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