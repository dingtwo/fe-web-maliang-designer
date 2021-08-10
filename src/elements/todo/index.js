/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/todo/index",["4e","../../4d/4g"],(require,exports,module)=>{
let $quick_dE_static_text;
let $quick_eg_static_text;
let $quick_f__0_static_attr={'class': 'rd-hD rd-hF',};
let $quick_f__1_static_attr={'class': 'rd-hB',};
let $quick_f__2_static_attr={'class': 'rd-eB rd-ez rd-hF rd-hH',};
let $special_2={'checked':'checked',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let { View, applyStyle, node } = magix_1;
applyStyle("rd-dS",".rd-hB{border:1px solid #ccc9;border-radius:2px}.rd-hC{background:#eee9}.rd-hD{padding:4px}.rd-hE{min-height:40px}.rd-hF{border-bottom:1px solid #ccc9}.rd-hG{height:26px}.rd-hH{height:24px;line-height:24px;padding:0 4px}.rd-hI{display:none}.rd-hH:hover{background:#eee3}.rd-hH:hover .rd-hI{display:block}.rd-hJ{text-decoration:line-through}");
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
$vnode_2=[$createVNode('input',{'class': 'rd-dG rd-dH rd-ed rd-hG','placeholder': '准备做什么?回车添加待办事项','mx5-keydown': $viewId+'_ix()',},1)];$vnode_1=[$createVNode('div',$quick_f__0_static_attr,$vnode_2)];$vnode_2=[];
if(props.todos.length){
$vnode_3=[];
for(let $q_a_ogpylqppi=props.todos,$q_c_fwbmgvounc=$q_a_ogpylqppi.length,todoIndex=0;todoIndex<$q_c_fwbmgvounc;todoIndex+=1){
let todo=$q_a_ogpylqppi[todoIndex];
$vnode_5=[$createVNode('input',{'type': 'checkbox','checked': (todo.complete),'mx5-change': $viewId+'_iw({index:'+(todoIndex)+'})',},1,$special_2),$createVNode(0,(todo.task))];;$$_class='rd-ez rd-eB rd-ey rd-ew';if(todo.complete){;$$_class+=' rd-fn rd-hJ';};$vnode_4=[$createVNode('label',{'class': $$_class,},$vnode_5)];$vnode_5=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];$vnode_4.push($createVNode('i',{'class': 'rd-dF rd-eX rd-fm rd-fw rd-hI','mx5-click': $viewId+'_iy({index:'+(todoIndex)+'})',},$vnode_5));$vnode_3.push($createVNode('div',$quick_f__2_static_attr,$vnode_4));
}$vnode_2.push($createVNode('div',$quick_f__1_static_attr,$vnode_3));
}else{
$vnode_2.push($quick_eg_static_text||($quick_eg_static_text=$createVNode(0,'暂无待办事项')));
};$$_class='rd-hD rd-hE rd-ec';if(!props.todos.length){;$$_class+=' rd-fn';};$vnode_1.push($createVNode('div',{'class': $$_class,},$vnode_2));;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height/scale)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width/scale)+(unit)+';';if(scale!=1){;$$_style+='transform:scale('+(scale)+');transform-origin:0 0;';};$vnode_0=[$createVNode('div',{'class': 'rd-el rd-f0 rd-fH rd-hB rd-hC','mx5-pointerdown': $viewId+'_hE()','mx5-contextmenu': $viewId+'_hE()','id': 'todo_'+$viewId,'style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    render() {
        this.digest({
            scale: magix_1.State.get('dF') || 1
        });
    },
    '_iv'() {
        let todoNode = node(`todo_${this.id}`);
        if (todoNode) {
            let childNodes = todoNode.childNodes;
            let scale = magix_1.State.get('dF') || 1;
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
            props.height = const_1['dF'](h);
            console.log(h);
            this.digest({
                props
            });
        }
    },
    async '_ix<keydown>'(e) {
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
            this['_iv']();
        }
    },
    async '_iy<click>'(e) {
        let { index } = e.params;
        let props = this.get('props');
        props.todos.splice(index, 1);
        await this.digest({
            props
        });
        this['_iv']();
    },
    '_iw<change>'(e) {
        let { index } = e.params;
        let props = this.get('props');
        let todo = props.todos[index];
        todo.complete = e.eventTarget.checked;
        this.digest({
            props
        });
    },
    '_hE<pointerdown,contextmenu>'(e) {
        if (e['_ey'])
            return;
        e['_ey'] = 1;
    }
});

});