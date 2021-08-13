/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5r/sdrop",["5c","../5b/5e","../5b/64"],(require,exports,module)=>{


/**
 * 设计区拖放插件
 */
let magix_1 = require("5c");
let const_1 = require("../5b/5e");
let stage_elements_1 = require("../5b/64");
let { State, has } = magix_1;
let toUnitPropNames = ['x', 'y', 'width', 'height'];
let watchDrop = (e) => {
    if (e['_mW'])
        return;
    e.preventDefault();
    let bindData = State.get('ml');
    let target = e.target;
    if (bindData) {
        let fieldInfo = bindData.field;
        let elementsMap = State.get('mm');
        let xCtrl = elementsMap[fieldInfo.use] || elementsMap.text;
        let props = const_1['mP'](fieldInfo.props) || {};
        for (let up of toUnitPropNames) {
            if (has(props, up)) {
                props[up] = const_1['l3'](props[up]);
            }
        }
        props.bind = {
            id: bindData.id,
            url: bindData.url,
            fields: [bindData.field]
        };
        State.set({
            'mb': [{
                    ctrl: xCtrl,
                    props
                }]
        });
        let fromEventOffset = State.get('mn');
        State.fire('mh', {
            node: target,
            pageX: e.pageX - fromEventOffset['_tO'],
            pageY: e.pageY - fromEventOffset['_oX']
        });
    }
};
let watchMove = (e) => {
    let bindData = State.get('ml');
    if (bindData) {
        let elementsMap = State.get('mm');
        let target = e.target;
        let lastHod;
        //尝试使用字段指定的类型或默认文本类型
        let xCtrl = elementsMap[bindData.field.use] || elementsMap.text;
        if (xCtrl) { //有控制器才进入处理
            if (!e['_mW']) {
                lastHod = stage_elements_1['l2'](target, xCtrl);
                ;
            }
            State.fire('me', {
                ctrl: xCtrl,
                stage: 1,
                hod: lastHod,
                node: target
            });
        }
    }
};
module.exports= {
    'l2'() {
        State.set({
            'mp': 1
        });
    },
    'l3'() {
        State.set({
            'mp': null
        });
    },
    'l5': watchMove,
    'l4': watchDrop
};

});