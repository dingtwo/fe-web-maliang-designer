/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/batch-qrcode/index",["51","../../5g/qrcode"],(require,exports,module)=>{
let $quick_gF_0_static_attr={'class': 'rd-g9 rd-gO rd-ha rd-hs',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let qrcode_1 = require("../../5g/qrcode");
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
$vnode_2=[$createVNode(0,(error))];$vnode_1.push($createVNode('div',$quick_gF_0_static_attr,$vnode_2));
}$vnode_1.push($createVNode('div',{'id': '_rd_'+$viewId+'_qr',}));$vnode_0.push($createVNode('div',{'class': 'rd-gV rd-h0 rd-ig','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)',},$vnode_1));
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
        let m = mark(this, '_gt');
        await this.digest({
            error: null
        });
        try {
            await qrcode_1();
            if (m()) {
                let text = this.get('text') + '';
                if (text &&
                    text != this['_jQ']) {
                    let entity = this['_jZ'];
                    if (!entity) {
                        let n = node(`_rd_${this.id}_qr`);
                        entity = new QRCode(n);
                        this['_jZ'] = entity;
                    }
                    m = mark(this, '_j0');
                    task(() => {
                        if (m()) {
                            entity.makeCode(this['_jQ'] = text);
                            let img = this.root.querySelector('img');
                            img.classList.add('rd-gN');
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