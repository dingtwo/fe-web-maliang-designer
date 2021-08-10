/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import DragDrop from '../gallery/mx-dragdrop/index';
import Cursor from '../gallery/mx-pointer/cursor';
import Runner from '../gallery/mx-runner/index';
import I18n from '../i18n/index';
import AxisShadow from './axis-shadow';
import Const from './const';
import DHistory from './history';
import Keyboard from './keyboard';
import Transform from './transform';
let { abs, max, round } = Math;
let { State, node, applyStyle, mark, View, inside,
    attach, detach } = Magix;
applyStyle('@:axis.less');
let passiveOptions = {
    passive: true
};
export default View.extend({
    tmpl: '@:axis.html',
    init() {
        //监听设计区域的滚动事件，来同步标尺的位置
        let n = node('_rd_stage');
        let scrollCallback = this['@:{sync.scroll}'].bind(this);
        attach(n, 'scroll', scrollCallback, passiveOptions);
        this['@:{scroll.node}'] = n;
        this.set({
            abs,
            toUnit(v) {
                return Const['@:{const#scale.to.unit}'](Const['@:{const#to.unit}'](v));
            },
            bar: 4,//普通刻度条的高度
            hbar: 12,//关键指示条的高度，带数字,
            barColor: '#aaa'//颜色
        });
        let update = this['@:{debounce}'](this.render, 30);
        let toggleHelpLine = e => {
            if (e['@:{keypress#is.prevent.actions}'] ||
                !e['@:{keypress#is.key.down}'] ||
                e['@:{keypress#active.is.input}']) return;
            let {
                '@:{keypress#code}': code,
                '@:{keypress#shift.key}': shiftKey,
                '@:{keypress#ctrl.key}': ctrlKey,
                '@:{keypress#alt.key}': altKey
            } = e;
            if (code == Keyboard['@:{key#h}']) {
                e['@:{keypress#prevent.default}']();
                if (altKey) {
                    this.render({ '@:{clear}': 1 });
                } else if (!(shiftKey || ctrlKey)) {
                    this.render({ '@:{toggle}': 1 });
                }
            }
        };
        this['@:{cached.rerender}'] = this['@:{debounce}'](this['@:{rerender}'], 20);
        State.on('@:{event#history.shift.change}', update);
        State.on('@:{event#stage.scale.change}', update);
        State.on('@:{event#stage.page.change}', update);
        State.on('@:{event#stage.size.change}', update);
        State.on('@:{event#stage.page.and.elements.change}', update);
        State.on('@:{event#stage.key.press}', toggleHelpLine);
        AxisShadow['@:{axis.shadow#setup}']();
        this.on('destroy', () => {
            detach(n, 'scroll', scrollCallback);
            State.off('@:{event#history.shift.change}', update);
            State.off('@:{event#stage.scale.change}', update);
            State.off('@:{event#stage.size.change}', update);
            State.off('@:{event#stage.page.change}', update);
            State.off('@:{event#stage.page.and.elements.change}', update);
            State.off('@:{event#stage.key.press}', toggleHelpLine);
            AxisShadow['@:{axis.shadow#teardown}']();
        });
    },
    async '@:{rerender}'() {
        if (this['@:{can.render}']) {
            let n = this['@:{scroll.node}'];
            let sa = State.get('@:{global#stage.scale}');
            //以下计算滚动区域的宽和高，当区域小于电脑屏幕时，则使用电脑屏幕的尺寸
            //多加的padding是在屏幕外依然画上标尺，防止缩放瞬间显示空白
            let width = max(n.scrollWidth, window.innerWidth) + Const["@:{const#axis.padding}"];
            let height = max(n.scrollHeight, window.innerHeight) + Const["@:{const#axis.padding}"];
            let xStart = 0;//水平标尺的起始值
            let xEnd = 0;//水平结束值
            let axisWidth = Const["@:{const#axis.size}"];//标尺尺寸
            let yStart = 0;//垂直标尺的起始值
            let yEnd = 0;//结束值
            let outer = node('_rd_so');
            let offset = Transform['@:{transform#get.stage.dom.rect}']();
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
            let vHeight = n.offsetHeight;//设计区的可视尺寸
            let vWidth = n.offsetWidth;
            let unit = State.get('@:{global#stage.unit}');
            let map = Const['@:{const#axis.unit.map}'][unit] || Const['@:{const#axis.unit.map}']['px'];
            let si = map[sa];
            let m = mark(this, '@:{render}');
            await this.digest({
                unit: State.get('@:{global#stage.unit}'),
                decimals: map['@:{decimals}'],
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
                !this['@:{x.axis}']) {
                //缓存节点对象，防止反复读取
                this['@:{x.axis}'] = node('_rd_' + this.id + '_x');
                this['@:{y.axis}'] = node('_rd_' + this.id + '_y');
                this['@:{x.line}'] = node('_rd_' + this.id + '_x_line');
                this['@:{y.line}'] = node('_rd_' + this.id + '_y_line');
                this['@:{x.line.tip}'] = node('_rd_' + this.id + '_x_tip');
                this['@:{y.line.tip}'] = node('_rd_' + this.id + '_y_tip');
                this['@:{x.axis.help}'] = node('_rd_' + this.id + '_x_help');
                this['@:{y.axis.help}'] = node('_rd_' + this.id + '_y_help');
            }
        }
    },
    '@:{sync.scroll}'() {//根据滚动位置同步标尺位置
        let xNode = this['@:{x.axis}'];
        let yNode = this['@:{y.axis}'];
        let yHelpNode = this['@:{y.axis.help}'];
        let xHelpNode = this['@:{x.axis.help}'];
        let scroll = this['@:{scroll.node}'];
        let top = scroll.scrollTop;
        let left = scroll.scrollLeft;
        if (xNode) {//水平标尺
            xNode.scrollLeft = left;
        }
        if (yNode) {//垂直标尺
            yNode.scrollTop = top;
        }
        if (xHelpNode) {//水平辅助线
            xHelpNode.style.transform = `translateX(-${left}px)`;
        }
        if (yHelpNode) {//垂直辅助线
            yHelpNode.style.transform = `translateY(-${top}px)`;
        }
        this.set({
            sLeft: left,
            sTop: top
        });
    },
    render(e) {
        let m = mark(this, '@:{render}');
        let xHelpers = State.get('@:{global#stage.x.help.lines}');
        let yHelpers = State.get('@:{global#stage.y.help.lines}');
        let show = this.get('show');
        if (xHelpers.length ||
            yHelpers.length) {
            if (e) {
                if (e.type == '@:{event#history.shift.change}') {
                    show = 1;
                } else if (e['@:{toggle}']) {
                    show = !show;
                } else if (e['@:{clear}']) {
                    xHelpers.length = 0;
                    yHelpers.length = 0;
                    DHistory["@:{history#save}"](DHistory['@:{history#clear.help.line}']);
                }
            }
        } else {
            show = 1;
        }
        State.set({
            '@:{global#stage.axis.show.help.lines}': show
        });
        this.set({
            xHelpers,
            yHelpers,
            show
        });
        //因为设计区和标尺并不在一起，所以以下尝试在设计区就绪后再初始化标尺
        let test = () => {
            if (node('_rd_sc')) {
                Runner["@:{task.remove}"](test);
                if (m()) {
                    this['@:{can.render}'] = 1;
                    this['@:{rerender}']();
                }
            }
        };
        Runner["@:{task.add}"](20, test);
    },
    '@:{show.x.line}<pointermove>'(e) {//鼠标在水平移动时显示垂直辅助线
        let preventKeypress = State.get('@:{global#stage.prevent.actions}');
        let xNode = this['@:{x.axis}'];
        if (preventKeypress || !xNode) return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageX - offset.x;//实际坐标需要鼠标坐标减去节点的左上角坐标
        let start = this.get('xStart');
        let styles = this['@:{x.line}'].style;
        styles.display = 'block';
        styles.left = v + 'px';
        let mm = v - start + xNode.scrollLeft;
        let scale = this.get('scale');//根据缩放转化成需要显示的值
        let toUnit = this.get('toUnit');
        this['@:{x.line.tip}'].innerText = toUnit(mm / scale);
    },
    '@:{hide.x.line}<pointerout>'(e) {//鼠标离开后，隐藏跟随鼠标的垂直辅助线
        if (!inside(e.relatedTarget, e.eventTarget) &&
            this['@:{x.line}']) {
            this['@:{x.line}'].style.display = 'none';
        }
    },
    '@:{show.y.line}<pointermove>'(e) {//同x的处理
        let preventKeypress = State.get('@:{global#stage.prevent.actions}');
        let yNode = this['@:{y.axis}'];
        if (preventKeypress || !yNode) return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageY - offset.y;
        let start = this.get('yStart');
        let styles = this['@:{y.line}'].style;
        styles.display = 'block';
        styles.top = v + 'px';
        let mm = v - start - Const["@:{const#axis.size}"] + yNode.scrollTop;
        let scale = this.get('scale');
        let toUnit = this.get('toUnit');
        this['@:{y.line.tip}'].innerText = toUnit(mm / scale);
    },
    '@:{hide.y.line}<pointerout>'(e) {//同x的处理
        if (!inside(e.relatedTarget, e.eventTarget) &&
            this['@:{y.line}']) {
            this['@:{y.line}'].style.display = 'none';
        }
    },
    '@:{add.x.help.line}<click>'(e) {//在水平标尺上点击时，添加垂直辅助线
        let xLine = this['@:{x.line}'];
        if (!xLine) return;
        let offset = this.root.getBoundingClientRect();
        let v = e.pageX - offset.x;
        xLine.style.display = 'none';
        let start = this.get('xStart');
        let xNode = this['@:{x.axis}'];
        //计算需要显示的px单位的值
        let mm = ((v - start + xNode.scrollLeft) / this.get('scale')) | 0;
        let xHelpers = this.get('xHelpers');
        xHelpers.push(mm);
        State.set({
            '@:{global#stage.axis.show.help.lines}': 1
        });
        this.digest({
            show: 1,
            xHelpers
        });
        State.fire('@:{event#stage.axis.help.lines.change}');
        DHistory["@:{history#save}"](DHistory['@:{history#add.help.line}'], I18n('@:{lang#help.line.v}'));
    },
    '@:{add.y.help.line}<click>'(e) {//在垂直标尺上点击时，添加水平辅助线
        let yLine = <HTMLDivElement>this['@:{y.line}'];
        if (!yLine) return;
        yLine.style.display = 'none';
        let offset = this.root.getBoundingClientRect();
        let v = e.pageY - offset.y;
        let start = this.get('yStart');
        let yNode = this['@:{y.axis}'];
        let mm = ((v - start - Const["@:{const#axis.size}"] + yNode.scrollTop) / this.get('scale')) | 0;
        let yHelpers = this.get('yHelpers');
        yHelpers.push(mm);
        State.set({
            '@:{global#stage.axis.show.help.lines}': 1
        });
        this.digest({
            show: 1,
            yHelpers
        });
        State.fire('@:{event#stage.axis.help.lines.change}');
        DHistory["@:{history#save}"](DHistory['@:{history#add.help.line}'], I18n('@:{lang#help.line.h}'));
    },
    '@:{delete.help.line}<click>'(e) {//点击删除辅助线
        let { type, i } = e.params;
        let key = type + 'Helpers';
        let list = this.get(key);
        list.splice(i, 1);
        this.digest({
            [key]: list
        });
        State.fire('@:{event#stage.axis.help.lines.change}');
        DHistory["@:{history#save}"](DHistory['@:{history#delete.help.line}'], I18n(type == 'x' ? '@:{lang#help.line.v}' : '@:{lang#help.line.h}'));
    },
    '@:{drag.help.line}<pointerdown>'(e) {//拖动辅助线
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
            '@:{global#stage.prevent.actions}': 1
        });
        this['@:{drag.drop}'](e, (evt) => {
            if (!showedCursor) {
                showedCursor = 1;
                Cursor["@:{show}"](e.eventTarget);
            }
            let oft;
            if (type == 'x') {
                oft = evt.pageX - e.pageX + current;
            } else {
                oft = evt.pageY - e.pageY + current - Const["@:{const#axis.size}"];
            }
            list[i] = ((oft - start) / this.get('scale')) | 0;
            this.digest({
                [key]: list
            });
        }, () => {
            State.set({
                '@:{global#stage.prevent.actions}': 0
            });
            if (showedCursor) {
                Cursor["@:{hide}"]();
                DHistory["@:{history#save}"](DHistory['@:{history#move.help.line}'], I18n(type == 'x' ? '@:{lang#help.line.v}' : '@:{lang#help.line.h}'));
            }
        });
    },
    //通过键盘按键来移动辅助线
    '@:{move.help.line}<keydown>'(e: Magix5.MagixKeyboardEvent) {
        let step = e.shiftKey ? Const["@:{const#keyboard.with.shift.move.step}"] : Const["@:{const#keyboard.move.step}"];
        let { type, i } = e.params;
        let key = `${type}Helpers`;
        let list = this.get(key);
        let { code } = e;
        if (code == Keyboard["@:{key#tab}"]) {//按tab键时，需要把焦点移走
            e.eventTarget.blur();
            return;
        } else if (code == Keyboard["@:{key#delete}"] ||
            code == Keyboard["@:{key#backspace}"]) {//按删除键时，删除辅助线
            e.eventTarget.blur();
            list.splice(i, 1);
            this.digest({
                [key]: list
            });
            DHistory["@:{history#save}"](DHistory['@:{history#delete.help.line}'], I18n(type == 'x' ? '@:{lang#help.line.v}' : '@:{lang#help.line.h}'));
            return;
        }
        //不同方向的辅助线，键盘移动的方向键不同
        if (type == 'x' &&
            (code == Keyboard["@:{key#left}"] ||
                code == Keyboard["@:{key#right}"])) {
            if (code == Keyboard["@:{key#left}"]) {
                step *= -1;
            }
            list[i] += step;
            this.digest({
                [key]: list
            });
            DHistory["@:{history#save}"](DHistory['@:{history#move.help.line}'], I18n('@:{lang#help.line.v}'), '@:{x.help.lines.keyboard.move}', 500);
        } else if (type == 'y' &&
            (code == Keyboard["@:{key#up}"] ||
                code == Keyboard["@:{key#down}"])) {
            if (code == Keyboard["@:{key#up}"]) {
                step *= -1;
            }
            list[i] += step;
            this.digest({
                [key]: list
            });
            DHistory["@:{history#save}"](DHistory['@:{history#move.help.line}'], I18n('@:{lang#help.line.h}'), '@:{y.help.lines.keyboard.move}', 500);
        }
    },
    '@:{toggle.help.lines}<click>'(e: Magix5.MagixMouseEvent) {
        let { lines } = e.params;
        if (lines) {
            let show = !this.get('show');
            State.set({
                '@:{global#stage.axis.show.help.lines}': show
            });
            this.digest({
                show
            });
        }
    },
    '$win<resize>'() {//监听窗口变化
        //窗口变化后，延时20ms更新界面
        this['@:{cached.rerender}']();
    }
}).merge(DragDrop);