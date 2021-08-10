/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/batch-barcode/dshow",["4e","../../4t/barcode","../../4t/ebind"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let barcode_1 = require("../../4t/barcode");
let ebind_1 = require("../../4t/ebind");
let { View, mark, task } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	enter,
	props,
	unit,
	text,
	error,
	i18n,}=$dataFromView,
$$_class,
$text,
$vnode_2,
$vnode_1;
$vnode_1=[];
if(!text||error){
$text='';if(error){;$text+=' '+(error)+' ';}else{;$text+=' '+(i18n('fL'))+' ';};$vnode_2=[$createVNode(0,$text)];$vnode_1.push($createVNode('div',{'class': 'rd-ei rd-en rd-fq','style': 'font-size:'+(props.tfs)+(unit)+';height:'+(props.height)+(unit)+';line-height:'+(props.height)+(unit)+';width:'+(props.width)+(unit),},$vnode_2));
}else{
$vnode_1.push($createVNode('img',{'class': 'rd-d2 rd-ed rd-ee rd-ef rd-el rd-en','style': 'left:0;top:0','id': '_rd_'+$viewId+'_bar',},1));
};$$_class='rd-el rd-fq rd-fH';if(enter){;$$_class+=' rd-fb';};$vnode_0=[$createVNode('div',{'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)','mx5-dragenter': $viewId+'_hj()','mx5-dragleave': $viewId+'_hk()','mx5-drop': $viewId+'_hl()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this['_hb'] = ['text'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, text } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[bind:${bindField.id}]`;
        }
        this.set({
            text
        });
    },
    async render() {
        let m = mark(this, '_dU');
        await this.digest({
            error: null
        });
        try {
            await barcode_1["_hc"]();
            if (m()) {
                let { linewidth, height, format, showText, color } = this.get('props');
                let text = this.get('text');
                if (text != this['_hd'] ||
                    format != this['_he'] ||
                    showText != this['_hf'] ||
                    linewidth != this['_hg'] ||
                    color != this['_hh']) {
                    this['_hd'] = text;
                    if (text) {
                        m = mark(this, '_hi');
                        task(() => {
                            if (m()) {
                                JsBarcode(`#_rd_${this.id}_bar`, text, {
                                    //height: Const['@:{const#to.px}'](height),
                                    lineColor: this['_hh'] = color,
                                    width: this['_hg'] = linewidth,
                                    format: this['_he'] = format,
                                    displayValue: this['_hf'] = showText
                                });
                            }
                        });
                    }
                }
            }
        }
        catch (ex) {
            if (m()) {
                this.digest({
                    error: ex
                });
            }
        }
    },
}).merge(ebind_1);

});