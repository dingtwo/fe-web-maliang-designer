/*
    generate by magix-composer@3.0.0
    https://github.com/thx/magix-composer
    author: https://github.com/xinglie
    loader:cmd_es
 */
define("53/index",["4e","../4d/4g","../4d/enum","../4p/index","./barcode/designer","./batch-barcode/designer","./batch-qrcode/designer","./batch-text/designer","./calendar/designer","./chart-bar/designer","./chart-line/designer","./chart-meter/designer","./chart-pie/designer","./circle/designer","./clock/designer","./data-celltable/designer","./data-coltable/designer","./data-dtable/designer","./data-ftable/designer","./data-repeater/designer","./data-richtext/designer","./form-checkbox/designer","./form-collect/designer","./form-dropdown/designer","./form-input/designer","./form-radio/designer","./formula/designer","./fx/designer","./hod-footer/designer","./hod-header/designer","./hod-hflex/designer","./hod-table/designer","./hod-vflex/designer","./html/designer","./image/designer","./line/designer","./ls-border-bg/designer","./ls-border-css2/designer","./ls-border-css4/designer","./ls-image/designer","./map/designer","./page/designer","./pager/designer","./progressbar/designer","./qrcode/designer","./rect/designer","./repeat/designer","./richtext/designer","./rod/designer","./text/designer","./todo/designer","./video/designer","./xsheet/designer"],(require,exports,module)=>{


let magix_1 = require("4e");
let const_1 = require("../4d/4g");
let enum_1 = require("../4d/enum");
let index_1 = require("../4p/index");
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
                        width: const_1['dF'](1400),
                        height: const_1['dF'](90)
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
                        width: const_1['dF'](400),
                        height: const_1['dF'](200)
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
                        width: const_1['dF'](358),
                        height: const_1['dF'](28)
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
                        width: const_1['dF'](442),
                        height: const_1['dF'](18)
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
                        width: const_1['dF'](960),
                        height: const_1['dF'](53)
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
applyStyle("rd-dO",".rd-hc{left:50%;top:50%}.rd-hc:before{height:5px;left:0;top:-2px;width:1px}.rd-hc:after,.rd-hc:before{background:#fa742b;content:\" \";position:absolute}.rd-hc:after{height:1px;left:-2px;top:0;width:5px}.rd-hd{border:1px dotted #ddd6}.rd-he{border-color:#fa742b;border-style:dashed}.rd-hf,.rd-hg{border-color:#999}.rd-hg{border-style:dashed}.rd-hh{border-color:#fa742b}.rd-hi{border-style:solid}.rd-hj{border-right:3px solid #fa742b;right:-2px}.rd-hk{border-left:3px solid #fa742b;left:-2px}.rd-hl{border-bottom:3px solid #fa742b;bottom:-2px}.rd-hm{border-top:3px solid #fa742b;top:-2px}.rd-hn{border-right:3px solid #fa742b;right:-2px}.rd-ho,.rd-hn{border-bottom:3px solid #fa742b;bottom:-2px}.rd-ho,.rd-hp{border-left:3px solid #fa742b;left:-2px}.rd-hp,.rd-hq{border-top:3px solid #fa742b;top:-2px}.rd-hq{border-right:3px solid #fa742b;right:-2px}.rd-hr{cursor:move;top:-20px}.rd-hs{background:#fa742b;border-radius:50%;height:7px;left:50%;top:-18px;transform:translateX(-50%);width:7px}.rd-hs:after{border-right:1px dashed #fa742b;content:\" \";height:12px;left:3px;position:absolute;top:6px;width:1px}.rd-ht{border:1px dotted #fa742b;border-radius:50%}.rd-hu{border:1px solid #fa742b;cursor:move;height:5px;width:5px}.rd-hv{background:#fa742b}.rd-hs{cursor:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABvUExURUdwTP///9XV1R0dHf///3Nzc////////////////1ZWVq+vr/T09PX19QQEBP///////8XFxf///////////wYGBv///+jo6P///4aGhqioqMzMzP///2BgYP///////////zExMf///wAAAP///xLps0AAAAAjdFJOUwCxxOdixRDmzSDMv8/Z+tz5wWpXWPk3zALCv8KnyXZVMNuNPnv3CwAAAJ1JREFUKM/NkckOwyAMRFkDBMhC9qWr+//fWCIV1WlzrjoXS36yxmMT8hdqqKoUvRAjMtw22kvecem1GjTuK1vApmI+wQMBbQFy5li+QQRaX4AtRX+vbntAJeRl9HTTx4TiwESs61DXNUPmVQeujzVrQwh43TTxpeRBslVfMUhbiXKWyiAwvnIsMcdyJkfJYdpNvG/ltDm+bjP+8KFP8ggL+zQLGxwAAAAASUVORK5CYII=\") 14 14,alias}");
State.set({
    'dZ': ElementsMap,
    'dS': designer_38
});
module.exports= {
    /**
     * 获取所有可用的元素分组
     */
    'dE'() {
        return Groups;
    },
    /**
     * 获取以type为key的所有元素对象
     */
    'dG'() {
        return ElementsMap;
    },
    /**
     * 根据json还原成设计区需要的数据对象
     * @param elements json对象
     * @param fillProps 是否填充属性
     */
    'dF'(elements, page, fillProps) {
        let map = {};
        let props = [];
        let flowConnectors = [];
        let flowProvider = State.get('dR');
        let scale = State.get('dF');
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
                        let newProps = ctrl['_eE'](0, 0); //先获取所有属性
                        e.props = mix(newProps, oldProps); //再把json中的属性覆盖到新属性上
                        if (page.readonly) { //如果page只读，则所有元素只读
                            e.props.readonly = true;
                        }
                        //如果有流程图且是连接线，则处理连接的id
                        if (flowProvider &&
                            flowProvider['dE'](e)) {
                            newProps.linkFromId = getNewId(newProps.linkFromId);
                            newProps.linkToId = getNewId(newProps.linkToId);
                            flowConnectors.push([ctrl, e.props]);
                        }
                        else if (ctrl['_eF']) { //计算属性
                            props.push([ctrl, e.props]);
                        }
                        //根据当前设计区进行缩放
                        for (let s of ctrl.props) {
                            if (isFunction(s['_ga'])) {
                                s['_ga'](e.props, scale);
                            }
                            else if (s['_fc']) {
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
                    if (ctrl.as & enum_1['dH']) {
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
            'dE': elements,
            'dF': map,
            'dG': props,
            'dH': idMap
        };
    }
};

});