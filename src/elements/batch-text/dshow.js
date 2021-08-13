/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/batch-text/dshow",["5c","../../5r/ebind"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let ebind_1 = require("../../5r/ebind");
let { View } = magix_1;
let { min } = Math;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
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
$vnode_2=[$createVNode(0,(text?(props.richtext?safeHTML(text):textReturn(text)):i18n('oo')),1)];;$$_style='color:'+(props.forecolor)+';';if(props.background){;$$_style+='background:'+(props.background)+';';};$$_style+='font-size:'+(props.fontsize)+(unit)+';height:'+(props.height)+(unit)+';letter-spacing:'+(props.letterspacing)+(unit)+';opacity:'+(props.alpha)+';';if(props.styleBold){;$$_style+='font-weight:bold;';};if(props.styleItalic){;$$_style+='font-style:italic;';};if(props.styleUnderline||props.styleStrike||props.styleOverline){;$$_style+='text-decoration:';if(props.styleStrike){;$$_style+='line-through';}else if(props.styleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='align-items:'+(props.vpos)+';justify-content:'+(props.hpos)+';width:'+(props.width)+(unit)+';font-family:'+(props.fontfamily)+';';if(bw){;$$_style+='border:'+(bw)+(unit)+' '+(props.bordertype)+' '+(props.bordercolor)+';';};if(props.autoReturn){;$$_style+='word-break:break-all';};$vnode_1=[$createVNode('div',{'class': 'rd-mL rd-mX rd-nO','style': $$_style,},$vnode_2)];;$$_class='rd-mJ rd-n5';if(enter){;$$_class+=' rd-nz';};$vnode_0=[$createVNode('div',{'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';transform:rotate('+(props.rotate)+'deg)','mx5-dragenter': $viewId+'_pH()','mx5-dragleave': $viewId+'_pI()','mx5-drop': $viewId+'_pJ()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this['_pz'] = ['text', '_oJ'];
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