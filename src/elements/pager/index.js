/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/pager/index",["5c"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let { has, View } = magix_1;
let wrapReg = /\$\{([a-zA-z0-9_]+)\}/g;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	textReturn,
	text,}=$dataFromView,
$$_style,
$vnode_1;
$vnode_1=[$createVNode(0,(textReturn(text)),1)];;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';color:'+(props.forecolor)+';';if(props.background){;$$_style+='background:'+(props.background)+';';};$$_style+='font-size:'+(props.fontsize)+(unit)+';height:'+(props.height)+(unit)+';letter-spacing:'+(props.letterspacing)+(unit)+';opacity:'+(props.alpha)+';';if(props.styleBold){;$$_style+='font-weight:bold;';};if(props.styleItalic){;$$_style+='font-style:italic;';};if(props.styleUnderline||props.styleStrike||props.styleOverline){;$$_style+='text-decoration:';if(props.styleStrike){;$$_style+='line-through';}else if(props.styleOverline){;$$_style+='overline';}else{;$$_style+='underline';};$$_style+=';';};$$_style+='align-items:'+(props.vpos)+';justify-content:'+(props.hpos)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg);font-family:'+(props.fontfamily);$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-mX rd-n5 rd-nO','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
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