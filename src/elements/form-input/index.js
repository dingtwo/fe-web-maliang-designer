/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/form-input/index",["magix5"],(require,exports,module)=>{
let $special_2={'value':'value',};

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
	unit,
	readonly,}=$dataFromView,
$$_class,
$vnode_1;
$vnode_1=[];($__line=2,$__art='{{set isReadonly=readonly||props.readonly}}','');$__ctrl='<%let isReadonly=readonly||props.readonly;%>';let isReadonly=readonly||props.readonly;;$__line=3;$__art="{{if props.multiline}}";$__ctrl="if(props.multiline){";
if(props.multiline){
;$$_class='rd-_assets_index_less_-wp100 rd-_assets_index_less_-hp100 rd-_assets_index_less_-textarea'+($__line=4,$__art='{{if props.className}}','');$__ctrl='<%if(props.className){%>';if(props.className){;$$_class+=' '+($__line=4,$__art='{{=props.className}}',$__ctrl='<%=props.className%>',(props.className))+($__line=4,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('textarea',{'id': 'ipt_'+($__line=4,$__art='{{=$viewId}}','')+$viewId,'readonly': ($temp_var=($__line=4,$__art='{{=isReadonly===true}}',$__ctrl='<%=isReadonly===true%>',isReadonly===true),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"readonly" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-input/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'style': 'color:'+($__line=4,$__art='{{=props.forecolor}}',$__ctrl='<%=props.forecolor%>',(props.forecolor))+';font-size:'+($__line=4,$__art='{{=props.fontsize}}',$__ctrl='<%=props.fontsize%>',(props.fontsize))+($__line=4,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';letter-spacing:'+($__line=4,$__art='{{=props.letterspacing}}',$__ctrl='<%=props.letterspacing%>',(props.letterspacing))+($__line=4,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-family:'+($__line=4,$__art='{{=props.fontfamily}}',$__ctrl='<%=props.fontfamily%>',(props.fontfamily))+';text-align:'+($__line=4,$__art='{{=props.textAlign}}',$__ctrl='<%=props.textAlign%>',(props.textAlign)),'placeholder': ($__line=4,$__art='{{=props.placeholder}}',$__ctrl='<%=props.placeholder%>',(props.placeholder)),'mx5-input': $viewId+'@:{update.value~rs}()','value': ($__line=4,$__art='{{=props.userValue||props.text}}',$__ctrl='<%=props.userValue||props.text%>',(props.userValue||props.text)),'class': $$_class,},0,$special_2));
}else{
;$$_class='rd-_assets_index_less_-wp100 rd-_assets_index_less_-hp100 rd-_assets_index_less_-input'+($__line=6,$__art='{{if props.className}}','');$__ctrl='<%if(props.className){%>';if(props.className){;$$_class+=' '+($__line=6,$__art='{{=props.className}}',$__ctrl='<%=props.className%>',(props.className))+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('input',{'id': 'ipt_'+($__line=6,$__art='{{=$viewId}}','')+$viewId,'readonly': ($temp_var=($__line=6,$__art='{{=isReadonly===true}}',$__ctrl='<%=isReadonly===true%>',isReadonly===true),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"readonly" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/form-input/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'style': 'color:'+($__line=6,$__art='{{=props.forecolor}}',$__ctrl='<%=props.forecolor%>',(props.forecolor))+';font-size:'+($__line=6,$__art='{{=props.fontsize}}',$__ctrl='<%=props.fontsize%>',(props.fontsize))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';letter-spacing:'+($__line=6,$__art='{{=props.letterspacing}}',$__ctrl='<%=props.letterspacing%>',(props.letterspacing))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-family:'+($__line=6,$__art='{{=props.fontfamily}}',$__ctrl='<%=props.fontfamily%>',(props.fontfamily))+';text-align:'+($__line=6,$__art='{{=props.textAlign}}',$__ctrl='<%=props.textAlign%>',(props.textAlign)),'placeholder': ($__line=6,$__art='{{=props.placeholder}}',$__ctrl='<%=props.placeholder%>',(props.placeholder)),'value': ($__line=6,$__art='{{=props.userValue||props.text}}',$__ctrl='<%=props.userValue||props.text%>',(props.userValue||props.text)),'mx5-input': $viewId+'@:{update.value~rs}()','class': $$_class,},1,$special_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/form-input/index.html'; throw msg; }  } ,
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