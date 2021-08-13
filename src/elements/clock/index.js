/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("61/clock/index",["5c","../../5j/5m/index"],(require,exports,module)=>{
let $quick_mC_0_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let index_1 = require("../../5j/5m/index");
let { View, applyStyle, mark, node, State } = magix_1;
applyStyle("rd-ma",".rd-pp{border-radius:50%}.rd-pq{border-radius:1px;height:2px;left:calc(50% - 15px);top:calc(50% - 1px);transform-origin:15px center;width:calc(50% + 3px)}.rd-pr{border-radius:2px;height:4px;left:calc(50% - 12px);top:calc(50% - 2px);transform-origin:12px center;width:calc(50% - 15px)}.rd-ps{border-radius:3px;left:calc(50% - 10px);transform-origin:10px center;width:calc(50% - 25px)}.rd-pt,.rd-ps{height:6px;top:calc(50% - 3px)}.rd-pt{background:#fff6;border-radius:50%;box-shadow:0 0 0 2px #0006;left:calc(50% - 3px);width:6px}.rd-pu,.rd-pv,.rd-pw,.rd-px,.rd-py,.rd-pz{border-left:4px solid;border-right:4px solid;height:4px;left:4px;top:calc(50% - 2px);width:calc(100% - 8px)}.rd-pv{transform:rotate(30deg)}.rd-pw{transform:rotate(60deg)}.rd-px{transform:rotate(90deg)}.rd-py{transform:rotate(120deg)}.rd-pz{transform:rotate(150deg)}");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
{
	props,
	unit,
	scale,}=$dataFromView,
$$_style,
$vnode_1;
$vnode_1=[$createVNode('div',{'class': 'rd-mJ rd-pu','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-mJ rd-pv','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-mJ rd-pw','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-mJ rd-px','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-mJ rd-py','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-mJ rd-pz','style': 'border-color:'+(props.markColor),}),$createVNode('div',{'class': 'rd-mJ rd-ps','id': '_rd_h_'+$viewId,'style': 'background-color:'+(props.handleColor),}),$createVNode('div',{'class': 'rd-mJ rd-pr','id': '_rd_m_'+$viewId,'style': 'background-color:'+(props.handleColor),}),$createVNode('div',{'class': 'rd-mJ rd-pq','id': '_rd_s_'+$viewId,'style': 'background-color:'+(props.handleColor),})];
if($quick_mC_0_static_node){
$vnode_1.push($quick_mC_0_static_node);
}else{
$vnode_1.push($quick_mC_0_static_node=$createVNode('div',{'_': 'i!','class': 'rd-mJ rd-pt',}));
}
;$$_style='left:'+(props.x)+(unit)+';top:'+(props.y)+(unit)+';height:'+(props.height/scale)+(unit)+';opacity:'+(props.alpha)+';width:'+(props.width/scale)+(unit)+';background-color:'+(props.dialColor)+';';if(scale!=1){;$$_style+='transform:scale('+(scale)+');transform-origin:0 0;';};$vnode_0=[$createVNode('div',{'class': 'rd-mJ rd-n5 rd-pp','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let renderMark = mark(this, '_mh');
        await this.digest({
            scale: State.get('l3') || 1
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
            index_1['_mr'](32, work);
            this.on('destroy', () => {
                index_1['_mq'](work);
            });
        }
    }
});

});