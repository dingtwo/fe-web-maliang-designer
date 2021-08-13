/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("66/7i/index",["5c","../../5b/5e","../../5j/5k/index","../../5j/5l/cursor"],(require,exports,module)=>{
let $quick_om_0_static_attr={'class': 'rd-mR rd-r8',};
let $quick_om_1_static_attr={'class': 'rd-l3 rd-sb',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let const_1 = require("../../5b/5e");
let index_1 = require("../../5j/5k/index");
let cursor_1 = require("../../5j/5l/cursor");
let { State, node, View, applyStyle, mark, attach, detach } = magix_1;
let { min } = Math;
applyStyle("rd-mB",".rd-r6{transition:all .25s}.rd-r7{transition:width,height .25s}.rd-r8{padding:2px 0}.rd-r9{background:#edeef3;box-shadow:inset 1px 1px 6px 2px #dadada}.rd-s_{box-shadow:inset 0 0 1px 1px #47b34e;cursor:move}.rd-sa{background:#8ed292}.rd-sb{color:#fff;transform:scale(.5)}.rd-sc{border-bottom:1px dotted #c8c8c8}");
let OverviewSize = [210, 120];
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId)=> { 
let $temp_var,$vnode_0,
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
let count=page.pages;;$vnode_3=[];
for(let i=0;i<count;i++){
;$$_class='rd-mJ';if(i<count-1){;$$_class+=' rd-sc';};$vnode_3.push($createVNode('div',{'style': 'top:'+(pageHeight*i)+(unit)+';width:'+(pageWidth)+(unit)+';height:'+(pageHeight)+(unit),'class': $$_class,}));
}
for(let $q_c_hqao=elements.length,$q_key_auyauwe=0;$q_key_auyauwe<$q_c_hqao;$q_key_auyauwe+=1){
let {id:eId,props:props,type:type,ctrl:ctrl}=elements[$q_key_auyauwe];
let ew=props.width*ratio,
                      eh=props.height*ratio,
                      br=props.radius||0;;
if(type=='circle'){
br='50%';
}$vnode_5=[$createVNode(0,(ctrl.icon),1)];$vnode_4=[$createVNode('i',$quick_om_1_static_attr,$vnode_5)];;$$_style='left:'+(props.x*ratio)+(unit)+';top:'+(props.y*ratio)+(unit)+';width:'+(ew)+(unit)+';height:'+(eh)+(unit)+';';if(props.rotate){;$$_style+='transform:rotate('+(props.rotate)+'deg);';};$$_style+='border-radius:'+(br)+(unit);$vnode_3.push($createVNode('div',{'id': $viewId+'_'+(eId),'class': 'rd-mJ rd-mX rd-mZ rd-nO rd-ng rd-sa','style': $$_style,},$vnode_4));
}$vnode_2=[$createVNode('div',{'class': 'rd-mL','style': 'position:relative;background:'+(page.background)+';width:'+(pageWidth)+(unit)+';height:'+(pageHeight*count)+(unit)+';margin:'+(canvasMargin),},$vnode_3),$createVNode('div',{'class': 'rd-mJ rd-on rd-r7 rd-s_','style': 'left:'+(left)+'px;top:'+(top)+'px;width:'+(viewportWidth)+'px;height:'+(viewportHeight)+'px','mx5-pointerdown': $viewId+'_t9()',})];$vnode_1=[$createVNode('div',{'class': 'rd-mK rd-nO rd-r6 rd-r9','style': 'width:'+(width)+'px;height:'+(height)+'px;margin:'+(centerMargin),},$vnode_2)];$vnode_0=[$createVNode('div',$quick_om_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let stage = node('_rd_stage');
        let updateOverview = this['_mb'](this.render);
        State.on('l7', updateOverview);
        // State.on('@:{event#stage.scale.change}', updateOverview);
        State.on('l8', updateOverview);
        State.on('l9', updateOverview);
        State.on('m_', updateOverview);
        State.on('mp', updateOverview);
        State.on('l4', updateOverview);
        let updatePos = this['_t6'].bind(this);
        //State.on('@:{event#stage.select.element.props.update}', updateOverview);
        attach(stage, 'scroll', updatePos);
        this['_t7'] = updateOverview;
        this.on('destroy', () => {
            State.off('l7', updateOverview);
            State.off('l8', updateOverview);
            State.off('l9', updateOverview);
            State.off('mp', updateOverview);
            State.off('l4', updateOverview);
            State.off('m_', updateOverview);
            detach(stage, 'scroll', updatePos);
        });
    },
    '_t6'() {
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
        let m = mark(this, '_mh');
        let draw = () => {
            if (m()) {
                if (!node('_rd_sc')) {
                    setTimeout(draw, 20);
                    return;
                }
                let page = State.get('ma');
                let scale = State.get('l3');
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
                for (let e of const_1['mg']) {
                    canvasMargin += ratio * e + 'px ';
                }
                let centerMargin = `${(OverviewSize[1] - height) / 2}px ${(OverviewSize[0] - width) / 2}px`;
                let viewportWidth = min(stage.clientWidth, stageRealWidth) * ratio; //for border
                let viewportHeight = min(stage.clientHeight, stageRealHeight) * ratio;
                this.set({
                    unit: State.get('l4'),
                    width,
                    height,
                    page,
                    pageWidth,
                    pageHeight,
                    ratio,
                    elements: State.get('m_'),
                    viewportHeight,
                    viewportWidth,
                    canvasMargin,
                    centerMargin
                });
                this['_t6']();
            }
        };
        setTimeout(draw, 20);
    },
    '_t9<pointerdown>'(e) {
        let startX = this.get('left'), startY = this.get('top'), viewportWidth = this.get('viewportWidth'), viewportHeight = this.get('viewportHeight'), width = this.get('width'), height = this.get('height'), stage = node('_rd_stage'), ratio = this.get('ratio');
        State.set({
            'l8': 1
        });
        cursor_1["_m5"]('move');
        this['_mz'](e, ex => {
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
            this['_t8'] = 1;
        }, () => {
            State.set({
                'l8': 0
            });
            cursor_1["_nc"]();
        });
    },
    '$win<resize>'() {
        this['_t7']();
    }
}).merge(index_1);

});