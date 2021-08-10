/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("panels/outline/index",["magix5","../../designer/const","../../gallery/mx-dragdrop/index","../../gallery/mx-pointer/cursor"],(require,exports,module)=>{
let $quick_fV_0_static_attr={'class': 'rd-_assets_index_less_-unselectable rd-_panels_outline_index_less_-overview',};
let $quick_fV_1_static_attr={'class': 'rd-_assets_index_less_-iconfont rd-_panels_outline_index_less_-inner-icon',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("magix5");
let const_1 = require("../../designer/const");
let index_1 = require("../../gallery/mx-dragdrop/index");
let cursor_1 = require("../../gallery/mx-pointer/cursor");
let { State, node, View, applyStyle, mark, attach, detach } = magix_1;
let { min } = Math;
applyStyle("rd-_panels_outline_index_less_","\n.rd-_panels_outline_index_less_-anim {\ntransition:all 0.25s;\n}\n.rd-_panels_outline_index_less_-anim-size {\ntransition:width, height 0.25s;\n}\n.rd-_panels_outline_index_less_-overview {\npadding:2px 0;\n}\n.rd-_panels_outline_index_less_-stage-container {\nbackground:#edeef3;\nbox-shadow:inset 1px 1px 6px 2px #dadada;\n}\n.rd-_panels_outline_index_less_-stage-viewport {\nbox-shadow:inset 0px 0px 1px 1px #47B34E;\ncursor:move;\n}\n.rd-_panels_outline_index_less_-item {\nbackground:#8ed292;\n}\n.rd-_panels_outline_index_less_-inner-icon {\ntransform:scale(0.5);\ncolor:#ffffff;\n}\n.rd-_panels_outline_index_less_-page-line {\nborder-bottom:dotted 1px #c8c8c8;\n}\n");
let OverviewSize = [210, 120];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $__art, $__line, $__ctrl; try { let $temp_var,$vnode_0,
{
	width,
	height,
	centerMargin,
	page,
	pageWidth,
	unit,
	pageHeight,
	canvasMargin,
	elements,
	ratio,
	left,
	top,
	viewportWidth,
	viewportHeight,}=$dataFromView,
$$_class,
$$_style,
$vnode_5,
$vnode_4,
$vnode_3,
$vnode_2,
$vnode_1;
($__line=3,$__art='{{set count=page.pages}}','');$__ctrl='<%let count=page.pages;%>';let count=page.pages;;$vnode_3=[];$__line=5;$__art="{{for (let i=0;i<count;i++)}}";$__ctrl="for(let i=0;i<count;i++){";
for(let i=0;i<count;i++){
;$$_class='rd-_assets_index_less_-pa'+($__line=6,$__art='{{if i<count-1}}','');$__ctrl='<%if(i<count-1){%>';if(i<count-1){;$$_class+=' rd-_panels_outline_index_less_-page-line'+($__line=6,$__art='{{/if}}','');$__ctrl='<%}%>';};$vnode_3.push($createVNode('div',{'style': 'top:'+($__line=6,$__art='{{=pageHeight*i}}',$__ctrl='<%=pageHeight*i%>',(pageHeight*i))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=6,$__art='{{=pageWidth}}',$__ctrl='<%=pageWidth%>',(pageWidth))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=6,$__art='{{=pageHeight}}',$__ctrl='<%=pageHeight%>',(pageHeight))+($__line=6,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit)),'class': $$_class,}));
}$__line=8;$__art="{{each elements as {id:eId,props,type,ctrl}}}";$__ctrl="for(let $q_c_rhrrqljxmo=elements.length,$q_key_eckbne=0;$q_key_eckbne<$q_c_rhrrqljxmo;$q_key_eckbne++){let {id:eId,props:props,type:type,ctrl:ctrl}=elements[$q_key_eckbne];";
for(let $q_c_rhrrqljxmo=elements.length,$q_key_eckbne=0;$q_key_eckbne<$q_c_rhrrqljxmo;$q_key_eckbne+=1){
let {id:eId,props:props,type:type,ctrl:ctrl}=elements[$q_key_eckbne];
($__line=9,$__art='{{set ew=props.width*ratio,\n                      eh=props.height*ratio,\n                      br=props.radius||0}}','');$__ctrl='<%let ew=props.width*ratio,\n                      eh=props.height*ratio,\n                      br=props.radius||0;%>';let ew=props.width*ratio,
                      eh=props.height*ratio,
                      br=props.radius||0;;$__line=12;$__art="{{if type==\\'circle\\'}}";$__ctrl="if(type=='circle'){";
if(type=='circle'){
($__line=13,$__art='{{br=\'50%\'}}','');$__ctrl='<%br=\'50%\'%>';br='50%';
}$vnode_5=[$createVNode(0,($__line=16,$__art='{{=ctrl.icon}}',$__ctrl='<%=ctrl.icon%>',(ctrl.icon)),1)];$vnode_4=[$createVNode('i',$quick_fV_1_static_attr,$vnode_5)];;$$_style='left:'+($__line=15,$__art='{{=props.x*ratio}}',$__ctrl='<%=props.x*ratio%>',(props.x*ratio))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';top:'+($__line=15,$__art='{{=props.y*ratio}}',$__ctrl='<%=props.y*ratio%>',(props.y*ratio))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';width:'+($__line=15,$__art='{{=ew}}',$__ctrl='<%=ew%>',(ew))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=15,$__art='{{=eh}}',$__ctrl='<%=eh%>',(eh))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';'+($__line=15,$__art='{{if props.rotate}}','');$__ctrl='<%if(props.rotate){%>';if(props.rotate){;$$_style+='transform:rotate('+($__line=15,$__art='{{=props.rotate}}',$__ctrl='<%=props.rotate%>',(props.rotate))+'deg);'+($__line=15,$__art='{{/if}}','');$__ctrl='<%}%>';};$$_style+='border-radius:'+($__line=15,$__art='{{=br}}',$__ctrl='<%=br%>',(br))+($__line=15,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit));$vnode_3.push($createVNode('div',{'id': ($__line=15,$__art='{{=$viewId}}','')+$viewId+'_'+($__line=15,$__art='{{=eId}}',$__ctrl='<%=eId%>',(eId)),'class': 'rd-_assets_index_less_-align-items-center rd-_assets_index_less_-flex rd-_assets_index_less_-justify-content-center rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pa rd-_panels_outline_index_less_-item','style': $$_style,},$vnode_4));
}$vnode_2=[$createVNode('div',{'class': 'rd-_assets_index_less_-pointer-events-none','style': 'position:relative;background:'+($__line=4,$__art='{{=page.background}}',$__ctrl='<%=page.background%>',(page.background))+';width:'+($__line=4,$__art='{{=pageWidth}}',$__ctrl='<%=pageWidth%>',(pageWidth))+($__line=4,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';height:'+($__line=4,$__art='{{=pageHeight*count}}',$__ctrl='<%=pageHeight*count%>',(pageHeight*count))+($__line=4,$__art='{{=unit}}',$__ctrl='<%=unit%>',(unit))+';margin:'+($__line=4,$__art='{{=canvasMargin}}',$__ctrl='<%=canvasMargin%>',(canvasMargin)),},$vnode_3),$createVNode('div',{'class': 'rd-_assets_index_less_-pa rd-_assets_index_less_-touch-action-none rd-_panels_outline_index_less_-anim-size rd-_panels_outline_index_less_-stage-viewport','style': 'left:'+($__line=20,$__art='{{=left}}',$__ctrl='<%=left%>',(left))+'px;top:'+($__line=20,$__art='{{=top}}',$__ctrl='<%=top%>',(top))+'px;width:'+($__line=20,$__art='{{=viewportWidth}}',$__ctrl='<%=viewportWidth%>',(viewportWidth))+'px;height:'+($__line=20,$__art='{{=viewportHeight}}',$__ctrl='<%=viewportHeight%>',(viewportHeight))+'px','mx5-pointerdown': $viewId+'@:{move.viewport~rs}()',})];$vnode_1=[$createVNode('div',{'class': 'rd-_assets_index_less_-overflow-hidden rd-_assets_index_less_-pr rd-_panels_outline_index_less_-anim rd-_panels_outline_index_less_-stage-container','style': 'width:'+($__line=2,$__art='{{=width}}',$__ctrl='<%=width%>',(width))+'px;height:'+($__line=2,$__art='{{=height}}',$__ctrl='<%=height%>',(height))+'px;margin:'+($__line=2,$__art='{{=centerMargin}}',$__ctrl='<%=centerMargin%>',(centerMargin)),},$vnode_2)];$vnode_0=[$createVNode('div',$quick_fV_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); 
} catch (ex) { let msg = 'render view error:' + (ex.message || ex); msg += '\r\n\tsrc art: ' + $__art + '\r\n\tat line: ' + $__line; msg += '\r\n\ttranslate to: ' + $__ctrl + '\r\n\tat file:panels/outline/index.html'; throw msg; }  } ,
    init() {
        let stage = node('_rd_stage');
        let updateOverview = this['@:{debounce~rs}'](this.render);
        State.on('@:{event#history.shift.change~rs}', updateOverview);
        // State.on('@:{event#stage.scale.change}', updateOverview);
        State.on('@:{event#stage.page.change~rs}', updateOverview);
        State.on('@:{event#stage.size.change~rs}', updateOverview);
        State.on('@:{event#stage.page.and.elements.change~rs}', updateOverview);
        State.on('@:{event#stage.elements.change~rs}', updateOverview);
        State.on('@:{event#stage.select.element.props.change~rs}', updateOverview);
        let updatePos = this['@:{update.viewport.pos~rs}'].bind(this);
        //State.on('@:{event#stage.select.element.props.update}', updateOverview);
        attach(stage, 'scroll', updatePos);
        this['@:{update.overview~rs}'] = updateOverview;
        this.on('destroy', () => {
            State.off('@:{event#history.shift.change~rs}', updateOverview);
            State.off('@:{event#stage.page.change~rs}', updateOverview);
            State.off('@:{event#stage.size.change~rs}', updateOverview);
            State.off('@:{event#stage.elements.change~rs}', updateOverview);
            State.off('@:{event#stage.select.element.props.change~rs}', updateOverview);
            State.off('@:{event#stage.page.and.elements.change~rs}', updateOverview);
            detach(stage, 'scroll', updatePos);
        });
    },
    '@:{update.viewport.pos~rs}'() {
        let stage = node('_rd_stage');
        let ratio = this.get('ratio');
        if (ratio) {
            let width = this.get('width');
            let height = this.get('height');
            let viewportWidth = this.get('viewportWidth');
            let viewportHeight = this.get('viewportHeight');
            this.digest({
                left: min(stage.scrollLeft * ratio, width - viewportWidth),
                top: min(stage.scrollTop * ratio, height - viewportHeight)
            });
        }
    },
    render() {
        let m = mark(this, '@:{render~rs}');
        let draw = () => {
            if (m()) {
                if (!node('_rd_sc')) {
                    setTimeout(draw, 20);
                    return;
                }
                let page = State.get('@:{global#stage.page~rs}');
                let scale = State.get('@:{global#stage.scale~rs}');
                let stage = node('_rd_stage');
                let stageRealWidth = stage.scrollWidth;
                let stageRealHeight = stage.scrollHeight;
                let width = OverviewSize[0];
                let ratio = width / stageRealWidth;
                let height = ratio * stageRealHeight;
                if (height > OverviewSize[1]) {
                    height = OverviewSize[1];
                    ratio = height / stageRealHeight;
                    width = ratio * stageRealWidth;
                }
                let pageWidth = ratio * page.width * scale;
                let pageHeight = ratio * page.height * scale;
                let canvasMargin = '';
                for (let e of const_1['@:{const#stage.padding~rs}']) {
                    canvasMargin += ratio * e + 'px ';
                }
                let centerMargin = `${(OverviewSize[1] - height) / 2}px ${(OverviewSize[0] - width) / 2}px`;
                let viewportWidth = min(stage.clientWidth, stageRealWidth) * ratio; //for border
                let viewportHeight = min(stage.clientHeight, stageRealHeight) * ratio;
                this.set({
                    unit: State.get('@:{global#stage.unit~rs}'),
                    width,
                    height,
                    page,
                    pageWidth,
                    pageHeight,
                    ratio,
                    elements: State.get('@:{global#stage.elements~rs}'),
                    viewportHeight,
                    viewportWidth,
                    canvasMargin,
                    centerMargin
                });
                this['@:{update.viewport.pos~rs}']();
            }
        };
        setTimeout(draw, 20);
    },
    '@:{move.viewport~rs}<pointerdown>'(e) {
        let startX = this.get('left'), startY = this.get('top'), viewportWidth = this.get('viewportWidth'), viewportHeight = this.get('viewportHeight'), width = this.get('width'), height = this.get('height'), stage = node('_rd_stage'), ratio = this.get('ratio');
        State.set({
            '@:{global#stage.prevent.actions~rs}': 1
        });
        cursor_1["@:{root.show.by.type~rs}"]('move');
        this['@:{drag.drop~rs}'](e, ex => {
            let x = startX + ex.pageX - e.pageX;
            let y = startY + ex.pageY - e.pageY;
            if (x < 0) {
                x = 0;
            }
            else if (x > (width - viewportWidth)) {
                x = width - viewportWidth;
            }
            if (y < 0) {
                y = 0;
            }
            else if (y > (height - viewportHeight)) {
                y = height - viewportHeight;
            }
            stage.scrollLeft = x / ratio;
            stage.scrollTop = y / ratio;
            this['@:{viewport.moved~rs}'] = 1;
        }, () => {
            State.set({
                '@:{global#stage.prevent.actions~rs}': 0
            });
            cursor_1["@:{root.hide~rs}"]();
        });
    },
    '$win<resize>'() {
        this['@:{update.overview~rs}']();
    }
}).merge(index_1);

});