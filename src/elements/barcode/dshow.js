/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/barcode/dshow",["magix5","../../provider/barcode","../../provider/ebind"],(require,exports,module)=>{


/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let barcode_1 = require("../../provider/barcode");
let ebind_1 = require("../../provider/ebind");
let { View, mark, task } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
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
$vnode_1=[];$__line=2;$__art="{{if !text||error}}";$__ctrl="if(!text||error){";
if(!text||error){
$text=($__line=4,$__art='{{if error}}','');$__ctrl='<%if(error){%>';if(error){;$text+=' '+($__line=5,$__art='{{=error}}',$__ctrl='<%=error%>',(error))+' '+($__line=6,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$text+=' '+($__line=7,$__art='{{=i18n(\'@:{lang#elements.barcode.empty.tip~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#elements.barcode.empty.tip~rs}\')%>',(i18n('@:{lang#elements.barcode.empty.tip~rs}')))+' '+($__line=8,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2=[$createVNode(0,$text)];$vnode_1.push($createVNode('div',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-tc','style': 'font-size:'+($__line=3,$__art='{{=props.tfs}}',$__ctrl='<%=props.tfs%>',(props.tfs))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=3,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';line-height:'+($__line=3,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=3,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=3,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),},$vnode_2));
}else{
$vnode_1.push($createVNode('img',{'class': 'rd-_assets_index_less_-hp100 rd-_assets_index_less_-mwp100 rd-_assets_index_less_-pointer-events-none rd-_assets_index_less_-tag-img rd-_assets_index_less_-wp100','id': '_rd_'+($__line=11,$__art='{{=$viewId}}','')+$viewId+'_bar',},1));
};$$_class='rd-_assets_index_less_-pa rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-z-index-1'+($__line=1,$__art='{{if enter}}','');$__ctrl='<%if(enter){%>';if(enter){;$$_class+=' rd-_assets_index_less_-hod-drop-tip'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';transform:rotate('+($__line=1,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg)','mx5-dragenter': $viewId+'@:{when.data.field.enter~rs}()','mx5-dragleave': $viewId+'@:{when.data.field.leave~rs}()','mx5-drop': $viewId+'@:{when.data.field.drop~rs}()','class': $$_class,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/barcode/dshow.html'; throw msg; }  } ,
    init() {
        this['@:{has.contents~rs}'] = ['text'];
    },
    assign(data) {
        this.set(data);
        let { props } = data;
        let { bind, text } = props;
        if (bind.url) {
            let bindField = bind.fields[0];
            text = `[bind:${bindField.id}]`;
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
            await barcode_1["@:{load.library~rs}"]();
            if (m()) {
                let { linewidth, height, format, showText, color } = this.get('props');
                let text = this.get('text');
                if (text != this['@:{cached.text~rs}'] ||
                    format != this['@:{cached.format~rs}'] ||
                    showText != this['@:{cached.show.text~rs}'] ||
                    linewidth != this['@:{cached.line.width~rs}'] ||
                    color != this['@:{cached.color~rs}']) {
                    this['@:{cached.text~rs}'] = text;
                    if (text) {
                        m = mark(this, '@:{render.barcode~rs}');
                        task(() => {
                            if (m()) {
                                JsBarcode(`#_rd_${this.id}_bar`, text, {
                                    //height: Const['@:{const#to.px}'](height),
                                    lineColor: this['@:{cached.color~rs}'] = color,
                                    width: this['@:{cached.line.width~rs}'] = linewidth,
                                    format: this['@:{cached.format~rs}'] = format,
                                    displayValue: this['@:{cached.show.text~rs}'] = showText
                                });
                            }
                        });
                    }
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
}).merge(ebind_1);

});