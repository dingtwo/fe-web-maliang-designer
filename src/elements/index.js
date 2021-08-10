/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("elements/index",["magix5","../designer/const","../designer/enum","../i18n/index","./barcode/designer","./batch-barcode/designer","./batch-qrcode/designer","./batch-text/designer","./calendar/designer","./chart-bar/designer","./chart-line/designer","./chart-meter/designer","./chart-pie/designer","./circle/designer","./clock/designer","./data-celltable/designer","./data-coltable/designer","./data-dtable/designer","./data-ftable/designer","./data-repeater/designer","./data-richtext/designer","./form-checkbox/designer","./form-collect/designer","./form-dropdown/designer","./form-input/designer","./form-radio/designer","./formula/designer","./fx/designer","./hod-footer/designer","./hod-header/designer","./hod-hflex/designer","./hod-table/designer","./hod-vflex/designer","./html/designer","./image/designer","./line/designer","./ls-border-bg/designer","./ls-border-css2/designer","./ls-border-css4/designer","./ls-image/designer","./map/designer","./page/designer","./pager/designer","./progressbar/designer","./qrcode/designer","./rect/designer","./repeat/designer","./richtext/designer","./rod/designer","./text/designer","./todo/designer","./video/designer","./xsheet/designer"],(require,exports,module)=>{


let magix_1 = require("magix5");
let const_1 = require("../designer/const");
let enum_1 = require("../designer/enum");
let index_1 = require("../i18n/index");
let designer_1 = require("./barcode/designer");
let designer_2 = require("./batch-barcode/designer");
let designer_3 = require("./batch-qrcode/designer");
let designer_4 = require("./batch-text/designer");
let designer_5 = require("./calendar/designer");
let designer_6 = require("./chart-bar/designer");
let designer_7 = require("./chart-line/designer");
let designer_8 = require("./chart-meter/designer");
let designer_9 = require("./chart-pie/designer");
let designer_10 = require("./circle/designer");
let designer_11 = require("./clock/designer");
let designer_12 = require("./data-celltable/designer");
let designer_13 = require("./data-coltable/designer");
let designer_14 = require("./data-dtable/designer");
let designer_15 = require("./data-ftable/designer");
let designer_16 = require("./data-repeater/designer");
let designer_17 = require("./data-richtext/designer");
let designer_18 = require("./form-checkbox/designer");
let designer_19 = require("./form-collect/designer");
let designer_20 = require("./form-dropdown/designer");
let designer_21 = require("./form-input/designer");
let designer_22 = require("./form-radio/designer");
let designer_23 = require("./formula/designer");
let designer_24 = require("./fx/designer");
let designer_25 = require("./hod-footer/designer");
let designer_26 = require("./hod-header/designer");
let designer_27 = require("./hod-hflex/designer");
let designer_28 = require("./hod-table/designer");
let designer_29 = require("./hod-vflex/designer");
let designer_30 = require("./html/designer");
let designer_31 = require("./image/designer");
let designer_32 = require("./line/designer");
let designer_33 = require("./ls-border-bg/designer");
let designer_34 = require("./ls-border-css2/designer");
let designer_35 = require("./ls-border-css4/designer");
let designer_36 = require("./ls-image/designer");
let designer_37 = require("./map/designer");
let designer_38 = require("./page/designer");
let designer_39 = require("./pager/designer");
let designer_40 = require("./progressbar/designer");
let designer_41 = require("./qrcode/designer");
let designer_42 = require("./rect/designer");
let designer_43 = require("./repeat/designer");
let designer_44 = require("./richtext/designer");
let designer_45 = require("./rod/designer");
let designer_46 = require("./text/designer");
let designer_47 = require("./todo/designer");
let designer_48 = require("./video/designer");
let designer_49 = require("./xsheet/designer");
let { toMap, applyStyle, State, guid, has, isFunction, mix } = magix_1;
let Groups = [{
        icon: '&#xe61d;',
        title: '基础',
        subs: [{
                ctrl: designer_32
            }, {
                ctrl: designer_42
            }, {
                ctrl: designer_10
            }, {
                ctrl: designer_45
            }, {
                ctrl: designer_11
            }]
    }, {
        spliter: true
    }, {
        ctrl: designer_46
    }, {
        ctrl: designer_31
    }, {
        ctrl: designer_43
    }, {
        ctrl: designer_41
    }, {
        ctrl: designer_1
    }, {
        spliter: true
    }, {
        icon: '&#xe622;',
        title: '容器',
        subs: [{
                ctrl: designer_28
            }, {
                ctrl: designer_27
            }, {
                ctrl: designer_29
            }, {
                ctrl: designer_26
            }, {
                ctrl: designer_25
            }]
    }, {
        icon: '&#xe745;',
        title: '数据',
        subs: [{
                ctrl: designer_13
            }, {
                ctrl: designer_12
            }, {
                ctrl: designer_14
            }, {
                ctrl: designer_44
            }, {
                ctrl: designer_17
            }, {
                ctrl: designer_39
            }, {
                ctrl: designer_7
            }, {
                ctrl: designer_8
            }, {
                ctrl: designer_6
            }, {
                ctrl: designer_9
            }, {
                ctrl: designer_48
            }, {
                ctrl: designer_37
            }, {
                ctrl: designer_40
            }, {
                ctrl: designer_49
            }, {
                ctrl: designer_19
            }, {
                ctrl: designer_21
            }, {
                ctrl: designer_22
            }, {
                ctrl: designer_18
            }, {
                ctrl: designer_20
            }, {
                ctrl: designer_47
            }, {
                ctrl: designer_23
            }, {
                ctrl: designer_24
            }, {
                ctrl: designer_2
            }, {
                ctrl: designer_3
            }, {
                ctrl: designer_4
            }, {
                ctrl: designer_16
            }, {
                ctrl: designer_15
            }, {
                ctrl: designer_5
            }, {
                ctrl: designer_30
            }]
    }, {
        icon: '&#xe658;',
        title: '大屏',
        image: true,
        subs: [{
                ctrl: designer_36,
                image: './images/header_1_thumb.png',
                title: '标题1',
                props() {
                    return {
                        ename: '标题1',
                        image: './images/header_1.png',
                        width: const_1['@:{const#to.unit~rs}'](1400),
                        height: const_1['@:{const#to.unit~rs}'](90)
                    };
                }
            },
            {
                ctrl: designer_33,
                image: './images/border_1_thumb.png',
                title: '边框1',
                props() {
                    return {
                        ename: '边框1',
                        image: './images/border_1.png',
                        width: const_1['@:{const#to.unit~rs}'](400),
                        height: const_1['@:{const#to.unit~rs}'](200)
                    };
                }
            }, {
                ctrl: designer_36,
                image: './images/header_2.png',
                title: '标题2',
                props() {
                    return {
                        ename: '标题2',
                        image: './images/header_2.png',
                        width: const_1['@:{const#to.unit~rs}'](358),
                        height: const_1['@:{const#to.unit~rs}'](28)
                    };
                }
            }, {
                ctrl: designer_34,
                image: './images/border_2_thumb.png',
                title: '边框2'
            }, {
                ctrl: designer_36,
                image: './images/header_3.png',
                title: '标题3',
                props() {
                    return {
                        ename: '标题3',
                        image: './images/header_3.png',
                        width: const_1['@:{const#to.unit~rs}'](442),
                        height: const_1['@:{const#to.unit~rs}'](18)
                    };
                }
            }, {
                ctrl: designer_36,
                image: './images/header_4_thumb.png',
                title: '标题4',
                props() {
                    return {
                        ename: '标题4',
                        image: './images/header_4.png',
                        width: const_1['@:{const#to.unit~rs}'](960),
                        height: const_1['@:{const#to.unit~rs}'](53)
                    };
                }
            }, {
                ctrl: designer_35,
                image: './images/border_4_thumb.png',
                title: '边框4'
            },]
    }];
/**
 * 由所有元素type组成的对象
 */
let Elements = [];
for (let g of Groups) {
    if (g.ctrl) {
        Elements.push(g.ctrl);
    }
    else if (g.subs) {
        for (let s of g.subs) {
            Elements.push(s.ctrl);
        }
    }
}
let ElementsMap = toMap(Elements, 'type');
applyStyle("rd-_elements_index_less_","\n.rd-_elements_index_less_-cross {\nleft:50%;\ntop:50%;\n}\n.rd-_elements_index_less_-cross:before {\ncontent:' ';\nwidth:1px;\nheight:5px;\nposition:absolute;\nbackground:#47B34E;\nleft:0;\ntop:-2px;\n}\n.rd-_elements_index_less_-cross:after {\ncontent:' ';\nwidth:5px;\nheight:1px;\nposition:absolute;\nbackground:#47B34E;\nleft:-2px;\ntop:0;\n}\n.rd-_elements_index_less_-normal {\nborder:dotted 1px #ddd6;\n}\n.rd-_elements_index_less_-focus-line {\nborder-color:#47B34E;\nborder-style:dashed;\n}\n.rd-_elements_index_less_-grouped-locked-line,\n.rd-_elements_index_less_-locked-line {\nborder-color:#999;\n}\n.rd-_elements_index_less_-locked-line {\nborder-style:dashed;\n}\n.rd-_elements_index_less_-grouped-line {\nborder-color:#47B34E;\n}\n.rd-_elements_index_less_-grouped-self {\nborder-style:solid;\n}\n.rd-_elements_index_less_-right {\nborder-right:solid 3px #47B34E;\nright:-2px;\n}\n.rd-_elements_index_less_-left {\nborder-left:solid 3px #47B34E;\nleft:-2px;\n}\n.rd-_elements_index_less_-bottom {\nborder-bottom:solid 3px #47B34E;\nbottom:-2px;\n}\n.rd-_elements_index_less_-top {\nborder-top:solid 3px #47B34E;\ntop:-2px;\n}\n.rd-_elements_index_less_-right-bottom {\nborder-right:solid 3px #47B34E;\nborder-bottom:solid 3px #47B34E;\nright:-2px;\nbottom:-2px;\n}\n.rd-_elements_index_less_-left-bottom {\nborder-left:solid 3px #47B34E;\nborder-bottom:solid 3px #47B34E;\nleft:-2px;\nbottom:-2px;\n}\n.rd-_elements_index_less_-left-top {\nborder-left:solid 3px #47B34E;\nborder-top:solid 3px #47B34E;\nleft:-2px;\ntop:-2px;\n}\n.rd-_elements_index_less_-right-top {\nborder-right:solid 3px #47B34E;\nborder-top:solid 3px #47B34E;\nright:-2px;\ntop:-2px;\n}\n.rd-_elements_index_less_-icon {\ntop:-20px;\ncursor:move;\n}\n.rd-_elements_index_less_-rotate {\ntop:-18px;\nleft:50%;\ntransform:translateX(-50%);\nwidth:7px;\nheight:7px;\nborder-radius:50%;\nbackground:#47B34E;\n}\n.rd-_elements_index_less_-rotate::after {\ncontent:' ';\nheight:12px;\nwidth:1px;\nborder-right:#47B34E dashed 1px;\nposition:absolute;\nleft:3px;\ntop:6px;\n}\n.rd-_elements_index_less_-div-circle-path {\nborder:dotted 1px #47B34E;\nborder-radius:50%;\n}\n.rd-_elements_index_less_-svg-rect {\nborder:solid 1px #47B34E;\nwidth:5px;\nheight:5px;\ncursor:move;\n}\n.rd-_elements_index_less_-svg-rect-focus {\nbackground:#47B34E;\n}\n.rd-_elements_index_less_-rotate {\n  cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABvUExURUdwTP///9XV1R0dHf///3Nzc////////////////1ZWVq+vr/T09PX19QQEBP///////8XFxf///////////wYGBv///+jo6P///4aGhqioqMzMzP///2BgYP///////////zExMf///wAAAP///xLps0AAAAAjdFJOUwCxxOdixRDmzSDMv8/Z+tz5wWpXWPk3zALCv8KnyXZVMNuNPnv3CwAAAJ1JREFUKM/NkckOwyAMRFkDBMhC9qWr+//fWCIV1WlzrjoXS36yxmMT8hdqqKoUvRAjMtw22kvecem1GjTuK1vApmI+wQMBbQFy5li+QQRaX4AtRX+vbntAJeRl9HTTx4TiwESs61DXNUPmVQeujzVrQwh43TTxpeRBslVfMUhbiXKWyiAwvnIsMcdyJkfJYdpNvG/ltDm+bjP+8KFP8ggL+zQLGxwAAAAASUVORK5CYII=') 14 14, alias;\n}\n");
State.set({
    '@:{global#stage.elements.map~rs}': ElementsMap,
    '@:{global#stage.page.ctrl~rs}': designer_38
});
module.exports= {
    /**
     * 获取所有可用的元素分组
     */
    '@:{element.manager#element.list~rs}'() {
        return Groups;
    },
    /**
     * 获取以type为key的所有元素对象
     */
    '@:{element.manager#elements.map~rs}'() {
        return ElementsMap;
    },
    /**
     * 根据json还原成设计区需要的数据对象
     * @param elements json对象
     * @param fillProps 是否填充属性
     */
    '@:{element.manager#by.json~rs}'(elements, page, fillProps) {
        let map = {};
        let props = [];
        let flowConnectors = [];
        let flowProvider = State.get('@:{global#provider.of.flow~rs}');
        let scale = State.get('@:{global#stage.scale~rs}');
        let idMap = {};
        let getNewId = (id) => {
            if (!idMap[id]) {
                idMap[id] = guid('rde_');
            }
            return idMap[id];
        };
        let walk = es => {
            if (es) {
                for (let e of es) {
                    let ctrl = ElementsMap[e.type];
                    if (!ctrl) {
                        throw new Error('can not find:' + e.type);
                    }
                    e.ctrl = ctrl;
                    if (fillProps) { //填充属性，设计区需要的属性比序列化后的属性多
                        let oldProps = e.props;
                        let newProps = ctrl['@:{get.props~rs}'](0, 0); //先获取所有属性
                        e.props = mix(newProps, oldProps); //再把json中的属性覆盖到新属性上
                        if (page.readonly) { //如果page只读，则所有元素只读
                            e.props.readonly = true;
                        }
                        //如果有流程图且是连接线，则处理连接的id
                        if (flowProvider &&
                            flowProvider['@:{flow.provider#is.connector~rs}'](e)) {
                            newProps.linkFromId = getNewId(newProps.linkFromId);
                            newProps.linkToId = getNewId(newProps.linkToId);
                            flowConnectors.push([ctrl, e.props]);
                        }
                        else if (ctrl['@:{update.props~rs}']) { //计算属性
                            props.push([ctrl, e.props]);
                        }
                        //根据当前设计区进行缩放
                        for (let s of ctrl.props) {
                            if (isFunction(s['@:{stage.scale~rs}'])) {
                                s['@:{stage.scale~rs}'](e.props, scale);
                            }
                            else if (s['@:{is.scale.and.unit.field~rs}']) {
                                e.props[s.key] *= scale;
                            }
                        }
                        //增加元素面板的名称
                        if (!has(e.props, 'ename')) {
                            e.props.ename = index_1(ctrl.title);
                        }
                        e.id = getNewId(e.id);
                    }
                    map[e.id] = e;
                    //处理容器
                    if (ctrl.as & enum_1['@:{enum#as.hod~rs}']) {
                        for (let row of e.props.rows) {
                            for (let col of row.cols) {
                                if (col.elements) {
                                    walk(col.elements);
                                }
                            }
                        }
                    }
                }
            }
        };
        walk(elements);
        props.push(...flowConnectors);
        return {
            '@:{emanager#elements~rs}': elements,
            '@:{emanager#map~rs}': map,
            '@:{emanager#props~rs}': props,
            '@:{emanager#id.map~rs}': idMap
        };
    }
};

});