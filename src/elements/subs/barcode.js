/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/subs/barcode",["magix5","../../provider/barcode"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let barcode_1 = require("../../provider/barcode");
let { View, task, mark } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	msg,}=$dataFromView;
$__line=1;$__art="{{if msg}}";$__ctrl="if(msg){";
if(msg){
$vnode_0.push($createVNode(0,($__line=2,$__art='{{=msg}}',$__ctrl='<%=msg%>',(msg))));
}else{
$vnode_0.push($createVNode('img',{'id': ($__line=4,$__art='{{=$viewId}}','')+$viewId+'_bar','class': 'rd-_assets_index_less_-mhp100 rd-_assets_index_less_-mwp100 rd-_assets_index_less_-tag-img',},1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/subs/barcode.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '@:{render~rs}');
        await this.digest({
            msg: 'loading...'
        });
        try {
            await barcode_1["@:{load.library~rs}"]();
            if (m()) {
                let { 
                //height,
                value, lineWidth, format, showText, lineColor } = this.get();
                await this.digest({
                    msg: null
                });
                m = mark(this, '@:{render.barcode~rs}');
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