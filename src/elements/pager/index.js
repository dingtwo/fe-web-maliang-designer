/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/pager/index",["magix5"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let { has, View } = magix_1;
let wrapReg = /\$\{([a-zA-z0-9_]+)\}/g;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	textReturn,
	text,}=$dataFromView,
$$_style,
$vnode_1;
$vnode_1=[$createVNode(0,($__line=1,$__art='{{=textReturn(text)}}',$__ctrl='<%=textReturn(text)%>',(textReturn(text))),1)];;$$_style='left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';color:'+($__line=1,$__art='{{=props.forecolor}}',$__ctrl='<%=props.forecolor%>',(props.forecolor))+';'+($__line=1,$__art='{{if props.background}}','');$__ctrl='<%if(props.background){%>';if(props.background){;$$_style+='background:'+($__line=1,$__art='{{=props.background}}',$__ctrl='<%=props.background%>',(props.background))+';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='font-size:'+($__line=1,$__art='{{=props.fontsize}}',$__ctrl='<%=props.fontsize%>',(props.fontsize))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';letter-spacing:'+($__line=1,$__art='{{=props.letterspacing}}',$__ctrl='<%=props.letterspacing%>',(props.letterspacing))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';'+($__line=1,$__art='{{if props.styleBold}}','');$__ctrl='<%if(props.styleBold){%>';if(props.styleBold){;$$_style+='font-weight:bold;'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=1,$__art='{{if props.styleItalic}}','');$__ctrl='<%if(props.styleItalic){%>';if(props.styleItalic){;$$_style+='font-style:italic;'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=''+($__line=1,$__art='{{if props.styleUnderline||props.styleStrike||props.styleOverline}}','');$__ctrl='<%if(props.styleUnderline||props.styleStrike||props.styleOverline){%>';if(props.styleUnderline||props.styleStrike||props.styleOverline){;$$_style+='text-decoration:'+($__line=1,$__art='{{if props.styleStrike}}','');$__ctrl='<%if(props.styleStrike){%>';if(props.styleStrike){;$$_style+='line-through'+($__line=1,$__art='{{else if props.styleOverline}}','');$__ctrl='<%}else if(props.styleOverline){%>';}else if(props.styleOverline){;$$_style+='overline'+($__line=1,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_style+='underline'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+=';'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='align-items:'+($__line=1,$__art='{{=props.vpos}}',$__ctrl='<%=props.vpos%>',(props.vpos))+';justify-content:'+($__line=1,$__art='{{=props.hpos}}',$__ctrl='<%=props.hpos%>',(props.hpos))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg);font-family:'+($__line=1,$__art='{{=props.fontfamily}}',$__ctrl='<%=props.fontfamily%>',(props.fontfamily));$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/pager/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
        let { props } = data;
        let { text, ext } = props;
        if (ext._totalPage == null) {
            ext._totalPage = 'Y';
        }
        if (ext._currentPage == null) {
            ext._currentPage = 'X';
        }
        text = text.replace(wrapReg, (_, $1) => {
            return has(ext, '_' + $1) ? ext['_' + $1] : _;
        });
        this.set({
            text
        });
    },
    render() {
        this.digest();
    }
});

});