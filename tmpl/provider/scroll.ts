/**
 * 贴边滚动插件
 */

import Magix from 'magix';
import Runner from '../gallery/mx-runner/index';
import Const from '../designer/const';
import PoleProvider from './pole';
let { State, node } = Magix;
/**
 * 靠边滚动编辑区鼠标信息
 */
let pointerInfo = null;
let stageBound = null;
let offsetX = 0, offsetY = 0;
let stageDragScrollZone,
    stage;
let canScroll = 1;//滚动任务里，在外部处理完成后才进行下一次的滚动，避免外部还未处理结束，滚动条一直滚动导致任务堆积
/**
 * 滚动任务
 */
let scrollRunner = () => {
    //console.log(pointerInfo, canScroll);
    if (pointerInfo &&
        canScroll) {
        let { pageX, pageY } = pointerInfo;
        pageX -= window.scrollX;
        pageY -= window.scrollY;
        
        if (!stageBound) {
            stageBound = (stage as HTMLDivElement).getBoundingClientRect();
        }
        let oldTop = stage.scrollTop,
            oldLeft = stage.scrollLeft,
            toTop = oldTop,
            toLeft = oldLeft,
            scroll = 1,
            maxTop = stage.scrollHeight - stage.clientHeight,
            maxLeft = stage.scrollWidth - stage.clientWidth;
        if (pageY > stageBound.y &&
            pageY < stageBound.y + Const["@:{const#move.near.side.area}"]) {
            toTop = oldTop - Const["@:{const#move.near.step}"];
            if (toTop < 0) {
                toTop = 0;
            }
            //stage.scrollTop -= Const["@:{const#move.near.step}"];
        } else if (pageY >= stageBound.y + stageBound.height - Const["@:{const#move.near.side.area}"] &&
            pageY < stageBound.y + stageBound.height) {
            toTop = oldTop + Const["@:{const#move.near.step}"];
            if (toTop > maxTop) {
                toTop = maxTop;
            }
            //stage.scrollTop += Const["@:{const#move.near.step}"];
        }
        if (pageX < stageBound.x + Const["@:{const#move.near.side.area}"]) {
            toLeft = oldLeft - Const["@:{const#move.near.step}"];
            if (toLeft < 0) {
                toLeft = 0;
            }
        } else if (pageX > stageBound.x + stageBound.width - Const["@:{const#move.near.side.area}"] &&
            pageY < stageBound.x + stageBound.width) {
            toLeft = oldLeft + Const["@:{const#move.near.step}"];
            if (toLeft > maxLeft) {
                toLeft = maxLeft;
            }
            //stage.scrollLeft += Const["@:{const#move.near.step}"];
        }
        if (oldTop != toTop) {
            offsetY += toTop - oldTop;
            scroll |= 2;
        }
        if (oldLeft != toLeft) {
            offsetX += toLeft - oldLeft;
            scroll |= 4;
        }
        if (scroll != 1) {
            canScroll = 0;
            let offsetEvent = {
                '@:{interval.move.event#x}': offsetX,
                '@:{interval.move.event#y}': offsetY,
                '@:{interval.move.event#ready}'() {
                    if ((scroll & 2)) {
                        stage.scrollTop = toTop;
                    }
                    if ((scroll & 4)) {
                        stage.scrollLeft = toLeft;
                    }
                    PoleProvider['@:{pole#update}']({ size: 1 });
                    canScroll = 1;
                }
            };
            State.fire('@:{event#stage.interval.move}', offsetEvent);
            //updateElementToAreaUI(pointerInfo, 1);
        }
    }
};
/**
 * 开始靠边滚动
 * @param e 鼠标事件
 */
let startScrollWhenNearSide = e => {
    if (!pointerInfo) {
        State.set({
            '@:{global#stage.prevent.actions}': 1
        });
        if (!stageDragScrollZone) {
            stageDragScrollZone = node('_rd_sdsz');
        }
        stageDragScrollZone.classList.remove('@:scoped.style:none');
        Runner["@:{task.add}"](10, scrollRunner);
    }
    pointerInfo = e;
};
/**
 * 停止靠边滚动
 */
let stopScrollWhenNearSide = () => {
    pointerInfo = null;
    stageBound = null;
    offsetX = offsetY = 0;
    State.set({
        '@:{global#stage.prevent.actions}': 0
    });
    if (stageDragScrollZone) {
        stageDragScrollZone.classList.add('@:scoped.style:none');
    }
    Runner["@:{task.remove}"](scrollRunner);
    canScroll = 1;
};

export default {
    '@:{scroll#setup}'() {
        stage = node('_rd_stage');
        State.on('@:{event#drag.element.move}', startScrollWhenNearSide);
        State.on('@:{event#drag.element.stop}', stopScrollWhenNearSide);
    },
    '@:{scroll#teardown}'() {
        stage = null;
        stopScrollWhenNearSide();
        State.off('@:{event#drag.element.move}', startScrollWhenNearSide);
        State.off('@:{event#drag.element.stop}', stopScrollWhenNearSide);
    }
}