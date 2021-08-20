/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/todo/index",["magix5","../../designer/const"],(require,exports,module)=>{
let $quick_cR_static_text;
let $quick_dt_static_text;
let $quick_em_0_static_attr={'class': 'rd-_elements_todo_index_less_-border-bottom-1px-solid-ccc9 rd-_elements_todo_index_less_-padding-4px',};
let $quick_em_1_static_attr={'class': 'rd-_elements_todo_index_less_-outline',};
let $quick_em_2_static_attr={'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_elements_todo_index_less_-border-bottom-1px-solid-ccc9 rd-_elements_todo_index_less_-todo-item',};
let $special_2={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let { View, applyStyle, node } = magix_1;
applyStyle("rd-_elements_todo_index_less_","\n.rd-_elements_todo_index_less_-outline {\nborder-radius:2px;\nborder:solid 1px #ccc9;\n}\n.rd-_elements_todo_index_less_-todo {\nbackground:#eee9;\n}\n.rd-_elements_todo_index_less_-padding-4px {\npadding:4px;\n}\n.rd-_elements_todo_index_less_-min-height-40px {\nmin-height:40px;\n}\n.rd-_elements_todo_index_less_-border-bottom-1px-solid-ccc9 {\nborder-bottom:1px solid #ccc9;\n}\n.rd-_elements_todo_index_less_-height-26px {\nheight:26px;\n}\n.rd-_elements_todo_index_less_-todo-item {\nheight:24px;\nline-height:24px;\npadding:0 4px;\n}\n.rd-_elements_todo_index_less_-remove-icon {\ndisplay:none;\n}\n.rd-_elements_todo_index_less_-todo-item:hover {\nbackground:#eee3;\n}\n.rd-_elements_todo_index_less_-todo-item:hover .rd-_elements_todo_index_less_-remove-icon {\ndisplay:block;\n}\n.rd-_elements_todo_index_less_-text-decoration-line-through {\ntext-decoration:line-through;\n}\n");
let scaleYReg = /scaleY\(([\d\.]+)\)/;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	scale,}=$dataFromView,
$$_style,
$vnode_2,
$$_class,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_1;
$vnode_2=[$createVNode('input',{'class': 'rd-_assets_index_less_-input rd-_assets_index_less_-tag-input rd-_assets_index_less_-wp100 rd-_elements_todo_index_less_-height-26px','placeholder': '准备做什么?回车添加待办事项','mx5-keydown': $viewId+'@:{watch.key.down~rs}()',},1)];$vnode_1=[$createVNode('div',$quick_em_0_static_attr,$vnode_2)];$vnode_2=[];$__line=6;$__art="{{if props.todos.length}}";$__ctrl="if(props.todos.length){";
if(props.todos.length){
$vnode_3=[];$__line=8;$__art="{{each props.todos as todo todoIndex}}";$__ctrl="for(let $q_a_lvbbgwof=props.todos,$q_c_ofukfoezp=$q_a_lvbbgwof.length,todoIndex=0;todoIndex<$q_c_ofukfoezp;todoIndex++){let todo=$q_a_lvbbgwof[todoIndex];";
for(let $q_a_lvbbgwof=props.todos,$q_c_ofukfoezp=$q_a_lvbbgwof.length,todoIndex=0;todoIndex<$q_c_ofukfoezp;todoIndex+=1){
let todo=$q_a_lvbbgwof[todoIndex];
$vnode_5=[$createVNode('input',{'type': 'checkbox','checked': ($temp_var=($__line=11,$__art='{{=todo.complete}}',$__ctrl='<%=todo.complete%>',todo.complete),$temp_var!=null&&$temp_var!==false&&$temp_var!==true&&$temp_var!==null&&console.error('make sure attr:"checked" returned only true , false or null value\r\nat line:'+$__line+'\r\nat file:elements/todo/index.html\r\ncurrent returned value is:',JSON.stringify($temp_var)),$temp_var),'mx5-change': $viewId+'@:{change.task.status~rs}({index:'+($__line=11,$__art='{{=todoIndex}}',$__ctrl='<%=todoIndex%>',(todoIndex))+'})',},1,$special_2),$createVNode(0,($__line=12,$__art='{{=todo.task}}',$__ctrl='<%=todo.task%>',(todo.task)))];;$$_class='rd-_assets_index_less_-flex rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex-fill-rest rd-_assets_index_less_-ellipsis'+($__line=10,$__art='{{if todo.complete}}','');$__ctrl='<%if(todo.complete){%>';if(todo.complete){;$$_class+=' rd-_assets_index_less_-color-999 rd-_elements_todo_index_less_-text-decoration-line-through'+($__line=10,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_4=[$createVNode('label',{'class': $$_class,},$vnode_5)];$vnode_5=[$quick_cR_static_text||($quick_cR_static_text=$createVNode(0,''))];$vnode_4.push($createVNode('i',{'class': 'rd-_assets_index_less_-cursor-pointer rd-_assets_index_less_-fontsize-12 rd-_assets_index_less_-gray rd-_assets_index_less_-iconfont rd-_elements_todo_index_less_-remove-icon','mx5-click': $viewId+'@:{remove.task.at~rs}({index:'+($__line=14,$__art='{{=todoIndex}}',$__ctrl='<%=todoIndex%>',(todoIndex))+'})',},$vnode_5));$vnode_3.push($createVNode('div',$quick_em_2_static_attr,$vnode_4));
}$vnode_2.push($createVNode('div',$quick_em_1_static_attr,$vnode_3));
}else{
$vnode_2.push($quick_dt_static_text||($quick_dt_static_text=$createVNode(0,'暂无待办事项')));
};$$_class='rd-_elements_todo_index_less_-padding-4px rd-_elements_todo_index_less_-min-height-40px rd-_assets_index_less_-background-color-fff'+($__line=5,$__art='{{if !props.todos.length}}','');$__ctrl='<%if(!props.todos.length){%>';if(!props.todos.length){;$$_class+=' rd-_assets_index_less_-color-999'+($__line=5,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));;$$_style='left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height/scale}}',$__ctrl='<%=props.height/scale%>',(props.height/scale))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width/scale}}',$__ctrl='<%=props.width/scale%>',(props.width/scale))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=1,$__art='{{if scale!=1}}','');$__ctrl='<%if(scale!=1){%>';if(scale!=1){;$$_style+='transform:scale('+($__line=1,$__art='{{=scale}}',$__ctrl='<%=scale%>',(scale))+');transform-origin:0 0;'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-touch-action-none rd-_assets_index_less_-z-index-1 rd-_elements_todo_index_less_-outline rd-_elements_todo_index_less_-todo','mx5-pointerdown': $viewId+'@:{stop~rs}()','mx5-contextmenu': $viewId+'@:{stop~rs}()','id': 'todo_'+($__line=1,$__art='{{= $viewId}}','')+$viewId,'style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/todo/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            scale: magix_1.State.get('@:{global#stage.scale~rs}') || 1
        });
    },
    '@:{update.size~rs}'() {
        let todoNode = node(`todo_${this.id}`);
        if (todoNode) {
            let childNodes = todoNode.childNodes;
            let scale = magix_1.State.get('@:{global#stage.scale~rs}') || 1;
            let h = 2 * scale;
            for (let i = childNodes.length; i--;) {
                let c = childNodes[i];
                if (c.nodeType == 1) {
                    let b = c.getBoundingClientRect();
                    h += b.height;
                }
            }
            let stageCanvas = node('_rd_sc');
            if (stageCanvas) {
                let scParentNode = stageCanvas.parentNode;
                let m = scParentNode.style.transform.match(scaleYReg);
                if (m) {
                    h /= parseFloat(m[1]);
                }
            }
            let props = this.get('props');
            props.height = const_1['@:{const#to.unit~rs}'](h);
            console.log(h);
            this.digest({
                props
            });
        }
    },
    async '@:{watch.key.down~rs}<keydown>'(e) {
        let { code, eventTarget } = e;
        if (code == 'Enter') {
            let v = eventTarget.value.trim();
            eventTarget.value = '';
            let props = this.get('props');
            props.todos.push({
                task: v,
                complete: false
            });
            await this.digest({
                props
            });
            this['@:{update.size~rs}']();
        }
    },
    async '@:{remove.task.at~rs}<click>'(e) {
        let { index } = e.params;
        let props = this.get('props');
        props.todos.splice(index, 1);
        await this.digest({
            props
        });
        this['@:{update.size~rs}']();
    },
    '@:{change.task.status~rs}<change>'(e) {
        let { index } = e.params;
        let props = this.get('props');
        let todo = props.todos[index];
        todo.complete = e.eventTarget.checked;
        this.digest({
            props
        });
    },
    '@:{stop~rs}<pointerdown,contextmenu>'(e) {
        if (e['@:{halt~rs}'])
            return;
        e['@:{halt~rs}'] = 1;
    }
});

});