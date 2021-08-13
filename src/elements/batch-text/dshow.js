/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/batch-text/dshow",["magix5","../../provider/ebind"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let ebind_1 = require("../../provider/ebind");
let { View } = magix_1;
let { min } = Math;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	enter,
	props,
	unit,
	bw,
	text,
	safeHTML,
	textReturn,
	i18n,}=$dataFromView,
$$_class,
$$_style,
$vnode_2,
$vnode_1;
$vnode_2=[$createVNode(0,($__line=2,$__art='{{=text?(props.richtext?safeHTML(text):textReturn(text)):i18n(\'@:{lang#elements.text.content~rs}\')}}',$__ctrl='<%=text?(props.richtext?safeHTML(text):textReturn(text)):i18n(\'@:{lang#elements.text.content~rs}\')%>',(text?(props.richtext?safeHTML(text):textReturn(text)):i18n('@:{lang#elements.text.content~rs}'))),1)];;$$_style='color:'+($__line=2,$__art='{{=props.forecolor}}',$__ctrl='<%=props.forecolor%>',(props.forecolor))+';'+($__line=2,$__art='{{if props.background}}','');$__ctrl='<%if(props.background){%>';if(props.background){;$$_style+='background:'+($__line=2,$__art='{{=props.background}}',$__ctrl='<%=props.background%>',(props.background))+';'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='font-size:'+($__line=2,$__art='{{=props.fontsize}}',$__ctrl='<%=props.fontsize%>',(props.fontsize))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=2,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';letter-spacing:'+($__line=2,$__art='{{=props.letterspacing}}',$__ctrl='<%=props.letterspacing%>',(props.letterspacing))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=2,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';'+($__line=2,$__art='{{if props.styleBold}}','');$__ctrl='<%if(props.styleBold){%>';if(props.styleBold){;$$_style+='font-weight:bold;'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=2,$__art='{{if props.styleItalic}}','');$__ctrl='<%if(props.styleItalic){%>';if(props.styleItalic){;$$_style+='font-style:italic;'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=2,$__art='{{if props.styleUnderline||props.styleStrike||props.styleOverline}}','');$__ctrl='<%if(props.styleUnderline||props.styleStrike||props.styleOverline){%>';if(props.styleUnderline||props.styleStrike||props.styleOverline){;$$_style+='text-decoration:'+($__line=2,$__art='{{if props.styleStrike}}','');$__ctrl='<%if(props.styleStrike){%>';if(props.styleStrike){;$$_style+='line-through'+($__line=2,$__art='{{else if props.styleOverline}}','');$__ctrl='<%}else if(props.styleOverline){%>';}else if(props.styleOverline){;$$_style+='overline'+($__line=2,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='underline'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=';'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='align-items:'+($__line=2,$__art='{{=props.vpos}}',$__ctrl='<%=props.vpos%>',(props.vpos))+';justify-content:'+($__line=2,$__art='{{=props.hpos}}',$__ctrl='<%=props.hpos%>',(props.hpos))+';width:'+($__line=2,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';font-family:'+($__line=2,$__art='{{=props.fontfamily}}',$__ctrl='<%=props.fontfamily%>',(props.fontfamily))+';'+($__line=2,$__art='{{if bw}}','');$__ctrl='<%if(bw){%>';if(bw){;$$_style+='border:'+($__line=2,$__art='{{=bw}}',$__ctrl='<%=bw%>',(bw))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+' '+($__line=2,$__art='{{=props.bordertype}}',$__ctrl='<%=props.bordertype%>',(props.bordertype))+' '+($__line=2,$__art='{{=props.bordercolor}}',$__ctrl='<%=props.bordercolor%>',(props.bordercolor))+';'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=2,$__art='{{if props.autoReturn}}','');$__ctrl='<%if(props.autoReturn){%>';if(props.autoReturn){;$$_style+='word-break:break-all'+($__line=2,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1=[$createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pointer-events-none','style': $$_style,},$vnode_2)];;$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1'+($__line=1,$__art='{{if enter}}','');$__ctrl='<%if(enter){%>';if(enter){;$$_class+=' rd-_assets_index_less_-hod-drop-tip'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)','mx5-dragenter': $viewId+'@:{when.data.field.enter~rs}()','mx5-dragleave': $viewId+'@:{when.data.field.leave~rs}()','mx5-drop': $viewId+'@:{when.data.field.drop~rs}()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/batch-text/dshow.html'; throw msg; }  } ,
    init() {
        this['@:{has.contents~rs}'] = ['text', '@:{show.text~rs}'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { text, bind, borderwidth: bw, width, height } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[绑定:${bindField.name}]`;
        }
        let minSize = min(width, height);
        let half = minSize / 2;
        if (bw > half) {
            bw = half;
        }
        this.set({
            bw,
            text
        });
    },
    render() {
        this.digest();
    },
}).merge(ebind_1);

});