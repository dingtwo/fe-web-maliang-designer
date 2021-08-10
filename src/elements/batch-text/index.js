/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/batch-text/index",["4e","../../4t/format"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let format_1 = require("../../4t/format");
let { View, isArray } = magix_1;
let { min } = Math;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	bw,
	safeHTML,
	text,
	textReturn,}=$dataFromView,
$$_style,
$vnode_1;
$vnode_1=[$createVNode(0,(props.richtext?safeHTML(text):textReturn(text)),1)];;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';color:'+(props.forecolor)+';';if(props.background){;$$_style+='background:'+(props.background)+';';};$$_style+='font-size:'+(props.fontsize)+(unit)+';min-height:'+(props.height)+(unit)+';letter-spacing:'+(props.letterspacing)+(unit)+';opacity:'+(props.alpha)+';';if(props.styleBold){;$$_style+='font-weight:bold;';};if(props.styleItalic){;$$_style+='font-style:italic;';};if(props.styleUnderline||props.styleStrike||props.styleOverline){;$$_style+='text-decoration:';if(props.styleStrike){;$$_style+='line-through';}else if(props.styleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='align-items:'+(props.vpos)+';justify-content:'+(props.hpos)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg);font-family:'+(props.fontfamily)+';';if(bw){;$$_style+='border:'+(bw)+(unit)+' '+(props.bordertype)+' '+(props.bordercolor)+';';};if(props.autoReturn){;$$_style+='word-break:break-all';}else{;$$_style+='max-height:'+(props.height)+'px';};$vnode_0=[$createVNode('div',{'class': 'rd-el rd-ez rd-fH rd-fq','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
        let { props } = data;
        let { text, bind, format, borderwidth: bw, width, height } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            if (bind._tip) {
                text = bind._tip;
            }
            else if (bind._data) {
                let src = bind._data;
                if (isArray(src)) {
                    src = src[0];
                }
                text = src[bindField.id];
                text = format_1["_ho"](format, text, src);
            }
            else {
                text = `[绑定:${bindField.name}]`;
            }
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
    }
});

});