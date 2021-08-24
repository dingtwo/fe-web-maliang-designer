/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/77/index",["51","../../50/53","../../58/59/index","../../58/5a/cursor"],(require,exports,module)=>{
let $quick_iy_0_static_attr={'class': 'rd-g3 rd-mj',};
let $quick_iy_1_static_attr={'class': 'rd-ge rd-mn',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let const_1 = require("../../50/53");
let index_1 = require("../../58/59/index");
let cursor_1 = require("../../58/5a/cursor");
let { State, node, View, applyStyle, mark, attach, detach } = magix_1;
let { min } = Math;
applyStyle("rd-gN",".rd-mh{transition:all .25s}.rd-mi{transition:width,height .25s}.rd-mj{padding:2px 0}.rd-mk{background:#edeef3;box-shadow:inset 1px 1px 6px 2px #dadada}.rd-ml{box-shadow:inset 0 0 1px 1px #47b34e;cursor:move}.rd-mm{background:#8ed292}.rd-mn{color:#fff;transform:scale(.5)}.rd-mo{border-bottom:1px dotted #c8c8c8}");
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
;$$_class='rd-gV';if(i<count-1){;$$_class+=' rd-mo';};$vnode_3.push($createVNode('div',{'style': 'top:'+(pageHeight*i)+(unit)+';width:'+(pageWidth)+(unit)+';height:'+(pageHeight)+(unit),'class': $$_class,}));
}
for(let $q_c_tewhpus=elements.length,$q_key_watejs=0;$q_key_watejs<$q_c_tewhpus;$q_key_watejs+=1){
let {id:eId,props:props,type:type,ctrl:ctrl}=elements[$q_key_watejs];
let ew=props.width*ratio,
                      eh=props.height*ratio,
                      br=props.radius||0;;
if(type=='circle'){
br='50%';
}$vnode_5=[$createVNode(0,(ctrl.icon),1)];$vnode_4=[$createVNode('i',$quick_iy_1_static_attr,$vnode_5)];;$$_style='left:'+(props.x*ratio)+(unit)+';top:'+(props.y*ratio)+(unit)+';width:'+(ew)+(unit)+';height:'+(eh)+(unit)+';';if(props.rotate){;$$_style+='transform:rotate('+(props.rotate)+'deg);';};$$_style+='border-radius:'+(br)+(unit);$vnode_3.push($createVNode('div',{'id': $viewId+'_'+(eId),'class': 'rd-g9 rd-gV rd-h0 rd-ha rd-hs rd-mm','style': $$_style,},$vnode_4));
}$vnode_2=[$createVNode('div',{'class': 'rd-gX','style': 'position:relative;background:'+(page.background)+';width:'+(pageWidth)+(unit)+';height:'+(pageHeight*count)+(unit)+';margin:'+(canvasMargin),},$vnode_3),$createVNode('div',{'class': 'rd-gV rd-iz rd-mi rd-ml','style': 'left:'+(left)+'px;top:'+(top)+'px;width:'+(viewportWidth)+'px;height:'+(viewportHeight)+'px','mx5-pointerdown': $viewId+'_on()',})];$vnode_1=[$createVNode('div',{'class': 'rd-gW rd-h0 rd-mh rd-mk','style': 'width:'+(width)+'px;height:'+(height)+'px;margin:'+(centerMargin),},$vnode_2)];$vnode_0=[$createVNode('div',$quick_iy_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let stage = node('_rd_stage');
        let updateOverview = this['_gn'](this.render);
        State.on('gi', updateOverview);
        // State.on('@:{event#stage.scale.change}', updateOverview);
        State.on('gj', updateOverview);
        State.on('gk', updateOverview);
        State.on('gl', updateOverview);
        State.on('gB', updateOverview);
        State.on('gf', updateOverview);
        let updatePos = this['_ok'].bind(this);
        //State.on('@:{event#stage.select.element.props.update}', updateOverview);
        attach(stage, 'scroll', updatePos);
        this['_ol'] = updateOverview;
        this.on('destroy', () => {
            State.off('gi', updateOverview);
            State.off('gj', updateOverview);
            State.off('gk', updateOverview);
            State.off('gB', updateOverview);
            State.off('gf', updateOverview);
            State.off('gl', updateOverview);
            detach(stage, 'scroll', updatePos);
        });
    },
    '_ok'() {
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
        let m = mark(this, '_gt');
        let draw = () => {
            if (m()) {
                if (!node('_rd_sc')) {
                    setTimeout(draw, 20);
                    return;
                }
                let page = State.get('gm');
                let scale = State.get('ge');
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
                for (let e of const_1['gs']) {
                    canvasMargin += ratio * e + 'px ';
                }
                let centerMargin = `${(OverviewSize[1] - height) / 2}px ${(OverviewSize[0] - width) / 2}px`;
                let viewportWidth = min(stage.clientWidth, stageRealWidth) * ratio; //for border
                let viewportHeight = min(stage.clientHeight, stageRealHeight) * ratio;
                this.set({
                    unit: State.get('gf'),
                    width,
                    height,
                    page,
                    pageWidth,
                    pageHeight,
                    ratio,
                    elements: State.get('gl'),
                    viewportHeight,
                    viewportWidth,
                    canvasMargin,
                    centerMargin
                });
                this['_ok']();
            }
        };
        setTimeout(draw, 20);
    },
    '_on<pointerdown>'(e) {
        let startX = this.get('left'), startY = this.get('top'), viewportWidth = this.get('viewportWidth'), viewportHeight = this.get('viewportHeight'), width = this.get('width'), height = this.get('height'), stage = node('_rd_stage'), ratio = this.get('ratio');
        State.set({
            'gj': 1
        });
        cursor_1["_hg"]('move');
        this['_gL'](e, ex => {
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
            this['_om'] = 1;
        }, () => {
            State.set({
                'gj': 0
            });
            cursor_1["_ho"]();
        });
    },
    '$win<resize>'() {
        this['_ol']();
    }
}).merge(index_1);

});