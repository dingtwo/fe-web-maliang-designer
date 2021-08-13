/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/batch-qrcode/index",["5c","../../5r/qrcode"],(require,exports,module)=>{
let $quick_mt_0_static_attr={'class': 'rd-mC rd-mX rd-mZ rd-ng',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let qrcode_1 = require("../../5r/qrcode");
let { View, mark, node, task, isArray } = magix_1;
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
$vnode_2=[$createVNode(0,(error))];$vnode_1.push($createVNode('div',$quick_mt_0_static_attr,$vnode_2));
}$vnode_1.push($createVNode('div',{'id': '_rd_'+$viewId+'_qr',}));$vnode_0.push($createVNode('div',{'class': 'rd-mJ rd-n5 rd-nO','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1));
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
                text = `[绑定:${bindField.name}]`;
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
            await qrcode_1();
            if (m()) {
                let text = this.get('text') + '';
                if (text &&
                    text != this['_pB']) {
                    let entity = this['_pK'];
                    if (!entity) {
                        let n = node(`_rd_${this.id}_qr`);
                        entity = new QRCode(n);
                        this['_pK'] = entity;
                    }
                    m = mark(this, '_pL');
                    task(() => {
                        if (m()) {
                            entity.makeCode(this['_pB'] = text);
                            let img = this.root.querySelector('img');
                            img.classList.add('rd-mB');
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