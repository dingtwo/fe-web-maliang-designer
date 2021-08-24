/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/qrcode/dshow",["51","../../5g/ebind","../../5g/qrcode"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let ebind_1 = require("../../5g/ebind");
let qrcode_1 = require("../../5g/qrcode");
let { View, mark, node, task } = magix_1;
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
$text='';if(error){;$text+=' '+(error)+' ';}else{;$text+=' '+(i18n('lg'))+' ';};$vnode_2=[$createVNode(0,$text)];$vnode_1.push($createVNode('div',{'class': 'rd-gS rd-gX rd-h0','style': 'font-size:'+(props.tfs)+(unit)+';height:'+(props.height)+(unit)+';line-height:'+(props.height)+(unit)+';width:'+(props.width)+(unit),},$vnode_2));
}$vnode_1.push($createVNode('div',{'class': 'rd-gX','id': '_rd_'+$viewId+'_qr',}));;$$_class='rd-gV rd-ig rd-h0';if(enter){;$$_class+=' rd-hL';};$vnode_0=[$createVNode('div',{'style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';transform:rotate('+(props.rotate)+'deg)','mx5-dragenter': $viewId+'_jW()','mx5-dragleave': $viewId+'_jX()','mx5-drop': $viewId+'_jY()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this['_jO'] = ['text'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, text } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[绑定:${bindField.name}]`;
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
                            img.classList.add('rd-gB', 'rd-gN', 'rd-gP');
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
    },
}).merge(ebind_1);

});