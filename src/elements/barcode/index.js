/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/barcode/index",["51","../../5g/barcode"],(require,exports,module)=>{
let $quick_gB_0_static_attr={'class': 'rd-g9 rd-gO rd-ha rd-hs',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let barcode_1 = require("../../5g/barcode");
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
$vnode_2=[$createVNode(0,(error))];$vnode_1.push($createVNode('div',$quick_gB_0_static_attr,$vnode_2));
}else{
$vnode_1.push($createVNode('img',{'id': '_rd_'+$viewId+'_bar','class': 'rd-gB rd-gN rd-gO rd-gP',},1));
}$vnode_0.push($createVNode('div',{'class': 'rd-gV rd-h0 rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1));
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
        let m = mark(this, '_gt');
        await this.digest({
            error: null
        });
        try {
            await barcode_1["_jP"]();
            if (m()) {
                let { linewidth, 
                //height,
                format, showText, color } = this.get('props');
                let text = this.get('text');
                if (text &&
                    (text != this['_jQ'] ||
                        format != this['_jR'] ||
                        showText != this['_jS'] ||
                        linewidth != this['_jT'] ||
                        color != this['_jU'])) {
                    m = mark(this, '_jV');
                    task(() => {
                        if (m()) {
                            JsBarcode(`#_rd_${this.id}_bar`, this['_jQ'] = text, {
                                //height: Const['@:{const#to.px}'](height),
                                lineColor: this['_jU'] = color,
                                width: this['_jT'] = linewidth,
                                format: this['_jR'] = format,
                                displayValue: this['_jS'] = showText
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