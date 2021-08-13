/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/batch-barcode/index",["5c","../../5r/barcode"],(require,exports,module)=>{
let $quick_mr_0_static_attr={'class': 'rd-mC rd-mX rd-mZ rd-ng',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let barcode_1 = require("../../5r/barcode");
let { View, mark, task, isArray } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0=[],
{
	error,
	text,
	props,
	unit,}=$dataFromView,
$vnode_2,
$vnode_1;

if(error||text){
$vnode_1=[];
if(error){
$vnode_2=[$createVNode(0,(error))];$vnode_1.push($createVNode('div',$quick_mr_0_static_attr,$vnode_2));
}else{
$vnode_1.push($createVNode('img',{'id': '_rd_'+$viewId+'_bar','class': 'rd-mB rd-mC rd-mD rd-mp',},1));
}$vnode_0.push($createVNode('div',{'class': 'rd-mJ rd-n5 rd-nO','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, text } = props;
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
            }
            else {
                text = `[bind:${bindField.id}]`;
            }
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
                if (text &&
                    (text != this['_pB'] ||
                        format != this['_pC'] ||
                        showText != this['_pD'] ||
                        linewidth != this['_pE'] ||
                        color != this['_pF'])) {
                    m = mark(this, '_pG');
                    task(() => {
                        if (m()) {
                            JsBarcode(`#_rd_${this.id}_bar`, this['_pB'] = text, {
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
        catch (ex) {
            if (m()) {
                this.digest({
                    error: ex
                });
            }
        }
    }
});

});