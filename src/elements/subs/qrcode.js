/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/subs/qrcode",["magix5","../../provider/qrcode"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let qrcode_1 = require("../../provider/qrcode");
let { View, mark, node, task } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	msg,
	vpos,}=$dataFromView;
$__line=1;$__art="{{if msg}}";$__ctrl="if(msg){";
if(msg){
$vnode_0.push($createVNode(0,($__line=2,$__art='{{=msg}}',$__ctrl='<%=msg%>',(msg))));
}else{
$vnode_0.push($createVNode('div',{'id': ($__line=4,$__art='{{=$viewId}}','')+$viewId+'_qr','class': 'rd-_assets_index_less_-flex rd-_assets_index_less_-hp100','style': 'align-items:'+($__line=4,$__art='{{=vpos}}',$__ctrl='<%=vpos%>',(vpos)),}));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/subs/qrcode.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '@:{render~rs}');
        await this.digest({
            msg: 'loading...'
        });
        try {
            await qrcode_1();
            if (m()) {
                let { value } = this.get();
                await this.digest({
                    msg: null
                });
                m = mark(this, '@:{render.qrcode~rs}');
                task(() => {
                    if (m()) {
                        let n = node(`${this.id}_qr`);
                        let entity = new QRCode(n);
                        entity.makeCode(value + '');
                        let img = this.root.querySelector('img');
                        img.classList.add('rd-_assets_index_less_-mwp100');
                        img.classList.add('rd-_assets_index_less_-mhp100');
                    }
                });
            }
        }
        catch (ex) {
            if (m()) {
                this.digest({
                    msg: ex
                });
            }
        }
    }
});

});