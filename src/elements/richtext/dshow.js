/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/richtext/dshow",["5c","../../5r/ckeditor5","../../5b/5o","../../5b/69"],(require,exports,module)=>{
let $quick_mD_static_text;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let ckeditor5_1 = require("../../5r/ckeditor5");
let history_1 = require("../../5b/5o");
let stage_selection_1 = require("../../5b/69");
let { applyStyle, View, mark, node } = magix_1;
applyStyle("rd-me",".ck-editor,.ck .ck-editor__main{height:100%!important}.ck-editor__editable_inline{height:calc(100% - 40px)}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
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
$vnode_1=[];
if(!readonly){
$vnode_2=[$createVNode(0,(pv?'&#xe638;':'&#xe75a;'),1)];$vnode_1.push($createVNode('i',{'class': 'rd-l3 rd-mJ rd-nk','style': 'top:-19px;left:20px','title': (pv?'编辑':'预览'),'mx5-click': $viewId+'_qS()',},$vnode_2));
}$vnode_2=[$createVNode(0,(text),1)];;$$_class='rd-mC rd-nQ';if(!pv){;$$_class+=' rd-mO';};$vnode_1.push($createVNode('div',{'id': $viewId+'_pv','class': $$_class,},$vnode_2));$vnode_3=[$quick_mD_static_text||($quick_mD_static_text=$createVNode(0,'正在加载编辑器插件...'))];$vnode_2=[$createVNode('div',{'id': $viewId+'_ed',},$vnode_3)];;$$_class='rd-mC';if(pv){;$$_class+=' rd-mO';};$vnode_1.push($createVNode('div',{'id': $viewId+'_e','class': $$_class,},$vnode_2));$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5 rd-on','style': 'left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width)+(unit)+';height:'+(props.height)+(unit),'mx5-pointerdown': $viewId+'_p2()','mx5-contextmenu': $viewId+'_p2()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.on('destroy', () => {
            let editor = this['_qR'];
            if (editor && editor !== 1) {
                editor.destroy();
            }
        });
    },
    assign(data) {
        this.set(data);
    },
    async render() {
        let marker = mark(this, '_mh');
        let props = this.get('props');
        let readonly = props.readonly;
        await this.digest({
            readonly
        });
        if (!readonly) {
            await ckeditor5_1();
            if (marker()) {
                if (!this['_qR']) {
                    this['_qR'] = 1;
                    let editor = await CKEditor.Classic.create(node(`${this.id}_ed`), {
                        initialData: props.text
                    });
                    this['_qR'] = editor;
                    editor.model.document.on('change', () => {
                        this.get('props').text = editor.getData();
                    });
                }
                else if (this['_qR'] != 1) {
                    this['_qR'].setData(props.text);
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
    '_qS<click>'(e) {
        let pv = this.get('pv');
        let props = this.get('props');
        this.digest({
            pv: !pv,
            text: props.text
        });
    },
    '_p2<pointerdown,contextmenu>'(e) {
        if (e['_mW'])
            return;
        let { target } = e;
        if (target.id != `${this.id}_pv`) {
            e['_mW'] = 1;
            let element = this.get('element');
            if (stage_selection_1["l3"](element)) {
                history_1["l2"](history_1['mi'], element.props.ename);
            }
        }
    }
});

});