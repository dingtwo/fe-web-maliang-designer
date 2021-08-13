/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/scroll",["5c","../5j/5m/index","../5b/5e","./pole"],(require,exports,module)=>{

"use strict";
/**
 * 贴边滚动插件
 */
Object.defineProperty(exports, "__esModule", { value: true });
let magix_1 = require("5c");
let index_1 = require("../5j/5m/index");
let const_1 = require("../5b/5e");
let pole_1 = require("./pole");
let { State, node } = magix_1;
/**
 * 靠边滚动编辑区鼠标信息
 */
let pointerInfo = null;
let stageBound = null;
let offsetX = 0, offsetY = 0;
let stageDragScrollZone, stage;
let canScroll = 1; //滚动任务里，在外部处理完成后才进行下一次的滚动，避免外部还未处理结束，滚动条一直滚动导致任务堆积
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
            stageBound = stage.getBoundingClientRect();
        }
        let oldTop = stage.scrollTop, oldLeft = stage.scrollLeft, toTop = oldTop, toLeft = oldLeft, scroll = 1, maxTop = stage.scrollHeight - stage.clientHeight, maxLeft = stage.scrollWidth - stage.clientWidth;
        if (pageY > stageBound.y &&
            pageY < stageBound.y + const_1["ml"]) {
            toTop = oldTop - const_1["mm"];
            if (toTop < 0) {
                toTop = 0;
            }
            //stage.scrollTop -= Const["@:{const#move.near.step}"];
        }
        else if (pageY >= stageBound.y + stageBound.height - const_1["ml"] &&
            pageY < stageBound.y + stageBound.height) {
            toTop = oldTop + const_1["mm"];
            if (toTop > maxTop) {
                toTop = maxTop;
            }
            //stage.scrollTop += Const["@:{const#move.near.step}"];
        }
        if (pageX < stageBound.x + const_1["ml"]) {
            toLeft = oldLeft - const_1["mm"];
            if (toLeft < 0) {
                toLeft = 0;
            }
        }
        else if (pageX > stageBound.x + stageBound.width - const_1["ml"] &&
            pageY < stageBound.x + stageBound.width) {
            toLeft = oldLeft + const_1["mm"];
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
                'l3': offsetX,
                'l2': offsetY,
                'l5'() {
                    if ((scroll & 2)) {
                        stage.scrollTop = toTop;
                    }
                    if ((scroll & 4)) {
                        stage.scrollLeft = toLeft;
                    }
                    pole_1['l4']({ size: 1 });
                    canScroll = 1;
                }
            };
            State.fire('mg', offsetEvent);
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
            'l8': 1
        });
        if (!stageDragScrollZone) {
            stageDragScrollZone = node('_rd_sdsz');
        }
        stageDragScrollZone.classList.remove('rd-mO');
        index_1["_mr"](10, scrollRunner);
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
        'l8': 0
    });
    if (stageDragScrollZone) {
        stageDragScrollZone.classList.add('rd-mO');
    }
    index_1["_mq"](scrollRunner);
    canScroll = 1;
};
module.exports= {
    'l2'() {
        stage = node('_rd_stage');
        State.on('mf', startScrollWhenNearSide);
        State.on('mi', stopScrollWhenNearSide);
    },
    'l3'() {
        stage = null;
        stopScrollWhenNearSide();
        State.off('mf', startScrollWhenNearSide);
        State.off('mi', stopScrollWhenNearSide);
    }
};

});