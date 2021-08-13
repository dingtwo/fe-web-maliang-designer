/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/axis-xrod",["magix5","./const"],(require,exports,module)=>{

/*
    author:https://github.com/xinglie
*/
/**
 * 显示x标尺的view
 */


let magix_1 = require("magix5");
let const_1 = require("./const");
let { View, State } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
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
$vnode_1=[];($__line=2,$__art='{{set temp}}','');$__ctrl='<%let temp;%>';let temp;;$__line=3;$__art="{{for (let i=step;i<xStart;i+=step)}}";$__ctrl="for(let i=step;i<xStart;i+=step){";
for(let i=step;i<xStart;i+=step){
($__line=4,$__art='{{temp=round(i/scale*enlarge)}}','');$__ctrl='<%temp=round(i/scale*enlarge)%>';temp=round(i/scale*enlarge);$__line=5;$__art="{{if temp%(space*enlarge)===0}}";$__ctrl="if(temp%(space*enlarge)===0){";
if(temp%(space*enlarge)===0){
$vnode_1.push($createVNode('rect',{'width': 1,'height': ($__line=6,$__art='{{=hbar}}',$__ctrl='<%=hbar%>',(hbar)),'x': ($__line=6,$__art='{{=xStart-i}}',$__ctrl='<%=xStart-i%>',(xStart-i)),'y': ($__line=6,$__art='{{=19-hbar}}',$__ctrl='<%=19-hbar%>',(19-hbar)),'style': 'fill:'+($__line=6,$__art='{{=barColor}}',$__ctrl='<%=barColor%>',(barColor)),},1));$vnode_2=[$createVNode(0,($__line=7,$__art='{{=-toUnit(temp/enlarge)}}',$__ctrl='<%=-toUnit(temp/enlarge)%>',(-toUnit(temp/enlarge))))];$vnode_1.push($createVNode('text',{'x': ($__line=7,$__art='{{=xStart-i+2}}',$__ctrl='<%=xStart-i+2%>',(xStart-i+2)),'y': 14,'class': 'rd-_assets_index_less_-color-fill-999 rd-_assets_index_less_-fontsize-10',},$vnode_2));
}else{
$vnode_1.push($createVNode('rect',{'width': 1,'height': ($__line=9,$__art='{{=bar}}',$__ctrl='<%=bar%>',(bar)),'x': ($__line=9,$__art='{{=xStart-i}}',$__ctrl='<%=xStart-i%>',(xStart-i)),'y': ($__line=9,$__art='{{=19-bar}}',$__ctrl='<%=19-bar%>',(19-bar)),'style': 'fill:'+($__line=9,$__art='{{=barColor}}',$__ctrl='<%=barColor%>',(barColor)),},1));
}
}$__line=12;$__art="{{for (let i=0;i<xEnd;i+=step)}}";$__ctrl="for(let i=0;i<xEnd;i+=step){";
for(let i=0;i<xEnd;i+=step){
($__line=13,$__art='{{temp=round(i/scale*enlarge)}}','');$__ctrl='<%temp=round(i/scale*enlarge)%>';temp=round(i/scale*enlarge);$__line=14;$__art="{{if temp%(space*enlarge)===0}}";$__ctrl="if(temp%(space*enlarge)===0){";
if(temp%(space*enlarge)===0){
$vnode_1.push($createVNode('rect',{'width': 1,'height': ($__line=15,$__art='{{=hbar}}',$__ctrl='<%=hbar%>',(hbar)),'x': ($__line=15,$__art='{{=xStart+i}}',$__ctrl='<%=xStart+i%>',(xStart+i)),'y': ($__line=15,$__art='{{=19-hbar}}',$__ctrl='<%=19-hbar%>',(19-hbar)),'style': 'fill:'+($__line=15,$__art='{{=barColor}}',$__ctrl='<%=barColor%>',(barColor)),},1));$vnode_2=[$createVNode(0,($__line=16,$__art='{{=toUnit(temp/enlarge)}}',$__ctrl='<%=toUnit(temp/enlarge)%>',(toUnit(temp/enlarge))))];$vnode_1.push($createVNode('text',{'x': ($__line=16,$__art='{{=xStart+i+2}}',$__ctrl='<%=xStart+i+2%>',(xStart+i+2)),'y': 14,'class': 'rd-_assets_index_less_-color-fill-999 rd-_assets_index_less_-fontsize-10',},$vnode_2));
}else{
$vnode_1.push($createVNode('rect',{'width': 1,'height': ($__line=18,$__art='{{=bar}}',$__ctrl='<%=bar%>',(bar)),'x': ($__line=18,$__art='{{=xStart+i}}',$__ctrl='<%=xStart+i%>',(xStart+i)),'y': ($__line=18,$__art='{{=19-bar}}',$__ctrl='<%=19-bar%>',(19-bar)),'style': 'fill:'+($__line=18,$__art='{{=barColor}}',$__ctrl='<%=barColor%>',(barColor)),},1));
}
}$vnode_0.push($createVNode('svg',{'class': 'rd-_assets_index_less_-cursor-default rd-_assets_index_less_-pa','xmlns': 'http://www.w3.org/2000/svg','viewBox': '0 0 '+($__line=1,$__art='{{=width}}',$__ctrl='<%=width%>',(width))+' 19','style': 'width:'+($__line=1,$__art='{{=width}}',$__ctrl='<%=width%>',(width))+'px;height:19px',},$vnode_1));$__line=22;$__art="{{if x}}";$__ctrl="if(x){";
if(x){
$__line=23;$__art="{{each x as t}}";$__ctrl="for(let $q_c_ivyza=x.length,$q_key_oqreew=0;$q_key_oqreew<$q_c_ivyza;$q_key_oqreew++){let t=x[$q_key_oqreew];";
for(let $q_c_ivyza=x.length,$q_key_oqreew=0;$q_key_oqreew<$q_c_ivyza;$q_key_oqreew+=1){
let t=x[$q_key_oqreew];
$vnode_0.push($createVNode('div',{'class': 'rd-_assets_index_less_-bottom-0 rd-_assets_index_less_-height-4 rd-_assets_index_less_-pa rd-_designer_axis_less_-shadow','style': 'left:'+($__line=24,$__art='{{=t[0]+xStart}}',$__ctrl='<%=t[0]+xStart%>',(t[0]+xStart))+'px;width:'+($__line=24,$__art='{{=t[1]-t[0]}}',$__ctrl='<%=t[1]-t[0]%>',(t[1]-t[0]))+'px',}));
}
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/axis-xrod.html'; throw msg; }  } ,
    init() {
        this.set({
            enlarge: 10000,
            round: Math.round,
            toUnit: v => {
                return const_1['@:{const#to.unit~rs}'](v).toFixed(this['@:{decimals~rs}']);
            },
        });
        let updateShadow = e => {
            this.digest({ x: e.x });
        };
        State.on('@:{event#stage.axis.shadow.change~rs}', updateShadow);
        this.on('destroy', () => {
            State.off('@:{event#stage.axis.shadow.change~rs}', updateShadow);
        });
    },
    assign(data) {
        this['@:{decimals~rs}'] = data.decimals;
        this.set(data);
    },
    render() {
        this.digest();
    }
});

});