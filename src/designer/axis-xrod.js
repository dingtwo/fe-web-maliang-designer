/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/4i",["4e","./4g"],(require,exports,module)=>{

/*
    author:https://github.com/xinglie
*/
/**
 * 显示x标尺的view
 */


let magix_1 = require("4e");
let const_1 = require("./4g");
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
$vnode_1.push($createVNode('rect',{'width': 1,'height': (hbar),'x': (xStart-i),'y': (19-hbar),'style': 'fill:'+(barColor),},1));$vnode_2=[$createVNode(0,(-toUnit(temp/enlarge)))];$vnode_1.push($createVNode('text',{'x': (xStart-i+2),'y': 14,'class': 'rd-fo rd-fv',},$vnode_2));
}else{
$vnode_1.push($createVNode('rect',{'width': 1,'height': (bar),'x': (xStart-i),'y': (19-bar),'style': 'fill:'+(barColor),},1));
}
}
for(let i=0;i<xEnd;i+=step){
temp=round(i/scale*enlarge);
if(temp%(space*enlarge)===0){
$vnode_1.push($createVNode('rect',{'width': 1,'height': (hbar),'x': (xStart+i),'y': (19-hbar),'style': 'fill:'+(barColor),},1));$vnode_2=[$createVNode(0,(toUnit(temp/enlarge)))];$vnode_1.push($createVNode('text',{'x': (xStart+i+2),'y': 14,'class': 'rd-fo rd-fv',},$vnode_2));
}else{
$vnode_1.push($createVNode('rect',{'width': 1,'height': (bar),'x': (xStart+i),'y': (19-bar),'style': 'fill:'+(barColor),},1));
}
}$vnode_0.push($createVNode('svg',{'class': 'rd-eY rd-el','xmlns': 'http://www.w3.org/2000/svg','viewBox': '0 0 '+(width)+' 19','style': 'width:'+(width)+'px;height:19px',},$vnode_1));
if(x){

for(let $q_c_vhjopjweda=x.length,$q_key_hyekhxfiddi=0;$q_key_hyekhxfiddi<$q_c_vhjopjweda;$q_key_hyekhxfiddi+=1){
let t=x[$q_key_hyekhxfiddi];
$vnode_0.push($createVNode('div',{'class': 'rd-eP rd-el rd-fE rd-gi','style': 'left:'+(t[0]+xStart)+'px;width:'+(t[1]-t[0])+'px',}));
}
} 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        this.set({
            enlarge: 10000,
            round: Math.round,
            toUnit: v => {
                return const_1['dF'](v).toFixed(this['_dL']);
            },
        });
        let updateShadow = e => {
            this.digest({ x: e.x });
        };
        State.on('dF', updateShadow);
        this.on('destroy', () => {
            State.off('dF', updateShadow);
        });
    },
    assign(data) {
        this['_dL'] = data.decimals;
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});