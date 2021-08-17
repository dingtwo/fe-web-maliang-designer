/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/qrcode/index",["magix5","../../provider/qrcode"],(require,exports,module)=>{
let $quick_cQ_0_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-hp100 rd-_assets_index_less_-justify-content-center',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let qrcode_1 = require("../../provider/qrcode");
let { View, mark, node, task, isArray } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	error,
	text,
	props,
	unit,}=$dataFromView,
$vnode_2,
$vnode_1;
$__line=1;$__art="{{if error||text}}";$__ctrl="if(error||text){";
if(error||text){
$vnode_1=[];$__line=3;$__art="{{if error}}";$__ctrl="if(error){";
if(error){
$vnode_2=[$createVNode(0,($__line=5,$__art='{{=error}}',$__ctrl='<%=error%>',(error)))];$vnode_1.push($createVNode('div',$quick_cQ_0_static_attr,$vnode_2));
}$vnode_1.push($createVNode('div',{'id': '_rd_'+($__line=8,$__art='{{=$viewId}}','')+$viewId+'_qr',}));$vnode_0.push($createVNode('div',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=2,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=2,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=2,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=2,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=2,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=2,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=2,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)',},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/qrcode/index.html'; throw msg; }  } ,
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
        let m = mark(this, '@:{render~rs}');
        await this.digest({
            error: null
        });
        try {
            await qrcode_1();
            if (m()) {
                let text = this.get('text') + '';
                if (text &&
                    text != this['@:{cached.text~rs}']) {
                    let entity = this['@:{qrcode.entity~rs}'];
                    if (!entity) {
                        let n = node(`_rd_${this.id}_qr`);
                        entity = new QRCode(n);
                        this['@:{qrcode.entity~rs}'] = entity;
                    }
                    m = mark(this, '@:{render.qrcode~rs}');
                    task(() => {
                        if (m()) {
                            entity.makeCode(this['@:{cached.text~rs}'] = text);
                            let img = this.root.querySelector('img');
                            img.classList.add('rd-_assets_index_less_-wp100');
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