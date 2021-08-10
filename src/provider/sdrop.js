/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("provider/sdrop",["magix5","../designer/const","../designer/stage-elements"],(require,exports,module)=>{


/**
 * 设计区拖放插件
 */
let magix_1 = require("magix5");
let const_1 = require("../designer/const");
let stage_elements_1 = require("../designer/stage-elements");
let { State, has } = magix_1;
let toUnitPropNames = ['x', 'y', 'width', 'height'];
let watchDrop = (e) => {
    if (e['@:{halt~rs}'])
        return;
    e.preventDefault();
    let bindData = State.get('@:{global#bind.field.drag.data~rs}');
    let target = e.target;
    if (bindData) {
        let fieldInfo = bindData.field;
        let elementsMap = State.get('@:{global#stage.elements.map~rs}');
        let xCtrl = elementsMap[fieldInfo.use] || elementsMap.text;
        let props = const_1['@:{const#clone~rs}'](fieldInfo.props) || {};
        for (let up of toUnitPropNames) {
            if (has(props, up)) {
                props[up] = const_1['@:{const#to.unit~rs}'](props[up]);
            }
        }
        props.bind = {
            id: bindData.id,
            url: bindData.url,
            fields: [bindData.field]
        };
        State.set({
            '@:{global#memory.cache.element~rs}': [{
                    ctrl: xCtrl,
                    props
                }]
        });
        let fromEventOffset = State.get('@:{global#bind.field.drag.event.offset~rs}');
        State.fire('@:{event#toolbox.add.element~rs}', {
            node: target,
            pageX: e.pageX - fromEventOffset['@:{offset.x~rs}'],
            pageY: e.pageY - fromEventOffset['@:{offset.y~rs}']
        });
    }
};
let watchMove = (e) => {
    let bindData = State.get('@:{global#bind.field.drag.data~rs}');
    if (bindData) {
        let elementsMap = State.get('@:{global#stage.elements.map~rs}');
        let target = e.target;
        let lastHod;
        //尝试使用字段指定的类型或默认文本类型
        let xCtrl = elementsMap[bindData.field.use] || elementsMap.text;
        if (xCtrl) { //有控制器才进入处理
            if (!e['@:{halt~rs}']) {
                lastHod = stage_elements_1['@:{elements#get.best.hod~rs}'](target, xCtrl);
                ;
            }
            State.fire('@:{event#toolbox.drag.element.move~rs}', {
                ctrl: xCtrl,
                stage: 1,
                hod: lastHod,
                node: target
            });
        }
    }
};
module.exports= {
    '@:{sdrop#setup~rs}'() {
        State.set({
            '@:{global#provider.of.stage.drop~rs}': 1
        });
    },
    '@:{sdrop#teardown~rs}'() {
        State.set({
            '@:{global#provider.of.stage.drop~rs}': null
        });
    },
    '@:{sdrop#drag.enter~rs}': watchMove,
    '@:{sdrop#drop~rs}': watchDrop
};

});