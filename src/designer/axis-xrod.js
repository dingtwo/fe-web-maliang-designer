/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/55",["51","./53"],(require,exports,module)=>{

/*
    author:https://github.com/xinglie
*/
/**
 * 显示x标尺的view
 */


let magix_1 = require("51");
let const_1 = require("./53");
let { View, State } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0=[],
{
	width,
	step,
	xStart,
	round,
	scale,
	enlarge,
	space,
	hbar,
	barColor,
	toUnit,
	bar,
	xEnd,
	x,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_1=[];let temp;;
for(let i=step;i<xStart;i+=step){
temp=round(i/scale*enlarge);
if(temp%(space*enlarge)===0){
$vnode_1.push($createVNode('rect',{'width': 1,'height': (hbar),'x': (xStart-i),'y': (19-hbar),'style': 'fill:'+(barColor),},1));$vnode_2=[$createVNode(0,(-toUnit(temp/enlarge)))];$vnode_1.push($createVNode('text',{'x': (xStart-i+2),'y': 14,'class': 'rd-h5 rd-hY',},$vnode_2));
}else{
$vnode_1.push($createVNode('rect',{'width': 1,'height': (bar),'x': (xStart-i),'y': (19-bar),'style': 'fill:'+(barColor),},1));
}
}
for(let i=0;i<xEnd;i+=step){
temp=round(i/scale*enlarge);
if(temp%(space*enlarge)===0){
$vnode_1.push($createVNode('rect',{'width': 1,'height': (hbar),'x': (xStart+i),'y': (19-hbar),'style': 'fill:'+(barColor),},1));$vnode_2=[$createVNode(0,(toUnit(temp/enlarge)))];$vnode_1.push($createVNode('text',{'x': (xStart+i+2),'y': 14,'class': 'rd-h5 rd-hY',},$vnode_2));
}else{
$vnode_1.push($createVNode('rect',{'width': 1,'height': (bar),'x': (xStart+i),'y': (19-bar),'style': 'fill:'+(barColor),},1));
}
}$vnode_0.push($createVNode('svg',{'class': 'rd-gV rd-hx','xmlns': 'http://www.w3.org/2000/svg','viewBox': '0 0 '+(width)+' 19','style': 'width:'+(width)+'px;height:19px',},$vnode_1));
if(x){

for(let $q_c_fpmuauu=x.length,$q_key_omrrnmf=0;$q_key_omrrnmf<$q_c_fpmuauu;$q_key_omrrnmf+=1){
let t=x[$q_key_omrrnmf];
$vnode_0.push($createVNode('div',{'class': 'rd-gV rd-ho rd-iS rd-id','style': 'left:'+(t[0]+xStart)+'px;width:'+(t[1]-t[0])+'px',}));
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            enlarge: 10000,
            round: Math.round,
            toUnit: v => {
                return const_1['ge'](v).toFixed(this['_gk']);
            },
        });
        let updateShadow = e => {
            this.digest({ x: e.x });
        };
        State.on('ge', updateShadow);
        this.on('destroy', () => {
            State.off('ge', updateShadow);
        });
    },
    assign(data) {
        this['_gk'] = data.decimals;
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});