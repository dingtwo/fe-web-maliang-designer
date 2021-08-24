/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/todo/index",["51","../../50/53"],(require,exports,module)=>{
let $quick_gd_static_text;
let $quick_gQ_static_text;
let $quick_hJ_0_static_attr={'class': 'rd-kc rd-ke',};
let $quick_hJ_1_static_attr={'class': 'rd-ka',};
let $quick_hJ_2_static_attr={'class': 'rd-g9 rd-ha rd-ke rd-kg',};
let $special_2={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let { View, applyStyle, node } = magix_1;
applyStyle("rd-gr",".rd-ka{border:1px solid #ccc9;border-radius:2px}.rd-kb{background:#eee9}.rd-kc{padding:4px}.rd-kd{min-height:40px}.rd-ke{border-bottom:1px solid #ccc9}.rd-kf{height:26px}.rd-kg{height:24px;line-height:24px;padding:0 4px}.rd-kh{display:none}.rd-kg:hover{background:#eee3}.rd-kg:hover .rd-kh{display:block}.rd-ki{text-decoration:line-through}");
let scaleYReg = /scaleY\(([\d\.]+)\)/;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
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
$vnode_2=[$createVNode('input',{'class': 'rd-gN rd-gf rd-gg rd-kf','placeholder': '准备做什么?回车添加待办事项','mx5-keydown': $viewId+'_l_()',},1)];$vnode_1=[$createVNode('div',$quick_hJ_0_static_attr,$vnode_2)];$vnode_2=[];
if(props.todos.length){
$vnode_3=[];
for(let $q_a_vtigia=props.todos,$q_c_tmphbic=$q_a_vtigia.length,todoIndex=0;todoIndex<$q_c_tmphbic;todoIndex+=1){
let todo=$q_a_vtigia[todoIndex];
$vnode_5=[$createVNode('input',{'type': 'checkbox','checked': (todo.complete),'mx5-change': $viewId+'_k9({index:'+(todoIndex)+'})',},1,$special_2),$createVNode(0,(todo.task))];;$$_class='rd-g9 rd-ha rd-g8 rd-g6';if(todo.complete){;$$_class+=' rd-hX rd-ki';};$vnode_4=[$createVNode('label',{'class': $$_class,},$vnode_5)];$vnode_5=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];$vnode_4.push($createVNode('i',{'class': 'rd-ge rd-h6 rd-hW rd-hw rd-kh','mx5-click': $viewId+'_la({index:'+(todoIndex)+'})',},$vnode_5));$vnode_3.push($createVNode('div',$quick_hJ_2_static_attr,$vnode_4));
}$vnode_2.push($createVNode('div',$quick_hJ_1_static_attr,$vnode_3));
}else{
$vnode_2.push($quick_gQ_static_text||($quick_gQ_static_text=$createVNode(0,'暂无待办事项')));
};$$_class='rd-kc rd-kd rd-gM';if(!props.todos.length){;$$_class+=' rd-hX';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height/scale)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width/scale)+(unit)+';';if(scale!=1){;$$_style+='transform:scale('+(scale)+');transform-origin:0 0;';};$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig rd-iz rd-ka rd-kb','mx5-pointerdown': $viewId+'_kg()','mx5-contextmenu': $viewId+'_kg()','id': 'todo_'+$viewId,'style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            scale: magix_1.State.get('ge') || 1
        });
    },
    '_k8'() {
        let todoNode = node(`todo_${this.id}`);
        if (todoNode) {
            let childNodes = todoNode.childNodes;
            let scale = magix_1.State.get('ge') || 1;
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
            props.height = const_1['ge'](h);
            console.log(h);
            this.digest({
                props
            });
        }
    },
    async '_l_<keydown>'(e) {
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
            this['_k8']();
        }
    },
    async '_la<click>'(e) {
        let { index } = e.params;
        let props = this.get('props');
        props.todos.splice(index, 1);
        await this.digest({
            props
        });
        this['_k8']();
    },
    '_k9<change>'(e) {
        let { index } = e.params;
        let props = this.get('props');
        let todo = props.todos[index];
        todo.complete = e.eventTarget.checked;
        this.digest({
            props
        });
    },
    '_kg<pointerdown,contextmenu>'(e) {
        if (e['_g8'])
            return;
        e['_g8'] = 1;
    }
});

});