/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("4t/sdrop",["4e","../4d/4g","../4d/56"],(require,exports,module)=>{


/**
 * 设计区拖放插件
 */
let magix_1 = require("4e");
let const_1 = require("../4d/4g");
let stage_elements_1 = require("../4d/56");
let { State, has } = magix_1;
let toUnitPropNames = ['x', 'y', 'width', 'height'];
let watchDrop = (e) => {
    if (e['_ey'])
        return;
    e.preventDefault();
    let bindData = State.get('dY');
    let target = e.target;
    if (bindData) {
        let fieldInfo = bindData.field;
        let elementsMap = State.get('dZ');
        let xCtrl = elementsMap[fieldInfo.use] || elementsMap.text;
        let props = const_1['er'](fieldInfo.props) || {};
        for (let up of toUnitPropNames) {
            if (has(props, up)) {
                props[up] = const_1['dF'](props[up]);
            }
        }
        props.bind = {
            id: bindData.id,
            url: bindData.url,
            fields: [bindData.field]
        };
        State.set({
            'dO': [{
                    ctrl: xCtrl,
                    props
                }]
        });
        let fromEventOffset = State.get('d0');
        State.fire('dU', {
            node: target,
            pageX: e.pageX - fromEventOffset['_lq'],
            pageY: e.pageY - fromEventOffset['_gz']
        });
    }
};
let watchMove = (e) => {
    let bindData = State.get('dY');
    if (bindData) {
        let elementsMap = State.get('dZ');
        let target = e.target;
        let lastHod;
        //尝试使用字段指定的类型或默认文本类型
        let xCtrl = elementsMap[bindData.field.use] || elementsMap.text;
        if (xCtrl) { //有控制器才进入处理
            if (!e['_ey']) {
                lastHod = stage_elements_1['dE'](target, xCtrl);
                ;
            }
            State.fire('dR', {
                ctrl: xCtrl,
                stage: 1,
                hod: lastHod,
                node: target
            });
        }
    }
};
module.exports= {
    'dE'() {
        State.set({
            'd2': 1
        });
    },
    'dF'() {
        State.set({
            'd2': null
        });
    },
    'dH': watchMove,
    'dG': watchDrop
};

});