/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/subs/qrcode",["4e","../../4t/qrcode"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let qrcode_1 = require("../../4t/qrcode");
let { View, mark, node, task } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0=[],
{
	msg,
	vpos,}=$dataFromView;

if(msg){
$vnode_0.push($createVNode(0,(msg)));
}else{
$vnode_0.push($createVNode('div',{'id': $viewId+'_qr','class': 'rd-ee rd-ez','style': 'align-items:'+(vpos),}));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_dU');
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
                m = mark(this, '_hn');
                task(() => {
                    if (m()) {
                        let n = node(`${this.id}_qr`);
                        let entity = new QRCode(n);
                        entity.makeCode(value + '');
                        let img = this.root.querySelector('img');
                        img.classList.add('rd-ef');
                        img.classList.add('rd-eg');
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