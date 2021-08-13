/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5b/5i",["5c","../5j/5k/index","../5j/5l/cursor","../5j/5m/index","../5n/index","./5d","./5e","./5o","./5p","./5f","./5g","./5h"],(require,exports,module)=>{
require("./5g");
require("./5h");
let $quick_l2_static_text;
let $quick_l3_static_text;
let $quick_l5_0_static_attr={'class': 'rd-mJ rd-nN rd-nT rd-nl rd-oD',};
let $quick_l5_1_static_attr={'class': 'rd-mJ rd-nN rd-nT rd-nl rd-oB',};
let $quick_l5_2_static_attr={'class': 'rd-l3 rd-nV',};

/*
    author:https://github.com/xinglie
*/
let magix_1 = require("5c");
let index_1 = require("../5j/5k/index");
let cursor_1 = require("../5j/5l/cursor");
let index_2 = require("../5j/5m/index");
let index_3 = require("../5n/index");
let axis_shadow_1 = require("./5d");
let const_1 = require("./5e");
let history_1 = require("./5o");
let keyboard_1 = require("./5p");
let transform_1 = require("./5f");
let { abs, max, round } = Math;
let { State, node, applyStyle, mark, View, inside, attach, detach } = magix_1;
applyStyle("rd-l3",".rd-oo{z-index:200}.rd-op{border-bottom:1px solid #ccc;height:20px}.rd-oq{background:#47b34e;top:0}.rd-or{background:#47b34e;height:1px;left:0}.rd-os,.rd-ot{border-right:1px solid #ccc;width:20px}.rd-os{border-bottom:1px solid #ccc;height:20px;left:0;top:0;z-index:201}.rd-ou{left:5px;top:22px}.rd-ov{left:24px;top:2px}.rd-ow,.rd-ox{z-index:100}.rd-ow{top:20px}.rd-ox{left:20px}.rd-oy{border-left:1px solid #47b34e;width:1px}.rd-oz{background:#47b34e;height:1px}.rd-oA{left:-15px;opacity:.7;top:4px}.rd-oB{left:4px;top:2px}.rd-oC{left:4px;opacity:.7;top:-15px}.rd-oA:hover,.rd-oC:hover{opacity:1}.rd-oD{left:4px;top:2px}.rd-oE{background:#47b34e;cursor:ns-resize;height:3px;left:30px;top:-1px;width:20px}.rd-oF{background:#47b34e;cursor:ew-resize;height:20px;left:-2px;top:20px;width:3px}.rd-oF:focus,.rd-oE:focus{background:#fff;outline:1px solid #47b34e}.rd-oG{background:rgba(71,179,78,.3)}");
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
for(let $q_c_eqpptjk=yHelpers.length,yi=0;yi<$q_c_eqpptjk;yi+=1){
let yHelp=yHelpers[yi];
current=abs(yStart)+yHelp*scale+20;$vnode_3=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-l3 rd-mJ rd-mM rd-nT rd-nk rd-oC','title': (i18n('l4')),'mx5-click': $viewId+'_my({type:\'y\',i:'+(yi)+'})',},$vnode_3)];$vnode_3=[$createVNode(0,(toUnit(yHelp)))];$vnode_2.push($createVNode('span',$quick_l5_0_static_attr,$vnode_3),$createVNode('span',{'class': 'rd-mJ rd-mM rd-nO rd-oE rd-on','mx5-pointerdown': $viewId+'_mC({type:\'y\',i:'+(yi)+',c:'+(current)+'})','title': (i18n('l5')),'tabindex': 0,'mx5-keydown': $viewId+'_mF({type:\'y\',i:'+(yi)+'})',}));$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-ol rd-oz','style': 'width:'+(vWidth)+'px;top:'+(current)+'px',},$vnode_2));
};$$_class='rd-ox rd-mK';if(!show){;$$_class+=' rd-mO';};$vnode_0=[$createVNode('div',{'style': 'transform:translateY(-'+(sTop)+'px)','id': '_rd_'+$viewId+'_y_help','class': $$_class,},$vnode_1)];$vnode_1=[];
for(let $q_c_vmekwypql=xHelpers.length,xi=0;xi<$q_c_vmekwypql;xi+=1){
let xHelp=xHelpers[xi];
current=abs(xStart)+xHelp*scale;$vnode_3=[$quick_l2_static_text||($quick_l2_static_text=$createVNode(0,''))];$vnode_2=[$createVNode('i',{'class': 'rd-l3 rd-mJ rd-mM rd-nT rd-nk rd-oA','title': (i18n('l4')),'mx5-click': $viewId+'_my({type:\'x\',i:'+(xi)+'})',},$vnode_3)];$vnode_3=[$createVNode(0,(toUnit(xHelp)))];$vnode_2.push($createVNode('span',$quick_l5_1_static_attr,$vnode_3),$createVNode('span',{'class': 'rd-mJ rd-mM rd-nO rd-oF rd-on','mx5-pointerdown': $viewId+'_mC({type:\'x\',i:'+(xi)+',c:'+(current)+'})','title': (i18n('l5')),'tabindex': 0,'mx5-keydown': $viewId+'_mF({type:\'x\',i:'+(xi)+'})',}));$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-om rd-oy','style': 'height:'+(vHeight)+'px;left:'+(current)+'px',},$vnode_2));
};$$_class='rd-ow rd-mK';if(!show){;$$_class+=' rd-mO';};$vnode_0.push($createVNode('div',{'style': 'transform:translateX(-'+(sLeft)+'px)','id': '_rd_'+$viewId+'_x_help','class': $$_class,},$vnode_1));$vnode_2=[$createVNode('div',{'mx5-owner': $viewId,'$': 'decimals,width,xStart,xEnd,step,space,scale,hbar,bar,barColor','mx5-view': '5b/5g?decimals='+$keyOf($refData,decimals,'i!')+'&unit='+($encodeUrl(unit))+'&width='+$keyOf($refData,width,'i@')+'&xStart='+$keyOf($refData,xStart,'i$')+'&xEnd='+$keyOf($refData,xEnd,'i^')+'&step='+$keyOf($refData,step,'i*')+'&space='+$keyOf($refData,space,'i{')+'&scale='+$keyOf($refData,scale,'i}')+'&hbar='+$keyOf($refData,hbar,'i[')+'&bar='+$keyOf($refData,bar,'i]')+'&barColor='+$keyOf($refData,barColor,'i|'),'class': 'rd-mC','style': 'width:'+(width)+'px',})];$vnode_1=[$createVNode('div',{'class': 'rd-mA rd-mB rd-mK rd-nO rd-oo rd-op','id': '_rd_'+$viewId+'_x',},$vnode_2)];$vnode_3=[$quick_l3_static_text||($quick_l3_static_text=$createVNode(0,'-'))];$vnode_2=[$createVNode('span',{'class': 'rd-mJ rd-nT rd-ou','id': '_rd_'+$viewId+'_x_tip',},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-mO rd-nd rd-om rd-oo rd-oq','id': '_rd_'+$viewId+'_x_line','style': 'height:'+(vHeight+20)+'px',},$vnode_2));$vnode_0.push($createVNode('div',{'mx5-pointermove': $viewId+'_ms()','mx5-pointerout': $viewId+'_mt()','mx5-click': $viewId+'_mw()',},$vnode_1));$vnode_2=[$createVNode('div',{'mx5-owner': $viewId,'$': 'decimals,height,yStart,yEnd,step,space,scale,hbar,bar,barColor','mx5-view': '5b/5h?decimals='+$keyOf($refData,decimals,'i!')+'&unit='+($encodeUrl(unit))+'&height='+$keyOf($refData,height,'i,')+'&yStart='+$keyOf($refData,yStart,'i.')+'&yEnd='+$keyOf($refData,yEnd,'i`')+'&step='+$keyOf($refData,step,'i*')+'&space='+$keyOf($refData,space,'i{')+'&scale='+$keyOf($refData,scale,'i}')+'&hbar='+$keyOf($refData,hbar,'i[')+'&bar='+$keyOf($refData,bar,'i]')+'&barColor='+$keyOf($refData,barColor,'i|'),'style': 'height:'+(height)+'px',})];$vnode_1=[$createVNode('div',{'class': 'rd-mA rd-mK rd-nO rd-oo rd-ot','style': 'height:'+(vHeight)+'px','id': '_rd_'+$viewId+'_y',},$vnode_2)];$vnode_3=[$quick_l3_static_text||($quick_l3_static_text=$createVNode(0,'-'))];$vnode_2=[$createVNode('span',{'class': 'rd-mJ rd-nT rd-ov','id': '_rd_'+$viewId+'_y_tip',},$vnode_3)];$vnode_1.push($createVNode('div',{'class': 'rd-mJ rd-mL rd-mO rd-ol rd-oo rd-or','id': '_rd_'+$viewId+'_y_line','style': 'width:'+(vWidth+20)+'px',},$vnode_2));$vnode_0.push($createVNode('div',{'mx5-pointermove': $viewId+'_mu()','mx5-pointerout': $viewId+'_mv()','mx5-click': $viewId+'_mx()',},$vnode_1));let lines=xHelpers.length+yHelpers.length;;$vnode_1=[];
if(lines){
$text='';if(show){;$text+='';}else{;$text+='';};$vnode_2=[$createVNode(0,$text)];$vnode_1.push($createVNode('i',$quick_l5_2_static_attr,$vnode_2));
};$$_class='rd-os rd-mJ rd-mA rd-mX rd-mZ rd-ng rd-nK';if(lines){;$$_class+=' rd-nk';};$$_title='';if(lines){;$$_title+=''+(i18n(show?'l6':'l7'))+'(H)';};$vnode_0.push($createVNode('div',{'mx5-click': $viewId+'_mG({lines:'+(lines)+'})','class': $$_class,'title': $$_title,},$vnode_1)); 

return $createVNode($viewId,0,$vnode_0); } ,
    init() {
        //监听设计区域的滚动事件，来同步标尺的位置
        let n = node('_rd_stage');
        let scrollCallback = this['_m_'].bind(this);
        attach(n, 'scroll', scrollCallback, passiveOptions);
        this['_ma'] = n;
        this.set({
            abs,
            toUnit(v) {
                return const_1['l4'](const_1['l3'](v));
            },
            bar: 4,
            hbar: 12,
            barColor: '#aaa' //颜色
        });
        let update = this['_mb'](this.render, 30);
        let toggleHelpLine = e => {
            if (e['l2'] ||
                !e['l3'] ||
                e['l4'])
                return;
            let { 'l5': code, 'l6': shiftKey, 'l7': ctrlKey, 'l8': altKey } = e;
            if (code == keyboard_1['l2']) {
                e['l9']();
                if (altKey) {
                    this.render({ '_mc': 1 });
                }
                else if (!(shiftKey || ctrlKey)) {
                    this.render({ '_md': 1 });
                }
            }
        };
        this['_me'] = this['_mb'](this['_mf'], 20);
        State.on('l7', update);
        State.on('l6', update);
        State.on('l8', update);
        State.on('l9', update);
        State.on('m_', update);
        State.on('ma', toggleHelpLine);
        axis_shadow_1['l2']();
        this.on('destroy', () => {
            detach(n, 'scroll', scrollCallback);
            State.off('l7', update);
            State.off('l6', update);
            State.off('l9', update);
            State.off('l8', update);
            State.off('m_', update);
            State.off('ma', toggleHelpLine);
            axis_shadow_1['l3']();
        });
    },
    async '_mf'() {
        if (this['_mg']) {
            let n = this['_ma'];
            let sa = State.get('l3');
            //以下计算滚动区域的宽和高，当区域小于电脑屏幕时，则使用电脑屏幕的尺寸
            //多加的padding是在屏幕外依然画上标尺，防止缩放瞬间显示空白
            let width = max(n.scrollWidth, window.innerWidth) + const_1["l5"];
            let height = max(n.scrollHeight, window.innerHeight) + const_1["l5"];
            let xStart = 0; //水平标尺的起始值
            let xEnd = 0; //水平结束值
            let axisWidth = const_1["l6"]; //标尺尺寸
            let yStart = 0; //垂直标尺的起始值
            let yEnd = 0; //结束值
            let outer = node('_rd_so');
            let offset = transform_1['l2']();
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
            let unit = State.get('l4');
            let map = const_1['l7'][unit] || const_1['l7']['px'];
            let si = map[sa];
            let m = mark(this, '_mh');
            await this.digest({
                unit: State.get('l4'),
                decimals: map['_l9'],
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
                !this['_mi']) {
                //缓存节点对象，防止反复读取
                this['_mi'] = node('_rd_' + this.id + '_x');
                this['_mj'] = node('_rd_' + this.id + '_y');
                this['_mk'] = node('_rd_' + this.id + '_x_line');
                this['_ml'] = node('_rd_' + this.id + '_y_line');
                this['_mm'] = node('_rd_' + this.id + '_x_tip');
                this['_mn'] = node('_rd_' + this.id + '_y_tip');
                this['_mo'] = node('_rd_' + this.id + '_x_help');
                this['_mp'] = node('_rd_' + this.id + '_y_help');
            }
        }
    },
    '_m_'() {
        let xNode = this['_mi'];
        let yNode = this['_mj'];
        let yHelpNode = this['_mp'];
        let xHelpNode = this['_mo'];
        let scroll = this['_ma'];
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
        let m = mark(this, '_mh');
        let xHelpers = State.get('l5');
        let yHelpers = State.get('l6');
        let show = this.get('show');
        if (xHelpers.length ||
            yHelpers.length) {
            if (e) {
                if (e.type == 'l7') {
                    show = 1;
                }
                else if (e['_md']) {
                    show = !show;
                }
                else if (e['_mc']) {
                    xHelpers.length = 0;
                    yHelpers.length = 0;
                    history_1["l2"](history_1['l3']);
                }
            }
        }
        else {
            show = 1;
        }
        State.set({
            'l7': show
        });
        this.set({
            xHelpers,
            yHelpers,
            show
        });
        //因为设计区和标尺并不在一起，所以以下尝试在设计区就绪后再初始化标尺
        let test = () => {
            if (node('_rd_sc')) {
                index_2["_mq"](test);
                if (m()) {
                    this['_mg'] = 1;
                    this['_mf']();
                }
            }
        };
        index_2["_mr"](20, test);
    },
    '_ms<pointermove>'(e) {
        let preventKeypress = State.get('l8');
        let xNode = this['_mi'];
        if (preventKeypress || !xNode)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageX - offset.x; //实际坐标需要鼠标坐标减去节点的左上角坐标
        let start = this.get('xStart');
        let styles = this['_mk'].style;
        styles.display = 'block';
        styles.left = v + 'px';
        let mm = v - start + xNode.scrollLeft;
        let scale = this.get('scale'); //根据缩放转化成需要显示的值
        let toUnit = this.get('toUnit');
        this['_mm'].innerText = toUnit(mm / scale);
    },
    '_mt<pointerout>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget) &&
            this['_mk']) {
            this['_mk'].style.display = 'none';
        }
    },
    '_mu<pointermove>'(e) {
        let preventKeypress = State.get('l8');
        let yNode = this['_mj'];
        if (preventKeypress || !yNode)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageY - offset.y;
        let start = this.get('yStart');
        let styles = this['_ml'].style;
        styles.display = 'block';
        styles.top = v + 'px';
        let mm = v - start - const_1["l6"] + yNode.scrollTop;
        let scale = this.get('scale');
        let toUnit = this.get('toUnit');
        this['_mn'].innerText = toUnit(mm / scale);
    },
    '_mv<pointerout>'(e) {
        if (!inside(e.relatedTarget, e.eventTarget) &&
            this['_ml']) {
            this['_ml'].style.display = 'none';
        }
    },
    '_mw<click>'(e) {
        let xLine = this['_mk'];
        if (!xLine)
            return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageX - offset.x;
        xLine.style.display = 'none';
        let start = this.get('xStart');
        let xNode = this['_mi'];
        //计算需要显示的px单位的值
        let mm = ((v - start + xNode.scrollLeft) / this.get('scale')) | 0;
        let xHelpers = this.get('xHelpers');
        xHelpers.push(mm);
        State.set({
            'l7': 1
        });
        this.digest({
            show: 1,
            xHelpers
        });
        State.fire('mb');
        history_1["l2"](history_1['l4'], index_3('l2'));
    },
    '_mx<click>'(e) {
        let yLine = this['_ml'];
        if (!yLine)
            return;
        yLine.style.display = 'none';
        let offset = this.root.getBoundingClientRect();
        let v = e.pageY - offset.y;
        let start = this.get('yStart');
        let yNode = this['_mj'];
        let mm = ((v - start - const_1["l6"] + yNode.scrollTop) / this.get('scale')) | 0;
        let yHelpers = this.get('yHelpers');
        yHelpers.push(mm);
        State.set({
            'l7': 1
        });
        this.digest({
            show: 1,
            yHelpers
        });
        State.fire('mb');
        history_1["l2"](history_1['l4'], index_3('l3'));
    },
    '_my<click>'(e) {
        let { type, i } = e.params;
        let key = type + 'Helpers';
        let list = this.get(key);
        list.splice(i, 1);
        this.digest({
            [key]: list
        });
        State.fire('mb');
        history_1["l2"](history_1['l5'], index_3(type == 'x' ? 'l2' : 'l3'));
    },
    '_mC<pointerdown>'(e) {
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
            'l8': 1
        });
        this['_mz'](e, (evt) => {
            if (!showedCursor) {
                showedCursor = 1;
                cursor_1["_mA"](e.eventTarget);
            }
            let oft;
            if (type == 'x') {
                oft = evt.pageX - e.pageX + current;
            }
            else {
                oft = evt.pageY - e.pageY + current - const_1["l6"];
            }
            list[i] = ((oft - start) / this.get('scale')) | 0;
            this.digest({
                [key]: list
            });
        }, () => {
            State.set({
                'l8': 0
            });
            if (showedCursor) {
                cursor_1["_mB"]();
                history_1["l2"](history_1['l6'], index_3(type == 'x' ? 'l2' : 'l3'));
            }
        });
    },
    //通过键盘按键来移动辅助线
    '_mF<keydown>'(e) {
        let step = e.shiftKey ? const_1["l8"] : const_1["l9"];
        let { type, i } = e.params;
        let key = `${type}Helpers`;
        let list = this.get(key);
        let { code } = e;
        if (code == keyboard_1["l3"]) { //按tab键时，需要把焦点移走
            e.eventTarget.blur();
            return;
        }
        else if (code == keyboard_1["l4"] ||
            code == keyboard_1["l5"]) { //按删除键时，删除辅助线
            e.eventTarget.blur();
            list.splice(i, 1);
            this.digest({
                [key]: list
            });
            history_1["l2"](history_1['l5'], index_3(type == 'x' ? 'l2' : 'l3'));
            return;
        }
        //不同方向的辅助线，键盘移动的方向键不同
        if (type == 'x' &&
            (code == keyboard_1["l6"] ||
                code == keyboard_1["l7"])) {
            if (code == keyboard_1["l6"]) {
                step *= -1;
            }
            list[i] += step;
            this.digest({
                [key]: list
            });
            history_1["l2"](history_1['l6'], index_3('l2'), '_mD', 500);
        }
        else if (type == 'y' &&
            (code == keyboard_1["l8"] ||
                code == keyboard_1["l9"])) {
            if (code == keyboard_1["l8"]) {
                step *= -1;
            }
            list[i] += step;
            this.digest({
                [key]: list
            });
            history_1["l2"](history_1['l6'], index_3('l3'), '_mE', 500);
        }
    },
    '_mG<click>'(e) {
        let { lines } = e.params;
        if (lines) {
            let show = !this.get('show');
            State.set({
                'l7': show
            });
            this.digest({
                show
            });
        }
    },
    '$win<resize>'() {
        //窗口变化后，延时20ms更新界面
        this['_me']();
    }
}).merge(index_1);

});