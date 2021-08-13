/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/todo/index",["5c","../../5b/5e"],(require,exports,module)=>{
let $quick_l2_static_text;
let $quick_mE_static_text;
let $quick_nx_0_static_attr={'class': 'rd-p1 rd-p3',};
let $quick_nx_1_static_attr={'class': 'rd-pZ',};
let $quick_nx_2_static_attr={'class': 'rd-mX rd-mZ rd-p3 rd-p5',};
let $special_2={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let { View, applyStyle, node } = magix_1;
applyStyle("rd-mf",".rd-pZ{border:1px solid #ccc9;border-radius:2px}.rd-p0{background:#eee9}.rd-p1{padding:4px}.rd-p2{min-height:40px}.rd-p3{border-bottom:1px solid #ccc9}.rd-p4{height:26px}.rd-p5{height:24px;line-height:24px;padding:0 4px}.rd-p6{display:none}.rd-p5:hover{background:#eee3}.rd-p5:hover .rd-p6{display:block}.rd-p7{text-decoration:line-through}");
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
$vnode_2=[$createVNode('input',{'class': 'rd-l4 rd-l5 rd-mB rd-p4','placeholder': '准备做什么?回车添加待办事项','mx5-keydown': $viewId+'_qV()',},1)];$vnode_1=[$createVNode('div',$quick_nx_0_static_attr,$vnode_2)];$vnode_2=[];
if(props.todos.length){
$vnode_3=[];
for(let $q_a_sradwwfub=props.todos,$q_c_zhjmbjow=$q_a_sradwwfub.length,todoIndex=0;todoIndex<$q_c_zhjmbjow;todoIndex+=1){
let todo=$q_a_sradwwfub[todoIndex];
$vnode_5=[$createVNode('input',{'type': 'checkbox','checked': (todo.complete),'mx5-change': $viewId+'_qU({index:'+(todoIndex)+'})',},1,$special_2),$createVNode(0,(todo.task))];;$$_class='rd-mX rd-mZ rd-mW rd-mU';if(todo.complete){;$$_class+=' rd-nL rd-p7';};$vnode_4=[$createVNode('label',{'class': $$_class,},$vnode_5)];$vnode_5=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];$vnode_4.push($createVNode('i',{'class': 'rd-l3 rd-nK rd-nU rd-nk rd-p6','mx5-click': $viewId+'_qW({index:'+(todoIndex)+'})',},$vnode_5));$vnode_3.push($createVNode('div',$quick_nx_2_static_attr,$vnode_4));
}$vnode_2.push($createVNode('div',$quick_nx_1_static_attr,$vnode_3));
}else{
$vnode_2.push($quick_mE_static_text||($quick_mE_static_text=$createVNode(0,'暂无待办事项')));
};$$_class='rd-p1 rd-p2 rd-mA';if(!props.todos.length){;$$_class+=' rd-nL';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height/scale)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width/scale)+(unit)+';';if(scale!=1){;$$_style+='transform:scale('+(scale)+');transform-origin:0 0;';};$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5 rd-on rd-p0 rd-pZ','mx5-pointerdown': $viewId+'_p2()','mx5-contextmenu': $viewId+'_p2()','id': 'todo_'+$viewId,'style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            scale: magix_1.State.get('l3') || 1
        });
    },
    '_qT'() {
        let todoNode = node(`todo_${this.id}`);
        if (todoNode) {
            let childNodes = todoNode.childNodes;
            let scale = magix_1.State.get('l3') || 1;
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
            props.height = const_1['l3'](h);
            console.log(h);
            this.digest({
                props
            });
        }
    },
    async '_qV<keydown>'(e) {
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
            this['_qT']();
        }
    },
    async '_qW<click>'(e) {
        let { index } = e.params;
        let props = this.get('props');
        props.todos.splice(index, 1);
        await this.digest({
            props
        });
        this['_qT']();
    },
    '_qU<change>'(e) {
        let { index } = e.params;
        let props = this.get('props');
        let todo = props.todos[index];
        todo.complete = e.eventTarget.checked;
        this.digest({
            props
        });
    },
    '_p2<pointerdown,contextmenu>'(e) {
        if (e['_mW'])
            return;
        e['_mW'] = 1;
    }
});

});