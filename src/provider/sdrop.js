/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("5g/sdrop",["51","../50/53","../50/5p"],(require,exports,module)=>{


/**
 * 设计区拖放插件
 */
let magix_1 = require("51");
let const_1 = require("../50/53");
let stage_elements_1 = require("../50/5p");
let { State, has } = magix_1;
let toUnitPropNames = ['x', 'y', 'width', 'height'];
let watchDrop = (e) => {
    if (e['_g8'])
        return;
    e.preventDefault();
    let bindData = State.get('gx');
    let target = e.target;
    if (bindData) {
        let fieldInfo = bindData.field;
        let elementsMap = State.get('gy');
        let xCtrl = elementsMap[fieldInfo.use] || elementsMap.text;
        let props = const_1['g1'](fieldInfo.props) || {};
        for (let up of toUnitPropNames) {
            if (has(props, up)) {
                props[up] = const_1['ge'](props[up]);
            }
        }
        props.bind = {
            id: bindData.id,
            url: bindData.url,
            fields: [bindData.field]
        };
        State.set({
            'gn': [{
                    ctrl: xCtrl,
                    props
                }]
        });
        let fromEventOffset = State.get('gz');
        State.fire('gt', {
            node: target,
            pageX: e.pageX - fromEventOffset['_n3'],
            pageY: e.pageY - fromEventOffset['_jb']
        });
    }
};
let watchMove = (e) => {
    let bindData = State.get('gx');
    if (bindData) {
        let elementsMap = State.get('gy');
        let target = e.target;
        let lastHod;
        //尝试使用字段指定的类型或默认文本类型
        let xCtrl = elementsMap[bindData.field.use] || elementsMap.text;
        if (xCtrl) { //有控制器才进入处理
            if (!e['_g8']) {
                lastHod = stage_elements_1['gd'](target, xCtrl);
                ;
            }
            State.fire('gq', {
                ctrl: xCtrl,
                stage: 1,
                hod: lastHod,
                node: target
            });
        }
    }
};
module.exports= {
    'gd'() {
        State.set({
            'gB': 1
        });
    },
    'ge'() {
        State.set({
            'gB': null
        });
    },
    'gg': watchMove,
    'gf': watchDrop
};

});