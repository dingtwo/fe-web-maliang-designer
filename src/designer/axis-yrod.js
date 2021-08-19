/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/axis-yrod",["magix5","./const"],(require,exports,module)=>{

/*
    author:https://github.com/xinglie
*/
/**
 * 显示y标尺的view
 */


let magix_1 = require("magix5");
let const_1 = require("./const");
let { View, State } = magix_1;
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0=[],
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
$vnode_1=[];($__line=2,$__art='{{set temp}}','');$__ctrl='<%let temp;%>';let temp;;$__line=3;$__art="{{for (let i=step;i<yStart;i+=step)}}";$__ctrl="for(let i=step;i<yStart;i+=step){";
for(let i=step;i<yStart;i+=step){
($__line=4,$__art='{{temp=round(i/scale*enlarge)}}','');$__ctrl='<%temp=round(i/scale*enlarge)%>';temp=round(i/scale*enlarge);$__line=5;$__art="{{if temp%(space*enlarge)===0}}";$__ctrl="if(temp%(space*enlarge)===0){";
if(temp%(space*enlarge)===0){
$vnode_1.push($createVNode('rect',{'width': ($__line=6,$__art='{{=hbar}}',$__ctrl='<%=hbar%>',(hbar)),'height': 1,'x': ($__line=6,$__art='{{=20-hbar}}',$__ctrl='<%=20-hbar%>',(20-hbar)),'y': ($__line=6,$__art='{{=yStart-i}}',$__ctrl='<%=yStart-i%>',(yStart-i)),'style': 'fill:'+($__line=6,$__art='{{=barColor}}',$__ctrl='<%=barColor%>',(barColor)),},1));$vnode_2=[$createVNode(0,($__line=7,$__art='{{=-toUnit(temp/enlarge)}}',$__ctrl='<%=-toUnit(temp/enlarge)%>',(-toUnit(temp/enlarge))))];$vnode_1.push($createVNode('text',{'x': 14,'y': ($__line=7,$__art='{{=yStart-i+2}}',$__ctrl='<%=yStart-i+2%>',(yStart-i+2)),'class': 'rd-_assets_index_less_-color-fill-999 rd-_assets_index_less_-fontsize-10','transform': 'rotate(-90,13,'+($__line=7,$__art='{{=yStart-i}}',$__ctrl='<%=yStart-i%>',(yStart-i))+')',},$vnode_2));
}else{
$vnode_1.push($createVNode('rect',{'width': ($__line=9,$__art='{{=bar}}',$__ctrl='<%=bar%>',(bar)),'height': 1,'x': ($__line=9,$__art='{{=20-bar}}',$__ctrl='<%=20-bar%>',(20-bar)),'y': ($__line=9,$__art='{{=yStart-i}}',$__ctrl='<%=yStart-i%>',(yStart-i)),'style': 'fill:'+($__line=9,$__art='{{=barColor}}',$__ctrl='<%=barColor%>',(barColor)),},1));
}
}$__line=12;$__art="{{for (let i=0;i<yEnd;i+=step)}}";$__ctrl="for(let i=0;i<yEnd;i+=step){";
for(let i=0;i<yEnd;i+=step){
($__line=13,$__art='{{temp=round(i/scale*enlarge)}}','');$__ctrl='<%temp=round(i/scale*enlarge)%>';temp=round(i/scale*enlarge);$__line=14;$__art="{{if temp%(space*enlarge)===0}}";$__ctrl="if(temp%(space*enlarge)===0){";
if(temp%(space*enlarge)===0){
$vnode_1.push($createVNode('rect',{'width': ($__line=15,$__art='{{=hbar}}',$__ctrl='<%=hbar%>',(hbar)),'height': 1,'x': ($__line=15,$__art='{{=20-hbar}}',$__ctrl='<%=20-hbar%>',(20-hbar)),'y': ($__line=15,$__art='{{=yStart+i}}',$__ctrl='<%=yStart+i%>',(yStart+i)),'style': 'fill:'+($__line=15,$__art='{{=barColor}}',$__ctrl='<%=barColor%>',(barColor)),},1));$vnode_2=[$createVNode(0,($__line=16,$__art='{{=toUnit(temp/enlarge)}}',$__ctrl='<%=toUnit(temp/enlarge)%>',(toUnit(temp/enlarge))))];$vnode_1.push($createVNode('text',{'x': 14,'y': ($__line=16,$__art='{{=yStart+i}}',$__ctrl='<%=yStart+i%>',(yStart+i)),'class': 'rd-_assets_index_less_-color-fill-999 rd-_assets_index_less_-fontsize-10','transform': 'rotate(-90,13,'+($__line=16,$__art='{{=yStart+i-2}}',$__ctrl='<%=yStart+i-2%>',(yStart+i-2))+')',},$vnode_2));
}else{
$vnode_1.push($createVNode('rect',{'width': ($__line=18,$__art='{{=bar}}',$__ctrl='<%=bar%>',(bar)),'height': 1,'x': ($__line=18,$__art='{{=20-bar}}',$__ctrl='<%=20-bar%>',(20-bar)),'y': ($__line=18,$__art='{{=yStart+i}}',$__ctrl='<%=yStart+i%>',(yStart+i)),'style': 'fill:'+($__line=18,$__art='{{=barColor}}',$__ctrl='<%=barColor%>',(barColor)),},1));
}
}$vnode_0.push($createVNode('svg',{'class': 'rd-_assets_index_less_-cursor-default rd-_assets_index_less_-pa','xmlns': 'http://www.w3.org/2000/svg','viewBox': '0 0 19 '+($__line=1,$__art='{{=height}}',$__ctrl='<%=height%>',(height)),'style': 'width:19px;height:'+($__line=1,$__art='{{=height}}',$__ctrl='<%=height%>',(height))+'px',},$vnode_1));$__line=22;$__art="{{if y}}";$__ctrl="if(y){";
if(y){
$__line=23;$__art="{{each y as t}}";$__ctrl="for(let $q_c_ssiknnu=y.length,$q_key_czuyblm=0;$q_key_czuyblm<$q_c_ssiknnu;$q_key_czuyblm++){let t=y[$q_key_czuyblm];";
for(let $q_c_ssiknnu=y.length,$q_key_czuyblm=0;$q_key_czuyblm<$q_c_ssiknnu;$q_key_czuyblm+=1){
let t=y[$q_key_czuyblm];
$vnode_0.push($createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-right-0 rd-_assets_index_less_-width-4 rd-_designer_axis_less_-shadow','style': 'top:'+($__line=24,$__art='{{=t[0]+yStart}}',$__ctrl='<%=t[0]+yStart%>',(t[0]+yStart))+'px;height:'+($__line=24,$__art='{{=t[1]-t[0]}}',$__ctrl='<%=t[1]-t[0]%>',(t[1]-t[0]))+'px',}));
}
} 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:designer/axis-yrod.html'; throw msg; }  } ,
    init() {
        this.set({
            enlarge: 10000,
            round: Math.round,
            toUnit: v => {
                return const_1['@:{const#to.unit~rs}'](v).toFixed(this['@:{decimals~rs}']);
            },
        });
        let updateShadow = e => {
            this.digest({ y: e.y });
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