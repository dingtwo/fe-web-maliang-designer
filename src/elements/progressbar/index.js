/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/progressbar/index",["magix5","../../provider/format"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let format_1 = require("../../provider/format");
let { View, isArray } = magix_1;
module.exports= magix_1.View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	value,
	text,}=$dataFromView,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_2=[];$__line=3;$__art="{{if props.showText||text}}";$__ctrl="if(props.showText||text){";
if(props.showText||text){
$vnode_3=[$createVNode(0,($__line=4,$__art='{{=text||value+\'%\'}}',$__ctrl='<%=text||value+\'%\'%>',(text||value+'%')))];$vnode_2.push($createVNode('span',{'class': 'rd-_assets_index_less_-pa','style': 'transform:translate(50%,-100%);right:0;color:'+($__line=4,$__art='{{=props.textColor}}',$__ctrl='<%=props.textColor%>',(props.textColor))+';font-size:'+($__line=4,$__art='{{=props.textFontsize}}',$__ctrl='<%=props.textFontsize%>',(props.textFontsize))+($__line=4,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_3));
}$vnode_1=[$createVNode('div',{'style': 'width:'+($__line=2,$__art='{{=value}}',$__ctrl='<%=value%>',(value))+'%;background-color:'+($__line=2,$__art='{{=props.barcolor}}',$__ctrl='<%=props.barcolor%>',(props.barcolor))+';border-radius:'+($__line=2,$__art='{{=props.radius}}',$__ctrl='<%=props.radius%>',(props.radius))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-pr',},$vnode_2)];$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg);background-color:'+($__line=1,$__art='{{=props.background}}',$__ctrl='<%=props.background%>',(props.background))+';border-radius:'+($__line=1,$__art='{{=props.radius}}',$__ctrl='<%=props.radius%>',(props.radius))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/progressbar/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, value, textFormat } = props;
        let text = '';
        if (bind.url) {
            let bindField = bind.fields[0];
            if (bind._tip) {
                text = bind._tip;
                value = 60;
            }
            else if (bind._data) {
                let src = bind._data;
                if (isArray(src)) {
                    src = src[0];
                }
                value = src[bindField.id];
                value = format_1['@:{format~rs}'](textFormat, value, props);
                if (isNaN(value) ||
                    !isFinite(value)) {
                    value = 0;
                }
                if (value < 0) {
                    value = 0;
                }
                else if (value > 100) {
                    value = 100;
                }
            }
            else {
                text = `[绑定:${bindField.name}]`;
                value = 60;
            }
        }
        this.set({
            value,
            text
        });
    },
    render() {
        this.digest();
    }
});

});