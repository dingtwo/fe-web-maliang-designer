/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5m/clock/index",["51","../../58/5b/index"],(require,exports,module)=>{
let $quick_gO_0_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../../58/5b/index");
let { View, applyStyle, mark, node, State } = magix_1;
applyStyle("rd-gm",".rd-jB{border-radius:50%}.rd-jC{border-radius:1px;height:2px;left:calc(50% - 15px);top:calc(50% - 1px);transform-origin:15px center;width:calc(50% + 3px)}.rd-jD{border-radius:2px;height:4px;left:calc(50% - 12px);top:calc(50% - 2px);transform-origin:12px center;width:calc(50% - 15px)}.rd-jE{border-radius:3px;left:calc(50% - 10px);transform-origin:10px center;width:calc(50% - 25px)}.rd-jF,.rd-jE{height:6px;top:calc(50% - 3px)}.rd-jF{background:#fff6;border-radius:50%;box-shadow:0 0 0 2px #0006;left:calc(50% - 3px);width:6px}.rd-jG,.rd-jH,.rd-jI,.rd-jJ,.rd-jK,.rd-jL{border-left:4px solid;border-right:4px solid;height:4px;left:4px;top:calc(50% - 2px);width:calc(100% - 8px)}.rd-jH{transform:rotate(30deg)}.rd-jI{transform:rotate(60deg)}.rd-jJ{transform:rotate(90deg)}.rd-jK{transform:rotate(120deg)}.rd-jL{transform:rotate(150deg)}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	scale,}=$dataFromView,
$$_style,
$vnode_1;
$vnode_1=[$createVNode('div',{'class': 'rd-gV rd-jG','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-gV rd-jH','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-gV rd-jI','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-gV rd-jJ','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-gV rd-jK','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-gV rd-jL','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-gV rd-jE','id': '_rd_h_'+$viewId,'style': 'background-color:'+(props.handleColor),}),$createVNode('div',{'class': 'rd-gV rd-jD','id': '_rd_m_'+$viewId,'style': 'background-color:'+(props.handleColor),}),$createVNode('div',{'class': 'rd-gV rd-jC','id': '_rd_s_'+$viewId,'style': 'background-color:'+(props.handleColor),})];
if($quick_gO_0_static_node){
$vnode_1.push($quick_gO_0_static_node);
}else{
$vnode_1.push($quick_gO_0_static_node=$createVNode('div',{'_': 'eD','class': 'rd-gV rd-jF',}));
}
;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height/scale)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width/scale)+(unit)+';background-color:'+(props.dialColor)+';';if(scale!=1){;$$_style+='transform:scale('+(scale)+');transform-origin:0 0;';};$vnode_0=[$createVNode('div',{'class': 'rd-gV rd-ig rd-jB','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let renderMark = mark(this, '_gt');
        await this.digest({
            scale: State.get('ge') || 1
        });
        if (renderMark()) {
            let second = node('_rd_s_' + this.id);
            let minute = node('_rd_m_' + this.id);
            let hour = node('_rd_h_' + this.id);
            let work = () => {
                let now = new Date();
                let seconds = (now.getSeconds() * 1000 + now.getMilliseconds()) / 1000;
                let minutes = (now.getMinutes() * 60 + seconds) / 60;
                let hours = (now.getHours() * 60 + minutes) / 60;
                second.style.transform = `rotate(${seconds * 6 - 90}deg)`;
                minute.style.transform = `rotate(${minutes * 6 - 90}deg)`;
                hour.style.transform = `rotate(${hours * 30 - 90}deg)`;
            };
            index_1['_gD'](32, work);
            this.on('destroy', () => {
                index_1['_gC'](work);
            });
        }
    }
});

});