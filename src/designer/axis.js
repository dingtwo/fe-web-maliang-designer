/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4d/4k",["4e","../4l/4m/index","../4l/4n/cursor","../4l/4o/index","../4p/index","./4f","./4g","./4q","./4r","./4h","./4i","./4j"],(require,exports,module)=>{
require("./4i");
require("./4j");
let $quick_dE_static_text;
let $quick_dF_static_text;
let $quick_dH_0_static_attr={'class': 'rd-eY rd-el rd-fp rd-fv rd-gf',};
let $quick_dH_1_static_attr={'class': 'rd-eY rd-el rd-fp rd-fv rd-gd',};
let $quick_dH_2_static_attr={'class': 'rd-dF rd-fx',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("4e");
let index_1 = require("../4l/4m/index");
let cursor_1 = require("../4l/4n/cursor");
let index_2 = require("../4l/4o/index");
let index_3 = require("../4p/index");
let axis_shadow_1 = require("./4f");
let const_1 = require("./4g");
let history_1 = require("./4q");
let keyboard_1 = require("./4r");
let transform_1 = require("./4h");
let { abs, max, round } = Math;
let { State, node, applyStyle, mark, View, inside, attach, detach } = magix_1;
applyStyle("rd-dF",".rd-f1{z-index:200}.rd-f2{border-bottom:1px solid #ccc;height:20px}.rd-f3{background:#fa742b;top:0}.rd-f4{background:#fa742b;height:1px;left:0}.rd-f5,.rd-f6{border-right:1px solid #ccc;width:20px}.rd-f5{border-bottom:1px solid #ccc;height:20px;left:0;top:0;z-index:201}.rd-f7{left:5px;top:22px}.rd-f8{left:24px;top:2px}.rd-f9,.rd-g_{z-index:100}.rd-f9{top:20px}.rd-g_{left:20px}.rd-ga{border-left:1px solid #fa742b;width:1px}.rd-gb{background:#fa742b;height:1px}.rd-gc{left:-15px;opacity:.7;top:4px}.rd-gd{left:4px;top:2px}.rd-ge{left:4px;opacity:.7;top:-15px}.rd-gc:hover,.rd-ge:hover{opacity:1}.rd-gf{left:4px;top:2px}.rd-gg{background:#fa742b;cursor:ns-resize;height:3px;left:30px;top:-1px;width:20px}.rd-gh{background:#fa742b;cursor:ew-resize;height:20px;left:-2px;top:20px;width:3px}.rd-gh:focus,.rd-gg:focus{background:#fff;outline:1px solid #fa742b}.rd-gi{background:rgba(250,116,43,.3)}");
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
for(let $q_c_nldxtjgxa=yHelpers.length,yi=0;yi<$q_c_nldxtjgxa;yi+=1){
let yHelp=yHelpers[yi];
current=abs(yStart)+yHelp*scale+20;$vnode_3=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-dF rd-eX rd-el rd-eo rd-fv rd-ge','title': (i18n('dG')),'mx5-click': $viewId+'_ea({type:\'y\',i:'+(yi)+'})',},$vnode_3)];$vnode_3=[$createVNode(0,(toUnit(yHelp)))];$vnode_2.push($createVNode('span',$quick_dH_0_static_attr,$vnode_3),$createVNode('span',{'class': 'rd-el rd-eo rd-f0 rd-fq rd-gg','mx5-pointerdown': $viewId+'_ee({type:\'y\',i:'+(yi)+',c:'+(current)+'})','title': (i18n('dH')),'tabindex': 0,'mx5-keydown': $viewId+'_eh({type:\'y\',i:'+(yi)+'})',}));$vnode_1.push($createVNode('div',{'class': 'rd-el rd-en rd-fY rd-gb','style': 'width:'+(vWidth)+'px;top:'+(current)+'px',},$vnode_2));
};$$_class='rd-g_ rd-em';if(!show){;$$_class+=' rd-eq';};$vnode_0=[$createVNode('div',{'style': 'transform:translateY(-'+(sTop)+'px)','id': '_rd_'+$viewId+'_y_help','class': $$_class,},$vnode_1)];$vnode_1=[];
for(let $q_c_rhmyuhs=xHelpers.length,xi=0;xi<$q_c_rhmyuhs;xi+=1){
let xHelp=xHelpers[xi];
current=abs(xStart)+xHelp*scale;$vnode_3=[$quick_dE_static_text||($quick_dE_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-dF rd-eX rd-el rd-eo rd-fv rd-gc','title': (i18n('dG')),'mx5-click': $viewId+'_ea({type:\'x\',i:'+(xi)+'})',},$vnode_3)];$vnode_3=[$createVNode(0,(toUnit(xHelp)))];$vnode_2.push($createVNode('span',$quick_dH_1_static_attr,$vnode_3),$createVNode('span',{'class': 'rd-el rd-eo rd-f0 rd-fq rd-gh','mx5-pointerdown': $viewId+'_ee({type:\'x\',i:'+(xi)+',c:'+(current)+'})','title': (i18n('dH')),'tabindex': 0,'mx5-keydown': $viewId+'_eh({type:\'x\',i:'+(xi)+'})',}));$vnode_1.push($createVNode('div',{'class': 'rd-el rd-en rd-fZ rd-ga','style': 'height:'+(vHeight)+'px;left:'+(current)+'px',},$vnode_2));
};$$_class='rd-f9 rd-em';if(!show){;$$_class+=' rd-eq';};$vnode_0.push($createVNode('div',{'style': 'transform:translateX(-'+(sLeft)+'px)','id': '_rd_'+$viewId+'_x_help','class': $$_class,},$vnode_1));$vnode_2=[$createVNode('div',{'mx5-owner': $viewId,'$': 'decimals,width,xStart,xEnd,step,space,scale,hbar,bar,barColor','mx5-view': '4d/4i?decimals='+$keyOf($refData,decimals,'cH')+'&unit='+($encodeUrl(unit))+'&width='+$keyOf($refData,width,'cI')+'&xStart='+$keyOf($refData,xStart,'cJ')+'&xEnd='+$keyOf($refData,xEnd,'cK')+'&step='+$keyOf($refData,step,'cL')+'&space='+$keyOf($refData,space,'cM')+'&scale='+$keyOf($refData,scale,'cN')+'&hbar='+$keyOf($refData,hbar,'cO')+'&bar='+$keyOf($refData,bar,'cP')+'&barColor='+$keyOf($refData,barColor,'cQ'),'class': 'rd-ee','style': 'width:'+(width)+'px',})];$vnode_1=[$createVNode('div',{'class': 'rd-ec rd-ed rd-em rd-f1 rd-f2 rd-fq','id': '_rd_'+$viewId+'_x',},$vnode_2)];$vnode_3=[$quick_dF_static_text||($quick_dF_static_text=$createVNode(0,'-'))];$vnode_2=[$createVNode('span',{'class': 'rd-el rd-f7 rd-fv','id': '_rd_'+$viewId+'_x_tip',},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-eQ rd-el rd-en rd-eq rd-f1 rd-f3 rd-fZ','id': '_rd_'+$viewId+'_x_line','style': 'height:'+(vHeight+20)+'px',},$vnode_2));$vnode_0.push($createVNode('div',{'mx5-pointermove': $viewId+'_d5()','mx5-pointerout': $viewId+'_d6()','mx5-click': $viewId+'_d9()',},$vnode_1));$vnode_2=[$createVNode('div',{'mx5-owner': $viewId,'$': 'decimals,height,yStart,yEnd,step,space,scale,hbar,bar,barColor','mx5-view': '4d/4j?decimals='+$keyOf($refData,decimals,'cH')+'&unit='+($encodeUrl(unit))+'&height='+$keyOf($refData,height,'cR')+'&yStart='+$keyOf($refData,yStart,'cS')+'&yEnd='+$keyOf($refData,yEnd,'cT')+'&step='+$keyOf($refData,step,'cL')+'&space='+$keyOf($refData,space,'cM')+'&scale='+$keyOf($refData,scale,'cN')+'&hbar='+$keyOf($refData,hbar,'cO')+'&bar='+$keyOf($refData,bar,'cP')+'&barColor='+$keyOf($refData,barColor,'cQ'),'style': 'height:'+(height)+'px',})];$vnode_1=[$createVNode('div',{'class': 'rd-ec rd-em rd-f1 rd-f6 rd-fq','style': 'height:'+(vHeight)+'px','id': '_rd_'+$viewId+'_y',},$vnode_2)];$vnode_3=[$quick_dF_static_text||($quick_dF_static_text=$createVNode(0,'-'))];$vnode_2=[$createVNode('span',{'class': 'rd-el rd-f8 rd-fv','id': '_rd_'+$viewId+'_y_tip',},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-el rd-en rd-eq rd-f1 rd-f4 rd-fY','id': '_rd_'+$viewId+'_y_line','style': 'width:'+(vWidth+20)+'px',},$vnode_2));$vnode_0.push($createVNode('div',{'mx5-pointermove': $viewId+'_d7()','mx5-pointerout': $viewId+'_d8()','mx5-click': $viewId+'_e_()',},$vnode_1));let lines=xHelpers.length+yHelpers.length;;$vnode_1=[];
if(lines){
$text='';if(show){;$text+='';}else{;$text+='';};$vnode_2=[$createVNode(0,$text)];$vnode_1.push($createVNode('i',$quick_dH_2_static_attr,$vnode_2));
};$$_class='rd-f5 rd-el rd-ec rd-ez rd-eB rd-eT rd-fm';if(lines){;$$_class+=' rd-eX';};$$_title='';if(lines){;$$_title+=''+(i18n(show?'dI':'dJ'))+'(H)';};$vnode_0.push($createVNode('div',{'mx5-click': $viewId+'_ei({lines:'+(lines)+'})','class': $$_class,'title': $$_title,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        //监听设计区域的滚动事件，来同步标尺的位置
        let n = node('_rd_stage');
        let scrollCallback = this['_dM'].bind(this);
        attach(n, 'scroll', scrollCallback, passiveOptions);
        this['_dN'] = n;
        this.set({
            abs,
            toUnit(v) {
                return const_1['dG'](const_1['dF'](v));
            },
            bar: 4,
            hbar: 12,
            barColor: '#aaa' //颜色
        });
        let update = this['_dO'](this.render, 30);
        let toggleHelpLine = e => {
            if (e['dE'] ||
                !e['dF'] ||
                e['dG'])
                return;
            let { 'dH': code, 'dI': shiftKey, 'dJ': ctrlKey, 'dK': altKey } = e;
            if (code == keyboard_1['dE']) {
                e['dL']();
                if (altKey) {
                    this.render({ '_dP': 1 });
                }
                else if (!(shiftKey || ctrlKey)) {
                    this.render({ '_dQ': 1 });
                }
            }
        };
        this['_dR'] = this['_dO'](this['_dS'], 20);
        State.on('dJ', update);
        State.on('dI', update);
        State.on('dK', update);
        State.on('dL', update);
        State.on('dM', update);
        State.on('dN', toggleHelpLine);
        axis_shadow_1['dE']();
        this.on('destroy', () => {
            detach(n, 'scroll', scrollCallback);
            State.off('dJ', update);
            State.off('dI', update);
            State.off('dL', update);
            State.off('dK', update);
            State.off('dM', update);
            State.off('dN', toggleHelpLine);
            axis_shadow_1['dF']();
        });
    },
    async '_dS'() {
        if (this['_dT']) {
            let n = this['_dN'];
            let sa = State.get('dF');
            //以下计算滚动区域的宽和高，当区域小于电脑屏幕时，则使用电脑屏幕的尺寸
            //多加的padding是在屏幕外依然画上标尺，防止缩放瞬间显示空白
            let width = max(n.scrollWidth, window.innerWidth) + const_1["dH"];
            let height = max(n.scrollHeight, window.innerHeight) + const_1["dH"];
            let xStart = 0; //水平标尺的起始值
            let xEnd = 0; //水平结束值
            let axisWidth = const_1["dI"]; //标尺尺寸
            let yStart = 0; //垂直标尺的起始值
            let yEnd = 0; //结束值
            let outer = node('_rd_so');
            let offset = transform_1['dE']();
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
            let unit = State.get('dG');
            let map = const_1['dJ'][unit] || const_1['dJ']['px'];
            let si = map[sa];
            let m = mark(this, '_dU');
            await this.digest({
                unit: State.get('dG'),
                decimals: map['_dL'],
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
                !this['_dV']) {
                //缓存节点对象，防止反复读取
                this['_dV'] = node('_rd_' + this.id + '_x');
                this['_dW'] = node('_rd_' + this.id + '_y');
                this['_dX'] = node('_rd_' + this.id + '_x_line');
                this['_dY'] = node('_rd_' + this.id + '_y_line');
                this['_dZ'] = node('_rd_' + this.id + '_x_tip');
                this['_d0'] = node('_rd_' + this.id + '_y_tip');
                this['_d1'] = node('_rd_' + this.id + '_x_help');
                this['_d2'] = node('_rd_' + this.id + '_y_help');
            }
        }
    },
    '_dM'() {
        let xNode = this['_dV'];
        let yNode = this['_dW'];
        let yHelpNode = this['_d2'];
        let xHelpNode = this['_d1'];
        let scroll = this['_dN'];
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
        let m = mark(this, '_dU');
        let xHelpers = State.get('dH');
        let yHelpers = State.get('dI');
        let show = this.get('show');
        if (xHelpers.length ||
            yHelpers.length) {
            if (e) {
                if (e.type == 'dJ') {
                    show = 1;
                }
                else if (e['_dQ']) {
                    show = !show;
                }
                else if (e['_dP']) {
                    xHelpers.length = 0;
                    yHelpers.length = 0;
                    history_1["dE"](history_1['dF']);
                }
            }
        }
        else {
            show = 1;
        }
        State.set({
            'dJ': show
        });
        this.set({
            xHelpers,
            yHelpers,
            show
        });
        //因为设计区和标尺并不在一起，所以以下尝试在设计区就绪后再初始化标尺
        let test = () => {
            if (node('_rd_sc')) {
                index_2["_d3"](test);
                if (m()) {
                    this['_dT'] = 1;
                    this['_dS']();
                }
            }
        };
        index_2["_d4"](20, test);
    },
    '_d5<pointermove>'(e) {
        let preventKeypress = State.get('dK');
        let xNode = this['_dV'];
        if (preventKeypress || !xNode)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageX - offset.x; //实际坐标需要鼠标坐标减去节点的左上角坐标
        let start = this.get('xStart');
        let styles = this['_dX'].style;
        styles.display = 'block';
        styles.left = v + 'px';
        let mm = v - start + xNode.scrollLeft;
        let scale = this.get('scale'); //根据缩放转化成需要显示的值
        let toUnit = this.get('toUnit');
        this['_dZ'].innerText = toUnit(mm / scale);
    },
    '_d6<pointerout>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget) &&
            this['_dX']) {
            this['_dX'].style.display = 'none';
        }
    },
    '_d7<pointermove>'(e) {
        let preventKeypress = State.get('dK');
        let yNode = this['_dW'];
        if (preventKeypress || !yNode)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageY - offset.y;
        let start = this.get('yStart');
        let styles = this['_dY'].style;
        styles.display = 'block';
        styles.top = v + 'px';
        let mm = v - start - const_1["dI"] + yNode.scrollTop;
        let scale = this.get('scale');
        let toUnit = this.get('toUnit');
        this['_d0'].innerText = toUnit(mm / scale);
    },
    '_d8<pointerout>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget) &&
            this['_dY']) {
            this['_dY'].style.display = 'none';
        }
    },
    '_d9<click>'(e) {
        let xLine = this['_dX'];
        if (!xLine)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageX - offset.x;
        xLine.style.display = 'none';
        let start = this.get('xStart');
        let xNode = this['_dV'];
        //计算需要显示的px单位的值
        let mm = ((v - start + xNode.scrollLeft) / this.get('scale')) | 0;
        let xHelpers = this.get('xHelpers');
        xHelpers.push(mm);
        State.set({
            'dJ': 1
        });
        this.digest({
            show: 1,
            xHelpers
        });
        State.fire('dO');
        history_1["dE"](history_1['dG'], index_3('dE'));
    },
    '_e_<click>'(e) {
        let yLine = this['_dY'];
        if (!yLine)
            return;
        yLine.style.display = 'none';
        let offset = this.root.getBoundingClientRect();
        let v = e.pageY - offset.y;
        let start = this.get('yStart');
        let yNode = this['_dW'];
        let mm = ((v - start - const_1["dI"] + yNode.scrollTop) / this.get('scale')) | 0;
        let yHelpers = this.get('yHelpers');
        yHelpers.push(mm);
        State.set({
            'dJ': 1
        });
        this.digest({
            show: 1,
            yHelpers
        });
        State.fire('dO');
        history_1["dE"](history_1['dG'], index_3('dF'));
    },
    '_ea<click>'(e) {
        let { type, i } = e.params;
        let key = type + 'Helpers';
        let list = this.get(key);
        list.splice(i, 1);
        this.digest({
            [key]: list
        });
        State.fire('dO');
        history_1["dE"](history_1['dH'], index_3(type == 'x' ? 'dE' : 'dF'));
    },
    '_ee<pointerdown>'(e) {
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
            'dK': 1
        });
        this['_eb'](e, (evt) => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["_ec"](e.eventTarget);
            }
            let oft;
            if (type == 'x') {
                oft = evt.pageX - e.pageX + current;
            }
            else {
                oft = evt.pageY - e.pageY + current - const_1["dI"];
            }
            list[i] = ((oft - start) / this.get('scale')) | 0;
            this.digest({
                [key]: list
            });
        }, () => {
            State.set({
                'dK': 0
            });
            if (showedCursor) {
                cursor_1["_ed"]();
                history_1["dE"](history_1['dI'], index_3(type == 'x' ? 'dE' : 'dF'));
            }
        });
    },
    //通过键盘按键来移动辅助线
    '_eh<keydown>'(e) {
        let step = e.shiftKey ? const_1["dK"] : const_1["dL"];
        let { type, i } = e.params;
        let key = `${type}Helpers`;
        let list = this.get(key);
        let { code } = e;
        if (code == keyboard_1["dF"]) { //按tab键时，需要把焦点移走
            e.eventTarget.blur();
            return;
        }
        else if (code == keyboard_1["dG"] ||
            code == keyboard_1["dH"]) { //按删除键时，删除辅助线
            e.eventTarget.blur();
            list.splice(i, 1);
            this.digest({
                [key]: list
            });
            history_1["dE"](history_1['dH'], index_3(type == 'x' ? 'dE' : 'dF'));
            return;
        }
        //不同方向的辅助线，键盘移动的方向键不同
        if (type == 'x' &&
            (code == keyboard_1["dI"] ||
                code == keyboard_1["dJ"])) {
            if (code == keyboard_1["dI"]) {
                step *= -1;
            }
            list[i] += step;
            this.digest({
                [key]: list
            });
            history_1["dE"](history_1['dI'], index_3('dE'), '_ef', 500);
        }
        else if (type == 'y' &&
            (code == keyboard_1["dK"] ||
                code == keyboard_1["dL"])) {
            if (code == keyboard_1["dK"]) {
                step *= -1;
            }
            list[i] += step;
            this.digest({
                [key]: list
            });
            history_1["dE"](history_1['dI'], index_3('dF'), '_eg', 500);
        }
    },
    '_ei<click>'(e) {
        let { lines } = e.params;
        if (lines) {
            let show = !this.get('show');
            State.set({
                'dJ': show
            });
            this.digest({
                show
            });
        }
    },
    '$win<resize>'() {
        //窗口变化后，延时20ms更新界面
        this['_dR']();
    }
}).merge(index_1);

});