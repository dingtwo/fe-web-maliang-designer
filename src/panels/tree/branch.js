/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/tree/branch",["magix5","../../designer/enum","../../designer/history","./rect"],(require,exports,module)=>{
let $quick_bx_static_text;
let $quick_dZ_0_static_attr={'class': 'rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-iconfont rd-_panels_tree_index_less_-move',};
let $quick_dZ_1_static_attr={'class': 'rd-_assets_index_less_-ellipsis rd-_assets_index_less_-flex-fill-rest',};

let magix_1 = require("magix5");
let enum_1 = require("../../designer/enum");
let history_1 = require("../../designer/history");
let rect_1 = require("./rect");
let { State, View } = magix_1;

module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf,$encodeQuote)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
{
	rows,
	i18n,
	rowIndex,
	colIndex,
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
$__line=1;$__art="{{each rows as row ri}}";$__ctrl="for(let $q_c_ymnfpzx=rows.length,ri=0;ri<$q_c_ymnfpzx;ri++){let row=rows[ri];";
for(let $q_c_ymnfpzx=rows.length,ri=0;ri<$q_c_ymnfpzx;ri+=1){
let row=rows[ri];
$__line=2;$__art="{{each row.cols as {elements} ci}}";$__ctrl="for(let $q_a_cbbwymvmae=row.cols,$q_c_zbwwxsr=$q_a_cbbwymvmae.length,ci=0;ci<$q_c_zbwwxsr;ci++){let {elements:elements}=$q_a_cbbwymvmae[ci];";
for(let $q_a_cbbwymvmae=row.cols,$q_c_zbwwxsr=$q_a_cbbwymvmae.length,ci=0;ci<$q_c_zbwwxsr;ci+=1){
let {elements:elements}=$q_a_cbbwymvmae[ci];
$__line=3;$__art="{{if elements&&elements.length}}";$__ctrl="if(elements&&elements.length){";
if(elements&&elements.length){
$vnode_1=[];$__line=5;$__art="{{each elements as e ei by desc}}";$__ctrl="for(let ei=elements.length;ei--;){let e=elements[ei];";
for(let ei=elements.length;ei--;){
let e=elements[ei];
$text=($__line=6,$__art='{{set {props,ctrl,id}=e}}','');$__ctrl='<%let props=e.props,ctrl=e.ctrl,id=e.id;%>';let props=e.props,ctrl=e.ctrl,id=e.id;;$text+=' '+($__line=7,$__art='{{set {locked,readonly,rows:eRows,ename}=props}}','');$__ctrl='<%let locked=props.locked,readonly=props.readonly,eRows=props.rows,ename=props.ename;%>';let locked=props.locked,readonly=props.readonly,eRows=props.rows,ename=props.ename;;$__line=8;$__art="{{if !ename}}";$__ctrl="if(!ename){";
if(!ename){
($__line=9,$__art='{{ename=i18n(ctrl.title)}}','');$__ctrl='<%ename=i18n(ctrl.title)%>';ename=i18n(ctrl.title);
}$vnode_2=[];$vnode_3=[];$vnode_4=[$createVNode(0,($__line=13,$__art='{{=ctrl.icon}}',$__ctrl='<%=ctrl.icon%>',(ctrl.icon)),1)];$vnode_3.push($createVNode('i',$quick_dZ_0_static_attr,$vnode_4));$vnode_4=[$createVNode(0,($__line=15,$__art='{{=ename}}',$__ctrl='<%=ename%>',(ename)))];$vnode_3.push($createVNode('div',$quick_dZ_1_static_attr,$vnode_4));$__line=17;$__art="{{if !readonly && !locked}}";$__ctrl="if(!readonly && !locked){";
if(!readonly && !locked){
$vnode_4=[$quick_bx_static_text||($quick_bx_static_text=$createVNode(0,''))];$vnode_3.push($createVNode('i',{'class': 'rd-_assets_index_less_-fontsize-10 rd-_assets_index_less_-gray rd-_assets_index_less_-iconfont rd-_panels_tree_index_less_-move rd-_panels_tree_index_less_-remove-icon','title': ($__line=18,$__art='{{=i18n(\'@:{lang#remove.element~rs}\')}}',$__ctrl='<%=i18n(\'@:{lang#remove.element~rs}\')%>',(i18n('@:{lang#remove.element~rs}'))),'mx5-click': $viewId+'@:{remove.element~rs}({element:\''+($__line=18,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+(ei)+\'.e\'%>',$keyOf($refData,e,'auto_key_rows.'+(ri)+'.cols.'+(ci)+'.elements.'+(ei)+'.e'))+'\'})',},$vnode_4));
};$$_class='rd-_panels_tree_index_less_-item-text rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center'+($__line=12,$__art='{{if map[id]}}','');$__ctrl='<%if(map[id]){%>';if(map[id]){;$$_class+=' '+($__line=12,$__art='{{if locked}}','');$__ctrl='<%if(locked){%>';if(locked){;$$_class+='rd-_panels_tree_index_less_-item-locked-selected'+($__line=12,$__art='{{else}}','');$__ctrl='<%}else{%>';}else{;$$_class+='rd-_panels_tree_index_less_-item-selected'+($__line=12,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=12,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_2.push($createVNode('div',{'mx5-pointerover': $viewId+'@:{show.rect~rs}({element:\''+($__line=12,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+(ei)+\'.e\'%>',$keyOf($refData,e,'auto_key_rows.'+(ri)+'.cols.'+(ci)+'.elements.'+(ei)+'.e'))+'\',dest:\'_rdm_'+($__line=12,$__art='{{=id}}',$__ctrl='<%=$encodeQuote(id)%>',($encodeQuote(id)))+'\'})','mx5-pointerout': $viewId+'@:{hide.rect~rs}()','mx5-click': (($temp_var=($__line=12,$__art='{{=!readonly}}',$__ctrl='<%=!readonly%>',!readonly),($temp_var||$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&console.error('make sure attr:"mx5-click" returned only null or false falsy value\r\nat line:'+$__line+'\r\nat file:panels/tree/branch.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var)))&&($viewId+'@:{select.element~rs}({element:\''+($__line=12,$__art='{{#e}}',$__ctrl='<%#e,\'auto_key_rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+(ei)+\'.e\'%>',$keyOf($refData,e,'auto_key_rows.'+(ri)+'.cols.'+(ci)+'.elements.'+(ei)+'.e'))+'\',dest:\'_rdm_'+($__line=12,$__art='{{=id}}',$__ctrl='<%=$encodeQuote(id)%>',($encodeQuote(id)))+'\'})'),'title': ($__line=12,$__art='{{=ename}}',$__ctrl='<%=ename%>',(ename)),'class': $$_class,},$vnode_3));$__line=21;$__art="{{if e.ctrl.as & hodEnum}}";$__ctrl="if(e.ctrl.as & hodEnum){";
if(e.ctrl.as & hodEnum){
$vnode_2.push($createVNode('div',{'mx5-owner': $viewId,'$': 'rows,map','class': 'rd-_assets_index_less_-ml10','mx5-view': 'panels/tree/branch?hid='+($__line=22,$__art='{{=id}}',$__ctrl='<%=$encodeUrl(id)%>',($encodeUrl(id)))+'&rows='+($__line=22,$__art='{{#eRows}}',$__ctrl='<%#eRows,\'auto_key_rows.\'+(ri)+\'.cols.\'+(ci)+\'.elements.\'+(ei)+\'.props.rows.eRows\'%>',$keyOf($refData,eRows,'auto_key_rows.'+(ri)+'.cols.'+(ci)+'.elements.'+(ei)+'.props.rows.eRows'))+'&map='+($__line=22,$__art='{{#map}}',$__ctrl='<%#map,\'auto_key_map\'%>',$keyOf($refData,map,'auto_key_map')),}));
};$$_class='rd-_panels_tree_index_less_-item rd-_assets_index_less_-background-color-fff rd-_assets_index_less_-flex rd-_assets_index_less_-flex-direction-column'+($__line=11,$__art='{{if rowIndex==ri&&colIndex==ci&&current==ei}}','');$__ctrl='<%if(rowIndex==ri&&colIndex==ci&&current==ei){%>';if(rowIndex==ri&&colIndex==ci&&current==ei){;$$_class+=' rd-_panels_tree_index_less_-item-dragged'+($__line=11,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_class+=''+($__line=11,$__art='{{if drag&&rowIndex==ri&&colIndex==ci&&ei==index}}','');$__ctrl='<%if(drag&&rowIndex==ri&&colIndex==ci&&ei==index){%>';if(drag&&rowIndex==ri&&colIndex==ci&&ei==index){;$$_class+=' rd-_panels_tree_index_less_-item--'+($__line=11,$__art='{{=onTop?\'top\':\'bottom\'}}',$__ctrl='<%=onTop?\'top\':\'bottom\'%>',(onTop?'top':'bottom'))+($__line=11,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'id': 'te_'+($__line=11,$__art='{{=id}}',$__ctrl='<%=id%>',(id)),'mx5-dragstart': $viewId+'@:{drag.start~rs}({index:'+($__line=11,$__art='{{=ei}}',$__ctrl='<%=ei%>',(ei))+',row:'+($__line=11,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=11,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})','mx5-dragover': $viewId+'@:{drag.over~rs}({index:'+($__line=11,$__art='{{=ei}}',$__ctrl='<%=ei%>',(ei))+',row:'+($__line=11,$__art='{{=ri}}',$__ctrl='<%=ri%>',(ri))+',col:'+($__line=11,$__art='{{=ci}}',$__ctrl='<%=ci%>',(ci))+'})','draggable': (($__line=11,$__art='{{=!locked&&!readonly}}',$__ctrl='<%=!locked&&!readonly%>',!locked&&!readonly))&&('true'),'class': $$_class,},$vnode_2));
}$vnode_0.push($createVNode('div',{'class': 'rd-_panels_tree_index_less_-col','mx5-dragend': $viewId+'@:{drag.end~rs}()',},$vnode_1));
}
}
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/tree/branch.html'; throw msg; }  } ,
    init() {
        this.set({
            hodEnum: enum_1['@:{enum#as.hod~rs}']
        });
    },
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest();
    },
    '@:{drag.start~rs}<dragstart>'(e) {
        let dest = State.get('@:{global#panels.elements.drag.view~rs}');
        if (dest && dest != this.id)
            return;
        State.set({
            '@:{global#panels.elements.drag.view~rs}': this.id
        });
        let me = this;
        let { params, dataTransfer } = e;
        let { index, row, col } = params;
        me['@:{drag.index~rs}'] = index;
        me['@:{drag.row.index~rs}'] = row;
        me['@:{drag.col.index~rs}'] = col;
        this.digest({
            current: index,
            rowIndex: row,
            colIndex: col
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
        let { params, eventTarget, pageY } = e;
        let { index, row, col } = params;
        let currentIndex = me['@:{drag.index~rs}'];
        if (me['@:{drag.row.index~rs}'] === row &&
            me['@:{drag.col.index~rs}'] === col &&
            currentIndex != index) {
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
        else if (me.get('drag')) {
            //dataTransfer.dropEffect = 'none';
            me.digest({
                drag: 0
            });
        }
    },
    '@:{drag.end~rs}<dragend>'() {
        let dest = State.get('@:{global#panels.elements.drag.view~rs}');
        if (dest && dest != this.id)
            return;
        let me = this;
        me['@:{drag.row.index~rs}'] = -1;
        me['@:{drag.col.index~rs}'] = -1;
        let data = me.get();
        if (data.drag) {
            let startIndex = me['@:{drag.index~rs}'];
            let { rowIndex, colIndex, rows, index, onTop } = data;
            let elements = rows[rowIndex].cols[colIndex].elements;
            let drag = elements[startIndex];
            elements.splice(index + (onTop ? 1 : 0), 0, drag);
            if (index < startIndex) {
                elements.splice(startIndex + 1, 1);
            }
            else {
                elements.splice(startIndex, 1);
            }
            me.set({
                rows
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
        State.set({
            '@:{global#panels.elements.drag.view~rs}': null
        });
        this['@:{hide.pole~rs}']();
    }
}).merge(rect_1);

});