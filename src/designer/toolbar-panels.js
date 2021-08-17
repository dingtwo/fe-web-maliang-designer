/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/toolbar-panels",["magix5","../panels/index"],(require,exports,module)=>{

/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let index_1 = require("../panels/index");
let { State, View } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	panels,
	i18n,}=$dataFromView,
$$_class,
$vnode_1;
$__line=1;$__art="{{each panels as p i}}";$__ctrl="for(let $q_c_yobxt=panels.length,i=0;i<$q_c_yobxt;i++){let p=panels[i];";
for(let $q_c_yobxt=panels.length,i=0;i<$q_c_yobxt;i+=1){
let p=panels[i];
$__line=2;$__art="{{if p.icon}}";$__ctrl="if(p.icon){";
if(p.icon){
$vnode_1=[$createVNode(0,($__line=3,$__art='{{=p.icon}}',$__ctrl='<%=p.icon%>',(p.icon)),1)];;$$_class='rd-_assets_index_less_-iconfont rd-_designer_toolbar_less_-toolbar-item rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-align-items-center rd-_assets_index_less_-justify-content-center'+($__line=3,$__art='{{if p[\'@:{panel#opened~rs}\']}}','');$__ctrl='<%if(p[\'@:{panel#opened~rs}\']){%>';if(p['@:{panel#opened~rs}']){;$$_class+=' rd-_designer_toolbar_less_-toolbar-item-active'+($__line=3,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0.push($createVNode('i',{'mx5-click': $viewId+'@:{toggle.panel~rs}({id:\''+($__line=3,$__art='{{=p.id}}',$__ctrl='<%=$encodeQuote(p.id)%>',($encodeQuote(p.id)))+'\'})','title': ($__line=3,$__art='{{=i18n(p[\'@:{panel#opened~rs}\']?\'@:{lang#panel.close.panel}\':\'@:{lang#panel.open.panel}\',p.title,i+1)}}',$__ctrl='<%=i18n(p[\'@:{panel#opened~rs}\']?\'@:{lang#panel.close.panel~rs}\':\'@:{lang#panel.open.panel~rs}\',p.title,i+1)%>',(i18n(p['@:{panel#opened~rs}']?'@:{lang#panel.close.panel~rs}':'@:{lang#panel.open.panel~rs}',p.title,i+1))),'class': $$_class,},$vnode_1));
}
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/toolbar-panels.html'; throw msg; }  } ,
    init() {
        let update = this.render.bind(this);
        State.on('@:{event#panel.change~rs}', update);
        this.on('destroy', () => {
            State.off('@:{event#panel.change~rs}', update);
        });
    },
    render() {
        this.digest({
            panels: index_1["@:{support.panels~rs}"]()
        });
    },
    '@:{toggle.panel~rs}<click>'(e) {
        let { id } = e.params;
        index_1["@:{toggle.panel~rs}"](id);
    }
});

});