/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/subs/qrcode",["51","../../5g/qrcode"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let qrcode_1 = require("../../5g/qrcode");
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
$vnode_0.push($createVNode('div',{'id': $viewId+'_qr','class': 'rd-g9 rd-gO','style': 'align-items:'+(vpos),}));
} 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let m = mark(this, '_gt');
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
                m = mark(this, '_j0');
                task(() => {
                    if (m()) {
                        let n = node(`${this.id}_qr`);
                        let entity = new QRCode(n);
                        entity.makeCode(value + '');
                        let img = this.root.querySelector('img');
                        img.classList.add('rd-gP');
                        img.classList.add('rd-gQ');
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