/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/data/branch",["magix5"],(require,exports,module)=>{
let $quick_lC_static_text;
let $quick_mH_0_static_node;
/*
    author:https://github.com/xinglie
*/


let magix_1 = require("magix5");
let { View, State, dispatch } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	list,
	indent,
	disabled,
	readonly,
	bindMap,
	ownerUrl,
	ownerId,
	highlight,
	kw,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1;
$__line=1;$__art="{{each list as item}}";$__ctrl="for(let $q_c_omchebrqhc=list.length,$q_key_olnjmap=0;$q_key_olnjmap<$q_c_omchebrqhc;$q_key_olnjmap++){let item=list[$q_key_olnjmap];";
for(let $q_c_omchebrqhc=list.length,$q_key_olnjmap=0;$q_key_olnjmap<$q_c_omchebrqhc;$q_key_olnjmap+=1){
let item=list[$q_key_olnjmap];
($__line=2,$__art='{{set children = item.children}}','');$__ctrl='<%let children = item.children;%>';let children = item.children;;$vnode_1=[];$vnode_2=[];$__line=13;$__art="{{if children}}";$__ctrl="if(children){";
if(children){
$vnode_3=[$quick_lC_static_text||($quick_lC_static_text=$createVNode(0,''))];;$$_class='rd-_assets_index_less_-iconfont rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-transition'+($__line=14,$__art='{{if item.expand}}','');$__ctrl='<%if(item.expand){%>';if(item.expand){;$$_class+=' rd-_assets_index_less_-r90'+($__line=14,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('i',{'class': $$_class,},$vnode_3));
}else{

if($quick_mH_0_static_node){
$vnode_2.push($quick_mH_0_static_node);
}else{
$vnode_3=[$createVNode(0,'')];$vnode_2.push($quick_mH_0_static_node=$createVNode('i',{'_': 'hS','class': 'rd-_assets_index_less_-iconfont',},$vnode_3));
}

}$vnode_3=[$createVNode(0,($__line=18,$__art='{{=highlight(item.name)}}',$__ctrl='<%=highlight(item.name)%>',(highlight(item.name))),1)];$vnode_2.push($createVNode('span',0,$vnode_3));;$$_class='rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center'+($__line=9,$__art='{{if disabled||item.disabled||readonly||bindMap[item.id]}}','');$__ctrl='<%if(disabled||item.disabled||readonly||bindMap[item.id]){%>';if(disabled||item.disabled||readonly||bindMap[item.id]){;$$_class+=' rd-_panels_data_index_less_-opacity-40'+($__line=9,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=9,$__art='{{if children}}','');$__ctrl='<%if(children){%>';if(children){;$$_class+=' rd-_panels_data_index_less_-branch-title rd-_assets_index_less_-cursor-pointer'+($__line=9,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+=' rd-_panels_data_index_less_-item-draggable'+($__line=9,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'mx5-click': (($temp_var=($__line=9,$__art='{{=children}}',$__ctrl='<%=children%>',children),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:panels/data/branch.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{toggle.children~rs}({item:\''+($__line=9,$__art='{{#item}}',$__ctrl='<%#item,\'auto_key_list.\'+($q_key_olnjmap)+\'.item\'%>',$keyOf($refData,item,'auto_key_list.'+($q_key_olnjmap)+'.item'))+'\'})'),'draggable': (($__line=9,$__art='{{=!children && !bindMap[item.id] && !readonly && !disabled && !item.disabled}}',$__ctrl='<%=!children && !bindMap[item.id] && !readonly && !disabled && !item.disabled%>',!children && !bindMap[item.id] && !readonly && !disabled && !item.disabled))&&('true'),'mx5-dragstart': $viewId+'@:{drag.field.start~rs}({url:\''+($__line=9,$__art='{{=ownerUrl}}',$__ctrl='<%=$encodeQuote(ownerUrl)%>',($encodeQuote(ownerUrl)))+'\',field:\''+($__line=9,$__art='{{#item}}',$__ctrl='<%#item,\'auto_key_list.\'+($q_key_olnjmap)+\'.item\'%>',$keyOf($refData,item,'auto_key_list.'+($q_key_olnjmap)+'.item'))+'\',id:\''+($__line=9,$__art='{{=ownerId}}',$__ctrl='<%=$encodeQuote(ownerId)%>',($encodeQuote(ownerId)))+'\'})','mx5-dragend': $viewId+'@:{drag.field.end~rs}()','mx5-pointerdown': (($temp_var=($__line=9,$__art='{{= !children && !bindMap[item.id] && !readonly && !disabled && !item.disabled}}',$__ctrl='<%= !children && !bindMap[item.id] && !readonly && !disabled && !item.disabled%>',!children && !bindMap[item.id] && !readonly && !disabled && !item.disabled),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-pointerdown" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:panels/data/branch.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{fix.drag.clip.bug~rs}()'),'class': $$_class,},$vnode_2));$__line=20;$__art="{{if children && item.expand}}";$__ctrl="if(children && item.expand){";
if(children && item.expand){
$vnode_1.push($createVNode('div',{'mx5-owner': $viewId,'$': 'list,bindMap,disabled,readonly,kw','mx5-view': 'panels/data/branch?indent=true&list='+($__line=21,$__art='{{#children}}',$__ctrl='<%#children,\'auto_key_list.\'+($q_key_olnjmap)+\'.children.children\'%>',$keyOf($refData,children,'auto_key_list.'+($q_key_olnjmap)+'.children.children'))+'&bindMap='+($__line=21,$__art='{{#bindMap}}',$__ctrl='<%#bindMap,\'auto_key_bindMap\'%>',$keyOf($refData,bindMap,'auto_key_bindMap'))+'&ownerId='+($__line=21,$__art='{{#item.id}}',$__ctrl='<%#item.id,\'auto_key_list.\'+($q_key_olnjmap)+\'.item.id\'%>',$keyOf($refData,item.id,'auto_key_list.'+($q_key_olnjmap)+'.item.id'))+'&ownerUrl='+($__line=21,$__art='{{#item.url}}',$__ctrl='<%#item.url,\'auto_key_list.\'+($q_key_olnjmap)+\'.item.url\'%>',$keyOf($refData,item.url,'auto_key_list.'+($q_key_olnjmap)+'.item.url'))+'&disabled='+($__line=21,$__art='{{#disabled||item.disabled}}',$__ctrl='<%#disabled||item.disabled,\'auto_key_disabled.list.\'+($q_key_olnjmap)+\'.disabled||item.disabled\'%>',$keyOf($refData,disabled||item.disabled,'auto_key_disabled.list.'+($q_key_olnjmap)+'.disabled||item.disabled'))+'&readonly='+($__line=21,$__art='{{#readonly}}',$__ctrl='<%#readonly,\'auto_key_readonly\'%>',$keyOf($refData,readonly,'auto_key_readonly'))+'&kw='+($__line=21,$__art='{{#kw}}',$__ctrl='<%#kw,\'auto_key_kw\'%>',$keyOf($refData,kw,'auto_key_kw')),'class': 'rd-_assets_index_less_-ml5',}));
}$vnode_0.push($createVNode('div',{'class': (($__line=3,$__art='{{=indent}}',$__ctrl='<%=indent%>',indent))&&('rd-_assets_index_less_-ml10'),},$vnode_1));
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/data/branch.html'; throw msg; }  } ,
    init() {
        let view = this;
        this.set({
            highlight(title) {
                let kw = view.get('kw');
                if (kw) {
                    title = title.replaceAll(kw, `<span class="rd-_panels_data_index_less_-search-highlight">${kw}</span>`);
                }
                return title;
            }
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{toggle.children~rs}<click>'(e) {
        let { item } = e.params;
        let list = this.get('list');
        item.expand = !item.expand;
        this.digest({
            list
        });
    },
    '@:{drag.field.start~rs}<dragstart>'(e) {
        let { params: dragData, eventTarget, pageX, pageY, dataTransfer } = e;
        let b = eventTarget.getBoundingClientRect();
        State.set({
            '@:{global#bind.field.drag.data~rs}': dragData,
            '@:{global#bind.field.drag.event.offset~rs}': {
                '@:{offset.x~rs}': pageX - b.x,
                '@:{offset.y~rs}': pageY - b.y
            }
        });
        dataTransfer.setData('text/plain', '@:{fix.firefox.cursor~rs}');
        //dataTransfer.effectAllowed = 'move';
        State.fire('@:{event#bind.field.drag.start~rs}');
    },
    '@:{drag.field.end~rs}<dragend>'() {
        State.set({
            '@:{global#bind.field.drag.data~rs}': null,
            '@:{global#bind.field.drag.event~rs}': null
        });
        State.fire('@:{event#bind.field.drag.end~rs}');
    },
    //https://github.com/xinglie/report-designer/issues/45
    '@:{fix.drag.clip.bug~rs}<pointerdown>'(e) {
        dispatch(this.root, 'treeitempointerdown', {
            treeDOMNode: e.eventTarget
        });
    }
});

});