/*
    generate by magix-composer@1.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("designer/tojson",["magix5","./enum","./const"],(require,exports,module)=>{


let magix_1 = require("magix5");
let enum_1 = require("./enum");
let const_1 = require("./const");
let { State } = magix_1;
//过滤掉JSON中私有属性
let filter = (key, value) => {
    if (key.startsWith('@') ||
        key.startsWith('_')) {
        return undefined;
    }
    return value;
};
module.exports= () => {
    //设计区中所有元素
    let elements = State.get('@:{global#stage.elements~rs}');
    //页面数据
    let pageData = State.get('@:{global#stage.page~rs}');
    let pageCtrl = State.get('@:{global#stage.page.ctrl~rs}');
    let unit = State.get('@:{global#stage.unit~rs}');
    let page = {};
    //循环页面控制对象的props，只对配置有json的属性进行序列化
    for (let x of pageCtrl.props) {
        if (x.json) {
            let v = pageData[x.key];
            if (x['@:{is.scale.and.unit.field~rs}']) {
                v = const_1['@:{const#scale.to.unit~rs}'](v);
            }
            page[x.key] = v;
        }
    }
    let filters = [];
    //递归遍历所有元素
    let walk = (es, collection) => {
        for (let { type, ctrl, props, id } of es) {
            let m = {
                id,
                type,
                unit,
                props: {
                    readonly: props.readonly,
                    pinX: props.pinX,
                    pinY: props.pinY
                }
            };
            //遍历控制对象的props，只对指定有json的属性进行序列化
            for (let x of ctrl.props) {
                if (x['@:{json.encode~rs}']) { //属性['@:{json.encode}']方法，则交['@:{json.encode}']方法处理
                    x['@:{json.encode~rs}'](m.props, props);
                }
                else if (x.json) {
                    if (x.read) { //有读取拦截器，则交于拦截器处理
                        m.props[x.key] = x.read(props[x.key]);
                    }
                    else { //其它情况直接复制一份
                        m.props[x.key] = props[x.key];
                    }
                }
            }
            if (ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                for (let r of m.props.rows) {
                    for (let c of r.cols) {
                        if (c.elements) {
                            let elements = [];
                            walk(c.elements, elements);
                            c.elements = elements;
                        }
                    }
                }
            }
            collection.push(m);
        }
    };
    //开始遍历
    walk(elements, filters);
    //记录组合中的元素id
    let groups = State.get('@:{global#stage.elements.groups~rs}');
    let newGroups = [];
    let groupAdded = {};
    for (let p in groups) {
        let list = groups[p];
        if (!groupAdded[list]) {
            newGroups.push(list);
            groupAdded[list] = 1;
        }
    }
    let stage = {
        unit,
        page,
        groups: newGroups,
        elements: filters
    };
    return JSON.stringify(stage, filter, 2);
};

});