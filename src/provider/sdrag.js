/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/sdrag",["4e","../4d/57","../4l/4n/select","../4p/index"],(require,exports,module)=>{


/**
 * 拖动提示插件
 */
let magix_1 = require("4e");
let stage_generic_1 = require("../4d/57");
let select_1 = require("../4l/4n/select");
let index_1 = require("../4p/index");
let { State, node } = magix_1;
let lastHover, lastHod;
let dragElementMoveFromToolbox = (e) => {
    //fromToolbxSize = e;
    let { node: hover, stage: insideStage, ctrl, allowedTotal, allowedStage, pageX, pageY, width, height, hod, total, count } = e;
    if (insideStage) { //在设计区才进行相应的提示处理
        //更新跟随鼠标移动的矩形
        let hasSize = width || height;
        if (hasSize) {
            // +1 for snap line
            select_1["_fY"](pageX, pageY, width, height);
            //更新icon
            select_1["_kV"](ctrl.icon);
        }
        let canDrop, page = State.get('dN');
        if (page.readonly) {
            select_1["_iq"](index_1('lh'));
        }
        else {
            //如果鼠标下的节点变化了，这里进行性能处理，只有变化的才进入处理
            if (lastHover != hover) {
                lastHover = hover;
                //容器的提示节点
                let dashedNode = hod && node(hod['_gF']);
                if (!hod ||
                    dashedNode != lastHod) {
                    //不在容器或容器有变化
                    if (lastHod) { //从一个容器变换到另一个
                        let { classList } = lastHod;
                        //, '@:scoped.style:full-fill'
                        classList.remove('rd-fb');
                        lastHod = null;
                    }
                    //查询一共允许多少个
                    canDrop = allowedTotal == null || total < allowedTotal;
                    let tip;
                    if (!hod) { //在设计区
                        //查询节点是否支持放在设计区
                        canDrop = canDrop && (!ctrl['_fV'] ||
                            ctrl['_fV'].root);
                        if (canDrop) { //查询设计区允许多少个
                            canDrop = allowedStage == null || count < allowedStage;
                        }
                        tip = 'lj';
                        //console.log(tip);
                    }
                    else { //在容器里
                        //console.log('enter');
                        lastHod = dashedNode;
                        //同样需要查询能放多少个
                        if (canDrop && allowedStage >= 0) {
                            let cc = stage_generic_1['dF'](hod['_gC'], ctrl.type);
                            canDrop = cc.length < allowedStage;
                        }
                        tip = 'li';
                    }
                    if (canDrop) { //能放置
                        if (lastHod) { //容器显示可放置提示
                            let { classList } = lastHod;
                            //, '@:scoped.style:full-fill'
                            classList.add('rd-fb');
                        }
                        if (hasSize) {
                            //可放置提示文字
                            select_1["_iq"](index_1(tip));
                        }
                    }
                    else if (hasSize) {
                        //不可放置
                        select_1["_iq"](index_1('lh'));
                    }
                }
            }
        }
        // if (lastHover &&
        //     (lastHover.id == '_rd_sc' ||
        //         lastHover.classList.contains('@:./stage.less:stage-workaround'))) {
        //     updateElementToAreaUI(e);
        // }
    }
    else { //不在设计区
        if (lastHod) { //如果有容器，需要移除容器的提示
            let { classList } = lastHod;
            //, '@:scoped.style:full-fill'
            classList.remove('rd-fb');
        }
        //隐藏鼠标样式及清除相应的缓存信息
        select_1["_ed"]();
        lastHover = null;
        lastHod = null;
    }
};
module.exports= {
    'dE'() {
        return lastHod;
    },
    'dF'() {
        lastHod = lastHover = null;
    },
    'dG'() {
        State.on('dR', dragElementMoveFromToolbox);
    },
    'dH'() {
        State.off('dR', dragElementMoveFromToolbox);
    }
};

});