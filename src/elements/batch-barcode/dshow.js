/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/batch-barcode/dshow",["5c","../../5r/barcode","../../5r/ebind"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let barcode_1 = require("../../5r/barcode");
let ebind_1 = require("../../5r/ebind");
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
$text='';if(error){;$text+=' '+(error)+' ';}else{;$text+=' '+(i18n('n9'))+' ';};$vnode_2=[$createVNode(0,$text)];$vnode_1.push($createVNode('div',{'class': 'rd-mG rd-mL rd-nO','style': 'font-size:'+(props.tfs)+(unit)+';height:'+(props.height)+(unit)+';line-height:'+(props.height)+(unit)+';width:'+(props.width)+(unit),},$vnode_2));
}else{
$vnode_1.push($createVNode('img',{'class': 'rd-mB rd-mC rd-mD rd-mJ rd-mL rd-mp','style': 'left:0;top:0','id': '_rd_'+$viewId+'_bar',},1));
};$$_class='rd-mJ rd-nO rd-n5';if(enter){;$$_class+=' rd-nz';};$vnode_0=[$createVNode('div',{'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)','mx5-dragenter': $viewId+'_pH()','mx5-dragleave': $viewId+'_pI()','mx5-drop': $viewId+'_pJ()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this['_pz'] = ['text'];
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
        let m = mark(this, '_mh');
        await this.digest({
            error: null
        });
        try {
            await barcode_1["_pA"]();
            if (m()) {
                let { linewidth, height, format, showText, color } = this.get('props');
                let text = this.get('text');
                if (text != this['_pB'] ||
                    format != this['_pC'] ||
                    showText != this['_pD'] ||
                    linewidth != this['_pE'] ||
                    color != this['_pF']) {
                    this['_pB'] = text;
                    if (text) {
                        m = mark(this, '_pG');
                        task(() => {
                            if (m()) {
                                JsBarcode(`#_rd_${this.id}_bar`, text, {
                                    //height: Const['@:{const#to.px}'](height),
                                    lineColor: this['_pF'] = color,
                                    width: this['_pE'] = linewidth,
                                    format: this['_pC'] = format,
                                    displayValue: this['_pD'] = showText
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