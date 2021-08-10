/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/richtext/dshow",["magix5","../../provider/ckeditor5","../../designer/history","../../designer/stage-selection"],(require,exports,module)=>{
let $quick_eb_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let ckeditor5_1 = require("../../provider/ckeditor5");
let history_1 = require("../../designer/history");
let stage_selection_1 = require("../../designer/stage-selection");
let { applyStyle, View, mark, node } = magix_1;
applyStyle("rd-_elements_richtext_dshow_less_","\n  .ck-editor,\n  .ck .ck-editor__main {\nheight:100%!important;\n  }\n  .ck-editor__editable_inline {\nheight:calc(100% - 40px);\n  }\n\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	readonly,
	pv,
	text,}=$dataFromView,
$vnode_2,
$$_class,
$vnode_3,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{if !readonly}}";$__ctrl="if(!readonly){";
if(!readonly){
$vnode_2=[$createVNode(0,($__line=3,$__art='{{=pv?\'&#xe638;\':\'&#xe75a;\'}}',$__ctrl='<%=pv?\'&#xe638;\':\'&#xe75a;\'%>',(pv?'&#xe638;':'&#xe75a;')),1)];$vnode_1.push($createVNode('i',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-iconfont rd-_assets_index_less_-pa','style': 'top:-19px;left:20px','title': ($__line=3,$__art='{{=pv?\'编辑\':\'预览\'}}',$__ctrl='<%=pv?\'编辑\':\'预览\'%>',(pv?'编辑':'预览')),'mx5-click': $viewId+'@:{toggle.state~rs}()',},$vnode_2));
}$vnode_2=[$createVNode(0,($__line=5,$__art='{{=text}}',$__ctrl='<%=text%>',(text)),1)];;$$_class='rd-_assets_index_less_-hp100 rd-_assets_index_less_-overflow-auto'+($__line=5,$__art='{{if !pv}}','');$__ctrl='<%if(!pv){%>';if(!pv){;$$_class+=' rd-_assets_index_less_-none'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'id': ($__line=5,$__art='{{=$viewId}}','')+$viewId+'_pv','class': $$_class,},$vnode_2));$vnode_3=[$quick_eb_static_text||($quick_eb_static_text=$createVNode(0,'正在加载编辑器插件...'))];$vnode_2=[$createVNode('div',{'id': ($__line=7,$__art='{{=$viewId}}','')+$viewId+'_ed',},$vnode_3)];;$$_class='rd-_assets_index_less_-hp100'+($__line=6,$__art='{{if pv}}','');$__ctrl='<%if(pv){%>';if(pv){;$$_class+=' rd-_assets_index_less_-none'+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'id': ($__line=6,$__art='{{=$viewId}}','')+$viewId+'_e','class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-z-index-1','style': 'left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width}}',$__ctrl='<%=props.width%>',(props.width))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height}}',$__ctrl='<%=props.height%>',(props.height))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'mx5-pointerdown': $viewId+'@:{stop~rs}()','mx5-contextmenu': $viewId+'@:{stop~rs}()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/richtext/dshow.html'; throw msg; }  } ,
    init() {
        this.on('destroy', () => {
            let editor = this['@:{editor~rs}'];
            if (editor && editor !== 1) {
                editor.destroy();
            }
        });
    },
    assign(data) {
        this.set(data);
    },
    async render() {
        let marker = mark(this, '@:{render~rs}');
        let props = this.get('props');
        let readonly = props.readonly;
        await this.digest({
            readonly
        });
        if (!readonly) {
            await ckeditor5_1();
            if (marker()) {
                if (!this['@:{editor~rs}']) {
                    this['@:{editor~rs}'] = 1;
                    let editor = await CKEditor.Classic.create(node(`${this.id}_ed`), {
                        initialData: props.text
                    });
                    this['@:{editor~rs}'] = editor;
                    editor.model.document.on('change', () => {
                        this.get('props').text = editor.getData();
                    });
                }
                else if (this['@:{editor~rs}'] != 1) {
                    this['@:{editor~rs}'].setData(props.text);
                }
            }
        }
        else {
            this.digest({
                pv: true,
                text: props.text
            });
        }
    },
    '@:{toggle.state~rs}<click>'(e) {
        let pv = this.get('pv');
        let props = this.get('props');
        this.digest({
            pv: !pv,
            text: props.text
        });
    },
    '@:{stop~rs}<pointerdown,contextmenu>'(e) {
        if (e['@:{halt~rs}'])
            return;
        let { target } = e;
        if (target.id != `${this.id}_pv`) {
            e['@:{halt~rs}'] = 1;
            let element = this.get('element');
            if (stage_selection_1["@:{selection#set~rs}"](element)) {
                history_1["@:{history#save~rs}"](history_1['@:{history#element.get.focus~rs}'], element.props.ename);
            }
        }
    }
});

});