/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/56",["51","./53"],(require,exports,module)=>{

/*
    author:https://github.com/xinglie
*/
/**
 * 显示y标尺的view
 */


let magix_1 = require("51");
let const_1 = require("./53");
let { View, State } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0=[],
{
	height,
	step,
	yStart,
	round,
	scale,
	enlarge,
	space,
	hbar,
	barColor,
	toUnit,
	bar,
	yEnd,
	y,}=$dataFromView,
$vnode_2,
$vnode_1;
$vnode_1=[];let temp;;
for(let i=step;i<yStart;i+=step){
temp=round(i/scale*enlarge);
if(temp%(space*enlarge)===0){
$vnode_1.push($createVNode('rect',{'width': (hbar),'height': 1,'x': (20-hbar),'y': (yStart-i),'style': 'fill:'+(barColor),},1));$vnode_2=[$createVNode(0,(-toUnit(temp/enlarge)))];$vnode_1.push($createVNode('text',{'x': 14,'y': (yStart-i+2),'class': 'rd-h5 rd-hY','transform': 'rotate(-90,13,'+(yStart-i)+')',},$vnode_2));
}else{
$vnode_1.push($createVNode('rect',{'width': (bar),'height': 1,'x': (20-bar),'y': (yStart-i),'style': 'fill:'+(barColor),},1));
}
}
for(let i=0;i<yEnd;i+=step){
temp=round(i/scale*enlarge);
if(temp%(space*enlarge)===0){
$vnode_1.push($createVNode('rect',{'width': (hbar),'height': 1,'x': (20-hbar),'y': (yStart+i),'style': 'fill:'+(barColor),},1));$vnode_2=[$createVNode(0,(toUnit(temp/enlarge)))];$vnode_1.push($createVNode('text',{'x': 14,'y': (yStart+i),'class': 'rd-h5 rd-hY','transform': 'rotate(-90,13,'+(yStart+i-2)+')',},$vnode_2));
}else{
$vnode_1.push($createVNode('rect',{'width': (bar),'height': 1,'x': (20-bar),'y': (yStart+i),'style': 'fill:'+(barColor),},1));
}
}$vnode_0.push($createVNode('svg',{'class': 'rd-gV rd-hx','xmlns': 'http://www.w3.org/2000/svg','viewBox': '0 0 19 '+(height),'style': 'width:19px;height:'+(height)+'px',},$vnode_1));
if(y){

for(let $q_c_hayeoraaa=y.length,$q_key_xurknojq=0;$q_key_xurknojq<$q_c_hayeoraaa;$q_key_xurknojq+=1){
let t=y[$q_key_xurknojq];
$vnode_0.push($createVNode('div',{'class': 'rd-gV rd-hq rd-iS rd-ia','style': 'top:'+(t[0]+yStart)+'px;height:'+(t[1]-t[0])+'px',}));
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
            this.digest({ y: e.y });
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