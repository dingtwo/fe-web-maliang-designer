/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("50/57",["51","../58/59/index","../58/5a/cursor","../58/5b/index","../5c/index","./52","./53","./5d","./5e","./54","./55","./56"],(require,exports,module)=>{
require("./55");
require("./56");
let $quick_gd_static_text;
let $quick_ge_static_text;
let $quick_gg_0_static_attr={'class': 'rd-gV rd-h5 rd-hZ rd-hx rd-iP',};
let $quick_gg_1_static_attr={'class': 'rd-gV rd-h5 rd-hZ rd-hx rd-iN',};
let $quick_gg_2_static_attr={'class': 'rd-ge rd-h7',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("51");
let index_1 = require("../58/59/index");
let cursor_1 = require("../58/5a/cursor");
let index_2 = require("../58/5b/index");
let index_3 = require("../5c/index");
let axis_shadow_1 = require("./52");
let const_1 = require("./53");
let history_1 = require("./5d");
let keyboard_1 = require("./5e");
let transform_1 = require("./54");
let { abs, max, round } = Math;
let { State, node, applyStyle, mark, View, inside, attach, detach } = magix_1;
applyStyle("rd-ge",".rd-iA{z-index:200}.rd-iB{border-bottom:1px solid #ccc;height:20px}.rd-iC{background:#47b34e;top:0}.rd-iD{background:#47b34e;height:1px;left:0}.rd-iE,.rd-iF{border-right:1px solid #ccc;width:20px}.rd-iE{border-bottom:1px solid #ccc;height:20px;left:0;top:0;z-index:201}.rd-iG{left:5px;top:22px}.rd-iH{left:24px;top:2px}.rd-iI,.rd-iJ{z-index:100}.rd-iI{top:20px}.rd-iJ{left:20px}.rd-iK{border-left:1px solid #47b34e;width:1px}.rd-iL{background:#47b34e;height:1px}.rd-iM{left:-15px;opacity:.7;top:4px}.rd-iN{left:4px;top:2px}.rd-iO{left:4px;opacity:.7;top:-15px}.rd-iM:hover,.rd-iO:hover{opacity:1}.rd-iP{left:4px;top:2px}.rd-iQ{background:#47b34e;cursor:ns-resize;height:3px;left:30px;top:-1px;width:20px}.rd-iR{background:#47b34e;cursor:ew-resize;height:20px;left:-2px;top:20px;width:3px}.rd-iR:focus,.rd-iQ:focus{background:#fff;outline:1px solid #47b34e}.rd-iS{background:rgba(71,179,78,.3)}");
let passiveOptions = {
    passive: true
};
module.exports= View.extend({
    tmpl: ($dataFromView, $createVNode,$viewId,$encodeUrl,$refData,$keyOf)=> { 
let $temp_var,$vnode_0,
{
	show,
	sTop,
	yHelpers,
	abs,
	yStart,
	scale,
	vWidth,
	i18n,
	toUnit,
	sLeft,
	xHelpers,
	xStart,
	vHeight,
	width,
	decimals,
	unit,
	xEnd,
	step,
	space,
	hbar,
	bar,
	barColor,
	height,
	yEnd,}=$dataFromView,
$$_class,
$vnode_3,
$vnode_2,
$vnode_1,
$$_title,
$text;
let current;$vnode_1=[];
for(let $q_c_ytxzgyuqvjm=yHelpers.length,yi=0;yi<$q_c_ytxzgyuqvjm;yi+=1){
let yHelp=yHelpers[yi];
current=abs(yStart)+yHelp*scale+20;$vnode_3=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-gV rd-gY rd-ge rd-h5 rd-hw rd-iO','title': (i18n('gf')),'mx5-click': $viewId+'_gK({type:\'y\',i:'+(yi)+'})',},$vnode_3)];$vnode_3=[$createVNode(0,(toUnit(yHelp)))];$vnode_2.push($createVNode('span',$quick_gg_0_static_attr,$vnode_3),$createVNode('span',{'class': 'rd-gV rd-gY rd-h0 rd-iQ rd-iz','mx5-pointerdown': $viewId+'_gO({type:\'y\',i:'+(yi)+',c:'+(current)+'})','title': (i18n('gg')),'tabindex': 0,'mx5-keydown': $viewId+'_gR({type:\'y\',i:'+(yi)+'})',}));$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gX rd-iL rd-ix','style': 'width:'+(vWidth)+'px;top:'+(current)+'px',},$vnode_2));
};$$_class='rd-iJ rd-gW';if(!show){;$$_class+=' rd-g0';};$vnode_0=[$createVNode('div',{'style': 'transform:translateY(-'+(sTop)+'px)','id': '_rd_'+$viewId+'_y_help','class': $$_class,},$vnode_1)];$vnode_1=[];
for(let $q_c_wwbodabbfpg=xHelpers.length,xi=0;xi<$q_c_wwbodabbfpg;xi+=1){
let xHelp=xHelpers[xi];
current=abs(xStart)+xHelp*scale;$vnode_3=[$quick_gd_static_text||($quick_gd_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-gV rd-gY rd-ge rd-h5 rd-hw rd-iM','title': (i18n('gf')),'mx5-click': $viewId+'_gK({type:\'x\',i:'+(xi)+'})',},$vnode_3)];$vnode_3=[$createVNode(0,(toUnit(xHelp)))];$vnode_2.push($createVNode('span',$quick_gg_1_static_attr,$vnode_3),$createVNode('span',{'class': 'rd-gV rd-gY rd-h0 rd-iR rd-iz','mx5-pointerdown': $viewId+'_gO({type:\'x\',i:'+(xi)+',c:'+(current)+'})','title': (i18n('gg')),'tabindex': 0,'mx5-keydown': $viewId+'_gR({type:\'x\',i:'+(xi)+'})',}));$vnode_1.push($createVNode('div',{'class': 'rd-gV rd-gX rd-iK rd-iy','style': 'height:'+(vHeight)+'px;left:'+(current)+'px',},$vnode_2));
};$$_class='rd-iI rd-gW';if(!show){;$$_class+=' rd-g0';};$vnode_0.push($createVNode('div',{'style': 'transform:translateX(-'+(sLeft)+'px)','id': '_rd_'+$viewId+'_x_help','class': $$_class,},$vnode_1));$vnode_2=[$createVNode('div',{'mx5-owner': $viewId,'$': 'decimals,width,xStart,xEnd,step,space,scale,hbar,bar,barColor','mx5-view': '50/55?decimals='+$keyOf($refData,decimals,'eD')+'&unit='+($encodeUrl(unit))+'&width='+$keyOf($refData,width,'eE')+'&xStart='+$keyOf($refData,xStart,'eF')+'&xEnd='+$keyOf($refData,xEnd,'eG')+'&step='+$keyOf($refData,step,'eH')+'&space='+$keyOf($refData,space,'eI')+'&scale='+$keyOf($refData,scale,'eJ')+'&hbar='+$keyOf($refData,hbar,'eK')+'&bar='+$keyOf($refData,bar,'eL')+'&barColor='+$keyOf($refData,barColor,'eM'),'class': 'rd-gO','style': 'width:'+(width)+'px',})];$vnode_1=[$createVNode('div',{'class': 'rd-gM rd-gN rd-gW rd-h0 rd-iA rd-iB','id': '_rd_'+$viewId+'_x',},$vnode_2)];$vnode_3=[$quick_ge_static_text||($quick_ge_static_text=$createVNode(0,'-'))];$vnode_2=[$createVNode('span',{'class': 'rd-gV rd-h5 rd-iG','id': '_rd_'+$viewId+'_x_tip',},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-g0 rd-gV rd-gX rd-hp rd-iA rd-iC rd-iy','id': '_rd_'+$viewId+'_x_line','style': 'height:'+(vHeight+20)+'px',},$vnode_2));$vnode_0.push($createVNode('div',{'mx5-pointermove': $viewId+'_gE()','mx5-pointerout': $viewId+'_gF()','mx5-click': $viewId+'_gI()',},$vnode_1));$vnode_2=[$createVNode('div',{'mx5-owner': $viewId,'$': 'decimals,height,yStart,yEnd,step,space,scale,hbar,bar,barColor','mx5-view': '50/56?decimals='+$keyOf($refData,decimals,'eD')+'&unit='+($encodeUrl(unit))+'&height='+$keyOf($refData,height,'eN')+'&yStart='+$keyOf($refData,yStart,'eO')+'&yEnd='+$keyOf($refData,yEnd,'eP')+'&step='+$keyOf($refData,step,'eH')+'&space='+$keyOf($refData,space,'eI')+'&scale='+$keyOf($refData,scale,'eJ')+'&hbar='+$keyOf($refData,hbar,'eK')+'&bar='+$keyOf($refData,bar,'eL')+'&barColor='+$keyOf($refData,barColor,'eM'),'style': 'height:'+(height)+'px',})];$vnode_1=[$createVNode('div',{'class': 'rd-gM rd-gW rd-h0 rd-iA rd-iF','style': 'height:'+(vHeight)+'px','id': '_rd_'+$viewId+'_y',},$vnode_2)];$vnode_3=[$quick_ge_static_text||($quick_ge_static_text=$createVNode(0,'-'))];$vnode_2=[$createVNode('span',{'class': 'rd-gV rd-h5 rd-iH','id': '_rd_'+$viewId+'_y_tip',},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-g0 rd-gV rd-gX rd-iA rd-iD rd-ix','id': '_rd_'+$viewId+'_y_line','style': 'width:'+(vWidth+20)+'px',},$vnode_2));$vnode_0.push($createVNode('div',{'mx5-pointermove': $viewId+'_gG()','mx5-pointerout': $viewId+'_gH()','mx5-click': $viewId+'_gJ()',},$vnode_1));let lines=xHelpers.length+yHelpers.length;;$vnode_1=[];
if(lines){
$text='';if(show){;$text+='';}else{;$text+='';};$vnode_2=[$createVNode(0,$text)];$vnode_1.push($createVNode('i',$quick_gg_2_static_attr,$vnode_2));
};$$_class='rd-iE rd-gV rd-gM rd-g9 rd-ha rd-hs rd-hW';if(lines){;$$_class+=' rd-hw';};$$_title='';if(lines){;$$_title+=''+(i18n(show?'gh':'gi'))+'(H)';};$vnode_0.push($createVNode('div',{'mx5-click': $viewId+'_gS({lines:'+(lines)+'})','class': $$_class,'title': $$_title,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        //监听设计区域的滚动事件，来同步标尺的位置
        let n = node('_rd_stage');
        let scrollCallback = this['_gl'].bind(this);
        attach(n, 'scroll', scrollCallback, passiveOptions);
        this['_gm'] = n;
        this.set({
            abs,
            toUnit(v) {
                return const_1['gf'](const_1['ge'](v));
            },
            bar: 4,
            hbar: 12,
            barColor: '#aaa' //颜色
        });
        let update = this['_gn'](this.render, 30);
        let toggleHelpLine = e => {
            if (e['gd'] ||
                !e['ge'] ||
                e['gf'])
                return;
            let { 'gg': code, 'gh': shiftKey, 'gi': ctrlKey, 'gj': altKey } = e;
            if (code == keyboard_1['gd']) {
                e['gk']();
                if (altKey) {
                    this.render({ '_go': 1 });
                }
                else if (!(shiftKey || ctrlKey)) {
                    this.render({ '_gp': 1 });
                }
            }
        };
        this['_gq'] = this['_gn'](this['_gr'], 20);
        State.on('gi', update);
        State.on('gh', update);
        State.on('gj', update);
        State.on('gk', update);
        State.on('gl', update);
        State.on('gm', toggleHelpLine);
        axis_shadow_1['gd']();
        this.on('destroy', () => {
            detach(n, 'scroll', scrollCallback);
            State.off('gi', update);
            State.off('gh', update);
            State.off('gk', update);
            State.off('gj', update);
            State.off('gl', update);
            State.off('gm', toggleHelpLine);
            axis_shadow_1['ge']();
        });
    },
    async '_gr'() {
        if (this['_gs']) {
            let n = this['_gm'];
            let sa = State.get('ge');
            //以下计算滚动区域的宽和高，当区域小于电脑屏幕时，则使用电脑屏幕的尺寸
            //多加的padding是在屏幕外依然画上标尺，防止缩放瞬间显示空白
            let width = max(n.scrollWidth, window.innerWidth) + const_1["gg"];
            let height = max(n.scrollHeight, window.innerHeight) + const_1["gg"];
            let xStart = 0; //水平标尺的起始值
            let xEnd = 0; //水平结束值
            let axisWidth = const_1["gh"]; //标尺尺寸
            let yStart = 0; //垂直标尺的起始值
            let yEnd = 0; //结束值
            let outer = node('_rd_so');
            let offset = transform_1['gd']();
            let outerOffset = outer.getBoundingClientRect();
            //计算设计区的左上角坐标
            let left = round(offset.x - outerOffset.x);
            //水平开始位置设计区左上角坐标加标尺宽度
            xStart = left + axisWidth;
            //结束
            xEnd = width - xStart;
            //y同理
            yStart = round(offset.y - outerOffset.y);
            yEnd = height - yStart;
            let vHeight = n.offsetHeight; //设计区的可视尺寸
            let vWidth = n.offsetWidth;
            let unit = State.get('gf');
            let map = const_1['gi'][unit] || const_1['gi']['px'];
            let si = map[sa];
            let m = mark(this, '_gt');
            await this.digest({
                unit: State.get('gf'),
                decimals: map['_gk'],
                sTop: n.scrollTop,
                sLeft: n.scrollLeft,
                width,
                scale: sa,
                space: si.space,
                step: si.step,
                height,
                xStart,
                xEnd,
                yStart,
                vHeight,
                vWidth,
                yEnd
            });
            if (m() &&
                !this['_gu']) {
                //缓存节点对象，防止反复读取
                this['_gu'] = node('_rd_' + this.id + '_x');
                this['_gv'] = node('_rd_' + this.id + '_y');
                this['_gw'] = node('_rd_' + this.id + '_x_line');
                this['_gx'] = node('_rd_' + this.id + '_y_line');
                this['_gy'] = node('_rd_' + this.id + '_x_tip');
                this['_gz'] = node('_rd_' + this.id + '_y_tip');
                this['_gA'] = node('_rd_' + this.id + '_x_help');
                this['_gB'] = node('_rd_' + this.id + '_y_help');
            }
        }
    },
    '_gl'() {
        let xNode = this['_gu'];
        let yNode = this['_gv'];
        let yHelpNode = this['_gB'];
        let xHelpNode = this['_gA'];
        let scroll = this['_gm'];
        let top = scroll.scrollTop;
        let left = scroll.scrollLeft;
        if (xNode) { //水平标尺
            xNode.scrollLeft = left;
        }
        if (yNode) { //垂直标尺
            yNode.scrollTop = top;
        }
        if (xHelpNode) { //水平辅助线
            xHelpNode.style.transform = `translateX(-${left}px)`;
        }
        if (yHelpNode) { //垂直辅助线
            yHelpNode.style.transform = `translateY(-${top}px)`;
        }
        this.set({
            sLeft: left,
            sTop: top
        });
    },
    render(e) {
        let m = mark(this, '_gt');
        let xHelpers = State.get('gg');
        let yHelpers = State.get('gh');
        let show = this.get('show');
        if (xHelpers.length ||
            yHelpers.length) {
            if (e) {
                if (e.type == 'gi') {
                    show = 1;
                }
                else if (e['_gp']) {
                    show = !show;
                }
                else if (e['_go']) {
                    xHelpers.length = 0;
                    yHelpers.length = 0;
                    history_1["gd"](history_1['ge']);
                }
            }
        }
        else {
            show = 1;
        }
        State.set({
            'gi': show
        });
        this.set({
            xHelpers,
            yHelpers,
            show
        });
        //因为设计区和标尺并不在一起，所以以下尝试在设计区就绪后再初始化标尺
        let test = () => {
            if (node('_rd_sc')) {
                index_2["_gC"](test);
                if (m()) {
                    this['_gs'] = 1;
                    this['_gr']();
                }
            }
        };
        index_2["_gD"](20, test);
    },
    '_gE<pointermove>'(e) {
        let preventKeypress = State.get('gj');
        let xNode = this['_gu'];
        if (preventKeypress || !xNode)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageX - offset.x; //实际坐标需要鼠标坐标减去节点的左上角坐标
        let start = this.get('xStart');
        let styles = this['_gw'].style;
        styles.display = 'block';
        styles.left = v + 'px';
        let mm = v - start + xNode.scrollLeft;
        let scale = this.get('scale'); //根据缩放转化成需要显示的值
        let toUnit = this.get('toUnit');
        this['_gy'].innerText = toUnit(mm / scale);
    },
    '_gF<pointerout>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget) &&
            this['_gw']) {
            this['_gw'].style.display = 'none';
        }
    },
    '_gG<pointermove>'(e) {
        let preventKeypress = State.get('gj');
        let yNode = this['_gv'];
        if (preventKeypress || !yNode)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageY - offset.y;
        let start = this.get('yStart');
        let styles = this['_gx'].style;
        styles.display = 'block';
        styles.top = v + 'px';
        let mm = v - start - const_1["gh"] + yNode.scrollTop;
        let scale = this.get('scale');
        let toUnit = this.get('toUnit');
        this['_gz'].innerText = toUnit(mm / scale);
    },
    '_gH<pointerout>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget) &&
            this['_gx']) {
            this['_gx'].style.display = 'none';
        }
    },
    '_gI<click>'(e) {
        let xLine = this['_gw'];
        if (!xLine)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageX - offset.x;
        xLine.style.display = 'none';
        let start = this.get('xStart');
        let xNode = this['_gu'];
        //计算需要显示的px单位的值
        let mm = ((v - start + xNode.scrollLeft) / this.get('scale')) | 0;
        let xHelpers = this.get('xHelpers');
        xHelpers.push(mm);
        State.set({
            'gi': 1
        });
        this.digest({
            show: 1,
            xHelpers
        });
        State.fire('gn');
        history_1["gd"](history_1['gf'], index_3('gd'));
    },
    '_gJ<click>'(e) {
        let yLine = this['_gx'];
        if (!yLine)
            return;
        yLine.style.display = 'none';
        let offset = this.root.getBoundingClientRect();
        let v = e.pageY - offset.y;
        let start = this.get('yStart');
        let yNode = this['_gv'];
        let mm = ((v - start - const_1["gh"] + yNode.scrollTop) / this.get('scale')) | 0;
        let yHelpers = this.get('yHelpers');
        yHelpers.push(mm);
        State.set({
            'gi': 1
        });
        this.digest({
            show: 1,
            yHelpers
        });
        State.fire('gn');
        history_1["gd"](history_1['gf'], index_3('ge'));
    },
    '_gK<click>'(e) {
        let { type, i } = e.params;
        let key = type + 'Helpers';
        let list = this.get(key);
        list.splice(i, 1);
        this.digest({
            [key]: list
        });
        State.fire('gn');
        history_1["gd"](history_1['gg'], index_3(type == 'x' ? 'gd' : 'ge'));
    },
    '_gO<pointerdown>'(e) {
        if (e.target != e.eventTarget) {
            return;
        }
        // let oldSelected = StageSelection["@:{selection#set}"]();
        // if (oldSelected) {//辅助线按下拖动时，清除编辑区元素的选中状态
        //     DHistory["@:{history#save}"](DHistory['@:{history#element.lost.focus}'], StageGeneric['@:{generic#query.element.name}'](oldSelected));
        // }
        let { type, i, c: current } = e.params;
        let key = type + 'Helpers';
        let list = this.get(key);
        let start = this.get(type + 'Start');
        let showedCursor = 0;
        State.set({
            'gj': 1
        });
        this['_gL'](e, (evt) => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["_gM"](e.eventTarget);
            }
            let oft;
            if (type == 'x') {
                oft = evt.pageX - e.pageX + current;
            }
            else {
                oft = evt.pageY - e.pageY + current - const_1["gh"];
            }
            list[i] = ((oft - start) / this.get('scale')) | 0;
            this.digest({
                [key]: list
            });
        }, () => {
            State.set({
                'gj': 0
            });
            if (showedCursor) {
                cursor_1["_gN"]();
                history_1["gd"](history_1['gh'], index_3(type == 'x' ? 'gd' : 'ge'));
            }
        });
    },
    //通过键盘按键来移动辅助线
    '_gR<keydown>'(e) {
        let step = e.shiftKey ? const_1["gj"] : const_1["gk"];
        let { type, i } = e.params;
        let key = `${type}Helpers`;
        let list = this.get(key);
        let { code } = e;
        if (code == keyboard_1["ge"]) { //按tab键时，需要把焦点移走
            e.eventTarget.blur();
            return;
        }
        else if (code == keyboard_1["gf"] ||
            code == keyboard_1["gg"]) { //按删除键时，删除辅助线
            e.eventTarget.blur();
            list.splice(i, 1);
            this.digest({
                [key]: list
            });
            history_1["gd"](history_1['gg'], index_3(type == 'x' ? 'gd' : 'ge'));
            return;
        }
        //不同方向的辅助线，键盘移动的方向键不同
        if (type == 'x' &&
            (code == keyboard_1["gh"] ||
                code == keyboard_1["gi"])) {
            if (code == keyboard_1["gh"]) {
                step *= -1;
            }
            list[i] += step;
            this.digest({
                [key]: list
            });
            history_1["gd"](history_1['gh'], index_3('gd'), '_gP', 500);
        }
        else if (type == 'y' &&
            (code == keyboard_1["gj"] ||
                code == keyboard_1["gk"])) {
            if (code == keyboard_1["gj"]) {
                step *= -1;
            }
            list[i] += step;
            this.digest({
                [key]: list
            });
            history_1["gd"](history_1['gh'], index_3('ge'), '_gQ', 500);
        }
    },
    '_gS<click>'(e) {
        let { lines } = e.params;
        if (lines) {
            let show = !this.get('show');
            State.set({
                'gi': show
            });
            this.digest({
                show
            });
        }
    },
    '$win<resize>'() {
        //窗口变化后，延时20ms更新界面
        this['_gq']();
    }
}).merge(index_1);

});