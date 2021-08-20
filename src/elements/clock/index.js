/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/clock/index",["magix5","../../gallery/mx-runner/index"],(require,exports,module)=>{
let $quick_dr_0_static_node;

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let index_1 = require("../../gallery/mx-runner/index");
let { View, applyStyle, mark, node, State } = magix_1;
applyStyle("rd-_elements_clock_index_less_",".rd-_elements_clock_index_less_-clock {\nborder-radius:50%;\n}\n.rd-_elements_clock_index_less_-second {\nheight:2px;\nborder-radius:1px;\nwidth:calc(50% + 3px);\ntop:calc(50% - 1px);\nleft:calc(50% - 15px);\ntransform-origin:15px center;\n}\n.rd-_elements_clock_index_less_-minute {\nheight:4px;\nborder-radius:2px;\nwidth:calc(50% - 15px);\ntop:calc(50% - 2px);\nleft:calc(50% - 12px);\ntransform-origin:12px center;\n}\n.rd-_elements_clock_index_less_-hour {\nheight:6px;\nborder-radius:3px;\nwidth:calc(50% - 25px);\ntop:calc(50% - 3px);\nleft:calc(50% - 10px);\ntransform-origin:10px center;\n}\n.rd-_elements_clock_index_less_-dot {\nheight:6px;\nbackground:#fff6;\nbox-shadow:0 0 0 2px #0006;\nborder-radius:50%;\nwidth:6px;\ntop:calc(50% - 3px);\nleft:calc(50% - 3px);\n}\n.rd-_elements_clock_index_less_-r0,\n.rd-_elements_clock_index_less_-r1,\n.rd-_elements_clock_index_less_-r2,\n.rd-_elements_clock_index_less_-r3,\n.rd-_elements_clock_index_less_-r4,\n.rd-_elements_clock_index_less_-r5 {\nleft:4px;\ntop:calc(50% - 2px);\nheight:4px;\nwidth:calc(100% - 8px);\nborder-left:4px solid;\nborder-right:4px solid;\n}\n.rd-_elements_clock_index_less_-r1 {\ntransform:rotate(30deg);\n}\n.rd-_elements_clock_index_less_-r2 {\ntransform:rotate(60deg);\n}\n.rd-_elements_clock_index_less_-r3 {\ntransform:rotate(90deg);\n}\n.rd-_elements_clock_index_less_-r4 {\ntransform:rotate(120deg);\n}\n.rd-_elements_clock_index_less_-r5 {\ntransform:rotate(150deg);\n}\n");
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	props,
	unit,
	scale,}=$dataFromView,
$$_style,
$vnode_1;
$vnode_1=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_elements_clock_index_less_-r0','style': 'border-color:'+($__line=2,$__art='{{=props.markColor}}',$__ctrl='<%=props.markColor%>',(props.markColor)),}),$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_elements_clock_index_less_-r1','style': 'border-color:'+($__line=3,$__art='{{=props.markColor}}',$__ctrl='<%=props.markColor%>',(props.markColor)),}),$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_elements_clock_index_less_-r2','style': 'border-color:'+($__line=4,$__art='{{=props.markColor}}',$__ctrl='<%=props.markColor%>',(props.markColor)),}),$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_elements_clock_index_less_-r3','style': 'border-color:'+($__line=5,$__art='{{=props.markColor}}',$__ctrl='<%=props.markColor%>',(props.markColor)),}),$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_elements_clock_index_less_-r4','style': 'border-color:'+($__line=6,$__art='{{=props.markColor}}',$__ctrl='<%=props.markColor%>',(props.markColor)),}),$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_elements_clock_index_less_-r5','style': 'border-color:'+($__line=7,$__art='{{=props.markColor}}',$__ctrl='<%=props.markColor%>',(props.markColor)),}),$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_elements_clock_index_less_-hour','id': '_rd_h_'+($__line=8,$__art='{{=$viewId}}','')+$viewId,'style': 'background-color:'+($__line=8,$__art='{{=props.handleColor}}',$__ctrl='<%=props.handleColor%>',(props.handleColor)),}),$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_elements_clock_index_less_-minute','id': '_rd_m_'+($__line=9,$__art='{{=$viewId}}','')+$viewId,'style': 'background-color:'+($__line=9,$__art='{{=props.handleColor}}',$__ctrl='<%=props.handleColor%>',(props.handleColor)),}),$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_elements_clock_index_less_-second','id': '_rd_s_'+($__line=10,$__art='{{=$viewId}}','')+$viewId,'style': 'background-color:'+($__line=10,$__art='{{=props.handleColor}}',$__ctrl='<%=props.handleColor%>',(props.handleColor)),})];
if($quick_dr_0_static_node){
$vnode_1.push($quick_dr_0_static_node);
}else{
$vnode_1.push($quick_dr_0_static_node=$createVNode('div',{'_': 'b^','class': 'rd-_assets_index_less_-pa rd-_elements_clock_index_less_-dot',}));
}
;$$_style='left:'+($__line=1,$__art='{{=props.x}}',$__ctrl='<%=props.x%>',(props.x))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=1,$__art='{{=props.y}}',$__ctrl='<%=props.y%>',(props.y))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=1,$__art='{{=props.height/scale}}',$__ctrl='<%=props.height/scale%>',(props.height/scale))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';opacity:'+($__line=1,$__art='{{=props.alpha}}',$__ctrl='<%=props.alpha%>',(props.alpha))+';width:'+($__line=1,$__art='{{=props.width/scale}}',$__ctrl='<%=props.width/scale%>',(props.width/scale))+($__line=1,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';background-color:'+($__line=1,$__art='{{=props.dialColor}}',$__ctrl='<%=props.dialColor%>',(props.dialColor))+';'+($__line=1,$__art='{{if scale!=1}}','');$__ctrl='<%if(scale!=1){%>';if(scale!=1){;$$_style+='transform:scale('+($__line=1,$__art='{{=scale}}',$__ctrl='<%=scale%>',(scale))+');transform-origin:0 0;'+($__line=1,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_0=[$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-z-index-1 rd-_elements_clock_index_less_-clock','style': $$_style,},$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:elements/clock/index.html'; throw msg; }  } ,
    assign(data) {
        this.set(data);
    },
    async render() {
        let renderMark = mark(this, '@:{render~rs}');
        await this.digest({
            scale: State.get('@:{global#stage.scale~rs}') || 1
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
            index_1['@:{task.add~rs}'](32, work);
            this.on('destroy', () => {
                index_1['@:{task.remove~rs}'](work);
            });
        }
    }
});

});