/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/subs/barcode",["5c","../../5r/barcode"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let barcode_1 = require("../../5r/barcode");
let { View, task, mark } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0=[],
{
	msg,}=$dataFromView;

if(msg){
$vnode_0.push($createVNode(0,(msg)));
}else{
$vnode_0.push($createVNode('img',{'id': $viewId+'_bar','class': 'rd-mD rd-mE rd-mp',},1));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_mh');
        await this.digest({
            msg: 'loading...'
        });
        try {
            await barcode_1["_pA"]();
            if (m()) {
                let { 
                //height,
                value, lineWidth, format, showText, lineColor } = this.get();
                await this.digest({
                    msg: null
                });
                m = mark(this, '_pG');
                task(() => {
                    if (m()) {
                        JsBarcode(`#${this.id}_bar`, value, {
                            lineColor,
                            width: +lineWidth,
                            format,
                            displayValue: showText == 'true'
                        });
                    }
                });
            }
        }
        catch (ex) {
            if (m()) {
                this.digest({
                    msg: ex.message || ex
                });
            }
        }
    }
});

});