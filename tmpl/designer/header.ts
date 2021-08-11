/*
    author:https://github.com/xinglie
*/
import Magix from 'magix';
import Elements from '../elements/index';
import Dialog from '../gallery/mx-dialog/index';
import Dragdrop from '../gallery/mx-dragdrop/index';
import Cursor from '../gallery/mx-pointer/cursor';
import Select from '../gallery/mx-pointer/select';
import Runner from '../gallery/mx-runner/index';
import FileSystemProvider from '../provider/fs';
import Const from './const';
import Content from './content';
import Example from './example';
import Keyboard from './keyboard';
import StageAlign from './stage-align';
import StageElements from './stage-elements';
import StageGeneric from './stage-generic';
import ToJSON from './tojson';
let { node, State, applyStyle, config, View, inside, mix, isFunction } = Magix;
let Stage_Line = 1;
let { random, max, round } = Math;
let StagePadding = Const['@:{const#stage.padding}'];

applyStyle('@:header.less');
//不同浏览器对全屏的处理方式不一样，这里进行统一尝试
let Fullscreens = ['requestFullscreen',
    'webkitRequestFullScreen',
    'webkitRequestFullscreen',
    'mozRequestFullScreen',
    'msRequestFullscreen'];
export default View.extend({
    tmpl: '@:header.html',
    init() {
        this.set({
            help: Const['@:{const#shortcuts.dialog.and.help.icon}'],
            mini: State.get<number>('@:{global#provider.of.use.mini}'),
            template: config('getTemplateUrl')
        });
        let watchKeypress = (e: Report.EventOfStageKeyboardPress) => {
            let {
                '@:{keypress#code}': keyCode,
                '@:{keypress#ctrl.key}': ctrlKey,
                '@:{keypress#alt.key}': altKey,
                '@:{keypress#shift.key}': shiftKey
            } = e;
            if (keyCode == Keyboard['@:{key#p}'] &&
                ctrlKey &&
                !shiftKey &&
                !altKey) {
                e['@:{keypress#prevent.default}']();
                this['@:{print}<click>']();
            }
        };
        State.on('@:{event#stage.key.press}', watchKeypress);
        this.on('destroy', () => {
            State.off('@:{event#stage.key.press}', watchKeypress);
        });
    },
    render() {
        let elements = Elements["@:{element.manager#element.list}"]();
        let saveUrl = config('saveContentUrl');
        let canShowStageContent = Const['@:{const#save.show.stage.content}'];
        let canUseNativeFile = Const['@:{const#save.native.file}'];
        /**
         * 如果要对项目中可使用的设计元素控制，则在这里对elements数组进行控制即可
         * 比如在这里发送请求，根据服务端返回的数据进行控制
         */
        this.digest({
            native: FileSystemProvider['@:{native.file.element}'](),
            dd: canUseNativeFile || (saveUrl && canShowStageContent),
            su: saveUrl,
            cssc: canShowStageContent,
            cunf: canUseNativeFile,
            elements
        });
    },
    '@:{stop.event}<click>'(e) {
        e['@:{halt}'] = 1;
    },
    '@:{show.stage.content}<click>'() {
        State.fire('@:{event#stage.save.content}', {
            '@:{save.content.event#shift.key}': 1
        });
    },
    '@:{save.to.local}<click>'() {
        Content['@:{save}']();
    },
    '@:{read.from.local}<click>'(e) {
        let native = this.get('native');
        if (!native) {
            Content['@:{read.file}'](e.eventTarget);
        }
    },
    '@:{read.file.from.input}<change>'(e) {
        Content['@:{read.file}'](e.eventTarget);
    },
    /**
     * 当鼠标在设计元素上按下时，可能是拖动或点击动作
     * @param e 鼠标事件
     */
    '@:{add.element}<pointerdown>'(e: Magix5.MagixMouseEvent) {
        let { params,
            eventTarget, altKey,
            pageX: beginX, pageY: beginY } = e;
        beginY -= window.scrollY;
        beginX -= window.screenX;

        let { classList: rootClassList } = this.root;
        rootClassList.add('@:./header.less:header-upon-select');//让header在拖动的虚线框之上
        let { src, hide } = params;
        let { props: definedProps, ctrl } = src;//获取鼠标下的元素控制对象和预设属性
        let moreNode = eventTarget.parentNode as HTMLDivElement;//有可能是更多面板里的元素
        //Follower["@:{update}"](ctrl.icon);
        let moved;
        let stage = node('_rd_stage');
        //以下props仅为了拿到尺寸，鼠标松开添加时，会在stage-elements.ts的add.element里重新生成一份新的props，因此不要在这里对props做修改，否则会不生效
        let props = ctrl['@:{get.props}'](0, 0);//获取元素的属性，主要是为了拿到尺寸，生成相应的鼠标跟随矩形
        //如果有预设属性，则需要合并进去
        if (isFunction(definedProps)) {
            definedProps = definedProps();
        }
        mix(props, definedProps);
        if (ctrl['@:{update.props}']) {//如果元素需要动态确定属性，则调用
            ctrl['@:{update.props}'](props);
        }
        let { width, height } = props;//拿到元素的尺寸
        width = round(Const['@:{const#to.px}'](width));
        height = round(Const['@:{const#to.px}'](height));
        let scale = State.get('@:{global#stage.scale}');
        width *= scale;//根据当前缩放，生成相应的尺寸
        height *= scale;

        Select["@:{init}"]();//准备显示矩形
        Cursor["@:{root.show.by.type}"]('move');//全局显示可移动的鼠标样式
        let allowedTotalCount = ctrl['@:{allowed.total.count}'],//获取当前元素一共能添加多少个
            allowedStageCount = ctrl['@:{allowed.stage.count}'],//获取当前元素允许向设计区添加多少个
            allCount = 0,
            stageCount = 0;
        if (allowedTotalCount || allowedStageCount) {
            let { '@:{generic.all#elements}': allElements } = StageGeneric["@:{generic#get.all.elements.and.map}"]();
            allCount = StageGeneric["@:{generic#filter.elements}"](allElements, ctrl.type).length;//获取当前一共添加了多少个
            stageCount = StageGeneric["@:{generic#filter.elements}"](State.get('@:{global#stage.elements}'), ctrl.type).length;//获取当前设计区添加了多少个
        }
        let nearestElements = [];//吸附对齐的其它元素
        let page = State.get('@:{global#stage.page}'),
            isSpecialHod = ctrl.type == 'hod-header' ||
                ctrl.type == 'hod-footer',
            supportSnapElement = Const['@:{const#page.enable.snap.align.elements}'] &&
                !isSpecialHod && !page.readonly,//头尾元素手动时，不需要使用吸附对齐到其它元素，只读模式关闭对齐功能
            snapElement = page.snapElement;//
        let pos = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, snapOffset = Const['@:{const#drag.snap.to.other.element.offset}'] * scale;
        let startX = beginX,
            startY = beginY,
            testX,
            testY,
            sizesMap,
            aberration;
        //元素吸附
        if (supportSnapElement) {

            aberration = Const['@:{const#unit.px.aberration}']()

            //先计算出其它元素的可对齐坐标
            let {
                '@:{generic.all#elements}': allElements
            } = StageGeneric['@:{generic#get.all.elements.and.map}']();
            let alignElements = StageAlign['@:{align#query.align.elements}'](allElements);
            nearestElements = alignElements['@:{align.queried#align.elements.sizes}'];
            pos = alignElements['@:{align.queried#root.bound}'];
            let sInfo = StageGeneric['@:{generic#query.test.position.and.sizes}'](0, 0, [{
                '@:{align.queried#left}': 0,
                '@:{align.queried#top}': 0,
                '@:{align.queried#ctrl}': ctrl,
                '@:{align.queried#width}': width,
                '@:{align.queried#height}': height,
            }]);
            testX = sInfo['@:{test.x}'];
            testY = sInfo['@:{test.y}'];
            sizesMap = sInfo['@:{sizes.map}'];
        }
        //开始坐标，拖动时以元素中心为移动点
        startX -= width / 2 + pos.x;
        startY -= height / 2 + pos.y;
        let offsetX = 0,
            offsetY = 0,
            moveInfo,
            altPressed = snapElement ? altKey : !altKey,
            lastHoverNode,
            lastHod,
            //0 => top 1 => right 2 => bottom 3 => left 
            maxWidth = stage.scrollWidth - StagePadding[3],
            maxHeight = stage.scrollHeight - StagePadding[0],
            scrollOffsetX = 0,
            scrollOffsetY = 0;

        let moveCallback = (magixEvent?: object) => {
            if (!moveInfo) return;
            if (magixEvent) {
                scrollOffsetY = -magixEvent['@:{interval.move.event#y}'];
                scrollOffsetX - magixEvent['@:{interval.move.event#x}'];
            }
            if (!moved) {//在移动时，如果是首次回调，则更多面板需要隐藏
                if (hide) {
                    moreNode.style.display = 'none';
                }
                moved = 1;
            }
            //Follower["@:{show}"](ex);
            //触发工具栏拖动事件，并把相关的信息传递出去
            //console.log(nearestElements);
            let { pageX, pageY } = moveInfo;
            pageY -= window.scrollY;
            pageX -= window.scrollX;

            offsetX = pageX - beginX;
            offsetY = pageY - beginY;
            let hoverNode = Dragdrop["@:{from.point}"](moveInfo.clientX, moveInfo.clientY),
                insideStageZone = inside(hoverNode, stage);
            let lastElement = nearestElements[nearestElements.length - 1];
            if (hoverNode != lastHoverNode) {
                lastHod = StageElements['@:{elements#get.best.hod}'](hoverNode, ctrl);
                lastHoverNode = hoverNode;
                //新容器装入，旧容器移除
                if (lastElement && (
                    !lastHod ||
                    lastElement['@:{align.queried#mask.id}'] != lastHod['@:{mask.id}'])) {
                    if (lastElement['@:{align.queried#mask.id}']) {
                        nearestElements.pop();
                    }
                }
            }
            if (supportSnapElement) { //启用元素吸附
                if (insideStageZone) {//在设计区才判断
                    if (!altPressed &&//未按alt键
                        lastHod &&
                        lastElement['@:{align.queried#mask.id}'] != lastHod['@:{mask.id}']) {
                        let maskNode = node(lastHod['@:{mask.id}']);
                        if (maskNode) {
                            let db = maskNode.getBoundingClientRect();
                            nearestElements.push({
                                '@:{align.queried#type}': Stage_Line,
                                '@:{align.queried#mask.id}': lastHod['@:{mask.id}'],
                                '@:{align.queried#left}': db.x - pos.x - scrollOffsetX,
                                '@:{align.queried#top}': db.y - pos.y - scrollOffsetY,
                                '@:{align.queried#width}': db.width,
                                '@:{align.queried#height}': db.height
                            });
                        }
                    }
                    //console.log(nearestElements);
                    let snapInfo = StageAlign['@:{align#find.and.fire.align.position}'](nearestElements, startX, offsetX, startY, offsetY, sizesMap, testX, testY, 0, 0, altPressed, snapOffset, aberration, scrollOffsetX, scrollOffsetY, maxWidth, maxHeight);
                    offsetX = snapInfo['@:{align#new.offset.x}'];
                    offsetY = snapInfo['@:{align#new.offset.y}'];
                } else {
                    StageAlign['@:{align#reset.snap.lines}']();
                }
            }
            State.fire('@:{event#toolbox.drag.element.move}', {
                width,
                height,
                ctrl,
                stage: insideStageZone,
                hod: lastHod,
                allowedTotal: allowedTotalCount,
                total: allCount,
                allowedStage: allowedStageCount,
                count: stageCount,
                node: hoverNode,
                pageX: startX + offsetX + pos.x,
                pageY: startY + offsetY + pos.y
            });
            //触发鼠标移动事件，用于贴边滚动
            State.fire('@:{event#drag.element.move}', moveInfo);
            if (magixEvent && !magixEvent['@:{interval.move.event#called}']) {
                magixEvent['@:{interval.move.event#called}'] = 1;
                magixEvent['@:{interval.move.event#ready}']();
            }
        };
        let watchKeypress = e => {
            altPressed = snapElement ? e['@:{keypress#alt.key}'] : !e['@:{keypress#alt.key}'];
            moveCallback();
        };
        //如果按alt键，则需要实时响应界面，即拖动过程中停下来，未松开鼠标，而此时按alt键，则界面需要实时显示或隐藏吸附线，同时元素做偏移
        State.on('@:{event#stage.key.press}', watchKeypress);
        //如果设计区滚动，鼠标未动，则辅助线也需要实时更新
        State.on('@:{event#stage.interval.move}', moveCallback);
        this['@:{drag.drop}'](e, ex => {
            moveInfo = ex;
            moveCallback();
        }, (ex: Magix5.MagixMouseEvent) => {
            State.off('@:{event#stage.key.press}', watchKeypress);
            State.off('@:{event#stage.interval.move}', moveCallback);
            if (hide) {
                moreNode.style.display = '';
            }
            rootClassList.remove('@:./header.less:header-upon-select');
            //拖动结束，隐藏矩形
            Select["@:{hide}"]();
            //恢复鼠标形状
            Cursor["@:{root.hide}"]();
            State.set({//全局缓存鼠标下的对象
                '@:{global#memory.cache.element}': [src]//一次性添加多个，只需要向这个数组添加其它元素即可
            });
            if (!moved) {//如果未移动过，则是点击添加
                //位置随机到左上角
                State.fire('@:{event#toolbox.add.element}', {
                    // width,
                    // height,
                    pageX: stage.scrollLeft + ((random() * 50) | 0),
                    pageY: stage.scrollTop + ((random() * 50) | 0)
                });
                return;
            }
            if (ex) {
                //获取当前鼠标下的节点，并
                let hoverNode = Dragdrop["@:{from.point}"](ex.clientX, ex.clientY);
                State.fire('@:{event#toolbox.add.element}', {
                    node: hoverNode,
                    // width,
                    // height,
                    pageX: startX + offsetX + pos.x,//+ (list.length - i) * 20,
                    pageY: startY + offsetY + pos.y,// + (list.length - i) * 20
                });
                State.fire('@:{event#drag.element.stop}');
                if (supportSnapElement) {
                    State.fire('@:{event#stage.find.snap.element}');
                }
            }
        });
    },
    '@:{preview}<click>'() {
        let cavans = node('_rd_so');
        this['@:{cached.screen.size.width}'] = screen.width;
        this['@:{cached.screen.size.height}'] = screen.height;
        for (let fs of Fullscreens) {
            if (cavans[fs]) {
                cavans[fs]();
                break;
            }
        }
    },
    '@:{save}<click>'(e) {
        if (!e['@:{halt}']) {
            State.fire('@:{event#stage.save.content}');
        }
    },
    // '@:{display}<click>'() {
    //     let old = this['@:{display.post.fn}'];
    //     if (old) {
    //         Runner["@:{task.remove.background}"](old);
    //     }
    //     this['@:{display.try.send.message}'] = 0;
    //     let w = window.open(DEBUG ? './display-debug.html' : './display.html', '@:{display}');
    //     w.focus();
    //     let post = () => {
    //         console.log(w);
    //         w.postMessage(ToJSON(), '*');
    //         this['@:{display.try.send.message}']++;
    //         if (this['@:{display.try.send.message}'] > 20) {
    //             Runner["@:{task.remove.background}"](post);
    //         }
    //     };
    //     Runner["@:{task.add.background}"](400, this['@:{display.post.fn}'] = post);
    // },
    '@:{print}<click>'() {
        if (Const['@:{const#new.page.print}']) {
            //this.alert('打印功能正开发中...');
            let old = this['@:{printer.post.fn}'];
            if (old) {
                Runner["@:{task.remove.background}"](old);
            }
            this['@:{printer.try.send.message}'] = 0;
            let w = window.open(DEBUG ? '/print-debug.html' : './print.html', '@:{printer}');
            w.focus();
            let origin = location.protocol + '//' + location.host;
            let post = () => {
                w.postMessage(ToJSON(), origin);
                this['@:{printer.try.send.message}']++;
                if (this['@:{printer.try.send.message}'] > 20) {
                    Runner["@:{task.remove.background}"](post);
                }
            };
            Runner["@:{task.add.background}"](400, this['@:{printer.post.fn}'] = post);
        } else {
            this.mxDialog('@:./print', {
                width: max(1200, screen.width - 100)
            });
        }
    },
    '@:{help}<click>'() {
        State.fire('@:{event#stage.key.press}', {
            '@:{keypress#is.key.down}': 1,
            '@:{keypress#shift.key}': 1,
            '@:{keypress#code}': Keyboard['@:{key#slash}']
        })
    },
    '@:{show.examples}<click>'() {
        Example["@:{show}"](this);
    },
    '$win<message>'(e) {
        let origin = location.protocol + '//' + location.host;
        if (e.origin == origin &&
            e.data == '@:{printer.message.received}') {
            Runner["@:{task.remove.background}"](this['@:{printer.post.fn}']);
        }/* else if (e.data == '@:{display.message.received}') {
            Runner["@:{task.remove.background}"](this['@:{display.post.fn}']);
        }*/
    },
    '$doc<fullscreenchange,webkitfullscreenchange>'() {
        let doc = document as Document & {
            fullscreenElement: HTMLElement
            webkitCurrentFullScreenElement: HTMLElement
            mozFullScreenElement: HTMLElement
        };
        let element = doc.fullscreenElement ||
            doc.webkitCurrentFullScreenElement ||
            doc.mozFullScreenElement || null;
        State.fire('@:{event#preview}', {
            '@:{fullscreen}': 1,
            '@:{width}': this['@:{cached.screen.size.width}'],
            '@:{height}': this['@:{cached.screen.size.height}'],
            '@:{is.full.screen}': !!element
        });
    }
}).merge(Dragdrop, Dialog);
