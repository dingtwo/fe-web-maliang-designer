/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/tree/index",["magix5","../../designer/enum","../../designer/history","../../designer/stage-generic","../../designer/stage-selection","./rect","./branch"],(require,exports,module)=>{
require("./branch");
let $quick_aL_static_text;
let $quick_dd_0_static_attr={'class': 'rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-iconfont rd-_panels_tree_index_less_-move',};
let $quick_dd_1_static_attr={'class': 'rd-_assets_index_less_-ellipsis rd-_assets_index_less_-flex-fill-rest',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let enum_1 = require("../../designer/enum");
let history_1 = require("../../designer/history");
let stage_generic_1 = require("../../designer/stage-generic");
let stage_selection_1 = require("../../designer/stage-selection");
let rect_1 = require("./rect");
let { State, View, applyStyle, mark } = magix_1;
applyStyle("rd-_panels_tree_index_less_","\n.rd-_panels_tree_index_less_-items {\npadding:5px 4px;\n}\n.rd-_panels_tree_index_less_-item {\ncolor:#333;\nmargin:1px 0;\n}\n.rd-_panels_tree_index_less_-item-text {\nheight:22px;\nline-height:22px;\nborder-radius:2px;\n}\n.rd-_panels_tree_index_less_-remove-icon {\nvisibility:hidden;\n}\n.rd-_panels_tree_index_less_-item-text:hover {\nbackground:#f5f5f5;\n}\n.rd-_panels_tree_index_less_-item-text:hover .rd-_panels_tree_index_less_-remove-icon {\nvisibility:visible;\n}\n.rd-_panels_tree_index_less_-item-selected,\n.rd-_panels_tree_index_less_-item-selected:hover {\nbackground:#b2e1b5;\n}\n.rd-_panels_tree_index_less_-item-locked-selected,\n.rd-_panels_tree_index_less_-item-locked-selected:hover {\nbackground:#e5e5e5;\n}\n.rd-_panels_tree_index_less_-move {\nmargin:0 4px 0 2px;\n}\n.rd-_panels_tree_index_less_-rect {\nbackground:#47B34E;\nopacity:0.4;\n}\n.rd-_panels_tree_index_less_-item-dragged {\nopacity:0.4;\n}\n.rd-_panels_tree_index_less_-item--top {\nbox-shadow:0px -1px #47B34E;\n}\n.rd-_panels_tree_index_less_-item--bottom {\nbox-shadow:0px 1px #47B34E;\n}\n.rd-_panels_tree_index_less_-col {\nborder-top:dotted 1px #f5f5f5;\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	elements,
	i18n,
	current,
	drag,
	index,
	onTop,
	map,
	hodEnum,}=$dataFromView,
$text,
$$_class,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
$vnode_1=[];$__line=2;$__art="{{each elements as e ei by desc}}";$__ctrl="for(let ei=elements.length;ei--;){let e=elements[ei];";
for(let ei=elements.length;ei--;){
let e=elements[ei];
$text=($__line=3,$__art='{{set {props,ctrl,id}=e}}','');$__ctrl='<%let props=e.props,ctrl=e.ctrl,id=e.id;%>';let props=e.props,ctrl=e.ctrl,id=e.id;;$text+=' '+($__line=4,$__art='{{set {locked,readonly,rows,ename}=props}}','');$__ctrl='<%let locked=props.locked,readonly=props.readonly,rows=props.rows,ename=props.ename;%>';let locked=props.locked,readonly=props.readonly,rows=props.rows,ename=props.ename;;$__line=5;$__art="{{if !ename}}";$__ctrl="if(!ename){";
if(!ename){
($__line=6,$__art='{{ename=i18n(ctrl.title)}}','');$__ctrl='<%ename=i18n(ctrl.title)%>';ename=i18n(ctrl.title);
}$vnode_2=[];$vnode_3=[];$vnode_4=[$createVNode(0,($__line=10,$__art='{{=ctrl.icon}}',$__ctrl='<%=ctrl.icon%>',(ctrl.icon)),1)];$vnode_3.push($createVNode('i',$quick_dd_0_static_attr,$vnode_4));$vnode_4=[$createVNode(0,($__line=12,$__art='{{=ename}}',$__ctrl='<%=ename%>',(ename)))];$vnode_3.push($createVNode('div',$quick_dd_1_static_attr,$vnode_4));$__line=14;$__art="{{if !readonly && !locked}}";$__ctrl="if(!readonly && !locked){";
if(!readonly && !locked){
$vnode_4=[$quick_aL_static_text||($quick_aL_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-gray rd-_assets_index_less_-iconfont rd-_panels_tree_index_less_-move rd-_panels_tree_index_less_-remove-icon','title': ($__line=15,$__art='{{=i18n(\'@:{lang#remove.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#remove.element~rs}\')%>',(i18n('@:{lang#remove.element~rs}'))),'mx5-click': $viewId+'@:{remove.element~rs}({element:\''+($__line=15,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_elements.\'+(ei)+\'.e\'%>',$keyOf($refData,e,'auto_key_elements.'+(ei)+'.e'))+'\'})',},$vnode_4));
};$$_class='rd-_panels_tree_index_less_-item-text rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center'+($__line=9,$__art='{{if map[id]}}','');$__ctrl='<%if(map[id]){%>';if(map[id]){;$$_class+=' '+($__line=9,$__art='{{if locked}}','');$__ctrl='<%if(locked){%>';if(locked){;$$_class+='rd-_panels_tree_index_less_-item-locked-selected'+($__line=9,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+='rd-_panels_tree_index_less_-item-selected'+($__line=9,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=9,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-pointerover': $viewId+'@:{show.rect~rs}({element:\''+($__line=9,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_elements.\'+(ei)+\'.e\'%>',$keyOf($refData,e,'auto_key_elements.'+(ei)+'.e'))+'\'})','mx5-pointerout': $viewId+'@:{hide.rect~rs}()','mx5-click': (($temp_var=($__line=9,$__art='{{=!readonly}}',$__ctrl='<%=!readonly%>',!readonly),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:panels/tree/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{select.element~rs}({element:\''+($__line=9,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_elements.\'+(ei)+\'.e\'%>',$keyOf($refData,e,'auto_key_elements.'+(ei)+'.e'))+'\'})'),'title': ($__line=9,$__art='{{=ename}}',$__ctrl='<%=ename%>',(ename)),'class': $$_class,},$vnode_3));$__line=18;$__art="{{if e.ctrl.as & hodEnum}}";$__ctrl="if(e.ctrl.as & hodEnum){";
if(e.ctrl.as & hodEnum){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'elements,map','class': 'rd-_assets_index_less_-ml10','mx5-view': 'panels/tree/branch?rows='+($__line=19,$__art='{{#rows}}',$__ctrl='<%#rows,\'auto_key_elements.\'+(ei)+\'.props.rows.rows\'%>',$keyOf($refData,rows,'auto_key_elements.'+(ei)+'.props.rows.rows'))+'&map='+($__line=19,$__art='{{#map}}',$__ctrl='<%#map,\'auto_key_map\'%>',$keyOf($refData,map,'auto_key_map')),}));
};$$_class='rd-_panels_tree_index_less_-item rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-flex rd-_assets_index_less_-flex-direction-column'+($__line=8,$__art='{{if current==ei}}','');$__ctrl='<%if(current==ei){%>';if(current==ei){;$$_class+=' rd-_panels_tree_index_less_-item-dragged'+($__line=8,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=8,$__art='{{if drag&&ei==index}}','');$__ctrl='<%if(drag&&ei==index){%>';if(drag&&ei==index){;$$_class+=' rd-_panels_tree_index_less_-item--'+($__line=8,$__art='{{=onTop?\'top\':\'bottom\'}}',$__ctrl='<%=onTop?\'top\':\'bottom\'%>',(onTop?'top':'bottom'))+($__line=8,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'id': 'te_'+($__line=8,$__art='{{=id}}',$__ctrl='<%=id%>',(id)),'mx5-dragstart': $viewId+'@:{drag.start~rs}({index:'+($__line=8,$__art='{{=ei}}',$__ctrl='<%=ei%>',(ei))+'})','mx5-dragover': $viewId+'@:{drag.over~rs}({index:'+($__line=8,$__art='{{=ei}}',$__ctrl='<%=ei%>',(ei))+'})','draggable': (($__line=8,$__art='{{=!locked&&!readonly}}',$__ctrl='<%=!locked&&!readonly%>',!locked&&!readonly))&&('true'),'class': $$_class,},$vnode_2));
}$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-unselectable rd-_panels_tree_index_less_-items','mx5-dragend': $viewId+'@:{drag.end~rs}()',},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/tree/index.html'; throw msg; }  } ,
    init() {
        this.set({
            hodEnum: enum_1['@:{enum#as.hod~rs}']
        });
        let update = this['@:{debounce~rs}'](this.render, 30);
        let checkLocked = e => {
            let props = e['@:{props~rs}'];
            if (props.locked ||
                props.ename ||
                props.rows) {
                update();
            }
        };
        rect_1['@:{setup~rs}']();
        State.on('@:{event#history.shift.change~rs}', update);
        State.on('@:{event#stage.elements.change~rs}', update);
        State.on('@:{event#stage.select.elements.change~rs}', update);
        State.on('@:{event#stage.page.and.elements.change~rs}', update);
        State.on('@:{event#stage.select.element.props.change~rs}', checkLocked);
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change~rs}', update);
            State.off('@:{event#stage.elements.change~rs}', update);
            State.off('@:{event#stage.select.elements.change~rs}', update);
            State.off('@:{event#stage.page.and.elements.change~rs}', update);
            State.off('@:{event#stage.select.element.props.change~rs}', checkLocked);
        });
    },
    async render(e) {
        let elements = State.get('@:{global#stage.elements~rs}');
        let map = stage_selection_1['@:{selection#get.selected.map~rs}']();
        let selectElements = State.get('@:{global#stage.select.elements~rs}');
        let renderMark = mark(this, '@:{render.mark~rs}');
        await this.digest({
            map,
            elements
        });
        await magix_1.lowTaskFinale();
        let highlight = renderMark() && selectElements.length == 1;
        if (e &&
            e.type == '@:{event#stage.elements.change~rs}' &&
            (e['@:{extra~rs}'] == '@:{delete.from.tree.panel~rs}' ||
                e['@:{extra~rs}'] == '@:{dragsort.from.tree.panel~rs}')) {
            highlight = false;
        }
        //console.log(e);
        //setTimeout(() => {
        if (highlight) {
            let first = selectElements[0];
            stage_generic_1['@:{generic#scroll.into.view~rs}'](`te_` + first.id, this.root);
        }
        //}, 50);
    },
    '@:{drag.start~rs}<dragstart>'(e) {
        let dest = State.get('@:{global#panels.elements.drag.view~rs}');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { params, dataTransfer } = e;
        this.set({
            current: me['@:{drag.index~rs}'] = params.index
        });
        //dataTransfer.effectAllowed = 'move';
        //firefox required setData
        dataTransfer.setData('text/plain', '@:{fix.firefox.cursor~rs}');
    },
    '@:{drag.over~rs}<dragover>'(e) {
        let dest = State.get('@:{global#panels.elements.drag.view~rs}');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { eventTarget, params, pageY } = e;
        let { index } = params;
        let currentIndex = me['@:{drag.index~rs}'];
        if (currentIndex != index) {
            let rect = eventTarget.getBoundingClientRect();
            let onTop = (rect.y + rect.height / 2) > pageY;
            let canDrop = 1;
            if (onTop) {
                //界面是倒序显示的
                if (currentIndex == index + 1) {
                    canDrop = 0;
                }
            }
            else {
                if (currentIndex == index - 1) {
                    canDrop = 0;
                }
            }
            if (canDrop) {
                //dataTransfer.dropEffect = 'move';
                me.digest({
                    onTop,
                    drag: true,
                    index
                });
            }
            else {
                //dataTransfer.dropEffect = 'none';
                me.digest({
                    drag: 0
                });
            }
        }
        else {
            //dataTransfer.dropEffect = 'none';
            me.digest({
                drag: 0
            });
        }
    },
    '@:{drag.end~rs}<dragend>'(e) {
        let dest = State.get('@:{global#panels.elements.drag.view~rs}');
        if (dest && dest != this.id)
            return;
        let me = this;
        let { drag, elements, onTop, index } = me.get();
        if (drag) {
            let startIndex = me['@:{drag.index~rs}'];
            let drag = elements[startIndex];
            elements.splice(index + (onTop ? 1 : 0), 0, drag);
            if (index < startIndex) {
                elements.splice(startIndex + 1, 1);
            }
            else {
                elements.splice(startIndex, 1);
            }
            me.set({
                elements
            });
            State.fire('@:{event#stage.elements.change~rs}', {
                '@:{extra~rs}': '@:{dragsort.from.tree.panel~rs}'
            });
            history_1['@:{history#save~rs}'](history_1['@:{history#element.z.index~rs}'], drag.props.ename);
        }
        me.digest({
            current: -1,
            drag: 0
        });
        this['@:{hide.pole~rs}']();
    }
}).merge(rect_1);

});