/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("58/6k/index",["4e","../../4d/4g","../../4l/4m/index","../../4l/4n/cursor"],(require,exports,module)=>{
let $quick_fZ_0_static_attr={'class': 'rd-et rd-jK',};
let $quick_fZ_1_static_attr={'class': 'rd-dF rd-jO',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let const_1 = require("../../4d/4g");
let index_1 = require("../../4l/4m/index");
let cursor_1 = require("../../4l/4n/cursor");
let { State, node, View, applyStyle, mark, attach, detach } = magix_1;
let { min } = Math;
applyStyle("rd-ed",".rd-jI{transition:all .25s}.rd-jJ{transition:width,height .25s}.rd-jK{padding:2px 0}.rd-jL{background:#edeef3;box-shadow:inset 1px 1px 6px 2px #dadada}.rd-jM{box-shadow:inset 0 0 1px 1px #fa742b;cursor:move}.rd-jN{background:#fcb58f}.rd-jO{color:#fff;transform:scale(.5)}.rd-jP{border-bottom:1px dotted #c8c8c8}");
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
;$$_class='rd-el';if(i<count-1){;$$_class+=' rd-jP';};$vnode_3.push($createVNode('div',{'style': 'top:'+(pageHeight*i)+(unit)+';width:'+(pageWidth)+(unit)+';height:'+(pageHeight)+(unit),'class': $$_class,}));
}
for(let $q_c_aaqjg=elements.length,$q_key_gcwdwcv=0;$q_key_gcwdwcv<$q_c_aaqjg;$q_key_gcwdwcv+=1){
let {id:eId,props:props,type:type,ctrl:ctrl}=elements[$q_key_gcwdwcv];
let ew=props.width*ratio,
                      eh=props.height*ratio,
                      br=props.radius||0;;
if(type=='circle'){
br='50%';
}$vnode_5=[$createVNode(0,(ctrl.icon),1)];$vnode_4=[$createVNode('i',$quick_fZ_1_static_attr,$vnode_5)];;$$_style='left:'+(props.x*ratio)+(unit)+';top:'+(props.y*ratio)+(unit)+';width:'+(ew)+(unit)+';height:'+(eh)+(unit)+';';if(props.rotate){;$$_style+='transform:rotate('+(props.rotate)+'deg);';};$$_style+='border-radius:'+(br)+(unit);$vnode_3.push($createVNode('div',{'id': $viewId+'_'+(eId),'class': 'rd-eB rd-eT rd-el rd-ez rd-fq rd-jN','style': $$_style,},$vnode_4));
}$vnode_2=[$createVNode('div',{'class': 'rd-en','style': 'position:relative;background:'+(page.background)+';width:'+(pageWidth)+(unit)+';height:'+(pageHeight*count)+(unit)+';margin:'+(canvasMargin),},$vnode_3),$createVNode('div',{'class': 'rd-el rd-f0 rd-jJ rd-jM','style': 'left:'+(left)+'px;top:'+(top)+'px;width:'+(viewportWidth)+'px;height:'+(viewportHeight)+'px','mx5-pointerdown': $viewId+'_lL()',})];$vnode_1=[$createVNode('div',{'class': 'rd-em rd-fq rd-jI rd-jL','style': 'width:'+(width)+'px;height:'+(height)+'px;margin:'+(centerMargin),},$vnode_2)];$vnode_0=[$createVNode('div',$quick_fZ_0_static_attr,$vnode_1)]; 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        let stage = node('_rd_stage');
        let updateOverview = this['_dO'](this.render);
        State.on('dJ', updateOverview);
        // State.on('@:{event#stage.scale.change}', updateOverview);
        State.on('dK', updateOverview);
        State.on('dL', updateOverview);
        State.on('dM', updateOverview);
        State.on('d2', updateOverview);
        State.on('dG', updateOverview);
        let updatePos = this['_lI'].bind(this);
        //State.on('@:{event#stage.select.element.props.update}', updateOverview);
        attach(stage, 'scroll', updatePos);
        this['_lJ'] = updateOverview;
        this.on('destroy', () => {
            State.off('dJ', updateOverview);
            State.off('dK', updateOverview);
            State.off('dL', updateOverview);
            State.off('d2', updateOverview);
            State.off('dG', updateOverview);
            State.off('dM', updateOverview);
            detach(stage, 'scroll', updatePos);
        });
    },
    '_lI'() {
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
        let m = mark(this, '_dU');
        let draw = () => {
            if (m()) {
                if (!node('_rd_sc')) {
                    setTimeout(draw, 20);
                    return;
                }
                let page = State.get('dN');
                let scale = State.get('dF');
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
                for (let e of const_1['dT']) {
                    canvasMargin += ratio * e + 'px ';
                }
                let centerMargin = `${(OverviewSize[1] - height) / 2}px ${(OverviewSize[0] - width) / 2}px`;
                let viewportWidth = min(stage.clientWidth, stageRealWidth) * ratio; //for border
                let viewportHeight = min(stage.clientHeight, stageRealHeight) * ratio;
                this.set({
                    unit: State.get('dG'),
                    width,
                    height,
                    page,
                    pageWidth,
                    pageHeight,
                    ratio,
                    elements: State.get('dM'),
                    viewportHeight,
                    viewportWidth,
                    canvasMargin,
                    centerMargin
                });
                this['_lI']();
            }
        };
        setTimeout(draw, 20);
    },
    '_lL<pointerdown>'(e) {
        let startX = this.get('left'), startY = this.get('top'), viewportWidth = this.get('viewportWidth'), viewportHeight = this.get('viewportHeight'), width = this.get('width'), height = this.get('height'), stage = node('_rd_stage'), ratio = this.get('ratio');
        State.set({
            'dK': 1
        });
        cursor_1["_eH"]('move');
        this['_eb'](e, ex => {
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
            this['_lK'] = 1;
        }, () => {
            State.set({
                'dK': 0
            });
            cursor_1["_eP"]();
        });
    },
    '$win<resize>'() {
        this['_lJ']();
    }
}).merge(index_1);

});