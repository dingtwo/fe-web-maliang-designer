/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/form-radio/index",["magix5"],(require,exports,module)=>{
let $special_2={'checked':'checked',};

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
$$_style,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{each props.items as item ii last first}}";$__ctrl="for(let $q_a_fdlbnzpiyn=props.items,$q_c_aqmahfpcv=$q_a_fdlbnzpiyn.length,$q_lc_hcyjfc=$q_c_aqmahfpcv-1,ii=0;ii<$q_c_aqmahfpcv;ii++){let item=$q_a_fdlbnzpiyn[ii];let first=ii===0;let last=ii===$q_lc_hcyjfc;";
for(let $q_a_fdlbnzpiyn=props.items,$q_c_aqmahfpcv=$q_a_fdlbnzpiyn.length,$q_lc_hcyjfc=$q_c_aqmahfpcv-1,ii=0;ii<$q_c_aqmahfpcv;ii+=1){
let item=$q_a_fdlbnzpiyn[ii];let first=ii===0;let last=ii===$q_lc_hcyjfc;
$vnode_2=[$createVNode('input',{'name': ($__line=4,$__art='{{=props.inputName}}',$__ctrl='<%=props.inputName%>',(props.inputName)),'class': 'rd-_assets_index_less_-tag-input','type': 'radio','checked': ($temp_var=($__line=4,$__art='{{=item.checked}}',$__ctrl='<%=item.checked%>',item.checked),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-radio/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'disabled': ($temp_var=($__line=4,$__art='{{=item.disabled}}',$__ctrl='<%=item.disabled%>',item.disabled),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"disabled" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-radio/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'value': ($__line=4,$__art='{{=item.value}}',$__ctrl='<%=item.value%>',(item.value)),},1,$special_2)];$vnode_3=[$createVNode(0,($__line=5,$__art='{{=item.text}}',$__ctrl='<%=item.text%>',(item.text)))];$vnode_2.push($createVNode('span',{'style': 'color:'+($__line=5,$__art='{{=props.forecolor}}',$__ctrl='<%=props.forecolor%>',(props.forecolor))+';font-size:'+($__line=5,$__art='{{=props.fontsize}}',$__ctrl='<%=props.fontsize%>',(props.fontsize))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';letter-spacing:'+($__line=5,$__art='{{=props.letterspacing}}',$__ctrl='<%=props.letterspacing%>',(props.letterspacing))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-family:'+($__line=5,$__art='{{=props.fontfamily}}',$__ctrl='<%=props.fontfamily%>',(props.fontfamily))+';margin-left:'+($__line=5,$__art='{{=props.textSpace}}',$__ctrl='<%=props.textSpace%>',(props.textSpace))+($__line=5,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_3));;$$_style=($__line=3,$__art='{{if !first}}','');$__ctrl='<%if(!first){%>';if(!first){;$$_style+='margin-'+($__line=3,$__art='{{if props.rank==\'row\'}}','');$__ctrl='<%if(props.rank==\'row\'){%>';if(props.rank=='row'){;$$_style+='left'+($__line=3,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='top'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=':'+($__line=3,$__art='{{=props.itemSpace}}',$__ctrl='<%=props.itemSpace%>',(props.itemSpace))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('label',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex','style': $$_style,},$vnode_2));
};$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1 rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden'+($__line=1,$__art='{{if props.rank==\'column\'}}','');$__ctrl='<%if(props.rank==\'column\'){%>';if(props.rank=='column'){;$$_class+=' rd-_assets_index_less_-flex-direction-column'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/form-radio/index.html'; throw msg; }  } ,
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